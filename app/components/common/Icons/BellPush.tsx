import type { SVGProps } from 'react';
import * as React from 'react';

function SvgBellPush(props: SVGProps<SVGSVGElement>) {
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
        d='M9 21h6M5.269 9.75A6.74 6.74 0 0 1 12.051 3c3.712.028 6.68 3.113 6.68 6.835v.665c0 3.358.703 5.306 1.322 6.371A.75.75 0 0 1 19.408 18H4.592a.749.749 0 0 1-.645-1.13c.62-1.064 1.322-3.013 1.322-6.37v-.75Z'
        stroke='CurrentColor'
        strokeWidth={1.44}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle cx={19} cy={6} r={4} fill='#BA2320' />
    </svg>
  );
}
export default SvgBellPush;
