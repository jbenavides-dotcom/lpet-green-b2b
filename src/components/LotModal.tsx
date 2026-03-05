import { X, Download, Plus, Check, Package, MapPin, Thermometer, Droplets, Coffee } from 'lucide-react';
import { Lot, TIERS } from '../constants/assets';

interface LotModalProps {
  lot: Lot;
  onClose: () => void;
  onAddToInquiry: (lot: Lot) => void;
  isInInquiry: boolean;
}

const tierHeaderStyles = {
  legendary: { background: 'linear-gradient(135deg, #B8860B 0%, #DAA520 100%)' },
  singleOrigin: { background: '#E11D48' },
  exoticBlend: { background: '#000000' },
};

export default function LotModal({ lot, onClose, onAddToInquiry, isInInquiry }: LotModalProps) {
  const tier = TIERS[lot.tier];
  const headerStyle = tierHeaderStyles[lot.tier];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl">
        {/* Header */}
        <div className="text-white p-6 sticky top-0 z-10" style={headerStyle}>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-white/70 text-sm uppercase tracking-wider mb-1">
                LOT #{lot.lotNumber}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">{lot.name}</h2>
              <p className="text-white/80 mt-1">{tier.name} Tier</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Basic Info & Technical Specs */}
            <div>
              {/* Basic Info */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: '#000000' }}>
                  <Coffee size={20} style={{ color: '#E11D48' }} />
                  Basic Information
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="p-3 rounded-md" style={{ backgroundColor: '#F6F6F6' }}>
                    <p style={{ color: '#2C2D2E', opacity: 0.6 }}>Variety</p>
                    <p className="font-bold" style={{ color: '#000000' }}>{lot.variety}</p>
                  </div>
                  <div className="p-3 rounded-md" style={{ backgroundColor: '#F6F6F6' }}>
                    <p style={{ color: '#2C2D2E', opacity: 0.6 }}>Process</p>
                    <p className="font-bold" style={{ color: '#000000' }}>{lot.process}</p>
                  </div>
                  <div className="p-3 rounded-md" style={{ backgroundColor: '#F6F6F6' }}>
                    <p style={{ color: '#2C2D2E', opacity: 0.6 }}>Altitude</p>
                    <p className="font-bold" style={{ color: '#000000' }}>{lot.altitude} masl</p>
                  </div>
                  <div className="p-3 rounded-md" style={{ backgroundColor: '#F6F6F6' }}>
                    <p style={{ color: '#2C2D2E', opacity: 0.6 }}>Plot</p>
                    <p className="font-bold" style={{ color: '#000000' }}>{lot.plotName}</p>
                  </div>
                </div>
                <div className="mt-4 p-3 text-sm rounded-md" style={{ backgroundColor: '#F6F6F6' }}>
                  <p className="flex items-center gap-1" style={{ color: '#2C2D2E', opacity: 0.6 }}>
                    <MapPin size={14} />
                    GPS Coordinates
                  </p>
                  <p className="font-mono" style={{ color: '#000000' }}>{lot.gpsCoordinates}</p>
                </div>
              </div>

              {/* Technical Specs */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: '#000000' }}>
                  <Package size={20} style={{ color: '#E11D48' }} />
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="p-3 rounded-md" style={{ border: '1px solid #E0E6F4' }}>
                    <p style={{ color: '#2C2D2E', opacity: 0.6 }}>Screen Size</p>
                    <p className="font-bold" style={{ color: '#000000' }}>{lot.screenSize}</p>
                  </div>
                  <div className="p-3 rounded-md" style={{ border: '1px solid #E0E6F4' }}>
                    <p style={{ color: '#2C2D2E', opacity: 0.6 }}>Moisture</p>
                    <p className="font-bold" style={{ color: '#000000' }}>{lot.moisture}%</p>
                  </div>
                  <div className="p-3 rounded-md" style={{ border: '1px solid #E0E6F4' }}>
                    <p style={{ color: '#2C2D2E', opacity: 0.6 }}>Water Activity</p>
                    <p className="font-bold" style={{ color: '#000000' }}>{lot.waterActivity} aw</p>
                  </div>
                  <div className="p-3 rounded-md" style={{ border: '1px solid #E0E6F4' }}>
                    <p style={{ color: '#2C2D2E', opacity: 0.6 }}>Defects</p>
                    <p className="font-bold" style={{ color: '#000000' }}>{lot.defects}</p>
                  </div>
                  <div className="p-3 rounded-md" style={{ border: '1px solid #E0E6F4' }}>
                    <p style={{ color: '#2C2D2E', opacity: 0.6 }}>Density</p>
                    <p className="font-bold" style={{ color: '#000000' }}>{lot.density} g/L</p>
                  </div>
                  <div className="p-3 rounded-md" style={{ border: '1px solid #E0E6F4' }}>
                    <p style={{ color: '#2C2D2E', opacity: 0.6 }}>Available</p>
                    <p className="font-bold" style={{ color: '#E11D48' }}>{lot.availableBoxes} boxes ({lot.totalKg}kg)</p>
                  </div>
                </div>
              </div>

              {/* Harvest & Processing */}
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: '#000000' }}>
                  <Thermometer size={20} style={{ color: '#E11D48' }} />
                  Harvest & Processing
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between pb-2" style={{ borderBottom: '1px solid #E0E6F4' }}>
                    <span style={{ color: '#2C2D2E', opacity: 0.6 }}>Harvest Dates</span>
                    <span className="font-medium" style={{ color: '#000000' }}>{lot.harvestDates}</span>
                  </div>
                  {lot.fermentationHours > 0 && (
                    <>
                      <div className="flex justify-between pb-2" style={{ borderBottom: '1px solid #E0E6F4' }}>
                        <span style={{ color: '#2C2D2E', opacity: 0.6 }}>Fermentation</span>
                        <span className="font-medium" style={{ color: '#000000' }}>{lot.fermentationHours} hours</span>
                      </div>
                      <div className="flex justify-between pb-2" style={{ borderBottom: '1px solid #E0E6F4' }}>
                        <span style={{ color: '#2C2D2E', opacity: 0.6 }}>Fermentation Temp</span>
                        <span className="font-medium" style={{ color: '#000000' }}>{lot.fermentationTemp}</span>
                      </div>
                      <div className="flex justify-between pb-2" style={{ borderBottom: '1px solid #E0E6F4' }}>
                        <span style={{ color: '#2C2D2E', opacity: 0.6 }}>Final pH</span>
                        <span className="font-medium" style={{ color: '#000000' }}>{lot.finalPH}</span>
                      </div>
                    </>
                  )}
                  <div className="flex justify-between pb-2" style={{ borderBottom: '1px solid #E0E6F4' }}>
                    <span style={{ color: '#2C2D2E', opacity: 0.6 }}>Drying</span>
                    <span className="font-medium" style={{ color: '#000000' }}>{lot.dryingDays} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#2C2D2E', opacity: 0.6 }}>Rested</span>
                    <span className="font-medium" style={{ color: '#000000' }}>{lot.restedDays} days in GrainPro</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Cupping Score & Notes */}
            <div>
              {/* SCA Score Breakdown */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: '#000000' }}>
                  <Droplets size={20} style={{ color: '#E11D48' }} />
                  SCA Cupping Score: <span style={{ color: '#E11D48' }}>{lot.scaScore}</span>
                </h3>
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#F6F6F6' }}>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="text-center">
                      <p className="text-xs" style={{ color: '#2C2D2E', opacity: 0.6 }}>Fragrance</p>
                      <p className="font-bold text-lg" style={{ color: '#000000' }}>{lot.fragrance}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs" style={{ color: '#2C2D2E', opacity: 0.6 }}>Flavor</p>
                      <p className="font-bold text-lg" style={{ color: '#000000' }}>{lot.flavor}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs" style={{ color: '#2C2D2E', opacity: 0.6 }}>Aftertaste</p>
                      <p className="font-bold text-lg" style={{ color: '#000000' }}>{lot.aftertaste}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs" style={{ color: '#2C2D2E', opacity: 0.6 }}>Acidity</p>
                      <p className="font-bold text-lg" style={{ color: '#000000' }}>{lot.acidity}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs" style={{ color: '#2C2D2E', opacity: 0.6 }}>Body</p>
                      <p className="font-bold text-lg" style={{ color: '#000000' }}>{lot.body}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs" style={{ color: '#2C2D2E', opacity: 0.6 }}>Balance</p>
                      <p className="font-bold text-lg" style={{ color: '#000000' }}>{lot.balance}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs" style={{ color: '#2C2D2E', opacity: 0.6 }}>Uniformity</p>
                      <p className="font-bold text-lg" style={{ color: '#000000' }}>{lot.uniformity}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs" style={{ color: '#2C2D2E', opacity: 0.6 }}>Clean Cup</p>
                      <p className="font-bold text-lg" style={{ color: '#000000' }}>{lot.cleanCup}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs" style={{ color: '#2C2D2E', opacity: 0.6 }}>Sweetness</p>
                      <p className="font-bold text-lg" style={{ color: '#000000' }}>{lot.sweetness}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 text-center" style={{ borderTop: '1px solid #E0E6F4' }}>
                    <p className="text-xs" style={{ color: '#2C2D2E', opacity: 0.6 }}>Overall</p>
                    <p className="font-bold text-2xl" style={{ color: '#E11D48' }}>{lot.overall}</p>
                  </div>
                </div>
              </div>

              {/* Cupping Notes */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4" style={{ color: '#000000' }}>Cupping Notes</h3>
                <div className="p-4 rounded-md" style={{ backgroundColor: 'rgba(225, 29, 72, 0.05)', borderLeft: '4px solid #E11D48' }}>
                  <p className="italic leading-relaxed" style={{ color: '#2C2D2E' }}>
                    "{lot.cuppingNotes}"
                  </p>
                </div>
              </div>

              {/* Recommended For */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4" style={{ color: '#000000' }}>Recommended For</h3>
                <ul className="space-y-2">
                  {lot.recommendedFor.map((rec, idx) => (
                    <li key={idx} className="flex items-center gap-2" style={{ color: '#2C2D2E' }}>
                      <Check size={16} style={{ color: '#16a34a' }} />
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Roast Recommendations */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4" style={{ color: '#000000' }}>Roast Profile Recommendations</h3>
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#000000' }}>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    {lot.roastRecommendation}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-8 pt-8" style={{ borderTop: '1px solid #E0E6F4' }}>
            {/* Pricing */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
              <div>
                <p className="text-sm" style={{ color: '#2C2D2E', opacity: 0.6 }}>Price per pound</p>
                <p className="text-3xl font-bold" style={{ color: '#000000' }}>
                  ${lot.pricePerLb}<span className="text-lg font-normal" style={{ color: '#2C2D2E', opacity: 0.6 }}>/lb</span>
                </p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-sm" style={{ color: '#2C2D2E', opacity: 0.6 }}>Per 12.5kg box (27.5 lbs)</p>
                <p className="text-3xl font-bold" style={{ color: '#E11D48' }}>
                  ${lot.boxPrice.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="flex-1 font-medium py-4 transition-colors flex items-center justify-center gap-2 rounded-md hover:opacity-80"
                style={{ border: '1px solid #E0E6F4', color: '#2C2D2E' }}
              >
                <Download size={20} />
                Download Tech Sheet (PDF)
              </button>
              <button
                className="flex-1 font-medium py-4 transition-colors flex items-center justify-center gap-2 rounded-md hover:opacity-80"
                style={{ border: '1px solid #E0E6F4', color: '#2C2D2E' }}
              >
                Request Sample ($25)
              </button>
              <button
                onClick={() => {
                  onAddToInquiry(lot);
                  onClose();
                }}
                disabled={isInInquiry}
                className="flex-1 font-bold py-4 transition-colors flex items-center justify-center gap-2 rounded-md"
                style={isInInquiry
                  ? { backgroundColor: '#dcfce7', color: '#166534', cursor: 'default' }
                  : { backgroundColor: '#000000', color: '#FFFFFF' }
                }
              >
                {isInInquiry ? (
                  <>
                    <Check size={20} />
                    Added to Inquiry
                  </>
                ) : (
                  <>
                    <Plus size={20} />
                    Add to Inquiry
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
