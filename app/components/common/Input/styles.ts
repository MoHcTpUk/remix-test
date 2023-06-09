import styled from 'styled-components';

import { FONT_SIZES_DESC, FONT_SIZES_MOB } from '../Text';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: 'flex-start';
  width: 100%;
`;

export const WrapperInner = styled.div`
  width: 100%;
  position: relative;
`;

export const InputComponent = styled.input<{ backgrond?: string; error?: boolean }>`
  width: 100%;
  height: 100%;
  border: ${({ theme, error }) =>
    error ? `2px solid ${theme.errorTextColor}` : `1px solid ${theme.inputs.borderColor}`};

  background-color: transparent;
  border-radius: 80px;
  padding: 11px 16px;
  font-size: ${FONT_SIZES_MOB.textBody2};
  line-height: 18px;

  &:focus::-webkit-textfield-decoration-container {
    visibility: hidden;
    pointer-events: none;
    position: absolute;
    border: 1px solid ${({ theme }) => theme.inputs.borderFocusColor};
  }

  @supports (not (-ms-ime-align: auto)) {
    &:focus + .placeholder,
    &:not(:placeholder-shown) + .placeholder {
      transform: translate(16px, -50px) scale(0.8);
      z-index: 1;
      padding: 0px 4px;
      padding: 0 4px;
      background: ${({ theme, backgrond }) => backgrond || theme.inputs.backgroundDefaultColor};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.inputs.borderFocusColor};
    }

    &:active {
      border: 1px solid ${({ theme }) => theme.inputs.borderFocusColor};
    }
  }

  @media (min-width: 1024px) {
    padding: 16px;
    font-size: ${FONT_SIZES_DESC.textBody2};
    line-height: 24px;

    @supports (not (-ms-ime-align: auto)) {
      &:focus + .placeholder,
      &:not(:placeholder-shown) + .placeholder {
        transform: translate(16px, -62px) scale(0.8);
        padding: 0px 6px;
      }

      &:focus {
        border: 1px solid ${({ theme }) => theme.inputs.borderFocusColor};
      }
      &:active {
        border: 1px solid ${({ theme }) => theme.inputs.borderFocusColor};
      }
    }
  }
`;

export const PlaceHolder = styled.label`
  display: block;
  line-height: 0;
  color: grey;
  position: absolute;
  font-size: ${FONT_SIZES_MOB.textBody2};
  line-height: 18px;

  @supports (not (-ms-ime-align: auto)) {
    transform: translate(16px, -30px);
    transition: all 0.2s ease-out;
  }

  @media (min-width: 1024px) {
    font-size: ${FONT_SIZES_DESC.textBody2};

    @supports (not (-ms-ime-align: auto)) {
      transform: translate(16px, -36px);
    }
  }
`;

export const BoxErrors = styled.div<{ isText?: boolean }>`
  margin-left: 16px;
  margin: ${({ isText }) => isText && '4px 0'};
`;

export const ButtonClear = styled.div`
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
  @media (min-width: 1024px) {
    top: 16px;
    right: 16px;
  }
`;
