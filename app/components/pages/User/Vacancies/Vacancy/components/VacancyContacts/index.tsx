import { Form } from '@remix-run/react';
import { type Dispatch, type SetStateAction } from 'react';
import type { Company } from 'shared/v2/companies';
import type { Vacancy } from 'shared/v2/vacancies';

import { VacancyCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateVacancy } from '~/types/interfaces/iForms';

import VacancyContactsData from './VacancyContactsData';
import VacancyContactsEdit from './VacancyContactsEdit';

export default function VacancyContacts({
  editCard,
  setEditCard,
  vacancy,
  dictionaries,
  companies,
  actionData,
}: {
  vacancy: Vacancy | null;
  dictionaries?: IDictionaries;
  editCard: VacancyCardEnum;
  setEditCard: Dispatch<SetStateAction<string>>;
  companies?: Company[];
  actionData?: IUpdateVacancy;
}) {
  return editCard === VacancyCardEnum.employer ? (
    <Form method='PATCH' style={{ width: '100%' }}>
      <VacancyContactsEdit
        editCard={editCard}
        setEditCard={setEditCard}
        vacancy={vacancy}
        dictionaries={dictionaries}
        companies={companies}
        actionData={actionData}
      />
    </Form>
  ) : (
    <VacancyContactsData
      editCard={editCard}
      setEditCard={setEditCard}
      vacancy={vacancy}
      dictionaries={dictionaries}
      companies={companies}
    />
  );
}
