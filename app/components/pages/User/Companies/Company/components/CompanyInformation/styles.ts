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

export const BoxWebsite = styled.div`
  padding: 8px 0;
`;

export const VerificationStatus = styled.div<{ verified?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;

  & > span {
    margin-top: 3px;
    color: ${({ theme, verified }) =>
      verified ? theme.accentTextColor : theme.boxInformation.warning.borderColor};
  }
`;
