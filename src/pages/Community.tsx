import { useState } from "react";
import { Header } from "@/components/Header";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, Download } from "lucide-react";
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
import community21 from "@/assets/community-21.png";
import community22 from "@/assets/community-22.png";
import community23 from "@/assets/community-23.png";
import community24 from "@/assets/community-24.png";
import community25 from "@/assets/community-25.png";
import community26 from "@/assets/community-26.png";
import community27 from "@/assets/community-27.png";
import community28 from "@/assets/community-28.png";
import community29 from "@/assets/community-29.png";
import community30 from "@/assets/community-30.png";
import community31 from "@/assets/community-31.png";
import community32 from "@/assets/community-32.png";
import community33 from "@/assets/community-33.png";
import community34 from "@/assets/community-34.png";
import community35 from "@/assets/community-35.png";
import community36 from "@/assets/community-36.png";
import community37 from "@/assets/community-37.png";
import community38 from "@/assets/community-38.png";
import community39 from "@/assets/community-39.png";
import community40 from "@/assets/community-40.png";
import community41 from "@/assets/community-41.png";

const Community = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const communityImages = [
    { src: community38, alt: "Community member 38", position: "object-[60%]" },
    { src: community25, alt: "Community member 25" },
    { src: community24, alt: "Community member 24" },
    { src: community27, alt: "Community member 27" },
    { src: community26, alt: "Community member 26" },
    { src: community34, alt: "Community member 34" },
    { src: community35, alt: "Community member 35" },
    { src: community5, alt: "Community member 5" },
    { src: community32, alt: "Community member 32" },
    { src: community6, alt: "Community member 6" },
    { src: community8, alt: "Community member 8" },
    { src: community4, alt: "Community member 4" },
    { src: community39, alt: "Community member 39" },
    { src: community40, alt: "Community member 40" },
    { src: community41, alt: "Community member 41" },
    { src: community33, alt: "Community member 33" },
    { src: community36, alt: "Community member 36" },
    { src: community37, alt: "Community member 37" },
    { src: community28, alt: "Community member 28" },
    { src: community29, alt: "Community member 29" },
    { src: community30, alt: "Community member 30" },
    { src: community21, alt: "Community member 21" },
    { src: community22, alt: "Community member 22" },
    { src: community23, alt: "Community member 23" },
    { src: community15, alt: "Community member 15" },
    { src: community20, alt: "Community member 20" },
    { src: community7, alt: "Community member 7" },
    { src: community9, alt: "Community member 9" },
    { src: community10, alt: "Community member 10" },
    { src: community11, alt: "Community member 11" },
    { src: community12, alt: "Community member 12" },
    { src: community13, alt: "Community member 13" },
    { src: community14, alt: "Community member 14" },
    { src: community16, alt: "Community member 16" },
    { src: community17, alt: "Community member 17" },
    { src: community18, alt: "Community member 18" },
    { src: community19, alt: "Community member 19" },
    { src: community2, alt: "Community member 2" },
    { src: community1, alt: "Community member 1" },
  ];

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? communityImages.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === communityImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  const handleDownload = async () => {
    if (selectedIndex === null) return;
    const image = communityImages[selectedIndex];
    const response = await fetch(image.src);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fiend-community-${selectedIndex + 1}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Background */}
      <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={community3} 
            alt="Community" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-4xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tight">
            THE COMMUNITY
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Join the movement. Connect with fellow fiends who are addicted to greatness.
          </p>
        </div>
      </section>

      {/* More Than A Brand Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="font-heading text-3xl md:text-5xl font-black tracking-tight mb-4">
                  MORE THAN A BRAND
                </h2>
                <div className="h-1 w-24 bg-accent" />
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We're a family of dreamers, creators, and go-getters who believe in the power of community. 
                Every piece you wear connects you to a movement that celebrates authenticity, hustle, and 
                the relentless pursuit of dopeness. This isn't just fashion—it's a lifestyle, a mindset, 
                and a statement that you're part of something bigger.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Tag us in your fits using <span className="text-accent font-bold">#fiend4dopeness</span> for 
                a chance to be featured in our community gallery.
              </p>
            </div>
            
            {/* Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <img 
                src={community3} 
                alt="FIEND Community" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-4 border-accent/20" />
            </div>
          </div>
        </div>
      </section>
      
      <main className="container mx-auto px-3 md:px-4 py-8 md:py-20">
        {/* Gallery Header */}
        <section className="text-center mb-8 md:mb-16 animate-fade-in">
          <h2 className="font-heading text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            COMMUNITY GALLERY
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-4" />
          <p className="text-sm md:text-lg text-muted-foreground">
            Real fiends rocking real dopeness
          </p>
        </section>

        {/* Gallery Grid */}
        <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3">
            {communityImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg bg-muted group cursor-pointer"
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-cover ${image.position || 'object-[center_20%]'} transition-transform duration-300 group-hover:scale-110`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-10 md:mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-xs md:text-base text-muted-foreground mb-3 md:mb-4">
            Share your FIEND style and become part of our community
          </p>
          <a
            href="https://www.instagram.com/fiend4dopeness/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-heading font-bold text-sm md:text-base text-accent hover:text-accent/80 transition-colors"
          >
            Follow @fiend4dopeness on Instagram →
          </a>
        </section>
      </main>

      {/* Lightbox Modal */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
          <div className="absolute top-4 right-4 z-50 flex gap-2">
            <button
              onClick={handleDownload}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              title="Download image"
            >
              <Download className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => setSelectedIndex(null)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
          
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          {selectedIndex !== null && (
            <div className="flex items-center justify-center w-full h-[90vh]">
              <img
                src={communityImages[selectedIndex].src}
                alt={communityImages[selectedIndex].alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
          
          {selectedIndex !== null && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {selectedIndex + 1} / {communityImages.length}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Community;
