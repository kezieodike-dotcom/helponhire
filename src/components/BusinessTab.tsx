import React, { useState } from 'react';
import { 
  Star, 
  ChevronDown, 
  Send, 
  ChevronRight, 
  Users, 
  Laptop, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  UserPlus,
  Clock,
  Briefcase,
  HelpCircle,
  TrendingUp,
  Award
} from 'lucide-react';
import { CorporateRequestInput } from '../types';

export const BusinessTab: React.FC = () => {
  // Form States matching types
  const [formInput, setFormInput] = useState<CorporateRequestInput>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    roleNeeded: 'Event Ushers & Support',
    headcount: 5,
    durationWeeks: 1,
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formInput.companyName || !formInput.contactName || !formInput.email || !formInput.description) {
      alert('Please fill out all required fields.');
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormInput({
          companyName: '',
          contactName: '',
          email: '',
          phone: '+234 80 0000 0000',
          roleNeeded: 'Event Ushers & Support',
          headcount: 5,
          durationWeeks: 1,
          description: ''
        });
      }, 5000);
    }, 1500);
  };

  const handleScrollToForm = () => {
    const el = document.getElementById('business-request-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleScrollToExpertise = () => {
    const el = document.getElementById('business-expertise-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#FAFBFB] text-zinc-900 min-h-screen font-sans" id="business-tab-scaffold">
      
      {/* ========================================================= */}
      {/* SECTION 01 — HERO (Reliable Staff, Without Hiring Stress) */}
      {/* ========================================================= */}
      <section className="bg-[#0A201C] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="business-hero">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(#11322d_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-25" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-950/20 rounded-full blur-3xl filter translate-x-20 -translate-y-20" />
        
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column Text & Buttons */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="inline-block rounded-full bg-[#C1E929]/15 text-[#C1E929] border border-[#C1E929]/20 px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest leading-none">
              BUSINESS SOLUTIONS
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.1] text-white">
              Reliable Staff,<br />
              <span className="text-[#C1E929]">Without the Hiring</span> Stress.
            </h1>
            
            <p className="text-sm sm:text-base text-zinc-350 max-w-lg leading-relaxed font-normal">
              Scale your Port Harcourt business operations instantly with our vetted professionals. From event logistics to corporate admin, we handle the talent so you can focus on growth.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={handleScrollToForm}
                className="rounded-full bg-[#C1E929] hover:bg-white text-[#0A201C] px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#021412]"
                id="hero-hire-staff-btn"
              >
                Hire Staff Now
              </button>
              <button
                onClick={handleScrollToExpertise}
                className="rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition"
                id="hero-view-packages-btn"
              >
                View Our Packages
              </button>
            </div>

            {/* Overlapping small avatars + label */}
            <div className="flex items-center space-x-3 pt-6 border-t border-emerald-950/50">
              <div className="flex -space-x-2.5">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" 
                  alt="Customer Business Pro Partner" 
                  className="h-8 w-8 rounded-full border-2 border-[#0A201C] object-cover"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" 
                  alt="Customer Business Pro Partner" 
                  className="h-8 w-8 rounded-full border-2 border-[#0A201C] object-cover"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" 
                  alt="Customer Business Pro Partner" 
                  className="h-8 w-8 rounded-full border-2 border-[#0A201C] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xs font-semibold text-zinc-300">
                Trusted by <span className="text-[#C1E929] font-bold">500+</span> Local Businesses
              </span>
            </div>
          </div>

          {/* Right Column Grid matching the screenshot exact structure */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-white/5 shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400" 
                  alt="Sleek Modern Front Reception Lobby" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              
              <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-white/5 shadow-2xl relative group bg-emerald-950/20">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=400" 
                  alt="Corporate Schematic Layout Diagram" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-950/40" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-left">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-[#C1E929]">DISPATCH SCHEMA</span>
                  <p className="text-[10px] text-zinc-300 mt-1 leading-normal">Optimized regional placement mapping systems.</p>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-white/5 shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" 
                  alt="Clean Meeting Desk Staffing" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-white/5 shadow-2xl relative group bg-[#0A201C] p-6 flex flex-col justify-between text-left">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-900/40 border border-[#C1E929]/20 text-[#C1E929]">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="text-xs font-bold text-[#C1E929] uppercase tracking-wide">Elite Credentials</h4>
                  <p className="text-[10px] text-zinc-300 mt-1.5 leading-relaxed">
                    100% and Municipal verification checks standard.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 02 — TRUST STATISTICS BAR                        */}
      {/* ========================================================= */}
      <section className="bg-white border-y border-zinc-200 py-10 px-4 sm:px-6 lg:px-8" id="business-stats-bar">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200 text-center">
            
            <div className="pt-4 md:pt-0">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#0A201C] tracking-tight">15k+</span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-2">
                STAFF HOURS FILLED
              </span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#0A201C] tracking-tight">48h</span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-2">
                AVG. DEPLOYMENT TIME
              </span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#0A201C] tracking-tight">98%</span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-2">
                SUCCESS RATE
              </span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#0A201C] tracking-tight">5.0</span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-2">
                BUSINESS RATING
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 03 — STAFFING SOLUTIONS FOR EVERY NEED (BENTO GRID) */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" id="business-expertise-section">
        
        {/* Category Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block rounded-full bg-zinc-950 text-white px-3.5 py-1 text-[9px] font-bold uppercase tracking-widest">
            OUR EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A201C] tracking-tight">
            Staffing Solutions for Every Need
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
            Professional personnel matched directly to your scheduling grids and custom brand guidelines.
          </p>
        </div>

        {/* Bento Grid — 3 column grid layout matching screenshot exactly */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Event Ushers & Support (colspan 2 in md) */}
          <div className="md:col-span-2 bg-[#F3F4F6] rounded-3xl overflow-hidden flex flex-col sm:flex-row justify-between relative shadow-sm border border-zinc-200/50 group hover:border-zinc-300 transition duration-200">
            <div className="p-8 flex flex-col justify-between text-left space-y-6 sm:max-w-[50%]">
              <div className="space-y-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0A201C]/5 text-[#0A201C]">
                  <Briefcase className="h-5.5 w-5.5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#0A201C] tracking-tight">Event Ushers &amp; Support</h3>
                  <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                    Professional, friendly staff for conferences, gala dinners, and private corporate events.
                  </p>
                </div>
              </div>
              <button 
                onClick={handleScrollToForm}
                className="text-xs font-bold text-[#0A201C] hover:text-emerald-700 transition flex items-center space-x-1 w-fit"
              >
                <span>Request details</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
            {/* Image side */}
            <div className="h-64 sm:h-auto sm:w-[50%] overflow-hidden bg-zinc-200 relative">
              <img 
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=400" 
                alt="Professional conference hospitality desk" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F3F4F6] via-transparent to-transparent hidden sm:block" />
            </div>
          </div>

          {/* Card 2: Admin Support (colspan 1 - Dark Green) */}
          <div className="bg-[#0A201C] text-white rounded-3xl p-8 flex flex-col justify-between text-left relative shadow-lg min-h-[320px] group transition overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#11322d_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-35" />
            <div className="relative z-10 space-y-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-950 text-[#C1E929] border border-emerald-900">
                <Laptop className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">Admin Support</h3>
                <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                  Virtual or on-site clerical experts to keep your office running smooth.
                </p>
              </div>
            </div>
            <div className="relative z-10 pt-4 text-[11px] text-zinc-400 font-bold uppercase tracking-wider flex items-center justify-between">
              <span>On-Demand Setup</span>
              <ChevronRight className="h-4 w-4 text-[#C1E929]" />
            </div>
          </div>

          {/* Card 3: Temporary Staff (colspan 1 - Light Grey) */}
          <div className="bg-[#F8FAFC] border border-zinc-200 text-zinc-900 rounded-3xl p-8 flex flex-col justify-between text-left relative shadow-sm min-h-[320px] hover:border-zinc-300 transition duration-200">
            <div className="space-y-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-[#0A201C] border border-zinc-200">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-[#0A201C] tracking-tight">Temporary Staff</h3>
                <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                  Rapid deployment for seasonal peaks or unexpected staff shortages.
                </p>
              </div>
            </div>
            <div className="pt-4 text-[11px] text-zinc-400 font-bold uppercase tracking-wider flex items-center justify-between">
              <span>Instant Matching</span>
              <ChevronRight className="h-4 w-4 text-[#0A201C]" />
            </div>
          </div>

          {/* Card 4: Bespoke Talent Solutions (colspan 2 in md - Lime Yellow) */}
          <div className="md:col-span-2 bg-[#C1E929] text-[#0A201C] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row justify-between items-start sm:items-center relative shadow-sm overflow-hidden group">
            <div className="space-y-6 text-left max-w-lg relative z-10">
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">Bespoke Talent Solutions</h3>
                <p className="text-xs sm:text-sm text-[#0A201C]/80 leading-relaxed font-medium">
                  Need a very specific skill set? Our specialized recruiters can source exactly what your business requires.
                </p>
              </div>
              <button 
                onClick={handleScrollToForm}
                className="rounded-full bg-[#0A201C] hover:bg-emerald-950 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition"
                id="bento-bespoke-btn"
              >
                Learn More
              </button>
            </div>

            {/* Giant soft UserPlus icon in background on the right */}
            <div className="absolute right-6 bottom-0 translate-y-6 translate-x-4 opacity-15 select-none pointer-events-none text-[#0A201C]">
              <UserPlus className="h-64 w-64 stroke-[1]" />
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 04 — HIRE ELITE STAFF IN 3 SIMPLE STEPS & FORM     */}
      {/* ========================================================= */}
      <section className="bg-[#EEF1F0] py-24 px-4 sm:px-6 lg:px-8 border-y border-zinc-200" id="business-request-form-section">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: 3 Simple Steps */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#0A201C]/60">
                GET STARTED
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A201C] tracking-tight">
                Hire Elite Staff in 3 Simple Steps
              </h2>
            </div>

            {/* Vertically stacked step items */}
            <div className="space-y-6 pt-4">
              
              <div className="flex items-start space-x-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0A201C] text-white font-extrabold text-xs">
                  1
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-[#0A201C] tracking-wide uppercase">Define Your Needs</h4>
                  <p className="text-xs text-zinc-550 leading-relaxed max-w-md">
                    Tell us about the roles, duration, and specific skills required for your project.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0A201C] text-white font-extrabold text-xs">
                  2
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-[#0A201C] tracking-wide uppercase">We Source &amp; Vett</h4>
                  <p className="text-xs text-zinc-550 leading-relaxed max-w-md">
                    Our team identifies the best matches from our premium talent pool of verified pros.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0A201C] text-white font-extrabold text-xs">
                  3
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-[#0A201C] tracking-wide uppercase">Deployment</h4>
                  <p className="text-xs text-zinc-550 leading-relaxed max-w-md">
                    Staff arrive briefed and ready to hit the ground running on day one.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Staff Request Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-zinc-150/80 text-left">
              <h3 className="text-lg font-bold text-[#0A201C] tracking-tight">Staff Request Form</h3>
              <p className="text-xs text-zinc-400 mt-1 mb-8 leading-relaxed">
                Connect instantly with verified Port Harcourt professionals customized for your B2B demands.
              </p>

              {submitted ? (
                <div className="text-center py-12 space-y-4" id="business-request-success">
                  <div className="h-14 w-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-zinc-900">Request Transmitted Successfully</h4>
                    <p className="text-xs text-zinc-550 max-w-sm mx-auto leading-relaxed">
                      Thank you. Our B2B workforce managers are screening available profiles. We will contact your company within <strong>15 minutes</strong>.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5" id="business-client-briefcase-form">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-2">Company / Organization Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Acme Corp" 
                        value={formInput.companyName}
                        onChange={(e) => setFormData('companyName', e.target.value)}
                        className="w-full rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#0A201C]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-2">Contact Person Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. John Okafor" 
                        value={formInput.contactName}
                        onChange={(e) => setFormData('contactName', e.target.value)}
                        className="w-full rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#0A201C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="contact@company.com" 
                        value={formInput.email}
                        onChange={(e) => setFormData('email', e.target.value)}
                        className="w-full rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#0A201C]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+234 812 345 6789" 
                        value={formInput.phone}
                        onChange={(e) => setFormData('phone', e.target.value)}
                        className="w-full rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#0A201C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-2">Service Type</label>
                    <div className="relative">
                      <select 
                        value={formInput.roleNeeded}
                        onChange={(e) => setFormData('roleNeeded', e.target.value)}
                        className="w-full rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 px-4 py-3 text-xs appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#0A201C]"
                      >
                        <option>Event Ushers &amp; Support</option>
                        <option>Admin Support / Temp Secretary</option>
                        <option>Temporary Logistic Personnel</option>
                        <option>Bespoke Custom Talent</option>
                      </select>
                      <ChevronDown className="h-4 w-4 absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-2">Number of Staff Needed</label>
                    <input 
                      type="number" 
                      min="1"
                      max="100"
                      required
                      placeholder="e.g. 5" 
                      value={formInput.headcount}
                      onChange={(e) => setFormData('headcount', Number(e.target.value))}
                      className="w-full rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#0A201C]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-2">Brief Details</label>
                    <textarea 
                      rows={4}
                      required
                      placeholder="Tell us more about your event or business needs..." 
                      value={formInput.description}
                      onChange={(e) => setFormData('description', e.target.value)}
                      className="w-full rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#0A201C]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-[#0A201C] hover:bg-emerald-950 text-[#C1E929] hover:text-white py-3.5 text-xs font-bold uppercase tracking-wider transition flex items-center justify-center space-x-2 shadow-md shadow-[#0a201c]/10"
                    id="submit-business-brief-btn"
                  >
                    <span>{isSubmitting ? "Transmitting..." : "Submit Request"}</span>
                    <Send className="h-3 w-3" />
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 05 — CLIENT SUCCESS (TESTIMONIALS)                 */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-left" id="business-testimonials-section">
        
        {/* Header containing the arrow sliders as in the screenshot */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div className="space-y-3">
            <span className="inline-block rounded-full bg-amber-500/10 text-amber-900 border border-amber-500/20 px-3.5 py-1 text-[9px] font-bold uppercase tracking-widest leading-none">
              CLIENT SUCCESS
            </span>
            <h2 className="text-3xl font-extrabold text-[#0A201C] tracking-tight">Built on trust &amp; efficiency</h2>
          </div>
          
          {/* Custom mock arrows */}
          <div className="flex items-center space-x-2.5">
            <button 
              onClick={() => alert('Viewing previous client response logs.')}
              className="h-10 w-10 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-650 flex items-center justify-center transition active:scale-95"
              title="Previous testimony"
            >
              <span className="text-base select-none">←</span>
            </button>
            <button 
              onClick={() => alert('Viewing next client response logs.')}
              className="h-10 w-10 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-650 flex items-center justify-center transition active:scale-95"
              title="Next testimony"
            >
              <span className="text-base select-none">→</span>
            </button>
          </div>
        </div>

        {/* 3 cards deck */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition">
            <div className="space-y-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#C1E929] text-[#C1E929]" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-medium">
                "Help On Hire saved our annual conference. We needed 20 ushers last minute, and they delivered professional, well-dressed staff who knew exactly what to do."
              </p>
            </div>
            
            <div className="flex items-center space-x-3 pt-4 border-t border-zinc-100">
              <div className="h-10 w-10 rounded-full bg-emerald-50 text-[#0A201C] font-bold flex items-center justify-center uppercase shrink-0 text-xs">
                MT
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0A201C]">Marcus Thorne</h4>
                <p className="text-[10px] text-zinc-400 mt-0.5">Operations Director, TechSummit</p>
              </div>
            </div>
          </div>

          {/* Card 2: DARK GREEN HIGHLIGHTED CARD! */}
          <div className="bg-[#051815] text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#11322d_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-35" />
            <div className="relative z-10 space-y-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#C1E929] text-[#C1E929]" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-semibold">
                "The administrative staff provided were top-tier. Highly capable, self-motivated, and fit right into our corporate culture. Definitely our go-to for staffing."
              </p>
            </div>
            
            <div className="relative z-10 flex items-center space-x-3 pt-4 border-t border-emerald-950/40">
              <div className="h-10 w-10 rounded-full bg-[#C1E929] text-[#0A201C] font-bold flex items-center justify-center uppercase shrink-0 text-xs shadow-md shadow-emerald-950/20">
                SJ
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#C1E929]">Sarah Jenkins</h4>
                <p className="text-[10px] text-zinc-400 mt-0.5">HR Manager, Global Logistics</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition">
            <div className="space-y-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#C1E929] text-[#C1E929]" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-medium">
                "A seamless experience from start to finish. The platform is easy to use, and the staff quality is consistently high. Professionalism at its finest."
              </p>
            </div>
            
            <div className="flex items-center space-x-3 pt-4 border-t border-zinc-100">
              <div className="h-10 w-10 rounded-full bg-emerald-50 text-[#0A201C] font-bold flex items-center justify-center uppercase shrink-0 text-xs">
                DC
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0A201C]">David Chen</h4>
                <p className="text-[10px] text-zinc-400 mt-0.5">Founder, Boutique Events</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );

  // Helper helper to modify form state cleanly
  function setFormData(key: keyof CorporateRequestInput, val: any) {
    setFormInput(prev => ({
      ...prev,
      [key]: val
    }));
  }
};
