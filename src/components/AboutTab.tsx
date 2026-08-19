import React from 'react';
import { Heart, Leaf, Target, Telescope } from 'lucide-react';

const values = ['Care', 'Integrity', 'Professionalism', 'Reliability'];

export const AboutTab: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7F8F6] text-zinc-900 font-sans" id="about-tab-view">
      <section className="bg-[#08221c] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#D8C690]">About Us</span>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            We understand what it means to carry too much.
          </h1>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Help On Hire was created from a real experience with the weight of home management and the realization that people should not have to sacrifice the rest of their lives simply because their homes need care.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <img
            src="/images/director-oluchukwu.jpeg"
            alt="Help On Hire founder"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
          />
        </div>
        <div className="lg:col-span-7">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#12A33B]">Our Story</p>
          <div className="mt-5 space-y-5 text-sm leading-relaxed text-zinc-600">
            <p>
              A few years after secondary school, while waiting for university admission, our founder found herself carrying much of the responsibility for her home while her mother was away pursuing business. Cooking, cleaning, errands, market runs, and caring for the home and family became her responsibility.
            </p>
            <p>
              She was trying to think about school, personal development, relationships, her walk with God, and the future she wanted. Yet the demands of home management seemed to consume everything. She experienced how mentally and emotionally draining it could be to constantly carry responsibilities that people often overlook.
            </p>
            <p>
              That experience made her think about how many other people were living the same way, especially people trying to balance family, work, business, education, and everything else life requires.
            </p>
            <p>
              Help On Hire was born from that concern: to create reliable support for the home, so people can carry less and make room for the life they want to live.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2">
          <Statement icon={<Target className="h-6 w-6" />} title="Our Purpose">
            To ease the burden of home management so people can reclaim their lives, time, and freedom to pursue the things that matter to them.
          </Statement>
          <Statement icon={<Telescope className="h-6 w-6" />} title="Our Vision">
            To build a large network of service providers who are outstanding in professionalism, care, and attitude to service, leading Help On Hire to become Nigeria&apos;s number one sought-after brand for home support and, in the future, other convenient services.
          </Statement>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <Leaf className="h-8 w-8 text-[#12A33B]" />
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#08221c]">Our Values</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              These principles shape every booking, every professional relationship, and every home we support.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value} className="bg-white p-7">
                <Heart className="h-5 w-5 text-[#12A33B]" />
                <h3 className="mt-5 text-base font-bold uppercase tracking-widest text-[#08221c]">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const Statement: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="rounded-2xl border border-zinc-200 bg-[#F7F8F6] p-8">
    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#12A33B] shadow-sm">{icon}</span>
    <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-[#08221c]">{title}</h2>
    <p className="mt-4 text-sm leading-relaxed text-zinc-600">{children}</p>
  </div>
);
