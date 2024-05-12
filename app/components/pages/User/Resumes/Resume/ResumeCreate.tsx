import { Form } from '@remix-run/react';
import { memo } from 'react';
import type { Resume } from 'shared/v2/resumes';

import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateResume } from '~/types/interfaces/iForms';

import ResumeAdditionalinformationEdit from './components/ResumeAdditionalInformation/ResumeAdditionalInformationEdit';
import ResumeEducationEdit from './components/ResumeEducation/ResumeEducationEdit';
import ResumeInformationEdit from './components/ResumeInformation/ResumeInformationEdit';
import ResumeJobPositionEdit from './components/ResumeJobPosition/ResumeJobPositionEdit';
import ResumeLocationEdit from './components/ResumeLocation/ResumeLocationEdit';
import ResumeSettingsEdit from './components/ResumeSettings/ResumeSettingsEdit';
import ResumeWorkExperienceEdit from './components/ResumeWorkExperience/ResumeWorkExperienceEdit';
import { Wrapper } from './styles';

export const ResumeCreate = memo(
  ({
    step,
    resume,
    actionData,
    dictionaries,
    resumeId,
  }: {
    step?: number;
    resume?: Resume | null;
    actionData?: IUpdateResume;
    dictionaries?: IDictionaries;
    resumeId: string;
  }): JSX.Element => (
    // const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    //   e.preventDefault();
    // }

    <Wrapper>
      <input name='step' type='hidden' value={step} />
      {step === 1 && (
        <Form method='POST' style={{ width: '100%' }}>
          <input name='step' type='hidden' value={step} />
          <ResumeInformationEdit
            state='create'
            resume={resume}
            dictionaries={dictionaries}
            step={step}
            actionData={actionData}
          />
        </Form>
      )}
      {step === 2 && (
        <Form method='PATCH' style={{ width: '100%' }}>
          <input name='step' type='hidden' value={step} />
          <input name='vacancy_id' type='hidden' value={resumeId} />
          <ResumeLocationEdit
            state='create'
            resume={resume}
            dictionaries={dictionaries}
            step={step}
            actionData={actionData}
          />
        </Form>
      )}
      {step === 3 && (
        <Form method='PATCH' style={{ width: '100%' }}>
          <input name='step' type='hidden' value={step} />
          <input name='vacancy_id' type='hidden' value={resumeId} />
          <ResumeJobPositionEdit
            state='create'
            resume={resume}
            dictionaries={dictionaries}
            step={step}
            actionData={actionData}
          />
        </Form>
      )}
      {step === 4 && (
        <Form method='PATCH' style={{ width: '100%' }}>
          <input name='step' type='hidden' value={step} />
          <input name='vacancy_id' type='hidden' value={resumeId} />
          <ResumeEducationEdit
            state='create'
            resume={resume}
            dictionaries={dictionaries}
            step={step}
            actionData={actionData}
          />
        </Form>
      )}
      {step === 5 && (
        <Form method='PATCH' style={{ width: '100%' }}>
          <input name='step' type='hidden' value={step} />
          <input name='vacancy_id' type='hidden' value={resumeId} />
          <ResumeWorkExperienceEdit
            state='create'
            resume={resume}
            dictionaries={dictionaries}
            step={step}
            actionData={actionData}
          />
        </Form>
      )}
      {step === 6 && (
        <Form method='PATCH' style={{ width: '100%' }}>
          <input name='step' type='hidden' value={step} />
          <input name='vacancy_id' type='hidden' value={resumeId} />
          <ResumeAdditionalinformationEdit
            state='create'
            resume={resume}
            dictionaries={dictionaries}
            step={step}
            actionData={actionData}
          />
        </Form>
      )}
      {step === 7 && (
        <Form method='PATCH' style={{ width: '100%' }}>
          <input name='step' type='hidden' value={step} />
          <input name='vacancy_id' type='hidden' value={resumeId} />
          <ResumeSettingsEdit
            state='create'
            resume={resume}
            dictionaries={dictionaries}
            step={step}
            actionData={actionData}
          />
        </Form>
      )}
    </Wrapper>
  ),
);
