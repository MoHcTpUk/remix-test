import styled from 'styled-components';

export const SectionInnerContaier = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    flex-direction: column-reverse;
  }
`;
