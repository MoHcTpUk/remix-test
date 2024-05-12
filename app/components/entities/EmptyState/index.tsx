import type { ReactElement } from 'react';

import { Box } from '~/components/common/Box';
import { Icon } from '~/components/common/Icon';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';

import { ContentWrapper, HeaderWrapper, Wrapper } from './styles';

type EmptyStateProps = {
  iconName: string;
  title: string;
  text: string;
  boxInfo?: ReactElement;
  buttonControl: ReactElement;
};

function EmptyState({ iconName, title, text, boxInfo, buttonControl }: EmptyStateProps) {
  return (
    <Wrapper>
      <ContentWrapper>
        <HeaderWrapper>
          <Icon name={iconName} />
          <Box display='flex' flexDirection='column' gap='8px'>
            <Text variant={TextVariantEnum.textHeading2} className='title'>
              {title}
            </Text>
            <Text variant={TextVariantEnum.textBody2medium}>{text}</Text>
          </Box>
        </HeaderWrapper>
        {boxInfo}
      </ContentWrapper>
      {buttonControl}
    </Wrapper>
  );
}

export default EmptyState;
