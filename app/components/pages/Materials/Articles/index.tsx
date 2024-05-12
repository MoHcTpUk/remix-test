import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { memo, useRef } from 'react';
import type { EntityMaterial } from 'shared/client/data-contracts';
import { lng } from 'shared/utils';

import { Box } from '~/components/common/Box';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import type { ISlide } from '~/components/entities/Slider';
import { useApp, useScreenWidth } from '~/hooks';
import type { LanguageEnum } from '~/types/enums/languageEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import { getImageUrl } from '~/utils/helpers.client';

import { BoxCard } from '../../../common/Card';
import { CardContent, Image, Wrapper } from './styles';

function mapMaterialsToViewModel(material: EntityMaterial, language: LanguageEnum): ISlide {
  return {
    id: material.id,
    title: lng(material.en?.title, material.th?.title, language),
    shorttext: lng(material.en?.text, material.th?.text, language),
    image: material.image,
  } as ISlide;
}

export const ArticlesComponent = memo(
  ({ articles }: { articles?: EntityMaterial[] | null }): JSX.Element => {
    const widthScreen = useScreenWidth();
    const { theme, t, userContext } = useApp();
    const articlesItems = articles?.map((item) =>
      mapMaterialsToViewModel(item, userContext.language),
    );

    return (
      <Box
        flexDirection='column'
        width='100%'
        gap={widthScreen > 1024 ? '24px' : '16px'}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {articlesItems?.map((articlesItem) => (
          <BoxCard key={articlesItem?.id} variant={VariantCardEnum.materials}>
            <Link to={articlesItem?.id || '#'}>
              <Wrapper>
                <Image>
                  <img
                    src={
                      articlesItem?.image
                        ? getImageUrl(articlesItem?.image)
                        : '/images/user/squareAvatarDefault.png'
                    }
                    alt='article card'
                  />
                </Image>
                <CardContent>
                  <Text className='cardTitle' variant={TextVariantEnum.textHeading3}>
                    {articlesItem.title}
                  </Text>
                  <Text
                    className='cardText'
                    variant={TextVariantEnum.textBody2}
                    color={theme.mainPage.titleColor}
                  >
                    {articlesItem.shorttext}
                  </Text>
                </CardContent>
              </Wrapper>
            </Link>
          </BoxCard>
        ))}
      </Box>
    );
  },
);
