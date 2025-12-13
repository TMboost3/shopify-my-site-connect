import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutHero from "@/assets/about-hero.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-6xl">
          {/* 3D Fiend Mascot - Full Width Hero */}
          <div className="flex justify-center mb-12 animate-fade-up">
            <img 
              src={aboutHero} 
              alt="Fiend 4 Dopeness 3D Mascot" 
              className="w-full max-w-4xl h-auto object-contain"
            />
          </div>
          
          {/* Brand Text */}
          <div className="max-w-3xl mx-auto space-y-6 text-base md:text-lg leading-relaxed text-center animate-fade-up delay-100">
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
      </section>

      {/* Music Section */}
      <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-black text-white p-8 md:p-16 rounded-3xl shadow-2xl">
            <div className="max-w-3xl mx-auto space-y-8 text-center">
              <h2 className="font-heading text-4xl md:text-5xl font-black tracking-tight">
                THE SOUND
              </h2>
              
              <div className="h-1 w-24 bg-accent mx-auto" />
              
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                Alongside designing, the founder is a songwriter, rapper, and performing artist. The same energy that shows up in the graphics and character designs lives in her music... personal, expressive, and straight from her point of view. The brand lets you tap into both sides at once: the sound and the style.
              </p>

              <p className="text-xl md:text-2xl font-bold text-accent">
                Tap in below to listen and support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-heading font-bold px-10 py-6 text-lg hover:scale-105 transition-all duration-300 shadow-lg" asChild>
                  <a href="https://linktr.ee/zmearya" target="_blank" rel="noopener noreferrer">
                    Stream Music
                  </a>
                </Button>
                <Button size="lg" className="bg-white hover:bg-white/90 text-black font-heading font-bold px-12 py-6 text-lg hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:shadow-[0_0_40px_rgba(255,255,255,0.9)] border-2 border-white/50" asChild>
                  <a href="https://geo.music.apple.com/us/album/_/1804323440?app=itunes&at=1000lHKX&ct=linktree_http&i=1804323449&itscg=30200&itsct=lt_m&ls=1&mt=1" target="_blank" rel="noopener noreferrer">
                    Buy Digital Music
                  </a>
                </Button>
              </div>
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