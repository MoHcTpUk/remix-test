import { Form } from '@remix-run/react';

import { Box } from '~/components/common/Box';
import Button from '~/components/common/Button';
import { Modal } from '~/components/common/Modal';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';

import { BoxContainer, ButtonsControl, LabelRadio } from './styles';

export default function ModalSelectCreateForm({
  visibility,
  setVisibility,
  variant,
}: {
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
  variant: 'resume' | 'vacancy';
}) {
  const { t } = useApp();

  return (
    <Modal visibility={visibility} setVisibility={setVisibility}>
      <BoxContainer>
        <Text variant={TextVariantEnum.textHeading3} style={{ textAlign: 'center' }}>
          {t('user:choose_an_action')}
        </Text>

        {variant === 'resume' ? (
          <Text variant={TextVariantEnum.textBody1medium} style={{ textAlign: 'center' }}>
            {t('user:you_already_have_an_unfinished_resume_what_would_you_like_to_do_now')}
          </Text>
        ) : (
          <Text variant={TextVariantEnum.textBody1medium} style={{ textAlign: 'center' }}>
            {t('user:you_already_have_an_unfinished_vacancy_what_would_you_like_to_do_now')}
          </Text>
        )}

        <ButtonsControl>
          <Form method='POST' action='/actions/set-forms' style={{ width: '100%' }}>
            <Box flexDirection='column' width='100%' gap='10px'>
              <LabelRadio htmlFor='continue'>
                <input
                  name='selection'
                  value='continue'
                  type='radio'
                  id='continue'
                  defaultChecked
                />
                {variant === 'resume' ? (
                  <Text variant={TextVariantEnum.textBody2}>
                    {t('user:continue_filling_out_an_existing_resume')}
                  </Text>
                ) : (
                  <Text variant={TextVariantEnum.textBody2}>
                    {t('user:continue_filling_out_an_existing_vacancy')}
                  </Text>
                )}
              </LabelRadio>
              <LabelRadio htmlFor='delete'>
                <input name='selection' value='delete' type='radio' id='delete' />
                {variant === 'resume' ? (
                  <Text variant={TextVariantEnum.textBody2}>{t('user:create_a_new_resume')}</Text>
                ) : (
                  <Text variant={TextVariantEnum.textBody2}>{t('user:create_a_new_vacancy')}</Text>
                )}
              </LabelRadio>
              <Button
                priority='primary'
                type='submit'
                fullwidth
                onClick={() => setVisibility(false)}
              >
                <Text variant={TextVariantEnum.textBody2}>{t('common:confirm')}</Text>
              </Button>
              <input type='hidden' name='form' value={variant} />
            </Box>
          </Form>

          <Button priority='secondary' onClick={() => setVisibility(false)} fullwidth>
            <Text variant={TextVariantEnum.textBody2}>{t('common:cancel')}</Text>
          </Button>
        </ButtonsControl>
      </BoxContainer>
    </Modal>
  );
}
