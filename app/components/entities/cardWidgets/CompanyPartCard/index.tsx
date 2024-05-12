import { Link, useLocation } from '@remix-run/react';
import type { Company } from 'shared/v2/companies';

import { Box } from '~/components/common/Box';
import { BoxCard } from '~/components/common/Card';
import {
  CompanyPartCardHeading,
  CompanyPartCardInfo,
} from '~/components/entities/cardComponents/partCard';
import { MediaBox } from '~/components/ui/Card';
import { useApp, useScreenWidth } from '~/hooks';
import { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import type { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import { SizeCardVariantEnum } from '~/types/enums/sizeCardVariantEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { updateSearchString } from '~/utils/helpers';

import { BoxControlContainer } from '../../BoxControl';

export function CompanyPartCardWidget({
  company,
  dictionaries,
  variant,
  selectedCompany,
}: {
  company: Company;
  dictionaries?: IDictionaries;
  variant?: PageVariantEnum;
  selectedCompany?: string;
}): JSX.Element {
  const { theme, t } = useApp();
  const location = useLocation();
  const widthScreen = useScreenWidth();

  const boxHeading = (company: Company) => (
    <>
      <CompanyPartCardHeading company={company} />
      <CompanyPartCardInfo company={company} dictionaries={dictionaries} />
    </>
  );

  return (
    <Box
      width='100%'
      style={{
        cursor: 'pointer',
        borderRadius: '12px',
        transition: 'all 0.2s cubic-bezier(0.2, 0, 0, 1)',
        border:
          widthScreen >= 1280 && company.id === selectedCompany
            ? `2px solid ${theme.modal.borderCardsColor}`
            : '',
      }}
      key={company?.id}
    >
      <BoxCard key={company?.id} variant={VariantCardEnum.userCard}>
        <MediaBox variant='mobile'>
          <Link to={company?.id || '#'}>{boxHeading(company)}</Link>
        </MediaBox>

        <MediaBox variant='desktop'>
          <Link
            to={`/search/company${updateSearchString(location.search, company?.id)}`}
            preventScrollReset
          >
            {boxHeading(company)}
          </Link>
        </MediaBox>

        <BoxControlContainer
          company={company}
          id={company?.id}
          variant={variant}
          typeEntity={EntityVariantEnum.company}
          typeCard={SizeCardVariantEnum.part}
        />

        {/* <BoxControl>
          <Form>
            <BoxButtons>
              <Button className='icon' priority='secondary' onlyIcon>
              <Icon name={IconEnum.download} color={theme.user.iconColor} />
            </Button>
              <Button
                className='icon'
                priority='secondary'
                onlyIcon
                onClick={() => handleClick(company?.id || '')}
              >
                <Icon name={IconEnum.share} color={theme.user.iconColor} />
              </Button>
              <Link to={company?.id || '#'} target='_blank'>
                <Button className='icon' priority='secondary' onlyIcon>
                  <Icon name={IconEnum.view} color={theme.user.iconColor} />
                </Button>
              </Link>
              {company?.number_of_vacancies !== 0 && (
                <Link to={`${company?.id || ''}/vacancy`} target='_blank'>
                  <Button priority='primary'>
                    <Text variant={TextVariantEnum.textBody2}>{t('user:show_vacancies')}</Text>
                  </Button>
                </Link>
              )}
            </BoxButtons>
          </Form>
        </BoxControl> */}
      </BoxCard>
    </Box>
  );
}
