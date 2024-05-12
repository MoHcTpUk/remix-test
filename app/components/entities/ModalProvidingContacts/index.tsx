import { Form } from '@remix-run/react';

import Button from '~/components/common/Button';
import SvgClose from '~/components/common/Icons/Close';
import { Modal } from '~/components/common/Modal';
import { ModalCloseButton } from '~/components/common/Modal/styles';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';
import { VariantModalEnum } from '~/types/enums/variantModalEnum';

import { BoxContainer, ButtonsControl, HeaderWrapper, TextWrapper, TitleWrapper } from './styles';

export default function ModalProvidingContacts({
  visibility,
  setVisibility,
  responseId,
}: {
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
  responseId?: string;
}) {
  const { t, theme } = useApp();

  return (
    <Modal
      visibility={visibility}
      setVisibility={setVisibility}
      variant={VariantModalEnum.providingContacts}
    >
      <BoxContainer>
        <HeaderWrapper>
          <TitleWrapper>
            <Text variant={TextVariantEnum.textHeading2}>{t('user:providing_contacts')}</Text>
          </TitleWrapper>
          <ModalCloseButton
            type='button'
            onClick={() => setVisibility(!visibility)}
            variant='withHeader'
          >
            <SvgClose color={theme.modal.svgColor} />
          </ModalCloseButton>
        </HeaderWrapper>

        <TextWrapper>
          <Text variant={TextVariantEnum.textBody1medium}>
            {t(
              'user:give_access_to_your_contacts_to_the_user_so_that_he_she_has_the_opportunity_to_contact_you',
            )}
          </Text>
        </TextWrapper>

        <ButtonsControl>
          <Button
            priority='secondary'
            onClick={() => setVisibility(false)}
            className='growingButton'
          >
            <Text variant={TextVariantEnum.textBody2}>{t('common:cancel')}</Text>
          </Button>

          <Form method='PATCH' preventScrollReset style={{ width: '100%' }}>
            <Button priority='primary' name='responseId' value={responseId} type='submit'>
              <Text variant={TextVariantEnum.textBody2}>{t('user:send_contacts')}</Text>
            </Button>
          </Form>
        </ButtonsControl>
      </BoxContainer>
    </Modal>
  );
}
