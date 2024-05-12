import type { SVGProps } from 'react';
import * as React from 'react';

function SvgNotVerifed(props: SVGProps<SVGSVGElement>) {
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
        d='M10.754 3.459a1.92 1.92 0 0 1 2.492 0l1.22 1.04c.308.262.69.42 1.094.453l1.599.128A1.92 1.92 0 0 1 18.92 6.84l.128 1.6c.032.402.19.785.453 1.092l1.04 1.221a1.92 1.92 0 0 1 0 2.492l-1.04 1.22c-.262.308-.42.69-.453 1.094l-.128 1.599a1.92 1.92 0 0 1-1.761 1.761l-1.6.128c-.402.032-.785.19-1.092.453l-1.221 1.04a1.92 1.92 0 0 1-2.492 0l-1.22-1.04a1.921 1.921 0 0 0-1.094-.453l-1.599-.128A1.92 1.92 0 0 1 5.08 17.16l-.128-1.6a1.92 1.92 0 0 0-.453-1.092l-1.04-1.221a1.92 1.92 0 0 1 0-2.492l1.04-1.22c.262-.308.42-.69.453-1.094l.128-1.599A1.92 1.92 0 0 1 6.84 5.08l1.6-.128a1.92 1.92 0 0 0 1.092-.453l1.221-1.04Z'
        fill='#ED6C02'
        stroke='#ED6C02'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 8v5'
        stroke='#fff'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M12.5 16a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z' fill='#fff' stroke='#fff' />
    </svg>
  );
}
export default SvgNotVerifed;
