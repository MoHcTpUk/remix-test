import { memo } from 'react';

import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';

import { BoxTitle, ContainerBox } from '../../styles';

export const HeadingForNews = memo(
  ({ isId, title, variant }: { isId: boolean; title?: string; variant?: string }): JSX.Element => {
    const { theme, t } = useApp();

    return (
      <ContainerBox variant='materials'>
        <BoxTitle>
          <Text
            className='title'
            variant={TextVariantEnum.textHeading1}
            color={theme.user.headingTextColor}
          >
            {title || t('home:news')}
          </Text>
        </BoxTitle>
      </ContainerBox>
    );
  },
);
