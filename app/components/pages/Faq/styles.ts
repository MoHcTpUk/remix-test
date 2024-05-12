import { styled } from 'styled-components';

export const SubText = styled.div`
  padding-top: 16px;
  margin-top: 8px;
  border-top: 1px solid ${({ theme }) => theme.user.borderColor};

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const Answer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (min-width: 768px) {
    gap: 24px;
  }
`;
export const FieldWithDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const List = styled.ul<{ index?: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ index }) => (index === 1 ? '18px' : '16px')};
  padding-left: 24px;
  letter-spacing: -0.364px;

  @media (min-width: 768px) {
    gap: ${({ index }) => (index === 1 ? '24px' : '18px')};
  }
`;
