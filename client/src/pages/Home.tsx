import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { useProjects } from "@/hooks/use-projects";
import { ArrowRight, Cpu, Code, BookOpen, Terminal, Wifi, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Home() {
  const { data: projects, isLoading } = useProjects();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-60 md:pb-40 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 -z-10 skew-x-12 translate-x-1/4 hidden lg:block" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-20 left-10 text-[20rem] font-sans font-black text-black/[0.015] -z-10 pointer-events-none select-none tracking-tighter">
          HUHN
        </div>

        <div className="container-custom">
          <div className="flex flex-col items-center text-center gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl w-full"
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-10 border border-black/5 bg-white shadow-sm rounded-full mx-auto">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_var(--accent)]" />
                <span className="text-[10px] font-mono font-black uppercase tracking-widest text-muted-foreground">Est. 2016 // Security Research</span>
              </div>
              
              <div className="mb-12">
                <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-[0.8] font-sans mb-4">
                  SPACE<span className="text-transparent bg-clip-text bg-gradient-to-br from-black via-gray-700 to-gray-400">HUHN</span>
                </h1>
                <div className="flex items-center gap-4 justify-center">
                  <div className="h-px w-20 bg-black/10" />
                  <p className="text-accent font-mono text-sm font-black tracking-[0.4em] uppercase">Technologies</p>
                  <div className="h-px w-20 bg-black/10" />
                </div>
              </div>

              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1] mb-12 max-w-3xl mx-auto">
                OPEN SOURCE <span className="text-muted-foreground/40 italic font-serif">SECURITY</span> TOOLS FOR CURIOUS PEOPLE.
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-16 font-light mx-auto">
                Bridging the gap between hardware and cybersecurity with transparent, educational, and powerful tools.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6">
                <Link 
                  href="/store" 
                  className="px-10 py-5 bg-black text-white font-mono font-black hover:bg-accent hover:text-black transition-all duration-500 flex items-center gap-4 shadow-2xl shadow-black/20 rounded-xl hover:-translate-y-1 active:scale-95"
                >
                  EXPLORE GEAR
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/projects" 
                  className="px-10 py-5 border-2 border-black font-mono font-black hover:bg-secondary transition-all duration-300 rounded-xl hover:-translate-y-1 active:scale-95"
                >
                  VIEW PROJECTS
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative w-full max-w-lg mt-12"
            >
              <div className="aspect-square bg-black rounded-[4rem] flex items-center justify-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden group mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <Shield className="w-32 h-32 md:w-48 md:h-48 text-accent shadow-accent/50 filter drop-shadow-[0_0_20px_rgba(var(--accent),0.3)]" />
                <div className="absolute top-10 right-10 text-accent/10 font-mono text-xs rotate-90 tracking-[1em] hidden md:block">SECURE // RESEARCH</div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-secondary border border-border rounded-3xl flex items-center justify-center shadow-xl rotate-12 hover:rotate-0 transition-transform duration-500">
                <Terminal className="w-10 h-10 md:w-16 md:h-16 text-black" />
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 md:w-24 md:h-24 bg-accent rounded-full flex items-center justify-center shadow-2xl animate-bounce-slow">
                <Cpu className="w-8 h-8 md:w-12 md:h-12 text-black" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy / Features Section */}
      <section className="py-24 bg-black text-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <div className="w-16 h-16 bg-white/10 flex items-center justify-center border border-white/20">
                <Cpu className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-mono font-bold">Open Hardware</h3>
              <p className="text-white/60 leading-relaxed">
                We believe in transparent technology. Our hardware designs are open source, allowing you to study, modify, and build them yourself.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="w-16 h-16 bg-white/10 flex items-center justify-center border border-white/20">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-mono font-bold">Education First</h3>
              <p className="text-white/60 leading-relaxed">
                Our tools are designed to teach, not just to use. We provide extensive documentation and tutorials to help you understand the "how" and "why".
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="w-16 h-16 bg-white/10 flex items-center justify-center border border-white/20">
                <Code className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-mono font-bold">Community Driven</h3>
              <p className="text-white/60 leading-relaxed">
                Join a global community of makers, hackers, and security enthusiasts. Share your modifications and learn from others.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">FEATURED PROJECTS</h2>
              <div className="h-1 w-24 bg-accent"></div>
            </div>
            <a href="https://github.com/spacehuhntech" className="group flex items-center gap-2 font-mono text-sm font-bold uppercase hover:text-accent transition-colors">
              View all on GitHub 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-[500px] bg-secondary animate-pulse border border-black/5" />
              ))}
            </div>
          ) : projects && projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-black/20">
              <Terminal className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-xl font-mono text-muted-foreground">No projects found.</p>
              <p className="text-sm text-muted-foreground mt-2">Seed the database to see projects here.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="py-24 border-t border-border">
        <div className="container-custom">
          <div className="bg-black text-white p-8 md:p-16 relative overflow-hidden">
            <Wifi className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5" />
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold font-mono mb-6">Stay Connected</h2>
              <p className="text-white/70 mb-8 text-lg">
                Subscribe to our newsletter for project updates, tutorials, and new hardware releases. 
                No spam, just tech.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent font-mono transition-colors"
                />
                <button className="px-8 py-4 bg-accent text-white font-bold font-mono hover:bg-white hover:text-black transition-colors uppercase">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
