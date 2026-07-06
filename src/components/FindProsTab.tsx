import React, { useState } from 'react';
import { 
  Sparkles, 
  Star, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Quote, 
  ChevronDown, 
  ChevronUp,
  MapPin,
  Calendar,
  Clock,
  User,
  HeartHandshake,
  CheckCircle2,
  Phone,
  Mail,
  Zap,
  Package,
  ThumbsUp,
  Award
} from 'lucide-react';
import { TestimonialsColumn } from '../../components/ui/testimonials-columns-1';
import { motion } from 'motion/react';
import { WHATSAPP_URL } from '../constants';
import type { ServicePageSlug } from './ServiceDetailTab';

interface FindProsTabProps {
  onOpenBooking: (serviceId?: string, proId?: string) => void;
  setActiveTab: (tab: string) => void;
  onNavigateService: (slug: ServicePageSlug) => void;
}

export const FindProsTab: React.FC<FindProsTabProps> = ({ onOpenBooking, setActiveTab, onNavigateService }) => {
  // Local active states for interactive sections
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // FAQS as per PRD specifications
  const faqData = [
    {
      q: "How do I request a service?",
      a: "Click on the 'Request a Service' button on our menu or hero block. Fill out our simple, multi-step booking form outlining your service category, calendar dates, location coordinates, and operational descriptions, and our Port Harcourt coordinator system immediately matching a verified professional."
    },
    {
      q: "Are professionals vetted?",
      a: "Yes, 100%. Every professional undergoes a rigorous 5-step screening. This comprises comprehensive criminal background inspections, municipal checks, reference validation, certification reviews, and a 1-on-1 interview process conducted by our compliance officers."
    },
    {
      q: "How quickly can I get assistance?",
      a: "Help On Hire can dispatch professionals for same-day requests! Depending on location and category volume, a pre-screened pro can be routed to your home or corporate site in under 2 to 3 hours."
    },
    {
      q: "Can businesses request multiple staff?",
      a: "Absolutely. B2B clients can scale up their operations by requesting bulk or temporary contract workers for multiple dates, shift setups, event hospitality operations, or clerical projects."
    },
    {
      q: "What locations do you serve?",
      a: "We are currently dispatching trusted, certified professionals across Port Harcourt, Nigeria, serving areas such as Phase II, GRA, and key municipal neighborhoods."
    }
  ];

  // Blog posts as per PRD SECTION 12
  const blogPosts = [
    {
      category: "Home & Productivity",
      title: "5 Simple Ways to Optimize Your Weekly Home Space Curation",
      excerpt: "Expert cleaning, decluttering, and natural ventilation tips from our Lead Eco-Cleaning Specialist Amaka Okafor.",
      date: "May 28, 2026",
      readTime: "4 Min Read",
      url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=400"
    },
    {
      category: "Events & Hosting",
      title: "How Premium Event Ushers Can Drastically Scale Your Wedding Flow",
      excerpt: "Why structured guest registration, prompt seat triage, and welcoming coordinate teams are critical to luxury corporate events.",
      date: "May 25, 2026",
      readTime: "5 Min Read",
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400"
    },
    {
      category: "Corporate Operations",
      title: "Scaling Temporary Workforce: A Guide For Busy B2B Project Directors",
      excerpt: "An insider look at saving up to 40% on recruitment administrative overhead using vetted on-demand staffing agencies.",
      date: "May 19, 2026",
      readTime: "6 Min Read",
      url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col bg-[#F9FBFB] text-zinc-900 font-sans" id="homepage-scaffold">
      
      {/* ========================================================= */}
      {/* SECTION 01 — HERO (Dark Green Theme, 3-Col Sliding Layout) */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-[#0A201C] text-white min-h-[620px]" id="hero-section">
        {/* Subtle decorative background grids */}
        <div className="absolute inset-0 bg-[radial-gradient(#11322d_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-35" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-900/20 rounded-full blur-3xl filter" />

        {/* 3-column layout: images | text | images */}
        <div className="relative flex items-center min-h-[620px]">

          {/* === LEFT SLIDING COLUMN === */}
          <div className="hidden lg:block w-[220px] xl:w-[260px] shrink-0 h-[620px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
            <motion.div
              animate={{ translateY: "-50%" }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear", repeatType: "loop" }}
              className="flex flex-col gap-4 pb-4"
            >
              {[
                { src: "/images/eco-cleaning-specialist.jpg", role: "Cleaner", title: "ECO-CLEANING SPECIALIST" },
                { src: "/images/errands-delivery-coordinator.jpg", role: "Errands", title: "DELIVERY COORDINATOR" },
                { src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400", role: "Repairs", title: "SMART HANDYMAN" },
                { src: "/images/eco-cleaning-specialist.jpg", role: "Cleaner", title: "ECO-CLEANING SPECIALIST" },
                { src: "/images/errands-delivery-coordinator.jpg", role: "Errands", title: "DELIVERY COORDINATOR" },
                { src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400", role: "Repairs", title: "SMART HANDYMAN" },
              ].map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 aspect-[3/4] relative shadow-lg shrink-0">
                  <img src={img.src} alt={img.role} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-3 flex flex-col justify-end text-white">
                    <span className="text-[8px] uppercase tracking-wider text-[#C1E929] font-bold">{img.role}</span>
                    <p className="text-[10px] font-bold">{img.title}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* === CENTER TEXT CONTENT === */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-10 py-20 z-10">
            <span className="inline-flex items-center space-x-2 text-[#C1E929] font-extrabold uppercase tracking-widest text-[10px] mb-5 bg-emerald-900/30 px-3 py-1 rounded-full border border-emerald-500/20 leading-none">
              <Sparkles className="h-3 w-3 animate-pulse" />
              <span>TRUSTED PROFESSIONAL SERVICES</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-2xl">
              Reliable Help,<br />
              <span className="text-[#C1E929] italic font-serif">Exactly</span> When You Need It<br />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-[#C1E929] italic font-serif">In Port Harcourt.</span>
            </h1>

            <p className="max-w-lg text-sm sm:text-base text-zinc-400 leading-relaxed mb-10">
              Access trusted professionals in Port Harcourt for errands, home services, event staffing, and business support — seamlessly and on your terms.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="rounded-full bg-[#C1E929] hover:bg-white text-[#0A201C] px-8 py-4 text-xs font-bold uppercase tracking-widest transition duration-300 shadow-lg shadow-[#C1E929]/15 flex items-center space-x-2 border-2 border-transparent hover:border-[#0A201C]"
                id="hero-request-btn"
              >
                <span>Request a Service</span>
                <ArrowRight className="h-4 w-4 text-[#0A201C]" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center gap-6 border-t border-white/15 pt-8 text-xs text-zinc-400">
              <div className="flex items-center space-x-2 font-bold uppercase tracking-wider text-white">
                <Star className="h-4 w-4 text-[#C1E929] fill-current" />
                <span>4.9/5 Service Rating</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <div className="flex items-center space-x-2 font-bold uppercase tracking-wider text-white">
                <ShieldCheck className="h-4 w-4 text-[#C1E929]" />
                <span>100% Vetted Pros</span>
              </div>
            </div>
          </div>

          {/* === RIGHT SLIDING COLUMN === */}
          <div className="hidden lg:block w-[220px] xl:w-[260px] shrink-0 h-[620px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
            <div className="pt-12">
              <motion.div
                animate={{ translateY: ["-50%", "0%"] }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                className="flex flex-col gap-4 pb-4"
              >
                {[
                  { src: "/images/hospitality-usher.jpg", role: "Events", title: "HOSPITALITY USHER" },
                  { src: "/images/admin-executive.jpg", role: "Office", title: "ADMIN EXECUTIVE" },
                  { src: "/images/corporate-assistant.jpg", role: "Corporate", title: "BUSINESS ASSISTANT" },
                  { src: "/images/hospitality-usher.jpg", role: "Events", title: "HOSPITALITY USHER" },
                  { src: "/images/admin-executive.jpg", role: "Office", title: "ADMIN EXECUTIVE" },
                  { src: "/images/corporate-assistant.jpg", role: "Corporate", title: "BUSINESS ASSISTANT" },
                ].map((img, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 aspect-[3/4] relative shadow-lg shrink-0">
                    <img src={img.src} alt={img.role} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-3 flex flex-col justify-end text-white">
                      <span className="text-[8px] uppercase tracking-wider text-[#C1E929] font-bold">{img.role}</span>
                      <p className="text-[10px] font-bold">{img.title}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 02 — TRUST METRICS                                */}
      {/* ========================================================= */}
      <section className="bg-white border-y border-zinc-200 py-10 px-4 sm:px-6 lg:px-8" id="trust-metrics-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-200">
            
            {/* Stat Card 1 */}
            <div className="p-4">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#0A201C]">98%</span>
              <span className="block text-xs uppercase font-extrabold tracking-wider text-zinc-500 mt-1">
                Client Satisfaction
              </span>
            </div>

            {/* Stat Card 2 */}
            <div className="p-4 pt-8 md:pt-4">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#0A201C]">500+</span>
              <span className="block text-xs uppercase font-extrabold tracking-wider text-zinc-500 mt-1">
                Services Delivered
              </span>
            </div>

            {/* Stat Card 3 */}
            <div className="p-4 pt-8 md:pt-4">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#0A201C]">100%</span>
              <span className="block text-xs uppercase font-extrabold tracking-wider text-zinc-500 mt-1">
                Verified Professionals
              </span>
            </div>

            {/* Stat Card 4 */}
            <div className="p-4 pt-8 md:pt-4">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#0A201C]">24/7</span>
              <span className="block text-xs uppercase font-extrabold tracking-wider text-zinc-500 mt-1">
                Support Availability
              </span>
            </div>

            {/* Card 4: Event Staffing */}
            <div className="hidden">
              <div className="space-y-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#0A201C] font-bold text-xl shadow-inner mb-6">
                  <Award className="h-6 w-6 text-[#0A201C]" />
                </span>
                <h3 className="text-base font-bold text-[#0A201C] tracking-tight">Event Staffing</h3>
                <p className="text-xs text-zinc-550 leading-relaxed">
                  Ushers, hospitality attendants, registration assistants, and service crew for events and programs.
                </p>
                <ul className="space-y-2 pt-4 border-t border-zinc-100 text-xs text-zinc-500">
                  <li className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Ushers and greeters</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Hospitality crew</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Guest coordination</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => onNavigateService('event-staffing')}
                className="mt-8 text-xs font-extrabold uppercase tracking-widest text-[#0A201C] group-hover:translate-x-1 transition-transform inline-flex items-center space-x-2 text-left bg-[#EBF3F0] hover:bg-zinc-200/50 py-3 px-6 rounded-full w-fit"
              >
                <span>View Service</span>
                <span>â†’</span>
              </button>
            </div>

            {/* Card 4: Event Staffing */}
            <div className="hidden">
              <div className="space-y-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#0A201C] font-bold text-xl shadow-inner mb-6">
                  <Award className="h-6 w-6 text-[#0A201C]" />
                </span>
                <h3 className="text-base font-bold text-[#0A201C] tracking-tight">Event Staffing</h3>
                <p className="text-xs text-zinc-550 leading-relaxed">
                  Ushers, hospitality attendants, registration assistants, and service crew for events and programs.
                </p>
                <ul className="space-y-2 pt-4 border-t border-zinc-100 text-xs text-zinc-500">
                  <li className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Ushers and greeters</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Hospitality crew</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Guest coordination</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => onNavigateService('event-staffing')}
                className="mt-8 text-xs font-extrabold uppercase tracking-widest text-[#0A201C] group-hover:translate-x-1 transition-transform inline-flex items-center space-x-2 text-left bg-[#EBF3F0] hover:bg-zinc-200/50 py-3 px-6 rounded-full w-fit"
              >
                <span>View Service</span>
                <span>â†’</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 03 — ABOUT THE SERVICE                             */}
      {/* ========================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F9FBFB]" id="about-service-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: About Image */}
            <div className="lg:col-span-5 h-[450px] rounded-3xl overflow-hidden border border-zinc-200 shadow-xl relative">
              <img 
                src="/images/admin-executive.jpg" 
                alt="Help on hire team coordination" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-full border border-zinc-100 flex items-center space-x-2 text-[10px] font-bold text-[#0A201C] uppercase tracking-wider">
                <CheckCircle2 className="h-4 w-4 text-[#0A201C]" />
                <span>Port Harcourt Regional Desk</span>
              </div>
            </div>

            {/* Right: Content Copy */}
            <div className="lg:col-span-7 flex flex-col items-start xl:pl-8">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#0A201C]/60 bg-[#EBF3F0] px-4 py-1.5 rounded-full border border-zinc-200/50">
                ABOUT HELP ON HIRE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A201C] tracking-tight mt-4 leading-tight">
                Professional support for everyday needs and business operations in Port Harcourt
              </h2>
              <p className="text-sm text-zinc-550 mt-4 leading-relaxed">
                Whether you need help at home, support for an event, or temporary staff for your Port Harcourt business, Help On Hire connects you with dependable professionals ready to assist.
              </p>
              <p className="text-sm text-zinc-505 mt-3 leading-relaxed">
                Our platform manages the entire lifecycle, from criminal vetting, credential sorting, direct payouts to operational calendar checks. We emphasize quality, so you always get elite-tier assistance.
              </p>

              <button
                onClick={() => setActiveTab('about')}
                className="rounded-full bg-[#0A201C] hover:bg-emerald-950 text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition duration-250 mt-8"
              >
                Learn More
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 04 — SERVICES GRID                                */}
      {/* ========================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#EBF3F0] border-y border-zinc-200/60" id="services-grid-section">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#0A201C]/60">
              SERVICE PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A201C] tracking-tight mt-3">
              Our Services
            </h2>
            <p className="text-xs sm:text-sm text-zinc-550 mt-2 leading-relaxed">
              From everyday tasks to business staffing, we provide access to reliable professionals across Port Harcourt service categories.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Card 1: Cleaning */}
            <div className="bg-white rounded-3xl p-8 border border-zinc-200/80 shadow-sm flex flex-col justify-between group hover:shadow-lg transition">
              <div className="space-y-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#0A201C] font-bold text-xl shadow-inner mb-6">
                  <Sparkles className="h-6 w-6 text-[#0A201C]" />
                </span>
                <h3 className="text-base font-bold text-[#0A201C] tracking-tight">Cleaning</h3>
                <p className="text-xs text-zinc-550 leading-relaxed">
                  Routine cleaning, deep cleaning, move-in resets, and post-event cleanup for homes and offices.
                </p>
                <ul className="space-y-2 pt-4 border-t border-zinc-100 text-xs text-zinc-500">
                  <li className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Home and office cleaning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Deep sanitizing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Recurring plans</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => onNavigateService('cleaning')}
                className="mt-8 text-xs font-extrabold uppercase tracking-widest text-[#0A201C] group-hover:translate-x-1 transition-transform inline-flex items-center space-x-2 text-left bg-[#EBF3F0] hover:bg-zinc-200/50 py-3 px-6 rounded-full w-fit"
              >
                <span>View Service</span>
                <span>→</span>
              </button>
            </div>

            {/* Card 2: Errands / Deliveries */}
            <div className="bg-white rounded-3xl p-8 border border-zinc-200/80 shadow-sm flex flex-col justify-between group hover:shadow-lg transition">
              <div className="space-y-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#0A201C] font-bold text-xl shadow-inner mb-6">
                  <Package className="h-6 w-6 text-[#0A201C]" />
                </span>
                <h3 className="text-base font-bold text-[#0A201C] tracking-tight">Errands / Deliveries</h3>
                <p className="text-xs text-zinc-550 leading-relaxed">
                  Market runs, document movement, parcel pickup, and delivery tasks handled by reliable support staff.
                </p>
                <ul className="space-y-2 pt-4 border-t border-zinc-100 text-xs text-zinc-500">
                  <li className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Market runs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Parcel pickup</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Delivery updates</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => onNavigateService('errands-deliveries')}
                className="mt-8 text-xs font-extrabold uppercase tracking-widest text-[#0A201C] group-hover:translate-x-1 transition-transform inline-flex items-center space-x-2 text-left bg-[#EBF3F0] hover:bg-zinc-200/50 py-3 px-6 rounded-full w-fit"
              >
                <span>View Service</span>
                <span>→</span>
              </button>
            </div>

            {/* Card 3: Domestic Help */}
            <div className="bg-white rounded-3xl p-8 border border-zinc-200/80 shadow-sm flex flex-col justify-between group hover:shadow-lg transition">
              <div className="space-y-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#0A201C] font-bold text-xl shadow-inner mb-6">
                  <HeartHandshake className="h-6 w-6 text-[#0A201C]" />
                </span>
                <h3 className="text-base font-bold text-[#0A201C] tracking-tight">Domestic Help</h3>
                <p className="text-xs text-zinc-550 leading-relaxed">
                  Flexible household support for laundry, tidying, basic meal prep assistance, and daily home routines.
                </p>
                <ul className="space-y-2 pt-4 border-t border-zinc-100 text-xs text-zinc-500">
                  <li className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Laundry support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Home organization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Daily assistance</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => onNavigateService('domestic-help')}
                className="mt-8 text-xs font-extrabold uppercase tracking-widest text-[#0A201C] group-hover:translate-x-1 transition-transform inline-flex items-center space-x-2 text-left bg-[#0A201C] hover:bg-emerald-950 px-6 py-3.5 rounded-full text-[#C1E929] w-fit"
              >
                <span>View Service</span>
                <span>→</span>
              </button>
            </div>

            {/* Card 4: Event Staffing */}
            <div className="bg-white rounded-3xl p-8 border border-zinc-200/80 shadow-sm flex flex-col justify-between group hover:shadow-lg transition">
              <div className="space-y-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#0A201C] font-bold text-xl shadow-inner mb-6">
                  <Award className="h-6 w-6 text-[#0A201C]" />
                </span>
                <h3 className="text-base font-bold text-[#0A201C] tracking-tight">Event Staffing</h3>
                <p className="text-xs text-zinc-550 leading-relaxed">
                  Ushers, hospitality attendants, registration assistants, and service crew for events and programs.
                </p>
                <ul className="space-y-2 pt-4 border-t border-zinc-100 text-xs text-zinc-500">
                  <li className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Ushers and greeters</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Hospitality crew</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Guest coordination</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => onNavigateService('event-staffing')}
                className="mt-8 text-xs font-extrabold uppercase tracking-widest text-[#0A201C] group-hover:translate-x-1 transition-transform inline-flex items-center space-x-2 text-left bg-[#EBF3F0] hover:bg-zinc-200/50 py-3 px-6 rounded-full w-fit"
              >
                <span>View Service</span>
                <span>-&gt;</span>
              </button>
            </div>

          </div>

          <div className="pt-16 text-center border-t border-zinc-250 mt-16">
            <button
              onClick={() => setActiveTab('services')}
              className="rounded-full bg-[#0A201C] hover:bg-emerald-950 text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition duration-200"
            >
              View All Services
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 05 — HOW IT WORKS                                  */}
      {/* ========================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white" id="how-it-works-section">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-20 animate-fade-in">
            <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100/50">
              SIMPLE 4-STEP PROTOCOL
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A201C] tracking-tight mt-4">
              How It Works
            </h2>
            <p className="text-xs sm:text-sm text-zinc-550 mt-2 leading-relaxed">
              Getting the help you need in Port Harcourt is simple, fast, and reliable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
            
            {/* Step 1 */}
            <div className="space-y-4 text-left relative z-10 group">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A201C] text-[#C1E929] font-extrabold text-xs shadow-md transition-transform group-hover:-translate-y-1">
                01
              </span>
              <h3 className="text-sm font-extrabold text-[#0A201C] tracking-wider uppercase">Request a Service</h3>
              <p className="text-xs text-zinc-550 leading-relaxed">
                Tell us what you need. Specify your specific service requirements, hours, and calendar dates using our Booking wizard.
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-4 text-left relative z-10 group">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A201C] text-[#C1E929] font-extrabold text-xs shadow-md transition-transform group-hover:-translate-y-1">
                02
              </span>
              <h3 className="text-sm font-extrabold text-[#0A201C] tracking-wider uppercase">Get Matched</h3>
              <p className="text-xs text-zinc-550 leading-relaxed">
                We assign a suitable professional. Our system screens credentials to match the most competent regional pro instantly.
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-4 text-left relative z-10 group">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A201C] text-[#C1E929] font-extrabold text-xs shadow-md transition-transform group-hover:-translate-y-1">
                03
              </span>
              <h3 className="text-sm font-extrabold text-[#0A201C] tracking-wider uppercase">Service Delivery</h3>
              <p className="text-xs text-zinc-550 leading-relaxed">
                Work gets completed professionally. The assigned expert arrives on schedule and executes the service parameters perfectly.
              </p>
            </div>

            {/* Step 4 */}
            <div className="space-y-4 text-left relative z-10 group">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A201C] text-[#C1E929] font-extrabold text-xs shadow-md transition-transform group-hover:-translate-y-1">
                04
              </span>
              <h3 className="text-sm font-extrabold text-[#0A201C] tracking-wider uppercase">Quality Assurance</h3>
              <p className="text-xs text-zinc-550 leading-relaxed">
                We follow up and ensure satisfaction. We complete reviews, verify payouts, and ensure your absolute workspace delight.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 06 — WHY CHOOSE HELP ON HIRE                      */}
      {/* ========================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F9FBFB] border-t border-zinc-200" id="why-choose-us-section">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#0A201C]/65">
              THE HELP ON HIRE STANDARD
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A201C] tracking-tight mt-3">
              The Difference is in the Details
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Masonry visual block (5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden h-72 border border-zinc-200 shadow-sm relative group">
                <img 
                  src="/images/corporate-assistant.jpg" 
                  alt="Quality assurance checks" 
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-3xl overflow-hidden h-72 border border-zinc-200 shadow-sm relative group pt-8">
                <img 
                  src="/images/eco-cleaning-specialist.jpg" 
                  alt="Vetted support personnel" 
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Choice features lists (7 cols) */}
            <div className="lg:col-span-7 col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Feature 1 */}
              <div className="bg-white border border-zinc-200/80 rounded-3xl p-6 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[#0A201C] mb-4 font-extrabold">✓</span>
                <h3 className="text-sm font-bold text-[#0A201C] tracking-tight">Carefully Selected Professionals</h3>
                <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
                  Every Port Harcourt professional is screened and verified. This covers municipal background audits and credentials checks.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white border border-zinc-200/80 rounded-3xl p-6 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[#0A201C] mb-4 font-extrabold">✓</span>
                <h3 className="text-sm font-bold text-[#0A201C] tracking-tight">Structured Operations</h3>
                <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
                  Consistent oversight and service quality. Automated scheduling ensures you get real-time dispatcher coordination status.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white border border-zinc-200/80 rounded-3xl p-6 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[#0A201C] mb-4 font-extrabold">✓</span>
                <h3 className="text-sm font-bold text-[#0A201C] tracking-tight">Reliable Service</h3>
                <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
                  Punctual and dependable professionals. Rest easy knowing that the matched candidates hold high success metrics.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white border border-zinc-200/80 rounded-3xl p-6 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[#0A201C] mb-4 font-extrabold">✓</span>
                <h3 className="text-sm font-bold text-[#0A201C] tracking-tight">End-to-End Support</h3>
                <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
                  Support from request to completion. Our regional coordinator line monitors every on-site gig 24 hours a day.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 07 — BUSINESS SOLUTIONS                           */}
      {/* ========================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A201C] text-white relative overflow-hidden" id="business-solutions-section">
        <div className="absolute inset-0 bg-[radial-gradient(#11322d_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-35" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Image layout (Reverse from Section 3) */}
            <div className="h-[460px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative order-last lg:order-first">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600" 
                alt="Business conference meeting staffing" 
                className="w-full h-full object-cover filter grayscale-[10%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <span className="text-[9px] font-bold text-[#C1E929] uppercase tracking-widest font-bold">REGIONAL B2B SERVICE</span>
                <h4 className="text-base font-extrabold text-white">GRA Port Harcourt Operational Partner</h4>
              </div>
            </div>

            {/* Right content column */}
            <div className="flex flex-col items-start space-y-6">
              <span className="text-[9px] uppercase font-bold tracking-widest text-[#C1E929] bg-emerald-900/40 px-3.5 py-1.5 rounded-full border border-emerald-500/10">
                FOR BUSINESSES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none">
                Reliable Staff, Without the Hiring Stress
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Access trained Port Harcourt professionals for events, projects, and ongoing business operations. Solve temp workforce shortages within minutes.
              </p>
              
              <div className="grid grid-cols-2 gap-4 w-full pt-4 text-xs">
                <div className="flex items-center space-x-2">
                  <span className="h-5 w-5 rounded-full bg-emerald-900/30 text-[#C1E929] flex items-center justify-center font-bold">✓</span>
                  <span className="text-zinc-250">Pre-screened workforce</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="h-5 w-5 rounded-full bg-emerald-900/30 text-[#C1E929] flex items-center justify-center font-bold">✓</span>
                  <span className="text-zinc-250">Flexible staffing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="h-5 w-5 rounded-full bg-emerald-900/30 text-[#C1E929] flex items-center justify-center font-bold">✓</span>
                  <span className="text-zinc-250">Scalable support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="h-5 w-5 rounded-full bg-emerald-900/30 text-[#C1E929] flex items-center justify-center font-bold">✓</span>
                  <span className="text-zinc-250">Reduced burden</span>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => setActiveTab('business')}
                  className="rounded-full bg-[#C1E929] hover:bg-white text-[#0A201C] px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition duration-300 shadow-md shadow-[#C1E929]/10"
                >
                  Hire Staff
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 08 — TESTIMONIALS                                  */}
      {/* ========================================================= */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200 relative overflow-hidden" id="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center mb-12"
          >
            <div className="flex justify-center mb-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#0A201C] bg-[#5E7E10]/10 px-3 py-1 rounded-full border border-[#5E7E10]/20">
                Client Correspondence
              </span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#0A201C]">
              What Our Users Say
            </h2>
            <p className="text-xs text-zinc-500 mt-3">
              See what our customers have to say about our vetted professionals and service delivery.
            </p>
          </motion.div>

          {/* Testimonials Columns container with fade out masks */}
          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[580px] overflow-hidden">
            <TestimonialsColumn 
              testimonials={[
                {
                  text: "This platform revolutionized our operations, streamlining home service dispatching and temporary event staffing. The vetted specialists keep us productive, even on short notice.",
                  image: "/testimonials/amaka-okafor.jpg",
                  name: "Amaka Okafor",
                  role: "Operations Manager",
                },
                {
                  text: "Implementing Help On Hire was smooth and quick. The pre-screened professionals made team training and onboarding effortless.",
                  image: "/testimonials/chinedu-nwosu.jpg",
                  name: "Chinedu Nwosu",
                  role: "IT Manager",
                },
                {
                  text: "The support desk is exceptional, guiding us through match selection and providing fast, friendly dispatch assistance.",
                  image: "/testimonials/aisha-bello.jpg",
                  name: "Aisha Bello",
                  role: "Customer Support Lead",
                }
              ]} 
              duration={15} 
            />
            <TestimonialsColumn 
              testimonials={[
                {
                  text: "Help On Hire's seamless integration enhanced our office administration and corporate operations. Highly recommend their vetted specialists.",
                  image: "/testimonials/tunde-adebayo.jpg",
                  name: "Tunde Adebayo",
                  role: "CEO",
                },
                {
                  text: "Its robust vetted network and quick support have transformed our workflow, making home cleaning and repairs effortless.",
                  image: "/testimonials/ngozi-eze.jpg",
                  name: "Ngozi Eze",
                  role: "Project Manager",
                },
                {
                  text: "The smooth dispatch exceeded expectations. It streamlined our event ushers team, improving overall guest feedback.",
                  image: "/testimonials/kemi-balogun.jpg",
                  name: "Kemi Balogun",
                  role: "Business Analyst",
                }
              ]} 
              className="hidden md:block" 
              duration={19} 
            />
            <TestimonialsColumn 
              testimonials={[
                {
                  text: "Our business functions improved significantly with their temporary admin staff and welcoming corporate support team.",
                  image: "/testimonials/emeka-obi.jpg",
                  name: "Emeka Obi",
                  role: "Marketing Director",
                },
                {
                  text: "They delivered a staffing solution that exceeded expectations, understanding our Port Harcourt operations perfectly.",
                  image: "/testimonials/fatima-musa.jpg",
                  name: "Fatima Musa",
                  role: "Sales Manager",
                },
                {
                  text: "Using Help On Hire, our on-demand cleaning and handyman repairs significantly improved, boosting overall home comfort.",
                  image: "/testimonials/ifeanyi-uche.jpg",
                  name: "Ifeanyi Uche",
                  role: "E-commerce Manager",
                }
              ]} 
              className="hidden lg:block" 
              duration={17} 
            />
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 09 — BOOKING CTA (Dark Cleano Theme banner)      */}
      {/* ========================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A201C] text-white relative" id="booking-cta-section">
        <div className="absolute inset-0 bg-[radial-gradient(#11322d_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-35" />
        <div className="relative max-w-4xl mx-auto rounded-3xl bg-emerald-950/40 border border-white/5 p-10 text-center space-y-6">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#C1E929]">SPEED RUN DISPATCH</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-none">
            Get Reliable Help In Port Harcourt Today
          </h2>
          <p className="max-w-lg text-sm text-zinc-300 mx-auto leading-relaxed">
            Connect with trusted Port Harcourt professionals whenever you need support. Submit an inquiry or chat with us directly.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="rounded-full bg-[#C1E929] hover:bg-white text-[#0A201C] px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition"
            >
              Request a Service
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition flex items-center space-x-2"
              id="cta-whatsapp-btn"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 10 — PROFESSIONALS SHOWCASE                        */}
      {/* ========================================================= */}
      {/* ========================================================= */}
      {/* SECTION 11 — FAQ                                          */}
      {/* ========================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50" id="faq-section">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#0A201C]/65">
              QUESTIONS &amp; CORRESPONDENCE
            </span>
            <h2 className="text-3xl font-extrabold text-[#0A201C] tracking-tight mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 text-xs">
            {faqData.map((faq, index) => {
              const isSelected = activeFaq === index;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left font-bold text-sm text-[#0A201C] flex items-center justify-between"
                  >
                    <span>{faq.q}</span>
                    {isSelected ? <ChevronUp className="h-4 w-4 text-[#0A201C]" /> : <ChevronDown className="h-4 w-4 text-zinc-400" />}
                  </button>
                  
                  {isSelected && (
                    <div className="px-6 pb-6 pt-1 text-xs text-zinc-500 leading-relaxed border-t border-zinc-100 animate-fade-in text-left">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 12 — INSIGHTS / BLOG                               */}
      {/* ========================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#EBF3F0]" id="insights-section">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
            <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-700">
              MEDIA NEWSROOM
            </span>
            <h2 className="text-3xl font-extrabold text-[#0A201C] tracking-tight mt-3">
              Latest Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={post.url} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-3 left-3 bg-[#0A201C] text-[#C1E929] px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 space-y-2 text-left">
                    <span className="text-[9px] text-zinc-400 font-bold block">{post.date} • {post.readTime}</span>
                    <h4 className="text-sm font-bold text-[#0A201C] leading-snug group-hover:text-emerald-800 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-4 border-t border-zinc-100 text-left bg-zinc-50/40">
                  <span className="text-xs font-bold text-[#0A201C] group-hover:translate-x-1 inline-flex items-center space-x-1.5 transition">
                    <span>Read Article</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 13 — FINAL CTA                                    */}
      {/* ========================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-zinc-200" id="final-cta-section">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#0A201C]/65 bg-[#EBF3F0] px-4 py-1.5 rounded-full border border-zinc-200/50">
            GET STARTED INSTANTLY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A201C] tracking-tight leading-none mt-4">
            Ready to Get Started?
          </h2>
          <p className="max-w-md mx-auto text-xs sm:text-sm text-zinc-550 leading-relaxed">
            Request a service or hire trusted staff today. Our compliance officers handle background screening and municipal checks securely.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onOpenBooking()}
              className="rounded-full bg-[#0A201C] hover:bg-zinc-950 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition shadow-lg shadow-emerald-990/10 flex items-center space-x-2 mx-auto text-center justify-center border-2 border-transparent"
              id="final-booking-action-btn"
            >
              <span>Request a Service</span>
              <ArrowRight className="h-4 w-4 text-[#C1E929]" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
