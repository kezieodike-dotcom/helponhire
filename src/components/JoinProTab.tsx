import React, { useState } from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  Smartphone, 
  DollarSign, 
  ArrowRight, 
  ArrowLeft, 
  Upload, 
  CheckCircle2, 
  ListTodo, 
  AlertCircle,
  Clock,
  Sparkles,
  ShoppingBag,
  Wrench,
  ChevronDown
} from 'lucide-react';
import { ProApplicationInput } from '../types';

export const JoinProTab: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ProApplicationInput>(() => {
    const saved = localStorage.getItem('hoh_pro_application_form');
    return saved ? JSON.parse(saved) : {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: 'Port Harcourt',
      location: '',
      specialty: 'Eco-Friendly Home Cleaning',
      experienceYears: 2,
      hourlyRate: 35,
      bio: '',
      hasLicense: false,
      backgroundConcent: false
    };
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [idDragActive, setIdDragActive] = useState(false);
  const [cvDragActive, setCvDragActive] = useState(false);
  const [idFileName, setIdFileName] = useState('');
  const [cvFileName, setCvFileName] = useState('');

  React.useEffect(() => {
    localStorage.setItem('hoh_pro_application_form', JSON.stringify(formData));
  }, [formData]);

  const specialties = [
    { value: 'Eco-Friendly Home Cleaning', defaultRate: 35 },
    { value: 'Smart Handyman Repairs', defaultRate: 55 },
    { value: 'Executive Office Staffing', defaultRate: 28 },
    { value: 'On-Site Network & IT Support', defaultRate: 75 },
    { value: 'Premium Event Bartending & Service', defaultRate: 40 },
    { value: 'High-Impact Brand Design', defaultRate: 65 }
  ];

  const handleSpecialtyChange = (specialtyValue: string) => {
    const selected = specialties.find(s => s.value === specialtyValue);
    setFormData({
      ...formData,
      specialty: specialtyValue,
      hourlyRate: selected ? selected.defaultRate : 30
    });
  };

  const handleIdDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIdDragActive(true);
    } else if (e.type === "dragleave") {
      setIdDragActive(false);
    }
  };

  const handleIdDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIdDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setIdFileName(e.dataTransfer.files[0].name);
    }
  };

  const handleCvDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setCvDragActive(true);
    } else if (e.type === "dragleave") {
      setCvDragActive(false);
    }
  };

  const handleCvDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCvDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setCvFileName(e.dataTransfer.files[0].name);
    }
  };

  const handleIdFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIdFileName(e.target.files[0].name);
    }
  };

  const handleCvFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFileName(e.target.files[0].name);
    }
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.location) {
        alert('Please fill out all personal contact and location fields.');
        return;
      }
    }
    if (currentStep === 2) {
      if (!formData.bio || formData.experienceYears <= 0) {
        alert('Please describe your professional background and specify years of training.');
        return;
      }
      if (!idFileName || !cvFileName) {
        alert('Please upload both your Government ID and your CV/Resume for vetting.');
        return;
      }
    }
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.backgroundConcent) {
      alert('You must provide background check screening authorization to apply.');
      return;
    }
    setIsSubmitting(true);
    // Simulate safety auditing checks
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      localStorage.removeItem('hoh_pro_application_form');
    }, 2500);
  };

  const startFormScroller = () => {
    const el = document.getElementById('wizard-form-card');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="bg-[#FAFBF8] text-zinc-900 font-sans min-h-screen flex flex-col" id="pro-join-view">
      
      {/* ========================================================= */}
      {/* SECTION 01 — HERO (Join Our Team of Trusted Professionals) */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 mt-4 w-full" id="pro-hero-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column Content details */}
          <div className="space-y-6 text-left">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#5E7E10] bg-[#5E7E10]/10 px-3 py-1 rounded-full border border-[#5E7E10]/20">
              CAREER OPPORTUNITIES
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0A201C] mb-6 leading-[1.1]">
              Join Our Team of<br />
              <span className="text-[#5E7E10] italic font-serif">Trusted Professionals</span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-500 max-w-lg leading-relaxed">
              Build your independent career with a brand that values excellence. We connect top-tier cleaning and maintenance professionals with high-end residential and commercial clients.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4">
              <button
                onClick={startFormScroller}
                className="rounded-full bg-[#0A201C] hover:bg-[#12312b] text-white px-7 py-4 text-xs font-bold uppercase tracking-widest transition duration-200 flex items-center space-x-2.5 w-fit shadow-md shadow-[#0A201C]/10"
                id="hero-start-application-btn"
              >
                <span>Start Application</span>
                <ArrowRight className="h-4.5 w-4.5 text-white" />
              </button>
              
              {/* Overlapping Avatars & Counts */}
              <div className="flex items-center space-x-3.5">
                <div className="flex -space-x-3.5">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" 
                    alt="Active professional partner Sarah" 
                    className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" 
                    alt="Active professional partner Marcus" 
                    className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" 
                    alt="Active professional partner Elena" 
                    className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#0A201C] uppercase tracking-wider leading-none">500+ Active Pros</span>
                  <span className="text-[10px] text-zinc-400 mt-1 block">Vetted, active regional partners</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column layout Matching the Cleano mock */}
          <div className="relative">
            {/* Main polished collage/illustration */}
            <div className="rounded-[40px] overflow-hidden shadow-2xl border border-zinc-200/80 aspect-[1.15/1] relative group bg-white p-2">
              <img 
                src="https://images.unsplash.com/photo-1581577461913-8eed083cc4d1?auto=format&fit=crop&q=80&w=700" 
                alt="Help On Hire Professional Technician Curating Space" 
                className="w-full h-full object-cover rounded-[32px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 02 — THE ONBOARDING PROCESS STEPPING LINE          */}
      {/* ========================================================= */}
      <section className="bg-zinc-100/50 py-20 px-4 sm:px-6 lg:px-8 border-y border-zinc-200" id="onboarding-steps-section">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A201C] tracking-tight">Our Onboarding Process</h2>
            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
              Becoming a Help On Hire professional is a mark of quality. Here is how you get started.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Block Step 1 */}
            <div className="bg-white rounded-2xl border border-zinc-200/80 p-7 shadow-sm hover:translate-y-[-2px] transition duration-200 text-left flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5E7E10] text-white font-extrabold text-xs">
                  1
                </span>
                <h3 className="text-base font-bold text-[#0A201C] tracking-tight">Application</h3>
                <p className="text-xs text-zinc-550 leading-relaxed">
                  Submit your professional history, skills, and references through our secure portal.
                </p>
              </div>
            </div>

            {/* Block Step 2 */}
            <div className="bg-white rounded-2xl border border-zinc-200/80 p-7 shadow-sm hover:translate-y-[-2px] transition duration-200 text-left flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5E7E10] text-white font-extrabold text-xs">
                  2
                </span>
                <h3 className="text-base font-bold text-[#0A201C] tracking-tight">Vetting</h3>
                <p className="text-xs text-zinc-550 leading-relaxed">
                  Our team performs thorough background checks and interview screenings to ensure quality.
                </p>
              </div>
            </div>

            {/* Block Step 3 */}
            <div className="bg-white rounded-2xl border border-zinc-200/80 p-7 shadow-sm hover:translate-y-[-2px] transition duration-200 text-left flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5E7E10] text-white font-extrabold text-xs">
                  3
                </span>
                <h3 className="text-base font-bold text-[#0A201C] tracking-tight">Training</h3>
                <p className="text-xs text-zinc-550 leading-relaxed">
                  Complete our specialized service training to align with our premium brand standards.
                </p>
              </div>
            </div>

            {/* Block Step 4 */}
            <div className="bg-white rounded-2xl border border-[#C1E929]/50 p-7 shadow-sm hover:translate-y-[-2px] transition duration-200 text-left bg-gradient-to-br from-white to-[#C1E929]/5 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5E7E10] text-white font-extrabold text-xs">
                  4
                </span>
                <h3 className="text-base font-bold text-[#0A201C] tracking-tight">Live</h3>
                <p className="text-xs text-zinc-550 leading-relaxed">
                  Start receiving service requests and build your reputation with high-value clients.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 03 — INTERACTIVE DUSTY BLACK/FOREST APPLICATION FORM */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-4xl px-4 py-24 w-full" id="application-form-section">
        
        {/* Main nested block inside a deep dark forest card */}
        <div 
          className="bg-[#051815] text-white rounded-[40px] p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-white/5"
          id="wizard-form-card"
        >
          {/* Subtle decoration dots in corners */}
          <div className="absolute inset-0 bg-[radial-gradient(#11322d_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-35" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-950/20 rounded-full blur-3xl filter -translate-y-24 translate-x-24" />

          <div className="relative z-10">
            {/* Header step progress coordinates */}
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-6 mb-8">
              <div className="flex items-center space-x-3 text-xs font-bold font-mono tracking-widest text-[#C1E929]">
                <span className={currentStep >= 1 ? 'text-[#C1E929]' : 'text-zinc-600'}>1</span>
                <span className="text-zinc-700">—</span>
                <span className={currentStep >= 2 ? 'text-[#C1E929]' : 'text-zinc-600'}>2</span>
                <span className="text-zinc-700">—</span>
                <span className={currentStep >= 3 ? 'text-[#C1E929]' : 'text-zinc-600'}>3</span>
              </div>
              
              <span className="text-xs font-bold uppercase tracking-wider text-[#C1E929]">
                {currentStep === 1 && "Personal Details"}
                {currentStep === 2 && "Qualifications & specialty"}
                {currentStep === 3 && "Vetting & Authorization"}
              </span>
            </div>

            {submitted ? (
              <div className="text-center py-16 px-4 space-y-6" id="applicant-onboarding-success">
                <div className="h-16 w-16 bg-[#C1E929] rounded-full flex items-center justify-center mx-auto shadow-lg shadow-[#C1E929]/10">
                  <CheckCircle2 className="h-8 w-8 text-[#031513]" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-extrabold tracking-tight">Application Transmitted!</h2>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-[#C1E929]">{formData.firstName}</span>. Our Regional Desk compliance team logged your background audits. We will message your contact cell within <span className="font-bold text-[#C1E929]">1-2 business days</span>.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-emerald-950/40 rounded-2xl border border-emerald-900/30 text-left max-w-sm mx-auto text-xs space-y-2">
                  <span className="font-bold text-zinc-150 uppercase tracking-widest block mb-2 text-[10px]">Your Profile Summary:</span>
                  <div>• Category Focus: <span className="text-[#C1E929] font-medium">{formData.specialty}</span></div>
                  <div>• Target Hourly: <span className="text-[#C1E929] font-medium">₦{formData.hourlyRate}/hr</span></div>
                  <div>• Vetting Authorization: <span className="text-emerald-400 font-bold">Granted</span></div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setCurrentStep(1);
                    setSubmitted(false);
                    localStorage.removeItem('hoh_pro_application_form');
                  }}
                  className="rounded-full border border-zinc-750 hover:bg-white/5 py-2.5 px-6 text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  Apply Again
                </button>
              </div>
            ) : isSubmitting ? (
              <div className="text-center py-20 space-y-6" id="applicant-submitting-loader">
                <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-[#C1E929] border-t-transparent mb-4" />
                <h3 className="text-base font-bold text-white uppercase tracking-wider">Screening Database Integrity</h3>
                <p className="text-xs text-zinc-400 max-w-xs mx-auto leading-relaxed">
                  Connecting to secure background verification routers and saving professional coordinates safety files...
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6" id="applicant-wizard-form">
                
                {/* ==================== STEP 1 ==================== */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fade-in text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] sm:text-[11px] font-bold text-zinc-300 uppercase tracking-wider block mb-2">First Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="John"
                          className="w-full rounded-xl bg-transparent border border-zinc-800 text-white placeholder-zinc-600 px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#C1E929] focus:border-[#C1E929]"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] sm:text-[11px] font-bold text-zinc-300 uppercase tracking-wider block mb-2">Last Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="Doe"
                          className="w-full rounded-xl bg-transparent border border-zinc-800 text-white placeholder-zinc-600 px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#C1E929] focus:border-[#C1E929]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] sm:text-[11px] font-bold text-zinc-300 uppercase tracking-wider block mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full rounded-xl bg-transparent border border-zinc-800 text-white placeholder-zinc-600 px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#C1E929] focus:border-[#C1E929]"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] sm:text-[11px] font-bold text-zinc-300 uppercase tracking-wider block mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+234 812 345 6789"
                          className="w-full rounded-xl bg-transparent border border-zinc-800 text-white placeholder-zinc-600 px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#C1E929] focus:border-[#C1E929]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] sm:text-[11px] font-bold text-zinc-300 uppercase tracking-wider block mb-2">City</label>
                        <input
                          type="text"
                          disabled
                          value="Port Harcourt"
                          className="w-full rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-500 px-4 py-3 text-xs cursor-not-allowed"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] sm:text-[11px] font-bold text-[#C1E929] uppercase tracking-wider block mb-2">Specific Neighborhood / Area *</label>
                        <div className="relative">
                          <select
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            required
                            className="w-full rounded-xl bg-[#031513] border border-zinc-800 text-white px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#C1E929] focus:border-[#C1E929] appearance-none cursor-pointer"
                          >
                            <option value="">Select neighborhood...</option>
                            <option value="GRA Phase I">GRA Phase I</option>
                            <option value="GRA Phase II">GRA Phase II</option>
                            <option value="Rumuola">Rumuola</option>
                            <option value="D-Line">D-Line</option>
                            <option value="Elelenwo">Elelenwo</option>
                            <option value="Trans Amadi">Trans Amadi</option>
                            <option value="Rumuokwuta">Rumuokwuta</option>
                            <option value="Eliozu">Eliozu</option>
                            <option value="Ada George">Ada George</option>
                            <option value="Peter Odili Road">Peter Odili Road</option>
                          </select>
                          <ChevronDown className="h-4 w-4 absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-zinc-800 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="rounded-full bg-[#5E7E10] hover:bg-[#6c8e1a] text-white px-7 py-3 text-xs font-bold uppercase tracking-wider transition"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                )}

                {/* ==================== STEP 2 ==================== */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fade-in text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] sm:text-[11px] font-bold text-zinc-300 uppercase tracking-wider block mb-2">Labor Specialty Category</label>
                        <div className="relative">
                          <select
                            value={formData.specialty}
                            onChange={(e) => handleSpecialtyChange(e.target.value)}
                            className="w-full rounded-xl bg-[#031513] border border-zinc-800 text-white px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#C1E929] focus:border-[#C1E929] appearance-none cursor-pointer"
                          >
                            {specialties.map((s, idx) => (
                              <option key={idx} value={s.value} className="bg-[#031513]">
                                {s.value}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="h-4 w-4 absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
                        </div>
                      </div>
                      <div>
                        <label className="text-[10px] sm:text-[11px] font-bold text-[#C1E929] uppercase tracking-wider block mb-2">Hourly Target Rate (NGN)</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-xs">₦</span>
                          <input
                            type="number"
                            min="15"
                            max="250"
                            value={formData.hourlyRate}
                            onChange={(e) => setFormData({ ...formData, hourlyRate: Number(e.target.value) })}
                            className="w-full rounded-xl bg-transparent border border-zinc-800 text-white pl-8 pr-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#C1E929] focus:border-[#C1E929]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] sm:text-[11px] font-bold text-zinc-300 uppercase tracking-wider block mb-2">Total Years of Experience</label>
                        <input
                          type="number"
                          min="1"
                          max="40"
                          value={formData.experienceYears}
                          onChange={(e) => setFormData({ ...formData, experienceYears: Number(e.target.value) })}
                          className="w-full rounded-xl bg-transparent border border-zinc-800 text-white px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#C1E929] focus:border-[#C1E929]"
                        />
                      </div>
                      <div className="flex items-center">
                        <label className="flex items-center space-x-3 text-xs font-bold text-zinc-300 select-none cursor-pointer p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/20 w-full">
                          <input
                            type="checkbox"
                            checked={formData.hasLicense}
                            onChange={(e) => setFormData({ ...formData, hasLicense: e.target.checked })}
                            className="h-4.5 w-4.5 rounded border-zinc-800 accent-[#C1E929] bg-transparent"
                          />
                          <span>I hold active permits / credentials</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] sm:text-[11px] font-bold text-zinc-300 uppercase tracking-wider block mb-2">Brief Bio / Credentials description</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.bio}
                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                        placeholder="Highlight details of your prior assignments, certifications or specialist positions..."
                        className="w-full rounded-xl bg-transparent border border-zinc-800 text-white placeholder-zinc-700 px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#C1E929] focus:border-[#C1E929]"
                      />
                    </div>

                    {/* Dual file uploads required for vetting */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Government ID Upload */}
                      <div>
                        <label className="text-[10px] sm:text-[11px] font-bold text-zinc-300 uppercase tracking-wider block mb-2">Government Issued ID *</label>
                        <div 
                          onDragEnter={handleIdDrag}
                          onDragOver={handleIdDrag}
                          onDragLeave={handleIdDrag}
                          onDrop={handleIdDrop}
                          className={`border border-dashed rounded-xl p-5 text-center cursor-pointer transition ${
                            idDragActive 
                              ? 'border-[#C1E929] bg-white/5' 
                              : idFileName 
                              ? 'border-emerald-500 bg-white/5' 
                              : 'border-zinc-800 hover:border-zinc-700 hover:bg-white/5'
                          }`}
                        >
                          <input
                            type="file"
                            id="government-id-upload"
                            onChange={handleIdFileChange}
                            accept="image/*,.pdf"
                            className="hidden"
                          />
                          <label htmlFor="government-id-upload" className="cursor-pointer block text-center">
                            {idFileName ? (
                              <div className="space-y-1">
                                <span className="text-xs font-semibold text-[#C1E929] block">✓ Selected: {idFileName}</span>
                                <span className="text-[10px] text-zinc-400 block">Click to change ID document</span>
                              </div>
                            ) : (
                              <div className="space-y-1">
                                <span className="text-xs font-semibold text-zinc-200 block">Drag &amp; drop Government ID</span>
                                <span className="text-[10px] text-zinc-550 block">National ID card, Driver's License or Passport</span>
                              </div>
                            )}
                          </label>
                        </div>
                      </div>

                      {/* CV / Resume Upload */}
                      <div>
                        <label className="text-[10px] sm:text-[11px] font-bold text-zinc-300 uppercase tracking-wider block mb-2">Curriculum Vitae (CV) *</label>
                        <div 
                          onDragEnter={handleCvDrag}
                          onDragOver={handleCvDrag}
                          onDragLeave={handleCvDrag}
                          onDrop={handleCvDrop}
                          className={`border border-dashed rounded-xl p-5 text-center cursor-pointer transition ${
                            cvDragActive 
                              ? 'border-[#C1E929] bg-white/5' 
                              : cvFileName 
                              ? 'border-emerald-500 bg-white/5' 
                              : 'border-zinc-800 hover:border-zinc-700 hover:bg-white/5'
                          }`}
                        >
                          <input
                            type="file"
                            id="cv-resume-upload"
                            onChange={handleCvFileChange}
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                          />
                          <label htmlFor="cv-resume-upload" className="cursor-pointer block text-center">
                            {cvFileName ? (
                              <div className="space-y-1">
                                <span className="text-xs font-semibold text-[#C1E929] block">✓ Selected: {cvFileName}</span>
                                <span className="text-[10px] text-zinc-400 block">Click to change CV file</span>
                              </div>
                            ) : (
                              <div className="space-y-1">
                                <span className="text-xs font-semibold text-zinc-200 block">Drag &amp; drop CV / Resume</span>
                                <span className="text-[10px] text-zinc-550 block">PDF or Word format (under 10MB)</span>
                              </div>
                            )}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-zinc-800 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition flex items-center space-x-1"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="rounded-full bg-[#5E7E10] hover:bg-[#6c8e1a] text-white px-7 py-3 text-xs font-bold uppercase tracking-wider transition"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                )}

                {/* ==================== STEP 3 ==================== */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-fade-in text-left">
                    <div className="rounded-xl border border-rose-950 bg-rose-950/20 p-4 text-xs space-y-2 text-rose-200">
                      <div className="flex items-center space-x-2 text-rose-300 font-bold uppercase tracking-wider text-[10px]">
                        <AlertCircle className="h-4 w-4" />
                        <span>Auditing Compliance Notice</span>
                      </div>
                      <p className="leading-relaxed text-zinc-400">
                        Help On Hire recruits trusted, elite specialists. In conformance with safety regulations, you authorize municipal criminal registry inspections prior to match assignments.
                      </p>
                    </div>

                    <div>
                      <label className="flex items-start space-x-3.5 text-xs text-zinc-350 select-none cursor-pointer border border-zinc-800 hover:bg-white/5 p-4 rounded-xl">
                        <input
                          type="checkbox"
                          required
                          checked={formData.backgroundConcent}
                          onChange={(e) => setFormData({ ...formData, backgroundConcent: e.target.checked })}
                          className="h-5 w-5 rounded border-zinc-800 accent-[#C1E929] mt-0.5 shrink-0"
                        />
                        <div>
                          <span className="font-bold text-white block mb-0.5">I authorize background vetting checks *</span>
                          <span className="text-[11px] text-zinc-400 leading-normal block">I consent to criminal record screening, qualification references, and safety identity checklist audits.</span>
                        </div>
                      </label>
                    </div>

                    {/* Banking routing Optional inputs */}
                    <div className="bg-[#031513] border border-zinc-800 rounded-xl p-5 space-y-4">
                      <span className="text-[10px] uppercase font-bold text-[#C1E929] tracking-widest block">Secure Payout Accounts (Optional)</span>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] font-bold text-zinc-400 block mb-1">Bank Routing Routing Number</label>
                          <input 
                            type="text" 
                            placeholder="021000021" 
                            maxLength={9}
                            className="w-full rounded-xl bg-transparent border border-zinc-800 text-white placeholder-zinc-700 px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#C1E929]"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-zinc-400 block mb-1">Checking Account Number</label>
                          <input 
                            type="password" 
                            placeholder="*************" 
                            className="w-full rounded-xl bg-transparent border border-zinc-800 text-white placeholder-zinc-700 px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#C1E929]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-zinc-800 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition flex items-center space-x-1"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        className="rounded-full bg-[#5E7E10] hover:bg-[#6c8e1a] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition shadow-lg shadow-emerald-950/20"
                      >
                        Submit Application
                      </button>
                    </div>
                  </div>
                )}

              </form>
            )}

          </div>
        </div>

      </section>

      {/* ========================================================= */}
      {/* SECTION 04 — CORE VALUES / UNIQUE VALUE PROPOSITIONS      */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 w-full" id="pro-features-deck">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-zinc-50 border border-zinc-150/80 rounded-2xl p-6 text-left flex items-start space-x-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5E7E10]/10 text-[#5E7E10] font-bold text-base">
              💰
            </span>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-[#0A201C] tracking-wide uppercase">Competitive Payouts</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Industry-leading rates with weekly payouts and full transparency. Keep 100% of your pointers.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-zinc-50 border border-zinc-150/80 rounded-2xl p-6 text-left flex items-start space-x-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5E7E10]/10 text-[#5E7E10] font-bold text-base">
              ⏰
            </span>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-[#0A201C] tracking-wide uppercase">Flexible Schedule</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                You decide when and where you work. Full control over calendar schedules via our pro dispatch app.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-zinc-50 border border-zinc-150/80 rounded-2xl p-6 text-left flex items-start space-x-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5E7E10]/10 text-[#5E7E10] font-bold text-base">
              🛡️
            </span>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-[#0A201C] tracking-wide uppercase">Insurance &amp; Safety</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Every job is covered by our comprehensive professional liability insurance. Safety is our guarantee.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
