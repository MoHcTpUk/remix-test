import {
  FONT_SIZES_DESC,
  LINE_HEIGHTS_DESC,
  styled_components_browser_esm_default
} from "/build/_shared/chunk-L3EPBPPP.js";

// app/components/pages/User/Companies/styles.ts
var BoxHeading = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: flex-start;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.user.borderColor};
  position: relative;

  img {
    border-radius: 50%;
    width: 64px;
    height: 64px;
    object-fit: cover;

    @media (min-width: 768px) {
      width: ${({ variant }) => variant === "bigLogo" ? "104px" : "64px"};
      height: ${({ variant }) => variant === "bigLogo" ? "104px" : "64px"};
    }
  }

  svg {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
var HeadingInformation = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;

  @media (min-width: 768px) {
    gap: 8px;
    .title {
      font-size: ${FONT_SIZES_DESC.textHeading3};
      line-height: ${LINE_HEIGHTS_DESC.textHeading3};
    }
  }
`;
var DataBox = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.user.borderColor};
  @media (min-width: 768px) {
    gap: 32px;
  }
`;
var Field = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
var BoxControl = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;

    form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
`;
var SwitcherBox = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;
var BoxLabel = styled_components_browser_esm_default.div`
  cursor: pointer;
`;
var BoxButtons = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding-top: 16px;
  margin-top: 16px;
  justify-content: center;
  flex-wrap: wrap;

  border-top: 1px solid ${({ theme }) => theme.user.borderColor};

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }

  @media (min-width: 1024px) {
    padding-top: 8px;
    margin: 0;
    border: none;
  }
`;
var Wrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  @media (min-width: 1024px) {
    gap: 24px;
  }
`;

export {
  BoxHeading,
  HeadingInformation,
  DataBox,
  Field,
  BoxControl,
  BoxButtons,
  Wrapper
};
//# sourceMappingURL=/build/_shared/chunk-HCHQXOUO.js.map
