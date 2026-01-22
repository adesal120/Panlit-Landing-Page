import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Building2, Globe, Sparkles, Ticket, Trees } from "lucide-react";

const demos = [
  {
    id: "museums",
    title: "Museums & Attractions",
    fullTitle: "Museums, Galleries, Theatres & More",
    icon: Building2,
    videoId: "266206827f7840f5938013921a899d1a",
    description: "Manage exhibitions, ticketing, and visitor flow seamlessly."
  },
  {
    id: "tours",
    title: "Tours & Experiences",
    fullTitle: "Tour Operators, Agencies & Culinary",
    icon: Globe,
    videoId: "143c2bf56d6e4955ae92083e03cefb81",
    description: "Streamline bookings, manifests, and resource allocation."
  },
  {
    id: "spas",
    title: "Wellness & Beauty",
    fullTitle: "Spas, Wellness Centres & Yoga Studios",
    icon: Sparkles,
    videoId: "db7e9b8285954b709b2b037035e84ba7",
    description: "Effortless appointment scheduling and therapist management."
  },
  {
    id: "adventure",
    title: "Activities & Adventure",
    fullTitle: "Adventure Parks & Escape Rooms",
    icon: Ticket,
    videoId: "28548494b1164ce9ad8a3648fab84a39",
    description: "Handle waiver signing, capacity limits, and group bookings."
  },
  {
    id: "zoos",
    title: "Wildlife & Nature",
    fullTitle: "Zoos, Wildlife Parks & Aquariums",
    icon: Trees,
    videoId: "fe6113c02dd24c79bba358186ea8f489",
    description: "Ticketing, membership management, and entry control."
  }
];

export function DemoShowcase() {
  const [activeDemo, setActiveDemo] = useState(demos[0]);

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-panlit-orange font-bold tracking-wider uppercase text-sm mb-3">Watch a Demo</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
            Built for your industry
          </h3>
          <p className="text-slate-600 text-lg">
            See how Panlit adapts to the unique needs of your business.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Tabs/Navigation */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(demo)}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200 border",
                  activeDemo.id === demo.id
                    ? "bg-white border-panlit-orange/30 shadow-md scale-[1.02]"
                    : "bg-transparent border-transparent hover:bg-white/50 hover:border-slate-200 text-slate-600"
                )}
              >
                <div className={cn(
                  "p-3 rounded-lg transition-colors",
                  activeDemo.id === demo.id ? "bg-orange-50 text-panlit-orange" : "bg-slate-100 text-slate-500"
                )}>
                  <demo.icon size={20} />
                </div>
                <div>
                  <h4 className={cn(
                    "font-bold text-sm md:text-base", 
                    activeDemo.id === demo.id ? "text-slate-900" : "text-slate-600"
                  )}>
                    {demo.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                    {demo.fullTitle}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Video Player */}
          <div className="w-full lg:w-2/3">
            <motion.div
              key={activeDemo.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-panlit-dark rounded-2xl p-2 shadow-2xl overflow-hidden"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900">
                <iframe 
                  src={`https://www.loom.com/embed/${activeDemo.videoId}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`}
                  allowFullScreen 
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
              <div className="p-4 md:p-6 bg-panlit-dark text-white">
                <h4 className="text-lg font-bold mb-2">{activeDemo.fullTitle}</h4>
                <p className="text-slate-300 text-sm">
                  {activeDemo.description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
