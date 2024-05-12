import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import type { Resume } from 'shared/v2/resumes';

import { Box } from '~/components/common/Box';
import { BoxCard } from '~/components/common/Card';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DataField } from '~/components/entities/DataFIeld';
import { BoxDataChips, CardContainer } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import { ResumeCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { getValueLang } from '~/utils/helpers.client';

export default function ResumeAdditionalinformationData({
  editCard,
  setEditCard,
  resume,
  dictionaries,
}: {
  resume?: Resume | null;
  dictionaries?: IDictionaries;
  editCard: ResumeCardEnum;
  setEditCard: Dispatch<SetStateAction<string>>;
}) {
  const { t, userContext } = useApp();

  return (
    <BoxCard
      title={t('user:additional_information')}
      withEditButton
      nameCard={ResumeCardEnum.additionalInformation}
      editCard={editCard}
      setEditCard={setEditCard}
    >
      <CardContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
      >
        <DataField variant='custom' label={t('user:language')}>
          {resume?.additional_information?.languages?.[0].language_id && (
            <Box flexDirection='row' flexWrap='wrap' gap='4px'>
              {resume?.additional_information?.languages?.map((item) => (
                <BoxDataChips key={item.language_id}>
                  <Text variant={TextVariantEnum.textBody2medium}>
                    {`${getValueLang(item.language_name, userContext.language) || ''} (${
                      getValueLang(item.proficiency_level_name, userContext.language) || ''
                    })`}
                  </Text>
                </BoxDataChips>
              ))}
            </Box>
          )}
        </DataField>
        <DataField variant='custom' label={t('user:skills')}>
          <Box flexDirection='row' flexWrap='wrap' gap='4px'>
            {resume?.additional_information?.skill_names?.map((item) => (
              <BoxDataChips key={item.en}>
                <Text variant={TextVariantEnum.textBody2medium}>
                  {getValueLang(item, userContext.language)}
                </Text>
              </BoxDataChips>
            ))}
          </Box>
        </DataField>
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
        <DataField
          label={t('user:other_licenses')}
          data={resume?.additional_information?.other_license}
        />
        <DataField
          label={t('user:religion')}
          data={getValueLang(resume?.additional_information?.religion_name, userContext.language)}
        />
        <DataField
          label={t('user:marital_status')}
          data={getValueLang(
            resume?.additional_information?.marital_status_name,
            userContext.language,
          )}
        />
        <DataField
          label={t('user:citizenship')}
          data={getValueLang(
            resume?.additional_information?.citizenship_name,
            userContext.language,
          )}
        />{' '}
      </CardContainer>
    </BoxCard>
  );
}
