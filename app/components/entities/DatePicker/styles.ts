import styled from 'styled-components';

import { FONT_SIZES_DESC, FONT_SIZES_MOB } from '~/components/common/Text';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: 'flex-start';
  width: 100%;
  position: relative;
`;

export const WrapperInner = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  position: relative;
  @media (min-width: 768px) {
    height: 44px;
  }
`;

export const SelectContainer = styled.div<{ disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  opacity: ${({ disabled }) => disabled && 0.6};

  @media (min-width: 1024px) {
    /* display: flex; */
    flex-direction: row;
    /* width: 100%; */
    justify-content: space-between;
    /* gap: 24px; */
  }
`;

export const CustomSelect = styled.select<{ disabled?: boolean; error?: boolean }>`
  border-radius: 80px;
  z-index: 2;
  position: relative;
  width: 100%;
  height: 40px;
  border: ${({ theme, error }) =>
    error ? `2px solid ${theme.errorTextColor}` : `1px solid ${theme.inputs.borderColor}`};
  background-color: transparent;
  font-size: ${FONT_SIZES_MOB.textBody2};
  line-height: 18px;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 10px 16px;
  cursor: ${({ disabled }) => !disabled && 'pointer'};

  &:focus::-webkit-textfield-decoration-container {
    visibility: hidden;
    pointer-events: none;
    position: absolute;
    border: 1px solid
      ${({ theme, error }) => (error ? theme.errorTextColor : theme.inputs.borderFocusColor)};
  }

  &:focus-visible {
    border: 1px solid
      ${({ theme, error }) => (error ? theme.errorTextColor : theme.inputs.borderFocusColor)};
    outline: none;
  }

  @media (min-width: 768px) {
    height: 44px;
    line-height: 24px;
  }
`;

export const WrpperIcon = styled.label<{ isDropdownOpen?: boolean }>`
  position: absolute;
  top: 8px;
  right: 10px;
  width: 24px;
  height: 24px;
  transform: ${({ isDropdownOpen }) => (isDropdownOpen ? '0' : 'rotate(180deg)')};
  transition: all 0.26s ease-in;
  z-index: 1;
  pointer-events: none;
  @media (min-width: 768px) {
    top: 9px;
    right: 12px;
  }
`;

export const CheckboxContainer = styled.div`
  display: none;
`;

export const PlaceHolder = styled.label<{ backgroundColor?: string; error?: boolean }>`
  z-index: 2;
  display: block;
  line-height: 0;
  color: ${({ theme, error }) => (error ? theme.errorTextColor : theme.defaultTextColor)};
  position: absolute;
  font-size: ${FONT_SIZES_MOB.textBody2};
  line-height: 18px;
  padding: 0 4px;
  transform: scale(0.8);
  top: -8px;
  left: 8px;
  background: ${({ theme, backgroundColor }) =>
    backgroundColor || theme.inputs.backgroundDefaultColor};
  transition: all 0.2s cubic-bezier(0.84, -0.03, 0.49, 0.23);

  @media (min-width: 1024px) {
    font-size: ${FONT_SIZES_DESC.textBody2};
  }
`;

export const BoxErrors = styled.div<{ isText?: boolean }>`
  position: absolute;
  left: 16px;
  top: 38px;

  @media (min-width: 768px) {
    top: 42px;
  }
`;
