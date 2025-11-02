import { useEffect, useState } from "react";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { ProductCard } from "@/components/ProductCard";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="min-h-screen bg-background font-body">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-accent/20 to-black text-white overflow-hidden">
        <div className="relative z-20 text-center px-4">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black tracking-wider mb-4">
            FIEND 4 DOPENESS
          </h1>
          <p className="text-lg md:text-2xl font-light tracking-wide mb-8">
            AUTHENTICALLY UNIQUE STREETWEAR
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white font-heading font-bold text-lg px-8 py-6"
          >
            SHOP THE LATEST DROP
          </Button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-black tracking-wider text-center mb-12">
            FEATURED FIENDS
          </h2>

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.slice(0, 6).map((product) => (
                <ProductCard key={product.node.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Brand Manifesto Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {products.length > 0 && products[0].node.images.edges[0] && (
              <div className="relative h-96 md:h-full min-h-[400px]">
                <img 
                  src={products[0].node.images.edges[0].node.url}
                  alt={products[0].node.images.edges[0].node.altText || "FIEND 4 DOPENESS"}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-black tracking-wider">
                STATUS IS EVERYTHING
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  We are the <span className="font-bold">fiends for dopeness</span>.
                </p>
                <p>
                  We create high-quality, <span className="font-bold">unapologetic</span> designer 
                  streetwear that resonates with youth street culture.
                </p>
                <p className="font-bold text-xl">
                  This isn't just clothing. It's a statement.
                </p>
              </div>
              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-foreground hover:bg-foreground hover:text-background font-heading font-bold"
                >
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">FIEND 4 DOPENESS</h3>
              <p className="text-sm text-gray-400">
                Authentically unique streetwear for the culture.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">QUICK LINKS</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-accent transition-colors">Shop</Link></li>
                <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">SUPPORT</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-accent transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 FIEND 4 DOPENESS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
