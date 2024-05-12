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

export const ButtonsControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const LabelRadio = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  input {
    height: 16px;
    width: 16px;
    margin-bottom: 4px;
  }
`;
