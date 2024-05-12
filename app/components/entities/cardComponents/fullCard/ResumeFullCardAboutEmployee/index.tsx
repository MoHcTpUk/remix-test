import type { Resume } from 'shared/v2/resumes';

import { Box } from '~/components/common/Box';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DataField } from '~/components/entities/DataFIeld';
import { BoxDataFieldsInner } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { calculateAge, getValueLang } from '~/utils/helpers.client';

export function ResumeFullCardAboutEmployee({
  resume,
}: {
  resume?: Resume;
  dictionaries?: IDictionaries;
}): JSX.Element {
  const { t, userContext } = useApp();

  return (
    <BoxDataFieldsInner>
      <Text variant={TextVariantEnum.textHeading2} className='title'>
        {t('user:about_employee')}
      </Text>
      {resume?.job_position?.description && <DataField data={resume?.job_position?.description} />}
      <Box gap='24px'>
        <DataField
          label={t('user:gender')}
          data={getValueLang(resume?.general_information?.gender_name, userContext.language)}
        />
        <DataField
          label={t('user:age')}
          data={calculateAge(resume?.general_information?.birthdate?.en).toString()}
        />
      </Box>

      {resume?.additional_information?.languages?.length &&
        resume?.additional_information?.languages?.[0].language_id && (
          <DataField variant='custom' label={t('user:language_knowledge')}>
            <Box flexDirection='column' flexWrap='wrap' gap='8px'>
              {resume?.additional_information?.languages?.map((item) => (
                <DataField
                  key={item.language_id}
                  data={`${getValueLang(item.language_name, userContext.language) || ''} (${
                    getValueLang(item.proficiency_level_name, userContext.language) || ''
                  })`}
                />
              ))}
            </Box>
          </DataField>
        )}
    </BoxDataFieldsInner>
  );
}
