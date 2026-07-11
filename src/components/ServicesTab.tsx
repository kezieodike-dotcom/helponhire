import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  ShoppingBag,
  Lock, 
  Package, 
  Briefcase, 
  ChevronRight, 
  Check, 
  HelpCircle,
  ThumbsUp,
  Award,
  HeartHandshake
} from 'lucide-react';
import { WHATSAPP_URL } from '../constants';
import type { ServicePageSlug } from './ServiceDetailTab';

interface ServicesTabProps {
  onOpenBooking: (serviceId?: string) => void;
  onNavigateService: (slug: ServicePageSlug) => void;
}

export const ServicesTab: React.FC<ServicesTabProps> = ({ onOpenBooking, onNavigateService }) => {
  return (
    <div className="bg-[#FAFBFB] text-zinc-900 min-h-screen font-sans" id="services-page-scaffold">
      
      {/* ========================================================= */}
      {/* SECTION 01 — HERO (Expert Help For Every Demand)          */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 mt-4" id="directory-hero">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column Text details */}
          <div className="space-y-6 text-left">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#0A201C]/60">
              OUR DIRECTORY
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Expert help in Port Harcourt for every<br />
              <span className="text-[#0A201C] border-b-4 border-[#C1E929]">demand.</span>
            </h1>
            <p className="text-sm text-zinc-500 max-w-lg leading-relaxed">
              From routine house cleaning to specialized event staffing, Help On Hire connects you with vetted professionals for personal and business needs.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="rounded-full bg-[#0A201C] hover:bg-emerald-950 text-[#C1E929] px-7 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-200"
                id="hero-explore-all-btn"
              >
                Explore All
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('category-home-services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-full bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200 px-7 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-200"
                id="hero-how-it-works-btn"
              >
                How It Works
              </button>
            </div>
          </div>

          {/* Right Column image block with overlay capsule check */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] w-full shadow-xl border border-zinc-150">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=700" 
                alt="Expert Professional Service Curation" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Absolute badge overlay matching the Cleano image layout */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-4 shadow-xl border border-zinc-100 flex items-center space-x-3 w-[280px]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              </span>
              <div>
                <h4 className="text-xs font-bold text-[#0A201C] leading-none">Vetted Professionals</h4>
                <p className="text-[10px] text-zinc-400 mt-1">Background checked &amp; certified</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 02 — CATEGORY 01: HOME SERVICES                    */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 mt-10" id="category-home-services">
        
        {/* Category Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-b border-zinc-150 pb-8 mb-10 gap-4">
          <div className="space-y-3 text-left">
            <span className="inline-block rounded-full bg-amber-500/10 text-amber-900 border border-amber-500/20 px-3.5 py-1 text-[9px] font-extrabold uppercase tracking-widest">
              CATEGORY 01
            </span>
            <h2 className="text-3xl font-extrabold text-[#0A201C] tracking-tight">Home Services</h2>
            <p className="text-xs sm:text-sm text-zinc-500 max-w-2xl leading-relaxed">
              Maintaining your sanctuary with precision and care. We offer reliable solutions for every corner of your living space.
            </p>
          </div>
          <button
            onClick={() => onNavigateService('cleaning')}
            className="text-xs font-bold text-[#0A201C] hover:text-emerald-700 transition flex items-center space-x-1 whitespace-nowrap"
          >
            <span>View cleaning details</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* 3 cards deck */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Residential Cleaning */}
          <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition">
            <div>
              {/* Image with overlay badge */}
              <div className="h-48 relative overflow-hidden bg-zinc-50">
                <img 
                  src="/images/eco-cleaning-specialist.jpg" 
                  alt="Help On Hire cleaning service agent ready for residential cleaning" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 right-4 bg-[#0A201C]/95 text-[#C1E929] text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
                  Quote on request
                </span>
              </div>

              {/* Card Contents */}
              <div className="p-6 text-left space-y-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Sparkles className="h-5 w-5" />
                </span>
                <h3 className="text-base font-bold text-[#0A201C] tracking-tight">Residential Cleaning</h3>
                <p className="text-xs text-zinc-550 leading-relaxed">
                  Regular maintenance or deep cleaning for houses, condos, and apartments. Managed with non-toxic certified materials.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 p-6 pt-0">
              <button
                onClick={() => onNavigateService('cleaning')}
                className="w-full rounded-full bg-[#EBF3F0] py-3.5 text-xs font-bold text-[#0A201C] transition hover:bg-zinc-200/60"
              >
                View Details
              </button>
              <button
                onClick={() => onOpenBooking('home-cleaning')}
                className="w-full rounded-full border border-zinc-200 hover:border-[#0A201C] hover:bg-[#0A201C] hover:text-white py-3.5 text-xs font-bold text-zinc-800 transition"
                id="book-cleaning-card-btn"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Card 2: Personal Errands */}
          <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="h-48 relative overflow-hidden bg-zinc-50">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400" 
                  alt="Personal errands run" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 right-4 bg-[#0A201C]/95 text-[#C1E929] text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
                  Quote on request
                </span>
              </div>

              <div className="p-6 text-left space-y-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <ShoppingBag className="h-5 w-5" />
                </span>
                <h3 className="text-base font-bold text-[#0A201C] tracking-tight">Personal Errands</h3>
                <p className="text-xs text-zinc-550 leading-relaxed">
                  Grocery shopping, dry cleaning pickup, and administrative tasks for your home or personal workspace routines.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 p-6 pt-0">
              <button
                onClick={() => onNavigateService('errands-deliveries')}
                className="w-full rounded-full bg-[#EBF3F0] py-3.5 text-xs font-bold text-[#0A201C] transition hover:bg-zinc-200/60"
              >
                View Details
              </button>
              <button
                onClick={() => onOpenBooking('errands-deliveries')}
                className="w-full rounded-full border border-zinc-200 hover:border-[#0A201C] hover:bg-[#0A201C] hover:text-white py-3.5 text-xs font-bold text-zinc-800 transition"
                id="book-errands-card-btn"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Card 3: Domestic Help */}
          <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="h-48 relative overflow-hidden bg-zinc-50">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=400"
                  alt="Domestic help assistant"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 right-4 bg-[#0A201C]/95 text-[#C1E929] text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
                  Quote on request
                </span>
              </div>

              <div className="p-6 text-left space-y-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <HeartHandshake className="h-5 w-5" />
                </span>
                <h3 className="text-base font-bold text-[#0A201C] tracking-tight">Domestic Help</h3>
                <p className="text-xs text-zinc-550 leading-relaxed">
                  Trusted household assistants for laundry, tidying, meal prep support, home organization, and everyday domestic routines.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 p-6 pt-0">
              <button
                onClick={() => onNavigateService('domestic-help')}
                className="w-full rounded-full bg-[#EBF3F0] py-3.5 text-xs font-bold text-[#0A201C] transition hover:bg-zinc-200/60"
              >
                View Details
              </button>
              <button
                onClick={() => onOpenBooking('domestic-help')}
                className="w-full rounded-full border border-zinc-200 hover:border-[#0A201C] hover:bg-[#0A201C] hover:text-white py-3.5 text-xs font-bold text-zinc-800 transition"
                id="book-domestic-help-card-btn"
              >
                Book Now
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 03 — CATEGORY 02: BUSINESS SUPPORT                 */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 mt-10 bg-zinc-50 rounded-[40px]" id="category-business-support">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block rounded-full bg-zinc-900 text-white px-3.5 py-1 text-[9px] font-extrabold uppercase tracking-widest">
            CATEGORY 02
          </span>
            <h2 className="text-3xl font-extrabold text-[#0A201C] tracking-tight">Business Support</h2>
          <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
            Scale your operations with professional support that integrates seamlessly into your corporate culture.
          </p>
        </div>

        {/* Dual structure layout: Left large card, Right stacked cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Office Facilities Management (2/3 width) */}
          <div className="lg:col-span-7 bg-[#0A201C] rounded-[32px] overflow-hidden text-white relative shadow-lg min-h-[460px] flex flex-col justify-between group">
            {/* Background image cover with strong overlay filter */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=700" 
                alt="Corporate Office Building Interior" 
                className="w-full h-full object-cover opacity-25 filter grayscale group-hover:scale-105 transition duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            </div>

            {/* Overlaid upper badge */}
            <div className="relative z-10 p-8 flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C1E929] bg-emerald-900/30 px-3 py-1 rounded-full border border-emerald-500/10">
                PRO FACILITY SETUP
              </span>
              <span className="text-[9px] uppercase font-extrabold text-zinc-400">GRA DESK</span>
            </div>

            {/* Overlaid lower details */}
            <div className="relative z-10 p-8 pt-20 space-y-6 text-left">
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Office Facilities<br />Management
                </h3>
                <p className="text-xs text-zinc-300 max-w-md leading-relaxed">
                  Comprehensive office cleaning, supplies management, IT diagnostic linking, hospitality setup, and daily upkeep for corporate headquarters.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenBooking('office-assistant')}
                  className="rounded-full bg-[#C1E929] hover:bg-white text-[#0A201C] px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200"
                  id="b2b-inquiry-btn"
                >
                  Inquire For Business
                </button>
                <div className="hidden sm:flex items-center space-x-1.5 text-[10px] text-[#C1E929] font-bold uppercase border-l border-white/20 pl-4">
                  <ShieldCheck className="h-4 w-4" />
                  <span>MULTIPRO VETTED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked mini-cards (1/3 width) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 h-full">
            
            {/* Top Stack: Reception & Admin (Light background) */}
            <div className="bg-white border border-zinc-200 rounded-[28px] p-8 text-left space-y-4 shadow-sm flex-1 flex flex-col justify-between group hover:border-[#0A201C]/30 transition duration-200">
              <div className="space-y-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-800">
                  <Lock className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="text-base font-bold text-[#0A201C] tracking-tight">Reception &amp; Admin</h4>
                  <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                    Qualified temporary staff for front-desk coverage, customer triage, catalog coordination files, and administrative bottlenecks.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] font-bold text-zinc-400 group-hover:text-zinc-800 transition-colors">
                <span>On-demand availability</span>
                <span>→</span>
              </div>
            </div>

            {/* Bottom Stack: Logistics & Courier (Dark Green card) */}
            <div className="bg-[#041513] rounded-[28px] p-8 text-left text-white space-y-4 shadow-lg flex-1 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(#11322d_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-35" />
              <div className="relative z-10 space-y-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-950 text-[#C1E929] border border-emerald-900">
                  <Package className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="text-base font-bold text-white tracking-tight">Logistics &amp; Courier</h4>
                  <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                    Secure, professional document handling, critical parcels dispatch, and internal logistics support for busy corporate teams.
                  </p>
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-emerald-900/40 flex items-center justify-between mt-4">
                <span className="inline-flex items-center space-x-1 text-[9px] uppercase font-extrabold tracking-wider text-[#C1E929] bg-emerald-900/30 px-2 py-1 rounded border border-emerald-500/10">
                  ✔ Vetted &amp; Insured
                </span>
                <button
                  onClick={() => onOpenBooking('office-assistant')}
                  className="rounded-full bg-[#C1E929] hover:bg-white text-[#0A201C] px-5 py-2.5 text-[10px] font-extrabold uppercase tracking-widest transition"
                  id="book-logistics-stack-btn"
                >
                  Book Now
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 04 — CATEGORY 03: ELITE EVENT STAFFING            */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 mt-16 bg-[#031513] text-white rounded-[40px] relative overflow-hidden shadow-xl" id="category-event-staffing">
        {/* Subtle decorative grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#11322d_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-30" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-950/10 rounded-full blur-3xl filter translate-y-12" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Two overlapping offset image blocks */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden h-72 border border-white/5 shadow-lg">
              <img
                src="/images/event-staffing-team.jpg"
                alt="Help On Hire branded event staffing team welcoming guests"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden h-72 border border-white/5 shadow-lg mt-8">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=350" 
                alt="Luxurious dining experience layout" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right: Rich content panel details */}
          <div className="lg:col-span-7 text-left space-y-6 lg:pl-6">
            <span className="inline-block rounded-full bg-[#C1E929]/10 text-[#C1E929] border border-[#C1E929]/20 px-4 py-1.5 text-[9px] font-extrabold uppercase tracking-widest">
              CATEGORY 03
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Elite Event Staffing</h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Transforming events into experiences with specialized hospitality professionals. From private gala dinners to large-scale corporate summits.
            </p>

            <ul className="space-y-3.5 pt-4 text-xs">
              <li className="flex items-center space-x-3 text-zinc-200">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-900/40 text-[#C1E929] font-bold text-[10px]">
                  ✓
                </span>
                <span className="font-semibold">Ushers and greeters</span>
              </li>
              <li className="flex items-center space-x-3 text-zinc-200">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-900/40 text-[#C1E929] font-bold text-[10px]">
                  ✓
                </span>
                <span className="font-semibold">Hospitality and waitstaff</span>
              </li>
              <li className="flex items-center space-x-3 text-zinc-200">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-900/40 text-[#C1E929] font-bold text-[10px]">
                  ✓
                </span>
                <span className="font-semibold">Registration and guest coordination</span>
              </li>
              <li className="flex items-center space-x-3 text-zinc-200">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-900/40 text-[#C1E929] font-bold text-[10px]">
                  ✓
                </span>
                <span className="font-semibold">Business outreach support</span>
              </li>
            </ul>

            <div className="pt-6">
              <button
                onClick={() => onNavigateService('event-staffing')}
                className="mr-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-250 hover:bg-white/10"
              >
                View Event Details
              </button>
              <button
                onClick={() => onOpenBooking('event-server')}
                className="rounded-full bg-white hover:bg-[#C1E929] hover:text-[#0A201C] text-zinc-950 px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors duration-250 shadow-lg"
                id="event-proposal-btn"
              >
                Get a Custom Proposal
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 05 — TRUST STATS PANEL                            */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 mt-12 border-b border-zinc-200 bg-white rounded-3xl" id="statistics-panel">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-200/60">
          <div className="p-4">
            <span className="block text-3xl font-extrabold text-[#0A201C]">12k+</span>
            <span className="block text-[10px] uppercase font-extrabold tracking-widest text-[#0A201C]/60 mt-1">
              SERVICES COMPLETED
            </span>
          </div>
          <div className="p-4 pt-8 md:pt-4">
            <span className="block text-3xl font-extrabold text-[#0A201C]">4.9/5</span>
            <span className="block text-[10px] uppercase font-extrabold tracking-widest text-[#0A201C]/60 mt-1">
              CUSTOMER RATING
            </span>
          </div>
          <div className="p-4 pt-8 md:pt-4">
            <span className="block text-3xl font-extrabold text-[#0A201C]">850+</span>
            <span className="block text-[10px] uppercase font-extrabold tracking-widest text-[#0A201C]/60 mt-1">
              VETTED PROS
            </span>
          </div>
          <div className="p-4 pt-8 md:pt-4">
            <span className="block text-3xl font-extrabold text-[#0A201C]">24/7</span>
            <span className="block text-[10px] uppercase font-extrabold tracking-widest text-[#0A201C]/60 mt-1">
              SUPPORT COVERAGE
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 06 — PRE-FOOTER CONVERSION LANDER                 */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 my-16" id="conversion-tab-banner">
        <div className="rounded-[40px] bg-gradient-to-r from-zinc-100 to-zinc-250 border border-zinc-200/85 p-12 sm:p-16 text-center space-y-6 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-zinc-400/5 rounded-full blur-3xl filter" />
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A201C] max-w-2xl mx-auto leading-tight">
            Ready to experience the Help On Hire standard?
          </h2>
          <p className="max-w-xl text-xs sm:text-sm text-zinc-550 mx-auto leading-relaxed">
            Book your first service today and join satisfied homes and businesses. Our regional dispatcher coordinates screened matches quickly.
          </p>

          <div className="pt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="rounded-full bg-[#0A201C] hover:bg-[#15342F] text-[#C1E929] px-8 py-4 text-xs font-bold uppercase tracking-widest transition duration-300 shadow-md shadow-zinc-900/10"
              id="cta-get-started-btn"
            >
              Get Started Now
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200 px-8 py-4 text-xs font-bold uppercase tracking-widest transition"
              id="cta-contact-sales-btn"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
