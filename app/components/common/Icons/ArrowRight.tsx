import type { SVGProps } from 'react';
import * as React from 'react';

function SvgArrowRight(props: SVGProps<SVGSVGElement>) {
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
        d='m10 8 4 4-4 4'
        stroke='#566178'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export default SvgArrowRight;
