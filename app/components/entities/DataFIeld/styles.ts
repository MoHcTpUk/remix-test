import styled from 'styled-components';

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const BoxData = styled.div`
  padding: 11px 16px 9px;
  border-radius: 80px;
  display: flex;
  align-items: center;
  min-height: 40px;
  height: fit-content;
  border: 1px solid ${({ theme }) => theme.user.borderColor};

  @media (min-width: 768px) {
    min-height: 44px;
    padding: 10px 16px 8px;
  }
`;
