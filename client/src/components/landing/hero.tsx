import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import dashboardImg from "@assets/Screenshot 2025-11-27 at 21.17.00_1764279111186.png";

export function Hero() {
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
              Ready to supercharge your <span className="text-transparent bg-clip-text bg-gradient-to-r from-panlit-orange to-orange-300">tourism business?</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              No months of implementation. No team disruption. Start organizing bookings, tracking customers, and optimizing operations immediately.
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
                <span>14-day free trial</span>
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
            className="relative hidden lg:block"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl aspect-[16/10] group">
              <div className="absolute inset-0 bg-gradient-to-tr from-panlit-orange/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img 
                src={dashboardImg} 
                alt="Panlit Dashboard" 
                className="w-full h-full object-cover object-top rounded-xl transform transition-transform duration-700 group-hover:scale-[1.02]" 
              />
              
              {/* Floating UI Elements for depth */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border border-slate-100 max-w-xs hidden xl:block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Booking Status</p>
                    <p className="text-sm font-bold text-slate-900">Confirmed</p>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-full" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
