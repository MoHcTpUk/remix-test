import type { ReactNode } from 'react';
import { memo } from 'react';

import { BoxContainer, Wrapper } from './styles';

export function WrapperContainer({ children }: { children: ReactNode }): JSX.Element {
  return (
    <Wrapper>
      <BoxContainer>{children}</BoxContainer>
    </Wrapper>
  );
}
