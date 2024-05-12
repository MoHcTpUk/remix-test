import styled from 'styled-components';

import { FONT_SIZES_DESC, FONT_WEIGHTS_DESC, LINE_HEIGHTS_DESC } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  height: fit-content;
  gap: 24px;
  padding: 32px 16px;
  background-color: ${({ theme }) => theme.user.backgroundCardColor};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.сards.shadow};

  @media (min-width: 768px) {
    max-width: 506px;
    border-radius: 12px;
    padding: 40px 24px 64px;
  }
  @media (min-width: 1024px) {
    max-width: 606px;
  }

  @media (min-width: 1280px) {
    box-shadow: ${({ theme }) => theme.сards.shadow};
    padding: 40px 24px 64px;
    max-width: 690px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
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
    width: 48px;
    height: 48px;
  }

  @media (min-width: 768px) {
    & svg {
      width: 56px;
      height: 56px;
    }

    .title {
      font-size: ${FONT_SIZES_DESC[TextVariantEnum.textHeading3]};
      font-weight: ${FONT_WEIGHTS_DESC[TextVariantEnum.textHeading3]};
      line-height: ${LINE_HEIGHTS_DESC[TextVariantEnum.textHeading3]};
    }
  }
`;
