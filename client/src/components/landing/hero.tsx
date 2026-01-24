import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Calendar, FileText, CreditCard, Check, UserCheck, Bell, History, MessageSquare, Zap } from "lucide-react";

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
              <a href="https://dashboard.panlit.com/" target="_blank" rel="noopener noreferrer">
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
             {/* Floating Tasks Container */}
             <div className="relative w-full max-w-lg h-[600px] scale-90 sm:scale-100">
                
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-panlit-orange/20 to-blue-500/20 rounded-full blur-[100px]" />

                {/* Card 1: Guest CRM (Top Left) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-0 left-0 w-72 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 z-30 rotate-[-4deg] hover:rotate-0 transition-transform duration-300 hover:z-50"
                >
                  <div className="flex items-center justify-between mb-3 border-b border-slate-50 pb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                        <UserCheck size={16} />
                      </div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Guest Insight</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Arriving Today</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm border-2 border-white shadow-sm">
                        SJ
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-panlit-orange text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold border border-white">
                        VIP
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Sarah Jenkins</h4>
                      <p className="text-xs text-green-600 font-medium flex items-center gap-1">
                        <History size={10} /> Returning Guest (3rd Visit)
                      </p>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-2.5 rounded-lg border border-yellow-100 mb-2">
                    <p className="text-[10px] text-yellow-800 font-medium leading-tight">
                      ℹ️ Note: Prefers quiet room. Allergies: Peanuts.
                    </p>
                  </div>
                  <Button size="sm" className="w-full bg-slate-900 text-white h-7 text-xs">View Profile</Button>
                </motion.div>

                {/* Card 2: New Booking (Top Right) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-8 -right-4 w-64 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 z-20 rotate-[3deg] hover:rotate-0 transition-transform duration-300 hover:z-50"
                >
                  <div className="flex items-center justify-between mb-3 border-b border-slate-50 pb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                        <Calendar size={16} />
                      </div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">New Booking</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Just now</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm">
                      JD
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">John Doe</h4>
                      <p className="text-xs text-slate-500">Deluxe Ocean Suite • 3 Nights</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="w-full bg-slate-900 text-white h-7 text-xs">Confirm</Button>
                  </div>
                </motion.div>

                {/* Card 3: Digital Waiver (Middle Left) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute top-52 left-0 w-64 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 z-10 rotate-[2deg] hover:rotate-0 transition-transform duration-300 hover:z-50"
                >
                  <div className="flex items-center justify-between mb-3 border-b border-slate-50 pb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                        <FileText size={16} />
                      </div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Smart Waiver</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg border border-slate-100">
                       <div className="w-8 h-10 bg-white border border-slate-200 rounded flex items-center justify-center shadow-sm">
                          <span className="text-[8px] font-bold text-slate-400">PDF</span>
                       </div>
                       <div>
                          <p className="text-xs font-bold text-slate-700">Adventure Tour</p>
                          <p className="text-[10px] text-slate-400">Signed 10 mins ago</p>
                       </div>
                    </div>
                    <div className="flex items-center justify-between px-2">
                       <span className="text-[10px] text-slate-500 font-medium">Signature Verified</span>
                       <div className="flex items-center gap-1 text-green-600 text-[10px] font-bold bg-green-50 px-2 py-1 rounded-full">
                          <Check size={10} />
                          Valid
                       </div>
                    </div>
                  </div>
                </motion.div>

                {/* Card 4: AI Inquiry (Middle Right) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute top-48 right-0 w-64 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 z-20 rotate-[-3deg] hover:rotate-0 transition-transform duration-300 hover:z-50"
                >
                  <div className="flex items-center justify-between mb-3 border-b border-slate-50 pb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                        <MessageSquare size={16} />
                      </div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">AI Inquiry</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-50 p-2 rounded-lg text-xs text-slate-600">
                      Hi, is late check-in available?
                    </div>
                    <div className="relative">
                      <div className="bg-blue-50 p-2 rounded-lg text-xs text-blue-800 border border-blue-100">
                        <div className="flex items-center gap-1 mb-1 text-[10px] text-blue-500 font-bold uppercase">
                          <Zap size={10} /> AI Suggestion
                        </div>
                        Yes! Our front desk is open 24/7.
                      </div>
                    </div>
                    <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white h-7 text-xs gap-1">
                      <Check size={12} /> Send Reply
                    </Button>
                  </div>
                </motion.div>

                {/* Card 5: Payment Success (Bottom Center) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-20 left-1/2 -translate-x-1/2 w-80 bg-white rounded-2xl p-4 shadow-2xl border border-slate-100 z-40"
                >
                   <div className="absolute -top-3 right-6 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                      <Check size={12} /> Paid
                   </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                        <CreditCard size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium uppercase">Payment Received</p>
                        <h4 className="font-bold text-slate-900 text-xl">$450.00</h4>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-xs text-slate-600 font-medium">Stripe Payment</span>
                     </div>
                     <span className="text-xs text-slate-400">#INV-2024-001</span>
                  </div>
                </motion.div>

                {/* Floating Notification */}
                 <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, y: [0, -5, 0] }}
                    transition={{ delay: 1.5, duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 -right-8 bg-slate-900 text-white rounded-lg p-3 shadow-xl z-40 flex items-center gap-3 max-w-[200px]"
                 >
                    <div className="relative">
                      <Bell className="text-panlit-orange w-5 h-5" />
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-slate-900"></span>
                    </div>
                    <div className="text-xs">
                      <span className="font-bold block">Low Inventory</span>
                      <span className="text-slate-400">Only 2 rooms left!</span>
                    </div>
                 </motion.div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
