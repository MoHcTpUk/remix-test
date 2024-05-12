import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import type { MultiLingualValue } from 'shared/client/dictionary-contracts';
import type { Education, MultiDateValue, Resume } from 'shared/v2/resumes';

import { Box } from '~/components/common/Box';
import Button from '~/components/common/Button';
import { BoxCard } from '~/components/common/Card';
import { CheckBox } from '~/components/common/Checkbox';
import { Input } from '~/components/common/Input';
import { Select } from '~/components/common/Select';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DatePicker } from '~/components/entities/DatePicker';
import { BoxUserEditData } from '~/components/pages/User/MyProfile/components/Info/styles';
import { BoxFields, CardContainer } from '~/components/ui/Card';
import { useApp, useGetPositionFromSpecialization } from '~/hooks';
import type { StateCard } from '~/types/enums/stateCardEnum';
import { ResumeCardEnum } from '~/types/enums/stateCardEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { FieldError, IUpdateResume } from '~/types/interfaces/iForms';
import { extractTitles, getValueLang } from '~/utils/helpers.client';

interface ExtendedEducation extends Omit<Education, 'from' | 'to'> {
  start_year?: string | MultiLingualValue | MultiDateValue | undefined;
  end_year?: string | MultiLingualValue | MultiDateValue | undefined;
  present?: boolean;
}

interface EducationFormFieldProps {
  educationExperience: ExtendedEducation;
  dictionaries?: IDictionaries;
  index: number;
  onChange: (index: number, updatedEducation: ExtendedEducation) => void;
  onDelete: (index: number) => void;
  actionData?: IUpdateResume;
}

function EducationForm({
  educationExperience,
  dictionaries,
  index,
  onChange,
  onDelete,
  actionData,
}: EducationFormFieldProps) {
  const { t, theme, userContext } = useApp();

  const handleChange = (updatedEducation: ExtendedEducation) => {
    onChange(index, updatedEducation);
  };

  const handleDelete = () => {
    onDelete(index);
  };

  const { entriesPositions, setSpecializationState, position, specializationState } =
    useGetPositionFromSpecialization(
      educationExperience?.specialization_id,
      educationExperience?.position,
    );

  useEffect(() => {
    if (!educationExperience.end_year === true) {
      handleChange({ ...educationExperience, end_year: undefined });
    }
  }, [educationExperience.present]);

  useEffect(() => {
    if (!educationExperience?.end_year) {
      handleChange({ ...educationExperience, present: true });
    }
  }, [educationExperience?.end_year]);

  return (
    <Box
      width='100%'
      flexDirection='column'
      gap='24px'
      style={{
        borderBottom: `1px solid ${theme.user.borderColor}`,
        paddingBottom: '24px',
      }}
    >
      <Select
        entries={extractTitles(dictionaries?.educationLevel, userContext.language)}
        placeholder={t('user:education_level')}
        id='education_level_id'
        name='education_level_id'
        values={[educationExperience.education_level_id || '']}
        onChange={(value) => handleChange({ ...educationExperience, education_level_id: value })}
        errorText={actionData?.fieldErrors?.education_level_id?.[userContext.language]}
      />
      <Input
        placeholder={t('user:institution')}
        id='institution'
        name='institution'
        value={educationExperience.institution}
        onChange={(value) => handleChange({ ...educationExperience, institution: value })}
        errorText={
          (actionData?.fieldErrors?.institution as FieldError | undefined)?.[`${index}`]?.[
            userContext.language
          ]
        }
      />

      <Select
        entries={extractTitles(dictionaries?.specializations, userContext.language)}
        placeholder={t('user:specialization')}
        id='specialization'
        name='specialization_id'
        setExternalState={setSpecializationState}
        values={specializationState}
        variant='search-single'
        onChange={(value) => handleChange({ ...educationExperience, specialization_id: value })}
        errorText={actionData?.fieldErrors?.specialization_id?.[userContext.language]}
      />

      <Select
        placeholder={t('user:position')}
        id='position'
        name='position'
        externalState={[position || '']}
        values={[educationExperience.position || '']}
        entries={entriesPositions}
        variant='single-text'
        onChange={(value) => handleChange({ ...educationExperience, position: value })}
        errorText={
          (actionData?.fieldErrors?.position as FieldError | undefined)?.[`${index}`]?.[
            userContext.language
          ]
        }
        disabled={!specializationState[0]}
      />

      <DatePicker
        name='date'
        nameYear='start_year'
        variant='year'
        defaultYear={
          typeof educationExperience.start_year === 'string'
            ? educationExperience.start_year
            : getValueLang(educationExperience.start_year, userContext.language)
        }
        placeholderYear={t('user:start_year')}
        onChange={(value) => handleChange({ ...educationExperience, start_year: value })}
        externalStartDateLimit={getValueLang(userContext.user.birthday, userContext.language)}
      />

      <CheckBox
        name='present_time'
        label={t('user:present_time')}
        checked={Boolean(educationExperience?.present) || !educationExperience.end_year}
        onChange={(value) => {
          handleChange({
            ...educationExperience,
            present: Boolean(value),
            end_year: undefined,
          });
        }}
      />

      <Box width='100%' style={{ display: educationExperience.present ? 'none' : 'flex' }}>
        <DatePicker
          name='date'
          nameYear='end_year'
          variant='year'
          defaultYear={
            typeof educationExperience.end_year === 'string'
              ? educationExperience.end_year
              : getValueLang(educationExperience.end_year, userContext.language)
          }
          placeholderYear={t('user:end_year')}
          onChange={(value) => {
            handleChange({ ...educationExperience, end_year: value });
          }}
          externalStartDateLimit={
            typeof educationExperience.start_year === 'string'
              ? educationExperience.start_year
              : getValueLang(educationExperience.start_year, userContext.language)
          }
          disabled={!educationExperience.start_year || educationExperience.present}
        />
      </Box>
      {educationExperience.present && <input type='hidden' name='end_year' value='' />}

      {/* Delete button */}
      <Button onClick={handleDelete} priority='secondary' fullwidth>
        <Text variant={TextVariantEnum.textBody2}>{t('common:delete')}</Text>
      </Button>
    </Box>
  );
}

export default function ResumeEducationEdit({
  editCard,
  setEditCard,
  state,
  step,
  resume,
  dictionaries,
  actionData,
}: {
  resume?: Resume | null;
  dictionaries?: IDictionaries;
  editCard?: ResumeCardEnum;
  setEditCard?: Dispatch<SetStateAction<string>>;
  state?: StateCard;
  step?: number;
  actionData?: IUpdateResume;
}) {
  const { t, theme } = useApp();

  const educations: ExtendedEducation[] = [
    {
      education_level_id: '',
      institution: '',
      specialization_id: '',
      position: '',
      start_year: '',
      end_year: '',
      present: false,
    },
  ];

  const [educationExperiences, setEducationExperiences] = useState(resume?.education || educations);

  const handleAddEducationClick = () => {
    setEducationExperiences((prevExperiences) => [
      ...prevExperiences,
      {
        education_level_id: '',
        institution: '',
        specialization_id: '',
        position: '',
        start_year: '',
        end_year: '',
        present: false,
      },
    ]);
  };

  const handleDeleteEducation = (index: number) => {
    setEducationExperiences((prevExperiences) =>
      (prevExperiences as ExtendedEducation[]).filter((_, i) => i !== index),
    );
  };

  const handleEducationChange = (index: number, updatedEducation: ExtendedEducation) => {
    const updatedExperiences = [...educationExperiences];
    updatedExperiences[index] = updatedEducation;
    setEducationExperiences(updatedExperiences);
  };

  return (
    <BoxCard
      title={t('user:education')}
      withEditButton
      nameCard={ResumeCardEnum.education}
      editCard={editCard}
      setEditCard={setEditCard}
      step={step}
      state={state}
      maxStep={7}
      variant={VariantCardEnum.editCard}
    >
      <CardContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
      >
        <input name='nameCard' type='hidden' value='education' />
        <BoxUserEditData>
          <BoxFields>
            {educationExperiences?.map((education, index) => {
              const key = `education-${index}`;
              return (
                <EducationForm
                  key={key}
                  index={index}
                  educationExperience={education as ExtendedEducation}
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
          </BoxFields>
        </BoxUserEditData>
      </CardContainer>
    </BoxCard>
  );
}
