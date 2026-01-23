import { motion } from "framer-motion";
import { HelpCircle, BookOpen, Users, Mail, MessageSquare, Zap, FileText, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

interface ResourceCard {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
  cta: string;
}

const mainResources: ResourceCard[] = [
  {
    icon: HelpCircle,
    title: "Support Center",
    description: "Find answers to frequently asked questions and browse articles covering common topics. Quick solutions to help you get the most out of Panlit.",
    link: "#",
    cta: "Browse articles"
  },
  {
    icon: BookOpen,
    title: "Guides & Tutorials",
    description: "Comprehensive guides, demo videos, feature documentation, and best practices. Learn how to use every aspect of Panlit to manage your business effectively.",
    link: "#",
    cta: "View guides"
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with other tourism operators and experience creators using Panlit. Share tips, ask questions, learn best practices, and discover how others are running their businesses smarter.",
    link: "#",
    cta: "Join community"
  }
];

const quickLinks = [
  { icon: MessageSquare, title: "Contact Support", description: "Email us anytime at support@panlit.com" },
  { icon: Video, title: "Video Tutorials", description: "Step-by-step video guides for all features" },
  { icon: FileText, title: "API Documentation", description: "Integrate Panlit with your own tools" },
  { icon: Zap, title: "Feature Requests", description: "Suggest features you'd like to see" }
];

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I get started with Panlit?",
    answer: "Sign up for a free trial, and you'll be guided through the onboarding process. We have video tutorials for each step. For more detailed help, check out our Getting Started guide or contact our support team."
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "Your data is yours. If you cancel, you can export all your data including bookings, customer information, and more. We'll provide you with a full backup before your account is closed."
  },
  {
    question: "How often do you add new features?",
    answer: "We ship updates and new features regularly—usually every 2-3 weeks. Follow our changelog to stay updated on what's new. You can also suggest features you'd like to see."
  },
  {
    question: "Do you offer training for my team?",
    answer: "Yes! We offer onboarding calls for Professional and Enterprise plans. Our team will walk your staff through all the features and best practices tailored to your business."
  },
  {
    question: "What integrations do you support?",
    answer: "We integrate with 50+ platforms including Stripe, Paystack, TripAdvisor, WhatsApp, Google, and more. Check our integrations page for the complete list, or contact us if you need a specific integration."
  },
  {
    question: "Is my data secure?",
    answer: "Yes. We use industry-standard encryption, regular security audits, and comply with GDPR, CCPA, and other data protection regulations. Your data is your property and we take security very seriously."
  }
];

export default function Support() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-panlit-dark pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-panlit-orange/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] translate-x-1/4 translate-y-1/4" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
                  Looking for support?
                </h1>
                <p className="text-lg text-slate-300 leading-relaxed">
                  We understand that sometimes you need a helping hand. Find the assistance you need below.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 md:p-8"
              >
                <p className="text-slate-300 mb-4">
                  We offer a range of comprehensive support options to assist you every step of the way. Whether you have a technical question, need guidance on using our features, or want to connect with fellow users, we've got you covered.
                </p>
                <p className="text-slate-200 font-medium">
                  You can also contact us directly at{" "}
                  <a href="mailto:support@panlit.com" className="text-panlit-orange hover:underline">
                    support@panlit.com
                  </a>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Resources Grid */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mainResources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <motion.div 
                    key={resource.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-xl border border-slate-200 p-8 hover:border-panlit-orange/30 hover:shadow-lg transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-panlit-orange/10 flex items-center justify-center mb-6 group-hover:bg-panlit-orange/20 transition-colors">
                      <Icon className="w-7 h-7 text-panlit-orange" />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                      {resource.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {resource.description}
                    </p>
                    <Button 
                      variant="ghost"
                      className="text-panlit-orange hover:text-panlit-dark hover:bg-orange-50"
                    >
                      {resource.cta} →
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-12 text-center">
              Quick Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a 
                    key={link.title}
                    href="#"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-slate-50 hover:bg-panlit-orange/5 border border-slate-200 hover:border-panlit-orange/30 rounded-lg p-6 transition-all cursor-pointer"
                  >
                    <Icon className="w-8 h-8 text-panlit-orange mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-slate-900 mb-1">{link.title}</h4>
                    <p className="text-sm text-slate-600">{link.description}</p>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-slate-600 mb-12 text-lg">
              Can't find what you're looking for? Check our help center or contact support.
            </p>

            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:border-panlit-orange/30 transition-colors"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-slate-600 mb-4">Still have questions?</p>
              <Button className="bg-panlit-orange hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg">
                Contact Support Team
              </Button>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 bg-panlit-dark relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-panlit-orange/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
          
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
                Need direct assistance?
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Our support team is here to help. Get a response within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-panlit-orange hover:bg-orange-600 text-white font-bold h-14 px-10 rounded-full text-lg">
                  Email Support
                </Button>
                <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 font-bold h-14 px-10 rounded-full text-lg">
                  Schedule Call
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
