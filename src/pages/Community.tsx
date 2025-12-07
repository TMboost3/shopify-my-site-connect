import { Header } from "@/components/Header";
import community1 from "@/assets/community-1.png";
import community2 from "@/assets/community-2.png";
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
  const communityImages = [
    { src: community38, alt: "Community member 38", position: "object-bottom" },
    { src: community39, alt: "Community member 39" },
    { src: community40, alt: "Community member 40" },
    { src: community41, alt: "Community member 41" },
    { src: community33, alt: "Community member 33" },
    { src: community34, alt: "Community member 34" },
    { src: community35, alt: "Community member 35" },
    { src: community36, alt: "Community member 36" },
    { src: community37, alt: "Community member 37" },
    { src: community28, alt: "Community member 28" },
    { src: community29, alt: "Community member 29" },
    { src: community30, alt: "Community member 30" },
    { src: community32, alt: "Community member 32" },
    { src: community27, alt: "Community member 27" },
    { src: community21, alt: "Community member 21" },
    { src: community22, alt: "Community member 22" },
    { src: community23, alt: "Community member 23" },
    { src: community24, alt: "Community member 24" },
    { src: community4, alt: "Community member 4" },
    { src: community26, alt: "Community member 26" },
    { src: community25, alt: "Community member 25" },
    { src: community6, alt: "Community member 6" },
    { src: community5, alt: "Community member 5" },
    { src: community15, alt: "Community member 15" },
    { src: community20, alt: "Community member 20" },
    { src: community7, alt: "Community member 7" },
    { src: community8, alt: "Community member 8" },
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <section className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">
            JOIN THE FIEND COMMUNITY
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              For a chance to be featured, post with
            </p>
            <p className="font-heading text-2xl md:text-3xl font-bold text-accent">
              #fiend4dopeness
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {communityImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg bg-muted group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-cover ${image.position || 'object-top'} transition-transform duration-300 group-hover:scale-110`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-muted-foreground mb-4">
            Share your FIEND style and become part of our community
          </p>
          <a
            href="https://www.instagram.com/explore/tags/fiend4dopeness/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-heading font-bold text-accent hover:text-accent/80 transition-colors"
          >
            View #fiend4dopeness on Instagram →
          </a>
        </section>
      </main>
    </div>
  );
};

export default Community;
