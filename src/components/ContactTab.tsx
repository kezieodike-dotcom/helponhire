import React, { useState } from 'react';
import { CheckCircle2, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react';
import { WHATSAPP_PHONE_DISPLAY, WHATSAPP_PHONE_TEL, WHATSAPP_URL } from '../constants';
import { IllustrationTile } from './IllustrationTile';
import { SocialLinks } from './SocialLinks';

const CONTACT_RECIPIENT_EMAIL = 'helponhire@gmail.com';

export const ContactTab: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Home support inquiry',
    message: '',
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

    if (!response.ok) throw new Error('Contact inquiry could not be sent.');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setDeliveryFailed(false);

    try {
      await sendContactEmail();
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: 'Home support inquiry', message: '' });
    } catch (error) {
      setDeliveryFailed(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8F6] px-4 py-12 text-zinc-900 sm:px-6 lg:px-8" id="contact-tab-view">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#12A33B]">Contact / Book</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#08221c] sm:text-5xl">Talk to a service advisor.</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600">
            Send a note, ask a question, or start a home support request.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <aside className="space-y-6 lg:col-span-5">
            <div className="mobile-image-card min-h-[360px] rounded-2xl border border-zinc-200 bg-[#08221c] p-6 shadow-sm sm:min-h-0 sm:bg-white sm:p-4">
              <IllustrationTile name="contact" label="Contact advisor illustration" className="mobile-image-card-media aspect-[16/10]" />
              <h2 className="mt-5 text-lg font-bold tracking-tight text-[#08221c]">Help On Hire</h2>
              <div className="mt-6 space-y-5 text-sm">
                <ContactItem icon={<MapPin className="h-5 w-5" />} label="Location" value="Woji, Port Harcourt, Rivers State, Nigeria" />
                <ContactItem icon={<Phone className="h-5 w-5" />} label="Phone / WhatsApp" value={<a href={`tel:${WHATSAPP_PHONE_TEL}`} className="hover:text-[#12A33B]">{WHATSAPP_PHONE_DISPLAY}</a>} />
                <ContactItem icon={<Mail className="h-5 w-5" />} label="Email" value={<a href="mailto:helponhire@gmail.com" className="hover:text-[#12A33B]">helponhire@gmail.com</a>} />
                <ContactItem icon={<MessageSquare className="h-5 w-5" />} label="WhatsApp" value={<a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-[#12A33B] hover:text-[#0f8f34]">Chat with us directly</a>} />
              </div>
              <SocialLinks className="mt-7 border-t border-zinc-100 pt-6" />
            </div>

            <div className="mobile-image-card min-h-[280px] rounded-2xl bg-[#08221c] p-7 text-white">
              <IllustrationTile name="care" label="Home support care illustration" className="mobile-image-card-media mb-6 aspect-[16/10] border-white/10" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D8C690]">Home Support That Cares</span>
              <h3 className="mt-3 text-xl font-extrabold tracking-tight">Easing your burden.</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                One-time and ongoing support, quoted after we understand your home.
              </p>
            </div>
          </aside>

          <section className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm lg:col-span-7">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_220px] md:items-center">
              <div>
                <h2 className="text-lg font-bold tracking-tight text-[#08221c]">Send an Inquiry</h2>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">Our service advisor will respond with the next step.</p>
              </div>
              <IllustrationTile name="booking" label="Home support inquiry illustration" className="aspect-[16/10] w-full" />
            </div>

            {submitted ? (
              <div className="mobile-image-card mt-8 min-h-[330px] rounded-2xl border border-emerald-100 bg-[#08221c] p-8 text-center sm:min-h-0 sm:bg-[#EAF6ED]">
                <IllustrationTile name="contact" label="Inquiry received illustration" className="mobile-image-card-media mx-auto mb-6 aspect-[16/10] max-w-sm" />
                <CheckCircle2 className="mx-auto h-12 w-12 text-[#12A33B]" />
                <h3 className="mt-4 text-base font-bold text-[#08221c]">Inquiry Received</h3>
                <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-zinc-600">
                  Thank you for reaching out to Help On Hire. Your inquiry has been sent to our team.
                </p>
                <button onClick={() => setSubmitted(false)} className="mobile-card-panel mt-6 rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#08221c] transition hover:bg-zinc-100 sm:bg-[#08221c] sm:text-white sm:hover:bg-[#12372f]">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5 text-xs" id="contact-inquiry-form">
                {deliveryFailed && (
                  <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-rose-700">
                    We could not send your inquiry right now. Please try again or use WhatsApp for a faster response.
                  </div>
                )}
                <Field label="Your Full Name *">
                  <input required placeholder="Your full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="field-input" />
                </Field>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Email Address *">
                    <input required type="email" placeholder="name@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="field-input" />
                  </Field>
                  <Field label="Phone / WhatsApp">
                    <input type="tel" placeholder="+234..." value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="field-input" />
                  </Field>
                </div>
                <Field label="Inquiry Subject">
                  <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="field-input">
                    <option value="Home support inquiry">Home support inquiry</option>
                    <option value="Essential Home Refresh">Essential Home Refresh</option>
                    <option value="Signature Home Care">Signature Home Care</option>
                    <option value="Become a Home Support Professional">Become a Home Support Professional</option>
                    <option value="Feedback / Complaints">Feedback / Complaints</option>
                  </select>
                </Field>
                <Field label="Message *">
                  <textarea required rows={6} placeholder="Briefly describe your home support needs, preferred start period, and any questions." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="field-input" />
                </Field>
                <button type="submit" disabled={submitting} className="flex w-full items-center justify-center gap-2 rounded-full bg-[#12A33B] py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#0f8f34] disabled:opacity-60">
                  <span>{submitting ? 'Sending Inquiry' : 'Send Inquiry'}</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

const ContactItem: React.FC<{ icon: React.ReactNode; label: string; value: React.ReactNode }> = ({ icon, label, value }) => (
  <div className="flex items-start gap-4">
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF6ED] text-[#12A33B]">{icon}</span>
    <div>
      <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">{label}</h3>
      <div className="mt-1 font-semibold text-white sm:text-[#08221c]">{value}</div>
    </div>
  </div>
);

const Field: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <label className="block">
    <span className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-widest text-zinc-500">{label}</span>
    {children}
  </label>
);
