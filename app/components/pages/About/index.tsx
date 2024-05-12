import { motion } from 'framer-motion';
import { memo } from 'react';
import type { EntityStaticPage } from 'shared/client/data-contracts';
import { lng } from 'shared/utils';

import { Box } from '~/components/common/Box';
import { BoxCard } from '~/components/common/Card';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';
import type { LanguageEnum } from '~/types/enums/languageEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import type { IStaticPageContent } from '~/types/interfaces/iStaticPages';

import { ContentWrapper, TitleWrapper } from './styles';

function mapMaterialsToViewModel(
  material: EntityStaticPage,
  language: LanguageEnum,
): IStaticPageContent {
  return {
    id: material.id,
    title: lng(material.en?.title, material.th?.title, language),
    text: lng(material.en?.text, material.th?.text, language),
  } as IStaticPageContent;
}

export const AboutComponent = memo(
  ({ about }: { about?: EntityStaticPage | null }): JSX.Element => {
    const { userContext } = useApp();
    const aboutData = mapMaterialsToViewModel(about!, userContext.language);

    return (
      <Box
        flexDirection='column'
        width='100%'
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <BoxCard variant={VariantCardEnum.about}>
          <TitleWrapper>
            <Text variant={TextVariantEnum.textHeading2}>{aboutData.title}</Text>
          </TitleWrapper>

          <ContentWrapper>
            <Text variant={TextVariantEnum.textBody2}>{aboutData.text}</Text>
          </ContentWrapper>
        </BoxCard>
      </Box>
    );
  },
);
