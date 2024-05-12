import { memo } from 'react';
import type { Company } from 'shared/v2/companies';
import type { Vacancy } from 'shared/v2/vacancies';

import { Box } from '~/components/common/Box';
import { BoxCard } from '~/components/common/Card';
import {
  VacancyPartCardHeading,
  VacancyPartCardInfo,
} from '~/components/entities/cardComponents/partCard';
import { useApp } from '~/hooks';
import { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';

export const VacancyRequest = memo(
  ({
    vacancy,
    dictionaries,
    companies,
  }: {
    vacancy?: Vacancy | null;
    companies?: Company[] | null;
    dictionaries?: IDictionaries;
  }): JSX.Element => {
    const { theme } = useApp();

    return (
      <BoxCard key={vacancy?.id} variant={VariantCardEnum.userCard}>
        <Box flexDirection='column' width='100%'>
          {vacancy && (
            <>
              <VacancyPartCardHeading vacancy={vacancy} />
              <Box borderTop={`1px solid ${theme.user.borderColor}`}>
                <VacancyPartCardInfo vacancy={vacancy} variant={PageVariantEnum.response} />
              </Box>
            </>
          )}
        </Box>
      </BoxCard>
    );
  },
);
