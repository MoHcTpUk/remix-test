import type { SVGProps } from 'react';
import * as React from 'react';

function SvgStatusApproved(props: SVGProps<SVGSVGElement>) {
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
        d='M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'
        fill='#214923'
        stroke='#214923'
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='m15 10-4 4-2-2'
        stroke='#EDF7ED'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export default SvgStatusApproved;
