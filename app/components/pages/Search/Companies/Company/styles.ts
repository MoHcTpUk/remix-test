import { styled } from 'styled-components';

export const BoxControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.user.borderColor};

  form {
    align-items: center;
    padding-top: 16px;
  }

  @media (min-width: 768px) {
    align-items: flex-end;

    form {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      align-items: flex-end;
    }
  }

  @media (min-width: 1280px) {
    .requestCard {
      justify-content: center;
    }
  }
`;

export const BoxSearchCompany = styled.div`
  gap: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: sticky;
  align-items: center;
  min-height: 100%;
  justify-content: center;
  @media (min-width: 1024px) {
    gap: 24px;
  }
  @media (min-width: 1280px) {
    min-height: 100%;
    position: sticky;
    top: 0;
    /* overflow: hidden; */
    justify-content: flex-start;
  }
`;
