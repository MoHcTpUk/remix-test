import { Link, useLocation, useNavigate } from '@remix-run/react';
import { memo } from 'react';
import routes from 'shared/routing/routes';
import type { Company } from 'shared/v2/companies';

import Button from '~/components/common/Button';
import { Icon } from '~/components/common/Icon';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp, useRouteChecks } from '~/hooks';
import { IconEnum } from '~/types/enums/iconEnum';

import { BoxTitle, ButtonsControl, ContainerBox } from '../../styles';

export const HeadingForCompany = memo(
  ({
    isId,
    title,
    companies,
  }: {
    isId: boolean;
    title?: string;
    companies?: Company[] | null;
  }): JSX.Element => {
    const { theme, t, userContext } = useApp();
    const loc = useLocation();

    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const { isSearchCompany } = useRouteChecks();

    return (
      <ContainerBox>
        <BoxTitle>
          {isId && !isSearchCompany && (
            <Button onClick={goBack} priority='secondary' onlyIcon>
              <Icon name={IconEnum.arrowLeft} />
            </Button>
          )}
          <Text
            className='title'
            variant={TextVariantEnum.textHeading1}
            color={theme.user.headingTextColor}
          >
            {title || t('user:companies')}
          </Text>
        </BoxTitle>
        <ButtonsControl>
          {isId && (
            <>
              {!isSearchCompany && (
                <Button className='goBackButton' onClick={goBack} priority='secondary' onlyIcon>
                  <Icon name={IconEnum.arrowLeft} />
                </Button>
              )}
              <Link to={routes.user.vacancy.create}>
                <Button priority='primary'>
                  <Text variant={TextVariantEnum.textBody2}>{t('user:create_vacancy')}</Text>
                </Button>
              </Link>
            </>
          )}
          {!isId && companies?.[0] && (
            <Link
              to={
                userContext.user.isAuthenticated
                  ? routes.user.company.create
                  : `${loc.pathname}${loc.search ? `${loc.search}&login=true` : '?login=true'}`
              }
            >
              <Button priority='primary'>
                <Text variant={TextVariantEnum.textBody2}>{t('user:create_company')}</Text>
              </Button>
            </Link>
          )}
        </ButtonsControl>
      </ContainerBox>
    );
  },
);
