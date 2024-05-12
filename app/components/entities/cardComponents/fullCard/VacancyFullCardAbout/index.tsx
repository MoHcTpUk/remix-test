import type { Vacancy } from 'shared/v2/vacancies';

import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DataField } from '~/components/entities/DataFIeld';
import { BoxDataFieldsInner } from '~/components/ui/Card';
import { useApp } from '~/hooks';

export function VacancyFullCardAbout({ vacancy }: { vacancy?: Vacancy | null }): JSX.Element {
  const { t } = useApp();

  return (
    <BoxDataFieldsInner>
      <Text variant={TextVariantEnum.textHeading2} className='title'>
        {t('user:vacancy_description')}
      </Text>
      <DataField data={vacancy?.vacancy_page?.description} />
    </BoxDataFieldsInner>
  );
}
