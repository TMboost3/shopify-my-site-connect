import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { toast } from "sonner";
import promoBg from "@/assets/promo-bg.png";
import promoAudio from "@/assets/promo-audio.mp3";

export const PromoPopup = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-sm p-0 overflow-hidden border-0 bg-transparent">
        <div className="relative">
          <img 
            src={promoBg} 
            alt="Get 10% off your first order" 
            className="w-full h-auto"
          />
          <button
            onClick={handleClose}
            className="absolute right-3 top-3 rounded-full bg-black/50 p-1.5 opacity-90 transition-opacity hover:opacity-100 focus:outline-none"
          >
            <X className="h-5 w-5 text-white" />
            <span className="sr-only">Close</span>
          </button>
          
          <div className="absolute bottom-0 left-0 right-0 p-4">
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
  );
};
