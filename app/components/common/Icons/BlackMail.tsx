import type { SVGProps } from 'react';
import * as React from 'react';

function SvgBlackMail(props: SVGProps<SVGSVGElement>) {
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
        d='M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-1.5 4.868-7 4a1 1 0 0 1-.992 0l-7-4A1 1 0 1 1 5.5 7.132l6.5 3.717 6.5-3.717a1.002 1.002 0 0 1 1 1.736Z'
        fill='#454857'
      />
    </svg>
  );
}
export default SvgBlackMail;
