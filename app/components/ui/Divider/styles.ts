import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
`;
