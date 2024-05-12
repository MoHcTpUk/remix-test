import { styled } from 'styled-components';

export const SwiperContainer = styled.div<{ variant?: 'chips' | 'companies' | 'articles' }>`
  width: 100%;
  display: flex;
  position: relative;

  & .swiper {
    position: initial;
    align-items: stretch;
    padding: ${({ variant }) => (variant === 'articles' ? '10px 0 16px' : '0 0 10px')};
  }

  & .swiper-slide {
    width: ${({ variant }) => (variant === 'companies' ? '60%' : 'auto')};
    max-width: ${({ variant }) => {
      if (variant === 'companies') return '142px';
      if (variant === 'articles') return '218px';
      return '100%';
    }};
  }

  & .swiper-slide:nth-child(2n) {
    width: ${({ variant }) => (variant === 'companies' ? '60%' : 'auto')};
  }

  & .swiper-slide:nth-child(3n) {
    width: ${({ variant }) => (variant === 'companies' ? '60%' : 'auto')};
  }
  & .swiper-slide:nth-child(4n) {
    width: ${({ variant }) => (variant === 'companies' ? '60%' : 'auto')};
  }

  @media (min-width: 768px) {
    & .swiper-slide {
      max-width: ${({ variant }) => {
        if (variant === 'companies') return '186px';
        if (variant === 'articles') return '245px';
        return '100%';
      }};
    }
  }
  @media (min-width: 1280px) {
    max-width: ${({ variant }) => (variant === 'companies' ? '1098px' : '100%')};
    & .swiper {
      padding: 0 16px 24px 10px;
      margin-top: ${({ variant }) => (variant === 'articles' ? '-10px' : '0')};
    }
    & .swiper-slide {
      max-width: ${({ variant }) => {
        if (variant === 'companies') return '200px';
        if (variant === 'articles') return '384px';
        return '100%';
      }};
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
`;

export const SwiperControl = styled.div<{ variant?: string }>`
  position: absolute;
  z-index: 1;
  bottom: 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 32px;
  width: 99%;

  & button {
    display: ${({ variant }) => (variant === 'chips' ? 'flex' : 'none')};
    @media (min-width: 1280px) {
      display: ${({ variant }) => (variant === 'articles' ? 'flex' : 'none')};
    }
  }

  @media (min-width: 1024px) {
    bottom: ${({ variant }) => (variant === 'articles' ? '-48px' : '0')};
  }

  & .custom-pagination {
    width: auto;
    display: ${({ variant }) => (variant === 'chips' ? 'flex' : 'none')};
    flex-direction: row;
    align-items: center;
    gap: 32px;

    & .swiper-pagination-bullet {
      background-color: ${({ theme }) => theme.slider.backgroundBulletColor};
      opacity: 1;
      transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
    }

    & .swiper-pagination-bullet-active {
      position: relative;
      background-color: ${({ theme }) => theme.slider.backgroundBulletActiveColor};

      &::after {
        content: '';
        width: 16px;
        height: 16px;
        position: absolute;
        border: 1.5px solid ${({ theme }) => theme.slider.backgroundBulletActiveColor};
        left: -4px;
        top: -4px;
        border-radius: 50%;
        transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
      }
    }

    @media (min-width: 1280px) {
      display: ${({ variant }) => (variant === 'articles' ? 'flex' : 'none')};
    }
  }

  @media (min-width: 1280px) {
    justify-content: ${({ variant }) => (variant === 'companies' ? 'space-between' : 'center')};
    bottom: ${({ variant }) => (variant === 'companies' ? '45%' : '-23px')};
    left: ${({ variant }) => (variant === 'companies' ? '-52px' : 'auto')};
    z-index: ${({ variant }) => variant === 'companies' && '0'};
    width: ${({ variant }) => (variant === 'companies' ? '1200px' : '100%')};
    & button {
      display: ${({ variant }) =>
        variant === 'companies' || variant === 'articles' ? 'flex' : 'none'};
    }
  }
`;

export const IconContainerArrow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.slider.backgroundButtonArrowColor};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.slider.hoverButtonArrowColor};
  }
`;

export const ChipsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  padding-bottom: 36px;
  height: fit-content;
`;
