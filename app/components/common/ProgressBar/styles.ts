import { styled } from 'styled-components';

export const ProgresWrapper = styled.div`
  background-color: ${({ theme }) => theme.pgoressBar.backgroundColor};
  padding: 8px;
  border-radius: 80px;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.pgoressBar.containerColor};
  border-radius: 10px;
  overflow: hidden;
`;

export const Progress = styled.div<{ percent: number }>`
  height: 100%;
  background-color: ${({ theme }) => theme.pgoressBar.aggregateColor};
  width: ${({ percent }) => percent}%;
`;
