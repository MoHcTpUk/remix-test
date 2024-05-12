import { styled } from 'styled-components';

export const Wrapper = styled.div<{ variant?: 'resume' | 'company' | 'vacancy' | 'response' }>`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  @media (min-width: 768px) {
    padding-top: 8px;
  }
`;
