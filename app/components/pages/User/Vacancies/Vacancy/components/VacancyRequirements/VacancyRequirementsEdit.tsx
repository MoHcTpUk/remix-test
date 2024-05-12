import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import type { Education, Language, Vacancy, WorkExperience } from 'shared/v2/vacancies';
import { v4 as uuidv4 } from 'uuid';

import { Box } from '~/components/common/Box';
import Button from '~/components/common/Button';
import { BoxCard } from '~/components/common/Card';
import { Select } from '~/components/common/Select';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { BoxFields, CardContainer } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import type { StateCard } from '~/types/enums/stateCardEnum';
import { VacancyCardEnum } from '~/types/enums/stateCardEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateVacancy } from '~/types/interfaces/iForms';
import { extractTitles } from '~/utils/helpers.client';

interface EducationFormFieldProps {
  education: Education;
  dictionaries?: IDictionaries;
  index: number;
  onChange: (index: number, updatedEducation: Education) => void;
  onDelete: (index: number) => void;
  actionData?: IUpdateVacancy;
}

interface WorkExperienceFormProps {
  workExperience: WorkExperience;
  dictionaries?: IDictionaries;
  index: number;
  onChange: (index: number, updatedWorkExperience: WorkExperience) => void;
  onDelete: (index: number) => void;
  actionData?: IUpdateVacancy;
}

interface LanguageFormProps {
  language: Language;
  dictionaries?: IDictionaries;
  index: number;
  onChange: (index: number, updatedLanguage: Language) => void;
  onDelete: (index: number) => void;
  actionData?: IUpdateVacancy;
}

function EducationForm({
  education,
  dictionaries,
  index,
  onChange,
  onDelete,
  actionData,
}: EducationFormFieldProps) {
  const { t, theme, userContext } = useApp();

  const handleChange = (updatedEducation: Education) => {
    onChange(index, updatedEducation);
  };

  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <Box
      width='100%'
      flexDirection='column'
      gap='24px'
      style={{
        borderBottom: `1px solid ${theme.user.borderColor}`,
        paddingBottom: '24px',
      }}
      key={education.specialization_id}
    >
      <Select
        entries={extractTitles(dictionaries?.requirementsLevel, userContext.language)}
        placeholder={t('user:education')}
        id={`${index}.education`}
        name='education'
        values={[education.education_id || '']}
        onChange={(value) => handleChange({ ...education, education_id: value })}
        errorText={actionData?.fieldErrors?.education_id?.[userContext.language]}
      />

      <Select
        entries={extractTitles(dictionaries?.educationLevel, userContext.language)}
        placeholder={t('user:education_level')}
        id={`${index}.education_level`}
        name='education_level'
        values={[education.level_id || '']}
        onChange={(value) => handleChange({ ...education, level_id: value })}
        errorText={actionData?.fieldErrors?.level_id?.[userContext.language]}
      />

      <Select
        entries={extractTitles(dictionaries?.specializations, userContext.language)}
        placeholder={t('user:specialization')}
        id={`${index}.education_specialization`}
        name='education_specialization'
        values={[education.specialization_id || '']}
        onChange={(value) => handleChange({ ...education, specialization_id: value })}
        errorText={actionData?.fieldErrors?.specialization_id?.[userContext.language]}
      />

      {/* Delete button */}
      <Button onClick={handleDelete} priority='secondary' fullwidth>
        <Text variant={TextVariantEnum.textBody2}>{t('common:delete')}</Text>
      </Button>
    </Box>
  );
}

function WorkExperienceForm({
  workExperience,
  dictionaries,
  index,
  onChange,
  onDelete,
  actionData,
}: WorkExperienceFormProps) {
  const { t, theme, userContext } = useApp();

  const handleChange = (updatedWorkExperience: WorkExperience) => {
    onChange(index, updatedWorkExperience);
  };

  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <Box
      width='100%'
      flexDirection='column'
      gap='24px'
      style={{
        borderBottom: `1px solid ${theme.user.borderColor}`,
        paddingBottom: '24px',
      }}
      key={workExperience.specialization_id}
    >
      <Select
        entries={extractTitles(dictionaries?.requirementsLevel, userContext.language)}
        placeholder={t('user:work_experience')}
        id={`${index}.work_experience`}
        name='workExperience'
        values={[workExperience.work_experience_id || '']}
        onChange={(value) => handleChange({ ...workExperience, work_experience_id: value })}
        errorText={actionData?.fieldErrors?.work_experience_id?.[userContext.language]}
      />

      <Select
        entries={extractTitles(dictionaries?.yearsOfExperience, userContext.language)}
        placeholder={t('user:period_of_work')}
        id={`${index}.periodOfWork`}
        name='periodOfWork'
        values={[workExperience.period_of_work_id || '']}
        onChange={(value) => handleChange({ ...workExperience, period_of_work_id: value })}
        errorText={actionData?.fieldErrors?.period_of_work_id?.[userContext.language]}
      />

      <Select
        entries={extractTitles(dictionaries?.specializations, userContext.language)}
        placeholder={t('user:specialization')}
        id={`${index}.workExperience_specialization`}
        name='workExperience_specialization'
        values={[workExperience.specialization_id || '']}
        onChange={(value) => handleChange({ ...workExperience, specialization_id: value })}
        errorText={actionData?.fieldErrors?.specialization_id?.[userContext.language]}
      />

      {/* Delete button */}
      <Button onClick={handleDelete} priority='secondary' fullwidth>
        <Text variant={TextVariantEnum.textBody2}>{t('common:delete')}</Text>
      </Button>
    </Box>
  );
}

function LanguageForm({
  language,
  dictionaries,
  index,
  onChange,
  onDelete,
  actionData,
}: LanguageFormProps) {
  const { t, theme, userContext } = useApp();

  const handleChange = (updatedLanguage: Language) => {
    onChange(index, updatedLanguage);
  };

  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <Box
      width='100%'
      flexDirection='column'
      gap='24px'
      style={{
        borderBottom: `1px solid ${theme.user.borderColor}`,
        paddingBottom: '24px',
      }}
      key={language.language_knowledge_id}
    >
      <Select
        entries={extractTitles(dictionaries?.requirementsLevel, userContext.language)}
        placeholder={t('user:language_knowledge')}
        id={`${index}.language_knowledge`}
        name='language_knowledge'
        values={[language.language_knowledge_id || '']}
        onChange={(value) => handleChange({ ...language, language_knowledge_id: value })}
        errorText={actionData?.fieldErrors?.language_knowledge_id?.[userContext.language]}
      />

      <Select
        entries={extractTitles(dictionaries?.languages, userContext.language)}
        placeholder={t('user:language')}
        id={`${index}.language`}
        name='language'
        values={[language.language_id || '']}
        onChange={(value) => handleChange({ ...language, language_id: value })}
        errorText={actionData?.fieldErrors?.language_id?.[userContext.language]}
      />

      <Select
        entries={extractTitles(dictionaries?.languageLevel, userContext.language)}
        placeholder={t('user:level')}
        id={`${index}.language_level`}
        name='language_level'
        values={[language.level_id || '']}
        onChange={(value) => handleChange({ ...language, level_id: value })}
        errorText={actionData?.fieldErrors?.level_id?.[userContext.language]}
      />

      {/* Delete button */}
      <Button onClick={handleDelete} priority='secondary' fullwidth>
        <Text variant={TextVariantEnum.textBody2}>{t('common:delete')}</Text>
      </Button>
    </Box>
  );
}

export default function VacancyRequirementsEdit({
  editCard,
  setEditCard,
  state,
  step,
  vacancy,
  dictionaries,
  actionData,
}: {
  vacancy?: Vacancy | null;
  dictionaries?: IDictionaries;
  editCard?: VacancyCardEnum;
  setEditCard?: Dispatch<SetStateAction<string>>;
  state?: StateCard;
  step?: number;
  actionData?: IUpdateVacancy;
}) {
  const { t } = useApp();

  const educations: Education[] = [
    {
      education_id: '',
      level_id: '',
      specialization_id: '',
    },
  ];

  const works: WorkExperience[] = [
    {
      work_experience_id: '',
      period_of_work_id: '',
      specialization_id: '',
    },
  ];

  const langs: Language[] = [
    {
      language_id: '',
      level_id: '',
      language_knowledge_id: '',
    },
  ];

  const [educationExperiences, setEducationExperiences] = useState(
    vacancy?.requirements?.education || educations,
  );
  const [workExperiences, setWorkExperiences] = useState(
    vacancy?.requirements?.work_experience || works,
  );
  const [languages, setLanguages] = useState(vacancy?.requirements?.language || langs);

  const handleAddEducationClick = () => {
    setEducationExperiences((prevExperiences) => [
      ...prevExperiences,
      {
        education_id: '',
        level_id: '',
        specialization_id: '',
      },
    ]);
  };

  const handleAddWorksClick = () => {
    setWorkExperiences((prevExperiences) => [
      ...prevExperiences,
      {
        work_experience_id: '',
        period_of_work_id: '',
        specialization_id: '',
      },
    ]);
  };

  const handleAddLangsClick = () => {
    setLanguages((prevLanguages) => [
      ...prevLanguages,
      {
        language_id: '',
        level_id: '',
        language_knowledge_id: '',
      },
    ]);
  };

  const handleDeleteEducation = (index: number) => {
    setEducationExperiences((prevExperiences) => prevExperiences.filter((_, i) => i !== index));
  };

  const handleDeleteWorkExperience = (index: number) => {
    setWorkExperiences((prevExperiences) => prevExperiences.filter((_, i) => i !== index));
  };

  const handleDeleteLanguage = (index: number) => {
    setLanguages((prevLanguages) => prevLanguages.filter((_, i) => i !== index));
  };

  const handleEducationChange = (index: number, updatedEducation: Education) => {
    const updatedExperiences = [...educationExperiences];
    updatedExperiences[index] = updatedEducation;
    setEducationExperiences(updatedExperiences);
  };

  const handleWorkExperienceChange = (index: number, updatedWorkExperience: WorkExperience) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index] = updatedWorkExperience;
    setWorkExperiences(updatedExperiences);
  };

  const handleLanguageChange = (index: number, updatedLanguage: Language) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index] = updatedLanguage;
    setLanguages(updatedLanguages);
  };

  return (
    <BoxCard
      title={t('user:requirements')}
      withEditButton
      nameCard={VacancyCardEnum.requirements}
      editCard={editCard}
      setEditCard={setEditCard}
      state={state}
      step={step}
      maxStep={6}
      variant={VariantCardEnum.editCard}
    >
      <CardContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
      >
        <input name='nameCard' type='hidden' value='requirements' />
        <BoxFields>
          {educationExperiences?.map((education, index) => {
            const key = uuidv4();
            return (
              <EducationForm
                key={key}
                index={index}
                education={education}
                dictionaries={dictionaries}
                onChange={handleEducationChange}
                onDelete={handleDeleteEducation}
                actionData={actionData}
              />
            );
          })}
          <Button onClick={handleAddEducationClick} priority='secondary' fullwidth>
            <Text variant={TextVariantEnum.textBody2}> {t('user:add_education')}</Text>
          </Button>
          {workExperiences?.map((workExperience, index) => {
            const key = uuidv4();
            return (
              <WorkExperienceForm
                key={key}
                index={index}
                workExperience={workExperience}
                dictionaries={dictionaries}
                onChange={handleWorkExperienceChange}
                onDelete={handleDeleteWorkExperience}
                actionData={actionData}
              />
            );
          })}
          <Button onClick={handleAddWorksClick} priority='secondary' fullwidth>
            <Text variant={TextVariantEnum.textBody2}>{t('user:add_work_experience')}</Text>
          </Button>
          {languages?.map((language, index) => {
            const key = uuidv4();
            return (
              <LanguageForm
                key={key}
                index={index}
                language={language}
                dictionaries={dictionaries}
                onChange={handleLanguageChange}
                onDelete={handleDeleteLanguage}
                actionData={actionData}
              />
            );
          })}
          <Button onClick={handleAddLangsClick} priority='secondary' fullwidth>
            <Text variant={TextVariantEnum.textBody2}>{t('user:add_language')}</Text>
          </Button>
        </BoxFields>
      </CardContainer>
    </BoxCard>
  );
}
