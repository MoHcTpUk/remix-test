import { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '~/root';
import { Box } from '../common/Box';
import { Footer } from '../lib/Footer';
import { Navbar } from '../lib/Navbar';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Container = styled(Box)`
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const CommonLayout = ({ children }: Props): JSX.Element => {
  const userContext = useContext(UserContext);

  return (
    <Container flexDirection='column' minHeight='100vh'>
      <Navbar theme={userContext!.theme} />

      <Box width='100%' flexDirection='column' flexGrow='1'>
        {children}
      </Box>

      <Footer theme={userContext!.theme} />
    </Container>
  );
};
