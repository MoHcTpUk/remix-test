import type { ChangeEventHandler } from 'react';

import { useApp } from '~/hooks';

import { Box } from '../Box';
import { Text } from '../Text';
import { TextVariantEnum } from '../Text/enums';
import { BoxErrors, CheckboxBtn, CheckboxBtnWrapper, Checkmark, ContainerCheckbox } from './styles';

export type CheckboxProps = {
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  errorText?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
};

export function CheckBox({
  checked,
  label,
  disabled,
  id,
  name,
  errorText,
  onChange,
}: CheckboxProps): JSX.Element {
  const { theme } = useApp();

  return (
    <Box width='100%' flexDirection='column'>
      <CheckboxBtnWrapper>
        <ContainerCheckbox>
          <CheckboxBtn
            checked={checked}
            disabled={disabled}
            type='checkbox'
            id={id}
            name={name}
            onChange={(e) => (onChange ? onChange(e) : null)}
          />
          <Checkmark />
        </ContainerCheckbox>
        <Text variant={TextVariantEnum.textBody1medium}>{label}</Text>
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
