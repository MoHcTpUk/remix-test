import { styled } from 'styled-components';

import {
  FONT_SIZES_DESC,
  FONT_SIZES_MOB,
  LINE_HEIGHTS_DESC,
  LINE_HEIGHTS_MOB,
} from '~/components/common/Text';

export const BoxHeading = styled.div`
  background: url('/images/homePage/noiseSectionTop.png') repeat,
    url('/images/user/backgroundHeading.png');
  background-size: cover;
  background-position: bottom center;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.сards.shadow};
  & .title {
    font-size: ${FONT_SIZES_MOB.textHeading2};
    line-height: ${LINE_HEIGHTS_MOB.textHeading2};
  }

  @media (min-width: 768px) {
    background: url('/images/homePage/noiseSectionTop.png') repeat,
      url('/images/user/backgroundTabletHeading.png') no-repeat;
    background-size: cover;
    background-position: bottom center;
    padding: 16px 24px 24px;
    gap: 24px;
    & .title {
      font-size: ${FONT_SIZES_DESC.textHeading3};
      line-height: ${LINE_HEIGHTS_DESC.textHeading3};
    }
  }

  @media (min-width: 1024px) {
    border-radius: 12px;
  }

  @media (min-width: 1280px) {
    background: url('/images/homePage/noiseSectionTop.png') repeat,
      url('/images/user/backgroundDesktopHeading.png') no-repeat;
    background-size: cover;
    background-position: bottom center;
    padding: 24px;
  }
`;

export const ButtonsControl = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  @media (min-width: 768px) {
    gap: 24px;
  }
  @media (min-width: 1280px) {
    .goBackButton {
      display: none;
    }
  }
  &:empty {
    display: none;
  }
`;

export const MobileBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    gap: 24px;
  }

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const ContainerBox = styled.div<{ variant?: string }>`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    gap: 24px;
    padding-top: 8px;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 0;
  }
`;

export const DesktopProfile = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
`;

export const LeftBoxProfile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const AvatarBox = styled.div`
  width: 124px;
  height: 124px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.user.borderAvatar};

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const InformationBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;

  button {
    display: none;
  }

  @media (min-width: 1280px) {
    button {
      display: flex;
    }
  }
`;
