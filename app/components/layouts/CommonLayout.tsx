import { styled } from 'styled-components';

import { Box } from '../common/Box';
import { Footer } from '../entities/Footer';
import { Navbar } from '../entities/Navbar';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Container = styled(Box)`
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export function CommonLayout({ children }: Props): JSX.Element {
  return (
    <Container flexDirection='column' minHeight='100vh'>
      <Navbar />

      <Box
        width='100%'
        flexDirection='column'
        alignItems='center'
        flexGrow='1'
        backgroundColor='#E4E6E9'
      >
        {children}
      </Box>

      <Footer />
    </Container>
  );
}
