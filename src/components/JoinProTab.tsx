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

const APPLICATION_RECIPIENT_EMAIL = 'helponhire@gmail.com';

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
      specialty: 'Home Cleaning',
      experienceYears: 2,
      hourlyRate: 0,
      bio: '',
      hasLicense: false,
      backgroundConcent: false
    };
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [deliveryFailed, setDeliveryFailed] = useState(false);
  const [idDragActive, setIdDragActive] = useState(false);
  const [cvDragActive, setCvDragActive] = useState(false);
  const [idFileName, setIdFileName] = useState('');
  const [cvFileName, setCvFileName] = useState('');

  React.useEffect(() => {
    localStorage.setItem('hoh_pro_application_form', JSON.stringify(formData));
  }, [formData]);

  const specialties = [
    { value: 'Home Cleaning' },
    { value: 'Errands & Deliveries' },
    { value: 'Domestic Help' },
    { value: 'Event Staffing' },
    { value: 'Business & Office Support' }
  ];

  const handleSpecialtyChange = (specialtyValue: string) => {
    setFormData({
      ...formData,
      specialty: specialtyValue
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

  const sendApplicationEmail = async () => {
    const response = await fetch(`https://formsubmit.co/ajax/${APPLICATION_RECIPIENT_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: `New Help On Hire Professional Application - ${formData.firstName} ${formData.lastName}`,
        _template: 'table',
        _captcha: 'false',
        submittedTo: APPLICATION_RECIPIENT_EMAIL,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        location: formData.location,
        specialty: formData.specialty,
        experienceYears: formData.experienceYears,
        serviceFee: formData.hourlyRate ? `₦${formData.hourlyRate}` : 'Not specified',
        bio: formData.bio,
        hasLicense: formData.hasLicense ? 'Yes' : 'No',
        backgroundConsent: formData.backgroundConcent ? 'Granted' : 'Not granted',
        governmentIdFileName: idFileName,
        cvFileName,
      }),
    });

    if (!response.ok) {
      throw new Error('Professional application could not be sent.');
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.backgroundConcent) {
      alert('You must provide background check screening authorization to apply.');
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
              Join a team of passionate, hardworking people committed to excellent service. Work independently, earn on your own terms, and do what you are good at. We support you with in-house training, consistent job opportunities, and a platform that connects you directly with clients who need your skills.
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
                    src="/testimonials/chinedu-nwosu.jpg"
                    alt="Active Help On Hire professional in Port Harcourt"
                    className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                  <img
                    src="/testimonials/amaka-okafor.jpg"
                    alt="Active Help On Hire professional in Port Harcourt"
                    className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                  <img
                    src="/testimonials/fatima-musa.jpg"
                    alt="Active Help On Hire professional in Port Harcourt"
                    className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
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
                src="/images/join-our-team%202.jpg"
                alt="Help On Hire team of trusted professionals collaborating"
                className="w-full h-full object-cover rounded-[32px]"
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
                  {formData.hourlyRate ? (
                    <div>• Your Service Fee: <span className="text-[#C1E929] font-medium">₦{formData.hourlyRate}</span></div>
                  ) : null}
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
                  Sending your application details to the Help On Hire regional desk...
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6" id="applicant-wizard-form">
                {deliveryFailed && (
                  <div className="rounded-xl border border-rose-900 bg-rose-950/30 p-4 text-xs text-rose-200">
                    We could not transmit your application right now. Please try again or contact Help On Hire on WhatsApp.
                  </div>
                )}
                
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
                            <option value="Abuloma">Abuloma</option>
                            <option value="Ada George">Ada George</option>
                            <option value="Agip Estate">Agip Estate</option>
                            <option value="Akpajo">Akpajo</option>
                            <option value="Alakahia">Alakahia</option>
                            <option value="Amadi Flats">Amadi Flats</option>
                            <option value="Borokiri">Borokiri</option>
                            <option value="Choba">Choba</option>
                            <option value="D-Line">D-Line</option>
                            <option value="Diobu">Diobu</option>
                            <option value="Elelenwo">Elelenwo</option>
                            <option value="Eleme">Eleme</option>
                            <option value="Eliozu">Eliozu</option>
                            <option value="Eneka">Eneka</option>
                            <option value="GRA Phase I">GRA Phase I</option>
                            <option value="GRA Phase II">GRA Phase II</option>
                            <option value="GRA Phase III">GRA Phase III</option>
                            <option value="GRA Phase IV">GRA Phase IV</option>
                            <option value="Igwuruta">Igwuruta</option>
                            <option value="Iriebe">Iriebe</option>
                            <option value="Iwofe">Iwofe</option>
                            <option value="Marine Base">Marine Base</option>
                            <option value="Mgbuoba">Mgbuoba</option>
                            <option value="Mile 1 (Diobu)">Mile 1 (Diobu)</option>
                            <option value="Mile 2 (Diobu)">Mile 2 (Diobu)</option>
                            <option value="Mile 3 (Diobu)">Mile 3 (Diobu)</option>
                            <option value="Mile 4">Mile 4</option>
                            <option value="Nkpogu">Nkpogu</option>
                            <option value="Nkpolu">Nkpolu</option>
                            <option value="NTA Road">NTA Road</option>
                            <option value="Okrika">Okrika</option>
                            <option value="Old GRA">Old GRA</option>
                            <option value="Onne">Onne</option>
                            <option value="Oyigbo">Oyigbo</option>
                            <option value="Ozuoba">Ozuoba</option>
                            <option value="Peter Odili Road">Peter Odili Road</option>
                            <option value="Rukpokwu">Rukpokwu</option>
                            <option value="Rumuepirikom">Rumuepirikom</option>
                            <option value="Rumuibekwe">Rumuibekwe</option>
                            <option value="Rumuigbo">Rumuigbo</option>
                            <option value="Rumukrushi">Rumukrushi</option>
                            <option value="Rumuodara">Rumuodara</option>
                            <option value="Rumuokoro">Rumuokoro</option>
                            <option value="Rumuokwuta">Rumuokwuta</option>
                            <option value="Rumuola">Rumuola</option>
                            <option value="Rumuomasi">Rumuomasi</option>
                            <option value="Stadium Road">Stadium Road</option>
                            <option value="Trans Amadi">Trans Amadi</option>
                            <option value="Woji">Woji</option>
                            <option value="Other">Other</option>
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
                        <label className="text-[10px] sm:text-[11px] font-bold text-zinc-300 uppercase tracking-wider block mb-2">Service Category</label>
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
                        <label className="text-[10px] sm:text-[11px] font-bold text-[#C1E929] uppercase tracking-wider block mb-2">Your Service Fee (NGN)</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-xs">₦</span>
                          <input
                            type="number"
                            min="0"
                            value={formData.hourlyRate || ''}
                            onChange={(e) => setFormData({ ...formData, hourlyRate: Number(e.target.value) })}
                            placeholder="e.g. 15000"
                            className="w-full rounded-xl bg-transparent border border-zinc-800 text-white placeholder-zinc-600 pl-8 pr-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#C1E929] focus:border-[#C1E929]"
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
              🛡️
            </span>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-[#0A201C] tracking-wide uppercase">Safe Working Conditions</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Every job on our platform is screened before it is assigned. We verify client requests so our providers always work in safe, respectful environments. Your wellbeing matters to us as much as your earnings.
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
                You decide when and where you work. No fixed hours, no pressure. Just pick up jobs that fit your day.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-zinc-50 border border-zinc-150/80 rounded-2xl p-6 text-left flex items-start space-x-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5E7E10]/10 text-[#5E7E10] font-bold text-base">
              💰
            </span>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-[#0A201C] tracking-wide uppercase">Real Economic Opportunity</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Whether you are looking for a side income or a full-time hustle, Help On Hire gives you a steady stream of clients and the platform to grow your earnings.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
