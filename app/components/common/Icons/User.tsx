import type { SVGProps } from 'react';
import * as React from 'react';

function SvgUser(props: SVGProps<SVGSVGElement>) {
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
        d='M12 21a9 9 0 0 1-9-9v0a9 9 0 0 1 9-9v0a9 9 0 0 1 9 9v0a9 9 0 0 1-9 9v0Zm0-14a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm2.17 7.35a3.95 3.95 0 0 1-4.34 0 7 7 0 0 0-4.28 3.92 9.001 9.001 0 0 0 12.81.09l.09-.09a7 7 0 0 0-4.28-3.92v0Z'
        stroke='CurrentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export default SvgUser;
