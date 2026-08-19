import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Home,
  Leaf,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from 'lucide-react';
import type { ServicePageSlug } from './ServiceDetailTab';

interface FindProsTabProps {
  onOpenBooking: (serviceId?: string, proId?: string) => void;
  setActiveTab: (tab: string) => void;
  onNavigateService: (slug: ServicePageSlug) => void;
}

const values = [
  { title: 'Care', copy: 'We care about the people we serve and the experience we create.' },
  { title: 'Integrity', copy: 'We are transparent, honest, and accountable from request to completion.' },
  { title: 'Professionalism', copy: 'We uphold high standards in how we work, speak, and serve.' },
  { title: 'Reliability', copy: 'We aim to be dependable when your home needs support.' },
];

const steps = ['Recruit', 'Train', 'Assess', 'Deploy'];

export const FindProsTab: React.FC<FindProsTabProps> = ({ onOpenBooking, setActiveTab }) => {
  return (
    <div className="bg-[#F7F8F6] text-zinc-900 font-sans" id="homepage-scaffold">
      <section className="relative overflow-hidden bg-[#08221c] text-white" id="hero-section">
        <div className="absolute inset-0 bg-[radial-gradient(#1d3b32_1px,transparent_1px)] bg-[size:1.4rem_1.4rem] opacity-25" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="lg:col-span-7">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#D8C690]">
              Home Support That Cares
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              You do not have to carry it all.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-250">
              Professional home support that helps you reclaim your time, freedom, and peace of mind with genuine care.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#12A33B] px-7 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-emerald-950/20 transition hover:bg-[#0f8f34] active:translate-y-[1px]"
                id="hero-book-home-support-btn"
              >
                <span>Book Home Support</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-white/10 active:translate-y-[1px]"
              >
                Explore Our Services
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl">
              <img
                src="/images/domestic-help.jpg"
                alt="Help On Hire home support professional caring for a household"
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#08221c]/85 p-5 text-left backdrop-blur-md">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#D8C690]">Easing Your Burden</p>
                <p className="mt-2 text-sm font-semibold text-white">A clean, supported home can create room for the life you want to live.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8" id="home-problem-solution">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="border-t border-zinc-300 pt-8">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#12A33B]">The Problem</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#08221c] sm:text-4xl">Home management is a lot to carry.</h2>
            <p className="mt-5 text-sm leading-relaxed text-zinc-600">
              Work. Business. Children. Cooking. Cleaning. Errands. Family. Life already asks a lot of us. Sometimes, the home needs more support than one person can comfortably give.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              You should not have to put the things that matter to you on hold simply because there is too much to manage at home.
            </p>
          </div>
          <div className="border-t border-zinc-300 pt-8">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#12A33B]">The Solution</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#08221c] sm:text-4xl">A little support can give you a lot of life back.</h2>
            <p className="mt-5 text-sm leading-relaxed text-zinc-600">
              Help On Hire provides reliable Home Support Professionals to help take care of essential household responsibilities, so you have more time and capacity for the things that matter to you.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              Reclaiming your life looks different for everyone: more family time, career or business focus, rest, personal development, leisure, or simply room to breathe.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8" id="core-services-section">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#12A33B]">Our Services</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#08221c] sm:text-4xl">Home support, made simple.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-5">
            <ServicePanel
              className="lg:col-span-2"
              icon={<Sparkles className="h-5 w-5" />}
              title="Essential Home Refresh"
              copy="A one-time professional home cleaning service for when your home needs a thorough refresh."
              onClick={() => onOpenBooking('essential-home-refresh')}
              action="Request a Home Refresh"
            />
            <ServicePanel
              className="lg:col-span-3"
              icon={<Home className="h-5 w-5" />}
              title="Signature Home Care"
              copy="Ongoing, contract-based home support for households that need consistent help managing agreed home responsibilities."
              onClick={() => onOpenBooking('signature-home-care')}
              action="Request Home Support"
            />
          </div>
          <p className="mt-5 max-w-3xl text-xs leading-relaxed text-zinc-500">
            Errands and meal preparation are not separate public services; they may form part of an agreed Signature Home Care arrangement.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8" id="why-help-on-hire">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#12A33B]">Why Help On Hire</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#08221c] sm:text-4xl">More than a clean home.</h2>
            <p className="mt-5 text-sm leading-relaxed text-zinc-600">
              We believe home support should come with genuine care for your home, your life, and you as a person.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
            {values.map((value) => (
              <div key={value.title} className="border-t border-zinc-250 bg-white px-5 py-6">
                <CheckCircle2 className="h-5 w-5 text-[#12A33B]" />
                <h3 className="mt-4 text-base font-bold text-[#08221c]">{value.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-500">{value.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#08221c] px-4 py-20 text-white sm:px-6 lg:px-8" id="trust-section">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <ShieldCheck className="h-8 w-8 text-[#D8C690]" />
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">People you can trust in your home.</h2>
            <p className="mt-5 text-sm leading-relaxed text-zinc-300">
              Our Home Support Professionals are recruited, oriented, trained, and assessed before deployment. Entering someone&apos;s home is a responsibility that requires respect, discretion, and professionalism.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <span className="text-xs font-bold text-[#D8C690]">0{index + 1}</span>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8" id="how-it-works-section">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#12A33B]">How It Works</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#08221c] sm:text-4xl">Get support in six simple steps.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Tell us what you need',
              'We understand your home and requirements',
              'We assess the scope',
              'You receive your quotation',
              'You confirm your booking',
              'We provide the agreed support',
            ].map((step, index) => (
              <div key={step} className="bg-white p-6">
                <span className="font-mono text-xs font-bold text-[#12A33B]">{String(index + 1).padStart(2, '0')}</span>
                <p className="mt-3 text-sm font-bold text-[#08221c]">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-zinc-600">
            From your first request to completion, we keep the experience clear, professional, and easy.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8" id="founder-story-preview">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <img
              src="/images/director-oluchukwu.jpeg"
              alt="Help On Hire founder"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
            />
          </div>
          <div className="lg:col-span-7">
            <HeartHandshake className="h-8 w-8 text-[#12A33B]" />
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#08221c] sm:text-4xl">Help On Hire was born from experience.</h2>
            <p className="mt-5 text-sm leading-relaxed text-zinc-600">
              There was a time when managing the home competed with education, personal growth, relationships, and the future our founder was trying to build. That experience led to a simple question: how many other people are living this way?
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              Help On Hire was born from the desire to provide the support she wished existed: reliable help that allows people to carry less and live more.
            </p>
            <button
              onClick={() => setActiveTab('about')}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-zinc-250 bg-[#F7F8F6] px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#08221c] transition hover:bg-white active:translate-y-[1px]"
            >
              <span>Read Our Story</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8" id="final-cta-section">
        <div className="mx-auto max-w-4xl text-center">
          <Leaf className="mx-auto h-8 w-8 text-[#12A33B]" />
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#08221c] sm:text-4xl">Your home matters. So does your life outside it.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-600">Let us help carry some of the load.</p>
          <button
            onClick={() => onOpenBooking()}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#12A33B] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#0f8f34] active:translate-y-[1px]"
          >
            <span>Book Home Support</span>
            <UserCheck className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

const ServicePanel: React.FC<{
  className?: string;
  icon: React.ReactNode;
  title: string;
  copy: string;
  action: string;
  onClick: () => void;
}> = ({ className = '', icon, title, copy, action, onClick }) => (
  <div className={`flex min-h-[260px] flex-col justify-between rounded-2xl border border-zinc-200 bg-[#F7F8F6] p-7 text-left ${className}`}>
    <div>
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#12A33B] shadow-sm">{icon}</span>
      <h3 className="mt-6 text-xl font-extrabold tracking-tight text-[#08221c]">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600">{copy}</p>
    </div>
    <button
      onClick={onClick}
      className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#08221c] px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#12372f] active:translate-y-[1px]"
    >
      <span>{action}</span>
      <ArrowRight className="h-4 w-4 text-[#D8C690]" />
    </button>
  </div>
);
