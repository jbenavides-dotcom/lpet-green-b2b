import { useState } from 'react';
import { Package, Eye, Plus, Check, Filter, Crown, Star, Shield } from 'lucide-react';
import { AVAILABLE_LOTS, TIERS, Lot } from '../constants/assets';

interface CurrentLotsProps {
  onAddToInquiry: (lot: Lot) => void;
  onViewDetails: (lot: Lot) => void;
  inquiryItems: Lot[];
}

const tierIcons = {
  legendary: Crown,
  singleOrigin: Star,
  exoticBlend: Shield,
};

const tierBadgeStyles = {
  legendary: { background: 'linear-gradient(135deg, #B8860B 0%, #DAA520 100%)', color: '#FFFFFF' },
  singleOrigin: { background: '#E11D48', color: '#FFFFFF' },
  exoticBlend: { background: '#000000', color: '#FFFFFF' },
};

export default function CurrentLots({ onAddToInquiry, onViewDetails, inquiryItems }: CurrentLotsProps) {
  const [filterTier, setFilterTier] = useState<string>('all');
  const [filterVariety, setFilterVariety] = useState<string>('all');
  const [filterProcess, setFilterProcess] = useState<string>('all');

  // Get unique values for filters
  const varieties = [...new Set(AVAILABLE_LOTS.map(lot => lot.variety))];
  const processes = [...new Set(AVAILABLE_LOTS.map(lot => lot.process))];

  // Filter lots
  const filteredLots = AVAILABLE_LOTS.filter(lot => {
    if (filterTier !== 'all' && lot.tier !== filterTier) return false;
    if (filterVariety !== 'all' && lot.variety !== filterVariety) return false;
    if (filterProcess !== 'all' && lot.process !== filterProcess) return false;
    return true;
  });

  const isInInquiry = (lotId: string) => inquiryItems.some(item => item.id === lotId);

  return (
    <section id="lots" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-sm mb-4 font-medium" style={{ color: '#E11D48' }}>
            2026 Harvest
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
            Available Nanolots
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#2C2D2E' }}>
            Each 12.5kg box is a complete nanolot with full documentation.
            Click any lot to see detailed technical specifications.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12 p-6 rounded-lg" style={{ backgroundColor: '#F6F6F6' }}>
          <div className="flex items-center gap-2">
            <Filter size={18} style={{ color: '#2C2D2E' }} />
            <span className="text-sm font-medium" style={{ color: '#2C2D2E' }}>Filter:</span>
          </div>

          {/* Tier Filter */}
          <select
            value={filterTier}
            onChange={(e) => setFilterTier(e.target.value)}
            className="px-4 py-2 rounded-md bg-white text-sm focus:outline-none focus:ring-2"
            style={{ border: '1px solid #D8DCED', color: '#2C2D2E' }}
          >
            <option value="all">All Tiers</option>
            {Object.values(TIERS).map(tier => (
              <option key={tier.id} value={tier.id}>{tier.name} ({tier.scoreRange})</option>
            ))}
          </select>

          {/* Variety Filter */}
          <select
            value={filterVariety}
            onChange={(e) => setFilterVariety(e.target.value)}
            className="px-4 py-2 rounded-md bg-white text-sm focus:outline-none focus:ring-2"
            style={{ border: '1px solid #D8DCED', color: '#2C2D2E' }}
          >
            <option value="all">All Varieties</option>
            {varieties.map(variety => (
              <option key={variety} value={variety}>{variety}</option>
            ))}
          </select>

          {/* Process Filter */}
          <select
            value={filterProcess}
            onChange={(e) => setFilterProcess(e.target.value)}
            className="px-4 py-2 rounded-md bg-white text-sm focus:outline-none focus:ring-2"
            style={{ border: '1px solid #D8DCED', color: '#2C2D2E' }}
          >
            <option value="all">All Processes</option>
            {processes.map(process => (
              <option key={process} value={process}>{process}</option>
            ))}
          </select>

          {/* Clear Filters */}
          {(filterTier !== 'all' || filterVariety !== 'all' || filterProcess !== 'all') && (
            <button
              onClick={() => {
                setFilterTier('all');
                setFilterVariety('all');
                setFilterProcess('all');
              }}
              className="text-sm underline hover:opacity-80"
              style={{ color: '#E11D48' }}
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Lots Grid */}
        {filteredLots.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLots.map((lot) => {
              const TierIcon = tierIcons[lot.tier];
              const inInquiry = isInInquiry(lot.id);

              return (
                <div
                  key={lot.id}
                  className="group bg-white hover:shadow-xl transition-all duration-300 overflow-hidden rounded-lg"
                  style={{ border: '1px solid #E0E6F4' }}
                >
                  {/* Tier Badge */}
                  <div className="relative">
                    <div
                      className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-bold uppercase tracking-wider flex items-center gap-1 rounded-md"
                      style={tierBadgeStyles[lot.tier]}
                    >
                      <TierIcon size={12} />
                      {lot.tier === 'singleOrigin' ? 'Single Origin' : lot.tier === 'exoticBlend' ? 'Exotic Blend' : 'Legendary'}
                    </div>

                    {/* Availability Badge */}
                    <div className="absolute top-4 right-4 z-10 text-white px-3 py-1 text-xs rounded-md" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
                      {lot.availableBoxes} boxes left
                    </div>

                    {/* Lot Image */}
                    <div className="h-48 overflow-hidden">
                      <img
                        src={lot.image}
                        alt={lot.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Lot Number & Name */}
                    <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">
                      LOT #{lot.lotNumber}
                    </p>
                    <h3 className="text-xl font-bold text-stone-900 mb-3">
                      {lot.name}
                    </h3>

                    {/* Key Specs */}
                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                      <div>
                        <span style={{ color: '#2C2D2E', opacity: 0.6 }}>SCA:</span>
                        <span className="ml-1 font-bold" style={{ color: '#E11D48' }}>{lot.scaScore}</span>
                      </div>
                      <div>
                        <span style={{ color: '#2C2D2E', opacity: 0.6 }}>Process:</span>
                        <span className="ml-1 font-medium" style={{ color: '#2C2D2E' }}>{lot.process}</span>
                      </div>
                      <div>
                        <span style={{ color: '#2C2D2E', opacity: 0.6 }}>Variety:</span>
                        <span className="ml-1 font-medium" style={{ color: '#2C2D2E' }}>{lot.variety}</span>
                      </div>
                      <div>
                        <span style={{ color: '#2C2D2E', opacity: 0.6 }}>Altitude:</span>
                        <span className="ml-1 font-medium" style={{ color: '#2C2D2E' }}>{lot.altitude}m</span>
                      </div>
                    </div>

                    {/* Cupping Notes Preview */}
                    <p className="text-stone-600 text-sm italic mb-4 line-clamp-2">
                      "{lot.cuppingNotes.substring(0, 100)}..."
                    </p>

                    {/* Pricing */}
                    <div className="p-4 mb-4 flex justify-between items-center rounded-md" style={{ backgroundColor: '#F6F6F6' }}>
                      <div>
                        <p className="text-2xl font-bold" style={{ color: '#000000' }}>
                          ${lot.pricePerLb}<span className="text-sm font-normal" style={{ color: '#2C2D2E', opacity: 0.6 }}>/lb</span>
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold" style={{ color: '#E11D48' }}>
                          ${lot.boxPrice.toLocaleString()}
                        </p>
                        <p className="text-xs" style={{ color: '#2C2D2E', opacity: 0.6 }}>per 12.5kg box</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => onViewDetails(lot)}
                        className="flex-1 font-medium py-3 transition-colors flex items-center justify-center gap-2 rounded-md hover:opacity-80"
                        style={{ border: '1px solid #E0E6F4', color: '#2C2D2E' }}
                      >
                        <Eye size={18} />
                        View Details
                      </button>
                      <button
                        onClick={() => onAddToInquiry(lot)}
                        disabled={inInquiry}
                        className="flex-1 font-medium py-3 transition-colors flex items-center justify-center gap-2 rounded-md hover:opacity-90"
                        style={inInquiry
                          ? { backgroundColor: '#dcfce7', color: '#166534', cursor: 'default' }
                          : { backgroundColor: '#000000', color: '#FFFFFF' }
                        }
                      >
                        {inInquiry ? (
                          <>
                            <Check size={18} />
                            Added
                          </>
                        ) : (
                          <>
                            <Plus size={18} />
                            Add to Inquiry
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 bg-stone-50 rounded-lg">
            <Package size={48} className="text-stone-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-stone-700 mb-2">
              No lots match your filters
            </h3>
            <p className="text-stone-500 mb-6">
              Try adjusting your filter criteria or{' '}
              <button
                onClick={() => {
                  setFilterTier('all');
                  setFilterVariety('all');
                  setFilterProcess('all');
                }}
                className="text-amber-600 hover:text-amber-700 underline"
              >
                clear all filters
              </button>
            </p>
          </div>
        )}

        {/* Summary Stats */}
        <div className="mt-12 text-center">
          <p className="text-stone-600">
            Showing <span className="font-bold text-stone-900">{filteredLots.length}</span> of{' '}
            <span className="font-bold text-stone-900">{AVAILABLE_LOTS.length}</span> available lots
            {' '}|{' '}
            Total available: <span className="font-bold text-amber-600">
              {filteredLots.reduce((sum, lot) => sum + lot.totalKg, 0).toFixed(1)}kg
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
