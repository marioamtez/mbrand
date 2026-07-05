import React from 'react';
export function FloatingBadge() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 pr-4 md:pr-6">
      <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1c1c1c] rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-lg">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 md:w-8 md:h-8">
          
          <path
            d="M12 2V22M2 12H22M4.92893 4.92893L19.0711 19.0711M4.92893 19.0711L19.0711 4.92893"
            stroke="#D4FF00"
            strokeWidth="2.5"
            strokeLinecap="round" />
          
        </svg>
      </div>
    </div>);

}