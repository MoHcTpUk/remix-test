import type { ReactNode } from 'react';

import { BoxData } from './styles';

type BoxDataChipsProps = {
  children: ReactNode;
};

export function BoxDataChips({ children }: BoxDataChipsProps) {
  return <BoxData>{children}</BoxData>;
}
