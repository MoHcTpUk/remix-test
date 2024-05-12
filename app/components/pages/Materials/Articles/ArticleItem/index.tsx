import { format, parseISO } from 'date-fns';
import { enGB, th } from 'date-fns/locale';
import { motion } from 'framer-motion';
import { memo } from 'react';
import type { EntityMaterial } from 'shared/client/data-contracts';
import { lng } from 'shared/utils';

import { Box } from '~/components/common/Box';
import { BoxCard } from '~/components/common/Card';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import type { ISlide } from '~/components/entities/Slider';
import { useApp, useScreenWidth } from '~/hooks';
import type { LanguageEnum } from '~/types/enums/languageEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import { getImageUrl } from '~/utils/helpers.client';

import { CardHeader, Image, TitleWrapper, Wrapper } from './styles';

function mapMaterialsToViewModel(material: EntityMaterial, language: LanguageEnum): ISlide {
  return {
    id: material.id,
    title: lng(material.en?.title, material.th?.title, language),
    text: lng(material.en?.text, material.th?.text, language),
    date: material.published_at_utc,
    image: material.image,
  } as ISlide;
}

export const ArticlesItemComponent = memo(
  ({ articlesItem }: { articlesItem?: EntityMaterial | null }): JSX.Element => {
    const widthScreen = useScreenWidth();
    const { theme, t, userContext } = useApp();
    const articlesItemData = mapMaterialsToViewModel(articlesItem!, userContext.language);

    const formatDate = articlesItemData.date;
    const formatDateTH = format(parseISO(formatDate!), 'd MMMM yyyy', { locale: th });
    const formatDateEN = format(parseISO(formatDate!), 'd MMMM yyyy', { locale: enGB });

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
        <BoxCard key={articlesItemData?.id} variant={VariantCardEnum.materials}>
          <Wrapper>
            <CardHeader>
              <TitleWrapper>
                <Text variant={TextVariantEnum.textHeading3}>{articlesItemData.title}</Text>
                <Text
                  className='cardDate'
                  variant={TextVariantEnum.textBody2medium}
                  color={theme.сards.descriptionTextColor}
                >
                  {userContext.language === 'en' ? formatDateEN : formatDateTH}
                </Text>
              </TitleWrapper>
              <Image>
                <img
                  src={
                    articlesItemData?.image
                      ? getImageUrl(articlesItemData?.image)
                      : '/images/user/squareAvatarDefault.png'
                  }
                  alt='news card'
                />
              </Image>
            </CardHeader>

            <Text
              className='cardText'
              variant={TextVariantEnum.textBody2}
              color={theme.mainPage.titleColor}
            >
              {articlesItemData.text}
            </Text>
          </Wrapper>
        </BoxCard>
      </Box>
    );
  },
);
