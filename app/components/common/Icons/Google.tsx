import * as React from 'react';
import { SVGProps } from 'react';
const SvgGoogle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        d='M24 12.275c0-.815-.067-1.635-.211-2.438H12.24v4.621h6.613a5.55 5.55 0 0 1-2.448 3.647v2.998h3.946C22.669 19.013 24 15.926 24 12.275Z'
        fill='#4285F4'
      />
      <path
        d='M12.24 24c3.303 0 6.088-1.063 8.116-2.897l-3.945-2.998c-1.098.732-2.515 1.146-4.166 1.146-3.194 0-5.902-2.112-6.873-4.951H1.3v3.09C3.38 21.444 7.612 24 12.24 24Z'
        fill='#34A853'
      />
      <path
        d='M5.367 14.3a7.053 7.053 0 0 1 0-4.595V6.614H1.3a11.797 11.797 0 0 0 0 10.776l4.067-3.09Z'
        fill='#FBBC04'
      />
      <path
        d='M12.24 4.749a6.727 6.727 0 0 1 4.697 1.799l3.496-3.426A11.9 11.9 0 0 0 12.24 0C7.61 0 3.379 2.557 1.3 6.614l4.066 3.091c.967-2.844 3.68-4.956 6.874-4.956Z'
        fill='#EA4335'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGoogle;
