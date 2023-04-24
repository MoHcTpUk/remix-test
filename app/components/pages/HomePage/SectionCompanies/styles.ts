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
  gap: 14px;
  background-color: ${({ theme }) => theme.mainPage.backgroundSectionCompaniesColor};
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
  padding-left: 18px;

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
  margin-top: -6px;

  @media (min-width: 768px) {
    margin-top: -24px;
  }

  @media (min-width: 1280px) {
    margin-top: -42px;
  }
`;
