import styled from "styled-components";

const Container = styled.div`
  background-color: #2b2b2b;
`

const Header = styled.h1`
  color: #fff;
`

export function Component1() {
  return (
    <Container className="m-20">
      <Header>
        Component 1
      </Header>
    </Container>
  );
}