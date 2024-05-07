import styled, { DefaultTheme } from 'styled-components';
import { FONT_SIZES_DESC, FONT_SIZES_MOB } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';

export const SearchContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.search.backgroundWrapper};
  display: flex;
  flex-direction: column;
  border-radius: 0 0 8px 8px;

  @media (min-width: 940px) {
    flex-direction: row;
    border-radius: 0 0 16px 16px;
  }
`;

export const MainInputSearch = styled.input`
  background-color: ${({ theme }) => theme.search.backgroundWrapper};
  padding: 20px 26px 18px 65px;
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: ${FONT_SIZES_MOB[TextVariantEnum.textBody1]};

  &:nth-child(1) {
    border-bottom: 1px solid ${({ theme }) => theme.search.borderColor};
  }

  @media (min-width: 940px) {
    border-radius: 0 0 0 16px;
    padding: 26px 13px 24px 76px;
    min-width: 480px;
    font-size: ${FONT_SIZES_DESC[TextVariantEnum.textBody1]};
    &:nth-child(1) {
      border-bottom: none;
    }
  }
`;

export const PlaceInputSearch = styled.input`
  background-color: ${({ theme }) => theme.search.backgroundWrapper};
  padding: 18px 26px 18px 65px;
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 0px 0px 8px 8px;
  font-size: ${FONT_SIZES_MOB[TextVariantEnum.textBody1]};

  @media (min-width: 940px) {
    padding: 26px 14px 24px 54px;
    border-radius: 0px 0px 16px 0px;
    font-size: ${FONT_SIZES_DESC[TextVariantEnum.textBody1]};
  }
`;

export const WrapperInput = styled.div`
  width: 100%;
  position: relative;
  border-radius: 0px 0px 8px 8px;
`;

export const SvgWrapper = styled.div<{ search?: boolean }>`
  display: flex;
  position: absolute;
  top: 18px;
  left: 26px;
  @media (min-width: 940px) {
    top: 24px;
    left: ${({ search }) => (search ? '40px' : '14px')};
  }
`;

export const MiddleBorder = styled.div`
  display: none;
  min-width: 1px;
  height: 40px;
  background-color: ${({ theme }) => theme.search.middleBorderColor};
  padding: 16px 0px;
  margin-top: 16px;
  @media (min-width: 940px) {
    display: flex;
  }
`;
