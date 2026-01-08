import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Cpu, Layers, Maximize2, Zap } from "lucide-react";

export default function PCBDesigns() {
  const designs = [
    {
      title: "Deauther Watch V3",
      description: "A compact, wearable ESP8266 development board with integrated OLED, battery management, and custom antenna.",
      features: ["4-Layer PCB", "Impedance Controlled", "USB-C", "Power Path Management"],
      tags: ["ESP8266", "Wearable", "RF"]
    },
    {
      title: "USB Nova S3",
      description: "The next generation of USB HID injection. Powered by ESP32-S3 with native USB and microSD support.",
      features: ["Micro-USB Form Factor", "MicroSD Slot", "Native USB S3", "Internal Flash"],
      tags: ["ESP32-S3", "HID", "Security"]
    },
    {
      title: "HackHeld OLED Shield",
      description: "A modular display shield for the HackHeld system featuring a high-contrast SSD1306 OLED and tactile buttons.",
      features: ["Modular Pins", "High Contrast", "Tactile Feedback", "Low Power"],
      tags: ["Display", "Modular", "I2C"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container-custom">
          <header className="mb-16 text-center">
            <h1 className="text-5xl font-black mb-4 tracking-tighter uppercase">PCB Designs</h1>
            <div className="h-1 w-24 bg-accent mx-auto"></div>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl font-light mx-auto">
              Professional-grade circuit board designs for security research and IoT development.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designs.map((design, idx) => (
              <motion.div
                key={design.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col p-8 bg-secondary/30 border border-border rounded-xl hover:border-accent/50 transition-all hover:shadow-2xl hover:shadow-accent/5"
              >
                <div className="w-14 h-14 bg-black flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-xl shadow-black/10">
                  <Cpu className="w-7 h-7 text-accent" />
                </div>
                
                <h3 className="text-2xl font-black mb-4 font-mono uppercase tracking-tight">{design.title}</h3>
                <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                  {design.description}
                </p>

                <div className="space-y-4 mb-8 flex-1">
                  <div className="text-xs font-mono font-black text-accent uppercase tracking-widest">Specifications</div>
                  <ul className="grid grid-cols-1 gap-2">
                    {design.features.map(feature => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Layers className="w-3 h-3 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
                  {design.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-black text-accent text-[10px] font-mono font-bold rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
