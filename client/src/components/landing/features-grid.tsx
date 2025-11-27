import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  CreditCard, 
  LineChart, 
  QrCode, 
  FileText, 
  ShoppingBag, 
  Ticket,
  Users2,
  Percent,
  Globe,
  Box,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
  delay?: number;
  iconColor?: string;
  iconBg?: string;
}

function FeatureCard({ 
  title, 
  description, 
  icon: Icon, 
  className, 
  delay = 0,
  iconColor = "text-slate-600",
  iconBg = "bg-slate-50"
}: FeatureCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-all duration-300 group",
        className
      )}
    >
      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors", iconBg)}>
        <Icon className={cn("w-6 h-6 transition-colors", iconColor)} />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

export function FeaturesGrid() {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-panlit-orange font-bold tracking-wider uppercase text-sm mb-3">Powerful Features</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
            Everything your business needs
          </h3>
          <p className="text-slate-600 text-lg">
            One unified platform designed for tourism and experience businesses. Stop juggling tools and start scaling.
          </p>
        </div>

        {/* Top Grid: Big Card + Tall Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Large Card - Ticketing & Booking */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow relative group min-h-[400px] flex items-center justify-between p-8"
          >
            <div className="max-w-lg">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                <Ticket className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">Ticketing & Booking Management</h3>
              <p className="text-slate-700">
                Stop juggling WhatsApp, emails, and spreadsheets. Manage all your online and offline bookings in one place. Prevent double-bookings automatically.
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center w-1/3 flex-col gap-4">
              <div className="w-20 h-20 rounded-2xl bg-white/60 flex items-center justify-center shadow-sm">
                <Calendar className="w-10 h-10 text-blue-500 opacity-80" />
              </div>
              <div className="w-20 h-20 rounded-2xl bg-white/60 flex items-center justify-center shadow-sm">
                <CreditCard className="w-10 h-10 text-blue-500 opacity-80" />
              </div>
            </div>
          </motion.div>

          {/* Tall Card - QR Check-in */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-panlit-dark rounded-3xl border border-slate-800 shadow-sm relative group min-h-[400px] flex flex-col justify-center items-center p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
              <QrCode className="w-6 h-6 text-panlit-orange" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 font-heading text-center">QR Check-in</h3>
            <p className="text-slate-300 text-sm text-center max-w-xs">
              Streamline guest arrival. Scan tickets instantly with any device camera or USB scanner. No lists, no delays.
            </p>
            <div className="text-6xl mt-6 opacity-30">✓</div>
          </motion.div>
        </div>

        {/* Middle Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <FeatureCard 
            title="Payment Processing" 
            description="Accept payments globally with integrated secure gateways."
            icon={CreditCard}
            iconColor="text-green-600"
            iconBg="bg-green-50"
            delay={0.2}
          />
          <FeatureCard 
            title="Data & Analytics" 
            description="Real-time insights on revenue, trends, and best-selling experiences."
            icon={LineChart}
            iconColor="text-orange-600"
            iconBg="bg-orange-50"
            delay={0.25}
          />
          <FeatureCard 
            title="Calendar" 
            description="Unified view of all services. Prevent conflicts and optimize allocation."
            icon={Calendar}
            iconColor="text-blue-600"
            iconBg="bg-blue-50"
            delay={0.3}
          />
          <FeatureCard 
            title="Customer CRM" 
            description="Track preferences, history, and dietary needs for personalized service."
            icon={Users}
            iconColor="text-purple-600"
            iconBg="bg-purple-50"
            delay={0.35}
          />
        </div>

        {/* Bottom Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <FeatureCard 
            title="Inventory" 
            description="Track stock, supplies, and equipment resources across operations."
            icon={Box}
            iconColor="text-emerald-600"
            iconBg="bg-emerald-50"
            delay={0.4}
          />
          <FeatureCard 
            title="Staff Management" 
            description="Manage staff permissions, schedules, and roles securely."
            icon={Users2}
            iconColor="text-teal-600"
            iconBg="bg-teal-50"
            delay={0.45}
          />
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden p-6 hover:border-panlit-orange/30 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-pink-50 rounded-xl text-pink-600">
                <FileText size={24} />
              </div>
              <h3 className="text-lg font-bold font-heading">Custom Forms</h3>
            </div>
            <p className="text-slate-600 text-sm">
              Collect waivers and passport details automatically before the trip.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 }}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden p-6 hover:border-panlit-orange/30 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-violet-50 rounded-xl text-violet-600">
                <Percent size={24} />
              </div>
              <h3 className="text-lg font-bold font-heading">Discounts</h3>
            </div>
            <p className="text-slate-600 text-sm">
              Create promo codes and seasonal offers to drive bookings.
            </p>
          </motion.div>
        </div>

        {/* Full Width Online Store */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-3xl border border-teal-100 p-8 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-teal-100 rounded-xl text-teal-700">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-900">Online Storefront</h3>
            </div>
            <p className="text-slate-700 text-lg max-w-2xl">
              A beautiful, mobile-optimized booking page that embeds directly into your existing website. Turn visitors into customers instantly.
            </p>
          </div>
          <Button size="lg" className="bg-panlit-dark text-white hover:bg-panlit-dark/90 shrink-0">
            View Demo Store
          </Button>
        </motion.div>

      </div>
    </section>
  );
}