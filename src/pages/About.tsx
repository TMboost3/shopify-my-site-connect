import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558769132-cb1aea3c0ca0?w=1920&q=80"
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4">
          <h1 className="font-heading text-4xl md:text-6xl font-black tracking-wider">
            ABOUT US
          </h1>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 text-lg leading-relaxed">
            <h2 className="font-heading text-3xl md:text-4xl font-black tracking-wider mb-8">
              THE FIEND 4 DOPENESS STORY
            </h2>
            
            <p>
              We are more than a streetwear brand. We are a <span className="font-bold">movement</span>, 
              a <span className="font-bold">statement</span>, and a <span className="font-bold">lifestyle</span>.
            </p>

            <p>
              Born from the streets and refined through design, FIEND 4 DOPENESS represents 
              the relentless pursuit of excellence. We create clothing for those who refuse 
              to blend in, for those who understand that <span className="font-bold text-xl">status is everything</span>.
            </p>

            <p>
              Our pieces are meticulously crafted with premium materials and attention to detail 
              that sets us apart. Each design tells a story, each stitch represents our commitment 
              to quality, and each piece is a declaration of authenticity.
            </p>

            <p className="font-bold text-xl border-l-4 border-accent pl-6 py-4">
              "We create high-quality, unapologetic designer streetwear that resonates with 
              youth street culture. This isn't just clothing. It's a statement."
            </p>

            <p>
              Join the movement. Wear your status. Be a fiend for dopeness.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-heading font-bold"
            >
              <Link to="/">SHOP NOW</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-black tracking-wider text-center mb-12">
            OUR VALUES
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <h3 className="font-heading text-xl font-bold">AUTHENTICITY</h3>
              <p className="text-muted-foreground">
                We stay true to our roots and never compromise on our vision.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="font-heading text-xl font-bold">QUALITY</h3>
              <p className="text-muted-foreground">
                Premium materials and craftsmanship in every piece we create.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="font-heading text-xl font-bold">CULTURE</h3>
              <p className="text-muted-foreground">
                Deeply connected to youth street culture and the community.
              </p>
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

export default About;
