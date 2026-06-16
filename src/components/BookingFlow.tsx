import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, Calendar as CalendarIcon, Clock, CheckCircle2, ShieldAlert, Wifi, Sparkles } from 'lucide-react';
import { SERVICES, PROFESSIONALS } from '../data';
import { BookingFormInput, Service, Professional } from '../types';

interface BookingFlowProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialProId?: string;
}

export const BookingFlow: React.FC<BookingFlowProps> = ({ 
  isOpen, 
  onClose, 
  initialServiceId = 'home-cleaning', 
  initialProId 
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string>(initialServiceId);
  const [urgency, setUrgency] = useState<'routine' | 'today' | 'emergency'>('routine');
  const [address, setAddress] = useState('');
  const [details, setDetails] = useState('');
  const [jobSizeHours, setJobSizeHours] = useState(2);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (8:00 AM - 12:00 PM)');
  
  // Contact details
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  // Live matching states
  const [matchingStep, setMatchingStep] = useState(0);
  const [isMatching, setIsMatching] = useState(false);
  const [matchDone, setMatchDone] = useState(false);
  const [assignedPro, setAssignedPro] = useState<Professional | null>(null);

  // Sync state if initial props change
  useEffect(() => {
    if (initialServiceId) setSelectedService(initialServiceId);
  }, [initialServiceId]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep === 1) {
      if (!selectedService) {
        alert('Please choose a service specialty.');
        return;
      }
    }
    if (currentStep === 2) {
      if (!address || !details) {
        alert('Please specify your workspace address and describe job details.');
        return;
      }
    }
    if (currentStep === 3) {
      if (!date) {
        alert('Please select a target booking date.');
        return;
      }
    }
    setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep(prev => prev - 1);
  };

  const startMatchingSimulation = () => {
    if (!clientName || !clientEmail || !clientPhone) {
      alert('Please complete your standard contact coordinates.');
      return;
    }
    
    setIsMatching(true);
    setMatchingStep(1);

    // Dynamic progression loader
    // Step 1: Scanning grid map (lasts 1.5 seconds)
    setTimeout(() => {
      setMatchingStep(2);
    }, 1500);

    // Step 2: Locating matching specialists (lasts 1.5 seconds)
    setTimeout(() => {
      setMatchingStep(3);
    }, 3000);

    // Step 3: Locked optimal match pro (lasts 1.5 seconds)
    setTimeout(() => {
      // Choose pro matching category or initialProId or fall back gracefully
      let candidate = PROFESSIONALS.find(p => p.id === initialProId);
      if (!candidate) {
        const matchingPros = PROFESSIONALS.filter(
          p => p.category === SERVICES.find(s => s.id === selectedService)?.category
        );
        candidate = matchingPros.length > 0 ? matchingPros[0] : PROFESSIONALS[0];
      }
      setAssignedPro(candidate);
      setMatchingStep(4);
    }, 4500);

    // Step 4: Dispatch audit confirmation
    setTimeout(() => {
      setMatchDone(true);
      setIsMatching(false);
    }, 6000);
  };

  const serviceObj = SERVICES.find(s => s.id === selectedService) || SERVICES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" id="booking-modal-overlay">
      
      {/* Dimmed static backdrop */}
      <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm" onClick={onClose} />

      {/* Main card panel */}
      <div className="relative w-full max-w-xl rounded-3xl bg-white shadow-2xl border border-zinc-200 overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-5 bg-zinc-50 shrink-0">
          <div>
            <h2 className="text-base font-bold text-zinc-900 tracking-tight">On-Demand Dispatch Wizard</h2>
            <p className="text-[10px] text-zinc-400 mt-0.5">Secure labor matching pipeline</p>
          </div>
          <button 
            onClick={onClose}
            className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-650"
            aria-label="Close booking modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Live Matching HUD Screen */}
        {isMatching || matchDone ? (
          <div className="p-6 overflow-y-auto flex-1 font-sans" id="live-matching-screen">
            
            {/* 1. Live matching loader HUD */}
            {isMatching && (
              <div className="text-center py-6 space-y-6">
                <div className="relative inline-block">
                  <div className="h-16 w-16 rounded-full border-4 border-indigo-100 border-t-indigo-600 animate-spin" />
                  <span className="absolute inset-4 rounded-full bg-indigo-50 flex items-center justify-center">
                    <Wifi className="h-4.5 w-4.5 text-indigo-600 animate-pulse" />
                  </span>
                </div>

                <div className="max-w-xs mx-auto">
                  <h3 className="text-sm font-extrabold text-zinc-900 tracking-tight uppercase">ACTIVE MATCHING ENGINE</h3>
                  <p className="text-[11px] text-zinc-400 mt-1">Connecting with encrypted local workforce coordinates in real-time...</p>
                </div>

                {/* Simulated Steps Checklist */}
                <div className="space-y-3.5 max-w-sm mx-auto text-left border border-zinc-150 p-4 rounded-2xl bg-zinc-50 text-xs">
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className={`h-2 w-2 rounded-full ${matchingStep >= 1 ? 'bg-indigo-600' : 'bg-zinc-200'}`} />
                      <span className={matchingStep >= 1 ? 'font-bold text-zinc-800' : 'text-zinc-400'}>Scanning regional coordinate grids...</span>
                    </div>
                    {matchingStep > 1 && <span className="text-emerald-500 font-bold">✓</span>}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className={`h-2 w-2 rounded-full ${matchingStep >= 2 ? 'bg-indigo-600' : 'bg-zinc-200'}`} />
                      <span className={matchingStep >= 2 ? 'font-bold text-zinc-800' : 'text-zinc-400'}>Locating on-duty certified pros...</span>
                    </div>
                    {matchingStep > 2 && <span className="text-emerald-400 font-bold">✓</span>}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className={`h-2 w-2 rounded-full ${matchingStep >= 3 ? 'bg-indigo-600' : 'bg-zinc-200'}`} />
                      <span className={matchingStep >= 3 ? 'font-bold text-zinc-800' : 'text-zinc-400'}>Auditing licensure background files...</span>
                    </div>
                    {matchingStep > 3 && <span className="text-emerald-400 font-bold">✓</span>}
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <span className={`h-2 w-2 rounded-full ${matchingStep >= 4 ? 'bg-indigo-600' : 'bg-zinc-200'}`} />
                    <span className={matchingStep >= 4 ? 'font-bold text-zinc-800 animate-pulse' : 'text-zinc-400'}>Confirming standard reservation booking...</span>
                  </div>

                </div>
              </div>
            )}

            {/* 2. Success dispatch card summary */}
            {matchDone && assignedPro && (
              <div className="space-y-6 animate-scale-in" id="match-confirmation-dashboard">
                <div className="text-center">
                  <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto mb-3" />
                  <h3 className="text-base font-extrabold text-zinc-900 tracking-tight">PROFESSIONAL SPECIALIST ASSIGNED!</h3>
                  <p className="text-xs text-zinc-500 mt-1">Your on-demand booking request has been successfully registered.</p>
                </div>

                {/* Vetted Pro Details Profile popup */}
                <div className="rounded-2xl border border-zinc-200 p-4 bg-zinc-50/50 flex items-center space-x-4">
                  <div className="relative">
                    <img 
                      src={assignedPro.avatar} 
                      alt={assignedPro.name} 
                      className="h-14 w-14 rounded-xl object-cover border border-zinc-100"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-wider text-indigo-600">Matched Specialist</span>
                    <h4 className="text-sm font-extrabold text-zinc-900 leading-tight">{assignedPro.name}</h4>
                    <p className="text-[10px] text-zinc-500 mt-0.5">{assignedPro.role} ({assignedPro.rating}★)</p>
                  </div>
                </div>

                {/* Shift receipt credentials metrics */}
                <div className="border border-zinc-150 rounded-2xl p-4 space-y-2.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-zinc-400 font-semibold">Service Scheduled:</span>
                    <span className="font-bold text-zinc-900">{serviceObj.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400 font-semibold">Scheduled Date:</span>
                    <span className="font-bold text-zinc-900">{date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400 font-semibold">Scheduled Hours:</span>
                    <span className="font-bold text-zinc-900">{jobSizeHours} Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400 font-semibold">Target Time Window:</span>
                    <span className="font-bold text-zinc-900">{timeSlot}</span>
                  </div>
                  <div className="flex justify-between border-t border-zinc-150 pt-2.5 text-[11px] font-bold">
                    <span className="text-zinc-500">Estimated Total Rate:</span>
                    <span className="text-zinc-900">₦{(assignedPro.hourlyRate * jobSizeHours).toLocaleString()}</span>
                  </div>
                </div>

                {/* Guard disclaimer and close button */}
                <div className="rounded-xl bg-indigo-50 p-4 border border-indigo-100 flex items-start space-x-2.5 text-[10px] text-indigo-800 leading-relaxed">
                  <ShieldAlert className="h-4.5 w-4.5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold uppercase block mb-0.5">Flexible 24-Hr Cancellation</span>
                    Cancellations processed up to 24 hours prior to standard dispatch are 100% refunded. Standard matching support is covered under policies.
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <button
                    onClick={() => {
                      setMatchDone(false);
                      setCurrentStep(1);
                      onClose();
                    }}
                    className="w-full rounded-xl bg-zinc-900 hover:bg-indigo-600 py-3 text-xs font-bold text-white shadow"
                    id="finish-booking-btn"
                  >
                    Close Dispatch Screen
                  </button>
                </div>
              </div>
            )}

          </div>
        ) : (
          /* Multi-step standard booking forms steps */
          <div className="flex-1 overflow-y-auto p-6" id="wizard-form-steps">
            
            {/* Form steps */}
            {currentStep === 1 && (
              <div className="space-y-5 animate-fade-in">
                <div>
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-2">Step 1: Choose Service &amp; Urgency</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full rounded-xl bg-zinc-50 border border-zinc-200 px-3.5 py-3 text-xs text-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    id="booking-service-selector"
                  >
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.id}>{s.name} (Estimated ₦{s.basePrice}/{s.unit})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-2">Urgency Level Desired</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: 'routine', title: 'Routine Care', desc: 'Standard next-day matching', markup: 'Regular Rate' },
                      { id: 'today', title: 'Schedule Today', desc: 'Matched within 4 hours', markup: 'Regular Rate' },
                      { id: 'emergency', title: 'Emergency ASAP', desc: 'Matched within 2 hours', markup: '+25% Dispatch charge' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setUrgency(item.id as any)}
                        className={`text-left p-3.5 rounded-xl border transition-all ${
                          urgency === item.id
                            ? 'border-indigo-600 bg-indigo-50/50 text-indigo-700 shadow-sm'
                            : 'border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-650'
                        }`}
                      >
                        <span className="text-xs font-bold block">{item.title}</span>
                        <span className="text-[10px] text-zinc-500 mt-1 block leading-tight">{item.desc}</span>
                        <span className="text-[9px] font-bold uppercase mt-2 block text-indigo-600">{item.markup}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-zinc-100">
                  <button
                    onClick={handleNext}
                    className="rounded-xl bg-indigo-600 hover:bg-slate-900 px-5 py-3 text-xs font-bold text-white transition flex items-center space-x-1.5"
                  >
                    <span>Continue to Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-5 animate-fade-in">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Step 2: Workspace Address &amp; Brief</label>
                
                <div>
                  <label className="text-[10px] font-bold text-zinc-500 block mb-1">Service Dispatch Address *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 520 Mission St, San Francisco, CA"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full rounded-xl bg-zinc-50 border border-zinc-200 px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-zinc-500 block mb-1">Special instructions or project details *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us what you need. (e.g., deep vacuum dust under beds, assemble 3 Ikea chairs, clean bar counters, install wifi networking routing...)"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full rounded-xl bg-zinc-50 border border-zinc-200 px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[10px] font-bold text-zinc-500">Estimated Project Size / Hours</label>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-lg">{jobSizeHours} Hours</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    step="1"
                    value={jobSizeHours}
                    onChange={(e) => setJobSizeHours(Number(e.target.value))}
                    className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <div className="flex justify-between text-[9px] text-zinc-400 font-semibold mt-1">
                    <span>1 hour (Quick task)</span>
                    <span>12 hours (Comprehensive block)</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-zinc-100">
                  <button
                    onClick={handlePrev}
                    className="rounded-xl border border-zinc-200 hover:bg-zinc-50 px-4 py-2.5 text-xs font-semibold text-zinc-650 transition flex items-center space-x-1.5"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={handleNext}
                    className="rounded-xl bg-indigo-600 hover:bg-slate-900 px-5 py-3 text-xs font-bold text-white transition flex items-center space-x-1.5"
                  >
                    <span>Continue to Schedule</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-5 animate-fade-in">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Step 3: Scheduling Date &amp; Time Slot</label>

                <div>
                  <label className="text-[10px] font-bold text-zinc-500 block mb-1">Target dispatch date *</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400">
                      <CalendarIcon className="h-4 w-4" />
                    </span>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded-xl bg-zinc-50 border border-zinc-200 pl-10 pr-4 py-2.5 text-xs text-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-zinc-500 block mb-1">Target arrival window</label>
                  <div className="space-y-2">
                    {[
                      'Morning (8:00 AM - 12:00 PM)',
                      'Afternoon (12:00 PM - 4:00 PM)',
                      'Evening (4:00 PM - 8:00 PM)'
                    ].map((slot) => (
                      <label 
                        key={slot} 
                        className={`flex items-center space-x-3 text-xs text-zinc-750 cursor-pointer border px-4 py-3 rounded-xl transition ${
                          timeSlot === slot ? 'border-indigo-600 bg-indigo-50/20' : 'border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="timeSlot"
                          checked={timeSlot === slot}
                          onChange={() => setTimeSlot(slot)}
                          className="h-4.5 w-4.5 accent-indigo-600"
                        />
                        <span className="font-semibold">{slot}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-zinc-100">
                  <button
                    onClick={handlePrev}
                    className="rounded-xl border border-zinc-200 hover:bg-zinc-50 px-4 py-2.5 text-xs font-semibold text-zinc-650 transition flex items-center space-x-1.5"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={handleNext}
                    className="rounded-xl bg-indigo-600 hover:bg-slate-900 px-5 py-3 text-xs font-bold text-white transition flex items-center space-x-1.5"
                  >
                    <span>Continue to Contact</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-5 animate-fade-in">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Step 4: Confirm Contact Credentials</label>

                <div className="space-y-3.5">
                  <div>
                    <label className="text-[10px] font-bold text-zinc-500 block mb-1">Contact Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Julianne Miller"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full rounded-xl bg-zinc-50 border border-zinc-200 px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-zinc-500 block mb-1">Contact Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. jmiller@test.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full rounded-xl bg-zinc-50 border border-zinc-200 px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-zinc-500 block mb-1">Contact Cell Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (555) 018-2938"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full rounded-xl bg-zinc-50 border border-zinc-200 px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-zinc-100">
                  <button
                    onClick={handlePrev}
                    className="rounded-xl border border-zinc-200 hover:bg-zinc-50 px-4 py-2.5 text-xs font-semibold text-zinc-650 transition flex items-center space-x-1.5"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={startMatchingSimulation}
                    className="rounded-xl bg-indigo-600 hover:bg-slate-900 px-5 py-3 text-xs font-bold text-white transition flex items-center space-x-1.5"
                    id="trigger-live-match-btn"
                  >
                    <span>Match with Local Pro</span>
                    <Sparkles className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
