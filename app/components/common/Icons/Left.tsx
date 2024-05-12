import type { SVGProps } from 'react';
import * as React from 'react';

function SvgLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M12.833 15.667 7 9.833 12.833 4'
        stroke='CurrentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export default SvgLeft;
