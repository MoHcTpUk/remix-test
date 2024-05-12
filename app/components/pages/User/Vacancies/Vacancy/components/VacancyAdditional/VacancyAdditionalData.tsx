import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import type { Vacancy } from 'shared/v2/vacancies';
import { validate as uuidValidate } from 'uuid';

import { Box } from '~/components/common/Box';
import { BoxCard } from '~/components/common/Card';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DataField } from '~/components/entities/DataFIeld';
import { BoxDataChips, CardContainer } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import { VacancyCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { getValueFromDictionaries } from '~/utils/helpers.client';

export default function VacancyAdditionalData({
  editCard,
  setEditCard,
  vacancy,
  dictionaries,
}: {
  vacancy?: Vacancy | null;
  dictionaries?: IDictionaries;
  editCard: VacancyCardEnum;
  setEditCard: Dispatch<SetStateAction<string>>;
}) {
  const { t, userContext } = useApp();

  return (
    <BoxCard
      title={t('user:additional_information')}
      withEditButton
      nameCard={VacancyCardEnum.additional}
      editCard={editCard}
      setEditCard={setEditCard}
    >
      {vacancy?.additional_skills && (
        <CardContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
        >
          <DataField variant='custom' label={t('user:skills')}>
            <Box flexDirection='row' flexWrap='wrap' gap='4px'>
              {vacancy?.additional_skills?.skill_ids?.map((item) => (
                <BoxDataChips key={item}>
                  <Text variant={TextVariantEnum.textBody2medium}>
                    {uuidValidate(item || '')
                      ? getValueFromDictionaries(dictionaries?.skills, item, userContext.language)
                      : item}
                  </Text>
                </BoxDataChips>
              ))}
            </Box>
          </DataField>
          <DataField variant='custom' label={t('user:driver_license')}>
            <Box flexDirection='row' flexWrap='wrap' gap='4px'>
              {vacancy?.additional_skills?.driver_license_ids?.map((item) => (
                <BoxDataChips key={item}>
                  <Text variant={TextVariantEnum.textBody2medium}>
                    {getValueFromDictionaries(
                      dictionaries?.drivingLicenses,
                      item,
                      userContext.language,
                    )}
                  </Text>
                </BoxDataChips>
              ))}
            </Box>
          </DataField>
          <DataField variant='custom' label={t('user:other_licenses')}>
            <Box flexDirection='row' flexWrap='wrap' gap='4px'>
              {Array.isArray(vacancy?.additional_skills?.other_licenses)
                ? vacancy?.additional_skills?.other_licenses?.map((item) => (
                    <BoxDataChips key={item}>
                      <Text variant={TextVariantEnum.textBody2medium}>{item}</Text>
                    </BoxDataChips>
                  ))
                : vacancy?.additional_skills?.other_licenses && (
                    <BoxDataChips>
                      <Text variant={TextVariantEnum.textBody2medium}>
                        {vacancy?.additional_skills?.other_licenses}
                      </Text>
                    </BoxDataChips>
                  )}
            </Box>
          </DataField>
        </CardContainer>
      )}
    </BoxCard>
  );
}
