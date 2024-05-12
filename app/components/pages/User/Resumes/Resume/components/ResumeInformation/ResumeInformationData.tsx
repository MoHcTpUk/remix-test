import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import type { EntityResume } from 'shared/client/data-contracts';
import type { Resume } from 'shared/v2/resumes';

import { BoxCard } from '~/components/common/Card';
import { DataField } from '~/components/entities/DataFIeld';
import { CardContainer } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import { ResumeCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { extractTitles, getValueFromDictionaries, getValueLang } from '~/utils/helpers.client';

export default function ResumeInformationData({
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
      title={t('user:personal_information')}
      withEditButton
      nameCard={ResumeCardEnum.information}
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
        <DataField label={t('user:first_name')} data={resume?.general_information?.first_name} />
        <DataField label={t('user:last_name')} data={resume?.general_information?.last_name} />
        <DataField
          label={t('user:gender')}
          data={getValueLang(resume?.general_information?.gender_name, userContext.language)}
        />
        <DataField
          label={t('user:date_of_birth')}
          data={getValueLang(resume?.general_information?.birthdate, userContext.language)}
        />
        <DataField label={t('user:email')} data={resume?.general_information?.email} />
        <DataField label={t('user:phone')} data={resume?.general_information?.phone} />
        <DataField
          label={t('user:language_of_notify')}
          data={getValueLang(
            resume?.general_information?.language_of_notify_name,
            userContext.language,
          )}
        />
      </CardContainer>
    </BoxCard>
  );
}
