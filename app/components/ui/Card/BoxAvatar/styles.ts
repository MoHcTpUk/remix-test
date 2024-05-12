import styled from 'styled-components';

export const WrapperForSearch = styled.div`
  img {
    border-radius: 50%;
    width: 64px;
    height: 64px;
    object-fit: cover;

    @media (min-width: 768px) {
      min-width: 104px;
      min-height: 104px;
    }
  }
`;

export const WrapperForUser = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  img {
    width: 96px;
    height: 96px;
    object-fit: cover;
  }
  button {
    align-self: center;
    width: 100%;
  }

  @media (min-width: 768px) {
    img {
      width: 136px;
      height: 136px;
    }
    button {
      width: fit-content;
    }
  }
  @media (min-width: 1024px) {
    gap: 24px;
  }
`;
