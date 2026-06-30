import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Check,
  Clock,
  HeartHandshake,
  MapPin,
  Package,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

type ServicePageSlug = 'cleaning' | 'errands-deliveries' | 'domestic-help' | 'event-staffing';

interface ServiceDetailTabProps {
  slug: ServicePageSlug;
  onBack: () => void;
  onNavigateService: (slug: ServicePageSlug) => void;
  onOpenBooking: (serviceId?: string) => void;
}

const servicePages = {
  cleaning: {
    eyebrow: 'Cleaning',
    title: 'Cleaning services for Port Harcourt homes, offices, and short-let spaces',
    summary:
      'Book vetted cleaners for routine upkeep, deep cleaning, post-event resets, and move-in preparation across Port Harcourt.',
    image: '/images/eco-cleaning-specialist.jpg',
    bookingServiceId: 'home-cleaning',
    icon: Sparkles,
    metrics: ['Same-day slots', 'Deep clean ready', 'Vetted cleaners'],
    includes: [
      'Room-by-room sweeping, mopping, dusting, and surface wipe-down',
      'Kitchen, restroom, appliance, and high-touch surface sanitizing',
      'Post-party cleanup, move-in resets, and scheduled recurring cleaning',
      'Cleaning plan adjusted to your home, office, shop, or apartment size',
    ],
    process: [
      'Share the location, space size, preferred date, and priority areas.',
      'We match the right cleaner or team based on availability and scope.',
      'Your coordinator confirms arrival, materials, and completion notes.',
    ],
    idealFor: ['Busy households', 'Offices and shops', 'Airbnb and short-let hosts', 'Post-event cleanup'],
  },
  'errands-deliveries': {
    eyebrow: 'Errands / Deliveries',
    title: 'Errands and delivery support when your schedule is full',
    summary:
      'Delegate Port Harcourt market runs, document movement, parcel pickup, purchases, and local delivery tasks to reliable support staff.',
    image: '/images/errands-delivery-coordinator.jpg',
    bookingServiceId: 'errands-deliveries',
    icon: Package,
    metrics: ['Local dispatch', 'Proof of delivery', 'Clear updates'],
    includes: [
      'Market runs, grocery pickup, pharmacy runs, and item sourcing',
      'Document delivery, parcel drop-off, and office-to-office movement',
      'Queue support, appointment errands, and routine household purchases',
      'Live coordination so you know when the task starts and ends',
    ],
    process: [
      'Tell us what should be picked up, bought, submitted, or delivered.',
      'We confirm route, timing, contact details, and handling requirements.',
      'You receive completion feedback, photos, or delivery confirmation where needed.',
    ],
    idealFor: ['Professionals at work', 'Families', 'Small businesses', 'People managing tight schedules'],
  },
  'domestic-help': {
    eyebrow: 'Domestic Help',
    title: 'Dependable domestic help for everyday Port Harcourt home support',
    summary:
      'Get trusted Port Harcourt household assistants for cleaning support, meal prep assistance, laundry help, home organization, and routine domestic tasks.',
    image: '/images/admin-executive.jpg',
    bookingServiceId: 'domestic-help',
    icon: HeartHandshake,
    metrics: ['Household support', 'Flexible duration', 'Screened workers'],
    includes: [
      'Laundry assistance, folding, room tidying, and home organization',
      'Kitchen support, basic meal preparation assistance, and cleanup',
      'Daily or weekly household support for families and busy professionals',
      'Careful matching based on task type, schedule, and home expectations',
    ],
    process: [
      'Describe your home routine and the exact domestic tasks required.',
      'We match a suitable helper and confirm hours, expectations, and access.',
      'Your coordinator follows up to make sure the work meets your standard.',
    ],
    idealFor: ['Families', 'New parents', 'Working professionals', 'Elderly household support'],
  },
  'event-staffing': {
    eyebrow: 'Event Staffing',
    title: 'Port Harcourt event staffing teams for smooth guest experiences',
    summary:
      'Hire Port Harcourt ushers, hospitality attendants, registration assistants, service crew, and support staff for private and corporate events.',
    image: '/images/hospitality-usher.jpg',
    bookingServiceId: 'event-server',
    icon: Users,
    metrics: ['Usher teams', 'Guest support', 'Crew coordination'],
    includes: [
      'Ushers, greeters, registration desk assistants, and guest flow support',
      'Hospitality attendants, serving crew, and backstage support staff',
      'Setup assistance, crowd guidance, and post-event support where needed',
      'Staff briefing aligned with dress code, call time, and event plan',
    ],
    process: [
      'Share your event date, venue, guest count, roles, and reporting time.',
      'We recommend headcount and confirm staff brief, attire, and supervisor flow.',
      'The team arrives briefed, checked in, and ready to support your event.',
    ],
    idealFor: ['Weddings', 'Corporate events', 'Church programs', 'Launches and private parties'],
  },
} satisfies Record<ServicePageSlug, {
  eyebrow: string;
  title: string;
  summary: string;
  image: string;
  bookingServiceId: string;
  icon: React.ElementType;
  metrics: string[];
  includes: string[];
  process: string[];
  idealFor: string[];
}>;

export const servicePageSlugs = Object.keys(servicePages) as ServicePageSlug[];
export type { ServicePageSlug };

export const ServiceDetailTab: React.FC<ServiceDetailTabProps> = ({
  slug,
  onBack,
  onNavigateService,
  onOpenBooking,
}) => {
  const page = servicePages[slug] ?? servicePages.cleaning;
  const Icon = page.icon;
  const relatedPages = servicePageSlugs.filter((item) => item !== slug);

  return (
    <div className="min-h-screen bg-[#F9FBFB] text-zinc-900 font-sans" id={`service-detail-${slug}`}>
      <section className="relative overflow-hidden bg-[#0A201C] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(#11322d_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-35" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center text-left">
            <button
              onClick={onBack}
              className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-zinc-200 transition hover:bg-white/10"
              id="service-detail-back-btn"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Home</span>
            </button>

            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-900/30 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#C1E929]">
              <Icon className="h-3.5 w-3.5" />
              <span>{page.eyebrow}</span>
            </span>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              {page.title}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
              {page.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {page.metrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white"
                >
                  {metric}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenBooking(page.bookingServiceId)}
                className="inline-flex items-center gap-2 rounded-full bg-[#C1E929] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-[#0A201C] transition hover:bg-white"
                id="service-detail-book-btn"
              >
                <span>Request This Service</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-white/10"
                id="service-detail-whatsapp-btn"
              >
                <span>Chat First</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-zinc-950/30">
              <img
                src={page.image}
                alt={`${page.eyebrow} service`}
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EBF3F0] text-[#0A201C]">
                <Check className="h-5 w-5" />
              </span>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">What is included</span>
                <h2 className="text-xl font-extrabold tracking-tight text-[#0A201C]">Service Scope</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {page.includes.map((item) => (
                <div key={item} className="rounded-2xl border border-zinc-100 bg-zinc-50 p-4 text-sm leading-relaxed text-zinc-600">
                  <Check className="mb-3 h-4 w-4 text-emerald-700" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EBF3F0] text-[#0A201C]">
                <CalendarCheck className="h-5 w-5" />
              </span>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">How booking works</span>
                <h2 className="text-xl font-extrabold tracking-tight text-[#0A201C]">Simple Process</h2>
              </div>
            </div>
            <div className="space-y-4">
              {page.process.map((step, index) => (
                <div key={step} className="flex gap-4 border-b border-zinc-100 pb-4 last:border-b-0 last:pb-0">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0A201C] text-xs font-extrabold text-[#C1E929]">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-zinc-600">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm lg:col-span-2 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EBF3F0] text-[#0A201C]">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Best fit</span>
                <h2 className="text-xl font-extrabold tracking-tight text-[#0A201C]">Who Uses This Service</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {page.idealFor.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-[#EBF3F0]/70 px-4 py-3 text-xs font-bold text-[#0A201C]">
                  <ShieldCheck className="h-4 w-4 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-[#0A201C] p-6 text-white shadow-sm sm:p-8">
            <Clock className="h-8 w-8 text-[#C1E929]" />
            <h2 className="mt-5 text-xl font-extrabold tracking-tight">Need help deciding?</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              Send us the task details and we will recommend the right staff count, timing, and service plan.
            </p>
            <button
              onClick={() => onOpenBooking(page.bookingServiceId)}
              className="mt-6 w-full rounded-full bg-[#C1E929] px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#0A201C] transition hover:bg-white"
            >
              Start Request
            </button>
          </div>
        </div>

        <div className="mt-16 border-t border-zinc-200 pt-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Explore more</span>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0A201C]">Other Services</h2>
            </div>
            <button
              onClick={onBack}
              className="hidden rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-zinc-700 transition hover:bg-zinc-50 sm:inline-flex"
            >
              Home
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {relatedPages.map((item) => {
              const related = servicePages[item];
              const RelatedIcon = related.icon;
              return (
                <button
                  key={item}
                  onClick={() => onNavigateService(item)}
                  className="group rounded-3xl border border-zinc-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#0A201C]/30 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EBF3F0] text-[#0A201C]">
                    <RelatedIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-extrabold text-[#0A201C]">{related.eyebrow}</h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-zinc-500">{related.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#0A201C]">
                    View page
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
