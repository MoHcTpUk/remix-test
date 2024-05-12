import type { Company } from 'shared/v2/companies';

import { Box } from '~/components/common/Box';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { BoxDataChips } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { DEFAULT_COMPANY_LOGO } from '~/utils/constants';
import { getImageUrl, getValueLang } from '~/utils/helpers';

import {
  AvatarBox,
  BoxInfo,
  DescriptionBox,
  DescriptionInfoBox,
  InformationBox,
  TitlesBox,
  Wrapper,
} from './styles';

export function HeadingForSearchCompany({
  company,
  dictionaries,
}: {
  company: Company;
  dictionaries?: IDictionaries;
}): JSX.Element {
  const { theme, t, userContext } = useApp();

  return (
    <Wrapper>
      <InformationBox>
        <Box gap='24px' flexDirection='row'>
          <AvatarBox>
            <img
              src={company?.logo_uri ? getImageUrl(company?.logo_uri) : DEFAULT_COMPANY_LOGO}
              alt=''
            />
          </AvatarBox>
          <TitlesBox>
            <Text variant={TextVariantEnum.textHeading3}>{company.name}</Text>

            <Text variant={TextVariantEnum.textBody1medium}>{company.name}</Text>

            <Text variant={TextVariantEnum.textBody1medium} color={theme.accentTextColor}>
              {company.website}
            </Text>
          </TitlesBox>
        </Box>
        <Box
          display='grid'
          style={{ gridTemplateRows: 'repeat(2, 1fr)', gridTemplateColumns: 'repeat(2, 1fr)' }}
          gap='24px'
          justifyContent='center'
        >
          <BoxInfo>
            <Text variant={TextVariantEnum.textBody2}>{t('user:opened_vacancies')}</Text>
            <Box>
              <BoxDataChips>
                <Text variant={TextVariantEnum.textBody2medium}>{company.number_of_vacancies}</Text>
              </BoxDataChips>
            </Box>
          </BoxInfo>
          <BoxInfo>
            <Text variant={TextVariantEnum.textBody2}>{t('user:number_of_employees')}</Text>
            <Text variant={TextVariantEnum.textBody2medium}>
              {getValueLang(company?.number_of_employees_name, userContext.language)}
            </Text>
          </BoxInfo>
          <BoxInfo>
            <Text variant={TextVariantEnum.textBody2}>{t('user:district')}</Text>
            <Text variant={TextVariantEnum.textBody2medium}>
              {getValueLang(company?.city_name, userContext.language)}
            </Text>
          </BoxInfo>
          <BoxInfo>
            <Text variant={TextVariantEnum.textBody2}>{t('user:city')}</Text>
            <Text variant={TextVariantEnum.textBody2medium}>
              {getValueLang(company?.city_name, userContext.language)}
            </Text>
          </BoxInfo>
        </Box>
      </InformationBox>
      <DescriptionBox>
        <Text variant={TextVariantEnum.textHeading3}>{t('user:about_company')}</Text>
        <DescriptionInfoBox>
          <Text variant={TextVariantEnum.textBody2medium}>{company.description}</Text>
        </DescriptionInfoBox>
      </DescriptionBox>
    </Wrapper>
  );
}
