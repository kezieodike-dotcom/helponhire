import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ClipboardList, Send, ShieldCheck, UserCheck } from 'lucide-react';
import { IllustrationTile, type IllustrationKey } from './IllustrationTile';

const APPLICATION_RECIPIENT_EMAIL = 'helponhire@gmail.com';

type ApplicationData = {
  fullName: string;
  phone: string;
  location: string;
  experience: string;
  skills: string;
  availability: string;
  introduction: string;
};

const defaultApplication: ApplicationData = {
  fullName: '',
  phone: '',
  location: '',
  experience: '',
  skills: '',
  availability: '',
  introduction: '',
};

const process: { title: string; illustration: IllustrationKey }[] = [
  { title: 'Application', illustration: 'contact' },
  { title: 'Screening', illustration: 'recruit' },
  { title: 'Training', illustration: 'train' },
  { title: 'Assessment', illustration: 'assess' },
  { title: 'Approval', illustration: 'integrity' },
  { title: 'Deployment', illustration: 'deploy' },
];

export const JoinProTab: React.FC = () => {
  const [formData, setFormData] = useState<ApplicationData>(() => {
    const saved = localStorage.getItem('hoh_pro_application_form');
    return saved ? { ...defaultApplication, ...JSON.parse(saved) } : defaultApplication;
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [deliveryFailed, setDeliveryFailed] = useState(false);

  React.useEffect(() => {
    localStorage.setItem('hoh_pro_application_form', JSON.stringify(formData));
  }, [formData]);

  const updateForm = (updates: Partial<ApplicationData>) => {
    setFormData((current) => ({ ...current, ...updates }));
  };

  const sendApplicationEmail = async () => {
    const response = await fetch(`https://formsubmit.co/ajax/${APPLICATION_RECIPIENT_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: `New Help On Hire Home Support Professional Application - ${formData.fullName}`,
        _template: 'table',
        _captcha: 'false',
        submittedTo: APPLICATION_RECIPIENT_EMAIL,
        fullName: formData.fullName,
        phoneOrWhatsApp: formData.phone,
        location: formData.location,
        relevantExperience: formData.experience,
        skillsOrStrengths: formData.skills,
        availability: formData.availability,
        briefIntroduction: formData.introduction,
      }),
    });

    if (!response.ok) throw new Error('Professional application could not be sent.');
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.location || !formData.skills || !formData.availability || !formData.introduction) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setDeliveryFailed(false);

    try {
      await sendApplicationEmail();
      setSubmitted(true);
      localStorage.removeItem('hoh_pro_application_form');
    } catch (error) {
      setDeliveryFailed(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8F6] text-zinc-900 font-sans" id="pro-join-view">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
        <div className="lg:col-span-7">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#12A33B]">Become a Home Support Professional</span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-[#08221c] sm:text-5xl">
            Help homes feel lighter.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base">
            Join a network of dependable people who bring care, skill, and calm into busy households.
          </p>
          <button
            onClick={() => document.getElementById('application-form-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#12A33B] px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#0f8f34] active:translate-y-[1px]"
          >
            <span>Start Your Application</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="lg:col-span-5">
          <img
            src="/images/nigerian-home-support-team.jpg"
            alt="Help On Hire home support professionals"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
          />
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <UserCheck className="h-8 w-8 text-[#12A33B]" />
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#08221c]">Who we welcome.</h2>
            <p className="mt-5 text-sm leading-relaxed text-zinc-600">
              Responsible, respectful, reliable people who are willing to learn and serve with care.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              You do not simply work in someone&apos;s home. You become part of the support system that helps that household function better.
            </p>
          </div>
          <div>
            <ShieldCheck className="h-8 w-8 text-[#12A33B]" />
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#08221c]">Care is the standard.</h2>
            <p className="mt-5 text-sm leading-relaxed text-zinc-600">
              Every professional goes through recruitment, orientation, training, and assessment before deployment.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#12A33B]">Our Professional Standard</p>
          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-6">
            {process.map((step, index) => (
              <div key={step.title} className="mobile-image-card min-h-[180px] bg-[#08221c] p-5 sm:min-h-0 sm:bg-white sm:p-4">
                <IllustrationTile name={step.illustration} label={`${step.title} illustration`} className="mobile-image-card-media mb-5 aspect-square" />
                <span className="font-mono text-xs font-bold text-[#12A33B]">{String(index + 1).padStart(2, '0')}</span>
                <p className="mt-3 text-xs font-bold uppercase tracking-widest text-[#08221c]">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6 lg:px-8" id="application-form-section">
        <div className="rounded-2xl bg-[#08221c] p-6 text-white shadow-2xl sm:p-8">
          <div className="mb-8">
            <IllustrationTile name="contact" label="Professional application illustration" className="mb-6 aspect-[16/9] w-full border-white/10" />
            <ClipboardList className="h-8 w-8 text-[#D8C690]" />
            <h2 className="mt-5 text-2xl font-extrabold tracking-tight">Join the Network</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              If you are dependable, teachable, and serious about quality home support, we would like to hear from you.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-2xl border border-emerald-500/20 bg-white/5 p-8 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-[#D8C690]" />
              <h3 className="mt-4 text-xl font-extrabold">Application Received</h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-zinc-300">
                Thank you, {formData.fullName}. Our team will review your application and contact you about the next step.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-5">
              {deliveryFailed && (
                <div className="rounded-2xl border border-rose-500/30 bg-rose-950/30 p-4 text-xs text-rose-100">
                  We could not send your application right now. Please try again or contact Help On Hire on WhatsApp.
                </div>
              )}
              <Input label="Full Name *" value={formData.fullName} onChange={(value) => updateForm({ fullName: value })} />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Input label="Phone / WhatsApp *" value={formData.phone} onChange={(value) => updateForm({ phone: value })} />
                <Input label="Location *" value={formData.location} onChange={(value) => updateForm({ location: value })} />
              </div>
              <Input label="Relevant Experience" value={formData.experience} onChange={(value) => updateForm({ experience: value })} />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Input label="Skills / Strengths *" value={formData.skills} onChange={(value) => updateForm({ skills: value })} />
                <Input label="Availability *" value={formData.availability} onChange={(value) => updateForm({ availability: value })} />
              </div>
              <label className="block">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-zinc-300">Brief Introduction *</span>
                <textarea
                  rows={5}
                  value={formData.introduction}
                  onChange={(e) => updateForm({ introduction: e.target.value })}
                  placeholder="Tell us about yourself and why you want to provide home support with Help On Hire."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-[#D8C690] focus:outline-none focus:ring-2 focus:ring-[#D8C690]/20"
                />
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#12A33B] py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#0f8f34] disabled:opacity-60"
              >
                <span>{isSubmitting ? 'Submitting Application' : 'Start Your Application'}</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

const Input: React.FC<{ label: string; value: string; onChange: (value: string) => void }> = ({ label, value, onChange }) => (
  <label className="block">
    <span className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-zinc-300">{label}</span>
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-[#D8C690] focus:outline-none focus:ring-2 focus:ring-[#D8C690]/20"
    />
  </label>
);
