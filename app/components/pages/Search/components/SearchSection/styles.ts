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
  padding: 80px 16px 16px;
  gap: 16px;
  box-shadow: ${({ theme }) => theme.сards.shadow};

  @media (min-width: 768px) {
    background: url('/images/homePage/noiseSectionTop.png') repeat,
      url('/images/homePage/backgroundSectionTopTablet.png') no-repeat;
    background-size: cover;
    background-position: center right;
    padding: 104px 44px 24px;
    gap: 24px;
  }

  @media (min-width: 1280px) {
    background: url('/images/homePage/noiseSectionTop.png') repeat,
      url('/images/homePage/backgroundSectionTopDestop.png') no-repeat;
    background-size: cover;
    background-position: center right;
  }
`;

export const ButtonContainer = styled.div`
  max-width: 920px;
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 18px;

  @media (min-width: 768px) {
    justify-content: space-between;
    button {
      width: 100%;
    }
  }

  @media (min-width: 1280px) {
    button {
      width: 196px;
    }
  }
`;

export const ButtonFilterMobile = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ButtonFilterTablet = styled.div`
  display: none;
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const ButtonFilterDesktop = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
  }
`;
