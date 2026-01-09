import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="font-display text-2xl font-bold tracking-widest text-white">
          DTM LAB
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("services")} className="text-sm uppercase tracking-widest hover:text-white/70 transition-colors">Услуги</button>
          <button onClick={() => scrollToSection("about")} className="text-sm uppercase tracking-widest hover:text-white/70 transition-colors">О нас</button>
          <button onClick={() => scrollToSection("reviews")} className="text-sm uppercase tracking-widest hover:text-white/70 transition-colors">Отзывы</button>
          <button onClick={() => scrollToSection("contact")} className="text-sm uppercase tracking-widest hover:text-white/70 transition-colors">Контакты</button>
        </div>

        <div className="hidden md:flex items-center gap-4">
           <a href="tel:+79161330014" className="text-white hover:text-white/80 transition-colors">
            <Phone className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 p-4 md:hidden flex flex-col gap-4 text-center backdrop-blur-xl">
          <button onClick={() => scrollToSection("services")} className="text-lg uppercase tracking-widest py-2">Услуги</button>
          <button onClick={() => scrollToSection("about")} className="text-lg uppercase tracking-widest py-2">О нас</button>
          <button onClick={() => scrollToSection("reviews")} className="text-lg uppercase tracking-widest py-2">Отзывы</button>
          <button onClick={() => scrollToSection("contact")} className="text-lg uppercase tracking-widest py-2">Контакты</button>
        </div>
      )}
    </nav>
  );
}