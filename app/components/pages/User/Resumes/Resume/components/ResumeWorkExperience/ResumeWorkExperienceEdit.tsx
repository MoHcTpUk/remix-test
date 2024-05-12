import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import type { MultiDateValue, MultiLingualValue, Resume, WorkExperience } from 'shared/v2/resumes';

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

interface ExtendedWorkExperience extends Omit<WorkExperience, 'from' | 'to'> {
  from?: string | MultiLingualValue | MultiDateValue | undefined;
  to?: string | MultiLingualValue | MultiDateValue | undefined;
  present?: boolean;
}

interface WorkExperienceFormFieldProps {
  workExperience: ExtendedWorkExperience;
  dictionaries?: IDictionaries;
  index: number;
  onChange: (index: number, updatedWorkExperience: ExtendedWorkExperience) => void;
  onDelete: (index: number) => void;
  actionData?: IUpdateResume;
}

function WorkExperienceForm({
  workExperience,
  dictionaries,
  index,
  onChange,
  onDelete,
  actionData,
}: WorkExperienceFormFieldProps) {
  const { t, theme, userContext } = useApp();

  const handleChange = (updatedWorkExperience: ExtendedWorkExperience) => {
    onChange(index, updatedWorkExperience);
  };

  const handleDelete = () => {
    onDelete(index);
  };

  const { entriesPositions, setSpecializationState, position, specializationState } =
    useGetPositionFromSpecialization(workExperience?.specialization_id, workExperience?.position);

  useEffect(() => {
    if (!workExperience.to === true) {
      handleChange({ ...workExperience, to: undefined });
    }
  }, [workExperience.present]);

  useEffect(() => {
    if (!workExperience.to && !workExperience.present) {
      handleChange({ ...workExperience, present: true });
    }
  }, [workExperience.to]);

  return (
    <Box
      width='100%'
      flexDirection='column'
      gap='24px'
      style={{ borderBottom: `1px solid ${theme.user.borderColor}`, paddingBottom: '24px' }}
    >
      <Select
        entries={extractTitles(dictionaries?.specializations, userContext.language)}
        placeholder={t('user:specialization')}
        id='specialization'
        name='specialization_id'
        setExternalState={setSpecializationState}
        values={specializationState}
        variant='search-single'
        onChange={(value) => handleChange({ ...workExperience, specialization_id: value })}
        errorText={actionData?.fieldErrors?.specialization_id?.[userContext.language]}
      />

      <Select
        placeholder={t('user:position')}
        id='position'
        name='position'
        externalState={[position || '']}
        values={[workExperience.position || '']}
        entries={entriesPositions}
        variant='single-text'
        onChange={(value) => handleChange({ ...workExperience, position: value })}
        errorText={
          (actionData?.fieldErrors?.position as FieldError | undefined)?.[`${index}`]?.[
            userContext.language
          ]
        }
        disabled={!specializationState[0]}
      />
      <Input
        placeholder={t('user:company')}
        id='company'
        name='company'
        value={workExperience.company}
        onChange={(value) => handleChange({ ...workExperience, company: value })}
        errorText={
          (actionData?.fieldErrors?.company as FieldError | undefined)?.[`${index}`]?.[
            userContext.language
          ]
        }
      />

      <DatePicker
        name='from'
        variant='year-month'
        defaultDate={
          typeof workExperience.from === 'string'
            ? workExperience.from
            : getValueLang(workExperience.from as MultiLingualValue, userContext.language)
        }
        placeholderYear={t('user:year')}
        placeholderMonth={t('user:month')}
        onChange={(value) => handleChange({ ...workExperience, from: value })}
        externalStartDateLimit={getValueLang(userContext.user.birthday, userContext.language)}
      />

      <CheckBox
        name='present_time'
        label={t('user:present_time')}
        checked={Boolean(workExperience?.present) || !workExperience.to}
        onChange={(value) => {
          handleChange({ ...workExperience, present: Boolean(value), to: undefined });
        }}
      />

      <Box width='100%' style={{ display: workExperience.present ? 'none' : 'flex' }}>
        <DatePicker
          name='to'
          variant='year-month'
          defaultDate={
            typeof workExperience.to === 'string'
              ? workExperience.to
              : getValueLang(workExperience.to as MultiLingualValue, userContext.language)
          }
          placeholderYear={t('user:year')}
          placeholderMonth={t('user:month')}
          onChange={(value) => handleChange({ ...workExperience, to: value })}
          externalStartDateLimit={
            typeof workExperience.from === 'string'
              ? workExperience.from
              : getValueLang(workExperience.from as MultiLingualValue, userContext.language)
          }
          disabled={!workExperience.from || workExperience.present}
        />
      </Box>

      <Input
        variant='textarea'
        placeholder={t('user:description')}
        id='description'
        name='description'
        value={workExperience.description}
        onChange={(value) => handleChange({ ...workExperience, description: value })}
        errorText={
          (actionData?.fieldErrors?.description as FieldError | undefined)?.[`${index}`]?.[
            userContext.language
          ]
        }
      />
      {workExperience.present && <input type='hidden' name='to' value='' />}

      {/* Delete button */}
      <Button onClick={handleDelete} priority='secondary' fullwidth>
        <Text variant={TextVariantEnum.textBody2}>{t('common:delete')}</Text>
      </Button>
    </Box>
  );
}

export default function ResumeWorkExperienceEdit({
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

  const works: ExtendedWorkExperience[] = [
    {
      specialization_id: '',
      position: '',
      company: '',
      from: '',
      to: '',
      description: '',
      present: false,
    },
  ];

  const [workExperiences, setWorkExperiences] = useState(resume?.work_experience || works);

  const handleAddWorksClick = () => {
    setWorkExperiences((prevExperiences) => [
      ...prevExperiences,
      {
        specialization_id: '',
        position: '',
        company: '',
        from: '',
        to: '',
        description: '',
        present: false,
      },
    ]);
  };

  const handleDeleteWorkExperience = (index: number) => {
    setWorkExperiences((prevExperiences) =>
      (prevExperiences as ExtendedWorkExperience[]).filter((_, i) => i !== index),
    );
  };

  const handleWorkExperienceChange = (
    index: number,
    updatedWorkExperience: ExtendedWorkExperience,
  ) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index] = updatedWorkExperience;
    setWorkExperiences(updatedExperiences);
  };

  return (
    <BoxCard
      title={t('user:work_experience')}
      withEditButton
      nameCard={ResumeCardEnum.workExperience}
      editCard={editCard}
      setEditCard={setEditCard}
      state={state}
      step={step}
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
        <input name='nameCard' type='hidden' value='work_experience' />
        <BoxUserEditData>
          <BoxFields>
            {workExperiences?.map((workExperience, index) => {
              const key = `workExperience-${index}`;
              return (
                <WorkExperienceForm
                  key={key}
                  index={index}
                  workExperience={workExperience as ExtendedWorkExperience}
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
          </BoxFields>
        </BoxUserEditData>
      </CardContainer>
    </BoxCard>
  );
}
