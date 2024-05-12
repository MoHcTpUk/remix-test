import { Form } from '@remix-run/react';
import { type Dispatch, type SetStateAction } from 'react';
import type { Vacancy } from 'shared/v2/vacancies';

import { VacancyCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateVacancy } from '~/types/interfaces/iForms';

import VacancyAdditionalData from './VacancyAdditionalData';
import VacancyAdditionalEdit from './VacancyAdditionalEdit';

export default function VacancyAdditional({
  editCard,
  setEditCard,
  vacancy,
  dictionaries,
  actionData,
}: {
  editCard: VacancyCardEnum;
  setEditCard: Dispatch<SetStateAction<string>>;
  vacancy: Vacancy | null;
  dictionaries?: IDictionaries;
  actionData?: IUpdateVacancy;
}) {
  return editCard === VacancyCardEnum.additional ? (
    <Form method='PATCH' style={{ width: '100%' }}>
      <VacancyAdditionalEdit
        editCard={editCard}
        setEditCard={setEditCard}
        vacancy={vacancy}
        dictionaries={dictionaries}
        actionData={actionData}
      />
    </Form>
  ) : (
    <VacancyAdditionalData
      editCard={editCard}
      setEditCard={setEditCard}
      vacancy={vacancy}
      dictionaries={dictionaries}
    />
  );
}
