import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TitleContainer = styled.div<{ open: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & button {
    transform: ${({ open }) => (open ? 'rotate(90deg)' : 'rotate(180deg)')};
    transition: all 0.6s cubic-bezier(0.2, 0, 0, 1);
  }
`;
export const Title = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;
export const Description = styled.div`
  padding-top: 16px;
  margin-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.user.borderColor};
`;
export const Emoji = styled.span`
  display: flex;
  margin-top: -3px;
`;
