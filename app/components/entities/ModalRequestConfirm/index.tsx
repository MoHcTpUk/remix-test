import { Form } from '@remix-run/react';

import { Box } from '~/components/common/Box';
import Button from '~/components/common/Button';
import { Modal } from '~/components/common/Modal';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';

import { BoxContainer } from './styles';

export default function ModalRequestConfirm({
  visibility,
  setVisibility,
  variant,
  id,
}: {
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
  variant: 'resume' | 'vacancy';
  id?: string;
}) {
  const { t, userContext } = useApp();

  return (
    <Modal visibility={visibility} setVisibility={setVisibility}>
      <BoxContainer>
        <Text variant={TextVariantEnum.textHeading3}>{t('user:send_request')}</Text>

        <Text style={{ textAlign: 'center' }} variant={TextVariantEnum.textBody1medium}>
          {variant === 'resume'
            ? t('user:are_you_sure_you_want_to_send_this_resume')
            : t('user:are_you_sure_you_want_to_send_this_vacancy')}
        </Text>

        <Box gap='24px' flexDirection='column' width='100%'>
          <Button priority='secondary' fullwidth onClick={() => setVisibility(!visibility)}>
            <Text variant={TextVariantEnum.textBody2}>{t('common:cancel')}</Text>
          </Button>

          <Form method='POST' style={{ width: '100%' }}>
            <input type='hidden' name='id' value={id} />
            <Button
              type='submit'
              fullwidth
              priority='primary'
              onClick={() => setVisibility(!visibility)}
            >
              <Text variant={TextVariantEnum.textBody2}>{t('common:yes')}</Text>
            </Button>
          </Form>
        </Box>
      </BoxContainer>
    </Modal>
  );
}
