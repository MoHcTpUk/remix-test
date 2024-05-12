import type { SVGProps } from 'react';
import * as React from 'react';

function SvgChat(props: SVGProps<SVGSVGElement>) {
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
        d='M21 12a9 9 0 0 1-13.815 7.605L3 21l1.395-4.185A9 9 0 1 1 21 12Z'
        stroke='CurrentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='m15 10-4 4-2-2'
        stroke='CurrentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export default SvgChat;
