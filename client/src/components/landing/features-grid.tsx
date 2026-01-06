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
  Zap,
  Bot,
  MessageSquare,
  RefreshCcw,
  Layers
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
            One unified platform designed for tourism and hospitality businesses. Stop juggling tools and start scaling your operations.
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
              <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">Centralized Booking Engine</h3>
              <p className="text-slate-700">
                Stop juggling WhatsApp, emails, and spreadsheets. Manage all your room reservations, tour bookings, and activity slots in one place. Prevent overbooking automatically across all your inventory.
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
            <h3 className="text-2xl font-bold text-white mb-3 font-heading text-center">Seamless Check-in</h3>
            <p className="text-slate-300 text-sm text-center max-w-xs">
              Streamline guest arrival for tours or hotel stays. Scan tickets or check in guests instantly with any device. No lists, no delays.
            </p>
            <div className="text-6xl mt-6 opacity-30">✓</div>
          </motion.div>
        </div>

        {/* Middle Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <FeatureCard 
            title="Secure Payments & Reconciliation" 
            description="Accept card payments and bank transfers globally with automated reconciliation for every booking."
            icon={CreditCard}
            iconColor="text-green-600"
            iconBg="bg-green-50"
            delay={0.2}
          />
          <FeatureCard 
            title="Business Insights" 
            description="Real-time reporting on revenue, occupancy rates, and best-selling packages."
            icon={LineChart}
            iconColor="text-orange-600"
            iconBg="bg-orange-50"
            delay={0.25}
          />
          <FeatureCard 
            title="Smart Calendar" 
            description="Unified view of all rooms and tours. Prevent conflicts and optimize your schedule effortlessly."
            icon={Calendar}
            iconColor="text-blue-600"
            iconBg="bg-blue-50"
            delay={0.3}
          />
          <FeatureCard 
            title="Guest CRM" 
            description="Track guest preferences, history, and special requests to deliver personalized hospitality."
            icon={Users}
            iconColor="text-purple-600"
            iconBg="bg-purple-50"
            delay={0.35}
          />
        </div>

        {/* Bottom Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <FeatureCard 
            title="Resource Management" 
            description="Track room inventory, equipment, and supplies across all your properties and tours."
            icon={Box}
            iconColor="text-emerald-600"
            iconBg="bg-emerald-50"
            delay={0.4}
          />
          <FeatureCard 
            title="Team Management" 
            description="Manage staff schedules, roles, and permissions for front desk and guides securely."
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
              <h3 className="text-lg font-bold font-heading">Digital Waivers & Registration</h3>
            </div>
            <p className="text-slate-600 text-sm">
              Collect guest details, passport info, and liability waivers automatically before arrival.
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
              <h3 className="text-lg font-bold font-heading">Smart Promotions</h3>
            </div>
            <p className="text-slate-600 text-sm">
              Create dynamic promo codes and seasonal offers to drive direct bookings.
            </p>
          </motion.div>
        </div>

        {/* AI Website Builder Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.65 }}
          className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-3xl border border-purple-100 p-8 flex flex-col md:flex-row items-center justify-between gap-8 mb-6"
        >
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-100 rounded-xl text-purple-700">
                <Bot size={24} />
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-900">AI Website Builder</h3>
            </div>
            <p className="text-slate-700 text-lg max-w-2xl">
              Launch a professional, high-converting website for your hotel or tour business in seconds. AI-driven copy and layouts tailored to showcase your unique property and experiences.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Coming Soon</span>
            <div className="flex items-center gap-2 bg-purple-200/50 px-4 py-2 rounded-full text-purple-700 font-bold text-sm">
              <Zap size={16} />
              AI POWERED
            </div>
          </div>
        </motion.div>

        {/* New Features Grid - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-3xl border border-slate-200 p-8 hover:border-panlit-orange/30 transition-all group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-4 bg-orange-50 rounded-2xl text-orange-600">
                <Layers size={32} />
              </div>
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Coming Soon</span>
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900 mb-3">Channel Manager</h3>
            <p className="text-slate-600 leading-relaxed">
              Sync your availability and rates across Airbnb, Booking.com, TripAdvisor, Expedia, and local agents instantly. Maximize your reach while preventing double bookings entirely.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.75 }}
            className="bg-white rounded-3xl border border-slate-200 p-8 hover:border-panlit-orange/30 transition-all group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">
                <MessageSquare size={32} />
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Coming Soon</span>
                <div className="flex items-center gap-1.5 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                  <Zap size={12} />
                  AI POWERED
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900 mb-3">Unified AI Inbox</h3>
            <p className="text-slate-600 leading-relaxed">
              Centralize every guest interaction. Manage messages from Instagram, WhatsApp, Airbnb, Booking.com, and Email in one shared inbox. Let AI draft instant responses to save your team hours.
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
              <h3 className="text-2xl font-bold font-heading text-slate-900">Direct Booking Website</h3>
            </div>
            <p className="text-slate-700 text-lg max-w-2xl">
              A beautiful, mobile-optimized booking engine that embeds directly into your existing site. Turn lookers into bookers instantly—commission-free.
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