import type { ChangeEvent } from 'react';
import React, { useEffect, useRef, useState } from 'react';

import { useApp } from '~/hooks';

import { Box } from '../Box';
import SvgStroke from '../Icons/Stroke';
import { Text } from '../Text';
import { TextVariantEnum } from '../Text/enums';
import { BoxErrors, CheckboxBtn, CheckboxBtnWrapper, Checkmark, ContainerCheckbox } from './styles';

interface CheckboxProps {
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  errorText?: string;
  onChange?: (checked: boolean) => void;
  value?: string;
  style?: React.CSSProperties;
}

export function CheckBox({
  checked,
  label,
  disabled,
  id,
  name,
  errorText,
  onChange,
  value,
  style,
}: CheckboxProps): JSX.Element {
  const { theme } = useApp();
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [checkedState, setCheckedState] = useState(checked);

  useEffect(() => {
    setCheckedState(checked);
  }, [checked]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setCheckedState(isChecked);

    if (onChange) {
      onChange(isChecked);
    }
  };

  return (
    <Box style={style} width='100%' flexDirection='column'>
      <CheckboxBtnWrapper>
        <ContainerCheckbox disabled={disabled}>
          <CheckboxBtn
            value={
              value === 'true' || value === 'false' ? checkedState?.toString() : value || 'false'
            }
            disabled={disabled}
            type='checkbox'
            id={id}
            name={name}
            ref={checkboxRef}
            checked={checkedState} // Используем checkedState вместо checked
            onChange={handleChange}
          />
          <Checkmark disabled={disabled}>
            <SvgStroke />
          </Checkmark>
        </ContainerCheckbox>
        <Text variant={TextVariantEnum.textBody2medium}>{label}</Text>
      </CheckboxBtnWrapper>
      {Boolean(errorText) && (
        <BoxErrors isText={Boolean(errorText)}>
          <Text variant={TextVariantEnum.textSmall} color={theme.errorTextColor}>
            {errorText}
          </Text>
        </BoxErrors>
      )}
    </Box>
  );
}
