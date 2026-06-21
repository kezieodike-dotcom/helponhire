import React, { useEffect, useMemo, useState } from 'react';
import {
  Calendar,
  CheckCircle2,
  Clock,
  CreditCard,
  FileText,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  User,
} from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

type ServiceCategory = 'Cleaning' | 'Errands / Deliveries' | 'Domestic Help' | 'Event Staffing';
const REQUEST_RECIPIENT_EMAIL = 'helponhire@gmail.com';

type RequestFormData = {
  fullName: string;
  phone: string;
  dateOfBirth: string;
  email: string;
  address: string;
  serviceCategory: ServiceCategory;
  dateRequired: string;
  preferredTime: string;
  location: string;
  duration: string;
  additionalInstructions: string;
  apartmentSize: string;
  cleaningType: string;
  pickupPoint: string;
  deliveryDestination: string;
  domesticHelpType: string;
  domesticArrangement: string;
  eventStaffCount: string;
  eventDate: string;
  eventDuration: string;
};

interface RequestServiceTabProps {
  initialServiceId?: string;
}

const defaultFormData: RequestFormData = {
  fullName: '',
  phone: '',
  dateOfBirth: '',
  email: '',
  address: '',
  serviceCategory: 'Cleaning',
  dateRequired: '',
  preferredTime: 'Morning (8:00 AM - 12:00 PM)',
  location: '',
  duration: '2 hours',
  additionalInstructions: '',
  apartmentSize: '1 bedroom',
  cleaningType: 'Regular cleaning',
  pickupPoint: '',
  deliveryDestination: '',
  domesticHelpType: 'General house help',
  domesticArrangement: 'Live-out',
  eventStaffCount: '2',
  eventDate: '',
  eventDuration: '4 hours',
};

const serviceOptions: ServiceCategory[] = [
  'Cleaning',
  'Errands / Deliveries',
  'Domestic Help',
  'Event Staffing',
];

const serviceIdToCategory: Record<string, ServiceCategory> = {
  'home-cleaning': 'Cleaning',
  cleaning: 'Cleaning',
  'errands-deliveries': 'Errands / Deliveries',
  'domestic-help': 'Domestic Help',
  'event-staffing': 'Event Staffing',
  handyman: 'Domestic Help',
  'packing-moving': 'Errands / Deliveries',
  'office-assistant': 'Domestic Help',
  'event-server': 'Event Staffing',
};

const timeOptions = [
  'Morning (8:00 AM - 12:00 PM)',
  'Afternoon (12:00 PM - 4:00 PM)',
  'Evening (4:00 PM - 8:00 PM)',
  'Flexible (Any time)',
];

const durationOptions = [
  '1 hour',
  '2 hours',
  '3 hours',
  '4 hours',
  '6 hours',
  '8 hours (Full day)',
  'Multiple days',
  'Ongoing / To be discussed',
];

export const RequestServiceTab: React.FC<RequestServiceTabProps> = ({ initialServiceId }) => {
  const [formData, setFormData] = useState<RequestFormData>(() => {
    const saved = localStorage.getItem('hoh_request_service_form');
    return saved ? { ...defaultFormData, ...JSON.parse(saved) } : defaultFormData;
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [bookingReference, setBookingReference] = useState('');
  const [emailDeliveryStatus, setEmailDeliveryStatus] = useState<'sent' | 'failed' | null>(null);

  useEffect(() => {
    localStorage.setItem('hoh_request_service_form', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    if (!initialServiceId) return;

    const category = serviceIdToCategory[initialServiceId];
    if (category) {
      setFormData((current) => ({ ...current, serviceCategory: category }));
    }
  }, [initialServiceId]);

  const categorySummary = useMemo(() => {
    if (formData.serviceCategory === 'Cleaning') {
      return `${formData.cleaningType}, ${formData.apartmentSize}`;
    }
    if (formData.serviceCategory === 'Errands / Deliveries') {
      return `${formData.pickupPoint || 'Pickup pending'} to ${formData.deliveryDestination || 'destination pending'}`;
    }
    if (formData.serviceCategory === 'Domestic Help') {
      return `${formData.domesticHelpType}, ${formData.domesticArrangement}`;
    }
    return `${formData.eventStaffCount} staff, ${formData.eventDuration}`;
  }, [formData]);

  const updateForm = (updates: Partial<RequestFormData>) => {
    setFormData((current) => ({ ...current, ...updates }));
  };

  const generateReference = () => {
    const dateCode = new Date().toISOString().slice(2, 10).replace(/-/g, '');
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    return `HOH-${dateCode}-${randomCode}`;
  };

  const buildRequestPayload = (reference: string) => ({
    _subject: `New Help On Hire Service Request - ${reference}`,
    _template: 'table',
    _captcha: 'false',
    bookingReference: reference,
    submittedTo: REQUEST_RECIPIENT_EMAIL,
    fullName: formData.fullName,
    phone: formData.phone,
    dateOfBirth: formData.dateOfBirth,
    email: formData.email || 'Not provided',
    address: formData.address,
    serviceCategory: formData.serviceCategory,
    dateRequired: formData.dateRequired,
    preferredTime: formData.preferredTime,
    location: formData.location,
    duration: formData.duration,
    additionalInstructions: formData.additionalInstructions || 'None provided',
    serviceSpecificDetails: categorySummary,
    apartmentSize: formData.serviceCategory === 'Cleaning' ? formData.apartmentSize : '',
    cleaningType: formData.serviceCategory === 'Cleaning' ? formData.cleaningType : '',
    pickupPoint: formData.serviceCategory === 'Errands / Deliveries' ? formData.pickupPoint : '',
    deliveryDestination: formData.serviceCategory === 'Errands / Deliveries' ? formData.deliveryDestination : '',
    domesticHelpType: formData.serviceCategory === 'Domestic Help' ? formData.domesticHelpType : '',
    domesticArrangement: formData.serviceCategory === 'Domestic Help' ? formData.domesticArrangement : '',
    eventStaffCount: formData.serviceCategory === 'Event Staffing' ? formData.eventStaffCount : '',
    eventDate: formData.serviceCategory === 'Event Staffing' ? formData.eventDate : '',
    eventDuration: formData.serviceCategory === 'Event Staffing' ? formData.eventDuration : '',
  });

  const sendRequestEmail = async (reference: string) => {
    const response = await fetch(`https://formsubmit.co/ajax/${REQUEST_RECIPIENT_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(buildRequestPayload(reference)),
    });

    if (!response.ok) {
      throw new Error('Request email could not be sent.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.dateOfBirth || !formData.address || !formData.dateRequired || !formData.location) {
      alert('Please fill out all required client and service fields.');
      return;
    }

    if (formData.serviceCategory === 'Errands / Deliveries' && (!formData.pickupPoint || !formData.deliveryDestination)) {
      alert('Please add both pickup point and delivery destination.');
      return;
    }

    setSubmitting(true);
    setEmailDeliveryStatus(null);

    setTimeout(async () => {
      const reference = generateReference();
      setBookingReference(reference);
      try {
        await sendRequestEmail(reference);
        setEmailDeliveryStatus('sent');
      } catch (error) {
        setEmailDeliveryStatus('failed');
      }
      setSubmitting(false);
      setSubmitted(true);
      localStorage.removeItem('hoh_request_service_form');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  const resetForm = () => {
    setSubmitted(false);
    setBookingReference('');
    setEmailDeliveryStatus(null);
    setFormData(defaultFormData);
    localStorage.removeItem('hoh_request_service_form');
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F9FBFB] px-4 py-16 sm:px-6 lg:px-8" id="request-service-success">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EBF3F0]">
                <CheckCircle2 className="h-8 w-8 text-[#0A201C]" />
              </div>
              <span className="mt-8 inline-flex rounded-full bg-amber-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-700">
                Request Received
              </span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0A201C]">
                Thank you for choosing Help On Hire.
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                Your request has been received. A service advisor will confirm availability shortly.
              </p>

              <div className="mt-8 rounded-2xl bg-[#EBF3F0] p-5 text-sm">
                <div className="flex justify-between gap-4 border-b border-emerald-900/10 pb-3">
                  <span className="font-bold text-zinc-500">Booking Reference</span>
                  <span className="font-extrabold text-[#0A201C]">{bookingReference}</span>
                </div>
                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex justify-between gap-4"><span className="text-zinc-500">Service</span><span className="font-bold text-zinc-800">{formData.serviceCategory}</span></div>
                  <div className="flex justify-between gap-4"><span className="text-zinc-500">Details</span><span className="font-bold text-zinc-800 text-right">{categorySummary}</span></div>
                  <div className="flex justify-between gap-4"><span className="text-zinc-500">Date</span><span className="font-bold text-zinc-800">{formData.dateRequired}</span></div>
                  <div className="flex justify-between gap-4"><span className="text-zinc-500">Time</span><span className="font-bold text-zinc-800">{formData.preferredTime}</span></div>
                  <div className="flex justify-between gap-4"><span className="text-zinc-500">Location</span><span className="font-bold text-zinc-800 text-right">{formData.location}</span></div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 text-xs sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200 p-4">
                  <Mail className="mb-3 h-5 w-5 text-[#0A201C]" />
                  <span className="font-bold text-zinc-900">
                    {emailDeliveryStatus === 'sent' ? 'Request emailed to Help On Hire' : 'Email delivery pending'}
                  </span>
                  <p className="mt-1 text-zinc-500">
                    {emailDeliveryStatus === 'sent'
                      ? REQUEST_RECIPIENT_EMAIL
                      : `If this is the first request, ${REQUEST_RECIPIENT_EMAIL} may need to approve email delivery.`}
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-200 p-4">
                  <MessageCircle className="mb-3 h-5 w-5 text-[#0A201C]" />
                  <span className="font-bold text-zinc-900">WhatsApp update prepared</span>
                  <p className="mt-1 text-zinc-500">{formData.phone}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={resetForm}
                  className="flex-1 rounded-full border border-zinc-200 py-3 text-xs font-bold uppercase tracking-widest text-zinc-700 transition hover:bg-zinc-50"
                  id="new-request-btn"
                >
                  New Request
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-full bg-emerald-500 py-3 text-center text-xs font-bold uppercase tracking-widest text-white transition hover:bg-emerald-600"
                  id="wa-followup-btn"
                >
                  Chat on WhatsApp
                </a>
              </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FBFB] font-sans" id="request-service-page">
      <section className="relative overflow-hidden bg-[#0A201C] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(#11322d_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-30" />
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-900/30 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#C1E929]">
            Book a Service
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Service Request Form
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Send your service details to Help On Hire. A service advisor will review your request and contact you to confirm availability.
          </p>
        </div>
      </section>

      <div className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-5 text-xs font-bold text-zinc-600 sm:grid-cols-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2"><Clock className="h-4 w-4 text-[#0A201C]" />15-30 minute review</div>
          <div className="flex items-center justify-center gap-2"><ShieldCheck className="h-4 w-4 text-[#0A201C]" />Vetted provider matching</div>
          <div className="flex items-center justify-center gap-2"><CreditCard className="h-4 w-4 text-[#0A201C]" />Bank transfer, card, or online payment</div>
        </div>
      </div>

      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm" id="service-request-form">
          <div className="border-b border-zinc-200 bg-[#EBF3F0] px-6 py-5 sm:px-8">
            <h2 className="text-lg font-extrabold tracking-tight text-[#0A201C]">Service Request Form</h2>
            <p className="mt-1 text-xs text-zinc-500">Fields marked with * are required. Extra fields change based on your selected service.</p>
          </div>

          <div className="space-y-8 p-6 sm:p-8">
            <section>
              <div className="mb-5 flex items-center gap-2">
                <User className="h-4 w-4 text-[#0A201C]" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#0A201C]">Personal Information</h3>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Input label="Full Name *" value={formData.fullName} onChange={(value) => updateForm({ fullName: value })} placeholder="e.g. Amara Johnson" id="request-full-name" />
                <Input label="Phone Number *" value={formData.phone} onChange={(value) => updateForm({ phone: value })} placeholder="+234 812 345 6789" id="request-phone" type="tel" icon={<Phone className="h-3.5 w-3.5" />} />
                <Input label="Date of Birth *" value={formData.dateOfBirth} onChange={(value) => updateForm({ dateOfBirth: value })} id="request-dob" type="date" />
                <Input label="Email (Optional)" value={formData.email} onChange={(value) => updateForm({ email: value })} placeholder="name@email.com" id="request-email" type="email" icon={<Mail className="h-3.5 w-3.5" />} />
                <div className="sm:col-span-2">
                  <Input label="Address *" value={formData.address} onChange={(value) => updateForm({ address: value })} placeholder="Residential or business address" id="request-address" />
                </div>
              </div>
            </section>

            <section>
              <div className="mb-5 flex items-center gap-2">
                <FileText className="h-4 w-4 text-[#0A201C]" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#0A201C]">Service Information</h3>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Select label="Service Category *" value={formData.serviceCategory} onChange={(value) => updateForm({ serviceCategory: value as ServiceCategory })} options={serviceOptions} id="request-service-category" />
                <Input label="Date Required *" value={formData.dateRequired} onChange={(value) => updateForm({ dateRequired: value })} id="request-date-required" type="date" icon={<Calendar className="h-3.5 w-3.5" />} />
                <Select label="Preferred Time *" value={formData.preferredTime} onChange={(value) => updateForm({ preferredTime: value })} options={timeOptions} id="request-preferred-time" />
                <Input label="Location *" value={formData.location} onChange={(value) => updateForm({ location: value })} placeholder="e.g. GRA Phase 2, Port Harcourt" id="request-location" icon={<MapPin className="h-3.5 w-3.5" />} />
                <Select label="Duration (If Applicable)" value={formData.duration} onChange={(value) => updateForm({ duration: value })} options={durationOptions} id="request-duration" />
              </div>
            </section>

            <section className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
              <div className="mb-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Service-specific details</span>
                <h3 className="mt-1 text-base font-extrabold text-[#0A201C]">{formData.serviceCategory}</h3>
              </div>
              {formData.serviceCategory === 'Cleaning' && (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Select label="Apartment / Space Size *" value={formData.apartmentSize} onChange={(value) => updateForm({ apartmentSize: value })} options={['Studio', '1 bedroom', '2 bedrooms', '3 bedrooms', '4+ bedrooms', 'Office / commercial space']} id="request-apartment-size" />
                  <Select label="Cleaning Type *" value={formData.cleaningType} onChange={(value) => updateForm({ cleaningType: value })} options={['Regular cleaning', 'Deep cleaning', 'Industrial cleaning', 'Move-in / move-out cleaning', 'Post-event cleaning']} id="request-cleaning-type" />
                </div>
              )}
              {formData.serviceCategory === 'Errands / Deliveries' && (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Input label="Pickup Point *" value={formData.pickupPoint} onChange={(value) => updateForm({ pickupPoint: value })} placeholder="Pickup address or shop" id="request-pickup" />
                  <Input label="Delivery Destination *" value={formData.deliveryDestination} onChange={(value) => updateForm({ deliveryDestination: value })} placeholder="Drop-off address" id="request-destination" />
                </div>
              )}
              {formData.serviceCategory === 'Domestic Help' && (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Select label="Type of Help Required *" value={formData.domesticHelpType} onChange={(value) => updateForm({ domesticHelpType: value })} options={['General house help', 'Laundry support', 'Kitchen assistance', 'Child care support', 'Elderly household support']} id="request-domestic-type" />
                  <Select label="Live-in or Live-out *" value={formData.domesticArrangement} onChange={(value) => updateForm({ domesticArrangement: value })} options={['Live-out', 'Live-in', 'Short-term live-in', 'To be discussed']} id="request-domestic-arrangement" />
                </div>
              )}
              {formData.serviceCategory === 'Event Staffing' && (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <Input label="Number of Staff Needed *" value={formData.eventStaffCount} onChange={(value) => updateForm({ eventStaffCount: value })} id="request-staff-count" type="number" />
                  <Input label="Event Date *" value={formData.eventDate} onChange={(value) => updateForm({ eventDate: value, dateRequired: value || formData.dateRequired })} id="request-event-date" type="date" />
                  <Select label="Event Duration *" value={formData.eventDuration} onChange={(value) => updateForm({ eventDuration: value, duration: value })} options={durationOptions} id="request-event-duration" />
                </div>
              )}
            </section>

            <div>
              <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-zinc-500">Additional Instructions</label>
              <textarea
                rows={4}
                placeholder="Add access notes, task details, apartment size notes, event brief, delivery handling instructions, or special requirements."
                value={formData.additionalInstructions}
                onChange={(e) => updateForm({ additionalInstructions: e.target.value })}
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-xs text-zinc-900 focus:border-[#0A201C] focus:outline-none focus:ring-2 focus:ring-[#0A201C]/20"
                id="request-additional-instructions"
              />
            </div>

            <div className="rounded-2xl bg-[#EBF3F0] p-4 text-xs leading-relaxed text-[#0A201C]">
              <span className="font-bold">After submission:</span> a service advisor will review your request and contact you to confirm availability.
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0A201C] py-4 text-xs font-bold uppercase tracking-widest text-[#C1E929] shadow-lg shadow-[#0A201C]/10 transition hover:bg-emerald-950 disabled:opacity-60"
              id="submit-service-request-btn"
            >
              {submitting ? (
                <>
                  <span className="h-4 w-4 rounded-full border-2 border-[#C1E929] border-t-transparent animate-spin" />
                  <span>Submitting Request</span>
                </>
              ) : (
                <>
                  <span>Submit Request</span>
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
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
        className={`w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-xs text-zinc-900 focus:border-[#0A201C] focus:outline-none focus:ring-2 focus:ring-[#0A201C]/20 ${icon ? 'pl-10' : ''}`}
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
      className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-xs text-zinc-900 focus:border-[#0A201C] focus:outline-none focus:ring-2 focus:ring-[#0A201C]/20"
    >
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);
