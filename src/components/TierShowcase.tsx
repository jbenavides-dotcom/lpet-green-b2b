import { Crown, Star, Shield, ArrowRight } from 'lucide-react';
import { TIERS } from '../constants/assets';

const tierIcons = {
  legendary: Crown,
  singleOrigin: Star,
  exoticBlend: Shield,
};

const tierStyles = {
  legendary: {
    bg: 'linear-gradient(135deg, #B8860B 0%, #DAA520 100%)',
    text: '#FFFFFF',
  },
  singleOrigin: {
    bg: '#E11D48',
    text: '#FFFFFF',
  },
  exoticBlend: {
    bg: '#000000',
    text: '#FFFFFF',
  },
};

export default function TierShowcase() {
  return (
    <section id="tiers" className="py-24" style={{ backgroundColor: '#F6F6F6' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-sm mb-4 font-medium" style={{ color: '#E11D48' }}>
            Quality Tiers
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
            Three Tiers. One Standard of Excellence.
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#2C2D2E' }}>
            Every lot is hand-picked, meticulously processed, and cupped to perfection.
            Choose your tier based on your market and price point needs.
          </p>
        </div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.values(TIERS).map((tier) => {
            const Icon = tierIcons[tier.id as keyof typeof tierIcons];
            const style = tierStyles[tier.id as keyof typeof tierStyles];
            return (
              <div
                key={tier.id}
                className="relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                style={{ background: style.bg, border: `3px solid ${tier.id === 'legendary' ? '#DAA520' : tier.id === 'singleOrigin' ? '#E11D48' : '#333333'}` }}
              >
                {/* Card Content */}
                <div className="p-8" style={{ color: style.text }}>
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold tracking-wide">{tier.name}</h3>
                      <p className="text-sm opacity-80">SCA Score: {tier.scoreRange}</p>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="rounded-lg p-5 mb-6" style={{ backgroundColor: 'rgba(0,0,0,0.25)' }}>
                    <p className="text-3xl font-bold">{tier.priceRange}</p>
                    <p className="text-sm opacity-80 mt-1">
                      12.5kg box: {tier.boxPriceRange}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mb-6 leading-relaxed opacity-90">
                    {tier.description}
                  </p>

                  {/* Ideal For */}
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-wider mb-2 opacity-60">
                      Ideal For
                    </p>
                    <p className="text-sm opacity-90">
                      {tier.idealFor}
                    </p>
                  </div>

                  {/* Typical Varieties */}
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-wider mb-2 opacity-60">
                      Typical Varieties
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tier.typicalVarieties.map((variety) => (
                        <span
                          key={variety}
                          className="px-3 py-1 text-sm rounded-full"
                          style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                        >
                          {variety}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Typical Processes */}
                  <div className="mb-8">
                    <p className="text-xs uppercase tracking-wider mb-2 opacity-60">
                      Typical Processes
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tier.typicalProcesses.map((process) => (
                        <span
                          key={process}
                          className="px-3 py-1 text-sm rounded-full"
                          style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
                        >
                          {process}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={`#lots?tier=${tier.id}`}
                    className="block w-full font-bold py-3 text-center transition-colors flex items-center justify-center gap-2 rounded-md"
                    style={{ backgroundColor: '#FFFFFF', color: '#000000' }}
                  >
                    View {tier.name} Lots
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p style={{ color: '#2C2D2E' }}>
            Not sure which tier is right for you?{' '}
            <a href="#contact" className="font-semibold underline" style={{ color: '#E11D48' }}>
              Talk to our trade team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
