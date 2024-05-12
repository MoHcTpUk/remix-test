import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    min-width: 282px;
    min-height: calc(100vh - 419px);
    background-color: ${({ theme }) => theme.user.backgroundCardColor};
    border-radius: 12px;
    gap: 8px;
  }
`;
