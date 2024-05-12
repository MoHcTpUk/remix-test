import type { Vacancy } from 'shared/v2/vacancies';

import { Box } from '~/components/common/Box';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { BoxHeading, HeadingInformation } from '~/components/ui/Card';
import { BoxAvatar } from '~/components/ui/Card/BoxAvatar';
import { DataBox } from '~/components/ui/DataBox';
import { useApp, useScreenWidth } from '~/hooks';
import { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import { SizeCardVariantEnum } from '~/types/enums/sizeCardVariantEnum';
import { DEFAULT_COMPANY_LOGO } from '~/utils/constants';
import { getImageUrl, getSalary } from '~/utils/helpers';

export function VacancyFullCardHeading({ vacancy }: { vacancy?: Vacancy | null }): JSX.Element {
  const { theme, userContext } = useApp();
  const widthScreen = useScreenWidth();

  return (
    <>
      <BoxHeading
        variant={EntityVariantEnum.vacancy}
        className='fullCard'
        sizeVariant={SizeCardVariantEnum.full}
      >
        <BoxAvatar variant='search'>
          <img
            src={
              vacancy?.company_logo_uri
                ? getImageUrl(vacancy?.company_logo_uri)
                : DEFAULT_COMPANY_LOGO
            }
            alt='company logo'
          />
        </BoxAvatar>

        <HeadingInformation>
          <Text className='title' variant={TextVariantEnum.textHeading2}>
            {vacancy?.vacancy_page?.position}
          </Text>

          {vacancy?.contacts?.company_name && (
            <Text variant={TextVariantEnum.textBody1medium} color={theme.user.descriptionTextColor}>
              {vacancy?.contacts?.company_name}
            </Text>
          )}
          {widthScreen >= 768 &&
            (vacancy?.vacancy_page?.salary_fixed ||
              (vacancy?.vacancy_page?.salary_from && vacancy?.vacancy_page?.salary_to)) && (
              <Box>
                {vacancy.vacancy_page?.salary_from && vacancy.vacancy_page?.salary_to ? (
                  <Text className='price' variant={TextVariantEnum.textHeading3}>
                    {vacancy.vacancy_page?.salary_from} - {vacancy.vacancy_page?.salary_to}
                    &nbsp;
                    {getSalary(
                      vacancy?.vacancy_page?.currency_name?.en,
                      vacancy?.vacancy_page?.salary_payout_period_name?.en,
                      userContext.language,
                    )}
                  </Text>
                ) : (
                  <Text className='price' variant={TextVariantEnum.textHeading3}>
                    {vacancy.vacancy_page?.salary_fixed}&nbsp;
                    {getSalary(
                      vacancy.vacancy_page.currency_name?.en,
                      vacancy.vacancy_page.salary_payout_period_name?.en,
                      userContext.language,
                    )}
                  </Text>
                )}
              </Box>
            )}
        </HeadingInformation>
      </BoxHeading>

      {widthScreen < 768 &&
        (vacancy?.vacancy_page?.salary_fixed ||
          (vacancy?.vacancy_page?.salary_from && vacancy?.vacancy_page?.salary_to)) && (
          <DataBox variantSize={SizeCardVariantEnum.full} borderBottom={widthScreen < 768}>
            <Box>
              {vacancy?.vacancy_page?.salary_from && vacancy?.vacancy_page?.salary_to ? (
                <Text className='price' variant={TextVariantEnum.textHeading3}>
                  {vacancy?.vacancy_page?.salary_from} - {vacancy?.vacancy_page?.salary_to}
                  &nbsp;
                  {getSalary(
                    vacancy?.vacancy_page?.currency_name?.en,
                    vacancy?.vacancy_page?.salary_payout_period_name?.en,
                    userContext.language,
                  )}
                </Text>
              ) : (
                <Text className='price' variant={TextVariantEnum.textHeading3}>
                  {vacancy?.vacancy_page?.salary_fixed}&nbsp;
                  {getSalary(
                    vacancy?.vacancy_page?.currency_name?.en,
                    vacancy?.vacancy_page?.salary_payout_period_name?.en,
                    userContext.language,
                  )}
                </Text>
              )}
            </Box>
          </DataBox>
        )}
    </>
  );
}
