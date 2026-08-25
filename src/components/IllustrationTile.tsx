import React from 'react';

const imageFocus = {
  refresh: '50% 46%',
  signature: '50% 44%',
  care: '50% 43%',
  integrity: '55% 48%',
  professionalism: '50% 42%',
  reliability: '52% 48%',
  recruit: '50% 45%',
  train: '52% 48%',
  assess: '48% 48%',
  deploy: '50% 44%',
  booking: '52% 48%',
  contact: '50% 42%',
} as const;

export type IllustrationKey = keyof typeof imageFocus;

interface IllustrationTileProps {
  name: IllustrationKey;
  label: string;
  className?: string;
}

export const IllustrationTile: React.FC<IllustrationTileProps> = ({ name, label, className = '' }) => (
  <div
    role="img"
    aria-label={label}
    className={`overflow-hidden rounded-xl border border-white/70 bg-cover bg-no-repeat shadow-sm ${className}`}
    style={{
      backgroundImage: `url(/illustrations/cards/${name}.jpg)`,
      backgroundPosition: imageFocus[name],
    }}
  />
);
