import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.user.backgroundPageColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxContainer = styled.div<{
  variant: 'user' | 'fixedWidth';
  isUserResponses: boolean;
}>`
  display: flex;
  flex-direction: column;
  padding: 80px 16px 16px;

  gap: 16px;
  background-color: ${({ theme }) => theme.user.backgroundPageColor};
  width: 100%;

  @media (min-width: 768px) {
    max-width: ${({ variant, isUserResponses }) =>
      !isUserResponses && variant === 'user' && '506px'};
    padding: ${({ variant }) => (variant === 'user' ? '96px 0 16px' : '96px 40px 16px')};
    padding: ${({ variant, isUserResponses }) => {
      if (variant === 'user' && !isUserResponses) return '96px 0 16px';
      // if (variant === 'user' && isUserResponses) return '96px 24px 16px';
      return '96px 40px 16px';
    }};
  }

  @media (min-width: 1024px) {
    max-width: ${({ variant, isUserResponses }) => {
      if (variant === 'user' && !isUserResponses) return '606px';
      // if (variant === 'user' && isUserResponses) return '100%';
      return '816px';
    }};
    padding: ${({ isUserResponses }) => (!isUserResponses ? '104px 0 24px' : '104px 24px')};
    gap: 24px;
  }

  @media (min-width: 1280px) {
    max-width: ${({ isUserResponses }) => (!isUserResponses ? '996px' : '100%')};
  }
`;
