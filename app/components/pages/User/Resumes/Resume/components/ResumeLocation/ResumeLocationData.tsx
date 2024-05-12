import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import type { Resume } from 'shared/v2/resumes';

import { Box } from '~/components/common/Box';
import { BoxCard } from '~/components/common/Card';
import { CheckBox } from '~/components/common/Checkbox';
import { DataField } from '~/components/entities/DataFIeld';
import { CardContainer } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import { ResumeCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { getValueLang } from '~/utils/helpers.client';

export default function ResumeLocationData({
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
      title={t('user:location')}
      withEditButton
      nameCard={ResumeCardEnum.location}
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
          label={t('user:country')}
          data={getValueLang(resume?.location?.country_name, userContext.language)}
        />

        <DataField
          label={t('user:district')}
          data={getValueLang(resume?.location?.city_name, userContext.language)}
        />
        <DataField label={t('user:address')} data={resume?.location?.address} />
        <DataField
          label={t('user:source')}
          data={getValueLang(resume?.location?.source_name, userContext.language)}
        />
        <DataField
          label={t('user:relocation')}
          data={getValueLang(resume?.location?.relocation_name, userContext.language)}
        />
        <Box padding='8px 0 0'>
          <CheckBox
            disabled
            name='business_trips'
            label={t('user:business_trips')}
            checked={resume?.location?.business_trips}
            onChange={() => null}
          />
        </Box>
      </CardContainer>
    </BoxCard>
  );
}
