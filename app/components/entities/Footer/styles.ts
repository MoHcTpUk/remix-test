import { styled } from 'styled-components';

export const WrapperFooter = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.footer.wrapperHeaderBackgroundColor};
  display: flex;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.footer.borderColor};
`;

export const ContainerFooter = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 60px;
  width: 100%;
  gap: 38px;
  max-width: 1200px;
  @media (min-width: 768px) {
    padding: 48px 120px;
    gap: 22px;
  }
  @media (min-width: 1280px) {
    padding: 44px 0 52px;
    gap: 28px;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  row-gap: 16px;

  @media (min-width: 1280px) {
    justify-content: flex-start;
    gap: 48px;
    span {
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
  gap: 24px;

  img {
    width: 20px;
    transition: all 0.15s ease-in;
  }

  @media (min-width: 1280px) {
    position: absolute;
    right: 0;
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
  text-align: center;

  @media (min-width: 1280px) {
    justify-content: flex-start;
    text-align: flex-start;
    span {
      color: ${({ theme }) => theme.footer.boxCopirightSpanColorMedia1024};
    }
  }
`;
