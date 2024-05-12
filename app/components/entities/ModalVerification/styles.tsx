import styled from 'styled-components';

import { FONT_SIZES_DESC, FONT_WEIGHTS_DESC, LINE_HEIGHTS_DESC } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  max-width: 100%;
  @media (min-width: 768px) {
    max-width: 458px;
  }
  @media (min-width: 1024px) {
    max-width: 558px;
  }
  @media (min-width: 1280px) {
    max-width: 642px;
  }

  & button {
    align-self: center;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  text-align: center;

  & svg {
    width: 43px;
    height: 48px;
  }

  @media (min-width: 768px) {
    max-width: 430px;

    & svg {
      width: 50px;
      height: 56px;
    }

    .title {
      font-size: ${FONT_SIZES_DESC[TextVariantEnum.textHeading3]};
      font-weight: ${FONT_WEIGHTS_DESC[TextVariantEnum.textHeading3]};
      line-height: ${LINE_HEIGHTS_DESC[TextVariantEnum.textHeading3]};
    }
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  background-color: ${({ theme }) => theme.сards.imageBackground};
  padding: 16px;
  border-radius: 4px;

  & span {
    margin-top: 2px;
  }

  @media (min-width: 768px) {
    padding: 24px;
    border-radius: 8px;
    gap: 12px;

    & span {
      font-size: ${FONT_SIZES_DESC[TextVariantEnum.textBody1medium]};
      font-weight: ${FONT_WEIGHTS_DESC[TextVariantEnum.textBody1medium]};
      line-height: ${LINE_HEIGHTS_DESC[TextVariantEnum.textBody1medium]};
    }
  }
`;
