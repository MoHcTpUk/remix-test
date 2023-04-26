import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.auth.backgroundRegisterPage};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.auth.backgroundRegisterContainerColor};
  border-radius: 8px;
  align-items: center;
  gap: 24px;
  padding: 16px;
  @media (min-width: 768px) {
    gap: 32px;
    max-width: 476px;
    padding: 40px;
  }
  @media (min-width: 1280px) {
    padding: 48px 102px;
    max-width: 792px;
  }
`;

export const BoxCheckbox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: center;
  }
`;
