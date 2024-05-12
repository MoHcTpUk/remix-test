import type { Company } from 'shared/v2/companies';

import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DataField } from '~/components/entities/DataFIeld';
import { BoxDataFieldsInner } from '~/components/ui/Card';
import { useApp } from '~/hooks';

export function CompanyFullCardAbout({ company }: { company?: Company }): JSX.Element {
  const { t } = useApp();

  return (
    <BoxDataFieldsInner>
      <Text variant={TextVariantEnum.textHeading2} className='title'>
        {`${t('common:about')} ${company?.name || ''}`}
      </Text>
      <DataField data={company?.description} />
    </BoxDataFieldsInner>
  );
}
