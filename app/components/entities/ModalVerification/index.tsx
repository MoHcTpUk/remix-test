import { Link } from '@remix-run/react';

import { Box } from '~/components/common/Box';
import Button from '~/components/common/Button';
import { Icon } from '~/components/common/Icon';
import { Modal } from '~/components/common/Modal';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';
import { IconEnum } from '~/types/enums/iconEnum';
import { VariantModalEnum } from '~/types/enums/variantModalEnum';

import { BoxContainer, ContentWrapper, HeaderWrapper, ItemWrapper } from './styles';

export default function ModalVerification({
  visibility,
  setVisibility,
}: {
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
}) {
  const { t, theme } = useApp();

  return (
    <Modal
      visibility={visibility}
      setVisibility={setVisibility}
      variant={VariantModalEnum.verification}
    >
      <BoxContainer>
        <ContentWrapper>
          <HeaderWrapper>
            <Icon name={IconEnum.emojiShield} />
            <Box display='flex' flexDirection='column' gap='8px'>
              <Text variant={TextVariantEnum.textHeading2} className='title'>
                {t('user:application_for_verification')}
              </Text>
              <Text variant={TextVariantEnum.textBody2medium}>
                {t(
                  'user:for_security_reasons_we_need_you_to_confirm_your_connection_with_the_company',
                )}
              </Text>
            </Box>
          </HeaderWrapper>

          <Box display='flex' flexDirection='column' gap='16px'>
            <ItemWrapper>
              <Icon name={IconEnum.blackCamera} />
              <Text variant={TextVariantEnum.textBody2medium}>
                {t('user:take_a_photo_or_scan_of_your_documents_with_tax_id')}
              </Text>
            </ItemWrapper>
            <ItemWrapper>
              <Icon name={IconEnum.blackWarning} />
              <Text variant={TextVariantEnum.textBody2medium}>
                {t('user:make_sure_that_in_the_resulting_photo_the_text_and_the_tax_id')}
              </Text>
            </ItemWrapper>
            <ItemWrapper>
              <Icon name={IconEnum.blackMail} />
              <Box display='flex' flexDirection='column' gap='14px'>
                <Text variant={TextVariantEnum.textBody2medium}>
                  {t('user:send_a_photo_or_scan_to')}
                  <Link
                    to='#'
                    onClick={() => {
                      window.location.href =
                        'mailto:support@upjob.com?subject=Company Verification';
                    }}
                  >
                    <Text
                      variant={TextVariantEnum.textBody2medium}
                      color={theme.accentTextColor}
                      style={{ textDecoration: 'underline' }}
                    >
                      support@upjob.com
                    </Text>
                  </Link>
                </Text>
                <Text variant={TextVariantEnum.textBody2medium} style={{ fontWeight: '200' }}>
                  {t(
                    'user:after_you_sent_a_letter_with_documents_to_us_our_moderator_will_check_the_company',
                  )}
                </Text>
              </Box>
            </ItemWrapper>
          </Box>
        </ContentWrapper>

        <Button priority='secondary' onClick={() => setVisibility(false)} className='growingButton'>
          <Text variant={TextVariantEnum.textBody2}>{t('common:cancel')} </Text>
        </Button>
      </BoxContainer>
    </Modal>
  );
}
