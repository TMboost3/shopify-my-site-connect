import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { toast } from "sonner";
import promoBg from "@/assets/promo-bg.png";

export const PromoPopup = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const hasSeenPromo = localStorage.getItem("hasSeenPromo");
    if (!hasSeenPromo) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

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
      <DialogContent className="sm:max-w-md p-0 overflow-hidden border-0">
        <div 
          className="relative bg-cover bg-center bg-no-repeat min-h-[500px] flex flex-col justify-end p-6"
          style={{ backgroundImage: `url(${promoBg})` }}
        >
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 rounded-full bg-black/50 p-1.5 opacity-90 transition-opacity hover:opacity-100 focus:outline-none"
          >
            <X className="h-5 w-5 text-white" />
            <span className="sr-only">Close</span>
          </button>
          
          <form onSubmit={handleSubmit} className="space-y-3 mt-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white/90 border-0 text-black placeholder:text-gray-500"
            />
            <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold">
              Claim My 10% Off
            </Button>
            <button
              type="button"
              onClick={handleClose}
              className="w-full text-sm text-white/80 hover:text-white transition-colors"
            >
              No thanks, I'll pay full price
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
