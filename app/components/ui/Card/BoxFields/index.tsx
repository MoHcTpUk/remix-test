import type { ReactNode } from 'react';

import { Wrapper } from './styles';

type Props = {
  children: ReactNode;
};

export function BoxFields({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}
