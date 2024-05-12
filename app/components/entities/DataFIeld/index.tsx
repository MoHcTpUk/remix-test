import { useLocation } from '@remix-run/react';
import type { ReactNode } from 'react';
import { memo, useEffect, useRef } from 'react';

import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';

import { BoxData, FieldWrapper } from './styles';

export const DataField = memo(
  ({
    label,
    variant = 'default',
    data,
    children,
    color,
  }: {
    label?: string;
    variant?: 'default' | 'custom';
    data?: string;
    children?: ReactNode;
    color?: string;
  }): JSX.Element => {
    const boxDataRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
      const { current } = boxDataRef;
      if (current) {
        if (current.scrollHeight > 44) {
          current.style.borderRadius = `8px`;
        } else {
          current.style.borderRadius = `80px`;
        }
      }
    }, [location]);

    return (
      <FieldWrapper>
        {label && <Text variant={TextVariantEnum.textBody2}>{label}</Text>}
        {variant === 'default' ? (
          <BoxData ref={boxDataRef}>
            <Text variant={TextVariantEnum.textBody2medium} color={color}>
              {data || ''}
            </Text>
          </BoxData>
        ) : (
          children
        )}
      </FieldWrapper>
    );
  },
);
