import React from 'react';
import { Heart, Leaf, Target, Telescope } from 'lucide-react';
import { IllustrationTile, type IllustrationKey } from './IllustrationTile';

const values: { title: string; illustration: IllustrationKey }[] = [
  { title: 'Care', illustration: 'care' },
  { title: 'Integrity', illustration: 'integrity' },
  { title: 'Professionalism', illustration: 'professionalism' },
  { title: 'Reliability', illustration: 'reliability' },
];

export const AboutTab: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7F8F6] text-zinc-900 font-sans" id="about-tab-view">
      <section className="bg-[#08221c] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#D8C690]">About Us</span>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Built for people carrying too much.
          </h1>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Help On Hire exists so home care does not consume the rest of your life.
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
          <Statement icon={<Target className="h-6 w-6" />} illustration="care" title="Our Purpose">
            Ease the weight of home management so people can reclaim time, freedom, and rest.
          </Statement>
          <Statement icon={<Telescope className="h-6 w-6" />} illustration="professionalism" title="Our Vision">
            Build Nigeria&apos;s most trusted network of caring, professional home support providers.
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
              <div key={value.title} className="mobile-image-card min-h-[200px] bg-[#08221c] p-6 sm:min-h-0 sm:bg-white sm:p-4">
                <IllustrationTile name={value.illustration} label={`${value.title} illustration`} className="mobile-image-card-media aspect-[16/10]" />
                <Heart className="mt-5 h-5 w-5 text-[#12A33B]" />
                <h3 className="mt-5 text-base font-bold uppercase tracking-widest text-[#08221c]">{value.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const Statement: React.FC<{ icon: React.ReactNode; illustration: IllustrationKey; title: string; children: React.ReactNode }> = ({ icon, illustration, title, children }) => (
  <div className="mobile-image-card min-h-[290px] rounded-2xl border border-zinc-200 bg-[#08221c] p-6 shadow-sm sm:min-h-0 sm:bg-[#F7F8F6] sm:p-4">
    <IllustrationTile name={illustration} label={`${title} illustration`} className="mobile-image-card-media aspect-[16/10]" />
    <span className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#12A33B] shadow-sm">{icon}</span>
    <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-[#08221c]">{title}</h2>
    <p className="mt-4 text-sm leading-relaxed text-zinc-600">{children}</p>
  </div>
);
