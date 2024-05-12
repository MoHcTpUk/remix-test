import { Outlet } from '@remix-run/react';

import { Box } from '~/components/common/Box';
import { Heading } from '~/components/common/Heading';
import { Sidebar } from '~/components/entities/Sidebar';
import { CommonLayout } from '~/components/layouts/CommonLayout';
import { useRouteChecks } from '~/hooks';

import { BoxContainer, Wrapper } from './styles';

type Props = {
  variant: 'user' | 'fixedWidth';
  noHeading?: boolean;
};

export function RouteLayout({ variant, noHeading = false }: Props) {
  const { isUserResponses } = useRouteChecks();

  return (
    <CommonLayout>
      <Wrapper>
        <BoxContainer variant={variant} isUserResponses={isUserResponses}>
          {!noHeading && <Heading />}
          <Box flexDirection={variant === 'user' ? 'row' : 'column'} gap='24px'>
            {variant === 'user' && <Sidebar />}
            <Outlet />
          </Box>
        </BoxContainer>
      </Wrapper>
    </CommonLayout>
  );
}
