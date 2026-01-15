import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                <img
      src="https://res.cloudinary.com/dpiip2agt/image/upload/v1768385673/logo_enclho.jpg"
      alt="IMAMAK Logo"
      className="h-8 w-auto object-contain"
    />
              </div>
              <div>
                <h3 className="font-bold text-lg">IMAMAK</h3>
                <p className="text-xs text-primary-foreground/80">Industrial Solutions</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Leading provider of industrial spare parts and machinery solutions in Turkey. Quality products, reliable service, expert support.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-white/10 rounded hover:bg-accent transition-colors flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded hover:bg-accent transition-colors flex items-center justify-center">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded hover:bg-accent transition-colors flex items-center justify-center">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded hover:bg-accent transition-colors flex items-center justify-center">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Products</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-semibold mb-4">Product Categories</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/shop" className="hover:text-accent transition-colors">Bearings & Power Transmission</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Hydraulic Components</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Pneumatic Systems</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Electric Motors</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Industrial Tools</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 text-accent" />
                <span>Istanbul, Turkey<br />Industrial Zone, District</span>
              </li>
              <li className="flex gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-accent" />
                <span>+90 XXX XXX XX XX</span>
              </li>
              <li className="flex gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 text-accent" />
                <span>info@imamak.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-primary-foreground/60">Business Hours:</p>
              <p className="text-sm">Mon-Fri: 8:00 - 18:00</p>
              <p className="text-sm">Sat: 9:00 - 14:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <div className="flex items-center gap-4">
              <p>&copy; 2026 Imamak.com. All rights reserved.</p>
              <LanguageSwitcher variant="dark" size="sm" />
            </div>
            <div className="flex gap-4">
              <Link to="/terms" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
              <span>|</span>
              <Link to="/terms" className="hover:text-accent transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}