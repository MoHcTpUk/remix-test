import type { Company } from 'shared/v2/companies';

import { Box } from '~/components/common/Box';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DataBox } from '~/components/ui/DataBox';
import { Field } from '~/components/ui/Field';
import { useApp } from '~/hooks';
import { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { getValueFromDictionaries } from '~/utils/helpers.client';

export function CompanyPartCardInfo({
  company,
  dictionaries,
}: {
  company: Company;
  dictionaries?: IDictionaries;
}): JSX.Element {
  const { theme, t, userContext } = useApp();

  return (
    <Box
      flexDirection='column'
      gap='8px'
      width='100%'
      padding='16px 0'
      style={{
        borderTop: `1px solid ${theme.user.borderColor}`,
        borderBottom: `1px solid ${theme.user.borderColor}`,
      }}
    >
      {company.description && (
        <Field>
          <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
            {t('user:about_company')}
          </Text>
          <Text variant={TextVariantEnum.textBody2medium} className='shortDescription'>
            {company.description}
          </Text>
        </Field>
      )}
      <DataBox variant={EntityVariantEnum.company}>
        <Field className='field'>
          <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
            {t('user:number_of_employees')}
          </Text>
          <Text variant={TextVariantEnum.textBody2medium}>
            {getValueFromDictionaries(
              dictionaries?.employeeNumbers,
              company.number_of_employees_id,
              userContext.language,
            )}
          </Text>
        </Field>
        <Field className='field'>
          <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
            {t('user:opened_vacancies')}
          </Text>
          <Box flexDirection='column' gap='4px'>
            <Text variant={TextVariantEnum.textBody2medium}>{company.number_of_vacancies}</Text>
          </Box>
        </Field>
      </DataBox>
    </Box>
  );
}
