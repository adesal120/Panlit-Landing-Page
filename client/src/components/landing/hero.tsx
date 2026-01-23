import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, BedDouble, Compass, Scissors, Star, MapPin } from "lucide-react";

export function Hero() {
  const [word, setWord] = useState<"tours" | "activities" | "experiences" | "accommodation" | "hotel">("tours");

  useEffect(() => {
    const words: ("tours" | "activities" | "experiences" | "accommodation" | "hotel")[] = ["tours", "activities", "experiences", "accommodation", "hotel"];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
      setWord(words[currentIndex]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative bg-panlit-dark pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-panlit-orange/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] left-[15%] w-full h-full opacity-5" 
             style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-panlit-orange animate-pulse"></span>
              <span className="text-sm font-medium text-white/90">New: Smart Forms & QR Check-in</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white leading-[1.1] mb-6">
              Ready to supercharge your <AnimatePresence mode="wait">
                <motion.span 
                  key={word}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-panlit-orange to-orange-300 inline-block"
                >
                  {word}
                </motion.span>
              </AnimatePresence> business?
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              The complete operating system for tourism, hospitality, and experience businesses. AI that digitises every part of your business—from pre-booking to post-booking.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="https://tally.so/r/nrPA95" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-panlit-orange hover:bg-orange-600 text-white font-semibold text-lg h-14 px-8 rounded-full shadow-lg shadow-orange-900/20 transition-all hover:scale-105 w-full sm:w-auto">
                  Book a demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="#demo-showcase" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 font-semibold text-lg h-14 px-8 rounded-full backdrop-blur-sm w-full sm:w-auto">
                  See how it works
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-panlit-orange" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-panlit-orange" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center h-full min-h-[500px]"
          >
             {/* Floating Cards Container */}
             <div className="relative w-full max-w-lg h-[500px]">
                
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-panlit-orange/20 to-blue-500/20 rounded-full blur-[100px]" />

                {/* Card 1: Hotel (Top Left) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-0 left-0 w-64 bg-white rounded-2xl p-3 shadow-xl border border-slate-100 z-20 rotate-[-6deg] hover:rotate-0 transition-transform duration-300"
                >
                  <div className="h-32 rounded-xl overflow-hidden mb-3 relative">
                     <img src="/src/assets/hero-hotel.jpg" alt="Hotel" className="w-full h-full object-cover" />
                     <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1 text-slate-900">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" /> 4.9
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      <BedDouble size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Ocean View Resort</h4>
                      <p className="text-xs text-slate-500">Accommodation</p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2: Tour (Top Right) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute top-10 right-0 w-60 bg-white rounded-2xl p-3 shadow-xl border border-slate-100 z-10 rotate-[6deg] hover:rotate-0 transition-transform duration-300"
                >
                  <div className="h-28 rounded-xl overflow-hidden mb-3">
                     <img src="/src/assets/hero-tour.jpg" alt="Tour" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                      <Compass size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Mountain Treks</h4>
                      <p className="text-xs text-slate-500">Tours & Activities</p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 3: Spa (Bottom Center) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-10 left-1/2 -translate-x-1/2 w-72 bg-white rounded-2xl p-3 shadow-2xl border border-slate-100 z-30"
                >
                   <div className="absolute -top-3 -right-3 bg-panlit-orange text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce">
                      New Booking!
                   </div>
                  <div className="h-32 rounded-xl overflow-hidden mb-3 relative">
                     <img src="/src/assets/hero-spa.jpg" alt="Spa" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                        <Scissors size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Serenity Spa</h4>
                        <p className="text-xs text-slate-500">Appointments</p>
                      </div>
                    </div>
                    <div className="text-right">
                       <p className="text-xs font-bold text-green-600">$120.00</p>
                       <p className="text-[10px] text-slate-400">Paid</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                 <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 right-10 bg-white rounded-lg p-2 shadow-lg z-0"
                 >
                    <MapPin className="text-red-500 w-6 h-6" />
                 </motion.div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
