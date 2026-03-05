import { FileText, Mail, X } from 'lucide-react';
import { useState } from 'react';
import { CONTACT } from '../constants/assets';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-stone-900 text-white py-3 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm">
        <span className="text-amber-400 font-semibold">
          2026 Harvest Now Available
        </span>

        <span className="hidden md:inline text-stone-500">|</span>

        <a
          href="#"
          className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
        >
          <FileText size={14} />
          Download Lot Catalog [PDF]
        </a>

        <span className="hidden md:inline text-stone-500">|</span>

        <a
          href={`mailto:${CONTACT.email}`}
          className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
        >
          <Mail size={14} />
          {CONTACT.email}
        </a>
      </div>

      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500 hover:text-white transition-colors"
        aria-label="Close announcement"
      >
        <X size={18} />
      </button>
    </div>
  );
}
