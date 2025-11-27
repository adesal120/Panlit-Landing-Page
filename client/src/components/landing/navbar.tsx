import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-white/80 backdrop-blur-md border-slate-200 py-3 shadow-sm" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-panlit-orange flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
              P
            </div>
            <span className={cn(
              "text-xl font-bold font-heading",
              isScrolled ? "text-panlit-dark" : "text-white"
            )}>
              Panlit
            </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "Solutions", "Pricing", "Resources"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "text-sm font-medium transition-colors hover:text-panlit-orange",
                isScrolled ? "text-slate-600" : "text-slate-200"
              )}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className={cn(
            "font-medium hover:bg-white/10",
            isScrolled ? "text-panlit-dark hover:text-panlit-orange hover:bg-slate-100" : "text-white hover:text-white"
          )}>
            Log in
          </Button>
          <Button className="bg-panlit-orange hover:bg-orange-600 text-white font-medium rounded-full px-6">
            Book a demo
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-slate-900" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-slate-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-4 flex flex-col gap-4 md:hidden shadow-xl animate-in slide-in-from-top-5">
          {["Features", "Solutions", "Pricing", "Resources"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-600 font-medium py-2 hover:text-panlit-orange"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="h-px bg-slate-100 my-2" />
          <Button variant="ghost" className="justify-start text-slate-600">
            Log in
          </Button>
          <Button className="bg-panlit-orange hover:bg-orange-600 text-white w-full rounded-full">
            Book a demo
          </Button>
        </div>
      )}
    </nav>
  );
}
