import { Link } from '@remix-run/react';
import type { ValueOf } from 'shared/utils';
import type { CSSProperties } from 'styled-components';

import { useApp, useScreenWidth } from '~/hooks';
import { DEFAULT_COMPANY_LOGO } from '~/utils/constants';
import { getImageUrl } from '~/utils/helpers.client';

import { Text } from '../Text';
import { TextVariantEnum } from '../Text/enums';
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
  id?: string;
  vacancies?: number;
  image?: string;
}

function SlideCard({ className, style, variant, title, date, vacancies, image, id }: CardProps) {
  const { theme } = useApp();
  const widthScreen = useScreenWidth();

  return (
    <CardWrapper variant={variant} className={className} style={style}>
      <Link
        to={
          // eslint-disable-next-line no-nested-ternary
          variant === 'companies'
            ? widthScreen > 1280
              ? `/search/company/${id || ''}/vacancy`
              : `/search/company/${id || ''}`
            : `/materials/news/${id || ''}`
        }
        style={{ width: '100%' }}
      >
        <Image variant={variant}>
          <img src={image ? getImageUrl(image, 'company') : DEFAULT_COMPANY_LOGO} alt={title} />
        </Image>
        <CardContent variant={variant}>
          {variant === 'articles' && (
            <Text variant={TextVariantEnum.textBody2} color={theme.сards.articlesTextColor}>
              {date}
            </Text>
          )}
          <Text className='cardTitle' variant={TextVariantEnum.textBody2medium}>
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
      </Link>
    </CardWrapper>
  );
}

export default SlideCard;
