import {
  ModalConfirmDelete
} from "/build/_shared/chunk-I66SYKBJ.js";
import {
  ResponseState
} from "/build/_shared/chunk-SIT5KOBR.js";
import {
  SizeCardVariantEnum
} from "/build/_shared/chunk-5HXZ6U7H.js";
import {
  Modal
} from "/build/_shared/chunk-ZQ6IGHYP.js";
import {
  Button_default
} from "/build/_shared/chunk-AF6HCNMF.js";
import {
  Close_default,
  ModalCloseButton,
  VariantModalEnum
} from "/build/_shared/chunk-TSAGNYDI.js";
import {
  Box,
  CLIENT_BASE_URL,
  FONT_SIZES_DESC,
  FONT_WEIGHTS_DESC,
  Icon,
  IconEnum,
  LINE_HEIGHTS_DESC,
  Text,
  TextVariantEnum,
  styled_components_browser_esm_default,
  useApp,
  useScreenWidth
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  Form,
  Link,
  init_esm,
  useLocation,
  useMatches
} from "/build/_shared/chunk-IQJCUQRT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      var nativeCodeString = "[native code]";
      function classNames() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// app/components/entities/ModalShare/index.tsx
var import_react4 = __toESM(require_react());

// node_modules/react-share/es/hocs/createIcon.js
var import_react = __toESM(require_react());
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function createIcon(iconConfig) {
  var Icon2 = function(_a) {
    var bgStyle = _a.bgStyle, borderRadius = _a.borderRadius, iconFillColor = _a.iconFillColor, round = _a.round, size = _a.size, rest = __rest(_a, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
    return import_react.default.createElement(
      "svg",
      __assign({ viewBox: "0 0 64 64", width: size, height: size }, rest),
      round ? import_react.default.createElement("circle", { cx: "32", cy: "32", r: "31", fill: iconConfig.color, style: bgStyle }) : import_react.default.createElement("rect", { width: "64", height: "64", rx: borderRadius, ry: borderRadius, fill: iconConfig.color, style: bgStyle }),
      import_react.default.createElement("path", { d: iconConfig.path, fill: iconFillColor })
    );
  };
  Icon2.defaultProps = {
    bgStyle: {},
    borderRadius: 0,
    iconFillColor: "white",
    size: 64
  };
  return Icon2;
}

// node_modules/react-share/es/utils/objectToGetParams.js
function objectToGetParams(object) {
  var params = Object.entries(object).filter(function(_a) {
    var value = _a[1];
    return value !== void 0 && value !== null;
  }).map(function(_a) {
    var key = _a[0], value = _a[1];
    return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(String(value)));
  });
  return params.length > 0 ? "?".concat(params.join("&")) : "";
}

// node_modules/react-share/es/hocs/createShareButton.js
var import_react3 = __toESM(require_react());

// node_modules/react-share/es/ShareButton.js
var import_react2 = __toESM(require_react());
var import_classnames = __toESM(require_classnames());
var __extends = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __rest2 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var isPromise = function(obj) {
  return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
};
var getBoxPositionOnWindowCenter = function(width, height) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2
  };
};
var getBoxPositionOnScreenCenter = function(width, height) {
  return {
    top: (window.screen.height - height) / 2,
    left: (window.screen.width - width) / 2
  };
};
function windowOpen(url, _a, onClose) {
  var height = _a.height, width = _a.width, configRest = __rest2(_a, ["height", "width"]);
  var config = __assign2({ height, width, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, configRest);
  var shareDialog = window.open(url, "", Object.keys(config).map(function(key) {
    return "".concat(key, "=").concat(config[key]);
  }).join(", "));
  if (onClose) {
    var interval_1 = window.setInterval(function() {
      try {
        if (shareDialog === null || shareDialog.closed) {
          window.clearInterval(interval_1);
          onClose(shareDialog);
        }
      } catch (e) {
        console.error(e);
      }
    }, 1e3);
  }
  return shareDialog;
}
var ShareButton = (
  /** @class */
  function(_super) {
    __extends(ShareButton2, _super);
    function ShareButton2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.openShareDialog = function(link) {
        var _a = _this.props, onShareWindowClose = _a.onShareWindowClose, _b = _a.windowHeight, windowHeight = _b === void 0 ? 400 : _b, _c = _a.windowPosition, windowPosition = _c === void 0 ? "windowCenter" : _c, _d = _a.windowWidth, windowWidth = _d === void 0 ? 550 : _d;
        var windowConfig = __assign2({ height: windowHeight, width: windowWidth }, windowPosition === "windowCenter" ? getBoxPositionOnWindowCenter(windowWidth, windowHeight) : getBoxPositionOnScreenCenter(windowWidth, windowHeight));
        windowOpen(link, windowConfig, onShareWindowClose);
      };
      _this.handleClick = function(event) {
        return __awaiter(_this, void 0, void 0, function() {
          var _a, beforeOnClick, disabled, networkLink, onClick, url, openShareDialogOnClick, opts, link, returnVal;
          return __generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                _a = this.props, beforeOnClick = _a.beforeOnClick, disabled = _a.disabled, networkLink = _a.networkLink, onClick = _a.onClick, url = _a.url, openShareDialogOnClick = _a.openShareDialogOnClick, opts = _a.opts;
                link = networkLink(url, opts);
                if (disabled) {
                  return [
                    2
                    /*return*/
                  ];
                }
                event.preventDefault();
                if (!beforeOnClick)
                  return [3, 2];
                returnVal = beforeOnClick();
                if (!isPromise(returnVal))
                  return [3, 2];
                return [4, returnVal];
              case 1:
                _b.sent();
                _b.label = 2;
              case 2:
                if (openShareDialogOnClick) {
                  this.openShareDialog(link);
                }
                if (onClick) {
                  onClick(event, link);
                }
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      };
      return _this;
    }
    ShareButton2.prototype.render = function() {
      var _a = this.props, beforeOnClick = _a.beforeOnClick, children = _a.children, className = _a.className, disabled = _a.disabled, disabledStyle = _a.disabledStyle, forwardedRef = _a.forwardedRef, networkLink = _a.networkLink, networkName = _a.networkName, onShareWindowClose = _a.onShareWindowClose, openShareDialogOnClick = _a.openShareDialogOnClick, opts = _a.opts, resetButtonStyle = _a.resetButtonStyle, style = _a.style, url = _a.url, windowHeight = _a.windowHeight, windowPosition = _a.windowPosition, windowWidth = _a.windowWidth, rest = __rest2(_a, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]);
      var newClassName = (0, import_classnames.default)("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!disabled,
        disabled: !!disabled
      }, className);
      var newStyle = resetButtonStyle ? __assign2(__assign2({ backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" }, style), disabled && disabledStyle) : __assign2(__assign2({}, style), disabled && disabledStyle);
      return import_react2.default.createElement("button", __assign2({}, rest, { "aria-label": rest["aria-label"] || networkName, className: newClassName, onClick: this.handleClick, ref: forwardedRef, style: newStyle }), children);
    };
    ShareButton2.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: true,
      resetButtonStyle: true
    };
    return ShareButton2;
  }(import_react2.Component)
);
var ShareButton_default = ShareButton;

// node_modules/react-share/es/hocs/createShareButton.js
var __assign3 = function() {
  __assign3 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign3.apply(this, arguments);
};
function createShareButton(networkName, link, optsMap, defaultProps) {
  function CreatedButton(props, ref) {
    var opts = optsMap(props);
    var passedProps = __assign3({}, props);
    var optsKeys = Object.keys(opts);
    optsKeys.forEach(function(key) {
      delete passedProps[key];
    });
    return import_react3.default.createElement(ShareButton_default, __assign3({}, defaultProps, passedProps, { forwardedRef: ref, networkName, networkLink: link, opts: optsMap(props) }));
  }
  CreatedButton.displayName = "ShareButton-".concat(networkName);
  return (0, import_react3.forwardRef)(CreatedButton);
}
var createShareButton_default = createShareButton;

// node_modules/react-share/es/FacebookIcon.js
var FacebookIcon = createIcon({
  color: "#3b5998",
  networkName: "facebook",
  path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
});
var FacebookIcon_default = FacebookIcon;

// node_modules/react-share/es/utils/assert.js
var __extends2 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AssertionError = (
  /** @class */
  function(_super) {
    __extends2(AssertionError2, _super);
    function AssertionError2(message) {
      var _this = _super.call(this, message) || this;
      _this.name = "AssertionError";
      return _this;
    }
    return AssertionError2;
  }(Error)
);
function assert(value, message) {
  if (!value) {
    throw new AssertionError(message);
  }
}

// node_modules/react-share/es/FacebookShareButton.js
function facebookLink(url, _a) {
  var quote = _a.quote, hashtag = _a.hashtag;
  assert(url, "facebook.url");
  return "https://www.facebook.com/sharer/sharer.php" + objectToGetParams({
    u: url,
    quote,
    hashtag
  });
}
var FacebookShareButton = createShareButton_default("facebook", facebookLink, function(props) {
  return {
    quote: props.quote,
    hashtag: props.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
var FacebookShareButton_default = FacebookShareButton;

// node_modules/react-share/es/LinkedinIcon.js
var LinkedinIcon = createIcon({
  color: "#007fb1",
  networkName: "linkedin",
  path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
});
var LinkedinIcon_default = LinkedinIcon;

// node_modules/react-share/es/LinkedinShareButton.js
function linkedinLink(url, _a) {
  var title = _a.title, summary = _a.summary, source = _a.source;
  assert(url, "linkedin.url");
  return "https://linkedin.com/shareArticle" + objectToGetParams({ url, mini: "true", title, summary, source });
}
var LinkedinShareButton = createShareButton_default("linkedin", linkedinLink, function(_a) {
  var title = _a.title, summary = _a.summary, source = _a.source;
  return { title, summary, source };
}, {
  windowWidth: 750,
  windowHeight: 600
});
var LinkedinShareButton_default = LinkedinShareButton;

// node_modules/react-share/es/TwitterIcon.js
var TwitterIcon = createIcon({
  color: "#00aced",
  networkName: "twitter",
  path: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
});
var TwitterIcon_default = TwitterIcon;

// node_modules/react-share/es/TwitterShareButton.js
function twitterLink(url, _a) {
  var title = _a.title, via = _a.via, _b = _a.hashtags, hashtags = _b === void 0 ? [] : _b, _c = _a.related, related = _c === void 0 ? [] : _c;
  assert(url, "twitter.url");
  assert(Array.isArray(hashtags), "twitter.hashtags is not an array");
  assert(Array.isArray(related), "twitter.related is not an array");
  return "https://twitter.com/share" + objectToGetParams({
    url,
    text: title,
    via,
    hashtags: hashtags.length > 0 ? hashtags.join(",") : void 0,
    related: related.length > 0 ? related.join(",") : void 0
  });
}
var TwitterShareButton = createShareButton_default("twitter", twitterLink, function(props) {
  return {
    hashtags: props.hashtags,
    title: props.title,
    via: props.via,
    related: props.related
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
var TwitterShareButton_default = TwitterShareButton;

// app/components/entities/ModalShare/styles.tsx
var BoxContainer = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__BoxContainer",
  componentId: "sc-annfgx-0"
})(["display:flex;flex-direction:column;width:100%;align-items:center;justify-content:center;gap:24px;width:100%;max-width:100%;& button{align-self:center;}@media (min-width:768px){max-width:388px;}@media (min-width:1024px){gap:32px;}"]);
var BoxInput = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__BoxInput",
  componentId: "sc-annfgx-1"
})(["width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center;border-radius:8px;border:1px solid ", ";padding:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:300px;.link{overflow:hidden;white-space:nowrap;}"], ({
  theme
}) => theme.user.borderCustomFieldData);
var BoxIcons = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__BoxIcons",
  componentId: "sc-annfgx-2"
})(["overflow:auto;"]);
var IconsContainer = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__IconsContainer",
  componentId: "sc-annfgx-3"
})(["display:flex;flex-direction:row;overflow:visible;min-width:max-content;gap:8px;"]);

// app/components/entities/ModalShare/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ModalShare({
  link,
  visibility,
  setVisibility
}) {
  const [copied, setCopied] = (0, import_react4.useState)(false);
  const handleCopyLink = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
  };
  const {
    t
  } = useApp();
  (0, import_react4.useEffect)(() => {
    if (!visibility)
      setCopied(false);
  }, [visibility]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal, { visibility, setVisibility, variant: VariantModalEnum.share, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading3, children: t("common:share") }, void 0, false, {
      fileName: "app/components/entities/ModalShare/index.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxIcons, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconsContainer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FacebookShareButton_default, { url: link, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FacebookIcon_default, { size: 52, round: true }, void 0, false, {
        fileName: "app/components/entities/ModalShare/index.tsx",
        lineNumber: 38,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalShare/index.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TwitterShareButton_default, { url: link, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TwitterIcon_default, { size: 52, round: true }, void 0, false, {
        fileName: "app/components/entities/ModalShare/index.tsx",
        lineNumber: 41,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalShare/index.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkedinShareButton_default, { url: link, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkedinIcon_default, { size: 52, round: true }, void 0, false, {
        fileName: "app/components/entities/ModalShare/index.tsx",
        lineNumber: 44,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalShare/index.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/ModalShare/index.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/entities/ModalShare/index.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "row", gap: "12px", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxInput, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "link", variant: TextVariantEnum.textBody2, children: link }, void 0, false, {
        fileName: "app/components/entities/ModalShare/index.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalShare/index.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "primary", onClick: handleCopyLink, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: copied ? t("common:copied") : t("common:copy") }, void 0, false, {
        fileName: "app/components/entities/ModalShare/index.tsx",
        lineNumber: 56,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalShare/index.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/ModalShare/index.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/ModalShare/index.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/entities/ModalShare/index.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}

// app/components/entities/BoxControl/index.tsx
init_esm();
var import_react7 = __toESM(require_react());

// app/components/ui/Card/BoxButtons/styles.ts
var Wrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  @media (min-width: 768px) {
    padding-top: 8px;
  }
`;

// app/components/ui/Card/BoxButtons/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function BoxButtons({
  children,
  variant
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Wrapper, { variant, children }, void 0, false, {
    fileName: "app/components/ui/Card/BoxButtons/index.tsx",
    lineNumber: 12,
    columnNumber: 10
  }, this);
}

// app/components/ui/Card/BoxControl/styles.ts
var Wrapper2 = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: ${({ className, sizeVariant, theme }) => sizeVariant === SizeCardVariantEnum.full ? `1px solid ${theme.user.borderColor}` : "none"};

  form {
    align-items: center;
    padding-top: ${({ className, sizeVariant }) => sizeVariant === SizeCardVariantEnum.full ? "16px" : "0"};
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
    .notAuthenticated {
      justify-content: center;
    }
  }
`;

// app/components/ui/Card/BoxControl/index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function BoxControl({
  children,
  variant,
  pageVariant,
  sizeVariant,
  className,
  style
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Wrapper2, { style, variant, sizeVariant, pageVariant, className, children }, void 0, false, {
    fileName: "app/components/ui/Card/BoxControl/index.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}

// app/components/entities/ModalProvidingContacts/index.tsx
init_esm();

// app/components/entities/ModalProvidingContacts/styles.tsx
var BoxContainer2 = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__BoxContainer",
  componentId: "sc-1nhq0kd-0"
})(["display:flex;flex-direction:column;width:100%;align-items:start;justify-content:center;gap:16px;max-width:100%;@media (min-width:768px){gap:24px;}"]);
var ButtonsControl = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__ButtonsControl",
  componentId: "sc-1nhq0kd-1"
})(["display:flex;flex-direction:column;align-items:center;justify-content:flex-end;width:100%;gap:16px;& form{width:100%;}@media (min-width:768px){flex-direction:row;& form{width:fit-content;}}"]);
var TextWrapper = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__TextWrapper",
  componentId: "sc-1nhq0kd-2"
})(["padding:8px 0;"]);
var HeaderWrapper = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__HeaderWrapper",
  componentId: "sc-1nhq0kd-3"
})(["display:flex;flex-direction:row;"]);
var TitleWrapper = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__TitleWrapper",
  componentId: "sc-1nhq0kd-4"
})(["display:flex;align-items:center;width:100%;padding-top:8px;@media (min-width:768px){align-items:flex-start;& span{font-size:", ";font-weight:", ";line-height:", ";}}"], FONT_SIZES_DESC[TextVariantEnum.textHeading3], FONT_WEIGHTS_DESC[TextVariantEnum.textHeading3], LINE_HEIGHTS_DESC[TextVariantEnum.textHeading3]);

// app/components/entities/ModalProvidingContacts/index.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function ModalProvidingContacts({
  visibility,
  setVisibility,
  responseId
}) {
  const {
    t,
    theme
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Modal, { visibility, setVisibility, variant: VariantModalEnum.providingContacts, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BoxContainer2, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HeaderWrapper, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TitleWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, children: t("user:providing_contacts") }, void 0, false, {
        fileName: "app/components/entities/ModalProvidingContacts/index.tsx",
        lineNumber: 28,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalProvidingContacts/index.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ModalCloseButton, { type: "button", onClick: () => setVisibility(!visibility), variant: "withHeader", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Close_default, { color: theme.modal.svgColor }, void 0, false, {
        fileName: "app/components/entities/ModalProvidingContacts/index.tsx",
        lineNumber: 31,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalProvidingContacts/index.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/ModalProvidingContacts/index.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TextWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, children: t("user:give_access_to_your_contacts_to_the_user_so_that_he_she_has_the_opportunity_to_contact_you") }, void 0, false, {
      fileName: "app/components/entities/ModalProvidingContacts/index.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/entities/ModalProvidingContacts/index.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ButtonsControl, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { priority: "secondary", onClick: () => setVisibility(false), className: "growingButton", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:cancel") }, void 0, false, {
        fileName: "app/components/entities/ModalProvidingContacts/index.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalProvidingContacts/index.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form, { method: "PATCH", preventScrollReset: true, style: {
        width: "100%"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { priority: "primary", name: "responseId", value: responseId, type: "submit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:send_contacts") }, void 0, false, {
        fileName: "app/components/entities/ModalProvidingContacts/index.tsx",
        lineNumber: 50,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalProvidingContacts/index.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalProvidingContacts/index.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/ModalProvidingContacts/index.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/ModalProvidingContacts/index.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/entities/ModalProvidingContacts/index.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}

// app/components/entities/BoxControl/index.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function BoxControlContainer({
  id,
  variant,
  stateResponse,
  typeResponse,
  // isRequest,
  typeCard,
  typeEntity,
  handleRequest,
  style,
  responseId,
  responseAction,
  company
}) {
  const {
    theme,
    t,
    userContext
  } = useApp();
  const widthScreen = useScreenWidth();
  const location = useLocation();
  const [visibleShare, setVisibleShare] = (0, import_react7.useState)(false);
  const [visibleProvidingContactsModal, setVisibleProvidingContactsModal] = (0, import_react7.useState)(false);
  const [linkShare, setLinkShare] = (0, import_react7.useState)("");
  const [visibleDelete, setVisibleDelete] = (0, import_react7.useState)(false);
  const [deleteSelectedId] = (0, import_react7.useState)("");
  const matches = useMatches();
  const searchVacancyMatches = matches.some((m) => m.id === "routes/search/vacancy");
  const searchResumeMatches = matches.some((m) => m.id === "routes/search/resume");
  const searchCompanyMatches = matches.some((m) => m.id === "routes/search/company");
  const handleClickShare = (id2) => {
    setLinkShare(id2 || "");
    setVisibleShare(true);
  };
  const handleProvidingContacts = () => {
    setVisibleProvidingContactsModal(true);
  };
  (0, import_react7.useEffect)(() => {
    if (responseAction === true || responseAction === false) {
      setVisibleProvidingContactsModal(false);
    }
  }, [responseAction]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BoxControl, { style, sizeVariant: typeCard, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form, { className: widthScreen < 768 || widthScreen >= 1280 && !userContext?.user?.isAuthenticated && (searchVacancyMatches || searchResumeMatches || searchCompanyMatches) && typeCard === "full" ? "notAuthenticated" : "", children: [
      variant === "response" && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BoxButtons, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { type: "button", className: "icon", priority: "secondary", onlyIcon: true, onClick: () => handleClickShare && handleClickShare(id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { name: IconEnum.share, color: theme.user.iconColor }, void 0, false, {
          fileName: "app/components/entities/BoxControl/index.tsx",
          lineNumber: 103,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/entities/BoxControl/index.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: `/search/${typeEntity || ""}/${id || ""}`, target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { className: "icon", priority: "secondary", onlyIcon: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { name: IconEnum.view, color: theme.user.iconColor }, void 0, false, {
          fileName: "app/components/entities/BoxControl/index.tsx",
          lineNumber: 110,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/entities/BoxControl/index.tsx",
          lineNumber: 109,
          columnNumber: 15
        }, this) }, id, false, {
          fileName: "app/components/entities/BoxControl/index.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, this),
        typeResponse && typeResponse !== "REQUEST" && (widthScreen < 1280 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { priority: "primary", disabled: stateResponse === ResponseState.CONTACT_SENT || stateResponse === ResponseState.APPROVED_AND_VIEWED || stateResponse === ResponseState.APPROVED, onClick: handleProvidingContacts, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:send_contacts") }, void 0, false, {
          fileName: "app/components/entities/BoxControl/index.tsx",
          lineNumber: 114,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/entities/BoxControl/index.tsx",
          lineNumber: 113,
          columnNumber: 82
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { onClick: handleProvidingContacts, priority: "primary", disabled: stateResponse === ResponseState.CONTACT_SENT || stateResponse === ResponseState.APPROVED_AND_VIEWED || stateResponse === ResponseState.APPROVED, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:send_contacts") }, void 0, false, {
          fileName: "app/components/entities/BoxControl/index.tsx",
          lineNumber: 116,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/entities/BoxControl/index.tsx",
          lineNumber: 115,
          columnNumber: 29
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ModalProvidingContacts, { visibility: visibleProvidingContactsModal, setVisibility: setVisibleProvidingContactsModal, responseId }, void 0, false, {
          fileName: "app/components/entities/BoxControl/index.tsx",
          lineNumber: 118,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/BoxControl/index.tsx",
        lineNumber: 78,
        columnNumber: 36
      }, this),
      variant === "search" && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BoxButtons, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { className: "icon", priority: "secondary", onlyIcon: true, onClick: () => handleClickShare(id || ""), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { name: IconEnum.share, color: theme.user.iconColor }, void 0, false, {
          fileName: "app/components/entities/BoxControl/index.tsx",
          lineNumber: 125,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/entities/BoxControl/index.tsx",
          lineNumber: 124,
          columnNumber: 13
        }, this),
        typeCard === "full" && typeEntity !== "company" && userContext?.user?.isAuthenticated && (widthScreen < 1280 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          Link,
          {
            to: `/search/${typeEntity || ""}/${id || ""}/request`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { priority: "primary", disabled: stateResponse === "CONTACT_SENT", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:send_request") }, void 0, false, {
              fileName: "app/components/entities/BoxControl/index.tsx",
              lineNumber: 134,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/entities/BoxControl/index.tsx",
              lineNumber: 133,
              columnNumber: 19
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/entities/BoxControl/index.tsx",
            lineNumber: 127,
            columnNumber: 125
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { onClick: handleRequest, priority: "primary", disabled: stateResponse === "CONTACT_SENT", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:send_request") }, void 0, false, {
          fileName: "app/components/entities/BoxControl/index.tsx",
          lineNumber: 137,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/entities/BoxControl/index.tsx",
          lineNumber: 136,
          columnNumber: 27
        }, this)),
        typeCard === "full" && typeEntity === "company" && userContext?.user?.isAuthenticated && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: `/search/${typeEntity || ""}/${id || ""}/vacancy`, target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { priority: "primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:show_all_vacancies") }, void 0, false, {
          fileName: "app/components/entities/BoxControl/index.tsx",
          lineNumber: 142,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/entities/BoxControl/index.tsx",
          lineNumber: 141,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/entities/BoxControl/index.tsx",
          lineNumber: 140,
          columnNumber: 103
        }, this),
        typeCard === "part" && typeEntity !== "company" && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: `/search/${typeEntity || ""}/${id || ""}`, target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { className: "icon", priority: "secondary", onlyIcon: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { name: IconEnum.view, color: theme.user.iconColor }, void 0, false, {
          fileName: "app/components/entities/BoxControl/index.tsx",
          lineNumber: 149,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/entities/BoxControl/index.tsx",
          lineNumber: 148,
          columnNumber: 19
        }, this) }, id, false, {
          fileName: "app/components/entities/BoxControl/index.tsx",
          lineNumber: 147,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/entities/BoxControl/index.tsx",
          lineNumber: 146,
          columnNumber: 65
        }, this),
        typeCard === "part" && typeEntity === "company" && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: id || "#", target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { className: "icon", priority: "secondary", onlyIcon: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { name: IconEnum.view, color: theme.user.iconColor }, void 0, false, {
            fileName: "app/components/entities/BoxControl/index.tsx",
            lineNumber: 174,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/entities/BoxControl/index.tsx",
            lineNumber: 173,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/entities/BoxControl/index.tsx",
            lineNumber: 172,
            columnNumber: 17
          }, this),
          company?.number_of_vacancies !== 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: `${company?.id || ""}/vacancy`, target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { priority: "primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:show_vacancies") }, void 0, false, {
            fileName: "app/components/entities/BoxControl/index.tsx",
            lineNumber: 179,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/components/entities/BoxControl/index.tsx",
            lineNumber: 178,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/entities/BoxControl/index.tsx",
            lineNumber: 177,
            columnNumber: 56
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/entities/BoxControl/index.tsx",
          lineNumber: 171,
          columnNumber: 65
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/BoxControl/index.tsx",
        lineNumber: 120,
        columnNumber: 34
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/BoxControl/index.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ModalShare, { link: `${CLIENT_BASE_URL}${location.pathname}/${linkShare}`, visibility: visibleShare, setVisibility: setVisibleShare }, void 0, false, {
      fileName: "app/components/entities/BoxControl/index.tsx",
      lineNumber: 185,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ModalConfirmDelete, { id: deleteSelectedId, visibility: visibleDelete, setVisibility: setVisibleDelete }, void 0, false, {
      fileName: "app/components/entities/BoxControl/index.tsx",
      lineNumber: 186,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/BoxControl/index.tsx",
    lineNumber: 76,
    columnNumber: 10
  }, this);
}

export {
  ModalShare,
  BoxControlContainer
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=/build/_shared/chunk-JTDZABLX.js.map
