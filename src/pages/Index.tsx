import { useEffect, useState } from "react";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { ProductCard } from "@/components/ProductCard";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroLogo from "@/assets/hero-logo.png";
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
  return <div className="min-h-screen bg-background font-body">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 bg-background text-foreground overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.08),transparent_50%)]" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto -mt-20">
          <div className="animate-fade-in">
            <img src={heroLogo} alt="FIEND 4 DOPENESS" className="w-full max-w-2xl mx-auto mb-4 animate-scale-in" />
            <p className="text-xl md:text-2xl font-heading font-bold tracking-widest text-accent animate-fade-in mb-6" style={{
            animationDelay: '0.3s',
            animationFillMode: 'backwards'
          }}>
              ADDICTED TO GREATNESS
            </p>
            <div className="h-1 w-24 bg-accent mx-auto mb-8 animate-fade-in" style={{
            animationDelay: '0.5s',
            animationFillMode: 'backwards'
          }} />
            
            <p className="text-lg md:text-xl font-light leading-relaxed mb-12 text-muted-foreground max-w-3xl mx-auto">
              Streetwear and music by Los Angeles artist  — built around one iconic character and a lot of emotion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-bold text-base md:text-lg px-12 py-6 shadow-[0_0_30px_hsl(var(--accent)/0.3)] hover:shadow-[0_0_50px_hsl(var(--accent)/0.5)] transition-all duration-300 hover:scale-105" asChild>
                <Link to="/shop">Shop the Collection</Link>
              </Button>
              <Button size="lg" variant="outline" className="font-heading font-bold text-base md:text-lg px-12 py-6 hover:scale-105 transition-all duration-300" asChild>
                <Link to="/about">About & Music</Link>
              </Button>
            </div>
            <div className="mt-6">
              <a href="https://linktr.ee/zmearya" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors underline underline-offset-4">
                Listen to the Music →
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-border rounded-full flex justify-center pt-1.5 md:pt-2">
            <div className="w-1 h-2 bg-muted-foreground rounded-full" />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block">
              <h2 className="font-heading text-4xl md:text-6xl font-black tracking-tight mb-4">
                FEATURED FIENDS
              </h2>
              <div className="h-1 w-32 bg-accent mx-auto" />
            </div>
            <p className="mt-6 text-muted-foreground text-lg">Curated for the streets</p>
          </div>

          {loading ? <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div> : products.length === 0 ? <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-4">No products found</p>
              <p className="text-sm text-muted-foreground">
                Create a product by telling me what the product is, and what the price is.
              </p>
            </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.slice(0, 6).map(product => <ProductCard key={product.node.id} product={product} />)}
            </div>}
        </div>
      </section>

      {/* Brand Manifesto Section */}
      <section className="py-32 bg-muted text-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-muted via-accent/5 to-muted" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-8 animate-fade-in">
              <div>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
                  STATUS IS<br />EVERYTHING
                </h2>
                <div className="h-1 w-24 bg-accent mb-8" />
              </div>
              
              <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                <p className="text-muted-foreground">
                  We are the <span className="text-accent font-bold">fiends for dopeness</span>.
                </p>
                <p className="text-muted-foreground">
                  We create high-quality, <span className="text-foreground font-bold">unapologetic</span> designer 
                  streetwear that resonates with youth street culture.
                </p>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  This isn't just clothing.<br />It's a statement.
                </p>
              </div>
              
              <Link to="/about">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-bold text-base px-8 py-6 mt-4 hover:scale-105 transition-transform">
                  LEARN MORE
                </Button>
              </Link>
            </div>

            {products.length > 0 && products[0].node.images.edges[0] && <div className="order-1 md:order-2 relative h-[400px] md:h-[600px] group">
                <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300" />
                <img src={products[0].node.images.edges[0].node.url} alt={products[0].node.images.edges[0].node.altText || "FIEND 4 DOPENESS"} className="w-full h-full object-cover transition-all duration-500" />
                <div className="absolute inset-0 border-4 border-border group-hover:border-accent/50 transition-colors duration-300" />
              </div>}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">FIEND 4 DOPENESS</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Authentically unique streetwear for the culture.
              </p>
              <p className="text-xs text-muted-foreground">
                Artist and brand based in Los Angeles. Featured in{" "}
                <a href="https://voyagela.com/interview/life-work-zemmearija-caldwell-los-angeles/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors underline">
                  VoyageLA
                </a>
                {" · "}
                Listen to the music{" "}
                <a href="https://linktr.ee/zmearya" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors underline">
                  here
                </a>
                .
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">QUICK LINKS</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-accent transition-colors">Shop</Link></li>
                <li><Link to="/about" className="hover:text-accent transition-colors">About & Music</Link></li>
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
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 FIEND 4 DOPENESS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;