import { Link } from "wouter";
import { Terminal, Github, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4 bg-background/90 backdrop-blur-md border-b border-border" : "py-6 bg-transparent"}`}>
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2 font-mono font-bold text-lg md:text-xl tracking-tighter">
          <div className="relative flex items-center justify-center w-10 h-10 bg-black text-white rounded-none group-hover:bg-accent group-hover:text-black transition-colors duration-300">
            <Terminal className="w-5 h-5" />
          </div>
          <span>SPACEHUHN</span>
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden md:flex items-center gap-6 font-mono text-sm font-medium">
            <Link href="/blog" className="hover:text-accent transition-colors">BLOG</Link>
            <Link href="/projects" className="hover:text-accent transition-colors">PROJECTS</Link>
            <Link href="/about" className="hover:text-accent transition-colors">ABOUT</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">CONTACT</Link>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/spacehuhntech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://spacehuhn.store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-black text-white font-mono text-sm font-bold hover:bg-accent hover:text-black transition-all duration-300"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>STORE</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
