import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { WHATSAPP_PHONE_DISPLAY, WHATSAPP_PHONE_TEL, WHATSAPP_URL } from '../constants';

const CONTACT_RECIPIENT_EMAIL = 'helponhire@gmail.com';

export const ContactTab: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Request Service Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [deliveryFailed, setDeliveryFailed] = useState(false);

  const sendContactEmail = async () => {
    const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_RECIPIENT_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: `New Help On Hire Inquiry - ${formData.subject}`,
        _template: 'table',
        _captcha: 'false',
        submittedTo: CONTACT_RECIPIENT_EMAIL,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject,
        message: formData.message,
      }),
    });

    if (!response.ok) {
      throw new Error('Contact inquiry could not be sent.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setDeliveryFailed(false);

    try {
      await sendContactEmail();
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'Request Service Inquiry',
          message: ''
        });
      }, 5000);
    } catch (error) {
      setDeliveryFailed(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 bg-zinc-50 min-h-screen" id="contact-tab-view">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#0A201C]/60 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100/50">
          GET IN TOUCH
        </span>
        <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight sm:text-4xl mt-3">
          We're Here to Help
        </h1>
        <p className="text-sm text-zinc-500 mt-2 max-w-xl mx-auto leading-relaxed">
          Have an inquiry about our pricing, professional screening, corporate bulk recruitment packages, or location limits? Reach out to our regional desk and we'll reply shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Contact details (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-[#0A201C] tracking-tight border-b border-zinc-100 pb-4">
              Regional Operations Desk
            </h3>

            <div className="space-y-5 text-sm">
              <div className="flex items-start space-x-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#0A201C] shadow-inner font-bold">
                  <MapPin className="h-5 w-5 text-[#0A201C]" />
                </span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Headquarters Office</h4>
                  <p className="text-[#0A201C] font-semibold mt-0.5">8 Rumobasi Woji, Portharcourt</p>
                  <p className="text-xs text-zinc-505 leading-relaxed">Rivers State, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#0A201C] shadow-inner font-bold">
                  <Phone className="h-5 w-5 text-[#0A201C]" />
                </span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Hotline Phone Support</h4>
                  <a href={`tel:${WHATSAPP_PHONE_TEL}`} className="text-[#0A201C] font-semibold mt-0.5 hover:text-emerald-700 transition block">{WHATSAPP_PHONE_DISPLAY}</a>
                  <p className="text-xs text-zinc-505">Mon–Sun, 24/7 client concierge support desk</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#0A201C] shadow-inner font-bold">
                  <Mail className="h-5 w-5 text-[#0A201C]" />
                </span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Email Correspondence</h4>
                  <a href="mailto:helponhire@gmail.com" className="text-[#0A201C] font-semibold mt-0.5 hover:text-emerald-700 transition block">helponhire@gmail.com</a>
                  <p className="text-xs text-zinc-505">Average reply timeline: under 45 minutes</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#0A201C] shadow-inner font-bold">
                  <MessageSquare className="h-5 w-5 text-[#0A201C]" />
                </span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">WhatsApp Instant Connect</h4>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-600 font-semibold mt-0.5 hover:text-emerald-800 transition block"
                    id="contact-whatsapp-link"
                  >
                    Chat with us on WhatsApp
                  </a>
                  <p className="text-[#0A201C] font-semibold mt-0.5">{WHATSAPP_PHONE_DISPLAY}</p>
                  <p className="text-xs text-zinc-505">Direct routing to local operational dispatcher coordinators</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps embed for Port Harcourt */}
          <div className="rounded-3xl overflow-hidden border border-zinc-200 shadow-sm" style={{height: '220px'}}>
            <iframe
              title="Help On Hire Location - Port Harcourt"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126760.88591052757!2d6.9659929!3d4.8415838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd7d11b4a75b%3A0xba0c3a5b1e3fe8f!2sPort%20Harcourt%2C%20Rivers%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              id="google-maps-embed"
            />
          </div>

          <div className="bg-[#0A201C] rounded-3xl p-6 text-white relative overflow-hidden shadow-xl flex flex-col justify-between">
            <div className="absolute inset-0 bg-[radial-gradient(#11322d_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-35" />
            <div className="relative z-10">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#C1E929]">Service Coverage</span>
              <h4 className="text-base font-bold tracking-tight text-white mt-1">Serving Port Harcourt & surroundings</h4>
              <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                We dispatch certified professionals across GRA Phase I & II, Rumuola, Elelenwo, D-Line, Rumuokwuta, and surrounding Port Harcourt municipalities.
              </p>
            </div>
            <div className="relative z-10 pt-4 flex items-center justify-between text-xs text-[#C1E929] border-t border-white/10 mt-4 leading-none">
              <span>● OPERATIONS LIVE</span>
              <span>PORT HARCOURT, NIGERIA</span>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Submission form (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-3xl p-8 sm:p-10 shadow-sm relative">
          <h2 className="text-lg font-bold text-[#0A201C] tracking-tight">Submit an Inquiry</h2>
          <p className="text-xs text-zinc-500 mt-1 mb-8 leading-relaxed">
            Fill in your contact information and notes, and our customer coordinator desk will correspond shortly.
          </p>

          {submitted ? (
            <div className="rounded-2xl bg-indigo-50 border border-indigo-150 p-8 text-center animate-scale-in" id="contact-form-success">
              <CheckCircle2 className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
              <h3 className="text-base font-bold text-zinc-950">Inquiry Received!</h3>
              <p className="text-xs text-zinc-550 mt-1 max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out to Help On Hire. Your inquiry has been emailed to our Port Harcourt coordinator, and we will correspond to your email within <span className="font-bold text-indigo-600">30 minutes</span>.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 font-semibold bg-[#0A201C] hover:bg-zinc-950 text-white text-xs px-5 py-2.5 rounded-full transition"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-xs" id="contact-inquiry-form">
              {deliveryFailed && (
                <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-rose-700">
                  We could not send your inquiry right now. Please try again or use WhatsApp for immediate support.
                </div>
              )}
              <div>
                <label className="text-[10px] font-extrabold text-zinc-500 uppercase tracking-widest block mb-1.5">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl bg-zinc-50 border border-zinc-200 px-4 py-3 text-zinc-950 focus:outline-none focus:ring-2 focus:ring-[#0A201C]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-extrabold text-[#0A201C] font-bold text-zinc-500 uppercase tracking-widest block mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="johndoe@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl bg-zinc-50 border border-zinc-200 px-4 py-3 text-zinc-950 focus:outline-none focus:ring-2 focus:ring-[#0A201C]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-extrabold text-zinc-500 uppercase tracking-widest block mb-1.5">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    placeholder="e.g. +234 812 345 6789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl bg-zinc-50 border border-zinc-200 px-4 py-3 text-zinc-950 focus:outline-none focus:ring-2 focus:ring-[#0A201C]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-extrabold text-zinc-500 uppercase tracking-widest block mb-1.5">Inquiry Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full rounded-xl bg-zinc-50 border border-zinc-200 px-4 py-3 text-zinc-950 focus:outline-none focus:ring-2 focus:ring-[#0A201C]"
                >
                  <option value="Request Service Inquiry">Request Service Inquiry</option>
                  <option value="Corporate staffing solutions">Corporate staffing solutions</option>
                  <option value="Become a Professional candidate">Become a Professional candidate</option>
                  <option value="Operational coverage areas">Operational coverage areas</option>
                  <option value="Feedback / Complaints">Feedback / Complaints</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-extrabold text-zinc-500 uppercase tracking-widest block mb-1.5">Message / Description Notes *</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Detail your inquiry rules, operational dates, specific roles required, or general questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl bg-zinc-50 border border-zinc-200 px-4 py-3 text-zinc-950 focus:outline-none focus:ring-2 focus:ring-[#0A201C]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full bg-[#0A201C] hover:bg-zinc-950 py-4 text-xs font-bold uppercase tracking-widest text-[#C1E929] transition-transform shadow-lg shadow-[#0A201C]/5 flex items-center justify-center space-x-2 disabled:opacity-60"
                  id="submit-contact-form-btn"
                >
                  <span>{submitting ? 'Sending Inquiry' : 'Send Inquiry Status ->'}</span>
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
