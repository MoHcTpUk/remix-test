import { styled } from 'styled-components';

import {
  FONT_SIZES_DESC,
  FONT_SIZES_MOB,
  FONT_WEIGHTS_DESC,
  FONT_WEIGHTS_MOB,
  LINE_HEIGHTS_DESC,
  LINE_HEIGHTS_MOB,
} from '../Text';
import type { SelectProps } from '.';

export const Container = styled.div`
  position: relative;
  width: 300px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.div<{
  error?: boolean;
  background?: string;
  variant?: 'single' | 'multi' | 'search-multi' | 'search-single' | 'single-text';
  isDropdownOpen?: boolean;
  disabled?: boolean;
  filteredEntries?: [id: string, value: string][];
  entriesState?: [id: string, value: string][] | undefined;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: ${({ variant }) =>
    variant === 'search-multi' || variant === 'multi' ? 'center' : 'flex-start'};
  width: 100%;
  min-height: 40px;
  background-color: transparent;
  border: ${({ theme, error, isDropdownOpen }) => {
    if (isDropdownOpen) return `2px solid ${theme.inputs.borderFocusColor}`;
    if (!error) return `1px solid ${theme.inputs.borderColor}`;
    if (error) return `2px solid ${theme.errorTextColor}`;
    return `1px solid ${theme.inputs.borderColor}`;
  }};
  transition: ${({ isDropdownOpen }) =>
    isDropdownOpen ? 'all 0.1s ease' : 'all 0.26s ease-in-out 0.2s'};
  border-radius: ${({ isDropdownOpen, filteredEntries, variant, entriesState }) => {
    if (variant === 'single' || variant === 'multi') {
      if (isDropdownOpen && entriesState?.[0]) return '22px 22px 0 0';
      return '22px';
    }
    if (variant === 'search-multi' || variant === 'search-single' || variant === 'single-text') {
      if (isDropdownOpen && filteredEntries?.[0]) return '22px 22px 0 0';
      return '22px';
    }
    return '22px';
  }};
  border-bottom: ${({ isDropdownOpen, filteredEntries, variant, entriesState }) => {
    if (variant === 'single' || variant === 'multi') {
      if (isDropdownOpen && entriesState?.[0]) return '0';
      return 'auto';
    }
    if (variant === 'search-multi' || variant === 'search-single' || variant === 'single-text') {
      if (isDropdownOpen && filteredEntries?.[0]) return '0';
      return 'auto';
    }
    return 'auto';
  }};
  padding: ${({ variant }) =>
    variant === 'multi' || variant === 'search-multi' ? '3px 44px 3px 3px' : '7px 16px'};
  font-size: ${FONT_SIZES_MOB.textBody2};
  line-height: 18px;

  ~ .dropdown {
    transform: ${({ isDropdownOpen }) => (isDropdownOpen ? 'scaleY(1)' : 'scaleY(0)')};
  }

  @media (min-width: 768px) {
    font-size: ${FONT_SIZES_DESC.textBody2};
    line-height: 24px;
    min-height: 44px;
  }
`;

export const Dropdown = styled.div<{
  isSelected?: boolean;
  error?: boolean;
  background?: string;
  isDropdownOpen?: boolean;
  filteredEntries?: [id: string, value: string][];
}>`
  position: absolute;
  transform: ${({ isDropdownOpen }) => (isDropdownOpen ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: top;
  transition: transform 0.26s ease;
  top: 100%;
  left: 0;
  width: 100%;
  overflow: hidden;
  max-height: 300px;
  z-index: 3;
  flex-direction: column;
  background-color: white ${({ isSelected }) => (isSelected ? 'white' : 'rgba(234, 234, 239, 0.4)')};
  display: ${({ filteredEntries }) => (filteredEntries?.[0] ? 'flex' : 'none')};
  background: ${({ background, theme }) => background || theme.inputs.backgroundDefaultColor};
  border: ${({ theme, error, isDropdownOpen }) => {
    if (isDropdownOpen) return `2px solid ${theme.inputs.borderFocusColor}`;
    if (!error) return `1px solid ${theme.inputs.borderColor}`;
    if (error) return `2px solid ${theme.errorTextColor}`;
    return `1px solid ${theme.inputs.borderColor}`;
  }};
  border-top: 0;
  border-radius: 0 0 22px 22px;
`;

export const Option = styled.div<{
  isSelected: boolean;
  isSingleSelected: boolean;
  disabled?: boolean;
}>`
  padding: 10px 16px;
  display: flex;
  flex-direction: row;
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  &:hover {
    background-color: #f2f2f2;
  }
  input {
    display: none;
    visibility: none;
  }
`;

export const SelectedOptions = styled.div<SelectProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: ${({ variant }) =>
    variant === 'single' || variant === 'search-single' ? '3px 0 0' : '6px 12px'};
  border: ${({ variant, theme }) =>
    variant === 'single' || variant === 'search-single'
      ? 'none'
      : `1px solid ${theme.inputs.borderColor}`};
  border-radius: ${({ variant }) =>
    variant === 'single' || variant === 'search-single' ? 'none' : '22px'};
  position: relative;
  z-index: 2;
  margin-bottom: ${({ variant }) =>
    (variant === 'single' || variant === 'search-single') && '-6px'};

  @media (min-width: 768px) {
    padding: ${({ variant }) =>
      variant === 'single' || variant === 'search-single' ? '3px 0 0' : '3px 12px'};
  }
`;

export const InnerTextContainer = styled.span`
  min-height: 18px;
  margin-top: 1px;
  margin-bottom: -1px;

  @media (min-width: 768px) {
    min-height: 24px;
  }
`;

export const RemoveButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  background-color: transparent;
  border: none;
  font-size: inherit;
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  align-self: start;
  &:hover {
    text-decoration: underline;
  }
  & svg {
    width: 18px;
    height: 18px;
  }

  @media (min-width: 768px) {
    padding-top: 3px;
  }
`;

export const PlaceHolder = styled.label<{
  selectedValue?: string[];
  dropdownVisible?: boolean;
  background?: string;
  variant?: 'single' | 'multi' | 'search-multi' | 'search-single' | 'single-text';
  error?: boolean;
  className?: string;
}>`
  display: block;
  line-height: 0;
  position: absolute;
  font-size: ${FONT_SIZES_MOB.textBody2};
  line-height: 18px;
  color: ${({ theme, error, dropdownVisible }) => {
    if (dropdownVisible) return theme.accentTextColor;
    if (error) return theme.errorTextColor;
    return theme.defaultTextColor;
  }};
  transition: all 0.2s cubic-bezier(0.84, -0.03, 0.49, 0.23);
  transform: ${({ selectedValue, dropdownVisible, variant, className }) => {
    if (!selectedValue?.[0] && !dropdownVisible) {
      if (variant === 'single' || variant === 'search-single') {
        return 'translate(0, 3px)';
      }
      return 'translate(0, 10px)';
    }
    if (variant === 'single-text' || variant === 'multi' || variant === 'search-multi') {
      return 'translate(0, -12px) scale(0.8)';
    }
    if (variant === 'single' && className === 'vacancyFilter') {
      return 'translate(0, -17px) scale(0)';
    }
    return 'translate(0, -17px) scale(0.8)';
  }};
  transform-origin: center left;
  z-index: ${({ selectedValue, dropdownVisible }) =>
    !selectedValue?.[0] && !dropdownVisible ? '1' : 'auto'};
  padding: ${({ selectedValue, dropdownVisible }) =>
    !selectedValue?.[0] && !dropdownVisible ? '0' : '0 4px'};
  margin-left: ${({ variant }) => (variant === 'multi' || variant === 'search-multi') && '12px'};
  background: ${({ theme, background }) => background || theme.inputs.backgroundDefaultColor};
  top: ${({ variant }) =>
    (variant === 'single-text' || variant === 'multi' || variant === 'search-multi') && '2px'};

  @media (min-width: 768px) {
    font-size: ${FONT_SIZES_DESC.textBody2};
    line-height: 24px;
    padding: ${({ selectedValue, dropdownVisible }) =>
      !selectedValue?.[0] && !dropdownVisible ? '0' : '0 6px'};
    transform: ${({ selectedValue, dropdownVisible, variant, className }) => {
      if (!selectedValue?.[0] && !dropdownVisible) {
        return variant === 'single' || variant === 'search-single'
          ? 'translate(0, 3px)'
          : 'translate(0, 10px)';
      }
      if (variant === 'single-text' || variant === 'multi' || variant === 'search-multi') {
        return 'translate(0, -15px) scale(0.8)';
      }
      if (variant === 'single' && className === 'vacancyFilter') {
        return 'translate(0, -19px) scale(0)';
      }
      return 'translate(0, -19px) scale(0.8)';
    }};
  }
`;

export const SearchInput = styled.input<{
  isDropdownOpen: boolean;
  selectedValue?: string[];
  variant?: 'single' | 'multi' | 'search-multi' | 'search-single' | 'single-text';
}>`
  border: none;
  background-color: transparent;
  font-size: ${FONT_SIZES_MOB.textBody2};
  font-weight: ${FONT_WEIGHTS_MOB.textBody2};
  line-height: ${LINE_HEIGHTS_MOB.textBody2};
  width: 100%;
  margin-top: ${({ variant }) => {
    if (variant === 'single-text' || variant === 'search-single') return '3px';
    if (variant === 'search-multi') return '7px';
    return '0';
  }};
  margin-left: ${({ variant }) => variant === 'search-multi' && '13px'};
  margin-bottom: ${({ variant, selectedValue }) =>
    variant === 'search-multi' && selectedValue?.[0] && '7px'};
  display: ${({ isDropdownOpen, selectedValue, variant }) => {
    if (!isDropdownOpen && variant !== 'single-text' && !selectedValue?.[0]) return 'none';
    if (!isDropdownOpen && variant === 'single-text' && selectedValue?.[0]) return 'block';
    if (!isDropdownOpen && variant === 'search-multi' && selectedValue?.[0]) return 'none';
    if (!isDropdownOpen && variant === 'search-single' && selectedValue?.[0]) return 'none';
    return 'block';
  }};
  visibility: ${({ isDropdownOpen, selectedValue, variant }) => {
    if (!isDropdownOpen && variant !== 'single-text' && !selectedValue?.[0]) return 'hidden';
    if (!isDropdownOpen && variant === 'single-text' && selectedValue?.[0]) return 'visible';
    if (!isDropdownOpen && variant === 'search-multi' && selectedValue?.[0]) return 'hidden';
    if (!isDropdownOpen && variant === 'search-single' && selectedValue?.[0]) return 'hidden';
    return 'block';
  }};

  ::placeholder {
    visibility: ${({ isDropdownOpen }) => (!isDropdownOpen ? 'hidden' : 'visible')};
  }

  ::-moz-placeholder {
    color: ${({ isDropdownOpen }) => !isDropdownOpen && 'transparent'};
  }

  @media (min-width: 768px) {
    font-size: ${FONT_SIZES_DESC.textBody2};
    font-weight: ${FONT_WEIGHTS_DESC.textBody2};
    line-height: ${LINE_HEIGHTS_DESC.textBody2};
    margin-top: ${({ variant, selectedValue }) => {
      if (variant === 'single-text' && !selectedValue?.[0]) return '2px';
      if (variant === 'search-single') return '3px';
      if (variant === 'search-multi') return '7px';
      return '0';
    }};
  }
`;

export const SearchInputWrapper = styled.div<{
  variant?: 'single' | 'multi' | 'search-multi' | 'search-single' | 'single-text';
  isDropdownOpen?: boolean;
}>`
  display: ${({ variant, isDropdownOpen }) =>
    variant === 'search-multi' && isDropdownOpen === false ? 'none' : 'flex'};
  flex-direction: row;
  position: ${({ variant }) => (variant === 'search-multi' ? 'inherit' : 'absolute')};
  width: 90%;
  top: 8px;
  svg {
    width: 24px;
    height: 24px;
    margin: ${({ variant }) => (variant === 'search-multi' ? '3px 0 0 10px' : '0 12px 0 0')};
  }
  @media (min-width: 768px) {
    top: 10px;
    svg {
      margin: ${({ variant }) => variant === 'search-multi' && '5px 0 0 12px'};
    }
  }
`;

export const WrapperIcon = styled.div<{ isDropdownOpen: boolean; disabled?: boolean }>`
  position: absolute;
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  top: 8px;
  right: 10px;
  width: 24px;
  height: 24px;
  transform: ${({ isDropdownOpen }) => (isDropdownOpen ? '0' : 'rotate(180deg)')};
  transition: all 0.26s ease-in;
  pointer-events: none;

  @media (min-width: 768px) {
    top: 10px;
    right: 12px;
  }
`;

export const AttentionErrorIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 10px;
  svg {
    width: 24px;
    height: 24px;
  }
  @media (min-width: 768px) {
    top: 10px;
    right: 12px;
  }
`;

export const ButtonClear = styled.button<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  position: absolute;
  top: 8px;
  right: 10px;
  @media (min-width: 768px) {
    top: 10px;
    right: 12px;
  }
`;

export const SelectedArray = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 8px;

  @media (min-width: 768px) {
    row-gap: 12px;
  }
`;
