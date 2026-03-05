import { Search, TestTube, FileText, CreditCard, Truck, ArrowRight } from 'lucide-react';
import { SHIPPING } from '../constants/assets';

export default function PurchaseProcess() {
  const steps = [
    {
      icon: Search,
      step: '01',
      title: 'Browse & Select',
      description: 'Review available lots and add to your inquiry list. Download technical sheets for your team\'s review.',
      action: 'View Available Lots',
      actionHref: '#lots',
    },
    {
      icon: TestTube,
      step: '02',
      title: 'Request Samples',
      description: `We ship 100g roasted samples for cupping. Sample cost: $${SHIPPING.sampleCost} (credited toward order).`,
      action: 'Request Sample',
      actionHref: '#contact',
      optional: true,
    },
    {
      icon: FileText,
      step: '03',
      title: 'Submit Inquiry',
      description: 'Complete the trade inquiry form with your roastery details, lot preferences, and shipping destination.',
      action: 'Start Inquiry',
      actionHref: '#contact',
    },
    {
      icon: CreditCard,
      step: '04',
      title: 'Confirm & Pay',
      description: 'Receive proforma invoice within 24 hours. Payment: Bank transfer or PayPal Business. 50% deposit required.',
      action: null,
      actionHref: null,
    },
    {
      icon: Truck,
      step: '05',
      title: 'Shipping',
      description: `${SHIPPING.fobPort} or DDP to major ports. Transit time: ${SHIPPING.transitTime}. Minimum order: ${SHIPPING.minimumOrder}.`,
      action: null,
      actionHref: null,
    },
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-600 uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Simple Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            How To Order
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            From inquiry to delivery in 5 simple steps. We make sourcing
            exceptional green coffee as straightforward as possible.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-stone-200" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Step Card */}
                <div className="bg-stone-50 p-6 h-full flex flex-col">
                  {/* Icon and Number */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-amber-500 flex items-center justify-center mx-auto relative z-10">
                      <step.icon size={28} className="text-stone-900" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-stone-900 text-white text-sm font-bold rounded-full flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>

                  {/* Optional Badge */}
                  {step.optional && (
                    <span className="inline-block bg-stone-200 text-stone-600 text-xs px-2 py-1 mb-3 self-start">
                      Optional
                    </span>
                  )}

                  {/* Content */}
                  <h3 className="text-lg font-bold text-stone-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed flex-1">
                    {step.description}
                  </p>

                  {/* Action */}
                  {step.action && (
                    <a
                      href={step.actionHref!}
                      className="mt-4 text-amber-600 hover:text-amber-700 font-semibold text-sm flex items-center gap-1"
                    >
                      {step.action}
                      <ArrowRight size={14} />
                    </a>
                  )}
                </div>

                {/* Arrow (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 lg:hidden">
                    <ArrowRight size={24} className="text-stone-300 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Payment Terms */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-stone-900 text-white p-8">
            <h3 className="text-xl font-bold mb-4">Payment Terms</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-stone-700">
                <span className="text-stone-400">First Order</span>
                <span className="font-semibold">{SHIPPING.paymentTerms}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-stone-700">
                <span className="text-stone-400">Repeat Customers</span>
                <span className="font-semibold">{SHIPPING.repeatCustomerTerms}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-400">Payment Methods</span>
                <span className="font-semibold">Bank Transfer, PayPal Business</span>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-8">
            <h3 className="text-xl font-bold text-stone-900 mb-4">Shipping Options</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-amber-200">
                <span className="text-stone-600">FOB</span>
                <span className="font-semibold text-stone-900">{SHIPPING.fobPort}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-amber-200">
                <span className="text-stone-600">DDP Available</span>
                <span className="font-semibold text-stone-900">Quote on request</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-amber-200">
                <span className="text-stone-600">Transit Time</span>
                <span className="font-semibold text-stone-900">{SHIPPING.transitTime}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-600">Minimum Order</span>
                <span className="font-semibold text-amber-600">{SHIPPING.minimumOrder}</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-10 py-4 text-lg transition-colors"
          >
            Start Your Inquiry
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
