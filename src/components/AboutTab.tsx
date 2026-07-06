import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, UserCheck, Shield, Award, Users, Target, Heart, Star } from 'lucide-react';
import { FAQS } from '../data';

export const AboutTab: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  const values = [
    {
      icon: UserCheck,
      title: 'Vetted Quality First',
      desc: 'Every professional on our platform is carefully screened through background checks, reference validation, and in-person interviews. Only trusted professionals make the cut.'
    },
    {
      icon: Shield,
      title: 'Your Safety & Trust',
      desc: 'We are committed to accountability at every level. Our structured oversight means you always know who is coming to serve you — and that they are qualified to do so.'
    },
    {
      icon: Award,
      title: 'Professional Excellence',
      desc: 'We partner only with professionals who demonstrate reliability, punctuality, and a commitment to exceeding client expectations — every single time.'
    }
  ];

  const team = [
    {
      name: 'Oluchukwu',
      role: 'Founder & Chief Executive Officer',
      bio: 'Entrepreneur and operations specialist passionate about creating economic opportunities in Port Harcourt. Oluchukwu founded HOH to solve the local gap between trusted service providers and clients who need them.',
      img: '/images/director-oluchukwu.jpeg',
      initials: 'O'
    },
    {
      role: 'Head of Operations & Client Success',
      bio: 'Portfolio details will be added soon.',
      placeholder: true
    }
  ];

  return (
    <div className="bg-zinc-50 text-zinc-900 font-sans min-h-screen" id="about-tab-view">

      {/* ========================================================= */}
      {/* SECTION 01 — HERO BANNER                                  */}
      {/* ========================================================= */}
      <section className="bg-[#0A201C] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#11322d_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-30" />
        <div className="relative mx-auto max-w-4xl text-center space-y-6">
          <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-[#C1E929] bg-emerald-900/30 px-4 py-1.5 rounded-full border border-emerald-500/20">
            OUR STORY
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Built in Port Harcourt.<br />
            <span className="text-[#C1E929]">Built for Port Harcourt.</span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Helponhire was founded with a clear mission: to make it easy for individuals, households, and businesses in Port Harcourt and across Nigeria to access reliable, professional, and trustworthy service providers without the uncertainty.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 02 — MISSION & WHY WE EXIST                      */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image */}
          <div className="rounded-3xl overflow-hidden h-[480px] shadow-xl border border-zinc-200 relative">
            <img
              src="/images/admin-executive.jpg"
              alt="Black Help On Hire professionals coordinating client services in Port Harcourt"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A201C]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#C1E929]">PORT HARCOURT OPERATIONS</span>
              <p className="text-white font-bold text-sm mt-1">Trusted Professionals. Reliable Help.</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#0A201C]/60 bg-[#EBF3F0] px-4 py-1.5 rounded-full border border-zinc-200/50 inline-block">
                WHY WE EXIST
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A201C] tracking-tight leading-tight mt-3">
                Solving a Real Problem in Our City
              </h2>
            </div>
            <div className="space-y-5 text-sm text-zinc-600 leading-relaxed">
              <p>
                Finding reliable help in Port Harcourt has always been a challenge. Whether you need a cleaner, an office assistant, event ushers, or delivery support — the experience has historically been unpredictable, unvetted, and stressful.
              </p>
              <p>
                Help On Hire was created to change that. We built a structured platform that handles the entire process: recruiting professionals, vetting them thoroughly, matching them with clients, and following up to ensure quality delivery.
              </p>
              <p>
                Our commitment is simple — <span className="font-bold text-[#0A201C]">reliable help, when you need it</span>. No guesswork. No disappointments. Just trusted professionals delivered to your door.
              </p>
            </div>

            {/* Three mini-stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-200">
              <div className="text-center">
                <span className="block text-2xl font-extrabold text-[#0A201C]">500+</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 mt-1 block">Services Delivered</span>
              </div>
              <div className="text-center border-x border-zinc-200">
                <span className="block text-2xl font-extrabold text-[#0A201C]">98%</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 mt-1 block">Satisfaction Rate</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-extrabold text-[#0A201C]">100%</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 mt-1 block">Vetted Pros</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 03 — OUR COMMITMENTS                             */}
      {/* ========================================================= */}
      <section className="bg-[#EBF3F0] border-y border-zinc-200 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#0A201C]/60">
              OUR COMMITMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A201C] tracking-tight mt-3">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <div key={idx} className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EBF3F0] text-[#0A201C] mb-6 shadow-inner">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold text-zinc-900 tracking-tight">{v.title}</h3>
                <p className="text-xs text-zinc-500 mt-2 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 04 — CORE VALUES PILLS                           */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-[#0A201C] tracking-tight">Our Core Values</h2>
          <p className="text-xs text-zinc-500 mt-2 leading-relaxed">The principles that guide every decision we make at Help On Hire.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '🎯', title: 'Trust', desc: 'Every professional is vetted before they serve a single client.' },
            { icon: '⚡', title: 'Convenience', desc: 'Simple, fast requests matched with reliable professionals.' },
            { icon: '✅', title: 'Quality', desc: 'We follow up on every job to ensure it meets our standards.' },
            { icon: '🤝', title: 'Accountability', desc: 'We stand behind every service we facilitate and every professional we match.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm text-center hover:shadow-md transition group">
              <span className="text-4xl block mb-4">{item.icon}</span>
              <h3 className="text-sm font-bold text-[#0A201C] tracking-tight group-hover:text-emerald-700 transition">{item.title}</h3>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 05 — TEAM                                        */}
      {/* ========================================================= */}
      <section className="bg-zinc-100/50 border-y border-zinc-200 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-[#0A201C]/70 font-bold uppercase tracking-widest text-[11px] mb-2">
              <Users className="h-4 w-4" />
              <span>OUR LEADERSHIP TEAM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight mt-2">
              The Team Behind Help On Hire
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-2 max-w-xl mx-auto leading-relaxed">
              Passionate Port Harcourt professionals dedicated to building a better service ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm text-center hover:shadow-md transition">
                {member.placeholder ? (
                  <div className="h-28 w-28 rounded-full mx-auto mb-4 border-4 border-dashed border-[#EBF3F0] bg-zinc-50 shadow-sm" aria-label="Blank picture frame" />
                ) : (
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-28 w-28 rounded-full object-cover mx-auto mb-4 border-4 border-[#EBF3F0] shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                )}
                {!member.placeholder && (
                  <h3 className="text-base font-bold text-zinc-900 tracking-tight">{member.name}</h3>
                )}
                <p className="text-xs font-semibold text-emerald-700 mt-0.5">{member.role}</p>
                <p className="text-[11px] text-zinc-500 mt-3 leading-relaxed bg-zinc-50 p-3.5 rounded-2xl border border-zinc-100 italic text-left">
                  "{member.bio}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 06 — FAQ                                         */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 shadow-sm" id="faq-accordion-block">
          <div className="flex items-center space-x-2.5 mb-8">
            <HelpCircle className="h-6 w-6 text-[#0A201C] shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-zinc-900 tracking-tight">Frequently Asked Questions</h2>
              <p className="text-xs text-zinc-400 mt-0.5">Everything you need to know about Help On Hire.</p>
            </div>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`border rounded-2xl transition-all duration-200 ${
                    isOpen ? 'border-[#0A201C]/30 bg-[#EBF3F0]/40' : 'border-zinc-200 bg-zinc-50/50'
                  }`}
                  id={`faq-item-${index}`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between px-5 py-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-xs sm:text-sm font-bold text-zinc-900 pr-4 text-left leading-relaxed">
                      {faq.question}
                    </span>
                    <span className="text-zinc-400 shrink-0">
                      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-zinc-600 leading-relaxed border-t border-zinc-200/50 mt-1">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};
