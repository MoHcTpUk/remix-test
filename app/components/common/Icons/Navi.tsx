import type { SVGProps } from 'react';
import * as React from 'react';

function SvgNavi(props: SVGProps<SVGSVGElement>) {
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
        d='m14.668 12.643-4.5-4.043a1 1 0 0 0-1.336 0l-4.5 4.043a1 1 0 0 0-.332.743V19a1 1 0 0 0 1 1h10v-6.614a1 1 0 0 0-.332-.743Z'
        stroke='CurrentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.875 20H19a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v5'
        stroke='CurrentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export default SvgNavi;
