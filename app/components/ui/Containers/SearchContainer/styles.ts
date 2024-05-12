import styled from 'styled-components';

export const Wrapper = styled.div<{ isId: boolean }>`
  width: 100%;
  /* background-color: ${({ theme }) => theme.user.backgroundPageColor}; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ isId }) => (isId ? '0 16px' : '16px')};

  @media (min-width: 768px) {
    padding: ${({ isId }) => (isId ? '0 44px' : '16px 44px')};
  }

  @media (min-width: 1024px) {
    padding: ${({ isId }) => (isId ? '0 104px' : '24px')};
  }

  @media (min-width: 1280px) {
    gap: 24px;
    display: flex;
    align-items: stretch;
    flex-direction: row;
    justify-content: center;
  }
`;
