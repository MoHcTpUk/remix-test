import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  padding: 80px 16px 0;
  & a,
  button {
    width: 100%;
  }

  @media (min-width: 768px) {
    padding: 96px 0;
    & a,
    button {
      width: fit-content;
      align-self: center;
    }
  }
  @media (min-width: 1024px) {
    padding: 104px 0;
  }
  @media (min-width: 1280px) {
    padding: 104px 0;
  }
`;
