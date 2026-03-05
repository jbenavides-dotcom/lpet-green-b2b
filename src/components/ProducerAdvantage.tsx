import { Compass, FlaskConical, Gauge, Users, Quote } from 'lucide-react';

export default function ProducerAdvantage() {
  const advantages = [
    {
      icon: Compass,
      number: '01',
      title: 'Terroir Intelligence',
      description: "We've grown this coffee for years. We know which microclimate produces the brightest acidity, which shade creates the most body.",
    },
    {
      icon: FlaskConical,
      number: '02',
      title: 'Process Transparency',
      description: "We didn't just process this lot—we designed the fermentation protocol. Every variable is documented and shared.",
    },
    {
      icon: Gauge,
      number: '03',
      title: 'Roast Profile Recommendations',
      description: 'As active roasters ourselves, we provide starting curves based on our own production roasts. Skip the guesswork.',
    },
    {
      icon: Users,
      number: '04',
      title: 'Direct Communication',
      description: "Questions about a specific lot? Ask the farmer who grew it. That's us. No middlemen, no lost-in-translation moments.",
    },
  ];

  return (
    <section id="advantage" className="py-24 text-white" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="uppercase tracking-[0.3em] text-sm mb-4" style={{ color: '#E11D48' }}>
              The Producer-Roaster Advantage
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We Don't Just Sell Green Coffee.<br />
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>We Provide the Blueprint.</span>
            </h2>

            <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
              When you buy from a trader, you get green coffee.
              When you buy from us, you get complete knowledge transfer.
            </p>

            {/* Advantages List */}
            <div className="space-y-8">
              {advantages.map((adv) => (
                <div key={adv.number} className="flex gap-4">
                  <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 rounded-md" style={{ backgroundColor: '#E11D48' }}>
                    <adv.icon size={24} style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-sm font-mono" style={{ color: 'rgba(225, 29, 72, 0.6)' }}>{adv.number}</span>
                      <h4 className="font-bold text-lg">{adv.title}</h4>
                    </div>
                    <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{adv.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Card */}
          <div className="relative">
            {/* Background shape */}
            <div className="absolute -top-8 -right-8 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(225, 29, 72, 0.1)' }} />

            <div className="relative p-10 rounded-lg" style={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Quote size={60} className="absolute top-6 right-6" style={{ color: 'rgba(225, 29, 72, 0.2)' }} />

              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.9)' }}>
                "We're not just farmers who happen to export.
                We're roasters who happen to farm.
                <span style={{ color: '#E11D48' }}> That changes everything.</span>"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#E11D48' }}>
                  FS
                </div>
                <div>
                  <p className="font-bold text-lg">Felipe Sardi</p>
                  <p style={{ color: 'rgba(255,255,255,0.5)' }}>Co-Founder & Farmer</p>
                  <p className="text-sm" style={{ color: '#E11D48' }}>La Palma & El Tucan</p>
                </div>
              </div>
            </div>

            {/* Stats below quote */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="p-4 text-center rounded-md" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <p className="text-3xl font-bold" style={{ color: '#E11D48' }}>12+</p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>Years Farming</p>
              </div>
              <div className="p-4 text-center rounded-md" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <p className="text-3xl font-bold" style={{ color: '#E11D48' }}>6</p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>Rare Varietals</p>
              </div>
              <div className="p-4 text-center rounded-md" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <p className="text-3xl font-bold" style={{ color: '#E11D48' }}>WBC</p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>2019 Winner Coffee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
