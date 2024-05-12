import { styled } from 'styled-components';

import { FONT_SIZES_DESC } from '../Text';
import { TextVariantEnum } from '../Text/enums';
import type { CardProps } from '.';

export const CardWrapper = styled.div<CardProps>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-height: 176px;
  transition: transform 0.2s cubic-bezier(0.2, 0, 0, 1);
  position: relative;
  margin: 8px 0;
  box-shadow: ${({ theme }) => theme.сards.shadow};
  border-radius: 8px;

  @media (min-width: 1024px) {
    min-width: 100%;
    max-width: ${({ variant }) => (variant === 'companies' ? '186px' : '245px')};
    margin: ${({ variant }) => (variant === 'companies' ? '14px 0' : '0')};
  }

  @media (min-width: 1280px) {
    border-radius: 12px;
    margin: 12px 4px;
    max-width: ${({ variant }) => (variant === 'companies' ? '186px' : '100%')};
  }

  &:hover {
    z-index: 1;
    transform: translateZ(0)
      ${({ variant }) => (variant === 'companies' ? 'scale(1.08)' : 'scale(1.05)')};
  }
`;

export const Image = styled.div<CardProps>`
  padding: 0;
  background: ${({ theme }) => theme.сards.imageBackground};
  min-width: ${({ variant }) => (variant === 'companies' ? '100%' : '138px')};
  width: 100%;
  display: flex;
  border-radius: 8px 8px 0px 0px;
  min-height: ${({ variant }) => (variant === 'companies' ? 'auto' : '138px')};
  height: ${({ variant }) => (variant === 'companies' ? '74px' : '138px')};

  flex-grow: 1;
  img {
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 8px 8px 0px 0px;
  }

  @media (min-width: 768px) {
    padding: 0;
    height: ${({ variant }) => (variant === 'companies' ? '118px' : '200px')};
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  @media (min-width: 1024px) {
    border-radius: 12px 12px 0px 0px;
    max-height: ${({ variant }) => (variant === 'companies' ? '130px' : '100%')};
    padding: 0;
    width: 100%;

    img {
      border-radius: 12px 12px 0px 0px;
    }
  }

  @media (min-width: 1280px) {
    border-radius: 12px 12px 0px 0px;
    width: 100%;
    height: ${({ variant }) => (variant === 'companies' ? '132px' : '256px')};
  }
`;

export const CardContent = styled.div<CardProps>`
  width: 100%;
  height: ${({ variant }) => (variant === 'articles' ? '110px' : '102px')};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  background: ${({ theme }) => theme.сards.cardContentBackground};
  border-radius: 0px 0px 8px 8px;
  gap: 8px;
  padding: ${({ variant }) => (variant === 'companies' ? '12px' : '16px')};
  justify-content: ${({ variant }) => (variant === 'companies' ? 'space-between' : 'flex-start')};

  .cardTitle {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3;
  }

  @media (min-width: 768px) {
    padding: 16px;
    height: ${({ variant }) => (variant === 'articles' ? '136px' : '128px')};
  }

  @media (min-width: 1024px) {
    border-radius: 0px 0px 12px 12px;
    width: 100%;

    .cardTitle {
      font-size: ${FONT_SIZES_DESC[TextVariantEnum.textBody1]};
    }
  }

  @media (min-width: 1280px) {
    padding: ${({ variant }) => (variant === 'companies' ? '16px 24px' : '16px 16px 24px')};
    width: 100%;
    height: ${({ variant }) => (variant === 'articles' ? '120px' : '132px')};

    .cardTitle {
      -webkit-line-clamp: 2;
    }
  }
`;
