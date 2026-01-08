import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Github, Package, Download, Terminal, Cpu } from "lucide-react";

export default function Projects() {
  const categories = [
    {
      name: "Hardware",
      icon: <Package className="w-5 h-5" />,
      projects: ["ESP8266 Deauther", "USB Nova", "HackHeld Vega"]
    },
    {
      name: "PCB Designs",
      icon: <Cpu className="w-5 h-5" />,
      projects: ["Deauther Watch V3", "USB Nova S3", "HackHeld OLED Shield"]
    },
    {
      name: "Software",
      icon: <Terminal className="w-5 h-5" />,
      projects: ["Deauther V2", "WiFi Duck", "Spacehuhn Docs"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container-custom">
          <header className="mb-16 text-center">
            <h1 className="text-5xl font-black mb-4 tracking-tighter">PROJECTS</h1>
            <div className="h-1 w-24 bg-accent mx-auto"></div>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl font-light mx-auto">
              Open source tools and hardware designed for security testing and education.
            </p>
          </header>

          <div className="space-y-16">
            {categories.map((cat, idx) => (
              <motion.section
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-black flex items-center justify-center rounded-lg text-accent">
                    {cat.icon}
                  </div>
                  <h2 className="text-2xl font-black font-mono uppercase tracking-widest">{cat.name}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.projects.map((project) => (
                    <div key={project} className="p-6 bg-secondary/20 border border-border rounded-xl hover:border-accent/30 transition-all group">
                      <h3 className="text-xl font-bold mb-4">{project}</h3>
                      <div className="flex gap-4">
                        <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-black text-white text-xs font-mono font-bold rounded hover:bg-accent hover:text-black transition-colors">
                          <Github className="w-3 h-3" /> GITHUB
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-black/10 text-xs font-mono font-bold rounded hover:bg-secondary transition-colors">
                          <Download className="w-3 h-3" /> DOWNLOAD
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
