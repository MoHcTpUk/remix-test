import type { Company } from 'shared/v2/companies';

import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { BoxHeading, HeadingInformation } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import { DEFAULT_COMPANY_LOGO } from '~/utils/constants';
import { getImageUrl, getValueLang } from '~/utils/helpers.client';

export function CompanyPartCardHeading({ company }: { company?: Company }): JSX.Element {
  const { theme, userContext } = useApp();

  return (
    <BoxHeading variant={EntityVariantEnum.company}>
      <img
        src={company?.logo_uri ? getImageUrl(company?.logo_uri) : DEFAULT_COMPANY_LOGO}
        alt='company logo'
      />
      <HeadingInformation>
        <Text className='title' variant={TextVariantEnum.textHeading2}>
          {company?.name}
        </Text>
        <Text variant={TextVariantEnum.textBody1medium} color={theme.user.descriptionTextColor}>
          {getValueLang(company?.specialization_name, userContext.language)}
        </Text>
      </HeadingInformation>
    </BoxHeading>
  );
}
