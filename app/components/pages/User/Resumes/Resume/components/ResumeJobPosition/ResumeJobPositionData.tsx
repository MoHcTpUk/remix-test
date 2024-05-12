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
import { getValueFromDictionaries, getValueLang } from '~/utils/helpers';

export default function ResumeJobPositionData({
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
      title={t('user:job_position')}
      withEditButton
      nameCard={ResumeCardEnum.jobPosition}
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
        <DataField
          label={t('user:specialization')}
          data={getValueLang(resume?.job_position?.specialization_name, userContext.language)}
        />
        <DataField label={t('user:position')} data={resume?.job_position?.position} />

        <DataField variant='custom' label={t('user:employment')}>
          <Box flexDirection='row' gap='4px' flexWrap='wrap'>
            {resume?.job_position?.employment_type_names?.map((item) => (
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
            {resume?.job_position?.work_feature_ids?.map((item) => (
              <BoxDataChips key={item}>
                <Text variant={TextVariantEnum.textBody2medium}>
                  {getValueFromDictionaries(dictionaries?.workfeatures, item, userContext.language)}
                </Text>
              </BoxDataChips>
            ))}
          </Box>
        </DataField>
        <DataField
          label={t('user:salary_payout_period')}
          data={getValueLang(resume?.job_position?.salary_payout_period_name, userContext.language)}
        />
        {resume?.job_position?.salary_fixed ? (
          <DataField
            label={t('user:salary_fixed')}
            data={resume?.job_position?.salary_fixed?.toFixed()}
          />
        ) : (
          <DataField
            label={t('user:salary')}
            data={`${t('user:from')} ${resume?.job_position?.salary_from || ''} - ${
              resume?.job_position?.salary_to || ''
            }`}
          />
        )}

        <DataField
          label={t('user:currency')}
          data={getValueLang(resume?.job_position?.currency_name, userContext.language)}
        />
        <DataField label={t('user:description')} data={resume?.job_position?.description} />
      </CardContainer>
    </BoxCard>
  );
}
