import React, { useState } from 'react';
import { CheckCircle, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { WHATSAPP_PHONE_DISPLAY, WHATSAPP_PHONE_TEL, WHATSAPP_URL } from '../constants';
// @ts-ignore
import logoImg from '../logo.jpg';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'refund' | null>(null);

  return (
    <footer className="bg-zinc-900 text-zinc-400 border-t border-zinc-800" id="main-footer">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 border-b border-zinc-800">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <FooterTrust title="Recruited With Care" copy="Home Support Professionals are recruited, oriented, trained, and assessed before deployment." icon={<ShieldCheck className="h-6 w-6" />} />
          <FooterTrust title="Home Support That Cares" copy="We care about your home, your life, and the experience we create." icon={<CheckCircle className="h-6 w-6" />} />
          <FooterTrust title="Clear Assessment" copy="Final quotations are based on scope, home size, frequency, and household requirements." icon={<ShieldCheck className="h-6 w-6" />} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 text-left sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <button className="inline-flex rounded-xl bg-white px-4 py-3 shadow-sm transition hover:bg-zinc-100 active:translate-y-[1px]" onClick={() => setActiveTab('find-pros')} aria-label="Go to Help On Hire home">
              <img src={logoImg} alt="Help On Hire Logo" className="h-10 w-auto object-contain" />
            </button>
            <p className="text-sm leading-relaxed text-zinc-500">
              Home Support That Cares. Easing your burden so you can make room for the life you want.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <FooterLink onClick={() => setActiveTab('find-pros')}>Home</FooterLink>
              <FooterLink onClick={() => setActiveTab('services')}>Services</FooterLink>
              <FooterLink onClick={() => setActiveTab('how-it-works')}>How It Works</FooterLink>
              <FooterLink onClick={() => setActiveTab('about')}>About Us</FooterLink>
              <FooterLink onClick={() => setActiveTab('join')}>Become a Home Support Professional</FooterLink>
              <FooterLink onClick={() => setActiveTab('contact')}>Contact</FooterLink>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#12A33B] shrink-0 mt-0.5" />
                <span>Woji, Port Harcourt, Rivers State, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#12A33B] shrink-0" />
                <a href={`tel:${WHATSAPP_PHONE_TEL}`} className="hover:text-white transition">{WHATSAPP_PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#12A33B] shrink-0" />
                <a href="mailto:helponhire@gmail.com" className="hover:text-white transition">helponhire@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Start</h3>
            <button
              onClick={() => setActiveTab('request-service')}
              className="block rounded-full bg-[#12A33B] px-5 py-3 text-center text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#0f8f34]"
            >
              Book Home Support
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="block rounded-full border border-zinc-700 px-5 py-3 text-center text-xs font-bold uppercase tracking-widest text-zinc-200 transition hover:border-[#12A33B] hover:text-white"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-zinc-800 pt-8 text-sm text-zinc-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Help On Hire Services Int&apos;l. All rights reserved.</p>
          <div className="mt-4 flex gap-6 sm:mt-0">
            <button onClick={() => setActiveModal('terms')} className="hover:text-[#12A33B] transition">Terms of Service</button>
            <button onClick={() => setActiveModal('privacy')} className="hover:text-[#12A33B] transition">Privacy Policy</button>
            <button onClick={() => setActiveModal('refund')} className="hover:text-[#12A33B] transition">Service Policy</button>
          </div>
        </div>
      </div>

      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" id="policy-modal-portal">
          <div className="flex max-h-[80vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white text-zinc-850 shadow-2xl">
            <div className="flex items-center justify-between bg-[#08221c] px-6 py-5 text-white">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#D8C690]">
                {activeModal === 'privacy' && 'Privacy Policy'}
                {activeModal === 'terms' && 'Terms of Service'}
                {activeModal === 'refund' && 'Service Policy'}
              </h3>
              <button onClick={() => setActiveModal(null)} className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-zinc-300 transition hover:text-white">
                Close
              </button>
            </div>
            <div className="max-h-[60vh] space-y-4 overflow-y-auto p-6 text-left text-sm leading-relaxed text-zinc-650">
              {activeModal === 'privacy' && (
                <>
                  <p className="font-bold text-[#08221c]">Last Updated: August 2026</p>
                  <p>Help On Hire protects the privacy of clients and Home Support Professionals who contact or work with us.</p>
                  <p>Client locations and service briefs are shared only as needed to assess, coordinate, and deliver agreed home support. We do not sell or rent customer information.</p>
                </>
              )}
              {activeModal === 'terms' && (
                <>
                  <p className="font-bold text-[#08221c]">Last Updated: August 2026</p>
                  <p>By requesting home support or applying as a Home Support Professional, you agree to provide accurate information and use Help On Hire for all related coordination.</p>
                  <p>Clients must provide a safe and respectful environment for assigned Home Support Professionals.</p>
                </>
              )}
              {activeModal === 'refund' && (
                <>
                  <p className="font-bold text-[#08221c]">Last Updated: August 2026</p>
                  <p>If you are unsatisfied with the quality of an agreed home support service, notify us within 24 hours. We will assess the concern and advise on the appropriate correction.</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

const FooterTrust: React.FC<{ title: string; copy: string; icon: React.ReactNode }> = ({ title, copy, icon }) => (
  <div className="flex items-center gap-3">
    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-[#12A33B]">{icon}</span>
    <div>
      <h4 className="text-sm font-semibold tracking-wider text-white">{title}</h4>
      <p className="mt-0.5 text-sm text-zinc-500">{copy}</p>
    </div>
  </div>
);

const FooterLink: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <li>
    <button onClick={onClick} className="text-zinc-500 transition hover:text-white">{children}</button>
  </li>
);
