import React, { useState } from 'react';
import { Briefcase, ArrowRight, ShieldCheck, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { WHATSAPP_PHONE_DISPLAY, WHATSAPP_PHONE_TEL, WHATSAPP_URL } from '../constants';
// @ts-ignore
import logoImg from '../logo.jpg';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubsubscribed] = useState(false);
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'refund' | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubsubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 2000);
    }
  };

  return (
    <footer className="bg-zinc-900 text-zinc-400 border-t border-zinc-800" id="main-footer">
      {/* Top Banner section */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 border-b border-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center space-x-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wider">Comprehensive Insurance</h4>
              <p className="text-xs text-zinc-500 mt-0.5">Every booking is backed by our service guarantee.</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <CheckCircle className="h-6 w-6" />
            </span>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wider">Nationwide Background Checks</h4>
              <p className="text-xs text-zinc-500 mt-0.5">Only the top 3% of applicants pass our screening process.</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
              <Briefcase className="h-6 w-6" />
            </span>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wider">Transparent Pricing</h4>
              <p className="text-xs text-zinc-500 mt-0.5">Clear service pricing. No surprise platform fees.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-left">
          {/* Column 1: Brand details */}
          <div className="space-y-4">
            <div className="flex items-center cursor-pointer" onClick={() => setActiveTab('find-pros')}>
              <img src={logoImg} alt="Help On Hire Logo" className="h-10 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-xs leading-relaxed text-zinc-500">
              Trusted professionals for everyday tasks, errands, and business staffing.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('find-pros')} className="hover:text-white text-zinc-500 transition">Home</button>
              </li>
              <li>
                <button onClick={() => setActiveTab('services')} className="hover:text-white text-zinc-500 transition">Services</button>
              </li>
              <li>
                <button onClick={() => {
                  setActiveTab('how-it-works');
                  setTimeout(() => {
                    const el = document.getElementById('how-it-works-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 150);
                }} className="hover:text-white text-zinc-500 transition">How It Works</button>
              </li>
              <li>
                <button onClick={() => setActiveTab('business')} className="hover:text-white text-zinc-500 transition">For Businesses</button>
              </li>
              <li>
                <button onClick={() => setActiveTab('join')} className="hover:text-white text-zinc-500 transition">Become a Professional</button>
              </li>
              <li>
                <button onClick={() => setActiveTab('about')} className="hover:text-white text-zinc-500 transition">About Us</button>
              </li>
              <li>
                <button onClick={() => setActiveTab('contact')} className="hover:text-white text-zinc-500 transition">Contact</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-xs text-zinc-500">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-[#C1E929] shrink-0 mt-0.5" />
                <span>Woji, Portharcourt, Rivers State, Nigeria</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#C1E929] shrink-0" />
                <a href={`tel:${WHATSAPP_PHONE_TEL}`} className="hover:text-white transition">{WHATSAPP_PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#C1E929] shrink-0" />
                <a href="mailto:helponhire@gmail.com" className="hover:text-white transition">helponhire@gmail.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 hover:text-[#C1E929] transition"
                >
                  <span className="text-[10px] uppercase font-extrabold text-[#C1E929] bg-emerald-900/40 px-2 py-0.5 rounded border border-emerald-500/20">WhatsApp</span>
                  <span>Chat with us directly</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Socials</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#C1E929] text-zinc-500 transition block">Instagram</a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#C1E929] text-zinc-500 transition block">Facebook</a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#C1E929] text-zinc-500 transition block">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer text */}
        <div className="mt-16 border-t border-zinc-850 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-650">
          <p>© {new Date().getFullYear()} Help On Hire. Under professional licensing guidelines.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <button onClick={() => setActiveModal('terms')} className="hover:text-[#C1E929] transition cursor-pointer">Terms of Service</button>
            <button onClick={() => setActiveModal('privacy')} className="hover:text-[#C1E929] transition cursor-pointer">Privacy Policy</button>
            <button onClick={() => setActiveModal('refund')} className="hover:text-[#C1E929] transition cursor-pointer">Refund Policy</button>
          </div>
        </div>
      </div>

      {/* Policy Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" id="policy-modal-portal">
          <div className="bg-white text-zinc-850 rounded-3xl max-w-2xl w-full max-h-[80vh] flex flex-col shadow-2xl overflow-hidden border border-zinc-200">
            
            {/* Modal Header */}
            <div className="bg-[#0A201C] text-white px-6 py-5 flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#C1E929]">
                {activeModal === 'privacy' && 'Privacy Policy'}
                {activeModal === 'terms' && 'Terms of Service'}
                {activeModal === 'refund' && 'Refund & Guarantee Policy'}
              </h3>
              <button 
                onClick={() => setActiveModal(null)} 
                className="text-zinc-400 hover:text-white text-xs font-bold uppercase tracking-wider px-3 py-1 bg-white/10 rounded-full transition"
              >
                Close
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4 text-xs text-zinc-650 leading-relaxed max-h-[60vh] text-left">
              {activeModal === 'privacy' && (
                <>
                  <p className="font-bold text-[#0A201C]">Last Updated: June 2026</p>
                  <p>
                    Help On Hire ("we", "us", "our") is dedicated to protecting the personal privacy of clients and workforce professionals who use our platform in Port Harcourt and Rivers State.
                  </p>
                  <h4 className="font-bold text-[#0A201C] uppercase mt-4">1. Information We Collect</h4>
                  <p>
                    We collect personal details including names, contact cell numbers, home/work addresses, background registry information (for workers), and service preferences to ensure seamless coordination.
                  </p>
                  <h4 className="font-bold text-[#0A201C] uppercase mt-4">2. Vetting Data Integrity</h4>
                  <p>
                    For service providers, ID document photographs and CV submissions are stored securely in encrypted storage. Vetting coordinates are checked against local registry archives and are never shared with external parties.
                  </p>
                  <h4 className="font-bold text-[#0A201C] uppercase mt-4">3. Data Sharing</h4>
                  <p>
                    Client locations and service briefs are shared only with the matched professional to facilitate service execution. We do not sell, lease, or rent customer directories to third-party marketing companies.
                  </p>
                </>
              )}

              {activeModal === 'terms' && (
                <>
                  <p className="font-bold text-[#0A201C]">Last Updated: June 2026</p>
                  <p>
                    Welcome to Help On Hire. By accessing our platform to hire service professionals or apply as a worker in Port Harcourt, Nigeria, you agree to comply with the following Terms of Service.
                  </p>
                  <h4 className="font-bold text-[#0A201C] uppercase mt-4">1. Client Responsibilities</h4>
                  <p>
                    Clients must provide a safe environment for matched workers. All booking assignments must be routed directly through Help On Hire. Direct off-platform recruitment of HOH professionals is strictly prohibited.
                  </p>
                  <h4 className="font-bold text-[#0A201C] uppercase mt-4">2. Screening &amp; Quality</h4>
                  <p>
                    While we conduct rigorous criminal background screenings and identity audits, we encourage customers to secure expensive valuables during service delivery.
                  </p>
                  <h4 className="font-bold text-[#0A201C] uppercase mt-4">3. Booking Cancellations</h4>
                  <p>
                    Cancellations made less than 3 hours before the scheduled time slot may attract a scheduling holding fee.
                  </p>
                </>
              )}

              {activeModal === 'refund' && (
                <>
                  <p className="font-bold text-[#0A201C]">Last Updated: June 2026</p>
                  <p>
                    At Help On Hire, client satisfaction is our primary metric. We stand behind the quality of work performed by our matched service providers in Port Harcourt.
                  </p>
                  <h4 className="font-bold text-[#0A201C] uppercase mt-4">1. Satisfaction Guarantee</h4>
                  <p>
                    If you are unsatisfied with the quality of a home cleaning or handyman repair service, notify us within 24 hours. We will dispatch a coordinator to assess the work and, if verified, complete a re-cleaning or correction at no additional charge.
                  </p>
                  <h4 className="font-bold text-[#0A201C] uppercase mt-4">2. Refund Eligibility</h4>
                  <p>
                    Refunds are handled case-by-case. If a booking must be canceled by Help On Hire due to lack of provider availability, any prepayment will be refunded in full.
                  </p>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-zinc-50 border-t border-zinc-100 px-6 py-4 flex justify-end">
              <button 
                onClick={() => setActiveModal(null)}
                className="bg-[#0A201C] hover:bg-emerald-950 text-[#C1E929] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition"
              >
                Understood
              </button>
            </div>

          </div>
        </div>
      )}
    </footer>
  );
};
