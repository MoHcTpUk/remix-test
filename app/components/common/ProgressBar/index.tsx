import React from 'react';

import { Progress, ProgressBarContainer, ProgresWrapper } from './styles';

export type ProgressBarProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  percent?: string;
};

function ProgressBar({ percent = '0' }: ProgressBarProps) {
  return (
    <ProgresWrapper>
      <ProgressBarContainer>
        <Progress percent={+percent} />
      </ProgressBarContainer>
    </ProgresWrapper>
  );
}

export default ProgressBar;
