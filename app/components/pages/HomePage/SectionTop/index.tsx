import { memo } from 'react';
import Button from '~/components/common/Button';
import { Box } from '~/components/common/Box';
import TabSwitcher from '~/components/common/Tabs';
import { Text } from '~/components/common/Text';
import { ButtonContainer, WrapperSection } from './styles';
import { useApp } from '~/hooks';
import { TextVariantEnum } from '~/components/common/Text/enums';

export const SectionTop = memo(function HomePageMemoized(): JSX.Element {
  const { theme, t } = useApp();

  return (
    <WrapperSection>
      <Text variant={TextVariantEnum.textHeading1} color={theme.mainPage.headingColor}>
        {t('home:title')}
      </Text>
      <Box width='100%' maxWidth='816px' flexDirection='column'>
        <TabSwitcher />
      </Box>
      <ButtonContainer>
        <Button priority='secondary' size='S'>
          <Text> {t('home:create_resume')}</Text>
        </Button>
        <Button priority='primary' size='S'>
          <Text> {t('home:search')}</Text>
        </Button>
      </ButtonContainer>
    </WrapperSection>
  );
});
