import { motion } from "framer-motion";
import { CreditCard, Mail, MessageCircle, Star, Globe, BarChart3 } from "lucide-react";

export function Integrations() {
  const logos = [
    { name: "Stripe", color: "text-[#635BFF]" },
    { name: "Paystack", color: "text-[#0BA4DB]" },
    { name: "Flutterwave", color: "text-[#FB9129]" },
    { name: "TripAdvisor", color: "text-[#00AF87]" },
    { name: "WhatsApp", color: "text-[#25D366]" },
    { name: "Google", color: "text-[#4285F4]" },
  ];

  const floatingIcons = [
    { icon: CreditCard, color: "text-blue-500", delay: 0 },
    { icon: Mail, color: "text-orange-500", delay: 0.2 },
    { icon: MessageCircle, color: "text-green-500", delay: 0.4 },
    { icon: Star, color: "text-yellow-500", delay: 0.6 },
    { icon: Globe, color: "text-teal-500", delay: 0.8 },
    { icon: BarChart3, color: "text-purple-500", delay: 1 },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-6">
              Connect everything, <br/>
              <span className="text-panlit-orange">manage from one place</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Connect seamlessly with payment gateways, accounting software, review platforms, and communication tools. No coding required. Everything syncs automatically.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {logos.map((logo, index) => (
                <motion.div 
                  key={logo.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-center p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:border-slate-200 hover:bg-white hover:shadow-sm transition-all"
                >
                  <span className={`font-bold text-lg ${logo.color}`}>{logo.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative h-96 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-panlit-orange/10 to-blue-500/10 rounded-3xl blur-3xl" />
            
            <div className="relative w-full h-full flex items-center justify-center">
              {floatingIcons.map((item, idx) => {
                const Icon = item.icon;
                const angle = (idx / floatingIcons.length) * Math.PI * 2;
                const radius = 80;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={idx}
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                    whileInView={{ x, y, opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: item.delay,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100
                    }}
                    animate={{
                      y: [y, y - 20, y],
                      x: [x, x + 10, x]
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 4 + idx * 0.3,
                      ease: "easeInOut",
                      delay: item.delay
                    }}
                    className="absolute"
                  >
                    <div className={`p-4 rounded-2xl bg-white border-2 border-slate-100 shadow-lg hover:shadow-xl transition-shadow`}>
                      <Icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute w-24 h-24 rounded-full border-2 border-dashed border-slate-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
