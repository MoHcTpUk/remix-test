import type { CSSProperties } from 'react';
import type { DefaultTheme } from 'styled-components';
import styled from 'styled-components';
import { TextVariantEnum } from './enums';

type Props = {
  variant?: TextVariantEnum;
  color?: CSSProperties['color'];
  fontStyle?: CSSProperties['fontStyle'];
  theme?: DefaultTheme;
};

export const FONT_SIZES_MOB: Record<TextVariantEnum, string> = {
  [TextVariantEnum.textHeading1]: '28px',
  [TextVariantEnum.textHeading2]: '22px',
  [TextVariantEnum.textHeading3]: '18px',
  [TextVariantEnum.textBody1]: '16px',
  [TextVariantEnum.textBody2]: '14px',
  [TextVariantEnum.textSmall]: '12px',
};

export const FONT_SIZES_TAB: Record<TextVariantEnum, string> = {
  [TextVariantEnum.textHeading1]: '28px',
  [TextVariantEnum.textHeading2]: '22px',
  [TextVariantEnum.textHeading3]: '18px',
  [TextVariantEnum.textBody1]: '16px',
  [TextVariantEnum.textBody2]: '14px',
  [TextVariantEnum.textSmall]: '12px',
};

export const FONT_SIZES_DESC: Record<TextVariantEnum, string> = {
  [TextVariantEnum.textHeading1]: '48px',
  [TextVariantEnum.textHeading2]: '32px',
  [TextVariantEnum.textHeading3]: '26px',
  [TextVariantEnum.textBody1]: '18px',
  [TextVariantEnum.textBody2]: '16px',
  [TextVariantEnum.textSmall]: '14px',
};

export const FONT_WEIGHTS_MOB: Record<TextVariantEnum, string> = {
  [TextVariantEnum.textHeading1]: '600',
  [TextVariantEnum.textHeading2]: '400',
  [TextVariantEnum.textHeading3]: '400',
  [TextVariantEnum.textBody1]: '400',
  [TextVariantEnum.textBody2]: '400',
  [TextVariantEnum.textSmall]: '400',
};

export const FONT_WEIGHTS_TAB: Record<TextVariantEnum, string> = {
  [TextVariantEnum.textHeading1]: '600',
  [TextVariantEnum.textHeading2]: '400',
  [TextVariantEnum.textHeading3]: '400',
  [TextVariantEnum.textBody1]: '400',
  [TextVariantEnum.textBody2]: '400',
  [TextVariantEnum.textSmall]: '400',
};

export const FONT_WEIGHTS_DESC: Record<TextVariantEnum, string> = {
  [TextVariantEnum.textHeading1]: '600',
  [TextVariantEnum.textHeading2]: '400',
  [TextVariantEnum.textHeading3]: '400',
  [TextVariantEnum.textBody1]: '400',
  [TextVariantEnum.textBody2]: '400',
  [TextVariantEnum.textSmall]: '400',
};

export const LINE_HEIGHTS_MOB: Record<TextVariantEnum, string> = {
  [TextVariantEnum.textHeading1]: '40px',
  [TextVariantEnum.textHeading2]: '40px',
  [TextVariantEnum.textHeading3]: '40px',
  [TextVariantEnum.textBody1]: '24px',
  [TextVariantEnum.textBody2]: '18px',
  [TextVariantEnum.textSmall]: '16px',
};

export const LINE_HEIGHTS_TAB: Record<TextVariantEnum, string> = {
  [TextVariantEnum.textHeading1]: '40px',
  [TextVariantEnum.textHeading2]: '40px',
  [TextVariantEnum.textHeading3]: '40px',
  [TextVariantEnum.textBody1]: '24px',
  [TextVariantEnum.textBody2]: '18px',
  [TextVariantEnum.textSmall]: '16px',
};

export const LINE_HEIGHTS_DESC: Record<TextVariantEnum, string> = {
  [TextVariantEnum.textHeading1]: '72px',
  [TextVariantEnum.textHeading2]: '44px',
  [TextVariantEnum.textHeading3]: '32px',
  [TextVariantEnum.textBody1]: '24px',
  [TextVariantEnum.textBody2]: '24px',
  [TextVariantEnum.textSmall]: '24px',
};

export const Text = styled.span<Props>`
  color: ${(props) => props.color};
  font-style: ${(props) => props.fontStyle};
  font-size: ${({ variant = TextVariantEnum.textBody1 }) => FONT_SIZES_MOB[variant]};
  font-weight: ${({ variant = TextVariantEnum.textBody1 }) => FONT_WEIGHTS_MOB[variant]};
  line-height: ${({ variant = TextVariantEnum.textBody1 }) => LINE_HEIGHTS_MOB[variant]};
  transition: all 0.08s ease-in;

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
