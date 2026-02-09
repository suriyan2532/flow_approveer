"use client";

import React from "react";

interface LogoProps {
  showText?: boolean;
  className?: string;
}

export default function Logo({ showText = true, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Stylized Cherry Blossom / 5-Petal Flower */}
      <div className="relative flex-shrink-0 w-9 h-9">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Petals */}
          <path
            d="M50 10 C65 10, 75 25, 65 40 M65 40 C85 35, 95 50, 85 65 M85 65 C80 85, 60 95, 50 85 M50 85 C35 95, 15 85, 10 65 M10 65 C5 50, 15 35, 35 40 M35 40 C25 25, 35 10, 50 10"
            fill="white"
            stroke="black"
            strokeWidth="4"
          />
          {/* Individual Petal Detail (Optional refinement) */}
          <g fill="white" stroke="black" strokeWidth="4">
             {/* Top Petal */}
             <path d="M50 45 Q50 10 50 10 Q75 10 65 40 Z" />
             {/* Right Top Petal */}
             <path d="M55 50 Q85 35 85 35 Q95 50 65 60 Z" />
             {/* Right Bottom Petal */}
             <path d="M55 55 Q80 85 80 85 Q60 95 50 70 Z" />
             {/* Left Bottom Petal */}
             <path d="M45 55 Q15 85 15 85 Q5 65 35 60 Z" />
             {/* Left Top Petal */}
             <path d="M45 50 Q15 35 15 35 Q25 10 40 40 Z" />
          </g>
          {/* Center Red Dot */}
          <circle cx="50" cy="51" r="10" fill="#e11d48" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-xl font-black text-gray-900 tracking-tighter">
            DND
          </span>
          <span className="text-[8px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-0.5 whitespace-nowrap">
            Deep N Dev
          </span>
        </div>
      )}
    </div>
  );
}
