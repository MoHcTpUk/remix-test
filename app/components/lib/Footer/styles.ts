import styled from 'styled-components';

export const WrapperFooter = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.footer.wrapperHeaderBackgroundColor};
  display: flex;
  justify-content: center;
`;

export const ContainerFooter = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  padding: 42px 16px;
  width: 100%;
  gap: 18px;
  max-width: 1200px;
  border-top: 1px solid ${({ theme }) => theme.footer.borderColor};
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px;
  row-gap: 18px;

  @media (min-width: 768px) {
    justify-content: flex-start;
    span {
      font-size: 18px;
      line-height: 27px;
    }
  }
`;

export const LinkItem = styled.div`
  cursor: pointer;
  span:hover {
    color: ${({ theme }) => theme.footer.linkSpanColor};
  }
  @media (min-width: 1024px) {
    span {
      color: ${({ theme }) => theme.footer.linkSpanColorMedia1024};
    }
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 36px;

  img {
    width: 20px;
    transition: all 0.15s ease-in;
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
    gap: 48px;
  }

  @media (min-width: 1024px) {
    position: absolute;
    right: 16px;
    margin-top: 4px;
  }
`;

export const SosialImg = styled.div`
  cursor: pointer;
  img:hover {
    transform: scale(1.05);
  }
`;

export const BoxCopiright = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
  @media (min-width: 1024) {
    justify-content: flex-start;
    span {
      font-size: 16px;
      color: ${({ theme }) => theme.footer.boxCopirightSpanColorMedia1024};
    }
  }
`;
