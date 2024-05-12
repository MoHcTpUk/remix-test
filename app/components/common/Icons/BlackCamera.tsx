import type { SVGProps } from 'react';
import * as React from 'react';

function SvgBlackCamera(props: SVGProps<SVGSVGElement>) {
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
        d='M21 6h-3.4l-.386-1.287A1 1 0 0 0 16.256 4H8.344a1 1 0 0 0-.958.713L7 6H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm-9 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z'
        fill='#454857'
      />
    </svg>
  );
}
export default SvgBlackCamera;
