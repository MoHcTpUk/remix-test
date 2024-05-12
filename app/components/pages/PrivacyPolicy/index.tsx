import { useLocation } from '@remix-run/react';
import { motion } from 'framer-motion';
import { memo, useEffect } from 'react';
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

export const PrivacyPolicyComponent = memo(
  ({ privacy }: { privacy?: EntityStaticPage | null }): JSX.Element => {
    const { userContext } = useApp();
    const location = useLocation();

    const privacyData = mapMaterialsToViewModel(privacy!, userContext.language);
    const sections = privacyData?.text?.split('\n\n');
    const privacyStatement = sections?.[0];
    const cookies = sections?.[1];
    const termsAndConditions = sections?.[2];

    useEffect(() => {
      if (location.hash) {
        const elem = document.getElementById(location.hash);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    }, [location]);

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
            <Text variant={TextVariantEnum.textHeading2}>{privacyData.title}</Text>
          </TitleWrapper>

          <ContentWrapper>
            <Text variant={TextVariantEnum.textBody2}>{privacyStatement}</Text>
            <Text variant={TextVariantEnum.textBody2}>{cookies}</Text>
            <Text variant={TextVariantEnum.textBody2} id='terms'>
              {termsAndConditions}
            </Text>
          </ContentWrapper>
        </BoxCard>
      </Box>
    );
  },
);
