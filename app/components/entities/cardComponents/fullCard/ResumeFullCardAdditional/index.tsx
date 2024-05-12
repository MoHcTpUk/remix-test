import type { Resume } from 'shared/v2/resumes';

import { Box } from '~/components/common/Box';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DataField } from '~/components/entities/DataFIeld';
import { BoxDataChips, BoxDataFieldsInner } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import { getValueLang } from '~/utils/helpers.client';

export function ResumeFullCardAdditional({ resume }: { resume?: Resume }): JSX.Element {
  const { t, userContext } = useApp();

  return (
    <BoxDataFieldsInner>
      <Text variant={TextVariantEnum.textHeading2} className='title'>
        {t('user:additionals')}
      </Text>
      <Box gap='24px'>
        {resume?.additional_information?.citizenship_name && (
          <DataField
            label={t('user:citizenship')}
            data={getValueLang(
              resume?.additional_information?.citizenship_name,
              userContext.language,
            )}
          />
        )}
        {resume?.location?.relocation_name && (
          <DataField
            label={t('user:relocation')}
            data={getValueLang(resume?.location?.relocation_name, userContext.language)}
          />
        )}
      </Box>
      <Box gap='24px'>
        {resume?.additional_information?.religion_name && (
          <DataField
            label={t('user:religion')}
            data={getValueLang(resume?.additional_information?.religion_name, userContext.language)}
          />
        )}
        {resume?.additional_information?.marital_status_name && (
          <DataField
            label={t('user:marital_status')}
            data={getValueLang(
              resume?.additional_information?.marital_status_name,
              userContext.language,
            )}
          />
        )}
      </Box>
      <Box gap='24px' />
      {resume?.additional_information?.driver_license_names?.length && (
        <DataField variant='custom' label={t('user:driver_license')}>
          <Box flexDirection='row' flexWrap='wrap' gap='4px'>
            {resume?.additional_information?.driver_license_names?.map((item) => (
              <BoxDataChips key={item.en}>
                <Text variant={TextVariantEnum.textBody2medium}>
                  {getValueLang(item, userContext.language)}
                </Text>
              </BoxDataChips>
            ))}
          </Box>
        </DataField>
      )}

      {resume?.additional_information?.other_license &&
        resume?.additional_information?.other_license?.[0] && (
          <DataField variant='custom' label={t('user:other_licenses')}>
            <Box flexDirection='row' flexWrap='wrap' gap='4px'>
              {Array.isArray(resume?.additional_information?.other_license) ? (
                resume?.additional_information?.other_license?.map((item) => (
                  <BoxDataChips key={item}>
                    <Text variant={TextVariantEnum.textBody2medium}>{item}</Text>
                  </BoxDataChips>
                ))
              ) : (
                <BoxDataChips>
                  <Text variant={TextVariantEnum.textBody2medium}>
                    {resume?.additional_information?.other_license}
                  </Text>
                </BoxDataChips>
              )}
            </Box>
          </DataField>
        )}
    </BoxDataFieldsInner>
  );
}
