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
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
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

  // Define category keywords for matching
  const categoryKeywords: Record<string, string[]> = {
    'Crewnecks': ['crewneck', 'crew neck'],
    'Hats': ['hat', 'cap', 'beanie', 'bucket'],
    'Hoodies': ['hoodie', 'hoody'],
    'Jerseys': ['jersey'],
    'Polo Shirts': ['polo'],
    'Crop Tops': ['crop'],
    'T-Shirts': ['tee', 't-shirt', 'tshirt', 'shirt'],
    'Sweatsuits': ['sweatsuit', 'outfit', 'set'],
    'Sweatpants': ['sweatpants'],
    'Joggers': ['jogger', 'joggers'],
    'Tank Tops': ['tank', 'muscle'],
    'Medical Scrubs': ['scrub'],
  };

  // Get category for a product based on title
  const getProductCategory = (title: string): string | null => {
    const lowerTitle = title.toLowerCase();
    for (const [category, keywords] of Object.entries(categoryKeywords)) {
      if (keywords.some(kw => lowerTitle.includes(kw))) {
        return category;
      }
    }
    return null;
  };

  // Show all defined categories
  const availableCategories = useMemo(() => {
    return Object.keys(categoryKeywords);
  }, []);

  // Extract unique brands
  const availableBrands = useMemo(() => {
    const brands = new Set<string>();
    products.forEach(product => {
      if (product.node.vendor) {
        brands.add(product.node.vendor);
      }
    });
    return Array.from(brands).sort();
  }, [products]);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Exclude specific product (Digital Girl Sweatsuit)
    filtered = filtered.filter(product => 
      !product.node.title.includes("DIGITAL GIRL SWEATSUIT")
    );

    // Price filter
    filtered = filtered.filter(product => {
      const price = parseFloat(product.node.priceRange.minVariantPrice.amount);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Category filter - match by title keywords
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => {
        const productCategory = getProductCategory(product.node.title);
        return productCategory && selectedCategories.includes(productCategory);
      });
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product =>
        selectedBrands.includes(product.node.vendor)
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

    // Always push out of stock items to the end regardless of sort
    filtered.sort((a, b) => {
      const aInStock = a.node.variants.edges.some(v => v.node.availableForSale);
      const bInStock = b.node.variants.edges.some(v => v.node.availableForSale);
      
      if (aInStock && !bInStock) return -1;
      if (!aInStock && bInStock) return 1;
      return 0;
    });

    return filtered;
  }, [products, priceRange, selectedCategories, selectedBrands, showInStockOnly, sortBy]);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (priceRange[0] !== 0 || priceRange[1] !== maxPrice) count++;
    if (selectedCategories.length > 0) count++;
    if (selectedBrands.length > 0) count++;
    if (showInStockOnly) count++;
    if (sortBy !== "featured") count++;
    return count;
  }, [priceRange, maxPrice, selectedCategories, selectedBrands, showInStockOnly, sortBy]);

  const clearFilters = () => {
    setPriceRange([0, maxPrice]);
    setSelectedCategories([]);
    setSelectedBrands([]);
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

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const FilterContent = () => (
    <div className="space-y-6 animate-fade-in">
      {/* Sort */}
      <div className="space-y-3 hover-scale">
        <label className="text-sm font-heading font-bold tracking-wide">SORT BY</label>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="transition-all duration-300 hover:border-accent">
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

        {/* Brand */}
        {availableBrands.length > 0 && (
          <AccordionItem value="brand">
            <AccordionTrigger className="text-sm font-heading font-bold tracking-wide">
              BRAND
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3">
              {availableBrands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={() => toggleBrand(brand)}
                  />
                  <label htmlFor={`brand-${brand}`} className="text-sm cursor-pointer">
                    {brand}
                  </label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        )}

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
          className="w-full animate-scale-in hover-scale transition-all duration-300 hover:border-accent"
        >
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Page Header */}
        <div className="text-center mb-10 md:mb-16 animate-fade-up">
          <h1 className="font-heading text-3xl md:text-6xl font-black tracking-tight mb-3 md:mb-4">
            SHOP ALL
          </h1>
          <div className="h-1 w-16 md:w-24 bg-accent mx-auto mb-4 md:mb-6" />
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
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
            <aside className="hidden lg:block w-64 flex-shrink-0 animate-fade-in">
              <div className="sticky top-24 space-y-6">
                <div className="flex items-center justify-between animate-slide-in-right">
                  <h2 className="font-heading text-xl font-black tracking-tight">FILTERS</h2>
                  {activeFilterCount > 0 && (
                    <Badge variant="secondary" className="animate-scale-in">{activeFilterCount}</Badge>
                  )}
                </div>
                <FilterContent />
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Mobile Filter Button & Product Count */}
              <div className="flex items-center justify-between mb-8 animate-fade-in">
                <p className="text-sm text-muted-foreground font-heading tracking-wide transition-all duration-300">
                  {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? 'PRODUCT' : 'PRODUCTS'}
                </p>
                
                {/* Mobile Filter Button */}
                <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden relative hover-scale transition-all duration-300 hover:border-accent">
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Filters
                      {activeFilterCount > 0 && (
                        <Badge variant="secondary" className="ml-2 animate-scale-in">{activeFilterCount}</Badge>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-full sm:max-w-md flex flex-col">
                    <SheetHeader className="flex-shrink-0">
                      <SheetTitle className="font-heading text-xl font-black tracking-tight">
                        FILTERS
                      </SheetTitle>
                    </SheetHeader>
                    <div className="mt-6 overflow-y-auto flex-1 pr-2">
                      <FilterContent />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* Active Filter Tags */}
              {activeFilterCount > 0 && (
                <div className="flex flex-wrap gap-2 mb-6 animate-fade-in">
                  {(priceRange[0] !== 0 || priceRange[1] !== maxPrice) && (
                    <Badge variant="secondary" className="gap-1 animate-scale-in hover-scale transition-all duration-200 hover:bg-accent hover:text-accent-foreground">
                      ${priceRange[0]} - ${priceRange[1]}
                      <X
                        className="h-3 w-3 cursor-pointer transition-transform duration-200 hover:scale-125"
                        onClick={() => setPriceRange([0, maxPrice])}
                      />
                    </Badge>
                  )}
              {selectedCategories.map((category, index) => (
                <Badge 
                  key={category} 
                  variant="secondary" 
                  className="gap-1 animate-scale-in hover-scale transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {category}
                  <X 
                    className="h-3 w-3 cursor-pointer transition-transform duration-200 hover:scale-125" 
                    onClick={() => toggleCategory(category)}
                  />
                </Badge>
              ))}
              {showInStockOnly && (
                <Badge variant="secondary" className="gap-1 animate-scale-in hover-scale transition-all duration-200 hover:bg-accent hover:text-accent-foreground">
                  In Stock
                  <X 
                    className="h-3 w-3 cursor-pointer transition-transform duration-200 hover:scale-125" 
                    onClick={() => setShowInStockOnly(false)}
                  />
                </Badge>
              )}
                  {sortBy !== "featured" && (
                    <Badge variant="secondary" className="gap-1 animate-scale-in hover-scale transition-all duration-200 hover:bg-accent hover:text-accent-foreground">
                      {sortBy === "price-asc" && "Price: Low to High"}
                      {sortBy === "price-desc" && "Price: High to Low"}
                      {sortBy === "name-asc" && "Name: A-Z"}
                      {sortBy === "name-desc" && "Name: Z-A"}
                      <X
                        className="h-3 w-3 cursor-pointer transition-transform duration-200 hover:scale-125"
                        onClick={() => setSortBy("featured")}
                      />
                    </Badge>
                  )}
                </div>
              )}

              {/* Products Grid */}
              {filteredAndSortedProducts.length === 0 ? (
                <div className="text-center py-20 animate-fade-in">
                  <p className="text-muted-foreground text-lg mb-4">No products match your filters</p>
                  <Button variant="outline" onClick={clearFilters} className="hover-scale">
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
                  {filteredAndSortedProducts.map((product, index) => (
                    <div 
                      key={product.node.id}
                      className="animate-fade-in hover-scale"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 md:py-12 mt-12 md:mt-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-heading text-lg md:text-xl font-bold mb-3 md:mb-4">FIEND 4 DOPENESS</h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">
                Elevated cultural streetwear.
              </p>
              <p className="text-xs text-muted-foreground">
                Artist and brand based in Los Angeles. Featured in{" "}
                <a 
                  href="https://voyagela.com/interview/life-work-zemmearija-caldwell-los-angeles/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors underline"
                >
                  VoyageLA
                </a>
                {" · "}
                Listen to the music{" "}
                <a 
                  href="https://linktr.ee/zmearya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors underline"
                >
                  here
                </a>
                .
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm md:text-base mb-3 md:mb-4">QUICK LINKS</h4>
              <ul className="space-y-2 text-xs md:text-sm">
                <li><Link to="/shop" className="hover:text-accent transition-colors">Shop</Link></li>
                <li><Link to="/about" className="hover:text-accent transition-colors">About & Music</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm md:text-base mb-3 md:mb-4">SUPPORT</h4>
              <ul className="space-y-2 text-xs md:text-sm">
                <li><a href="#" className="hover:text-accent transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground">
            <p>&copy; 2025 FIEND 4 DOPENESS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
