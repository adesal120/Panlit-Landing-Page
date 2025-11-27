import { motion } from "framer-motion";
import paystackLogo from "@assets/stock_images/official_paystack_lo_ba7b53c5.jpg";
import stripeLogo from "@assets/stock_images/official_stripe_logo_128f887a.jpg";
import flutterwaveLogo from "@assets/stock_images/official_flutterwave_bb3179e1.jpg";
import tripadvisorLogo from "@assets/stock_images/official_tripadvisor_a71dc9ee.jpg";
import googleReviewsLogo from "@assets/stock_images/official_google_revi_882e1dd0.jpg";
import mailchimpLogo from "@assets/stock_images/official_mailchimp_l_8a595f22.jpg";
import whatsappLogo from "@assets/stock_images/official_whatsapp_lo_f8b58d06.jpg";

export function Integrations() {
  const logos = [
    { name: "Stripe", color: "text-[#635BFF]", logo: stripeLogo },
    { name: "Paystack", color: "text-[#0BA4DB]", logo: paystackLogo },
    { name: "Flutterwave", color: "text-[#FB9129]", logo: flutterwaveLogo },
    { name: "TripAdvisor", color: "text-[#00AF87]", logo: tripadvisorLogo },
    { name: "Google Reviews", color: "text-[#4285F4]", logo: googleReviewsLogo },
    { name: "WhatsApp", color: "text-[#25D366]", logo: whatsappLogo },
  ];

  const floatingLogos = [
    { logo: stripeLogo, name: "Stripe", delay: 0 },
    { logo: paystackLogo, name: "Paystack", delay: 0.2 },
    { logo: flutterwaveLogo, name: "Flutterwave", delay: 0.4 },
    { logo: tripadvisorLogo, name: "TripAdvisor", delay: 0.6 },
    { logo: googleReviewsLogo, name: "Google Reviews", delay: 0.8 },
    { logo: mailchimpLogo, name: "Mailchimp", delay: 1 },
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
              {logos.map((item, index) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-center p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:border-slate-200 hover:bg-white hover:shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <img src={item.logo} alt={item.name} className="w-6 h-6 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                    <span className={`font-bold text-lg ${item.color}`}>{item.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative h-96 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-panlit-orange/10 to-blue-500/10 rounded-3xl blur-3xl" />
            
            <div className="relative w-full h-full flex items-center justify-center">
              {floatingLogos.map((item, idx) => {
                const angle = (idx / floatingLogos.length) * Math.PI * 2;
                const radius = 100;
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
                      y: [y, y - 25, y],
                      x: [x, x + 12, x]
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
                    <div className={`p-3 rounded-2xl bg-white border-2 border-slate-100 shadow-lg hover:shadow-xl transition-shadow`}>
                      <img 
                        src={item.logo} 
                        alt={item.name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute w-28 h-28 rounded-full border-2 border-dashed border-slate-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
