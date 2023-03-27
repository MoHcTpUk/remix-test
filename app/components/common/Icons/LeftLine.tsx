import * as React from 'react';
import { SVGProps } from 'react';
const SvgLeftLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M19 12H5m0 0 6 6m-6-6 6-6'
      stroke='CurrentColor'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
export default SvgLeftLine;
