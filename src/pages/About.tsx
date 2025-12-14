import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutHero from "@/assets/about-hero.png";
const About = () => {
  return <div className="min-h-screen bg-background font-body">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-background z-10" />
        <img src={aboutHero} alt="Fiend 4 Dopeness Brand" className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex items-end justify-center pb-8 md:pb-20">
          <div className="text-center px-4 animate-fade-up">
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black tracking-widest text-white mb-6 drop-shadow-2xl" style={{
            textShadow: '0 0 40px rgba(0,0,0,0.95), 0 0 80px rgba(0,0,0,0.85), 2px 2px 4px rgba(0,0,0,1)'
          }}>
          </h1>
            <p className="text-xl md:text-2xl text-white font-medium max-w-2xl mx-auto" style={{
            textShadow: '0 0 30px rgba(0,0,0,0.9), 2px 2px 4px rgba(0,0,0,1)'
          }}>
              Not addicted to the problem. Addicted to the progress.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 text-base md:text-lg leading-relaxed animate-fade-up">
            <h2 className="font-heading text-3xl md:text-4xl font-black tracking-tight mb-8 text-accent">
              OUR STORY
            </h2>
            
            <p>
              Fiend 4 Dopeness was created to redefine a word many of us grew up hearing. In the era it came from, "dope fiend" carried one meaning… This forward-thinking brand turns it into something powerful.
            </p>

            <p>
              The foundation of Fiend 4 Dopeness is greatness. It began with the belief that where you start does not limit who you can become. That vision shaped the brand into a statement of elevation, confidence, and personal evolution.
            </p>

            <p>
              Fiend 4 Dopeness speaks to those who want more. It resonates with anyone who rose beyond expectation and grew into something extraordinary. It's for people who feel a pull toward something greater and commit to becoming the most elevated version of themselves, regardless of their beginning.
            </p>

            <p className="font-heading text-xl md:text-2xl font-black">
              It's not about the origin. It's about the outcome.
            </p>

            <p className="font-heading text-xl md:text-2xl font-black text-accent">
              Dopeness isn't an image. It's a standard.
            </p>

            <div className="pt-8">
              <Button size="lg" className="relative bg-accent hover:bg-white hover:text-accent text-white font-heading font-bold px-14 py-7 text-xl hover:scale-105 transition-all duration-500" asChild>
                <Link to="/shop">
                  SHOP THE COLLECTION
                </Link>
              </Button>
            </div>
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
                Alongside designing,  The founder is a song writer, rapper, and performing artist. The same energy that shows up in the graphics and character designs lives in her music... personal, expressive, and straight from her point of view. The brand lets you tap into both sides at once: the sound and the style.
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
                Elevated Cultural Streetwear
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
    </div>;
};
export default About;