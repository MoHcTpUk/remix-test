import { Link } from '@remix-run/react';
import routes from 'shared/routing/routes';

import Button from '~/components/common/Button';
import SvgClose from '~/components/common/Icons/Close';
import { Modal } from '~/components/common/Modal';
import { ModalCloseButton } from '~/components/common/Modal/styles';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';
import { VariantModalEnum } from '~/types/enums/variantModalEnum';

import {
  BoxContainer,
  ButtonsControl,
  HeaderWrapper,
  TextWrapper,
  TitleWrapper,
} from '../ModalConfirmDelete/styles';

export default function ModalRequestNoEntity({
  visibility,
  setVisibility,
  variant,
}: {
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
  variant?: 'resume' | 'vacancy';
}) {
  const { t, theme } = useApp();

  return (
    <Modal
      visibility={visibility}
      setVisibility={setVisibility}
      variant={VariantModalEnum.confirmDelete}
    >
      <BoxContainer>
        <HeaderWrapper>
          <TitleWrapper>
            {variant === 'vacancy' && (
              <Text variant={TextVariantEnum.textHeading2}>{t('user:check_your_vacancies')}</Text>
            )}
            {variant === 'resume' && (
              <Text variant={TextVariantEnum.textHeading2}>{t('user:check_your_resumes')}</Text>
            )}
          </TitleWrapper>
          <ModalCloseButton onClick={() => setVisibility(!visibility)} variant='withHeader'>
            <SvgClose color={theme.modal.svgColor} />
          </ModalCloseButton>
        </HeaderWrapper>

        <TextWrapper>
          {variant === 'vacancy' && (
            <Text variant={TextVariantEnum.textBody1medium}>
              {t('user:you_dont_have_a_published_vacancy_to_send_to_an_candidate')}
            </Text>
          )}
          {variant === 'resume' && (
            <Text variant={TextVariantEnum.textBody1medium}>
              {t('user:you_dont_have_a_published_resume_to_send_to_an_employer')}
            </Text>
          )}
        </TextWrapper>

        <ButtonsControl>
          <Button
            priority='secondary'
            onClick={() => setVisibility(false)}
            className='growingButton'
          >
            <Text variant={TextVariantEnum.textBody2}>{t('common:cancel')}</Text>
          </Button>
          <Link to={variant === 'vacancy' ? routes.user.vacancy.root : routes.user.resume.root}>
            <Button priority='primary' className='growingButton'>
              <Text variant={TextVariantEnum.textBody2}>
                {variant === 'vacancy' ? t('user:go_to_vacancies') : t('user:go_to_resumes')}
              </Text>
            </Button>
          </Link>
        </ButtonsControl>
      </BoxContainer>
    </Modal>
  );
}
