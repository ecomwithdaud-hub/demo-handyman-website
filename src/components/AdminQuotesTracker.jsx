import React, { useState, useEffect } from 'react';
import { getStoredQuotes } from '../data/mockDatabase';
import { ClipboardList, Phone, Mail, MapPin, Calendar, Clock, CheckCircle, Search, RefreshCw, Trash2 } from 'lucide-react';

export default function AdminQuotesTracker() {
  const [quotes, setQuotes] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const loadQuotes = () => {
    setQuotes(getStoredQuotes());
  };

  useEffect(() => {
    loadQuotes();
  }, []);

  const handleStatusUpdate = (id, newStatus) => {
    const updated = quotes.map(q => q.id === id ? { ...q, status: newStatus } : q);
    setQuotes(updated);
    try {
      localStorage.setItem('apex_handyman_quotes_v1', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = (id) => {
    if (!confirm('Are you sure you want to remove this lead record?')) return;
    const updated = quotes.filter(q => q.id !== id);
    setQuotes(updated);
    try {
      localStorage.setItem('apex_handyman_quotes_v1', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const filteredQuotes = quotes.filter(q => {
    const matchesStatus = statusFilter === 'all' || q.status === statusFilter;
    const matchesSearch = 
      q.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.town.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <section className="py-10 sm:py-16 bg-brand-grayBg min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-navy/10 text-brand-navy rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <ClipboardList className="w-3.5 h-3.5 text-brand-orange" />
              Contractor Database Engine
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-heading text-brand-navy">
              Customer Leads & Quotes Manager
            </h2>
            <p className="text-xs sm:text-sm text-brand-textMuted mt-1">
              Live mock database entries submitted through the Instant Estimate & Quote forms.
            </p>
          </div>

          <button
            onClick={loadQuotes}
            className="px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center shadow-sm self-start md:self-auto"
          >
            <RefreshCw className="w-3.5 h-3.5 mr-1.5 text-brand-navy" />
            Refresh Records
          </button>
        </div>

        {/* Filters & Search Bar */}
        <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="relative w-full sm:w-72">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by customer, town, or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border rounded-lg text-xs focus:ring-1 focus:ring-brand-navy focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
            <span className="text-slate-500 font-bold uppercase text-[10px]">Filter Status:</span>
            {['all', 'New Request', 'Estimate Sent', 'Booked for Friday'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-2.5 py-1 rounded-md font-semibold whitespace-nowrap transition-colors ${
                  statusFilter === st
                    ? 'bg-brand-navy text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {st === 'all' ? 'All Leads' : st}
              </button>
            ))}
          </div>
        </div>

        {/* Lead Records Grid */}
        <div className="space-y-3">
          {filteredQuotes.map((quote) => (
            <div
              key={quote.id}
              className="bg-white rounded-xl border border-slate-200 hover:border-brand-slate shadow-sm p-4 sm:p-5 text-left transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-brand-navy bg-slate-100 px-2.5 py-1 rounded">
                    {quote.id}
                  </span>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900">
                    {quote.name}
                  </h3>
                  <span className="text-xs text-slate-500 flex items-center">
                    <MapPin className="w-3 h-3 text-brand-orange mr-0.5" />
                    {quote.town}, NH
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                    quote.status === 'New Request'
                      ? 'bg-amber-100 text-amber-800'
                      : quote.status === 'Booked for Friday'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {quote.status}
                  </span>

                  <button
                    onClick={() => handleDelete(quote.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 rounded"
                    title="Delete record"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Lead Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-3 text-xs">
                <div>
                  <span className="text-slate-400 uppercase font-bold text-[10px] block">Service Requested</span>
                  <span className="font-semibold text-slate-800">{quote.service}</span>
                  <span className="text-slate-500 block text-[11px] mt-0.5">{quote.details}</span>
                </div>

                <div>
                  <span className="text-slate-400 uppercase font-bold text-[10px] block">Contact & Dispatch</span>
                  <div className="flex items-center text-slate-800 font-medium mt-0.5">
                    <Phone className="w-3.5 h-3.5 text-brand-orange mr-1" />
                    <a href={`tel:${quote.phone}`} className="hover:underline">{quote.phone}</a>
                  </div>
                  {quote.email && (
                    <div className="flex items-center text-slate-500 text-[11px] mt-0.5">
                      <Mail className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      {quote.email}
                    </div>
                  )}
                </div>

                <div>
                  <span className="text-slate-400 uppercase font-bold text-[10px] block">Estimated Rate / Time</span>
                  <div className="font-heading font-bold text-emerald-700 text-sm">
                    {quote.estimatedAmount || '$120 - $350'}
                  </div>
                  <span className="text-slate-400 text-[10px] flex items-center mt-0.5">
                    <Clock className="w-3 h-3 mr-1" />
                    Submitted: {quote.dateSubmitted}
                  </span>
                </div>
              </div>

              {/* Status Update Quick Buttons */}
              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2 text-xs">
                <span className="text-slate-500 text-[11px]">Quick Action:</span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleStatusUpdate(quote.id, 'Estimate Sent')}
                    className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-[11px] font-semibold"
                  >
                    Mark "Estimate Sent"
                  </button>
                  <button
                    onClick={() => handleStatusUpdate(quote.id, 'Booked for Friday')}
                    className="px-2 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded text-[11px] font-semibold"
                  >
                    Mark "Booked"
                  </button>
                  <a
                    href={`tel:${quote.phone}`}
                    className="px-2.5 py-1 bg-brand-navy hover:bg-brand-navyDark text-white rounded text-[11px] font-bold flex items-center"
                  >
                    <Phone className="w-3 h-3 mr-1 text-brand-orange" />
                    Call Lead
                  </a>
                </div>
              </div>

            </div>
          ))}

          {filteredQuotes.length === 0 && (
            <div className="p-8 bg-white rounded-xl border border-slate-200 text-center">
              <p className="text-sm font-semibold text-slate-700">No matching leads found.</p>
              <p className="text-xs text-slate-500 mt-1">Submit an estimate via the Instant Calculator to see it appear here!</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
