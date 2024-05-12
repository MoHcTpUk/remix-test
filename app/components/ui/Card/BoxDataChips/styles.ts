import { styled } from 'styled-components';

export const BoxData = styled.div`
  height: 32px;
  border-radius: 80px;
  padding: 6px 12px 4px;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.user.borderCustomFieldData};
  @media (min-width: 768px) {
    padding: 9px 12px 6px;
  }
`;
