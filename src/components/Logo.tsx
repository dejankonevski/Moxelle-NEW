/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  // 'dark' variant is for light backgrounds (text is dark navy)
  // 'light' variant is for dark backgrounds (text is white)
  const textColorClass = variant === 'dark' ? 'text-brand-navy' : 'text-white';

  return (
    <div className={`flex flex-col items-start ${className} select-none`}>
      <div className="flex items-baseline leading-none">
        <span className="font-sans font-extrabold text-[1.95rem] md:text-[2.25rem] tracking-tight text-brand-teal">M</span>
        <span className={`font-sans font-bold text-[1.95rem] md:text-[2.25rem] tracking-tight -ml-[1px] ${textColorClass}`}>oxelle</span>
      </div>
      <div className="flex items-center gap-[4px] text-[10px] md:text-[11px] font-sans font-normal tracking-wide -mt-[2px] self-end pr-[2px]">
        <span className={variant === 'dark' ? 'text-brand-navy/80' : 'text-white/80'}>consider</span>
        <span className="text-brand-teal font-semibold">it</span>
        <span className={variant === 'dark' ? 'text-brand-navy/80' : 'text-white/80'}>done</span>
      </div>
    </div>
  );
}
