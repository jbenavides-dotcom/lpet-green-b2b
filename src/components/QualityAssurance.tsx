import { MapPin, FlaskConical, Award, Shield, CheckCircle } from 'lucide-react';
import { PROCESSING_METHODS } from '../constants/assets';

export default function QualityAssurance() {
  return (
    <section className="py-24" style={{ backgroundColor: '#F6F6F6' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-sm mb-4 font-medium" style={{ color: '#E11D48' }}>
            Quality Standards
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
            Quality Is Not An Accident
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#2C2D2E' }}>
            Every lot comes with complete documentation and quality verification.
            We believe in radical transparency.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Traceability */}
          <div>
            <div className="bg-white p-8 shadow-sm h-full rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-md" style={{ backgroundColor: 'rgba(225, 29, 72, 0.1)' }}>
                  <MapPin size={24} style={{ color: '#E11D48' }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#000000' }}>Complete Traceability</h3>
              </div>

              <p className="mb-6" style={{ color: '#2C2D2E' }}>
                Every box includes a comprehensive lot traceability document with:
              </p>

              <ul className="space-y-4">
                {[
                  'GPS coordinates of the specific plot',
                  'Harvest dates and picker team',
                  'Fermentation tank ID and duration',
                  'Drying bed number and time',
                  'Milling date and storage conditions',
                  'Cupping notes by our Q-Graders',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#16a34a' }} />
                    <span style={{ color: '#2C2D2E' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Certifications */}
          <div>
            <div className="bg-white p-8 shadow-sm h-full rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-md" style={{ backgroundColor: 'rgba(225, 29, 72, 0.1)' }}>
                  <Award size={24} style={{ color: '#E11D48' }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#000000' }}>Certifications & Standards</h3>
              </div>

              <p className="mb-6" style={{ color: '#2C2D2E' }}>
                All shipments include proper documentation for import:
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: 'Q-Grading certification', desc: 'SCA protocols' },
                  { icon: Shield, label: 'Phytosanitary certificate', desc: 'For export' },
                  { icon: Shield, label: 'Origin certification', desc: 'Colombia verified' },
                  { icon: Shield, label: 'Rainforest Alliance', desc: 'Select lots' },
                ].map((cert, idx) => (
                  <div key={idx} className="p-4 rounded-md" style={{ backgroundColor: '#F6F6F6' }}>
                    <cert.icon size={20} className="mb-2" style={{ color: '#E11D48' }} />
                    <p className="font-semibold text-sm" style={{ color: '#000000' }}>{cert.label}</p>
                    <p className="text-xs" style={{ color: '#2C2D2E', opacity: 0.6 }}>{cert.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Processing Methods */}
        <div className="mt-12">
          <div className="bg-white p-8 shadow-sm rounded-lg">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 flex items-center justify-center rounded-md" style={{ backgroundColor: 'rgba(225, 29, 72, 0.1)' }}>
                <FlaskConical size={24} style={{ color: '#E11D48' }} />
              </div>
              <h3 className="text-2xl font-bold" style={{ color: '#000000' }}>Processing Methods</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.values(PROCESSING_METHODS).map((method) => (
                <div key={method.name} className="p-6 rounded-md" style={{ border: '1px solid #E0E6F4' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#000000' }}>{method.name}</h4>
                  <p className="text-sm mb-3" style={{ color: '#E11D48' }}>{method.duration}</p>
                  <p className="text-sm mb-4" style={{ color: '#2C2D2E' }}>{method.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {method.characteristics.map((char) => (
                      <span
                        key={char}
                        className="text-xs px-2 py-1 rounded"
                        style={{ backgroundColor: '#F6F6F6', color: '#2C2D2E' }}
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
