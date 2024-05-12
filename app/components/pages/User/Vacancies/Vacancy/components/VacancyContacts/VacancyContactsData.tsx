import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import type { Company } from 'shared/v2/companies';
import type { Vacancy } from 'shared/v2/vacancies';

import { BoxCard } from '~/components/common/Card';
import { DataField } from '~/components/entities/DataFIeld';
import { CardContainer } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import type { ResumeCardEnum } from '~/types/enums/stateCardEnum';
import { VacancyCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { findCompanyById, getValueFromDictionaries } from '~/utils/helpers';

export default function VacancyContactsData({
  editCard,
  setEditCard,
  vacancy,
  dictionaries,
  companies,
}: {
  vacancy?: Vacancy | null;
  dictionaries?: IDictionaries;
  editCard: ResumeCardEnum;
  setEditCard: Dispatch<SetStateAction<string>>;
  companies?: Company[];
}) {
  const { t, userContext } = useApp();

  return (
    <BoxCard
      title={t('user:vacancy_contacts')}
      withEditButton
      nameCard={VacancyCardEnum.employer}
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
          label={t('user:company_name')}
          data={findCompanyById(vacancy?.contacts?.company_id, companies)?.name}
        />
        <DataField label={t('user:contact_phone')} data={vacancy?.contacts?.contact_phone} />
        <DataField label={t('user:first_name')} data={vacancy?.contacts?.first_name} />
        <DataField label={t('user:last_name')} data={vacancy?.contacts?.last_name} />
        <DataField
          label={t('user:how_did_you_know_about_us')}
          data={getValueFromDictionaries(
            dictionaries?.sources,
            vacancy?.contacts?.source_of_discovery_id,
            userContext.language,
          )}
        />
      </CardContainer>
    </BoxCard>
  );
}
