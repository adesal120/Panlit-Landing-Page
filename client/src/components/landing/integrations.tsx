import { motion } from "framer-motion";
import integrationsImg from "@assets/generated_images/panlit_integrations_dashboard_ui_mockup.png";

export function Integrations() {
  const logos = [
    { name: "Stripe", color: "text-[#635BFF]" },
    { name: "Paystack", color: "text-[#0BA4DB]" },
    { name: "Flutterwave", color: "text-[#FB9129]" },
    { name: "TripAdvisor", color: "text-[#00AF87]" },
    { name: "WhatsApp", color: "text-[#25D366]" },
    { name: "Google", color: "text-[#4285F4]" },
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
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-panlit-orange/20 to-blue-500/20 rounded-full blur-3xl opacity-30" />
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
              <img src={integrationsImg} alt="Integrations Dashboard" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
