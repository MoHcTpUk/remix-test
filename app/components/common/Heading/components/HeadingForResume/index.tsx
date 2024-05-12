import { Link, useMatches, useNavigate } from '@remix-run/react';
import { memo } from 'react';
import routes from 'shared/routing/routes';
import type { Resume } from 'shared/v2/resumes';

import Button from '~/components/common/Button';
import { Icon } from '~/components/common/Icon';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import ButtonCreate from '~/components/entities/ButtonCreate';
import { useApp, useRouteChecks } from '~/hooks';
import { IconEnum } from '~/types/enums/iconEnum';

import { BoxTitle, ButtonsControl, ContainerBox } from '../../styles';

export const HeadingForResume = memo(
  ({
    isId,
    title,
    variantCreate,
    setVariantCreate,
    setSelectionCreate,
    resumes,
    step,
  }: {
    isId: boolean;
    title?: string;
    variantCreate?: 'vacancy' | 'resume';
    setVariantCreate?: (value: 'vacancy' | 'resume') => void;
    setSelectionCreate?: (value: boolean) => void;
    resumes?: Resume[] | null;
    step?: number;
  }): JSX.Element => {
    const { theme, t } = useApp();

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const matches = useMatches();
    const isCreate = matches.some((m) => m.id.includes('.create'));
    const { isSearchResume } = useRouteChecks();

    return (
      <ContainerBox>
        <BoxTitle>
          {isId && !isSearchResume && (
            <Button onClick={goBack} priority='secondary' onlyIcon>
              <Icon name={IconEnum.arrowLeft} />
            </Button>
          )}
          <Text
            className='title'
            variant={TextVariantEnum.textHeading1}
            color={theme.user.headingTextColor}
          >
            {title || t('user:my_resumes')}
          </Text>
        </BoxTitle>
        <ButtonsControl>
          {isId && !isSearchResume && (
            <Button className='goBackButton' onClick={goBack} priority='secondary' onlyIcon>
              <Icon name={IconEnum.arrowLeft} />
            </Button>
          )}

          {isCreate && step && step !== 1 && (
            <Link to={routes.user.resume.root}>
              <Button priority='secondary'>
                <Text variant={TextVariantEnum.textBody2}>{t('user:complete_later')}</Text>
              </Button>
            </Link>
          )}
          {!isCreate && resumes?.[0] && (
            <ButtonCreate
              variant='resume'
              priority='primary'
              setVariantCreate={setVariantCreate}
              setSelectionCreate={setSelectionCreate}
            />
          )}
          {isSearchResume && (
            <ButtonCreate
              variant='resume'
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
