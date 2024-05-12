import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const Image = styled.div`
  background: ${({ theme }) => theme.сards.imageBackground};
  min-width: 100%;
  height: 100%;
  display: flex;
  border-radius: 4px;

  img {
    width: 100%;
    height: 180px;
    border-radius: 4px;
  }

  @media (min-width: 768px) {
    min-width: 180px;

    img {
      width: 180px;
      height: 180px;
      border-radius: 8px;
    }
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 16px;
    height: 180px;
  }

  .cardTitle {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 4;

    @media (min-width: 768px) {
      -webkit-line-clamp: 3;
    }
    @media (min-width: 1024px) {
      -webkit-line-clamp: 3;
    }
    @media (min-width: 1280px) {
      -webkit-line-clamp: 2;
    }
  }
  .cardText {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;

    @media (min-width: 768px) {
      flex: none;
      max-height: calc(5 * 24px);
      -webkit-line-clamp: unset;
    }
  }
`;
