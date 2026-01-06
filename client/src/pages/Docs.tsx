import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, Book, Lightbulb, ShieldCheck } from "lucide-react";

export default function Docs() {
  const sections = [
    {
      title: "Getting Started",
      icon: <Lightbulb className="w-6 h-6 text-accent" />,
      items: ["Installation Guide", "Quick Start", "Hardware Setup"]
    },
    {
      title: "Security Tools",
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      items: ["ESP8266 Deauther", "USB Nova", "WiFi Duck"]
    },
    {
      title: "Development",
      icon: <Book className="w-6 h-6 text-accent" />,
      items: ["API Reference", "Contributing", "Firmware Updates"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container-custom">
          <header className="mb-16">
            <h1 className="text-5xl font-black mb-4">DOCUMENTATION</h1>
            <div className="h-1 w-24 bg-accent"></div>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl font-light">
              Everything you need to know about our security tools and hardware.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-secondary/30 border border-border rounded-xl hover:border-accent/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-black flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                      <FileText className="w-4 h-4" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
