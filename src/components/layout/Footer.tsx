import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

export const Footer = () => (
  <footer className="bg-foreground text-background mt-24">
    <div className="container mx-auto py-14 grid gap-10 md:grid-cols-4">
      <div>
        <h3 className="text-2xl mb-3">Student <span className="text-primary-glow">Bites</span></h3>
        <p className="text-sm opacity-80">The best budget restaurant near LPU Punjab — affordable student meals, snacks under ₹100 and cheap eats served fresh daily near LPU campus, Phagwara.</p>
      </div>
      <div>
        <h4 className="text-lg mb-3">Explore</h4>
        <ul className="space-y-2 text-sm opacity-90">
          <li><Link to="/menu" className="hover:text-primary-glow">Menu</Link></li>
          <li><Link to="/cheap-food-near-lpu" className="hover:text-primary-glow">Cheap Food Near LPU</Link></li>
          <li><Link to="/best-food-near-lpu" className="hover:text-primary-glow">Best Food Near LPU</Link></li>
          <li><Link to="/cheap-eats-lpu" className="hover:text-primary-glow">Cheap Eats Under ₹200</Link></li>
          <li><Link to="/top-restaurants-lpu" className="hover:text-primary-glow">Top Restaurants Near LPU</Link></li>
          <li><Link to="/blog" className="hover:text-primary-glow">Blog</Link></li>
          <li><Link to="/about" className="hover:text-primary-glow">About</Link></li>
          <li><Link to="/contact" className="hover:text-primary-glow">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg mb-3">Visit Us</h4>
        <ul className="space-y-2 text-sm opacity-90">
          <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0"/> Law Gate, Near LPU, Phagwara, Punjab 144411</li>
          <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0"/> <a href="tel:+919876543210">+91 98765 43210</a></li>
          <li className="flex gap-2"><Clock className="w-4 h-4 mt-0.5 shrink-0"/> 9:00 AM – 1:00 AM (Mon–Sun)</li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg mb-3">Follow</h4>
        <div className="flex gap-3">
          <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-background/10 hover:bg-primary transition-smooth"><Instagram className="w-5 h-5"/></a>
          <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-background/10 hover:bg-primary transition-smooth"><Facebook className="w-5 h-5"/></a>
        </div>
      </div>
    </div>
    <div className="border-t border-background/10">
      <div className="container mx-auto py-5 text-xs opacity-70 flex flex-col md:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} Student Bites — Best budget restaurant near LPU Punjab.</p>
        <p>Made with ♥ for hungry LPU students.</p>
      </div>
    </div>
  </footer>
);
