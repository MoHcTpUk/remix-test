import type { SVGProps } from 'react';
import * as React from 'react';

function SvgBlackWarning(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'>
        <path
          d='M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'
          fill='#454857'
          stroke='#454857'
          strokeMiterlimit={10}
        />
        <path d='M11.95 15.45h.1v.1h-.1v-.1ZM12 8.45v4' stroke='#EDEFF2' />
      </g>
    </svg>
  );
}
export default SvgBlackWarning;
