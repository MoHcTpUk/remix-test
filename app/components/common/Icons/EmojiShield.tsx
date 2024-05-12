import type { SVGProps } from 'react';
import * as React from 'react';

function SvgEmojiShield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={33}
      height={36}
      viewBox='0 0 33 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M31.045 3c-7-3-15-3-15-3s-8 0-15 3c-3 15 0 28 15 33 15-5 18-18 15-33Z'
        fill='#CCD6DD'
      />
      <path
        d='M16.045 33.884C4.457 29.729.006 19.831 2.805 4.444 9.108 2.029 15.973 2 16.045 2c.071 0 6.958.04 13.24 2.444 2.8 15.387-1.652 25.285-13.24 29.44Z'
        fill='#55ACEE'
      />
      <path
        d='M29.285 4.444C23.003 2.04 16.116 2 16.045 2v31.884c11.588-4.155 16.04-14.053 13.24-29.44Z'
        fill='#269'
      />
    </svg>
  );
}
export default SvgEmojiShield;
