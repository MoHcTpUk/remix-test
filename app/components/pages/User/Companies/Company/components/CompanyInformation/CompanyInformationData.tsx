import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import type { Company } from 'shared/v2/companies';

import { BoxCard } from '~/components/common/Card';
import { Text } from '~/components/common/Text';
import { DataField } from '~/components/entities/DataFIeld';
import { CardContainer } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import { CompanyCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { getValueLang } from '~/utils/helpers.client';

import { BoxWebsite } from './styles';

export default function CompanyInformationData({
  editCard,
  setEditCard,
  company,
  dictionaries,
}: {
  editCard: CompanyCardEnum;
  setEditCard: Dispatch<SetStateAction<string>>;
  company?: Company | null;
  dictionaries?: IDictionaries;
}) {
  const { t, theme, userContext } = useApp();

  return (
    <BoxCard
      title={t('user:general_information')}
      withEditButton
      nameCard={CompanyCardEnum.information}
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
        <DataField label={t('user:company_name')} data={company?.name} />
        {/* TODO: add spec to companies */}
        <DataField
          label={t('user:specialization')}
          data={getValueLang(company?.specialization_name, userContext.language)}
        />
        <DataField label={t('user:phone')} data={company?.phone} />
        <DataField
          label={t('user:district')}
          data={getValueLang(company?.city_name, userContext.language)}
        />
        <DataField label={t('user:address')} data={company?.address} />
        <DataField label={t('user:zip_code')} data={company?.zip_code} />
        {company?.website && (
          <BoxWebsite>
            <DataField variant='custom' label={t('user:website_or_facebook_page')}>
              <Link to={company?.website || ''}>
                <Text color={theme.accentTextColor}>{company?.website}</Text>
              </Link>
            </DataField>
          </BoxWebsite>
        )}
        <DataField
          label={t('user:number_of_employees')}
          data={getValueLang(company?.number_of_employees_name, userContext.language)}
        />
        <DataField label={t('user:description')} data={company?.description} />
        {/* <Switcher
          checked={Boolean(company?.published)}
          htmlLabel='published'
          name='published'
          disabled
          variant='default'
          checkedLabel={t('user:published')}
          unCheckedLabel={t('user:published')}
        /> */}
      </CardContainer>
    </BoxCard>
  );
}
