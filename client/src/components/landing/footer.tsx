import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import panlitLogoCombo from "@/assets/panlit-logo-combo.png";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 cursor-pointer">
                <img 
                  src={panlitLogoCombo} 
                  alt="Panlit Logo" 
                  className="h-20 w-auto hover:scale-105 transition-transform"
                />
            </Link>
            <p className="text-sm text-slate-400 mb-6">
              Built for tourism, hospitality, and experience businesses. Supercharge your business today.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#features" className="hover:text-panlit-orange transition-colors">Features</a></li>
              <li><Link href="/pricing" className="hover:text-panlit-orange transition-colors cursor-pointer">Pricing</Link></li>
              <li><Link href="/integrations" className="hover:text-panlit-orange transition-colors cursor-pointer">Integrations</Link></li>
              <li><span className="text-slate-600 cursor-default">Changelog</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-panlit-orange transition-colors cursor-pointer">FAQ</Link></li>
              <li><a href="https://blog.panlit.com" target="_blank" rel="noopener noreferrer" className="hover:text-panlit-orange transition-colors">Blog</a></li>
              <li><Link href="/support" className="hover:text-panlit-orange transition-colors cursor-pointer">Support</Link></li>
              <li><a href="https://chat.whatsapp.com/IbMXDHloChTE0tbIGAeTum" target="_blank" rel="noopener noreferrer" className="hover:text-panlit-orange transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-slate-600 cursor-default">About</span></li>
              <li><Link href="/support" className="hover:text-panlit-orange transition-colors cursor-pointer">Contact</Link></li>
              <li><span className="text-slate-600 cursor-default">Privacy Policy</span></li>
              <li><span className="text-slate-600 cursor-default">Terms of Service</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© 2026 Panlit. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <span className="cursor-default text-slate-700">Privacy</span>
            <span className="cursor-default text-slate-700">Terms</span>
            <span className="cursor-default text-slate-700">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
