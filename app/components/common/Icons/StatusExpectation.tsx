import type { SVGProps } from 'react';
import * as React from 'react';

function SvgStatusExpectation(props: SVGProps<SVGSVGElement>) {
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
        fill='#ED6C02'
        stroke='#ED6C02'
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 7v5h5'
        stroke='#FFF4E5'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export default SvgStatusExpectation;
