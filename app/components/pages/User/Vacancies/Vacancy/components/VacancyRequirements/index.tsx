import { Form } from '@remix-run/react';
import { type Dispatch, type SetStateAction } from 'react';
import type { Vacancy } from 'shared/v2/vacancies';

import { VacancyCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateVacancy } from '~/types/interfaces/iForms';

import VacancyRequirementsData from './VacancyRequirementsData';
import VacancyRequirementsEdit from './VacancyRequirementsEdit';

export default function VacancyRequirements({
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
  return editCard === VacancyCardEnum.requirements ? (
    <Form method='PATCH' style={{ width: '100%' }}>
      <VacancyRequirementsEdit
        editCard={editCard}
        setEditCard={setEditCard}
        vacancy={vacancy}
        dictionaries={dictionaries}
        actionData={actionData}
      />
    </Form>
  ) : (
    <VacancyRequirementsData
      editCard={editCard}
      setEditCard={setEditCard}
      vacancy={vacancy}
      dictionaries={dictionaries}
    />
  );
}
