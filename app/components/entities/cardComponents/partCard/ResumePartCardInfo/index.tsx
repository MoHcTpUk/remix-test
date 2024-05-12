import type { Resume } from 'shared/v2/resumes';

import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DataBox } from '~/components/ui/DataBox';
import { Field } from '~/components/ui/Field';
import { useApp } from '~/hooks';
import type { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import { calculateAge, calculateTotalDurationWorkExperience, getValueLang } from '~/utils/helpers';

export function ResumePartCardInfo({
  resume,
  variant,
}: {
  resume?: Resume;
  variant?: PageVariantEnum;
}): JSX.Element {
  const { theme, t, userContext } = useApp();

  return (
    <DataBox borderBottom={variant !== 'response'} borderTop={variant !== 'response'}>
      <Field>
        <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
          {t('user:district')}
        </Text>
        <Text variant={TextVariantEnum.textBody2medium}>
          {getValueLang(resume?.location?.city_name, userContext.language)}
        </Text>
      </Field>
      <Field>
        <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
          {t('user:age')}
        </Text>
        <Text variant={TextVariantEnum.textBody2medium}>
          {calculateAge(resume?.general_information?.birthdate?.en).toString()}
        </Text>
      </Field>
      <Field>
        <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
          {t('user:work_experience')}
        </Text>
        <Text variant={TextVariantEnum.textBody2medium}>
          {calculateTotalDurationWorkExperience(
            resume?.total_work_experience_in_months,
            userContext.language,
          )}{' '}
        </Text>
      </Field>
    </DataBox>
  );
}
