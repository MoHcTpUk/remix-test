import { motion } from 'framer-motion';
import type { Company } from 'shared/v2/companies';

import { BoxCard } from '~/components/common/Card';
import {
  CompanyFullCardAbout,
  CompanyFullCardHeading,
  CompanyFullCardInfo,
} from '~/components/entities/cardComponents/fullCard';
import SignInForRequest from '~/components/pages/Search/SignInForRequest';
import { BoxDataFields, CardContainer } from '~/components/ui/Card';
import { useApp, useScreenWidth } from '~/hooks';
import { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import type { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import { SizeCardVariantEnum } from '~/types/enums/sizeCardVariantEnum';
import { VacancyCardEnum } from '~/types/enums/stateCardEnum';

import { BoxControlContainer } from '../../BoxControl';

export function CompanyFullCardWidget({
  company,
  variant,
}: {
  company?: Company;
  variant?: PageVariantEnum;
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
        <CompanyFullCardHeading company={company} />

        <BoxDataFields>
          <CompanyFullCardInfo company={company} />
          {company?.description && <CompanyFullCardAbout company={company} />}
        </BoxDataFields>

        <BoxControlContainer
          variant={variant}
          typeEntity={EntityVariantEnum.company}
          id={company?.id}
          typeCard={SizeCardVariantEnum.full}
        />

        {!userContext?.user?.isAuthenticated && widthScreen >= 1280 && (
          <SignInForRequest variant='vacancy' />
        )}
      </CardContainer>
    </BoxCard>
  );
}
