import { ChangeEvent } from 'react';
import styled from 'styled-components';

export type SwitcherProps = {
  checked?: boolean;
  onChange?: (nextValue: boolean) => void;
  label?: string;
  htmlLabel?: string;
  disabled?: boolean;
};

const Wrapper = styled.div`
  width: max-content;
  height: max-content;
`;

export const Switch = styled.label<SwitcherProps>`
  background: #ccc;
  display: block;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s ease-in;
  width: 56px;
  height: 32px;

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
    background: ${({ checked }) =>
      checked ? "url('images/flags/English.png')" : "url('images/flags/Thailand.png')"};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Checkbox = styled.input`
  visibility: hidden;
  display: none;
`;

export function Switcher({
  checked,
  onChange,
  htmlLabel,
  label,
  disabled,
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
      <Switch checked={checked} htmlFor={htmlLabel} title={label}>
        <Checkbox disabled={disabled} id={htmlLabel} type='checkbox' {...custom} />
      </Switch>
    </Wrapper>
  );
}
