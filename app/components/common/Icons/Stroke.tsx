import type { SVGProps } from 'react';
import * as React from 'react';

function SvgStroke(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={12}
      height={10}
      viewBox='0 0 12 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.061.422a1 1 0 0 1 .267 1.39l-5.085 7.5a1 1 0 0 1-1.525.154L.802 5.654A1 1 0 0 1 2.198 4.22l3.06 2.98L9.672.689a1 1 0 0 1 1.389-.267Z'
        fill='#fff'
      />
    </svg>
  );
}
export default SvgStroke;
