import type { ReactNode } from 'react';

import { Wrapper } from './styles';

type Props = {
  children: ReactNode;
};

export function BoxDataFieldsInner({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}
