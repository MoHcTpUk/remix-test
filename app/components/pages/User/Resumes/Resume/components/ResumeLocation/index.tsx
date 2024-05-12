import { Form } from '@remix-run/react';
import type { Dispatch, SetStateAction } from 'react';
import type { Resume } from 'shared/v2/resumes';

import { useApp } from '~/hooks';
import { ResumeCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateResume } from '~/types/interfaces/iForms';

import ResumeLocationData from './ResumeLocationData';
import ResumeLocationEdit from './ResumeLocationEdit';

export default function ResumeLocation({
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
  const { t } = useApp();

  return editCard === ResumeCardEnum.location ? (
    <Form method='POST' style={{ width: '100%' }}>
      <ResumeLocationEdit
        editCard={editCard}
        setEditCard={setEditCard}
        resume={resume}
        dictionaries={dictionaries}
        actionData={actionData}
      />
    </Form>
  ) : (
    <ResumeLocationData
      editCard={editCard}
      setEditCard={setEditCard}
      resume={resume}
      dictionaries={dictionaries}
    />
  );
}
