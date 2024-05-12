import { Link } from '@remix-run/react';

import BoxInformation from '~/components/common/BoxInformation';
import Button from '~/components/common/Button';
import { Modal } from '~/components/common/Modal';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';
import { BoxInformationEnum } from '~/types/enums/boxInformationEnum';
import { VariantModalEnum } from '~/types/enums/variantModalEnum';

import EmptyState from '../EmptyState';
import { ButtonContainer } from './styles';

export default function ModalCompanyCreated({
  visibility,
  setVisibility,
  company,
}: {
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
  company?: string;
}) {
  const { t } = useApp();

  return (
    <Modal
      visibility={visibility}
      setVisibility={setVisibility}
      variant={VariantModalEnum.companyCreated}
    >
      <EmptyState
        iconName='emojiStar2'
        title={t('user:company_created')}
        text={t('user:your_company_has_been_successfully_created_on_upjob')}
        boxInfo={
          <BoxInformation
            variant={BoxInformationEnum.info}
            title={t('user:verification_is_required')}
            information={t(
              'user:for_security_reasons_we_need_you_to_confirm_your_connection_with_the_company_and_verify_it',
            )}
            noShadow
          />
        }
        buttonControl={
          <ButtonContainer>
            <Button
              priority='secondary'
              onClick={() => setVisibility(false)}
              className='growingButton'
            >
              <Text variant={TextVariantEnum.textBody2}>{t('common:close')} </Text>
            </Button>
            {company && (
              <Link to={company || '#'}>
                <Button priority='primary' className='growingButton'>
                  <Text variant={TextVariantEnum.textBody2}>{t('user:to_company')} </Text>
                </Button>
              </Link>
            )}
          </ButtonContainer>
        }
      />
    </Modal>
  );
}
