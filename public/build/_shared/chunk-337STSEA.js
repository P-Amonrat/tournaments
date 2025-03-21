import {
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// node_modules/@artsy/fresnel/dist/DynamicResponsive.js
var require_DynamicResponsive = __commonJS({
  "node_modules/@artsy/fresnel/dist/DynamicResponsive.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.createResponsiveComponents = createResponsiveComponents;
    var _react = _interopRequireDefault(require_react());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? Object(arguments[i]) : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
          ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }
        ownKeys.forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var shallowEqual = function shallowEqual2(a, b) {
      for (var _key in a) {
        if (a[_key] !== b[_key])
          return false;
      }
      return true;
    };
    function createResponsiveComponents() {
      var ResponsiveContext = _react.default.createContext({});
      ResponsiveContext.displayName = "Media.DynamicContext";
      var ResponsiveConsumer = ResponsiveContext.Consumer;
      return {
        Consumer: ResponsiveConsumer,
        Provider: /* @__PURE__ */ function(_React$Component) {
          _inherits(ResponsiveProvider, _React$Component);
          function ResponsiveProvider(props) {
            var _this;
            _classCallCheck(this, ResponsiveProvider);
            _this = _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveProvider).call(this, props));
            _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isSupportedEnvironment", function() {
              return typeof window !== "undefined" && typeof window.matchMedia !== "undefined";
            });
            _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setupMatchers", function(mediaQueries) {
              return Object.keys(mediaQueries).reduce(function(matchers, key) {
                return _objectSpread({}, matchers, _defineProperty({}, key, window.matchMedia(mediaQueries[key])));
              }, {});
            });
            _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "checkMatchers", function(mediaQueryMatchers) {
              return Object.keys(mediaQueryMatchers).reduce(function(matches, key) {
                return _objectSpread({}, matches, _defineProperty({}, key, mediaQueryMatchers[key].matches));
              }, {});
            });
            _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mediaQueryStatusChangedCallback", function() {
              var mediaQueryMatches = _this.checkMatchers(_this.state.mediaQueryMatchers);
              _this.setState({
                mediaQueryMatches
              });
            });
            var _mediaQueryMatchers = void 0;
            var _mediaQueryMatches;
            if (_this.isSupportedEnvironment()) {
              _mediaQueryMatchers = _this.setupMatchers(props.mediaQueries);
              _mediaQueryMatches = _this.checkMatchers(_mediaQueryMatchers);
            } else {
              _mediaQueryMatches = Object.keys(props.mediaQueries).reduce(function(matches, key) {
                return _objectSpread({}, matches, _defineProperty({}, key, !!props.initialMatchingMediaQueries && props.initialMatchingMediaQueries.includes(key)));
              }, {});
            }
            _this.state = {
              mediaQueryMatchers: _mediaQueryMatchers,
              mediaQueryMatches: _mediaQueryMatches
            };
            return _this;
          }
          _createClass(ResponsiveProvider, [{
            key: "componentDidMount",
            // Lifecycle methods
            value: function componentDidMount() {
              if (this.state.mediaQueryMatchers) {
                var mediaQueryStatusChangedCallback = this.mediaQueryStatusChangedCallback;
                Object.values(this.state.mediaQueryMatchers).forEach(function(matcher) {
                  matcher.addListener(mediaQueryStatusChangedCallback);
                });
              }
            }
          }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
              if (this.state.mediaQueryMatchers) {
                var mediaQueryStatusChangedCallback = this.mediaQueryStatusChangedCallback;
                Object.values(this.state.mediaQueryMatchers).forEach(function(matcher) {
                  return matcher.removeListener(mediaQueryStatusChangedCallback);
                });
              }
            }
          }, {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(nextProps, nextState) {
              if (!this.state.mediaQueryMatchers)
                return false;
              if (nextProps.children !== this.props.children)
                return true;
              if (shallowEqual(this.state.mediaQueryMatches, nextState.mediaQueryMatches)) {
                return false;
              }
              return true;
            }
          }, {
            key: "render",
            value: function render() {
              return _react.default.createElement(ResponsiveContext.Provider, {
                value: this.state.mediaQueryMatches
              }, this.props.children);
            }
          }]);
          return ResponsiveProvider;
        }(_react.default.Component)
      };
    }
  }
});

// node_modules/@artsy/fresnel/dist/Utils.js
var require_Utils = __commonJS({
  "node_modules/@artsy/fresnel/dist/Utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.propKey = propKey;
    exports.intersection = intersection;
    exports.createRuleSet = createRuleSet;
    exports.createClassName = createClassName;
    exports.castBreakpointsToIntegers = castBreakpointsToIntegers;
    exports.memoize = memoize;
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? Object(arguments[i]) : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
          ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }
        ownKeys.forEach(function(key) {
          _defineProperty(target, key, source[key]);
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
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function propKey(breakpointProps) {
      return Object.keys(breakpointProps)[0];
    }
    function intersection(a1, a2) {
      return a2 ? a1.filter(function(element) {
        return a2.indexOf(element) >= 0;
      }) : _toConsumableArray(a1);
    }
    function createRuleSet(className, query) {
      return "@media ".concat(query, "{.").concat(className, "{display:none!important;}}");
    }
    function createClassName() {
      for (var _len = arguments.length, components = new Array(_len), _key = 0; _key < _len; _key++) {
        components[_key] = arguments[_key];
      }
      return ["fresnel"].concat(_toConsumableArray(components.reduce(function(acc, breakpoint) {
        return Array.isArray(breakpoint) ? _toConsumableArray(acc).concat(_toConsumableArray(breakpoint)) : _toConsumableArray(acc).concat([breakpoint]);
      }, []))).join("-");
    }
    function castBreakpointsToIntegers(breakpoints) {
      var keys = Object.keys(breakpoints);
      return keys.reduce(function(previous, current, currentIndex) {
        return _objectSpread({}, previous, _defineProperty({}, keys[currentIndex], Math.round(Number(breakpoints[current]))));
      }, {});
    }
    function memoize(func) {
      var results = {};
      return function() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        var argsKey = JSON.stringify(args);
        if (!results[argsKey]) {
          results[argsKey] = func.apply(void 0, args);
        }
        return results[argsKey];
      };
    }
  }
});

// node_modules/@artsy/fresnel/dist/Breakpoints.js
var require_Breakpoints = __commonJS({
  "node_modules/@artsy/fresnel/dist/Breakpoints.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Breakpoints = exports.BreakpointConstraint = void 0;
    var _Utils = require_Utils();
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? Object(arguments[i]) : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
          ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }
        ownKeys.forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      }
      return target;
    }
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
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function breakpointKey(breakpoint) {
      return Array.isArray(breakpoint) ? breakpoint.join("-") : breakpoint;
    }
    var BreakpointConstraint;
    exports.BreakpointConstraint = BreakpointConstraint;
    (function(BreakpointConstraint2) {
      BreakpointConstraint2["at"] = "at";
      BreakpointConstraint2["lessThan"] = "lessThan";
      BreakpointConstraint2["greaterThan"] = "greaterThan";
      BreakpointConstraint2["greaterThanOrEqual"] = "greaterThanOrEqual";
      BreakpointConstraint2["between"] = "between";
    })(BreakpointConstraint || (exports.BreakpointConstraint = BreakpointConstraint = {}));
    var Breakpoints = /* @__PURE__ */ function() {
      _createClass(Breakpoints2, null, [{
        key: "validKeys",
        value: function validKeys() {
          return [BreakpointConstraint.at, BreakpointConstraint.lessThan, BreakpointConstraint.greaterThan, BreakpointConstraint.greaterThanOrEqual, BreakpointConstraint.between];
        }
      }]);
      function Breakpoints2(_breakpoints) {
        var _this = this, _this$_mediaQueries;
        _classCallCheck(this, Breakpoints2);
        _defineProperty(this, "_sortedBreakpoints", void 0);
        _defineProperty(this, "_breakpoints", void 0);
        _defineProperty(this, "_mediaQueries", void 0);
        _defineProperty(this, "findBreakpointsForWidths", function(fromWidth, throughWidth) {
          var fromBreakpoint = _this.findBreakpointAtWidth(fromWidth);
          if (!fromBreakpoint) {
            return void 0;
          }
          var throughBreakpoint = _this.findBreakpointAtWidth(throughWidth);
          if (!throughBreakpoint || fromBreakpoint === throughBreakpoint) {
            return [fromBreakpoint];
          } else {
            return _this._sortedBreakpoints.slice(_this._sortedBreakpoints.indexOf(fromBreakpoint), _this._sortedBreakpoints.indexOf(throughBreakpoint) + 1);
          }
        });
        _defineProperty(this, "findBreakpointAtWidth", function(width) {
          return _this._sortedBreakpoints.find(function(breakpoint, i) {
            var nextBreakpoint = _this._sortedBreakpoints[i + 1];
            if (nextBreakpoint) {
              return width >= _this._breakpoints[breakpoint] && width < _this._breakpoints[nextBreakpoint];
            } else {
              return width >= _this._breakpoints[breakpoint];
            }
          });
        });
        _defineProperty(this, "valuesWithBreakpointProps", function(values) {
          var max = values.length;
          var valueBreakpoints = [];
          var lastTuple;
          _this._sortedBreakpoints.forEach(function(breakpoint, i) {
            var value = values[i];
            if (i < max && (!lastTuple || lastTuple[0] !== value)) {
              lastTuple = [value, [breakpoint]];
              valueBreakpoints.push(lastTuple);
            } else {
              lastTuple[1].push(breakpoint);
            }
          });
          return valueBreakpoints.map(function(_ref, i) {
            var _ref2 = _slicedToArray(_ref, 2), value = _ref2[0], breakpoints = _ref2[1];
            var props = {};
            if (i === valueBreakpoints.length - 1) {
              props.greaterThanOrEqual = breakpoints[0];
            } else if (breakpoints.length === 1) {
              props.at = breakpoints[0];
            } else {
              props.between = [breakpoints[0], valueBreakpoints[i + 1][1][0]];
            }
            return [value, props];
          });
        });
        this._breakpoints = _breakpoints;
        this._sortedBreakpoints = Object.keys(_breakpoints).map(function(breakpoint) {
          return [breakpoint, _breakpoints[breakpoint]];
        }).sort(function(a, b) {
          return a[1] < b[1] ? -1 : 1;
        }).map(function(breakpointAndValue) {
          return breakpointAndValue[0];
        });
        var betweenCombinations = this._sortedBreakpoints.slice(0, -1).reduce(function(acc, b1, i) {
          return _toConsumableArray(acc).concat(_toConsumableArray(_this._sortedBreakpoints.slice(i + 1).map(function(b2) {
            return [b1, b2];
          })));
        }, []);
        this._mediaQueries = (_this$_mediaQueries = {}, _defineProperty(_this$_mediaQueries, BreakpointConstraint.at, this._createBreakpointQueries(BreakpointConstraint.at, this._sortedBreakpoints)), _defineProperty(_this$_mediaQueries, BreakpointConstraint.lessThan, this._createBreakpointQueries(BreakpointConstraint.lessThan, this._sortedBreakpoints.slice(1))), _defineProperty(_this$_mediaQueries, BreakpointConstraint.greaterThan, this._createBreakpointQueries(BreakpointConstraint.greaterThan, this._sortedBreakpoints.slice(0, -1))), _defineProperty(_this$_mediaQueries, BreakpointConstraint.greaterThanOrEqual, this._createBreakpointQueries(BreakpointConstraint.greaterThanOrEqual, this._sortedBreakpoints)), _defineProperty(_this$_mediaQueries, BreakpointConstraint.between, this._createBreakpointQueries(BreakpointConstraint.between, betweenCombinations)), _this$_mediaQueries);
      }
      _createClass(Breakpoints2, [{
        key: "toVisibleAtBreakpointSet",
        value: function toVisibleAtBreakpointSet(breakpointProps) {
          breakpointProps = this._normalizeProps(breakpointProps);
          if (breakpointProps.lessThan) {
            var breakpointIndex = this.sortedBreakpoints.findIndex(function(bp) {
              return bp === breakpointProps.lessThan;
            });
            return this.sortedBreakpoints.slice(0, breakpointIndex);
          } else if (breakpointProps.greaterThan) {
            var _breakpointIndex = this.sortedBreakpoints.findIndex(function(bp) {
              return bp === breakpointProps.greaterThan;
            });
            return this.sortedBreakpoints.slice(_breakpointIndex + 1);
          } else if (breakpointProps.greaterThanOrEqual) {
            var _breakpointIndex2 = this.sortedBreakpoints.findIndex(function(bp) {
              return bp === breakpointProps.greaterThanOrEqual;
            });
            return this.sortedBreakpoints.slice(_breakpointIndex2);
          } else if (breakpointProps.between) {
            var between = breakpointProps.between;
            var fromBreakpointIndex = this.sortedBreakpoints.findIndex(function(bp) {
              return bp === between[0];
            });
            var toBreakpointIndex = this.sortedBreakpoints.findIndex(function(bp) {
              return bp === between[1];
            });
            return this.sortedBreakpoints.slice(fromBreakpointIndex, toBreakpointIndex);
          }
          return [];
        }
      }, {
        key: "toRuleSets",
        value: function toRuleSets() {
          var _this2 = this;
          var keys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Breakpoints2.validKeys();
          var selectedMediaQueries = keys.reduce(function(mediaQueries, query) {
            mediaQueries[query] = _this2._mediaQueries[query];
            return mediaQueries;
          }, {});
          return Object.entries(selectedMediaQueries).reduce(function(acc, _ref3) {
            var _ref4 = _slicedToArray(_ref3, 2), type = _ref4[0], queries = _ref4[1];
            queries.forEach(function(query, breakpoint) {
              acc.push((0, _Utils.createRuleSet)((0, _Utils.createClassName)(type, breakpoint), "not all and ".concat(query)));
            });
            return acc;
          }, []);
        }
      }, {
        key: "shouldRenderMediaQuery",
        value: function shouldRenderMediaQuery(breakpointProps, onlyRenderAt) {
          var _this3 = this;
          breakpointProps = this._normalizeProps(breakpointProps);
          if (breakpointProps.lessThan) {
            var width = this._breakpoints[breakpointProps.lessThan];
            var lowestAllowedWidth = Math.min.apply(Math, _toConsumableArray(onlyRenderAt.map(function(breakpoint) {
              return _this3._breakpoints[breakpoint];
            })));
            return lowestAllowedWidth < width;
          } else if (breakpointProps.greaterThan) {
            var _width = this._breakpoints[this._findNextBreakpoint(breakpointProps.greaterThan)];
            var highestAllowedWidth = Math.max.apply(Math, _toConsumableArray(onlyRenderAt.map(function(breakpoint) {
              return _this3._breakpoints[breakpoint];
            })));
            return highestAllowedWidth >= _width;
          } else if (breakpointProps.greaterThanOrEqual) {
            var _width2 = this._breakpoints[breakpointProps.greaterThanOrEqual];
            var _highestAllowedWidth = Math.max.apply(Math, _toConsumableArray(onlyRenderAt.map(function(breakpoint) {
              return _this3._breakpoints[breakpoint];
            })));
            return _highestAllowedWidth >= _width2;
          } else if (breakpointProps.between) {
            var fromWidth = this._breakpoints[breakpointProps.between[0]];
            var toWidth = this._breakpoints[breakpointProps.between[1]];
            var allowedWidths = onlyRenderAt.map(function(breakpoint) {
              return _this3._breakpoints[breakpoint];
            });
            return !(Math.max.apply(Math, _toConsumableArray(allowedWidths)) < fromWidth || Math.min.apply(Math, _toConsumableArray(allowedWidths)) >= toWidth);
          }
          return false;
        }
      }, {
        key: "_normalizeProps",
        value: function _normalizeProps(breakpointProps) {
          if (breakpointProps.at) {
            var fromIndex = this._sortedBreakpoints.indexOf(breakpointProps.at);
            var to = this._sortedBreakpoints[fromIndex + 1];
            return to ? {
              between: [breakpointProps.at, to]
            } : {
              greaterThanOrEqual: breakpointProps.at
            };
          }
          return breakpointProps;
        }
      }, {
        key: "_createBreakpointQuery",
        value: function _createBreakpointQuery(breakpointProps) {
          breakpointProps = this._normalizeProps(breakpointProps);
          if (breakpointProps.lessThan) {
            var width = this._breakpoints[breakpointProps.lessThan];
            return "(max-width:".concat(width - 0.02, "px)");
          } else if (breakpointProps.greaterThan) {
            var _width3 = this._breakpoints[this._findNextBreakpoint(breakpointProps.greaterThan)];
            return "(min-width:".concat(_width3, "px)");
          } else if (breakpointProps.greaterThanOrEqual) {
            var _width4 = this._breakpoints[breakpointProps.greaterThanOrEqual];
            return "(min-width:".concat(_width4, "px)");
          } else if (breakpointProps.between) {
            var fromWidth = this._breakpoints[breakpointProps.between[0]];
            var toWidth = this._breakpoints[breakpointProps.between[1]];
            return "(min-width:".concat(fromWidth, "px) and (max-width:").concat(toWidth - 0.02, "px)");
          }
          throw new Error("Unexpected breakpoint props: ".concat(JSON.stringify(breakpointProps)));
        }
      }, {
        key: "_createBreakpointQueries",
        value: function _createBreakpointQueries(key, forBreakpoints) {
          var _this4 = this;
          return forBreakpoints.reduce(function(map, breakpoint) {
            map.set(breakpointKey(breakpoint), _this4._createBreakpointQuery(_defineProperty({}, key, breakpoint)));
            return map;
          }, /* @__PURE__ */ new Map());
        }
      }, {
        key: "_findNextBreakpoint",
        value: function _findNextBreakpoint(breakpoint) {
          var nextBreakpoint = this._sortedBreakpoints[this._sortedBreakpoints.indexOf(breakpoint) + 1];
          if (!nextBreakpoint) {
            throw new Error("There is no breakpoint larger than ".concat(breakpoint));
          }
          return nextBreakpoint;
        }
      }, {
        key: "sortedBreakpoints",
        get: function get() {
          return this._sortedBreakpoints;
        }
      }, {
        key: "dynamicResponsiveMediaQueries",
        get: function get() {
          return Array.from(this._mediaQueries[BreakpointConstraint.at].entries()).reduce(function(acc, _ref5) {
            var _ref6 = _slicedToArray(_ref5, 2), k = _ref6[0], v = _ref6[1];
            return _objectSpread({}, acc, _defineProperty({}, k, v));
          }, {});
        }
      }, {
        key: "largestBreakpoint",
        get: function get() {
          return this._sortedBreakpoints[this._sortedBreakpoints.length - 1];
        }
      }]);
      return Breakpoints2;
    }();
    exports.Breakpoints = Breakpoints;
  }
});

// node_modules/@artsy/fresnel/dist/Interactions.js
var require_Interactions = __commonJS({
  "node_modules/@artsy/fresnel/dist/Interactions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Interactions = exports.InteractionKey = void 0;
    var _Utils = require_Utils();
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? Object(arguments[i]) : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
          ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }
        ownKeys.forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      }
      return target;
    }
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
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var InteractionKey;
    exports.InteractionKey = InteractionKey;
    (function(InteractionKey2) {
      InteractionKey2["interaction"] = "interaction";
    })(InteractionKey || (exports.InteractionKey = InteractionKey = {}));
    var Interactions = /* @__PURE__ */ function() {
      _createClass(Interactions2, null, [{
        key: "validKeys",
        value: function validKeys() {
          return [InteractionKey.interaction];
        }
      }]);
      function Interactions2(interactions) {
        _classCallCheck(this, Interactions2);
        _defineProperty(this, "_interactions", void 0);
        this._interactions = interactions;
      }
      _createClass(Interactions2, [{
        key: "toRuleSets",
        value: function toRuleSets() {
          return Object.entries(this._interactions).reduce(function(acc, _ref) {
            var _ref2 = _slicedToArray(_ref, 2), name = _ref2[0], query = _ref2[1];
            return _toConsumableArray(acc).concat([(0, _Utils.createRuleSet)((0, _Utils.createClassName)(InteractionKey.interaction, name), query)]);
          }, []);
        }
      }, {
        key: "shouldRenderMediaQuery",
        value: function shouldRenderMediaQuery(interaction, onlyMatch) {
          return !!(onlyMatch && onlyMatch.includes(interaction));
        }
      }, {
        key: "interactions",
        get: function get() {
          return Object.keys(this._interactions);
        }
      }, {
        key: "dynamicResponsiveMediaQueries",
        get: function get() {
          return Object.entries(this._interactions).reduce(function(acc, _ref3) {
            var _ref4 = _slicedToArray(_ref3, 2), name = _ref4[0], query = _ref4[1];
            return _objectSpread({}, acc, _defineProperty({}, name, query));
          }, {});
        }
      }]);
      return Interactions2;
    }();
    exports.Interactions = Interactions;
  }
});

// node_modules/@artsy/fresnel/dist/MediaQueries.js
var require_MediaQueries = __commonJS({
  "node_modules/@artsy/fresnel/dist/MediaQueries.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MediaQueries = void 0;
    var _Breakpoints = require_Breakpoints();
    var _Interactions = require_Interactions();
    var _Utils = require_Utils();
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? Object(arguments[i]) : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
          ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }
        ownKeys.forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      }
      return target;
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
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var MediaQueries = /* @__PURE__ */ function() {
      _createClass(MediaQueries2, null, [{
        key: "validKeys",
        value: function validKeys() {
          return _toConsumableArray(_Breakpoints.Breakpoints.validKeys()).concat(_toConsumableArray(_Interactions.Interactions.validKeys()));
        }
      }]);
      function MediaQueries2(breakpoints, interactions) {
        var _this = this;
        _classCallCheck(this, MediaQueries2);
        _defineProperty(this, "_breakpoints", void 0);
        _defineProperty(this, "_interactions", void 0);
        _defineProperty(this, "toStyle", function(breakpointKeys) {
          return [
            // Don’t add any size to the layout
            ".fresnel-container{margin:0;padding:0;}"
          ].concat(_toConsumableArray(_this._breakpoints.toRuleSets(breakpointKeys)), _toConsumableArray(_this._interactions.toRuleSets())).join("\n");
        });
        this._breakpoints = new _Breakpoints.Breakpoints(breakpoints);
        this._interactions = new _Interactions.Interactions(interactions || {});
      }
      _createClass(MediaQueries2, [{
        key: "shouldRenderMediaQuery",
        value: function shouldRenderMediaQuery(mediaQueryProps, onlyMatch) {
          var interaction = mediaQueryProps.interaction, breakpointProps = _objectWithoutProperties(mediaQueryProps, ["interaction"]);
          if (interaction) {
            return this._interactions.shouldRenderMediaQuery(interaction, onlyMatch);
          }
          var onlyMatchBreakpoints = (0, _Utils.intersection)(onlyMatch, this._breakpoints.sortedBreakpoints);
          return this._breakpoints.shouldRenderMediaQuery(breakpointProps, onlyMatchBreakpoints);
        }
      }, {
        key: "breakpoints",
        get: function get() {
          return this._breakpoints;
        }
      }, {
        key: "mediaQueryTypes",
        get: function get() {
          return _toConsumableArray(this._breakpoints.sortedBreakpoints).concat(_toConsumableArray(this._interactions.interactions));
        }
      }, {
        key: "dynamicResponsiveMediaQueries",
        get: function get() {
          return _objectSpread({}, this._breakpoints.dynamicResponsiveMediaQueries, this._interactions.dynamicResponsiveMediaQueries);
        }
      }]);
      return MediaQueries2;
    }();
    exports.MediaQueries = MediaQueries;
  }
});

// node_modules/@artsy/fresnel/dist/Media.js
var require_Media = __commonJS({
  "node_modules/@artsy/fresnel/dist/Media.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.createMedia = createMedia2;
    var _react = _interopRequireDefault(require_react());
    var _DynamicResponsive = require_DynamicResponsive();
    var _MediaQueries = require_MediaQueries();
    var _Utils = require_Utils();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? Object(arguments[i]) : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
          ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }
        ownKeys.forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      }
      return target;
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
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function createMedia2(config) {
      var _class, _temp;
      var breakpoints = (0, _Utils.castBreakpointsToIntegers)(config.breakpoints);
      var mediaQueries = new _MediaQueries.MediaQueries(breakpoints, config.interactions || {});
      var DynamicResponsive = (0, _DynamicResponsive.createResponsiveComponents)();
      var MediaContext = _react.default.createContext({});
      MediaContext.displayName = "Media.Context";
      var MediaParentContext = _react.default.createContext({
        hasParentMedia: false,
        breakpointProps: {}
      });
      MediaContext.displayName = "MediaParent.Context";
      var getMediaContextValue = (0, _Utils.memoize)(function(onlyMatch) {
        return {
          onlyMatch
        };
      });
      var MediaContextProvider2 = function MediaContextProvider3(_ref) {
        var disableDynamicMediaQueries = _ref.disableDynamicMediaQueries, onlyMatch = _ref.onlyMatch, children = _ref.children;
        if (disableDynamicMediaQueries) {
          var MediaContextValue = getMediaContextValue(onlyMatch);
          return _react.default.createElement(MediaContext.Provider, {
            value: MediaContextValue
          }, children);
        } else {
          return _react.default.createElement(DynamicResponsive.Provider, {
            mediaQueries: mediaQueries.dynamicResponsiveMediaQueries,
            initialMatchingMediaQueries: (0, _Utils.intersection)(mediaQueries.mediaQueryTypes, onlyMatch)
          }, _react.default.createElement(DynamicResponsive.Consumer, null, function(matches) {
            var matchingMediaQueries = Object.keys(matches).filter(function(key) {
              return matches[key];
            });
            var MediaContextValue2 = getMediaContextValue((0, _Utils.intersection)(matchingMediaQueries, onlyMatch));
            return _react.default.createElement(MediaContext.Provider, {
              value: MediaContextValue2
            }, children);
          }));
        }
      };
      var Media2 = (_temp = _class = /* @__PURE__ */ function(_React$Component) {
        _inherits(Media3, _React$Component);
        function Media3(props) {
          var _this;
          _classCallCheck(this, Media3);
          _this = _possibleConstructorReturn(this, _getPrototypeOf(Media3).call(this, props));
          _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getMediaParentContextValue", (0, _Utils.memoize)(function(breakpointProps) {
            return {
              hasParentMedia: true,
              breakpointProps
            };
          }));
          validateProps(props);
          return _this;
        }
        _createClass(Media3, [{
          key: "render",
          value: function render() {
            var _this2 = this;
            var props = this.props;
            var children = props.children, passedClassName = props.className, style = props.style, interaction = props.interaction, breakpointProps = _objectWithoutProperties(props, ["children", "className", "style", "interaction"]);
            var mediaParentContextValue = this.getMediaParentContextValue(breakpointProps);
            return _react.default.createElement(MediaParentContext.Consumer, null, function(mediaParentContext) {
              return _react.default.createElement(MediaParentContext.Provider, {
                value: mediaParentContextValue
              }, _react.default.createElement(MediaContext.Consumer, null, function() {
                var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, onlyMatch = _ref2.onlyMatch;
                var className;
                if (props.interaction) {
                  className = (0, _Utils.createClassName)("interaction", props.interaction);
                } else {
                  if (props.at) {
                    var largestBreakpoint = mediaQueries.breakpoints.largestBreakpoint;
                    if (props.at === largestBreakpoint) {
                      var ownerName = null;
                      try {
                        var owner = _this2._reactInternalFiber._debugOwner.type;
                        ownerName = owner.displayName || owner.name;
                      } catch (err) {
                      }
                      console.warn("[@artsy/fresnel] `at` is being used with the largest breakpoint. Consider using `<Media greaterThanOrEqual=" + '"'.concat(largestBreakpoint, '">` to account for future ') + "breakpoint definitions outside of this range.".concat(ownerName ? " It is being used in the ".concat(ownerName, " component.") : ""));
                    }
                  }
                  var type = (0, _Utils.propKey)(breakpointProps);
                  var breakpoint = breakpointProps[type];
                  className = (0, _Utils.createClassName)(type, breakpoint);
                }
                var doesMatchParent = !mediaParentContext.hasParentMedia || (0, _Utils.intersection)(mediaQueries.breakpoints.toVisibleAtBreakpointSet(mediaParentContext.breakpointProps), mediaQueries.breakpoints.toVisibleAtBreakpointSet(breakpointProps)).length > 0;
                var renderChildren = doesMatchParent && (onlyMatch === void 0 || mediaQueries.shouldRenderMediaQuery(_objectSpread({}, breakpointProps, {
                  interaction
                }), onlyMatch));
                if (props.children instanceof Function) {
                  return props.children(className, renderChildren);
                } else {
                  return _react.default.createElement("div", {
                    className: "fresnel-container ".concat(className, " ").concat(passedClassName),
                    style,
                    suppressHydrationWarning: !renderChildren
                  }, renderChildren ? props.children : null);
                }
              }));
            });
          }
        }]);
        return Media3;
      }(_react.default.Component), _defineProperty(_class, "defaultProps", {
        className: "",
        style: {}
      }), _defineProperty(_class, "contextType", MediaParentContext), _temp);
      return {
        Media: Media2,
        MediaContextProvider: MediaContextProvider2,
        createMediaStyle: mediaQueries.toStyle,
        SortedBreakpoints: _toConsumableArray(mediaQueries.breakpoints.sortedBreakpoints),
        findBreakpointAtWidth: mediaQueries.breakpoints.findBreakpointAtWidth,
        findBreakpointsForWidths: mediaQueries.breakpoints.findBreakpointsForWidths,
        valuesWithBreakpointProps: mediaQueries.breakpoints.valuesWithBreakpointProps
      };
    }
    var MutuallyExclusiveProps = _MediaQueries.MediaQueries.validKeys();
    function validateProps(props) {
      var selectedProps = Object.keys(props).filter(function(prop) {
        return MutuallyExclusiveProps.includes(prop);
      });
      if (selectedProps.length < 1) {
        throw new Error("1 of ".concat(MutuallyExclusiveProps.join(", "), " is required."));
      } else if (selectedProps.length > 1) {
        throw new Error("Only 1 of ".concat(selectedProps.join(", "), " is allowed at a time."));
      }
    }
  }
});

// node_modules/@artsy/fresnel/dist/index.js
var require_dist = __commonJS({
  "node_modules/@artsy/fresnel/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "createMedia", {
      enumerable: true,
      get: function get() {
        return _Media.createMedia;
      }
    });
    Object.defineProperty(exports, "BreakpointKey", {
      enumerable: true,
      get: function get() {
        return _Breakpoints.BreakpointConstraint;
      }
    });
    var _Media = require_Media();
    var _Breakpoints = require_Breakpoints();
  }
});

// app/components/common/Media.tsx
var import_fresnel = __toESM(require_dist());
var ExampleAppMedia = (0, import_fresnel.createMedia)({
  interactions: {
    landscape: "not all and (orientation: landscape)",
    portrait: "not all and (orientation: portrait)",
    hover: "(hover: hover)",
    notHover: "(hover: none)"
  },
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192
  }
});
var mediaStyles = ExampleAppMedia.createMediaStyle();
var { Media, MediaContextProvider } = ExampleAppMedia;

export {
  mediaStyles,
  Media,
  MediaContextProvider
};
//# sourceMappingURL=/build/_shared/chunk-337STSEA.js.map
