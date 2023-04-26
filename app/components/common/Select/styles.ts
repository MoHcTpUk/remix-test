import styled from 'styled-components';

import { FONT_SIZES_DESC, FONT_SIZES_MOB } from '../Text';

export const DropdownWrapper = styled.div`
  width: 100%;
`;

export const DropdownSelect = styled.div<{
  error: boolean;
  background?: string;
  dropdownVisible?: boolean;
}>`
  width: 100%;
  height: 40px;
  background-color: transparent;
  position: relative;
  border: ${({ theme, error }) =>
    error ? `2px solid ${theme.errorTextColor}` : `1px solid ${theme.inputs.borderColor}`};
  transition: ${({ dropdownVisible }) =>
    dropdownVisible ? 'all 0.08s ease-in-out ' : 'all 0.08s ease-in-out .3s'};
  border-radius: ${({ dropdownVisible }) => (dropdownVisible ? '16px 16px 0 0' : '80px')};
  border-bottom: ${({ dropdownVisible }) => (dropdownVisible ? '0' : 'auto')};
  padding: 11px 16px;
  font-size: ${FONT_SIZES_MOB.textBody2};
  line-height: 18px;

  @media (min-width: 768px) {
    height: 44px;
  }

  @media (min-width: 1024px) {
    height: 54px;
  }

  @media (min-width: 1024px) {
    padding: 16px;
    font-size: ${FONT_SIZES_DESC.textBody2};
    line-height: 24px;
    height: 56px;
  }
`;

export const DropdownOverlayEntry = styled.div<{
  isSelected?: boolean;
  error?: boolean;
  background?: string;
  dropdownVisible?: boolean;
}>`
  z-index: 2;
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: -5px;
  background-color: white ${({ isSelected }) => (isSelected ? 'white' : 'rgba(234, 234, 239, 0.4)')};
  display: flex;
  background: ${({ background, theme }) => background || theme.inputs.backgroundDefaultColor};
  border: ${({ theme, error, dropdownVisible }) =>
    // eslint-disable-next-line no-nested-ternary
    dropdownVisible
      ? 'none'
      : error
      ? `2px solid ${theme.errorTextColor}`
      : `1px solid ${theme.inputs.borderColor}`};
  border-top: 0;
  border-radius: 0 0 16px 16px;

  cursor: pointer;
`;

export const DropdownOverlayEntryItem = styled.div`
  padding: 10px 16px;
`;

export const PlaceHolder = styled.label<{
  selectedValue?: string;
  dropdownVisible?: boolean;
  background?: string;
}>`
  display: block;
  line-height: 0;
  position: absolute;
  font-size: ${FONT_SIZES_MOB.textBody2};
  line-height: 18px;
  color: grey;
  transition: all 0.2s ease-out;
  transform: ${({ selectedValue, dropdownVisible }) =>
    !selectedValue && !dropdownVisible ? 'none' : 'translate(0, -18px) scale(0.8)'};

  z-index: ${({ selectedValue, dropdownVisible }) =>
    !selectedValue && !dropdownVisible ? '1' : 'auto'};
  padding: ${({ selectedValue, dropdownVisible }) =>
    !selectedValue && !dropdownVisible ? '0' : '0 4px'};
  background: ${({ theme, background }) => background || theme.inputs.backgroundDefaultColor};

  @media (min-width: 1024px) {
    font-size: ${FONT_SIZES_DESC.textBody2};
    transform: ${({ selectedValue, dropdownVisible }) =>
      !selectedValue && !dropdownVisible ? 'none' : 'translate(4px, -26px) scale(0.8)'};
  }
`;

export const WrpperIcon = styled.div<{ dropdownVisible: boolean }>`
  position: absolute;
  top: 6px;
  right: 10px;
  width: 24px;
  height: 24px;
  transform: ${({ dropdownVisible }) => (dropdownVisible ? '0' : 'rotate(180deg)')};
  transition: all 0.4s ease-in;

  @media (min-width: 1024px) {
    top: 12px;
    right: 12px;
  }
`;
