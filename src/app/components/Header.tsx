import { ShoppingCart, Menu, Search, Phone } from 'lucide-react';
import { useState } from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Link } from 'react-router-dom';

interface HeaderProps {
  cartCount?: number;
}

export function Header({ cartCount = 0 }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+90" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                <span>+90 XXX XXX XX XX</span>
              </a>
              <span className="hidden sm:inline">Mon-Fri: 8:00 - 18:00</span>
            </div>
            <div className="flex items-center gap-4">
              <LanguageSwitcher variant="dark" size="sm" />
              <div className="hidden md:flex items-center gap-4">
                <Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link>
                <span>|</span>
                <Link to="/contact" className="hover:text-accent transition-colors">Help & Support</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
          <img
          src="https://res.cloudinary.com/dpiip2agt/image/upload/v1768385673/logo_enclho.jpg"
          alt="IMAMAK Logo"
          className="h-15 w-auto object-contain"
          />
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for parts, machines, categories..."
                className="w-full px-4 py-2.5 pr-12 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-2 rounded">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="md:hidden text-foreground">
              <Search className="w-6 h-6" />
            </button>

            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block mt-4`}>
          <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
            <li>
              <Link to="/" className="block py-2 md:py-0 text-foreground hover:text-primary font-medium transition-colors">
                IMAMAK
              </Link>
            </li>
            <li>
              <Link to="/shop" className="block py-2 md:py-0 text-foreground hover:text-primary font-medium transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link to="/blog" className="block py-2 md:py-0 text-foreground hover:text-primary font-medium transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 md:py-0 text-foreground hover:text-primary font-medium transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 md:py-0 text-foreground hover:text-primary font-medium transition-colors">
                Contact
              </Link>
            </li>
            <li className="md:ml-auto">
              <Link
                to="/contact"
                className="block py-1.5 md:py-2 px-4 md:px-6 text-center bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
              >
                Request Quote
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}