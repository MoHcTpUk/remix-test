import styled from 'styled-components';

export const WrapperSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-repeat: round;
  padding: 32px 0;
  gap: 24px;
  background-color: ${({ theme }) => theme.mainPage.backgroundSectionArticlesColor};
  @media (min-width: 768px) {
    padding: 40px 0 48px;
    gap: 32px;
  }

  @media (min-width: 1024px) {
    padding: 40px 0 48px;
  }

  @media (min-width: 1280px) {
    padding: 80px 0;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SwiperChips = styled.div`
  display: flex;
`;

export const MobileContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const TabletContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;

  @media (min-width: 576px) {
    padding-left: 28px;
  }

  @media (min-width: 768px) {
    padding-left: 34px;
  }

  @media (min-width: 1240px) {
    padding: 0 162px;
    display: flex;
    justify-content: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  max-width: 1090px;
  width: 100%;
  justify-content: center;
  @media (min-width: 1024px) {
    justify-content: flex-end;
  }
`;

export const ButtonInner = styled.div`
  margin-top: -6px;
  max-width: 1200px;
  @media (min-width: 768px) {
    margin-top: -12px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
  @media (min-width: 1280px) {
    display: flex;
    align-self: end;
    justify-content: flex-end;
    margin-top: -32px;
    z-index: 2;
  }
`;
