import { Form } from '@remix-run/react';
import type { Dispatch, SetStateAction } from 'react';
import type { Resume } from 'shared/v2/resumes';

import { ResumeCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateResume } from '~/types/interfaces/iForms';

import ResumeInformationData from './ResumeInformationData';
import ResumeInformationEdit from './ResumeInformationEdit';

export default function ResumeInformation({
  editCard,
  setEditCard,
  resume,
  dictionaries,
  actionData,
}: {
  editCard: ResumeCardEnum;
  setEditCard: Dispatch<SetStateAction<string>>;
  resume?: Resume | null;
  dictionaries?: IDictionaries;
  actionData?: IUpdateResume;
}) {
  return editCard === ResumeCardEnum.information ? (
    <Form method='POST' style={{ width: '100%' }}>
      <ResumeInformationEdit
        editCard={editCard}
        setEditCard={setEditCard}
        resume={resume}
        dictionaries={dictionaries}
        actionData={actionData}
      />
    </Form>
  ) : (
    <ResumeInformationData
      editCard={editCard}
      setEditCard={setEditCard}
      resume={resume}
      dictionaries={dictionaries}
    />
  );
}
