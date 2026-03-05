import { Package, FileText, Coffee, Thermometer, CheckCircle } from 'lucide-react';

export default function TechnicalSpecs() {
  return (
    <section className="py-24 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Complete Documentation
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What You Receive With Every Nanolot
          </h2>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto">
            Each 12.5kg box comes with comprehensive documentation to ensure
            you can roast with confidence from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Physical Product */}
          <div className="bg-stone-800 p-8 border border-stone-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-amber-500 flex items-center justify-center">
                <Package size={28} className="text-stone-900" />
              </div>
              <h3 className="text-2xl font-bold">Physical Product</h3>
            </div>

            <ul className="space-y-4">
              {[
                '1 GrainPro bag containing 12.5kg green coffee',
                'Vacuum-sealed for maximum freshness',
                'Moisture content: 10-12%',
                'Water activity: <0.60 aw',
                'Professional-grade packaging',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-300">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-stone-700/50 border border-stone-600">
              <p className="text-amber-400 font-semibold mb-1">Box Dimensions</p>
              <p className="text-stone-400 text-sm">
                Standard export box: 50 x 30 x 20 cm | Weight: ~13kg gross
              </p>
            </div>
          </div>

          {/* Documentation */}
          <div className="bg-stone-800 p-8 border border-stone-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-amber-500 flex items-center justify-center">
                <FileText size={28} className="text-stone-900" />
              </div>
              <h3 className="text-2xl font-bold">Documentation Package</h3>
            </div>

            <div className="space-y-6">
              {/* Tech Sheet */}
              <div>
                <h4 className="font-bold text-amber-400 mb-2 flex items-center gap-2">
                  <Coffee size={16} />
                  Lot Technical Data Sheet (PDF)
                </h4>
                <ul className="text-stone-400 text-sm space-y-1 ml-6">
                  <li>Variety, altitude, GPS coordinates</li>
                  <li>Process method with detailed timeline</li>
                  <li>Fermentation protocol</li>
                  <li>Drying curve and conditions</li>
                  <li>Screen size distribution</li>
                  <li>Defect count and density</li>
                </ul>
              </div>

              {/* Cupping Form */}
              <div>
                <h4 className="font-bold text-amber-400 mb-2 flex items-center gap-2">
                  <Coffee size={16} />
                  SCA Cupping Form (PDF)
                </h4>
                <ul className="text-stone-400 text-sm space-y-1 ml-6">
                  <li>Score breakdown by attribute</li>
                  <li>Cupping notes (English/Spanish)</li>
                  <li>Recommended brew methods</li>
                </ul>
              </div>

              {/* Roast Profile */}
              <div>
                <h4 className="font-bold text-amber-400 mb-2 flex items-center gap-2">
                  <Thermometer size={16} />
                  Roast Profile Recommendation (PDF)
                </h4>
                <ul className="text-stone-400 text-sm space-y-1 ml-6">
                  <li>Our production roast curve</li>
                  <li>Key temperatures (Maillard, First Crack)</li>
                  <li>Development time ratio</li>
                  <li>Suggested modifications for different styles</li>
                </ul>
              </div>

              {/* Traceability */}
              <div>
                <h4 className="font-bold text-amber-400 mb-2 flex items-center gap-2">
                  <FileText size={16} />
                  Traceability Certificate (PDF)
                </h4>
                <ul className="text-stone-400 text-sm space-y-1 ml-6">
                  <li>Plot GPS coordinates</li>
                  <li>Harvest date range</li>
                  <li>Processing timeline</li>
                  <li>Q-Grader signature</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center bg-amber-500/10 border border-amber-500/30 p-8">
          <p className="text-amber-400 font-bold text-lg mb-2">
            All documentation is provided digitally via email
          </p>
          <p className="text-stone-400">
            Physical copies available upon request. Documentation is sent within 24 hours
            of order confirmation and can be downloaded from your customer portal.
          </p>
        </div>
      </div>
    </section>
  );
}
