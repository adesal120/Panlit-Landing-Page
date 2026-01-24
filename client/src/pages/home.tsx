import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { FeaturesGrid } from "@/components/landing/features-grid";
import { DemoShowcase } from "@/components/landing/demo-showcase";
import { Integrations } from "@/components/landing/integrations";
import { Testimonials } from "@/components/landing/testimonials";
import { BlogPreview } from "@/components/landing/blog-preview";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/seo";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO 
        title="Panlit | All-in-One Software for Tourism & Hospitality"
        description="Everything you need to manage bookings, delight guests, and grow your tourism or hospitality business. AI-powered software that works while you sleep, so you can focus on delivering unforgettable experiences."
        keywords="tourism management software, hospitality business software, all-in-one tourism software, guest experience software, booking automation software, hospitality operations software, AI-powered tourism software, unified hospitality software, smart business software, end-to-end tourism software"
      />
      <Navbar />
      <main>
        <Hero />
        <FeaturesGrid />
        <DemoShowcase />
        <Integrations />
        <Testimonials />
        {/* <BlogPreview /> */}
        
        {/* CTA Section */}
        <section className="py-24 bg-panlit-dark relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-panlit-orange/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
           <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
             <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
               Ready to scale your operations?
             </h2>
             <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
               Join hundreds of tourism, hospitality, and experience businesses who trust Panlit to run their business.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a href="https://dashboard.panlit.com/" target="_blank" rel="noopener noreferrer">
                 <Button size="lg" className="bg-panlit-orange hover:bg-orange-600 text-white font-bold h-14 px-10 rounded-full text-lg w-full sm:w-auto">
                   Get Started for Free
                 </Button>
               </a>
               <a href="https://tally.so/r/nrPA95" target="_blank" rel="noopener noreferrer">
                 <Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 font-bold h-14 px-10 rounded-full text-lg w-full sm:w-auto">
                   Book a Demo
                 </Button>
               </a>
             </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
