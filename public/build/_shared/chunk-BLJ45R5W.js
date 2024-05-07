import {
  Button_default
} from "/build/_shared/chunk-AF6HCNMF.js";
import {
  Box,
  Icon,
  IconEnum,
  Text,
  TextVariantEnum,
  styled_components_browser_esm_default,
  useApp
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/common/Pagination/index.tsx
var import_react = __toESM(require_react());

// app/components/common/Pagination/styles.ts
var BoxPagination = styled_components_browser_esm_default.div`
  width: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  max-width: 920px;
  margin-bottom: 16px;
  flex-direction: row;
  gap: 16px;

  @media (min-width: 1024px) {
    margin-bottom: 24px;
    gap: 24px;
  }
  @media (min-width: 1280px) {
    max-width: 100%;
  }

  .pagination__arrow {
    background-color: ${({ theme }) => theme.pagination.backgroundArrowColor};
  }
`;
var PageButton = styled_components_browser_esm_default.button`
  cursor: ${({ active }) => active ? "auto" : "pointer"};
  transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
  display: flex;
  width: 32px;
  height: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid
    ${({ theme, active }) => active ? theme.pagination.activeBorderColor : theme.pagination.borderColor};
  background-color: ${({ theme, active }) => active && theme.pagination.backgroundActiveColor};

  span {
    color: ${({ active }) => active && "#FFF"};
    margin-top: 2px;
    margin-right: 1px;
  }

  &:hover {
    border: 1px solid
      ${({ theme, active }) => active ? theme.pagination.activeBorderColor : theme.pagination.borderColor};
    background-color: ${({ theme, active }) => active ? theme.pagination.backgroundActiveColor : theme.pagination.backgroundHoverColor};
  }
`;

// app/components/common/Pagination/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Pagination({
  currentPage,
  paginationRange,
  maxPages,
  setCurrentToken,
  setCurrentPage,
  handleSubmit,
  setMaxPageSize,
  maxPageSize,
  widthScreen,
  setCheckChangeSearch,
  checkChangeSearch
}) {
  const {
    theme,
    t
  } = useApp();
  const [initialRendering, setInitialRendering] = (0, import_react.useState)(false);
  const onNext = () => {
    const token = paginationRange?.find((item) => item.page === currentPage + 1)?.token;
    setCurrentPage(+currentPage + 1);
    setCurrentToken(token);
    if (setCheckChangeSearch && checkChangeSearch) {
      setCheckChangeSearch(false);
    }
  };
  const onPrevious = () => {
    const token = paginationRange?.find((item) => item.page === currentPage - 1)?.token;
    setCurrentPage(+currentPage - 1);
    setCurrentToken(token);
    if (setCheckChangeSearch && checkChangeSearch) {
      setCheckChangeSearch(false);
    }
  };
  const handlePageClick = (pageNumber, token) => {
    setCurrentToken(token);
    setCurrentPage(pageNumber);
    if (setCheckChangeSearch && checkChangeSearch) {
      setCheckChangeSearch(false);
    }
  };
  const handleMaxPagesSize = () => {
    setMaxPageSize(+(maxPageSize || 0) + 10);
  };
  (0, import_react.useEffect)(() => {
    if (initialRendering && handleSubmit) {
      if (!checkChangeSearch) {
        handleSubmit(true);
      }
    } else {
      setInitialRendering(true);
    }
  }, [currentPage]);
  (0, import_react.useEffect)(() => {
    if (handleSubmit && maxPageSize && +maxPageSize !== 10) {
      handleSubmit();
    }
  }, [maxPageSize]);
  return maxPages && maxPages > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxPagination, { children: widthScreen && widthScreen < 1280 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "secondary", onClick: handleMaxPagesSize, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:show_more") }, void 0, false, {
    fileName: "app/components/common/Pagination/index.tsx",
    lineNumber: 83,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/common/Pagination/index.tsx",
    lineNumber: 82,
    columnNumber: 44
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "row", gap: "16px", alignItems: "center", children: [
    currentPage !== 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { onlyIcon: true, type: "button", priority: "tertiary", onClick: onPrevious, className: "pagination__arrow", style: {
      cursor: "pointer",
      width: "32px",
      height: "32px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.left, color: theme.accentTextColor }, void 0, false, {
      fileName: "app/components/common/Pagination/index.tsx",
      lineNumber: 90,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/common/Pagination/index.tsx",
      lineNumber: 85,
      columnNumber: 33
    }, this),
    paginationRange?.filter((page, index, array) => array.findIndex((p) => p.page === page.page) === index).map((pageNumber, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Fragment, { children: [
      index === paginationRange.length - 1 && paginationRange[index - 1]?.page !== pageNumber.page - 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: "..." }, void 0, false, {
        fileName: "app/components/common/Pagination/index.tsx",
        lineNumber: 94,
        columnNumber: 118
      }, this),
      pageNumber.token !== "" && // Добавлена проверка на пустой token
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageButton, { onClick: () => handlePageClick(pageNumber.page, pageNumber?.token), disabled: currentPage === pageNumber.page, active: currentPage === pageNumber.page, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: pageNumber.page }, void 0, false, {
        fileName: "app/components/common/Pagination/index.tsx",
        lineNumber: 98,
        columnNumber: 21
      }, this) }, pageNumber.page, false, {
        fileName: "app/components/common/Pagination/index.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      pageNumber.page === 1 && paginationRange[index + 1]?.page !== pageNumber.page + 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: "..." }, void 0, false, {
        fileName: "app/components/common/Pagination/index.tsx",
        lineNumber: 100,
        columnNumber: 103
      }, this)
    ] }, `${pageNumber.page}_${pageNumber.token}`, true, {
      fileName: "app/components/common/Pagination/index.tsx",
      lineNumber: 93,
      columnNumber: 35
    }, this)),
    currentPage !== maxPages && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { onlyIcon: true, type: "button", priority: "tertiary", onClick: onNext, className: "pagination__arrow", style: {
      cursor: "pointer",
      width: "32px",
      height: "32px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.rightLine, color: theme.accentTextColor }, void 0, false, {
      fileName: "app/components/common/Pagination/index.tsx",
      lineNumber: 107,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/common/Pagination/index.tsx",
      lineNumber: 102,
      columnNumber: 40
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Pagination/index.tsx",
    lineNumber: 84,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/components/common/Pagination/index.tsx",
    lineNumber: 81,
    columnNumber: 37
  }, this) : null;
}

export {
  Pagination
};
//# sourceMappingURL=/build/_shared/chunk-BLJ45R5W.js.map
