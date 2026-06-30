import React, { useState } from 'react';
import { Briefcase, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
// @ts-ignore
import logoImg from '../logo.jpg';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'business', label: 'For Businesses' },
    { id: 'join', label: 'Become a Professional' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleTabClick = (tabId: string) => {
    if (tabId === 'how-it-works') {
      setActiveTab('how-it-works');
      setTimeout(() => {
        const el = document.getElementById('how-it-works-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      setActiveTab(tabId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-zinc-150/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => setActiveTab('find-pros')} 
            className="flex cursor-pointer items-center transition-opacity hover:opacity-90"
            id="nav-logo"
          >
            <img src={logoImg} alt="Help On Hire Logo" className="h-10 w-auto object-contain" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-0.5">
            {navItems.map((item) => {
              const isActive = activeTab === item.id || (item.id === 'services' && activeTab.startsWith('service-'));
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`relative px-3 py-2 text-[10px] font-bold uppercase tracking-wider transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-[#0A201C] bg-[#EBF3F0]'
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/60'
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenBooking}
              className="hidden sm:flex items-center space-x-2 rounded-full bg-[#0A201C] hover:bg-emerald-950 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#C1E929] shadow-sm transition-all duration-250 hover:shadow-lg hover:-translate-y-0.5"
              id="desktop-book-btn"
            >
              <span>Request Service</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center rounded-lg p-2 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 lg:hidden"
              id="mobile-nav-toggle"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div className="border-t border-zinc-100 bg-white px-4 py-4 lg:hidden shadow-lg animate-fade-in" id="mobile-menu-panel">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id || (item.id === 'services' && activeTab.startsWith('service-'));
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'text-[#0A201C] bg-[#EBF3F0]'
                      : 'text-zinc-650 hover:text-zinc-900 hover:bg-zinc-50'
                  }`}
                  id={`mobile-nav-link-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="mt-4 flex w-full items-center justify-center space-x-2 rounded-full bg-[#0A201C] py-3.5 text-center text-xs font-bold uppercase tracking-wider text-[#C1E929] shadow-md shadow-emerald-950/10"
              id="mobile-book-btn"
            >
              <span>Request a Service</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
