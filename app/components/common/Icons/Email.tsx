import type { SVGProps } from 'react';
import * as React from 'react';

function SvgEmail(props: SVGProps<SVGSVGElement>) {
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
        d='m20.5 6-7.177 6.332a2 2 0 0 1-2.646 0L3.5 6M5 5.25h14a2 2 0 0 1 2 2v9.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9.5a2 2 0 0 1 2-2Z'
        stroke='CurrentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export default SvgEmail;
