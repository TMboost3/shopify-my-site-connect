import { useEffect, useState, useMemo } from "react";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { ProductCard } from "@/components/ProductCard";
import { Header } from "@/components/Header";
import { Loader2, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const Shop = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
        
        // Calculate max price from products
        if (productsData.length > 0) {
          const prices = productsData.map(p => parseFloat(p.node.priceRange.minVariantPrice.amount));
          const max = Math.ceil(Math.max(...prices));
          setMaxPrice(max);
          setPriceRange([0, max]);
        }
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Extract unique categories
  const availableCategories = useMemo(() => {
    const categories = new Set<string>();
    products.forEach(product => {
      if (product.node.productType) {
        categories.add(product.node.productType);
      }
    });
    return Array.from(categories).sort();
  }, [products]);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Price filter
    filtered = filtered.filter(product => {
      const price = parseFloat(product.node.priceRange.minVariantPrice.amount);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product =>
        selectedCategories.includes(product.node.productType)
      );
    }

    // Stock filter
    if (showInStockOnly) {
      filtered = filtered.filter(product =>
        product.node.variants.edges.some(v => v.node.availableForSale)
      );
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) =>
          parseFloat(a.node.priceRange.minVariantPrice.amount) -
          parseFloat(b.node.priceRange.minVariantPrice.amount)
        );
        break;
      case "price-desc":
        filtered.sort((a, b) =>
          parseFloat(b.node.priceRange.minVariantPrice.amount) -
          parseFloat(a.node.priceRange.minVariantPrice.amount)
        );
        break;
      case "name-asc":
        filtered.sort((a, b) => a.node.title.localeCompare(b.node.title));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.node.title.localeCompare(a.node.title));
        break;
      default:
        // featured - keep original order
        break;
    }

    return filtered;
  }, [products, priceRange, selectedCategories, showInStockOnly, sortBy]);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (priceRange[0] !== 0 || priceRange[1] !== maxPrice) count++;
    if (selectedCategories.length > 0) count++;
    if (showInStockOnly) count++;
    if (sortBy !== "featured") count++;
    return count;
  }, [priceRange, maxPrice, selectedCategories, showInStockOnly, sortBy]);

  const clearFilters = () => {
    setPriceRange([0, maxPrice]);
    setSelectedCategories([]);
    setShowInStockOnly(false);
    setSortBy("featured");
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Sort */}
      <div className="space-y-3">
        <label className="text-sm font-heading font-bold tracking-wide">SORT BY</label>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="name-asc">Name: A-Z</SelectItem>
            <SelectItem value="name-desc">Name: Z-A</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Accordion type="single" collapsible defaultValue="price" className="w-full">
        {/* Price Range */}
        <AccordionItem value="price">
          <AccordionTrigger className="text-sm font-heading font-bold tracking-wide">
            PRICE RANGE
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <Slider
              min={0}
              max={maxPrice}
              step={1}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Category */}
        {availableCategories.length > 0 && (
          <AccordionItem value="category">
            <AccordionTrigger className="text-sm font-heading font-bold tracking-wide">
              CATEGORY
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3">
              {availableCategories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                  />
                  <label htmlFor={`category-${category}`} className="text-sm cursor-pointer">
                    {category}
                  </label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        )}

        {/* Availability */}
        <AccordionItem value="availability">
          <AccordionTrigger className="text-sm font-heading font-bold tracking-wide">
            AVAILABILITY
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="in-stock"
                checked={showInStockOnly}
                onCheckedChange={(checked) => setShowInStockOnly(checked as boolean)}
              />
              <label htmlFor="in-stock" className="text-sm cursor-pointer">
                In Stock Only
              </label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Clear Filters */}
      {activeFilterCount > 0 && (
        <Button
          variant="outline"
          onClick={clearFilters}
          className="w-full"
        >
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="font-heading text-5xl md:text-6xl font-black tracking-tight mb-4">
            SHOP ALL
          </h1>
          <div className="h-1 w-24 bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our complete collection of streetwear essentials
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg mb-4">No products found</p>
            <p className="text-sm text-muted-foreground">
              Create a product by telling me what the product is, and what the price is.
            </p>
          </div>
        ) : (
          <div className="flex gap-8">
            {/* Desktop Sidebar Filters */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-heading text-xl font-black tracking-tight">FILTERS</h2>
                  {activeFilterCount > 0 && (
                    <Badge variant="secondary">{activeFilterCount}</Badge>
                  )}
                </div>
                <FilterContent />
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Mobile Filter Button & Product Count */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-sm text-muted-foreground font-heading tracking-wide">
                  {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? 'PRODUCT' : 'PRODUCTS'}
                </p>
                
                {/* Mobile Filter Button */}
                <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden relative">
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Filters
                      {activeFilterCount > 0 && (
                        <Badge variant="secondary" className="ml-2">{activeFilterCount}</Badge>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-full sm:max-w-md">
                    <SheetHeader>
                      <SheetTitle className="font-heading text-xl font-black tracking-tight">
                        FILTERS
                      </SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterContent />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* Active Filter Tags */}
              {activeFilterCount > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {(priceRange[0] !== 0 || priceRange[1] !== maxPrice) && (
                    <Badge variant="secondary" className="gap-1">
                      ${priceRange[0]} - ${priceRange[1]}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => setPriceRange([0, maxPrice])}
                      />
                    </Badge>
                  )}
              {selectedCategories.map((category) => (
                <Badge key={category} variant="secondary" className="gap-1">
                  {category}
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => toggleCategory(category)}
                  />
                </Badge>
              ))}
              {showInStockOnly && (
                <Badge variant="secondary" className="gap-1">
                  In Stock
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => setShowInStockOnly(false)}
                  />
                </Badge>
              )}
                  {sortBy !== "featured" && (
                    <Badge variant="secondary" className="gap-1">
                      {sortBy === "price-asc" && "Price: Low to High"}
                      {sortBy === "price-desc" && "Price: High to Low"}
                      {sortBy === "name-asc" && "Name: A-Z"}
                      {sortBy === "name-desc" && "Name: Z-A"}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => setSortBy("featured")}
                      />
                    </Badge>
                  )}
                </div>
              )}

              {/* Products Grid */}
              {filteredAndSortedProducts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-muted-foreground text-lg mb-4">No products match your filters</p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredAndSortedProducts.map((product) => (
                    <ProductCard key={product.node.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
