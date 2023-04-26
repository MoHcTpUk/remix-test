import styled from 'styled-components';

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  max-width: 100%;
  @media (min-width: 768px) {
    max-width: 388px;
  }
  @media (min-width: 1024px) {
    gap: 32px;
  }
`;

export const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 24px;
  margin-bottom: -8px;
  @media (min-width: 1024px) {
    margin-bottom: -16px;
  }
`;

export const BoxSocial = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 24px;
  margin-top: -8px;
  @media (min-width: 1024px) {
    margin-top: -16px;
  }
`;

export const BoxHelp = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  justify-content: center;
  margin-top: -8px;
  @media (min-width: 1024px) {
    margin-top: -16px;
  }
`;

export const PoliciesText = styled.div`
  margin-top: -8px;
  text-align: center;
`;

export const HelpButton = styled.div`
  &:hover,
  &:focus {
    span {
      color: ${({ theme }) => theme.auth.helpButtonHoverColor};
    }
  }
  &:active {
    transform: scale(0.95);
    span {
      color: ${({ theme }) => theme.auth.helpButtonActiveColor};
    }
  }
`;
