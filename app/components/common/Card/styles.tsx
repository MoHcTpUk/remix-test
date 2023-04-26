import styled from 'styled-components';
import type { CardProps } from '.';
import { FONT_SIZES_DESC, FONT_SIZES_TAB } from '../Text';
import { TextVariantEnum } from '../Text/enums';

export const CardWrapper = styled.a<CardProps>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-height: 176px;
  transition: all 0.15s ease-in;
  position: relative;
  margin: 14px 0;

  @media (min-width: 768px) {
    min-width: ${({ variant }) => (variant === 'companies' ? '152px' : '256px')};
  }
  @media (min-width: 1024px) {
    min-width: 100%

    margin: ${({ variant }) => (variant === 'companies' ? '14px 0' : '0')};
  }

  @media (min-width: 1280px) {
    max-width: ${({ variant }) => (variant === 'companies' ? '200px' : '100%')};
  }

  &:hover {
    z-index: 1;
    transform: translateZ(0) ${({ variant }) =>
      variant === 'companies' ? 'scale(1.1)' : 'scale(1.05)'}; ;
  }
`;

export const Image = styled.div<CardProps>`
  padding: ${({ variant }) => (variant === 'companies' ? '15px 25px' : '0')};
  background: ${({ theme }) => theme.сards.imageBackground};
  min-width: ${({ variant }) => (variant === 'companies' ? '100%' : '138px')};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${({ variant }) =>
    variant === 'companies' ? ' 16px 16px 0px 0px' : '8px 8px 0px 0px'};
  height: 100%;
  flex-grow: 1;
  img {
    max-width: 100%;
    height: auto;
    border-radius: ${({ variant }) => (variant === 'companies' ? '0' : '8px 8px 0px 0px')};
  }

  @media (min-width: 768px) {
    padding: ${({ variant }) => (variant === 'companies' ? '18px 20px' : '0')};
    height: ${({ variant }) => (variant === 'companies' ? '118px' : '200px')};
    img {
      min-width: ${({ variant }) => (variant === 'companies' ? '110px' : '256px')};
      height: ${({ variant }) => (variant === 'companies' ? '80px' : 'auto')};
    }
  }
  @media (min-width: 1024px) {
    height: ${({ variant }) => (variant === 'companies' ? '130px' : 'auto')};
    padding: ${({ variant }) => (variant === 'companies' ? '25px 45px' : '0')};
    width: 100%;
  }

  @media (min-width: 1280px) {
    width: ${({ variant }) => (variant === 'companies' ? '200px' : '100%')};
  }
`;

export const CardContent = styled.div<CardProps>`
  width: 100%;
  min-height: ${({ variant }) => (variant === 'articles' ? '110px' : '102px')};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  background: ${({ theme }) => theme.сards.cardContentBackground};
  border-radius: ${({ variant }) =>
    variant === 'companies' ? '0px 0px 16px 16px' : '0px 0px 8px 8px'};
  gap: 6px;
  padding: ${({ variant }) => (variant === 'companies' ? '8px' : '10px')};
  justify-content: space-between;
  @media (min-width: 768px) {
    gap: ${({ variant }) => (variant === 'companies' ? '24px' : '8px')};
    .cardTitle {
      font-size: ${FONT_SIZES_TAB[TextVariantEnum.textBody1]};
    }
  }
  @media (min-width: 1024px) {
    padding: ${({ variant }) => (variant === 'companies' ? '20px' : '16px 18px')};
    width: 100%;
    height: 100%;

    .cardTitle {
      font-size: ${FONT_SIZES_DESC[TextVariantEnum.textBody1]};
    }
  }

  @media (min-width: 1280px) {
    width: ${({ variant }) => (variant === 'companies' ? '200px' : '100%')};
  }
`;
