import { Form, useMatches } from '@remix-run/react';

import Button from '~/components/common/Button';
import SvgClose from '~/components/common/Icons/Close';
import { Modal } from '~/components/common/Modal';
import { ModalCloseButton } from '~/components/common/Modal/styles';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';
import { VariantModalEnum } from '~/types/enums/variantModalEnum';

import { BoxContainer, ButtonsControl, HeaderWrapper, TextWrapper, TitleWrapper } from './styles';

export default function ModalConfirmDelete({
  visibility,
  setVisibility,
  id,
}: {
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
  id?: string;
}) {
  const { t, theme } = useApp();
  const matches = useMatches();
  const resumeMatches = matches.some((m) => m.id === 'routes/user/resume');
  const vacancyMatches = matches.some((m) => m.id === 'routes/user/vacancy');
  const companyMatches = matches.some((m) => m.id === 'routes/user/company');

  return (
    <Modal
      visibility={visibility}
      setVisibility={setVisibility}
      variant={VariantModalEnum.confirmDelete}
    >
      <BoxContainer>
        <HeaderWrapper>
          <TitleWrapper>
            {resumeMatches && (
              <Text variant={TextVariantEnum.textHeading2}>{t('user:delete_resume')}</Text>
            )}
            {vacancyMatches && (
              <Text variant={TextVariantEnum.textHeading2}>{t('user:delete_vacancy')}</Text>
            )}
          </TitleWrapper>
          <ModalCloseButton onClick={() => setVisibility(!visibility)} variant='withHeader'>
            <SvgClose color={theme.modal.svgColor} />
          </ModalCloseButton>
        </HeaderWrapper>

        <TextWrapper>
          {resumeMatches && (
            <Text variant={TextVariantEnum.textBody1medium}>
              {t('user:are_you_sure_you_want_to_delete_this_resume')}
            </Text>
          )}
          {vacancyMatches && (
            <Text variant={TextVariantEnum.textBody1medium}>
              {t('user:are_you_sure_you_want_to_delete_this_vacancy')}
            </Text>
          )}
          {companyMatches && (
            <Text variant={TextVariantEnum.textBody1medium}>
              {t(
                'user:are_you_sure_you_want_to_delete_this_verified_company_and_all_vacancies_related_to_it',
              )}
            </Text>
          )}
        </TextWrapper>

        <ButtonsControl>
          <Form method='DELETE' preventScrollReset>
            <input type='hidden' name='id' value={id} />
            <Button
              priority='secondary'
              value='delete'
              name='action'
              className='growingButton'
              type='submit'
              onClick={() => setVisibility(false)}
            >
              <Text variant={TextVariantEnum.textBody2}>{t('common:delete')}</Text>
            </Button>
          </Form>
          <Button priority='primary' onClick={() => setVisibility(false)} className='growingButton'>
            <Text variant={TextVariantEnum.textBody2}>{t('common:cancel')}</Text>
          </Button>
        </ButtonsControl>
      </BoxContainer>
    </Modal>
  );
}
