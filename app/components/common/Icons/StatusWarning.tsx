import type { SVGProps } from 'react';
import * as React from 'react';

function SvgStatusWarning(props: SVGProps<SVGSVGElement>) {
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
        fill='#3B67C0'
        stroke='#3B67C0'
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.95 15.453h.1v.1h-.1v-.1ZM12 8.453v4'
        stroke='#ECF2FE'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export default SvgStatusWarning;
