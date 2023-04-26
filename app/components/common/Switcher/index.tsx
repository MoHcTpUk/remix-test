import type { ChangeEvent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: max-content;
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
  transition: background-color 0.2s ease-in;
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

const Checkbox = styled.input`
  visibility: hidden;
  display: none;
`;

export type SwitcherProps = {
  checked?: boolean;
  onChange?: (nextValue: boolean) => void;
  label?: string;
  htmlLabel?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  variant?: 'lang' | 'default';
};

export function Switcher({
  checked,
  onChange,
  htmlLabel,
  label,
  disabled,
  name,
  variant = 'default',
}: SwitcherProps): JSX.Element {
  const custom = {
    onChange: (ev: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(!ev.target.checked);
      } else {
        // eslint-disable-next-line no-console
        console.log(!ev.target.checked);
      }
    },
  };

  return (
    <Wrapper>
      {variant === 'lang' && (
        <Switch checked={checked} htmlFor={htmlLabel} title={label} variant='lang'>
          <Checkbox disabled={disabled} id={htmlLabel} type='checkbox' {...custom} />
        </Switch>
      )}
      {variant === 'default' && (
        <Switch
          data-content={checked ? 'on' : 'off'}
          checked={checked}
          variant='default'
          htmlFor={htmlLabel}
          title={label}
        >
          <Checkbox disabled={disabled} id={htmlLabel} type='checkbox' name={name} {...custom} />
        </Switch>
      )}
    </Wrapper>
  );
}
