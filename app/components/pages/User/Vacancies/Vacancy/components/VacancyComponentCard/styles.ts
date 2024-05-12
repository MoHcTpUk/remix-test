import styled from 'styled-components';

export const BoxPicture = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const Image = styled.img`
  width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 50%;
  @media (min-width: 768px) {
    width: 136px;
    height: 136px;
  }
`;
