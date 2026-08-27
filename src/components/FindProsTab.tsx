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
import { IllustrationTile, type IllustrationKey } from './IllustrationTile';
import type { ServicePageSlug } from './ServiceDetailTab';

interface FindProsTabProps {
  onOpenBooking: (serviceId?: string, proId?: string) => void;
  setActiveTab: (tab: string) => void;
  onNavigateService: (slug: ServicePageSlug) => void;
}

const values = [
  { title: 'Care', copy: 'Support that respects your home and the people in it.', illustration: 'care' },
  { title: 'Integrity', copy: 'Clear scope, honest updates, and accountable service.', illustration: 'integrity' },
  { title: 'Professionalism', copy: 'Prepared people, thoughtful standards, respectful conduct.', illustration: 'professionalism' },
  { title: 'Reliability', copy: 'Dependable help when your household needs consistency.', illustration: 'reliability' },
];

const steps = [
  { title: 'Recruit', illustration: 'recruit' },
  { title: 'Train', illustration: 'train' },
  { title: 'Assess', illustration: 'assess' },
  { title: 'Deploy', illustration: 'deploy' },
];

export const FindProsTab: React.FC<FindProsTabProps> = ({ onOpenBooking, setActiveTab }) => {
  return (
    <div className="bg-[#F7F8F6] text-zinc-900 font-sans" id="homepage-scaffold">
      <section className="relative min-h-[640px] overflow-hidden bg-[#08221c] text-white sm:min-h-0" id="hero-section">
        <img
          src="/images/nigerian-home-support-team.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[48%_center] sm:hidden"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,18,15,0.78)_0%,rgba(5,18,15,0.46)_42%,rgba(5,18,15,0.92)_100%)] sm:hidden" />
        <div className="absolute inset-0 hidden bg-[radial-gradient(#1d3b32_1px,transparent_1px)] bg-[size:1.4rem_1.4rem] opacity-25 sm:block" />
        <div className="relative mx-auto grid min-h-[640px] max-w-7xl grid-cols-1 content-end gap-12 px-4 pb-12 pt-28 sm:min-h-0 sm:px-6 sm:py-16 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="min-w-0 max-w-[22rem] -translate-y-12 sm:max-w-none sm:translate-y-0 lg:col-span-7">
            <span className="inline-flex -translate-y-24 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#D8C690] backdrop-blur-sm sm:translate-y-0 sm:border-white/10 sm:bg-white/5 sm:font-bold">
              Home Support That Cares
            </span>
            <h1 className="mt-6 max-w-[11ch] text-[2.45rem] font-bold leading-[1.05] tracking-tight sm:max-w-3xl sm:text-5xl sm:font-extrabold lg:text-6xl">
              You do not have to carry it all.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] font-normal leading-7 text-zinc-100 sm:text-base sm:leading-relaxed sm:text-zinc-250">
              Professional home support that helps you reclaim your time, freedom, and peace of mind with genuine care.
            </p>
            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#12A33B] px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white shadow-lg shadow-emerald-950/20 transition hover:bg-[#0f8f34] active:translate-y-[1px] sm:w-auto sm:font-bold"
                id="hero-book-home-support-btn"
              >
                <span>Book Home Support</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition hover:bg-white/10 active:translate-y-[1px] sm:w-auto sm:border-white/15 sm:bg-white/5 sm:font-bold"
              >
                Explore Our Services
              </button>
            </div>
          </div>

          <div className="hidden sm:block lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl">
              <img
                src="/images/nigerian-home-support-team.jpg"
                alt="Nigerian Help On Hire home support professionals ready to serve a household"
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-[48%_center]"
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
              illustration="refresh"
              title="Essential Home Refresh"
              copy="A focused one-time clean for homes that need a reset."
              onClick={() => onOpenBooking('essential-home-refresh')}
              action="Request a Home Refresh"
            />
            <ServicePanel
              className="lg:col-span-3"
              icon={<Home className="h-5 w-5" />}
              illustration="signature"
              title="Signature Home Care"
              copy="Consistent household support shaped around agreed responsibilities."
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
              <div key={value.title} className="mobile-image-card min-h-[230px] rounded-2xl border border-zinc-200 bg-[#08221c] p-5 shadow-sm sm:min-h-0 sm:bg-white sm:p-4">
                <IllustrationTile name={value.illustration as IllustrationKey} label={`${value.title} illustration`} className="mobile-image-card-media aspect-[16/10]" />
                <div className="mt-5 flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#12A33B]" />
                  <div>
                    <h3 className="text-base font-bold text-[#08221c]">{value.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-500">{value.copy}</p>
                  </div>
                </div>
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
              <div key={step.title} className="mobile-image-card min-h-[164px] rounded-2xl border border-white/10 bg-[#08221c] p-4 text-center sm:min-h-0 sm:bg-white/5 sm:p-3">
                <IllustrationTile name={step.illustration as IllustrationKey} label={`${step.title} illustration`} className="mobile-image-card-media aspect-square border-white/10 opacity-95" />
                <span className="mt-4 block text-xs font-bold text-[#D8C690]">0{index + 1}</span>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white">{step.title}</p>
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
              { title: 'Tell us what you need', illustration: 'booking' },
              { title: 'Share your home context', illustration: 'care' },
              { title: 'We assess the scope', illustration: 'assess' },
              { title: 'Receive your quotation', illustration: 'integrity' },
              { title: 'Confirm your booking', illustration: 'booking' },
              { title: 'Get the agreed support', illustration: 'deploy' },
            ].map((step, index) => (
              <div key={step.title} className="mobile-image-card min-h-[210px] bg-[#08221c] p-6 sm:bg-white">
                <IllustrationTile name={step.illustration as IllustrationKey} label={`${step.title} illustration`} className="mobile-image-card-media mb-5 aspect-[16/10]" />
                <span className="font-mono text-xs font-bold text-[#12A33B]">{String(index + 1).padStart(2, '0')}</span>
                <p className="mt-3 text-sm font-bold text-[#08221c]">{step.title}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-zinc-600">
            From your first request to completion, we keep the experience clear, professional, and easy.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 text-zinc-900 sm:px-6 lg:px-8" id="founder-story-preview">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <img
              src="/images/director-oluchukwu.jpeg"
              alt="Help On Hire founder"
              className="aspect-[4/3] w-full rounded-2xl object-cover object-[50%_12%] shadow-xl sm:aspect-[4/5] sm:rounded-[2rem]"
            />
          </div>
          <div className="max-w-[23rem] lg:col-span-7 lg:max-w-none">
            <HeartHandshake className="h-8 w-8 text-[#12A33B]" />
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#08221c] sm:text-4xl sm:font-extrabold">Help On Hire was born from experience.</h2>
            <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-sm sm:leading-relaxed">
              There was a time when managing the home competed with education, personal growth, relationships, and the future our founder was trying to build. That experience led to a simple question: how many other people are living this way?
            </p>
            <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-sm sm:leading-relaxed">
              Help On Hire was born from the desire to provide the support she wished existed: reliable help that allows people to carry less and live more.
            </p>
            <button
              onClick={() => setActiveTab('about')}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-[#F7F8F6] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#08221c] transition hover:bg-white active:translate-y-[1px] sm:font-bold"
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
  illustration: IllustrationKey;
  title: string;
  copy: string;
  action: string;
  onClick: () => void;
}> = ({ className = '', icon, illustration, title, copy, action, onClick }) => (
  <div className={`mobile-image-card flex min-h-[320px] flex-col justify-between rounded-2xl border border-zinc-200 bg-[#08221c] p-6 text-left shadow-sm sm:min-h-[360px] sm:bg-[#F7F8F6] sm:p-4 ${className}`}>
    <div>
      <IllustrationTile name={illustration} label={`${title} illustration`} className="mobile-image-card-media aspect-[16/10]" />
      <span className="mt-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#12A33B] shadow-sm">{icon}</span>
      <h3 className="mt-5 text-xl font-extrabold tracking-tight text-[#08221c]">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600">{copy}</p>
    </div>
    <button
      onClick={onClick}
      className="mobile-card-panel mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold uppercase tracking-widest text-[#08221c] transition hover:bg-zinc-100 active:translate-y-[1px] sm:bg-[#08221c] sm:text-white sm:hover:bg-[#12372f]"
    >
      <span>{action}</span>
      <ArrowRight className="h-4 w-4 text-[#D8C690]" />
    </button>
  </div>
);
