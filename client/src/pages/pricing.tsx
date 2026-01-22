import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Calculator, Globe, Zap, Layers, MessageSquare, Send, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

// Currency Data
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
  { name: "Egyptian Pound", code: "EGP", fee: "£E61", maxFee: 61, symbol: "£E" },
  { name: "Moroccan Dirham", code: "MAD", fee: "DH12.5", maxFee: 12.5, symbol: "DH" },
  { name: "Ethiopian Birr", code: "ETB", fee: "Br22", maxFee: 22, symbol: "Br" },
  { name: "Rwandan Franc", code: "RWF", fee: "FRw1,540", maxFee: 1540, symbol: "FRw" },
  { name: "Zambian Kwacha", code: "ZMW", fee: "ZK16", maxFee: 16, symbol: "ZK" },
  { name: "Botswana Pula", code: "BWP", fee: "P17", maxFee: 17, symbol: "P" },
  { name: "Malawian Kwacha", code: "MWK", fee: "MK2,100", maxFee: 2100, symbol: "MK" },
  { name: "Mozambican Metical", code: "MZN", fee: "MT80", maxFee: 80, symbol: "MT" },
  { name: "Namibian Dollar", code: "NAD", fee: "N$22", maxFee: 22, symbol: "N$" },
  { name: "Swazi Lilangeni", code: "SZL", fee: "L22", maxFee: 22, symbol: "L" },
];

// Modules Data
const modules = [
  {
    id: "core",
    name: "Panlit Core",
    description: "The complete operating system",
    price: 0,
    required: true,
    features: [
      "Unlimited bookings",
      "Resource management",
      "CRM & Analytics",
      "Team management"
    ],
    icon: Globe,
    status: "active"
  },
  {
    id: "website",
    name: "AI Website Builder",
    description: "Professional site in minutes",
    price: 15, // Placeholder price
    required: false,
    features: [
      "Custom domain",
      "SEO optimization",
      "AI content generation",
      "Hosting included"
    ],
    icon: Zap,
    status: "active"
  },
  {
    id: "channel",
    name: "Channel Manager",
    description: "Sync with OTAs instantly",
    price: 29,
    required: false,
    features: [
      "Airbnb, Booking.com sync",
      "Real-time availability",
      "Rate parity management"
    ],
    icon: Layers,
    status: "coming_soon"
  },
  {
    id: "inbox",
    name: "Unified AI Inbox",
    description: "All messages in one place",
    price: 19,
    required: false,
    features: [
      "WhatsApp & Instagram",
      "AI auto-responses",
      "Team collaboration"
    ],
    icon: MessageSquare,
    status: "coming_soon"
  },
  {
    id: "guest",
    name: "Guest Comms",
    description: "Automated notifications",
    price: 12,
    required: false,
    features: [
      "SMS & WhatsApp reminders",
      "Review requests",
      "Pre-arrival guides"
    ],
    icon: Send,
    status: "coming_soon"
  },
  {
    id: "store",
    name: "Direct Booking Store",
    description: "Embeddable booking engine",
    price: 0,
    required: false,
    features: [
      "Embed on any site",
      "Social media links",
      "Commission-free"
    ],
    icon: ShoppingBag,
    status: "coming_soon"
  }
];

export default function Pricing() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [avgBookingValue, setAvgBookingValue] = useState([100]);
  const [monthlyBookings, setMonthlyBookings] = useState([50]);
  const [selectedModules, setSelectedModules] = useState<string[]>(["core"]);
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">("monthly");

  const currencyData = currencies.find(c => c.code === selectedCurrency) || currencies[0];

  const toggleModule = (id: string) => {
    if (id === "core") return;
    setSelectedModules(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  // Calculations
  const transactionFeeRate = 0.005; // 0.5%
  const transactionFeeCap = currencyData.maxFee;
  
  const feePerBooking = Math.min(avgBookingValue[0] * transactionFeeRate, transactionFeeCap);
  const totalTransactionFees = feePerBooking * monthlyBookings[0];
  
  const activeModules = modules.filter(m => selectedModules.includes(m.id));
  const modulesCost = activeModules.reduce((sum, m) => sum + m.price, 0);
  
  // Convert module cost to selected currency (approximate conversion for demo if needed, or just show USD for modules)
  // For now, assuming module prices are fixed in USD. 
  // Ideally, we'd have module prices per currency. 
  // I'll display module costs in USD for now as typical for SaaS.
  
  const totalMonthlyCost = totalTransactionFees + (modulesCost * (currencyData.code === "USD" ? 1 : 1)); // Simplified mixing currencies

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Header */}
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
            Build your perfect plan
          </h1>
          <p className="text-xl text-slate-600">
            Start with the Core platform for free. Add powerful modules as you grow.
          </p>
        </div>

        {/* Calculator Section */}
        <div className="container mx-auto px-4 md:px-6 mb-24">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              
              {/* Left: Inputs */}
              <div className="p-8 md:p-10 lg:col-span-2 space-y-10">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Globe size={20} className="text-panlit-orange" />
                    Select your currency
                  </h3>
                  <select 
                    value={selectedCurrency}
                    onChange={(e) => setSelectedCurrency(e.target.value)}
                    className="w-full md:w-1/2 p-3 border border-slate-200 rounded-xl focus:outline-none focus:border-panlit-orange bg-slate-50 font-medium"
                  >
                    {currencies.map(c => (
                      <option key={c.code} value={c.code}>{c.name} ({c.code})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Calculator size={20} className="text-panlit-orange" />
                    Estimate your usage
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <label className="text-sm font-medium text-slate-600">Average Booking Value</label>
                        <span className="font-bold text-slate-900">{currencyData.symbol}{avgBookingValue[0]}</span>
                      </div>
                      <Slider 
                        value={avgBookingValue} 
                        onValueChange={setAvgBookingValue} 
                        max={1000} 
                        step={10} 
                        className="py-4"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <label className="text-sm font-medium text-slate-600">Monthly Bookings</label>
                        <span className="font-bold text-slate-900">{monthlyBookings[0]}</span>
                      </div>
                      <Slider 
                        value={monthlyBookings} 
                        onValueChange={setMonthlyBookings} 
                        max={1000} 
                        step={10} 
                        className="py-4"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Layers size={20} className="text-panlit-orange" />
                    Select Modules
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {modules.map(module => (
                      <div 
                        key={module.id}
                        onClick={() => module.status === "active" && toggleModule(module.id)}
                        className={cn(
                          "p-4 rounded-xl border transition-all cursor-pointer relative",
                          module.status !== "active" ? "opacity-60 cursor-not-allowed bg-slate-50 border-slate-100" :
                          selectedModules.includes(module.id) 
                            ? "border-panlit-orange bg-orange-50/50 shadow-sm" 
                            : "border-slate-200 hover:border-panlit-orange/50 hover:bg-slate-50"
                        )}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className={cn(
                            "p-2 rounded-lg",
                            selectedModules.includes(module.id) ? "bg-white text-panlit-orange" : "bg-slate-100 text-slate-500"
                          )}>
                            <module.icon size={20} />
                          </div>
                          {module.status === "active" ? (
                            <div className={cn(
                              "w-6 h-6 rounded-full flex items-center justify-center border",
                              selectedModules.includes(module.id) 
                                ? "bg-panlit-orange border-panlit-orange text-white" 
                                : "border-slate-300"
                            )}>
                              {selectedModules.includes(module.id) && <Check size={14} />}
                            </div>
                          ) : (
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-200 text-slate-500 px-2 py-1 rounded-full">
                              Coming Soon
                            </span>
                          )}
                        </div>
                        <h4 className="font-bold text-slate-900">{module.name}</h4>
                        <p className="text-sm text-slate-500 mb-2">{module.description}</p>
                        <div className="text-sm font-semibold text-slate-900">
                          {module.price === 0 ? "Free" : `$${module.price}/mo`}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Summary */}
              <div className="bg-slate-900 text-white p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-heading mb-8">Estimated Cost</h3>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center py-4 border-b border-white/10">
                      <div>
                        <p className="font-medium">Transaction Fees</p>
                        <p className="text-sm text-slate-400">
                          0.5% capped at {currencyData.fee}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">
                          {currencyData.symbol}{totalTransactionFees.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-4 border-b border-white/10">
                      <div>
                        <p className="font-medium">Module Subscriptions</p>
                        <p className="text-sm text-slate-400">
                          {activeModules.length} active module{activeModules.length !== 1 && 's'}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">
                          ${modulesCost}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <div className="bg-white/5 rounded-2xl p-6 mb-8">
                    <p className="text-slate-400 text-sm mb-1">Total Estimated Monthly Cost</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">
                        {currencyData.symbol}{totalMonthlyCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                      {currencyData.code !== "USD" && modulesCost > 0 && (
                        <span className="text-xs text-slate-400">
                          (Includes ${modulesCost} USD for modules)
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-panlit-orange hover:bg-orange-600 text-white font-bold h-12 rounded-xl text-lg">
                    Start Building for Free
                  </Button>
                  <p className="text-center text-slate-500 text-sm mt-4">
                    No credit card required. Cancel anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modules Grid (Detailed) */}
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-heading text-slate-900 mb-4">
              Modular Pricing
            </h2>
            <p className="text-slate-600 text-lg">
              Only pay for the tools you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map(module => (
              <div 
                key={module.id}
                className={cn(
                  "bg-white rounded-2xl p-8 border hover:shadow-lg transition-all",
                  module.status === "active" ? "border-slate-200 hover:border-panlit-orange/50" : "border-slate-100 opacity-75"
                )}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={cn(
                    "p-3 rounded-xl",
                    module.status === "active" ? "bg-orange-50 text-panlit-orange" : "bg-slate-100 text-slate-400"
                  )}>
                    <module.icon size={24} />
                  </div>
                  {module.status !== "active" && (
                    <span className="bg-slate-100 text-slate-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Coming Soon
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{module.name}</h3>
                <p className="text-slate-600 text-sm mb-6 h-10">{module.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-slate-900">
                    {module.price === 0 ? "Free" : `$${module.price}`}
                  </span>
                  {module.price > 0 && <span className="text-slate-500">/month</span>}
                </div>

                <ul className="space-y-3 mb-8">
                  {module.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={module.status === "active" ? "default" : "outline"}
                  className={cn(
                    "w-full font-bold",
                    module.status === "active" 
                      ? "bg-panlit-dark hover:bg-panlit-dark/90 text-white" 
                      : "border-slate-200 text-slate-400 hover:bg-slate-50"
                  )}
                  disabled={module.status !== "active"}
                >
                  {module.status === "active" ? "Add to Plan" : "Join Waitlist"}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Currency Table */}
        <section className="mt-24">
          <div className="container mx-auto px-4 md:px-6">
             <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 mb-4">
                Supported Currencies
              </h2>
              <p className="text-slate-600">
                We support local payments in 15+ African currencies with capped transaction fees.
              </p>
            </div>
            
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4">Currency</th>
                      <th className="px-6 py-4">Code</th>
                      <th className="px-6 py-4">Max Fee / Booking</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {currencies.map((currency) => (
                      <tr key={currency.code} className="hover:bg-slate-50/50">
                        <td className="px-6 py-4 font-medium text-slate-900">{currency.name}</td>
                        <td className="px-6 py-4 text-slate-500 font-mono">{currency.code}</td>
                        <td className="px-6 py-4 text-panlit-orange font-bold">{currency.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
