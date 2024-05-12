import type { Vacancy } from 'shared/v2/vacancies';

import { Box } from '~/components/common/Box';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp, useScreenWidth } from '~/hooks';
import type { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import { getValueLang } from '~/utils/helpers.client';

export function VacancyFullCardDate({
  vacancy,
  variant,
}: {
  vacancy?: Vacancy | null;
  variant?: PageVariantEnum;
}): JSX.Element {
  const { theme, t, userContext } = useApp();
  const widthScreen = useScreenWidth();

  return (
    <Box
      flexDirection='row'
      gap='8px'
      padding={widthScreen > 768 && variant !== 'response' ? '16px 0 0' : '8px 0 0'}
    >
      <Text variant={TextVariantEnum.textBody2}>{t('user:vacancy_date')}</Text>
      <Text variant={TextVariantEnum.textBody2medium} color={theme.accentTextColor}>
        {getValueLang(vacancy?.created_at, userContext.language)}
      </Text>
    </Box>
  );
}
