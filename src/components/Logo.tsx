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
      <div className="relative flex-shrink-0">
        <img 
        src="/dndn_logo.jpg" 
        alt="DeepNDev Logo" 
        className="w-10 h-10 rounded-xl object-cover shadow-sm border border-gray-100"
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`text-xl font-bold ${textColor} tracking-tight font-kanit italic uppercase`}>
            DEEP N DEV
          </span>
          <span className={`text-[9px] font-medium ${taglineColor} tracking-normal whitespace-nowrap font-kanit`}>
            Deep in details, Develop to success
          </span>
        </div>
      )}
    </div>
  );
}
