import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Calculator, Globe, Zap, Layers, MessageSquare, Send, ShoppingBag, Phone, Mic, LayoutDashboard, Database, CreditCard, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

// --- Data Definitions ---

const currencies = [
  // West Africa
  { name: "Nigerian Naira", code: "NGN", symbol: "₦", maxFee: 2000, region: "West Africa" },
  { name: "Ghanaian Cedi", code: "GHS", symbol: "₵", maxFee: 17, region: "West Africa" },
  { name: "CFA Franc (Senegal)", code: "XOF", symbol: "F", maxFee: 0, region: "West Africa" }, // Fee missing in table, assumed based on pattern or generic calc? Text says 0.5% capped. Text file table lacks cap for XOF? Wait, transaction fee table missing XOF. Let's assume standard calculation or no cap if missing? Or maybe it's missing from the snippet. I'll use a safe fallback or omit cap for now. Actually, let's look at the transaction fee table again. It's missing XOF. I will assume uncapped or similar to others. Let's use 0 for now as placeholder or 5000 approx.
  { name: "Gambian Dalasi", code: "GMD", symbol: "D", maxFee: 0, region: "West Africa" }, // Missing in fee table
  { name: "Sierra Leonean Leone", code: "SLL", symbol: "Le", maxFee: 0, region: "West Africa" }, // Missing
  { name: "Liberian Dollar", code: "LRD", symbol: "L$", maxFee: 0, region: "West Africa" }, // Missing

  // East Africa
  { name: "Kenyan Shilling", code: "KES", symbol: "KSh", maxFee: 167, region: "East Africa" },
  { name: "Tanzanian Shilling", code: "TZS", symbol: "TSh", maxFee: 3100, region: "East Africa" },
  { name: "Ugandan Shilling", code: "UGX", symbol: "USh", maxFee: 4400, region: "East Africa" },
  { name: "Rwandan Franc", code: "RWF", symbol: "FRw", maxFee: 1540, region: "East Africa" },
  { name: "Ethiopian Birr", code: "ETB", symbol: "Br", maxFee: 22, region: "East Africa" },

  // Southern Africa
  { name: "South African Rand", code: "ZAR", symbol: "R", maxFee: 22, region: "Southern Africa" },
  { name: "Botswana Pula", code: "BWP", symbol: "P", maxFee: 17, region: "Southern Africa" },
  { name: "Namibian Dollar", code: "NAD", symbol: "N$", maxFee: 22, region: "Southern Africa" },
  { name: "Mozambican Metical", code: "MZN", symbol: "MT", maxFee: 80, region: "Southern Africa" },
  { name: "Zambian Kwacha", code: "ZMW", symbol: "ZK", maxFee: 16, region: "Southern Africa" },
  { name: "Malawian Kwacha", code: "MWK", symbol: "MK", maxFee: 2100, region: "Southern Africa" },
  { name: "Swazi Lilangeni", code: "SZL", symbol: "L", maxFee: 22, region: "Southern Africa" },
  { name: "Lesotho Loti", code: "LSL", symbol: "L", maxFee: 0, region: "Southern Africa" }, // Missing

  // North Africa
  { name: "Egyptian Pound", code: "EGP", symbol: "£E", maxFee: 61, region: "North Africa" },
  { name: "Moroccan Dirham", code: "MAD", symbol: "DH", maxFee: 12.5, region: "North Africa" },
  { name: "Tunisian Dinar", code: "TND", symbol: "DT", maxFee: 0, region: "North Africa" }, // Missing
  { name: "Algerian Dinar", code: "DZD", symbol: "DA", maxFee: 0, region: "North Africa" }, // Missing

  // Central Africa
  { name: "CFA Franc (Cameroon)", code: "XAF", symbol: "F", maxFee: 0, region: "Central Africa" }, // Missing

  // International
  { name: "US Dollar", code: "USD", symbol: "$", maxFee: 1.25, region: "International" },
  { name: "British Pound", code: "GBP", symbol: "£", maxFee: 1.00, region: "International" },
  { name: "Euro", code: "EUR", symbol: "€", maxFee: 1.20, region: "International" },
];

const basePlans = [
  {
    id: "free",
    name: "Free Plan",
    description: "Essential tools for solo operators.",
    features: [
      "Bookings management",
      "Calendar & availability",
      "Basic CRM",
      "5 Team members",
      "QR code check-in",
      "Email notifications"
    ],
    pricing: {
      NGN: 0, GHS: 0, XOF: 0, GMD: 0, SLL: 0, LRD: 0, KES: 0, TZS: 0, UGX: 0, RWF: 0, ETB: 0, ZAR: 0, BWP: 0, NAD: 0, MZN: 0, ZMW: 0, MWK: 0, SZL: 0, LSL: 0, EGP: 0, MAD: 0, TND: 0, DZD: 0, XAF: 0, USD: 0, GBP: 0, EUR: 0
    }
  },
  {
    id: "professional",
    name: "Professional",
    description: "Membership & communications.",
    features: [
      "Everything in Free",
      "Membership management",
      "Member portal",
      "WhatsApp & SMS notifications",
      "10 Team members",
      "Priority support"
    ],
    highlight: true,
    pricing: {
      NGN: 20000, GHS: 300, XOF: 12000, GMD: 130, SLL: 440000, LRD: 3800, KES: 3000, TZS: 50000, UGX: 80000, RWF: 26000, ETB: 1200, ZAR: 400, BWP: 280, NAD: 400, MZN: 1280, ZMW: 460, MWK: 36000, SZL: 400, LSL: 400, EGP: 1000, MAD: 200, TND: 64, DZD: 2700, XAF: 12000, USD: 45, GBP: 35, EUR: 40
    }
  },
  {
    id: "premium",
    name: "Premium",
    description: "Full white-label branding.",
    features: [
      "Everything in Professional",
      "Custom branding (Logo/Colors)",
      "Remove Panlit branding",
      "Custom email domain",
      "Unlimited team members",
      "White glove support"
    ],
    pricing: {
      NGN: 40000, GHS: 600, XOF: 24000, GMD: 260, SLL: 880000, LRD: 7600, KES: 6000, TZS: 100000, UGX: 160000, RWF: 52000, ETB: 2400, ZAR: 800, BWP: 560, NAD: 800, MZN: 2560, ZMW: 920, MWK: 72000, SZL: 800, LSL: 800, EGP: 2000, MAD: 400, TND: 128, DZD: 5400, XAF: 24000, USD: 90, GBP: 70, EUR: 80
    }
  }
];

const addOns = [
  {
    id: "website_starter",
    name: "AI Website Starter",
    description: "Launch a professional 5-page business site instantly.",
    icon: LayoutDashboard,
    pricing: {
      NGN: 10000, USD: 10, GBP: 8, EUR: 10, KES: 1500, GHS: 150, ZAR: 200, 
      XOF: 6000, GMD: 65, SLL: 220000, LRD: 1900, TZS: 25000, UGX: 40000, 
      RWF: 13000, ETB: 600, BWP: 140, NAD: 200, MZN: 640, ZMW: 230, 
      MWK: 18000, SZL: 200, LSL: 200, EGP: 500, MAD: 100, TND: 32, DZD: 1350, XAF: 6000
    }
  },
  {
    id: "website_pro",
    name: "AI Website Pro",
    description: "Unlimited pages, blog, and multilingual support.",
    icon: Globe,
    pricing: {
      NGN: 12000, USD: 35, GBP: 25, EUR: 30, KES: 1800, GHS: 180, ZAR: 240,
      XOF: 7200, GMD: 78, SLL: 264000, LRD: 2300, TZS: 30000, UGX: 48000,
      RWF: 15600, ETB: 720, BWP: 168, NAD: 240, MZN: 768, ZMW: 276,
      MWK: 21600, SZL: 240, LSL: 240, EGP: 600, MAD: 120, TND: 38, DZD: 1620, XAF: 7200
    }
  },
  {
    id: "concierge_starter",
    name: "AI Concierge Starter",
    description: "AI-powered support across OTAs, chat, social, email, whatsapp & reviews.",
    icon: MessageSquare,
    pricing: {
      NGN: 10000, USD: 20, GBP: 15, EUR: 18, KES: 1500, GHS: 150, ZAR: 200,
      XOF: 6000, GMD: 65, SLL: 220000, LRD: 1900, TZS: 25000, UGX: 40000,
      RWF: 13000, ETB: 600, BWP: 140, NAD: 200, MZN: 640, ZMW: 230,
      MWK: 18000, SZL: 200, LSL: 200, EGP: 500, MAD: 100, TND: 32, DZD: 1350, XAF: 6000
    }
  },
  {
    id: "concierge_pro",
    name: "AI Concierge Pro",
    description: "Everything in Starter + Voice AI assistant.",
    icon: Phone,
    pricing: {
      NGN: 18000, USD: 35, GBP: 25, EUR: 30, KES: 2700, GHS: 270, ZAR: 360,
      XOF: 10800, GMD: 117, SLL: 396000, LRD: 3420, TZS: 45000, UGX: 72000,
      RWF: 23400, ETB: 1080, BWP: 252, NAD: 360, MZN: 1152, ZMW: 414,
      MWK: 32400, SZL: 360, LSL: 360, EGP: 900, MAD: 180, TND: 58, DZD: 2430, XAF: 10800
    }
  },
  {
    id: "channel_starter",
    name: "Channel Manager Starter",
    description: "Sync inventory with standard OTAs and booking platforms.",
    icon: Layers,
    pricing: {
      NGN: 15000, USD: 49, GBP: 35, EUR: 40, KES: 2200, GHS: 220, ZAR: 300,
      XOF: 9000, GMD: 98, SLL: 330000, LRD: 2850, TZS: 37000, UGX: 60000,
      RWF: 19500, ETB: 900, BWP: 210, NAD: 300, MZN: 960, ZMW: 345,
      MWK: 27000, SZL: 300, LSL: 300, EGP: 750, MAD: 150, TND: 48, DZD: 2025, XAF: 9000
    }
  },
  {
    id: "channel_pro",
    name: "Channel Manager Pro",
    description: "Connect with custom API",
    icon: Layers,
    pricing: {
      NGN: 25000, USD: 79, GBP: 60, EUR: 70, KES: 3700, GHS: 375, ZAR: 500,
      XOF: 15000, GMD: 163, SLL: 550000, LRD: 4750, TZS: 62000, UGX: 100000,
      RWF: 32500, ETB: 1500, BWP: 350, NAD: 500, MZN: 1600, ZMW: 575,
      MWK: 45000, SZL: 500, LSL: 500, EGP: 1250, MAD: 250, TND: 80, DZD: 3375, XAF: 15000
    }
  }
];

// --- Detailed Feature Comparison Data ---
const featureComparison = [
  {
    category: "Core Operations",
    features: [
      { name: "Bookings management", free: true, pro: true, prem: true },
      { name: "Calendar & availability", free: true, pro: true, prem: true },
      { name: "CRM (Customer Relationship Management)", free: true, pro: true, prem: true },
      { name: "Import & export customers", free: true, pro: true, prem: true },
      { name: "Product/inventory management", free: true, pro: true, prem: true },
      { name: "QR code check-in", free: true, pro: true, prem: true },
      { name: "Discount codes", free: true, pro: true, prem: true },
      { name: "Review collection automation", free: true, pro: true, prem: true },
    ]
  },
  {
    category: "Memberships & Loyalty",
    features: [
      { name: "Membership management", free: false, pro: true, prem: true },
      { name: "Member portal", free: false, pro: true, prem: true },
      { name: "Tiered memberships", free: false, pro: true, prem: true },
      { name: "Member-only pricing", free: false, pro: true, prem: true },
      { name: "Recurring billing", free: false, pro: true, prem: true },
    ]
  },
  {
    category: "Branding & Customization",
    features: [
      { name: "PDF tickets", free: "Standard", pro: "Standard", prem: "Custom Branded" },
      { name: "Custom logo on emails/tickets", free: false, pro: false, prem: true },
      { name: "Custom colour scheme", free: false, pro: false, prem: true },
      { name: "Remove Panlit branding", free: false, pro: false, prem: true },
      { name: "Custom email domain", free: false, pro: false, prem: true },
      { name: "Branded customer portal", free: false, pro: false, prem: true },
    ]
  },
  {
    category: "Team & Limits",
    features: [
      { name: "Team members", free: "Up to 5", pro: "Up to 10", prem: "Unlimited" },
      { name: "Forms & lead capture", free: "Up to 5", pro: "Up to 10", prem: "Unlimited" },
    ]
  },
  {
    category: "Support & Notifications",
    features: [
      { name: "Email notifications", free: true, pro: true, prem: true },
      { name: "WhatsApp & SMS notifications", free: false, pro: true, prem: true },
      { name: "Support level", free: "Email", pro: "Priority", prem: "White Glove" },
      { name: "Onboarding", free: "Self-service", pro: "Dedicated", prem: "Account Manager" },
    ]
  }
];

export default function Pricing() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [avgBookingValue, setAvgBookingValue] = useState([100]);
  const [monthlyBookings, setMonthlyBookings] = useState([50]);
  const [selectedBasePlan, setSelectedBasePlan] = useState("free");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["website_starter"]);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  
  const currencyData = currencies.find(c => c.code === selectedCurrency) || currencies[ currencies.length - 1 ]; // Default to USD if not found

  // Handlers
  const toggleAddon = (id: string) => {
    // Categories for mutual exclusivity
    const categories: Record<string, string[]> = {
      website: ["website_starter", "website_pro"],
      concierge: ["concierge_starter", "concierge_pro"],
      channel: ["channel_starter", "channel_pro"]
    };

    let categoryToClear: string[] = [];
    
    // Find if the selected addon belongs to a mutually exclusive category
    Object.values(categories).forEach(group => {
      if (group.includes(id)) {
        categoryToClear = group.filter(item => item !== id);
      }
    });

    setSelectedAddons(prev => {
      // If already selected, just remove it
      if (prev.includes(id)) {
        return prev.filter(m => m !== id);
      }
      
      // If adding new item:
      // 1. Remove any items from the same category (mutual exclusivity)
      // 2. Add the new item
      const othersFiltered = prev.filter(item => !categoryToClear.includes(item));
      return [...othersFiltered, id];
    });
  };

  const handleBasePlanSelect = (id: string) => {
    setSelectedBasePlan(id);
  };

  // Non-linear scale helpers
  const toExternalValue = (percentage: number, max: number) => {
    const raw = max * Math.pow(percentage / 100, 3);
    if (raw < 1000) return Math.round(raw / 10) * 10;
    if (raw < 10000) return Math.round(raw / 100) * 100;
    if (raw < 100000) return Math.round(raw / 1000) * 1000;
    if (raw < 1000000) return Math.round(raw / 5000) * 5000;
    return Math.round(raw / 10000) * 10000;
  };

  const toInternalValue = (value: number, max: number) => {
    return Math.pow(value / max, 1/3) * 100;
  };

  // Calculations
  const transactionFeeRate = 0.005; // 0.5%
  const transactionFeeCap = currencyData.maxFee > 0 ? currencyData.maxFee : Infinity; 
  // If maxFee is 0 (missing data), assume uncapped or fallback? Let's treat 0 as "check back later" or standard calculation for now. 
  // The prompt says "The fee is capped per booking based on currency". If not listed, maybe uncapped? 
  // For safety in display, if 0, show standard calc.
  
  const rawFee = avgBookingValue[0] * transactionFeeRate;
  const feePerBooking = transactionFeeCap !== Infinity && transactionFeeCap > 0 
    ? Math.min(rawFee, transactionFeeCap) 
    : rawFee;
    
  const totalTransactionFees = feePerBooking * monthlyBookings[0];

  const getPrice = (pricingObj: any) => {
    const monthlyPrice = pricingObj[selectedCurrency] || pricingObj['USD'] || 0; // Fallback to USD if missing
    return billingCycle === "yearly" ? monthlyPrice * 0.8 : monthlyPrice; // 20% discount for yearly
  };

  const basePlanCost = getPrice(basePlans.find(p => p.id === selectedBasePlan)?.pricing || {});
  
  const addonsCost = selectedAddons.reduce((sum, addonId) => {
    const addon = addOns.find(a => a.id === addonId);
    return sum + (addon ? getPrice(addon.pricing) : 0);
  }, 0);

  const totalMonthlySubscription = basePlanCost + addonsCost;
  const totalEstimatedMonthlyCost = totalTransactionFees + totalMonthlySubscription;

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Header */}
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
            Build your perfect plan
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Start with a Base Plan. Add powerful modules as you grow.
          </p>
          
          {/* Currency Selector - Prominent */}
          <div className="inline-flex items-center bg-white border-2 border-slate-200 rounded-xl px-4 py-2 shadow-sm">
            <Globe size={20} className="text-panlit-orange mr-3" />
            <select 
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              className="bg-transparent font-bold text-slate-900 focus:outline-none cursor-pointer"
            >
              {currencies.map(c => (
                <option key={c.code} value={c.code}>{c.name} ({c.code})</option>
              ))}
            </select>
          </div>
        </div>

        {/* Main Calculator Interface */}
        <div className="container mx-auto px-4 md:px-6 mb-24">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left Column: Configuration */}
            <div className="w-full lg:w-2/3 space-y-8">
              
              {/* 1. Usage Estimator */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Calculator size={20} className="text-panlit-orange" />
                  Step 1: Estimate your usage
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium text-slate-600">Average Booking Value</label>
                      <span className="font-bold text-slate-900">{currencyData.symbol}{avgBookingValue[0].toLocaleString()}</span>
                    </div>
                    <Slider 
                      value={[toInternalValue(avgBookingValue[0], 10000000)]} 
                      onValueChange={(vals) => setAvgBookingValue([toExternalValue(vals[0], 10000000)])} 
                      max={100} 
                      step={0.1} 
                      className="py-4"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium text-slate-600">Monthly Bookings</label>
                      <span className="font-bold text-slate-900">{monthlyBookings[0].toLocaleString()}</span>
                    </div>
                    <Slider 
                      value={[toInternalValue(monthlyBookings[0], 1000000)]} 
                      onValueChange={(vals) => setMonthlyBookings([toExternalValue(vals[0], 1000000)])} 
                      max={100} 
                      step={0.1} 
                      className="py-4"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Base Plan Selector */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Database size={20} className="text-panlit-orange" />
                    Step 2: Choose a Base Plan (Required)
                  </h3>
                  <div className="flex items-center gap-3 bg-slate-100 p-1 rounded-lg">
                    <button 
                      onClick={() => setBillingCycle("monthly")}
                      className={cn("px-3 py-1 rounded-md text-sm font-medium transition-all", billingCycle === "monthly" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500")}
                    >
                      Monthly
                    </button>
                    <button 
                      onClick={() => setBillingCycle("yearly")}
                      className={cn("px-3 py-1 rounded-md text-sm font-medium transition-all", billingCycle === "yearly" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500")}
                    >
                      Yearly (-20%)
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {basePlans.map(plan => {
                    const price = getPrice(plan.pricing);
                    const isSelected = selectedBasePlan === plan.id;
                    return (
                      <div 
                        key={plan.id}
                        onClick={() => handleBasePlanSelect(plan.id)}
                        className={cn(
                          "relative p-5 rounded-xl border-2 transition-all cursor-pointer flex flex-col",
                          isSelected 
                            ? "border-panlit-orange bg-orange-50/30 shadow-md" 
                            : "border-slate-100 hover:border-slate-300 hover:bg-slate-50"
                        )}
                      >
                        {plan.highlight && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-panlit-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Most Popular
                          </div>
                        )}
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-bold text-slate-900">{plan.name}</h4>
                          {isSelected && <div className="w-5 h-5 bg-panlit-orange rounded-full flex items-center justify-center"><Check size={12} className="text-white" /></div>}
                        </div>
                        <p className="text-xs text-slate-500 mb-4 h-8">{plan.description}</p>
                        <div className="text-xl font-bold text-slate-900 mb-4">
                          {price === 0 ? "Free" : `${currencyData.symbol}${price.toLocaleString()}`}
                          {price > 0 && <span className="text-xs font-normal text-slate-500">/{billingCycle === 'monthly' ? 'mo' : 'mo'}</span>}
                        </div>
                        <ul className="space-y-2 mt-auto">
                          {plan.features.slice(0, 3).map((f, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                              <Check size={12} className="text-green-500 mt-0.5 shrink-0" />
                              {f}
                            </li>
                          ))}
                          <li className="text-xs text-panlit-orange font-medium mt-2">+ more features</li>
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* 3. Add-Ons Selector */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Layers size={20} className="text-panlit-orange" />
                  Step 3: Select Add-Ons (Optional)
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {addOns.map(addon => {
                    const price = getPrice(addon.pricing);
                    const isSelected = selectedAddons.includes(addon.id);
                    const isDisabled = addon.id !== "website_starter";
                    
                    return (
                      <div 
                        key={addon.id}
                        onClick={() => !isDisabled && toggleAddon(addon.id)}
                        className={cn(
                          "p-4 rounded-xl border-2 transition-all flex items-center justify-between group relative",
                          isSelected 
                            ? "border-panlit-orange bg-orange-50/30" 
                            : isDisabled 
                              ? "border-slate-100 bg-slate-50 opacity-60 cursor-not-allowed" 
                              : "border-slate-100 hover:border-slate-300 hover:bg-slate-50 cursor-pointer"
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "p-2 rounded-lg", 
                            isSelected ? "bg-white text-panlit-orange" : "bg-slate-100 text-slate-500"
                          )}>
                            <addon.icon size={20} />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 text-sm">{addon.name}</h4>
                            <p className="text-xs text-slate-500">{addon.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-slate-900 text-sm">
                            {price === 0 ? "Free" : `${currencyData.symbol}${price.toLocaleString()}`}
                          </div>
                          {!isDisabled && (
                            <div className={cn(
                              "w-5 h-5 rounded border ml-auto mt-1 flex items-center justify-center transition-colors",
                              isSelected ? "bg-panlit-orange border-panlit-orange" : "border-slate-300 bg-white"
                            )}>
                              {isSelected && <Check size={12} className="text-white" />}
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Summary */}
            <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit">
              <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl">
                <h3 className="text-xl font-bold font-heading mb-6">Estimated Monthly Cost</h3>
                
                {/* Base Plan Line */}
                <div className="flex justify-between items-start py-3 border-b border-white/10">
                  <div>
                    <p className="font-medium text-white">{basePlans.find(p => p.id === selectedBasePlan)?.name}</p>
                    <p className="text-xs text-slate-400">Base Subscription</p>
                  </div>
                  <p className="font-medium">{basePlanCost === 0 ? "Free" : `${currencyData.symbol}${basePlanCost.toLocaleString()}`}</p>
                </div>

                {/* Addons Lines */}
                {selectedAddons.length > 0 && (
                  <div className="py-3 border-b border-white/10 space-y-2">
                    {selectedAddons.map(id => {
                      const addon = addOns.find(a => a.id === id);
                      const price = getPrice(addon?.pricing || {});
                      return (
                        <div key={id} className="flex justify-between items-start">
                          <p className="text-sm text-slate-300">{addon?.name}</p>
                          <p className="text-sm font-medium">{price === 0 ? "Free" : `${currencyData.symbol}${price.toLocaleString()}`}</p>
                        </div>
                      )
                    })}
                  </div>
                )}

                {/* Transaction Fee Line */}
                <div className="flex justify-between items-start py-3 border-b border-white/10 mb-6">
                  <div>
                    <p className="font-medium text-white">Transaction Fees</p>
                    <p className="text-xs text-slate-400">
                      0.5% per booking
                      {transactionFeeCap > 0 && ` (capped at ${currencyData.symbol}${transactionFeeCap})`}
                    </p>
                  </div>
                  <p className="font-medium">{currencyData.symbol}{totalTransactionFees.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</p>
                </div>

                {/* Total */}
                <div className="bg-white/10 rounded-xl p-4 mb-6">
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Total Estimated Cost</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">
                      {currencyData.symbol}{totalEstimatedMonthlyCost.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                    </span>
                    <span className="text-sm text-slate-400">/month</span>
                  </div>
                  {billingCycle === "yearly" && (
                    <p className="text-xs text-green-400 mt-1">Billed annually (20% savings applied)</p>
                  )}
                </div>

                <Button className="w-full bg-panlit-orange hover:bg-orange-600 text-white font-bold h-12 rounded-xl text-lg mb-4">
                  Start Building for Free
                </Button>
                <p className="text-center text-slate-500 text-xs">
                  No credit card required. Cancel anytime.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Currency Table Section */}
        <section className="bg-slate-50 py-16 border-t border-slate-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 mb-4">
                Detailed Feature Breakdown
              </h2>
              <p className="text-slate-600">
                Compare features across our base plans to find the right fit for your business.
              </p>
            </div>
            
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm max-w-5xl mx-auto mb-24">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 w-1/3">Feature</th>
                      <th className="px-6 py-4 text-center w-1/5">Free Plan</th>
                      <th className="px-6 py-4 text-center w-1/5 text-panlit-orange">Professional</th>
                      <th className="px-6 py-4 text-center w-1/5">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {featureComparison.map((section, idx) => (
                      <>
                        <tr key={section.category} className="bg-slate-50/50">
                          <td colSpan={4} className="px-6 py-3 font-bold text-slate-900 text-xs uppercase tracking-wider">
                            {section.category}
                          </td>
                        </tr>
                        {section.features.map((feature, fIdx) => (
                          <tr key={`${idx}-${fIdx}`} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4 font-medium text-slate-700">{feature.name}</td>
                            
                            {/* Free Column */}
                            <td className="px-6 py-4 text-center">
                              {feature.free === true ? <Check size={18} className="mx-auto text-green-500" /> : 
                               feature.free === false ? <X size={18} className="mx-auto text-slate-300" /> : 
                               <span className="text-slate-600 font-medium">{feature.free}</span>}
                            </td>
                            
                            {/* Professional Column */}
                            <td className="px-6 py-4 text-center bg-orange-50/10">
                              {feature.pro === true ? <Check size={18} className="mx-auto text-panlit-orange" /> : 
                               feature.pro === false ? <X size={18} className="mx-auto text-slate-300" /> : 
                               <span className="text-panlit-orange font-bold">{feature.pro}</span>}
                            </td>
                            
                            {/* Premium Column */}
                            <td className="px-6 py-4 text-center">
                              {feature.prem === true ? <Check size={18} className="mx-auto text-green-500" /> : 
                               feature.prem === false ? <X size={18} className="mx-auto text-slate-300" /> : 
                               <span className="text-slate-900 font-bold">{feature.prem}</span>}
                            </td>
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 mb-4">
                Supported Currencies
              </h2>
              <p className="text-slate-600">
                We support local payments in 25+ currencies with capped transaction fees.
              </p>
            </div>
            
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm max-w-4xl mx-auto">
              <div className="overflow-x-auto max-h-[400px] overflow-y-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-200 sticky top-0">
                    <tr>
                      <th className="px-6 py-4">Region</th>
                      <th className="px-6 py-4">Currency</th>
                      <th className="px-6 py-4">Code</th>
                      <th className="px-6 py-4">Max Fee / Booking</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {currencies.sort((a,b) => a.region.localeCompare(b.region)).map((currency) => (
                      <tr key={currency.code} className="hover:bg-slate-50/50">
                        <td className="px-6 py-4 text-slate-500 font-medium">{currency.region}</td>
                        <td className="px-6 py-4 font-medium text-slate-900">{currency.name}</td>
                        <td className="px-6 py-4 text-slate-500 font-mono">{currency.code}</td>
                        <td className="px-6 py-4 text-panlit-orange font-bold">
                          {currency.maxFee > 0 ? `${currency.symbol}${currency.maxFee}` : "0.5%"}
                        </td>
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
