import type { ReactNode } from 'react';

import { Wrapper } from './styles';

interface SearchContainerProps {
  children: ReactNode;
  isId: boolean;
}

export function SearchContainer({ children, isId }: SearchContainerProps) {
  return <Wrapper isId={isId}>{children}</Wrapper>;
}
