import React from 'react';
import { ArrowLeft, ArrowRight, Clock, CalendarDays } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

type BlogArticleSlug =
  | 'too-busy-to-clean'
  | 'outsourcing-errands'
  | 'event-staffing-choice'
  | 'business-support-flexible-staff';

interface BlogArticleCta {
  heading: string;
  buttonLabel: string;
  serviceId?: string;
  tab?: string;
}

interface BlogArticle {
  category: string;
  title: string;
  hook: string;
  image: string;
  date: string;
  readTime: string;
  intro: string[];
  sections: { heading: string; body: string[] }[];
  cta: BlogArticleCta;
}

const blogArticles: Record<BlogArticleSlug, BlogArticle> = {
  'too-busy-to-clean': {
    category: 'Home & Productivity',
    title: "Too Busy to Clean? Here's How to Keep Your Home Spotless Without Lifting a Finger",
    hook: "A clean home matters. But between work, family, and everything else life throws at you, finding the time to deep-clean your space is easier said than done. Here's what you can do about it.",
    image: '/images/eco-cleaning-specialist.jpg',
    date: 'July 7, 2026',
    readTime: '4 Min Read',
    intro: [
      "Keeping a clean home in Port Harcourt is no small task. Dust settles fast, humidity is unforgiving, and if you have kids or run a busy household, it can feel like you're cleaning the same mess on repeat.",
      "The good news? You don't have to do it alone.",
    ],
    sections: [
      {
        heading: 'Why regular cleaning matters more than you think',
        body: [
          "Most people clean when things look dirty. But by the time it looks dirty, bacteria, dust mites, and allergens have already built up in your space. Regular cleaning — done properly — protects your family's health, extends the life of your furniture, and simply makes home feel like home.",
        ],
      },
      {
        heading: 'What professional cleaning actually covers',
        body: [
          "A trained cleaner does more than sweep and mop. Deep cleaning covers areas most people skip — behind appliances, inside cabinets, bathroom grout, ceiling fans, and more. If you've just moved into a new apartment or finished hosting an event, a proper reset clean makes a huge difference.",
        ],
      },
      {
        heading: 'How Help On Hire makes it easy',
        body: [
          "We connect you with trained, vetted cleaning professionals in Port Harcourt. Whether you need a one-time deep clean, help after a party, or someone to come in on a regular schedule, we handle the matching so you don't have to stress about who's coming into your home.",
        ],
      },
    ],
    cta: {
      heading: 'Ready for a cleaner home?',
      buttonLabel: 'Book a Cleaner Today',
      serviceId: 'cleaning',
    },
  },
  'outsourcing-errands': {
    category: 'Home & Productivity',
    title: 'Why Port Harcourt Residents Are Outsourcing Their Errands (And Why You Should Too)',
    hook: 'Market runs, bank queues, pickups, drop-offs — your to-do list never ends. Here’s how people are taking back their time.',
    image: '/images/errands-delivery-coordinator.jpg',
    date: 'July 5, 2026',
    readTime: '4 Min Read',
    intro: [
      "Time is the one thing you can't get back. Yet so much of it gets swallowed up by errands that honestly, someone else could handle.",
      "Traffic on Rumuola. Long queues at the market. A delivery you have to wait home for. These things don't feel like a big deal individually — but added up, they cost you hours every week.",
    ],
    sections: [
      {
        heading: 'The real cost of doing everything yourself',
        body: [
          "When you spend three hours doing a market run, that's three hours you're not spending on work, rest, or your family. For business owners especially, every hour spent on errands is an hour not spent growing your business.",
        ],
      },
      {
        heading: 'What errand services actually cover',
        body: [
          'Grocery and market runs, picking up or dropping off items, paying bills, collecting documents, pharmacy runs — basically anything that requires you to leave the house and stand in a queue, someone else can do for you.',
        ],
      },
      {
        heading: 'Who uses errand services?',
        body: [
          "Busy professionals who don't have time during the week. New moms who can't easily step out. Business owners who need things handled quickly. Elderly individuals who need support. If any of that sounds like you, errand help is worth considering.",
        ],
      },
      {
        heading: 'How Help On Hire handles it',
        body: [
          'Our trained errand runners across Port Harcourt are available to handle your tasks quickly and professionally. You tell us what you need, we send someone reliable, and it gets done.',
        ],
      },
    ],
    cta: {
      heading: 'Stop spending your day running around. Let us handle it.',
      buttonLabel: 'Request an Errand Runner',
      serviceId: 'errands-deliveries',
    },
  },
  'event-staffing-choice': {
    category: 'Events & Hosting',
    title: "Planning an Event in Port Harcourt? Here's Why Your Staffing Choice Makes or Breaks It",
    hook: 'Food, venue, and decor get all the attention. But the staff running your event quietly determine whether your guests leave impressed or frustrated.',
    image: '/images/event-staffing-team.jpg',
    date: 'July 3, 2026',
    readTime: '5 Min Read',
    intro: [
      "You've booked the hall. The caterer is confirmed. Decorations are sorted. But have you thought about who will be on the ground managing your guests?",
      'Event staffing is one of the most overlooked parts of planning — and one of the most important.',
    ],
    sections: [
      {
        heading: 'What can go wrong without proper event staff',
        body: [
          "Guests arriving with no one to direct them. A registration desk that's disorganised. Waiters who don't know where to stand or when to serve. These small things add up and affect the overall experience of your event, no matter how beautiful the venue looks.",
        ],
      },
      {
        heading: 'What trained event staff actually do',
        body: [
          'Professional ushers and hospitality crew manage guest flow, handle registration, coordinate seating, assist with serving, and generally make sure everything runs smoothly behind the scenes. Good event staff are invisible — guests barely notice them, but they feel the difference.',
        ],
      },
      {
        heading: 'What to look for when hiring event staff',
        body: [
          "Appearance matters. Punctuality matters. Communication matters. You want people who have been trained to represent your event professionally, not someone's cousin who showed up as a favour.",
        ],
      },
      {
        heading: 'How Help On Hire staffs your events',
        body: [
          "We provide trained ushers, hospitality attendants, registration assistants, and service crew for all kinds of events — weddings, corporate functions, church programs, product launches, and more. All our staff go through in-house training before they're deployed.",
        ],
      },
    ],
    cta: {
      heading: "Planning an event? Let's talk about staffing.",
      buttonLabel: 'Request Event Staff',
      serviceId: 'event-staffing',
    },
  },
  'business-support-flexible-staff': {
    category: 'Business & Operations',
    title: 'How Smart Port Harcourt Businesses Are Getting More Done Without Hiring Full-Time Staff',
    hook: "You need extra hands — but not permanently. Here's how flexible support staff can help your business run better.",
    image: '/images/corporate-assistant.jpg',
    date: 'July 1, 2026',
    readTime: '5 Min Read',
    intro: [
      'Running a business means wearing too many hats. There are days when you simply need more people — but hiring full-time staff for short-term needs doesn’t make financial sense.',
      "That's where flexible support staff come in.",
    ],
    sections: [
      {
        heading: 'When does a business need temporary support?',
        body: [
          "A product launch that needs extra hands on ground. A sales outreach campaign that requires people to represent your brand. An influx of work that your current team can't absorb alone. These are exactly the situations where bringing in trained support staff makes more business sense than a rushed full-time hire.",
        ],
      },
      {
        heading: 'What business support staff can handle',
        body: [
          'Administrative support, customer-facing roles, outreach and representation, logistics coordination, and general operational assistance. The goal is to give your business the capacity it needs, exactly when it needs it.',
        ],
      },
      {
        heading: 'Why training matters',
        body: [
          "Staff that aren't properly trained reflect poorly on your business. At Help On Hire, every provider goes through structured training before being deployed — so whoever represents your business carries themselves professionally.",
        ],
      },
      {
        heading: 'How Help On Hire supports your business',
        body: [
          'Whether you need one person for a day or a small team for a week, we match you with trained, vetted support staff in Port Harcourt. No lengthy hiring process. No long-term commitment.',
        ],
      },
    ],
    cta: {
      heading: "Need extra hands for your business? We're ready.",
      buttonLabel: 'Explore Business Support',
      tab: 'business',
    },
  },
};

export const blogArticleSlugs = Object.keys(blogArticles) as BlogArticleSlug[];
export type { BlogArticleSlug };

interface BlogArticleTabProps {
  slug: BlogArticleSlug;
  onBack: () => void;
  onOpenBooking: (serviceId?: string) => void;
  onNavigateTab: (tab: string) => void;
  onNavigateArticle: (slug: BlogArticleSlug) => void;
}

export const BlogArticleTab: React.FC<BlogArticleTabProps> = ({
  slug,
  onBack,
  onOpenBooking,
  onNavigateTab,
  onNavigateArticle,
}) => {
  const article = blogArticles[slug] ?? blogArticles['too-busy-to-clean'];
  const related = blogArticleSlugs.filter((item) => item !== slug).slice(0, 3);

  const handleCta = () => {
    if (article.cta.serviceId) {
      onOpenBooking(article.cta.serviceId);
    } else if (article.cta.tab) {
      onNavigateTab(article.cta.tab);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FBFB] text-zinc-900 font-sans" id={`blog-article-${slug}`}>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0A201C] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(#11322d_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-35" />
        <div className="relative mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20 text-left">
          <button
            onClick={onBack}
            className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-zinc-200 transition hover:bg-white/10"
            id="blog-article-back-btn"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Home</span>
          </button>

          <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-900/30 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#C1E929]">
            {article.category}
          </span>
          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
            {article.title}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            {article.hook}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-zinc-400">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              {article.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-zinc-200 shadow-sm">
          <img
            src={article.image}
            alt={article.title}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        <div className="mt-10 space-y-5">
          {article.intro.map((para, idx) => (
            <p key={`intro-${idx}`} className="text-base leading-relaxed text-zinc-700">
              {para}
            </p>
          ))}
        </div>

        {article.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-xl font-extrabold tracking-tight text-[#0A201C] sm:text-2xl">
              {section.heading}
            </h2>
            <div className="mt-3 space-y-4">
              {section.body.map((para, idx) => (
                <p key={`${section.heading}-${idx}`} className="text-base leading-relaxed text-zinc-700">
                  {para}
                </p>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <div className="mt-14 rounded-3xl bg-[#0A201C] px-6 py-10 text-center text-white shadow-xl sm:px-10">
          <h3 className="mx-auto max-w-xl text-2xl font-extrabold tracking-tight sm:text-3xl">
            {article.cta.heading}
          </h3>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleCta}
              className="inline-flex items-center gap-2 rounded-full bg-[#C1E929] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-[#0A201C] transition hover:bg-white"
            >
              <span>{article.cta.buttonLabel}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-white/10"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </article>

      {/* Related articles */}
      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-2xl font-extrabold tracking-tight text-[#0A201C]">
          More Insights
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {related.map((item) => {
            const post = blogArticles[item];
            return (
              <button
                key={item}
                onClick={() => onNavigateArticle(item)}
                className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white text-left shadow-sm transition hover:shadow-md"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-700">
                    {post.category}
                  </span>
                  <h3 className="mt-2 text-sm font-bold leading-snug text-[#0A201C] transition-colors group-hover:text-emerald-800">
                    {post.title}
                  </h3>
                  <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0A201C]">
                    <span>Read Article</span>
                    <span>→</span>
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};
