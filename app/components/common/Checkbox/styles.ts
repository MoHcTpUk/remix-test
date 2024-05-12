import { styled } from 'styled-components';

import { TextVariantEnum } from '../Text/enums';

export const CheckboxBtnWrapper = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  height: 20px;
  span {
    font-size: ${TextVariantEnum.textBody2medium};
    @media (min-width: 768px) {
      font-size: ${TextVariantEnum.textBody1medium};
    }
  }
  & > span {
    margin-bottom: -4px;
  }
`;

export const ContainerCheckbox = styled.div<{ disabled?: boolean }>`
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover input ~ span {
    background-color: transparent;
    border: 1px solid
      ${({ theme, disabled }) => (disabled ? theme.defaultTextColor : theme.auth.radioButtonColor)};
  }

  & input:checked ~ span {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.defaultTextColor : theme.auth.radioButtonColor};
    & svg path {
      fill: #fff;
    }
  }

  input:checked ~ span:after {
    display: block;
  }
`;

export const Checkmark = styled.span<{ disabled?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: 1px solid
    ${({ theme, disabled }) => (disabled ? theme.defaultTextColor : theme.auth.radioButtonColor)};
  border-radius: 50%;
  transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);

  & svg {
    position: absolute;
    right: 3.5px;
    top: 4.25px;
    & path {
      fill: none;
    }
  }
`;

export const CheckboxBtn = styled.input<{ disabled?: boolean }>`
  accent-color: ${({ theme, disabled }) =>
    disabled ? theme.defaultTextColor : theme.auth.radioButtonColor};
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

export const BoxErrors = styled.div<{ isText?: boolean }>`
  position: absolute;
  top: ${({ isText }) => isText && '16px'};
  left: ${({ isText }) => isText && '26px'};
  /* margin-left: 16px;
  margin: ${({ isText }) => isText && '4px 0'}; */
`;
