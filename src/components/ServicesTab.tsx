import React from 'react';
import { ArrowRight, ClipboardCheck, Home, Sparkles } from 'lucide-react';
import { IllustrationTile, type IllustrationKey } from './IllustrationTile';
import type { ServicePageSlug } from './ServiceDetailTab';

interface ServicesTabProps {
  onOpenBooking: (serviceId?: string) => void;
  onNavigateService: (slug: ServicePageSlug) => void;
}

export const ServicesTab: React.FC<ServicesTabProps> = ({ onOpenBooking }) => {
  return (
    <div className="min-h-screen bg-[#F7F8F6] text-zinc-900 font-sans" id="services-page-scaffold">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
        <div className="lg:col-span-7">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#12A33B]">Services</span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#08221c] sm:text-5xl">
            Choose the support your home needs.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-600">
            Start with a one-time refresh or build ongoing help around your household rhythm.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="mobile-image-card min-h-[250px] rounded-2xl border border-zinc-200 bg-[#08221c] p-6 shadow-sm sm:min-h-0 sm:bg-white sm:p-4">
            <IllustrationTile name="assess" label="Home assessment illustration" className="mobile-image-card-media aspect-[16/10]" />
            <ClipboardCheck className="mt-5 h-7 w-7 text-[#12A33B]" />
            <h2 className="mt-5 text-xl font-extrabold tracking-tight text-[#08221c]">Quoted after assessment</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Your final quote reflects scope, home size, frequency, and household requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" id="service-offers">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Offer
            icon={<Sparkles className="h-6 w-6" />}
            illustration="refresh"
            title="Essential Home Refresh"
            subtitle="One-time home cleaning"
            copy="For the moments when your home needs a clean reset without adding another task to your day."
            action="Request a Home Refresh"
            serviceId="essential-home-refresh"
            onOpenBooking={onOpenBooking}
          />
          <Offer
            icon={<Home className="h-6 w-6" />}
            illustration="signature"
            title="Signature Home Care"
            subtitle="Ongoing home support"
            copy="Contract-based support for agreed household responsibilities that need steady attention."
            action="Request Home Support"
            serviceId="signature-home-care"
            onOpenBooking={onOpenBooking}
          />
        </div>
      </section>
    </div>
  );
};

const Offer: React.FC<{
  icon: React.ReactNode;
  illustration: IllustrationKey;
  title: string;
  subtitle: string;
  copy: string;
  action: string;
  serviceId: string;
  onOpenBooking: (serviceId?: string) => void;
}> = ({ icon, illustration, title, subtitle, copy, action, serviceId, onOpenBooking }) => (
  <article className="mobile-image-card flex min-h-[350px] flex-col justify-between rounded-2xl border border-zinc-200 bg-[#08221c] p-6 shadow-sm sm:min-h-[470px] sm:bg-white sm:p-4">
    <div>
      <IllustrationTile name={illustration} label={`${title} illustration`} className="mobile-image-card-media aspect-[16/10]" />
      <span className="mt-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#EAF6ED] text-[#12A33B]">{icon}</span>
      <p className="mobile-card-kicker mt-6 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Assessment quote</p>
      <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#08221c]">{title}</h2>
      <h3 className="mt-2 text-sm font-bold uppercase tracking-widest text-[#12A33B]">{subtitle}</h3>
      <p className="mt-5 text-sm leading-relaxed text-zinc-600">{copy}</p>
    </div>
    <button
      onClick={() => onOpenBooking(serviceId)}
      className="mobile-card-panel mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-[#08221c] transition hover:bg-zinc-100 active:translate-y-[1px] sm:bg-[#08221c] sm:text-white sm:hover:bg-[#12372f]"
    >
      <span>{action}</span>
      <ArrowRight className="h-4 w-4 text-[#D8C690]" />
    </button>
  </article>
);
