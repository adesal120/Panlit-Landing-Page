import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import dashboardImage from "@assets/generated_images/modern_saas_booking_dashboard_interface.png";

export function AnalyticsSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold font-heading text-slate-900 mb-6 leading-tight">
              AI-powered analytics and<br />
              <span className="relative inline-block">
                <span className="relative z-10">—without the</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-panlit-orange/20 -z-0"></span>
              </span>
              <br />complexity or cost
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Panlit is the AI-native platform built specifically for tourism and experience businesses. Manage, automate, and track your ticketing, bookings, customers, communication, revenue, and more. One simple platform. More than booking software—it's your full operations hub.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-panlit-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-base">
                Book a demo
              </Button>
              <Button variant="outline" className="border-2 border-slate-300 hover:border-panlit-orange text-slate-900 font-bold py-3 px-6 rounded-lg text-base">
                Explore features
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-bold text-panlit-orange mb-1">500+</p>
                <p className="text-sm text-slate-600">Businesses trust Panlit</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-panlit-orange mb-1">$50M+</p>
                <p className="text-sm text-slate-600">In bookings managed</p>
              </div>
            </div>
          </motion.div>

          {/* Right Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-r from-panlit-orange/20 to-blue-500/20 rounded-3xl blur-2xl -z-10"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
              <img 
                src={dashboardImage} 
                alt="Panlit Dashboard" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
