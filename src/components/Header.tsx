import { useState } from 'react';
import { Menu, X, ShoppingBag, FileText } from 'lucide-react';
import { ASSETS } from '../constants/assets';

interface HeaderProps {
  inquiryCount: number;
  onCartClick: () => void;
}

export default function Header({ inquiryCount, onCartClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#lots', label: 'Available Lots' },
    { href: '#tiers', label: 'Pricing Tiers' },
    { href: '#advantage', label: 'Our Process' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm" style={{ borderBottom: '1px solid #E0E6F4' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src={ASSETS.logo}
              alt="La Palma & El Tucan"
              className="h-10 md:h-12"
            />
            <div className="hidden sm:block">
              <span className="text-xs uppercase tracking-wider font-medium" style={{ color: '#E11D48' }}>
                Green Coffee
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium transition-colors hover:opacity-70"
                style={{ color: '#2C2D2E' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Download Catalog - Desktop */}
            <a
              href="#"
              className="hidden md:flex items-center gap-2 transition-colors hover:opacity-70"
              style={{ color: '#2C2D2E' }}
            >
              <FileText size={18} />
              <span className="text-sm">Catalog</span>
            </a>

            {/* Inquiry Cart */}
            <button
              onClick={onCartClick}
              className="relative flex items-center gap-2 px-4 py-2.5 font-semibold transition-colors rounded-md hover:opacity-90"
              style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
            >
              <ShoppingBag size={18} />
              <span className="hidden sm:inline">Inquiry</span>
              {inquiryCount > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 text-xs font-bold rounded-full flex items-center justify-center" style={{ backgroundColor: '#E11D48', color: '#FFFFFF' }}>
                  {inquiryCount}
                </span>
              )}
            </button>

            {/* Request Samples CTA - Desktop */}
            <a
              href="#contact"
              className="hidden lg:block px-6 py-2.5 font-semibold transition-colors rounded-md hover:opacity-90"
              style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
            >
              Request Samples
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:opacity-70"
              style={{ color: '#2C2D2E' }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6" style={{ borderTop: '1px solid #E0E6F4' }}>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium py-2 transition-colors hover:opacity-70"
                  style={{ color: '#2C2D2E' }}
                >
                  {link.label}
                </a>
              ))}
              <hr style={{ borderColor: '#E0E6F4' }} className="my-2" />
              <a
                href="#"
                className="flex items-center gap-2 py-2 hover:opacity-70"
                style={{ color: '#2C2D2E' }}
              >
                <FileText size={18} />
                Download Catalog (PDF)
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-3 font-semibold text-center transition-colors rounded-md hover:opacity-90"
                style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
              >
                Request Samples
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
