import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FindProsTab } from './components/FindProsTab';
import { ServicesTab } from './components/ServicesTab';
import { BusinessTab } from './components/BusinessTab';
import { AboutTab } from './components/AboutTab';
import { JoinProTab } from './components/JoinProTab';
import { ContactTab } from './components/ContactTab';
import { RequestServiceTab } from './components/RequestServiceTab';
import { ServiceDetailTab, type ServicePageSlug, servicePageSlugs } from './components/ServiceDetailTab';
import { BlogArticleTab, type BlogArticleSlug, blogArticleSlugs } from './components/BlogArticleTab';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from './constants';

const tabPaths: Record<string, string> = {
  'find-pros': '/',
  services: '/services',
  business: '/business',
  join: '/become-a-professional',
  about: '/about',
  contact: '/contact',
  'request-service': '/request-service',
  'how-it-works': '/how-it-works',
};

const pathTabs: Record<string, string> = {
  '/': 'find-pros',
  '/services': 'services',
  '/business': 'business',
  '/become-a-professional': 'join',
  '/join': 'join',
  '/about': 'about',
  '/contact': 'contact',
  '/request-service': 'request-service',
  '/how-it-works': 'find-pros',
};

const serviceSlugTabs = servicePageSlugs.reduce<Record<string, string>>((paths, slug) => {
  paths[`/${slug}`] = `service-${slug}`;
  return paths;
}, {});

const blogSlugTabs = blogArticleSlugs.reduce<Record<string, string>>((paths, slug) => {
  paths[`/blog/${slug}`] = `blog-${slug}`;
  return paths;
}, {});

const pageTitles: Record<string, string> = {
  'find-pros': 'Help On Hire | Trusted Professionals in Port Harcourt',
  services: 'Services | Help On Hire',
  business: 'Business Staffing | Help On Hire',
  join: 'Become a Professional | Help On Hire',
  about: 'About Help On Hire',
  contact: 'Contact Help On Hire',
  'request-service': 'Request a Service | Help On Hire',
  'service-cleaning': 'Cleaning Services | Help On Hire',
  'service-errands-deliveries': 'Errands and Deliveries | Help On Hire',
  'service-domestic-help': 'Domestic Help | Help On Hire',
  'service-event-staffing': 'Event Staffing | Help On Hire',
  'blog-too-busy-to-clean': 'Too Busy to Clean? | Help On Hire Blog',
  'blog-outsourcing-errands': 'Outsourcing Your Errands | Help On Hire Blog',
  'blog-event-staffing-choice': 'Event Staffing in Port Harcourt | Help On Hire Blog',
  'blog-business-support-flexible-staff': 'Flexible Business Support | Help On Hire Blog',
};

const getTabFromPath = (path: string) => {
  const normalizedPath = path.replace(/\/+$/, '') || '/';
  const servicePathPrefix = '/services/';

  if (serviceSlugTabs[normalizedPath]) {
    return serviceSlugTabs[normalizedPath];
  }

  if (blogSlugTabs[normalizedPath]) {
    return blogSlugTabs[normalizedPath];
  }

  if (normalizedPath.startsWith(servicePathPrefix)) {
    const slug = normalizedPath.slice(servicePathPrefix.length) as ServicePageSlug;
    if (servicePageSlugs.includes(slug)) {
      return `service-${slug}`;
    }
  }

  return pathTabs[normalizedPath] ?? 'find-pros';
};

const getPathFromTab = (tab: string) => {
  if (tab.startsWith('service-')) {
    const slug = tab.replace('service-', '') as ServicePageSlug;
    return servicePageSlugs.includes(slug) ? `/${slug}` : '/services';
  }

  if (tab.startsWith('blog-')) {
    const slug = tab.replace('blog-', '') as BlogArticleSlug;
    return blogArticleSlugs.includes(slug) ? `/blog/${slug}` : '/';
  }

  return tabPaths[tab] ?? '/';
};

export default function App() {
  const [activeTab, setActiveTabState] = useState<string>(() => getTabFromPath(window.location.pathname));
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handlePopState = () => {
      setSelectedServiceId(undefined);
      setActiveTabState(getTabFromPath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (window.location.pathname !== '/how-it-works') return;

    window.setTimeout(() => {
      const el = document.getElementById('how-it-works-section');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  }, [activeTab]);

  useEffect(() => {
    if (window.location.pathname === '/how-it-works') {
      document.title = 'How It Works | Help On Hire';
      return;
    }

    document.title = pageTitles[activeTab] ?? pageTitles['find-pros'];
  }, [activeTab]);

  const navigateToTab = (tab: string, options?: { replace?: boolean; scroll?: boolean }) => {
    const path = getPathFromTab(tab);
    const displayTab = tab === 'how-it-works' ? 'find-pros' : tab;

    if (window.location.pathname !== path) {
      if (options?.replace) {
        window.history.replaceState(null, '', path);
      } else {
        window.history.pushState(null, '', path);
      }
    }

    setActiveTabState(displayTab);

    if (options?.scroll !== false) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    navigateToTab('request-service');
  };

  const handleRequestService = () => {
    setSelectedServiceId(undefined);
    navigateToTab('request-service');
  };

  const handleNavigateService = (slug: ServicePageSlug) => {
    navigateToTab(`service-${slug}`);
  };

  const activeServiceSlug = activeTab.startsWith('service-')
    ? activeTab.replace('service-', '') as ServicePageSlug
    : undefined;
  const isServiceDetail = Boolean(activeServiceSlug && servicePageSlugs.includes(activeServiceSlug));

  const activeBlogSlug = activeTab.startsWith('blog-')
    ? activeTab.replace('blog-', '') as BlogArticleSlug
    : undefined;
  const isBlogArticle = Boolean(activeBlogSlug && blogArticleSlugs.includes(activeBlogSlug));

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900 selection:bg-[#0A201C] selection:text-[#C1E929]" id="applet-root">
      
      {/* Dynamic top navigation bar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={navigateToTab} 
        onOpenBooking={handleRequestService}
      />

      {/* Main viewport pane matching active selection tab */}
      <main className="flex-1 shrink-0 animate-fade-in">
        {activeTab === 'find-pros' && (
          <FindProsTab 
            onOpenBooking={(serviceId) => {
              if (serviceId) {
                handleOpenBooking(serviceId);
              } else {
                handleRequestService();
              }
            }}
            setActiveTab={navigateToTab}
            onNavigateService={handleNavigateService}
          />
        )}
        {activeTab === 'services' && (
          <ServicesTab 
            onOpenBooking={(serviceId) => {
              if (serviceId) {
                handleOpenBooking(serviceId);
              } else {
                handleRequestService();
              }
            }}
            onNavigateService={handleNavigateService}
          />
        )}
        {activeTab === 'business' && (
          <BusinessTab />
        )}
        {activeTab === 'about' && (
          <AboutTab />
        )}
        {activeTab === 'join' && (
          <JoinProTab />
        )}
        {activeTab === 'contact' && (
          <ContactTab />
        )}
        {activeTab === 'request-service' && (
          <RequestServiceTab initialServiceId={selectedServiceId} />
        )}
        {isServiceDetail && activeServiceSlug && (
          <ServiceDetailTab
            slug={activeServiceSlug}
            onBack={() => {
              navigateToTab('find-pros');
            }}
            onNavigateService={handleNavigateService}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {isBlogArticle && activeBlogSlug && (
          <BlogArticleTab
            slug={activeBlogSlug}
            onBack={() => {
              navigateToTab('find-pros');
            }}
            onOpenBooking={handleOpenBooking}
            onNavigateTab={navigateToTab}
            onNavigateArticle={(slug) => navigateToTab(`blog-${slug}`)}
          />
        )}
      </main>

      {/* Floating WhatsApp Button — links to real WhatsApp Business */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" id="whatsapp-floating-portal">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 hover:scale-105 active:scale-95 text-white shadow-xl hover:shadow-emerald-500/30 transition-all duration-200 group"
          aria-label="Chat on WhatsApp with Help On Hire"
          id="whatsapp-trigger-btn"
        >
          <MessageCircle className="h-7 w-7 fill-current text-white" />
          {/* Tooltip */}
          <span className="absolute right-16 bg-[#0A201C] text-white text-[10px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Corporate trust Footer element */}
      <Footer setActiveTab={navigateToTab} />

    </div>
  );
}
