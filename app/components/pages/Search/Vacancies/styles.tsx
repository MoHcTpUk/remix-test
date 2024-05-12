import styled from 'styled-components';

import { FONT_SIZES_DESC, LINE_HEIGHTS_DESC } from '~/components/common/Text';

export const BoxHeading = styled.div`
  display: flex;
  width: 100%;
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

export const ButtonHeading = styled.button`
  display: flex;
  flex-direction: column;
  width: 100%;
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

export const DataBox = styled.div<{ variant?: string }>`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: ${({ variant }) => (variant === 'fullCard' ? '4px 0 12px' : '12px 0')};
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
  align-items: center;
  cursor: auto;
  @media (min-width: 768px) {
    form {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      width: 100%;
    }
  }
`;

export const SwitcherBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const BoxLabel = styled.div`
  cursor: pointer;
`;
