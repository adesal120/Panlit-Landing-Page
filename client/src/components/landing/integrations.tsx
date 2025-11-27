import { motion } from "framer-motion";
import stripeLogo from "../../assets/official_logos/stripe.webp";
import paystackLogo from "../../assets/official_logos/paystack.png";
import tripadvisorLogo from "../../assets/official_logos/tripadvisor.png";
import googleReviewsLogo from "../../assets/official_logos/google_reviews.png";
import whatsappLogo from "../../assets/official_logos/whatsapp.webp";
import mailchimpOfficialLogo from "../../assets/official_logos/mailchimp-official.svg";

export function Integrations() {
  const logos = [
    { name: "Stripe", logo: stripeLogo },
    { name: "Paystack", logo: paystackLogo },
    { name: "Flutterwave", logo: paystackLogo },
    { name: "TripAdvisor", logo: tripadvisorLogo },
    { name: "Google Reviews", logo: googleReviewsLogo },
    { name: "WhatsApp", logo: whatsappLogo },
  ];

  const floatingLogos = [
    { logo: stripeLogo, name: "Stripe", delay: 0 },
    { logo: paystackLogo, name: "Paystack", delay: 0.2 },
    { logo: paystackLogo, name: "Flutterwave", delay: 0.4 },
    { logo: tripadvisorLogo, name: "TripAdvisor", delay: 0.6 },
    { logo: googleReviewsLogo, name: "Google Reviews", delay: 0.8 },
    { logo: mailchimpOfficialLogo, name: "Mailchimp", delay: 1 },
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
                  className="flex items-center justify-center p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:border-slate-200 hover:bg-white hover:shadow-sm transition-all group h-24"
                >
                  <div className="flex items-center gap-3 w-full justify-center h-full">
                    <img 
                      src={item.logo} 
                      alt={item.name} 
                      className="max-h-12 w-auto max-w-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
                    />
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
                const radius = 120;
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
                    whileInView={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 4 + idx * 0.3,
                      ease: "easeInOut",
                      delay: item.delay
                    }}
                    className="absolute"
                  >
                    <div className={`p-4 rounded-2xl bg-white border-2 border-slate-100 shadow-lg hover:shadow-xl transition-shadow w-24 h-24 flex items-center justify-center overflow-hidden`}>
                      <img 
                        src={item.logo} 
                        alt={item.name} 
                        className="w-full h-full object-contain p-1"
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
                className="absolute w-32 h-32 rounded-full border-2 border-dashed border-slate-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
