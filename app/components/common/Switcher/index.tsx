import type { ChangeEvent } from 'react';
import { useEffect, useRef, useState } from 'react';

import { useApp } from '~/hooks';

import { Text } from '../Text';
import { TextVariantEnum } from '../Text/enums';
import { BoxLabel, Checkbox, Switch, SwitcherBox, Wrapper } from './styles';
import type { SwitcherProps } from './types';

export function Switcher({
  checked,
  onChange,
  htmlLabel,
  label,
  disabled,
  name,
  value,
  variant = 'default',
  checkedLabel,
  unCheckedLabel,
  control,
}: SwitcherProps): JSX.Element {
  const { theme } = useApp();

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
  const [checkedState, setCheckedState] = useState(checked);

  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckedState((prevChecked) => !prevChecked);

    if (checkboxRef.current) {
      const isChecked = checkboxRef.current.checked;
      if (onChange) onChange(isChecked);
    }
  };

  useEffect(() => {
    if (checked !== undefined) {
      setCheckedState(checked);
      if (checkboxRef.current) {
        checkboxRef.current.checked = checked;
      }
    }
  }, [checked]);

  return (
    <Wrapper>
      {variant === 'lang' && (
        <Switch checked={checked} htmlFor={htmlLabel} title={label} variant='lang'>
          <Checkbox disabled={disabled} id={htmlLabel} type='checkbox' {...custom} />
        </Switch>
      )}
      {variant === 'default' && (
        <SwitcherBox>
          <Switch
            data-content={checkedState ? 'on' : 'off'}
            checked={checkedState}
            variant='default'
            htmlFor={htmlLabel}
            title={label}
          >
            <Checkbox
              value={
                value === 'true' || value === 'false' || !value ? checkedState?.toString() : value
              }
              disabled={disabled}
              type='checkbox'
              id={htmlLabel}
              name={name}
              ref={checkboxRef}
              checked={control ? checkedState : undefined}
              defaultChecked={!checked ? checked : undefined}
              onChange={(e) => (control ? console.log(e.target.value) : handleChange(e))}
            />
          </Switch>

          <BoxLabel style={{ cursor: 'pointer' }}>
            <Text
              color={
                checkedState ? theme.switcher.backgroundChecked : theme.switcher.textDefaultColor
              }
              variant={TextVariantEnum.textBody2}
            >
              {checkedState ? checkedLabel : unCheckedLabel}
            </Text>
          </BoxLabel>
        </SwitcherBox>
      )}
    </Wrapper>
  );
}
