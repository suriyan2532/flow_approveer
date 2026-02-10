"use client";

import React from "react";

interface LogoProps {
  showText?: boolean;
  className?: string;
  isWhite?: boolean;
}

export default function Logo({ showText = true, className = "", isWhite = false }: LogoProps) {
  const textColor = isWhite ? "text-white" : "text-black";
  const taglineColor = isWhite ? "text-white/80" : "text-black/60";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Refined Cherry Blossom Logo */}
      <div className="relative flex-shrink-0 w-10 h-10">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Petals Group */}
          <g transform="translate(50, 50)">
            {[0, 72, 144, 216, 288].map((angle) => (
              <g key={angle} transform={`rotate(${angle})`}>
                <path
                  d="M0 -5 C-15 -35, -8 -45, 0 -42 C8 -45, 15 -35, 0 -5"
                  fill="white"
                  stroke="black"
                  strokeWidth="3"
                />
                {/* Petal Notch Line */}
                <path
                  d="M0 -42 L0 -35"
                  stroke="black"
                  strokeWidth="2"
                  fill="none"
                />
              </g>
            ))}
          </g>
          
          {/* Center Red Circle */}
          <circle cx="50" cy="50" r="12" fill="#d32f2f" />
          
          {/* Detail Lines from center */}
          <g stroke="black" strokeWidth="1.5" fill="none">
             {[0, 72, 144, 216, 288].map((angle) => (
               <line key={angle} x1="50" y1="50" x2={50 + 8 * Math.sin(angle * Math.PI / 180)} y2={50 - 8 * Math.cos(angle * Math.PI / 180)} transform={`rotate(${angle}, 50, 50)`} />
             ))}
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`text-xl font-bold ${textColor} tracking-tight`}>
            DEEP N DEV
          </span>
          <span className={`text-[9px] font-medium ${taglineColor} tracking-normal whitespace-nowrap`}>
            Deep in details, Develop to success
          </span>
        </div>
      )}
    </div>
  );
}
