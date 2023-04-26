import type { ReactNode } from 'react';
import { memo } from 'react';

import { BoxContainer, Wrapper } from './styles';

export const WrapperContainer = memo(
  ({ children }: { children: ReactNode }): JSX.Element => (
    <Wrapper>
      <BoxContainer>{children}</BoxContainer>
    </Wrapper>
  ),
);
