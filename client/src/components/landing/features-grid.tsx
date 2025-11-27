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
  description?: string;
  icon: React.ElementType;
  className?: string;
  delay?: number;
  size?: "sm" | "md" | "lg";
  gradient?: string;
  iconBg?: string;
  iconColor?: string;
}

function FeatureCard({ 
  title, 
  description, 
  icon: Icon, 
  className, 
  delay = 0,
  size = "md",
  gradient = "from-slate-50 to-slate-100",
  iconBg = "bg-slate-100",
  iconColor = "text-slate-700"
}: FeatureCardProps) {
  const sizeClasses = {
    sm: "p-6",
    md: "p-8",
    lg: "p-10"
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "rounded-3xl border border-white/50 bg-gradient-to-br shadow-sm hover:shadow-xl hover:border-white transition-all duration-300 group overflow-hidden",
        sizeClasses[size],
        `bg-gradient-to-br ${gradient}`,
        className
      )}
    >
      <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all", iconBg)}>
        <Icon className={cn("w-7 h-7", iconColor)} />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">{title}</h3>
      {description && <p className="text-slate-600 text-sm leading-relaxed">{description}</p>}
    </motion.div>
  );
}

export function FeaturesGrid() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-panlit-orange font-bold tracking-wider uppercase text-sm mb-3">Powerful Features</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
            Everything your business needs
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            One unified platform designed for tourism and experience businesses. Stop juggling tools and start scaling.
          </p>
        </div>

        {/* Premium Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Analytics - Large Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="md:col-span-2 md:row-span-2 rounded-3xl border border-white/50 bg-gradient-to-br from-orange-50 via-orange-50 to-red-50 shadow-sm hover:shadow-xl transition-all p-10 flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center mb-6">
                <LineChart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">Data & Analytics</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Real-time insights on revenue, bookings, trends, and best-selling experiences. Make data-driven decisions.
              </p>
            </div>
            <div className="flex gap-2 mt-6">
              <div className="h-1 flex-1 bg-gradient-to-r from-orange-300 to-red-300 rounded-full"></div>
              <div className="h-1 flex-1 bg-gradient-to-r from-orange-200 to-red-200 rounded-full"></div>
            </div>
          </motion.div>

          {/* 2. Checkin - Tall Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:row-span-2 rounded-3xl border border-white/50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-sm hover:shadow-xl transition-all p-10 flex flex-col justify-between text-white"
          >
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <QrCode className="w-8 h-8 text-panlit-orange" />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-heading">QR Check-in</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Instant guest arrival. Scan tickets with any camera or USB scanner. No lists, no delays.
              </p>
            </div>
            <div className="text-5xl opacity-20 mt-6">✓</div>
          </motion.div>

          {/* 3. Calendar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <FeatureCard 
              title="Calendar" 
              description="Unified view of all services. Prevent conflicts and optimize allocation."
              icon={Calendar}
              size="lg"
              gradient="from-cyan-50 to-blue-50"
              iconBg="bg-cyan-100"
              iconColor="text-cyan-600"
            />
          </motion.div>

          {/* 4. CRM */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <FeatureCard 
              title="Customer Relations" 
              description="Track preferences and history for personalized guest experiences."
              icon={Users}
              size="lg"
              gradient="from-purple-50 to-pink-50"
              iconBg="bg-purple-100"
              iconColor="text-purple-600"
            />
          </motion.div>

          {/* 5. Inventory */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <FeatureCard 
              title="Inventory" 
              description="Track stock, supplies, and resources across all operations."
              icon={Box}
              size="lg"
              gradient="from-emerald-50 to-teal-50"
              iconBg="bg-emerald-100"
              iconColor="text-emerald-600"
            />
          </motion.div>

          {/* 6. Forms */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <FeatureCard 
              title="Custom Forms" 
              description="Collect waivers, passport details, and preferences before experiences."
              icon={FileText}
              size="lg"
              gradient="from-pink-50 to-rose-50"
              iconBg="bg-pink-100"
              iconColor="text-pink-600"
            />
          </motion.div>

          {/* 7. Discounts */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <FeatureCard 
              title="Discount Engine" 
              description="Create promo codes and seasonal offers to drive bookings."
              icon={Percent}
              size="lg"
              gradient="from-violet-50 to-indigo-50"
              iconBg="bg-violet-100"
              iconColor="text-violet-600"
            />
          </motion.div>

          {/* 8. Staff Management */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <FeatureCard 
              title="Staff Management" 
              description="Manage permissions, schedules, and roles securely."
              icon={Users2}
              size="lg"
              gradient="from-teal-50 to-cyan-50"
              iconBg="bg-teal-100"
              iconColor="text-teal-600"
            />
          </motion.div>

          {/* 9. Online Shopfront */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <FeatureCard 
              title="Online Storefront" 
              description="Beautiful booking page embedded directly into your website."
              icon={ShoppingBag}
              size="lg"
              gradient="from-lime-50 to-green-50"
              iconBg="bg-lime-100"
              iconColor="text-lime-600"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
