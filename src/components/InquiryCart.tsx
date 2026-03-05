import { X, Trash2, ArrowRight, Package } from 'lucide-react';
import { Lot } from '../constants/assets';

interface InquiryCartProps {
  isOpen: boolean;
  onClose: () => void;
  items: Lot[];
  onRemove: (lotId: string) => void;
}

const tierBadgeStyles = {
  legendary: { background: 'linear-gradient(135deg, #B8860B 0%, #DAA520 100%)' },
  singleOrigin: { background: '#E11D48' },
  exoticBlend: { background: '#000000' },
};

export default function InquiryCart({ isOpen, onClose, items, onRemove }: InquiryCartProps) {
  const totalValue = items.reduce((sum, lot) => sum + lot.boxPrice, 0);
  const totalKg = items.reduce((sum, _lot) => sum + 12.5, 0);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6" style={{ borderBottom: '1px solid #E0E6F4' }}>
          <div>
            <h2 className="text-xl font-bold" style={{ color: '#000000' }}>Your Inquiry</h2>
            <p className="text-sm" style={{ color: '#2C2D2E', opacity: 0.6 }}>{items.length} lot(s) selected</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full transition-colors hover:opacity-70"
            style={{ color: '#2C2D2E' }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-[calc(100%-180px)] overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <Package size={48} className="mb-4" style={{ color: '#E0E6F4' }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#2C2D2E' }}>
                No lots selected
              </h3>
              <p className="text-sm mb-6" style={{ color: '#2C2D2E', opacity: 0.6 }}>
                Browse our available lots and add them to your inquiry.
              </p>
              <button
                onClick={onClose}
                className="font-semibold hover:opacity-80"
                style={{ color: '#E11D48' }}
              >
                View Available Lots
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((lot) => {
                const badgeStyle = tierBadgeStyles[lot.tier];
                return (
                  <div
                    key={lot.id}
                    className="flex items-start gap-4 p-4 rounded-md"
                    style={{ backgroundColor: '#F6F6F6', border: '1px solid #E0E6F4' }}
                  >
                    {/* Tier Badge */}
                    <div
                      className="w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-md"
                      style={badgeStyle}
                    >
                      <span className="text-white font-bold text-xs">{lot.scaScore}</span>
                    </div>

                    {/* Lot Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs uppercase tracking-wider" style={{ color: '#2C2D2E', opacity: 0.5 }}>
                        {lot.lotNumber}
                      </p>
                      <h4 className="font-bold truncate" style={{ color: '#000000' }}>{lot.name}</h4>
                      <p className="text-sm" style={{ color: '#2C2D2E', opacity: 0.6 }}>
                        {lot.variety} | {lot.process}
                      </p>
                      <p className="font-bold mt-1" style={{ color: '#E11D48' }}>
                        ${lot.boxPrice.toLocaleString()}
                      </p>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => onRemove(lot.id)}
                      className="p-2 rounded transition-colors hover:bg-red-50"
                      style={{ color: '#2C2D2E', opacity: 0.5 }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-white" style={{ borderTop: '1px solid #E0E6F4' }}>
            {/* Summary */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm" style={{ color: '#2C2D2E', opacity: 0.6 }}>Total ({items.length} boxes)</p>
                <p className="text-xs" style={{ color: '#2C2D2E', opacity: 0.5 }}>{totalKg}kg green coffee</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold" style={{ color: '#000000' }}>
                  ${totalValue.toLocaleString()}
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              onClick={onClose}
              className="w-full font-bold py-4 flex items-center justify-center gap-2 transition-colors rounded-md hover:opacity-90"
              style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
            >
              Submit Inquiry
              <ArrowRight size={20} />
            </a>

            <p className="text-center text-xs mt-3" style={{ color: '#2C2D2E', opacity: 0.5 }}>
              We'll respond within 24 hours
            </p>
          </div>
        )}
      </div>
    </>
  );
}
