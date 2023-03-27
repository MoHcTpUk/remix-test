import * as React from 'react';
import { SVGProps } from 'react';
const SvgEmailPush = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={24}
    viewBox='0 0 25 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='m20.5 6-7.177 6.332a2 2 0 0 1-2.646 0L3.5 6M5 5.25h14a2 2 0 0 1 2 2v9.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9.5a2 2 0 0 1 2-2Z'
      stroke='CurrentColor'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <circle cx={21} cy={6} r={4} fill='#BA2320' />
  </svg>
);
export default SvgEmailPush;
