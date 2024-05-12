import type { SVGProps } from 'react';
import * as React from 'react';

function SvgFilter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M10 18h11'
        stroke='CurrentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3 18h3'
        stroke='CurrentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6 20v-4M20 12h1M3 12h13M16 14v-4M14 6h7M3 6h7M10 8V4'
        stroke='CurrentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export default SvgFilter;
