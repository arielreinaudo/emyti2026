import React from 'react';
import { EbookItem } from '../types';

interface EbookCoverProps {
  ebook: EbookItem;
  className?: string;
  logoImg?: string;
  badgeImg?: string;
}

export const EbookCover: React.FC<EbookCoverProps> = ({
  ebook,
  className = '',
  badgeImg = 'https://www.dropbox.com/scl/fi/s8536h7tgg2xi0nzxfkke/Emyti-nuevo-logo-transparente.png?rlkey=nztnagwk4hog68blvm8eym4qv&raw=1'
}) => {
  const { title, subtitle, authors, coverImage, theme } = ebook;

  if (coverImage) {
    return (
      <div className={`relative group/book select-none ${className}`}>
        {/* Book realistic wrapper */}
        <div className="relative aspect-[1/1.414] w-full rounded-r-xl rounded-l-sm overflow-hidden shadow-2xl shadow-slate-900/15 border border-slate-200/80 transition-all duration-500 group-hover/book:scale-[1.03] group-hover/book:shadow-indigo-500/20">
          {/* Spine 3D gradient reflection */}
          <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/20 via-black/5 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 left-1 w-[1px] bg-white/40 z-20 pointer-events-none" />
          
          {/* Cover image */}
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    );
  }

  // High-fidelity programmatic SVG / CSS book cover mockup
  const p = theme.polyhedronColors;

  return (
    <div className={`relative group/book select-none ${className}`}>
      {/* Book Mockup Container */}
      <div 
        className="relative aspect-[1/1.414] w-full rounded-r-xl rounded-l-sm overflow-hidden shadow-2xl shadow-slate-900/15 border border-slate-200/80 flex flex-col justify-between p-6 sm:p-7 text-center transition-all duration-500 group-hover/book:scale-[1.03] group-hover/book:shadow-indigo-500/20"
        style={{
          background: theme.bgGradient
        }}
      >
        {/* Book spine highlight overlay */}
        <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/20 via-black/5 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 left-1 w-[1px] bg-white/50 z-20 pointer-events-none" />
        {/* Book sheen / subtle light gloss */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 pointer-events-none z-10" />

        {/* Top Section: Geometric 3D Floating Polyhedron */}
        <div className="relative pt-2 pb-1 flex justify-center items-center">
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center">
            {/* Soft ground shadow for floating 3D effect */}
            <div className="absolute -bottom-3 w-28 h-6 bg-slate-800/15 rounded-full filter blur-md transform scale-y-50 pointer-events-none" />
            
            {/* Stylized Polyhedron SVG */}
            <svg 
              viewBox="0 0 200 200" 
              className="w-full h-full drop-shadow-md transform transition-transform duration-700 group-hover/book:rotate-3 group-hover/book:-translate-y-1"
            >
              <defs>
                <linearGradient id={`g1-${ebook.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={p.facet1} />
                  <stop offset="100%" stopColor={p.facet2} />
                </linearGradient>
                <linearGradient id={`g2-${ebook.id}`} x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={p.facet3} />
                  <stop offset="100%" stopColor={p.facet4} />
                </linearGradient>
                <linearGradient id={`g3-${ebook.id}`} x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={p.facet5} />
                  <stop offset="100%" stopColor={p.facet6} />
                </linearGradient>
              </defs>
              
              {/* Facets forming 3D Crystal / Polyhedron */}
              <polygon points="100,20 155,55 100,85" fill={p.facet1} opacity="0.95" />
              <polygon points="100,20 45,55 100,85" fill={p.facet2} opacity="0.9" />
              <polygon points="155,55 175,115 100,85" fill={p.facet3} opacity="0.85" />
              <polygon points="45,55 25,115 100,85" fill={p.facet4} opacity="0.95" />
              <polygon points="100,85 175,115 135,165" fill={p.facet5} opacity="0.9" />
              <polygon points="100,85 25,115 65,165" fill={p.facet6} opacity="0.85" />
              <polygon points="100,85 65,165 135,165" fill={`url(#g1-${ebook.id})`} opacity="0.98" />
              <polygon points="65,165 100,185 135,165" fill={p.facet2} opacity="0.9" />
              
              {/* Subtle facet highlights */}
              <polygon points="100,85 135,165 100,140" fill="#ffffff" opacity="0.12" />
              <polygon points="100,20 100,85 45,55" fill="#ffffff" opacity="0.15" />
            </svg>
          </div>
        </div>

        {/* Middle Section: Title & Subtitle */}
        <div className="my-auto px-1">
          <h4 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight leading-snug mb-3">
            {title}
          </h4>
          {subtitle && (
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-600 leading-relaxed max-w-[260px] mx-auto line-clamp-3">
              {subtitle}
            </p>
          )}
        </div>

        {/* Bottom Section: Authors & EMYTI Badge */}
        <div className="pt-2 flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-white rounded-full p-1 shadow-md border border-slate-100 flex items-center justify-center">
            <img 
              src={badgeImg} 
              alt="EMYTI" 
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500">
            {authors}
          </p>
        </div>
      </div>
    </div>
  );
};
