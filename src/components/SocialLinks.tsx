import React from 'react';
import { Facebook, Instagram, Music2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

type SocialLinksProps = {
  variant?: 'light' | 'dark';
  className?: string;
};

const socialIcons: Record<(typeof SOCIAL_LINKS)[number]['name'], React.ReactNode> = {
  Instagram: <Instagram className="h-4 w-4" />,
  Facebook: <Facebook className="h-4 w-4" />,
  TikTok: <Music2 className="h-4 w-4" />,
};

export const SocialLinks: React.FC<SocialLinksProps> = ({ variant = 'light', className = '' }) => {
  const isDark = variant === 'dark';

  return (
    <div className={className}>
      <div className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-[#D8C690]' : 'text-[#12A33B]'}`}>
        Follow Help On Hire
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {SOCIAL_LINKS.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Follow Help On Hire on ${item.name}`}
            className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold transition active:translate-y-[1px] ${
              isDark
                ? 'border-white/10 bg-white/5 text-zinc-200 hover:border-[#12A33B] hover:text-white'
                : 'border-zinc-200 bg-white text-[#08221c] shadow-sm hover:border-[#12A33B] hover:text-[#0f8f34]'
            }`}
          >
            <div className="text-[#12A33B]">{socialIcons[item.name]}</div>
            <strong className="font-semibold">{item.handle}</strong>
          </a>
        ))}
      </div>
    </div>
  );
};
