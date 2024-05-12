import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.user.backgroundPageColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  background-color: ${({ theme }) => theme.user.backgroundPageColor};
  width: 100%;

  @media (min-width: 768px) {
    max-width: 506px;
  }

  @media (min-width: 1024px) {
    max-width: 606px;
  }

  @media (min-width: 1280px) {
    max-width: 920px;
  }
`;
