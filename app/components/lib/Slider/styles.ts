import styled from 'styled-components';

export const SwiperContainer = styled.div<{ variant?: 'chips' | 'companies' | 'articles' }>`
  width: 100%;
  display: flex;
  position: relative;

  & .swiper {
    position: initial;
    align-items: stretch;
    padding: 0 10px;
  }

  & .swiper-slide {
    width: ${({ variant }) => (variant === 'companies' ? '60%' : 'auto')};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: stretch;
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

  @media (min-width: 1280px) {
    width: 1090px;
    & .swiper {
      padding: 20px 10px;
    }
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
    @media (min-width: 1024px) {
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
      transition: all 0.15s ease-in;
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
        transition: all 0.15s ease-in;
      }
    }

    @media (min-width: 1024px) {
      display: ${({ variant }) => (variant === 'articles' ? 'flex' : 'none')};
    }
  }

  @media (min-width: 1300px) {
    justify-content: ${({ variant }) => (variant === 'companies' ? 'space-between' : 'center')};
    bottom: ${({ variant }) => (variant === 'companies' ? '45%' : '-38px')};
    left: ${({ variant }) => (variant === 'companies' ? '-56px' : 'auto')};
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
  transition: all 0.15s ease-in;

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
  padding-bottom: 56px;
  height: fit-content;
`;
