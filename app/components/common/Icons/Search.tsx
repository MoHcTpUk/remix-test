import type { SVGProps } from 'react';
import * as React from 'react';

function SvgSearch(props: SVGProps<SVGSVGElement>) {
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
        d='m15 15 6 6m-11-4a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z'
        stroke='CurrentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export default SvgSearch;
