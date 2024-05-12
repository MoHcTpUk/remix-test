import { Link, useLocation } from '@remix-run/react';
import { useState } from 'react';
import routes from 'shared/routing/routes';

import Button from '~/components/common/Button';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import ButtonCreate from '~/components/entities/ButtonCreate';
import EmptyState from '~/components/entities/EmptyState';
import ModalSelectCreateForm from '~/components/entities/ModalSelectCreateForm';
import { useApp, useRouteChecks } from '~/hooks';

import { ButtonWrapper } from './styles';

export function CreateEntityCard() {
  const { t, userContext } = useApp();
  const loc = useLocation();
  const { isUserResume, isUserVacancy, isUserCompany } = useRouteChecks();
  const [visibleSelectionCreate, setSelectionCreate] = useState(false);
  const [variantCreate, setVariantCreate] = useState<'vacancy' | 'resume'>('resume');

  const isRoute = isUserResume || isUserVacancy || isUserCompany;
  let iconName;
  let title;
  let text;
  let buttonElement;

  switch (isRoute) {
    case false:
      iconName = '';
      title = '';
      text = '';
      buttonElement = null;
      break;
    case isUserResume:
      iconName = 'emojiDocument';
      title = `${t('common:create_resume')}`;
      text = `${t('user:create_your_first_resume_it_takes_only_a_few_minutes')}`;
      buttonElement = (
        <ButtonCreate
          variant='resume'
          priority='primary'
          setVariantCreate={setVariantCreate}
          setSelectionCreate={setSelectionCreate}
        />
      );
      break;
    case isUserVacancy:
      iconName = 'emojiBriefcase';
      title = `${t('common:create_vacancy')}`;
      text = `${t('user:create_your_first_vacancy_it_takes_only_a_few_minutes')}`;
      buttonElement = (
        <ButtonCreate
          variant='vacancy'
          priority='primary'
          setVariantCreate={setVariantCreate}
          setSelectionCreate={setSelectionCreate}
        />
      );
      break;
    case isUserCompany:
      iconName = 'emojiStar2';
      title = `${t('common:create_company')}`;
      text = `${t('user:create_your_first_company_it_takes_only_a_few_minutes')}`;
      buttonElement = (
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
      );
      break;
    default:
      iconName = '';
      title = '';
      text = '';
      buttonElement = null;
  }

  return (
    <>
      <EmptyState
        iconName={iconName}
        title={title}
        text={text}
        buttonControl={<ButtonWrapper>{buttonElement}</ButtonWrapper>}
      />

      <ModalSelectCreateForm
        visibility={visibleSelectionCreate}
        setVisibility={setSelectionCreate}
        variant={variantCreate}
      />
    </>
  );
}
