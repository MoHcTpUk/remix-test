import type { SVGProps } from 'react';
import * as React from 'react';

function SvgShare(props: SVGProps<SVGSVGElement>) {
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
        d='M20.63 10.23 13 4v4c-7.1.28-10 6.13-10 12 0 0 3.88-5.69 10-6v4l7.63-6.23a1 1 0 0 0 0-1.54Z'
        stroke='CurrentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export default SvgShare;
