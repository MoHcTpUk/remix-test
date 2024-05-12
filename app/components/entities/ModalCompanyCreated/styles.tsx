import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  align-items: center;
  justify-content: center;
  a {
    width: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    a {
      width: fit-content;
    }
  }
`;
