import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-black via-accent/10 to-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)]" />
        <div className="relative z-20 text-center px-4">
          <h1 className="font-heading text-5xl md:text-7xl font-black tracking-tight animate-fade-in">
            ABOUT US
          </h1>
          <div className="h-1 w-24 bg-accent mx-auto mt-6" />
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 text-lg leading-relaxed animate-fade-up">
            <h2 className="font-heading text-4xl md:text-5xl font-black tracking-tight mb-12">
              WELCOME TO Z&apos;S C.R.O.W.N. LLC
            </h2>
            
            <p>
              Your ultimate destination for <span className="text-accent font-bold">unique and stylish streetwear</span>. 
              As industry experts in the world of fashion, we take pride in offering a curated selection of clothing 
              that combines fashion-forward designs with unparalleled comfort. Our mission is to provide customers 
              with exclusive designs and impeccable detailing that will make them stand out from the crowd.
            </p>

            <p>
              At Z&apos;s C.R.O.W.N. LLC, we understand that <span className="font-bold">fashion is a form of self-expression</span>. 
              That&apos;s why we meticulously handpick each item in our collection to ensure that it embodies the perfect 
              blend of fashion and comfort. Whether you&apos;re looking for the Fiend 4 Dopeness Triple Greatness Hoodie 
              or the Fiend 4 Dopeness University Joggers, our products are designed to make you feel confident and stylish.
            </p>

            <p className="bg-muted p-8 border-l-4 border-accent">
              <span className="font-bold text-xl">What sets us apart</span> from other streetwear brands is our commitment 
              to uniqueness. We believe that fashion should be an extension of your personality, and that&apos;s why we offer 
              exclusive designs that you won&apos;t find anywhere else. Our team of industry experts stays ahead of the 
              latest trends to bring you cutting-edge styles that will make a statement.
            </p>

            <p>
              At Z&apos;s C.R.O.W.N. LLC, we are dedicated to providing our customers with an 
              <span className="font-bold"> exceptional shopping experience</span>. From the moment you browse our website 
              to the moment your order arrives at your doorstep, we strive for excellence in every aspect. Our customer 
              service team is always ready to assist you with any questions or concerns you may have, ensuring that your 
              satisfaction is our top priority.
            </p>

            <p className="text-xl md:text-2xl font-bold text-center py-8">
              Join us on this fashion journey and experience the perfect blend of style and comfort.
            </p>

            <p>
              Discover our exclusive designs and elevate your streetwear game to new heights. Stand out from the crowd 
              and embrace your unique style with confidence. Welcome to Z&apos;s C.R.O.W.N. LLC, where 
              <span className="font-bold text-accent"> fashion reigns supreme</span>.
            </p>
          </div>

          <div className="mt-16 text-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-heading font-bold px-12 py-6 hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/30"
              asChild
            >
              <Link to="/shop">SHOP NOW</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-black tracking-tight mb-4">
              OUR VALUES
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center space-y-4 p-6 hover:bg-muted/50 transition-colors rounded-lg">
              <h3 className="font-heading text-2xl font-bold">UNIQUENESS</h3>
              <p className="text-muted-foreground leading-relaxed">
                Exclusive designs that you won&apos;t find anywhere else, making you stand out from the crowd.
              </p>
            </div>
            <div className="text-center space-y-4 p-6 hover:bg-muted/50 transition-colors rounded-lg">
              <h3 className="font-heading text-2xl font-bold">QUALITY</h3>
              <p className="text-muted-foreground leading-relaxed">
                Premium materials and impeccable detailing in every piece we create.
              </p>
            </div>
            <div className="text-center space-y-4 p-6 hover:bg-muted/50 transition-colors rounded-lg">
              <h3 className="font-heading text-2xl font-bold">EXCELLENCE</h3>
              <p className="text-muted-foreground leading-relaxed">
                Exceptional shopping experience from browsing to delivery, with dedicated customer service.
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
                <li><Link to="/shop" className="hover:text-accent transition-colors">Shop</Link></li>
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
