import { Link, useMatches, useNavigate } from '@remix-run/react';
import { memo } from 'react';
import routes from 'shared/routing/routes';
import type { Vacancy } from 'shared/v2/vacancies';

import Button from '~/components/common/Button';
import { Icon } from '~/components/common/Icon';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import ButtonCreate from '~/components/entities/ButtonCreate';
import { useApp, useRouteChecks } from '~/hooks';
import { IconEnum } from '~/types/enums/iconEnum';

import { BoxTitle, ButtonsControl, ContainerBox } from '../../styles';

export const HeadingForVacancy = memo(
  ({
    isId,
    title,
    variantCreate,
    setVariantCreate,
    setSelectionCreate,
    vacancies,
    step,
  }: {
    isId: boolean;
    title?: string;
    variantCreate?: 'vacancy' | 'resume';
    setVariantCreate?: (value: 'vacancy' | 'resume') => void;
    setSelectionCreate?: (value: boolean) => void;
    vacancies?: Vacancy[] | null;
    step?: number;
  }): JSX.Element => {
    const { theme, t } = useApp();

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const matches = useMatches();
    const isCreate = matches.some((m) => m.id.includes('.create'));
    const { isSearchVacancy } = useRouteChecks();

    return (
      <ContainerBox>
        <BoxTitle>
          {isId && !isSearchVacancy && (
            <Button onClick={goBack} priority='secondary' onlyIcon>
              <Icon name={IconEnum.arrowLeft} />
            </Button>
          )}
          <Text
            className='title'
            variant={TextVariantEnum.textHeading1}
            color={theme.user.headingTextColor}
          >
            {title || t('user:my_vacancies')}
          </Text>
        </BoxTitle>
        <ButtonsControl>
          {isId && !isSearchVacancy && (
            <Button className='goBackButton' onClick={goBack} priority='secondary' onlyIcon>
              <Icon name={IconEnum.arrowLeft} />
            </Button>
          )}
          {isCreate && step && step !== 1 && (
            <Link to={routes.user.vacancy.root}>
              <Button priority='secondary'>
                <Text variant={TextVariantEnum.textBody2}>{t('user:complete_later')}</Text>
              </Button>
            </Link>
          )}
          {!isCreate && vacancies?.[0] && (
            <ButtonCreate
              variant='vacancy'
              priority='primary'
              setVariantCreate={setVariantCreate}
              setSelectionCreate={setSelectionCreate}
            />
          )}
          {isSearchVacancy && (
            <ButtonCreate
              variant='vacancy'
              priority='primary'
              setVariantCreate={setVariantCreate}
              setSelectionCreate={setSelectionCreate}
            />
          )}
        </ButtonsControl>
      </ContainerBox>
    );
  },
);
