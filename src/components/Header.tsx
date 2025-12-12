import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartDrawer } from "@/components/CartDrawer";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "SHOP", path: "/shop" },
    { name: "COMMUNITY", path: "/community" },
    { name: "ABOUT & MUSIC", path: "/about" },
  ];

  const collections = [
    { name: "Crewnecks", path: "/shop?collection=crewnecks" },
    { name: "Hats", path: "/shop?collection=hats" },
    { name: "Hoodie", path: "/shop?collection=hoodie" },
    { name: "Jerseys", path: "/shop?collection=jerseys" },
    { name: "Polo Shirts", path: "/shop?collection=polo-shirts" },
    { name: "Crop Tops", path: "/shop?collection=crop-tops" },
    { name: "T-Shirts", path: "/shop?collection=t-shirts" },
    { name: "Outfits", path: "/shop?collection=outfits" },
    { name: "Sweatsuits", path: "/shop?collection=sweatsuits" },
    { name: "Sweatpants", path: "/shop?collection=sweatpants" },
    { name: "Muscle Shirts (Tank Tops)", path: "/shop?collection=muscle-shirts" },
    { name: "Medical Scrubs", path: "/shop?collection=medical-scrubs" },
    { name: "About Us", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="FIEND 4 DOPENESS" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-heading text-sm font-bold tracking-wide transition-colors ${
                  isActive(link.path)
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Cart & Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <CartDrawer />
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border max-h-[70vh] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 font-heading text-base font-bold tracking-wide transition-colors ${
                  isActive(link.path)
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Collections */}
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground font-heading font-bold mb-2">ALL COLLECTIONS</p>
              {collections.map((collection) => (
                <Link
                  key={collection.path}
                  to={collection.path}
                  className="block py-2 text-sm text-foreground hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {collection.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
