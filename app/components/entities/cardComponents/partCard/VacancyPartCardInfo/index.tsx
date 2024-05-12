import type { Vacancy } from 'shared/v2/vacancies';

import { Box } from '~/components/common/Box';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DataBox } from '~/components/ui/DataBox';
import { Field } from '~/components/ui/Field';
import { useApp } from '~/hooks';
import { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import type { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import { getValueLang } from '~/utils/helpers';

export function VacancyPartCardInfo({
  vacancy,
  variant,
}: {
  vacancy?: Vacancy;
  variant?: PageVariantEnum;
}): JSX.Element {
  const { theme, t, userContext } = useApp();

  return (
    <DataBox
      variant={EntityVariantEnum.vacancy}
      borderBottom={variant !== 'response'}
      borderTop={variant !== 'response'}
    >
      <Field>
        <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
          {t('user:district')}
        </Text>
        <Text variant={TextVariantEnum.textBody2medium}>
          {getValueLang(vacancy?.location?.city_name, userContext.language)}
        </Text>
      </Field>
      <Field>
        <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
          {t('user:employment')}
        </Text>
        <Box flexDirection='column' gap='4px'>
          {vacancy?.vacancy_page?.employment_type_names?.map((employment) => (
            <Text key={employment.en} variant={TextVariantEnum.textBody2medium}>
              {getValueLang(employment, userContext.language)}
            </Text>
          ))}
        </Box>
      </Field>
      <Field>
        <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
          {t('user:work_features')}
        </Text>
        <Box flexDirection='column' gap='4px'>
          {vacancy?.vacancy_page?.work_feature_names?.map((feature) => (
            <Text key={feature.en} variant={TextVariantEnum.textBody2medium}>
              {getValueLang(feature, userContext.language)}
            </Text>
          ))}
        </Box>
      </Field>
    </DataBox>
  );
}
