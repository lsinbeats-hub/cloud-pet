import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

export const CloudPetLogo: React.FC<LogoProps> = ({ 
  className = '', 
  iconOnly = false,
  light = false 
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Pure Standalone Dog Paw - Larger, without any background square */}
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-9 h-9 sm:w-10 sm:h-10 shrink-0 transition-transform duration-200 group-hover:scale-110 ${
          light ? 'text-[#CDE1D2]' : 'text-[#4F7A5E]'
        }`}
        aria-hidden="true"
      >
        {/* Main Palm/Metacarpal Pad */}
        <path
          d="M24 22C19.2 22 14.8 25 14.8 30.2C14.8 34.5 18.6 37.2 24 37.2C29.4 37.2 33.2 34.5 33.2 30.2C33.2 25 28.8 22 24 22Z"
          fill="currentColor"
        />
        {/* 4 Toe Beans */}
        <ellipse cx="13" cy="17.5" rx="3.5" ry="4.7" transform="rotate(-26 13 17.5)" fill="currentColor" />
        <ellipse cx="19.8" cy="12" rx="3.6" ry="5.2" transform="rotate(-8 19.8 12)" fill="currentColor" />
        <ellipse cx="28.2" cy="12" rx="3.6" ry="5.2" transform="rotate(8 28.2 12)" fill="currentColor" />
        <ellipse cx="35" cy="17.5" rx="3.5" ry="4.7" transform="rotate(26 35 17.5)" fill="currentColor" />
      </svg>

      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1">
            <span className={`text-xl font-bold tracking-tight ${
              light ? 'text-white' : 'text-[#1E2922]'
            }`}>
              Cloud <span className={light ? 'text-[#CDE1D2]' : 'text-[#4F7A5E]'}>Pet</span>
            </span>
          </div>
          <span className={`text-[10px] font-medium tracking-wider uppercase mt-0.5 ${
            light ? 'text-white/70' : 'text-slate-500'
          }`}>
            Pet Care & Boutique
          </span>
        </div>
      )}
    </div>
  );
};
