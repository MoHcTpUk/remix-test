import styled from 'styled-components';

import { VariantCardEnum } from '~/types/enums/variantCardEnum';

import {
  FONT_SIZES_DESC,
  FONT_SIZES_MOB,
  FONT_WEIGHTS_DESC,
  FONT_WEIGHTS_MOB,
  LINE_HEIGHTS_DESC,
  LINE_HEIGHTS_MOB,
} from '../Text';
import { TextVariantEnum } from '../Text/enums';

export const Card = styled.div<{ variant?: VariantCardEnum }>`
  display: flex;
  flex-direction: column;
  padding: ${({ variant }) => {
    if (variant === VariantCardEnum.about) return '24px 16px 16px';
    if (variant === VariantCardEnum.createEntity || variant === VariantCardEnum.alert)
      return '32px 16px';
    return '16px';
  }};
  background-color: ${({ theme }) => theme.user.backgroundCardColor};
  border-radius: 8px;
  gap: 16px;
  width: 100%;
  height: ${({ variant }) => {
    if (variant === VariantCardEnum.sidebar) return '100%';
    if (variant === VariantCardEnum.createEntity) return 'fit-content';
    return 'auto';
  }};
  box-shadow: ${({ theme }) => theme.сards.shadow};

  @media (min-width: 768px) {
    border-radius: 12px;
    padding: ${({ variant }) => {
      if (variant === VariantCardEnum.about) return '48px 24px 32px';
      if (variant === VariantCardEnum.createEntity) return '40px';
      if (variant === VariantCardEnum.alert) return '40px 24px 64px';
      return '24px';
    }};
  }
  @media (min-width: 1280px) {
    max-width: ${({ variant }) => (variant === VariantCardEnum.materials ? '996px' : '100%')};
    overflow: ${({ variant }) => (variant === VariantCardEnum.editCard ? 'visible' : 'auto')};
    box-shadow: ${({ theme, variant }) =>
      variant === VariantCardEnum.request ? 'none' : theme.сards.shadow};
    margin-top: ${({ variant }) => variant === VariantCardEnum.request && '16px'};
    border-top: ${({ variant, theme }) =>
      variant === VariantCardEnum.request && `1px solid ${theme.user.borderColor}`};
    padding: ${({ variant }) => {
      if (variant === VariantCardEnum.about) return '48px 24px 32px';
      if (variant === VariantCardEnum.createEntity) return '40px';
      if (variant === VariantCardEnum.request) return '24px 24px 0';
      if (variant === VariantCardEnum.alert) return '40px 24px 64px';
      return '24px';
    }};
  }

  .borderLine {
    padding-top: 16px;
    border-top: 1px solid ${({ theme }) => theme.user.borderColor};
  }
`;

export const BoxCardHeading = styled.div<{ variant?: string; className?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  button {
    margin-left: 16px;
  }

  & > span {
    font-size: ${FONT_SIZES_MOB[TextVariantEnum.textHeading2]};
    font-weight: ${FONT_WEIGHTS_MOB[TextVariantEnum.textHeading2]};
    line-height: ${LINE_HEIGHTS_MOB[TextVariantEnum.textHeading2]};
    max-width: fit-content;
    margin-bottom: -4px;
  }

  @media (min-width: 768px) {
    button {
      margin-left: 24px;
    }
    & > span {
      font-size: ${FONT_SIZES_DESC[TextVariantEnum.textHeading3]};
      font-weight: ${FONT_WEIGHTS_DESC[TextVariantEnum.textHeading3]};
      line-height: ${LINE_HEIGHTS_DESC[TextVariantEnum.textHeading3]};
    }
  }
`;

export const BoxControl = styled.div`
  padding-top: 16px;
  margin-top: 8px;
  border-top: 1px solid ${({ theme }) => theme.user.borderColor};
  display: flex;
  flex-direction: 'row';
  gap: 16px;

  @media (min-width: 769px) {
    padding-top: 24px;
  }

  @media (min-width: 1280px) {
    justify-content: flex-end;
    button {
      width: fit-content;
    }
  }
`;
export const BoxCardContent = styled.div<{ variant?: VariantCardEnum }>`
  display: flex;
  flex-direction: column;
  gap: ${({ variant }) => {
    if (variant === VariantCardEnum.userCard) return '16px';
    if (variant === VariantCardEnum.createEntity) return '24px';
    return '8px';
  }};
  align-items: ${({ variant }) =>
    variant === VariantCardEnum.createEntity ? 'center' : 'inherit'};
  text-align: ${({ variant }) => (variant === VariantCardEnum.createEntity ? 'center' : 'start')};

  &:empty {
    display: none;
  }

  @media (min-width: 769px) {
    gap: ${({ variant }) => {
      if (variant === VariantCardEnum.sidebar) return '8px';
      if (variant === VariantCardEnum.createEntity) return '24px';
      return '16px';
    }};
  }
`;
