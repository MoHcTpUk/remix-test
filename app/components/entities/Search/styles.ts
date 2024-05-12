import { styled } from 'styled-components';

import { FONT_SIZES_DESC, FONT_SIZES_MOB } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';

export const SearchContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.search.backgroundWrapper};
  display: flex;
  flex-direction: column;
  border-radius: 0 0 8px 8px;

  @media (min-width: 768px) {
    min-height: 64px;
    flex-direction: row;
    border-radius: 0 0 12px 12px;
  }
`;

export const SvgWrapper = styled.div<{ search?: boolean }>`
  display: flex;
  position: absolute;
  top: 16px;
  left: 24px;
  @media (min-width: 768px) {
    top: 20px;
    left: ${({ search }) => (search ? '20px' : '24px')};
  }
  @media (min-width: 1024px) {
    left: 24px;
  }
  @media (min-width: 1280px) {
    left: ${({ search }) => (search ? '40px' : '16px')};
  }
`;

export const WrapperInput = styled.div`
  width: 100%;
  position: relative;

  :focus-within {
    ${SvgWrapper} svg path {
      stroke: ${({ theme }) => theme.search.svgFocusColor};
    }
  }
`;

export const MainInputSearch = styled.input`
  background-color: ${({ theme }) => theme.search.backgroundWrapper};
  padding: 18px 34px 14px 56px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-height: 56px;
  font-size: ${FONT_SIZES_MOB[TextVariantEnum.textBody2]};

  &:nth-child(1) {
    border-bottom: 1px solid ${({ theme }) => theme.search.middleBorderColor};
  }

  @media (min-width: 768px) {
    border-radius: 0 0 0 12px;
    padding: 22px 24px 18px 56px;
    font-size: ${FONT_SIZES_DESC[TextVariantEnum.textBody2]};
    &:nth-child(1) {
      border-bottom: none;
    }
  }
  @media (min-width: 1024px) {
    padding: 22px 24px 18px 60px;
  }
  @media (min-width: 1280px) {
    padding: 22px 24px 18px 76px;
  }
`;

export const PlaceInputSearch = styled.input`
  background-color: ${({ theme }) => theme.search.backgroundWrapper};
  padding: 18px 34px 14px 56px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-height: 56px;
  border-radius: 0px 0px 8px 8px;
  font-size: ${FONT_SIZES_MOB[TextVariantEnum.textBody2]};

  @media (min-width: 768px) {
    padding: 22px 24px 18px 64px;
    border-radius: 0px 0px 12px 0px;
    font-size: ${FONT_SIZES_DESC[TextVariantEnum.textBody2]};
  }
  @media (min-width: 1280px) {
    padding: 22px 24px 18px 52px;
  }
`;

export const MiddleBorder = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    min-width: 1px;
    height: 40px;
    background-color: ${({ theme }) => theme.search.middleBorderColor};
    margin: 12px 0;
  }
`;

export const DropDownCities = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.search.backgroundWrapper};
  position: absolute;
  max-height: 328px;
  overflow: hidden;
  padding-left: 42px;
  top: 50px;
  z-index: 2;
  border-radius: 0 0 16px 16px;
  gap: 8px;

  @media (min-width: 768px) {
    top: 54px;
  }
`;

export const DropDownOption = styled.div`
  cursor: pointer;
  & span:hover {
    color: ${({ theme }) => theme.accentTextColor};
  }
`;
