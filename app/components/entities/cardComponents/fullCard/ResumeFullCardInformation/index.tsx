import type { Resume } from 'shared/v2/resumes';

import { Box } from '~/components/common/Box';
import { CheckBox } from '~/components/common/Checkbox';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DataField } from '~/components/entities/DataFIeld';
import { BoxDataChips, BoxDataFieldsInner } from '~/components/ui/Card';
import { useApp, useScreenWidth } from '~/hooks';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { getValueFromDictionaries, getValueLang } from '~/utils/helpers.client';

export function ResumeFullCardInformation({
  resume,
  dictionaries,
}: {
  resume?: Resume;
  dictionaries?: IDictionaries;
}): JSX.Element {
  const { theme, t, userContext } = useApp();
  const widthScreen = useScreenWidth();

  return (
    <BoxDataFieldsInner>
      <Text variant={TextVariantEnum.textHeading2} className='title'>
        {t('user:information')}
      </Text>
      <Box gap='24px'>
        {resume?.location?.city_name && (
          <DataField
            label={t('user:district')}
            data={getValueLang(resume.location.city_name, userContext.language)}
          />
        )}
        <DataField label={t('user:phone')} data={resume?.general_information?.phone} />
      </Box>
      <DataField label={t('user:email')} data={resume?.general_information?.email} />

      {resume?.job_position?.employment_type_names?.[0] && (
        <DataField variant='custom' label={t('user:employment')}>
          <Box flexDirection='row' gap='4px' flexWrap='wrap'>
            {resume?.job_position?.employment_type_ids?.map((item) => (
              <BoxDataChips key={item}>
                <Text variant={TextVariantEnum.textBody2medium}>
                  {getValueFromDictionaries(dictionaries?.employment, item, userContext.language)}
                </Text>
              </BoxDataChips>
            ))}
          </Box>
        </DataField>
      )}

      {resume?.job_position?.work_feature_names?.[0] && (
        <DataField variant='custom' label={t('user:work_features')}>
          <Box flexDirection='row' gap='4px' flexWrap='wrap'>
            {resume?.job_position?.work_feature_ids?.map((item) => (
              <BoxDataChips key={item}>
                <Text variant={TextVariantEnum.textBody2medium}>
                  {getValueFromDictionaries(dictionaries?.workfeatures, item, userContext.language)}
                </Text>
              </BoxDataChips>
            ))}
          </Box>
        </DataField>
      )}
      {resume?.location?.business_trips === true && (
        <DataField variant='custom'>
          <Box flexDirection='column' gap='8px' padding='8px 0'>
            <CheckBox
              disabled
              name='fullTime'
              label={t('user:business_trips')}
              checked={resume?.location?.business_trips}
            />
          </Box>
        </DataField>
      )}
      <DataField
        label={t('user:salary_payout_period')}
        data={getValueLang(resume?.job_position?.salary_payout_period_name, userContext.language)}
      />
    </BoxDataFieldsInner>
  );
}
