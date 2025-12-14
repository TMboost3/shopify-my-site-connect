import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { toast } from "sonner";
import promoBg from "@/assets/promo-bg.png";
import promoAudio from "@/assets/promo-audio.mp3";

const Snowflake = ({ style }: { style: React.CSSProperties }) => (
  <div 
    className="absolute text-white pointer-events-none animate-fall"
    style={style}
  >
    ❄
  </div>
);

export const PromoPopup = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const snowflakes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
    animationDuration: `${3 + Math.random() * 2}s`,
    fontSize: `${8 + Math.random() * 12}px`,
    opacity: 0.4 + Math.random() * 0.6,
  }));

  useEffect(() => {
    const hasSeenPromo = localStorage.getItem("hasSeenPromo");
    if (!hasSeenPromo) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (open) {
      audioRef.current = new Audio(promoAudio);
      audioRef.current.play().catch(console.error);
    } else if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("hasSeenPromo", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Discount code sent to your email!");
      handleClose();
    }
  };

  return (
    <>
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(400px) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-sm p-0 overflow-hidden border-0 bg-transparent">
          <div className="relative">
            {/* Snowflakes */}
            {snowflakes.map((flake) => (
              <Snowflake
                key={flake.id}
                style={{
                  left: flake.left,
                  animationDelay: flake.animationDelay,
                  animationDuration: flake.animationDuration,
                  fontSize: flake.fontSize,
                  opacity: flake.opacity,
                  top: '-20px',
                }}
              />
            ))}
            
            {/* Sparkle overlay */}
            <div className="absolute inset-0 pointer-events-none z-10">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 40}%`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>

            <img 
              src={promoBg} 
              alt="Get 10% off your first order" 
              className="w-full h-auto"
            />
            <button
              onClick={handleClose}
              className="absolute right-3 top-3 rounded-full bg-black/50 p-1.5 opacity-90 transition-opacity hover:opacity-100 focus:outline-none z-30"
            >
              <X className="h-5 w-5 text-white" />
              <span className="sr-only">Close</span>
            </button>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
              <h2 className="text-center text-white font-serif italic text-xl md:text-2xl mb-3 drop-shadow-lg" style={{ fontFamily: "'Georgia', serif" }}>
                It's beginning to look a lot like <span className="text-pink-300 font-bold not-italic">DOPENESS</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/95 border-0 text-black placeholder:text-gray-500"
                />
                <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold">
                  Claim My 10% Off
                </Button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full text-xs text-white/80 hover:text-white transition-colors"
                >
                  No thanks, I'll pay full price
                </button>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};