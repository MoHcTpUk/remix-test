import { styled } from 'styled-components';

import { FONT_SIZES_DESC, LINE_HEIGHTS_DESC } from '~/components/common/Text';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 16px;

  @media (min-width: 768px) {
    padding-top: 24px;
    .title {
      font-size: ${FONT_SIZES_DESC.textHeading3};
      line-height: ${LINE_HEIGHTS_DESC.textHeading3};
    }
  }
`;
