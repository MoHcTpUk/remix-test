import type { SVGProps } from 'react';
import * as React from 'react';

function SvgDown(props: SVGProps<SVGSVGElement>) {
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
        d='m19 9-7 7-7-7'
        stroke='CurrentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export default SvgDown;
