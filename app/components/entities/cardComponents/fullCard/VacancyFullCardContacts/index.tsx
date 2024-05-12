import type { Vacancy } from 'shared/v2/vacancies';

import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DataField } from '~/components/entities/DataFIeld';
import { BoxDataFieldsInner } from '~/components/ui/Card';
import { useApp } from '~/hooks';

export function VacancyFullCardContacts({ vacancy }: { vacancy?: Vacancy | null }): JSX.Element {
  const { t } = useApp();

  return (
    <BoxDataFieldsInner>
      <Text variant={TextVariantEnum.textHeading2} className='title'>
        {t('user:vacancy_contacts')}
      </Text>
      <DataField label={t('user:contact_phone')} data={vacancy?.contacts?.contact_phone} />
      <DataField
        label={t('user:first_and_last_name')}
        data={`${vacancy?.contacts?.first_name || ''} ${vacancy?.contacts?.last_name || ''}`}
      />
    </BoxDataFieldsInner>
  );
}
