import { Link } from '@remix-run/react';
import type { Company } from 'shared/v2/companies';

import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { BoxHeading, HeadingInformation } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import { SizeCardVariantEnum } from '~/types/enums/sizeCardVariantEnum';
import { DEFAULT_COMPANY_LOGO } from '~/utils/constants';
import { getImageUrl, getValueLang } from '~/utils/helpers';

export function CompanyFullCardHeading({ company }: { company?: Company }): JSX.Element {
  const { theme, userContext } = useApp();

  return (
    <BoxHeading
      variant={EntityVariantEnum.company}
      className='fullCard'
      sizeVariant={SizeCardVariantEnum.full}
    >
      <img
        src={company?.logo_uri ? getImageUrl(company?.logo_uri) : DEFAULT_COMPANY_LOGO}
        alt='company logo'
      />
      <HeadingInformation variant='company'>
        <Text className='title' variant={TextVariantEnum.textHeading2}>
          {company?.name}
        </Text>
        <Text variant={TextVariantEnum.textBody1medium} color={theme.user.descriptionTextColor}>
          {getValueLang(company?.specialization_name, userContext.language)}
        </Text>
        <Link
          to={company?.website || ''}
          style={{
            width: '100%',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          <Text variant={TextVariantEnum.textBody2medium} color={theme.accentTextColor}>
            {company?.website}
          </Text>
        </Link>
      </HeadingInformation>
    </BoxHeading>
  );
}
