import type { SVGProps } from 'react';
import * as React from 'react';

function SvgEmojiStar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={34}
      height={33}
      viewBox='0 0 34 33'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='m33.347 14.893-8.9-3.294L21.126.708a1 1 0 0 0-1.912 0L15.89 11.599l-8.9 3.294a1 1 0 0 0 0 1.876l8.895 3.293 3.324 11.223a1 1 0 0 0 1.918-.001l3.324-11.223 8.896-3.293a.998.998 0 0 0-.001-1.875Z'
        fill='#FFAC33'
      />
      <path
        d='m13.347 25.894-2.314-.856-.9-3.3a.998.998 0 0 0-1.929-.001l-.9 3.3-2.313.856a1 1 0 0 0 0 1.876l2.301.853.907 3.622a1 1 0 0 0 1.94-.001l.907-3.622 2.301-.853a.997.997 0 0 0 0-1.874ZM9.009 4.23l-2.364-.875L5.769.99a.999.999 0 0 0-1.876 0l-.875 2.365-2.365.875a1 1 0 0 0 0 1.876l2.365.875.875 2.365a1 1 0 0 0 1.876 0l.875-2.365 2.365-.875a1 1 0 0 0 0-1.876Z'
        fill='#FFCC4D'
      />
    </svg>
  );
}
export default SvgEmojiStar;
