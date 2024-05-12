import { useEffect, useState } from 'react';
import type { Resume } from 'shared/v2/resumes';

import { ResumeCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateResume } from '~/types/interfaces/iForms';

import ResumeAdditionalinformation from './components/ResumeAdditionalInformation';
import ResumeEducation from './components/ResumeEducation';
import ResumeInformation from './components/ResumeInformation';
import ResumeJobPosition from './components/ResumeJobPosition';
import ResumeLocation from './components/ResumeLocation';
import ResumeSettings from './components/ResumeSettings';
import ResumeWorkExperience from './components/ResumeWorkExperience';
import { Wrapper } from './styles';

export default function ResumeComponent({
  resume,
  dictionaries,
  actionSuccess,
  actionData,
}: {
  resume?: Resume | null;
  dictionaries?: IDictionaries;
  actionSuccess?: boolean;
  actionData?: IUpdateResume;
}) {
  const [editCard, setEditCard] = useState(ResumeCardEnum.all);

  useEffect(() => {
    if (actionSuccess) setEditCard(ResumeCardEnum.all);
  }, [resume]);

  return (
    <Wrapper>
      <ResumeInformation
        resume={resume}
        dictionaries={dictionaries}
        editCard={editCard}
        setEditCard={setEditCard}
        actionData={actionData}
      />
      <ResumeLocation
        resume={resume}
        dictionaries={dictionaries}
        editCard={editCard}
        setEditCard={setEditCard}
        actionData={actionData}
      />
      <ResumeJobPosition
        resume={resume}
        dictionaries={dictionaries}
        editCard={editCard}
        setEditCard={setEditCard}
        actionData={actionData}
      />
      <ResumeEducation
        resume={resume}
        dictionaries={dictionaries}
        editCard={editCard}
        setEditCard={setEditCard}
        actionData={actionData}
      />
      <ResumeWorkExperience
        resume={resume}
        dictionaries={dictionaries}
        editCard={editCard}
        setEditCard={setEditCard}
        actionData={actionData}
      />
      <ResumeAdditionalinformation
        resume={resume}
        dictionaries={dictionaries}
        editCard={editCard}
        setEditCard={setEditCard}
        actionData={actionData}
      />
      <ResumeSettings
        resume={resume}
        dictionaries={dictionaries}
        editCard={editCard}
        setEditCard={setEditCard}
        actionData={actionData}
      />
    </Wrapper>
  );
}
