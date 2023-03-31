import React, { useContext } from 'react';
import type { ValueOf } from 'shared/utils';
import type { CSSProperties, DefaultTheme } from 'styled-components';
import { UserContext } from '~/root';
import { Text } from '../Text';
import { CardContent, CardWrapper, Image } from './styles';

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
  theme: DefaultTheme;
}

const Card: React.FC<CardProps> = ({
  className,
  style,
  variant,
  title,
  date,
  vacancies,
  image,
  theme
}) => {
  return (
    <CardWrapper variant={variant} className={className} style={style}>
      <Image variant={variant}>
        <img src={image} alt={title} />
      </Image>
      <CardContent variant={variant}>
        {variant === 'articles' && (
          <Text variant='textSmall' color={theme.сards.articlesTextColor}>
            {date}
          </Text>
        )}
        <Text className='cardTitle' variant='textBody2'>
          {title}
        </Text>
        {variant === 'companies' && (
          <Text variant='textSmall' color={vacancies ? theme.сards.vacanciesTextColor : theme.сards.noVacanciesTextColor}>
            {vacancies ? `${vacancies} vacancies` : 'no vacancies'}
          </Text>
        )}
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
