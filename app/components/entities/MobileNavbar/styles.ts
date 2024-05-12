import { styled } from 'styled-components';

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1280px) {
    .noDesktop {
      display: none;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.user.borderColor};
  padding: 16px 0 8px;
  display: 'flex';
  flex-direction: column;
  gap: 8px;

  &:first-child {
    margin-top: 16px;
  }

  @media (min-width: 768px) {
    padding: 16px 0 16px;
  }

  @media (min-width: 1280px) {
    border-top: none;
    border-bottom: 1px solid ${({ theme }) => theme.user.borderColor};
    margin-bottom: 16px;
  }
`;

export const TranslateBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 16px 0;
  border-top: 1px solid ${({ theme }) => theme.user.borderColor};
  border-bottom: 1px solid ${({ theme }) => theme.user.borderColor};

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  gap: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.user.borderColor};
  margin-bottom: 16px;

  @media (min-width: 1280px) {
    display: none;
  }
`;
