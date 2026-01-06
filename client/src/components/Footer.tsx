import { Github, Twitter, Instagram, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-mono text-2xl font-bold mb-6">Spacehuhn Technologies</h2>
            <p className="text-primary-foreground/60 max-w-md leading-relaxed mb-8">
              Open source hacking tools for education and security testing. 
              Making the invisible visible since 2016.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/spacehuhntech" className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/spacehuhn" className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/spacehuhn" className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:support@spacehuhn.io" className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-mono font-bold mb-6 text-accent">Projects</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/60">
              <li><a href="#" className="hover:text-white transition-colors">ESP8266 Deauther</a></li>
              <li><a href="#" className="hover:text-white transition-colors">USB Nova</a></li>
              <li><a href="#" className="hover:text-white transition-colors">WiFi Duck</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HackHeld</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-mono font-bold mb-6 text-accent">Resources</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/60">
              <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/store" className="hover:text-white transition-colors">Shop</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/40">
          <p>© {new Date().getFullYear()} Spacehuhn Technologies. All rights reserved.</p>
          <div className="flex items-center gap-2">
             <span>Made with</span>
             <Heart className="w-3 h-3 text-red-500 fill-current" />
             <span>in Germany & around the world.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
