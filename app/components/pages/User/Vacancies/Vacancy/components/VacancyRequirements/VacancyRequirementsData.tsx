import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import type { Vacancy } from 'shared/v2/vacancies';

import { Box } from '~/components/common/Box';
import { BoxCard } from '~/components/common/Card';
import { DataField } from '~/components/entities/DataFIeld';
import { CardContainer } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import { VacancyCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { getValueFromDictionaries, getValueLang } from '~/utils/helpers';

export default function VacancyRequirementsData({
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
      title={t('user:requirements')}
      withEditButton
      nameCard={VacancyCardEnum.requirements}
      editCard={editCard}
      setEditCard={setEditCard}
    >
      {vacancy?.requirements?.education && (
        <CardContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
        >
          <Box flexDirection='column' gap='24px'>
            {vacancy?.requirements?.education?.map((item) => (
              <Box flexDirection='column' gap='10px' key={item.specialization_id}>
                <DataField
                  label={t('user:education')}
                  data={getValueLang(item.education_name, userContext.language)}
                />
                <DataField
                  label={t('user:specialization')}
                  data={getValueLang(item.specialization_name, userContext.language)}
                />
                <DataField
                  label={t('user:level')}
                  data={getValueLang(item.level_name, userContext.language)}
                />
              </Box>
            ))}
          </Box>

          <Box flexDirection='column' gap='24px'>
            {vacancy?.requirements?.work_experience?.map((item) => (
              <Box flexDirection='column' gap='10px' key={item.specialization_id}>
                <DataField
                  label={t('user:work_experience')}
                  data={getValueLang(item.work_experience_name, userContext.language)}
                />
                <DataField
                  label={t('user:period_of_work')}
                  data={getValueLang(item.period_of_work_name, userContext.language)}
                />
                <DataField
                  label={t('user:specialization')}
                  data={getValueLang(item.specialization_name, userContext.language)}
                />
              </Box>
            ))}
          </Box>

          <Box flexDirection='column' gap='24px'>
            {vacancy?.requirements?.language?.map((item) => (
              <Box flexDirection='column' gap='10px' key={item.language_knowledge_id}>
                <DataField
                  label={t('user:language_knowledge')}
                  data={getValueLang(item.language_knowledge_name, userContext.language)}
                />
                <DataField
                  label={t('user:language')}
                  data={getValueLang(item.language_name, userContext.language)}
                />

                <DataField
                  label={t('user:level')}
                  data={getValueLang(item.level_name, userContext.language)}
                />
              </Box>
            ))}
          </Box>
        </CardContainer>
      )}
    </BoxCard>
  );
}
