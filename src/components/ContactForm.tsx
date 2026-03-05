import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { BUSINESS_TYPES, VOLUME_OPTIONS, REFERRAL_SOURCES, CONTACT, Lot, TIERS } from '../constants/assets';

interface ContactFormProps {
  selectedLots: Lot[];
}

export default function ContactForm({ selectedLots }: ContactFormProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    website: '',
    businessType: '',
    interestedTiers: [] as string[],
    estimatedVolume: '',
    referralSource: '',
    message: '',
    newsletter: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleTierToggle = (tierId: string) => {
    const tiers = formData.interestedTiers.includes(tierId)
      ? formData.interestedTiers.filter(t => t !== tierId)
      : [...formData.interestedTiers, tierId];
    setFormData({ ...formData, interestedTiers: tiers });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24" style={{ backgroundColor: '#F6F6F6' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-white p-12 shadow-lg rounded-lg">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#dcfce7' }}>
              <Send size={32} style={{ color: '#16a34a' }} />
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#000000' }}>
              Thank You for Your Inquiry!
            </h2>
            <p className="text-lg mb-8" style={{ color: '#2C2D2E' }}>
              We'll respond within 24 hours with lot availability and pricing.
              Check your email for confirmation.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 font-bold px-8 py-4 transition-colors rounded-md hover:opacity-90"
              style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
            >
              Download 2026 Lot Catalog (PDF)
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: '#F6F6F6' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <p className="uppercase tracking-[0.3em] text-sm mb-4 font-medium" style={{ color: '#E11D48' }}>
              Trade Inquiries
            </p>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#000000' }}>
              Start the Conversation
            </h2>
            <p className="mb-10" style={{ color: '#2C2D2E' }}>
              Ready to source exceptional green coffee? Fill out the form and our trade team
              will respond within 24 hours with availability and pricing.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-md" style={{ backgroundColor: 'rgba(225, 29, 72, 0.1)' }}>
                  <Mail size={20} style={{ color: '#E11D48' }} />
                </div>
                <div>
                  <p className="text-sm" style={{ color: '#2C2D2E', opacity: 0.6 }}>Email</p>
                  <a href={`mailto:${CONTACT.email}`} className="font-semibold hover:opacity-80" style={{ color: '#000000' }}>
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-md" style={{ backgroundColor: 'rgba(225, 29, 72, 0.1)' }}>
                  <Phone size={20} style={{ color: '#E11D48' }} />
                </div>
                <div>
                  <p className="text-sm" style={{ color: '#2C2D2E', opacity: 0.6 }}>WhatsApp</p>
                  <a href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`} className="font-semibold hover:opacity-80" style={{ color: '#000000' }}>
                    {CONTACT.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-md" style={{ backgroundColor: 'rgba(225, 29, 72, 0.1)' }}>
                  <MapPin size={20} style={{ color: '#E11D48' }} />
                </div>
                <div>
                  <p className="text-sm" style={{ color: '#2C2D2E', opacity: 0.6 }}>Location</p>
                  <p className="font-semibold" style={{ color: '#000000' }}>{CONTACT.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-md" style={{ backgroundColor: 'rgba(225, 29, 72, 0.1)' }}>
                  <Clock size={20} style={{ color: '#E11D48' }} />
                </div>
                <div>
                  <p className="text-sm" style={{ color: '#2C2D2E', opacity: 0.6 }}>Office Hours</p>
                  <p className="font-semibold" style={{ color: '#000000' }}>{CONTACT.officeHours}</p>
                </div>
              </div>
            </div>

            {/* Selected Lots Summary */}
            {selectedLots.length > 0 && (
              <div className="mt-10 p-6 rounded-md" style={{ backgroundColor: 'rgba(225, 29, 72, 0.05)', border: '1px solid rgba(225, 29, 72, 0.2)' }}>
                <p className="font-bold mb-3" style={{ color: '#E11D48' }}>Lots in Your Inquiry:</p>
                <ul className="space-y-2">
                  {selectedLots.map(lot => (
                    <li key={lot.id} className="flex justify-between text-sm">
                      <span style={{ color: '#2C2D2E' }}>{lot.name}</span>
                      <span className="font-semibold" style={{ color: '#E11D48' }}>${lot.boxPrice}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(225, 29, 72, 0.2)' }}>
                  <p className="flex justify-between font-bold">
                    <span style={{ color: '#000000' }}>Total ({selectedLots.length} lots):</span>
                    <span style={{ color: '#E11D48' }}>
                      ${selectedLots.reduce((sum, lot) => sum + lot.boxPrice, 0).toLocaleString()}
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2C2D2E' }}>
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3 focus:outline-none focus:ring-2 rounded-md"
                    style={{ border: '1px solid #E0E6F4', color: '#2C2D2E' }}
                    placeholder="Your roastery name"
                  />
                </div>

                {/* Contact Name */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2C2D2E' }}>
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-4 py-3 focus:outline-none focus:ring-2 rounded-md"
                    style={{ border: '1px solid #E0E6F4', color: '#2C2D2E' }}
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2C2D2E' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 focus:outline-none focus:ring-2 rounded-md"
                    style={{ border: '1px solid #E0E6F4', color: '#2C2D2E' }}
                    placeholder="you@company.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2C2D2E' }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 focus:outline-none focus:ring-2 rounded-md"
                    style={{ border: '1px solid #E0E6F4', color: '#2C2D2E' }}
                    placeholder="+1 555 123 4567"
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2C2D2E' }}>
                    Country *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3 focus:outline-none focus:ring-2 rounded-md"
                    style={{ border: '1px solid #E0E6F4', color: '#2C2D2E' }}
                    placeholder="United States"
                  />
                </div>

                {/* Website */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2C2D2E' }}>
                    Website
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-3 focus:outline-none focus:ring-2 rounded-md"
                    style={{ border: '1px solid #E0E6F4', color: '#2C2D2E' }}
                    placeholder="https://yourroastery.com"
                  />
                </div>

                {/* Business Type */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2C2D2E' }}>
                    Business Type *
                  </label>
                  <select
                    required
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-4 py-3 focus:outline-none focus:ring-2 bg-white rounded-md"
                    style={{ border: '1px solid #E0E6F4', color: '#2C2D2E' }}
                  >
                    <option value="">Select type...</option>
                    {BUSINESS_TYPES.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Estimated Volume */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2C2D2E' }}>
                    Estimated Annual Volume
                  </label>
                  <select
                    value={formData.estimatedVolume}
                    onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                    className="w-full px-4 py-3 focus:outline-none focus:ring-2 bg-white rounded-md"
                    style={{ border: '1px solid #E0E6F4', color: '#2C2D2E' }}
                  >
                    <option value="">Select volume...</option>
                    {VOLUME_OPTIONS.map(vol => (
                      <option key={vol} value={vol}>{vol}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Interested Tiers */}
              <div className="mt-6">
                <label className="block text-sm font-medium mb-3" style={{ color: '#2C2D2E' }}>
                  Interested Tiers *
                </label>
                <div className="flex flex-wrap gap-4">
                  {Object.values(TIERS).map(tier => (
                    <label
                      key={tier.id}
                      className="flex items-center gap-2 px-4 py-3 cursor-pointer transition-colors rounded-md"
                      style={formData.interestedTiers.includes(tier.id)
                        ? { border: '2px solid #E11D48', backgroundColor: 'rgba(225, 29, 72, 0.05)', color: '#E11D48' }
                        : { border: '1px solid #E0E6F4', color: '#2C2D2E' }
                      }
                    >
                      <input
                        type="checkbox"
                        checked={formData.interestedTiers.includes(tier.id)}
                        onChange={() => handleTierToggle(tier.id)}
                        className="sr-only"
                      />
                      <span className="font-medium">{tier.name}</span>
                      <span className="text-sm" style={{ opacity: 0.6 }}>({tier.scoreRange})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Referral Source */}
              <div className="mt-6">
                <label className="block text-sm font-medium mb-2" style={{ color: '#2C2D2E' }}>
                  How did you hear about us?
                </label>
                <select
                  value={formData.referralSource}
                  onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                  className="w-full px-4 py-3 focus:outline-none focus:ring-2 bg-white rounded-md"
                  style={{ border: '1px solid #E0E6F4', color: '#2C2D2E' }}
                >
                  <option value="">Select...</option>
                  {REFERRAL_SOURCES.map(source => (
                    <option key={source} value={source}>{source}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label className="block text-sm font-medium mb-2" style={{ color: '#2C2D2E' }}>
                  Message / Special Requirements
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 focus:outline-none focus:ring-2 rounded-md"
                  style={{ border: '1px solid #E0E6F4', color: '#2C2D2E' }}
                  placeholder="Tell us about your needs, specific lots you're interested in, or any questions..."
                />
              </div>

              {/* Newsletter */}
              <div className="mt-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                    className="w-5 h-5 rounded"
                    style={{ accentColor: '#E11D48' }}
                  />
                  <span className="text-sm" style={{ color: '#2C2D2E' }}>
                    I agree to receive occasional updates about new lots and harvests
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || formData.interestedTiers.length === 0}
                className="mt-8 w-full font-bold py-4 text-lg transition-colors flex items-center justify-center gap-2 rounded-md"
                style={isSubmitting || formData.interestedTiers.length === 0
                  ? { backgroundColor: '#E0E6F4', color: '#2C2D2E', cursor: 'not-allowed' }
                  : { backgroundColor: '#000000', color: '#FFFFFF' }
                }
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Submit Trade Inquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
