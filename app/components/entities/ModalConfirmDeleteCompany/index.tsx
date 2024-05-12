import { Form } from '@remix-run/react';

import BoxInformation from '~/components/common/BoxInformation';
import { List, ListItem } from '~/components/common/BoxInformation/styles';
import Button from '~/components/common/Button';
import { Icon } from '~/components/common/Icon';
import { Modal } from '~/components/common/Modal';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';
import { BoxInformationEnum } from '~/types/enums/boxInformationEnum';
import { IconEnum } from '~/types/enums/iconEnum';
import { VariantModalEnum } from '~/types/enums/variantModalEnum';

import {
  BoxContainer,
  ButtonsControl,
  ContentWrapper,
  IconWrapper,
  TextWrapper,
  TitleWrapper,
} from './styles';

export default function ModalConfirmDeleteCompany({
  visibility,
  setVisibility,
  id,
  isVerifiedCompany,
  setIsVerifiedCompany,
  visibleDeleteSecondStep,
  setVisibleDeleteSecondStep,
}: {
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
  id?: string;
  isVerifiedCompany: boolean;
  setIsVerifiedCompany: (isVerifiedCompany: boolean) => void;
  visibleDeleteSecondStep: boolean;
  setVisibleDeleteSecondStep: (visibleDeleteSecondStep: boolean) => void;
}) {
  const { t } = useApp();

  return (
    <Modal
      visibility={visibility}
      setVisibility={setVisibility}
      variant={VariantModalEnum.confirmDeleteCompany}
    >
      <BoxContainer>
        <ContentWrapper>
          <IconWrapper>
            <Icon name={IconEnum.warning} />
          </IconWrapper>

          <TextWrapper>
            <TitleWrapper>
              <Text variant={TextVariantEnum.textHeading2}>{t('user:delete_company')}</Text>
            </TitleWrapper>

            <Text variant={TextVariantEnum.textBody2medium}>
              {!isVerifiedCompany
                ? t('user:are_you_sure_you_want_to_delete_this_company')
                : t('user:are_you_sure_you_want_to_delete_this_verified_company')}
            </Text>
          </TextWrapper>

          <BoxInformation
            variant={BoxInformationEnum.warning}
            title={t('user:read_this_before_you_take_action')}
            information={
              !isVerifiedCompany ? (
                t(
                  'user:when_you_delete_a_company_all_vacancies_associated_with_it_will_also_be_deleted_and_cannot_be_restored',
                )
              ) : (
                <List>
                  <ListItem>
                    {t(
                      'user:when_you_delete_a_company_all_vacancies_associated_with_it_will_also_be_deleted_and_cannot_be_restored',
                    )}
                  </ListItem>
                  <br />
                  <ListItem>
                    {t(
                      'user:this_company_is_verified_and_if_you_delete_it_you_will_have_to_go_through_verification_again',
                    )}
                  </ListItem>
                </List>
              )
            }
            noShadow
          />
        </ContentWrapper>

        <ButtonsControl>
          <Form method='DELETE' preventScrollReset>
            <input type='hidden' name='id' value={id} />
            <Button
              priority='secondary'
              value='delete'
              name='action'
              className='growingButton'
              type='submit'
              onClick={(event) => {
                setVisibility(false);
                if (isVerifiedCompany === true) {
                  event?.preventDefault();
                  setVisibleDeleteSecondStep(true);
                }
                setIsVerifiedCompany(false);
              }}
            >
              <Text variant={TextVariantEnum.textBody2}>
                {t('user:i_understand_lets_delete_company')}
              </Text>
            </Button>
          </Form>

          <Button
            priority='primary'
            onClick={() => {
              setVisibility(false);
              setIsVerifiedCompany(false);
            }}
            className='growingButton'
          >
            <Text variant={TextVariantEnum.textBody2}>{t('common:cancel')}</Text>
          </Button>
        </ButtonsControl>
      </BoxContainer>
    </Modal>
  );
}
