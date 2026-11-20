import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/mockDatabase';
import { Star, CheckCircle, MessageSquarePlus, ThumbsUp, MapPin } from 'lucide-react';

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState(TESTIMONIALS_DATA);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    town: 'Manchester, NH',
    service: 'General Handyman',
    rating: 5,
    text: ''
  });

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;

    const added = {
      id: Date.now(),
      name: newReview.name,
      town: newReview.town,
      service: newReview.service,
      rating: Number(newReview.rating),
      date: 'Just Now',
      text: newReview.text,
      verified: true
    };

    setReviews([added, ...reviews]);
    setShowForm(false);
    setNewReview({ name: '', town: 'Manchester, NH', service: 'General Handyman', rating: 5, text: '' });
  };

  return (
    <section className="py-10 sm:py-16 bg-white border-t border-brand-cardBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-navy/10 text-brand-navy rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              Verified Local Reputation
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-heading text-brand-navy">
              Real NH Homeowner Reviews
            </h2>
            <p className="text-xs sm:text-sm text-brand-textMuted mt-1">
              Read authentic feedback from your neighbors across Hillsborough & Merrimack counties.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-slate-50 border border-slate-200 p-2.5 sm:p-3 rounded-xl flex items-center gap-3">
              <div className="text-right">
                <div className="font-heading font-extrabold text-xl text-brand-navy">4.9 / 5.0</div>
                <div className="flex text-amber-400 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-left text-[11px] text-slate-500 border-l border-slate-200 pl-3">
                <span className="font-bold text-slate-800 block">Google Verified</span>
                <span>380+ Local Ratings</span>
              </div>
            </div>

            <button
              onClick={() => setShowForm(!showForm)}
              className="px-3.5 py-2.5 bg-brand-navy hover:bg-brand-navyDark text-white text-xs font-bold rounded-xl shadow-sm transition-all flex items-center flex-shrink-0"
            >
              <MessageSquarePlus className="w-4 h-4 mr-1.5 text-brand-orange" />
              Write Review
            </button>
          </div>
        </div>

        {/* Add Review Form Dropdown */}
        {showForm && (
          <form onSubmit={handleAddReview} className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8 text-left space-y-3 animate-fadeIn">
            <h4 className="font-heading font-bold text-sm text-brand-navy uppercase">
              Submit Your Experience with Apex Pro
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                required
                placeholder="Your Name (e.g. John S.)"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                className="p-2 border rounded text-xs bg-white"
              />
              <input
                type="text"
                placeholder="Town (e.g. Bedford, NH)"
                value={newReview.town}
                onChange={(e) => setNewReview({ ...newReview, town: e.target.value })}
                className="p-2 border rounded text-xs bg-white"
              />
              <select
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                className="p-2 border rounded text-xs bg-white"
              >
                <option value="5">⭐⭐⭐⭐⭐ (5 Stars)</option>
                <option value="4">⭐⭐⭐⭐ (4 Stars)</option>
                <option value="3">⭐⭐⭐ (3 Stars)</option>
              </select>
            </div>
            <textarea
              required
              rows="2"
              placeholder="Tell others what work was done and how the craftsmen performed..."
              value={newReview.text}
              onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
              className="w-full p-2 border rounded text-xs bg-white"
            />
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 bg-brand-orange text-white text-xs font-bold rounded shadow"
              >
                Post Review
              </button>
            </div>
          </form>
        )}

        {/* Reviews Grid (2 columns on mobile/tablet, 4 columns on large screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-brand-grayBg rounded-xl p-4 sm:p-5 border border-brand-cardBorder flex flex-col justify-between text-left hover:border-slate-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  {rev.verified && (
                    <span className="flex items-center text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                      <CheckCircle className="w-3 h-3 mr-0.5" /> Verified Job
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic mb-3">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-900 block">{rev.name}</span>
                  <span className="text-[10px] text-slate-500 flex items-center">
                    <MapPin className="w-2.5 h-2.5 mr-0.5 text-brand-orange" />
                    {rev.town}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-medium">
                  {rev.service}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
