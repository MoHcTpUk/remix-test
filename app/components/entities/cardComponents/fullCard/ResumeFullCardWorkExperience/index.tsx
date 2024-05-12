import type { Resume } from 'shared/v2/resumes';

import { Box } from '~/components/common/Box';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DataField } from '~/components/entities/DataFIeld';
import { BoxDataFieldsInner } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { getValueLang } from '~/utils/helpers.client';

export function ResumeFullCardWorkExperience({
  resume,
  dictionaries,
}: {
  resume?: Resume;
  dictionaries?: IDictionaries;
}): JSX.Element {
  const { t, userContext } = useApp();

  return (
    <BoxDataFieldsInner>
      <Text variant={TextVariantEnum.textHeading2} className='title'>
        {t('user:work_experience')}
      </Text>
      {resume?.work_experience?.map((item) => (
        <Box flexDirection='column' gap='10px' key={item.specialization_id}>
          <Box gap='24px'>
            <DataField
              label={t('user:specialization')}
              data={getValueLang(item.specialization_name, userContext.language)}
            />
            <DataField label={t('user:position')} data={item.position} />
          </Box>
          <DataField label={t('user:company')} data={item.company} />
          {getValueLang(item.from, userContext.language) && (
            <DataField
              data={`${
                getValueLang(item.from, userContext.language)?.split('-').slice(0, 2).join('-') ||
                ''
              } - ${
                !getValueLang(item.to, userContext.language)
                  ? t('user:present_time')
                  : getValueLang(item.to, userContext.language)?.split('-').slice(0, 2).join('-') ||
                    ''
              }`}
            />
          )}
          {item.description && <DataField label={t('user:description')} data={item.description} />}
        </Box>
      ))}
    </BoxDataFieldsInner>
  );
}
