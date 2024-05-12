import styled from 'styled-components';

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Section = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.user.borderColor};
  padding: 16px 0 0;
  flex-direction: column;

  /* &:first-child {
    margin-top: 16px;
  } */
`;
