import styled from 'styled-components';

export const WrapperHeader = styled.div<{ sticky: boolean; type: string }>`
  width: 100%;
  background-color: ${({ type, theme, sticky }) =>
    type === 'homePage' && !sticky ? 'none' : theme.navbar.wrapperHeaderBackgroundColor};
  display: flex;
  justify-content: center;
  position: ${({ type, sticky }) => {
    if (type === 'homePage' && sticky) return 'fixed';
    return 'absolute';
  }};
  z-index: 10;
  transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);

  & .transparent {
    color: ${({ type, sticky }) => type === 'homePage' && !sticky && '#fff'};
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  width: 100%;
  @media (min-width: 768px) {
    padding: 16px 44px;
  }
  @media (min-width: 1024px) {
    padding: 16px 64px;
  }
  @media (min-width: 1280px) {
    padding: 16px 32px;
  }
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.navbar.logoColor};
    max-width: 99px;
    height: 40px;
    transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
    @media (min-width: 768px) {
      max-width: 118px;
      height: 48px;
    }
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.navbar.hoverColor};
    }
  }
`;

export const BoxText = styled.div<{ lang: string; selectedLang: string }>`
  cursor: pointer;
  white-space: nowrap;
  span:hover {
    color: ${({ theme }) => theme.navbar.hoverColor};
  }
`;

export const MenuLinks = styled.div`
  display: none;
  span {
    padding: 0 8px;
  }
  span:hover {
    color: ${({ theme }) => theme.navbar.textLinkHoverColor};
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 520px;
  }
`;

export const AvatarContainer = styled.button`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    cursor: pointer;
    width: 44px;
    height: 44px;

    img {
      border-radius: 50%;
      width: 44px;
      height: 44px;
      object-fit: cover;
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  @media (min-width: 768px) {
    gap: 34px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  height: 40px;

  @media (min-width: 768px) {
    height: 48px;
  }
`;

export const TranslateBox = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
`;

export const IconButton = styled.button`
  cursor: pointer;
  display: block;
  svg {
    transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
  }
  &:hover {
    svg {
      color: ${({ theme }) => theme.navbar.svgHoverColor};
    }
  }
`;

export const IconButtonBurger = styled.button`
  cursor: pointer;
  display: block;
  svg {
    transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
  }
  &:hover {
    svg {
      color: ${({ theme }) => theme.navbar.svgHoverColor};
    }
  }
  @media (min-width: 1280px) {
    display: none;
  }
`;

export const IconButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  @media (min-width: 768px) {
    gap: 34px;
  }
`;
