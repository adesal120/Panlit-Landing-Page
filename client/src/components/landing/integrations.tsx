import { motion } from "framer-motion";

const StripeLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z" fill="#635BFF"/>
  </svg>
);

const PaystackLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 36" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M88.6 8.3h6.5v2.4h-6.5v7.6h7.3v2.4h-10v-19h9.9v2.4h-7.2v4.2zm21.6 10c0 3.5-2.5 5.7-6.3 5.7s-6.3-2.2-6.3-5.7V8.3h2.7v9.8c0 2.1 1.3 3.3 3.6 3.3s3.6-1.2 3.6-3.3V8.3h2.7v10zm6.5-7.6h-4.2V8.3h11.1v2.4h-4.2v16.6h-2.7V10.7zm12.2 11.8c0-1.3.9-2.2 2.3-2.2 1.4 0 2.3.9 2.3 2.2 0 1.3-.9 2.2-2.3 2.2-1.4 0-2.3-.9-2.3-2.2z" fill="#011B33"/>
    <path d="M47.3 0L29.7 8.8v26.4l17.6-8.8V0zm-8.8 22.7c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z" fill="#00C3F7"/>
    <path d="M29.7 8.8L12.1 0v26.4l17.6 8.8V8.8zm-8.8 13.9c-3.8 0-6.9-3.1-6.9-6.9S17.1 9 20.9 9s6.9 3.1 6.9 6.9-3.1 6.8-6.9 6.8z" fill="#00C3F7" opacity=".6"/>
    <path d="M12.1 0L0 6.2v13.2l12.1 6.2V0zm-6 16.2c-1.9 0-3.4-1.5-3.4-3.4S4.2 9.4 6.1 9.4s3.4 1.5 3.4 3.4-1.6 3.4-3.4 3.4z" fill="#011B33"/>
  </svg>
);

const FlutterwaveLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M40.5 20L20 0v40l20.5-20z" fill="#F5A623"/>
    <path d="M20 0L0 20l20 20V0z" fill="#000"/>
    <text x="45" y="28" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#000">flutterwave</text>
  </svg>
);

const TripAdvisorLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 2500 2500" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="1250" cy="1250" r="1100" fill="none" stroke="#00AF87" strokeWidth="150"/>
    <path d="M650 950c-165.7 0-300 134.3-300 300s134.3 300 300 300 300-134.3 300-300-134.3-300-300-300zm0 450c-82.8 0-150-67.2-150-150s67.2-150 150-150 150 67.2 150 150-67.2 150-150 150z" fill="#000"/>
    <circle cx="650" cy="1250" r="100" fill="#00AF87"/>
    <path d="M1850 950c-165.7 0-300 134.3-300 300s134.3 300 300 300 300-134.3 300-300-134.3-300-300-300zm0 450c-82.8 0-150-67.2-150-150s67.2-150 150-150 150 67.2 150 150-67.2 150-150 150z" fill="#000"/>
    <circle cx="1850" cy="1250" r="100" fill="#00AF87"/>
    <path d="M1250 700c-110.5 0-200 89.5-200 200h400c0-110.5-89.5-200-200-200z" fill="#000"/>
  </svg>
);

const GoogleLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const MailchimpLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12.145 4.239c-4.376 0-7.92 3.545-7.92 7.92 0 4.376 3.544 7.92 7.92 7.92 4.375 0 7.92-3.544 7.92-7.92 0-4.375-3.545-7.92-7.92-7.92zm0 13.52c-3.084 0-5.6-2.515-5.6-5.6s2.516-5.6 5.6-5.6c3.085 0 5.601 2.515 5.601 5.6s-2.516 5.6-5.601 5.6zm-1.68-4.48c0 .464.376.84.84.84s.84-.376.84-.84-.376-.84-.84-.84-.84.376-.84.84zm3.36 0c0 .464.376.84.84.84s.84-.376.84-.84-.376-.84-.84-.84-.84.376-.84.84z" fill="#FFE01B"/>
    <path d="M18.481 9.635c-.205-1.558-1.007-2.956-2.257-3.934-.014-.011-.025-.019-.039-.028-1.322-1.036-2.982-1.634-4.761-1.634-2.101 0-4.021.849-5.404 2.223-1.383 1.373-2.236 3.27-2.236 5.349 0 2.078.853 3.975 2.236 5.349 1.383 1.373 3.303 2.222 5.404 2.222 1.78 0 3.439-.598 4.761-1.633.014-.01.025-.018.039-.028 1.25-.979 2.052-2.377 2.257-3.935.025-.187.038-.376.038-.567 0-.19-.013-.379-.038-.567z" fill="#FFE01B"/>
  </svg>
);

const WhatsAppLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366"/>
  </svg>
);

export function Integrations() {
  const logos = [
    { name: "Stripe", color: "text-[#635BFF]", component: StripeLogo },
    { name: "Paystack", color: "text-[#0BA4DB]", component: PaystackLogo },
    { name: "Flutterwave", color: "text-[#FB9129]", component: FlutterwaveLogo },
    { name: "TripAdvisor", color: "text-[#00AF87]", component: TripAdvisorLogo },
    { name: "Google Reviews", color: "text-[#4285F4]", component: GoogleLogo },
    { name: "WhatsApp", color: "text-[#25D366]", component: WhatsAppLogo },
  ];

  const floatingLogos = [
    { component: StripeLogo, name: "Stripe", delay: 0 },
    { component: PaystackLogo, name: "Paystack", delay: 0.2 },
    { component: FlutterwaveLogo, name: "Flutterwave", delay: 0.4 },
    { component: TripAdvisorLogo, name: "TripAdvisor", delay: 0.6 },
    { component: GoogleLogo, name: "Google Reviews", delay: 0.8 },
    { component: MailchimpLogo, name: "Mailchimp", delay: 1 },
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
              {logos.map((item, index) => {
                const LogoComponent = item.component;
                return (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-center p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:border-slate-200 hover:bg-white hover:shadow-sm transition-all group h-20"
                  >
                    <div className="flex items-center gap-3 w-full justify-center">
                      <LogoComponent className="h-8 w-auto max-w-[120px] object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                );
              })}
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
                const LogoComponent = item.component;

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
                    <div className={`p-4 rounded-2xl bg-white border-2 border-slate-100 shadow-lg hover:shadow-xl transition-shadow w-20 h-20 flex items-center justify-center`}>
                      <LogoComponent className="w-full h-full object-contain" />
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
