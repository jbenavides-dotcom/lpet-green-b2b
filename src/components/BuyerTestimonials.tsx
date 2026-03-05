import { Quote, Star, Globe, Users, Trophy } from 'lucide-react';
import { TESTIMONIALS, SOCIAL_PROOF } from '../constants/assets';

export default function BuyerTestimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-600 uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Trusted Worldwide
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            What Roasters Say
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            From competition roasters to craft coffee shops, our green coffee
            helps specialty roasters create exceptional products.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-stone-50 p-6 text-center">
            <Users size={32} className="text-amber-500 mx-auto mb-3" />
            <p className="text-3xl font-bold text-stone-900">{SOCIAL_PROOF.roastersWorldwide}</p>
            <p className="text-stone-500 text-sm">Roasters Worldwide</p>
          </div>
          <div className="bg-stone-50 p-6 text-center">
            <Globe size={32} className="text-amber-500 mx-auto mb-3" />
            <p className="text-3xl font-bold text-stone-900">{SOCIAL_PROOF.countries}</p>
            <p className="text-stone-500 text-sm">Countries</p>
          </div>
          <div className="bg-stone-50 p-6 text-center">
            <Trophy size={32} className="text-amber-500 mx-auto mb-3" />
            <p className="text-3xl font-bold text-stone-900">{SOCIAL_PROOF.baristaChampions}</p>
            <p className="text-stone-500 text-sm">Barista Champions Supplied</p>
          </div>
          <div className="bg-stone-50 p-6 text-center">
            <Star size={32} className="text-amber-500 mx-auto mb-3" />
            <p className="text-3xl font-bold text-stone-900">{SOCIAL_PROOF.avgRating}</p>
            <p className="text-stone-500 text-sm">Average Rating</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-stone-50 p-8 relative"
            >
              <Quote size={40} className="text-amber-200 absolute top-6 right-6" />

              <blockquote className="text-lg text-stone-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center text-xl font-bold text-white">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-bold text-stone-900">{testimonial.author}</p>
                  <p className="text-stone-500 text-sm">{testimonial.title}</p>
                  <p className="text-amber-600 text-sm font-medium">
                    {testimonial.company}, {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-stone-600 mb-6">
            Ready to source exceptional green coffee for your roastery?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-8 py-4 transition-colors"
          >
            Start Your Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}
