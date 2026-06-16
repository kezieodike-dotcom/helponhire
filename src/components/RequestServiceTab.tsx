import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Phone, FileText, CheckCircle2, Send, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface RequestServiceTabProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const RequestServiceTab: React.FC<RequestServiceTabProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('hoh_request_service_form');
    return saved ? JSON.parse(saved) : {
      fullName: '',
      phone: '',
      location: '',
      serviceType: 'Home Cleaning',
      preferredDate: '',
      preferredTime: 'Morning (8:00 AM - 12:00 PM)',
      duration: '2 hours',
      specialInstructions: ''
    };
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  React.useEffect(() => {
    localStorage.setItem('hoh_request_service_form', JSON.stringify(formData));
  }, [formData]);

  const serviceOptions = [
    'Home Cleaning',
    'Errands & Deliveries',
    'Market Runs',
    'Home Maintenance & Repairs',
    'Office Administrative Support',
    'Temporary Business Staff',
    'Event Ushers & Support',
    'Event Hospitality Staff',
    'Corporate Staffing',
    'Other (Please specify in instructions)'
  ];

  const timeOptions = [
    'Morning (8:00 AM - 12:00 PM)',
    'Afternoon (12:00 PM - 4:00 PM)',
    'Evening (4:00 PM - 8:00 PM)',
    'Flexible (Any time)'
  ];

  const durationOptions = [
    '1 hour',
    '2 hours',
    '3 hours',
    '4 hours',
    '6 hours',
    '8 hours (Full day)',
    'Multiple days',
    'Ongoing / To be discussed'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.location || !formData.preferredDate) {
      alert('Please fill out all required fields.');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      localStorage.removeItem('hoh_request_service_form');
    }, 1800);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F9FBFB] flex items-center justify-center px-4 py-24" id="request-service-success">
        <div className="max-w-lg w-full bg-white border border-zinc-200 rounded-3xl p-10 shadow-xl text-center space-y-6">
          <div className="h-16 w-16 bg-[#EBF3F0] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="h-8 w-8 text-[#0A201C]" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">Request Submitted!</h2>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Thank you, <span className="font-bold text-[#0A201C]">{formData.fullName}</span>. We have received your service request for <span className="font-bold text-[#0A201C]">{formData.serviceType}</span>.
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Our coordinator will contact you on <span className="font-bold text-[#0A201C]">{formData.phone}</span> within <span className="text-[#0A201C] font-bold">15–30 minutes</span> to confirm your booking.
            </p>
          </div>
          <div className="bg-[#EBF3F0] rounded-2xl p-5 text-left space-y-2 text-xs">
            <span className="font-bold text-[#0A201C] uppercase tracking-wider text-[10px] block mb-3">Your Request Summary</span>
            <div className="flex justify-between"><span className="text-zinc-500">Service:</span><span className="font-bold text-zinc-800">{formData.serviceType}</span></div>
            <div className="flex justify-between"><span className="text-zinc-500">Date:</span><span className="font-bold text-zinc-800">{formData.preferredDate}</span></div>
            <div className="flex justify-between"><span className="text-zinc-500">Time:</span><span className="font-bold text-zinc-800">{formData.preferredTime}</span></div>
            <div className="flex justify-between"><span className="text-zinc-500">Duration:</span><span className="font-bold text-zinc-800">{formData.duration}</span></div>
            <div className="flex justify-between"><span className="text-zinc-500">Location:</span><span className="font-bold text-zinc-800">{formData.location}</span></div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ fullName: '', phone: '', location: '', serviceType: 'Home Cleaning', preferredDate: '', preferredTime: 'Morning (8:00 AM - 12:00 PM)', duration: '2 hours', specialInstructions: '' });
                localStorage.removeItem('hoh_request_service_form');
              }}
              className="flex-1 rounded-full border border-zinc-200 hover:bg-zinc-50 py-3 text-xs font-bold text-zinc-600 transition"
              id="new-request-btn"
            >
              New Request
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 text-xs font-bold transition text-center"
              id="wa-followup-btn"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F9FBFB] min-h-screen font-sans" id="request-service-page">

      {/* Page Hero Banner */}
      <section className="bg-[#0A201C] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#11322d_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-30" />
        <div className="relative mx-auto max-w-4xl text-center space-y-4">
          <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-[#C1E929] bg-emerald-900/30 px-4 py-1.5 rounded-full border border-emerald-500/20">
            REQUEST A SERVICE
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Tell Us What You Need
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Fill in the form below and we will match you with a trusted, vetted professional. We respond within 15–30 minutes.
          </p>
        </div>
      </section>

      {/* Trust indicators bar */}
      <div className="bg-white border-b border-zinc-200">
        <div className="mx-auto max-w-5xl px-4 py-5 grid grid-cols-3 gap-4 text-center">
          {[
            { label: 'Fast Response', icon: '⚡' },
            { label: 'Trusted Professionals', icon: '✅' },
            { label: 'Seamless Experience', icon: '🤝' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-center space-x-2 text-xs font-bold text-zinc-600">
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Form */}
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white border border-zinc-200 rounded-3xl shadow-xl overflow-hidden">

          {/* Form Header */}
          <div className="bg-[#EBF3F0] px-8 py-6 border-b border-zinc-200">
            <h2 className="text-lg font-bold text-[#0A201C] tracking-tight">Service Request Form</h2>
            <p className="text-xs text-zinc-500 mt-1">All fields marked with * are required. We will contact you to confirm details.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-7" id="service-request-form">

            {/* Section: Personal Details */}
            <div>
              <div className="flex items-center space-x-2 mb-5">
                <User className="h-4 w-4 text-[#0A201C]" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#0A201C]">Personal Details</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Amara Johnson"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full rounded-xl bg-zinc-50 border border-zinc-200 px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#0A201C]/20 focus:border-[#0A201C]"
                    id="request-full-name"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-2">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+234 812 345 6789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl bg-zinc-50 border border-zinc-200 pl-10 pr-4 py-3 text-xs text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#0A201C]/20 focus:border-[#0A201C]"
                      id="request-phone"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Location */}
            <div>
              <div className="flex items-center space-x-2 mb-5">
                <MapPin className="h-4 w-4 text-[#0A201C]" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#0A201C]">Location</h3>
              </div>
              <div>
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-2">Service Location / Address *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. GRA Phase II, Port Harcourt"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full rounded-xl bg-zinc-50 border border-zinc-200 px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#0A201C]/20 focus:border-[#0A201C]"
                  id="request-location"
                />
              </div>
            </div>

            {/* Section: Service Details */}
            <div>
              <div className="flex items-center space-x-2 mb-5">
                <FileText className="h-4 w-4 text-[#0A201C]" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#0A201C]">Service Details</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-2">Type of Service *</label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full rounded-xl bg-zinc-50 border border-zinc-200 px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#0A201C]/20 focus:border-[#0A201C]"
                    id="request-service-type"
                  >
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-2">Duration *</label>
                  <select
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="w-full rounded-xl bg-zinc-50 border border-zinc-200 px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#0A201C]/20 focus:border-[#0A201C]"
                    id="request-duration"
                  >
                    {durationOptions.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Section: Schedule */}
            <div>
              <div className="flex items-center space-x-2 mb-5">
                <Calendar className="h-4 w-4 text-[#0A201C]" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#0A201C]">Preferred Schedule</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-2">Preferred Date *</label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full rounded-xl bg-zinc-50 border border-zinc-200 pl-10 pr-4 py-3 text-xs text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#0A201C]/20 focus:border-[#0A201C]"
                      id="request-date"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-2">Preferred Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full rounded-xl bg-zinc-50 border border-zinc-200 pl-10 pr-4 py-3 text-xs text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#0A201C]/20 focus:border-[#0A201C]"
                      id="request-time"
                    >
                      {timeOptions.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Instructions */}
            <div>
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-2">Special Instructions (Optional)</label>
              <textarea
                rows={4}
                placeholder="Any special requirements, access instructions, specific tasks, or additional notes for the professional..."
                value={formData.specialInstructions}
                onChange={(e) => setFormData({ ...formData, specialInstructions: e.target.value })}
                className="w-full rounded-xl bg-zinc-50 border border-zinc-200 px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#0A201C]/20 focus:border-[#0A201C]"
                id="request-special-instructions"
              />
            </div>

            {/* Confirmation Note */}
            <div className="bg-[#EBF3F0] rounded-2xl p-4 text-xs text-[#0A201C] flex items-start space-x-3">
              <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-700" />
              <p className="leading-relaxed">
                <span className="font-bold">Fast Response Guaranteed:</span> After submitting your request, our coordinator will contact you within <span className="font-bold">15–30 minutes</span> to confirm availability and provide next steps.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-[#0A201C] hover:bg-emerald-950 text-[#C1E929] py-4 text-xs font-bold uppercase tracking-widest transition-all duration-200 shadow-lg shadow-[#0A201C]/10 flex items-center justify-center space-x-2 disabled:opacity-60"
              id="submit-service-request-btn"
            >
              {submitting ? (
                <>
                  <span className="h-4 w-4 rounded-full border-2 border-[#C1E929] border-t-transparent animate-spin" />
                  <span>Submitting Request...</span>
                </>
              ) : (
                <>
                  <span>Submit Request</span>
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>

            {/* Alternative WhatsApp CTA */}
            <div className="text-center">
              <p className="text-xs text-zinc-400 mb-3">Prefer to chat directly?</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 text-xs font-bold transition"
                id="request-whatsapp-btn"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

          </form>
        </div>
      </div>

    </div>
  );
};
