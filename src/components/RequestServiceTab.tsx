import React, { useEffect, useMemo, useState } from 'react';
import { Calendar, CheckCircle2, Home, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

type ServiceRequired = 'Essential Home Refresh' | 'Signature Home Care' | 'Not sure yet';
const REQUEST_RECIPIENT_EMAIL = 'helponhire@gmail.com';

type RequestFormData = {
  name: string;
  phone: string;
  location: string;
  serviceRequired: ServiceRequired;
  preferredDate: string;
  needsDescription: string;
};

interface RequestServiceTabProps {
  initialServiceId?: string;
}

const defaultFormData: RequestFormData = {
  name: '',
  phone: '',
  location: '',
  serviceRequired: 'Essential Home Refresh',
  preferredDate: '',
  needsDescription: '',
};

const serviceIdToService: Record<string, ServiceRequired> = {
  'essential-home-refresh': 'Essential Home Refresh',
  'home-cleaning': 'Essential Home Refresh',
  cleaning: 'Essential Home Refresh',
  'signature-home-care': 'Signature Home Care',
  'domestic-help': 'Signature Home Care',
  'errands-deliveries': 'Signature Home Care',
};

const serviceOptions: ServiceRequired[] = ['Essential Home Refresh', 'Signature Home Care', 'Not sure yet'];

export const RequestServiceTab: React.FC<RequestServiceTabProps> = ({ initialServiceId }) => {
  const [formData, setFormData] = useState<RequestFormData>(() => {
    const saved = localStorage.getItem('hoh_request_service_form');
    return saved ? { ...defaultFormData, ...JSON.parse(saved) } : defaultFormData;
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [requestReference, setRequestReference] = useState('');
  const [emailDeliveryStatus, setEmailDeliveryStatus] = useState<'sent' | 'failed' | null>(null);

  useEffect(() => {
    localStorage.setItem('hoh_request_service_form', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    if (!initialServiceId) return;
    const service = serviceIdToService[initialServiceId];
    if (service) setFormData((current) => ({ ...current, serviceRequired: service }));
  }, [initialServiceId]);

  const summary = useMemo(() => `${formData.serviceRequired} in ${formData.location || 'location pending'}`, [formData]);

  const updateForm = (updates: Partial<RequestFormData>) => {
    setFormData((current) => ({ ...current, ...updates }));
  };

  const generateReference = () => {
    const dateCode = new Date().toISOString().slice(2, 10).replace(/-/g, '');
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    return `HOH-${dateCode}-${randomCode}`;
  };

  const sendRequestEmail = async (reference: string) => {
    const response = await fetch(`https://formsubmit.co/ajax/${REQUEST_RECIPIENT_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: `New Help On Hire Home Support Request - ${reference}`,
        _template: 'table',
        _captcha: 'false',
        _autoresponse: `Hello ${formData.name},

Thank you for contacting Help On Hire.

We have received your home support request.

Reference: ${reference}
Service: ${formData.serviceRequired}
Location: ${formData.location}
Preferred date/start period: ${formData.preferredDate}

A Help On Hire service advisor will contact you to understand your home, assess the scope, and guide you through quotation and booking confirmation.

Help On Hire
Home Support That Cares`,
        reference,
        submittedTo: REQUEST_RECIPIENT_EMAIL,
        name: formData.name,
        phoneOrWhatsApp: formData.phone,
        location: formData.location,
        serviceRequired: formData.serviceRequired,
        preferredDateOrStartPeriod: formData.preferredDate,
        needsDescription: formData.needsDescription,
      }),
    });

    if (!response.ok) throw new Error('Request email could not be sent.');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.location || !formData.preferredDate || !formData.needsDescription) {
      alert('Please fill out all required fields.');
      return;
    }

    setSubmitting(true);
    setEmailDeliveryStatus(null);
    const reference = generateReference();
    setRequestReference(reference);

    try {
      await sendRequestEmail(reference);
      setEmailDeliveryStatus('sent');
    } catch (error) {
      setEmailDeliveryStatus('failed');
    } finally {
      setSubmitting(false);
      setSubmitted(true);
      localStorage.removeItem('hoh_request_service_form');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F7F8F6] px-4 py-16 sm:px-6 lg:px-8" id="request-service-success">
        <div className="mx-auto max-w-2xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
          <CheckCircle2 className="h-12 w-12 text-[#12A33B]" />
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-[#08221c]">Your assessment request has been received.</h1>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600">
            A service advisor will contact you to understand your home, assess the scope, and guide you through quotation and booking confirmation.
          </p>
          <div className="mt-8 rounded-2xl bg-[#EAF6ED] p-5 text-sm">
            <div className="flex justify-between gap-4 border-b border-emerald-900/10 pb-3">
              <span className="font-bold text-zinc-500">Reference</span>
              <span className="font-extrabold text-[#08221c]">{requestReference}</span>
            </div>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between gap-4"><span className="text-zinc-500">Service</span><span className="font-bold text-zinc-800">{formData.serviceRequired}</span></div>
              <div className="flex justify-between gap-4"><span className="text-zinc-500">Location</span><span className="font-bold text-zinc-800 text-right">{formData.location}</span></div>
              <div className="flex justify-between gap-4"><span className="text-zinc-500">Start</span><span className="font-bold text-zinc-800 text-right">{formData.preferredDate}</span></div>
            </div>
          </div>
          <p className="mt-5 text-xs text-zinc-500">
            {emailDeliveryStatus === 'sent'
              ? 'The request was emailed to Help On Hire.'
              : 'Email delivery may need approval. Please use WhatsApp if you need a faster response.'}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData(defaultFormData);
              }}
              className="flex-1 rounded-full border border-zinc-200 py-3 text-xs font-bold uppercase tracking-widest text-zinc-700 transition hover:bg-zinc-50"
            >
              New Request
            </button>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex-1 rounded-full bg-[#12A33B] py-3 text-center text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#0f8f34]">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F8F6] font-sans" id="request-service-page">
      <section className="bg-[#08221c] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#D8C690]">Contact / Book</span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">Tell us what your home needs.</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300">
            Whether you need a one-time Home Refresh or ongoing Signature Home Care, tell us what you need and we will guide you through the next step.
          </p>
        </div>
      </section>

      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8">
        <aside className="lg:col-span-4">
          <div className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
            <Home className="h-7 w-7 text-[#12A33B]" />
            <h2 className="mt-5 text-xl font-extrabold tracking-tight text-[#08221c]">What happens next?</h2>
            <ol className="mt-5 space-y-3 text-sm text-zinc-600">
              <li>1. We understand your home and requirements.</li>
              <li>2. We assess the scope.</li>
              <li>3. You receive your quotation.</li>
              <li>4. You confirm your booking.</li>
            </ol>
          </div>
        </aside>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-8" id="service-request-form">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Input label="Name *" value={formData.name} onChange={(value) => updateForm({ name: value })} placeholder="Your full name" id="request-name" />
            <Input label="Phone / WhatsApp *" value={formData.phone} onChange={(value) => updateForm({ phone: value })} placeholder="+234..." id="request-phone" type="tel" icon={<Phone className="h-3.5 w-3.5" />} />
            <Input label="Location *" value={formData.location} onChange={(value) => updateForm({ location: value })} placeholder="Area, estate, or neighborhood" id="request-location" icon={<MapPin className="h-3.5 w-3.5" />} />
            <Select label="Service Required *" value={formData.serviceRequired} onChange={(value) => updateForm({ serviceRequired: value as ServiceRequired })} options={serviceOptions} id="request-service-required" />
            <div className="sm:col-span-2">
              <Input label="Preferred Date / Start Period *" value={formData.preferredDate} onChange={(value) => updateForm({ preferredDate: value })} placeholder="e.g. This weekend, next Monday, ongoing from September" id="request-preferred-date" icon={<Calendar className="h-3.5 w-3.5" />} />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-zinc-500">Brief Description of Your Needs *</label>
            <textarea
              rows={6}
              placeholder="Tell us about the home, the responsibilities you need support with, frequency, and any important notes."
              value={formData.needsDescription}
              onChange={(e) => updateForm({ needsDescription: e.target.value })}
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 focus:border-[#12A33B] focus:outline-none focus:ring-2 focus:ring-[#12A33B]/20"
            />
          </div>

          <div className="mt-6 rounded-2xl bg-[#EAF6ED] p-4 text-xs leading-relaxed text-[#08221c]">
            <span className="font-bold">Request summary:</span> {summary}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              disabled={submitting}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#12A33B] py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#0f8f34] disabled:opacity-60"
            >
              <span>{submitting ? 'Sending Request' : 'Request My Assessment'}</span>
              <Send className="h-4 w-4" />
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-zinc-200 py-4 text-xs font-bold uppercase tracking-widest text-[#08221c] transition hover:bg-zinc-50"
            >
              <span>Chat With Us on WhatsApp</span>
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </form>
      </main>
    </div>
  );
};

interface InputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ id, label, value, onChange, placeholder, type = 'text', icon }) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-zinc-500">{label}</label>
    <div className="relative">
      {icon && <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400">{icon}</span>}
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 focus:border-[#12A33B] focus:outline-none focus:ring-2 focus:ring-[#12A33B]/20 ${icon ? 'pl-10' : ''}`}
      />
    </div>
  </div>
);

interface SelectProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const Select: React.FC<SelectProps> = ({ id, label, value, onChange, options }) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-zinc-500">{label}</label>
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 focus:border-[#12A33B] focus:outline-none focus:ring-2 focus:ring-[#12A33B]/20"
    >
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);
