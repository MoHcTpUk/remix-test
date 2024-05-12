import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 24px;
  background-color: ${({ theme }) => theme.search.backgroundWrapper};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const AvatarBox = styled.div`
  width: 264px;
  height: 264px;
  border-radius: 8px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const InformationBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: space-between;
`;

export const TitlesBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 8px;
`;

export const BoxInfo = styled.div`
  width: 240px;
  height: 120px;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.user.borderColor};
  background-color: ${({ theme }) => theme.buttons.chips.backgroundColor};
`;

export const DescriptionBox = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DescriptionInfoBox = styled.div`
  border-radius: 8px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.user.borderColor};
  padding: 16px;
`;
