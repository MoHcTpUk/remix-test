import { Link, useLocation } from '@remix-run/react';
import { memo } from 'react';
import type { ResponseType } from 'shared/v2/responses';
import type { Vacancy } from 'shared/v2/vacancies';

import { Box } from '~/components/common/Box';
import { BoxCard } from '~/components/common/Card';
import ResponseTypeHeading from '~/components/common/ResponseTypeStatus';
import { BoxControlContainer } from '~/components/entities/BoxControl';
import {
  VacancyPartCardHeading,
  VacancyPartCardInfo,
} from '~/components/entities/cardComponents/partCard';
import { MediaBox } from '~/components/ui/Card';
import { useApp, useScreenWidth } from '~/hooks';
import { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import type { ResponseState } from '~/types/enums/responseState';
import { SizeCardVariantEnum } from '~/types/enums/sizeCardVariantEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import { updateSearchString } from '~/utils/helpers';

export const VacancyPartCardWidget = memo(
  ({
    vacancy,
    selectedVacancy,
    variant,
    type,
    state,
    responseId,
    responseAction,
  }: {
    vacancy: Vacancy;
    selectedVacancy?: string;
    variant?: PageVariantEnum;
    type?: ResponseType;
    state?: ResponseState | string;
    responseId?: string;
    responseAction?: boolean;
  }): JSX.Element => {
    const { theme } = useApp();
    const location = useLocation();
    const widthScreen = useScreenWidth();

    const boxHeading = (vacancy: Vacancy) => (
      <Box flexDirection='column' width='100%'>
        {variant === 'response' && <ResponseTypeHeading state={state} type={type} />}
        <VacancyPartCardHeading vacancy={vacancy} variant={variant} />
        <VacancyPartCardInfo vacancy={vacancy} variant={variant} />
      </Box>
    );

    return (
      <Box
        width='100%'
        style={{
          cursor: 'pointer',
          borderRadius: '12px',
          position: 'relative',
          transition: 'all 0.2s cubic-bezier(0.2, 0, 0, 1)',
          border:
            widthScreen >= 1280 && vacancy.id === selectedVacancy
              ? `2px solid ${theme.modal.borderCardsColor}`
              : '',
        }}
        key={vacancy?.id}
      >
        <BoxCard key={vacancy?.id} variant={VariantCardEnum.userCard}>
          <MediaBox variant='mobile'>
            <Link
              to={responseId || vacancy?.id || '#'}
              style={{
                paddingTop: variant === PageVariantEnum.response ? '62px' : '',
              }}
            >
              {boxHeading(vacancy)}
            </Link>
          </MediaBox>

          <MediaBox variant='desktop'>
            <Link
              to={
                variant === 'search'
                  ? `/search/vacancy${updateSearchString(location.search, vacancy?.id)}`
                  : `${vacancy?.id || ''}?responseId=${responseId || ''}`
              }
              style={{
                paddingTop: variant === PageVariantEnum.response ? '62px' : '',
              }}
              preventScrollReset
            >
              {boxHeading(vacancy)}
            </Link>
          </MediaBox>

          <BoxControlContainer
            variant={variant}
            stateResponse={state}
            typeResponse={type}
            typeEntity={EntityVariantEnum.vacancy}
            id={vacancy?.id}
            responseId={responseId}
            typeCard={SizeCardVariantEnum.part}
            responseAction={responseAction}
          />
        </BoxCard>
      </Box>
    );
  },
);
