import { Header } from "@/components/Header";
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

const Community = () => {
  const communityImages = [
    { src: community6, alt: "Community member 6" },
    { src: community7, alt: "Community member 7" },
    { src: community8, alt: "Community member 8" },
    { src: community9, alt: "Community member 9" },
    { src: community10, alt: "Community member 10" },
    { src: community1, alt: "Community member 1" },
    { src: community2, alt: "Community member 2" },
    { src: community3, alt: "Community member 3" },
    { src: community4, alt: "Community member 4" },
    { src: community5, alt: "Community member 5" },
    { src: community11, alt: "Community member 11" },
    { src: community12, alt: "Community member 12" },
    { src: community13, alt: "Community member 13" },
    { src: community14, alt: "Community member 14" },
    { src: community15, alt: "Community member 15" },
    { src: community16, alt: "Community member 16" },
    { src: community17, alt: "Community member 17" },
    { src: community18, alt: "Community member 18" },
    { src: community19, alt: "Community member 19" },
    { src: community20, alt: "Community member 20" },
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {communityImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg bg-muted group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
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
