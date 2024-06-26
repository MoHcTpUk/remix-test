import { styled } from 'styled-components';

import { FONT_SIZES_DESC, FONT_WEIGHTS_DESC, LINE_HEIGHTS_DESC } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
  justify-content: center;
  gap: 16px;
  max-width: 100%;

  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const ButtonsControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 16px;

  & form {
    width: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    & form {
      width: fit-content;
    }
  }
`;

export const TextWrapper = styled.div`
  padding: 8px 0;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 8px;

  @media (min-width: 768px) {
    align-items: flex-start;

    & span {
      font-size: ${FONT_SIZES_DESC[TextVariantEnum.textHeading3]};
      font-weight: ${FONT_WEIGHTS_DESC[TextVariantEnum.textHeading3]};
      line-height: ${LINE_HEIGHTS_DESC[TextVariantEnum.textHeading3]};
    }
  }
`;
