import { Form } from '@remix-run/react';
import type { Dispatch, SetStateAction } from 'react';
import type { EntityResume } from 'shared/client/data-contracts';
import type { Resume } from 'shared/v2/resumes';

import { ResumeCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateResume } from '~/types/interfaces/iForms';

import ResumeEducationData from './ResumeEducationData';
import ResumeEducationEdit from './ResumeEducationEdit';

export default function ResumeEducation({
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
  return editCard === ResumeCardEnum.education ? (
    <Form method='POST' style={{ width: '100%' }}>
      <ResumeEducationEdit
        editCard={editCard}
        setEditCard={setEditCard}
        resume={resume}
        dictionaries={dictionaries}
        actionData={actionData}
      />
    </Form>
  ) : (
    <ResumeEducationData
      editCard={editCard}
      setEditCard={setEditCard}
      resume={resume}
      dictionaries={dictionaries}
    />
  );
}
