import { memo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import type { DefaultTheme } from 'styled-components';
import styled from 'styled-components';
import Button from '~/components/common/Button';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SvgLeft from '~/components/common/Icons/Left';
import SvgRight from '~/components/common/Icons/Right';
import { Text } from '~/components/common/Text';
import { ChipsContainer, IconContainerArrow, SwiperContainer, SwiperControl } from './styles';
import Card from '~/components/common/Card';
import { TextVariantEnum } from '~/components/common/Text/enums';

export interface ISlide {
  id: string;
  title?: string;
  date?: string;
  vacancies?: number;
  image?: string;
}

export interface ISliderProps {
  slides: string[] | ISlide[];
  slideElements?: number;
  variant: 'chips' | 'companies' | 'articles';
  theme: DefaultTheme;
}

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const Slider = memo(function FooterMemoized({
  theme,
  slides,
  slideElements = 1,
  variant,
}: ISliderProps): JSX.Element {
  const swiperRef = useRef<typeof Swiper>(null);
  SwiperCore.use([Pagination]);

  const chunkedArray = [];
  for (let i = 0; i < slides.length; i += slideElements) {
    chunkedArray.push(slides.slice(i, i + slideElements));
  }

  const settings = {
    companies: {
      slidesPerView: 2.3,
      spaceBetween: 16,
      navigation: true,
      modules: [],
      centeredSlides: false,
      breakpoints: {
        576: {
          slidesPerView: 3.3,
        },
        768: {
          slidesPerView: 4.2,
        },
        1024: {
          spaceBetween: 24,
          slidesPerView: 4.4,
        },
        1280: {
          slidesPerView: 5,
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
    },
    articles: {
      slidesPerView: 1.4,
      spaceBetween: 16,
      navigation: true,
      modules: [],
      centeredSlides: true,
      breakpoints: {
        576: {
          slidesPerView: 2.4,
          centeredSlides: false,
        },
        768: {
          slidesPerView: 2.8,
          centeredSlides: false,
        },
        1024: {
          spaceBetween: 24,
          slidesPerView: 3.4,
          centeredSlides: false,
          modules: [Pagination],
          slidesPerGroup: 3,
        },
        1280: {
          slidesPerView: 3,
          slidesPerGroup: 3,
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
          <SwiperSlide key={index}>
            {variant === 'chips' && (
              <ChipsContainer>
                {chunk.map((item) => (
                  <Button key={item as string} priority='chips'>
                    <Text variant={TextVariantEnum.textSmall}>{item as string}</Text>
                  </Button>
                ))}
              </ChipsContainer>
            )}

            {(variant === 'companies' || variant === 'articles') &&
              chunk.map((item) => {
                if (typeof item === 'string') {
                  return null; // handle case when item is a string
                }

                return (
                  <Card
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
          <IconContainerArrow
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
            onClick={(): void => swiperRef.current.swiper.slidePrev()}
          >
            <SvgLeft color={theme.slider.buttonArrowColor} />
          </IconContainerArrow>
          <div className='custom-pagination'></div>

          <IconContainerArrow
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
            onClick={(): void => swiperRef.current.swiper.slideNext()}
          >
            <SvgRight color={theme.slider.buttonArrowColor} />
          </IconContainerArrow>
        </SwiperControl>
      </Swiper>
    </SwiperContainer>
  );
});
