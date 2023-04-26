import * as React from 'react';
import { SVGProps } from 'react';
const SvgFb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={24}
    viewBox='0 0 25 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M24.5 12c0-6.627-5.373-12-12-12S.5 5.373.5 12c0 5.989 4.388 10.954 10.125 11.855V15.47H7.577V12h3.048V9.356c0-3.008 1.792-4.67 4.533-4.67 1.313 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.956.925-1.956 1.875v2.25h3.328l-.532 3.47h-2.796v8.386C20.112 22.955 24.5 17.99 24.5 12Z'
      fill='#1977F3'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='m17.171 15.47.532-3.47h-3.328V9.749c0-.949.464-1.875 1.956-1.875h1.514V4.921s-1.374-.235-2.687-.235c-2.74 0-4.533 1.66-4.533 4.67V12H7.578v3.47h3.047v8.385a12.27 12.27 0 0 0 3.75 0V15.47h2.796Z'
      fill='#fff'
    />
  </svg>
);
export default SvgFb;
