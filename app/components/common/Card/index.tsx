import {
  color_erl_gray,
  color_erl_gray_50,
  color_light_gray,
  color_vasil,
  color_white,
} from 'public/styles/variables';
import React, { ReactNode } from 'react';
import { ValueOf } from 'shared/utils';
import styled, { CSSProperties } from 'styled-components';
import { FONT_SIZES_DESC, FONT_SIZES_TAB, Text } from '../Text';

export const CardVariants = {
  companies: 'companies',
  articles: 'articles',
} as const;

export type CardVariant = ValueOf<typeof CardVariants>;

export interface CardProps {
  className?: string;
  style?: CSSProperties;
  variant: CardVariant;
  title?: string;
  date?: string;
  vacancies?: number;
  image?: string;
}

const CardWrapper = styled.a<CardProps>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  border-radius: 16px;
  transition: all 0.15s ease-in;
  @media (min-width: 768px) {
    width: 152px;
  }
  @media (min-width: 1024px) {
    width: 200px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const Image = styled.div<CardProps>`
  padding: ${({ variant }) => (variant === 'companies' ? '15px 25px' : '0')};
  background: ${color_light_gray};
  width: 100%;
  height: 74px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px 16px 0px 0px;
  height: 100%;
  img {
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    padding: ${({ variant }) => (variant === 'companies' ? '18px' : '20px')};
    height: 118px;
    img {
      min-width: ${({ variant }) => (variant === 'companies' ? '110px' : '100%')};
      height: ${({ variant }) => (variant === 'companies' ? '80px' : '100%')};
    }
  }
  @media (min-width: 1024px) {
    height: 130px;
    padding: ${({ variant }) => (variant === 'companies' ? '25px 45px' : '0')};
  }
`;

const CardContent = styled.div<CardProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${color_white};
  border-radius: 0px 0px 16px 16px;
  gap: 6px;
  padding: ${({ variant }) => (variant === 'companies' ? '8px' : '10px')};

  @media (min-width: 768px) {
    gap: ${({ variant }) => (variant === 'companies' ? '24px' : '8px')};
    .cardTitle {
      font-size: ${FONT_SIZES_TAB['textBody1']};
    }
  }
  @media (min-width: 1024px) {
    padding: ${({ variant }) => (variant === 'companies' ? '20px' : '16px 18px')};
    .cardTitle {
      font-size: ${FONT_SIZES_DESC['textBody1']};
    }
  }
`;

const Card: React.FC<CardProps> = ({
  className,
  style,
  variant,
  title,
  date,
  vacancies,
  image,
}) => {
  return (
    <CardWrapper variant={variant} className={className} style={style}>
      <Image variant={variant}>
        <img src={image} alt={title} />
      </Image>
      <CardContent variant={variant}>
        {variant === 'articles' && <Text variant='textSmall'>{date}</Text>}
        <Text className='cardTitle' variant='textBody2'>
          {title}
        </Text>
        {variant === 'companies' && (
          <Text variant='textSmall' color={vacancies ? color_vasil : color_erl_gray_50}>
            {vacancies ? `${vacancies} vacancies` : 'no vacancies'}
          </Text>
        )}
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
