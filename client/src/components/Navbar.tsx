import { Link, useLocation } from "wouter";
import { Terminal, Github, ShoppingBag, Shield } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/blog", label: "BLOG" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-4 bg-background/95 backdrop-blur-xl border-b border-border shadow-sm" : "py-8 bg-transparent"}`}>
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3 font-mono font-bold text-lg md:text-xl tracking-tighter">
          <div className="relative flex items-center justify-center w-12 h-12 bg-black text-white rounded-xl group-hover:bg-accent group-hover:text-black transition-all duration-500 shadow-lg shadow-black/10">
            <Shield className="w-6 h-6 text-accent group-hover:text-black" />
          </div>
          <div className="flex flex-col">
            <span className="leading-none text-2xl font-black">SPACEHUHN</span>
            <span className="text-[10px] text-accent font-mono tracking-[0.2em] font-bold">TECHNOLOGIES</span>
          </div>
        </Link>

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

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/spacehuhntech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 hover:bg-secondary rounded-xl transition-all hover:scale-110 active:scale-95 border border-transparent hover:border-border shadow-sm"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <Link 
              href="/store" 
              className="flex items-center gap-3 px-6 py-3 bg-black text-white font-mono text-sm font-black hover:bg-accent hover:text-black transition-all duration-300 rounded-xl shadow-xl shadow-black/10 active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">STORE</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
