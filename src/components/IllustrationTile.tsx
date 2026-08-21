import React from 'react';

const tilePositions = {
  refresh: '0% 0%',
  signature: '33.333% 0%',
  care: '66.666% 0%',
  integrity: '100% 0%',
  professionalism: '0% 50%',
  reliability: '33.333% 50%',
  recruit: '66.666% 50%',
  train: '100% 50%',
  assess: '0% 100%',
  deploy: '33.333% 100%',
  booking: '66.666% 100%',
  contact: '100% 100%',
} as const;

export type IllustrationKey = keyof typeof tilePositions;

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
      backgroundImage: 'url(/illustrations/home-support-card-sprite.png)',
      backgroundSize: '400% 300%',
      backgroundPosition: tilePositions[name],
    }}
  />
);
