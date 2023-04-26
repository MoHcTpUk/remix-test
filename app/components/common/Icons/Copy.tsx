import type { SVGProps } from 'react';
import * as React from 'react';

function SvgCopy(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={25}
      height={24}
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M13.5 21h-9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5.586a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1Z'
        stroke='CurrentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.5 6V4a1 1 0 0 1 1-1h5.586a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V17a1 1 0 0 1-1 1h-6'
        stroke='CurrentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.5 11h-4a1 1 0 0 1-1-1V6M21.5 8h-4a1 1 0 0 1-1-1V3'
        stroke='CurrentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export default SvgCopy;
