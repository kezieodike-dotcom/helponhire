import { Professional, Service, Review } from './types';

export const SERVICES: Service[] = [
  {
    id: 'home-cleaning',
    name: 'Eco-Friendly Home Cleaning',
    description: 'Bespoke deep cleaning or routine upkeep using certified non-toxic products.',
    category: 'home',
    basePrice: 35,
    unit: 'hr',
    popular: true,
    icon: 'Sparkles',
    details: [
      'Dusting, vacuuming, and general floor disinfection',
      'Thorough kitchen sanitization and appliance wipe-down',
      'Restroom deep-scrubbing and mold mitigation',
      'Trash removal and customizable sheet changes'
    ]
  },
  {
    id: 'handyman',
    name: 'Smart Handyman Repairs',
    description: 'Expert diagnostics, wall mountings, installations, and minor carpentry work.',
    category: 'home',
    basePrice: 55,
    unit: 'hr',
    popular: true,
    icon: 'Wrench',
    details: [
      'TV mounting, blind installation, and picture hanging',
      'Drywall patching and painting touch-ups',
      'Cabinet hardware adjustment and minor carpentry assembly',
      'Light fixture replacement and smart home setups'
    ]
  },
  {
    id: 'office-assistant',
    name: 'Executive Office Staffing',
    description: 'Highly professional administrative assistants trained in scheduling, reception, and data pipelines.',
    category: 'business',
    basePrice: 28,
    unit: 'hr',
    popular: true,
    icon: 'Briefcase',
    details: [
      'Calendar triage, appointment bookkeeping, and inbox management',
      'Front-desk reception, phone moderation, and welcoming guests',
      'Document prep, digitizing paperwork, and spreadsheet curation',
      'Travel itinerary planning and corporate expenditure logging'
    ]
  },
  {
    id: 'it-on-site',
    name: 'On-Site Network & IT Support',
    description: 'Secure enterprise network setup, hardware troubleshooting, and workstation provisioning.',
    category: 'technical',
    basePrice: 75,
    unit: 'hr',
    popular: false,
    icon: 'Cpu',
    details: [
      'Wi-Fi router optimization and local network wiring',
      'Hardware diagnostics, Ram upgrades, and secure OS setups',
      'Printer network configuration and corporate server linking',
      'Local cybersecurity auditing and offsite backup automation'
    ]
  },
  {
    id: 'event-server',
    name: 'Premium Event Bartending & Service',
    description: 'Host-vetted servers, mixologists, and support crew delivering seamless guest hospitality.',
    category: 'events',
    basePrice: 40,
    unit: 'hr',
    popular: true,
    icon: 'GlassWater',
    details: [
      'Professional cocktail curation and bar speed-service',
      'Tray-pass catering service and high-tempo table cleaning',
      'Event venue setup, table decor assistance, and teardown logistics',
      'Attentive guest hospitality and standard beverage replenishing'
    ]
  },
  {
    id: 'graphic-design',
    name: 'High-Impact Brand Design',
    description: 'Creative marketing collateral, presentation design, and rapid digital mockups.',
    category: 'creative',
    basePrice: 65,
    unit: 'hr',
    popular: false,
    icon: 'Palette',
    details: [
      'Digital ad creatives, social media templates, and business card layouts',
      'Vibrant slide-deck redesigns and pitch-deck polishing',
      'Vector logo optimization and high-resolution brand palettes',
      'Fast UI mockups for mobile layouts and presentation pamphlets'
    ]
  },
  {
    id: 'packing-moving',
    name: 'Residential Packing & Loading',
    description: 'Strong, reliable professionals equipped for furniture wrapping, box inventory, and heavy loading.',
    category: 'home',
    basePrice: 45,
    unit: 'hr',
    popular: false,
    icon: 'Truck',
    details: [
      'Fragile glass/art bubble-wrapping and careful packing',
      'Heavy furniture protective padding and dollied transportation',
      'Truck load coordination and optimized vertical stacking',
      'Fast room-by-room box unloading and initial placement'
    ]
  },
  {
    id: 'audio-tech',
    name: 'AV & Sound Setup Specialist',
    description: 'Acoustic configuration, mixer set up, and high-fidelity sound alignment.',
    category: 'technical',
    basePrice: 60,
    unit: 'hr',
    popular: false,
    icon: 'Music',
    details: [
      'PA speaker calibration and microphonic feedback damping',
      'Stage audio setup, mixer alignments, and wiring organization',
      'Event multi-mic synchronization and live gain controls',
      'Acoustic sound treatment advice and home-theater installs'
    ]
  },
  {
    id: 'marketing-copy',
    name: 'Bespoke Copywriting & Creative Pitch',
    description: 'Persuasive conversion-optimized text for landing pages, campaigns, and investor decks.',
    category: 'creative',
    basePrice: 50,
    unit: 'hr',
    popular: false,
    icon: 'FileText',
    details: [
      'SEO-friendly website headlines, microcopy, and service descriptions',
      'Email marketing campaigns and lead magnet newsletters',
      'Investor elevator-pitch scripts and corporate product storytelling',
      'Comprehensive copyediting for existing articles and PDFs'
    ]
  }
];

export const PROFESSIONALS: Professional[] = [
  {
    id: 'pro-1',
    name: 'Amaka Okafor',
    role: 'Lead Eco-Cleaning Specialist',
    category: 'home',
    rating: 4.95,
    reviewsCount: 142,
    hourlyRate: 38,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150',
    online: true,
    city: 'Port Harcourt',
    skills: ['Deep Cleaning', 'Organization', 'Eco-Products', 'Deodorizing'],
    bio: 'An expert with over 6 years of experience in residential care. Known for her attention to detail and reliance on plant-based cleaning solutions.',
    coordinates: { x: 28, y: 35 }
  },
  {
    id: 'pro-2',
    name: 'Tunde Adebayo',
    role: 'Smart Appliance & Carpentry Expert',
    category: 'home',
    rating: 4.89,
    reviewsCount: 98,
    hourlyRate: 58,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150',
    online: true,
    city: 'Port Harcourt',
    skills: ['Wall Mounting', 'Locksmithing', 'Smart Thermostats', 'Furniture Assembly'],
    bio: 'Dedicated construction veteran who pivoted to residential handyman services. Armed with premium tools and a rapid, precision-driven work ethic.',
    coordinates: { x: 62, y: 48 }
  },
  {
    id: 'pro-3',
    name: 'Ngozi Eze',
    role: 'Senior Executive Receptionist',
    category: 'business',
    rating: 4.98,
    reviewsCount: 210,
    hourlyRate: 32,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150',
    online: true,
    city: 'Port Harcourt',
    skills: ['Calendar Auditing', 'G-Suite Expert', 'Multi-line Inboxes', 'Bilingual'],
    bio: 'Elena spent 4 years managing executive administrative schedules at technology accelerators. Detail-oriented, warm demeanor, and extremely methodical.',
    coordinates: { x: 45, y: 22 }
  },
  {
    id: 'pro-4',
    name: 'Chinedu Nwosu',
    role: 'Lead Network Engineer',
    category: 'technical',
    rating: 4.91,
    reviewsCount: 76,
    hourlyRate: 80,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150',
    online: false,
    city: 'Port Harcourt',
    skills: ['Fiber Splicing', 'CISCO Certified', 'Firewall Audits', 'Data Failovers'],
    bio: 'A certified engineer who handles everything from complex router installations to recovering storage systems after hardware outages.',
    coordinates: { x: 74, y: 15 }
  },
  {
    id: 'pro-5',
    name: 'Kemi Balogun',
    role: 'Artistic Brand & Deck Designer',
    category: 'creative',
    rating: 4.87,
    reviewsCount: 63,
    hourlyRate: 68,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150',
    online: true,
    city: 'Port Harcourt',
    skills: ['Figma Mastery', 'Pitch Deck Curation', 'Vector Illustration', 'Mockups'],
    bio: 'Freelance graphic designer who crafts visual identities for fast-growing startups. Believes that visual storytelling wins client trust.',
    coordinates: { x: 38, y: 72 }
  },
  {
    id: 'pro-6',
    name: 'Emeka Obi',
    role: 'Certified Mixologist & Bar Lead',
    category: 'events',
    rating: 4.97,
    reviewsCount: 184,
    hourlyRate: 42,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    online: true,
    city: 'Port Harcourt',
    skills: ['Cocktail Design', 'Crowd Management', 'Food Sanitation Certificate', 'Fast Serves'],
    bio: 'Classically trained mixologist with high-upscale lounge experience. Brings speed, charm, and custom seasonal menus directly to corporate events.',
    coordinates: { x: 19, y: 55 }
  },
  {
    id: 'pro-7',
    name: 'Aisha Bello',
    role: 'B2B Copywriter & Content Strategist',
    category: 'creative',
    rating: 4.82,
    reviewsCount: 41,
    hourlyRate: 52,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150',
    online: false,
    city: 'Port Harcourt',
    skills: ['Conversion Copy', 'SEO Strategy', 'Newsletter Campaigns', 'Ghostwriting'],
    bio: 'Aisha is a dynamic writer who crafts compelling narratives that turn cold readers into loyal clients. Works primarily with SaaS businesses.',
    coordinates: { x: 80, y: 65 }
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    clientName: 'Chioma Nwankwo',
    proName: 'Amaka Okafor',
    rating: 5,
    text: 'Amaka cleaned our 3-bedroom house today and left it completely immaculate! I have highly sensitive allergies, and the plant-based, non-scented products she used made the air feel absolutely pristine.',
    date: 'May 18, 2026',
    serviceName: 'Eco-Friendly Home Cleaning'
  },
  {
    id: 'rev-2',
    clientName: 'Riverside Capital',
    proName: 'Ngozi Eze',
    rating: 5,
    text: 'Ngozi was the perfect support during our annual startup demo day. She managed the guest registration, moderated the main inbox, and greeted high-profile investors with absolute poise and grace.',
    date: 'May 24, 2026',
    serviceName: 'Executive Office Staffing'
  },
  {
    id: 'rev-3',
    clientName: 'Ifeanyi Uche',
    proName: 'Tunde Adebayo',
    rating: 5,
    text: 'Tunde mounted two heavy monitors on drywall and routed all the cords beautifully inside the plaster. Extremely fast, spotless cleanup, and an absolute professional to work with.',
    date: 'May 12, 2026',
    serviceName: 'Smart Handyman Repairs'
  }
];

export const FAQS = [
  {
    question: 'How are professionals vetted?',
    answer: 'Every candidate undergoes a mandatory 5-step screening. This includes a comprehensive nationwide criminal background check, professional credential/license verification, a face-to-face phone/video screening, and a reference audit.'
  },
  {
    question: 'Is my scheduled hire covered by insurance?',
    answer: 'Absolutely. Every service booked on "Help On Hire" is supported by comprehensive liability protection and a 100% Quality Satisfaction Guarantee. If you are not satisfied, we will send another specialist to make it right.'
  },
  {
    question: 'Can I request same-day emergency staffing?',
    answer: 'Yes! Our custom-built on-demand matching system supports same-day emergency booking. Depending on pro availability, a pre-screened specialist can be routed to your office or home within 2-3 hours.'
  },
  {
    question: 'How does billing and payroll operate?',
    answer: 'All payments are handled securely inside the platform via encrypted deposit pipelines. Clients are invoiced instantly based on recorded workspace hours. If you are a professional, you receive guaranteed weekly direct deposits.'
  }
];
