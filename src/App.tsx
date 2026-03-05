import { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import TierShowcase from './components/TierShowcase';
import CurrentLots from './components/CurrentLots';
import ProducerAdvantage from './components/ProducerAdvantage';
import QualityAssurance from './components/QualityAssurance';
import TechnicalSpecs from './components/TechnicalSpecs';
import BuyerTestimonials from './components/BuyerTestimonials';
import PurchaseProcess from './components/PurchaseProcess';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import InquiryCart from './components/InquiryCart';
import LotModal from './components/LotModal';
import { Lot } from './constants/assets';

function App() {
  // Inquiry cart state
  const [inquiryItems, setInquiryItems] = useState<Lot[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Lot detail modal state
  const [selectedLot, setSelectedLot] = useState<Lot | null>(null);

  // Add lot to inquiry
  const addToInquiry = (lot: Lot) => {
    if (!inquiryItems.find(item => item.id === lot.id)) {
      setInquiryItems([...inquiryItems, lot]);
      setIsCartOpen(true);
    }
  };

  // Remove lot from inquiry
  const removeFromInquiry = (lotId: string) => {
    setInquiryItems(inquiryItems.filter(item => item.id !== lotId));
  };

  // Open lot detail modal
  const openLotDetail = (lot: Lot) => {
    setSelectedLot(lot);
  };

  // Close lot detail modal
  const closeLotDetail = () => {
    setSelectedLot(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Header with inquiry count */}
      <Header
        inquiryCount={inquiryItems.length}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Tier Showcase - Legendary, Heroes, Warrior */}
        <TierShowcase />

        {/* Current Available Lots */}
        <CurrentLots
          onAddToInquiry={addToInquiry}
          onViewDetails={openLotDetail}
          inquiryItems={inquiryItems}
        />

        {/* Producer Advantage - Same Hands, Seed to Cup */}
        <ProducerAdvantage />

        {/* Quality Assurance - Process, Certs, Traceability */}
        <QualityAssurance />

        {/* Technical Specs - What's In The Box */}
        <TechnicalSpecs />

        {/* B2B Testimonials */}
        <BuyerTestimonials />

        {/* Purchase Process */}
        <PurchaseProcess />

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Form */}
        <ContactForm selectedLots={inquiryItems} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Inquiry Cart Sidebar */}
      <InquiryCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={inquiryItems}
        onRemove={removeFromInquiry}
      />

      {/* Lot Detail Modal */}
      {selectedLot && (
        <LotModal
          lot={selectedLot}
          onClose={closeLotDetail}
          onAddToInquiry={addToInquiry}
          isInInquiry={inquiryItems.some(item => item.id === selectedLot.id)}
        />
      )}
    </div>
  );
}

export default App;
