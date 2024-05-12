import type { Vacancy } from 'shared/v2/vacancies';

import { Box } from '~/components/common/Box';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DataField } from '~/components/entities/DataFIeld';
import { BoxDataChips, BoxDataFieldsInner } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import { getValueLang } from '~/utils/helpers';

export function VacancyFullCardSkills({ vacancy }: { vacancy?: Vacancy | null }): JSX.Element {
  const { userContext, t } = useApp();

  return (
    <BoxDataFieldsInner>
      <Text variant={TextVariantEnum.textHeading2} className='title'>
        {t('user:skills')}
      </Text>
      <DataField variant='custom'>
        <Box flexDirection='row' flexWrap='wrap' gap='4px'>
          {vacancy?.additional_skills?.skill_names?.map((item) => (
            <BoxDataChips key={item.en}>
              <Text variant={TextVariantEnum.textBody2medium}>
                {getValueLang(item, userContext.language)}
              </Text>
            </BoxDataChips>
          ))}
        </Box>
      </DataField>
    </BoxDataFieldsInner>
  );
}
