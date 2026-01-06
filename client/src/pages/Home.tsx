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
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary -z-10 skew-x-12 translate-x-20 hidden lg:block" />
        <div className="absolute bottom-20 left-10 text-9xl font-mono font-bold text-black/[0.02] -z-10 pointer-events-none select-none">
          HACK
        </div>

        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-black/10 bg-secondary/50 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wide text-muted-foreground">Open Source Security Tools</span>
            </div>
            
            <div className="mb-8 flex items-center gap-4">
              <div className="w-16 h-16 bg-black flex items-center justify-center rounded-xl shadow-xl">
                <Shield className="w-10 h-10 text-accent" />
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] font-sans">
                WE MAKE TOOLS FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500">CURIOUS PEOPLE.</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12 font-light">
              Explore the world of ethical hacking and cybersecurity with our open-source hardware and software.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/store" 
                className="px-8 py-4 bg-black text-white font-mono font-bold hover:bg-accent hover:text-black transition-all duration-300 flex items-center gap-3 shadow-lg shadow-black/10"
              >
                VISIT STORE
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/docs" 
                className="px-8 py-4 border-2 border-black font-mono font-bold hover:bg-secondary transition-colors duration-300"
              >
                READ DOCS
              </Link>
            </div>
          </motion.div>
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
