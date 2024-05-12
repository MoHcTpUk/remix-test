import type { Vacancy } from 'shared/v2/vacancies';

import { Box } from '~/components/common/Box';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DataField } from '~/components/entities/DataFIeld';
import { BoxDataChips, BoxDataFieldsInner } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import { getValueLang } from '~/utils/helpers';

export function VacancyFullCardInfo({ vacancy }: { vacancy?: Vacancy | null }): JSX.Element {
  const { userContext, t } = useApp();

  return (
    <BoxDataFieldsInner>
      <Text variant={TextVariantEnum.textHeading2} className='title'>
        {t('user:job_information')}
      </Text>
      <DataField
        label={t('user:specialization')}
        data={getValueLang(vacancy?.vacancy_page?.specialization_name, userContext.language)}
      />
      <DataField variant='custom' label={t('user:employment')}>
        <Box flexDirection='row' gap='4px' flexWrap='wrap'>
          {vacancy?.vacancy_page?.employment_type_names?.map((item) => (
            <BoxDataChips key={item.en}>
              <Text variant={TextVariantEnum.textBody2medium}>
                {getValueLang(item, userContext.language)}
              </Text>
            </BoxDataChips>
          ))}
        </Box>
      </DataField>
      <DataField variant='custom' label={t('user:work_features')}>
        <Box flexDirection='row' gap='4px' flexWrap='wrap'>
          {vacancy?.vacancy_page?.work_feature_names?.map((item) => (
            <BoxDataChips key={item.en}>
              <Text variant={TextVariantEnum.textBody2medium}>
                {getValueLang(item, userContext.language)}
              </Text>
            </BoxDataChips>
          ))}
        </Box>
      </DataField>

      {vacancy?.requirements?.education?.length &&
        vacancy?.requirements?.education?.[0].education_id && (
          <DataField variant='custom' label={t('user:education')}>
            <Box flexDirection='column' flexWrap='wrap' gap='8px'>
              {vacancy?.requirements?.education?.map((item) => (
                <DataField
                  key={item.specialization_id}
                  data={`${getValueLang(item.specialization_name, userContext.language) || ''}
                (${getValueLang(item.level_name, userContext.language) || ''} -
                ${getValueLang(item.education_name, userContext.language) || ''})`}
                />
              ))}
            </Box>
          </DataField>
        )}

      {vacancy?.requirements?.work_experience?.length &&
        vacancy?.requirements?.work_experience?.[0].work_experience_id && (
          <DataField variant='custom' label={t('user:work_experience')}>
            <Box flexDirection='column' flexWrap='wrap' gap='8px'>
              {vacancy?.requirements?.work_experience?.map((item) => (
                <DataField
                  key={item.specialization_id}
                  data={`${getValueLang(item.specialization_name, userContext.language) || ''}
                  (${getValueLang(item.work_experience_name, userContext.language) || ''})
                  ${getValueLang(item.period_of_work_name, userContext.language) || ''}`}
                />
              ))}
            </Box>
          </DataField>
        )}

      {vacancy?.requirements?.language?.length &&
        vacancy?.requirements?.language?.[0].language_id && (
          <DataField variant='custom' label={t('user:language')}>
            <Box flexDirection='column' flexWrap='wrap' gap='8px'>
              {vacancy?.requirements?.language?.map((item) => (
                <DataField
                  key={item.language_id}
                  data={`${getValueLang(item.language_name, userContext.language) || ''}
                (${getValueLang(item.level_name, userContext.language) || ''} -
                ${getValueLang(item.language_knowledge_name, userContext.language) || ''})`}
                />
              ))}
            </Box>
          </DataField>
        )}
    </BoxDataFieldsInner>
  );
}
