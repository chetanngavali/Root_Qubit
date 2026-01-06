import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ShoppingBag, Star, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Store() {
  const products = [
    {
      id: 1,
      name: "Deauther Watch V4",
      price: "$59.99",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80"
    },
    {
      id: 2,
      name: "USB Nova",
      price: "$24.99",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?w=800&q=80"
    },
    {
      id: 3,
      name: "HackHeld Vega",
      price: "$89.99",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1610492401150-a9370007886a?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container-custom">
          <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl font-black mb-4">STORE</h1>
              <div className="h-1 w-24 bg-accent"></div>
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl font-light">
                Professional hardware for security enthusiasts and ethical hackers.
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-border">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-mono font-bold">TOP RATED GEAR</span>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-secondary/20 border border-border rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden bg-black">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <span className="font-mono text-accent font-black">{product.price}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-6 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-accent' : ''}`} />
                    ))}
                    <span className="text-xs text-muted-foreground ml-2 font-mono">{product.rating}</span>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-accent hover:text-black font-mono font-bold py-6 group-hover:elevate transition-all">
                    ADD TO CART
                    <ShoppingBag className="w-4 h-4 ml-2" />
                  </Button>
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
