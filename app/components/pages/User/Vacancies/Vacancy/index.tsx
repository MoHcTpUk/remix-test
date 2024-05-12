import { useEffect, useState } from 'react';
import type { Company } from 'shared/v2/companies';
import type { Vacancy } from 'shared/v2/vacancies';

import { VacancyCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateVacancy } from '~/types/interfaces/iForms';

import VacancyAdditional from './components/VacancyAdditional';
import VacancyComponentCard from './components/VacancyComponentCard';
import VacancyContacts from './components/VacancyContacts';
import VacancyLocation from './components/VacancyLocation';
import VacancyRequirements from './components/VacancyRequirements';
import VacancyResponses from './components/VacancyResponses';
import { Wrapper } from './styles';

export default function VacancyComponent({
  vacancy,
  dictionaries,
  actionData,
  companies,
}: {
  vacancy: Vacancy | null;
  dictionaries?: IDictionaries;
  actionData?: IUpdateVacancy;
  companies?: Company[];
}) {
  const [editCard, setEditCard] = useState(VacancyCardEnum.all);

  useEffect(() => {
    if (actionData?.success) setEditCard(VacancyCardEnum.all);
  }, [vacancy]);

  return (
    <Wrapper>
      <VacancyComponentCard
        dictionaries={dictionaries}
        vacancy={vacancy}
        editCard={editCard}
        setEditCard={setEditCard}
        actionData={actionData}
      />
      <VacancyContacts
        dictionaries={dictionaries}
        vacancy={vacancy}
        companies={companies}
        editCard={editCard}
        setEditCard={setEditCard}
        actionData={actionData}
      />
      <VacancyLocation
        dictionaries={dictionaries}
        vacancy={vacancy}
        editCard={editCard}
        setEditCard={setEditCard}
        actionData={actionData}
      />
      <VacancyRequirements
        dictionaries={dictionaries}
        vacancy={vacancy}
        editCard={editCard}
        setEditCard={setEditCard}
        actionData={actionData}
      />
      <VacancyResponses
        dictionaries={dictionaries}
        vacancy={vacancy}
        editCard={editCard}
        setEditCard={setEditCard}
        actionData={actionData}
      />
      <VacancyAdditional
        dictionaries={dictionaries}
        vacancy={vacancy}
        editCard={editCard}
        setEditCard={setEditCard}
        actionData={actionData}
      />
    </Wrapper>
  );
}
