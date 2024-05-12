import { styled } from 'styled-components';

import { FONT_SIZES_DESC, LINE_HEIGHTS_DESC } from '~/components/common/Text';

export const BoxHeading = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: flex-start;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.user.borderColor};
  img {
    border-radius: 50%;
    width: 64px;
    height: 64px;
    object-fit: cover;
  }
`;

export const HeadingInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;

  @media (min-width: 768px) {
    gap: 8px;
    .title {
      font-size: ${FONT_SIZES_DESC.textHeading3};
      line-height: ${LINE_HEIGHTS_DESC.textHeading3};
    }
  }
`;

export const DataBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding-bottom: 12px;
  @media (min-width: 768px) {
    gap: 32px;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
