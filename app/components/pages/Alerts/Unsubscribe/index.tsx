import { Link } from '@remix-run/react';
import { useState } from 'react';
import routes from 'shared/routing/routes';

import Button from '~/components/common/Button';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import EmptyState from '~/components/entities/EmptyState';
import { useApp } from '~/hooks';

import { Wrapper } from './styles';

export default function Unsubscribe() {
  const { t } = useApp();
  const [isUnsubscribed, setIsUnsubscribed] = useState(false);

  return (
    <Wrapper>
      <EmptyState
        iconName={isUnsubscribed ? 'emojiZzz' : 'warning'}
        title={
          isUnsubscribed === false
            ? `${t('user:unsubscribe_from_mailing_list')}`
            : `${t('user:you_have_unsubscribed_from_the_mailing_list')}`
        }
        text={
          isUnsubscribed === false
            ? `${t('user:please_click_the_link_below_to_confirm_that_you_want_to_unsubscribe')}`
            : `${t('user:thank_you_for_being_with_us_we_hope_our_letters_were_useful_to_you')}`
        }
        buttonControl={
          isUnsubscribed === false ? (
            <Button
              priority='primary'
              className='growingButton'
              onClick={() => setIsUnsubscribed(true)}
            >
              <Text variant={TextVariantEnum.textBody2}>{t('common:unsubscribe')}</Text>
            </Button>
          ) : (
            <Link to={routes.root}>
              <Button priority='primary' className='growingButton'>
                <Text variant={TextVariantEnum.textBody2}>{t('common:to_the_main_page')}</Text>
              </Button>
            </Link>
          )
        }
      />
    </Wrapper>
  );
}
