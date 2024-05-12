import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import type { Language, Resume } from 'shared/v2/resumes';
import { v4 as uuidv4 } from 'uuid';

import { Box } from '~/components/common/Box';
import Button from '~/components/common/Button';
import { BoxCard } from '~/components/common/Card';
import { Input } from '~/components/common/Input';
import { Select } from '~/components/common/Select';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { BoxUserEditData } from '~/components/pages/User/MyProfile/components/Info/styles';
import { BoxFields, CardContainer } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import type { StateCard } from '~/types/enums/stateCardEnum';
import { ResumeCardEnum } from '~/types/enums/stateCardEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { FieldErrors } from '~/types/interfaces/IError';
import type { IUpdateResume } from '~/types/interfaces/iForms';
import { extractTitles } from '~/utils/helpers.client';

interface LanguagesFieldProps {
  language: Language;
  dictionaries?: IDictionaries;
  index: number;
  onChange: (index: number, updatedLanguage: Language) => void;
  onDelete: (index: number) => void;
}

function LanguageForm({ language, dictionaries, index, onChange, onDelete }: LanguagesFieldProps) {
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
    >
      <Select
        entries={extractTitles(dictionaries?.languages, userContext.language)}
        placeholder={t('user:language')}
        id='language_id'
        name='language_id'
        values={[language?.language_id || '']}
        onChange={(value) => handleChange({ ...language, language_id: value })}
      />
      <Select
        entries={extractTitles(dictionaries?.languageLevel, userContext.language)}
        placeholder={t('user:proficiency_level')}
        id='proficiency_level_id'
        name='proficiency_level_id'
        variant='search-single'
        values={[language?.proficiency_level_id || '']}
        onChange={(value) => handleChange({ ...language, proficiency_level_id: value })}
      />

      <Button onClick={handleDelete} priority='secondary' fullwidth>
        <Text variant={TextVariantEnum.textBody2}>{t('common:delete')}</Text>
      </Button>
    </Box>
  );
}

export default function ResumeAdditionalinformationEdit({
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
  const { t, userContext } = useApp();

  const langs: Language[] = [
    {
      language_id: '',
      proficiency_level_id: '',
    },
  ];

  const [languages, setLanguages] = useState(resume?.additional_information?.languages || langs);

  const handleAddLangsClick = () => {
    setLanguages((prevLanguages) => [
      ...prevLanguages,
      {
        language_id: '',
        proficiency_level_id: '',
      },
    ]);
  };

  const handleDeleteLanguage = (index: number) => {
    setLanguages((prevLanguages) => prevLanguages.filter((_, i) => i !== index));
  };

  const handleLanguageChange = (index: number, updatedLanguage: Language) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index] = updatedLanguage;
    setLanguages(updatedLanguages);
  };

  const staticFields = () => (
    <>
      <Select
        entries={extractTitles(dictionaries?.skills, userContext.language)}
        placeholder={t('user:skills')}
        id='skill_ids'
        name='skill_ids'
        variant='search-multi'
        values={resume?.additional_information?.skill_ids}
        errorText={actionData?.fieldErrors?.skill_ids?.[userContext.language]}
      />

      <Select
        entries={extractTitles(dictionaries?.drivingLicenses, userContext.language)}
        placeholder={t('user:driver_license')}
        id='driver_license'
        name='driver_license_ids'
        variant='search-multi'
        values={resume?.additional_information?.driver_license_ids}
        errorText={actionData?.fieldErrors?.driver_license_ids?.[userContext.language]}
      />

      <Input
        placeholder={t('user:other_licenses')}
        value={resume?.additional_information?.other_license}
        id='other_licenses'
        name='other_license'
        errorText={actionData?.fieldErrors?.other_license?.[userContext.language]}
      />

      <Select
        entries={extractTitles(dictionaries?.religions, userContext.language)}
        placeholder={t('user:religion')}
        id='religion'
        name='religion_id'
        values={[resume?.additional_information?.religion_id || '']}
        errorText={actionData?.fieldErrors?.religion_id?.[userContext.language]}
      />

      <Select
        entries={extractTitles(dictionaries?.maritalStatuses, userContext.language)}
        placeholder={t('user:marital_status')}
        id='marital_status'
        name='marital_status_id'
        values={[resume?.additional_information?.marital_status_id || '']}
        errorText={actionData?.fieldErrors?.marital_status_id?.[userContext.language]}
      />

      <Select
        entries={extractTitles(dictionaries?.citizenship, userContext.language)}
        placeholder={t('user:citizenship')}
        id='citizenship'
        name='citizenship_id'
        values={[resume?.additional_information?.citizenship_id || '']}
        errorText={actionData?.fieldErrors?.citizenship_id?.[userContext.language]}
      />
    </>
  );

  return (
    <BoxCard
      title={t('user:additional_information')}
      withEditButton
      nameCard={ResumeCardEnum.additionalInformation}
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
        <BoxUserEditData>
          <input name='nameCard' type='hidden' value='additional_information' />

          <BoxFields>
            {languages?.map((language, index) => {
              const key = `education-${index}`;
              return (
                <LanguageForm
                  key={key}
                  index={index}
                  language={language}
                  dictionaries={dictionaries}
                  onChange={handleLanguageChange}
                  onDelete={handleDeleteLanguage}
                />
              );
            })}
            <Button onClick={handleAddLangsClick} priority='secondary' fullwidth>
              <Text variant={TextVariantEnum.textBody2}>{t('user:add_language')}</Text>
            </Button>
            {staticFields()}
          </BoxFields>
        </BoxUserEditData>
      </CardContainer>
    </BoxCard>
  );
}
