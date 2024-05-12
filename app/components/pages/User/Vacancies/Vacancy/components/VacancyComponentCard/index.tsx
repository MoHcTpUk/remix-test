import { Form } from '@remix-run/react';
import { type Dispatch, type SetStateAction } from 'react';
import type { Vacancy } from 'shared/v2/vacancies';

import { VacancyCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateVacancy } from '~/types/interfaces/iForms';

import VacancyComponentCardData from './VacancyComponentCardData';
import VacancyComponentCardEdit from './VacancyComponentCardEdit';

export default function VacancyComponentCard({
  editCard,
  setEditCard,
  vacancy,
  dictionaries,
  actionData,
}: {
  vacancy: Vacancy | null;
  dictionaries?: IDictionaries;
  editCard: VacancyCardEnum;
  setEditCard: Dispatch<SetStateAction<string>>;
  actionData?: IUpdateVacancy;
}) {
  return editCard === VacancyCardEnum.vacancy ? (
    <Form method='POST' style={{ width: '100%' }}>
      <VacancyComponentCardEdit
        editCard={editCard}
        setEditCard={setEditCard}
        vacancy={vacancy}
        dictionaries={dictionaries}
        actionData={actionData}
      />
    </Form>
  ) : (
    <VacancyComponentCardData
      editCard={editCard}
      setEditCard={setEditCard}
      vacancy={vacancy}
      dictionaries={dictionaries}
    />
  );
}
