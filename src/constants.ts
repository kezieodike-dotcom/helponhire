export const WHATSAPP_PHONE_DISPLAY = '09134057032';
export const WHATSAPP_PHONE_INTERNATIONAL = '2349134057032';
export const WHATSAPP_PHONE_TEL = '+2349134057032';
export const WHATSAPP_MESSAGE = 'Hello Help On Hire, I would like to request home support. Please assist me with service options, availability, and pricing.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE_INTERNATIONAL}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    handle: '@helponhire',
    url: 'https://www.instagram.com/helponhire?igsi=MWRkMHdmcWdiYmJ2bw==&utm_source=ig_contact_invite',
  },
  {
    name: 'Facebook',
    handle: 'Help On Hire',
    url: 'https://www.facebook.com/share/1Eq17TXcxd/?mibextid=wwXIfr',
  },
  {
    name: 'TikTok',
    handle: '@helponhire.ng',
    url: 'https://www.tiktok.com/@helponhire.ng?_r=1&_t=ZS-99FcRmeoUWj',
  },
] as const;
