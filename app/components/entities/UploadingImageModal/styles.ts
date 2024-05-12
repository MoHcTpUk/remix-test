import { styled } from 'styled-components';

import {
  FONT_SIZES_DESC,
  FONT_SIZES_MOB,
  FONT_WEIGHTS_DESC,
  FONT_WEIGHTS_MOB,
  LINE_HEIGHTS_DESC,
  LINE_HEIGHTS_MOB,
} from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
  padding: 16px;

  @media (min-width: 768px) {
    padding: 16px 24px;
  }
`;

export const WrapperUploading = styled.div`
  width: 100%;
  padding-top: 24px;
  border-top: 1px solid #d9dbde;

  @media (min-width: 768px) {
    width: 428px;
  }

  @media (min-width: 1280px) {
    width: 540px;
  }
`;

export const ContainerUploading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 396px;
  }

  @media (min-width: 1280px) {
    width: 384px;
  }
`;

export const Image = styled.img`
  width: 224px;
  height: 224px;
  object-fit: cover;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

export const TextContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  & span:nth-child(1) {
    font-size: ${FONT_SIZES_MOB[TextVariantEnum.textHeading2]};
    font-weight: ${FONT_WEIGHTS_MOB[TextVariantEnum.textHeading2]};
    line-height: ${LINE_HEIGHTS_MOB[TextVariantEnum.textHeading2]};
  }

  @media (min-width: 768px) {
    & span:nth-child(1) {
      font-size: ${FONT_SIZES_DESC[TextVariantEnum.textHeading3]};
      font-weight: ${FONT_WEIGHTS_DESC[TextVariantEnum.textHeading3]};
      line-height: ${LINE_HEIGHTS_DESC[TextVariantEnum.textHeading3]};
    }
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 1280px) {
    gap: 24px;
  }
`;

export const MobileAvatarEditor = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopAvatarEditor = styled.div`
  display: none;
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
  svg {
    max-width: 99px;
    height: 40px;
    transition: all 0.15s ease-in;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.navbar.hoverColor};
    }
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Scale = styled.input`
  width: 100%;
  align-items: center;
  margin-top: 15px;

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    appearance: none;
    height: 2px;
  }
  &::-moz-range-track {
    height: 2px;
  }
  &::-ms-track {
    height: 2px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 4px;
    cursor: pointer;
    margin-top: -7px;
  }
  &::-moz-range-thumb {
    height: 4px;
    cursor: pointer;
    margin-top: 0;
  }

  &::-ms-thumb {
    height: 4px;
    cursor: pointer;
    margin-top: 0;
  }
`;
