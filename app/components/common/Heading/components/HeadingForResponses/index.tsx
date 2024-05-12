import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';

import { BoxTitle, ContainerBox } from '../../styles';

export function HeadingForResponses({
  title,
  variant,
}: {
  title?: string;
  variant?: string;
}): JSX.Element {
  const { theme, t } = useApp();

  return (
    <ContainerBox>
      <BoxTitle>
        <Text
          className='title'
          variant={TextVariantEnum.textHeading1}
          color={theme.user.headingTextColor}
        >
          {title || t('user:responses')}
        </Text>
      </BoxTitle>
    </ContainerBox>
  );
}
