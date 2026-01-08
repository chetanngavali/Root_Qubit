import { Link, useLocation } from "wouter";
import { Terminal, Github, ShoppingBag, Shield, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/blog", label: "BLOG" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-4 bg-background/95 backdrop-blur-xl border-b border-border shadow-sm" : "py-8 bg-transparent"}`}>
      <div className="container-custom flex items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3 font-mono font-bold text-lg md:text-xl tracking-tighter relative z-50 flex-shrink-0">
          <div className="flex flex-col text-right">
            <span className="leading-none text-xl md:text-2xl font-black">SPACEHUHN</span>
            <span className="text-[8px] md:text-[10px] text-accent font-mono tracking-[0.2em] font-bold uppercase">Technologies</span>
          </div>
          <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-black text-white rounded-xl group-hover:bg-accent group-hover:text-black transition-all duration-500 shadow-lg shadow-black/10">
            <Shield className="w-5 h-5 md:w-6 md:h-6 text-accent group-hover:text-black" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-8 lg:gap-12">
          <div className="hidden lg:flex items-center gap-8 font-mono text-sm font-black">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`relative py-2 hover:text-accent transition-colors group ${location === link.href ? "text-accent" : ""}`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform transition-transform duration-300 ${location === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <a 
              href="https://github.com/spacehuhntech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 hover:bg-secondary rounded-xl transition-all hover:scale-110 active:scale-95 border border-transparent hover:border-border shadow-sm hidden md:flex"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <Link 
              href="/store" 
              className="flex items-center gap-3 px-4 md:px-6 py-2.5 md:py-3 bg-black text-white font-mono text-xs md:text-sm font-black hover:bg-accent hover:text-black transition-all duration-300 rounded-xl shadow-xl shadow-black/10 active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">STORE</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2.5 hover:bg-secondary rounded-xl transition-all relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/98 backdrop-blur-xl z-40 lg:hidden flex flex-col items-center justify-center gap-8 p-6"
          >
            <div className="flex flex-col items-center gap-6 w-full max-w-xs">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`text-3xl font-black font-sans tracking-tighter hover:text-accent transition-colors ${location === link.href ? "text-accent" : "text-foreground"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="h-px w-20 bg-border my-4" />
            
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/spacehuhntech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-sm font-black hover:text-accent transition-colors"
              >
                <Github className="w-6 h-6" />
                GITHUB
              </a>
              <Link 
                href="/store"
                className="flex items-center gap-2 font-mono text-sm font-black hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ShoppingBag className="w-6 h-6" />
                STORE
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
