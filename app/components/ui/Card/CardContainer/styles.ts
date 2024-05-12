import styled from 'styled-components';

export const Wrapper = styled.div<{ withGrowingBtn?: boolean }>`
  display: grid;
  grid-template-rows: 1fr;
  gap: 8px;

  & button {
    justify-self: ${({ withGrowingBtn }) => withGrowingBtn && 'end'};
  }
`;
