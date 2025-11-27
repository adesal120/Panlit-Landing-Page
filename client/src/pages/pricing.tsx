import { useState } from "react";
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
  { name: "US Dollar", code: "USD", fee: "$1.25", maxFee: 1.25, symbol: "$" },
  { name: "British Pound", code: "GBP", fee: "£1.00", maxFee: 1.00, symbol: "£" },
  { name: "Euro", code: "EUR", fee: "€1.20", maxFee: 1.20, symbol: "€" },
  { name: "Nigerian Naira", code: "NGN", fee: "₦2,000", maxFee: 2000, symbol: "₦" },
  { name: "Kenyan Shilling", code: "KES", fee: "KSh167", maxFee: 167, symbol: "KSh" },
  { name: "South African Rand", code: "ZAR", fee: "R22", maxFee: 22, symbol: "R" },
  { name: "Ghanaian Cedi", code: "GHS", fee: "₵17", maxFee: 17, symbol: "₵" },
  { name: "Ugandan Shilling", code: "UGX", fee: "USh4,400", maxFee: 4400, symbol: "USh" },
  { name: "Tanzanian Shilling", code: "TZS", fee: "TSh3,100", maxFee: 3100, symbol: "TSh" },
  { name: "Egyptian Pound", code: "EGP", fee: "£61", maxFee: 61, symbol: "£" },
];

export default function Pricing() {
  const [bookingAmount, setBookingAmount] = useState<string>("100");
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");

  const selectedCurrencyData = currencies.find(c => c.code === selectedCurrency);
  const amount = parseFloat(bookingAmount) || 0;
  const calculatedFee = Math.min((amount * 0.005), selectedCurrencyData?.maxFee || 0);
  const total = amount + calculatedFee;

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

        {/* Simple Pricing */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-8">
                That's it. One simple model.
              </h2>
              
              <div className="bg-gradient-to-br from-panlit-orange/10 to-orange-50 border-2 border-panlit-orange rounded-2xl p-12 md:p-16">
                <div className="space-y-6">
                  <div>
                    <p className="text-slate-600 text-lg mb-2">Start using Panlit</p>
                    <p className="text-5xl md:text-6xl font-bold font-heading text-slate-900">Free</p>
                  </div>
                  
                  <div className="border-t-2 border-b-2 border-panlit-orange/20 py-8">
                    <p className="text-slate-600 text-lg mb-3">Per every booking completed</p>
                    <p className="text-4xl md:text-5xl font-bold font-heading text-panlit-orange">0.5%</p>
                  </div>
                  
                  <div>
                    <p className="text-slate-600 text-lg">Zero setup fees • Zero hidden charges • No minimums</p>
                  </div>
                </div>
              </div>

              <Button className="mt-12 bg-panlit-orange hover:bg-orange-600 text-white font-bold py-6 px-10 rounded-lg text-lg">
                Get Started Free
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Fee Calculator */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-8 text-center">
                See what you'll pay
              </h2>

              <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-slate-200">
                <div className="space-y-8">
                  {/* Input Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Booking Amount
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 text-lg font-semibold">
                          {selectedCurrencyData?.symbol}
                        </span>
                        <input
                          type="number"
                          value={bookingAmount}
                          onChange={(e) => setBookingAmount(e.target.value)}
                          placeholder="0"
                          className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-panlit-orange text-lg font-semibold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Currency
                      </label>
                      <select
                        value={selectedCurrency}
                        onChange={(e) => setSelectedCurrency(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-panlit-orange text-base font-medium"
                      >
                        {currencies.map(curr => (
                          <option key={curr.code} value={curr.code}>
                            {curr.name} ({curr.code})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="border-t-2 border-slate-100 pt-8 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 text-base">Booking amount</span>
                      <span className="font-semibold text-slate-900">
                        {selectedCurrencyData?.symbol}{amount.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 text-base">Panlit fee (0.5% capped)</span>
                      <span className="font-semibold text-panlit-orange">
                        {selectedCurrencyData?.symbol}{calculatedFee.toFixed(2)}
                      </span>
                    </div>
                    <div className="border-t-2 border-slate-100 pt-4 flex justify-between items-center bg-slate-50 -mx-8 md:-mx-12 px-8 md:px-12 py-4 rounded-b-lg">
                      <span className="text-lg font-bold text-slate-900">Total you pay</span>
                      <span className="text-2xl font-bold text-slate-900">
                        {selectedCurrencyData?.symbol}{total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-500 text-center mt-6">
                    The fee shown is the maximum capped amount for {selectedCurrencyData?.name}. Your actual fee will be 0.5% of the booking amount, capped at this maximum.
                  </p>
                </div>
              </div>
            </motion.div>
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
