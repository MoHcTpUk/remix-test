import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: ${({ theme }) => theme.user.backgroundCardColor};
  border-radius: 8px;
  gap: 16px;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const BoxCardHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.user.borderColor};

  span {
    max-width: 140px;
  }
`;

export const BoxCotrol = styled.div`
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.user.borderColor};
  display: flex;
  flex-direction: 'row';
  gap: 16px;

  .icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
