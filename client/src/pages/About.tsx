import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { User, Code, Award, Coffee } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Projects Built", value: "20+", icon: <Code className="w-5 h-5" /> },
    { label: "Certifications", value: "10+", icon: <Award className="w-5 h-5" /> },
    { label: "Cups of Coffee", value: "∞", icon: <Coffee className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container-custom">
          <header className="mb-16">
            <h1 className="text-5xl font-black mb-4 tracking-tighter uppercase">About Me</h1>
            <div className="h-1 w-24 bg-accent"></div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="prose prose-xl dark:prose-invert max-w-none font-light leading-relaxed">
                <p>
                  I'm a security researcher and hardware enthusiast dedicated to making complex technology accessible. 
                  My journey started with a curiosity about how things work, which led me into the world of open-source security tools.
                </p>
                <p>
                  Through Spacehuhn Technologies, I develop hardware and software that helps people learn about 
                  cybersecurity through hands-on experience and experimentation.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-4 bg-secondary/30 rounded-xl border border-border text-center">
                    <div className="flex justify-center mb-2 text-accent">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-black mb-1">{stat.value}</div>
                    <div className="text-xs font-mono uppercase text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-square bg-black rounded-2xl overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <User className="w-32 h-32 text-accent/50" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-8 bg-accent text-black rounded-2xl font-black text-2xl rotate-3 shadow-xl">
                MAKER & HACKER
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
