import React, { useEffect, useState } from 'react';

interface PawClick {
  id: number;
  x: number;
  y: number;
  rotation: number;
}

export const PawCursorEffect: React.FC = () => {
  const [paws, setPaws] = useState<PawClick[]>([]);

  useEffect(() => {
    let nextId = 0;
    const handleClick = (e: MouseEvent) => {
      // Small random rotation between -25 and 25 deg for realistic paw step feel
      const rotation = (Math.random() - 0.5) * 50;
      const newPaw: PawClick = {
        id: nextId++,
        x: e.clientX,
        y: e.clientY,
        rotation,
      };

      setPaws((prev) => [...prev.slice(-8), newPaw]);

      setTimeout(() => {
        setPaws((prev) => prev.filter((p) => p.id !== newPaw.id));
      }, 700);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {paws.map((paw) => (
        <div
          key={paw.id}
          className="absolute text-[#4F7A5E] opacity-70 transition-all duration-700 ease-out animate-paw-step"
          style={{
            left: paw.x - 14,
            top: paw.y - 14,
            transform: `rotate(${paw.rotation}deg)`,
          }}
        >
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <g filter="drop-shadow(0 2px 4px rgba(79,122,94,0.3))">
              <path
                d="M16 16c-3 0-5.8 1.8-5.8 4.8 0 2.6 2.5 4.4 5.8 4.4s5.8-1.8 5.8-4.4c0-3-2.8-4.8-5.8-4.8z"
                fill="#4F7A5E"
                fillOpacity="0.85"
              />
              <ellipse cx="9.5" cy="14.5" rx="2.3" ry="3" transform="rotate(-25 9.5 14.5)" fill="#4F7A5E" fillOpacity="0.85" />
              <ellipse cx="13.8" cy="10.5" rx="2.4" ry="3.2" transform="rotate(-10 13.8 10.5)" fill="#4F7A5E" fillOpacity="0.85" />
              <ellipse cx="18.2" cy="10.5" rx="2.4" ry="3.2" transform="rotate(10 18.2 10.5)" fill="#4F7A5E" fillOpacity="0.85" />
              <ellipse cx="22.5" cy="14.5" rx="2.3" ry="3" transform="rotate(25 22.5 14.5)" fill="#4F7A5E" fillOpacity="0.85" />
            </g>
          </svg>
        </div>
      ))}
    </div>
  );
};
