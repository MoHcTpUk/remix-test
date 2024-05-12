import { Form } from '@remix-run/react';
import { memo } from 'react';
import type { Company } from 'shared/v2/companies';
import type { Vacancy } from 'shared/v2/vacancies';

import ModalCompanyCreated from '~/components/entities/ModalCompanyCreated';
import { useModalForParams } from '~/hooks';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateVacancy } from '~/types/interfaces/iForms';

import { Wrapper } from '../styles';
import VacancyAdditionalEdit from './components/VacancyAdditional/VacancyAdditionalEdit';
import VacancyComponentCardEdit from './components/VacancyComponentCard/VacancyComponentCardEdit';
import VacancyContactsEdit from './components/VacancyContacts/VacancyContactsEdit';
import VacancyLocationEdit from './components/VacancyLocation/VacancyLocationEdit';
import VacancyRequirementsEdit from './components/VacancyRequirements/VacancyRequirementsEdit';
import VacancyResponsesEdit from './components/VacancyResponses/VacancyResponsesEdit';

export const VacancyCreate = memo(
  ({
    step,
    vacancy,
    dictionaries,
    companies,
    vacancyId,
    actionData,
  }: {
    step?: number;
    vacancy?: Vacancy | null;
    dictionaries?: IDictionaries;
    companies?: Company[];
    vacancyId?: string;
    actionData?: IUpdateVacancy;
  }): JSX.Element => {
    const { visibilityModal, setVisibilityModal } = useModalForParams('create');

    return (
      <Wrapper>
        {step === 1 && (
          <Form method='POST' style={{ width: '100%' }}>
            <input name='step' type='hidden' value={step} />
            <VacancyComponentCardEdit
              state='create'
              vacancy={vacancy}
              dictionaries={dictionaries}
              step={step}
              actionData={actionData}
            />
          </Form>
        )}
        {step === 2 && (
          <Form method='PATCH' style={{ width: '100%' }}>
            <input name='step' type='hidden' value={step} />
            <input name='vacancy_id' type='hidden' value={vacancyId} />
            <VacancyContactsEdit
              state='create'
              vacancy={vacancy}
              dictionaries={dictionaries}
              step={step}
              companies={companies}
              actionData={actionData}
            />
          </Form>
        )}
        {step === 3 && (
          <Form method='PATCH' style={{ width: '100%' }}>
            <input name='step' type='hidden' value={step} />
            <input name='vacancy_id' type='hidden' value={vacancyId} />
            <VacancyLocationEdit
              state='create'
              vacancy={vacancy}
              dictionaries={dictionaries}
              step={step}
              actionData={actionData}
            />
          </Form>
        )}
        {step === 4 && (
          <Form method='PATCH' style={{ width: '100%' }}>
            <input name='step' type='hidden' value={step} />
            <input name='vacancy_id' type='hidden' value={vacancyId} />
            <VacancyRequirementsEdit
              state='create'
              vacancy={vacancy}
              dictionaries={dictionaries}
              step={step}
              actionData={actionData}
            />
          </Form>
        )}
        {step === 5 && (
          <Form method='PATCH' style={{ width: '100%' }}>
            <input name='step' type='hidden' value={step} />
            <input name='vacancy_id' type='hidden' value={vacancyId} />
            <VacancyResponsesEdit
              state='create'
              vacancy={vacancy}
              dictionaries={dictionaries}
              step={step}
              actionData={actionData}
            />
          </Form>
        )}
        {step === 6 && (
          <Form method='PATCH' style={{ width: '100%' }}>
            <input name='step' type='hidden' value={step} />
            <input name='vacancy_id' type='hidden' value={vacancyId} />
            <VacancyAdditionalEdit
              state='create'
              vacancy={vacancy}
              dictionaries={dictionaries}
              step={step}
              actionData={actionData}
            />
          </Form>
        )}

        <ModalCompanyCreated visibility={visibilityModal} setVisibility={setVisibilityModal} />
      </Wrapper>
    );
  },
);
