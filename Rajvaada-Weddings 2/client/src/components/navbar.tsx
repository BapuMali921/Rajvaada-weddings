import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 border-b ${
        isScrolled ? "bg-background border-border shadow-md py-4" : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="z-50">
          <div className="text-4xl md:text-5xl font-serif font-bold tracking-tighter text-primary cursor-pointer">
            Rajvaada<span className="text-gold">.</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-[10px] uppercase tracking-[0.5em] font-bold transition-all hover:text-gold hover:translate-y-[-2px] ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className={`px-12 py-4 border transition-all duration-700 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-gold-gradient hover:border-gold hover:text-white rounded-none ${
              isScrolled
                ? "border-primary/20 text-primary"
                : "border-white/20 text-white backdrop-blur-md"
            }`}
          >
            Inquire
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`${isScrolled || mobileMenuOpen ? "text-primary" : "text-white"}`}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-background z-40 flex flex-col justify-center items-center"
          >
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-3xl font-serif text-primary hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
