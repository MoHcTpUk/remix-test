import type { Resume } from 'shared/v2/resumes';

import { Box } from '~/components/common/Box';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DataField } from '~/components/entities/DataFIeld';
import { BoxDataFieldsInner } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { getValueLang } from '~/utils/helpers.client';

export function ResumeFullCardEducation({
  resume,
}: {
  resume?: Resume;
  dictionaries?: IDictionaries;
}): JSX.Element {
  const { t, userContext } = useApp();

  return (
    <BoxDataFieldsInner>
      <Text variant={TextVariantEnum.textHeading2} className='title'>
        {t('user:education')}
      </Text>
      {resume?.education?.map((item) => (
        <Box flexDirection='column' gap='10px' key={item.specialization_id}>
          <Box gap='24px'>
            <DataField
              label={t('user:education_level')}
              data={getValueLang(item.education_level_name, userContext.language)}
            />
            <DataField label={t('user:institution')} data={item.institution} />
          </Box>
          <DataField
            label={t('user:specialization')}
            data={getValueLang(item.specialization_name, userContext.language)}
          />
          {getValueLang(item.start_year, userContext.language) && (
            <DataField
              data={`${
                getValueLang(item.start_year, userContext.language)
                  ?.split('-')
                  .slice(0, 2)
                  .join('-') || ''
              } - ${
                !getValueLang(item.end_year, userContext.language)
                  ? t('user:present_time')
                  : getValueLang(item.end_year, userContext.language)
                      ?.split('-')
                      .slice(0, 2)
                      .join('-') || ''
              }`}
            />
          )}
        </Box>
      ))}
    </BoxDataFieldsInner>
  );
}
