import styled from 'styled-components';

export const WrapperSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url('/images/homePage/noiseSectionTop.png') repeat,
    url('/images/homePage/backgroundSectionTop.png');
  background-size: cover;
  background-repeat: round;
  padding: 104px 16px 40px;
  gap: 16px;
  @media (min-width: 768px) {
    background: url('/images/homePage/noiseSectionTop.png') repeat,
      url('/images/homePage/backgroundSectionTopTablet.png');
    background-size: cover;
    background-repeat: round;
    padding: 138px 44px;
    gap: 24px;
    .title {
      padding-bottom: 8px;
    }
  }

  @media (min-width: 1024px) {
    padding: 138px 104px;
  }

  @media (min-width: 1280px) {
    background: url('/images/homePage/noiseSectionTop.png') repeat,
      url('/images/homePage/backgroundSectionTopDestop.png');
    background-size: cover;
    background-repeat: round;
  }
`;

export const ButtonContainer = styled.div`
  max-width: 920px;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 18px;
  button {
    width: 164px;
  }
  @media (min-width: 768px) {
    justify-content: space-between;
    button {
      width: 196px;
    }
  }
`;
