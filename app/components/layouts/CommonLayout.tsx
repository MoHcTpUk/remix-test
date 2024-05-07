import styled from 'styled-components';
import { Box } from '../common/Box';
import { Footer } from '../lib/Footer';
import { Navbar } from '../lib/Navbar';
import { getUserTheme } from '~/i18n/utils';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Container = styled(Box)`
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const CommonLayout = ({ children }: Props): JSX.Element => {
  return (
    <Container flexDirection='column' minHeight='100vh'>
      <Navbar />

      <Box
        width='100%'
        flexDirection='column'
      // flexGrow='1'
      >
        {children}
      </Box>

      <Footer />
    </Container>
  );
};
