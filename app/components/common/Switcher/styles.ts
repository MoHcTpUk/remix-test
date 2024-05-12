import styled from 'styled-components';

import type { SwitcherProps } from './types';

export const Wrapper = styled.div`
  /* width: max-content; */
  height: max-content;
`;

export const Switch = styled.label<SwitcherProps>`
  background: ${({ theme, variant, checked }) =>
    // eslint-disable-next-line no-nested-ternary
    variant === 'lang'
      ? theme.switcher.backgroundDefault
      : checked && variant === 'default'
      ? theme.switcher.backgroundChecked
      : theme.switcher.backgroundDefault};
  display: block;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.2, 0, 0, 1);
  width: 56px;
  height: 32px;

  &::before {
    content: attr(data-content);
    display: ${({ variant }) => (variant === 'default' ? 'flex' : 'none')};
    position: absolute;
    color: ${({ checked, theme }) =>
      checked ? theme.switcher.textCheckedColor : theme.switcher.textDefaultColor};
    font-size: 9px;
    top: 11px;
    right: ${({ checked }) => !checked && '10px'};
    left: ${({ checked }) => checked && '10px'};
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    background: var(--white);
    border-radius: 50%;
    left: 4px;
    top: 4px;
    width: 24px;
    height: 24px;
    transition: left 0.15s ease-in;
    left: ${({ checked }) => checked && '28px'};
    background: ${({ checked, variant, theme }) =>
      // eslint-disable-next-line no-nested-ternary
      variant === 'default'
        ? theme.switcher.backgroundTogglerColor
        : checked && variant === 'lang'
        ? "url('/images/flags/English.png')"
        : "url('/images/flags/Thailand.png')"};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const Checkbox = styled.input`
  display: none;
`;

export const BoxLabel = styled.div`
  cursor: pointer;
`;

export const SwitcherBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;
