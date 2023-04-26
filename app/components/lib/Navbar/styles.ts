import styled from 'styled-components';

export const WrapperHeader = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.navbar.wrapperHeaderBackgroundColor};
  display: flex;
  justify-content: center;
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 22px 20px;
  width: 100%;
  @media (min-width: 1024px) {
    padding: 22px 40px;
  }
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
  svg {
    max-width: 99px;
    height: 40px;
    transition: all 0.15s ease-in;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.navbar.hoverColor};
    }
  }
`;

export const BoxText = styled.div<{ lang: string; selectedLang: string }>`
  cursor: pointer;
  span:hover {
    color: ${({ lang, selectedLang, theme }) =>
      lang !== selectedLang ? theme.navbar.hoverColor : theme.navbar.noHoverColor};
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

export const TranslateBox = styled.div`
  flex-direction: row;
  align-items: center;
  gap: 16px;
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const IconButton = styled.button`
  cursor: pointer;
  transition: all 0.15s ease-in;
  &:hover {
    svg {
      color: ${({ theme }) => theme.navbar.hoverColor};
    }
  }
`;

export const IconButtons = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 38px;
  }
`;
