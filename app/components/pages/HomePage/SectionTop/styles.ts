import styled from 'styled-components';

export const WrapperSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url('images/homePage/backgroundSectionTop.jpg') no-repeat;
  background-size: cover;
  background-repeat: round;
  padding: 32px 16px 40px 16px;
  gap: 16px;
  @media (min-width: 768px) {
    background: url('images/homePage/backgroundSectionTopTablet.jpg');
    background-size: cover;
    background-repeat: round;
    padding: 94px 44px 130px;
    gap: 32px;
  }

  @media (min-width: 940px) {
    padding: 120px 62px 130px;
  }

  @media (min-width: 1280px) {
    background: url('images/homePage/backgroundSectionTopDestop.jpg');
    background-size: cover;
    background-repeat: round;
  }
`;

export const ButtonContainer = styled.div`
  max-width: 816px;
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 18px;
  button {
    width: 100%;
  }
  @media (min-width: 768px) {
    justify-content: space-between;
    button {
      width: auto;
    }
  }
`;
