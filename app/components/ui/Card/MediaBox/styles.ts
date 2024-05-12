import styled from 'styled-components';

export const Wrapper = styled.div<{ variant?: string }>`
  display: ${({ variant }) => (variant === 'mobile' ? 'flex' : 'none')};
  flex-direction: ${({ variant }) => variant === 'mobile' && 'column'};
  width: ${({ variant }) => variant === 'mobile' && '100%'};

  @media (min-width: 1280px) {
    display: ${({ variant }) => (variant === 'mobile' ? 'none' : 'flex')};
    flex-direction: ${({ variant }) => variant === 'desktop' && 'column'};
    width: ${({ variant }) => variant === 'desktop' && '100%'};
  }
`;
