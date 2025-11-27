import { motion } from "framer-motion";
import { Clock, Hand, Search, Zap } from "lucide-react";

interface Testimonial {
  icon: React.ElementType;
  metric: string;
  title: string;
  quote: string;
  author: string;
  role: string;
  highlighted?: boolean;
}

const testimonials: Testimonial[] = [
  {
    icon: Hand,
    metric: "0",
    title: "scheduling disasters",
    quote: "We haven't had a double booking since day three. Our reputation is finally recovering.",
    author: "— Tour operator",
    role: "Tour Operator",
  },
  {
    icon: Clock,
    metric: "15hrs",
    title: "back in your week",
    quote: "I spent Sundays on spreadsheets. Now I spend them with family. Panlit handles the chaos.",
    author: "— SPA owner",
    role: "SPA Owner",
    highlighted: true,
  },
  {
    icon: Search,
    metric: "95%",
    title: "guest satisfaction",
    quote: "My guests think I'm incredibly organised—detailed confirmations, timely reminders, personalised follow-ups. Panlit does it all automatically.",
    author: "— Kayak instructor",
    role: "Kayak Instructor",
  },
  {
    icon: Zap,
    metric: "10min",
    title: "to start winning",
    quote: "I expected days of setup. Took 10 minutes. First booking logged that afternoon.",
    author: "— Museum operations lead",
    role: "Museum Operations Lead",
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-panlit-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-panlit-orange/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white leading-tight mb-6">
              Real results, real <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-panlit-orange to-orange-300">operators</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-300 text-lg leading-relaxed"
          >
            What tourism and experience businesses achieve in their first week. Built by someone who managed 1,500+ operators and saw these problems firsthand.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-all group ${
                  testimonial.highlighted
                    ? "bg-panlit-orange text-white border border-orange-400 lg:row-span-2 lg:col-span-1 flex flex-col justify-center"
                    : "bg-slate-900/50 border border-white/10 text-slate-200 hover:border-white/20"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  testimonial.highlighted
                    ? "bg-white/20"
                    : "bg-white/10 group-hover:bg-panlit-orange/20"
                }`}>
                  <Icon className={`w-6 h-6 ${testimonial.highlighted ? "text-white" : "text-panlit-orange"}`} />
                </div>

                <div className="mb-6">
                  <span className={`text-5xl md:text-6xl font-bold font-heading block leading-none mb-1 ${
                    testimonial.highlighted ? "text-white" : "text-panlit-orange"
                  }`}>
                    {testimonial.metric}
                  </span>
                  <span className={`text-sm md:text-base font-medium ${
                    testimonial.highlighted ? "text-white/90" : "text-slate-400"
                  }`}>
                    {testimonial.title}
                  </span>
                </div>

                <blockquote className={`mb-6 leading-relaxed italic text-sm md:text-base flex-grow ${
                  testimonial.highlighted ? "text-white/95" : "text-slate-300"
                }`}>
                  "{testimonial.quote}"
                </blockquote>

                <p className={`text-xs md:text-sm font-medium ${
                  testimonial.highlighted ? "text-white/80" : "text-slate-500"
                }`}>
                  {testimonial.author}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
