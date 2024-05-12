import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.auth.backgroundRegisterPage};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
  @media (min-width: 768px) {
    gap: 24px;
    margin-top: 80px;
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
    max-width: 476px;
    padding: 40px;
  }
  @media (min-width: 1280px) {
    padding: 48px 102px;
    max-width: 792px;
  }
`;

export const BoxRadios = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const RadioBtnWrapper = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const RadioBtn = styled.input`
  accent-color: ${({ theme }) => theme.auth.radioButtonColor};
  width: 20px;
  height: 20px;
`;
