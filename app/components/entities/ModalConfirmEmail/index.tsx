import { Box } from '~/components/common/Box';
import Button from '~/components/common/Button';
import { Modal } from '~/components/common/Modal';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';
import { VariantModalEnum } from '~/types/enums/variantModalEnum';

import { BoxContainer } from './styles';

export default function ModalConfirmEmail({
  visibility,
  setVisibility,
}: {
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
}) {
  const { t, userContext, theme } = useApp();

  return (
    <Modal
      visibility={visibility}
      setVisibility={setVisibility}
      variant={VariantModalEnum.confirmEmail}
    >
      <BoxContainer>
        <Box style={{ position: 'absolute', top: '24px', left: '24px' }}>
          <Text variant={TextVariantEnum.textHeading3}>{t('user:email_confirmation')}</Text>
        </Box>

        <Box
          width='90%'
          flexDirection='column'
          gap='24px'
          style={{ position: 'absolute', left: '24px', marginTop: '54px' }}
        >
          <Text variant={TextVariantEnum.textBody2}>
            {`${t('user:open_the_email_sent_to')} `}{' '}
            <span style={{ color: theme.accentTextColor }}>{userContext.user.email}</span>{' '}
            {`${t('user:and_click_the_link_in_the_email_to_complete_the_verification_process')}`}
          </Text>

          <Box width='100%' justifyContent='flex-end'>
            <Button priority='secondary' onClick={() => setVisibility(!visibility)}>
              <Text variant={TextVariantEnum.textBody2}>{t('common:close')}</Text>
            </Button>
          </Box>
        </Box>
      </BoxContainer>
    </Modal>
  );
}
