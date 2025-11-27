import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
}

const featuredPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Reduce No-Shows by 40% with Smart Reminders",
    excerpt: "Discover proven strategies to increase guest show rates using automated email, SMS, and WhatsApp reminders tailored to your business.",
    date: "Nov 22, 2025",
    author: "Sarah Chen",
    readTime: "5 min read",
    category: "Operations"
  },
  {
    id: "2",
    title: "Pricing Your Tours Right: Data-Driven Strategy Guide",
    excerpt: "Learn how to analyze booking trends and competitor pricing to maximize revenue without losing customers to price-sensitive markets.",
    date: "Nov 18, 2025",
    author: "James O'Brien",
    readTime: "8 min read",
    category: "Business"
  },
  {
    id: "3",
    title: "Guest Experience: Creating Unforgettable Moments",
    excerpt: "From pre-booking to post-tour follow-ups, we break down the complete journey and share expert tips to turn one-time guests into repeat customers.",
    date: "Nov 15, 2025",
    author: "Maria Santos",
    readTime: "6 min read",
    category: "Marketing"
  }
];

export function BlogPreview() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-panlit-orange font-bold tracking-wider uppercase text-sm mb-3">Learn & Grow</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-slate-900">
              Stay ahead with expert insights
            </h3>
            <p className="text-slate-600 text-lg mt-4 max-w-2xl">
              Tips, strategies, and industry trends to help tourism operators thrive
            </p>
          </div>
          <Button 
            variant="ghost"
            className="hidden md:flex items-center gap-2 text-panlit-orange hover:text-panlit-dark"
          >
            View all articles
            <ArrowRight size={18} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col border border-slate-200 rounded-xl p-6 hover:border-panlit-orange/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-panlit-orange bg-orange-50 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-slate-500">{post.readTime}</span>
              </div>
              
              <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-panlit-orange transition-colors leading-snug">
                {post.title}
              </h4>
              
              <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <User size={14} />
                  {post.author}
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm"
                className="justify-start text-panlit-orange hover:text-panlit-dark mt-4 pl-0"
              >
                Read article
                <ArrowRight size={14} className="ml-2" />
              </Button>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Button className="md:hidden bg-panlit-orange hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full">
            View all articles
          </Button>
        </div>

        {/* Newsletter CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-panlit-dark to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
            Get weekly tips and strategies
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get expert insights delivered to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-panlit-orange"
            />
            <Button className="bg-panlit-orange hover:bg-orange-600 text-white font-semibold rounded-full px-8">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
