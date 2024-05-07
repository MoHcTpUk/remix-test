import {
  init_es,
  init_esm,
  useFetcher,
  useLocation,
  useMatches,
  useNavigate,
  useTranslation
} from "/build/_shared/chunk-IQJCUQRT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_SERVER_CONTEXT_TYPE:
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment2 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        function isSuspenseList(object) {
          return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment2;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.SuspenseList = SuspenseList;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isSuspenseList = isSuspenseList;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/shallowequal/index.js
var require_shallowequal = __commonJS({
  "node_modules/shallowequal/index.js"(exports, module) {
    module.exports = function shallowEqual(objA, objB, compare, compareContext) {
      var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
      if (ret !== void 0) {
        return !!ret;
      }
      if (objA === objB) {
        return true;
      }
      if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
        return false;
      }
      var keysA = Object.keys(objA);
      var keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) {
        return false;
      }
      var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
      for (var idx = 0; idx < keysA.length; idx++) {
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
          return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (ret === false || ret === void 0 && valueA !== valueB) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development2 = __commonJS({
  "node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment2 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment2;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/hoist-non-react-statics/node_modules/react-is/index.js
var require_react_is2 = __commonJS({
  "node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development2();
    }
  }
});

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
    "use strict";
    var reactIs = require_react_is2();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i2 = 0; i2 < keys.length; ++i2) {
          var key = keys[i2];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e2) {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics;
  }
});

// empty-module:~/storages/session.server
var require_session = __commonJS({
  "empty-module:~/storages/session.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:~/storages/userContext.server
var require_userContext = __commonJS({
  "empty-module:~/storages/userContext.server"(exports, module) {
    module.exports = {};
  }
});

// node_modules/styled-components/dist/styled-components.browser.esm.js
var import_react_is = __toESM(require_react_is());
var import_react = __toESM(require_react());
var import_shallowequal = __toESM(require_shallowequal());

// node_modules/@emotion/stylis/dist/stylis.browser.esm.js
function stylis_min(W2) {
  function M2(d2, c2, e2, h, a2) {
    for (var m2 = 0, b2 = 0, v2 = 0, n2 = 0, q2, g2, x2 = 0, K2 = 0, k2, u2 = k2 = q2 = 0, l2 = 0, r2 = 0, I2 = 0, t2 = 0, B3 = e2.length, J2 = B3 - 1, y2, f = "", p = "", F3 = "", G3 = "", C2; l2 < B3; ) {
      g2 = e2.charCodeAt(l2);
      l2 === J2 && 0 !== b2 + n2 + v2 + m2 && (0 !== b2 && (g2 = 47 === b2 ? 10 : 47), n2 = v2 = m2 = 0, B3++, J2++);
      if (0 === b2 + n2 + v2 + m2) {
        if (l2 === J2 && (0 < r2 && (f = f.replace(N2, "")), 0 < f.trim().length)) {
          switch (g2) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f += e2.charAt(l2);
          }
          g2 = 59;
        }
        switch (g2) {
          case 123:
            f = f.trim();
            q2 = f.charCodeAt(0);
            k2 = 1;
            for (t2 = ++l2; l2 < B3; ) {
              switch (g2 = e2.charCodeAt(l2)) {
                case 123:
                  k2++;
                  break;
                case 125:
                  k2--;
                  break;
                case 47:
                  switch (g2 = e2.charCodeAt(l2 + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u2 = l2 + 1; u2 < J2; ++u2) {
                          switch (e2.charCodeAt(u2)) {
                            case 47:
                              if (42 === g2 && 42 === e2.charCodeAt(u2 - 1) && l2 + 2 !== u2) {
                                l2 = u2 + 1;
                                break a;
                              }
                              break;
                            case 10:
                              if (47 === g2) {
                                l2 = u2 + 1;
                                break a;
                              }
                          }
                        }
                        l2 = u2;
                      }
                  }
                  break;
                case 91:
                  g2++;
                case 40:
                  g2++;
                case 34:
                case 39:
                  for (; l2++ < J2 && e2.charCodeAt(l2) !== g2; ) {
                  }
              }
              if (0 === k2)
                break;
              l2++;
            }
            k2 = e2.substring(t2, l2);
            0 === q2 && (q2 = (f = f.replace(ca, "").trim()).charCodeAt(0));
            switch (q2) {
              case 64:
                0 < r2 && (f = f.replace(N2, ""));
                g2 = f.charCodeAt(1);
                switch (g2) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r2 = c2;
                    break;
                  default:
                    r2 = O2;
                }
                k2 = M2(c2, r2, k2, g2, a2 + 1);
                t2 = k2.length;
                0 < A && (r2 = X2(O2, f, I2), C2 = H2(3, k2, r2, c2, D2, z2, t2, g2, a2, h), f = r2.join(""), void 0 !== C2 && 0 === (t2 = (k2 = C2.trim()).length) && (g2 = 0, k2 = ""));
                if (0 < t2)
                  switch (g2) {
                    case 115:
                      f = f.replace(da, ea);
                    case 100:
                    case 109:
                    case 45:
                      k2 = f + "{" + k2 + "}";
                      break;
                    case 107:
                      f = f.replace(fa, "$1 $2");
                      k2 = f + "{" + k2 + "}";
                      k2 = 1 === w2 || 2 === w2 && L2("@" + k2, 3) ? "@-webkit-" + k2 + "@" + k2 : "@" + k2;
                      break;
                    default:
                      k2 = f + k2, 112 === h && (k2 = (p += k2, ""));
                  }
                else
                  k2 = "";
                break;
              default:
                k2 = M2(c2, X2(c2, f, I2), k2, h, a2 + 1);
            }
            F3 += k2;
            k2 = I2 = r2 = u2 = q2 = 0;
            f = "";
            g2 = e2.charCodeAt(++l2);
            break;
          case 125:
          case 59:
            f = (0 < r2 ? f.replace(N2, "") : f).trim();
            if (1 < (t2 = f.length))
              switch (0 === u2 && (q2 = f.charCodeAt(0), 45 === q2 || 96 < q2 && 123 > q2) && (t2 = (f = f.replace(" ", ":")).length), 0 < A && void 0 !== (C2 = H2(1, f, c2, d2, D2, z2, p.length, h, a2, h)) && 0 === (t2 = (f = C2.trim()).length) && (f = "\0\0"), q2 = f.charCodeAt(0), g2 = f.charCodeAt(1), q2) {
                case 0:
                  break;
                case 64:
                  if (105 === g2 || 99 === g2) {
                    G3 += f + e2.charAt(l2);
                    break;
                  }
                default:
                  58 !== f.charCodeAt(t2 - 1) && (p += P(f, q2, g2, f.charCodeAt(2)));
              }
            I2 = r2 = u2 = q2 = 0;
            f = "";
            g2 = e2.charCodeAt(++l2);
        }
      }
      switch (g2) {
        case 13:
        case 10:
          47 === b2 ? b2 = 0 : 0 === 1 + q2 && 107 !== h && 0 < f.length && (r2 = 1, f += "\0");
          0 < A * Y2 && H2(0, f, c2, d2, D2, z2, p.length, h, a2, h);
          z2 = 1;
          D2++;
          break;
        case 59:
        case 125:
          if (0 === b2 + n2 + v2 + m2) {
            z2++;
            break;
          }
        default:
          z2++;
          y2 = e2.charAt(l2);
          switch (g2) {
            case 9:
            case 32:
              if (0 === n2 + m2 + b2)
                switch (x2) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    y2 = "";
                    break;
                  default:
                    32 !== g2 && (y2 = " ");
                }
              break;
            case 0:
              y2 = "\\0";
              break;
            case 12:
              y2 = "\\f";
              break;
            case 11:
              y2 = "\\v";
              break;
            case 38:
              0 === n2 + b2 + m2 && (r2 = I2 = 1, y2 = "\f" + y2);
              break;
            case 108:
              if (0 === n2 + b2 + m2 + E2 && 0 < u2)
                switch (l2 - u2) {
                  case 2:
                    112 === x2 && 58 === e2.charCodeAt(l2 - 3) && (E2 = x2);
                  case 8:
                    111 === K2 && (E2 = K2);
                }
              break;
            case 58:
              0 === n2 + b2 + m2 && (u2 = l2);
              break;
            case 44:
              0 === b2 + v2 + n2 + m2 && (r2 = 1, y2 += "\r");
              break;
            case 34:
            case 39:
              0 === b2 && (n2 = n2 === g2 ? 0 : 0 === n2 ? g2 : n2);
              break;
            case 91:
              0 === n2 + b2 + v2 && m2++;
              break;
            case 93:
              0 === n2 + b2 + v2 && m2--;
              break;
            case 41:
              0 === n2 + b2 + m2 && v2--;
              break;
            case 40:
              if (0 === n2 + b2 + m2) {
                if (0 === q2)
                  switch (2 * x2 + 3 * K2) {
                    case 533:
                      break;
                    default:
                      q2 = 1;
                  }
                v2++;
              }
              break;
            case 64:
              0 === b2 + v2 + n2 + m2 + u2 + k2 && (k2 = 1);
              break;
            case 42:
            case 47:
              if (!(0 < n2 + m2 + v2))
                switch (b2) {
                  case 0:
                    switch (2 * g2 + 3 * e2.charCodeAt(l2 + 1)) {
                      case 235:
                        b2 = 47;
                        break;
                      case 220:
                        t2 = l2, b2 = 42;
                    }
                    break;
                  case 42:
                    47 === g2 && 42 === x2 && t2 + 2 !== l2 && (33 === e2.charCodeAt(t2 + 2) && (p += e2.substring(t2, l2 + 1)), y2 = "", b2 = 0);
                }
          }
          0 === b2 && (f += y2);
      }
      K2 = x2;
      x2 = g2;
      l2++;
    }
    t2 = p.length;
    if (0 < t2) {
      r2 = c2;
      if (0 < A && (C2 = H2(2, p, r2, d2, D2, z2, t2, h, a2, h), void 0 !== C2 && 0 === (p = C2).length))
        return G3 + p + F3;
      p = r2.join(",") + "{" + p + "}";
      if (0 !== w2 * E2) {
        2 !== w2 || L2(p, 2) || (E2 = 0);
        switch (E2) {
          case 111:
            p = p.replace(ha, ":-moz-$1") + p;
            break;
          case 112:
            p = p.replace(Q2, "::-webkit-input-$1") + p.replace(Q2, "::-moz-$1") + p.replace(Q2, ":-ms-input-$1") + p;
        }
        E2 = 0;
      }
    }
    return G3 + p + F3;
  }
  function X2(d2, c2, e2) {
    var h = c2.trim().split(ia);
    c2 = h;
    var a2 = h.length, m2 = d2.length;
    switch (m2) {
      case 0:
      case 1:
        var b2 = 0;
        for (d2 = 0 === m2 ? "" : d2[0] + " "; b2 < a2; ++b2) {
          c2[b2] = Z2(d2, c2[b2], e2).trim();
        }
        break;
      default:
        var v2 = b2 = 0;
        for (c2 = []; b2 < a2; ++b2) {
          for (var n2 = 0; n2 < m2; ++n2) {
            c2[v2++] = Z2(d2[n2] + " ", h[b2], e2).trim();
          }
        }
    }
    return c2;
  }
  function Z2(d2, c2, e2) {
    var h = c2.charCodeAt(0);
    33 > h && (h = (c2 = c2.trim()).charCodeAt(0));
    switch (h) {
      case 38:
        return c2.replace(F2, "$1" + d2.trim());
      case 58:
        return d2.trim() + c2.replace(F2, "$1" + d2.trim());
      default:
        if (0 < 1 * e2 && 0 < c2.indexOf("\f"))
          return c2.replace(F2, (58 === d2.charCodeAt(0) ? "" : "$1") + d2.trim());
    }
    return d2 + c2;
  }
  function P(d2, c2, e2, h) {
    var a2 = d2 + ";", m2 = 2 * c2 + 3 * e2 + 4 * h;
    if (944 === m2) {
      d2 = a2.indexOf(":", 9) + 1;
      var b2 = a2.substring(d2, a2.length - 1).trim();
      b2 = a2.substring(0, d2).trim() + b2 + ";";
      return 1 === w2 || 2 === w2 && L2(b2, 1) ? "-webkit-" + b2 + b2 : b2;
    }
    if (0 === w2 || 2 === w2 && !L2(a2, 1))
      return a2;
    switch (m2) {
      case 1015:
        return 97 === a2.charCodeAt(10) ? "-webkit-" + a2 + a2 : a2;
      case 951:
        return 116 === a2.charCodeAt(3) ? "-webkit-" + a2 + a2 : a2;
      case 963:
        return 110 === a2.charCodeAt(5) ? "-webkit-" + a2 + a2 : a2;
      case 1009:
        if (100 !== a2.charCodeAt(4))
          break;
      case 969:
      case 942:
        return "-webkit-" + a2 + a2;
      case 978:
        return "-webkit-" + a2 + "-moz-" + a2 + a2;
      case 1019:
      case 983:
        return "-webkit-" + a2 + "-moz-" + a2 + "-ms-" + a2 + a2;
      case 883:
        if (45 === a2.charCodeAt(8))
          return "-webkit-" + a2 + a2;
        if (0 < a2.indexOf("image-set(", 11))
          return a2.replace(ja, "$1-webkit-$2") + a2;
        break;
      case 932:
        if (45 === a2.charCodeAt(4))
          switch (a2.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + a2.replace("-grow", "") + "-webkit-" + a2 + "-ms-" + a2.replace("grow", "positive") + a2;
            case 115:
              return "-webkit-" + a2 + "-ms-" + a2.replace("shrink", "negative") + a2;
            case 98:
              return "-webkit-" + a2 + "-ms-" + a2.replace("basis", "preferred-size") + a2;
          }
        return "-webkit-" + a2 + "-ms-" + a2 + a2;
      case 964:
        return "-webkit-" + a2 + "-ms-flex-" + a2 + a2;
      case 1023:
        if (99 !== a2.charCodeAt(8))
          break;
        b2 = a2.substring(a2.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
        return "-webkit-box-pack" + b2 + "-webkit-" + a2 + "-ms-flex-pack" + b2 + a2;
      case 1005:
        return ka.test(a2) ? a2.replace(aa, ":-webkit-") + a2.replace(aa, ":-moz-") + a2 : a2;
      case 1e3:
        b2 = a2.substring(13).trim();
        c2 = b2.indexOf("-") + 1;
        switch (b2.charCodeAt(0) + b2.charCodeAt(c2)) {
          case 226:
            b2 = a2.replace(G2, "tb");
            break;
          case 232:
            b2 = a2.replace(G2, "tb-rl");
            break;
          case 220:
            b2 = a2.replace(G2, "lr");
            break;
          default:
            return a2;
        }
        return "-webkit-" + a2 + "-ms-" + b2 + a2;
      case 1017:
        if (-1 === a2.indexOf("sticky", 9))
          break;
      case 975:
        c2 = (a2 = d2).length - 10;
        b2 = (33 === a2.charCodeAt(c2) ? a2.substring(0, c2) : a2).substring(d2.indexOf(":", 7) + 1).trim();
        switch (m2 = b2.charCodeAt(0) + (b2.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b2.charCodeAt(8))
              break;
          case 115:
            a2 = a2.replace(b2, "-webkit-" + b2) + ";" + a2;
            break;
          case 207:
          case 102:
            a2 = a2.replace(b2, "-webkit-" + (102 < m2 ? "inline-" : "") + "box") + ";" + a2.replace(b2, "-webkit-" + b2) + ";" + a2.replace(b2, "-ms-" + b2 + "box") + ";" + a2;
        }
        return a2 + ";";
      case 938:
        if (45 === a2.charCodeAt(5))
          switch (a2.charCodeAt(6)) {
            case 105:
              return b2 = a2.replace("-items", ""), "-webkit-" + a2 + "-webkit-box-" + b2 + "-ms-flex-" + b2 + a2;
            case 115:
              return "-webkit-" + a2 + "-ms-flex-item-" + a2.replace(ba, "") + a2;
            default:
              return "-webkit-" + a2 + "-ms-flex-line-pack" + a2.replace("align-content", "").replace(ba, "") + a2;
          }
        break;
      case 973:
      case 989:
        if (45 !== a2.charCodeAt(3) || 122 === a2.charCodeAt(4))
          break;
      case 931:
      case 953:
        if (true === la.test(d2))
          return 115 === (b2 = d2.substring(d2.indexOf(":") + 1)).charCodeAt(0) ? P(d2.replace("stretch", "fill-available"), c2, e2, h).replace(":fill-available", ":stretch") : a2.replace(b2, "-webkit-" + b2) + a2.replace(b2, "-moz-" + b2.replace("fill-", "")) + a2;
        break;
      case 962:
        if (a2 = "-webkit-" + a2 + (102 === a2.charCodeAt(5) ? "-ms-" + a2 : "") + a2, 211 === e2 + h && 105 === a2.charCodeAt(13) && 0 < a2.indexOf("transform", 10))
          return a2.substring(0, a2.indexOf(";", 27) + 1).replace(ma, "$1-webkit-$2") + a2;
    }
    return a2;
  }
  function L2(d2, c2) {
    var e2 = d2.indexOf(1 === c2 ? ":" : "{"), h = d2.substring(0, 3 !== c2 ? e2 : 10);
    e2 = d2.substring(e2 + 1, d2.length - 1);
    return R2(2 !== c2 ? h : h.replace(na, "$1"), e2, c2);
  }
  function ea(d2, c2) {
    var e2 = P(c2, c2.charCodeAt(0), c2.charCodeAt(1), c2.charCodeAt(2));
    return e2 !== c2 + ";" ? e2.replace(oa, " or ($1)").substring(4) : "(" + c2 + ")";
  }
  function H2(d2, c2, e2, h, a2, m2, b2, v2, n2, q2) {
    for (var g2 = 0, x2 = c2, w3; g2 < A; ++g2) {
      switch (w3 = S2[g2].call(B2, d2, x2, e2, h, a2, m2, b2, v2, n2, q2)) {
        case void 0:
        case false:
        case true:
        case null:
          break;
        default:
          x2 = w3;
      }
    }
    if (x2 !== c2)
      return x2;
  }
  function T2(d2) {
    switch (d2) {
      case void 0:
      case null:
        A = S2.length = 0;
        break;
      default:
        if ("function" === typeof d2)
          S2[A++] = d2;
        else if ("object" === typeof d2)
          for (var c2 = 0, e2 = d2.length; c2 < e2; ++c2) {
            T2(d2[c2]);
          }
        else
          Y2 = !!d2 | 0;
    }
    return T2;
  }
  function U2(d2) {
    d2 = d2.prefix;
    void 0 !== d2 && (R2 = null, d2 ? "function" !== typeof d2 ? w2 = 1 : (w2 = 2, R2 = d2) : w2 = 0);
    return U2;
  }
  function B2(d2, c2) {
    var e2 = d2;
    33 > e2.charCodeAt(0) && (e2 = e2.trim());
    V2 = e2;
    e2 = [V2];
    if (0 < A) {
      var h = H2(-1, c2, e2, e2, D2, z2, 0, 0, 0, 0);
      void 0 !== h && "string" === typeof h && (c2 = h);
    }
    var a2 = M2(O2, e2, c2, 0, 0);
    0 < A && (h = H2(-2, a2, e2, e2, D2, z2, a2.length, 0, 0, 0), void 0 !== h && (a2 = h));
    V2 = "";
    E2 = 0;
    z2 = D2 = 1;
    return a2;
  }
  var ca = /^\0+/g, N2 = /[\0\r\f]/g, aa = /: */g, ka = /zoo|gra/, ma = /([,: ])(transform)/g, ia = /,\r+?/g, F2 = /([\t\r\n ])*\f?&/g, fa = /@(k\w+)\s*(\S*)\s*/, Q2 = /::(place)/g, ha = /:(read-only)/g, G2 = /[svh]\w+-[tblr]{2}/, da = /\(\s*(.*)\s*\)/g, oa = /([\s\S]*?);/g, ba = /-self|flex-/g, na = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la = /stretch|:\s*\w+\-(?:conte|avail)/, ja = /([^-])(image-set\()/, z2 = 1, D2 = 1, E2 = 0, w2 = 1, O2 = [], S2 = [], A = 0, R2 = null, Y2 = 0, V2 = "";
  B2.use = T2;
  B2.set = U2;
  void 0 !== W2 && U2(W2);
  return B2;
}
var stylis_browser_esm_default = stylis_min;

// node_modules/@emotion/unitless/dist/unitless.browser.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var unitless_browser_esm_default = unitlessKeys;

// node_modules/styled-components/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}

// node_modules/styled-components/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize(
  function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
);

// node_modules/styled-components/dist/styled-components.browser.esm.js
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
function y() {
  return (y = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
var v = function(e2, t2) {
  for (var n2 = [e2[0]], r2 = 0, o2 = t2.length; r2 < o2; r2 += 1)
    n2.push(t2[r2], e2[r2 + 1]);
  return n2;
};
var g = function(t2) {
  return null !== t2 && "object" == typeof t2 && "[object Object]" === (t2.toString ? t2.toString() : Object.prototype.toString.call(t2)) && !(0, import_react_is.typeOf)(t2);
};
var S = Object.freeze([]);
var w = Object.freeze({});
function E(e2) {
  return "function" == typeof e2;
}
function b(e2) {
  return "string" == typeof e2 && e2 || e2.displayName || e2.name || "Component";
}
function _(e2) {
  return e2 && "string" == typeof e2.styledComponentId;
}
var N = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled";
var C = "undefined" != typeof window && "HTMLElement" in window;
var I = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && (void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : true));
var O = true ? { 1: "Cannot create styled-component for component: %s.\n\n", 2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n", 3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n", 4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n", 5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n", 6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n", 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: 'ThemeProvider: Please make your "theme" prop an object.\n\n', 9: "Missing document `<head>`\n\n", 10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n", 11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n", 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n", 14: 'ThemeProvider: "theme" prop is required.\n\n', 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n", 17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n" } : {};
function R() {
  for (var e2 = arguments.length <= 0 ? void 0 : arguments[0], t2 = [], n2 = 1, r2 = arguments.length; n2 < r2; n2 += 1)
    t2.push(n2 < 0 || arguments.length <= n2 ? void 0 : arguments[n2]);
  return t2.forEach(function(t3) {
    e2 = e2.replace(/%[a-z]/, t3);
  }), e2;
}
function D(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  throw false ? new Error("An error occurred. See https://git.io/JUIaE#" + e2 + " for more information." + (n2.length > 0 ? " Args: " + n2.join(", ") : "")) : new Error(R.apply(void 0, [O[e2]].concat(n2)).trim());
}
var j = function() {
  function e2(e3) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e3;
  }
  var t2 = e2.prototype;
  return t2.indexOfGroup = function(e3) {
    for (var t3 = 0, n2 = 0; n2 < e3; n2++)
      t3 += this.groupSizes[n2];
    return t3;
  }, t2.insertRules = function(e3, t3) {
    if (e3 >= this.groupSizes.length) {
      for (var n2 = this.groupSizes, r2 = n2.length, o2 = r2; e3 >= o2; )
        (o2 <<= 1) < 0 && D(16, "" + e3);
      this.groupSizes = new Uint32Array(o2), this.groupSizes.set(n2), this.length = o2;
      for (var s2 = r2; s2 < o2; s2++)
        this.groupSizes[s2] = 0;
    }
    for (var i2 = this.indexOfGroup(e3 + 1), a2 = 0, c2 = t3.length; a2 < c2; a2++)
      this.tag.insertRule(i2, t3[a2]) && (this.groupSizes[e3]++, i2++);
  }, t2.clearGroup = function(e3) {
    if (e3 < this.length) {
      var t3 = this.groupSizes[e3], n2 = this.indexOfGroup(e3), r2 = n2 + t3;
      this.groupSizes[e3] = 0;
      for (var o2 = n2; o2 < r2; o2++)
        this.tag.deleteRule(n2);
    }
  }, t2.getGroup = function(e3) {
    var t3 = "";
    if (e3 >= this.length || 0 === this.groupSizes[e3])
      return t3;
    for (var n2 = this.groupSizes[e3], r2 = this.indexOfGroup(e3), o2 = r2 + n2, s2 = r2; s2 < o2; s2++)
      t3 += this.tag.getRule(s2) + "/*!sc*/\n";
    return t3;
  }, e2;
}();
var T = /* @__PURE__ */ new Map();
var x = /* @__PURE__ */ new Map();
var k = 1;
var V = function(e2) {
  if (T.has(e2))
    return T.get(e2);
  for (; x.has(k); )
    k++;
  var t2 = k++;
  return ((0 | t2) < 0 || t2 > 1 << 30) && D(16, "" + t2), T.set(e2, t2), x.set(t2, e2), t2;
};
var B = function(e2) {
  return x.get(e2);
};
var z = function(e2, t2) {
  t2 >= k && (k = t2 + 1), T.set(e2, t2), x.set(t2, e2);
};
var M = "style[" + N + '][data-styled-version="5.3.11"]';
var G = new RegExp("^" + N + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)');
var L = function(e2, t2, n2) {
  for (var r2, o2 = n2.split(","), s2 = 0, i2 = o2.length; s2 < i2; s2++)
    (r2 = o2[s2]) && e2.registerName(t2, r2);
};
var F = function(e2, t2) {
  for (var n2 = (t2.textContent || "").split("/*!sc*/\n"), r2 = [], o2 = 0, s2 = n2.length; o2 < s2; o2++) {
    var i2 = n2[o2].trim();
    if (i2) {
      var a2 = i2.match(G);
      if (a2) {
        var c2 = 0 | parseInt(a2[1], 10), u2 = a2[2];
        0 !== c2 && (z(u2, c2), L(e2, u2, a2[3]), e2.getTag().insertRules(c2, r2)), r2.length = 0;
      } else
        r2.push(i2);
    }
  }
};
var Y = function() {
  return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
};
var q = function(e2) {
  var t2 = document.head, n2 = e2 || t2, r2 = document.createElement("style"), o2 = function(e3) {
    for (var t3 = e3.childNodes, n3 = t3.length; n3 >= 0; n3--) {
      var r3 = t3[n3];
      if (r3 && 1 === r3.nodeType && r3.hasAttribute(N))
        return r3;
    }
  }(n2), s2 = void 0 !== o2 ? o2.nextSibling : null;
  r2.setAttribute(N, "active"), r2.setAttribute("data-styled-version", "5.3.11");
  var i2 = Y();
  return i2 && r2.setAttribute("nonce", i2), n2.insertBefore(r2, s2), r2;
};
var H = function() {
  function e2(e3) {
    var t3 = this.element = q(e3);
    t3.appendChild(document.createTextNode("")), this.sheet = function(e4) {
      if (e4.sheet)
        return e4.sheet;
      for (var t4 = document.styleSheets, n2 = 0, r2 = t4.length; n2 < r2; n2++) {
        var o2 = t4[n2];
        if (o2.ownerNode === e4)
          return o2;
      }
      D(17);
    }(t3), this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    try {
      return this.sheet.insertRule(t3, e3), this.length++, true;
    } catch (e4) {
      return false;
    }
  }, t2.deleteRule = function(e3) {
    this.sheet.deleteRule(e3), this.length--;
  }, t2.getRule = function(e3) {
    var t3 = this.sheet.cssRules[e3];
    return void 0 !== t3 && "string" == typeof t3.cssText ? t3.cssText : "";
  }, e2;
}();
var $ = function() {
  function e2(e3) {
    var t3 = this.element = q(e3);
    this.nodes = t3.childNodes, this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    if (e3 <= this.length && e3 >= 0) {
      var n2 = document.createTextNode(t3), r2 = this.nodes[e3];
      return this.element.insertBefore(n2, r2 || null), this.length++, true;
    }
    return false;
  }, t2.deleteRule = function(e3) {
    this.element.removeChild(this.nodes[e3]), this.length--;
  }, t2.getRule = function(e3) {
    return e3 < this.length ? this.nodes[e3].textContent : "";
  }, e2;
}();
var W = function() {
  function e2(e3) {
    this.rules = [], this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    return e3 <= this.length && (this.rules.splice(e3, 0, t3), this.length++, true);
  }, t2.deleteRule = function(e3) {
    this.rules.splice(e3, 1), this.length--;
  }, t2.getRule = function(e3) {
    return e3 < this.length ? this.rules[e3] : "";
  }, e2;
}();
var U = C;
var J = { isServer: !C, useCSSOMInjection: !I };
var X = function() {
  function e2(e3, t3, n2) {
    void 0 === e3 && (e3 = w), void 0 === t3 && (t3 = {}), this.options = y({}, J, {}, e3), this.gs = t3, this.names = new Map(n2), this.server = !!e3.isServer, !this.server && C && U && (U = false, function(e4) {
      for (var t4 = document.querySelectorAll(M), n3 = 0, r2 = t4.length; n3 < r2; n3++) {
        var o2 = t4[n3];
        o2 && "active" !== o2.getAttribute(N) && (F(e4, o2), o2.parentNode && o2.parentNode.removeChild(o2));
      }
    }(this));
  }
  e2.registerId = function(e3) {
    return V(e3);
  };
  var t2 = e2.prototype;
  return t2.reconstructWithOptions = function(t3, n2) {
    return void 0 === n2 && (n2 = true), new e2(y({}, this.options, {}, t3), this.gs, n2 && this.names || void 0);
  }, t2.allocateGSInstance = function(e3) {
    return this.gs[e3] = (this.gs[e3] || 0) + 1;
  }, t2.getTag = function() {
    return this.tag || (this.tag = (n2 = (t3 = this.options).isServer, r2 = t3.useCSSOMInjection, o2 = t3.target, e3 = n2 ? new W(o2) : r2 ? new H(o2) : new $(o2), new j(e3)));
    var e3, t3, n2, r2, o2;
  }, t2.hasNameForId = function(e3, t3) {
    return this.names.has(e3) && this.names.get(e3).has(t3);
  }, t2.registerName = function(e3, t3) {
    if (V(e3), this.names.has(e3))
      this.names.get(e3).add(t3);
    else {
      var n2 = /* @__PURE__ */ new Set();
      n2.add(t3), this.names.set(e3, n2);
    }
  }, t2.insertRules = function(e3, t3, n2) {
    this.registerName(e3, t3), this.getTag().insertRules(V(e3), n2);
  }, t2.clearNames = function(e3) {
    this.names.has(e3) && this.names.get(e3).clear();
  }, t2.clearRules = function(e3) {
    this.getTag().clearGroup(V(e3)), this.clearNames(e3);
  }, t2.clearTag = function() {
    this.tag = void 0;
  }, t2.toString = function() {
    return function(e3) {
      for (var t3 = e3.getTag(), n2 = t3.length, r2 = "", o2 = 0; o2 < n2; o2++) {
        var s2 = B(o2);
        if (void 0 !== s2) {
          var i2 = e3.names.get(s2), a2 = t3.getGroup(o2);
          if (i2 && a2 && i2.size) {
            var c2 = N + ".g" + o2 + '[id="' + s2 + '"]', u2 = "";
            void 0 !== i2 && i2.forEach(function(e4) {
              e4.length > 0 && (u2 += e4 + ",");
            }), r2 += "" + a2 + c2 + '{content:"' + u2 + '"}/*!sc*/\n';
          }
        }
      }
      return r2;
    }(this);
  }, e2;
}();
var Z = /(a)(d)/gi;
var K = function(e2) {
  return String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
};
function Q(e2) {
  var t2, n2 = "";
  for (t2 = Math.abs(e2); t2 > 52; t2 = t2 / 52 | 0)
    n2 = K(t2 % 52) + n2;
  return (K(t2 % 52) + n2).replace(Z, "$1-$2");
}
var ee = function(e2, t2) {
  for (var n2 = t2.length; n2; )
    e2 = 33 * e2 ^ t2.charCodeAt(--n2);
  return e2;
};
var te = function(e2) {
  return ee(5381, e2);
};
function ne(e2) {
  for (var t2 = 0; t2 < e2.length; t2 += 1) {
    var n2 = e2[t2];
    if (E(n2) && !_(n2))
      return false;
  }
  return true;
}
var re = te("5.3.11");
var oe = function() {
  function e2(e3, t2, n2) {
    this.rules = e3, this.staticRulesId = "", this.isStatic = false, this.componentId = t2, this.baseHash = ee(re, t2), this.baseStyle = n2, X.registerId(t2);
  }
  return e2.prototype.generateAndInjectStyles = function(e3, t2, n2) {
    var r2 = this.componentId, o2 = [];
    if (this.baseStyle && o2.push(this.baseStyle.generateAndInjectStyles(e3, t2, n2)), this.isStatic && !n2.hash) {
      if (this.staticRulesId && t2.hasNameForId(r2, this.staticRulesId))
        o2.push(this.staticRulesId);
      else {
        var s2 = _e(this.rules, e3, t2, n2).join(""), i2 = Q(ee(this.baseHash, s2) >>> 0);
        if (!t2.hasNameForId(r2, i2)) {
          var a2 = n2(s2, "." + i2, void 0, r2);
          t2.insertRules(r2, i2, a2);
        }
        o2.push(i2), this.staticRulesId = i2;
      }
    } else {
      for (var c2 = this.rules.length, u2 = ee(this.baseHash, n2.hash), l2 = "", d2 = 0; d2 < c2; d2++) {
        var h = this.rules[d2];
        if ("string" == typeof h)
          l2 += h, u2 = ee(u2, h + d2);
        else if (h) {
          var p = _e(h, e3, t2, n2), f = Array.isArray(p) ? p.join("") : p;
          u2 = ee(u2, f + d2), l2 += f;
        }
      }
      if (l2) {
        var m2 = Q(u2 >>> 0);
        if (!t2.hasNameForId(r2, m2)) {
          var y2 = n2(l2, "." + m2, void 0, r2);
          t2.insertRules(r2, m2, y2);
        }
        o2.push(m2);
      }
    }
    return o2.join(" ");
  }, e2;
}();
var se = /^\s*\/\/.*$/gm;
var ie = [":", "[", ".", "#"];
function ae(e2) {
  var t2, n2, r2, o2, s2 = void 0 === e2 ? w : e2, i2 = s2.options, a2 = void 0 === i2 ? w : i2, c2 = s2.plugins, u2 = void 0 === c2 ? S : c2, l2 = new stylis_browser_esm_default(a2), d2 = [], p = function(e3) {
    function t3(t4) {
      if (t4)
        try {
          e3(t4 + "}");
        } catch (e4) {
        }
    }
    return function(n3, r3, o3, s3, i3, a3, c3, u3, l3, d3) {
      switch (n3) {
        case 1:
          if (0 === l3 && 64 === r3.charCodeAt(0))
            return e3(r3 + ";"), "";
          break;
        case 2:
          if (0 === u3)
            return r3 + "/*|*/";
          break;
        case 3:
          switch (u3) {
            case 102:
            case 112:
              return e3(o3[0] + r3), "";
            default:
              return r3 + (0 === d3 ? "/*|*/" : "");
          }
        case -2:
          r3.split("/*|*/}").forEach(t3);
      }
    };
  }(function(e3) {
    d2.push(e3);
  }), f = function(e3, r3, s3) {
    return 0 === r3 && -1 !== ie.indexOf(s3[n2.length]) || s3.match(o2) ? e3 : "." + t2;
  };
  function m2(e3, s3, i3, a3) {
    void 0 === a3 && (a3 = "&");
    var c3 = e3.replace(se, ""), u3 = s3 && i3 ? i3 + " " + s3 + " { " + c3 + " }" : c3;
    return t2 = a3, n2 = s3, r2 = new RegExp("\\" + n2 + "\\b", "g"), o2 = new RegExp("(\\" + n2 + "\\b){2,}"), l2(i3 || !s3 ? "" : s3, u3);
  }
  return l2.use([].concat(u2, [function(e3, t3, o3) {
    2 === e3 && o3.length && o3[0].lastIndexOf(n2) > 0 && (o3[0] = o3[0].replace(r2, f));
  }, p, function(e3) {
    if (-2 === e3) {
      var t3 = d2;
      return d2 = [], t3;
    }
  }])), m2.hash = u2.length ? u2.reduce(function(e3, t3) {
    return t3.name || D(15), ee(e3, t3.name);
  }, 5381).toString() : "", m2;
}
var ce = import_react.default.createContext();
var ue = ce.Consumer;
var le = import_react.default.createContext();
var de = (le.Consumer, new X());
var he = ae();
function pe() {
  return (0, import_react.useContext)(ce) || de;
}
function fe() {
  return (0, import_react.useContext)(le) || he;
}
function me(e2) {
  var t2 = (0, import_react.useState)(e2.stylisPlugins), n2 = t2[0], s2 = t2[1], c2 = pe(), u2 = (0, import_react.useMemo)(function() {
    var t3 = c2;
    return e2.sheet ? t3 = e2.sheet : e2.target && (t3 = t3.reconstructWithOptions({ target: e2.target }, false)), e2.disableCSSOMInjection && (t3 = t3.reconstructWithOptions({ useCSSOMInjection: false })), t3;
  }, [e2.disableCSSOMInjection, e2.sheet, e2.target]), l2 = (0, import_react.useMemo)(function() {
    return ae({ options: { prefix: !e2.disableVendorPrefixes }, plugins: n2 });
  }, [e2.disableVendorPrefixes, n2]);
  return (0, import_react.useEffect)(function() {
    (0, import_shallowequal.default)(n2, e2.stylisPlugins) || s2(e2.stylisPlugins);
  }, [e2.stylisPlugins]), import_react.default.createElement(ce.Provider, { value: u2 }, import_react.default.createElement(le.Provider, { value: l2 }, true ? import_react.default.Children.only(e2.children) : e2.children));
}
var ye = function() {
  function e2(e3, t2) {
    var n2 = this;
    this.inject = function(e4, t3) {
      void 0 === t3 && (t3 = he);
      var r2 = n2.name + t3.hash;
      e4.hasNameForId(n2.id, r2) || e4.insertRules(n2.id, r2, t3(n2.rules, r2, "@keyframes"));
    }, this.toString = function() {
      return D(12, String(n2.name));
    }, this.name = e3, this.id = "sc-keyframes-" + e3, this.rules = t2;
  }
  return e2.prototype.getName = function(e3) {
    return void 0 === e3 && (e3 = he), this.name + e3.hash;
  }, e2;
}();
var ve = /([A-Z])/;
var ge = /([A-Z])/g;
var Se = /^ms-/;
var we = function(e2) {
  return "-" + e2.toLowerCase();
};
function Ee(e2) {
  return ve.test(e2) ? e2.replace(ge, we).replace(Se, "-ms-") : e2;
}
var be = function(e2) {
  return null == e2 || false === e2 || "" === e2;
};
function _e(e2, n2, r2, o2) {
  if (Array.isArray(e2)) {
    for (var s2, i2 = [], a2 = 0, c2 = e2.length; a2 < c2; a2 += 1)
      "" !== (s2 = _e(e2[a2], n2, r2, o2)) && (Array.isArray(s2) ? i2.push.apply(i2, s2) : i2.push(s2));
    return i2;
  }
  if (be(e2))
    return "";
  if (_(e2))
    return "." + e2.styledComponentId;
  if (E(e2)) {
    if ("function" != typeof (l2 = e2) || l2.prototype && l2.prototype.isReactComponent || !n2)
      return e2;
    var u2 = e2(n2);
    return (0, import_react_is.isElement)(u2) && console.warn(b(e2) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), _e(u2, n2, r2, o2);
  }
  var l2;
  return e2 instanceof ye ? r2 ? (e2.inject(r2, o2), e2.getName(o2)) : e2 : g(e2) ? function e3(t2, n3) {
    var r3, o3, s3 = [];
    for (var i3 in t2)
      t2.hasOwnProperty(i3) && !be(t2[i3]) && (Array.isArray(t2[i3]) && t2[i3].isCss || E(t2[i3]) ? s3.push(Ee(i3) + ":", t2[i3], ";") : g(t2[i3]) ? s3.push.apply(s3, e3(t2[i3], i3)) : s3.push(Ee(i3) + ": " + (r3 = i3, null == (o3 = t2[i3]) || "boolean" == typeof o3 || "" === o3 ? "" : "number" != typeof o3 || 0 === o3 || r3 in unitless_browser_esm_default || r3.startsWith("--") ? String(o3).trim() : o3 + "px") + ";"));
    return n3 ? [n3 + " {"].concat(s3, ["}"]) : s3;
  }(e2) : e2.toString();
}
var Ne = function(e2) {
  return Array.isArray(e2) && (e2.isCss = true), e2;
};
function Ae(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  return E(e2) || g(e2) ? Ne(_e(v(S, [e2].concat(n2)))) : 0 === n2.length && 1 === e2.length && "string" == typeof e2[0] ? e2 : Ne(_e(v(e2, n2)));
}
var Ce = /invalid hook call/i;
var Ie = /* @__PURE__ */ new Set();
var Pe = function(e2, t2) {
  if (true) {
    var n2 = "The component " + e2 + (t2 ? ' with the id of "' + t2 + '"' : "") + " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.", r2 = console.error;
    try {
      var o2 = true;
      console.error = function(e3) {
        if (Ce.test(e3))
          o2 = false, Ie.delete(n2);
        else {
          for (var t3 = arguments.length, s2 = new Array(t3 > 1 ? t3 - 1 : 0), i2 = 1; i2 < t3; i2++)
            s2[i2 - 1] = arguments[i2];
          r2.apply(void 0, [e3].concat(s2));
        }
      }, (0, import_react.useRef)(), o2 && !Ie.has(n2) && (console.warn(n2), Ie.add(n2));
    } catch (e3) {
      Ce.test(e3.message) && Ie.delete(n2);
    } finally {
      console.error = r2;
    }
  }
};
var Oe = function(e2, t2, n2) {
  return void 0 === n2 && (n2 = w), e2.theme !== n2.theme && e2.theme || t2 || n2.theme;
};
var Re = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var De = /(^-|-$)/g;
function je(e2) {
  return e2.replace(Re, "-").replace(De, "");
}
var Te = function(e2) {
  return Q(te(e2) >>> 0);
};
function xe(e2) {
  return "string" == typeof e2 && e2.charAt(0) === e2.charAt(0).toLowerCase();
}
var ke = function(e2) {
  return "function" == typeof e2 || "object" == typeof e2 && null !== e2 && !Array.isArray(e2);
};
var Ve = function(e2) {
  return "__proto__" !== e2 && "constructor" !== e2 && "prototype" !== e2;
};
function Be(e2, t2, n2) {
  var r2 = e2[n2];
  ke(t2) && ke(r2) ? ze(r2, t2) : e2[n2] = t2;
}
function ze(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  for (var o2 = 0, s2 = n2; o2 < s2.length; o2++) {
    var i2 = s2[o2];
    if (ke(i2))
      for (var a2 in i2)
        Ve(a2) && Be(e2, i2[a2], a2);
  }
  return e2;
}
var Me = import_react.default.createContext();
var Ge = Me.Consumer;
function Le(e2) {
  var t2 = (0, import_react.useContext)(Me), n2 = (0, import_react.useMemo)(function() {
    return function(e3, t3) {
      if (!e3)
        return D(14);
      if (E(e3)) {
        var n3 = e3(t3);
        return null !== n3 && !Array.isArray(n3) && "object" == typeof n3 ? n3 : D(7);
      }
      return Array.isArray(e3) || "object" != typeof e3 ? D(8) : t3 ? y({}, t3, {}, e3) : e3;
    }(e2.theme, t2);
  }, [e2.theme, t2]);
  return e2.children ? import_react.default.createElement(Me.Provider, { value: n2 }, e2.children) : null;
}
var Fe = {};
function Ye(e2, t2, n2) {
  var o2 = _(e2), i2 = !xe(e2), a2 = t2.attrs, c2 = void 0 === a2 ? S : a2, l2 = t2.componentId, d2 = void 0 === l2 ? function(e3, t3) {
    var n3 = "string" != typeof e3 ? "sc" : je(e3);
    Fe[n3] = (Fe[n3] || 0) + 1;
    var r2 = n3 + "-" + Te("5.3.11" + n3 + Fe[n3]);
    return t3 ? t3 + "-" + r2 : r2;
  }(t2.displayName, t2.parentComponentId) : l2, h = t2.displayName, p = void 0 === h ? function(e3) {
    return xe(e3) ? "styled." + e3 : "Styled(" + b(e3) + ")";
  }(e2) : h, v2 = t2.displayName && t2.componentId ? je(t2.displayName) + "-" + t2.componentId : t2.componentId || d2, g2 = o2 && e2.attrs ? Array.prototype.concat(e2.attrs, c2).filter(Boolean) : c2, N2 = t2.shouldForwardProp;
  o2 && e2.shouldForwardProp && (N2 = t2.shouldForwardProp ? function(n3, r2, o3) {
    return e2.shouldForwardProp(n3, r2, o3) && t2.shouldForwardProp(n3, r2, o3);
  } : e2.shouldForwardProp);
  var A, C2 = new oe(n2, v2, o2 ? e2.componentStyle : void 0), I2 = C2.isStatic && 0 === c2.length, P = function(e3, t3) {
    return function(e4, t4, n3, r2) {
      var o3 = e4.attrs, i3 = e4.componentStyle, a3 = e4.defaultProps, c3 = e4.foldedComponentIds, l3 = e4.shouldForwardProp, d3 = e4.styledComponentId, h2 = e4.target, p2 = function(e5, t5, n4) {
        void 0 === e5 && (e5 = w);
        var r3 = y({}, t5, { theme: e5 }), o4 = {};
        return n4.forEach(function(e6) {
          var t6, n5, s2, i4 = e6;
          for (t6 in E(i4) && (i4 = i4(r3)), i4)
            r3[t6] = o4[t6] = "className" === t6 ? (n5 = o4[t6], s2 = i4[t6], n5 && s2 ? n5 + " " + s2 : n5 || s2) : i4[t6];
        }), [r3, o4];
      }(Oe(t4, (0, import_react.useContext)(Me), a3) || w, t4, o3), m2 = p2[0], v3 = p2[1], g3 = function(e5, t5, n4, r3) {
        var o4 = pe(), s2 = fe(), i4 = t5 ? e5.generateAndInjectStyles(w, o4, s2) : e5.generateAndInjectStyles(n4, o4, s2);
        return !t5 && r3 && r3(i4), i4;
      }(i3, r2, m2, true ? e4.warnTooManyClasses : void 0), S2 = n3, b2 = v3.$as || t4.$as || v3.as || t4.as || h2, _2 = xe(b2), N3 = v3 !== t4 ? y({}, t4, {}, v3) : t4, A2 = {};
      for (var C3 in N3)
        "$" !== C3[0] && "as" !== C3 && ("forwardedAs" === C3 ? A2.as = N3[C3] : (l3 ? l3(C3, isPropValid, b2) : !_2 || isPropValid(C3)) && (A2[C3] = N3[C3]));
      return t4.style && v3.style !== t4.style && (A2.style = y({}, t4.style, {}, v3.style)), A2.className = Array.prototype.concat(c3, d3, g3 !== d3 ? g3 : null, t4.className, v3.className).filter(Boolean).join(" "), A2.ref = S2, (0, import_react.createElement)(b2, A2);
    }(A, e3, t3, I2);
  };
  return P.displayName = p, (A = import_react.default.forwardRef(P)).attrs = g2, A.componentStyle = C2, A.displayName = p, A.shouldForwardProp = N2, A.foldedComponentIds = o2 ? Array.prototype.concat(e2.foldedComponentIds, e2.styledComponentId) : S, A.styledComponentId = v2, A.target = o2 ? e2.target : e2, A.withComponent = function(e3) {
    var r2 = t2.componentId, o3 = function(e4, t3) {
      if (null == e4)
        return {};
      var n3, r3, o4 = {}, s3 = Object.keys(e4);
      for (r3 = 0; r3 < s3.length; r3++)
        n3 = s3[r3], t3.indexOf(n3) >= 0 || (o4[n3] = e4[n3]);
      return o4;
    }(t2, ["componentId"]), s2 = r2 && r2 + "-" + (xe(e3) ? e3 : je(b(e3)));
    return Ye(e3, y({}, o3, { attrs: g2, componentId: s2 }), n2);
  }, Object.defineProperty(A, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(t3) {
    this._foldedDefaultProps = o2 ? ze({}, e2.defaultProps, t3) : t3;
  } }), Pe(p, v2), A.warnTooManyClasses = function(e3, t3) {
    var n3 = {}, r2 = false;
    return function(o3) {
      if (!r2 && (n3[o3] = true, Object.keys(n3).length >= 200)) {
        var s2 = t3 ? ' with the id of "' + t3 + '"' : "";
        console.warn("Over 200 classes were generated for component " + e3 + s2 + ".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), r2 = true, n3 = {};
      }
    };
  }(p, v2), Object.defineProperty(A, "toString", { value: function() {
    return "." + A.styledComponentId;
  } }), i2 && (0, import_hoist_non_react_statics.default)(A, e2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true, withComponent: true }), A;
}
var qe = function(e2) {
  return function e3(t2, r2, o2) {
    if (void 0 === o2 && (o2 = w), !(0, import_react_is.isValidElementType)(r2))
      return D(1, String(r2));
    var s2 = function() {
      return t2(r2, o2, Ae.apply(void 0, arguments));
    };
    return s2.withConfig = function(n2) {
      return e3(t2, r2, y({}, o2, {}, n2));
    }, s2.attrs = function(n2) {
      return e3(t2, r2, y({}, o2, { attrs: Array.prototype.concat(o2.attrs, n2).filter(Boolean) }));
    }, s2;
  }(Ye, e2);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e2) {
  qe[e2] = qe(e2);
});
var He = function() {
  function e2(e3, t3) {
    this.rules = e3, this.componentId = t3, this.isStatic = ne(e3), X.registerId(this.componentId + 1);
  }
  var t2 = e2.prototype;
  return t2.createStyles = function(e3, t3, n2, r2) {
    var o2 = r2(_e(this.rules, t3, n2, r2).join(""), ""), s2 = this.componentId + e3;
    n2.insertRules(s2, s2, o2);
  }, t2.removeStyles = function(e3, t3) {
    t3.clearRules(this.componentId + e3);
  }, t2.renderStyles = function(e3, t3, n2, r2) {
    e3 > 2 && X.registerId(this.componentId + e3), this.removeStyles(e3, n2), this.createStyles(e3, t3, n2, r2);
  }, e2;
}();
var Ue = function() {
  function e2() {
    var e3 = this;
    this._emitSheetCSS = function() {
      var t3 = e3.instance.toString();
      if (!t3)
        return "";
      var n2 = Y();
      return "<style " + [n2 && 'nonce="' + n2 + '"', N + '="true"', 'data-styled-version="5.3.11"'].filter(Boolean).join(" ") + ">" + t3 + "</style>";
    }, this.getStyleTags = function() {
      return e3.sealed ? D(2) : e3._emitSheetCSS();
    }, this.getStyleElement = function() {
      var t3;
      if (e3.sealed)
        return D(2);
      var n2 = ((t3 = {})[N] = "", t3["data-styled-version"] = "5.3.11", t3.dangerouslySetInnerHTML = { __html: e3.instance.toString() }, t3), o2 = Y();
      return o2 && (n2.nonce = o2), [import_react.default.createElement("style", y({}, n2, { key: "sc-0-0" }))];
    }, this.seal = function() {
      e3.sealed = true;
    }, this.instance = new X({ isServer: true }), this.sealed = false;
  }
  var t2 = e2.prototype;
  return t2.collectStyles = function(e3) {
    return this.sealed ? D(2) : import_react.default.createElement(me, { sheet: this.instance }, e3);
  }, t2.interleaveWithNodeStream = function(e3) {
    return D(3);
  }, e2;
}();
"undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), "undefined" != typeof window && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, 1 === window["__styled-components-init__"] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window["__styled-components-init__"] += 1);
var styled_components_browser_esm_default = qe;

// app/types/enums/languageEnum.ts
var LanguageEnum = {
  EN: "en",
  TH: "th"
};

// shared/utils.ts
function isServer() {
  return typeof document === "undefined";
}
function lng(en, th, lang) {
  switch (lang) {
    case LanguageEnum.EN:
      return en;
    case LanguageEnum.TH:
      return th;
    default:
      return en;
  }
}

// app/types/enums/themeEnum.ts
var ThemeEnum = {
  Light: "light",
  Dark: "dark",
  Dora: "dora"
};

// app/providers/userContextProvider.tsx
init_esm();
var import_react3 = __toESM(require_react());

// app/types/interfaces/iUserContext.ts
function isUserContext(userContext) {
  return true;
}

// public/defaultUserContext.tsx
function defaultUserContext() {
  return {
    theme: ThemeEnum.Light,
    language: LanguageEnum.EN,
    search: "vacancy",
    user: {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      isAuthenticated: false,
      avatar: "",
      progressInfo: "0",
      isEmailConfirm: false,
      pathFromLogin: "/",
      phone: "",
      birthday: "",
      gender: ""
    },
    forms: {
      resume: "",
      vacancy: "",
      company: ""
    }
  };
}

// app/providers/userContextProvider.tsx
var import_jsx_dev_runtime = (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  __toESM(require_jsx_dev_runtime())
);
var UserContext = (0, import_react3.createContext)(void 0);
function UserContextProvider({
  children,
  specifiedUserContext
}) {
  const [userContext, setUserContext] = (0, import_react3.useState)(() => {
    if (specifiedUserContext) {
      if (isUserContext(specifiedUserContext)) {
        return specifiedUserContext;
      }
      return defaultUserContext();
    }
    if (isServer()) {
      return defaultUserContext();
    }
    return defaultUserContext();
  });
  (0, import_react3.useEffect)(() => {
    const user = specifiedUserContext?.user;
    const forms = specifiedUserContext?.forms;
    setUserContext((prevContext) => ({
      ...prevContext,
      user: {
        id: user?.id,
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        avatar: user?.avatar,
        isAuthenticated: user?.isAuthenticated || false,
        isEmailConfirm: user?.isEmailConfirm,
        progressInfo: user?.progressInfo,
        phone: user?.phone,
        birthday: user?.birthday,
        gender: user?.gender
      },
      forms
    }));
  }, [specifiedUserContext]);
  const persistUserContext = useFetcher();
  const persistUserContextRef = (0, import_react3.useRef)(persistUserContext);
  (0, import_react3.useEffect)(() => {
    persistUserContextRef.current = persistUserContext;
  }, [persistUserContext]);
  const mountRun = (0, import_react3.useRef)(false);
  (0, import_react3.useEffect)(() => {
    if (!mountRun.current) {
      mountRun.current = true;
      return;
    }
    if (!userContext) {
      return;
    }
    persistUserContextRef.current.submit({
      context: JSON.stringify(userContext)
    }, {
      action: "actions/set-user-context",
      method: "POST"
    });
  }, [userContext.user?.id, userContext?.search, userContext?.language, userContext?.theme, userContext?.forms?.resume, userContext?.forms?.vacancy]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserContext.Provider, { value: [userContext, setUserContext], children }, void 0, false, {
    fileName: "app/providers/userContextProvider.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}

// shared/routing/authLogin.ts
var AuthLogin = class {
  get root() {
    return `/?login=true`;
  }
};
var authLogin_default = new AuthLogin();

// shared/routing/authRegisterRoutes.ts
var AuthRegisterRoutes = class {
  get root() {
    return `${authRoutes_default.root}/register`;
  }
};
var authRegisterRoutes_default = new AuthRegisterRoutes();

// shared/routing/authResetPasswordRoutes.ts
var AuthRegisterRoutes2 = class {
  get root() {
    return `${authRoutes_default.root}/reset-password`;
  }
};
var authResetPasswordRoutes_default = new AuthRegisterRoutes2();

// shared/routing/authRoutes.ts
var AuthRoutes = class {
  get root() {
    return "/auth";
  }
  get register() {
    return authRegisterRoutes_default;
  }
  get resetPassword() {
    return authResetPasswordRoutes_default;
  }
  get login() {
    return authLogin_default;
  }
};
var authRoutes_default = new AuthRoutes();

// shared/routing/materialsArticlesRoutes.ts
var MaterialsArticlesRoutes = class {
  get root() {
    return `${materialsRoutes_default.root}/articles`;
  }
};
var materialsArticlesRoutes_default = new MaterialsArticlesRoutes();

// shared/routing/materialsNewsRoutes.ts
var MaterialsNewsRoutes = class {
  get root() {
    return `${materialsRoutes_default.root}/news`;
  }
};
var materialsNewsRoutes_default = new MaterialsNewsRoutes();

// shared/routing/materialsRoutes.ts
var MaterialsRoutes = class {
  get root() {
    return "/materials";
  }
  get articles() {
    return materialsArticlesRoutes_default;
  }
  get news() {
    return materialsNewsRoutes_default;
  }
};
var materialsRoutes_default = new MaterialsRoutes();

// shared/routing/privacyPolicyRoutes.ts
var PrivacyPolicyRoutes = class {
  get root() {
    return "/privacy_policy";
  }
  get terms() {
    return "/privacy_policy/#terms";
  }
};
var privacyPolicyRoutes_default = new PrivacyPolicyRoutes();

// shared/routing/searchCompanyRoutes.ts
var SearchCompanyRoutes = class {
  get root() {
    return `${searchRoutes_default.root}/company`;
  }
};
var searchCompanyRoutes_default = new SearchCompanyRoutes();

// shared/routing/searchResumeRoutes.ts
var SearchResumeRoutes = class {
  get root() {
    return `${searchRoutes_default.root}/resume`;
  }
};
var searchResumeRoutes_default = new SearchResumeRoutes();

// shared/routing/searchVacancyRoutes.ts
var SearchVacancyRoutes = class {
  get root() {
    return `${searchRoutes_default.root}/vacancy`;
  }
};
var searchVacancyRoutes_default = new SearchVacancyRoutes();

// shared/routing/searchRoutes.ts
var SearchRoutes = class {
  get root() {
    return "/search";
  }
  get resume() {
    return searchResumeRoutes_default;
  }
  get vacancy() {
    return searchVacancyRoutes_default;
  }
  get company() {
    return searchCompanyRoutes_default;
  }
};
var searchRoutes_default = new SearchRoutes();

// shared/routing/userCompanyRoutes.ts
var UserCompanyRoutes = class {
  get root() {
    return `${userRoutes_default.root}/company`;
  }
  get create() {
    return `${this.root}/create`;
  }
};
var userCompanyRoutes_default = new UserCompanyRoutes();

// shared/routing/userMyProfileRoutes.ts
var UserMyProfileRoutes = class {
  get root() {
    return `${userRoutes_default.root}/myprofile`;
  }
};
var userMyProfileRoutes_default = new UserMyProfileRoutes();

// shared/routing/userResponsesRoutes.ts
var UserResponsesRoutes = class {
  get root() {
    return `${userRoutes_default.root}/responses`;
  }
  // get create() {
  //   return `${this.root}/create`;
  // }
};
var userResponsesRoutes_default = new UserResponsesRoutes();

// shared/routing/userResumeRoutes.ts
var UserResumeRoutes = class {
  get root() {
    return `${userRoutes_default.root}/resume`;
  }
  get create() {
    return `${this.root}/create`;
  }
};
var userResumeRoutes_default = new UserResumeRoutes();

// shared/routing/userVacancyRoutes.ts
var UserVacancyRoutes = class {
  get root() {
    return `${userRoutes_default.root}/vacancy`;
  }
  get create() {
    return `${this.root}/create`;
  }
};
var userVacancyRoutes_default = new UserVacancyRoutes();

// shared/routing/userRoutes.ts
var UserRoutes = class {
  get root() {
    return "/user";
  }
  get myProfile() {
    return userMyProfileRoutes_default;
  }
  get resume() {
    return userResumeRoutes_default;
  }
  get vacancy() {
    return userVacancyRoutes_default;
  }
  get company() {
    return userCompanyRoutes_default;
  }
  get responses() {
    return userResponsesRoutes_default;
  }
};
var userRoutes_default = new UserRoutes();

// shared/routing/routes.ts
var Routes = class {
  get root() {
    return "/";
  }
  get user() {
    return userRoutes_default;
  }
  get search() {
    return searchRoutes_default;
  }
  get auth() {
    return authRoutes_default;
  }
  get materials() {
    return materialsRoutes_default;
  }
  get faq() {
    return "/faq";
  }
  get about() {
    return "/about";
  }
  get privacyPolicy() {
    return privacyPolicyRoutes_default;
  }
  get unsubscribe() {
    return "/unsubscribe";
  }
  get success_register() {
    return "/success_register";
  }
};
var routes_default = new Routes();

// app/utils/helpers.ts
init_esm();
var import_react5 = __toESM(require_react());

// app/utils/constants.ts
var API_BASE_URL = "https://api.test.upjob.com/api/v2";
var CLIENT_BASE_URL = "https://test.upjob.com";
var YEAR_RANGE_START_OFFSET = 100;
var YEAR_RANGE_END_OFFSET = 10;
var THAI_CALENDAR_OFFSET = 543;
var DEFAULT_USER_AVATAR = "/images/user/defaultUserAvatar.png";
var DEFAULT_COMPANY_LOGO = "/images/user/defaultSquareCompanyLogo.png";

// node_modules/uuid/dist/esm-browser/rng.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}

// node_modules/uuid/dist/esm-browser/regex.js
var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

// node_modules/uuid/dist/esm-browser/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default = validate;

// node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (let i2 = 0; i2 < 256; ++i2) {
  byteToHex.push((i2 + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

// node_modules/uuid/dist/esm-browser/v1.js
var _nodeId;
var _clockseq;
var _lastMSecs = 0;
var _lastNSecs = 0;
function v1(options, buf, offset) {
  let i2 = buf && offset || 0;
  const b2 = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || rng)();
    if (node == null) {
      node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }
    if (clockseq == null) {
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
    }
  }
  let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
  let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
  if (dt < 0 && options.clockseq === void 0) {
    clockseq = clockseq + 1 & 16383;
  }
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
    nsecs = 0;
  }
  if (nsecs >= 1e4) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }
  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;
  msecs += 122192928e5;
  const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
  b2[i2++] = tl >>> 24 & 255;
  b2[i2++] = tl >>> 16 & 255;
  b2[i2++] = tl >>> 8 & 255;
  b2[i2++] = tl & 255;
  const tmh = msecs / 4294967296 * 1e4 & 268435455;
  b2[i2++] = tmh >>> 8 & 255;
  b2[i2++] = tmh & 255;
  b2[i2++] = tmh >>> 24 & 15 | 16;
  b2[i2++] = tmh >>> 16 & 255;
  b2[i2++] = clockseq >>> 8 | 128;
  b2[i2++] = clockseq & 255;
  for (let n2 = 0; n2 < 6; ++n2) {
    b2[i2 + n2] = node[n2];
  }
  return buf || unsafeStringify(b2);
}
var v1_default = v1;

// node_modules/uuid/dist/esm-browser/native.js
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native_default = {
  randomUUID
};

// node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i2 = 0; i2 < 16; ++i2) {
      buf[offset + i2] = rnds[i2];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default = v4;

// app/utils/helpers.ts
var import_session = __toESM(require_session());
var import_userContext = __toESM(require_userContext());
function useMatchesData(id) {
  const matchingRoutes = useMatches();
  const route = (0, import_react5.useMemo)(
    () => matchingRoutes.find((route2) => route2.id === id),
    [matchingRoutes, id]
  );
  return route?.data;
}
function getValueLang(data, lang) {
  if (data && lang) {
    return data?.[lang];
  }
  return data?.th;
}
function getValueFromDictionaries(entries, value, lang) {
  return entries?.find((item) => item.id === value)?.[lang || "en"]?.title;
}
function getValueFromDictionariesNewWay(entries, value, lang) {
  return entries?.find((item) => item.id === value)?.value?.[lang || "en"];
}
function getIdFromDictionaries(entries, value) {
  return entries?.find((item) => item.id === value)?.id;
}
function calculateAge(birthdate) {
  if (!birthdate)
    return "";
  const today = /* @__PURE__ */ new Date();
  const birthDate = new Date(birthdate);
  if (Number.isNaN(birthDate.getTime())) {
    throw new Error("Invalid birthdate");
  }
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
    age -= 1;
  }
  return age;
}
function calculateTotalDurationWorkExperience(months, lang) {
  if (months === void 0 || !Number.isInteger(months) || months < 0) {
    return "Invalid input";
  }
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  const yearLabel = lang === "th" ? "\u0E1B\u0E35" : "year";
  const monthLabel = lang === "th" ? "\u0E40\u0E14\u0E37\u0E2D\u0E19" : "month";
  const noExperienceLabel = lang === "th" ? "\u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C" : "with no experience";
  if (years === 0) {
    return remainingMonths !== 0 ? `${remainingMonths} ${monthLabel}${remainingMonths !== 1 ? "s" : ""}` : `${noExperienceLabel}`;
  }
  if (remainingMonths === 0) {
    return years !== 0 ? `${years} ${yearLabel}${years !== 1 ? "s" : ""}` : "";
  }
  return `${years} ${yearLabel}${years !== 1 ? "s" : ""} ${remainingMonths} ${monthLabel}${remainingMonths !== 1 ? "s" : ""}`;
}
function extractTitles(array, lang) {
  const result = [];
  array?.forEach((obj) => {
    const { id } = obj;
    const title = obj[lang || "en"]?.title || "No title specified";
    result.push([id, title]);
  });
  return result;
}
function extractTitlesNewWay(array, lang) {
  const result = [];
  array?.forEach((obj) => {
    const { id } = obj;
    const title = obj.value?.[lang || "en"] || "No title specified";
    result.push([id, title]);
  });
  return result;
}
function extractCompanyData(companies) {
  const result = [];
  companies?.forEach((company) => {
    const companyID = company.id ?? "";
    const companyName = company.name ?? "";
    result.push([companyID, companyName]);
  });
  return result;
}
function findCompanyById(id, companies) {
  if (companies)
    return companies.find((company) => company.id === id);
  return void 0;
}
function compareArrays(array1, array2) {
  if (!array1 || !array2) {
    return false;
  }
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i2 = 0; i2 < array1.length; i2 += 1) {
    if (array1[i2] !== array2[i2]) {
      return false;
    }
  }
  return true;
}
async function apiCall(url, method, context, body) {
  const headers = {
    "Content-Type": "application/json",
    Cookie: context?.session?.session?.split(";")[0] || ""
  };
  const options = {
    method,
    headers,
    body: body ? JSON.stringify(body) : null
  };
  console.log("url", `${API_BASE_URL}${url}`);
  console.log("options", options);
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, options).then((data) => data.json());
    console.log("response", response);
    return response;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
}
function getImageUrl(arg, type) {
  if (!arg || arg === "" || arg === void 0 || arg === null || arg === "path_to_photo" || arg === "https://api.test.upjob.com/m/path_to_photo" || arg === "/images/user/squareAvatarDefault.png" || arg === "/images/user/avatarDefault.png" || arg === DEFAULT_USER_AVATAR || arg === DEFAULT_COMPANY_LOGO || arg.startsWith("https://api.test.upjob.com") && !arg.split("/m/")[1]) {
    return type === "company" ? DEFAULT_COMPANY_LOGO : DEFAULT_USER_AVATAR;
  }
  if (arg.startsWith("https://api.test.upjob.com")) {
    return arg;
  }
  if (arg.startsWith("https://upjob.com")) {
    return type === "company" ? DEFAULT_COMPANY_LOGO : DEFAULT_USER_AVATAR;
  }
  return `https://api.test.upjob.com/m/${arg}`;
}
function updateSearchString(searchString, id) {
  const idParam = "id=";
  if (!searchString) {
    if (id)
      return `?${idParam}${id}`;
    return "";
  }
  if (!id || searchString.includes(idParam)) {
    const regex = new RegExp(`(${idParam}[^&]*)`);
    return searchString.replace(regex, id ? `${idParam}${id}` : "");
  }
  return `${searchString}&${idParam}${id}`;
}
function removeLoginSearch(url) {
  const searchParams = new URLSearchParams(url.split("?")[1] || "");
  searchParams.delete("login");
  const newSearchParams = searchParams.toString();
  return `${url.split("?")[0]}${newSearchParams ? `?${newSearchParams}` : ""}`;
}
function checkCompleteness(resume, vacancy) {
  if (resume) {
    const result = Boolean(
      resume?.general_information?.email && resume?.general_information?.first_name && resume?.general_information?.last_name && resume?.general_information?.phone && resume?.general_information?.gender_id && resume?.general_information?.language_of_notify_id && resume?.job_position?.specialization_id && resume?.job_position?.position && resume?.job_position?.employment_type_ids && resume?.job_position?.employment_type_ids?.length > 0 && resume?.job_position?.salary_payout_period_id && resume?.location?.country_id && resume?.location?.region_id && resume?.location?.city_id && resume?.location?.relocation_id
    );
    return result;
  }
  if (vacancy) {
    const result = Boolean(
      vacancy?.vacancy_page?.specialization_id && vacancy?.vacancy_page?.position && vacancy?.vacancy_page?.employment_type_ids && vacancy.vacancy_page?.employment_type_ids?.length > 0 && vacancy?.vacancy_page?.work_feature_ids && vacancy.vacancy_page?.work_feature_ids?.length > 0 && vacancy?.vacancy_page?.salary_payout_period_id && vacancy?.vacancy_page?.currency_id && vacancy?.contacts?.company_id && vacancy?.contacts?.contact_phone && vacancy?.contacts?.first_name && vacancy?.contacts?.last_name && vacancy?.location?.country_id && vacancy?.location?.region_id && vacancy?.location?.city_id && vacancy?.location?.language_of_notify_id && vacancy?.location?.number_of_employees_id && vacancy?.responses_vacancy?.response_can_be_done_by_id && vacancy?.responses_vacancy?.get_email_notifications_for_id && vacancy?.responses_vacancy?.compliance_of_requirements_id && vacancy?.responses_vacancy?.email_for_the_responses
    );
    return result;
  }
  return void 0;
}
var calculateStatistics = (responses, id) => {
  const statistics = responses?.reduce((acc, response) => {
    const isInvitation = id === response.target_id;
    const isRequest = id === response.shared_id;
    if (isInvitation) {
      acc.invitations_total = (acc.invitations_total || 0) + 1;
      if (response.state === "NEW") {
        acc.new_invitations = (acc.new_invitations || 0) + 1;
      }
    } else if (isRequest) {
      acc.requests_total = (acc.requests_total || 0) + 1;
      if (response.state === "VIEWED") {
        acc.requests_viewed = (acc.requests_viewed || 0) + 1;
      }
      if (response.state === "APPROVED") {
        acc.requests_approved = (acc.requests_approved || 0) + 1;
      }
      if (response.state === "APPROVED_AND_VIEWED") {
        acc.requests_approved_and_viewed = (acc.requests_approved_and_viewed || 0) + 1;
      }
    }
    return acc;
  }, {});
  return statistics;
};
var getSalary = (currency, period, lang) => {
  let result = "";
  const getCurrency = (currency2) => {
    let currencyName = "";
    switch (currency2) {
      case "Thai Baht":
        currencyName = "THB";
        return currencyName;
      case "USD":
        currencyName = "USD";
        return currencyName;
      case "Euro":
        currencyName = "EUR";
        return currencyName;
      default:
        return "";
    }
  };
  const getPeriod = (period2) => {
    let periodName = "";
    switch (period2) {
      case "Monthly":
        periodName = lang === "th" ? "\u0E40\u0E14\u0E37\u0E2D\u0E19" : "mo.";
        return periodName;
      case "Dayly":
        periodName = lang === "th" ? "\u0E27\u0E31\u0E19" : "day";
        return periodName;
      case "Hourly":
        periodName = lang === "th" ? "\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07" : "hour";
        return periodName;
      default:
        return "";
    }
  };
  if (period && currency) {
    result = `${`${getCurrency(currency)}/${getPeriod(period)}`}`;
    return result;
  }
  return void 0;
};

// app/hooks.tsx
init_esm();
var import_react7 = __toESM(require_react());
init_es();

// shared/client/http-client.ts
var HttpClient = class {
  constructor(apiConfig = {}) {
    this.baseUrl = "https://api.test.upjob.com/api/v1";
    this.securityData = null;
    this.abortControllers = /* @__PURE__ */ new Map();
    this.customFetch = (...fetchParams) => fetch(...fetchParams);
    this.baseApiParams = {};
    this.setSecurityData = (data) => {
      this.securityData = data;
    };
    this.contentFormatters = {
      ["application/json" /* Json */]: (input) => input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
      ["text/plain" /* Text */]: (input) => input !== null && typeof input !== "string" ? JSON.stringify(input) : input,
      ["multipart/form-data" /* FormData */]: (input) => Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob ? property : typeof property === "object" && property !== null ? JSON.stringify(property) : `${property}`
        );
        return formData;
      }, new FormData()),
      ["application/x-www-form-urlencoded" /* UrlEncoded */]: (input) => this.toQueryString(input)
    };
    this.createAbortSignal = (cancelToken) => {
      if (this.abortControllers.has(cancelToken)) {
        const abortController2 = this.abortControllers.get(cancelToken);
        if (abortController2) {
          return abortController2.signal;
        }
        return void 0;
      }
      const abortController = new AbortController();
      this.abortControllers.set(cancelToken, abortController);
      return abortController.signal;
    };
    this.abortRequest = (cancelToken) => {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        abortController.abort();
        this.abortControllers.delete(cancelToken);
      }
    };
    this.request = async ({
      body,
      secure,
      path,
      type,
      query,
      format,
      baseUrl,
      cancelToken,
      ...params
    }) => {
      const secureParams = (typeof secure === "boolean" ? secure : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {};
      const requestParams = this.mergeRequestParams(params, secureParams);
      const queryString = query && this.toQueryString(query);
      const payloadFormatter = this.contentFormatters[type || "application/json" /* Json */];
      const responseFormat = format || requestParams.format;
      const requestId = v4_default();
      console.log(
        `${requestId} >>> URL`,
        `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`
      );
      console.log(`${requestId} >>> METHOD`, params.method);
      console.log(
        `${requestId} >>> BODY`,
        typeof body === "undefined" || body === null ? null : payloadFormatter(body)
      );
      console.log(`${requestId} >>> HEADERS`, {
        ...requestParams.headers || {},
        ...type && type !== "multipart/form-data" /* FormData */ ? { "Content-Type": type } : {}
      });
      return this.customFetch(
        `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
        {
          ...requestParams,
          headers: {
            ...requestParams.headers || {},
            ...type && type !== "multipart/form-data" /* FormData */ ? { "Content-Type": type } : {}
          },
          signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
          body: typeof body === "undefined" || body === null ? null : payloadFormatter(body)
        }
      ).then(async (response) => {
        console.log(`${requestId} >>> RESPONSE`, response.status);
        const r2 = response;
        r2.data = null;
        r2.error = null;
        const data = !responseFormat ? r2 : await response[responseFormat]().then((data2) => {
          if (r2.ok) {
            r2.data = data2;
          } else {
            r2.error = data2;
          }
          return r2;
        }).catch((e2) => {
          r2.error = e2;
          return r2;
        });
        if (cancelToken) {
          this.abortControllers.delete(cancelToken);
        }
        if (!response.ok)
          throw data;
        return data;
      });
    };
    Object.assign(this, apiConfig);
  }
  async auth(session) {
    if (session.session) {
      const authToken = session.session.split(";").at(0);
      this.baseApiParams.headers = { Cookie: authToken };
    }
  }
  encodeQueryParam(key, value) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }
  addQueryParam(query, key) {
    return this.encodeQueryParam(key, query[key]);
  }
  addArrayQueryParam(query, key) {
    const value = query[key];
    return value.map((v2) => this.encodeQueryParam(key, v2)).join("&");
  }
  toQueryString(rawQuery) {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys.map(
      (key) => Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)
    ).join("&");
  }
  addQueryParams(rawQuery) {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }
  mergeRequestParams(params1, params2) {
    return {
      ...this.baseApiParams,
      ...params1,
      ...params2 || {},
      headers: {
        ...this.baseApiParams.headers || {},
        ...params1.headers || {},
        ...params2 && params2.headers || {}
      }
    };
  }
};

// shared/client/Countries.ts
var Countries = class extends HttpClient {
  constructor() {
    super(...arguments);
    /**
     * @description return countries
     *
     * @tags countries
     * @name CountriesList
     * @request GET:/countries
     */
    this.countriesList = (params = {}) => this.request({
      path: `/countries`,
      method: "GET",
      format: "json",
      ...params
    });
    /**
     * @description return regions
     *
     * @tags countries
     * @name RegionsDetail
     * @request GET:/countries/{country_id}/regions
     */
    this.regionsDetail = (countryId, params = {}) => this.request({
      path: `/countries/${countryId}/regions`,
      method: "GET",
      format: "json",
      ...params
    });
    /**
     * @description return locations
     *
     * @tags countries
     * @name RegionsLocationDetail
     * @request GET:/countries/{country_id}/regions/{region_id}/location
     */
    this.regionsLocationDetail = (countryId, regionId, params = {}) => this.request({
      path: `/countries/${countryId}/regions/${regionId}/location`,
      method: "GET",
      format: "json",
      ...params
    });
  }
};

// shared/client/Specializations.ts
var Specializations = class extends HttpClient {
  constructor() {
    super(...arguments);
    /**
     * @description return specializations
     *
     * @tags dictionaries
     * @name SpecializationsList
     * @request GET:/specializations
     */
    this.specializationsList = (query, params = {}) => this.request({
      path: `/specializations`,
      method: "GET",
      query,
      format: "json",
      ...params
    });
    /**
     * @description return job positions for chosen specializations
     *
     * @tags dictionaries
     * @name JobPositionsDetail
     * @request GET:/specializations/{specialization_id}/job-positions
     */
    this.jobPositionsDetail = (specializationId, query, params = {}) => this.request({
      path: `/specializations/${specializationId}/job-positions`,
      method: "GET",
      query,
      format: "json",
      ...params
    });
  }
};

// app/themes/baseTheme.ts
function getTheme(palette) {
  return {
    backgroundColor: palette.neutral.neutral4,
    defaultTextColor: palette.darken.darken1.darken1_base,
    errorTextColor: palette.info.info_errors.info_errors_variant2,
    accentTextColor: palette.accent.accent1.accent1_base,
    blackIconColor: palette.darken.darken1.darken1_base,
    buttons: {
      primary: {
        backgroundColor: palette.accent.accent1.accent1_base,
        focusBackgroundColor: palette.accent.accent2,
        disabledBackgroundColor: palette.darken.darken1.darken1_variant2,
        spanColor: palette.neutral.neutral1,
        iconColor: palette.neutral.neutral1,
        iconColorHover: palette.neutral.neutral1,
        iconDisable: palette.neutral.neutral1,
        shadow: palette.shadow.level_1
      },
      secondary: {
        backgroundColor: palette.neutral.neutral1,
        focusBackgroundColor: palette.darken.darken1.darken1_variant5,
        activeBackgroundColor: palette.darken.darken1.darken1_variant6,
        disabledBackgroundColor: palette.neutral.none,
        spanColor: palette.darken.darken1.darken1_base,
        focusSpanColor: palette.accent.accent1.accent1_base,
        disabledSpanColor: palette.darken.darken1.darken1_variant2,
        iconColor: palette.accent.accent1.accent1_base,
        iconColorHover: palette.accent.accent1.accent1_base,
        iconDisable: palette.darken.darken1.darken1_variant2
      },
      tertiary: {
        backgroundColor: palette.neutral.none,
        activeBackgroundColor: palette.darken.darken1.darken1_variant3,
        focusBackgroundColor: palette.darken.darken1.darken1_variant4,
        disabledBackgroundColor: palette.neutral.none,
        spanColor: palette.darken.darken1.darken1_base,
        activeSpanColor: palette.darken.darken1.darken1_base,
        disabledSpanColor: palette.darken.darken1.darken1_variant2
      },
      chips: {
        backgroundColor: palette.neutral.neutral3,
        focusBackgroundColor: palette.darken.darken1.darken1_variant4,
        activeBackgroundColor: palette.darken.darken1.darken1_variant3,
        spanColor: palette.darken.darken1.darken1_base,
        focusSpanColor: palette.accent.accent1.accent1_base,
        activeBorderColor: palette.accent.accent1.accent1_base
      },
      small: {
        textColor: palette.accent.accent1.accent1_base,
        backgroundColor: palette.neutral.neutral1,
        borderColor: palette.darken.darken1.darken1_variant1,
        pressedBacgroundColor: palette.darken.darken1.darken1_variant3,
        hoverBackgroundColor: palette.darken.darken1.darken1_variant4,
        hoverBorderColor: palette.darken.darken1.darken1_variant1,
        hoverBorderSpanColor: palette.neutral.neutral1,
        focusBorderColor: palette.darken.darken1.darken1_variant1,
        iconColor: palette.accent.accent1.accent1_base,
        iconColorHover: palette.neutral.neutral1,
        iconDisable: palette.darken.darken2.darken2_variant2
      }
    },
    switcher: {
      backgroundDefault: palette.darken.darken2.darken2_variant2,
      backgroundChecked: palette.accent.accent1.accent1_base,
      textCheckedColor: palette.neutral.neutral1,
      textDefaultColor: palette.darken.darken2.darken2_base,
      backgroundTogglerColor: palette.neutral.neutral1
    },
    inputs: {
      borderColor: palette.darken.darken1.darken1_variant1,
      borderFocusColor: palette.accent.accent1.accent1_base,
      backgroundDefaultColor: palette.neutral.neutral2
    },
    \u0441ards: {
      articlesTextColor: palette.darken.darken1.darken1_variant2,
      vacanciesTextColor: palette.accent.accent1.accent1_base,
      noVacanciesTextColor: palette.darken.darken1.darken1_variant2,
      descriptionTextColor: palette.darken.darken1.darken1_variant1,
      imageBackground: palette.neutral.neutral3,
      cardContentBackground: palette.neutral.neutral1,
      shadow: palette.shadow.level_2
    },
    search: {
      backgroundWrapper: palette.neutral.neutral1,
      svgColor: palette.darken.darken2.darken2_base,
      svgFocusColor: palette.accent.accent1.accent1_base,
      borderColor: palette.darken.darken2.darken2_base,
      middleBorderColor: palette.neutral.neutral4,
      variantSearchCities: palette.darken.darken1.darken1_variant1
    },
    tabs: {
      middleBorder: {
        backgroundColor: palette.accent.accent1.accent1_base
      },
      tabButton: {
        activeBackgroundColor: palette.neutral.neutral1,
        backgroundColor: palette.darken.darken2.darken2_variant2,
        focusBackgroundColor: palette.neutral.neutral1,
        focusActiveBackgroundColor: palette.neutral.neutral4,
        focusSpanBackgroundColor: palette.accent.accent1.accent1_base,
        focusSpanActiveBackgroundColor: palette.darken.darken1.darken1_base
      },
      tabContainer: {
        backgroundColor: palette.darken.darken2.darken2_variant2
      },
      activeTabColor: palette.darken.darken1.darken1_base,
      disabledTabColor: palette.darken.darken1.darken1_variant1
    },
    pagination: {
      borderColor: palette.darken.darken1.darken1_variant2,
      activeBorderColor: palette.accent.accent1.accent1_base,
      backgroundActiveColor: palette.accent.accent1.accent1_base,
      backgroundHoverColor: palette.neutral.neutral3,
      backgroundArrowColor: palette.neutral.neutral3
    },
    modal: {
      backgroundColor: palette.neutral.neutral2,
      svgColor: palette.darken.darken1.darken1_base,
      svgDisabledColor: palette.darken.darken1.darken1_variant2,
      svgBackgroundColor: palette.neutral.none,
      svgBackgroundHoverColor: palette.darken.darken1.darken1_variant4,
      svgBackgroundActiveColor: palette.darken.darken1.darken1_variant3,
      shadow: palette.shadow.level_modal,
      borderCardsColor: palette.darken.darken1.darken1_variant1
    },
    ui: {
      logoLinkColor: palette.darken.darken2.darken2_base,
      logoLinkHoverColor: palette.accent.accent1.accent1_base
    },
    slider: {
      backgroundBulletColor: palette.darken.darken1.darken1_variant2,
      backgroundBulletActiveColor: palette.accent.accent1.accent1_base,
      backgroundButtonArrowColor: palette.neutral.neutral3,
      buttonArrowColor: palette.accent.accent1.accent1_base,
      hoverButtonArrowColor: palette.neutral.neutral1
    },
    navbar: {
      logoColor: palette.darken.darken2.darken2_base,
      wrapperHeaderBackgroundColor: palette.neutral.neutral2,
      hoverColor: palette.accent.accent1.accent1_base,
      noHoverColor: palette.darken.darken2.darken2_base,
      textActiveLangColor: palette.darken.darken2.darken2_base,
      textNoActiveLangColor: palette.darken.darken2.darken2_variant1,
      svgColor: palette.darken.darken1.darken1_variant2,
      svgHoverColor: palette.darken.darken1.darken1_base,
      textLinkColor: palette.darken.darken1.darken1_variant2,
      textLinkHoverColor: palette.darken.darken1.darken1_base
    },
    pgoressBar: {
      backgroundColor: palette.neutral.neutral3,
      aggregateColor: palette.darken.darken1.darken1_variant2,
      containerColor: palette.neutral.neutral4
    },
    navLinks: {
      backgroundColor: palette.neutral.neutral3,
      hoverBackgroundColor: palette.darken.darken1.darken1_variant7,
      pressedBackgroundColor: palette.darken.darken1.darken1_variant8,
      borderColor: palette.darken.darken2.darken2_variant2,
      backgroundActiveColor: palette.accent.accent1.accent1_variant4
    },
    footer: {
      wrapperHeaderBackgroundColor: palette.neutral.neutral2,
      linkSpanColor: palette.accent.accent1.accent1_base,
      linkSpanColorMedia1024: palette.darken.darken2.darken2_base,
      boxCopirightSpanColorMedia1024: palette.darken.darken2.darken2_variant1,
      linkTextColor: palette.darken.darken1.darken1_variant1,
      borderColor: palette.darken.darken2.darken2_variant2
    },
    auth: {
      helpButtonColor: palette.accent.accent1.accent1_base,
      helpButtonHoverColor: palette.accent.accent1.accent1_variant2,
      helpButtonActiveColor: palette.accent.accent2,
      radioButtonColor: palette.accent.accent1.accent1_base,
      backgroundRegisterPage: palette.darken.darken2.darken2_variant2,
      backgroundRegisterContainerColor: palette.neutral.neutral2
    },
    mainPage: {
      headingColor: palette.neutral.neutral1,
      titleColor: palette.darken.darken1.darken1_base,
      backgroundSectionTrendingColor: palette.neutral.neutral2,
      backgroundSectionCompaniesColor: palette.darken.darken2.darken2_variant2,
      backgroundSectionArticlesColor: palette.neutral.neutral2,
      backgroundSectionNewsColor: palette.darken.darken2.darken2_variant2,
      benefitHeadingMobileColor: palette.accent.accent1.accent1_base,
      benefitHeaderColorSmall: palette.accent.accent1.accent1_base,
      benefitHeaderColor: palette.darken.darken2.darken2_base,
      benefitBodyColorSmall: palette.darken.darken1.darken1_base,
      benefitBodyColor: palette.darken.darken1.darken1_variant1,
      benefitBorderColor: palette.neutral.neutral4
    },
    user: {
      headingTextColor: palette.neutral.neutral1,
      backgroundPageColor: palette.darken.darken2.darken2_variant2,
      backgroundCardColor: palette.neutral.neutral2,
      borderColor: palette.neutral.neutral4,
      descriptionTextColor: palette.darken.darken1.darken1_variant1,
      iconColor: palette.accent.accent1.accent1_base,
      borderAvatar: palette.neutral.neutral2,
      borderCustomFieldData: palette.darken.darken1.darken1_variant2
    },
    boxInformation: {
      info: {
        backgroundColor: palette.accent.accent1.accent1_variant5,
        borderColor: palette.accent.accent2
      },
      warning: {
        backgroundColor: palette.info.info_warning.info_warning_variant3,
        borderColor: palette.info.info_warning.info_warning_variant2
      },
      error: {
        backgroundColor: palette.info.info_errors.info_errors_variant3
      },
      success: {
        backgroundColor: palette.info.info_success.info_success_variant2,
        borderColor: palette.info.info_success.info_success_variant1
      }
    },
    responses: {
      filters: {
        backgroundColor: palette.neutral.neutral3
      }
    }
  };
}

// app/themes/palettes/basePalette.ts
var basePalette = {
  neutral: {
    none: "none",
    neutral1: "#FFFFFF",
    neutral2: "#FAFAFA",
    neutral3: "#EDEFF2",
    neutral4: "#D9DBDE"
  },
  darken: {
    darken1: {
      darken1_base: "#454857",
      darken1_variant1: "#7D7F89",
      darken1_variant2: "#A2A3AB",
      darken1_variant3: "rgba(69, 72, 87, 0.12)",
      darken1_variant4: "rgba(69, 72, 87, 0.08)",
      darken1_variant5: "#F0F0F2",
      darken1_variant6: "#E9E9EB",
      darken1_variant7: "#E0E2E6",
      darken1_variant8: "#D9DBDF"
    },
    darken2: {
      darken2_base: "#566178",
      darken2_variant1: "#9AA0AE",
      darken2_variant2: "#E4E6E9"
    }
  },
  accent: {
    accent1: {
      accent1_base: "#3C79F5",
      // Vasil
      accent1_variant1: "#77A1F8",
      // Vasil 70
      accent1_variant2: "#8AAFF9",
      // Vasil 60
      accent1_variant3: "#B1C9FB",
      // Vasil 40
      accent1_variant4: "#D8E4FD",
      // Vasil 20
      accent1_variant5: "#ECF2FE",
      // Vasil 15
      accent1_variant6: "#F5F8FF"
      // Vasil 5
    },
    accent2: "#3B67C0",
    // Vasil dark
    accent3: "#E5E8F9"
  },
  info: {
    info_errors: {
      info_errors_variant1: "#5F2120",
      info_errors_variant2: "#BA2320",
      info_errors_variant3: "#FDEDED"
    },
    info_warning: {
      info_warning_variant1: "#714A12",
      info_warning_variant2: "#ED6C02",
      info_warning_variant3: "#FFF4E5"
    },
    info_success: {
      info_success_variant1: "#214923",
      info_success_variant2: "#EDF7ED"
    }
  },
  shadow: {
    level_1: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
    level_2: "0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.1)",
    level_3: "0px 4px 8px 3px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.2)",
    level_modal: "0px 20px 50px rgba(0, 0, 0, 0.2)"
  }
};

// app/themes/palettes/darkPalette.ts
var darkPalette = {
  ...basePalette,
  neutral: {
    neutral1: "#444",
    neutral2: "#DDD",
    neutral3: "#BBB",
    neutral4: "#999"
  },
  accent: {
    accent1: {
      accent1_base: "#CCC",
      accent1_variant1: "#CCC"
    },
    accent2: "#CCC",
    accent3: "#CCC"
  }
};

// app/themes/darkTheme.ts
var darkTheme = {
  ...getTheme(darkPalette),
  type: ThemeEnum.Dark
};

// app/themes/palettes/doraPalette.ts
var doraPalette = {
  ...basePalette,
  neutral: {
    neutral1: "#FF38AF",
    neutral2: "#3B0D28",
    neutral3: "#FF38E2",
    neutral4: "#D786E0"
  }
};

// app/themes/doraTheme.ts
var doraTheme = {
  ...getTheme(doraPalette),
  type: ThemeEnum.Dora
};

// app/themes/palettes/lightPalette.ts
var lightPalette = {
  ...basePalette
};

// app/themes/lightTheme.ts
var lightTheme = {
  ...getTheme(lightPalette),
  type: ThemeEnum.Light
};

// app/utils/themeUtils.ts
function getUserTheme(type) {
  if (!type)
    return lightTheme;
  switch (type.theme) {
    case ThemeEnum.Light:
      return lightTheme;
    case ThemeEnum.Dark:
      return darkTheme;
    case ThemeEnum.Dora:
      return doraTheme;
    default:
      return lightTheme;
  }
}

// app/hooks.tsx
function useUserContext() {
  const context = (0, import_react7.useContext)(UserContext);
  if (context === void 0) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
}
function useApp() {
  const [userContext, setUserContext] = useUserContext();
  const theme = getUserTheme(userContext);
  const {
    i18n,
    t: t2
  } = useTranslation();
  return {
    userContext,
    setUserContext,
    theme,
    t: t2,
    i18n
  };
}
var useRouteChecks = () => {
  const matches = useMatches();
  const [routeChecks, setRouteChecks] = (0, import_react7.useState)({
    isHomePage: true,
    isUserProfile: false,
    isUserResume: false,
    isUserVacancy: false,
    isUserCompany: false,
    isSearchResume: false,
    isSearchVacancy: false,
    isSearchCompany: false,
    isSearchCompanyVacancies: false,
    isMaterialsArticles: false,
    isMaterialsNews: false,
    isFaq: false,
    isAbout: false,
    isPrivacyPolicy: false,
    isId: false,
    isUserResponses: false
  });
  (0, import_react7.useEffect)(() => {
    setRouteChecks({
      isHomePage: matches.some((m2) => m2.id.includes("routes/index")),
      isUserProfile: matches.some((m2) => m2.id.includes("routes/user/myprofile")),
      isUserResume: matches.some((m2) => m2.id.includes("routes/user/resume")),
      isUserVacancy: matches.some((m2) => m2.id.includes("routes/user/vacancy")),
      isUserCompany: matches.some((m2) => m2.id.includes("routes/user/company")),
      isUserResponses: matches.some((m2) => m2.id.includes("responses")),
      isSearchResume: matches.some((m2) => m2.id.includes("routes/search/resume")),
      isSearchVacancy: matches.some((m2) => m2.id.includes("routes/search/vacancy")),
      isSearchCompany: matches.some((m2) => m2.id.includes("routes/search/company")),
      isSearchCompanyVacancies: matches.some((m2) => m2.id.includes("company.$id.vacancy")),
      isMaterialsArticles: matches.some((m2) => m2.id.includes("routes/materials/articles")),
      isMaterialsNews: matches.some((m2) => m2.id.includes("routes/materials/news")),
      isFaq: matches.some((m2) => m2.id.includes("routes/faq")),
      isAbout: matches.some((m2) => m2.id.includes("routes/about")),
      isPrivacyPolicy: matches.some((m2) => m2.id.includes("routes/privacy_policy")),
      isId: matches.some((m2) => m2.id.includes("$id"))
    });
  }, [matches]);
  return routeChecks;
};
var useScreenWidth = () => {
  const isWindow = typeof window !== "undefined";
  const [screenWidth, setScreenWidth] = (0, import_react7.useState)(0);
  (0, import_react7.useEffect)(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    if (isWindow) {
      setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (isWindow) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [isWindow]);
  return screenWidth;
};
var useGetPositionFromSpecialization = (specialization, positions) => {
  const specializationsForJobPositions = new Specializations();
  const {
    userContext
  } = useApp();
  const [position, setPosition] = (0, import_react7.useState)(positions || "");
  const [entriesPositions, setEntriesPositions] = (0, import_react7.useState)();
  const [specializationState, setSpecializationState] = (0, import_react7.useState)([specialization || ""]);
  const getPositionsFromSpec = async () => {
    if (specializationState[0]) {
      const response = await specializationsForJobPositions.jobPositionsDetail(specializationState[0] || "");
      const jobPositions = response.data;
      if (validate_default(positions || "")) {
        const pos = getValueFromDictionaries(jobPositions, positions, userContext.language);
        setPosition(pos);
      } else {
        setPosition(specializationState[0] === specialization ? positions : "");
      }
      const entries = extractTitles(jobPositions, userContext.language);
      setEntriesPositions(entries);
    } else {
      setEntriesPositions([]);
      setPosition("");
    }
  };
  (0, import_react7.useEffect)(() => {
    if (specializationState[0]) {
      getPositionsFromSpec();
    }
  }, [specializationState]);
  return {
    entriesPositions,
    setSpecializationState,
    position,
    specializationState
  };
};
var useGetLocation = (country, region, city, entrieCity) => {
  const countryClient = new Countries();
  const [newCountry, setNewContry] = (0, import_react7.useState)([country || ""]);
  const [newRegion, setNewRegion] = (0, import_react7.useState)([region || ""]);
  const [entriesRegions, setEntriesRegions] = (0, import_react7.useState)();
  const [newCity, setNewCity] = (0, import_react7.useState)([city || ""]);
  const [newEntriesCity, setNewEntriesCity] = (0, import_react7.useState)(entrieCity);
  const [isInitialRegion, setIsInitialRegion] = (0, import_react7.useState)(region !== "");
  const getRegionFromCountry = async () => {
    const response = await countryClient.regionsDetail(newCountry[0] || "");
    const dataRegion = response.data;
    if (validate_default(region || "")) {
      const dataRegionId = getIdFromDictionaries(dataRegion, region);
      setNewRegion([dataRegionId || ""]);
    } else {
      setNewRegion(newCountry[0] === country ? [region || ""] : [""]);
    }
    setEntriesRegions(dataRegion);
  };
  const getCityFromRegion = async () => {
    if (newRegion[0]) {
      const response = await countryClient.regionsLocationDetail(newCountry[0], newRegion[0]);
      const dataCity = response.data;
      if (validate_default(city || newRegion[0])) {
        const dataCityId = getIdFromDictionaries(dataCity, city);
        if (isInitialRegion) {
          setNewCity([dataCityId || ""]);
        }
        setNewEntriesCity(dataCity);
      } else {
        if (isInitialRegion) {
          setNewCity(newRegion[0] === region ? [city || ""] : [""]);
        }
        setNewEntriesCity(dataCity);
      }
    } else {
      setIsInitialRegion(false);
      setNewEntriesCity(entrieCity);
      setNewCity([""]);
    }
  };
  const getRegionFromCity = async () => {
    if (newCity[0]) {
      const response = await apiCall(`/locations/${newCity[0]}`, "GET");
      if (response && response.region_id) {
        setNewRegion([response.region_id]);
      }
    }
  };
  (0, import_react7.useEffect)(() => {
    if (newCountry[0])
      getRegionFromCountry();
  }, [newCountry]);
  (0, import_react7.useEffect)(() => {
    if (newRegion[0]) {
      setIsInitialRegion(true);
    } else {
      setIsInitialRegion(false);
    }
    getCityFromRegion();
  }, [newRegion]);
  (0, import_react7.useEffect)(() => {
    if (!newRegion[0] && newCity[0] && newCountry[0]) {
      getRegionFromCity();
    }
  }, [newCity, newCountry]);
  return {
    entriesRegions,
    newRegion,
    setNewRegion,
    newCountry,
    setNewContry,
    newEntriesCity,
    newCity,
    setNewCity
  };
};
var useCheckIncompleteness = (resume, vacancy) => {
  const [incompletenessState, setIncompletenessState] = (0, import_react7.useState)(false);
  (0, import_react7.useEffect)(() => {
    if (resume && vacancy) {
      setIncompletenessState(!checkCompleteness(resume, vacancy));
    } else if (resume) {
      setIncompletenessState(!checkCompleteness(resume, null));
    } else if (vacancy) {
      setIncompletenessState(!checkCompleteness(null, vacancy));
    }
  }, [resume, vacancy]);
  return incompletenessState;
};
var useCheckIncompleteEntityInList = (resumes, vacancies) => {
  const [hasIncompleteEntity, setHasIncompleteEntity] = (0, import_react7.useState)(false);
  (0, import_react7.useEffect)(() => {
    const result = hasIncompleteEntity;
    if (vacancies) {
      setHasIncompleteEntity(vacancies?.some((vacancy) => !checkCompleteness(null, vacancy)));
    } else if (resumes) {
      setHasIncompleteEntity(resumes?.some((resume) => !checkCompleteness(resume, null)));
    }
    return () => {
      if (result === true) {
        setHasIncompleteEntity(true);
      }
    };
  }, [resumes, vacancies]);
  return hasIncompleteEntity;
};
var useModalForParams = (param) => {
  const [visibilityModal, setVisibilityModal] = (0, import_react7.useState)(false);
  const [initialRender, setInitialRender] = (0, import_react7.useState)(false);
  const location = useLocation();
  const navigate = useNavigate();
  (0, import_react7.useEffect)(() => {
    const urlParams = new URLSearchParams(location.search);
    const nameParam = urlParams.get(param);
    if (nameParam === "true" && !visibilityModal) {
      setVisibilityModal(true);
    } else if ((!nameParam || nameParam === "false") && visibilityModal) {
      setVisibilityModal(false);
    }
  }, [location.search]);
  (0, import_react7.useEffect)(() => {
    const urlParams = new URLSearchParams(window?.location?.search);
    if (!initialRender) {
      setInitialRender(true);
    } else if (!visibilityModal && urlParams.has(param)) {
      urlParams.delete(param);
      if (urlParams.toString() === "") {
        navigate(`${location.pathname}`);
      } else {
        navigate(`${location.pathname}?${urlParams.toString()}`);
      }
    }
  }, [visibilityModal]);
  return {
    visibilityModal,
    setVisibilityModal
  };
};

// app/components/common/Box/index.tsx
var Box = styled_components_browser_esm_default.div.withConfig({
  displayName: "Box",
  componentId: "sc-1b0y2fu-0"
})(["display:", ";flex-direction:", ";justify-content:", ";align-items:", ";align-self:", ";flex:", ";flex-grow:", ";flex-wrap:", ";gap:", ";padding:", ";margin:", ";width:", ";min-width:", ";max-width:", ";height:", ";min-height:", ";max-height:", ";background-color:", ";border:", ";border-top:", ";border-radius:", ";text-align:", ";"], ({
  display = "flex"
}) => display, ({
  flexDirection
}) => flexDirection, ({
  justifyContent
}) => justifyContent, ({
  alignItems
}) => alignItems, ({
  alignSelf
}) => alignSelf, ({
  flex
}) => flex, ({
  flexGrow
}) => flexGrow, ({
  flexWrap
}) => flexWrap, ({
  gap
}) => gap, ({
  padding
}) => padding, ({
  margin
}) => margin, ({
  width
}) => width, ({
  minWidth
}) => minWidth, ({
  maxWidth
}) => maxWidth, ({
  height
}) => height, ({
  minHeight
}) => minHeight, ({
  maxHeight
}) => maxHeight, ({
  backgroundColor
}) => backgroundColor, ({
  border
}) => border, ({
  borderTop
}) => borderTop, ({
  borderRadius
}) => borderRadius, ({
  textAlign
}) => textAlign);

// app/components/common/Text/enums.ts
var TextVariantEnum = {
  textHeading1: "textHeading1",
  textHeading2: "textHeading2",
  textHeading3: "textHeading3",
  textBody1: "textBody1",
  textBody1medium: "textBody1medium",
  textBody2: "textBody2",
  textBody2medium: "textBody2medium",
  textSmall: "textSmall",
  textSmallmedium: "textSmallmedium",
  textMini: "textMini"
};

// app/components/common/Text/index.tsx
var FONT_SIZES_MOB = {
  [TextVariantEnum.textHeading1]: "28px",
  [TextVariantEnum.textHeading2]: "24px",
  [TextVariantEnum.textHeading3]: "18px",
  [TextVariantEnum.textBody1]: "16px",
  [TextVariantEnum.textBody1medium]: "16px",
  [TextVariantEnum.textBody2]: "14px",
  [TextVariantEnum.textBody2medium]: "14px",
  [TextVariantEnum.textSmall]: "12px",
  [TextVariantEnum.textSmallmedium]: "12px",
  [TextVariantEnum.textMini]: "9px"
};
var FONT_SIZES_TAB = {
  [TextVariantEnum.textHeading1]: "48px",
  [TextVariantEnum.textHeading2]: "32px",
  [TextVariantEnum.textHeading3]: "26px",
  [TextVariantEnum.textBody1]: "18px",
  [TextVariantEnum.textBody1medium]: "18px",
  [TextVariantEnum.textBody2]: "16px",
  [TextVariantEnum.textBody2medium]: "16px",
  [TextVariantEnum.textSmall]: "12px",
  [TextVariantEnum.textSmallmedium]: "12px",
  [TextVariantEnum.textMini]: "9px"
};
var FONT_SIZES_DESC = {
  [TextVariantEnum.textHeading1]: "48px",
  [TextVariantEnum.textHeading2]: "32px",
  [TextVariantEnum.textHeading3]: "26px",
  [TextVariantEnum.textBody1]: "18px",
  [TextVariantEnum.textBody1medium]: "18px",
  [TextVariantEnum.textBody2]: "16px",
  [TextVariantEnum.textBody2medium]: "16px",
  [TextVariantEnum.textSmall]: "12px",
  [TextVariantEnum.textSmallmedium]: "12px",
  [TextVariantEnum.textMini]: "9px"
};
var FONT_WEIGHTS_MOB = {
  [TextVariantEnum.textHeading1]: "700",
  [TextVariantEnum.textHeading2]: "700",
  [TextVariantEnum.textHeading3]: "700",
  [TextVariantEnum.textBody1]: "400",
  [TextVariantEnum.textBody1medium]: "500",
  [TextVariantEnum.textBody2]: "400",
  [TextVariantEnum.textBody2medium]: "500",
  [TextVariantEnum.textSmall]: "400",
  [TextVariantEnum.textSmallmedium]: "500",
  [TextVariantEnum.textMini]: "500"
};
var FONT_WEIGHTS_TAB = {
  [TextVariantEnum.textHeading1]: "700",
  [TextVariantEnum.textHeading2]: "700",
  [TextVariantEnum.textHeading3]: "700",
  [TextVariantEnum.textBody1]: "400",
  [TextVariantEnum.textBody1medium]: "500",
  [TextVariantEnum.textBody2]: "400",
  [TextVariantEnum.textBody2medium]: "500",
  [TextVariantEnum.textSmall]: "400",
  [TextVariantEnum.textSmallmedium]: "500",
  [TextVariantEnum.textMini]: "500"
};
var FONT_WEIGHTS_DESC = {
  [TextVariantEnum.textHeading1]: "700",
  [TextVariantEnum.textHeading2]: "700",
  [TextVariantEnum.textHeading3]: "700",
  [TextVariantEnum.textBody1]: "400",
  [TextVariantEnum.textBody1medium]: "500",
  [TextVariantEnum.textBody2]: "400",
  [TextVariantEnum.textBody2medium]: "500",
  [TextVariantEnum.textSmall]: "400",
  [TextVariantEnum.textSmallmedium]: "500",
  [TextVariantEnum.textMini]: "500"
};
var LINE_HEIGHTS_MOB = {
  [TextVariantEnum.textHeading1]: "36px",
  [TextVariantEnum.textHeading2]: "30px",
  [TextVariantEnum.textHeading3]: "24px",
  [TextVariantEnum.textBody1]: "24px",
  [TextVariantEnum.textBody1medium]: "24px",
  [TextVariantEnum.textBody2]: "18px",
  [TextVariantEnum.textBody2medium]: "18px",
  [TextVariantEnum.textSmall]: "16px",
  [TextVariantEnum.textSmallmedium]: "16px",
  [TextVariantEnum.textMini]: "12px"
};
var LINE_HEIGHTS_TAB = {
  [TextVariantEnum.textHeading1]: "56px",
  [TextVariantEnum.textHeading2]: "40px",
  [TextVariantEnum.textHeading3]: "32px",
  [TextVariantEnum.textBody1]: "24px",
  [TextVariantEnum.textBody1medium]: "24px",
  [TextVariantEnum.textBody2]: "24px",
  [TextVariantEnum.textBody2medium]: "24px",
  [TextVariantEnum.textSmall]: "16px",
  [TextVariantEnum.textSmallmedium]: "12px",
  [TextVariantEnum.textMini]: "12px"
};
var LINE_HEIGHTS_DESC = {
  [TextVariantEnum.textHeading1]: "56px",
  [TextVariantEnum.textHeading2]: "40px",
  [TextVariantEnum.textHeading3]: "32px",
  [TextVariantEnum.textBody1]: "24px",
  [TextVariantEnum.textBody1medium]: "24px",
  [TextVariantEnum.textBody2]: "24px",
  [TextVariantEnum.textBody2medium]: "24px",
  [TextVariantEnum.textSmall]: "24px",
  [TextVariantEnum.textSmallmedium]: "24px",
  [TextVariantEnum.textMini]: "12px"
};
var Text = styled_components_browser_esm_default.span.withConfig({
  displayName: "Text",
  componentId: "sc-89rjml-0"
})(["color:", ";font-style:", ";letter-spacing:-0.026em;font-size:", ";font-weight:", ";line-height:", ";transition:all 0.2s cubic-bezier(0.2,0,0,1);@media (min-width:768px){font-size:", ";font-weight:", ";line-height:", ";}@media (min-width:1024px){font-size:", ";font-weight:", ";line-height:", ";}"], ({
  color,
  theme
}) => color || theme.defaultTextColor, (props) => props.fontStyle, ({
  variant = TextVariantEnum.textBody1
}) => FONT_SIZES_MOB[variant], ({
  variant = TextVariantEnum.textBody1
}) => FONT_WEIGHTS_MOB[variant], ({
  variant = TextVariantEnum.textBody1
}) => LINE_HEIGHTS_MOB[variant], ({
  variant = TextVariantEnum.textBody1
}) => FONT_SIZES_TAB[variant], ({
  variant = TextVariantEnum.textBody1
}) => FONT_WEIGHTS_TAB[variant], ({
  variant = TextVariantEnum.textBody1
}) => LINE_HEIGHTS_TAB[variant], ({
  variant = TextVariantEnum.textBody1
}) => FONT_SIZES_DESC[variant], ({
  variant = TextVariantEnum.textBody1
}) => FONT_WEIGHTS_DESC[variant], ({
  variant = TextVariantEnum.textBody1
}) => LINE_HEIGHTS_DESC[variant]);

// app/types/enums/iconEnum.ts
var IconEnum = {
  bell: "bell",
  bellPush: "bellPush",
  closeMd: "closeMd",
  closeSm: "closeSm",
  down: "down",
  email: "email",
  emailPush: "emailPush",
  left: "left",
  leftLine: "leftLine",
  logo: "logo",
  map: "map",
  menu: "menu",
  pensil: "pensil",
  right: "right",
  rightLine: "rightLine",
  search: "search",
  show: "show",
  up: "up",
  google: "google",
  fb: "fb",
  arrowLeft: "arrowLeft",
  arrowRight: "arrowRight",
  cart: "cart",
  copy: "copy",
  verifed: "verifed",
  chat: "chat",
  navi: "navi",
  noteEdit: "noteEdit",
  noteSearch: "noteSearch",
  user: "user",
  view: "view",
  viewHide: "viewHide",
  filter: "filter",
  download: "download",
  share: "share",
  attention: "attention",
  attentionInfo: "attentionInfo",
  attentionError: "attentionError",
  attentionStop: "attentionStop",
  attentionSuccess: "attentionSuccess",
  attentionNotVerified: "attentionNotVerified",
  attentionVerified: "attentionVerified",
  stroke: "stroke",
  editPencilLine: "editPencilLine",
  notVerifed: "notVerifed",
  statusApproved: "statusApproved",
  statusExpectation: "statusExpectation",
  statusWarning: "statusWarning",
  blackCamera: "blackCamera",
  blackMail: "blackMail",
  blackWarning: "blackWarning",
  emojiBriefcase: "emojiBriefcase",
  emojiDocument: "emojiDocument",
  emojiFaq: "emojiFaq",
  emojiShield: "emojiShield",
  emojiStar: "emojiStar",
  emojiStar2: "emojiStar2",
  emojiZzz: "emojiZzz",
  warning: "warning"
};

// app/components/common/Icons/Attention.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function SvgAttention(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M10.754 3.459a1.92 1.92 0 0 1 2.492 0l1.22 1.04c.308.262.69.42 1.094.453l1.599.128A1.92 1.92 0 0 1 18.92 6.84l.128 1.6c.032.402.19.785.453 1.092l1.04 1.221a1.92 1.92 0 0 1 0 2.492l-1.04 1.22c-.262.308-.42.69-.453 1.094l-.128 1.599a1.92 1.92 0 0 1-1.761 1.761l-1.6.128c-.402.032-.785.19-1.092.453l-1.221 1.04a1.92 1.92 0 0 1-2.492 0l-1.22-1.04a1.921 1.921 0 0 0-1.094-.453l-1.599-.128A1.92 1.92 0 0 1 5.08 17.16l-.128-1.6a1.92 1.92 0 0 0-.453-1.092l-1.04-1.221a1.92 1.92 0 0 1 0-2.492l1.04-1.22c.262-.308.42-.69.453-1.094l.128-1.599A1.92 1.92 0 0 1 6.84 5.08l1.6-.128a1.92 1.92 0 0 0 1.092-.453l1.221-1.04ZM12 8v5", stroke: "#ED6C02", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/Attention.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M12.5 16a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z", fill: "#fff", stroke: "#ED6C02" }, void 0, false, {
      fileName: "app/components/common/Icons/Attention.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/Attention.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Attention_default = SvgAttention;

// app/components/common/Icons/AttentionNotVerified.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function SvgAttentionNotVerified(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M10.754 3.459a1.92 1.92 0 0 1 2.492 0l1.22 1.04c.308.262.69.42 1.094.453l1.599.128A1.92 1.92 0 0 1 18.92 6.84l.128 1.6c.032.402.19.785.453 1.092l1.04 1.221a1.92 1.92 0 0 1 0 2.492l-1.04 1.22c-.262.308-.42.69-.453 1.094l-.128 1.599a1.92 1.92 0 0 1-1.761 1.761l-1.6.128c-.402.032-.785.19-1.092.453l-1.221 1.04a1.92 1.92 0 0 1-2.492 0l-1.22-1.04a1.921 1.921 0 0 0-1.094-.453l-1.599-.128A1.92 1.92 0 0 1 5.08 17.16l-.128-1.6a1.92 1.92 0 0 0-.453-1.092l-1.04-1.221a1.92 1.92 0 0 1 0-2.492l1.04-1.22c.262-.308.42-.69.453-1.094l.128-1.599A1.92 1.92 0 0 1 6.84 5.08l1.6-.128a1.92 1.92 0 0 0 1.092-.453l1.221-1.04Z", fill: "#ED6C02", stroke: "#ED6C02", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/AttentionNotVerified.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M12 8v5", stroke: "#FFF4E5", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/AttentionNotVerified.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M12.5 16a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z", fill: "#fff", stroke: "#FFF4E5" }, void 0, false, {
      fileName: "app/components/common/Icons/AttentionNotVerified.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/AttentionNotVerified.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var AttentionNotVerified_default = SvgAttentionNotVerified;

// app/components/common/Icons/AttentionVerified.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function SvgAttentionVerified(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("g", { strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { d: "M10.754 3.459a1.92 1.92 0 0 1 2.492 0l1.22 1.04c.308.262.69.42 1.094.453l1.599.128A1.92 1.92 0 0 1 18.92 6.84l.128 1.6c.032.402.19.785.453 1.092l1.04 1.221a1.92 1.92 0 0 1 0 2.492l-1.04 1.22c-.262.308-.42.69-.453 1.094l-.128 1.599a1.92 1.92 0 0 1-1.761 1.761l-1.6.128c-.402.032-.785.19-1.092.453l-1.221 1.04a1.92 1.92 0 0 1-2.492 0l-1.22-1.04a1.921 1.921 0 0 0-1.094-.453l-1.599-.128A1.92 1.92 0 0 1 5.08 17.16l-.128-1.6a1.92 1.92 0 0 0-.453-1.092l-1.04-1.221a1.92 1.92 0 0 1 0-2.492l1.04-1.22c.262-.308.42-.69.453-1.094l.128-1.599A1.92 1.92 0 0 1 6.84 5.08l1.6-.128a1.92 1.92 0 0 0 1.092-.453l1.221-1.04Z", fill: "#3C79F5", stroke: "#3C79F5" }, void 0, false, {
      fileName: "app/components/common/Icons/AttentionVerified.tsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { d: "m15 10-4 4-2-2", stroke: "#ECF2FE" }, void 0, false, {
      fileName: "app/components/common/Icons/AttentionVerified.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/AttentionVerified.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/AttentionVerified.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var AttentionVerified_default = SvgAttentionVerified;

// app/components/common/Icons/Search.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function SvgSearch(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { d: "m15 15 6 6m-11-4a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z", stroke: "CurrentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/components/common/Icons/Search.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/Search.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Search_default = SvgSearch;

// app/components/common/Icons/ArrowLeft.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function SvgArrowLeft(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M19 12H5M11 18l-6-6 6-6", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/components/common/Icons/ArrowLeft.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/ArrowLeft.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var ArrowLeft_default = SvgArrowLeft;

// app/components/common/Icons/ArrowRight.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
function SvgArrowRight(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { d: "m10 8 4 4-4 4", stroke: "#566178", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/components/common/Icons/ArrowRight.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/ArrowRight.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var ArrowRight_default = SvgArrowRight;

// app/components/common/Icons/AttentionError.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
function SvgAttentionError(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z", stroke: "#BA2320", strokeWidth: 2, strokeMiterlimit: 10, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/AttentionError.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { d: "M11.95 15.45h.1v.1h-.1v-.1ZM12 8.45v4", stroke: "#BA2320", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/AttentionError.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/AttentionError.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var AttentionError_default = SvgAttentionError;

// app/components/common/Icons/AttentionInfo.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
function SvgAttentionInfo(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("path", { d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 11v5", stroke: "#3C79F5", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/AttentionInfo.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("path", { d: "M11.95 8h.1v.1h-.1V8Z", stroke: "#3C79F5", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/AttentionInfo.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/AttentionInfo.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var AttentionInfo_default = SvgAttentionInfo;

// app/components/common/Icons/AttentionStop.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
function SvgAttentionStop(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", { d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z", stroke: "#BA2320", strokeWidth: 2, strokeMiterlimit: 10, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/AttentionStop.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", { d: "m5.75 5.75 12.5 12.5", stroke: "#BA2320", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/AttentionStop.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/AttentionStop.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var AttentionStop_default = SvgAttentionStop;

// app/components/common/Icons/AttentionSuccess.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
function SvgAttentionSuccess(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("g", { stroke: "#214923", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("path", { d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z", strokeMiterlimit: 10 }, void 0, false, {
      fileName: "app/components/common/Icons/AttentionSuccess.tsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("path", { d: "m15 10-4 4-2-2" }, void 0, false, {
      fileName: "app/components/common/Icons/AttentionSuccess.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/AttentionSuccess.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/AttentionSuccess.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var AttentionSuccess_default = SvgAttentionSuccess;

// app/components/common/Icons/Bell.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
function SvgBell(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { d: "M9 21h6M5.269 9.75A6.74 6.74 0 0 1 12.051 3c3.712.028 6.68 3.113 6.68 6.835v.665c0 3.358.703 5.306 1.322 6.371A.75.75 0 0 1 19.408 18H4.592a.749.749 0 0 1-.645-1.13c.62-1.064 1.322-3.013 1.322-6.37v-.75Z", stroke: "CurrentColor", strokeWidth: 1.44, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/components/common/Icons/Bell.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/Bell.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Bell_default = SvgBell;

// app/components/common/Icons/BellPush.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime());
function SvgBellPush(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("path", { d: "M9 21h6M5.269 9.75A6.74 6.74 0 0 1 12.051 3c3.712.028 6.68 3.113 6.68 6.835v.665c0 3.358.703 5.306 1.322 6.371A.75.75 0 0 1 19.408 18H4.592a.749.749 0 0 1-.645-1.13c.62-1.064 1.322-3.013 1.322-6.37v-.75Z", stroke: "CurrentColor", strokeWidth: 1.44, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/BellPush.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("circle", { cx: 19, cy: 6, r: 4, fill: "#BA2320" }, void 0, false, {
      fileName: "app/components/common/Icons/BellPush.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/BellPush.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var BellPush_default = SvgBellPush;

// app/components/common/Icons/BlackCamera.tsx
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime());
function SvgBlackCamera(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("path", { d: "M21 6h-3.4l-.386-1.287A1 1 0 0 0 16.256 4H8.344a1 1 0 0 0-.958.713L7 6H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm-9 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z", fill: "#454857" }, void 0, false, {
    fileName: "app/components/common/Icons/BlackCamera.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/BlackCamera.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var BlackCamera_default = SvgBlackCamera;

// app/components/common/Icons/BlackMail.tsx
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime());
function SvgBlackMail(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("path", { d: "M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-1.5 4.868-7 4a1 1 0 0 1-.992 0l-7-4A1 1 0 1 1 5.5 7.132l6.5 3.717 6.5-3.717a1.002 1.002 0 0 1 1 1.736Z", fill: "#454857" }, void 0, false, {
    fileName: "app/components/common/Icons/BlackMail.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/BlackMail.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var BlackMail_default = SvgBlackMail;

// app/components/common/Icons/BlackWarning.tsx
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime());
function SvgBlackWarning(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("g", { strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("path", { d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z", fill: "#454857", stroke: "#454857", strokeMiterlimit: 10 }, void 0, false, {
      fileName: "app/components/common/Icons/BlackWarning.tsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("path", { d: "M11.95 15.45h.1v.1h-.1v-.1ZM12 8.45v4", stroke: "#EDEFF2" }, void 0, false, {
      fileName: "app/components/common/Icons/BlackWarning.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/BlackWarning.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/BlackWarning.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var BlackWarning_default = SvgBlackWarning;

// app/components/common/Icons/Cart.tsx
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime());
function SvgCart(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("svg", { width: 25, height: 24, viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("path", { d: "M18.5 6h-12v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6ZM4.5 6h16M15.5 3h-6a1 1 0 0 0-1 1v2h8V4a1 1 0 0 0-1-1Z", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/components/common/Icons/Cart.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/Cart.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Cart_default = SvgCart;

// app/components/common/Icons/Chat.tsx
var import_jsx_dev_runtime18 = __toESM(require_jsx_dev_runtime());
function SvgChat(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("path", { d: "M21 12a9 9 0 0 1-13.815 7.605L3 21l1.395-4.185A9 9 0 1 1 21 12Z", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/Chat.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("path", { d: "m15 10-4 4-2-2", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/Chat.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/Chat.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Chat_default = SvgChat;

// app/components/common/Icons/CloseMD.tsx
var import_jsx_dev_runtime19 = __toESM(require_jsx_dev_runtime());
function SvgCloseMd(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("path", { d: "M18 18 6 6M18 6 6 18", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/components/common/Icons/CloseMD.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/CloseMD.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var CloseMD_default = SvgCloseMd;

// app/components/common/Icons/CloseSM.tsx
var import_jsx_dev_runtime20 = __toESM(require_jsx_dev_runtime());
function SvgCloseSm(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("path", { d: "M16 16 8 8M16 8l-8 8", stroke: "#454857", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/components/common/Icons/CloseSM.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/CloseSM.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var CloseSM_default = SvgCloseSm;

// app/components/common/Icons/Copy.tsx
var import_jsx_dev_runtime21 = __toESM(require_jsx_dev_runtime());
function SvgCopy(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("svg", { width: 25, height: 24, viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("path", { d: "M13.5 21h-9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5.586a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1Z", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/Copy.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("path", { d: "M10.5 6V4a1 1 0 0 1 1-1h5.586a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V17a1 1 0 0 1-1 1h-6", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/Copy.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("path", { d: "M14.5 11h-4a1 1 0 0 1-1-1V6M21.5 8h-4a1 1 0 0 1-1-1V3", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/Copy.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/Copy.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Copy_default = SvgCopy;

// app/components/common/Icons/Down.tsx
var import_jsx_dev_runtime22 = __toESM(require_jsx_dev_runtime());
function SvgDown(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("path", { d: "m19 9-7 7-7-7", stroke: "CurrentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/components/common/Icons/Down.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/Down.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Down_default = SvgDown;

// app/components/common/Icons/Download.tsx
var import_jsx_dev_runtime23 = __toESM(require_jsx_dev_runtime());
function SvgDownload(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("path", { d: "m15 14-3 3-3-3", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/Download.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("path", { d: "M4 17v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3m-8 0V3v14Z", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/Download.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/Download.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Download_default = SvgDownload;

// app/components/common/Icons/EditPencilLine.tsx
var import_jsx_dev_runtime24 = __toESM(require_jsx_dev_runtime());
function SvgEditPencilLine(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("path", { d: "M4 20h16M4 20h4L19.293 8.707a1 1 0 0 0 0-1.414l-2.586-2.586a1 1 0 0 0-1.414 0L4 16v4Z", stroke: "#454857", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/components/common/Icons/EditPencilLine.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/EditPencilLine.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var EditPencilLine_default = SvgEditPencilLine;

// app/components/common/Icons/Email.tsx
var import_jsx_dev_runtime25 = __toESM(require_jsx_dev_runtime());
function SvgEmail(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("path", { d: "m20.5 6-7.177 6.332a2 2 0 0 1-2.646 0L3.5 6M5 5.25h14a2 2 0 0 1 2 2v9.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9.5a2 2 0 0 1 2-2Z", stroke: "CurrentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/components/common/Icons/Email.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/Email.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Email_default = SvgEmail;

// app/components/common/Icons/EmojiBriefcase.tsx
var import_jsx_dev_runtime26 = __toESM(require_jsx_dev_runtime());
function SvgEmojiBriefcase(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("svg", { width: 37, height: 36, viewBox: "0 0 37 36", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("path", { d: "M32.473 8h-6V4a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v4h-6a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4Zm-20-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h-12V6Z", fill: "#9A4E1C" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiBriefcase.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("path", { d: "M36.473 20a4 4 0 0 1-4 4h-28a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v8Z", fill: "#662113" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiBriefcase.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("path", { d: "M36.473 18a4 4 0 0 1-4 4h-28a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v6Z", fill: "#9A4E1C" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiBriefcase.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("path", { d: "M22.473 18a2 2 0 0 1-2 2h-4a2 2 0 0 1 0-4h4a2 2 0 0 1 2 2Z", fill: "#CCD6DD" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiBriefcase.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/EmojiBriefcase.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var EmojiBriefcase_default = SvgEmojiBriefcase;

// app/components/common/Icons/EmojiDocument.tsx
var import_jsx_dev_runtime27 = __toESM(require_jsx_dev_runtime());
function SvgEmojiDocument(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("svg", { width: 35, height: 36, viewBox: "0 0 35 36", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("path", { d: "M30.001 32a4 4 0 0 1-4 4h-22a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h22a4 4 0 0 1 4 4v28Z", fill: "#CCD6DD" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiDocument.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("path", { d: "M26.001 24a1 1 0 0 1-1 1h-20a1 1 0 1 1 0-2h20a1 1 0 0 1 1 1Zm-16 4a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1Zm16-20a1 1 0 0 1-1 1h-20a1 1 0 0 1 0-2h20a1 1 0 0 1 1 1Zm0 4a1 1 0 0 1-1 1h-20a1 1 0 1 1 0-2h20a1 1 0 0 1 1 1Zm0 4a1 1 0 0 1-1 1h-20a1 1 0 1 1 0-2h20a1 1 0 0 1 1 1Zm0 4a1 1 0 0 1-1 1h-20a1 1 0 1 1 0-2h20a1 1 0 0 1 1 1Z", fill: "#99AAB5" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiDocument.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("path", { d: "M30.001 6.272c-.827-.535-1.837-.579-2.52-.023l-.793.646-1.484 1.211-.1.08-2.376 1.938L10.85 19.81c-.437.357-.793 1.22-1.173 2.074-.378.85-.969 2.852-1.443 4.391-.148.25-1.065 1.846-.55 2.453.52.615 2.325.01 2.567-.076 1.626-.174 3.731-.373 4.648-.58.924-.21 1.854-.395 2.291-.752.008-.006.01-.018.017-.023l11.858-9.666.792-.646.144-.118V6.272Z", fill: "#66757F" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiDocument.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("path", { d: "M17.146 22.526s-1.274-1.881-2.117-2.553c-.672-.843-2.549-2.116-2.549-2.116-.448-.446-1.19-.48-1.629-.043-.437.438-.793 1.366-1.173 2.29-.472 1.147-1.276 4.155-1.768 5.753-.083.272.517-.45.503-.21-.01.187.027.394.074.58l-.146.16.208.067c.025.082.05.154.068.21l.16-.146c.186.047.393.084.58.074.24-.014-.484.587-.21.503 1.597-.493 4.606-1.296 5.751-1.768.924-.381 1.854-.736 2.291-1.174.44-.435.406-1.178-.043-1.627Z", fill: "#D99E82" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiDocument.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("path", { d: "M24.313 4.351a2.238 2.238 0 0 0 0 3.168l3.167 3.168a2.242 2.242 0 0 0 3.168 0l3.17-3.168a2.242 2.242 0 0 0 0-3.168l-3.17-3.168a2.24 2.24 0 0 0-3.168 0l-3.167 3.168Z", fill: "#EA596E" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiDocument.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("path", { d: "m10.85 17.815 3.17 3.17 3.165 3.166 11.881-11.879-6.337-6.336L10.85 17.815Z", fill: "#FFCC4D" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiDocument.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("path", { d: "M10.3 26.742s-2.06 1.133-2.617.576c-.557-.558.581-2.611.581-2.611s1.951.036 2.035 2.035Z", fill: "#292F33" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiDocument.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("path", { d: "m22.73 5.935 3.96-3.96 6.335 6.337-3.96 3.96-6.336-6.337Z", fill: "#CCD6DD" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiDocument.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("path", { d: "m25.104 3.558.792-.792 6.336 6.335-.792.792-6.336-6.335Zm-1.583 1.584.791-.79 6.336 6.334-.792.792-6.335-6.336Z", fill: "#99AAB5" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiDocument.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/EmojiDocument.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var EmojiDocument_default = SvgEmojiDocument;

// app/components/common/Icons/EmojiFaq.tsx
var import_jsx_dev_runtime28 = __toESM(require_jsx_dev_runtime());
function SvgEmojiFaq(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("svg", { width: 23, height: 24, viewBox: "0 0 23 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M11.34 22.679c6.262 0 11.339-5.077 11.339-11.34C22.679 5.077 17.602 0 11.339 0 5.077 0 0 5.077 0 11.34c0 6.262 5.077 11.339 11.34 11.339Z", fill: "#FFCB4C" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiFaq.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M9.02 14.02a.61.61 0 0 1-.208-.31.533.533 0 0 1 .394-.681c3.02-.681 5.054.909 5.14.977.256.204.306.563.115.803-.19.24-.552.268-.807.065-.074-.056-1.683-1.283-4.124-.732a.607.607 0 0 1-.51-.123ZM8.083 9.215c.783 0 1.418-.793 1.418-1.772 0-.978-.635-1.771-1.418-1.771-.782 0-1.417.793-1.417 1.771 0 .979.635 1.772 1.417 1.772ZM15.591 9.918c.783 0 1.418-.793 1.418-1.771 0-.979-.635-1.772-1.418-1.772-.783 0-1.417.793-1.417 1.772 0 .978.634 1.771 1.417 1.771Z", fill: "#65471B" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiFaq.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M10.856 23.43s.844-.273.954-.901c.115-.648-.417-.779-.417-.779s.695-.138.782-.917c.082-.735-.574-.91-.574-.91s.647-.266.677-1.026c.026-.64-.663-.952-.663-.952s3.36-.815 3.706-.895c.344-.08.88-.41.713-1.13-.166-.72-.803-.746-1.132-.669l-5.937 1.38-.96.222c-.36.085-.523-.073-.269-.341.339-.358.556-.753.631-1.41.08-.69-.155-1.543-.289-1.873-.25-.615-.67-1.1-1.156-1.267-.759-.26-1.298.214-1.029 1.041.403 1.237.139 2.251-.556 2.864-1.633 1.438-2.393 2.464-1.887 4.65.552 2.386 2.92 3.92 5.304 3.368l2.102-.454Z", fill: "#F19020" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiFaq.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M5.533 4.228a.617.617 0 0 1-.26-.266.533.533 0 0 1 .262-.742C8.38 2 10.67 3.192 10.766 3.243c.289.154.406.498.26.77-.143.27-.493.364-.781.212-.083-.042-1.89-.955-4.188.031a.61.61 0 0 1-.524-.028Zm8.095 2.501a.617.617 0 0 1-.242-.282.534.534 0 0 1 .312-.723c2.922-1.025 5.126.32 5.218.378.277.173.37.525.209.786-.162.26-.518.33-.795.158-.08-.048-1.819-1.081-4.18-.253a.617.617 0 0 1-.522-.064Z", fill: "#65471B" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiFaq.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/EmojiFaq.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var EmojiFaq_default = SvgEmojiFaq;

// app/components/common/Icons/EmojiShield.tsx
var import_jsx_dev_runtime29 = __toESM(require_jsx_dev_runtime());
function SvgEmojiShield(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("svg", { width: 33, height: 36, viewBox: "0 0 33 36", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("path", { d: "M31.045 3c-7-3-15-3-15-3s-8 0-15 3c-3 15 0 28 15 33 15-5 18-18 15-33Z", fill: "#CCD6DD" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiShield.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("path", { d: "M16.045 33.884C4.457 29.729.006 19.831 2.805 4.444 9.108 2.029 15.973 2 16.045 2c.071 0 6.958.04 13.24 2.444 2.8 15.387-1.652 25.285-13.24 29.44Z", fill: "#55ACEE" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiShield.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("path", { d: "M29.285 4.444C23.003 2.04 16.116 2 16.045 2v31.884c11.588-4.155 16.04-14.053 13.24-29.44Z", fill: "#269" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiShield.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/EmojiShield.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var EmojiShield_default = SvgEmojiShield;

// app/components/common/Icons/EmojiStar.tsx
var import_jsx_dev_runtime30 = __toESM(require_jsx_dev_runtime());
function SvgEmojiStar(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("svg", { width: 34, height: 33, viewBox: "0 0 34 33", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("path", { d: "m33.347 14.893-8.9-3.294L21.126.708a1 1 0 0 0-1.912 0L15.89 11.599l-8.9 3.294a1 1 0 0 0 0 1.876l8.895 3.293 3.324 11.223a1 1 0 0 0 1.918-.001l3.324-11.223 8.896-3.293a.998.998 0 0 0-.001-1.875Z", fill: "#FFAC33" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiStar.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("path", { d: "m13.347 25.894-2.314-.856-.9-3.3a.998.998 0 0 0-1.929-.001l-.9 3.3-2.313.856a1 1 0 0 0 0 1.876l2.301.853.907 3.622a1 1 0 0 0 1.94-.001l.907-3.622 2.301-.853a.997.997 0 0 0 0-1.874ZM9.009 4.23l-2.364-.875L5.769.99a.999.999 0 0 0-1.876 0l-.875 2.365-2.365.875a1 1 0 0 0 0 1.876l2.365.875.875 2.365a1 1 0 0 0 1.876 0l.875-2.365 2.365-.875a1 1 0 0 0 0-1.876Z", fill: "#FFCC4D" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiStar.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/EmojiStar.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var EmojiStar_default = SvgEmojiStar;

// app/components/common/Icons/EmojiStar2.tsx
var import_jsx_dev_runtime31 = __toESM(require_jsx_dev_runtime());
function SvgEmojiStar2(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("svg", { width: 36, height: 36, viewBox: "0 0 36 36", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("path", { d: "M28.84 17.637c-.987 1.044-1.633 3.067-1.438 4.494l.892 6.44c.197 1.427-.7 2.087-1.996 1.47l-5.85-2.797c-1.296-.62-3.409-.61-4.7.018L9.92 30.105c-1.29.628-2.193-.027-2.007-1.453l.843-6.449c.186-1.427-.475-3.444-1.47-4.48l-4.494-4.688c-.996-1.037-.655-2.103.755-2.366l6.37-1.187c1.41-.263 3.116-1.518 3.793-2.79L16.762.957c.675-1.271 1.79-1.274 2.473-.01L22.33 6.66c.686 1.265 2.4 2.506 3.814 2.758l6.378 1.14c1.412.252 1.761 1.315.774 2.36l-4.456 4.72Z", fill: "#FFAC33" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiStar2.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("path", { d: "M9.783 2.18c1.023 1.413 2.446 4.917 1.717 5.447-.728.531-3.607-1.91-4.63-3.323-1.022-1.413-.935-2.668-.13-3.254.803-.587 2.02-.282 3.043 1.13Zm19.348 2.124c-1.022 1.413-3.9 3.855-4.63 3.322-.73-.53.694-4.033 1.718-5.445 1.023-1.414 2.238-1.719 3.043-1.13.803.585.89 1.84-.13 3.253ZM16.625 33.29c0-1.746.898-5.42 1.801-5.42.897 0 1.798 3.674 1.797 5.42 0 1.746-.804 2.711-1.8 2.71-.994.001-1.798-.963-1.798-2.71Zm16.18-9.262c-1.656-.539-4.859-2.533-4.58-3.395.277-.858 4.037-.58 5.69-.04 1.655.54 2.321 1.604 2.013 2.555-.308.95-1.469 1.42-3.124.88ZM2.082 20.593c1.655-.54 5.414-.817 5.694.044.276.857-2.928 2.854-4.58 3.392-1.655.54-2.819.07-3.124-.88-.308-.95.354-2.015 2.01-2.556Z", fill: "#FFD983" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiStar2.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/EmojiStar2.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var EmojiStar2_default = SvgEmojiStar2;

// app/components/common/Icons/EmojiZzz.tsx
var import_jsx_dev_runtime32 = __toESM(require_jsx_dev_runtime());
function SvgEmojiZzz(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("svg", { width: 37, height: 36, viewBox: "0 0 37 36", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("path", { d: "M18.587 36c9.942 0 18-8.059 18-18s-8.059-18-18-18c-9.94 0-18 8.059-18 18s8.06 18 18 18Z", fill: "#FFCC4D" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiZzz.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("path", { d: "M18.587 29a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17.9 16.612a.501.501 0 0 0-.61-.014c-.013.01-1.26.902-3.703.902-2.44 0-3.69-.893-3.7-.9a.5.5 0 0 0-.757.603c.06.135 1.5 3.297 4.457 3.297 2.958 0 4.397-3.162 4.457-3.297a.498.498 0 0 0-.145-.59Zm10 0a.5.5 0 0 0-.61-.014c-.013.01-1.262.902-3.703.902-2.44 0-3.69-.893-3.7-.9a.5.5 0 0 0-.757.603c.06.135 1.5 3.297 4.457 3.297 2.958 0 4.397-3.162 4.457-3.297a.498.498 0 0 0-.145-.59Z", fill: "#664500" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiZzz.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("path", { d: "M35.017 12.534c.004-.044.023-.077.023-.123 0-.754-.548-1.188-1.225-1.188h-3.582l4.28-5.993c.205-.283.281-.453.281-.81 0-.736-.64-.85-.885-.85H28.56l-.032-.688s-1.409.831-1.503.888a1.174 1.174 0 0 0-.505.987c0 .754.546 1.187 1.225 1.187h3.15l-4.262 5.993c-.094.151-.244.433-.244.735 0 .622.508.924 1.111.924h6.315c.258 0 .515-.076.681-.176L36 12.532h-.982v.002Z", fill: "#FFAC33" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiZzz.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("path", { d: "M32.358 5.084H29.21c-.679 0-1.225-.433-1.225-1.187s.546-1.188 1.225-1.188h6.164c.245 0 .885.113.885.848 0 .358-.076.528-.282.811l-4.279 5.993h3.582c.677 0 1.225.433 1.225 1.187s-.548 1.187-1.225 1.187h-6.315c-.603 0-1.11-.302-1.11-.924 0-.302.15-.584.243-.735l4.261-5.992Z", fill: "#2A6797" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiZzz.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("path", { d: "M25.473 7.48c.003-.033.018-.058.018-.092 0-.564-.41-.889-.917-.889h-2.682l3.203-4.487c.156-.212.212-.339.212-.606 0-.55-.479-.635-.663-.635H20.64l-.024-.515s-1.055.622-1.125.665a.881.881 0 0 0-.378.74c0 .563.41.888.917.888h2.357l-3.19 4.487c-.07.113-.183.324-.183.55 0 .466.38.691.832.691h4.728c.193 0 .385-.057.51-.132l1.125-.665h-.736Z", fill: "#FFAC33" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiZzz.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("path", { d: "M23.483 1.903h-2.357c-.508 0-.917-.324-.917-.889 0-.564.41-.889.917-.889h4.615c.184 0 .663.085.663.635 0 .268-.057.395-.21.607L22.99 5.854h2.682c.505 0 .915.324.915.889s-.41.889-.917.889h-4.728c-.452 0-.832-.226-.832-.691 0-.226.113-.437.183-.55l3.19-4.488Z", fill: "#2A6797" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiZzz.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("path", { d: "M18.328 10.425c.003-.028.015-.049.015-.079 0-.483-.35-.761-.785-.761h-2.295l2.742-3.84c.132-.181.181-.29.181-.519 0-.471-.41-.544-.567-.544h-3.427l-.02-.441-.964.569a.754.754 0 0 0-.324.633c0 .483.35.761.785.761h2.017l-2.73 3.84c-.06.097-.157.278-.157.471 0 .399.326.592.712.592h4.047c.165 0 .33-.049.436-.113l.963-.569h-.629Z", fill: "#FFAC33" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiZzz.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("path", { d: "M16.624 5.652h-2.017c-.435 0-.785-.278-.785-.761s.35-.761.785-.761h3.95c.157 0 .567.073.567.544 0 .229-.048.338-.18.519L16.2 9.033h2.295c.434 0 .785.278.785.76 0 .484-.35.762-.785.762H14.45c-.386 0-.712-.193-.712-.592 0-.193.096-.374.157-.471l2.73-3.84Z", fill: "#2A6797" }, void 0, false, {
      fileName: "app/components/common/Icons/EmojiZzz.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/EmojiZzz.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var EmojiZzz_default = SvgEmojiZzz;

// app/components/common/Icons/Fb.tsx
var import_jsx_dev_runtime33 = __toESM(require_jsx_dev_runtime());
function SvgFb(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("svg", { width: 25, height: 24, viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.5 12c0-6.627-5.373-12-12-12S.5 5.373.5 12c0 5.989 4.388 10.954 10.125 11.855V15.47H7.577V12h3.048V9.356c0-3.008 1.792-4.67 4.533-4.67 1.313 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.956.925-1.956 1.875v2.25h3.328l-.532 3.47h-2.796v8.386C20.112 22.955 24.5 17.99 24.5 12Z", fill: "#1977F3" }, void 0, false, {
      fileName: "app/components/common/Icons/Fb.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m17.171 15.47.532-3.47h-3.328V9.749c0-.949.464-1.875 1.956-1.875h1.514V4.921s-1.374-.235-2.687-.235c-2.74 0-4.533 1.66-4.533 4.67V12H7.578v3.47h3.047v8.385a12.27 12.27 0 0 0 3.75 0V15.47h2.796Z", fill: "#fff" }, void 0, false, {
      fileName: "app/components/common/Icons/Fb.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/Fb.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Fb_default = SvgFb;

// app/components/common/Icons/Filter.tsx
var import_jsx_dev_runtime34 = __toESM(require_jsx_dev_runtime());
function SvgFilter(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("path", { d: "M10 18h11", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/Filter.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("path", { d: "M3 18h3", stroke: "CurrentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/Filter.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("path", { d: "M6 20v-4M20 12h1M3 12h13M16 14v-4M14 6h7M3 6h7M10 8V4", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/Filter.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/Filter.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Filter_default = SvgFilter;

// app/components/common/Icons/Google.tsx
var import_jsx_dev_runtime35 = __toESM(require_jsx_dev_runtime());
function SvgGoogle(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("g", { clipPath: "url(#a)", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("path", { d: "M24 12.275c0-.815-.067-1.635-.211-2.438H12.24v4.621h6.613a5.55 5.55 0 0 1-2.448 3.647v2.998h3.946C22.669 19.013 24 15.926 24 12.275Z", fill: "#4285F4" }, void 0, false, {
        fileName: "app/components/common/Icons/Google.tsx",
        lineNumber: 6,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("path", { d: "M12.24 24c3.303 0 6.088-1.063 8.116-2.897l-3.945-2.998c-1.098.732-2.515 1.146-4.166 1.146-3.194 0-5.902-2.112-6.873-4.951H1.3v3.09C3.38 21.444 7.612 24 12.24 24Z", fill: "#34A853" }, void 0, false, {
        fileName: "app/components/common/Icons/Google.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("path", { d: "M5.367 14.3a7.053 7.053 0 0 1 0-4.595V6.614H1.3a11.797 11.797 0 0 0 0 10.776l4.067-3.09Z", fill: "#FBBC04" }, void 0, false, {
        fileName: "app/components/common/Icons/Google.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("path", { d: "M12.24 4.749a6.727 6.727 0 0 1 4.697 1.799l3.496-3.426A11.9 11.9 0 0 0 12.24 0C7.61 0 3.379 2.557 1.3 6.614l4.066 3.091c.967-2.844 3.68-4.956 6.874-4.956Z", fill: "#EA4335" }, void 0, false, {
        fileName: "app/components/common/Icons/Google.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/Icons/Google.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("clipPath", { id: "a", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("path", { fill: "#fff", d: "M0 0h24v24H0z" }, void 0, false, {
      fileName: "app/components/common/Icons/Google.tsx",
      lineNumber: 13,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/common/Icons/Google.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/common/Icons/Google.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/Google.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Google_default = SvgGoogle;

// app/components/common/Icons/Left.tsx
var import_jsx_dev_runtime36 = __toESM(require_jsx_dev_runtime());
function SvgLeft(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("path", { d: "M12.833 15.667 7 9.833 12.833 4", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/components/common/Icons/Left.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/Left.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Left_default = SvgLeft;

// app/components/common/Icons/LeftLine.tsx
var import_jsx_dev_runtime37 = __toESM(require_jsx_dev_runtime());
function SvgLeftLine(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("path", { d: "M19 12H5m0 0 6 6m-6-6 6-6", stroke: "CurrentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/components/common/Icons/LeftLine.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/LeftLine.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var LeftLine_default = SvgLeftLine;

// app/components/common/Icons/Map.tsx
var import_jsx_dev_runtime38 = __toESM(require_jsx_dev_runtime());
function SvgMap(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("path", { d: "M5 9.923c0 4.852 4.244 8.864 6.123 10.402.27.22.405.332.606.388.156.044.386.044.542 0 .201-.056.336-.167.606-.388C14.756 18.787 19 14.775 19 9.923a6.885 6.885 0 0 0-2.05-4.895A7.04 7.04 0 0 0 12 3a7.04 7.04 0 0 0-4.95 2.028A6.884 6.884 0 0 0 5 9.923Z", stroke: "CurrentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/Map.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("path", { d: "M10 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z", stroke: "CurrentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/Map.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/Map.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Map_default = SvgMap;

// app/components/common/Icons/Menu.tsx
var import_jsx_dev_runtime39 = __toESM(require_jsx_dev_runtime());
function SvgMenu(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("path", { d: "M1 12h22M1 4h22M1 20h22", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/components/common/Icons/Menu.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/Menu.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Menu_default = SvgMenu;

// app/components/common/Icons/Navi.tsx
var import_jsx_dev_runtime40 = __toESM(require_jsx_dev_runtime());
function SvgNavi(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("path", { d: "m14.668 12.643-4.5-4.043a1 1 0 0 0-1.336 0l-4.5 4.043a1 1 0 0 0-.332.743V19a1 1 0 0 0 1 1h10v-6.614a1 1 0 0 0-.332-.743Z", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/Navi.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("path", { d: "M14.875 20H19a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v5", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/Navi.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/Navi.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Navi_default = SvgNavi;

// app/components/common/Icons/NoteEdit.tsx
var import_jsx_dev_runtime41 = __toESM(require_jsx_dev_runtime());
function SvgNoteEdit(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("path", { d: "M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/NoteEdit.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("path", { d: "M10 14h3l9-9-3-3-9 9v3ZM16 5l3 3", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/NoteEdit.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/NoteEdit.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var NoteEdit_default = SvgNoteEdit;

// app/components/common/Icons/NoteSearch.tsx
var import_jsx_dev_runtime42 = __toESM(require_jsx_dev_runtime());
function SvgNoteSearch(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("path", { d: "M10 20H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5M16 16l3 3", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/NoteSearch.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("path", { d: "M13.5 17a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/NoteSearch.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/NoteSearch.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var NoteSearch_default = SvgNoteSearch;

// app/components/common/Icons/NotVerifed.tsx
var import_jsx_dev_runtime43 = __toESM(require_jsx_dev_runtime());
function SvgNotVerifed(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M10.754 3.459a1.92 1.92 0 0 1 2.492 0l1.22 1.04c.308.262.69.42 1.094.453l1.599.128A1.92 1.92 0 0 1 18.92 6.84l.128 1.6c.032.402.19.785.453 1.092l1.04 1.221a1.92 1.92 0 0 1 0 2.492l-1.04 1.22c-.262.308-.42.69-.453 1.094l-.128 1.599a1.92 1.92 0 0 1-1.761 1.761l-1.6.128c-.402.032-.785.19-1.092.453l-1.221 1.04a1.92 1.92 0 0 1-2.492 0l-1.22-1.04a1.921 1.921 0 0 0-1.094-.453l-1.599-.128A1.92 1.92 0 0 1 5.08 17.16l-.128-1.6a1.92 1.92 0 0 0-.453-1.092l-1.04-1.221a1.92 1.92 0 0 1 0-2.492l1.04-1.22c.262-.308.42-.69.453-1.094l.128-1.599A1.92 1.92 0 0 1 6.84 5.08l1.6-.128a1.92 1.92 0 0 0 1.092-.453l1.221-1.04Z", fill: "#ED6C02", stroke: "#ED6C02", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/NotVerifed.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M12 8v5", stroke: "#fff", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/NotVerifed.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M12.5 16a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z", fill: "#fff", stroke: "#fff" }, void 0, false, {
      fileName: "app/components/common/Icons/NotVerifed.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/NotVerifed.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var NotVerifed_default = SvgNotVerifed;

// app/components/common/Icons/Pensil.tsx
var import_jsx_dev_runtime44 = __toESM(require_jsx_dev_runtime());
function SvgPensil(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("path", { d: "M4 20h4L19.293 8.707a1 1 0 0 0 0-1.414l-2.586-2.586a1 1 0 0 0-1.414 0L4 16v4ZM12 8l4 4", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/components/common/Icons/Pensil.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/Pensil.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Pensil_default = SvgPensil;

// app/components/common/Icons/Right.tsx
var import_jsx_dev_runtime45 = __toESM(require_jsx_dev_runtime());
function SvgRight(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("path", { d: "m7 15.667 5.834-5.834L7.001 4", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/components/common/Icons/Right.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/Right.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Right_default = SvgRight;

// app/components/common/Icons/Share.tsx
var import_jsx_dev_runtime46 = __toESM(require_jsx_dev_runtime());
function SvgShare(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("path", { d: "M20.63 10.23 13 4v4c-7.1.28-10 6.13-10 12 0 0 3.88-5.69 10-6v4l7.63-6.23a1 1 0 0 0 0-1.54Z", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/components/common/Icons/Share.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/Share.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Share_default = SvgShare;

// app/components/common/Icons/Show.tsx
var import_jsx_dev_runtime47 = __toESM(require_jsx_dev_runtime());
function SvgShow(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("path", { d: "M3.587 13.779c1.78 1.769 4.883 4.22 8.413 4.22 3.53 0 6.634-2.451 8.413-4.22.47-.467.705-.7.854-1.159.107-.327.107-.913 0-1.24-.15-.458-.385-.692-.854-1.159C18.633 8.452 15.531 6 12 6c-3.53 0-6.634 2.452-8.413 4.221-.47.467-.705.7-.854 1.159-.107.327-.107.913 0 1.24.15.458.384.692.854 1.159Z", stroke: "CurrentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/Show.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("path", { d: "M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z", stroke: "CurrentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/Show.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/Show.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Show_default = SvgShow;

// app/components/common/Icons/StatusApproved.tsx
var import_jsx_dev_runtime48 = __toESM(require_jsx_dev_runtime());
function SvgStatusApproved(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("path", { d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z", fill: "#214923", stroke: "#214923", strokeWidth: 2, strokeMiterlimit: 10, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/StatusApproved.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("path", { d: "m15 10-4 4-2-2", stroke: "#EDF7ED", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/StatusApproved.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/StatusApproved.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var StatusApproved_default = SvgStatusApproved;

// app/components/common/Icons/StatusExpectation.tsx
var import_jsx_dev_runtime49 = __toESM(require_jsx_dev_runtime());
function SvgStatusExpectation(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("path", { d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z", fill: "#ED6C02", stroke: "#ED6C02", strokeWidth: 2, strokeMiterlimit: 10, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/StatusExpectation.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("path", { d: "M12 7v5h5", stroke: "#FFF4E5", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/StatusExpectation.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/StatusExpectation.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var StatusExpectation_default = SvgStatusExpectation;

// app/components/common/Icons/StatusWarning.tsx
var import_jsx_dev_runtime50 = __toESM(require_jsx_dev_runtime());
function SvgStatusWarning(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("path", { d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z", fill: "#3B67C0", stroke: "#3B67C0", strokeWidth: 2, strokeMiterlimit: 10, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/StatusWarning.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("path", { d: "M11.95 15.453h.1v.1h-.1v-.1ZM12 8.453v4", stroke: "#ECF2FE", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/StatusWarning.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/StatusWarning.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var StatusWarning_default = SvgStatusWarning;

// app/components/common/Icons/Stroke.tsx
var import_jsx_dev_runtime51 = __toESM(require_jsx_dev_runtime());
function SvgStroke(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("svg", { width: 12, height: 10, viewBox: "0 0 12 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.061.422a1 1 0 0 1 .267 1.39l-5.085 7.5a1 1 0 0 1-1.525.154L.802 5.654A1 1 0 0 1 2.198 4.22l3.06 2.98L9.672.689a1 1 0 0 1 1.389-.267Z", fill: "#fff" }, void 0, false, {
    fileName: "app/components/common/Icons/Stroke.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/Stroke.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Stroke_default = SvgStroke;

// app/components/common/Icons/Up.tsx
var import_jsx_dev_runtime52 = __toESM(require_jsx_dev_runtime());
function SvgUp(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("path", { d: "m5 16 7-7 7 7", stroke: "CurrentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/components/common/Icons/Up.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/Up.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Up_default = SvgUp;

// app/components/common/Icons/User.tsx
var import_jsx_dev_runtime53 = __toESM(require_jsx_dev_runtime());
function SvgUser(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("path", { d: "M12 21a9 9 0 0 1-9-9v0a9 9 0 0 1 9-9v0a9 9 0 0 1 9 9v0a9 9 0 0 1-9 9v0Zm0-14a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm2.17 7.35a3.95 3.95 0 0 1-4.34 0 7 7 0 0 0-4.28 3.92 9.001 9.001 0 0 0 12.81.09l.09-.09a7 7 0 0 0-4.28-3.92v0Z", stroke: "CurrentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/components/common/Icons/User.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/User.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var User_default = SvgUser;

// app/components/common/Icons/Verifed.tsx
var import_jsx_dev_runtime54 = __toESM(require_jsx_dev_runtime());
function SvgVerifed(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("path", { d: "M10.754 3.459a1.92 1.92 0 0 1 2.492 0l1.22 1.04c.308.262.69.42 1.094.453l1.599.128A1.92 1.92 0 0 1 18.92 6.84l.128 1.6c.032.402.19.785.453 1.092l1.04 1.221a1.92 1.92 0 0 1 0 2.492l-1.04 1.22c-.262.308-.42.69-.453 1.094l-.128 1.599a1.92 1.92 0 0 1-1.761 1.761l-1.6.128c-.402.032-.785.19-1.092.453l-1.221 1.04a1.92 1.92 0 0 1-2.492 0l-1.22-1.04a1.921 1.921 0 0 0-1.094-.453l-1.599-.128A1.92 1.92 0 0 1 5.08 17.16l-.128-1.6a1.92 1.92 0 0 0-.453-1.092l-1.04-1.221a1.92 1.92 0 0 1 0-2.492l1.04-1.22c.262-.308.42-.69.453-1.094l.128-1.599A1.92 1.92 0 0 1 6.84 5.08l1.6-.128a1.92 1.92 0 0 0 1.092-.453l1.221-1.04Z", fill: "#3C79F5", stroke: "#3C79F5", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/Verifed.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("path", { d: "m9 11.5 2.243 2.485L15 10", stroke: "#fff", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/common/Icons/Verifed.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/Verifed.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Verifed_default = SvgVerifed;

// app/components/common/Icons/View.tsx
var import_jsx_dev_runtime55 = __toESM(require_jsx_dev_runtime());
function SvgView(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("path", { d: "M11.998 6C9.735 6 7.927 7.14 6.5 8.5 5.163 9.779 4.472 10.929 4 12c.472 1.071 1.167 2.221 2.5 3.5 1.43 1.36 3.235 2.5 5.498 2.5 2.264 0 4.075-1.14 5.502-2.5 1.337-1.279 2.028-2.429 2.5-3.5-.472-1.071-1.167-2.221-2.5-3.5C16.07 7.14 14.262 6 11.998 6Zm-6.687.879C6.947 5.314 9.193 4 11.998 4c2.806 0 5.052 1.314 6.687 2.879 1.625 1.553 2.712 3.407 3.23 4.682.114.282.114.596 0 .878-.518 1.275-1.605 3.132-3.23 4.682C17.05 18.686 14.804 20 11.998 20c-2.805 0-5.051-1.314-6.687-2.879-1.625-1.55-2.711-3.407-3.225-4.682a1.166 1.166 0 0 1 0-.878c.514-1.275 1.6-3.132 3.225-4.682Zm6.687 7.978c1.535 0 2.778-1.278 2.778-2.857 0-1.579-1.243-2.857-2.778-2.857h-.07c.046.182.07.375.07.571 0 1.261-.996 2.286-2.222 2.286-.19 0-.378-.025-.555-.071V12c0 1.579 1.243 2.857 2.777 2.857Zm0-7.428c1.179 0 2.31.481 3.143 1.339A4.639 4.639 0 0 1 16.442 12a4.639 4.639 0 0 1-1.301 3.232 4.382 4.382 0 0 1-3.143 1.34 4.382 4.382 0 0 1-3.142-1.34A4.639 4.639 0 0 1 7.554 12c0-1.212.468-2.375 1.302-3.232a4.382 4.382 0 0 1 3.142-1.34Z", fill: "CurrentColor" }, void 0, false, {
    fileName: "app/components/common/Icons/View.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icons/View.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var View_default = SvgView;

// app/components/common/Icons/ViewHide.tsx
var import_jsx_dev_runtime56 = __toESM(require_jsx_dev_runtime());
function SvgViewHide(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("path", { d: "M15.353 10.992c.066.217.11.44.132.664l-3.14-3.14a3.5 3.5 0 0 1 3.008 2.476Zm-6.836 1.357a3.5 3.5 0 0 1 .27-1.735l.787.787a2.5 2.5 0 0 0 3.026 3.026l.787.787a3.5 3.5 0 0 1-4.87-2.865Z", fill: "#454857", stroke: "#454857" }, void 0, false, {
      fileName: "app/components/common/Icons/ViewHide.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m16.626 18.446-1.504-1.68c-.995.584-2.05.948-3.122.948-1.562 0-3.085-.775-4.442-1.865-1.351-1.086-2.453-2.414-3.149-3.358a17.37 17.37 0 0 1-.241-.332A2.375 2.375 0 0 1 4.066 12c.02-.035.052-.086.102-.159.063-.091.14-.194.241-.332.681-.924 1.75-2.215 3.06-3.286L6.007 6.589c-1.379 1.179-2.478 2.52-3.177 3.468l-.075.1c-.321.43-.754 1.01-.754 1.844 0 .834.433 1.415.754 1.844l.075.1c.757 1.028 1.986 2.518 3.532 3.76C7.9 18.941 9.841 20 12 20c1.71 0 3.281-.664 4.626-1.554ZM8.731 4.784C9.738 4.307 10.837 4 12 4c2.16 0 4.1 1.06 5.639 2.296 1.545 1.242 2.774 2.733 3.53 3.76l.077.1c.321.43.754 1.01.754 1.844 0 .834-.433 1.415-.754 1.843l-.075.101a22.555 22.555 0 0 1-2.063 2.426l-1.449-1.618a20.356 20.356 0 0 0 2.173-2.594c.036-.051.07-.104.102-.158a2.364 2.364 0 0 0-.102-.159 15.66 15.66 0 0 0-.241-.332c-.696-.944-1.798-2.274-3.148-3.358C15.085 7.06 13.562 6.286 12 6.286c-.564 0-1.123.1-1.67.28l-1.6-1.782Z", fill: "#454857" }, void 0, false, {
      fileName: "app/components/common/Icons/ViewHide.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("path", { d: "m5 2 16 16", stroke: "#454857", strokeWidth: 2 }, void 0, false, {
      fileName: "app/components/common/Icons/ViewHide.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/ViewHide.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var ViewHide_default = SvgViewHide;

// app/components/common/Icons/Warning.tsx
var import_jsx_dev_runtime57 = __toESM(require_jsx_dev_runtime());
function SvgWarning(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("svg", { width: 37, height: 36, viewBox: "0 0 37 36", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("path", { d: "M2.251 36C.316 36-.538 34.594.353 32.876L16.758 1.289c.892-1.719 2.352-1.719 3.244 0l16.405 31.587C37.3 34.594 36.446 36 34.51 36H2.25Z", fill: "#FFCC4D" }, void 0, false, {
      fileName: "app/components/common/Icons/Warning.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("path", { d: "M15.84 29.645a2.545 2.545 0 0 1 2.543-2.542 2.544 2.544 0 0 1 2.541 2.542 2.545 2.545 0 0 1-2.541 2.542 2.545 2.545 0 0 1-2.542-2.542Zm.196-19.226c0-1.368 1.01-2.215 2.346-2.215 1.304 0 2.346.88 2.346 2.215v12.547c0 1.335-1.042 2.215-2.346 2.215-1.336 0-2.346-.848-2.346-2.215V10.419Z", fill: "#231F20" }, void 0, false, {
      fileName: "app/components/common/Icons/Warning.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Icons/Warning.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var Warning_default = SvgWarning;

// app/components/common/Icon/index.tsx
var import_jsx_dev_runtime58 = __toESM(require_jsx_dev_runtime());
function Icon({
  name,
  color,
  size,
  container = {},
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Box, { ...{
    display: "inline-flex",
    ...container
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(IconNamed, { name, color, size, className }, void 0, false, {
    fileName: "app/components/common/Icon/index.tsx",
    lineNumber: 81,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Icon/index.tsx",
    lineNumber: 77,
    columnNumber: 10
  }, this);
}
function IconNamed({
  name,
  color,
  size = 24,
  className = ""
}) {
  const {
    theme
  } = useApp();
  const props = {
    width: size,
    height: size,
    color: color || theme.defaultTextColor,
    className
  };
  switch (name) {
    case IconEnum.bell:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Bell_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 101,
        columnNumber: 14
      }, this);
    case IconEnum.bellPush:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(BellPush_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 103,
        columnNumber: 14
      }, this);
    case IconEnum.closeSm:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(CloseSM_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 105,
        columnNumber: 14
      }, this);
    case IconEnum.closeMd:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(CloseMD_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 107,
        columnNumber: 14
      }, this);
    case IconEnum.down:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Down_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 109,
        columnNumber: 14
      }, this);
    case IconEnum.email:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Email_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 111,
        columnNumber: 14
      }, this);
    case IconEnum.emailPush:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Email_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 113,
        columnNumber: 14
      }, this);
    case IconEnum.left:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Left_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 115,
        columnNumber: 14
      }, this);
    case IconEnum.leftLine:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(LeftLine_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 117,
        columnNumber: 14
      }, this);
    case IconEnum.map:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Map_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 119,
        columnNumber: 14
      }, this);
    case IconEnum.menu:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Menu_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 121,
        columnNumber: 14
      }, this);
    case IconEnum.pensil:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Pensil_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 123,
        columnNumber: 14
      }, this);
    case IconEnum.right:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Right_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 125,
        columnNumber: 14
      }, this);
    case IconEnum.rightLine:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Right_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 127,
        columnNumber: 14
      }, this);
    case IconEnum.search:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Search_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 129,
        columnNumber: 14
      }, this);
    case IconEnum.show:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Show_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 131,
        columnNumber: 14
      }, this);
    case IconEnum.up:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Up_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 133,
        columnNumber: 14
      }, this);
    case IconEnum.google:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Google_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 135,
        columnNumber: 14
      }, this);
    case IconEnum.fb:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Fb_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 137,
        columnNumber: 14
      }, this);
    case IconEnum.arrowLeft:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(ArrowLeft_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 139,
        columnNumber: 14
      }, this);
    case IconEnum.arrowRight:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(ArrowRight_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 141,
        columnNumber: 14
      }, this);
    case IconEnum.cart:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Cart_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 143,
        columnNumber: 14
      }, this);
    case IconEnum.copy:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Copy_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 145,
        columnNumber: 14
      }, this);
    case IconEnum.verifed:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Verifed_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 147,
        columnNumber: 14
      }, this);
    case IconEnum.user:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(User_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 149,
        columnNumber: 14
      }, this);
    case IconEnum.noteEdit:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(NoteEdit_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 151,
        columnNumber: 14
      }, this);
    case IconEnum.noteSearch:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(NoteSearch_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 153,
        columnNumber: 14
      }, this);
    case IconEnum.navi:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Navi_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 155,
        columnNumber: 14
      }, this);
    case IconEnum.chat:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Chat_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 157,
        columnNumber: 14
      }, this);
    case IconEnum.view:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(View_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 159,
        columnNumber: 14
      }, this);
    case IconEnum.viewHide:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(ViewHide_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 161,
        columnNumber: 14
      }, this);
    case IconEnum.filter:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Filter_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 163,
        columnNumber: 14
      }, this);
    case IconEnum.download:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Download_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 165,
        columnNumber: 14
      }, this);
    case IconEnum.share:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Share_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 167,
        columnNumber: 14
      }, this);
    case IconEnum.attention:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Attention_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 169,
        columnNumber: 14
      }, this);
    case IconEnum.attentionInfo:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(AttentionInfo_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 171,
        columnNumber: 14
      }, this);
    case IconEnum.attentionError:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(AttentionError_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 173,
        columnNumber: 14
      }, this);
    case IconEnum.attentionStop:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(AttentionStop_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 175,
        columnNumber: 14
      }, this);
    case IconEnum.attentionSuccess:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(AttentionSuccess_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 177,
        columnNumber: 14
      }, this);
    case IconEnum.attentionNotVerified:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(AttentionNotVerified_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 179,
        columnNumber: 14
      }, this);
    case IconEnum.attentionVerified:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(AttentionVerified_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 181,
        columnNumber: 14
      }, this);
    case IconEnum.stroke:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Stroke_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 183,
        columnNumber: 14
      }, this);
    case IconEnum.editPencilLine:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(EditPencilLine_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 185,
        columnNumber: 14
      }, this);
    case IconEnum.notVerifed:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(NotVerifed_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 187,
        columnNumber: 14
      }, this);
    case IconEnum.statusApproved:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(StatusApproved_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 189,
        columnNumber: 14
      }, this);
    case IconEnum.statusExpectation:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(StatusExpectation_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 191,
        columnNumber: 14
      }, this);
    case IconEnum.statusWarning:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(StatusWarning_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 193,
        columnNumber: 14
      }, this);
    case IconEnum.blackCamera:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(BlackCamera_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 195,
        columnNumber: 14
      }, this);
    case IconEnum.blackMail:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(BlackMail_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 197,
        columnNumber: 14
      }, this);
    case IconEnum.blackWarning:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(BlackWarning_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 199,
        columnNumber: 14
      }, this);
    case IconEnum.emojiBriefcase:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(EmojiBriefcase_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 201,
        columnNumber: 14
      }, this);
    case IconEnum.emojiDocument:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(EmojiDocument_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 203,
        columnNumber: 14
      }, this);
    case IconEnum.emojiFaq:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(EmojiFaq_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 205,
        columnNumber: 14
      }, this);
    case IconEnum.emojiShield:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(EmojiShield_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 207,
        columnNumber: 14
      }, this);
    case IconEnum.emojiStar:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(EmojiStar_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 209,
        columnNumber: 14
      }, this);
    case IconEnum.emojiStar2:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(EmojiStar2_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 211,
        columnNumber: 14
      }, this);
    case IconEnum.emojiZzz:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(EmojiZzz_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 213,
        columnNumber: 14
      }, this);
    case IconEnum.warning:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Warning_default, { ...props }, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 215,
        columnNumber: 14
      }, this);
    default:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(import_jsx_dev_runtime58.Fragment, {}, void 0, false, {
        fileName: "app/components/common/Icon/index.tsx",
        lineNumber: 218,
        columnNumber: 14
      }, this);
  }
}

export {
  Ae,
  Le,
  styled_components_browser_esm_default,
  LanguageEnum,
  isServer,
  lng,
  ThemeEnum,
  UserContextProvider,
  validate_default,
  v1_default,
  v4_default,
  CLIENT_BASE_URL,
  YEAR_RANGE_START_OFFSET,
  YEAR_RANGE_END_OFFSET,
  THAI_CALENDAR_OFFSET,
  DEFAULT_USER_AVATAR,
  DEFAULT_COMPANY_LOGO,
  routes_default,
  require_session,
  require_userContext,
  useMatchesData,
  getValueLang,
  getValueFromDictionaries,
  getValueFromDictionariesNewWay,
  calculateAge,
  calculateTotalDurationWorkExperience,
  extractTitles,
  extractTitlesNewWay,
  extractCompanyData,
  findCompanyById,
  compareArrays,
  getImageUrl,
  updateSearchString,
  removeLoginSearch,
  checkCompleteness,
  calculateStatistics,
  getSalary,
  useApp,
  useRouteChecks,
  useScreenWidth,
  useGetPositionFromSpecialization,
  useGetLocation,
  useCheckIncompleteness,
  useCheckIncompleteEntityInList,
  useModalForParams,
  Box,
  IconEnum,
  Attention_default,
  AttentionNotVerified_default,
  AttentionVerified_default,
  CloseMD_default,
  CloseSM_default,
  Left_default,
  Map_default,
  Menu_default,
  Right_default,
  Search_default,
  Stroke_default,
  Icon,
  TextVariantEnum,
  FONT_SIZES_MOB,
  FONT_SIZES_DESC,
  FONT_WEIGHTS_MOB,
  FONT_WEIGHTS_DESC,
  LINE_HEIGHTS_MOB,
  LINE_HEIGHTS_DESC,
  Text
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=/build/_shared/chunk-L3EPBPPP.js.map
