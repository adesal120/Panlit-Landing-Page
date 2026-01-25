import { useState } from "react";
import { m as motion } from "framer-motion";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowLeft, Search } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image?: string;
}

const allBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Reduce No-Shows by 40% with Smart Reminders",
    excerpt: "Discover proven strategies to increase guest show rates using automated email, SMS, and WhatsApp reminders tailored to your business.",
    content: "Full blog content would go here...",
    date: "Nov 22, 2025",
    author: "Sarah Chen",
    readTime: "5 min read",
    category: "Operations"
  },
  {
    id: "2",
    title: "Pricing Your Tours Right: Data-Driven Strategy Guide",
    excerpt: "Learn how to analyze booking trends and competitor pricing to maximize revenue without losing customers to price-sensitive markets.",
    content: "Full blog content would go here...",
    date: "Nov 18, 2025",
    author: "James O'Brien",
    readTime: "8 min read",
    category: "Business"
  },
  {
    id: "3",
    title: "Guest Experience: Creating Unforgettable Moments",
    excerpt: "From pre-booking to post-tour follow-ups, we break down the complete journey and share expert tips to turn one-time guests into repeat customers.",
    content: "Full blog content would go here...",
    date: "Nov 15, 2025",
    author: "Maria Santos",
    readTime: "6 min read",
    category: "Marketing"
  },
  {
    id: "4",
    title: "Integration Best Practices: Connecting Your Tools",
    excerpt: "A comprehensive guide to integrating Panlit with your existing payment processors, accounting software, and marketing platforms.",
    content: "Full blog content would go here...",
    date: "Nov 12, 2025",
    author: "Mike Johnson",
    readTime: "7 min read",
    category: "Technical"
  },
  {
    id: "5",
    title: "The ROI of Automation: How Teams Save 15+ Hours Weekly",
    excerpt: "We analyzed data from 500+ businesses using Panlit and found significant time savings. Here's what they're doing.",
    content: "Full blog content would go here...",
    date: "Nov 8, 2025",
    author: "Emma Wilson",
    readTime: "4 min read",
    category: "Case Studies"
  },
];

const categories = ["All", "Operations", "Business", "Marketing", "Technical", "Case Studies"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = allBlogPosts.filter(post => {
    const matchCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                       post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-panlit-dark py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-panlit-orange/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
                Blog & Resources
              </h1>
              <p className="text-xl text-slate-300">
                Expert insights, actionable tips, and industry trends to help you run your tourism business better.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="bg-slate-50 py-8 sticky top-24 z-40 border-b border-slate-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-panlit-orange focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-panlit-orange text-white"
                      : "bg-white border border-slate-200 text-slate-700 hover:border-panlit-orange"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group flex flex-col border border-slate-200 rounded-xl overflow-hidden hover:border-panlit-orange/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="h-40 bg-gradient-to-br from-panlit-orange/20 to-blue-500/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-panlit-dark/5 to-transparent group-hover:from-panlit-dark/10 transition-all" />
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-panlit-orange bg-orange-50 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-slate-500">{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-panlit-orange transition-colors leading-snug">
                        {post.title}
                      </h3>
                      
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
                        className="w-full mt-4 bg-panlit-orange hover:bg-orange-600 text-white font-semibold rounded-lg"
                      >
                        Read Article
                      </Button>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-600 text-lg">No articles found matching your search.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
