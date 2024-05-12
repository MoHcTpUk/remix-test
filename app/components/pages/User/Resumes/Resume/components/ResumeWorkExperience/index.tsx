import { Form } from '@remix-run/react';
import type { Dispatch, SetStateAction } from 'react';
import type { EntityResume } from 'shared/client/data-contracts';
import type { Resume } from 'shared/v2/resumes';

import { ResumeCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateResume } from '~/types/interfaces/iForms';

import ResumeWorkExperienceData from './ResumeWorkExperienceData';
import ResumeWorkExperienceEdit from './ResumeWorkExperienceEdit';

export default function ResumeWorkExperience({
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
  return editCard === ResumeCardEnum.workExperience ? (
    <Form method='POST' style={{ width: '100%' }}>
      <ResumeWorkExperienceEdit
        editCard={editCard}
        setEditCard={setEditCard}
        resume={resume}
        dictionaries={dictionaries}
        actionData={actionData}
      />
    </Form>
  ) : (
    <ResumeWorkExperienceData
      editCard={editCard}
      setEditCard={setEditCard}
      resume={resume}
      dictionaries={dictionaries}
    />
  );
}
