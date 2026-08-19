import React from 'react';
import { ArrowRight, ClipboardCheck, Home, Sparkles } from 'lucide-react';
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
            Home support that fits your needs.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-600">
            Every home is different. Our services are designed around the kind of support your household needs, with the final scope and quotation determined after assessment.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <ClipboardCheck className="h-7 w-7 text-[#12A33B]" />
            <h2 className="mt-5 text-xl font-extrabold tracking-tight text-[#08221c]">Pricing by assessment</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Public pricing remains intentionally blank until the approved pricing structure is completed. Final quotations are based on assessment, scope, home size, frequency, and other relevant requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" id="service-offers">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Offer
            icon={<Sparkles className="h-6 w-6" />}
            title="Essential Home Refresh"
            subtitle="One-time professional home cleaning."
            copy="For those moments when your home needs a proper refresh. Our Home Support Professionals take care of the agreed cleaning requirements so you can return to a clean, comfortable space without carrying the workload yourself."
            action="Request a Home Refresh"
            serviceId="essential-home-refresh"
            onOpenBooking={onOpenBooking}
          />
          <Offer
            icon={<Home className="h-6 w-6" />}
            title="Signature Home Care"
            subtitle="Ongoing home support, built around your household."
            copy="For households that need consistent support on a contract basis. Depending on the agreed scope, support may include cleaning, household upkeep, errands, meal preparation, and other approved home responsibilities."
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
  title: string;
  subtitle: string;
  copy: string;
  action: string;
  serviceId: string;
  onOpenBooking: (serviceId?: string) => void;
}> = ({ icon, title, subtitle, copy, action, serviceId, onOpenBooking }) => (
  <article className="flex min-h-[430px] flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
    <div>
      <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EAF6ED] text-[#12A33B]">{icon}</span>
      <p className="mt-8 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Price: To be inserted</p>
      <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#08221c]">{title}</h2>
      <h3 className="mt-2 text-sm font-bold uppercase tracking-widest text-[#12A33B]">{subtitle}</h3>
      <p className="mt-5 text-sm leading-relaxed text-zinc-600">{copy}</p>
    </div>
    <button
      onClick={() => onOpenBooking(serviceId)}
      className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-[#08221c] px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#12372f] active:translate-y-[1px]"
    >
      <span>{action}</span>
      <ArrowRight className="h-4 w-4 text-[#D8C690]" />
    </button>
  </article>
);
