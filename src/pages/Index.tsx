import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { PromoPopup } from "@/components/PromoPopup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroLogo from "@/assets/hero-logo.png";
import community1 from "@/assets/community-1.png";
import community2 from "@/assets/community-2.png";
import community3 from "@/assets/community-3.png";
import community4 from "@/assets/community-4.png";
import community5 from "@/assets/community-5.png";
import community6 from "@/assets/community-6.png";
import community7 from "@/assets/community-7.png";
import community8 from "@/assets/community-8.png";
import community9 from "@/assets/community-9.png";
import community10 from "@/assets/community-10.png";
import community11 from "@/assets/community-11.png";
import community12 from "@/assets/community-12.png";
import community13 from "@/assets/community-13.png";
import community14 from "@/assets/community-14.png";
import community15 from "@/assets/community-15.png";
import community16 from "@/assets/community-16.png";
import community17 from "@/assets/community-17.png";
import community18 from "@/assets/community-18.png";
import community19 from "@/assets/community-19.png";
import community20 from "@/assets/community-20.png";

const communityImages = [community1, community2, community3, community4, community5, community6, community7, community8, community9, community10, community11, community12, community13, community14, community15, community16, community17, community18, community19, community20];

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % communityImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <PromoPopup />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-16 md:pb-20 bg-background text-foreground overflow-hidden">
        {/* Community images slideshow */}
        <div className="absolute inset-0 z-0">
          {communityImages.map((img, idx) => (
            <div
              key={idx}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: idx === currentImageIndex ? 0.4 : 0 }}
            >
              <img src={img} alt="Community" className="w-full h-full object-cover" />
            </div>
          ))}
          <div className="absolute inset-0 bg-background/50" />
        </div>

        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-accent/5 to-background/50 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.08),transparent_50%)] z-10" />
        
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] z-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto -mt-10 md:-mt-20">
          <div className="animate-fade-in">
            <img src={heroLogo} alt="FIEND 4 DOPENESS" className="w-full max-w-lg md:max-w-2xl mx-auto mb-4 animate-scale-in" />
            <p
              className="text-lg md:text-2xl font-heading font-bold tracking-widest text-accent animate-fade-in mb-4 md:mb-6"
              style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}
            >
              ADDICTED TO GREATNESS
            </p>
            <div
              className="h-1 w-16 md:w-24 bg-accent mx-auto mb-6 md:mb-8 animate-fade-in"
              style={{ animationDelay: '0.5s', animationFillMode: 'backwards' }}
            />
            
            <p className="text-base md:text-xl font-light leading-relaxed mb-8 md:mb-12 text-muted-foreground max-w-3xl mx-auto px-2">
              Dopeness by Design, Not Default.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-2">
              <Button
                size="lg"
                variant="outline"
                className="font-heading font-bold text-sm md:text-lg px-10 md:px-12 py-5 md:py-6 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                asChild
              >
                <Link to="/about">About & Music</Link>
              </Button>
            </div>
            <div className="mt-6">
              <a
                href="https://linktr.ee/zmearya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-accent transition-colors underline underline-offset-4"
              >
                Listen to the Music →
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-border rounded-full flex justify-center pt-1.5 md:pt-2">
            <div className="w-1 h-2 bg-muted-foreground rounded-full" />
          </div>
        </div>
      </section>

      {/* Brand Manifesto Section */}
      <section className="py-16 md:py-32 bg-muted text-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-muted via-accent/5 to-muted" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 animate-fade-in">
            <div>
              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 md:mb-6 leading-tight">
                FIEND 4 DOPENESS
              </h2>
              <div className="h-1 w-16 md:w-24 bg-accent mx-auto mb-6 md:mb-8" />
            </div>
            
            <p className="text-base md:text-xl leading-relaxed text-muted-foreground">
              Fiend 4 Dopeness began with one intention: to give new direction to a word that never told the whole truth. Born in Los Angeles during the height of the 1980s crack epidemic, the creator brings a perspective shaped by a word rooted in destruction, and transforms it into purpose. What was once spoken as a limitation now reflects a standard of greatness that is unmistakable and undeniable.
            </p>
            
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-bold text-sm md:text-base px-6 md:px-8 py-5 md:py-6 mt-4 hover:scale-105 transition-transform w-full sm:w-auto"
              >
                READ OUR STORY
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 md:py-12">
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
                <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-accent transition-colors">About & Music</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm md:text-base mb-3 md:mb-4">SUPPORT</h4>
              <ul className="space-y-2 text-xs md:text-sm">
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground">
            <p>&copy; 2025 Z's C.R.O.W.N. LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
