import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

import paystackLogo from "../assets/official_logos/paystack.png";
import stripeLogo from "../assets/official_logos/stripe.webp";
import flutterwaveLogo from "../assets/official_logos/flutterwave-official.webp";
import tripadvisorLogo from "../assets/official_logos/tripadvisor.png";
import googleReviewsLogo from "../assets/official_logos/google_reviews.png";
import mailchimpLogo from "../assets/official_logos/mailchimp-black.png";
import whatsappLogo from "../assets/official_logos/whatsapp.webp";

interface Integration {
  name: string;
  description: string;
  logo: string;
  category: string;
}

const integrations: Integration[] = [
  // Payments
  {
    name: "Paystack",
    description: "Accept payments from customers worldwide with secure payment processing",
    logo: paystackLogo,
    category: "Payments"
  },
  {
    name: "Stripe",
    description: "Accept payments globally with industry-leading payment processing",
    logo: stripeLogo,
    category: "Payments"
  },
  {
    name: "Flutterwave",
    description: "Accept payments across Africa with local payment methods",
    logo: flutterwaveLogo,
    category: "Payments"
  },

  // Reviews
  {
    name: "Google Reviews",
    description: "Collect and manage customer reviews on Google",
    logo: googleReviewsLogo,
    category: "Reviews"
  },
  {
    name: "TripAdvisor",
    description: "Sync your listings and manage reviews on TripAdvisor",
    logo: tripadvisorLogo,
    category: "Reviews"
  },

  // Email Marketing
  {
    name: "Mailchimp",
    description: "Sync customer lists and run email marketing campaigns",
    logo: mailchimpLogo,
    category: "Marketing"
  },

  // Communication
  {
    name: "WhatsApp",
    description: "Send notifications and updates to customers via WhatsApp",
    logo: whatsappLogo,
    category: "Communication"
  }
];

const categories = Array.from(new Set(integrations.map(i => i.category)));

export default function Integrations() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="bg-panlit-dark pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
          {/* Abstract Background Elements */}
          <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-panlit-orange/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
          </div>

          <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
                Connect your tools to Panlit
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Integrate with your favorite platforms to streamline operations, automate workflows, and manage your business more efficiently.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Integrations Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            {categories.map((category, categoryIdx) => {
              const categoryIntegrations = integrations.filter(i => i.category === category);

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIdx * 0.1 }}
                  className="mb-16"
                >
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 mb-8">
                    {category}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryIntegrations.map((integration, idx) => (
                      <motion.div
                        key={integration.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="border-2 border-slate-200 rounded-2xl p-8 hover:border-panlit-orange hover:shadow-lg transition-all group flex flex-col"
                      >
                        <div className="mb-6 h-16 flex items-center justify-center">
                          <img 
                            src={integration.logo} 
                            alt={integration.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>

                        <h3 className="text-xl font-bold font-heading text-slate-900 mb-2 group-hover:text-panlit-orange transition-colors">
                          {integration.name}
                        </h3>

                        <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">
                          {integration.description}
                        </p>

                        <div className="flex items-center gap-2 text-green-600 font-semibold text-sm">
                          <Check className="w-4 h-4" />
                          <span>Available now</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-panlit-dark relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-panlit-orange/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />

          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
                Need a custom integration?
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                We're always looking to expand our integrations. If you need to connect Panlit with another tool, let us know!
              </p>
              <a href="https://tally.so/r/WO8MPv" target="_blank" rel="noopener noreferrer">
                <Button className="bg-panlit-orange hover:bg-orange-600 text-white font-bold h-14 px-10 rounded-full text-lg">
                  Request an Integration
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
