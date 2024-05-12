import { styled } from 'styled-components';

export const BoxCustomData = styled.div`
  padding: 8px 12px;
  border-radius: 80px;
  border: 1px solid ${({ theme }) => theme.user.borderColor};
  height: 40px;
  @media (min-width: 1024px) {
    height: 44px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  @media (min-width: 1024px) {
    gap: 24px;
  }
`;

export const EmploymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding: 8px 0;
  }
`;
