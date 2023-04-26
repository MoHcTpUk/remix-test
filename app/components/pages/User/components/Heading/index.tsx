import type { ReactNode } from 'react';
import { memo } from 'react';

import Button from '~/components/common/Button';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';

import { BoxHeading, ButtonsControl } from './styles';

export const Heading = memo(
  ({
    title,
    variant = 'default',
  }: {
    title: string;
    variant?: 'default' | 'resumes' | 'vacancies';
  }): JSX.Element => {
    const { theme, t } = useApp();

    return (
      <BoxHeading>
        <Text
          className='title'
          variant={TextVariantEnum.textHeading1}
          color={theme.user.headinTextColor}
        >
          {title}
        </Text>
        <ButtonsControl>
          {variant !== 'vacancies' && (
            <Button priority='primary'>
              <Text variant={TextVariantEnum.textBody2}>{t('user:create_resume')}</Text>
            </Button>
          )}
          {variant !== 'resumes' && (
            <Button priority='primary'>
              <Text variant={TextVariantEnum.textBody2}>{t('user:create_vacancy')}</Text>
            </Button>
          )}
        </ButtonsControl>
      </BoxHeading>
    );
  },
);
