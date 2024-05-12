import type { SVGProps } from 'react';
import * as React from 'react';

function SvgNoteSearch(props: SVGProps<SVGSVGElement>) {
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
        d='M10 20H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5M16 16l3 3'
        stroke='CurrentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.5 17a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z'
        stroke='CurrentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export default SvgNoteSearch;
