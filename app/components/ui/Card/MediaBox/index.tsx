import type { ReactNode } from 'react';

import { Wrapper } from './styles';

type Props = {
  variant?: 'mobile' | 'desktop';
  children?: ReactNode;
};

export function MediaBox({ children, variant }: Props) {
  return <Wrapper variant={variant}>{children}</Wrapper>;
}
