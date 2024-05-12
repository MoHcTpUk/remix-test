import type { Company } from 'shared/v2/companies';

import { Box } from '~/components/common/Box';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DataField } from '~/components/entities/DataFIeld';
import { BoxDataChips, BoxDataFieldsInner } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import { getValueLang } from '~/utils/helpers';

export function CompanyFullCardInfo({ company }: { company?: Company }): JSX.Element {
  const { t, userContext } = useApp();

  return (
    <BoxDataFieldsInner>
      <Text variant={TextVariantEnum.textHeading2} className='title'>
        {t('user:company_information')}
      </Text>
      <DataField variant='custom' label={t('user:opened_vacancies')}>
        <Box>
          <BoxDataChips>
            <Text variant={TextVariantEnum.textBody2medium}>
              {company?.number_of_vacancies?.toFixed()}
            </Text>
          </BoxDataChips>
        </Box>
      </DataField>
      <DataField
        label={t('user:district')}
        data={getValueLang(company?.city_name, userContext.language)}
      />
      <DataField label={t('user:address')} data={company?.address} />
      <DataField label={t('user:zip_code')} data={company?.zip_code} />
      <DataField label={t('user:phone')} data={company?.phone} />
      <DataField
        label={t('user:number_of_employees')}
        data={getValueLang(company?.number_of_employees_name, userContext.language)}
      />
    </BoxDataFieldsInner>
  );
}
