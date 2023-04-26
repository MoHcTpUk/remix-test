import styled from 'styled-components';

import { FONT_SIZES_TAB } from '~/components/common/Text';

export const BoxHeading = styled.div`
  background: url('/images/user/backgroundHeading.jpg') no-repeat;
  background-size: cover;
  background-repeat: round;
  width: 100%;
  padding: 16px;
  border-radius: 8px;

  @media (min-width: 768px) {
    background: url('/images/user/backgroundTabletHeading.jpg') no-repeat;
    padding: 16px 24px;
    gap: 24px;

    & .title {
      font-size: ${FONT_SIZES_TAB.textHeading3};
    }
  }
`;

export const ButtonsControl = styled.div`
  display: none;
  flex-direction: row;

  @media (min-width: 768px) {
    display: flex;
    gap: 16px;
  }
`;
