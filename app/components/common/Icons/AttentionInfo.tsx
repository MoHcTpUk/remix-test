import type { SVGProps } from 'react';
import * as React from 'react';

function SvgAttentionInfo(props: SVGProps<SVGSVGElement>) {
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
        d='M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 11v5'
        stroke='#3C79F5'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.95 8h.1v.1h-.1V8Z'
        stroke='#3C79F5'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export default SvgAttentionInfo;
