import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import aboutHero from "@/assets/about-hero.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-center mb-12 md:mb-16 animate-fade-up">
            ABOUT
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* 3D Fiend Mascot */}
            <div className="order-2 md:order-1 flex justify-center animate-fade-up">
              <img 
                src={aboutHero} 
                alt="Fiend 4 Dopeness 3D Mascot" 
                className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
              />
            </div>
            
            {/* Brand Text */}
            <div className="order-1 md:order-2 space-y-6 text-base md:text-lg leading-relaxed animate-fade-up delay-100">
              <p>
                Fiend 4 Dopeness was created to redefine a word many of us grew up hearing. In the era it came from, "dope fiend" carried one meaning… This forward-thinking brand turns it into something powerful.
              </p>
              
              <p>
                The foundation of Fiend 4 Dopeness is greatness. It began with the belief that where you start does not limit who you can become. That vision shaped the brand into a statement of elevation, confidence, and personal evolution.
              </p>
              
              <p>
                Fiend 4 Dopeness speaks to those who want more. It resonates with anyone who rose beyond expectation and grew into something extraordinary. It's for people who feel a pull toward something greater and commit to becoming the most elevated version of themselves, regardless of their beginning.
              </p>
              
              <p className="font-heading text-xl md:text-2xl font-bold text-foreground">
                It's not about the origin. It's about the outcome.
              </p>
              
              <p className="font-heading text-xl md:text-2xl font-black text-accent">
                Dopeness isn't an image. It's a standard.
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
              <p className="text-sm text-gray-400 mb-3">
                Authentically unique streetwear for the culture.
              </p>
              <p className="text-xs text-gray-500">
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
                <li><Link to="/shop" className="hover:text-accent transition-colors">Shop</Link></li>
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
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 FIEND 4 DOPENESS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;