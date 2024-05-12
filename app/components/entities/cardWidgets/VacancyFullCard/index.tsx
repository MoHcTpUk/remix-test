import { motion } from 'framer-motion';
import type { ResponseType } from 'shared/v2/responses';
import type { Vacancy } from 'shared/v2/vacancies';

import { Box } from '~/components/common/Box';
import { BoxCard } from '~/components/common/Card';
import { BoxControlContainer } from '~/components/entities/BoxControl';
import {
  VacancyFullCardAbout,
  VacancyFullCardAdditional,
  VacancyFullCardContacts,
  VacancyFullCardDate,
  VacancyFullCardHeading,
  VacancyFullCardInfo,
  VacancyFullCardLocation,
  VacancyFullCardSkills,
} from '~/components/entities/cardComponents/fullCard';
import SignInForRequest from '~/components/pages/Search/SignInForRequest';
import { BoxDataFields, CardContainer } from '~/components/ui/Card';
import { useApp, useScreenWidth } from '~/hooks';
import { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import type { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import type { ResponseState } from '~/types/enums/responseState';
import { SizeCardVariantEnum } from '~/types/enums/sizeCardVariantEnum';
import { VacancyCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';

export function VacancyFullCardWidget({
  vacancy,
  dictionaries,
  handleRequest,
  stateResponse,
  typeResponse,
  variant,
  status,
  responseId,
  responseAction,
}: {
  vacancy?: Vacancy | null;
  dictionaries?: IDictionaries;
  handleRequest?: () => void;
  stateResponse?: ResponseState | string;
  typeResponse?: ResponseType;
  variant?: PageVariantEnum;
  status?: JSX.Element;
  responseId?: string;
  responseAction?: boolean;
}): JSX.Element {
  const { userContext } = useApp();
  const widthScreen = useScreenWidth();

  return (
    <BoxCard nameCard={VacancyCardEnum.vacancy}>
      <CardContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
      >
        <VacancyFullCardHeading vacancy={vacancy} />

        <BoxDataFields variant={EntityVariantEnum.vacancy}>
          <Box flexDirection='column'>
            {status && (
              <Box padding='16px 0 0' width='fit-content'>
                {status}
              </Box>
            )}
            <VacancyFullCardDate vacancy={vacancy} variant={variant} />
          </Box>

          {vacancy?.location?.country_id &&
            vacancy?.location?.region_id &&
            vacancy?.location?.city_id && <VacancyFullCardLocation vacancy={vacancy} />}

          <VacancyFullCardContacts vacancy={vacancy} />
          <VacancyFullCardInfo vacancy={vacancy} />

          {vacancy?.additional_skills?.skill_ids &&
            vacancy?.additional_skills?.skill_ids?.length > 0 && (
              <VacancyFullCardSkills vacancy={vacancy} />
            )}

          {(vacancy?.additional_skills?.driver_license_ids?.[0] ||
            vacancy?.additional_skills?.other_licenses?.[0]) && (
            <VacancyFullCardAdditional vacancy={vacancy} />
          )}

          {vacancy?.vacancy_page?.description && <VacancyFullCardAbout vacancy={vacancy} />}
        </BoxDataFields>

        <BoxControlContainer
          variant={variant}
          typeEntity={EntityVariantEnum.vacancy}
          id={vacancy?.id}
          responseId={responseId}
          typeCard={SizeCardVariantEnum.full}
          handleRequest={handleRequest}
          stateResponse={stateResponse}
          typeResponse={typeResponse}
          responseAction={responseAction}
        />

        {!userContext?.user?.isAuthenticated && widthScreen >= 1280 && (
          <SignInForRequest variant='vacancy' />
        )}
      </CardContainer>
    </BoxCard>
  );
}
