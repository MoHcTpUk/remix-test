import { useFetcher } from '@remix-run/react';
import { useEffect, useState } from 'react';
import type { EntityMessage } from 'shared/client/data-contracts';
import type { Company } from 'shared/v2/companies';
import type { Resume } from 'shared/v2/resumes';
import type { Vacancy } from 'shared/v2/vacancies';
import { styled } from 'styled-components';

import { Box } from '~/components/common/Box';
import BoxInformation from '~/components/common/BoxInformation';
import Button from '~/components/common/Button';
import { Modal } from '~/components/common/Modal';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { ResumeRequest } from '~/components/pages/Search/Resumes/ResumesRequest/ResumeRequest';
import { VacancyRequest } from '~/components/pages/Search/Vacancies/VacanciesRequest/VacancyRequest';
import { useApp } from '~/hooks';
import { BoxInformationEnum } from '~/types/enums/boxInformationEnum';
import { VariantModalEnum } from '~/types/enums/variantModalEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';

import ModalRequestNoEntity from '../ModalRequestNoEntity';

interface IRequest {
  success: boolean;
  message?: EntityMessage;
}

const BoxCards = styled.div`
  max-height: 624px;
  margin-top: 24px;
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export default function ModalRequestList({
  visibility,
  setVisibility,
  variant,
  resumes,
  vacancies,
  resumeId,
  vacancyId,
  dictionaries,
  companies,
  actionRequest,
}: {
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
  variant: 'resume' | 'vacancy';
  resumes?: Resume[] | null;
  vacancies?: Vacancy[] | null;
  companies?: Company[] | null;
  vacancyId?: string;
  resumeId?: string;
  dictionaries?: IDictionaries;
  actionRequest?: boolean;
}) {
  const { t, userContext, theme } = useApp();
  const request = useFetcher<IRequest>();

  const [actionRoute, setActionRoute] = useState('');
  const [selectedCard, setSelectedCard] = useState('');

  const [publishedResumes, setPublishedResumes] = useState<Resume[]>();
  const [publishedVacancies, setPublishedVacancies] = useState<Vacancy[]>();

  useEffect(() => {
    if (request.data?.success) setVisibility(false);
  }, [request.data?.success]);

  useEffect(() => {
    if (resumes) {
      const newResume = resumes.filter((resume) => resume.published);
      setPublishedResumes(newResume);
    }
    if (vacancies) {
      const newVacancies = vacancies.filter((vacancy) => vacancy.published);
      setPublishedVacancies(newVacancies);
    }
  }, [resumes, vacancies]);

  useEffect(() => {
    if (variant === 'resume') {
      setActionRoute(`/search/vacancy/${vacancyId || ''}/request`);
    } else if (variant === 'vacancy') {
      setActionRoute(`/search/resume/${resumeId || ''}/request`);
    }
  }, [variant]);

  const handleConfirm = (id?: string) => {
    if (id) setSelectedCard(id);
  };

  return (variant === 'vacancy' && publishedVacancies && !publishedVacancies[0]) ||
    (variant === 'resume' && publishedResumes && !publishedResumes[0]) ? (
    <ModalRequestNoEntity visibility={visibility} setVisibility={setVisibility} variant={variant} />
  ) : (
    <Modal visibility={visibility} setVisibility={setVisibility} variant={VariantModalEnum.request}>
      {request.data === undefined && (
        <BoxInformation
          variant={BoxInformationEnum.info}
          title={
            variant === 'resume'
              ? t('user:select_resume_to_send')
              : t('user:select_vacancy_to_send')
          }
        />
      )}

      {request.data?.success === false && request.data.message && (
        <BoxInformation
          variant={BoxInformationEnum.error}
          title={request.data.message[userContext.language]}
        />
      )}

      {request.data?.success === true && (
        <BoxInformation
          variant={BoxInformationEnum.success}
          title={t('user:your_request_has_been_sent')}
        />
      )}
      {variant === 'resume' ? (
        <BoxCards>
          {publishedResumes?.map((resume) => (
            <Box
              width='100%'
              style={{
                cursor: 'pointer',
                borderRadius: '12px',
                border:
                  resume.id === selectedCard ? `2px solid ${theme.modal.borderCardsColor}` : '',
              }}
              key={resume?.id}
              onClick={() => handleConfirm(resume?.id)}
            >
              <ResumeRequest resume={resume} dictionaries={dictionaries} />
            </Box>
          ))}
        </BoxCards>
      ) : (
        <BoxCards>
          {publishedVacancies?.map((vacancy) => (
            <Box
              width='100%'
              style={{
                cursor: 'pointer',
                borderRadius: '12px',
                border:
                  vacancy.id === selectedCard ? `2px solid ${theme.modal.borderCardsColor}` : '',
              }}
              key={vacancy?.id}
              onClick={() => handleConfirm(vacancy?.id)}
            >
              <VacancyRequest vacancy={vacancy} companies={companies} dictionaries={dictionaries} />
            </Box>
          ))}
        </BoxCards>
      )}
      <Box
        flexDirection='row'
        justifyContent='flex-end'
        alignItems='center'
        gap='24px'
        width='100%'
        margin='24px 0 0'
      >
        <Button priority='secondary' onClick={() => setVisibility(!visibility)}>
          <Text variant={TextVariantEnum.textBody2}>{t('common:cancel')}</Text>
        </Button>
        <request.Form method='POST' action={actionRoute}>
          <input type='hidden' name='id' value={selectedCard} />
          <Button priority='primary' type='submit'>
            <Text variant={TextVariantEnum.textBody2}>{t('user:send_request')}</Text>
          </Button>
        </request.Form>
      </Box>
    </Modal>
  );
}
