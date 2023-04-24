import styled from 'styled-components';

import { TextVariantEnum } from '../Text/enums';

export const CheckboxBtnWrapper = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  span {
    font-size: ${TextVariantEnum.textBody2medium};
    @media (min-width: 768px) {
      font-size: ${TextVariantEnum.textBody1medium};
    }
  }
`;

export const ContainerCheckbox = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  margin-bottom: 4px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover input ~ span {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.auth.radioButtonColor};
  }

  & input:checked ~ span {
    background-color: ${({ theme }) => theme.auth.radioButtonColor};
  }

  input:checked ~ span:after {
    display: block;
  }

  & span:after {
    left: 5px;
    top: 2px;
    width: 8px;
    height: 11.5px;
    border-style: solid;
    border-color: white;
    border-image: initial;
    border-width: 0px 2px 2px 0px;
    transform: rotate(36deg);
  }
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.auth.radioButtonColor};
  border-radius: 50%;

  &::after {
    content: '';
    position: absolute;
    display: none;
  }
`;

export const CheckboxBtn = styled.input`
  accent-color: ${({ theme }) => theme.auth.radioButtonColor};
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

export const BoxErrors = styled.div<{ isText?: boolean }>`
  margin-left: 16px;
  margin: ${({ isText }) => isText && '4px 0'};
`;
