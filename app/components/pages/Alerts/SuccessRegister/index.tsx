import { Link } from '@remix-run/react';
import routes from 'shared/routing/routes';

import Button from '~/components/common/Button';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import EmptyState from '~/components/entities/EmptyState';
import { useApp } from '~/hooks';

import { Wrapper } from './styles';

export default function SuccessRegister() {
  const { t } = useApp();

  return (
    <Wrapper>
      <EmptyState
        iconName='emojiStar'
        title={`${t('auth:congratulations_on_your_successful_registration_on_upjob')}`}
        text={`${t(
          'auth:your_account_has_been_successfully_created_and_the_email_address_you_provided_has_been_verified',
        )}`}
        buttonControl={
          <Link to={routes.root}>
            <Button priority='primary' className='growingButton'>
              <Text variant={TextVariantEnum.textBody2}>{t('common:to_the_main_page')} </Text>
            </Button>
          </Link>
        }
      />
    </Wrapper>
  );
}
