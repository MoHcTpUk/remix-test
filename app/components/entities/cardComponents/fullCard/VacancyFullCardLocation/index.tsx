import type { Vacancy } from 'shared/v2/vacancies';

import { Box } from '~/components/common/Box';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DataField } from '~/components/entities/DataFIeld';
import { BoxDataFieldsInner } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import { getValueLang } from '~/utils/helpers.client';

export function VacancyFullCardLocation({ vacancy }: { vacancy?: Vacancy | null }): JSX.Element {
  const { userContext, t } = useApp();

  return (
    <BoxDataFieldsInner>
      <Text variant={TextVariantEnum.textHeading2} className='title'>
        {t('user:location')}
      </Text>
      <Box gap='24px'>
        {vacancy?.location?.country_id && (
          <DataField
            label={t('user:country')}
            data={getValueLang(vacancy?.location?.country_name, userContext.language)}
          />
        )}
        {vacancy?.location?.region_id && (
          <DataField
            label={t('user:province')}
            data={getValueLang(vacancy?.location?.region_name, userContext.language)}
          />
        )}
      </Box>
      {vacancy?.location?.city_id && (
        <DataField
          label={t('user:district')}
          data={getValueLang(vacancy?.location?.city_name, userContext.language)}
        />
      )}
    </BoxDataFieldsInner>
  );
}
