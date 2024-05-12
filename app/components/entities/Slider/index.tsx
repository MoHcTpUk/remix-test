import { memo, useRef } from 'react';
import type { DefaultTheme } from 'styled-components';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '~/components/common/Button';
import SvgLeft from '~/components/common/Icons/Left';
import SvgRight from '~/components/common/Icons/Right';
import SlideCard from '~/components/common/SlideCard';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';

import { ChipsContainer, IconContainerArrow, SwiperContainer, SwiperControl } from './styles';

export interface ISlide {
  id: string;
  title?: string;
  date?: string;
  vacancies?: number;
  image?: string;
  text?: string;
  shorttext?: string;
}

export interface ISliderProps {
  slides?: ISlide[] | string[];
  slideElements?: number;
  variant: 'chips' | 'companies' | 'articles';
  theme: DefaultTheme;
}

export const Slider = memo(
  ({ theme, slides, slideElements = 1, variant }: ISliderProps): JSX.Element => {
    const swiperRef = useRef<typeof Swiper>(null);
    SwiperCore.use([Pagination]);

    const chunkedArray = [];
    if (slides) {
      for (let i = 0; i < slides?.length; i += slideElements) {
        chunkedArray.push(slides?.slice(i, i + slideElements));
      }
    }

    const settings = {
      companies: {
        slidesPerView: 'auto' as const,
        // slidesPerView: 2.3,
        spaceBetween: 16,
        navigation: true,
        modules: [],
        centeredSlides: true,
        speed: 800,
        slidesOffsetBefore: 0,
        breakpoints: {
          768: {
            centeredSlides: false,
            slidesPerView: 'auto' as const,
            // slidesPerView: 4.2,
            slidesOffsetBefore: 44,
          },
          1024: {
            centeredSlides: false,
            spaceBetween: 16,
            slidesPerView: 'auto' as const,
            // slidesPerView: 4.6,
            slidesOffsetBefore: 104,
          },
          1280: {
            spaceBetween: 24,
            slidesPerView: 5,
            slidesOffsetBefore: 0,
          },
        },
      },
      chips: {
        centeredSlides: true,
        navigation: true,
        modules: [Pagination],
        slidesPerView: undefined,
        breakpoints: undefined,
        spaceBetween: undefined,
        speed: undefined,
      },
      articles: {
        slidesPerView: 'auto' as const,
        spaceBetween: 16,
        navigation: true,
        modules: [],
        centeredSlides: true,
        speed: 800,
        slidesOffsetBefore: 0,
        breakpoints: {
          768: {
            // slidesPerView: 2.8,
            slidesPerView: 'auto' as const,
            centeredSlides: false,
            slidesOffsetBefore: 44,
          },
          1024: {
            spaceBetween: 16,
            // slidesPerView: 3.4,
            slidesPerView: 'auto' as const,
            centeredSlides: false,
            modules: [Pagination],
            slidesOffsetBefore: 104,
          },
          1280: {
            spaceBetween: 24,
            slidesPerView: 3,
            slidesPerGroup: 3,
            slidesOffsetBefore: 0,
            centeredSlides: false,
          },
        },
      },
    };

    return (
      <SwiperContainer variant={variant}>
        <Swiper
          centeredSlides={settings[variant].centeredSlides}
          slidesPerView={settings[variant].slidesPerView}
          spaceBetween={settings[variant].spaceBetween}
          speed={settings[variant].speed}
          breakpoints={settings[variant].breakpoints}
          loop
          pagination={{
            el: '.custom-pagination',
            clickable: true,
          }}
          navigation={settings[variant].navigation}
          modules={settings[variant].modules}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          ref={swiperRef}
        >
          {chunkedArray.map((chunk, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={index}>
              {variant === 'chips' && (
                <ChipsContainer>
                  {chunk?.map((item) => (
                    <Button key={item as string} priority='chips'>
                      <Text variant={TextVariantEnum.textSmall}>{item as string}</Text>
                    </Button>
                  ))}
                </ChipsContainer>
              )}

              {(variant === 'companies' || variant === 'articles') &&
                chunk?.map((item) => {
                  if (typeof item === 'string') {
                    return null; // handle case when item is a string
                  }

                  return (
                    <SlideCard
                      id={item.id}
                      key={item.id}
                      image={item.image}
                      title={item.title}
                      vacancies={item.vacancies}
                      variant={variant}
                      date={item.date}
                    />
                  );
                })}
            </SwiperSlide>
          ))}
          <SwiperControl variant={variant}>
            {variant !== 'chips' && (
              <IconContainerArrow
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
                onClick={(): void => swiperRef.current.swiper.slidePrev()}
              >
                <SvgLeft color={theme.slider.buttonArrowColor} />
              </IconContainerArrow>
            )}
            <div className='custom-pagination' />
            {variant !== 'chips' && (
              <IconContainerArrow
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
                onClick={(): void => swiperRef.current.swiper.slideNext()}
              >
                <SvgRight color={theme.slider.buttonArrowColor} />
              </IconContainerArrow>
            )}
          </SwiperControl>
        </Swiper>
      </SwiperContainer>
    );
  },
);
