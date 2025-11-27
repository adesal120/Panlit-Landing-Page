import { motion } from "framer-motion";
import stripeLogo from "../../assets/official_logos/stripe.webp";
import paystackLogo from "../../assets/official_logos/paystack.png";
import tripadvisorLogo from "../../assets/official_logos/tripadvisor.png";
import googleReviewsLogo from "../../assets/official_logos/google_reviews.png";
import whatsappLogo from "../../assets/official_logos/whatsapp.webp";
import flutterwaveLogo from "../../assets/official_logos/flutterwave-official.webp";
import mailchimpLogo from "../../assets/official_logos/mailchimp-black.png";

const BankTransferIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="15" y="20" width="70" height="45" rx="3" fill="none" stroke="#000" strokeWidth="2"/>
    <line x1="15" y1="32" x2="85" y2="32" stroke="#000" strokeWidth="1.5"/>
    <circle cx="30" cy="52" r="4" fill="#000"/>
    <path d="M40 52 L70 52" stroke="#000" strokeWidth="1.5"/>
    <path d="M65 42 L75 52 L65 62" fill="none" stroke="#0F766E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function Integrations() {
  const logos = [
    { name: "Stripe", logo: stripeLogo, isImage: true },
    { name: "Paystack", logo: paystackLogo, isImage: true },
    { name: "Flutterwave", logo: flutterwaveLogo, isImage: true },
    { name: "TripAdvisor", logo: tripadvisorLogo, isImage: true },
    { name: "Google Reviews", logo: googleReviewsLogo, isImage: true },
    { name: "WhatsApp", logo: whatsappLogo, isImage: true },
    { name: "Mailchimp", logo: mailchimpLogo, isImage: true },
    { name: "Bank Transfers", logo: null, isImage: false, component: BankTransferIcon },
  ];

  const floatingLogos = [
    { logo: stripeLogo, name: "Stripe", delay: 0, isImage: true },
    { logo: paystackLogo, name: "Paystack", delay: 0.12, isImage: true },
    { logo: flutterwaveLogo, name: "Flutterwave", delay: 0.24, isImage: true },
    { logo: tripadvisorLogo, name: "TripAdvisor", delay: 0.36, isImage: true },
    { logo: googleReviewsLogo, name: "Google Reviews", delay: 0.48, isImage: true },
    { logo: whatsappLogo, name: "WhatsApp", delay: 0.6, isImage: true },
    { logo: mailchimpLogo, name: "Mailchimp", delay: 0.72, isImage: true },
    { logo: null, name: "Bank Transfers", delay: 0.84, isImage: false, component: BankTransferIcon },
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
                    {item.isImage ? (
                      <img 
                        src={item.logo} 
                        alt={item.name} 
                        className="max-h-12 w-auto max-w-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
                      />
                    ) : (
                      <div className="w-12 h-12 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                        <item.component />
                      </div>
                    )}
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
                    className="absolute"
                  >
                    <motion.div 
                      className={`p-4 rounded-2xl bg-white border-2 border-slate-100 shadow-lg hover:shadow-xl transition-shadow w-24 h-24 flex items-center justify-center overflow-hidden`}
                      animate={{
                        y: [0, -15, 0],
                        x: [0, 8, 0]
                      }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 3 + idx * 0.2,
                        ease: "easeInOut"
                      }}
                    >
                      {item.isImage ? (
                        <img 
                          src={item.logo} 
                          alt={item.name} 
                          className="w-full h-full object-contain p-1"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center p-1">
                          <item.component />
                        </div>
                      )}
                    </motion.div>
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
