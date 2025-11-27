import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

interface Integration {
  name: string;
  description: string;
  icon: string;
  category: string;
  status: "available" | "coming-soon";
}

const integrations: Integration[] = [
  // Payments
  {
    name: "Stripe",
    description: "Accept payments globally with industry-leading payment processing",
    icon: "💳",
    category: "Payments",
    status: "available"
  },
  {
    name: "PayPal",
    description: "Secure payment processing with one of the world's most trusted platforms",
    icon: "🅿️",
    category: "Payments",
    status: "available"
  },
  {
    name: "Flutterwave",
    description: "Accept payments across Africa with local payment methods",
    icon: "🌍",
    category: "Payments",
    status: "available"
  },

  // Calendar & Scheduling
  {
    name: "Google Calendar",
    description: "Sync bookings automatically with your Google Calendar",
    icon: "📅",
    category: "Calendar",
    status: "coming-soon"
  },
  {
    name: "Microsoft Outlook",
    description: "Keep your Outlook calendar in sync with Panlit bookings",
    icon: "📆",
    category: "Calendar",
    status: "coming-soon"
  },

  // Communication
  {
    name: "Twilio SMS",
    description: "Send automated SMS notifications to customers",
    icon: "💬",
    category: "Communication",
    status: "available"
  },
  {
    name: "WhatsApp Business",
    description: "Send booking confirmations and updates via WhatsApp",
    icon: "💚",
    category: "Communication",
    status: "coming-soon"
  },

  // Email Marketing
  {
    name: "Mailchimp",
    description: "Sync customer lists and run email marketing campaigns",
    icon: "📧",
    category: "Marketing",
    status: "coming-soon"
  },
  {
    name: "Klaviyo",
    description: "Create personalized customer journeys with behavioral emails",
    icon: "🎯",
    category: "Marketing",
    status: "coming-soon"
  },

  // Accounting
  {
    name: "Xero",
    description: "Automatically sync your Panlit revenue to Xero accounting",
    icon: "📊",
    category: "Accounting",
    status: "coming-soon"
  },
  {
    name: "QuickBooks",
    description: "Streamline your accounting with QuickBooks integration",
    icon: "💰",
    category: "Accounting",
    status: "coming-soon"
  },

  // Analytics
  {
    name: "Google Analytics",
    description: "Track visitor behavior and conversion metrics",
    icon: "📈",
    category: "Analytics",
    status: "coming-soon"
  }
];

const categories = Array.from(new Set(integrations.map(i => i.category)));

export default function Integrations() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
                Connect your tools to Panlit
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Integrate with your favorite tools to streamline operations, automate workflows, and get real-time insights. We're constantly adding new integrations to help your business grow.
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
                        className="border-2 border-slate-200 rounded-2xl p-6 hover:border-panlit-orange hover:shadow-lg transition-all group"
                      >
                        <div className="mb-4 text-5xl">
                          {integration.icon}
                        </div>

                        <h3 className="text-xl font-bold font-heading text-slate-900 mb-2 group-hover:text-panlit-orange transition-colors">
                          {integration.name}
                        </h3>

                        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                          {integration.description}
                        </p>

                        {integration.status === "available" ? (
                          <div className="flex items-center gap-2 text-green-600 font-semibold text-sm">
                            <Check className="w-4 h-4" />
                            <span>Available now</span>
                          </div>
                        ) : (
                          <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">
                            Coming soon
                          </div>
                        )}
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
                Can't find the integration you need?
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Let us know what integration would help your business the most. We're always building new connections based on user feedback.
              </p>
              <Button className="bg-panlit-orange hover:bg-orange-600 text-white font-bold h-14 px-10 rounded-full text-lg">
                Request an Integration
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
