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
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import bookingDashboard from "@assets/generated_images/premium_booking_dashboard_mockup.png";
import crmInterface from "@assets/generated_images/premium_customer_crm_interface.png";
import calendarScheduling from "@assets/generated_images/premium_calendar_scheduling_mockup.png";
import analyticsDashboard from "@assets/generated_images/premium_analytics_dashboard.png";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
  delay?: number;
}

function FeatureCard({ title, description, icon: Icon, className, delay = 0 }: FeatureCardProps) {
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
      <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-panlit-orange/10 flex items-center justify-center mb-4 transition-colors">
        <Icon className="w-6 h-6 text-slate-600 group-hover:text-panlit-orange transition-colors" />
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
          <h2 className="text-panlit-orange font-bold tracking-wider uppercase text-sm mb-3">Everything you need</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
            One platform to manage your entire operation
          </h3>
          <p className="text-slate-600 text-lg">
            Panlit replaces fragmented tools with a unified system designed specifically for tourism and experience creators.
          </p>
        </div>

        {/* Main Feature Highlights - Bento Grid Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Large Card 1 - Bookings with Dashboard Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative group overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-0">
              <div className="p-8 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  <Ticket className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">Centralized Booking Management</h3>
                <p className="text-slate-600">
                  Stop juggling WhatsApp, emails, and spreadsheets. Manage all your online and offline bookings in one place.
                </p>
              </div>
              <div className="bg-slate-50 flex items-center justify-center overflow-hidden">
                <img src={bookingDashboard} alt="Booking Dashboard" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Tall Card - Check-in */}
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
              Streamline guest arrival. Scan tickets instantly with any device camera or USB scanner. No more printed lists.
            </p>
            <div className="text-6xl mt-6 opacity-30">✓</div>
          </motion.div>
        </div>

        {/* Secondary Grid - Image-Enhanced Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {/* Calendar Feature with Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="bg-slate-50 h-48 overflow-hidden">
              <img src={calendarScheduling} alt="Calendar Scheduling" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">Smart Calendar</h3>
              <p className="text-slate-600 text-sm">Unified view of all services. Prevent conflicts and optimize resource allocation.</p>
            </div>
          </motion.div>

          {/* CRM Feature with Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="bg-slate-50 h-48 overflow-hidden">
              <img src={crmInterface} alt="Customer CRM" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">Customer CRM</h3>
              <p className="text-slate-600 text-sm">Track preferences, history, and dietary needs to deliver personalized experiences.</p>
            </div>
          </motion.div>

          {/* Analytics Feature with Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="bg-slate-50 h-48 overflow-hidden">
              <img src={analyticsDashboard} alt="Analytics Dashboard" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center mb-4">
                <LineChart className="w-5 h-5 text-panlit-orange" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">Analytics & Insights</h3>
              <p className="text-slate-600 text-sm">Real-time insights on revenue, trends, and best-selling experiences.</p>
            </div>
          </motion.div>

          {/* Team Roles - Icon Only */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-3xl border border-slate-200 p-6 hover:shadow-md transition-shadow flex flex-col justify-center"
          >
            <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
              <Users2 className="w-5 h-5 text-teal-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">Team Roles</h3>
            <p className="text-slate-600 text-sm">Manage staff permissions securely. Give everyone clarity on their schedule.</p>
          </motion.div>
        </div>

        {/* Third Grid - New Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden p-8 hover:border-panlit-orange/30 transition-colors"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-orange-50 rounded-lg text-panlit-orange">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-bold font-heading">Custom Forms</h3>
            </div>
            <p className="text-slate-600 text-sm mb-6">
              Collect waivers, passport details, or dietary restrictions automatically before the trip starts.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden p-8 hover:border-panlit-orange/30 transition-colors"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
                <Percent size={24} />
              </div>
              <h3 className="text-xl font-bold font-heading">Discount Engine</h3>
            </div>
            <p className="text-slate-600 text-sm mb-6">
              Create promo codes, early bird specials, and seasonal offers to drive more bookings.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded border border-slate-100 text-xs">
                <span className="font-mono font-bold text-slate-700">SUMMER20</span>
                <span className="text-green-600 font-medium">Active</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded border border-slate-100 text-xs">
                <span className="font-mono font-bold text-slate-700">VIP_GUEST</span>
                <span className="text-green-600 font-medium">Active</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden p-8 hover:border-panlit-orange/30 transition-colors"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-teal-50 rounded-lg text-teal-600">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-xl font-bold font-heading">Online Store</h3>
            </div>
            <p className="text-slate-600 text-sm mb-6">
              A beautiful, mobile-optimized booking page that embeds directly into your existing website.
            </p>
            <div className="rounded-lg overflow-hidden border border-slate-100 bg-slate-50 p-4 flex items-center justify-center">
              <Button size="sm" className="w-full bg-panlit-dark text-white hover:bg-panlit-dark/90">Book Now</Button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
