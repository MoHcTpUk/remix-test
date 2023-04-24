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

export const Wrapper = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.auth.backgroundRegisterPage};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoxTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.auth.backgroundRegisterContainerColor};
  border-radius: 8px;
  align-items: center;
  padding: 16px;
  gap: 24px;
  @media (min-width: 768px) {
    max-width: 476px;
    padding: 40px;
    gap: 32px;
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
  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const RadioBtnWrapper = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RadioBtn = styled.input`
  accent-color: ${({ theme }) => theme.auth.radioButtonColor};
  width: 20px;
  height: 20px;
`;
