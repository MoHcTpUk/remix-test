import type { SVGProps } from 'react';
import * as React from 'react';

function SvgEmojiBriefcase(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={37}
      height={36}
      viewBox='0 0 37 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M32.473 8h-6V4a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v4h-6a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4Zm-20-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h-12V6Z'
        fill='#9A4E1C'
      />
      <path
        d='M36.473 20a4 4 0 0 1-4 4h-28a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v8Z'
        fill='#662113'
      />
      <path
        d='M36.473 18a4 4 0 0 1-4 4h-28a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v6Z'
        fill='#9A4E1C'
      />
      <path d='M22.473 18a2 2 0 0 1-2 2h-4a2 2 0 0 1 0-4h4a2 2 0 0 1 2 2Z' fill='#CCD6DD' />
    </svg>
  );
}
export default SvgEmojiBriefcase;
