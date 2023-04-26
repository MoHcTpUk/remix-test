import { memo } from 'react';

import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';

import { BoxData, FieldWrapper } from './styles';

export const DataField = memo(
  ({ label, data }: { label: string; data?: string }): JSX.Element => (
    <FieldWrapper>
      <Text variant={TextVariantEnum.textBody2}>{label}</Text>
      <BoxData>
        <Text variant={TextVariantEnum.textBody2medium}>{data || ''}</Text>
      </BoxData>
    </FieldWrapper>
  ),
);
