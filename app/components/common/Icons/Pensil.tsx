import * as React from 'react';
import { SVGProps } from 'react';
const SvgPensil = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M4 20h4L19.293 8.707a1 1 0 0 0 0-1.414l-2.586-2.586a1 1 0 0 0-1.414 0L4 16v4ZM12 8l4 4'
      stroke='CurrentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
export default SvgPensil;
