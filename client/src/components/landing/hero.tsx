import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Calendar, Users, CreditCard, BarChart3 } from "lucide-react";

export function Hero() {
  const [word, setWord] = useState<"tourism" | "hospitality" | "experience">("tourism");

  useEffect(() => {
    const words: ("tourism" | "hospitality" | "experience")[] = ["tourism", "hospitality", "experience"];
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
              Digitise every part of your front-office and back-office operations from one complete platform. More than booking software - your business operating system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="bg-panlit-orange hover:bg-orange-600 text-white font-semibold text-lg h-14 px-8 rounded-full shadow-lg shadow-orange-900/20 transition-all hover:scale-105">
                Book a demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 font-semibold text-lg h-14 px-8 rounded-full backdrop-blur-sm">
                See how it works
              </Button>
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
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-all"
              >
                <Calendar className="w-12 h-12 text-panlit-orange mb-3" />
                <p className="text-white font-semibold">Calendar</p>
                <p className="text-xs text-slate-400 mt-1">Smart scheduling</p>
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-all"
              >
                <Users className="w-12 h-12 text-blue-400 mb-3" />
                <p className="text-white font-semibold">CRM</p>
                <p className="text-xs text-slate-400 mt-1">Customer insights</p>
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-all"
              >
                <CreditCard className="w-12 h-12 text-green-400 mb-3" />
                <p className="text-white font-semibold">Payments</p>
                <p className="text-xs text-slate-400 mt-1">Secure & instant</p>
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-all"
              >
                <BarChart3 className="w-12 h-12 text-purple-400 mb-3" />
                <p className="text-white font-semibold">Analytics</p>
                <p className="text-xs text-slate-400 mt-1">Real-time insights</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
