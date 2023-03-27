import styled from 'styled-components';
import { Box } from '../common/Box';
import { Footer } from '../lib/Footer';
import { Navbar } from '../lib/Navbar';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Container = styled(Box)`
  background-color: ${(props) => props.theme.pageBackground};
`;

export const CommonLayout = ({ children }: Props): JSX.Element => {
  const navbarItems = [
    { id: 0, title: 'Home', href: '/' },
    { id: 1, title: 'Todo', href: '/' },
  ];

  return (
    <Container flexDirection='column' minHeight='100vh'>
      <Navbar items={navbarItems} />

      <Box width='100%' padding='24px' flexDirection='column' flexGrow='1'>
        {children}
      </Box>

      <Footer />
    </Container>
  );
};
