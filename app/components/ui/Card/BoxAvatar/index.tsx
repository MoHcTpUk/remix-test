import type { ReactNode } from 'react';

import { WrapperForSearch, WrapperForUser } from './styles';

type Props = {
  variant: 'user' | 'search';
  children: ReactNode;
};

export function BoxAvatar({ children, variant }: Props) {
  return variant === 'user' ? (
    <WrapperForUser>{children}</WrapperForUser>
  ) : (
    <WrapperForSearch>{children}</WrapperForSearch>
  );
}
