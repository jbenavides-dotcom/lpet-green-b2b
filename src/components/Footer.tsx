import { Mail, Phone, MapPin, Clock, FileText, Instagram, Linkedin, Youtube } from 'lucide-react';
import { ASSETS, CONTACT } from '../constants/assets';

export default function Footer() {
  const quickLinks = [
    { label: 'Current Lots', href: '#lots' },
    { label: 'Pricing & Tiers', href: '#tiers' },
    { label: 'Technical Documentation', href: '#specs' },
    { label: 'Sample Request', href: '#contact' },
    { label: 'Trade Terms & Conditions', href: '#' },
  ];

  const resources = [
    { label: '2026 Lot Catalog [PDF]', href: '#', icon: FileText },
    { label: 'Processing Methods Guide', href: '#', icon: FileText },
    { label: 'Roast Profile Library', href: '#', icon: FileText },
    { label: 'Farm Visit Information', href: '#', icon: FileText },
    { label: 'Export Documentation', href: '#', icon: FileText },
  ];

  const certifications = [
    'Rainforest Alliance',
    'Q-Grader Certified',
    'Phytosanitary Approved',
    'Direct Trade',
  ];

  return (
    <footer style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Trade Contact */}
          <div>
            <img
              src={ASSETS.logo}
              alt="La Palma & El Tucan"
              className="h-12 mb-6 brightness-0 invert"
            />
            <p className="uppercase tracking-wider text-sm font-semibold mb-4" style={{ color: '#E11D48' }}>
              Green Coffee Sales
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 transition-colors hover:opacity-80"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                <Mail size={18} style={{ color: '#E11D48' }} />
                {CONTACT.email}
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`}
                className="flex items-center gap-3 transition-colors hover:opacity-80"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                <Phone size={18} style={{ color: '#E11D48' }} />
                {CONTACT.whatsapp}
              </a>
              <div className="flex items-center gap-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <MapPin size={18} style={{ color: '#E11D48' }} />
                {CONTACT.location}
              </div>
              <div className="flex items-center gap-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <Clock size={18} style={{ color: '#E11D48' }} />
                {CONTACT.officeHours}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:opacity-100"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.label}>
                  <a
                    href={resource.href}
                    className="flex items-center gap-2 transition-colors hover:opacity-100"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    <resource.icon size={14} style={{ color: '#E11D48' }} />
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Certifications */}
          <div>
            <h4 className="text-lg font-bold mb-6">Certifications</h4>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-2 text-sm rounded-md"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }}
                >
                  {cert}
                </span>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="text-lg font-bold mb-4">Harvest Updates</h4>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Get notified when new lots are available.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none rounded-md"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
                />
                <button
                  type="submit"
                  className="px-4 py-2 font-semibold text-sm transition-colors rounded-md hover:opacity-90"
                  style={{ backgroundColor: '#E11D48', color: '#FFFFFF' }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center md:text-left" style={{ color: 'rgba(255,255,255,0.5)' }}>
              &copy; 2026 La Palma & El Tucan | Zipacon, Colombia
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/lapalmayeltucan"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:opacity-100"
                style={{ color: 'rgba(255,255,255,0.5)' }}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/lapalmayeltucan"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:opacity-100"
                style={{ color: 'rgba(255,255,255,0.5)' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://youtube.com/@lapalmayeltucan"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:opacity-100"
                style={{ color: 'rgba(255,255,255,0.5)' }}
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
