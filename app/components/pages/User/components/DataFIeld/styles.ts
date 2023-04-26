import styled from 'styled-components';

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BoxData = styled.div`
  padding: 0 16px;
  border-radius: 80px;
  display: flex;
  align-items: center;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.user.borderColor};
`;
