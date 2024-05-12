import type { ReactNode } from 'react';

import { Wrapper } from './styles';

interface WrapperContainerProps {
  children: ReactNode;
}

export function WrapperContainer({ children }: WrapperContainerProps) {
  return <Wrapper>{children}</Wrapper>;
}
