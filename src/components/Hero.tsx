import { ChevronDown, MapPin, Mountain, Leaf, Award, FileText, Shield } from 'lucide-react';
import { ASSETS } from '../constants/assets';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src={ASSETS.hero.finca}
          alt="La Palma & El Tucan Coffee Farm"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 50%, rgba(44,45,46,0.8) 100%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto pt-32 pb-16">

        {/* Eyebrow - Origin Info */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-6 text-sm" style={{ color: 'rgba(225, 29, 72, 0.9)' }}>
          <span className="flex items-center gap-1.5">
            <Leaf size={14} />
            Green Coffee Nanolots
          </span>
          <span style={{ color: 'rgba(225, 29, 72, 0.4)' }}>|</span>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} />
            Zipacon, Colombia
          </span>
          <span style={{ color: 'rgba(225, 29, 72, 0.4)' }}>|</span>
          <span className="flex items-center gap-1.5">
            <Mountain size={14} />
            1,700m Altitude
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1]">
          The Rarest Lots.<br />
          The Smallest Batches.<br />
          <span style={{ color: '#E11D48' }}>Same Hands, Seed to Cup.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
          We don't just grow exceptional coffee—we understand it completely.
          As both producer AND roaster, we offer micro-roasters access to
          <span className="font-semibold" style={{ color: '#E11D48' }}> 12.5kg nanolots </span>
          with the technical knowledge only a farmer-roaster can provide.
        </p>

        {/* Key Stats Bar */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 py-6 px-8 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold" style={{ color: '#E11D48' }}>1,700m</p>
            <p className="text-xs uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>Altitude</p>
          </div>
          <div className="hidden md:block w-px" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold" style={{ color: '#E11D48' }}>6</p>
            <p className="text-xs uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>Rare Varietals</p>
          </div>
          <div className="hidden md:block w-px" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold" style={{ color: '#E11D48' }}>4</p>
            <p className="text-xs uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>Process Methods</p>
          </div>
          <div className="hidden md:block w-px" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold" style={{ color: '#E11D48' }}>87-92</p>
            <p className="text-xs uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>SCA Scores</p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#lots"
            className="font-bold px-10 py-4 text-lg transition-all shadow-lg hover:shadow-xl hover:opacity-90 flex items-center justify-center gap-2 rounded-md"
            style={{ backgroundColor: '#FFFFFF', color: '#000000' }}
          >
            View Available Lots
          </a>
          <a
            href="#contact"
            className="font-semibold px-8 py-4 transition-all flex items-center justify-center gap-2 rounded-md hover:bg-white/10"
            style={{ border: '2px solid rgba(255,255,255,0.4)', color: '#FFFFFF' }}
          >
            <FileText size={20} />
            Download 2026 Catalog
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <span className="flex items-center gap-2">
            <Award size={18} style={{ color: '#E11D48' }} />
            90+ SCA Scoring Available
          </span>
          <span className="flex items-center gap-2">
            <FileText size={18} style={{ color: '#E11D48' }} />
            Full Traceability Documentation
          </span>
          <span className="flex items-center gap-2">
            <Shield size={18} style={{ color: '#E11D48' }} />
            Roast Profile Recommendations
          </span>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#tiers"
          className="inline-flex flex-col items-center gap-2 mt-16 transition-colors hover:opacity-80"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          <span className="text-xs uppercase tracking-wider">Explore Our Tiers</span>
          <ChevronDown className="animate-bounce" size={24} />
        </a>
      </div>
    </section>
  );
}
