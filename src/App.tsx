import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FindProsTab } from './components/FindProsTab';
import { ServicesTab } from './components/ServicesTab';
import { BusinessTab } from './components/BusinessTab';
import { AboutTab } from './components/AboutTab';
import { JoinProTab } from './components/JoinProTab';
import { ContactTab } from './components/ContactTab';
import { RequestServiceTab } from './components/RequestServiceTab';
import { BookingFlow } from './components/BookingFlow';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from './constants';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('find-pros');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [selectedProId, setSelectedProId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string, proId?: string) => {
    setSelectedServiceId(serviceId);
    setSelectedProId(proId);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
    setSelectedServiceId(undefined);
    setSelectedProId(undefined);
  };

  const handleRequestService = () => {
    setActiveTab('request-service');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900 selection:bg-[#0A201C] selection:text-[#C1E929]" id="applet-root">
      
      {/* Dynamic top navigation bar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenBooking={handleRequestService}
      />

      {/* Main viewport pane matching active selection tab */}
      <main className="flex-1 shrink-0 animate-fade-in">
        {activeTab === 'find-pros' && (
          <FindProsTab 
            onOpenBooking={(serviceId, proId) => {
              // For "Request a Service" buttons on home page, go to request page
              if (serviceId || proId) {
                handleOpenBooking(serviceId, proId);
              } else {
                handleRequestService();
              }
            }}
            setActiveTab={setActiveTab}
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
          <RequestServiceTab onOpenBooking={handleOpenBooking} />
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
      <Footer setActiveTab={setActiveTab} />

      {/* Overlay Step Booking dispatch pipeline slider */}
      <BookingFlow 
        isOpen={bookingOpen} 
        onClose={handleCloseBooking} 
        initialServiceId={selectedServiceId}
        initialProId={selectedProId}
      />

    </div>
  );
}
