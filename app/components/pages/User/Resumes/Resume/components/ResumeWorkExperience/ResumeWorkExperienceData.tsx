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
import { getValueLang } from '~/utils/helpers';

export default function ResumeWorkExperienceData({
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
      title={t('user:work_experience')}
      withEditButton
      nameCard={ResumeCardEnum.workExperience}
      editCard={editCard}
      setEditCard={setEditCard}
    >
      {resume?.work_experience && (
        <CardContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
        >
          {resume?.work_experience?.map((item) => (
            <Box flexDirection='column' gap='10px' key={item.specialization_id}>
              <DataField
                label={t('user:specialization')}
                data={getValueLang(item.specialization_name, userContext.language)}
              />
              <DataField label={t('user:position')} data={item.position} />
              <DataField label={t('user:company')} data={item.company} />
              <DataField label={t('user:description')} data={item.description} />
              {getValueLang(item.from, userContext.language) && (
                <DataField
                  data={`${
                    getValueLang(item.from, userContext.language)
                      ?.split('-')
                      .slice(0, 2)
                      .join('-') || ''
                  } - ${
                    !getValueLang(item.to, userContext.language)
                      ? t('user:present_time')
                      : getValueLang(item.to, userContext.language)
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
