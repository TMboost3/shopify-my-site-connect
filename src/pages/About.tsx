import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutHero from "@/assets/about-hero.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />


      {/* Brand Story */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 text-lg leading-relaxed animate-fade-up">
            <h1 className="font-heading text-4xl md:text-5xl font-black tracking-tight mb-12">
              ABOUT FIEND 4 DOPENESS
            </h1>
            
            <p>
              Fiend 4 Dopeness is a Black-owned lifestyle brand built on resilience, reinvention, and a real obsession with excellence.
            </p>

            <p>
              Born and raised in South Los Angeles, the founder grew up in the long shadow of the 1980s drug epidemic that tore through Black communities. She saw up close how addiction, judgment, and labels could cling to the people she loved — how a whole story could get boiled down to two words: "dope fiend."
            </p>

            <p>
              She chose not to live under that label. She chose to flip it.
            </p>

            <p>
              Fiend 4 Dopeness takes that phrase and turns it into something powerful. It's not about being addicted to destruction anymore — it's about being hooked on greatness. On better decisions. On better habits. On showing up as your best self in your craft, your community, and your everyday life.
            </p>

            <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 md:p-12 rounded-lg border-l-4 border-accent my-12">
              <p className="font-heading text-2xl md:text-3xl font-black mb-8 text-accent">
                This brand is for:
              </p>

              <div className="space-y-6">
                <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                  The ones who were counted out but kept going anyway.
                </p>

                <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                  The underdogs who turned pain into purpose.
                </p>

                <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                  The kids of the struggle who chose discipline, creativity, and self-belief.
                </p>

                <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                  And anyone who simply loves the chase of becoming better — in life, art, and style.
                </p>
              </div>
            </div>

            <p>
              Fiend 4 Dopeness is a reminder that where you come from doesn't get to decide where you're going. We don't run from our story — we build on it.
            </p>

            <p className="font-bold text-xl mt-8">
              Not addicted to the problem. Addicted to the progress.
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

      {/* Music Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 text-lg leading-relaxed">
            <h2 className="font-heading text-3xl md:text-4xl font-black tracking-tight mb-8">
              MUSIC BEHIND THE BRAND
            </h2>
            
            <p>
              Alongside designing, Zemmearija is also a recording artist. The same energy that shows up in the graphics and character designs lives in her music — personal, expressive, and straight from her point of view. The brand lets you tap into both sides at once: the sound and the style.
            </p>

            <p className="text-xl font-bold">
              Tap in below to listen and support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-heading font-bold px-8 py-6 hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="https://linktr.ee/zmearya" target="_blank" rel="noopener noreferrer">
                  Listen & Stream Music
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="font-heading font-bold px-8 py-6 hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="https://linktr.ee/zmearya" target="_blank" rel="noopener noreferrer">
                  Buy Digital Music
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
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
              <p className="text-sm text-gray-400 mb-3">
                Authentically unique streetwear for the culture.
              </p>
              <p className="text-xs text-gray-500">
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
