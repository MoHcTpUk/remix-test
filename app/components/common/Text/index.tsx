import type { CSSProperties } from 'react';
import type { DefaultTheme } from 'styled-components';
import { styled } from 'styled-components';

import { TextVariantEnum } from './enums';

type Props = {
  variant?: TextVariantEnum;
  color?: CSSProperties['color'];
  fontStyle?: CSSProperties['fontStyle'];
  theme?: DefaultTheme;
};

export const FONT_SIZES_MOB: Record<TextVariantEnum, string> = {
  [TextVariantEnum.textHeading1]: '28px',
  [TextVariantEnum.textHeading2]: '24px',
  [TextVariantEnum.textHeading3]: '18px',
  [TextVariantEnum.textBody1]: '16px',
  [TextVariantEnum.textBody1medium]: '16px',
  [TextVariantEnum.textBody2]: '14px',
  [TextVariantEnum.textBody2medium]: '14px',
  [TextVariantEnum.textSmall]: '12px',
  [TextVariantEnum.textSmallmedium]: '12px',
  [TextVariantEnum.textMini]: '9px',
};

export const FONT_SIZES_TAB: Record<TextVariantEnum, string> = {
  [TextVariantEnum.textHeading1]: '48px',
  [TextVariantEnum.textHeading2]: '32px',
  [TextVariantEnum.textHeading3]: '26px',
  [TextVariantEnum.textBody1]: '18px',
  [TextVariantEnum.textBody1medium]: '18px',
  [TextVariantEnum.textBody2]: '16px',
  [TextVariantEnum.textBody2medium]: '16px',
  [TextVariantEnum.textSmall]: '12px',
  [TextVariantEnum.textSmallmedium]: '12px',
  [TextVariantEnum.textMini]: '9px',
};

export const FONT_SIZES_DESC: Record<TextVariantEnum, string> = {
  [TextVariantEnum.textHeading1]: '48px',
  [TextVariantEnum.textHeading2]: '32px',
  [TextVariantEnum.textHeading3]: '26px',
  [TextVariantEnum.textBody1]: '18px',
  [TextVariantEnum.textBody1medium]: '18px',
  [TextVariantEnum.textBody2]: '16px',
  [TextVariantEnum.textBody2medium]: '16px',
  [TextVariantEnum.textSmall]: '12px',
  [TextVariantEnum.textSmallmedium]: '12px',
  [TextVariantEnum.textMini]: '9px',
};

export const FONT_WEIGHTS_MOB: Record<TextVariantEnum, string> = {
  [TextVariantEnum.textHeading1]: '700',
  [TextVariantEnum.textHeading2]: '700',
  [TextVariantEnum.textHeading3]: '700',
  [TextVariantEnum.textBody1]: '400',
  [TextVariantEnum.textBody1medium]: '500',
  [TextVariantEnum.textBody2]: '400',
  [TextVariantEnum.textBody2medium]: '500',
  [TextVariantEnum.textSmall]: '400',
  [TextVariantEnum.textSmallmedium]: '500',
  [TextVariantEnum.textMini]: '500',
};

export const FONT_WEIGHTS_TAB: Record<TextVariantEnum, string> = {
  [TextVariantEnum.textHeading1]: '700',
  [TextVariantEnum.textHeading2]: '700',
  [TextVariantEnum.textHeading3]: '700',
  [TextVariantEnum.textBody1]: '400',
  [TextVariantEnum.textBody1medium]: '500',
  [TextVariantEnum.textBody2]: '400',
  [TextVariantEnum.textBody2medium]: '500',
  [TextVariantEnum.textSmall]: '400',
  [TextVariantEnum.textSmallmedium]: '500',
  [TextVariantEnum.textMini]: '500',
};

export const FONT_WEIGHTS_DESC: Record<TextVariantEnum, string> = {
  [TextVariantEnum.textHeading1]: '700',
  [TextVariantEnum.textHeading2]: '700',
  [TextVariantEnum.textHeading3]: '700',
  [TextVariantEnum.textBody1]: '400',
  [TextVariantEnum.textBody1medium]: '500',
  [TextVariantEnum.textBody2]: '400',
  [TextVariantEnum.textBody2medium]: '500',
  [TextVariantEnum.textSmall]: '400',
  [TextVariantEnum.textSmallmedium]: '500',
  [TextVariantEnum.textMini]: '500',
};

export const LINE_HEIGHTS_MOB: Record<TextVariantEnum, string> = {
  [TextVariantEnum.textHeading1]: '36px',
  [TextVariantEnum.textHeading2]: '30px',
  [TextVariantEnum.textHeading3]: '24px',
  [TextVariantEnum.textBody1]: '24px',
  [TextVariantEnum.textBody1medium]: '24px',
  [TextVariantEnum.textBody2]: '18px',
  [TextVariantEnum.textBody2medium]: '18px',
  [TextVariantEnum.textSmall]: '16px',
  [TextVariantEnum.textSmallmedium]: '16px',
  [TextVariantEnum.textMini]: '12px',
};

export const LINE_HEIGHTS_TAB: Record<TextVariantEnum, string> = {
  [TextVariantEnum.textHeading1]: '56px',
  [TextVariantEnum.textHeading2]: '40px',
  [TextVariantEnum.textHeading3]: '32px',
  [TextVariantEnum.textBody1]: '24px',
  [TextVariantEnum.textBody1medium]: '24px',
  [TextVariantEnum.textBody2]: '24px',
  [TextVariantEnum.textBody2medium]: '24px',
  [TextVariantEnum.textSmall]: '16px',
  [TextVariantEnum.textSmallmedium]: '12px',
  [TextVariantEnum.textMini]: '12px',
};

export const LINE_HEIGHTS_DESC: Record<TextVariantEnum, string> = {
  [TextVariantEnum.textHeading1]: '56px',
  [TextVariantEnum.textHeading2]: '40px',
  [TextVariantEnum.textHeading3]: '32px',
  [TextVariantEnum.textBody1]: '24px',
  [TextVariantEnum.textBody1medium]: '24px',
  [TextVariantEnum.textBody2]: '24px',
  [TextVariantEnum.textBody2medium]: '24px',
  [TextVariantEnum.textSmall]: '24px',
  [TextVariantEnum.textSmallmedium]: '24px',
  [TextVariantEnum.textMini]: '12px',
};

export const Text = styled.span<Props>`
  color: ${({ color, theme }) => color || theme.defaultTextColor};
  font-style: ${(props) => props.fontStyle};
  letter-spacing: -0.026em;
  font-size: ${({ variant = TextVariantEnum.textBody1 }) => FONT_SIZES_MOB[variant]};
  font-weight: ${({ variant = TextVariantEnum.textBody1 }) => FONT_WEIGHTS_MOB[variant]};
  line-height: ${({ variant = TextVariantEnum.textBody1 }) => LINE_HEIGHTS_MOB[variant]};
  transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);

  @media (min-width: 768px) {
    font-size: ${({ variant = TextVariantEnum.textBody1 }) => FONT_SIZES_TAB[variant]};
    font-weight: ${({ variant = TextVariantEnum.textBody1 }) => FONT_WEIGHTS_TAB[variant]};
    line-height: ${({ variant = TextVariantEnum.textBody1 }) => LINE_HEIGHTS_TAB[variant]};
  }

  @media (min-width: 1024px) {
    font-size: ${({ variant = TextVariantEnum.textBody1 }) => FONT_SIZES_DESC[variant]};
    font-weight: ${({ variant = TextVariantEnum.textBody1 }) => FONT_WEIGHTS_DESC[variant]};
    line-height: ${({ variant = TextVariantEnum.textBody1 }) => LINE_HEIGHTS_DESC[variant]};
  }
`;
