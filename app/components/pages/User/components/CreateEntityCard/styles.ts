import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;

  & a,
  button {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  @media (min-width: 768px) {
    & a,
    button {
      width: fit-content;
    }
  }
`;
