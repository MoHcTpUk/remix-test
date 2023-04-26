import type { SVGProps } from 'react';
import * as React from 'react';

function SvgCart(props: SVGProps<SVGSVGElement>) {
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
        d='M18.5 6h-12v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6ZM4.5 6h16M15.5 3h-6a1 1 0 0 0-1 1v2h8V4a1 1 0 0 0-1-1Z'
        stroke='CurrentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export default SvgCart;
