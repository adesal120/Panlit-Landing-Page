import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  highlighted?: boolean;
  features: {
    name: string;
    included: boolean;
  }[];
  cta: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    description: "Perfect for solo operators and small teams",
    price: "Free",
    period: "forever",
    features: [
      { name: "Up to 5 bookings per month", included: true },
      { name: "Basic booking management", included: true },
      { name: "Email notifications", included: true },
      { name: "Single user", included: true },
      { name: "Calendar view", included: false },
      { name: "Customer CRM", included: false },
      { name: "Analytics & reports", included: false },
      { name: "Team management", included: false },
    ],
    cta: "Get Started"
  },
  {
    name: "Professional",
    description: "Growing teams managing multiple services",
    price: "$29",
    period: "per month, billed annually",
    highlighted: true,
    features: [
      { name: "Unlimited bookings", included: true },
      { name: "Advanced booking management", included: true },
      { name: "Email & SMS notifications", included: true },
      { name: "Up to 5 team members", included: true },
      { name: "Calendar view & scheduling", included: true },
      { name: "Customer CRM & preferences", included: true },
      { name: "Basic analytics & reports", included: true },
      { name: "Team roles & permissions", included: false },
    ],
    cta: "Start 14-Day Trial"
  },
  {
    name: "Enterprise",
    description: "Scale with unlimited everything",
    price: "$99",
    period: "per month, billed annually",
    features: [
      { name: "Unlimited bookings & services", included: true },
      { name: "Premium booking management", included: true },
      { name: "All notification channels", included: true },
      { name: "Unlimited team members", included: true },
      { name: "Advanced calendar & scheduling", included: true },
      { name: "Full-featured CRM", included: true },
      { name: "Advanced analytics & custom reports", included: true },
      { name: "Custom roles & fine-grained permissions", included: true },
    ],
    cta: "Talk to Sales"
  }
];

const currencies = [
  { name: "US Dollar", code: "USD", fee: "$1.25" },
  { name: "British Pound", code: "GBP", fee: "£1.00" },
  { name: "Euro", code: "EUR", fee: "€1.20" },
  { name: "Nigerian Naira", code: "NGN", fee: "₦2,000" },
  { name: "Kenyan Shilling", code: "KES", fee: "KSh167" },
  { name: "South African Rand", code: "ZAR", fee: "R22" },
  { name: "Ghanaian Cedi", code: "GHS", fee: "₵17" },
  { name: "Ugandan Shilling", code: "UGX", fee: "USh4,400" },
  { name: "Tanzanian Shilling", code: "TZS", fee: "TSh3,100" },
  { name: "Egyptian Pound", code: "EGP", fee: "£61" },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-slate-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
                Fair pricing for any business
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Simple as that: 0.5% per booking, capped rates, zero hidden fees. We only make money when you do, so we're invested in helping your business grow—at every stage. Whether you're just starting out or managing hundreds of bookings monthly, you'll only ever pay for what you use. No lock-in contracts, no minimum fees, no penalties for quiet months. Just straightforward pricing that grows with your success, not against it.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {pricingPlans.map((plan, index) => (
                <motion.div 
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative rounded-2xl border-2 overflow-hidden transition-all ${
                    plan.highlighted 
                      ? "border-panlit-orange bg-gradient-to-b from-orange-50/50 to-white shadow-2xl md:scale-105 md:z-10" 
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="p-8">
                    <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-slate-600 text-sm mb-6">
                      {plan.description}
                    </p>
                    
                    <div className="mb-8">
                      <span className="text-4xl md:text-5xl font-bold text-slate-900">
                        {plan.price}
                      </span>
                      <span className="text-slate-600 text-sm ml-2">
                        {plan.period}
                      </span>
                    </div>
                    
                    <Button 
                      className={`w-full font-semibold py-6 rounded-lg mb-8 text-base ${
                        plan.highlighted
                          ? "bg-panlit-orange hover:bg-orange-600 text-white"
                          : "border-2 border-panlit-orange text-panlit-orange hover:bg-orange-50"
                      }`}
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                    
                    <div className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            {feature.included ? (
                              <Check className="w-5 h-5 text-green-500" />
                            ) : (
                              <X className="w-5 h-5 text-slate-300" />
                            )}
                          </div>
                          <span className={feature.included ? "text-slate-700" : "text-slate-400"}>
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Currency & Fees Table */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
                Multi-currency support
              </h2>
              <p className="text-slate-600 text-lg">
                We support payments in 50+ currencies. Here are some examples of our capped maximum fees per booking.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-panlit-orange text-white">
                      <th className="px-6 py-4 text-left font-semibold">Currency</th>
                      <th className="px-6 py-4 text-left font-semibold">Code</th>
                      <th className="px-6 py-4 text-left font-semibold">Maximum Fee per Booking</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {currencies.map((currency, index) => (
                      <tr key={currency.code} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-900">{currency.name}</td>
                        <td className="px-6 py-4 font-mono text-slate-600">{currency.code}</td>
                        <td className="px-6 py-4 font-semibold text-panlit-orange">{currency.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <div className="mt-12 text-center">
              <p className="text-slate-600 mb-4">
                Don't see your currency? We support 50+ currencies. Contact us for details.
              </p>
              <Button className="bg-panlit-orange hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg">
                View all currencies
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h2 className="text-3xl font-bold font-heading text-slate-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Is there a setup fee or hidden charges?",
                  a: "No. There are no setup fees, no monthly minimums, and no hidden charges. You only pay per booking, and nothing more."
                },
                {
                  q: "Can I upgrade or downgrade anytime?",
                  a: "Yes. Switch plans whenever you need to. Changes take effect immediately on your next billing cycle."
                },
                {
                  q: "Do you offer discounts for annual billing?",
                  a: "Yes. All our pricing is shown for annual billing. Pay monthly at 25% higher rate, or save by paying annually."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, bank transfers, and local payment methods in 50+ countries through our payment partners."
                },
                {
                  q: "Is there a free trial?",
                  a: "Yes! Professional and Enterprise plans come with a 14-day free trial. No credit card required to get started."
                },
                {
                  q: "Can I cancel anytime?",
                  a: "Absolutely. Cancel your subscription at any time. No penalties, no long-term contracts."
                }
              ].map((faq, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="border-b border-slate-200 pb-6 last:border-0"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
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
                Ready to get started?
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Try Panlit free for 14 days. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-panlit-orange hover:bg-orange-600 text-white font-bold h-14 px-10 rounded-full text-lg">
                  Start Free Trial
                </Button>
                <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 font-bold h-14 px-10 rounded-full text-lg">
                  Schedule Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
