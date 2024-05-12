import styled from 'styled-components';

export const Wrapper = styled.div`
  display: none;
  border-radius: 8px;

  @media (min-width: 768px) {
    border-radius: 12px;
  }
  @media (min-width: 1280px) {
    display: flex;
    display: -webkit-flex;
    top: 0;
    box-shadow: ${({ theme }) => theme.сards.shadow};
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    position: sticky;
    overflow-y: auto;
    height: auto;
    max-height: 100vh;
    -webkit-overflow-scrolling: touch;
  }
`;
