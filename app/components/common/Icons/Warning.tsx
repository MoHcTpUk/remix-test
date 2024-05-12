import type { SVGProps } from 'react';
import * as React from 'react';

function SvgWarning(props: SVGProps<SVGSVGElement>) {
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
        d='M2.251 36C.316 36-.538 34.594.353 32.876L16.758 1.289c.892-1.719 2.352-1.719 3.244 0l16.405 31.587C37.3 34.594 36.446 36 34.51 36H2.25Z'
        fill='#FFCC4D'
      />
      <path
        d='M15.84 29.645a2.545 2.545 0 0 1 2.543-2.542 2.544 2.544 0 0 1 2.541 2.542 2.545 2.545 0 0 1-2.541 2.542 2.545 2.545 0 0 1-2.542-2.542Zm.196-19.226c0-1.368 1.01-2.215 2.346-2.215 1.304 0 2.346.88 2.346 2.215v12.547c0 1.335-1.042 2.215-2.346 2.215-1.336 0-2.346-.848-2.346-2.215V10.419Z'
        fill='#231F20'
      />
    </svg>
  );
}
export default SvgWarning;
