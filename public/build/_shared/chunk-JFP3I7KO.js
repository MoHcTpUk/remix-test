import {
  Logo_default,
  ModalBox
} from "/build/_shared/chunk-EOBF4VPL.js";
import {
  Button_default
} from "/build/_shared/chunk-AF6HCNMF.js";
import {
  Background,
  Close_default,
  ModalCloseButton,
  ModalContainer,
  ModalInner,
  VariantModalEnum
} from "/build/_shared/chunk-TSAGNYDI.js";
import {
  AnimatePresence,
  motion
} from "/build/_shared/chunk-47YKAHTX.js";
import {
  Box,
  DEFAULT_COMPANY_LOGO,
  DEFAULT_USER_AVATAR,
  FONT_SIZES_DESC,
  FONT_SIZES_MOB,
  FONT_WEIGHTS_DESC,
  FONT_WEIGHTS_MOB,
  Icon,
  IconEnum,
  LINE_HEIGHTS_DESC,
  LINE_HEIGHTS_MOB,
  Text,
  TextVariantEnum,
  routes_default,
  styled_components_browser_esm_default,
  useApp,
  useRouteChecks
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  Link,
  init_esm
} from "/build/_shared/chunk-IQJCUQRT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
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
        var Fragment3 = REACT_FRAGMENT_TYPE;
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
        exports.Fragment = Fragment3;
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

// node_modules/prop-types/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/prop-types/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/react-avatar-editor/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-avatar-editor/dist/index.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require_prop_types(), require_react()) : "function" == typeof define && define.amd ? define(["prop-types", "react"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).AvatarEditor = t(e.PropTypes, e.React);
    }(exports, function(e, t) {
      "use strict";
      function o(e2) {
        return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
      }
      var e = o(e), a = o(t);
      function n(t2, e2) {
        var o2, n2 = Object.keys(t2);
        return Object.getOwnPropertySymbols && (o2 = Object.getOwnPropertySymbols(t2), e2 && (o2 = o2.filter(function(e3) {
          return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
        })), n2.push.apply(n2, o2)), n2;
      }
      function d(t2) {
        for (var e2 = 1; e2 < arguments.length; e2++) {
          var o2 = null != arguments[e2] ? arguments[e2] : {};
          e2 % 2 ? n(Object(o2), true).forEach(function(e3) {
            s(t2, e3, o2[e3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(o2)) : n(Object(o2)).forEach(function(e3) {
            Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(o2, e3));
          });
        }
        return t2;
      }
      function i(e2, t2) {
        for (var o2 = 0; o2 < t2.length; o2++) {
          var n2 = t2[o2];
          n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e2, v(n2.key), n2);
        }
      }
      function s(e2, t2, o2) {
        (t2 = v(t2)) in e2 ? Object.defineProperty(e2, t2, { value: o2, enumerable: true, configurable: true, writable: true }) : e2[t2] = o2;
      }
      function u() {
        return (u = Object.assign ? Object.assign.bind() : function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var o2, n2 = arguments[t2];
            for (o2 in n2)
              Object.prototype.hasOwnProperty.call(n2, o2) && (e2[o2] = n2[o2]);
          }
          return e2;
        }).apply(this, arguments);
      }
      function r(e2) {
        return (r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e3) {
          return e3.__proto__ || Object.getPrototypeOf(e3);
        })(e2);
      }
      function h(e2, t2) {
        return (h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
          return e3.__proto__ = t3, e3;
        })(e2, t2);
      }
      function c(e2, t2) {
        if (null == e2)
          return {};
        var o2, n2 = function(e3, t3) {
          if (null == e3)
            return {};
          for (var o3, n3 = {}, r3 = Object.keys(e3), a3 = 0; a3 < r3.length; a3++)
            o3 = r3[a3], 0 <= t3.indexOf(o3) || (n3[o3] = e3[o3]);
          return n3;
        }(e2, t2);
        if (Object.getOwnPropertySymbols)
          for (var r2 = Object.getOwnPropertySymbols(e2), a2 = 0; a2 < r2.length; a2++)
            o2 = r2[a2], 0 <= t2.indexOf(o2) || Object.prototype.propertyIsEnumerable.call(e2, o2) && (n2[o2] = e2[o2]);
        return n2;
      }
      function p(e2) {
        if (void 0 === e2)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e2;
      }
      function l(o2) {
        var n2 = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if ("function" == typeof Proxy)
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (e2) {
            return false;
          }
        }();
        return function() {
          var e2, t2 = r(o2), t2 = (e2 = n2 ? (e2 = r(this).constructor, Reflect.construct(t2, arguments, e2)) : t2.apply(this, arguments), this);
          if (e2 && ("object" == typeof e2 || "function" == typeof e2))
            return e2;
          if (void 0 !== e2)
            throw new TypeError("Derived constructors may only return object or undefined");
          return p(t2);
        };
      }
      function g(e2, t2) {
        return function(e3) {
          if (Array.isArray(e3))
            return e3;
        }(e2) || function(e3, t3) {
          var o2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
          if (null != o2) {
            var n2, r2, a2, i2, s2 = [], u2 = true, h2 = false;
            try {
              if (a2 = (o2 = o2.call(e3)).next, 0 === t3) {
                if (Object(o2) !== o2)
                  return;
                u2 = false;
              } else
                for (; !(u2 = (n2 = a2.call(o2)).done) && (s2.push(n2.value), s2.length !== t3); u2 = true)
                  ;
            } catch (e4) {
              h2 = true, r2 = e4;
            } finally {
              try {
                if (!u2 && null != o2.return && (i2 = o2.return(), Object(i2) !== i2))
                  return;
              } finally {
                if (h2)
                  throw r2;
              }
            }
            return s2;
          }
        }(e2, t2) || f(e2, t2) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function f(e2, t2) {
        var o2;
        if (e2)
          return "string" == typeof e2 ? m(e2, t2) : "Map" === (o2 = "Object" === (o2 = Object.prototype.toString.call(e2).slice(8, -1)) && e2.constructor ? e2.constructor.name : o2) || "Set" === o2 ? Array.from(e2) : "Arguments" === o2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o2) ? m(e2, t2) : void 0;
      }
      function m(e2, t2) {
        (null == t2 || t2 > e2.length) && (t2 = e2.length);
        for (var o2 = 0, n2 = new Array(t2); o2 < t2; o2++)
          n2[o2] = e2[o2];
        return n2;
      }
      function v(e2) {
        e2 = function(e3, t2) {
          if ("object" != typeof e3 || null === e3)
            return e3;
          var o2 = e3[Symbol.toPrimitive];
          if (void 0 === o2)
            return ("string" === t2 ? String : Number)(e3);
          if ("object" != typeof (o2 = o2.call(e3, t2 || "default")))
            return o2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }(e2, "string");
        return "symbol" == typeof e2 ? e2 : String(e2);
      }
      function y(n2, r2) {
        return new Promise(function(e2, t2) {
          var o2 = new Image();
          o2.onload = function() {
            return e2(o2);
          }, o2.onerror = t2, false == (null !== (t2 = n2) && !!t2.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i)) && r2 && (o2.crossOrigin = r2), o2.src = n2;
        });
      }
      var b, w = ["scale", "rotate", "image", "border", "borderRadius", "width", "height", "position", "color", "backgroundColor", "style", "crossOrigin", "onLoadFailure", "onLoadSuccess", "onImageReady", "onImageChange", "onMouseUp", "onMouseMove", "onPositionChange", "disableBoundaryChecks", "disableHiDPIScaling", "disableCanvasRotation"], M = !("undefined" == typeof window || "undefined" == typeof navigator || !("ontouchstart" in window || 0 < navigator.msMaxTouchPoints)), O = "undefined" != typeof File, t = { touch: { react: { down: "onTouchStart", mouseDown: "onMouseDown", drag: "onTouchMove", move: "onTouchMove", mouseMove: "onMouseMove", up: "onTouchEnd", mouseUp: "onMouseUp" }, native: { down: "touchstart", mouseDown: "mousedown", drag: "touchmove", move: "touchmove", mouseMove: "mousemove", up: "touchend", mouseUp: "mouseup" } }, desktop: { react: { down: "onMouseDown", drag: "onDragOver", move: "onMouseMove", up: "onMouseUp" }, native: { down: "mousedown", drag: "dragStart", move: "mousemove", up: "mouseup" } } }, P = M ? t.touch : t.desktop, I = "undefined" != typeof window && window.devicePixelRatio ? window.devicePixelRatio : 1, C = { x: 0.5, y: 0.5 }, t = function(e2) {
        var t2 = r2;
        if ("function" != typeof e2 && null !== e2)
          throw new TypeError("Super expression must either be null or a function");
        t2.prototype = Object.create(e2 && e2.prototype, { constructor: { value: t2, writable: true, configurable: true } }), Object.defineProperty(t2, "prototype", { writable: false }), e2 && h(t2, e2);
        var o2, n2 = l(r2);
        function r2(e3) {
          var l2;
          if (this instanceof r2)
            return s(p(l2 = n2.call(this, e3)), "state", { drag: false, my: null, mx: null, image: C }), s(p(l2), "handleImageReady", function(e4) {
              var t3 = l2.getInitialSize(e4.width, e4.height);
              t3.resource = e4, t3.x = 0.5, t3.y = 0.5, t3.backgroundColor = l2.props.backgroundColor, l2.setState({ drag: false, image: t3 }, l2.props.onImageReady), l2.props.onLoadSuccess(t3);
            }), s(p(l2), "clearImage", function() {
              l2.canvas.getContext("2d").clearRect(0, 0, l2.canvas.width, l2.canvas.height), l2.setState({ image: C });
            }), s(p(l2), "handleMouseDown", function(e4) {
              (e4 = e4 || window.event).preventDefault(), l2.setState({ drag: true, mx: null, my: null });
            }), s(p(l2), "handleMouseUp", function() {
              l2.state.drag && (l2.setState({ drag: false }), l2.props.onMouseUp());
            }), s(p(l2), "handleMouseMove", function(e4) {
              var t3, o3, n3, r3, a2, i2, s2, u2, h2, c2;
              e4 = e4 || window.event, false !== l2.state.drag && (e4.preventDefault(), t3 = { mx: o3 = e4.targetTouches ? e4.targetTouches[0].pageX : e4.clientX, my: n3 = e4.targetTouches ? e4.targetTouches[0].pageY : e4.clientY }, c2 = l2.props.rotate, c2 = (c2 %= 360) < 0 ? 360 + c2 : c2, l2.state.mx && l2.state.my && (o3 = l2.state.mx - o3, n3 = l2.state.my - n3, r3 = l2.state.image.width * l2.props.scale, a2 = l2.state.image.height * l2.props.scale, i2 = (u2 = l2.getCroppingRect()).x, u2 = u2.y, i2 *= r3, u2 *= a2, h2 = function(e5) {
                return e5 * (Math.PI / 180);
              }, s2 = Math.cos(h2(c2)), h2 = u2 + -o3 * (u2 = Math.sin(h2(c2))) + n3 * s2, c2 = { x: (i2 + o3 * s2 + n3 * u2) / r3 + 1 / l2.props.scale * l2.getXScale() / 2, y: h2 / a2 + 1 / l2.props.scale * l2.getYScale() / 2 }, l2.props.onPositionChange(c2), t3.image = d(d({}, l2.state.image), c2)), l2.setState(t3), l2.props.onMouseMove(e4));
            }), s(p(l2), "setCanvas", function(e4) {
              l2.canvas = e4;
            }), l2.canvas = null, l2;
          throw new TypeError("Cannot call a class as a function");
        }
        return t2 = r2, (e2 = [{ key: "componentDidMount", value: function() {
          this.props.disableHiDPIScaling && (I = 1);
          var e3, t3 = this.canvas.getContext("2d");
          this.props.image && this.loadImage(this.props.image), this.paint(t3), document && (t3 = !!function() {
            var t4 = false;
            try {
              var e4 = Object.defineProperty({}, "passive", { get: function() {
                t4 = true;
              } });
              window.addEventListener("test", e4, e4), window.removeEventListener("test", e4, e4);
            } catch (e5) {
              t4 = false;
            }
            return t4;
          }() && { passive: false }, e3 = P.native, document.addEventListener(e3.move, this.handleMouseMove, t3), document.addEventListener(e3.up, this.handleMouseUp, t3), M) && (document.addEventListener(e3.mouseMove, this.handleMouseMove, t3), document.addEventListener(e3.mouseUp, this.handleMouseUp, t3));
        } }, { key: "componentDidUpdate", value: function(e3, t3) {
          this.props.image && this.props.image !== e3.image || this.props.width !== e3.width || this.props.height !== e3.height || this.props.backgroundColor !== e3.backgroundColor ? this.loadImage(this.props.image) : this.props.image || t3.image === C || this.clearImage();
          var o3 = this.canvas.getContext("2d");
          o3.clearRect(0, 0, this.canvas.width, this.canvas.height), this.paint(o3), this.paintImage(o3, this.state.image, this.props.border), e3.image === this.props.image && e3.width === this.props.width && e3.height === this.props.height && e3.position === this.props.position && e3.scale === this.props.scale && e3.rotate === this.props.rotate && t3.my === this.state.my && t3.mx === this.state.mx && t3.image.x === this.state.image.x && t3.image.y === this.state.image.y && t3.backgroundColor === this.state.backgroundColor || this.props.onImageChange();
        } }, { key: "componentWillUnmount", value: function() {
          var e3;
          document && (e3 = P.native, document.removeEventListener(e3.move, this.handleMouseMove, false), document.removeEventListener(e3.up, this.handleMouseUp, false), M) && (document.removeEventListener(e3.mouseMove, this.handleMouseMove, false), document.removeEventListener(e3.mouseUp, this.handleMouseUp, false));
        } }, { key: "isVertical", value: function() {
          return !this.props.disableCanvasRotation && this.props.rotate % 180 != 0;
        } }, { key: "getBorders", value: function() {
          var e3 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.props.border;
          return Array.isArray(e3) ? e3 : [e3, e3];
        } }, { key: "getDimensions", value: function() {
          var e3 = this.props, t3 = e3.width, o3 = e3.height, n3 = e3.rotate, e3 = e3.border, r3 = {}, a2 = g(this.getBorders(e3), 2), i2 = a2[0], a2 = a2[1], s2 = t3, u2 = o3;
          return this.isVertical() ? (r3.width = u2, r3.height = s2) : (r3.width = s2, r3.height = u2), r3.width += 2 * i2, r3.height += 2 * a2, { canvas: r3, rotate: n3, width: t3, height: o3, border: e3 };
        } }, { key: "getImage", value: function() {
          var e3 = this.getCroppingRect(), t3 = this.state.image, o3 = (e3.x *= t3.resource.width, e3.y *= t3.resource.height, e3.width *= t3.resource.width, e3.height *= t3.resource.height, document.createElement("canvas")), n3 = (this.isVertical() ? (o3.width = e3.height, o3.height = e3.width) : (o3.width = e3.width, o3.height = e3.height), o3.getContext("2d"));
          return n3.translate(o3.width / 2, o3.height / 2), n3.rotate(this.props.rotate * Math.PI / 180), n3.translate(-o3.width / 2, -o3.height / 2), this.isVertical() && n3.translate((o3.width - o3.height) / 2, (o3.height - o3.width) / 2), t3.backgroundColor && (n3.fillStyle = t3.backgroundColor, n3.fillRect(-e3.x, -e3.y, t3.resource.width, t3.resource.height)), n3.drawImage(t3.resource, -e3.x, -e3.y), o3;
        } }, { key: "getImageScaledToCanvas", value: function() {
          var e3 = this.getDimensions(), t3 = e3.width, e3 = e3.height, o3 = document.createElement("canvas");
          return this.isVertical() ? (o3.width = e3, o3.height = t3) : (o3.width = t3, o3.height = e3), this.paintImage(o3.getContext("2d"), this.state.image, 0, 1), o3;
        } }, { key: "getXScale", value: function() {
          var e3 = this.props.width / this.props.height, t3 = this.state.image.width / this.state.image.height;
          return Math.min(1, e3 / t3);
        } }, { key: "getYScale", value: function() {
          var e3 = this.props.height / this.props.width, t3 = this.state.image.height / this.state.image.width;
          return Math.min(1, e3 / t3);
        } }, { key: "getCroppingRect", value: function() {
          var e3 = this.props.position || { x: this.state.image.x, y: this.state.image.y }, t3 = 1 / this.props.scale * this.getXScale(), o3 = 1 / this.props.scale * this.getYScale(), e3 = { x: e3.x - t3 / 2, y: e3.y - o3 / 2, width: t3, height: o3 }, n3 = 0, r3 = 1 - e3.width, a2 = 0, i2 = 1 - e3.height;
          return (this.props.disableBoundaryChecks || 1 < t3 || 1 < o3) && (n3 = -e3.width, a2 = -e3.height, i2 = r3 = 1), d(d({}, e3), {}, { x: Math.max(n3, Math.min(e3.x, r3)), y: Math.max(a2, Math.min(e3.y, i2)) });
        } }, { key: "loadImage", value: function(e3) {
          var t3;
          O && e3 instanceof File ? this.loadingImage = (t3 = e3, new Promise(function(o3, n3) {
            var e4 = new FileReader();
            e4.onload = function(e5) {
              try {
                var t4 = y(e5.target.result);
                o3(t4);
              } catch (e6) {
                n3(e6);
              }
            }, e4.readAsDataURL(t3);
          }).then(this.handleImageReady).catch(this.props.onLoadFailure)) : "string" == typeof e3 && (this.loadingImage = y(e3, this.props.crossOrigin).then(this.handleImageReady).catch(this.props.onLoadFailure));
        } }, { key: "getInitialSize", value: function(e3, t3) {
          var o3, n3, r3 = this.getDimensions();
          return t3 / e3 < r3.height / r3.width ? n3 = e3 * ((o3 = this.getDimensions().height) / t3) : o3 = t3 * ((n3 = this.getDimensions().width) / e3), { height: o3, width: n3 };
        } }, { key: "paintImage", value: function(e3, t3, o3) {
          var n3 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : I;
          t3.resource && (o3 = this.calculatePosition(t3, o3), e3.save(), e3.translate(e3.canvas.width / 2, e3.canvas.height / 2), e3.rotate(this.props.rotate * Math.PI / 180), e3.translate(-e3.canvas.width / 2, -e3.canvas.height / 2), this.isVertical() && e3.translate((e3.canvas.width - e3.canvas.height) / 2, (e3.canvas.height - e3.canvas.width) / 2), e3.scale(n3, n3), e3.globalCompositeOperation = "destination-over", e3.drawImage(t3.resource, o3.x, o3.y, o3.width, o3.height), t3.backgroundColor && (e3.fillStyle = t3.backgroundColor, e3.fillRect(o3.x, o3.y, o3.width, o3.height)), e3.restore());
        } }, { key: "calculatePosition", value: function(e3, t3) {
          e3 = e3 || this.state.image;
          var t3 = g(this.getBorders(t3), 2), o3 = t3[0], t3 = t3[1], n3 = this.getCroppingRect(), r3 = e3.width * this.props.scale, e3 = e3.height * this.props.scale, a2 = -n3.x * r3, n3 = -n3.y * e3;
          return this.isVertical() ? (a2 += t3, n3 += o3) : (a2 += o3, n3 += t3), { x: a2, y: n3, height: e3, width: r3 };
        } }, { key: "paint", value: function(e3) {
          e3.save(), e3.scale(I, I), e3.translate(0, 0), e3.fillStyle = "rgba(" + this.props.color.slice(0, 4).join(",") + ")";
          var t3, o3, n3, r3, a2, i2 = this.props.borderRadius, s2 = this.getDimensions(), u2 = g(this.getBorders(s2.border), 2), h2 = u2[0], u2 = u2[1], c2 = s2.canvas.height, s2 = s2.canvas.width, i2 = Math.max(i2, 0);
          i2 = Math.min(i2, s2 / 2 - h2, c2 / 2 - u2), e3.beginPath(), t3 = e3, o3 = s2 - 2 * (h2 = h2), n3 = c2 - 2 * (u2 = u2), 0 === (i2 = i2) ? t3.rect(h2, u2, o3, n3) : (r3 = o3 - i2, a2 = n3 - i2, t3.translate(h2, u2), t3.arc(i2, i2, i2, Math.PI, 1.5 * Math.PI), t3.lineTo(r3, 0), t3.arc(r3, i2, i2, 1.5 * Math.PI, 2 * Math.PI), t3.lineTo(o3, a2), t3.arc(r3, a2, i2, 2 * Math.PI, 0.5 * Math.PI), t3.lineTo(i2, n3), t3.arc(i2, a2, i2, 0.5 * Math.PI, Math.PI), t3.translate(-h2, -u2)), e3.rect(s2, 0, -s2, c2), e3.fill("evenodd"), e3.restore();
        } }, { key: "render", value: function() {
          var e3 = this.props, t3 = (e3.scale, e3.rotate, e3.image, e3.border, e3.borderRadius, e3.width, e3.height, e3.position, e3.color, e3.backgroundColor, e3.style), e3 = (e3.crossOrigin, e3.onLoadFailure, e3.onLoadSuccess, e3.onImageReady, e3.onImageChange, e3.onMouseUp, e3.onMouseMove, e3.onPositionChange, e3.disableBoundaryChecks, e3.disableHiDPIScaling, e3.disableCanvasRotation, c(e3, w)), o3 = this.getDimensions(), n3 = { width: o3.canvas.width, height: o3.canvas.height, cursor: this.state.drag ? "grabbing" : "grab", touchAction: "none" }, o3 = { width: o3.canvas.width * I, height: o3.canvas.height * I, style: d(d({}, n3), t3) };
          return o3[P.react.down] = this.handleMouseDown, M && (o3[P.react.mouseDown] = this.handleMouseDown), a.default.createElement("canvas", u({ ref: this.setCanvas }, o3, e3));
        } }]) && i(t2.prototype, e2), o2 && i(t2, o2), Object.defineProperty(t2, "prototype", { writable: false }), r2;
      }(a.default.Component);
      return s(t, "propTypes", { scale: e.default.number, rotate: e.default.number, image: e.default.oneOfType([e.default.string].concat(function(e2) {
        if (Array.isArray(e2))
          return m(e2);
      }(b = O ? [e.default.instanceOf(File)] : []) || function(e2) {
        if ("undefined" != typeof Symbol && null != e2[Symbol.iterator] || null != e2["@@iterator"])
          return Array.from(e2);
      }(b) || f(b) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }())), border: e.default.oneOfType([e.default.number, e.default.arrayOf(e.default.number)]), borderRadius: e.default.number, width: e.default.number, height: e.default.number, position: e.default.shape({ x: e.default.number, y: e.default.number }), color: e.default.arrayOf(e.default.number), backgroundColor: e.default.string, crossOrigin: e.default.oneOf(["", "anonymous", "use-credentials"]), onLoadFailure: e.default.func, onLoadSuccess: e.default.func, onImageReady: e.default.func, onImageChange: e.default.func, onMouseUp: e.default.func, onMouseMove: e.default.func, onPositionChange: e.default.func, disableBoundaryChecks: e.default.bool, disableHiDPIScaling: e.default.bool, disableCanvasRotation: e.default.bool }), s(t, "defaultProps", { scale: 1, rotate: 0, border: 25, borderRadius: 0, width: 200, height: 200, color: [0, 0, 0, 0.5], onLoadFailure: function() {
      }, onLoadSuccess: function() {
      }, onImageReady: function() {
      }, onImageChange: function() {
      }, onMouseUp: function() {
      }, onMouseMove: function() {
      }, onPositionChange: function() {
      }, disableBoundaryChecks: false, disableHiDPIScaling: false, disableCanvasRotation: true }), t;
    });
  }
});

// node_modules/attr-accept/dist/es/index.js
var require_es = __commonJS({
  "node_modules/attr-accept/dist/es/index.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = function(file, acceptedFiles) {
      if (file && acceptedFiles) {
        var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(",");
        var fileName = file.name || "";
        var mimeType = (file.type || "").toLowerCase();
        var baseMimeType = mimeType.replace(/\/.*$/, "");
        return acceptedFilesArray.some(function(type) {
          var validType = type.trim().toLowerCase();
          if (validType.charAt(0) === ".") {
            return fileName.toLowerCase().endsWith(validType);
          } else if (validType.endsWith("/*")) {
            return baseMimeType === validType.replace(/\/.*$/, "");
          }
          return mimeType === validType;
        });
      }
      return true;
    };
  }
});

// node_modules/react-webcam/dist/react-webcam.js
var require_react_webcam = __commonJS({
  "node_modules/react-webcam/dist/react-webcam.js"(exports, module) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory(require_react());
      else if (typeof define === "function" && define.amd)
        define(["react"], factory);
      else if (typeof exports === "object")
        exports["Webcam"] = factory(require_react());
      else
        root["Webcam"] = factory(root["React"]);
    })(exports, function(__WEBPACK_EXTERNAL_MODULE_react__) {
      return (
        /******/
        function(modules) {
          var installedModules = {};
          function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
              return installedModules[moduleId].exports;
            }
            var module2 = installedModules[moduleId] = {
              /******/
              i: moduleId,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
            module2.l = true;
            return module2.exports;
          }
          __webpack_require__.m = modules;
          __webpack_require__.c = installedModules;
          __webpack_require__.d = function(exports2, name, getter) {
            if (!__webpack_require__.o(exports2, name)) {
              Object.defineProperty(exports2, name, { enumerable: true, get: getter });
            }
          };
          __webpack_require__.r = function(exports2) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
              Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
            }
            Object.defineProperty(exports2, "__esModule", { value: true });
          };
          __webpack_require__.t = function(value, mode) {
            if (mode & 1)
              value = __webpack_require__(value);
            if (mode & 8)
              return value;
            if (mode & 4 && typeof value === "object" && value && value.__esModule)
              return value;
            var ns = /* @__PURE__ */ Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", { enumerable: true, value });
            if (mode & 2 && typeof value != "string")
              for (var key in value)
                __webpack_require__.d(ns, key, function(key2) {
                  return value[key2];
                }.bind(null, key));
            return ns;
          };
          __webpack_require__.n = function(module2) {
            var getter = module2 && module2.__esModule ? (
              /******/
              function getDefault() {
                return module2["default"];
              }
            ) : (
              /******/
              function getModuleExports() {
                return module2;
              }
            );
            __webpack_require__.d(getter, "a", getter);
            return getter;
          };
          __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          __webpack_require__.p = "";
          return __webpack_require__(__webpack_require__.s = "./src/react-webcam.tsx");
        }({
          /***/
          "./src/react-webcam.tsx": (
            /*!******************************!*\
              !*** ./src/react-webcam.tsx ***!
              \******************************/
            /*! exports provided: default */
            /***/
            function(module2, __webpack_exports__, __webpack_require__) {
              "use strict";
              __webpack_require__.r(__webpack_exports__);
              var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! react */
                "react"
              );
              var react__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
              var __extends = function() {
                var extendStatics = function(d, b) {
                  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                    d2.__proto__ = b2;
                  } || function(d2, b2) {
                    for (var p in b2)
                      if (b2.hasOwnProperty(p))
                        d2[p] = b2[p];
                  };
                  return extendStatics(d, b);
                };
                return function(d, b) {
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
              }();
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
              (function polyfillGetUserMedia() {
                if (typeof window === "undefined") {
                  return;
                }
                if (navigator.mediaDevices === void 0) {
                  navigator.mediaDevices = {};
                }
                if (navigator.mediaDevices.getUserMedia === void 0) {
                  navigator.mediaDevices.getUserMedia = function(constraints) {
                    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
                    if (!getUserMedia) {
                      return Promise.reject(new Error("getUserMedia is not implemented in this browser"));
                    }
                    return new Promise(function(resolve, reject) {
                      getUserMedia.call(navigator, constraints, resolve, reject);
                    });
                  };
                }
              })();
              function hasGetUserMedia() {
                return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
              }
              var Webcam2 = (
                /** @class */
                function(_super) {
                  __extends(Webcam3, _super);
                  function Webcam3(props) {
                    var _this = _super.call(this, props) || this;
                    _this.canvas = null;
                    _this.ctx = null;
                    _this.requestUserMediaId = 0;
                    _this.unmounted = false;
                    _this.state = {
                      hasUserMedia: false
                    };
                    return _this;
                  }
                  Webcam3.prototype.componentDidMount = function() {
                    var _a = this, state = _a.state, props = _a.props;
                    this.unmounted = false;
                    if (!hasGetUserMedia()) {
                      props.onUserMediaError("getUserMedia not supported");
                      return;
                    }
                    if (!state.hasUserMedia) {
                      this.requestUserMedia();
                    }
                    if (props.children && typeof props.children != "function") {
                      console.warn("children must be a function");
                    }
                  };
                  Webcam3.prototype.componentDidUpdate = function(nextProps) {
                    var props = this.props;
                    if (!hasGetUserMedia()) {
                      props.onUserMediaError("getUserMedia not supported");
                      return;
                    }
                    var audioConstraintsChanged = JSON.stringify(nextProps.audioConstraints) !== JSON.stringify(props.audioConstraints);
                    var videoConstraintsChanged = JSON.stringify(nextProps.videoConstraints) !== JSON.stringify(props.videoConstraints);
                    var minScreenshotWidthChanged = nextProps.minScreenshotWidth !== props.minScreenshotWidth;
                    var minScreenshotHeightChanged = nextProps.minScreenshotHeight !== props.minScreenshotHeight;
                    if (videoConstraintsChanged || minScreenshotWidthChanged || minScreenshotHeightChanged) {
                      this.canvas = null;
                      this.ctx = null;
                    }
                    if (audioConstraintsChanged || videoConstraintsChanged) {
                      this.stopAndCleanup();
                      this.requestUserMedia();
                    }
                  };
                  Webcam3.prototype.componentWillUnmount = function() {
                    this.unmounted = true;
                    this.stopAndCleanup();
                  };
                  Webcam3.stopMediaStream = function(stream) {
                    if (stream) {
                      if (stream.getVideoTracks && stream.getAudioTracks) {
                        stream.getVideoTracks().map(function(track) {
                          stream.removeTrack(track);
                          track.stop();
                        });
                        stream.getAudioTracks().map(function(track) {
                          stream.removeTrack(track);
                          track.stop();
                        });
                      } else {
                        stream.stop();
                      }
                    }
                  };
                  Webcam3.prototype.stopAndCleanup = function() {
                    var state = this.state;
                    if (state.hasUserMedia) {
                      Webcam3.stopMediaStream(this.stream);
                      if (state.src) {
                        window.URL.revokeObjectURL(state.src);
                      }
                    }
                  };
                  Webcam3.prototype.getScreenshot = function(screenshotDimensions) {
                    var _a = this, state = _a.state, props = _a.props;
                    if (!state.hasUserMedia)
                      return null;
                    var canvas = this.getCanvas(screenshotDimensions);
                    return canvas && canvas.toDataURL(props.screenshotFormat, props.screenshotQuality);
                  };
                  Webcam3.prototype.getCanvas = function(screenshotDimensions) {
                    var _a = this, state = _a.state, props = _a.props;
                    if (!this.video) {
                      return null;
                    }
                    if (!state.hasUserMedia || !this.video.videoHeight)
                      return null;
                    if (!this.ctx) {
                      var canvasWidth = this.video.videoWidth;
                      var canvasHeight = this.video.videoHeight;
                      if (!this.props.forceScreenshotSourceSize) {
                        var aspectRatio = canvasWidth / canvasHeight;
                        canvasWidth = props.minScreenshotWidth || this.video.clientWidth;
                        canvasHeight = canvasWidth / aspectRatio;
                        if (props.minScreenshotHeight && canvasHeight < props.minScreenshotHeight) {
                          canvasHeight = props.minScreenshotHeight;
                          canvasWidth = canvasHeight * aspectRatio;
                        }
                      }
                      this.canvas = document.createElement("canvas");
                      this.canvas.width = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.width) || canvasWidth;
                      this.canvas.height = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.height) || canvasHeight;
                      this.ctx = this.canvas.getContext("2d");
                    }
                    var _b = this, ctx = _b.ctx, canvas = _b.canvas;
                    if (ctx && canvas) {
                      canvas.width = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.width) || canvas.width;
                      canvas.height = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.height) || canvas.height;
                      if (props.mirrored) {
                        ctx.translate(canvas.width, 0);
                        ctx.scale(-1, 1);
                      }
                      ctx.imageSmoothingEnabled = props.imageSmoothing;
                      ctx.drawImage(this.video, 0, 0, (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.width) || canvas.width, (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.height) || canvas.height);
                      if (props.mirrored) {
                        ctx.scale(-1, 1);
                        ctx.translate(-canvas.width, 0);
                      }
                    }
                    return canvas;
                  };
                  Webcam3.prototype.requestUserMedia = function() {
                    var _this = this;
                    var props = this.props;
                    var sourceSelected = function(audioConstraints, videoConstraints) {
                      var constraints = {
                        video: typeof videoConstraints !== "undefined" ? videoConstraints : true
                      };
                      if (props.audio) {
                        constraints.audio = typeof audioConstraints !== "undefined" ? audioConstraints : true;
                      }
                      _this.requestUserMediaId++;
                      var myRequestUserMediaId = _this.requestUserMediaId;
                      navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
                        if (_this.unmounted || myRequestUserMediaId !== _this.requestUserMediaId) {
                          Webcam3.stopMediaStream(stream);
                        } else {
                          _this.handleUserMedia(null, stream);
                        }
                      }).catch(function(e) {
                        _this.handleUserMedia(e);
                      });
                    };
                    if ("mediaDevices" in navigator) {
                      sourceSelected(props.audioConstraints, props.videoConstraints);
                    } else {
                      var optionalSource_1 = function(id) {
                        return { optional: [{ sourceId: id }] };
                      };
                      var constraintToSourceId_1 = function(constraint) {
                        var deviceId = constraint.deviceId;
                        if (typeof deviceId === "string") {
                          return deviceId;
                        }
                        if (Array.isArray(deviceId) && deviceId.length > 0) {
                          return deviceId[0];
                        }
                        if (typeof deviceId === "object" && deviceId.ideal) {
                          return deviceId.ideal;
                        }
                        return null;
                      };
                      MediaStreamTrack.getSources(function(sources) {
                        var audioSource = null;
                        var videoSource = null;
                        sources.forEach(function(source) {
                          if (source.kind === "audio") {
                            audioSource = source.id;
                          } else if (source.kind === "video") {
                            videoSource = source.id;
                          }
                        });
                        var audioSourceId = constraintToSourceId_1(props.audioConstraints);
                        if (audioSourceId) {
                          audioSource = audioSourceId;
                        }
                        var videoSourceId = constraintToSourceId_1(props.videoConstraints);
                        if (videoSourceId) {
                          videoSource = videoSourceId;
                        }
                        sourceSelected(optionalSource_1(audioSource), optionalSource_1(videoSource));
                      });
                    }
                  };
                  Webcam3.prototype.handleUserMedia = function(err, stream) {
                    var props = this.props;
                    if (err || !stream) {
                      this.setState({ hasUserMedia: false });
                      props.onUserMediaError(err);
                      return;
                    }
                    this.stream = stream;
                    try {
                      if (this.video) {
                        this.video.srcObject = stream;
                      }
                      this.setState({ hasUserMedia: true });
                    } catch (error) {
                      this.setState({
                        hasUserMedia: true,
                        src: window.URL.createObjectURL(stream)
                      });
                    }
                    props.onUserMedia(stream);
                  };
                  Webcam3.prototype.render = function() {
                    var _this = this;
                    var _a = this, state = _a.state, props = _a.props;
                    var audio = props.audio, forceScreenshotSourceSize = props.forceScreenshotSourceSize, disablePictureInPicture = props.disablePictureInPicture, onUserMedia = props.onUserMedia, onUserMediaError = props.onUserMediaError, screenshotFormat = props.screenshotFormat, screenshotQuality = props.screenshotQuality, minScreenshotWidth = props.minScreenshotWidth, minScreenshotHeight = props.minScreenshotHeight, audioConstraints = props.audioConstraints, videoConstraints = props.videoConstraints, imageSmoothing = props.imageSmoothing, mirrored = props.mirrored, _b = props.style, style = _b === void 0 ? {} : _b, children = props.children, rest = __rest(props, ["audio", "forceScreenshotSourceSize", "disablePictureInPicture", "onUserMedia", "onUserMediaError", "screenshotFormat", "screenshotQuality", "minScreenshotWidth", "minScreenshotHeight", "audioConstraints", "videoConstraints", "imageSmoothing", "mirrored", "style", "children"]);
                    var videoStyle = mirrored ? __assign(__assign({}, style), { transform: (style.transform || "") + " scaleX(-1)" }) : style;
                    var childrenProps = {
                      getScreenshot: this.getScreenshot.bind(this)
                    };
                    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
                      react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],
                      null,
                      react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("video", __assign({ autoPlay: true, disablePictureInPicture, src: state.src, muted: !audio, playsInline: true, ref: function(ref) {
                        _this.video = ref;
                      }, style: videoStyle }, rest)),
                      children && children(childrenProps)
                    );
                  };
                  Webcam3.defaultProps = {
                    audio: false,
                    disablePictureInPicture: false,
                    forceScreenshotSourceSize: false,
                    imageSmoothing: true,
                    mirrored: false,
                    onUserMedia: function() {
                      return void 0;
                    },
                    onUserMediaError: function() {
                      return void 0;
                    },
                    screenshotFormat: "image/webp",
                    screenshotQuality: 0.92
                  };
                  return Webcam3;
                }(react__WEBPACK_IMPORTED_MODULE_0__["Component"])
              );
              __webpack_exports__["default"] = Webcam2;
            }
          ),
          /***/
          "react": (
            /*!**************************************************************************************!*\
              !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
              \**************************************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = __WEBPACK_EXTERNAL_MODULE_react__;
            }
          )
          /******/
        })["default"]
      );
    });
  }
});

// app/components/entities/UploadingImageModal/index.tsx
init_esm();
var import_react3 = __toESM(require_react());
var import_react_avatar_editor = __toESM(require_dist());

// node_modules/react-dropzone/dist/es/index.js
var import_react = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/tslib/tslib.es6.mjs
function __awaiter(thisArg, _arguments, P, generator) {
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
}
function __generator(thisArg, body) {
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
    while (g && (g = 0, op[0] && (_ = 0)), _)
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
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/file-selector/dist/es5/file.js
var COMMON_MIME_TYPES = /* @__PURE__ */ new Map([
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
  ["aac", "audio/aac"],
  ["abw", "application/x-abiword"],
  ["arc", "application/x-freearc"],
  ["avif", "image/avif"],
  ["avi", "video/x-msvideo"],
  ["azw", "application/vnd.amazon.ebook"],
  ["bin", "application/octet-stream"],
  ["bmp", "image/bmp"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["cda", "application/x-cdf"],
  ["csh", "application/x-csh"],
  ["css", "text/css"],
  ["csv", "text/csv"],
  ["doc", "application/msword"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["eot", "application/vnd.ms-fontobject"],
  ["epub", "application/epub+zip"],
  ["gz", "application/gzip"],
  ["gif", "image/gif"],
  ["heic", "image/heic"],
  ["heif", "image/heif"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["ico", "image/vnd.microsoft.icon"],
  ["ics", "text/calendar"],
  ["jar", "application/java-archive"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["js", "text/javascript"],
  ["json", "application/json"],
  ["jsonld", "application/ld+json"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mjs", "text/javascript"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mpeg", "video/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["opus", "audio/opus"],
  ["otf", "font/otf"],
  ["png", "image/png"],
  ["pdf", "application/pdf"],
  ["php", "application/x-httpd-php"],
  ["ppt", "application/vnd.ms-powerpoint"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["rar", "application/vnd.rar"],
  ["rtf", "application/rtf"],
  ["sh", "application/x-sh"],
  ["svg", "image/svg+xml"],
  ["swf", "application/x-shockwave-flash"],
  ["tar", "application/x-tar"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["ts", "video/mp2t"],
  ["ttf", "font/ttf"],
  ["txt", "text/plain"],
  ["vsd", "application/vnd.visio"],
  ["wav", "audio/wav"],
  ["weba", "audio/webm"],
  ["webm", "video/webm"],
  ["webp", "image/webp"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["xhtml", "application/xhtml+xml"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xml", "application/xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["zip", "application/zip"],
  ["7z", "application/x-7z-compressed"],
  // Others
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["msg", "application/vnd.ms-outlook"]
]);
function toFileWithPath(file, path) {
  var f = withMimeType(file);
  if (typeof f.path !== "string") {
    var webkitRelativePath = file.webkitRelativePath;
    Object.defineProperty(f, "path", {
      value: typeof path === "string" ? path : typeof webkitRelativePath === "string" && webkitRelativePath.length > 0 ? webkitRelativePath : file.name,
      writable: false,
      configurable: false,
      enumerable: true
    });
  }
  return f;
}
function withMimeType(file) {
  var name = file.name;
  var hasExtension = name && name.lastIndexOf(".") !== -1;
  if (hasExtension && !file.type) {
    var ext = name.split(".").pop().toLowerCase();
    var type = COMMON_MIME_TYPES.get(ext);
    if (type) {
      Object.defineProperty(file, "type", {
        value: type,
        writable: false,
        configurable: false,
        enumerable: true
      });
    }
  }
  return file;
}

// node_modules/file-selector/dist/es5/file-selector.js
var FILES_TO_IGNORE = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function fromEvent(evt) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      if (isObject(evt) && isDataTransfer(evt.dataTransfer)) {
        return [2, getDataTransferFiles(evt.dataTransfer, evt.type)];
      } else if (isChangeEvt(evt)) {
        return [2, getInputFiles(evt)];
      } else if (Array.isArray(evt) && evt.every(function(item) {
        return "getFile" in item && typeof item.getFile === "function";
      })) {
        return [2, getFsHandleFiles(evt)];
      }
      return [2, []];
    });
  });
}
function isDataTransfer(value) {
  return isObject(value);
}
function isChangeEvt(value) {
  return isObject(value) && isObject(value.target);
}
function isObject(v) {
  return typeof v === "object" && v !== null;
}
function getInputFiles(evt) {
  return fromList(evt.target.files).map(function(file) {
    return toFileWithPath(file);
  });
}
function getFsHandleFiles(handles) {
  return __awaiter(this, void 0, void 0, function() {
    var files;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, Promise.all(handles.map(function(h) {
            return h.getFile();
          }))];
        case 1:
          files = _a.sent();
          return [2, files.map(function(file) {
            return toFileWithPath(file);
          })];
      }
    });
  });
}
function getDataTransferFiles(dt, type) {
  return __awaiter(this, void 0, void 0, function() {
    var items, files;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (!dt.items)
            return [3, 2];
          items = fromList(dt.items).filter(function(item) {
            return item.kind === "file";
          });
          if (type !== "drop") {
            return [2, items];
          }
          return [4, Promise.all(items.map(toFilePromises))];
        case 1:
          files = _a.sent();
          return [2, noIgnoredFiles(flatten(files))];
        case 2:
          return [2, noIgnoredFiles(fromList(dt.files).map(function(file) {
            return toFileWithPath(file);
          }))];
      }
    });
  });
}
function noIgnoredFiles(files) {
  return files.filter(function(file) {
    return FILES_TO_IGNORE.indexOf(file.name) === -1;
  });
}
function fromList(items) {
  if (items === null) {
    return [];
  }
  var files = [];
  for (var i = 0; i < items.length; i++) {
    var file = items[i];
    files.push(file);
  }
  return files;
}
function toFilePromises(item) {
  if (typeof item.webkitGetAsEntry !== "function") {
    return fromDataTransferItem(item);
  }
  var entry = item.webkitGetAsEntry();
  if (entry && entry.isDirectory) {
    return fromDirEntry(entry);
  }
  return fromDataTransferItem(item);
}
function flatten(items) {
  return items.reduce(function(acc, files) {
    return __spreadArray(__spreadArray([], __read(acc), false), __read(Array.isArray(files) ? flatten(files) : [files]), false);
  }, []);
}
function fromDataTransferItem(item) {
  var file = item.getAsFile();
  if (!file) {
    return Promise.reject("".concat(item, " is not a File"));
  }
  var fwp = toFileWithPath(file);
  return Promise.resolve(fwp);
}
function fromEntry(entry) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
    });
  });
}
function fromDirEntry(entry) {
  var reader = entry.createReader();
  return new Promise(function(resolve, reject) {
    var entries = [];
    function readEntries() {
      var _this = this;
      reader.readEntries(function(batch) {
        return __awaiter(_this, void 0, void 0, function() {
          var files, err_1, items;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!!batch.length)
                  return [3, 5];
                _a.label = 1;
              case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, Promise.all(entries)];
              case 2:
                files = _a.sent();
                resolve(files);
                return [3, 4];
              case 3:
                err_1 = _a.sent();
                reject(err_1);
                return [3, 4];
              case 4:
                return [3, 6];
              case 5:
                items = Promise.all(batch.map(fromEntry));
                entries.push(items);
                readEntries();
                _a.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(err) {
        reject(err);
      });
    }
    readEntries();
  });
}
function fromFileEntry(entry) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, new Promise(function(resolve, reject) {
        entry.file(function(file) {
          var fwp = toFileWithPath(file, entry.fullPath);
          resolve(fwp);
        }, function(err) {
          reject(err);
        });
      })];
    });
  });
}

// node_modules/react-dropzone/dist/es/utils/index.js
var import_attr_accept = __toESM(require_es());
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
var FILE_INVALID_TYPE = "file-invalid-type";
var FILE_TOO_LARGE = "file-too-large";
var FILE_TOO_SMALL = "file-too-small";
var TOO_MANY_FILES = "too-many-files";
var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr2(accept) {
  accept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
  var messageSuffix = Array.isArray(accept) ? "one of ".concat(accept.join(", ")) : accept;
  return {
    code: FILE_INVALID_TYPE,
    message: "File type must be ".concat(messageSuffix)
  };
};
var getTooLargeRejectionErr = function getTooLargeRejectionErr2(maxSize) {
  return {
    code: FILE_TOO_LARGE,
    message: "File is larger than ".concat(maxSize, " ").concat(maxSize === 1 ? "byte" : "bytes")
  };
};
var getTooSmallRejectionErr = function getTooSmallRejectionErr2(minSize) {
  return {
    code: FILE_TOO_SMALL,
    message: "File is smaller than ".concat(minSize, " ").concat(minSize === 1 ? "byte" : "bytes")
  };
};
var TOO_MANY_FILES_REJECTION = {
  code: TOO_MANY_FILES,
  message: "Too many files"
};
function fileAccepted(file, accept) {
  var isAcceptable = file.type === "application/x-moz-file" || (0, import_attr_accept.default)(file, accept);
  return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
}
function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize)
        return [false, getTooLargeRejectionErr(maxSize)];
      if (file.size < minSize)
        return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(minSize) && file.size < minSize)
      return [false, getTooSmallRejectionErr(minSize)];
    else if (isDefined(maxSize) && file.size > maxSize)
      return [false, getTooLargeRejectionErr(maxSize)];
  }
  return [true, null];
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function allFilesAccepted(_ref) {
  var files = _ref.files, accept = _ref.accept, minSize = _ref.minSize, maxSize = _ref.maxSize, multiple = _ref.multiple, maxFiles = _ref.maxFiles, validator = _ref.validator;
  if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
    return false;
  }
  return files.every(function(file) {
    var _fileAccepted = fileAccepted(file, accept), _fileAccepted2 = _slicedToArray(_fileAccepted, 1), accepted = _fileAccepted2[0];
    var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray(_fileMatchSize, 1), sizeMatch = _fileMatchSize2[0];
    var customErrors = validator ? validator(file) : null;
    return accepted && sizeMatch && !customErrors;
  });
}
function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === "function") {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== "undefined") {
    return event.cancelBubble;
  }
  return false;
}
function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  }
  return Array.prototype.some.call(event.dataTransfer.types, function(type) {
    return type === "Files" || type === "application/x-moz-file";
  });
}
function onDocumentDragOver(event) {
  event.preventDefault();
}
function isIe(userAgent) {
  return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1;
}
function isEdge(userAgent) {
  return userAgent.indexOf("Edge/") !== -1;
}
function isIeOrEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return isIe(userAgent) || isEdge(userAgent);
}
function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return fns.some(function(fn) {
      if (!isPropagationStopped(event) && fn) {
        fn.apply(void 0, [event].concat(args));
      }
      return isPropagationStopped(event);
    });
  };
}
function canUseFileSystemAccessAPI() {
  return "showOpenFilePicker" in window;
}
function pickerOptionsFromAccept(accept) {
  if (isDefined(accept)) {
    var acceptForPicker = Object.entries(accept).filter(function(_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2), mimeType = _ref3[0], ext = _ref3[1];
      var ok = true;
      if (!isMIMEType(mimeType)) {
        console.warn('Skipped "'.concat(mimeType, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.'));
        ok = false;
      }
      if (!Array.isArray(ext) || !ext.every(isExt)) {
        console.warn('Skipped "'.concat(mimeType, '" because an invalid file extension was provided.'));
        ok = false;
      }
      return ok;
    }).reduce(function(agg, _ref4) {
      var _ref5 = _slicedToArray(_ref4, 2), mimeType = _ref5[0], ext = _ref5[1];
      return _objectSpread(_objectSpread({}, agg), {}, _defineProperty({}, mimeType, ext));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: acceptForPicker
    }];
  }
  return accept;
}
function acceptPropAsAcceptAttr(accept) {
  if (isDefined(accept)) {
    return Object.entries(accept).reduce(function(a, _ref6) {
      var _ref7 = _slicedToArray(_ref6, 2), mimeType = _ref7[0], ext = _ref7[1];
      return [].concat(_toConsumableArray(a), [mimeType], _toConsumableArray(ext));
    }, []).filter(function(v) {
      return isMIMEType(v) || isExt(v);
    }).join(",");
  }
  return void 0;
}
function isAbort(v) {
  return v instanceof DOMException && (v.name === "AbortError" || v.code === v.ABORT_ERR);
}
function isSecurityError(v) {
  return v instanceof DOMException && (v.name === "SecurityError" || v.code === v.SECURITY_ERR);
}
function isMIMEType(v) {
  return v === "audio/*" || v === "video/*" || v === "image/*" || v === "text/*" || /\w+\/[-+.\w]+/g.test(v);
}
function isExt(v) {
  return /^.*\.[\w]+$/.test(v);
}

// node_modules/react-dropzone/dist/es/index.js
var _excluded = ["children"];
var _excluded2 = ["open"];
var _excluded3 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"];
var _excluded4 = ["refKey", "onChange", "onClick"];
function _toConsumableArray2(arr) {
  return _arrayWithoutHoles2(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray2(arr) || _nonIterableSpread2();
}
function _nonIterableSpread2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray2(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles2(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray2(arr);
}
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit2(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Dropzone = /* @__PURE__ */ (0, import_react.forwardRef)(function(_ref, ref) {
  var children = _ref.children, params = _objectWithoutProperties(_ref, _excluded);
  var _useDropzone = useDropzone(params), open = _useDropzone.open, props = _objectWithoutProperties(_useDropzone, _excluded2);
  (0, import_react.useImperativeHandle)(ref, function() {
    return {
      open
    };
  }, [open]);
  return /* @__PURE__ */ import_react.default.createElement(import_react.Fragment, null, children(_objectSpread2(_objectSpread2({}, props), {}, {
    open
  })));
});
Dropzone.displayName = "Dropzone";
var defaultProps = {
  disabled: false,
  getFilesFromEvent: fromEvent,
  maxSize: Infinity,
  minSize: 0,
  multiple: true,
  maxFiles: 0,
  preventDropOnDocument: true,
  noClick: false,
  noKeyboard: false,
  noDrag: false,
  noDragEventsBubbling: false,
  validator: null,
  useFsAccessApi: true,
  autoFocus: false
};
Dropzone.defaultProps = defaultProps;
Dropzone.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: import_prop_types.default.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: import_prop_types.default.objectOf(import_prop_types.default.arrayOf(import_prop_types.default.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: import_prop_types.default.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: import_prop_types.default.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: import_prop_types.default.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: import_prop_types.default.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: import_prop_types.default.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: import_prop_types.default.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: import_prop_types.default.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: import_prop_types.default.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: import_prop_types.default.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: import_prop_types.default.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: import_prop_types.default.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: import_prop_types.default.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: import_prop_types.default.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: import_prop_types.default.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: import_prop_types.default.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: import_prop_types.default.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: import_prop_types.default.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: import_prop_types.default.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: import_prop_types.default.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: import_prop_types.default.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: import_prop_types.default.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: import_prop_types.default.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: import_prop_types.default.func
};
var es_default = Dropzone;
var initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  acceptedFiles: [],
  fileRejections: []
};
function useDropzone() {
  var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps), props), accept = _defaultProps$props.accept, disabled = _defaultProps$props.disabled, getFilesFromEvent = _defaultProps$props.getFilesFromEvent, maxSize = _defaultProps$props.maxSize, minSize = _defaultProps$props.minSize, multiple = _defaultProps$props.multiple, maxFiles = _defaultProps$props.maxFiles, onDragEnter = _defaultProps$props.onDragEnter, onDragLeave = _defaultProps$props.onDragLeave, onDragOver = _defaultProps$props.onDragOver, onDrop = _defaultProps$props.onDrop, onDropAccepted = _defaultProps$props.onDropAccepted, onDropRejected = _defaultProps$props.onDropRejected, onFileDialogCancel = _defaultProps$props.onFileDialogCancel, onFileDialogOpen = _defaultProps$props.onFileDialogOpen, useFsAccessApi = _defaultProps$props.useFsAccessApi, autoFocus = _defaultProps$props.autoFocus, preventDropOnDocument = _defaultProps$props.preventDropOnDocument, noClick = _defaultProps$props.noClick, noKeyboard = _defaultProps$props.noKeyboard, noDrag = _defaultProps$props.noDrag, noDragEventsBubbling = _defaultProps$props.noDragEventsBubbling, onError = _defaultProps$props.onError, validator = _defaultProps$props.validator;
  var acceptAttr = (0, import_react.useMemo)(function() {
    return acceptPropAsAcceptAttr(accept);
  }, [accept]);
  var pickerTypes = (0, import_react.useMemo)(function() {
    return pickerOptionsFromAccept(accept);
  }, [accept]);
  var onFileDialogOpenCb = (0, import_react.useMemo)(function() {
    return typeof onFileDialogOpen === "function" ? onFileDialogOpen : noop;
  }, [onFileDialogOpen]);
  var onFileDialogCancelCb = (0, import_react.useMemo)(function() {
    return typeof onFileDialogCancel === "function" ? onFileDialogCancel : noop;
  }, [onFileDialogCancel]);
  var rootRef = (0, import_react.useRef)(null);
  var inputRef = (0, import_react.useRef)(null);
  var _useReducer = (0, import_react.useReducer)(reducer, initialState), _useReducer2 = _slicedToArray2(_useReducer, 2), state = _useReducer2[0], dispatch = _useReducer2[1];
  var isFocused = state.isFocused, isFileDialogActive = state.isFileDialogActive;
  var fsAccessApiWorksRef = (0, import_react.useRef)(typeof window !== "undefined" && window.isSecureContext && useFsAccessApi && canUseFileSystemAccessAPI());
  var onWindowFocus = function onWindowFocus2() {
    if (!fsAccessApiWorksRef.current && isFileDialogActive) {
      setTimeout(function() {
        if (inputRef.current) {
          var files = inputRef.current.files;
          if (!files.length) {
            dispatch({
              type: "closeDialog"
            });
            onFileDialogCancelCb();
          }
        }
      }, 300);
    }
  };
  (0, import_react.useEffect)(function() {
    window.addEventListener("focus", onWindowFocus, false);
    return function() {
      window.removeEventListener("focus", onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancelCb, fsAccessApiWorksRef]);
  var dragTargetsRef = (0, import_react.useRef)([]);
  var onDocumentDrop = function onDocumentDrop2(event) {
    if (rootRef.current && rootRef.current.contains(event.target)) {
      return;
    }
    event.preventDefault();
    dragTargetsRef.current = [];
  };
  (0, import_react.useEffect)(function() {
    if (preventDropOnDocument) {
      document.addEventListener("dragover", onDocumentDragOver, false);
      document.addEventListener("drop", onDocumentDrop, false);
    }
    return function() {
      if (preventDropOnDocument) {
        document.removeEventListener("dragover", onDocumentDragOver);
        document.removeEventListener("drop", onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]);
  (0, import_react.useEffect)(function() {
    if (!disabled && autoFocus && rootRef.current) {
      rootRef.current.focus();
    }
    return function() {
    };
  }, [rootRef, autoFocus, disabled]);
  var onErrCb = (0, import_react.useCallback)(function(e) {
    if (onError) {
      onError(e);
    } else {
      console.error(e);
    }
  }, [onError]);
  var onDragEnterCb = (0, import_react.useCallback)(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [].concat(_toConsumableArray2(dragTargetsRef.current), [event.target]);
    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function(files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }
        var fileCount = files.length;
        var isDragAccept = fileCount > 0 && allFilesAccepted({
          files,
          accept: acceptAttr,
          minSize,
          maxSize,
          multiple,
          maxFiles,
          validator
        });
        var isDragReject = fileCount > 0 && !isDragAccept;
        dispatch({
          isDragAccept,
          isDragReject,
          isDragActive: true,
          type: "setDraggedFiles"
        });
        if (onDragEnter) {
          onDragEnter(event);
        }
      }).catch(function(e) {
        return onErrCb(e);
      });
    }
  }, [getFilesFromEvent, onDragEnter, onErrCb, noDragEventsBubbling, acceptAttr, minSize, maxSize, multiple, maxFiles, validator]);
  var onDragOverCb = (0, import_react.useCallback)(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var hasFiles = isEvtWithFiles(event);
    if (hasFiles && event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = "copy";
      } catch (_unused) {
      }
    }
    if (hasFiles && onDragOver) {
      onDragOver(event);
    }
    return false;
  }, [onDragOver, noDragEventsBubbling]);
  var onDragLeaveCb = (0, import_react.useCallback)(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var targets = dragTargetsRef.current.filter(function(target) {
      return rootRef.current && rootRef.current.contains(target);
    });
    var targetIdx = targets.indexOf(event.target);
    if (targetIdx !== -1) {
      targets.splice(targetIdx, 1);
    }
    dragTargetsRef.current = targets;
    if (targets.length > 0) {
      return;
    }
    dispatch({
      type: "setDraggedFiles",
      isDragActive: false,
      isDragAccept: false,
      isDragReject: false
    });
    if (isEvtWithFiles(event) && onDragLeave) {
      onDragLeave(event);
    }
  }, [rootRef, onDragLeave, noDragEventsBubbling]);
  var setFiles = (0, import_react.useCallback)(function(files, event) {
    var acceptedFiles = [];
    var fileRejections = [];
    files.forEach(function(file) {
      var _fileAccepted = fileAccepted(file, acceptAttr), _fileAccepted2 = _slicedToArray2(_fileAccepted, 2), accepted = _fileAccepted2[0], acceptError = _fileAccepted2[1];
      var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray2(_fileMatchSize, 2), sizeMatch = _fileMatchSize2[0], sizeError = _fileMatchSize2[1];
      var customErrors = validator ? validator(file) : null;
      if (accepted && sizeMatch && !customErrors) {
        acceptedFiles.push(file);
      } else {
        var errors = [acceptError, sizeError];
        if (customErrors) {
          errors = errors.concat(customErrors);
        }
        fileRejections.push({
          file,
          errors: errors.filter(function(e) {
            return e;
          })
        });
      }
    });
    if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
      acceptedFiles.forEach(function(file) {
        fileRejections.push({
          file,
          errors: [TOO_MANY_FILES_REJECTION]
        });
      });
      acceptedFiles.splice(0);
    }
    dispatch({
      acceptedFiles,
      fileRejections,
      type: "setFiles"
    });
    if (onDrop) {
      onDrop(acceptedFiles, fileRejections, event);
    }
    if (fileRejections.length > 0 && onDropRejected) {
      onDropRejected(fileRejections, event);
    }
    if (acceptedFiles.length > 0 && onDropAccepted) {
      onDropAccepted(acceptedFiles, event);
    }
  }, [dispatch, multiple, acceptAttr, minSize, maxSize, maxFiles, onDrop, onDropAccepted, onDropRejected, validator]);
  var onDropCb = (0, import_react.useCallback)(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [];
    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function(files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }
        setFiles(files, event);
      }).catch(function(e) {
        return onErrCb(e);
      });
    }
    dispatch({
      type: "reset"
    });
  }, [getFilesFromEvent, setFiles, onErrCb, noDragEventsBubbling]);
  var openFileDialog = (0, import_react.useCallback)(function() {
    if (fsAccessApiWorksRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      var opts = {
        multiple,
        types: pickerTypes
      };
      window.showOpenFilePicker(opts).then(function(handles) {
        return getFilesFromEvent(handles);
      }).then(function(files) {
        setFiles(files, null);
        dispatch({
          type: "closeDialog"
        });
      }).catch(function(e) {
        if (isAbort(e)) {
          onFileDialogCancelCb(e);
          dispatch({
            type: "closeDialog"
          });
        } else if (isSecurityError(e)) {
          fsAccessApiWorksRef.current = false;
          if (inputRef.current) {
            inputRef.current.value = null;
            inputRef.current.click();
          } else {
            onErrCb(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."));
          }
        } else {
          onErrCb(e);
        }
      });
      return;
    }
    if (inputRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      inputRef.current.value = null;
      inputRef.current.click();
    }
  }, [dispatch, onFileDialogOpenCb, onFileDialogCancelCb, useFsAccessApi, setFiles, onErrCb, pickerTypes, multiple]);
  var onKeyDownCb = (0, import_react.useCallback)(function(event) {
    if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
      return;
    }
    if (event.key === " " || event.key === "Enter" || event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  }, [rootRef, openFileDialog]);
  var onFocusCb = (0, import_react.useCallback)(function() {
    dispatch({
      type: "focus"
    });
  }, []);
  var onBlurCb = (0, import_react.useCallback)(function() {
    dispatch({
      type: "blur"
    });
  }, []);
  var onClickCb = (0, import_react.useCallback)(function() {
    if (noClick) {
      return;
    }
    if (isIeOrEdge()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }, [noClick, openFileDialog]);
  var composeHandler = function composeHandler2(fn) {
    return disabled ? null : fn;
  };
  var composeKeyboardHandler = function composeKeyboardHandler2(fn) {
    return noKeyboard ? null : composeHandler(fn);
  };
  var composeDragHandler = function composeDragHandler2(fn) {
    return noDrag ? null : composeHandler(fn);
  };
  var stopPropagation = function stopPropagation2(event) {
    if (noDragEventsBubbling) {
      event.stopPropagation();
    }
  };
  var getRootProps = (0, import_react.useMemo)(function() {
    return function() {
      var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref2$refKey = _ref2.refKey, refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey, role = _ref2.role, onKeyDown = _ref2.onKeyDown, onFocus = _ref2.onFocus, onBlur = _ref2.onBlur, onClick = _ref2.onClick, onDragEnter2 = _ref2.onDragEnter, onDragOver2 = _ref2.onDragOver, onDragLeave2 = _ref2.onDragLeave, onDrop2 = _ref2.onDrop, rest = _objectWithoutProperties(_ref2, _excluded3);
      return _objectSpread2(_objectSpread2(_defineProperty2({
        onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
        onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
        onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
        onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter2, onDragEnterCb)),
        onDragOver: composeDragHandler(composeEventHandlers(onDragOver2, onDragOverCb)),
        onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave2, onDragLeaveCb)),
        onDrop: composeDragHandler(composeEventHandlers(onDrop2, onDropCb)),
        role: typeof role === "string" && role !== "" ? role : "presentation"
      }, refKey, rootRef), !disabled && !noKeyboard ? {
        tabIndex: 0
      } : {}), rest);
    };
  }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
  var onInputElementClick = (0, import_react.useCallback)(function(event) {
    event.stopPropagation();
  }, []);
  var getInputProps = (0, import_react.useMemo)(function() {
    return function() {
      var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref3$refKey = _ref3.refKey, refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey, onChange = _ref3.onChange, onClick = _ref3.onClick, rest = _objectWithoutProperties(_ref3, _excluded4);
      var inputProps = _defineProperty2({
        accept: acceptAttr,
        multiple,
        type: "file",
        style: {
          display: "none"
        },
        onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
        tabIndex: -1
      }, refKey, inputRef);
      return _objectSpread2(_objectSpread2({}, inputProps), rest);
    };
  }, [inputRef, accept, multiple, onDropCb, disabled]);
  return _objectSpread2(_objectSpread2({}, state), {}, {
    isFocused: isFocused && !disabled,
    getRootProps,
    getInputProps,
    rootRef,
    inputRef,
    open: composeHandler(openFileDialog)
  });
}
function reducer(state, action) {
  switch (action.type) {
    case "focus":
      return _objectSpread2(_objectSpread2({}, state), {}, {
        isFocused: true
      });
    case "blur":
      return _objectSpread2(_objectSpread2({}, state), {}, {
        isFocused: false
      });
    case "openDialog":
      return _objectSpread2(_objectSpread2({}, initialState), {}, {
        isFileDialogActive: true
      });
    case "closeDialog":
      return _objectSpread2(_objectSpread2({}, state), {}, {
        isFileDialogActive: false
      });
    case "setDraggedFiles":
      return _objectSpread2(_objectSpread2({}, state), {}, {
        isDragActive: action.isDragActive,
        isDragAccept: action.isDragAccept,
        isDragReject: action.isDragReject
      });
    case "setFiles":
      return _objectSpread2(_objectSpread2({}, state), {}, {
        acceptedFiles: action.acceptedFiles,
        fileRejections: action.fileRejections
      });
    case "reset":
      return _objectSpread2({}, initialState);
    default:
      return state;
  }
}
function noop() {
}

// app/components/entities/UploadingImageModal/index.tsx
var import_react_webcam = __toESM(require_react_webcam());

// app/components/entities/UploadingImageModal/styles.ts
var ModalHeader = styled_components_browser_esm_default.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
  padding: 16px;

  @media (min-width: 768px) {
    padding: 16px 24px;
  }
`;
var WrapperUploading = styled_components_browser_esm_default.div`
  width: 100%;
  padding-top: 24px;
  border-top: 1px solid #d9dbde;

  @media (min-width: 768px) {
    width: 428px;
  }

  @media (min-width: 1280px) {
    width: 540px;
  }
`;
var ContainerUploading = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 396px;
  }

  @media (min-width: 1280px) {
    width: 384px;
  }
`;
var Image2 = styled_components_browser_esm_default.img`
  width: 224px;
  height: 224px;
  object-fit: cover;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;
var TextContainer = styled_components_browser_esm_default.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  & span:nth-child(1) {
    font-size: ${FONT_SIZES_MOB[TextVariantEnum.textHeading2]};
    font-weight: ${FONT_WEIGHTS_MOB[TextVariantEnum.textHeading2]};
    line-height: ${LINE_HEIGHTS_MOB[TextVariantEnum.textHeading2]};
  }

  @media (min-width: 768px) {
    & span:nth-child(1) {
      font-size: ${FONT_SIZES_DESC[TextVariantEnum.textHeading3]};
      font-weight: ${FONT_WEIGHTS_DESC[TextVariantEnum.textHeading3]};
      line-height: ${LINE_HEIGHTS_DESC[TextVariantEnum.textHeading3]};
    }
  }
`;
var ButtonsContainer = styled_components_browser_esm_default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 1280px) {
    gap: 24px;
  }
`;
var MobileAvatarEditor = styled_components_browser_esm_default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`;
var DesktopAvatarEditor = styled_components_browser_esm_default.div`
  display: none;
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
var LogoWrapper = styled_components_browser_esm_default.div`
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
var HeaderWrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
var Scale = styled_components_browser_esm_default.input`
  width: 100%;
  align-items: center;
  margin-top: 15px;

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    appearance: none;
    height: 2px;
  }
  &::-moz-range-track {
    height: 2px;
  }
  &::-ms-track {
    height: 2px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 4px;
    cursor: pointer;
    margin-top: -7px;
  }
  &::-moz-range-thumb {
    height: 4px;
    cursor: pointer;
    margin-top: 0;
  }

  &::-ms-thumb {
    height: 4px;
    cursor: pointer;
    margin-top: 0;
  }
`;

// app/components/entities/UploadingImageModal/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UploadingImageModal({
  defaultImage,
  setDefaultImage,
  visibility,
  setVisibility
}) {
  const [originalImage, setOriginalImage] = (0, import_react3.useState)(defaultImage);
  const [image, setImage] = (0, import_react3.useState)(defaultImage);
  const [editor, setEditor] = (0, import_react3.useState)(null);
  const [showCamera, setShowCamera] = (0, import_react3.useState)(false);
  const [showEditor, setShowEditor] = (0, import_react3.useState)(false);
  const [rotation, setRotation] = (0, import_react3.useState)(0);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = (0, import_react3.useState)(false);
  const [zoom, setZoom] = (0, import_react3.useState)(1);
  const {
    isUserCompany
  } = useRouteChecks();
  const onSave = (image2) => {
    setImage(image2);
    setDefaultImage(image2);
    setVisibility(false);
  };
  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setOriginalImage(reader.result);
      setImage(reader.result);
      setShowEditor(true);
    };
  };
  const handleDelete = () => {
    setShowDeleteConfirmation(true);
    setDefaultImage(defaultImage);
  };
  const handleConfirmDelete = () => {
    setOriginalImage("");
    setImage("");
    onSave("");
    setShowEditor(false);
    setRotation(0);
    setShowDeleteConfirmation(false);
  };
  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };
  const handleLoadFromGallery = () => {
    setRotation(0);
  };
  const handleTakePhoto = () => {
    setShowCamera(true);
  };
  const handleCancelCamera = () => {
    setShowCamera(false);
  };
  const handleSavePhoto = () => {
    const screenshot = editor?.getScreenshot();
    setOriginalImage(screenshot || "");
    setImage(screenshot || "");
    setShowCamera(false);
    setShowEditor(true);
  };
  const handleRotateRight = () => {
    setRotation(rotation + 90);
  };
  const handleSave = () => {
    const canvasScaled = editor.getImageScaledToCanvas();
    const newImage = canvasScaled.toDataURL("image/jpeg");
    onSave(newImage);
    setShowEditor(false);
  };
  const handleBack = () => {
    setImage(defaultImage);
    setShowEditor(false);
    setRotation(0);
  };
  const imageStyle = {
    transform: `rotate(${rotation}deg)`
  };
  const {
    theme,
    t
  } = useApp();
  (0, import_react3.useEffect)(() => {
    document.body.classList.toggle("has-modal", visibility);
  }, [visibility]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatePresence, { children: visibility && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Background, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 0.75
    }, exit: {
      opacity: 0
    }, transition: {
      duration: 0.15
    }, style: {
      position: "absolute",
      inset: 0,
      backgroundColor: "rgb(63 63 70)",
      zIndex: 998
    } }, void 0, false, {
      fileName: "app/components/entities/UploadingImageModal/index.tsx",
      lineNumber: 127,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/entities/UploadingImageModal/index.tsx",
      lineNumber: 126,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalContainer, { variant: VariantModalEnum.uploading, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalInner, { initial: {
        y: 50,
        opacity: 0
      }, animate: {
        y: 0,
        opacity: 1
      }, exit: {
        y: -50,
        opacity: 0
      }, transition: {
        type: "spring",
        bounce: 0,
        duration: 0.4
      }, variant: VariantModalEnum.uploading, children: [
        showDeleteConfirmation && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderWrapper, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { onClick: handleCancelDelete, style: {
              cursor: "pointer"
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.arrowLeft }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 163,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 160,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: routes_default.root, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo_default, { color: theme.navbar.logoColor }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 167,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 166,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 165,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalCloseButton, { type: "button", onClick: () => setVisibility(!visibility), variant: "withHeader", style: {
              position: "static"
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Close_default, { color: theme.modal.svgColor }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 173,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 170,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/entities/UploadingImageModal/index.tsx",
            lineNumber: 159,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/entities/UploadingImageModal/index.tsx",
            lineNumber: 158,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperUploading, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContainerUploading, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextContainer, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, children: t("user:delete_picture") }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 180,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, children: t("user:if_you_delete_the_picture_it_will_be_replaced_with_the_default_picture") }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 183,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 179,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image2, { src: image, alt: "Delete" }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 187,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonsContainer, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "secondary", onClick: handleCancelDelete, fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:cancel") }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 190,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 189,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "primary", onClick: handleConfirmDelete, fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:delete") }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 193,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 192,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 188,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/entities/UploadingImageModal/index.tsx",
            lineNumber: 178,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/entities/UploadingImageModal/index.tsx",
            lineNumber: 177,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/entities/UploadingImageModal/index.tsx",
          lineNumber: 157,
          columnNumber: 42
        }, this),
        showCamera && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderWrapper, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { onClick: handleCancelCamera, style: {
              cursor: "pointer"
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.arrowLeft }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 206,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 203,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: routes_default.root, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo_default, { color: theme.navbar.logoColor }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 210,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 209,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 208,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalCloseButton, { type: "button", onClick: () => setVisibility(!visibility), variant: "withHeader", style: {
              position: "static"
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Close_default, { color: theme.modal.svgColor }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 216,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 213,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/entities/UploadingImageModal/index.tsx",
            lineNumber: 202,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/entities/UploadingImageModal/index.tsx",
            lineNumber: 201,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperUploading, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContainerUploading, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, children: t("user:new_picture") }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 223,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 222,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_webcam.default, { audio: false, screenshotFormat: "image/jpeg", width: 640, height: 480, ref: (webcam) => setEditor(webcam) }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 225,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonsContainer, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "primary", onClick: handleSavePhoto, fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:take_photo") }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 228,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 227,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "secondary", onClick: handleCancelCamera, fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:cancel") }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 231,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 230,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 226,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/entities/UploadingImageModal/index.tsx",
            lineNumber: 221,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/entities/UploadingImageModal/index.tsx",
            lineNumber: 220,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/entities/UploadingImageModal/index.tsx",
          lineNumber: 200,
          columnNumber: 30
        }, this),
        showEditor && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderWrapper, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { onClick: handleBack, style: {
              cursor: "pointer",
              padding: "10px"
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.arrowLeft }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 245,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 241,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: routes_default.root, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo_default, { color: theme.navbar.logoColor }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 249,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 248,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 247,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalCloseButton, { type: "button", onClick: () => setVisibility(!visibility), variant: "withHeader", style: {
              position: "static"
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Close_default, { color: theme.modal.svgColor }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 255,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 252,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/entities/UploadingImageModal/index.tsx",
            lineNumber: 240,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/entities/UploadingImageModal/index.tsx",
            lineNumber: 239,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperUploading, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContainerUploading, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextContainer, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, children: t("user:new_picture") }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 262,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, children: t("user:you_can_adjust_the_picture_zoom_crop_or_rotate") }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 263,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 261,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MobileAvatarEditor, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                import_react_avatar_editor.default,
                {
                  image,
                  width: 224,
                  height: 224,
                  border: 50,
                  color: [255, 255, 255, 0.6],
                  rotate: rotation,
                  scale: zoom,
                  borderRadius: 112,
                  ref: (editor2) => setEditor(editor2)
                },
                void 0,
                false,
                {
                  fileName: "app/components/entities/UploadingImageModal/index.tsx",
                  lineNumber: 268,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scale, { name: "scale", type: "range", min: 1, max: 3, step: 0.01, value: zoom, onChange: (e) => setZoom(parseFloat(e.target.value)) }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 270,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 267,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DesktopAvatarEditor, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                import_react_avatar_editor.default,
                {
                  image,
                  width: 280,
                  height: 280,
                  border: 50,
                  color: [255, 255, 255, 0.6],
                  rotate: rotation,
                  scale: zoom,
                  borderRadius: 140,
                  ref: (editor2) => setEditor(editor2)
                },
                void 0,
                false,
                {
                  fileName: "app/components/entities/UploadingImageModal/index.tsx",
                  lineNumber: 273,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scale, { name: "scale", type: "range", min: 1, max: 3, step: 0.01, value: zoom, onChange: (e) => setZoom(parseFloat(e.target.value)) }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 275,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 272,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonsContainer, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "secondary", onClick: handleRotateRight, fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:rotate_picture") }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 285,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 284,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "primary", onClick: handleSave, fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:save_as_picture") }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 290,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 289,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 283,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/entities/UploadingImageModal/index.tsx",
            lineNumber: 260,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/entities/UploadingImageModal/index.tsx",
            lineNumber: 259,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/entities/UploadingImageModal/index.tsx",
          lineNumber: 238,
          columnNumber: 30
        }, this),
        !showDeleteConfirmation && !showCamera && !showEditor && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: routes_default.root, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo_default, { color: theme.navbar.logoColor }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 303,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 302,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 301,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalCloseButton, { type: "button", onClick: () => setVisibility(!visibility), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Close_default, { color: theme.modal.svgColor }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 307,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 306,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/entities/UploadingImageModal/index.tsx",
            lineNumber: 300,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperUploading, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContainerUploading, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextContainer, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, children: t("user:edit_picture") }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 313,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, children: t("user:choose_a_photo_from_the_album_or_use_the_camera") }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 314,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 312,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image2, { src: image || (isUserCompany ? DEFAULT_COMPANY_LOGO : DEFAULT_USER_AVATAR), alt: "Delete" }, void 0, false, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 318,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonsContainer, { children: [
              originalImage !== DEFAULT_USER_AVATAR && originalImage !== DEFAULT_COMPANY_LOGO && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "secondary", onClick: handleDelete, fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:delete") }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 321,
                columnNumber: 31
              }, this) }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 320,
                columnNumber: 109
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "primary", onClick: handleTakePhoto, fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:take_photo_with_camera") }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 324,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 323,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(es_default, { onDrop: handleDrop, children: ({
                getRootProps,
                getInputProps
              }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ...getRootProps(), style: {
                width: "100%"
              }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ...getInputProps(), name: "file" }, void 0, false, {
                  fileName: "app/components/entities/UploadingImageModal/index.tsx",
                  lineNumber: 335,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "primary", onClick: handleLoadFromGallery, fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:photo_library") }, void 0, false, {
                  fileName: "app/components/entities/UploadingImageModal/index.tsx",
                  lineNumber: 337,
                  columnNumber: 33
                }, this) }, void 0, false, {
                  fileName: "app/components/entities/UploadingImageModal/index.tsx",
                  lineNumber: 336,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 332,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/components/entities/UploadingImageModal/index.tsx",
                lineNumber: 328,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/entities/UploadingImageModal/index.tsx",
              lineNumber: 319,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/entities/UploadingImageModal/index.tsx",
            lineNumber: 311,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/entities/UploadingImageModal/index.tsx",
            lineNumber: 310,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/entities/UploadingImageModal/index.tsx",
          lineNumber: 299,
          columnNumber: 73
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/UploadingImageModal/index.tsx",
        lineNumber: 143,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalBox, { onClick: () => setVisibility(!visibility) }, void 0, false, {
        fileName: "app/components/entities/UploadingImageModal/index.tsx",
        lineNumber: 348,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/UploadingImageModal/index.tsx",
      lineNumber: 142,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/UploadingImageModal/index.tsx",
    lineNumber: 125,
    columnNumber: 22
  }, this) }, void 0, false, {
    fileName: "app/components/entities/UploadingImageModal/index.tsx",
    lineNumber: 124,
    columnNumber: 10
  }, this);
}

export {
  UploadingImageModal
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=/build/_shared/chunk-JFP3I7KO.js.map
