import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { FeaturesGrid } from "@/components/landing/features-grid";
import { Integrations } from "@/components/landing/integrations";
import { AnalyticsSection } from "@/components/landing/analytics-section";
import { Testimonials } from "@/components/landing/testimonials";
import { BlogPreview } from "@/components/landing/blog-preview";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <FeaturesGrid />
        <AnalyticsSection />
        <Integrations />
        <Testimonials />
        <BlogPreview />
        
        {/* CTA Section */}
        <section className="py-24 bg-panlit-dark relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-panlit-orange/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
           <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
             <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
               Ready to scale your operations?
             </h2>
             <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
               Join hundreds of tour operators and experience creators who trust Panlit to run their business.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button size="lg" className="bg-panlit-orange hover:bg-orange-600 text-white font-bold h-14 px-10 rounded-full text-lg">
                 Get Started for Free
               </Button>
               <Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 font-bold h-14 px-10 rounded-full text-lg">
                 Book a Demo
               </Button>
             </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
