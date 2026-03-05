import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../constants/assets';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24" style={{ backgroundColor: '#F6F6F6' }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-sm mb-4 font-medium" style={{ color: '#E11D48' }}>
            Common Questions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#2C2D2E' }}>
            Everything you need to know about ordering green coffee from La Palma & El Tucan.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden rounded-lg"
              style={{ border: '1px solid #E0E6F4' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:opacity-90"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle size={24} className="flex-shrink-0 mt-0.5" style={{ color: '#E11D48' }} />
                  <span className="font-semibold text-lg pr-4" style={{ color: '#000000' }}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: '#2C2D2E', opacity: 0.5 }}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pl-10 ml-3" style={{ borderLeft: '2px solid rgba(225, 29, 72, 0.2)' }}>
                    <p className="leading-relaxed" style={{ color: '#2C2D2E' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* More Questions CTA */}
        <div className="mt-12 text-center bg-white p-8 rounded-lg" style={{ border: '1px solid #E0E6F4' }}>
          <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>
            Still have questions?
          </h3>
          <p className="mb-6" style={{ color: '#2C2D2E' }}>
            Our trade team is happy to help with any specific inquiries about our green coffee program.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-bold px-8 py-4 transition-colors rounded-md hover:opacity-90"
            style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
          >
            Contact Our Trade Team
          </a>
        </div>
      </div>
    </section>
  );
}
