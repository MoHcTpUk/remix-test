import React from 'react';
import type { ValueOf } from 'shared/utils';
import type { CSSProperties } from 'styled-components';
import { Text } from '../Text';
import { CardContent, CardWrapper, Image } from './styles';
import { useApp } from '~/hooks';
import { TextVariantEnum } from '../Text/enums';

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

const Card: React.FC<CardProps> = ({
  className,
  style,
  variant,
  title,
  date,
  vacancies,
  image,
}) => {
  const { theme } = useApp();

  return (
    <CardWrapper variant={variant} className={className} style={style}>
      <Image variant={variant}>
        <img src={image} alt={title} />
      </Image>
      <CardContent variant={variant}>
        {variant === 'articles' && (
          <Text variant={TextVariantEnum.textSmall} color={theme.сards.articlesTextColor}>
            {date}
          </Text>
        )}
        <Text className='cardTitle' variant={TextVariantEnum.textBody2}>
          {title}
        </Text>
        {variant === 'companies' && (
          <Text
            variant={TextVariantEnum.textSmall}
            color={vacancies ? theme.сards.vacanciesTextColor : theme.сards.noVacanciesTextColor}
          >
            {vacancies ? `${vacancies} vacancies` : 'no vacancies'}
          </Text>
        )}
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
