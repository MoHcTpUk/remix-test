import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import type { Resume } from 'shared/v2/resumes';

import { Box } from '~/components/common/Box';
import { BoxCard } from '~/components/common/Card';
import { DataField } from '~/components/entities/DataFIeld';
import { CardContainer } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import { ResumeCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { getValueLang } from '~/utils/helpers.client';

export default function ResumeEducationData({
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
      title={t('user:education')}
      withEditButton
      nameCard={ResumeCardEnum.education}
      editCard={editCard}
      setEditCard={setEditCard}
    >
      {resume?.education && (
        <CardContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
        >
          {resume?.education?.map((item) => (
            <Box flexDirection='column' gap='10px' key={item.specialization_id}>
              <DataField
                label={t('user:education_level')}
                data={getValueLang(item.education_level_name, userContext.language)}
              />
              <DataField label={t('user:institution')} data={item.institution} />
              <DataField
                label={t('user:specialization')}
                data={getValueLang(item.specialization_name, userContext.language)}
              />
              <DataField label={t('user:position')} data={item.position} />
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
        </CardContainer>
      )}
    </BoxCard>
  );
}
