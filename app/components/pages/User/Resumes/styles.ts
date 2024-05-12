import { styled } from 'styled-components';

import { FONT_SIZES_DESC, LINE_HEIGHTS_DESC } from '~/components/common/Text';

export const BoxHeading = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: flex-start;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.user.borderColor};
  position: relative;
  img {
    border-radius: 50%;
    width: 64px;
    height: 64px;
    object-fit: cover;
  }
  svg {
    position: absolute;
    top: 0;
    right: 0;
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
  border-bottom: 1px solid ${({ theme }) => theme.user.borderColor};
  @media (min-width: 768px) {
    gap: 32px;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const BoxControl = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    form {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
`;

export const SwitcherBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BoxLabel = styled.div`
  cursor: pointer;
`;

export const BoxButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding-top: 16px;
  margin-top: 16px;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.user.borderColor};
  @media (min-width: 768px) {
    padding-top: 8px;
    margin: 0;
    border: none;
  }
`;
