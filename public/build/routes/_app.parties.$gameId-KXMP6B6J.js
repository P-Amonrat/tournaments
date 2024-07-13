import {
  GameCard
} from "/build/_shared/chunk-OR6TXDR3.js";
import {
  TiltCheck
} from "/build/_shared/chunk-64CVQ3LE.js";
import {
  Loading
} from "/build/_shared/chunk-O2SDKC5O.js";
import {
  IndexFilter
} from "/build/_shared/chunk-5WX7JNC5.js";
import {
  GameSelect
} from "/build/_shared/chunk-6656VHVN.js";
import {
  ToCopyField
} from "/build/_shared/chunk-JFV4VOHN.js";
import {
  require_modules
} from "/build/_shared/chunk-3HAWV4PW.js";
import {
  OverlayBg
} from "/build/_shared/chunk-GKESGK3R.js";
import "/build/_shared/chunk-3YDOJKCM.js";
import {
  ShareDropDown
} from "/build/_shared/chunk-ZP5K5WKW.js";
import {
  ArrowUpRight,
  Search
} from "/build/_shared/chunk-EKWFIVWG.js";
import {
  Media
} from "/build/_shared/chunk-337STSEA.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
import {
  resetFetcher
} from "/build/_shared/chunk-7PTPQV33.js";
import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import {
  require_lodash
} from "/build/_shared/chunk-HA2KWBJU.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import {
  CaretRightOutlined_default,
  CommentOutlined_default,
  InboxOutlined_default,
  InfoCircleOutlined_default,
  LockOutlined_default,
  LogoutOutlined_default,
  MinusCircleOutlined_default
} from "/build/_shared/chunk-ONWVZSRO.js";
import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  CheckOutlined_default,
  CloseOutlined_default,
  EditOutlined_default,
  ExclamationCircleFilled_default,
  QuestionCircleOutlined_default,
  _assertThisInitialized,
  _asyncToGenerator,
  _createSuper,
  _inherits,
  _objectSpread2,
  _objectWithoutProperties,
  _slicedToArray,
  _toConsumableArray,
  affix_default,
  avatar_default,
  badge_default,
  button_default,
  card_default,
  col_default,
  divider_default,
  empty_default,
  flex_default,
  form_default,
  image_default,
  input_default,
  list_default,
  modal_default,
  notification_default,
  require_dayjs_min,
  result_default,
  row_default,
  select_default,
  skeleton_default,
  space_default,
  statistic_default,
  switch_default,
  theme_default,
  tooltip_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import {
  _classCallCheck,
  _createClass,
  _typeof,
  require_react_dom
} from "/build/_shared/chunk-UPPG42YI.js";
import {
  useFetcher,
  useLoaderData,
  useLocation,
  useMatches,
  useNavigate,
  useNavigation,
  useRevalidator,
  useRouteLoaderData,
  useSearchParams,
  useSubmit
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// node_modules/style-utils/main.js
var require_main = __commonJS({
  "node_modules/style-utils/main.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.toCssLowerCase = toCssLowerCase;
    exports.toStyleUpperCase = toStyleUpperCase;
    exports.toFixed = toFixed;
    exports.createMatrix = createMatrix;
    exports.checkStyleName = checkStyleName2;
    exports.getGsapType = getGsapType2;
    exports.parseColor = parseColor3;
    exports.parseShadow = parseShadow2;
    exports.getColor = getColor3;
    exports.isTransform = isTransform;
    exports.isConvert = isConvert2;
    exports.splitFilterToObject = splitFilterToObject2;
    exports.getMatrix = getMatrix;
    exports.getTransform = getTransform2;
    exports.stylesToCss = stylesToCss2;
    exports.getUnit = getUnit;
    exports.getValues = getValues;
    exports.findStyleByName = findStyleByName;
    exports.mergeStyle = mergeStyle;
    var isUnitlessNumber = {
      animationIterationCount: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridRow: true,
      gridColumn: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      // SVG-related properties
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var prefixes = ["Webkit", "ms", "Moz", "O"];
    function prefixKey(prefix, key) {
      return prefix + key.charAt(0).toUpperCase() + key.substring(1);
    }
    Object.keys(isUnitlessNumber).forEach(function(prop) {
      prefixes.forEach(function(prefix) {
        isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
      });
    });
    var unquotedContentValueRegex = /^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;
    var IE = function() {
      if (typeof document === "undefined") {
        return false;
      }
      if (navigator && (navigator.userAgent.indexOf("MSIE 8.0") > 0 || navigator.userAgent.indexOf("MSIE 9.0") > 0)) {
        return true;
      }
      return false;
    }();
    var rnd = 1e5;
    var colorLookup = {
      aqua: [0, 255, 255, 1],
      lime: [0, 255, 0, 1],
      silver: [192, 192, 192, 1],
      black: [0, 0, 0, 1],
      maroon: [128, 0, 0, 1],
      teal: [0, 128, 128, 1],
      blue: [0, 0, 255, 1],
      navy: [0, 0, 128, 1],
      white: [255, 255, 255, 1],
      fuchsia: [255, 0, 255, 1],
      olive: [128, 128, 0, 1],
      yellow: [255, 255, 0, 1],
      orange: [255, 165, 0, 1],
      gray: [128, 128, 128, 1],
      purple: [128, 0, 128, 1],
      green: [0, 128, 0, 1],
      red: [255, 0, 0, 1],
      pink: [255, 192, 203, 1],
      cyan: [0, 255, 255, 1],
      transparent: [255, 255, 255, 0]
    };
    var DEG2RAD = Math.PI / 180;
    var RAD2DEG = 180 / Math.PI;
    var $cssList = {
      _lists: {
        transformsBase: ["translate", "translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ", "rotate"],
        transforms3D: ["translate3d", "translateZ", "scaleZ", "rotateX", "rotateY", "perspective"]
      },
      transformGroup: { translate: 1, translate3d: 1, scale: 1, scale3d: 1, rotate: 1, rotate3d: 1, skew: 1 },
      filter: ["grayScale", "sepia", "hueRotate", "invert", "brightness", "contrast", "blur"],
      filterConvert: { grayScale: "grayscale", hueRotate: "hue-rotate" }
    };
    $cssList._lists.transformsBase = !IE ? $cssList._lists.transformsBase.concat($cssList._lists.transforms3D) : $cssList._lists.transformsBase;
    var hexExp = exports.hexExp = /#([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{3})/;
    var rgbAndHslExp = exports.rgbAndHslExp = /((rgb|hsl)[a]?)+\((?:\d|\.\d)+(?:(deg|\%|)),[\s+]?(?:\d|\.\d)+(?:(deg|\%|)),[\s+]?(?:\d|\.\d)+(?:(deg|%|))(,[\s+]?(?:\d|\.\d)+(?:(deg|\%|)))?\)/;
    var colorRegExp2 = exports.colorRegExp = /#([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{3})|((rgb|hsl)[a]?)+\((?:\d|\.\d)+(?:(deg|\%)?),[\s+]?(?:\d|\.\d)+(?:(deg|\%)?),[\s+]?(?:\d|\.\d)+(?:(deg|%)?)(,[\s+]?(?:\d|\.\d)+(?:(deg|\%)?))?\)/;
    var colorNumExp = exports.colorNumExp = /(?:\d|\.\d)+(%?)/g;
    var cssList2 = exports.cssList = $cssList;
    function toCssLowerCase(d) {
      return d.replace(/[A-Z]/, function($1) {
        return "-" + $1.toLocaleLowerCase();
      });
    }
    function toStyleUpperCase(d) {
      return d.replace(/-(.?)/g, function($1) {
        return $1.replace("-", "").toLocaleUpperCase();
      });
    }
    function toFixed(num, length) {
      var _rnd = length ? Math.pow(10, length) : rnd;
      var n = num | 0;
      var dec = num - n;
      var fixed = num;
      if (dec) {
        var r = (dec * _rnd + (num < 0 ? -0.5 : 0.5) | 0) / _rnd;
        var t = r | 0;
        var str = r.toString();
        var decStr = str.split(".")[1] || "";
        fixed = (num < 0 && !(n + t) ? "-" : "") + (n + t) + "." + decStr;
      }
      return parseFloat(fixed);
    }
    function createMatrix(style3) {
      if (typeof document === "undefined") {
        return null;
      }
      var matrixs = ["WebKitCSS", "MozCSS", "DOM", "MsCSS", "MSCSS", "OCSS", "CSS"].filter(function(key) {
        return key + "Matrix" in window;
      });
      if (matrixs.length) {
        return new window[matrixs[0] + "Matrix"](style3);
      }
      console.warn("Browsers do not support matrix.");
      return "";
    }
    function checkStyleName2(p) {
      if (typeof document === "undefined") {
        return null;
      }
      var a = ["O", "Moz", "ms", "Ms", "Webkit"];
      if (p !== "filter" && p in document.body.style) {
        return p;
      }
      var _p = p.charAt(0).toUpperCase() + p.substr(1);
      var prefixCss = a.filter(function(key) {
        return "" + key + _p in document.body.style;
      });
      return prefixCss[0] ? "" + prefixCss[0] + _p : null;
    }
    function getGsapType2(_p) {
      var p = _p;
      p = p === "x" ? "translateX" : p;
      p = p === "y" ? "translateY" : p;
      p = p === "z" ? "translateZ" : p;
      return p;
    }
    var hueToRgb = function hueToRgb2(t1, t2, hue) {
      if (hue < 0)
        hue += 6;
      if (hue >= 6)
        hue -= 6;
      if (hue < 1)
        return (t2 - t1) * hue + t1;
      else if (hue < 3)
        return t2;
      else if (hue < 4)
        return (t2 - t1) * (4 - hue) + t1;
      else
        return t1;
    };
    function parseColor3(value) {
      var colorArray = colorLookup.transparent;
      var color = value;
      var r = void 0;
      var g = void 0;
      var b = void 0;
      if (!color) {
        colorArray = colorLookup.transparent;
      } else if (colorLookup[color]) {
        colorArray = colorLookup[color];
      } else if (typeof color === "number") {
        colorArray = [color >> 16, color >> 8 & 255, color & 255];
      } else {
        if (color.charAt(color.length - 1) === ",") {
          color = color.substr(0, color.length - 1);
        }
        if (color.match(hexExp)) {
          color = color.substr(1);
          if (color.length === 3) {
            r = color.charAt(0);
            g = color.charAt(1);
            b = color.charAt(2);
            color = "" + r + r + g + g + b + b + "ff";
          }
          if (color.length === 6) {
            color += "ff";
          }
          color = parseInt(color, 16);
          colorArray = [color >> 24 & 255, color >> 16 & 255, color >> 8 & 255, parseFloat(((color & 255) / 255).toFixed(2))];
        } else if (color.match(/^hsl/)) {
          colorArray = color.match(colorNumExp);
          var alpha = colorArray[3];
          alpha = typeof alpha === "string" && alpha.match("%") ? parseFloat(alpha) / 100 : parseFloat("" + (alpha || "1"));
          var hue = parseFloat(colorArray[0]) / 60;
          var sat = parseFloat(colorArray[1]) / 100;
          var light = parseFloat(colorArray[2]) / 100;
          var t2 = light <= 0.5 ? light * (sat + 1) : light + sat - light * sat;
          var t1 = light * 2 - t2;
          r = Math.round(hueToRgb(t1, t2, hue + 2) * 255);
          g = Math.round(hueToRgb(t1, t2, hue) * 255);
          b = Math.round(hueToRgb(t1, t2, hue - 2) * 255);
          colorArray = [r, g, b, alpha];
        } else {
          colorArray = color.match(colorNumExp) || colorLookup.transparent;
          colorArray = colorArray.map(function(c) {
            return parseFloat(c);
          });
          if (colorArray.length === 3) {
            colorArray.push(1);
          }
        }
      }
      return colorArray;
    }
    function parseShadow2(v, key) {
      var textKey = key && toStyleUpperCase(key);
      if (!v) {
        if (textKey === "boxShadow") {
          return [0, 0, 0, 0, 0, 0, 0, 0];
        }
        return [0, 0, 0, 0, 0, 0, 0];
      }
      var vArr = v.replace(/,\s+/gi, ",").split(/\s+/).filter(function(c) {
        return c;
      });
      var inset = vArr.indexOf("inset");
      if (inset >= 0) {
        vArr.splice(inset, 1);
      }
      var colorStr = vArr.find(function(c) {
        return colorLookup[c] || c.match(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})|(rgb|hsl)+(?:a)?\((.*)\)/i);
      }) || "black";
      var colorIndex = vArr.indexOf(colorStr);
      vArr.splice(colorIndex, 1);
      var color = parseColor3(colorStr);
      color[3] = typeof color[3] === "number" ? color[3] : 1;
      if (textKey === "boxShadow" && vArr.length < 4) {
        vArr.push(0);
      }
      return vArr.concat(color, inset >= 0 ? ["inset"] : []);
    }
    function getColor3(v) {
      var rgba = v.length === 4 ? "rgba" : "rgb";
      var _vars = v.map(function(d, i) {
        return i < 3 ? Math.round(d) : d;
      });
      return rgba + "(" + _vars.join(",") + ")";
    }
    function isTransform(p) {
      return cssList2._lists.transformsBase.indexOf(p) >= 0 ? "transform" : p;
    }
    function isConvert2(p) {
      var cssName = isTransform(p);
      return cssList2.filter.indexOf(cssName) >= 0 ? "filter" : cssName;
    }
    function splitFilterToObject2(data) {
      if (data === "none" || !data || data === "") {
        return null;
      }
      var filter = data.replace(/\s+/g, "").split(")").filter(function(item) {
        return item;
      });
      var startData = {};
      filter.forEach(function(item) {
        var dataArr = item.split("(");
        startData[dataArr[0]] = dataArr[1];
      });
      return startData;
    }
    function getMatrix(t) {
      var arr = t.match(/(?:\-|\b)[\d\-\.e]+\b/gi);
      var m = {};
      if (arr.length === 6) {
        m.m11 = parseFloat(arr[0]);
        m.m12 = parseFloat(arr[1]);
        m.m13 = 0;
        m.m14 = 0;
        m.m21 = parseFloat(arr[2]);
        m.m22 = parseFloat(arr[3]);
        m.m23 = 0;
        m.m24 = 0;
        m.m31 = 0;
        m.m32 = 0;
        m.m33 = 1;
        m.m34 = 0;
        m.m41 = parseFloat(arr[4]);
        m.m42 = parseFloat(arr[5]);
        m.m43 = 0;
        m.m44 = 0;
      } else {
        arr.forEach(function(item, i) {
          var ii = i % 4 + 1;
          var j = Math.floor(i / 4) + 1;
          m["m" + j + ii] = parseFloat(item);
        });
      }
      return m;
    }
    function transformNoMatrix(transform) {
      var tm = {};
      tm.translateX = 0;
      tm.translateY = 0;
      tm.translateZ = 0;
      tm.rotate = 0;
      tm.rotateX = 0;
      tm.rotateY = 0;
      tm.scaleX = 1;
      tm.scaleY = 1;
      tm.scaleZ = 1;
      tm.skewX = 0;
      tm.skewY = 0;
      tm.perspective = 0;
      (transform.trim().match(/(\w+)\([^\)]+\)/ig) || []).forEach(function(str) {
        var strArray = str.split("(");
        var key = strArray[0].trim();
        var value = strArray[1].replace(")", "").trim();
        if (value.match(/%|em|rem/ig)) {
          console.warn("value(" + value + ") must be absolute, not relative, has been converted to absolute.");
        }
        value = value.replace(/px|deg|\)/ig, "");
        if (cssList2.transformGroup[key] && key !== "rotate") {
          value = value.split(",").map(function(num) {
            return parseFloat(num);
          });
          if (key === "scale3d" || key === "translate3d") {
            ["X", "Y", "Z"].forEach(function(s, i) {
              var $key = key.substring(0, key.length - 2);
              tm["" + $key + s] = value[i] || tm["" + $key + s];
            });
          } else if (key === "rotate3d") {
            tm.rotateX = value[0] && value[3] || tm.rotateX;
            tm.rotateY = value[1] && value[3] || tm.rotateY;
            tm.rotate = value[2] && value[3] || tm.rotate;
          } else {
            ["X", "Y"].forEach(function(s, i) {
              tm["" + key + s] = value[i] || tm["" + key + s];
            });
          }
        } else {
          if (key === "rotateZ") {
            tm.rotate = parseFloat(value) || tm.rotate;
          } else {
            tm[key] = parseFloat(value) || tm[key];
          }
        }
      });
      return tm;
    }
    function getTransform2(transform) {
      var _transform = !transform || transform === "none" || transform === "" ? "matrix(1, 0, 0, 1, 0, 0)" : transform;
      if (!_transform.match("matrix")) {
        return transformNoMatrix(transform);
      }
      var m = getMatrix(_transform);
      var m11 = m.m11;
      var m12 = m.m12;
      var m13 = m.m13;
      var m14 = m.m14;
      var m21 = m.m21;
      var m22 = m.m22;
      var m23 = m.m23;
      var m24 = m.m24;
      var m31 = m.m31;
      var m32 = m.m32;
      var m33 = m.m33;
      var m34 = m.m34;
      var m43 = m.m43;
      var t1 = void 0;
      var t2 = void 0;
      var t3 = void 0;
      var tm = {};
      var angle = Math.atan2(m23, m33);
      var skewX = Math.tan(m21);
      var skewY = Math.tan(m12);
      var cos = void 0;
      var sin = void 0;
      tm.rotateX = toFixed(angle * RAD2DEG) || 0;
      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = m21 * cos + m31 * sin;
        t2 = m22 * cos + m32 * sin;
        t3 = m23 * cos + m33 * sin;
        m31 = m21 * -sin + m31 * cos;
        m32 = m22 * -sin + m32 * cos;
        m33 = m23 * -sin + m33 * cos;
        m34 = m24 * -sin + m34 * cos;
        m21 = t1;
        m22 = t2;
        m23 = t3;
      }
      angle = Math.atan2(-m13, m33);
      tm.rotateY = toFixed(angle * RAD2DEG) || 0;
      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = m11 * cos - m31 * sin;
        t2 = m12 * cos - m32 * sin;
        t3 = m13 * cos - m33 * sin;
        m32 = m12 * sin + m32 * cos;
        m33 = m13 * sin + m33 * cos;
        m34 = m14 * sin + m34 * cos;
        m11 = t1;
        m12 = t2;
        m13 = t3;
      }
      angle = Math.atan2(m12, m11);
      tm.rotate = toFixed(angle * RAD2DEG) || 0;
      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = m11 * cos + m12 * sin;
        t2 = m21 * cos + m22 * sin;
        t3 = m31 * cos + m32 * sin;
        m12 = m12 * cos - m11 * sin;
        m22 = m22 * cos - m21 * sin;
        m32 = m32 * cos - m31 * sin;
        m11 = t1;
        m21 = t2;
        m31 = t3;
      }
      if (tm.rotateX && Math.abs(tm.rotateX) + Math.abs(tm.rotate) > 359.9) {
        tm.rotateX = tm.rotate = 0;
        tm.rotateY = 180 - tm.rotateY || 0;
      }
      tm.scaleX = toFixed(Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13));
      tm.scaleY = toFixed(Math.sqrt(m22 * m22 + m23 * m23));
      tm.scaleZ = toFixed(Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33));
      tm.skewX = skewX === -skewY ? 0 : skewX;
      tm.skewY = skewY === -skewX ? 0 : skewY;
      tm.perspective = m34 ? 1 / (m34 < 0 ? -m34 : m34) : 0;
      tm.translateX = m.m41;
      tm.translateY = m.m42;
      tm.translateZ = m43;
      return tm;
    }
    function stylesToCss2(key, value) {
      var _value = void 0;
      if (!isUnitlessNumber[key] && typeof value === "number") {
        _value = " " + value + "px";
      } else if (key === "content" && !unquotedContentValueRegex.test(value)) {
        _value = "'" + value.replace(/'/g, "\\'") + "'";
      }
      return _value || value;
    }
    function getUnit(p, v) {
      var currentUnit = v && v.toString().replace(/[^a-z|%]/ig, "");
      var unit = "";
      if (p.indexOf("translate") >= 0 || p.indexOf("perspective") >= 0 || p.indexOf("blur") >= 0) {
        unit = "px";
      } else if (p.indexOf("skew") >= 0 || p.indexOf("rotate") >= 0) {
        unit = "deg";
      }
      return currentUnit || unit;
    }
    function getValues(p, d, u) {
      return p + "(" + d + (u || "") + ")";
    }
    function findStyleByName(cssArray, name) {
      var ret = null;
      if (cssArray) {
        cssArray.forEach(function(_cname) {
          if (ret) {
            return;
          }
          var cName = _cname.split("(")[0];
          var a = cName in cssList2.transformGroup && name.substring(0, name.length - 1).indexOf(cName) >= 0;
          var b = name in cssList2.transformGroup && cName.substring(0, cName.length - 1).indexOf(name) >= 0;
          var c = cName in cssList2.transformGroup && name in cssList2.transformGroup && (cName.substring(0, cName.length - 2) === name || name.substring(0, name.length - 2) === cName);
          if (cName === name || a || b || c) {
            ret = _cname;
          }
        });
      }
      return ret;
    }
    function mergeStyle(current, change) {
      if (!current || current === "") {
        return change;
      }
      if (!change || change === "") {
        return current;
      }
      var _current = current.replace(/\s/g, "").split(")").filter(function(item) {
        return item !== "" && item;
      }).map(function(item) {
        return item + ")";
      });
      var _change = change.replace(/\s/g, "").split(")").filter(function(item) {
        return item !== "" && item;
      });
      _change.forEach(function(changeOnly) {
        var changeArr = changeOnly.split("(");
        var changeName = changeArr[0];
        var currentSame = findStyleByName(_current, changeName);
        if (!currentSame) {
          _current.push(changeOnly + ")");
        } else {
          var index = _current.indexOf(currentSame);
          _current[index] = changeOnly + ")";
        }
      });
      _current.forEach(function(item, i) {
        if (item.indexOf("perspective") >= 0 && i) {
          _current.splice(i, 1);
          _current.unshift(item);
        }
      });
      return _current.join(" ").trim();
    }
  }
});

// node_modules/performance-now/lib/performance-now.js
var require_performance_now = __commonJS({
  "node_modules/performance-now/lib/performance-now.js"(exports, module) {
    (function() {
      var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
      if (typeof performance !== "undefined" && performance !== null && performance.now) {
        module.exports = function() {
          return performance.now();
        };
      } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
        module.exports = function() {
          return (getNanoSeconds() - nodeLoadTime) / 1e6;
        };
        hrtime = process.hrtime;
        getNanoSeconds = function() {
          var hr;
          hr = hrtime();
          return hr[0] * 1e9 + hr[1];
        };
        moduleLoadTime = getNanoSeconds();
        upTime = process.uptime() * 1e9;
        nodeLoadTime = moduleLoadTime - upTime;
      } else if (Date.now) {
        module.exports = function() {
          return Date.now() - loadTime;
        };
        loadTime = Date.now();
      } else {
        module.exports = function() {
          return (/* @__PURE__ */ new Date()).getTime() - loadTime;
        };
        loadTime = (/* @__PURE__ */ new Date()).getTime();
      }
    }).call(exports);
  }
});

// node_modules/raf/index.js
var require_raf = __commonJS({
  "node_modules/raf/index.js"(exports, module) {
    var now = require_performance_now();
    var root = typeof window === "undefined" ? globalThis : window;
    var vendors = ["moz", "webkit"];
    var suffix = "AnimationFrame";
    var raf = root["request" + suffix];
    var caf = root["cancel" + suffix] || root["cancelRequest" + suffix];
    for (i = 0; !raf && i < vendors.length; i++) {
      raf = root[vendors[i] + "Request" + suffix];
      caf = root[vendors[i] + "Cancel" + suffix] || root[vendors[i] + "CancelRequest" + suffix];
    }
    var i;
    if (!raf || !caf) {
      last = 0, id = 0, queue = [], frameDuration = 1e3 / 60;
      raf = function(callback) {
        if (queue.length === 0) {
          var _now = now(), next = Math.max(0, frameDuration - (_now - last));
          last = next + _now;
          setTimeout(function() {
            var cp = queue.slice(0);
            queue.length = 0;
            for (var i2 = 0; i2 < cp.length; i2++) {
              if (!cp[i2].cancelled) {
                try {
                  cp[i2].callback(last);
                } catch (e) {
                  setTimeout(function() {
                    throw e;
                  }, 0);
                }
              }
            }
          }, Math.round(next));
        }
        queue.push({
          handle: ++id,
          callback,
          cancelled: false
        });
        return id;
      };
      caf = function(handle) {
        for (var i2 = 0; i2 < queue.length; i2++) {
          if (queue[i2].handle === handle) {
            queue[i2].cancelled = true;
          }
        }
      };
    }
    var last;
    var id;
    var queue;
    var frameDuration;
    module.exports = function(fn) {
      return raf.call(root, fn);
    };
    module.exports.cancel = function() {
      caf.apply(root, arguments);
    };
    module.exports.polyfill = function(object) {
      if (!object) {
        object = root;
      }
      object.requestAnimationFrame = raf;
      object.cancelAnimationFrame = caf;
    };
  }
});

// node_modules/tween-functions/index.js
var require_tween_functions = __commonJS({
  "node_modules/tween-functions/index.js"(exports, module) {
    "use strict";
    var tweenFunctions = {
      linear: function(t, b, _c, d) {
        var c = _c - b;
        return c * t / d + b;
      },
      easeInQuad: function(t, b, _c, d) {
        var c = _c - b;
        return c * (t /= d) * t + b;
      },
      easeOutQuad: function(t, b, _c, d) {
        var c = _c - b;
        return -c * (t /= d) * (t - 2) + b;
      },
      easeInOutQuad: function(t, b, _c, d) {
        var c = _c - b;
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t + b;
        } else {
          return -c / 2 * (--t * (t - 2) - 1) + b;
        }
      },
      easeInCubic: function(t, b, _c, d) {
        var c = _c - b;
        return c * (t /= d) * t * t + b;
      },
      easeOutCubic: function(t, b, _c, d) {
        var c = _c - b;
        return c * ((t = t / d - 1) * t * t + 1) + b;
      },
      easeInOutCubic: function(t, b, _c, d) {
        var c = _c - b;
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t * t + b;
        } else {
          return c / 2 * ((t -= 2) * t * t + 2) + b;
        }
      },
      easeInQuart: function(t, b, _c, d) {
        var c = _c - b;
        return c * (t /= d) * t * t * t + b;
      },
      easeOutQuart: function(t, b, _c, d) {
        var c = _c - b;
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
      },
      easeInOutQuart: function(t, b, _c, d) {
        var c = _c - b;
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t * t * t + b;
        } else {
          return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        }
      },
      easeInQuint: function(t, b, _c, d) {
        var c = _c - b;
        return c * (t /= d) * t * t * t * t + b;
      },
      easeOutQuint: function(t, b, _c, d) {
        var c = _c - b;
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
      },
      easeInOutQuint: function(t, b, _c, d) {
        var c = _c - b;
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t * t * t * t + b;
        } else {
          return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        }
      },
      easeInSine: function(t, b, _c, d) {
        var c = _c - b;
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
      },
      easeOutSine: function(t, b, _c, d) {
        var c = _c - b;
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
      },
      easeInOutSine: function(t, b, _c, d) {
        var c = _c - b;
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
      },
      easeInExpo: function(t, b, _c, d) {
        var c = _c - b;
        return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
      },
      easeOutExpo: function(t, b, _c, d) {
        var c = _c - b;
        return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
      },
      easeInOutExpo: function(t, b, _c, d) {
        var c = _c - b;
        if (t === 0) {
          return b;
        }
        if (t === d) {
          return b + c;
        }
        if ((t /= d / 2) < 1) {
          return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        } else {
          return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
      },
      easeInCirc: function(t, b, _c, d) {
        var c = _c - b;
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
      },
      easeOutCirc: function(t, b, _c, d) {
        var c = _c - b;
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
      },
      easeInOutCirc: function(t, b, _c, d) {
        var c = _c - b;
        if ((t /= d / 2) < 1) {
          return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        } else {
          return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        }
      },
      easeInElastic: function(t, b, _c, d) {
        var c = _c - b;
        var a, p, s;
        s = 1.70158;
        p = 0;
        a = c;
        if (t === 0) {
          return b;
        } else if ((t /= d) === 1) {
          return b + c;
        }
        if (!p) {
          p = d * 0.3;
        }
        if (a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
      },
      easeOutElastic: function(t, b, _c, d) {
        var c = _c - b;
        var a, p, s;
        s = 1.70158;
        p = 0;
        a = c;
        if (t === 0) {
          return b;
        } else if ((t /= d) === 1) {
          return b + c;
        }
        if (!p) {
          p = d * 0.3;
        }
        if (a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
      },
      easeInOutElastic: function(t, b, _c, d) {
        var c = _c - b;
        var a, p, s;
        s = 1.70158;
        p = 0;
        a = c;
        if (t === 0) {
          return b;
        } else if ((t /= d / 2) === 2) {
          return b + c;
        }
        if (!p) {
          p = d * (0.3 * 1.5);
        }
        if (a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if (t < 1) {
          return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        } else {
          return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
        }
      },
      easeInBack: function(t, b, _c, d, s) {
        var c = _c - b;
        if (s === void 0) {
          s = 1.70158;
        }
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
      },
      easeOutBack: function(t, b, _c, d, s) {
        var c = _c - b;
        if (s === void 0) {
          s = 1.70158;
        }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
      },
      easeInOutBack: function(t, b, _c, d, s) {
        var c = _c - b;
        if (s === void 0) {
          s = 1.70158;
        }
        if ((t /= d / 2) < 1) {
          return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        } else {
          return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
        }
      },
      easeInBounce: function(t, b, _c, d) {
        var c = _c - b;
        var v;
        v = tweenFunctions.easeOutBounce(d - t, 0, c, d);
        return c - v + b;
      },
      easeOutBounce: function(t, b, _c, d) {
        var c = _c - b;
        if ((t /= d) < 1 / 2.75) {
          return c * (7.5625 * t * t) + b;
        } else if (t < 2 / 2.75) {
          return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
        } else if (t < 2.5 / 2.75) {
          return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
        } else {
          return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
        }
      },
      easeInOutBounce: function(t, b, _c, d) {
        var c = _c - b;
        var v;
        if (t < d / 2) {
          v = tweenFunctions.easeInBounce(t * 2, 0, c, d);
          return v * 0.5 + b;
        } else {
          v = tweenFunctions.easeOutBounce(t * 2 - d, 0, c, d);
          return v * 0.5 + c * 0.5 + b;
        }
      }
    };
    module.exports = tweenFunctions;
  }
});

// node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
    function _typeof2(o) {
      "@babel/helpers - typeof";
      return module.exports = _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof2(o);
    }
    module.exports = _typeof2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var require_regeneratorRuntime = __commonJS({
  "node_modules/@babel/runtime/helpers/regeneratorRuntime.js"(exports, module) {
    var _typeof2 = require_typeof()["default"];
    function _regeneratorRuntime2() {
      "use strict";
      module.exports = _regeneratorRuntime2 = function _regeneratorRuntime3() {
        return e;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t2, e2, r2) {
        t2[e2] = r2.value;
      }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
      function define(t2, e2, r2) {
        return Object.defineProperty(t2, e2, {
          value: r2,
          enumerable: true,
          configurable: true,
          writable: true
        }), t2[e2];
      }
      try {
        define({}, "");
      } catch (t2) {
        define = function define2(t3, e2, r2) {
          return t3[e2] = r2;
        };
      }
      function wrap(t2, e2, r2, n2) {
        var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = Object.create(i2.prototype), c2 = new Context(n2 || []);
        return o(a2, "_invoke", {
          value: makeInvokeMethod(t2, r2, c2)
        }), a2;
      }
      function tryCatch(t2, e2, r2) {
        try {
          return {
            type: "normal",
            arg: t2.call(e2, r2)
          };
        } catch (t3) {
          return {
            type: "throw",
            arg: t3
          };
        }
      }
      e.wrap = wrap;
      var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var p = {};
      define(p, a, function() {
        return this;
      });
      var d = Object.getPrototypeOf, v = d && d(d(values([])));
      v && v !== r && n.call(v, a) && (p = v);
      var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
      function defineIteratorMethods(t2) {
        ["next", "throw", "return"].forEach(function(e2) {
          define(t2, e2, function(t3) {
            return this._invoke(e2, t3);
          });
        });
      }
      function AsyncIterator(t2, e2) {
        function invoke(r3, o2, i2, a2) {
          var c2 = tryCatch(t2[r3], t2, o2);
          if ("throw" !== c2.type) {
            var u2 = c2.arg, h2 = u2.value;
            return h2 && "object" == _typeof2(h2) && n.call(h2, "__await") ? e2.resolve(h2.__await).then(function(t3) {
              invoke("next", t3, i2, a2);
            }, function(t3) {
              invoke("throw", t3, i2, a2);
            }) : e2.resolve(h2).then(function(t3) {
              u2.value = t3, i2(u2);
            }, function(t3) {
              return invoke("throw", t3, i2, a2);
            });
          }
          a2(c2.arg);
        }
        var r2;
        o(this, "_invoke", {
          value: function value(t3, n2) {
            function callInvokeWithMethodAndArg() {
              return new e2(function(e3, r3) {
                invoke(t3, n2, e3, r3);
              });
            }
            return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          }
        });
      }
      function makeInvokeMethod(e2, r2, n2) {
        var o2 = h;
        return function(i2, a2) {
          if (o2 === f)
            throw new Error("Generator is already running");
          if (o2 === s) {
            if ("throw" === i2)
              throw a2;
            return {
              value: t,
              done: true
            };
          }
          for (n2.method = i2, n2.arg = a2; ; ) {
            var c2 = n2.delegate;
            if (c2) {
              var u2 = maybeInvokeDelegate(c2, n2);
              if (u2) {
                if (u2 === y)
                  continue;
                return u2;
              }
            }
            if ("next" === n2.method)
              n2.sent = n2._sent = n2.arg;
            else if ("throw" === n2.method) {
              if (o2 === h)
                throw o2 = s, n2.arg;
              n2.dispatchException(n2.arg);
            } else
              "return" === n2.method && n2.abrupt("return", n2.arg);
            o2 = f;
            var p2 = tryCatch(e2, r2, n2);
            if ("normal" === p2.type) {
              if (o2 = n2.done ? s : l, p2.arg === y)
                continue;
              return {
                value: p2.arg,
                done: n2.done
              };
            }
            "throw" === p2.type && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
          }
        };
      }
      function maybeInvokeDelegate(e2, r2) {
        var n2 = r2.method, o2 = e2.iterator[n2];
        if (o2 === t)
          return r2.delegate = null, "throw" === n2 && e2.iterator["return"] && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), "throw" === r2.method) || "return" !== n2 && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
        var i2 = tryCatch(o2, e2.iterator, r2.arg);
        if ("throw" === i2.type)
          return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
        var a2 = i2.arg;
        return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, "return" !== r2.method && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
      }
      function pushTryEntry(t2) {
        var e2 = {
          tryLoc: t2[0]
        };
        1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), this.tryEntries.push(e2);
      }
      function resetTryEntry(t2) {
        var e2 = t2.completion || {};
        e2.type = "normal", delete e2.arg, t2.completion = e2;
      }
      function Context(t2) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t2.forEach(pushTryEntry, this), this.reset(true);
      }
      function values(e2) {
        if (e2 || "" === e2) {
          var r2 = e2[a];
          if (r2)
            return r2.call(e2);
          if ("function" == typeof e2.next)
            return e2;
          if (!isNaN(e2.length)) {
            var o2 = -1, i2 = function next() {
              for (; ++o2 < e2.length; )
                if (n.call(e2, o2))
                  return next.value = e2[o2], next.done = false, next;
              return next.value = t, next.done = true, next;
            };
            return i2.next = i2;
          }
        }
        throw new TypeError(_typeof2(e2) + " is not iterable");
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
      }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
      }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
        var e2 = "function" == typeof t2 && t2.constructor;
        return !!e2 && (e2 === GeneratorFunction || "GeneratorFunction" === (e2.displayName || e2.name));
      }, e.mark = function(t2) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define(t2, u, "GeneratorFunction")), t2.prototype = Object.create(g), t2;
      }, e.awrap = function(t2) {
        return {
          __await: t2
        };
      }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
        return this;
      }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
        void 0 === i2 && (i2 = Promise);
        var a2 = new AsyncIterator(wrap(t2, r2, n2, o2), i2);
        return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t3) {
          return t3.done ? t3.value : a2.next();
        });
      }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
        return this;
      }), define(g, "toString", function() {
        return "[object Generator]";
      }), e.keys = function(t2) {
        var e2 = Object(t2), r2 = [];
        for (var n2 in e2)
          r2.push(n2);
        return r2.reverse(), function next() {
          for (; r2.length; ) {
            var t3 = r2.pop();
            if (t3 in e2)
              return next.value = t3, next.done = false, next;
          }
          return next.done = true, next;
        };
      }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(e2) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e2)
            for (var r2 in this)
              "t" === r2.charAt(0) && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t);
        },
        stop: function stop() {
          this.done = true;
          var t2 = this.tryEntries[0].completion;
          if ("throw" === t2.type)
            throw t2.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(e2) {
          if (this.done)
            throw e2;
          var r2 = this;
          function handle(n2, o3) {
            return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
          }
          for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
            var i2 = this.tryEntries[o2], a2 = i2.completion;
            if ("root" === i2.tryLoc)
              return handle("end");
            if (i2.tryLoc <= this.prev) {
              var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
              if (c2 && u2) {
                if (this.prev < i2.catchLoc)
                  return handle(i2.catchLoc, true);
                if (this.prev < i2.finallyLoc)
                  return handle(i2.finallyLoc);
              } else if (c2) {
                if (this.prev < i2.catchLoc)
                  return handle(i2.catchLoc, true);
              } else {
                if (!u2)
                  throw new Error("try statement without catch or finally");
                if (this.prev < i2.finallyLoc)
                  return handle(i2.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(t2, e2) {
          for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
            var o2 = this.tryEntries[r2];
            if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
              var i2 = o2;
              break;
            }
          }
          i2 && ("break" === t2 || "continue" === t2) && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
          var a2 = i2 ? i2.completion : {};
          return a2.type = t2, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
        },
        complete: function complete(t2, e2) {
          if ("throw" === t2.type)
            throw t2.arg;
          return "break" === t2.type || "continue" === t2.type ? this.next = t2.arg : "return" === t2.type ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : "normal" === t2.type && e2 && (this.next = e2), y;
        },
        finish: function finish(t2) {
          for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
            var r2 = this.tryEntries[e2];
            if (r2.finallyLoc === t2)
              return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
          }
        },
        "catch": function _catch(t2) {
          for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
            var r2 = this.tryEntries[e2];
            if (r2.tryLoc === t2) {
              var n2 = r2.completion;
              if ("throw" === n2.type) {
                var o2 = n2.arg;
                resetTryEntry(r2);
              }
              return o2;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e2, r2, n2) {
          return this.delegate = {
            iterator: values(e2),
            resultName: r2,
            nextLoc: n2
          }, "next" === this.method && (this.arg = t), y;
        }
      }, e;
    }
    module.exports = _regeneratorRuntime2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/regenerator/index.js
var require_regenerator = __commonJS({
  "node_modules/@babel/runtime/regenerator/index.js"(exports, module) {
    var runtime = require_regeneratorRuntime()();
    module.exports = runtime;
    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  }
});

// node_modules/react-slide-button/build/index.js
var require_build = __commonJS({
  "node_modules/react-slide-button/build/index.js"(exports, module) {
    (() => {
      "use strict";
      var e = { 358: (e2, t2, n2) => {
        n2.d(t2, { Z: () => c });
        var r2 = n2(81), i = n2.n(r2), o = n2(645), a = n2.n(o)()(i());
        a.push([e2.id, ".slide-but * {\n  box-sizing: border-box;\n}\n.slide-but {\n  border: 2px solid #444;\n  min-width: 200px;\n  padding: 11px;\n  position: relative;\n  overflow: hidden;\n  color: #000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: default;\n  user-select: none;\n  /* box-sizing: border-box; */\n}\n.slide-but * {\n  pointer-events: none;\n  user-select: none;\n}\n.slide-but .slide-overlay {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  height: 100%;\n  width: 2rem;\n  background: #444;\n  transition: width 0.2s ease-out;\n  will-change: width;\n  overflow: hidden;\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.slide-but .slide-overlay .slide-overlay-wrapper {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n.slide-but .slide-overlay .slide-caret-wrapper {\n  position: absolute;\n  max-width: 45px;\n  min-width: 0;\n  right: 0;\n  top: 50%;\n  height: 100%;\n  transform: translateY(-50%);\n  background: #444;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  justify-content: center;\n}\n.slide-but .slide-overlay .slide-overlay-txt {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 0;\n  height: 100%;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  white-space: nowrap;\n}\n", ""]);
        const c = a;
      }, 645: (e2) => {
        e2.exports = function(e3) {
          var t2 = [];
          return t2.toString = function() {
            return this.map(function(t3) {
              var n2 = "", r2 = void 0 !== t3[5];
              return t3[4] && (n2 += "@supports (".concat(t3[4], ") {")), t3[2] && (n2 += "@media ".concat(t3[2], " {")), r2 && (n2 += "@layer".concat(t3[5].length > 0 ? " ".concat(t3[5]) : "", " {")), n2 += e3(t3), r2 && (n2 += "}"), t3[2] && (n2 += "}"), t3[4] && (n2 += "}"), n2;
            }).join("");
          }, t2.i = function(e4, n2, r2, i, o) {
            "string" == typeof e4 && (e4 = [[null, e4, void 0]]);
            var a = {};
            if (r2)
              for (var c = 0; c < this.length; c++) {
                var s = this[c][0];
                null != s && (a[s] = true);
              }
            for (var l = 0; l < e4.length; l++) {
              var u = [].concat(e4[l]);
              r2 && a[u[0]] || (void 0 !== o && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = o), n2 && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = n2) : u[2] = n2), i && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = i) : u[4] = "".concat(i)), t2.push(u));
            }
          }, t2;
        };
      }, 81: (e2) => {
        e2.exports = function(e3) {
          return e3[1];
        };
      }, 379: (e2) => {
        var t2 = [];
        function n2(e3) {
          for (var n3 = -1, r3 = 0; r3 < t2.length; r3++)
            if (t2[r3].identifier === e3) {
              n3 = r3;
              break;
            }
          return n3;
        }
        function r2(e3, r3) {
          for (var o = {}, a = [], c = 0; c < e3.length; c++) {
            var s = e3[c], l = r3.base ? s[0] + r3.base : s[0], u = o[l] || 0, d = "".concat(l, " ").concat(u);
            o[l] = u + 1;
            var p = n2(d), v = { css: s[1], media: s[2], sourceMap: s[3], supports: s[4], layer: s[5] };
            if (-1 !== p)
              t2[p].references++, t2[p].updater(v);
            else {
              var h = i(v, r3);
              r3.byIndex = c, t2.splice(c, 0, { identifier: d, updater: h, references: 1 });
            }
            a.push(d);
          }
          return a;
        }
        function i(e3, t3) {
          var n3 = t3.domAPI(t3);
          return n3.update(e3), function(t4) {
            if (t4) {
              if (t4.css === e3.css && t4.media === e3.media && t4.sourceMap === e3.sourceMap && t4.supports === e3.supports && t4.layer === e3.layer)
                return;
              n3.update(e3 = t4);
            } else
              n3.remove();
          };
        }
        e2.exports = function(e3, i2) {
          var o = r2(e3 = e3 || [], i2 = i2 || {});
          return function(e4) {
            e4 = e4 || [];
            for (var a = 0; a < o.length; a++) {
              var c = n2(o[a]);
              t2[c].references--;
            }
            for (var s = r2(e4, i2), l = 0; l < o.length; l++) {
              var u = n2(o[l]);
              0 === t2[u].references && (t2[u].updater(), t2.splice(u, 1));
            }
            o = s;
          };
        };
      }, 569: (e2) => {
        var t2 = {};
        e2.exports = function(e3, n2) {
          var r2 = function(e4) {
            if (void 0 === t2[e4]) {
              var n3 = document.querySelector(e4);
              if (window.HTMLIFrameElement && n3 instanceof window.HTMLIFrameElement)
                try {
                  n3 = n3.contentDocument.head;
                } catch (e5) {
                  n3 = null;
                }
              t2[e4] = n3;
            }
            return t2[e4];
          }(e3);
          if (!r2)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          r2.appendChild(n2);
        };
      }, 216: (e2) => {
        e2.exports = function(e3) {
          var t2 = document.createElement("style");
          return e3.setAttributes(t2, e3.attributes), e3.insert(t2, e3.options), t2;
        };
      }, 565: (e2, t2, n2) => {
        e2.exports = function(e3) {
          var t3 = n2.nc;
          t3 && e3.setAttribute("nonce", t3);
        };
      }, 795: (e2) => {
        e2.exports = function(e3) {
          var t2 = e3.insertStyleElement(e3);
          return { update: function(n2) {
            !function(e4, t3, n3) {
              var r2 = "";
              n3.supports && (r2 += "@supports (".concat(n3.supports, ") {")), n3.media && (r2 += "@media ".concat(n3.media, " {"));
              var i = void 0 !== n3.layer;
              i && (r2 += "@layer".concat(n3.layer.length > 0 ? " ".concat(n3.layer) : "", " {")), r2 += n3.css, i && (r2 += "}"), n3.media && (r2 += "}"), n3.supports && (r2 += "}");
              var o = n3.sourceMap;
              o && "undefined" != typeof btoa && (r2 += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), t3.styleTagTransform(r2, e4, t3.options);
            }(t2, e3, n2);
          }, remove: function() {
            !function(e4) {
              if (null === e4.parentNode)
                return false;
              e4.parentNode.removeChild(e4);
            }(t2);
          } };
        };
      }, 589: (e2) => {
        e2.exports = function(e3, t2) {
          if (t2.styleSheet)
            t2.styleSheet.cssText = e3;
          else {
            for (; t2.firstChild; )
              t2.removeChild(t2.firstChild);
            t2.appendChild(document.createTextNode(e3));
          }
        };
      } }, t = {};
      function n(r2) {
        var i = t[r2];
        if (void 0 !== i)
          return i.exports;
        var o = t[r2] = { id: r2, exports: {} };
        return e[r2](o, o.exports, n), o.exports;
      }
      n.n = (e2) => {
        var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
        return n.d(t2, { a: t2 }), t2;
      }, n.d = (e2, t2) => {
        for (var r2 in t2)
          n.o(t2, r2) && !n.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
      }, n.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), n.r = (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      }, n.nc = void 0;
      var r = {};
      (() => {
        n.r(r), n.d(r, { default: () => E });
        const e2 = require_react();
        var t2 = n.n(e2);
        const i = { delta: 10, preventScrollOnSwipe: false, rotationAngle: 0, trackMouse: false, trackTouch: true, swipeDuration: 1 / 0, touchEventOptions: { passive: true } }, o = { first: true, initial: [0, 0], start: 0, swiping: false, xy: [0, 0] }, a = "mousemove", c = "mouseup";
        function s(e3, t3) {
          if (0 === t3)
            return e3;
          const n2 = Math.PI / 180 * t3;
          return [e3[0] * Math.cos(n2) + e3[1] * Math.sin(n2), e3[1] * Math.cos(n2) - e3[0] * Math.sin(n2)];
        }
        function l(t3) {
          const { trackMouse: n2 } = t3, r2 = e2.useRef(Object.assign({}, o)), l2 = e2.useRef(Object.assign({}, i)), u2 = e2.useRef(Object.assign({}, l2.current));
          let d2;
          for (d2 in u2.current = Object.assign({}, l2.current), l2.current = Object.assign(Object.assign({}, i), t3), i)
            void 0 === l2.current[d2] && (l2.current[d2] = i[d2]);
          const [p2, v2] = e2.useMemo(() => function(e3, t4) {
            const n3 = (t5) => {
              const n4 = "touches" in t5;
              n4 && t5.touches.length > 1 || e3((e4, i2) => {
                i2.trackMouse && !n4 && (document.addEventListener(a, r3), document.addEventListener(c, u3));
                const { clientX: l4, clientY: d4 } = n4 ? t5.touches[0] : t5, p4 = s([l4, d4], i2.rotationAngle);
                return i2.onTouchStartOrOnMouseDown && i2.onTouchStartOrOnMouseDown({ event: t5 }), Object.assign(Object.assign(Object.assign({}, e4), o), { initial: p4.slice(), xy: p4, start: t5.timeStamp || 0 });
              });
            }, r3 = (t5) => {
              e3((e4, n4) => {
                const r4 = "touches" in t5;
                if (r4 && t5.touches.length > 1)
                  return e4;
                if (t5.timeStamp - e4.start > n4.swipeDuration)
                  return e4.swiping ? Object.assign(Object.assign({}, e4), { swiping: false }) : e4;
                const { clientX: o2, clientY: a2 } = r4 ? t5.touches[0] : t5, [c2, l4] = s([o2, a2], n4.rotationAngle), u4 = c2 - e4.xy[0], d4 = l4 - e4.xy[1], p4 = Math.abs(u4), v3 = Math.abs(d4), h2 = (t5.timeStamp || 0) - e4.start, f2 = Math.sqrt(p4 * p4 + v3 * v3) / (h2 || 1), m2 = [u4 / (h2 || 1), d4 / (h2 || 1)], b2 = function(e5, t6, n5, r5) {
                  return e5 > t6 ? n5 > 0 ? "Right" : "Left" : r5 > 0 ? "Down" : "Up";
                }(p4, v3, u4, d4), y2 = "number" == typeof n4.delta ? n4.delta : n4.delta[b2.toLowerCase()] || i.delta;
                if (p4 < y2 && v3 < y2 && !e4.swiping)
                  return e4;
                const g2 = { absX: p4, absY: v3, deltaX: u4, deltaY: d4, dir: b2, event: t5, first: e4.first, initial: e4.initial, velocity: f2, vxvy: m2 };
                g2.first && n4.onSwipeStart && n4.onSwipeStart(g2), n4.onSwiping && n4.onSwiping(g2);
                let A2 = false;
                return (n4.onSwiping || n4.onSwiped || n4[`onSwiped${b2}`]) && (A2 = true), A2 && n4.preventScrollOnSwipe && n4.trackTouch && t5.cancelable && t5.preventDefault(), Object.assign(Object.assign({}, e4), { first: false, eventData: g2, swiping: true });
              });
            }, l3 = (t5) => {
              e3((e4, n4) => {
                let r4;
                if (e4.swiping && e4.eventData) {
                  if (t5.timeStamp - e4.start < n4.swipeDuration) {
                    r4 = Object.assign(Object.assign({}, e4.eventData), { event: t5 }), n4.onSwiped && n4.onSwiped(r4);
                    const i2 = n4[`onSwiped${r4.dir}`];
                    i2 && i2(r4);
                  }
                } else
                  n4.onTap && n4.onTap({ event: t5 });
                return n4.onTouchEndOrOnMouseUp && n4.onTouchEndOrOnMouseUp({ event: t5 }), Object.assign(Object.assign(Object.assign({}, e4), o), { eventData: r4 });
              });
            }, u3 = (e4) => {
              document.removeEventListener(a, r3), document.removeEventListener(c, u3), l3(e4);
            }, d3 = (e4, t5) => {
              let o2 = () => {
              };
              if (e4 && e4.addEventListener) {
                const a2 = Object.assign(Object.assign({}, i.touchEventOptions), t5.touchEventOptions), c2 = [["touchstart", n3, a2], ["touchmove", r3, Object.assign(Object.assign({}, a2), t5.preventScrollOnSwipe ? { passive: false } : {})], ["touchend", l3, a2]];
                c2.forEach(([t6, n4, r4]) => e4.addEventListener(t6, n4, r4)), o2 = () => c2.forEach(([t6, n4]) => e4.removeEventListener(t6, n4));
              }
              return o2;
            }, p3 = { ref: (t5) => {
              null !== t5 && e3((e4, n4) => {
                if (e4.el === t5)
                  return e4;
                const r4 = {};
                return e4.el && e4.el !== t5 && e4.cleanUpTouch && (e4.cleanUpTouch(), r4.cleanUpTouch = void 0), n4.trackTouch && t5 && (r4.cleanUpTouch = d3(t5, n4)), Object.assign(Object.assign(Object.assign({}, e4), { el: t5 }), r4);
              });
            } };
            return t4.trackMouse && (p3.onMouseDown = n3), [p3, d3];
          }((e3) => r2.current = e3(r2.current, l2.current), { trackMouse: n2 }), [n2]);
          return r2.current = function(e3, t4, n3, r3) {
            return t4.trackTouch && e3.el ? e3.cleanUpTouch ? t4.preventScrollOnSwipe !== n3.preventScrollOnSwipe || t4.touchEventOptions.passive !== n3.touchEventOptions.passive ? (e3.cleanUpTouch(), Object.assign(Object.assign({}, e3), { cleanUpTouch: r3(e3.el, t4) })) : e3 : Object.assign(Object.assign({}, e3), { cleanUpTouch: r3(e3.el, t4) }) : (e3.cleanUpTouch && e3.cleanUpTouch(), Object.assign(Object.assign({}, e3), { cleanUpTouch: void 0 }));
          }(r2.current, l2.current, u2.current, v2), p2;
        }
        var u = n(379), d = n.n(u), p = n(795), v = n.n(p), h = n(569), f = n.n(h), m = n(565), b = n.n(m), y = n(216), g = n.n(y), A = n(589), w = n.n(A), O = n(358), M = {};
        function j() {
          return j = Object.assign ? Object.assign.bind() : function(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var n2 = arguments[t3];
              for (var r2 in n2)
                Object.prototype.hasOwnProperty.call(n2, r2) && (e3[r2] = n2[r2]);
            }
            return e3;
          }, j.apply(this, arguments);
        }
        function S(e3, t3) {
          return function(e4) {
            if (Array.isArray(e4))
              return e4;
          }(e3) || function(e4, t4) {
            var n2 = null == e4 ? null : "undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"];
            if (null != n2) {
              var r2, i2, o2 = [], a2 = true, c2 = false;
              try {
                for (n2 = n2.call(e4); !(a2 = (r2 = n2.next()).done) && (o2.push(r2.value), !t4 || o2.length !== t4); a2 = true)
                  ;
              } catch (e5) {
                c2 = true, i2 = e5;
              } finally {
                try {
                  a2 || null == n2.return || n2.return();
                } finally {
                  if (c2)
                    throw i2;
                }
              }
              return o2;
            }
          }(e3, t3) || function(e4, t4) {
            if (e4) {
              if ("string" == typeof e4)
                return I(e4, t4);
              var n2 = Object.prototype.toString.call(e4).slice(8, -1);
              return "Object" === n2 && e4.constructor && (n2 = e4.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e4) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? I(e4, t4) : void 0;
            }
          }(e3, t3) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function I(e3, t3) {
          (null == t3 || t3 > e3.length) && (t3 = e3.length);
          for (var n2 = 0, r2 = new Array(t3); n2 < t3; n2++)
            r2[n2] = e3[n2];
          return r2;
        }
        M.styleTagTransform = w(), M.setAttributes = b(), M.insert = f().bind(null, "head"), M.domAPI = v(), M.insertStyleElement = g(), d()(O.Z, M), O.Z && O.Z.locals && O.Z.locals;
        var Z = ["Left", "Down", "Up"], T = function(e3) {
          return e3.getBoundingClientRect().left + window.scrollX;
        };
        const E = function(n2) {
          var r2 = n2.mainText, i2 = n2.overlayText, o2 = n2.onSlideDone, a2 = n2.reset, c2 = n2.classList, s2 = void 0 === c2 ? "" : c2, u2 = n2.overlayClassList, d2 = void 0 === u2 ? "" : u2, p2 = n2.caretClassList, v2 = void 0 === p2 ? "" : p2, h2 = n2.delta, f2 = void 0 === h2 ? 10 : h2, m2 = n2.minSlideWidth, b2 = void 0 === m2 ? 0.6 : m2, y2 = n2.minSlideVelocity, g2 = void 0 === y2 ? 0.6 : y2, A2 = n2.caret, w2 = void 0 === A2 ? null : A2, O2 = n2.customCaretWidth, M2 = void 0 === O2 ? 40 : O2, I2 = S((0, e2.useState)(M2), 2), E2 = I2[0], x = I2[1], N = S((0, e2.useState)(false), 2), R = N[0], D = N[1], L = (0, e2.useRef)();
          (0, e2.useEffect)(function() {
            a2 && (D(false), x(M2));
          }, [a2]);
          var z = l({ onSwipedRight: function(e3) {
            if (!R) {
              var t3 = L.current.offsetWidth;
              if (e3.velocity > g2)
                x(t3), D(true), setTimeout(function() {
                  return o2();
                }, 100);
              else {
                var n3 = T(L.current);
                Math.abs(e3.initial[0] - n3) <= 100 + M2 && ("touchend" === e3.event.type ? e3.event.changedTouches[0].clientX - n3 : e3.event.offsetX) > b2 * t3 ? (x(t3), D(true), setTimeout(function() {
                  return o2();
                }, 100)) : x(M2);
              }
            }
          }, onSwiping: function(e3) {
            if (!R && !Z.includes(e3.dir)) {
              var t3 = T(L.current);
              Math.abs(e3.initial[0] - t3) <= 100 + M2 && (e3.event.type && "touchmove" === e3.event.type ? x(e3.event.touches[0].clientX - t3) : e3.event.offsetX > M2 && x(e3.event.offsetX));
            }
          }, delta: f2, trackMouse: true, preventDefaultTouchmoveEvent: true });
          return t2().createElement("div", j({ className: "slide-but ".concat(s2) }, z, { ref: function(e3) {
            z.ref(e3), L.current = e3;
          } }), t2().createElement("div", { className: "slide-overlay ".concat(d2), style: { width: E2 } }, t2().createElement("div", { className: "slide-overlay-wrapper" }, t2().createElement("div", { style: { width: M2, maxWidth: M2 }, className: "slide-caret-wrapper ".concat(v2) }, w2 || t2().createElement("img", { src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA/XAAAP1wHWM14/AAAF7GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA2LTE4VDE1OjA5OjI1KzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wOS0xMlQxMzo0MzozNCswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wOS0xMlQxMzo0MzozNCswNTozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4NGI0NDc4Zi1mZGEzLWQyNDAtYjAwYi1iYjBhN2ExMmRjM2YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZmMyOWVhZjMtNGFkMC0yZjRiLThjNGUtNzAwNmJhNmY2MDFmIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZmMyOWVhZjMtNGFkMC0yZjRiLThjNGUtNzAwNmJhNmY2MDFmIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmYzI5ZWFmMy00YWQwLTJmNGItOGM0ZS03MDA2YmE2ZjYwMWYiIHN0RXZ0OndoZW49IjIwMjAtMDYtMThUMTU6MDk6MjUrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ODRiNDQ3OGYtZmRhMy1kMjQwLWIwMGItYmIwYTdhMTJkYzNmIiBzdEV2dDp3aGVuPSIyMDIwLTA5LTEyVDEzOjQzOjM0KzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+zQS2rgAAAg9JREFUeNrtm71OAkEUhamUGBo7O9Te17CQxkIbnUZ9Dq0EG+19Aan1KfQBjAZLqIVEJRYWn41EJGZ/Zu7unZ2dm0yy0Jx7vmRh98ydBtCo82pEABFABBABRAB/1zpwAnSBU2AXaJXY1Lz+WdH6i19sA7fAG781BK6BjRLMJ+lvFg3gkuT6AvYKNK+iP7vokb0OCzDfzaFvpAFskb8kIdjoG0kAfexKCsKNpb6RAjDCviQgDB30jQSAKW7lAqEFfDrqG1cAE9zLFsKSkL5xAXCPTNlCkNI3tgCOkCsbCJL6BsvngIEyhIEWhNnFGvCqCEFa32DxKNxWhtDWgFB0E95DKKMJryEkvZPXAkJaMBE8hCzpjGQTB75ByBpRBQshT04XJIS8YaVkEzsWYamkfscmFpduYlVb3za2lmqip6x/4ZLdjwUaeHLQl4Dw7BInNYFHxwY+gBVL/WUB/fcqA2hqAvDhFhhr3QJS4pX8EZQ0X7m/QWnznSo9CEmbN8rmcz0KB2s+6+twsOazBCJBm0+LxII3T8KMkKZ51VC0VuYXAdTOPAtbY5rm1bfGXhTNq2+OHiubV98ef1A078WAxETRvBcjMlMtcTwZkhppiePJmFxf0bwXg5Kqo6p4MCqrOqz8s8619Oc/XKUI+zAuvy+t+9+BhTtKPLCARwcmfDwyU7h+PDQVAUQAEUAEUOf1DWnacUliejyLAAAAAElFTkSuQmCC", alt: "caret", style: { maxWidth: "100%" } })), t2().createElement("div", { className: "slide-overlay-txt", style: { width: E2 } }, i2))), r2);
        };
      })(), module.exports = r;
    })();
  }
});

// node_modules/react-use-websocket/dist/lib/constants.js
var require_constants = __commonJS({
  "node_modules/react-use-websocket/dist/lib/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEventSourceSupported = exports.isReactNative = exports.ReadyState = exports.DEFAULT_HEARTBEAT = exports.UNPARSABLE_JSON_OBJECT = exports.DEFAULT_RECONNECT_INTERVAL_MS = exports.DEFAULT_RECONNECT_LIMIT = exports.SOCKET_IO_PING_CODE = exports.SOCKET_IO_PATH = exports.SOCKET_IO_PING_INTERVAL = exports.DEFAULT_EVENT_SOURCE_OPTIONS = exports.EMPTY_EVENT_HANDLERS = exports.DEFAULT_OPTIONS = void 0;
    var MILLISECONDS = 1;
    var SECONDS = 1e3 * MILLISECONDS;
    exports.DEFAULT_OPTIONS = {};
    exports.EMPTY_EVENT_HANDLERS = {};
    exports.DEFAULT_EVENT_SOURCE_OPTIONS = {
      withCredentials: false,
      events: exports.EMPTY_EVENT_HANDLERS
    };
    exports.SOCKET_IO_PING_INTERVAL = 25 * SECONDS;
    exports.SOCKET_IO_PATH = "/socket.io/?EIO=3&transport=websocket";
    exports.SOCKET_IO_PING_CODE = "2";
    exports.DEFAULT_RECONNECT_LIMIT = 20;
    exports.DEFAULT_RECONNECT_INTERVAL_MS = 5e3;
    exports.UNPARSABLE_JSON_OBJECT = {};
    exports.DEFAULT_HEARTBEAT = {
      message: "ping",
      timeout: 6e4,
      interval: 25e3
    };
    var ReadyState2;
    (function(ReadyState3) {
      ReadyState3[ReadyState3["UNINSTANTIATED"] = -1] = "UNINSTANTIATED";
      ReadyState3[ReadyState3["CONNECTING"] = 0] = "CONNECTING";
      ReadyState3[ReadyState3["OPEN"] = 1] = "OPEN";
      ReadyState3[ReadyState3["CLOSING"] = 2] = "CLOSING";
      ReadyState3[ReadyState3["CLOSED"] = 3] = "CLOSED";
    })(ReadyState2 = exports.ReadyState || (exports.ReadyState = {}));
    var eventSourceSupported = function() {
      try {
        return "EventSource" in globalThis;
      } catch (e) {
        return false;
      }
    };
    exports.isReactNative = typeof navigator !== "undefined" && navigator.product === "ReactNative";
    exports.isEventSourceSupported = !exports.isReactNative && eventSourceSupported();
  }
});

// node_modules/react-use-websocket/dist/lib/globals.js
var require_globals = __commonJS({
  "node_modules/react-use-websocket/dist/lib/globals.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resetWebSockets = exports.sharedWebSockets = void 0;
    exports.sharedWebSockets = {};
    var resetWebSockets = function(url) {
      if (url && exports.sharedWebSockets.hasOwnProperty(url)) {
        delete exports.sharedWebSockets[url];
      } else {
        for (var url_1 in exports.sharedWebSockets) {
          if (exports.sharedWebSockets.hasOwnProperty(url_1)) {
            delete exports.sharedWebSockets[url_1];
          }
        }
      }
    };
    exports.resetWebSockets = resetWebSockets;
  }
});

// node_modules/react-use-websocket/dist/lib/socket-io.js
var require_socket_io = __commonJS({
  "node_modules/react-use-websocket/dist/lib/socket-io.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setUpSocketIOPing = exports.appendQueryParams = exports.parseSocketIOUrl = void 0;
    var constants_1 = require_constants();
    var parseSocketIOUrl = function(url) {
      if (url) {
        var isSecure = /^https|wss/.test(url);
        var strippedProtocol = url.replace(/^(https?|wss?)(:\/\/)?/, "");
        var removedFinalBackSlack = strippedProtocol.replace(/\/$/, "");
        var protocol = isSecure ? "wss" : "ws";
        return "".concat(protocol, "://").concat(removedFinalBackSlack).concat(constants_1.SOCKET_IO_PATH);
      } else if (url === "") {
        var isSecure = /^https/.test(window.location.protocol);
        var protocol = isSecure ? "wss" : "ws";
        var port = window.location.port ? ":".concat(window.location.port) : "";
        return "".concat(protocol, "://").concat(window.location.hostname).concat(port).concat(constants_1.SOCKET_IO_PATH);
      }
      return url;
    };
    exports.parseSocketIOUrl = parseSocketIOUrl;
    var appendQueryParams = function(url, params) {
      if (params === void 0) {
        params = {};
      }
      var hasParamsRegex = /\?([\w]+=[\w]+)/;
      var alreadyHasParams = hasParamsRegex.test(url);
      var stringified = "".concat(Object.entries(params).reduce(function(next, _a) {
        var key = _a[0], value = _a[1];
        return next + "".concat(key, "=").concat(value, "&");
      }, "").slice(0, -1));
      return "".concat(url).concat(alreadyHasParams ? "&" : "?").concat(stringified);
    };
    exports.appendQueryParams = appendQueryParams;
    var setUpSocketIOPing = function(sendMessage, interval) {
      if (interval === void 0) {
        interval = constants_1.SOCKET_IO_PING_INTERVAL;
      }
      var ping = function() {
        return sendMessage(constants_1.SOCKET_IO_PING_CODE);
      };
      return window.setInterval(ping, interval);
    };
    exports.setUpSocketIOPing = setUpSocketIOPing;
  }
});

// node_modules/react-use-websocket/dist/lib/heartbeat.js
var require_heartbeat = __commonJS({
  "node_modules/react-use-websocket/dist/lib/heartbeat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.heartbeat = void 0;
    var constants_1 = require_constants();
    function heartbeat(ws, options) {
      var _a = options || {}, _b = _a.interval, interval = _b === void 0 ? constants_1.DEFAULT_HEARTBEAT.interval : _b, _c = _a.timeout, timeout = _c === void 0 ? constants_1.DEFAULT_HEARTBEAT.timeout : _c, _d = _a.message, message = _d === void 0 ? constants_1.DEFAULT_HEARTBEAT.message : _d;
      var messageAccepted = false;
      var pingTimer = setInterval(function() {
        try {
          ws.send(message);
        } catch (error) {
        }
      }, interval);
      var timeoutTimer = setInterval(function() {
        if (!messageAccepted) {
          ws.close();
        } else {
          messageAccepted = false;
        }
      }, timeout);
      ws.addEventListener("close", function() {
        clearInterval(pingTimer);
        clearInterval(timeoutTimer);
      });
      return function() {
        messageAccepted = true;
      };
    }
    exports.heartbeat = heartbeat;
  }
});

// node_modules/react-use-websocket/dist/lib/manage-subscribers.js
var require_manage_subscribers = __commonJS({
  "node_modules/react-use-websocket/dist/lib/manage-subscribers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resetSubscribers = exports.removeSubscriber = exports.addSubscriber = exports.hasSubscribers = exports.getSubscribers = void 0;
    var subscribers = {};
    var EMPTY_LIST = [];
    var getSubscribers = function(url) {
      if ((0, exports.hasSubscribers)(url)) {
        return Array.from(subscribers[url]);
      }
      return EMPTY_LIST;
    };
    exports.getSubscribers = getSubscribers;
    var hasSubscribers = function(url) {
      var _a;
      return ((_a = subscribers[url]) === null || _a === void 0 ? void 0 : _a.size) > 0;
    };
    exports.hasSubscribers = hasSubscribers;
    var addSubscriber = function(url, subscriber) {
      subscribers[url] = subscribers[url] || /* @__PURE__ */ new Set();
      subscribers[url].add(subscriber);
    };
    exports.addSubscriber = addSubscriber;
    var removeSubscriber = function(url, subscriber) {
      subscribers[url].delete(subscriber);
    };
    exports.removeSubscriber = removeSubscriber;
    var resetSubscribers = function(url) {
      if (url && subscribers.hasOwnProperty(url)) {
        delete subscribers[url];
      } else {
        for (var url_1 in subscribers) {
          if (subscribers.hasOwnProperty(url_1)) {
            delete subscribers[url_1];
          }
        }
      }
    };
    exports.resetSubscribers = resetSubscribers;
  }
});

// node_modules/react-use-websocket/dist/lib/util.js
var require_util = __commonJS({
  "node_modules/react-use-websocket/dist/lib/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resetGlobalState = exports.assertIsWebSocket = void 0;
    var globals_1 = require_globals();
    var manage_subscribers_1 = require_manage_subscribers();
    function assertIsWebSocket(webSocketInstance, skip) {
      if (!skip && webSocketInstance instanceof WebSocket === false)
        throw new Error("");
    }
    exports.assertIsWebSocket = assertIsWebSocket;
    function resetGlobalState(url) {
      (0, manage_subscribers_1.resetSubscribers)(url);
      (0, globals_1.resetWebSockets)(url);
    }
    exports.resetGlobalState = resetGlobalState;
  }
});

// node_modules/react-use-websocket/dist/lib/attach-listener.js
var require_attach_listener = __commonJS({
  "node_modules/react-use-websocket/dist/lib/attach-listener.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.attachListeners = void 0;
    var socket_io_1 = require_socket_io();
    var heartbeat_1 = require_heartbeat();
    var constants_1 = require_constants();
    var util_1 = require_util();
    var bindMessageHandler = function(webSocketInstance, optionsRef, setLastMessage) {
      var heartbeatCb;
      if (optionsRef.current.heartbeat && webSocketInstance instanceof WebSocket) {
        var heartbeatOptions = typeof optionsRef.current.heartbeat === "boolean" ? void 0 : optionsRef.current.heartbeat;
        heartbeatCb = (0, heartbeat_1.heartbeat)(webSocketInstance, heartbeatOptions);
      }
      webSocketInstance.onmessage = function(message) {
        var _a;
        heartbeatCb === null || heartbeatCb === void 0 ? void 0 : heartbeatCb();
        optionsRef.current.onMessage && optionsRef.current.onMessage(message);
        if (typeof optionsRef.current.filter === "function" && optionsRef.current.filter(message) !== true) {
          return;
        }
        if (optionsRef.current.heartbeat && typeof optionsRef.current.heartbeat !== "boolean" && ((_a = optionsRef.current.heartbeat) === null || _a === void 0 ? void 0 : _a.returnMessage) === message.data)
          return;
        setLastMessage(message);
      };
    };
    var bindOpenHandler = function(webSocketInstance, optionsRef, setReadyState, reconnectCount) {
      webSocketInstance.onopen = function(event) {
        optionsRef.current.onOpen && optionsRef.current.onOpen(event);
        reconnectCount.current = 0;
        setReadyState(constants_1.ReadyState.OPEN);
      };
    };
    var bindCloseHandler = function(webSocketInstance, optionsRef, setReadyState, reconnect, reconnectCount) {
      if (constants_1.isEventSourceSupported && webSocketInstance instanceof EventSource) {
        return function() {
        };
      }
      (0, util_1.assertIsWebSocket)(webSocketInstance, optionsRef.current.skipAssert);
      var reconnectTimeout;
      webSocketInstance.onclose = function(event) {
        var _a;
        optionsRef.current.onClose && optionsRef.current.onClose(event);
        setReadyState(constants_1.ReadyState.CLOSED);
        if (optionsRef.current.shouldReconnect && optionsRef.current.shouldReconnect(event)) {
          var reconnectAttempts = (_a = optionsRef.current.reconnectAttempts) !== null && _a !== void 0 ? _a : constants_1.DEFAULT_RECONNECT_LIMIT;
          if (reconnectCount.current < reconnectAttempts) {
            var nextReconnectInterval = typeof optionsRef.current.reconnectInterval === "function" ? optionsRef.current.reconnectInterval(reconnectCount.current) : optionsRef.current.reconnectInterval;
            reconnectTimeout = window.setTimeout(function() {
              reconnectCount.current++;
              reconnect();
            }, nextReconnectInterval !== null && nextReconnectInterval !== void 0 ? nextReconnectInterval : constants_1.DEFAULT_RECONNECT_INTERVAL_MS);
          } else {
            optionsRef.current.onReconnectStop && optionsRef.current.onReconnectStop(reconnectAttempts);
            console.warn("Max reconnect attempts of ".concat(reconnectAttempts, " exceeded"));
          }
        }
      };
      return function() {
        return reconnectTimeout && window.clearTimeout(reconnectTimeout);
      };
    };
    var bindErrorHandler = function(webSocketInstance, optionsRef, setReadyState, reconnect, reconnectCount) {
      var reconnectTimeout;
      webSocketInstance.onerror = function(error) {
        var _a;
        optionsRef.current.onError && optionsRef.current.onError(error);
        if (constants_1.isEventSourceSupported && webSocketInstance instanceof EventSource) {
          optionsRef.current.onClose && optionsRef.current.onClose(__assign(__assign({}, error), { code: 1006, reason: "An error occurred with the EventSource: ".concat(error), wasClean: false }));
          setReadyState(constants_1.ReadyState.CLOSED);
          webSocketInstance.close();
        }
        if (optionsRef.current.retryOnError) {
          if (reconnectCount.current < ((_a = optionsRef.current.reconnectAttempts) !== null && _a !== void 0 ? _a : constants_1.DEFAULT_RECONNECT_LIMIT)) {
            var nextReconnectInterval = typeof optionsRef.current.reconnectInterval === "function" ? optionsRef.current.reconnectInterval(reconnectCount.current) : optionsRef.current.reconnectInterval;
            reconnectTimeout = window.setTimeout(function() {
              reconnectCount.current++;
              reconnect();
            }, nextReconnectInterval !== null && nextReconnectInterval !== void 0 ? nextReconnectInterval : constants_1.DEFAULT_RECONNECT_INTERVAL_MS);
          } else {
            optionsRef.current.onReconnectStop && optionsRef.current.onReconnectStop(optionsRef.current.reconnectAttempts);
            console.warn("Max reconnect attempts of ".concat(optionsRef.current.reconnectAttempts, " exceeded"));
          }
        }
      };
      return function() {
        return reconnectTimeout && window.clearTimeout(reconnectTimeout);
      };
    };
    var attachListeners = function(webSocketInstance, setters, optionsRef, reconnect, reconnectCount, sendMessage) {
      var setLastMessage = setters.setLastMessage, setReadyState = setters.setReadyState;
      var interval;
      var cancelReconnectOnClose;
      var cancelReconnectOnError;
      if (optionsRef.current.fromSocketIO) {
        interval = (0, socket_io_1.setUpSocketIOPing)(sendMessage);
      }
      bindMessageHandler(webSocketInstance, optionsRef, setLastMessage);
      bindOpenHandler(webSocketInstance, optionsRef, setReadyState, reconnectCount);
      cancelReconnectOnClose = bindCloseHandler(webSocketInstance, optionsRef, setReadyState, reconnect, reconnectCount);
      cancelReconnectOnError = bindErrorHandler(webSocketInstance, optionsRef, setReadyState, reconnect, reconnectCount);
      return function() {
        setReadyState(constants_1.ReadyState.CLOSING);
        cancelReconnectOnClose();
        cancelReconnectOnError();
        webSocketInstance.close();
        if (interval)
          clearInterval(interval);
      };
    };
    exports.attachListeners = attachListeners;
  }
});

// node_modules/react-use-websocket/dist/lib/attach-shared-listeners.js
var require_attach_shared_listeners = __commonJS({
  "node_modules/react-use-websocket/dist/lib/attach-shared-listeners.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.attachSharedListeners = void 0;
    var globals_1 = require_globals();
    var constants_1 = require_constants();
    var manage_subscribers_1 = require_manage_subscribers();
    var socket_io_1 = require_socket_io();
    var heartbeat_1 = require_heartbeat();
    var bindMessageHandler = function(webSocketInstance, url, heartbeatOptions) {
      var onMessageCb;
      if (heartbeatOptions && webSocketInstance instanceof WebSocket) {
        onMessageCb = (0, heartbeat_1.heartbeat)(webSocketInstance, typeof heartbeatOptions === "boolean" ? void 0 : heartbeatOptions);
      }
      webSocketInstance.onmessage = function(message) {
        onMessageCb === null || onMessageCb === void 0 ? void 0 : onMessageCb();
        (0, manage_subscribers_1.getSubscribers)(url).forEach(function(subscriber) {
          if (subscriber.optionsRef.current.onMessage) {
            subscriber.optionsRef.current.onMessage(message);
          }
          if (typeof subscriber.optionsRef.current.filter === "function" && subscriber.optionsRef.current.filter(message) !== true) {
            return;
          }
          if (heartbeatOptions && typeof heartbeatOptions !== "boolean" && (heartbeatOptions === null || heartbeatOptions === void 0 ? void 0 : heartbeatOptions.returnMessage) === message.data)
            return;
          subscriber.setLastMessage(message);
        });
      };
    };
    var bindOpenHandler = function(webSocketInstance, url) {
      webSocketInstance.onopen = function(event) {
        (0, manage_subscribers_1.getSubscribers)(url).forEach(function(subscriber) {
          subscriber.reconnectCount.current = 0;
          if (subscriber.optionsRef.current.onOpen) {
            subscriber.optionsRef.current.onOpen(event);
          }
          subscriber.setReadyState(constants_1.ReadyState.OPEN);
        });
      };
    };
    var bindCloseHandler = function(webSocketInstance, url) {
      if (webSocketInstance instanceof WebSocket) {
        webSocketInstance.onclose = function(event) {
          (0, manage_subscribers_1.getSubscribers)(url).forEach(function(subscriber) {
            if (subscriber.optionsRef.current.onClose) {
              subscriber.optionsRef.current.onClose(event);
            }
            subscriber.setReadyState(constants_1.ReadyState.CLOSED);
          });
          delete globals_1.sharedWebSockets[url];
          (0, manage_subscribers_1.getSubscribers)(url).forEach(function(subscriber) {
            var _a;
            if (subscriber.optionsRef.current.shouldReconnect && subscriber.optionsRef.current.shouldReconnect(event)) {
              var reconnectAttempts = (_a = subscriber.optionsRef.current.reconnectAttempts) !== null && _a !== void 0 ? _a : constants_1.DEFAULT_RECONNECT_LIMIT;
              if (subscriber.reconnectCount.current < reconnectAttempts) {
                var nextReconnectInterval = typeof subscriber.optionsRef.current.reconnectInterval === "function" ? subscriber.optionsRef.current.reconnectInterval(subscriber.reconnectCount.current) : subscriber.optionsRef.current.reconnectInterval;
                setTimeout(function() {
                  subscriber.reconnectCount.current++;
                  subscriber.reconnect.current();
                }, nextReconnectInterval !== null && nextReconnectInterval !== void 0 ? nextReconnectInterval : constants_1.DEFAULT_RECONNECT_INTERVAL_MS);
              } else {
                subscriber.optionsRef.current.onReconnectStop && subscriber.optionsRef.current.onReconnectStop(subscriber.optionsRef.current.reconnectAttempts);
                console.warn("Max reconnect attempts of ".concat(reconnectAttempts, " exceeded"));
              }
            }
          });
        };
      }
    };
    var bindErrorHandler = function(webSocketInstance, url) {
      webSocketInstance.onerror = function(error) {
        (0, manage_subscribers_1.getSubscribers)(url).forEach(function(subscriber) {
          if (subscriber.optionsRef.current.onError) {
            subscriber.optionsRef.current.onError(error);
          }
          if (constants_1.isEventSourceSupported && webSocketInstance instanceof EventSource) {
            subscriber.optionsRef.current.onClose && subscriber.optionsRef.current.onClose(__assign(__assign({}, error), { code: 1006, reason: "An error occurred with the EventSource: ".concat(error), wasClean: false }));
            subscriber.setReadyState(constants_1.ReadyState.CLOSED);
          }
        });
        if (constants_1.isEventSourceSupported && webSocketInstance instanceof EventSource) {
          webSocketInstance.close();
        }
      };
    };
    var attachSharedListeners = function(webSocketInstance, url, optionsRef, sendMessage) {
      var interval;
      if (optionsRef.current.fromSocketIO) {
        interval = (0, socket_io_1.setUpSocketIOPing)(sendMessage);
      }
      bindMessageHandler(webSocketInstance, url, optionsRef.current.heartbeat);
      bindCloseHandler(webSocketInstance, url);
      bindOpenHandler(webSocketInstance, url);
      bindErrorHandler(webSocketInstance, url);
      return function() {
        if (interval)
          clearInterval(interval);
      };
    };
    exports.attachSharedListeners = attachSharedListeners;
  }
});

// node_modules/react-use-websocket/dist/lib/create-or-join.js
var require_create_or_join = __commonJS({
  "node_modules/react-use-websocket/dist/lib/create-or-join.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createOrJoinSocket = void 0;
    var globals_1 = require_globals();
    var constants_1 = require_constants();
    var attach_listener_1 = require_attach_listener();
    var attach_shared_listeners_1 = require_attach_shared_listeners();
    var manage_subscribers_1 = require_manage_subscribers();
    var cleanSubscribers = function(url, subscriber, optionsRef, setReadyState, clearSocketIoPingInterval) {
      return function() {
        (0, manage_subscribers_1.removeSubscriber)(url, subscriber);
        if (!(0, manage_subscribers_1.hasSubscribers)(url)) {
          try {
            var socketLike = globals_1.sharedWebSockets[url];
            if (socketLike instanceof WebSocket) {
              socketLike.onclose = function(event) {
                if (optionsRef.current.onClose) {
                  optionsRef.current.onClose(event);
                }
                setReadyState(constants_1.ReadyState.CLOSED);
              };
            }
            socketLike.close();
          } catch (e) {
          }
          if (clearSocketIoPingInterval)
            clearSocketIoPingInterval();
          delete globals_1.sharedWebSockets[url];
        }
      };
    };
    var createOrJoinSocket = function(webSocketRef, url, setReadyState, optionsRef, setLastMessage, startRef, reconnectCount, sendMessage) {
      if (!constants_1.isEventSourceSupported && optionsRef.current.eventSourceOptions) {
        if (constants_1.isReactNative) {
          throw new Error("EventSource is not supported in ReactNative");
        } else {
          throw new Error("EventSource is not supported");
        }
      }
      if (optionsRef.current.share) {
        var clearSocketIoPingInterval = null;
        if (globals_1.sharedWebSockets[url] === void 0) {
          globals_1.sharedWebSockets[url] = optionsRef.current.eventSourceOptions ? new EventSource(url, optionsRef.current.eventSourceOptions) : new WebSocket(url, optionsRef.current.protocols);
          webSocketRef.current = globals_1.sharedWebSockets[url];
          setReadyState(constants_1.ReadyState.CONNECTING);
          clearSocketIoPingInterval = (0, attach_shared_listeners_1.attachSharedListeners)(globals_1.sharedWebSockets[url], url, optionsRef, sendMessage);
        } else {
          webSocketRef.current = globals_1.sharedWebSockets[url];
          setReadyState(globals_1.sharedWebSockets[url].readyState);
        }
        var subscriber = {
          setLastMessage,
          setReadyState,
          optionsRef,
          reconnectCount,
          reconnect: startRef
        };
        (0, manage_subscribers_1.addSubscriber)(url, subscriber);
        return cleanSubscribers(url, subscriber, optionsRef, setReadyState, clearSocketIoPingInterval);
      } else {
        webSocketRef.current = optionsRef.current.eventSourceOptions ? new EventSource(url, optionsRef.current.eventSourceOptions) : new WebSocket(url, optionsRef.current.protocols);
        setReadyState(constants_1.ReadyState.CONNECTING);
        if (!webSocketRef.current) {
          throw new Error("WebSocket failed to be created");
        }
        return (0, attach_listener_1.attachListeners)(webSocketRef.current, {
          setLastMessage,
          setReadyState
        }, optionsRef, startRef.current, reconnectCount, sendMessage);
      }
    };
    exports.createOrJoinSocket = createOrJoinSocket;
  }
});

// node_modules/react-use-websocket/dist/lib/get-url.js
var require_get_url = __commonJS({
  "node_modules/react-use-websocket/dist/lib/get-url.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
    var __generator = exports && exports.__generator || function(thisArg, body) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getUrl = void 0;
    var socket_io_1 = require_socket_io();
    var getUrl = function(url, optionsRef) {
      return __awaiter(void 0, void 0, void 0, function() {
        var convertedUrl, parsedUrl, parsedWithQueryParams;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!(typeof url === "function"))
                return [3, 2];
              return [4, url()];
            case 1:
              convertedUrl = _a.sent();
              return [3, 3];
            case 2:
              convertedUrl = url;
              _a.label = 3;
            case 3:
              parsedUrl = optionsRef.current.fromSocketIO ? (0, socket_io_1.parseSocketIOUrl)(convertedUrl) : convertedUrl;
              parsedWithQueryParams = optionsRef.current.queryParams ? (0, socket_io_1.appendQueryParams)(parsedUrl, optionsRef.current.queryParams) : parsedUrl;
              return [2, parsedWithQueryParams];
          }
        });
      });
    };
    exports.getUrl = getUrl;
  }
});

// node_modules/react-use-websocket/dist/lib/proxy.js
var require_proxy = __commonJS({
  "node_modules/react-use-websocket/dist/lib/proxy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.websocketWrapper = void 0;
    var websocketWrapper = function(webSocket, start) {
      return new Proxy(webSocket, {
        get: function(obj, key) {
          var val = obj[key];
          if (key === "reconnect")
            return start;
          if (typeof val === "function") {
            console.error("Calling methods directly on the websocket is not supported at this moment. You must use the methods returned by useWebSocket.");
            return function() {
            };
          } else {
            return val;
          }
        },
        set: function(obj, key, val) {
          if (/^on/.test(key)) {
            console.warn("The websocket's event handlers should be defined through the options object passed into useWebSocket.");
            return false;
          } else {
            obj[key] = val;
            return true;
          }
        }
      });
    };
    exports.websocketWrapper = websocketWrapper;
    exports.default = exports.websocketWrapper;
  }
});

// node_modules/react-use-websocket/dist/lib/use-websocket.js
var require_use_websocket = __commonJS({
  "node_modules/react-use-websocket/dist/lib/use-websocket.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
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
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
    var __generator = exports && exports.__generator || function(thisArg, body) {
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
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useWebSocket = void 0;
    var react_1 = require_react();
    var react_dom_1 = require_react_dom();
    var constants_1 = require_constants();
    var create_or_join_1 = require_create_or_join();
    var get_url_1 = require_get_url();
    var proxy_1 = __importDefault(require_proxy());
    var util_1 = require_util();
    var useWebSocket = function(url, options, connect) {
      if (options === void 0) {
        options = constants_1.DEFAULT_OPTIONS;
      }
      if (connect === void 0) {
        connect = true;
      }
      var _a = (0, react_1.useState)(null), lastMessage = _a[0], setLastMessage = _a[1];
      var _b = (0, react_1.useState)({}), readyState = _b[0], setReadyState = _b[1];
      var lastJsonMessage = (0, react_1.useMemo)(function() {
        if (lastMessage) {
          try {
            return JSON.parse(lastMessage.data);
          } catch (e) {
            return constants_1.UNPARSABLE_JSON_OBJECT;
          }
        }
        return null;
      }, [lastMessage]);
      var convertedUrl = (0, react_1.useRef)(null);
      var webSocketRef = (0, react_1.useRef)(null);
      var startRef = (0, react_1.useRef)(function() {
        return void 0;
      });
      var reconnectCount = (0, react_1.useRef)(0);
      var messageQueue = (0, react_1.useRef)([]);
      var webSocketProxy = (0, react_1.useRef)(null);
      var optionsCache = (0, react_1.useRef)(options);
      optionsCache.current = options;
      var readyStateFromUrl = convertedUrl.current && readyState[convertedUrl.current] !== void 0 ? readyState[convertedUrl.current] : url !== null && connect === true ? constants_1.ReadyState.CONNECTING : constants_1.ReadyState.UNINSTANTIATED;
      var stringifiedQueryParams = options.queryParams ? JSON.stringify(options.queryParams) : null;
      var sendMessage = (0, react_1.useCallback)(function(message, keep) {
        var _a2;
        if (keep === void 0) {
          keep = true;
        }
        if (constants_1.isEventSourceSupported && webSocketRef.current instanceof EventSource) {
          console.warn("Unable to send a message from an eventSource");
          return;
        }
        if (((_a2 = webSocketRef.current) === null || _a2 === void 0 ? void 0 : _a2.readyState) === constants_1.ReadyState.OPEN) {
          (0, util_1.assertIsWebSocket)(webSocketRef.current, optionsCache.current.skipAssert);
          webSocketRef.current.send(message);
        } else if (keep) {
          messageQueue.current.push(message);
        }
      }, []);
      var sendJsonMessage = (0, react_1.useCallback)(function(message, keep) {
        if (keep === void 0) {
          keep = true;
        }
        sendMessage(JSON.stringify(message), keep);
      }, [sendMessage]);
      var getWebSocket = (0, react_1.useCallback)(function() {
        if (optionsCache.current.share !== true || constants_1.isEventSourceSupported && webSocketRef.current instanceof EventSource) {
          return webSocketRef.current;
        }
        if (webSocketProxy.current === null && webSocketRef.current) {
          (0, util_1.assertIsWebSocket)(webSocketRef.current, optionsCache.current.skipAssert);
          webSocketProxy.current = (0, proxy_1.default)(webSocketRef.current, startRef);
        }
        return webSocketProxy.current;
      }, []);
      (0, react_1.useEffect)(function() {
        if (url !== null && connect === true) {
          var removeListeners_1;
          var expectClose_1 = false;
          var createOrJoin_1 = true;
          var start_1 = function() {
            return __awaiter(void 0, void 0, void 0, function() {
              var _a2, protectedSetLastMessage, protectedSetReadyState;
              return __generator(this, function(_b2) {
                switch (_b2.label) {
                  case 0:
                    _a2 = convertedUrl;
                    return [4, (0, get_url_1.getUrl)(url, optionsCache)];
                  case 1:
                    _a2.current = _b2.sent();
                    protectedSetLastMessage = function(message) {
                      if (!expectClose_1) {
                        (0, react_dom_1.flushSync)(function() {
                          return setLastMessage(message);
                        });
                      }
                    };
                    protectedSetReadyState = function(state) {
                      if (!expectClose_1) {
                        (0, react_dom_1.flushSync)(function() {
                          return setReadyState(function(prev) {
                            var _a3;
                            return __assign(__assign({}, prev), convertedUrl.current && (_a3 = {}, _a3[convertedUrl.current] = state, _a3));
                          });
                        });
                      }
                    };
                    if (createOrJoin_1) {
                      removeListeners_1 = (0, create_or_join_1.createOrJoinSocket)(webSocketRef, convertedUrl.current, protectedSetReadyState, optionsCache, protectedSetLastMessage, startRef, reconnectCount, sendMessage);
                    }
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          };
          startRef.current = function() {
            if (!expectClose_1) {
              if (webSocketProxy.current)
                webSocketProxy.current = null;
              removeListeners_1 === null || removeListeners_1 === void 0 ? void 0 : removeListeners_1();
              start_1();
            }
          };
          start_1();
          return function() {
            expectClose_1 = true;
            createOrJoin_1 = false;
            if (webSocketProxy.current)
              webSocketProxy.current = null;
            removeListeners_1 === null || removeListeners_1 === void 0 ? void 0 : removeListeners_1();
            setLastMessage(null);
          };
        } else if (url === null || connect === false) {
          reconnectCount.current = 0;
          setReadyState(function(prev) {
            var _a2;
            return __assign(__assign({}, prev), convertedUrl.current && (_a2 = {}, _a2[convertedUrl.current] = constants_1.ReadyState.CLOSED, _a2));
          });
        }
      }, [url, connect, stringifiedQueryParams, sendMessage]);
      (0, react_1.useEffect)(function() {
        if (readyStateFromUrl === constants_1.ReadyState.OPEN) {
          messageQueue.current.splice(0).forEach(function(message) {
            sendMessage(message);
          });
        }
      }, [readyStateFromUrl]);
      return {
        sendMessage,
        sendJsonMessage,
        lastMessage,
        lastJsonMessage,
        readyState: readyStateFromUrl,
        getWebSocket
      };
    };
    exports.useWebSocket = useWebSocket;
  }
});

// node_modules/react-use-websocket/dist/lib/use-socket-io.js
var require_use_socket_io = __commonJS({
  "node_modules/react-use-websocket/dist/lib/use-socket-io.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useSocketIO = void 0;
    var react_1 = require_react();
    var use_websocket_1 = require_use_websocket();
    var constants_1 = require_constants();
    var emptyEvent = {
      type: "empty",
      payload: null
    };
    var getSocketData = function(event) {
      if (!event || !event.data) {
        return emptyEvent;
      }
      var match = event.data.match(/\[.*]/);
      if (!match) {
        return emptyEvent;
      }
      var data = JSON.parse(match);
      if (!Array.isArray(data) || !data[1]) {
        return emptyEvent;
      }
      return {
        type: data[0],
        payload: data[1]
      };
    };
    var useSocketIO = function(url, options, connect) {
      if (options === void 0) {
        options = constants_1.DEFAULT_OPTIONS;
      }
      if (connect === void 0) {
        connect = true;
      }
      var optionsWithSocketIO = (0, react_1.useMemo)(function() {
        return __assign(__assign({}, options), { fromSocketIO: true });
      }, []);
      var _a = (0, use_websocket_1.useWebSocket)(url, optionsWithSocketIO, connect), sendMessage = _a.sendMessage, sendJsonMessage = _a.sendJsonMessage, lastMessage = _a.lastMessage, readyState = _a.readyState, getWebSocket = _a.getWebSocket;
      var socketIOLastMessage = (0, react_1.useMemo)(function() {
        return getSocketData(lastMessage);
      }, [lastMessage]);
      return {
        sendMessage,
        sendJsonMessage,
        lastMessage: socketIOLastMessage,
        lastJsonMessage: socketIOLastMessage,
        readyState,
        getWebSocket
      };
    };
    exports.useSocketIO = useSocketIO;
  }
});

// node_modules/react-use-websocket/dist/lib/use-event-source.js
var require_use_event_source = __commonJS({
  "node_modules/react-use-websocket/dist/lib/use-event-source.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
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
    var __rest = exports && exports.__rest || function(s, e) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useEventSource = void 0;
    var react_1 = require_react();
    var use_websocket_1 = require_use_websocket();
    var constants_1 = require_constants();
    var useEventSource = function(url, _a, connect) {
      if (_a === void 0) {
        _a = constants_1.DEFAULT_EVENT_SOURCE_OPTIONS;
      }
      var withCredentials = _a.withCredentials, events = _a.events, options = __rest(_a, ["withCredentials", "events"]);
      if (connect === void 0) {
        connect = true;
      }
      var optionsWithEventSource = __assign(__assign({}, options), { eventSourceOptions: {
        withCredentials
      } });
      var eventsRef = (0, react_1.useRef)(constants_1.EMPTY_EVENT_HANDLERS);
      if (events) {
        eventsRef.current = events;
      }
      var _b = (0, use_websocket_1.useWebSocket)(url, optionsWithEventSource, connect), lastMessage = _b.lastMessage, readyState = _b.readyState, getWebSocket = _b.getWebSocket;
      (0, react_1.useEffect)(function() {
        if (lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.type) {
          Object.entries(eventsRef.current).forEach(function(_a2) {
            var type = _a2[0], handler = _a2[1];
            if (type === lastMessage.type) {
              handler(lastMessage);
            }
          });
        }
      }, [lastMessage]);
      return {
        lastEvent: lastMessage,
        readyState,
        getEventSource: getWebSocket
      };
    };
    exports.useEventSource = useEventSource;
  }
});

// node_modules/react-use-websocket/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-use-websocket/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resetGlobalState = exports.useEventSource = exports.ReadyState = exports.useSocketIO = exports.default = void 0;
    var use_websocket_1 = require_use_websocket();
    Object.defineProperty(exports, "default", { enumerable: true, get: function() {
      return use_websocket_1.useWebSocket;
    } });
    var use_socket_io_1 = require_use_socket_io();
    Object.defineProperty(exports, "useSocketIO", { enumerable: true, get: function() {
      return use_socket_io_1.useSocketIO;
    } });
    var constants_1 = require_constants();
    Object.defineProperty(exports, "ReadyState", { enumerable: true, get: function() {
      return constants_1.ReadyState;
    } });
    var use_event_source_1 = require_use_event_source();
    Object.defineProperty(exports, "useEventSource", { enumerable: true, get: function() {
      return use_event_source_1.useEventSource;
    } });
    var util_1 = require_util();
    Object.defineProperty(exports, "resetGlobalState", { enumerable: true, get: function() {
      return util_1.resetGlobalState;
    } });
  }
});

// app/routes/_app.parties.$gameId.tsx
var import_react31 = __toESM(require_react());
var import_node = __toESM(require_node());

// app/contexts/PartyContext.tsx
var import_react = __toESM(require_react());
var PartyContext = import_react.default.createContext({
  closePartyModal: () => {
  }
});

// node_modules/rc-queue-anim/es/QueueAnim.js
var import_react3 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/tween-one/es/utils.js
var import_style_utils = __toESM(require_main());
function noop() {
}
var colorRegExp = import_style_utils.colorRegExp;
var shadowExp = /.*shadow$/gi;
var windowIsUndefined = !(typeof window !== "undefined" && window.document && window.document.createElement);
var getTime = Date.now;
function parsePath(path) {
  if (typeof path === "string") {
    if (path.charAt(0).match(/m/i)) {
      var domPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      domPath.setAttributeNS(null, "d", path);
      return domPath;
    }
    return document.querySelector(path);
  } else if (path.style) {
    return path;
  }
  throw new Error("Error while parsing the path");
}
var initAnimProps = {
  type: "to",
  duration: 450,
  delay: 0,
  repeat: 0,
  repeatDelay: 0,
  appearTo: 0,
  yoyo: false,
  ease: "easeInOutQuad",
  onStart: noop,
  onUpdate: noop,
  onComplete: noop,
  onRepeat: noop,
  startAt: {}
};
var initProps = {
  animation: {},
  paused: false,
  reverse: false,
  delay: 0,
  repeat: 0,
  repeatDelay: 0,
  yoyo: false,
  moment: null,
  resetStyle: false,
  regionStartTime: 0,
  regionEndTime: void 0,
  onChange: noop,
  onChangeTimeline: noop
};
var getInitProps = function getInitProps2(props) {
  var p = {};
  Object.keys(initProps).forEach(function(k) {
    p[k] = typeof props[k] === "undefined" ? initProps[k] : props[k];
  });
  if (p.delay) {
    p.delay = Math.round(p.delay);
  }
  if (props.repeatDelay) {
    p.repeatDelay = Math.round(p.repeatDelay);
  }
  return p;
};
var dataToArray = function dataToArray2(d) {
  if (Array.isArray(d) || !d) {
    return d;
  }
  if (d.length) {
    var t = Array.prototype.slice.call(d);
    return t.length ? [d] : t;
  }
  return [d];
};
var flatArray = function flatArray2(d) {
  return d.length === 1 ? d[0] : d;
};
var getAnimatePos = function getAnimatePos2(animate, _ref) {
  var _ref$appearTo = _ref.appearTo, appearTo = _ref$appearTo === void 0 ? 0 : _ref$appearTo, _ref$delay = _ref.delay, delay = _ref$delay === void 0 ? 0 : _ref$delay, _ref$duration = _ref.duration, duration = _ref$duration === void 0 ? 450 : _ref$duration, repeat = _ref.repeat, repeatDelay = _ref.repeatDelay;
  if (typeof appearTo === "string") {
    return 0;
  }
  var appearToTime;
  var v = 0;
  if (typeof animate.appearTo === "number") {
    return animate.appearTo;
  }
  if (typeof animate.appearTo === "string" && animate.appearTo.charAt(1) === "=") {
    v = parseFloat(animate.appearTo.replace("=", ""));
  }
  appearToTime = appearTo + delay + duration + v;
  if (repeat === -1) {
    appearToTime = Number.MAX_VALUE;
  } else if (repeat) {
    appearToTime = appearTo + delay + duration * (repeat + 1) + (repeatDelay || 0) * repeat + v;
  }
  return appearToTime;
};
var getDefaultStart = function getDefaultStart2(key) {
  switch (key) {
    case "opacity":
    case "scaleX":
    case "scaleY":
    case "scale":
      return 1;
    default:
      return 0;
  }
};
var getStartAtValue = function getStartAtValue2(start, startAt) {
  var value = typeof start === "string" ? parseFloat(start) : start;
  return getValue(value, startAt.vars, 1, startAt.count, startAt.unit);
};
var getValue = function getValue2(startVars, endVars, ratio) {
  var count = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
  var unit = arguments.length > 4 ? arguments[4] : void 0;
  return count === "+=" || count === "-=" ? startVars + endVars * ratio + (unit || 0) : (endVars - startVars) * ratio + startVars + (unit || 0);
};
var getComputedStyle = function getComputedStyle2(target) {
  if (!target) {
    return {};
  }
  var style3 = typeof window !== "undefined" && document.defaultView ? document.defaultView.getComputedStyle(target) : {};
  return style3;
};
var styleValueToArray = {
  margin: 1,
  padding: 1,
  borderWidth: 1,
  borderRadius: 1
};
function startConvertToEndUnit(_ref2) {
  var target = _ref2.target, computedStyle = _ref2.computedStyle, style3 = _ref2.style, value = _ref2.value, startUnit = _ref2.startUnit, endUnit = _ref2.endUnit, fixed = _ref2.fixed, isOriginWidth = _ref2.isOriginWidth, useCurrentTarget = _ref2.useCurrentTarget;
  if (windowIsUndefined) {
    return value;
  }
  var horiz = /(?:Left|Right|Width|X)/i.test(style3) || isOriginWidth;
  horiz = style3 === "padding" || style3 === "marign" ? true : horiz;
  var t = style3.indexOf("border") !== -1 || style3.indexOf("translate") !== -1 || style3 === "transformOrigin" || useCurrentTarget ? target : target.parentNode || document.body;
  t = fixed ? document.body : t;
  var pix;
  var htmlComputedStyle;
  var warPix;
  switch (startUnit) {
    case "%":
      pix = parseFloat(value) / 100 * (horiz ? t.clientWidth : t.clientHeight);
      break;
    case "vw":
      pix = parseFloat(value) * document.body.clientWidth / 100;
      break;
    case "vh":
      pix = parseFloat(value) * document.body.clientHeight / 100;
      break;
    case "em":
      if (!computedStyle) {
        warPix = "em";
        pix = parseFloat(value);
      } else {
        pix = parseFloat(value) * parseFloat(computedStyle.fontSize);
      }
      break;
    case "rem": {
      if (!computedStyle) {
        warPix = "rem";
        pix = parseFloat(value);
      } else {
        htmlComputedStyle = window.getComputedStyle(document.getElementsByTagName("html")[0]);
        pix = parseFloat(value) * parseFloat(htmlComputedStyle.fontSize);
      }
      break;
    }
    default:
      pix = parseFloat(value);
      break;
  }
  switch (endUnit) {
    case "%":
      pix = pix ? pix * 100 / (horiz ? t.clientWidth : t.clientHeight) : 0;
      break;
    case "vw":
      pix = parseFloat(value) / document.body.clientWidth * 100;
      break;
    case "vh":
      pix = parseFloat(value) / document.body.clientHeight * 100;
      break;
    case "em":
      if (!computedStyle) {
        warPix = "em";
        pix = parseFloat(value);
      } else {
        pix = parseFloat(value) / parseFloat(computedStyle.fontSize);
      }
      break;
    case "rem": {
      if (!computedStyle) {
        warPix = "rem";
        pix = parseFloat(value);
      } else {
        htmlComputedStyle = htmlComputedStyle || window.getComputedStyle(document.getElementsByTagName("html")[0]);
        pix = parseFloat(value) / parseFloat(htmlComputedStyle.fontSize);
      }
      break;
    }
    default:
      break;
  }
  if (warPix) {
    console.warn("Warning: Element is not 'DOM, can not use '".concat(warPix, "', automatically convert to animation units."));
  }
  return pix;
}
function getTransformValue(t) {
  if (typeof t === "string") {
    return t;
  }
  var perspective = t.perspective;
  var angle = t.rotate;
  var rotateX = t.rotateX;
  var rotateY = t.rotateY;
  var sx = t.scaleX;
  var sy = t.scaleY;
  var sz = t.scaleZ;
  var skx = t.skewX;
  var sky = t.skewY;
  var translateX = typeof t.translateX === "string" ? t.translateX : "".concat(t.translateX, "px");
  var translateY = typeof t.translateY === "string" ? t.translateY : "".concat(t.translateY, "px");
  var translateZ = typeof t.translateZ === "string" ? t.translateZ : "".concat(t.translateZ, "px");
  var sk = skx || sky ? "skew(".concat(skx, "deg,").concat(sky, "deg)") : "";
  var an = angle ? "rotate(".concat(angle, "deg)") : "";
  var ss = sx !== 1 || sy !== 1 || sz !== 1 ? "scale3d(".concat(sx, ",").concat(sy, ",").concat(sz, ")") : "";
  var rX = rotateX ? "rotateX(".concat(rotateX, "deg)") : "";
  var rY = rotateY ? "rotateY(".concat(rotateY, "deg)") : "";
  var per = perspective ? "perspective(".concat(perspective, "px)") : "";
  var defaultTranslate = ss || an || rX || rY || sk ? "" : "translate(0px, 0px)";
  var translate = t.translateZ ? "translate3d(".concat(translateX, ",").concat(translateY, ",").concat(translateZ, ")") : (t.translateX || t.translateY) && "translate(".concat(translateX, ",").concat(translateY, ")") || defaultTranslate;
  return "".concat(per, " ").concat(translate, " ").concat(ss, " ").concat(an, " ").concat(rX, " ").concat(rY, " ").concat(sk).trim();
}
var initFilterValue = {
  brightness: 1,
  saturate: 1,
  contrast: 1,
  grayScale: 0,
  hueRotate: "0deg",
  sepia: 0,
  invert: 0
};

// node_modules/tween-one/es/plugins/index.js
var Plugin = /* @__PURE__ */ _createClass(function Plugin2() {
  var _this = this;
  _classCallCheck(this, Plugin2);
  this.push = function(plugins) {
    dataToArray(plugins).forEach(function(item) {
      _this[item.className] = item;
    });
  };
  this.register = this.push;
});
var plugins_default = new Plugin();

// node_modules/tween-one/es/plugins/StylePlugin.js
var import_style_utils2 = __toESM(require_main());
var style = /* @__PURE__ */ _createClass(
  //CSSStyleDeclaration;
  function style2(_props) {
    var _this = this;
    _classCallCheck(this, style2);
    this.props = void 0;
    this.computedStyle = void 0;
    this.root = void 0;
    this.index = void 0;
    this.targetIndex = void 0;
    this.tweenVars = {};
    this.transformName = void 0;
    this.filterName = void 0;
    this.target = void 0;
    this.start = {};
    this.startAt = {};
    this.propsData = {
      data: {},
      type: {},
      unit: {},
      count: {},
      splitStr: {},
      isTransform: {}
    };
    this.setDefaultData = function() {
      var props = _this.props;
      for (var k in props) {
        var value = props[k];
        var isArray = value.split && value.split(/\s+|,/).length > 1 || k.match(/color|fill|stroke/i) || k.match(/shadow/i);
        var isGradients = (k === "background" || k === "backgroundImage") && value.match(/[a-z|-]+\(([\s\S]*?)\)/gi);
        if (isGradients) {
          _this.propsData.data[k] = {
            value,
            plugin: plugins_default.GradientsPlugin
          };
          continue;
        }
        if (isArray) {
          _this.propsData.data[k] = {
            value,
            plugin: plugins_default.ArrayPlugin
          };
          continue;
        }
        var key = (0, import_style_utils2.getGsapType)(k);
        var data = _this.getTweenData(key, props[k]);
        _this.propsData.data[key] = data.data[key];
        _this.propsData.type[key] = data.type[key];
        _this.propsData.unit[key] = data.unit[key];
        _this.propsData.count[key] = data.count[key];
        _this.propsData.isTransform[key] = (0, import_style_utils2.isConvert)(key) === "transform";
        if (data.splitStr[key]) {
          _this.propsData.splitStr[key] = data.splitStr[key];
        }
      }
    };
    this.getTweenData = function(key, v) {
      var data = {
        data: {},
        isTransform: {},
        type: {},
        unit: {},
        count: {},
        splitStr: {}
      };
      var value = v;
      data.data[key] = value;
      var dataIsString = typeof data.data[key] === "string";
      data.unit[key] = dataIsString ? data.data[key].replace(/[^a-z|%]/g, "") : "";
      data.count[key] = dataIsString ? data.data[key].replace(/[^+|=|-]/g, "") : "";
      var d = dataIsString ? parseFloat(data.data[key].replace(/[a-z|%|=]/g, "")) : data.data[key];
      data.data[key] = !d && d !== 0 ? data.data[key] : d;
      return data;
    };
    this.setStartAtValue = function(start, startAt) {
      return _typeof(startAt) === "object" ? getStartAtValue(start, startAt) : start;
    };
    this.getAnimStart = function() {
      var target = _this.target, root = _this.root, targetIndex = _this.targetIndex, propsData = _this.propsData, s = _this.startAt, start = _this.start, tweenVars = _this.tweenVars;
      var startAt = {};
      for (var c in s) {
        startAt[(0, import_style_utils2.getGsapType)(c)] = s[c];
      }
      _this.computedStyle = _this.computedStyle || getComputedStyle(target);
      tweenVars.style = tweenVars.style || {};
      var transform;
      var filter;
      for (var key in propsData.data) {
        var _startAt$key;
        var item = propsData.data[key];
        if (item.plugin) {
          var plugin = new item.plugin(item.value, key);
          plugin.target = target;
          plugin.root = root;
          plugin.parent = parent;
          plugin.index = _this.index;
          plugin.targetIndex = targetIndex;
          plugin.tweenVars = tweenVars;
          plugin.startAt = _this.startAt;
          plugin.computedStyle = _this.computedStyle;
          item.plugin = plugin;
          start[key] = plugin.getAnimStart();
          continue;
        }
        var cssName = (0, import_style_utils2.isConvert)(key);
        var styleKey = cssName === "transform" ? _this.transformName : cssName;
        styleKey = cssName === "filter" ? _this.filterName : styleKey;
        var varsValue = tweenVars.style[styleKey];
        var styleValue = varsValue !== null && varsValue !== void 0 ? varsValue : _this.computedStyle[cssName];
        var startData = (_startAt$key = startAt[key]) !== null && _startAt$key !== void 0 ? _startAt$key : styleValue;
        var endUnit = propsData.unit[key];
        var startUnit = "";
        if (cssName === "transform") {
          transform = transform || (startData === varsValue ? _objectSpread2({}, varsValue) : (0, import_style_utils2.getTransform)(_this.computedStyle[_this.transformName]));
          var startValue = transform[key];
          if (startAt && key in startAt) {
            var _ref, _startAt$key$vars;
            startValue = _this.setStartAtValue((_ref = (_startAt$key$vars = startAt[key].vars) !== null && _startAt$key$vars !== void 0 ? _startAt$key$vars : varsValue === null || varsValue === void 0 ? void 0 : varsValue[key]) !== null && _ref !== void 0 ? _ref : startValue, startAt[key]);
            startUnit = startAt[key].unit;
            if (key === "scale") {
              transform.scaleX = startValue;
              transform.scaleY = startValue;
            } else {
              transform[key] = startValue;
            }
          }
          if (startUnit !== endUnit) {
            startValue = startConvertToEndUnit({
              target,
              computedStyle: _this.computedStyle,
              style: cssName,
              value: startValue,
              startUnit,
              endUnit
            });
            if (key === "scale") {
              transform.scaleX = startValue;
              transform.scaleY = startValue;
            } else {
              transform[key] = startValue;
            }
          }
          start[_this.transformName] = transform;
        } else if (cssName === "filter") {
          var fKey = import_style_utils2.cssList.filterConvert[key] || key;
          filter = filter || (startData === varsValue ? _objectSpread2({}, varsValue) : (0, import_style_utils2.splitFilterToObject)(styleValue) || {});
          filter[fKey] = filter[fKey] || initFilterValue[fKey];
          var _startValue = filter[fKey];
          if (startAt && key in startAt) {
            var _startAt$key$vars2;
            _startValue = _this.setStartAtValue((_startAt$key$vars2 = startAt[key].vars) !== null && _startAt$key$vars2 !== void 0 ? _startAt$key$vars2 : _startValue, startAt[key]);
            startUnit = startAt[key].unit;
            filter[fKey] = _startValue;
          }
          if (endUnit !== startUnit) {
            var _this$computedStyle;
            filter[fKey] = startConvertToEndUnit({
              target,
              computedStyle: _this.computedStyle,
              style: cssName,
              value: _startValue,
              startUnit,
              endUnit,
              fixed: ((_this$computedStyle = _this.computedStyle) === null || _this$computedStyle === void 0 ? void 0 : _this$computedStyle.position) === "fixed"
            });
          }
          start[_this.filterName] = filter;
        } else {
          var _startAt$key2;
          startData = (_startAt$key2 = startAt[key]) !== null && _startAt$key2 !== void 0 ? _startAt$key2 : styleValue;
          if (!startData || startData === "none" || startData === "auto") {
            startData = "";
          }
          endUnit = propsData.unit[cssName];
          startUnit = _typeof(startData) === "object" ? startData.unit : "".concat(startData).replace(/[^a-z|%]/g, "");
          startData = _this.setStartAtValue(styleValue, startAt[key]);
          if (endUnit !== startUnit) {
            var _this$computedStyle2;
            startData = startConvertToEndUnit({
              target,
              computedStyle: _this.computedStyle,
              style: cssName,
              value: parseFloat(startData),
              startUnit,
              endUnit,
              fixed: ((_this$computedStyle2 = _this.computedStyle) === null || _this$computedStyle2 === void 0 ? void 0 : _this$computedStyle2.position) === "fixed"
            });
          }
          var v = parseFloat(startData);
          start[cssName] = isNaN(v) ? getDefaultStart(cssName) : v;
        }
      }
      return start;
    };
    this.render = function(ratio) {
      var propsData = _this.propsData, start = _this.start, t = _this.tweenVars;
      var tweenVars = t.style || {};
      if (start[_this.transformName] && !tweenVars[_this.transformName]) {
        tweenVars[_this.transformName] = _objectSpread2({}, start[_this.transformName]);
      }
      if (start[_this.filterName] && !tweenVars[_this.filterName]) {
        tweenVars[_this.filterName] = _objectSpread2({}, start[_this.filterName]);
      }
      var transform = tweenVars[_this.transformName];
      var filter = tweenVars[_this.filterName];
      var data = propsData.data, dataUnit = propsData.unit, dataCount = propsData.count, isTransform = propsData.isTransform;
      for (var key in data) {
        var endValue = data[key];
        if (endValue.plugin) {
          tweenVars[key] = endValue.plugin.render(ratio);
          continue;
        }
        var isT = isTransform[key];
        var startValue = isT ? start[_this.transformName][key] : start[key];
        var unit = dataUnit[key];
        var count = dataCount[key];
        if (isT) {
          if (key === "scale") {
            var xStart = start[_this.transformName].scaleX;
            var yStart = start[_this.transformName].scaleY;
            if (count.charAt(1) === "=") {
              transform.scaleX = xStart + endValue * ratio;
              transform.scaleY = yStart + endValue * ratio;
            } else {
              transform.scaleX = (endValue - xStart) * ratio + xStart;
              transform.scaleY = (endValue - yStart) * ratio + yStart;
            }
          } else {
            transform[key] = getValue(parseFloat(startValue), endValue, ratio, count, unit);
          }
          transform.text = getTransformValue(tweenVars[_this.transformName]);
        } else if (import_style_utils2.cssList.filter.indexOf(key) >= 0) {
          var fKey = import_style_utils2.cssList.filterConvert[key] || key;
          startValue = parseFloat(start[_this.filterName][fKey]) || 0;
          filter[fKey] = getValue(startValue, endValue, ratio, count, unit);
          filter.text = "";
          for (var filterKey in filter) {
            if (filterKey === "text") {
              continue;
            }
            filter.text = "".concat(filter.text, " ").concat(filterKey, "(").concat(filter[filterKey], ")").trim();
          }
        } else {
          var styleUnit = (0, import_style_utils2.stylesToCss)(key, 0);
          styleUnit = typeof styleUnit === "number" ? 0 : styleUnit.replace(/[^a-z|%]/g, "");
          unit = unit || styleUnit;
          if (typeof endValue === "string") {
            tweenVars[key] = endValue;
          } else {
            tweenVars[key] = getValue(startValue, endValue, ratio, count, unit);
          }
        }
      }
      return tweenVars;
    };
    this.props = _props;
    this.transformName = (0, import_style_utils2.checkStyleName)("transform");
    this.filterName = (0, import_style_utils2.checkStyleName)("filter") || "filter";
    this.setDefaultData();
  }
);
style.key = "style";
style.className = "style";
var StylePlugin_default = style;

// node_modules/tween-one/es/plugins/ArrayPlugin.js
var import_style_utils3 = __toESM(require_main());

// node_modules/tween-one/es/plugins/PluginMixins.js
var PluginMixins = /* @__PURE__ */ _createClass(
  // 转换成实际属性，__self 为平辅到子节点
  function PluginMixins2(value, key) {
    _classCallCheck(this, PluginMixins2);
    this.value = void 0;
    this.key = void 0;
    this.root = void 0;
    this.index = void 0;
    this.style = {};
    this.start = {};
    this.startAt = {};
    this.target = void 0;
    this.value = value;
    this.key = key;
  }
);
PluginMixins.className = void 0;
PluginMixins.key = void 0;

// node_modules/tween-one/es/plugins/ArrayPlugin.js
var ArrayPlugin = /* @__PURE__ */ function(_PluginMixins) {
  _inherits(ArrayPlugin2, _PluginMixins);
  var _super = _createSuper(ArrayPlugin2);
  function ArrayPlugin2(_value, _key) {
    var _this;
    _classCallCheck(this, ArrayPlugin2);
    _this = _super.call(this, _value, _key);
    _this.value = void 0;
    _this.key = void 0;
    _this.start = [];
    _this.tweenVars = {};
    _this.vars = {};
    _this.computedStyle = void 0;
    _this.propsData = {
      data: [],
      unit: [],
      count: []
    };
    _this.setDefaultData = function(type, splitStr) {
      var _assertThisInitialize = _assertThisInitialized(_this), propsData = _assertThisInitialize.propsData, value = _assertThisInitialize.value;
      var v = _toConsumableArray(value);
      if (type === "color") {
        var _v$;
        v[3] = (_v$ = v[3]) !== null && _v$ !== void 0 ? _v$ : 1;
      }
      propsData.type = type;
      propsData.data = v.map(function(c) {
        return !parseFloat(c) && parseFloat(c) !== 0 ? c : parseFloat(c);
      });
      propsData.unit = v.map(function(c) {
        return c.toString().replace(/[^a-z|%]/g, "");
      });
      propsData.count = v.map(function(c) {
        return c.toString().replace(/[^+|=|-]/g, "");
      });
      if (splitStr) {
        propsData.splitStr = splitStr;
      }
    };
    _this.convertToMarksArray = function(unit, key, data, i) {
      var startUnit = (data || "").toString().replace(/[^a-z|%]/g, "");
      var endUnit = typeof i === "number" ? unit[i] : void 0;
      if (startUnit === endUnit) {
        return parseFloat(data);
      } else if (!parseFloat(data) && parseFloat(data) !== 0) {
        return data;
      }
      return startConvertToEndUnit({
        target: _this.target,
        computedStyle: _this.computedStyle,
        style: key,
        value: data,
        startUnit,
        endUnit,
        isOriginWidth: key === "transformOrigin" && !i
      });
    };
    _this.getAnimStart = function() {
      var _ref, _ref2, _startAt$key, _tweenVars$style;
      var _assertThisInitialize2 = _assertThisInitialized(_this), startAt = _assertThisInitialize2.startAt, target = _assertThisInitialize2.target, key = _assertThisInitialize2.key, propsData = _assertThisInitialize2.propsData, computedStyle = _assertThisInitialize2.computedStyle, tweenVars = _assertThisInitialize2.tweenVars;
      var startValue = (_ref = (_ref2 = (_startAt$key = startAt === null || startAt === void 0 ? void 0 : startAt[key]) !== null && _startAt$key !== void 0 ? _startAt$key : computedStyle ? (_tweenVars$style = tweenVars.style) === null || _tweenVars$style === void 0 ? void 0 : _tweenVars$style[key] : tweenVars[key]) !== null && _ref2 !== void 0 ? _ref2 : (computedStyle || target)[key]) !== null && _ref !== void 0 ? _ref : "";
      var inset = propsData.data.indexOf("inset");
      var oldShadow;
      if (inset !== -1 && !startValue.match("inset") && propsData.type === "shadow") {
        oldShadow = startValue;
        startValue = "";
      }
      if (!startValue || startValue === "none" || startValue === "auto") {
        startValue = "";
      }
      startValue = propsData.type === "shadow" ? (0, import_style_utils3.parseShadow)(startValue, key) : startValue;
      startValue = propsData.type === "color" ? (0, import_style_utils3.parseColor)(startValue) : startValue;
      startValue = propsData.type === "string" ? startValue.split(/[\s|,]/) : startValue;
      if (styleValueToArray[key]) {
        var _startValue$, _startValue$2, _ref3, _startValue$3;
        startValue[1] = (_startValue$ = startValue[1]) !== null && _startValue$ !== void 0 ? _startValue$ : startValue[0];
        startValue[2] = (_startValue$2 = startValue[2]) !== null && _startValue$2 !== void 0 ? _startValue$2 : startValue[0];
        startValue[3] = (_ref3 = (_startValue$3 = startValue[3]) !== null && _startValue$3 !== void 0 ? _startValue$3 : startValue[1]) !== null && _ref3 !== void 0 ? _ref3 : startValue[0];
      }
      var endUnit = propsData.unit;
      var startData = startValue.map(function(c, i) {
        if (parseFloat(c).toString() === "NaN") {
          return c;
        }
        return _this.convertToMarksArray(endUnit, key, c, i);
      });
      _this.start = startData.concat(inset >= 0 ? "inset" : []);
      _this.start.oldShadow = oldShadow;
      return _this.start;
    };
    _this.render = function(ratio) {
      var _assertThisInitialize3 = _assertThisInitialized(_this), start = _assertThisInitialize3.start, propsData = _assertThisInitialize3.propsData;
      var type = propsData.type, splitStr = propsData.splitStr, data = propsData.data, count = propsData.count, unit = propsData.unit;
      var ratioData = data.map(function(c2, i) {
        return typeof c2 === "string" ? c2 : getValue(start[i], c2, ratio, count[i], unit[i]);
      });
      switch (type) {
        case "string":
          ratioData = ratioData.join(splitStr);
          break;
        case "color":
          ratioData = (0, import_style_utils3.getColor)(ratioData);
          break;
        case "shadow": {
          var endInset = ratioData.indexOf("inset") >= 0;
          var r = endInset ? ratioData.filter(function(c2) {
            return c2 !== "inset";
          }) : ratioData;
          var s = r.slice(0, r.length - 4).map(function(a) {
            if (typeof a === "number") {
              return "".concat(a, "px");
            }
            return a;
          });
          var c = (0, import_style_utils3.getColor)(r.slice(r.length - 4, r.length));
          ratioData = "".concat(start.oldShadow ? "".concat(start.oldShadow, ",") : "").concat(s.join(" "), " ").concat(c, " ").concat(endInset ? "inset" : "").trim();
          break;
        }
        default:
          break;
      }
      return ratioData;
    };
    _this.value = _value;
    _this.key = _key;
    var _type = "";
    var _splitStr = "";
    if (typeof _value === "string") {
      if (_key.match(shadowExp)) {
        _this.value = (0, import_style_utils3.parseShadow)(_value, _key);
        _type = "shadow";
      } else if (_key.match(/color|fill|stroke/i) || _value.match(colorRegExp)) {
        _this.value = (0, import_style_utils3.parseColor)(_value);
        _type = "color";
      } else {
        _splitStr = _value.replace(/[^\s|,]/g, "").replace(/\s+/g, " ");
        _this.value = _value.split(/[\s|,]/);
        _type = "string";
      }
    }
    _this.setDefaultData(_type, _splitStr);
    return _this;
  }
  return _createClass(ArrayPlugin2);
}(PluginMixins);
ArrayPlugin.className = "ArrayPlugin";
var ArrayPlugin_default = ArrayPlugin;

// node_modules/tween-one/es/plugins/GradientsPlugin.js
var import_style_utils4 = __toESM(require_main());
var angleData = {
  linear: {
    "to top": "0deg",
    "to top right": "45deg",
    "to right top": "45deg",
    "to right": "90deg",
    "to right bottom": "135deg",
    "to bottom right": "135deg",
    "to bottom": "180deg",
    "to bottom left": "225deg",
    "to left bottom": "225deg",
    "to left": "270deg",
    "to left top": "315deg",
    "to top left": "315deg"
  },
  radial: {
    center: "50% 50%",
    top: "50% 0%",
    "top right": "100% 0%",
    "right top": "100% 0%",
    right: "100% 50%",
    "right bottom": "100% 100%",
    "bottom right": "100% 100%",
    bottom: "50% 100%",
    "bottom left": "0% 100%",
    "left bottom": "0% 100%",
    left: "0% 50%",
    "left top": "0% 0%",
    "top left": "0% 0%"
  }
};
var extentKeyWord = ["closest-side", "closest-corner", "farthest-side", "farthest-corner"];
var consoleWarn = function consoleWarn2(key, start, to) {
  console.warn("Warning: The gradient ".concat(key, "(").concat(start, " => ").concat(to, ") is different, which has been automatically converted to animation gradient ").concat(key, "(").concat(to, ")."));
};
var noGradient = function noGradient2(type) {
  return type === "url" || type.indexOf("image") >= 0 || type === "paint" || type === "cross-fade" || type === "element";
};
var GradientsPlugin = /* @__PURE__ */ function(_PluginMixins) {
  _inherits(GradientsPlugin2, _PluginMixins);
  var _super = _createSuper(GradientsPlugin2);
  function GradientsPlugin2(_value) {
    var _this;
    _classCallCheck(this, GradientsPlugin2);
    _this = _super.call(this, _value, "backgroundImage");
    _this.value = void 0;
    _this.tweenVars = {};
    _this.vars = [];
    _this.computedStyle = void 0;
    _this.defaultStartVars = [];
    _this.getPosition = function(data) {
      return data.map(function(t) {
        return {
          data: parseFloat(t),
          unit: t.replace(/[^a-z|%]/g, "")
        };
      });
    };
    _this.getAngle = function(type, $angle) {
      var t = type.replace(/-|gradient|repeating]/g, "");
      var extent;
      var shape;
      var angle;
      var position;
      switch (t) {
        case "linear": {
          angle = _this.getPosition((angleData.linear[$angle] || $angle || angleData.linear["to bottom"]).split(" "));
          break;
        }
        case "radial": {
          var angleSplit = $angle.split(" ");
          extent = angleSplit.find(function(s) {
            return extentKeyWord.indexOf(s) >= 0;
          }) || extentKeyWord[3];
          shape = angleSplit.find(function(s) {
            return s === "circle" || s === "ellipse";
          }) || "ellipse";
          var req = new RegExp("".concat(extent, "|").concat(shape, "|at"), "g");
          var p = $angle.replace(req, "").trim();
          position = _this.getPosition((angleData.radial[p] || p || angleData.radial.center).split(" "));
          break;
        }
        case "conic": {
          var _angleSplit = $angle.split("at").map(function(c) {
            return c.trim();
          });
          var n = (_angleSplit[0] || "").split(" ");
          shape = n[0] || "from";
          angle = _this.getPosition([n[1] || "0deg"]);
          position = _this.getPosition((angleData.radial[_angleSplit[1]] || _angleSplit[1] || angleData.radial.center).split(" "));
          break;
        }
        default:
          break;
      }
      return {
        extent,
        shape,
        angle,
        position
      };
    };
    _this.valueToIValue = function(value) {
      if (!value) {
        return [];
      }
      var v = value.replace(/\),\s+?(url|radial|conic|linear|repeating|image|element|cross|paint)/, ")#,#$1").split("#,#");
      return v.map(function(str) {
        var type = str.replace(/([a-z|-]+)\((.*)\)/, "$1").trim();
        if (type === "url") {
          return {
            type,
            values: str
          };
        }
        var data = str.replace(/([a-z|-]+)\((.*)\)/, "$2").replace(/#([0-9a-f]{6}|[0-9a-f]{3})|(rgb[a]?|hsl)+\(\d+\,[\s+]?\d+[\%]?\,[\s+]?\d+[\%]?(\,\d+)?\)/gi, function(e) {
          return e.replace(/\s+/g, "");
        }).replace(/\,([a-z|#|\s+])/g, "#,#$1").split("#,#").map(function(str2) {
          return str2.trim();
        });
        var a = data[0].match(colorRegExp) ? "" : data[0];
        if (a) {
          data.splice(0, 1);
        }
        var angle = _this.getAngle(type, a);
        var values = data.map(function(s) {
          var colorAndPos = s.trim().split(/\s+/);
          var color;
          var t = colorAndPos[0].match(colorRegExp) ? colorAndPos[0] : colorAndPos[0];
          if (t) {
            colorAndPos.splice(0, 1);
            color = (0, import_style_utils4.parseColor)(t);
          }
          return {
            color,
            positions: colorAndPos.map(function(s2) {
              return {
                data: parseFloat(s2),
                unit: s2.toString().replace(/[^a-z|%]/g, "")
              };
            })
          };
        });
        return {
          type,
          angle,
          values
        };
      });
    };
    _this.getAnimStart = function() {
      var _tweenVars$key;
      var _assertThisInitialize = _assertThisInitialized(_this), s = _assertThisInitialize.startAt, key = _assertThisInitialize.key, computedStyle = _assertThisInitialize.computedStyle, target = _assertThisInitialize.target, vars = _assertThisInitialize.vars, tweenVars = _assertThisInitialize.tweenVars;
      var startAt = _objectSpread2({}, s);
      var v = (_tweenVars$key = tweenVars[key]) !== null && _tweenVars$key !== void 0 ? _tweenVars$key : (computedStyle || target)[key];
      if (!v || v === "none" || v === "auto") {
        v = "";
      }
      startAt[key] = startAt[key] || v;
      startAt[key] = startAt[key] ? _this.valueToIValue(startAt[key]) : _this.defaultStartVars;
      var maxVarsLength = Math.max(vars.length, startAt[key].length);
      var startData = (maxVarsLength === startAt[key].length ? startAt[key] : vars).map(function(_, i) {
        var _item$angle, _start$angle;
        var start = startAt[key][i] || _this.defaultStartVars[i];
        var item = vars[i] || start;
        if (!start || start.type !== item.type) {
          if (start.type !== item.type) {
            consoleWarn("type", start.type, item.type);
          }
          start = _this.defaultStartVars[i];
        }
        if (noGradient(item.type) || typeof item.values === "string" || typeof start.values === "string") {
          return _objectSpread2({}, item);
        }
        if (((_item$angle = item.angle) === null || _item$angle === void 0 ? void 0 : _item$angle.extent) !== ((_start$angle = start.angle) === null || _start$angle === void 0 ? void 0 : _start$angle.extent)) {
          var _start$angle2, _item$angle2;
          consoleWarn("extent keyword", (_start$angle2 = start.angle) === null || _start$angle2 === void 0 ? void 0 : _start$angle2.extent, (_item$angle2 = item.angle) === null || _item$angle2 === void 0 ? void 0 : _item$angle2.extent);
        }
        var maxLength = Math.max(start.values.length, item.values.length);
        var values = maxLength === start.values.length ? start.values : item.values;
        start.values = values.map(function(_2, j) {
          var sValue = start.values[j];
          var aItem = item.values[j] || sValue;
          return _objectSpread2(_objectSpread2({}, sValue), {}, {
            positions: (aItem || sValue).positions.map(function($bItem, jj) {
              var sPos = sValue ? sValue.positions[jj] || sValue.positions[sValue.positions.length - 1] : aItem.positions[aItem.positions.length - 1];
              var bItem = $bItem || sPos;
              if (!sPos && sValue && start.values.length) {
                sPos = {
                  data: 100 / (start.values.length - 1) * j,
                  unit: "%"
                };
              }
              if (bItem.unit !== sPos.unit) {
                consoleWarn("units", sPos.unit, bItem.unit);
              }
              return {
                data: sPos.data,
                unit: bItem.unit
              };
            })
          });
        });
        return start;
      });
      _this.start = startData;
      return _this.start;
    };
    _this.render = function(ratio) {
      var value = "";
      var maxVarsLength = Math.max(_this.vars.length, _this.start.length);
      (maxVarsLength === _this.vars.length ? _this.vars : _this.start).forEach(function(_, i) {
        var start = _this.start[i];
        var item = _this.vars[i] || start;
        if (noGradient(item.type) || typeof item.values === "string" || !item.angle) {
          value += "".concat(value ? "," : "", " ").concat(item.values).trim();
          return;
        }
        var maxLength = Math.max(start.values.length, item.values.length);
        var values = (maxLength === start.values.length ? start.values : item.values).map(function(_2, i2) {
          var startItem = start.values[i2];
          var cItem = item.values[i2];
          if (!cItem) {
            cItem = startItem;
          }
          var startColor = startItem.color;
          var startPos = startItem.positions;
          if (!startColor && cItem.color) {
            startColor = _toConsumableArray(cItem.color);
          }
          if (!startPos) {
            startPos = cItem.positions.map(function(c) {
              return _objectSpread2({}, c);
            });
          }
          var color = cItem.color ? cItem.color.map(function(n, j) {
            return getValue(startColor[j], n, ratio);
          }) : cItem.color;
          var positions = cItem.positions.map(function(n, j) {
            return "".concat(getValue(startPos[j].data, n.data, ratio)).concat(n.unit);
          }).join(" ");
          return "".concat(color ? (0, import_style_utils4.getColor)(color) : color || "", " ").concat(positions).trim();
        });
        var angle = item.angle;
        var angleAngle = angle.angle && angle.angle.map(function(n, j) {
          return "".concat(getValue(start.angle.angle[j].data, n.data, ratio)).concat(n.unit);
        }).join(" ");
        var anglePosition = angle.position && angle.position.map(function(n, j) {
          return "".concat(getValue(start.angle.position[j].data, n.data, ratio)).concat(n.unit);
        }).join(" ");
        var newAngle = "".concat(angle.extent || "", " ").concat(angle.shape || "", " ").concat(angleAngle || "", " ").concat(anglePosition ? "at ".concat(anglePosition) : "").trim();
        value += "".concat(value ? "," : "", " ").concat(item.type, "(").concat(newAngle ? "".concat(newAngle, ",") : "").concat(values.join(","), ")").trim();
      });
      return value;
    };
    _this.value = _value;
    _this.vars = _this.valueToIValue(_value);
    _this.defaultStartVars = _this.vars.map(function(item) {
      if (noGradient(item.type) || typeof item.values === "string") {
        return _objectSpread2({}, item);
      }
      return _objectSpread2(_objectSpread2({}, item), {}, {
        values: item.values.map(function(c) {
          var color;
          if (c.color && typeof c.color !== "string") {
            color = _toConsumableArray(c.color);
            color[3] = 0;
          } else {
            color = c.color;
          }
          return {
            color,
            positions: _toConsumableArray(c.positions)
          };
        })
      });
    });
    return _this;
  }
  return _createClass(GradientsPlugin2);
}(PluginMixins);
GradientsPlugin.className = "GradientsPlugin";

// node_modules/tween-one/es/animate/ticker.js
var import_raf = __toESM(require_raf());
var Ticker = /* @__PURE__ */ function() {
  function Ticker2() {
    var _this = this;
    _classCallCheck(this, Ticker2);
    this.lagThreshold = 150;
    this.adjustedLag = 33;
    this.emptyTime = 0;
    this.elapsed = 0;
    this.frameFPS = 1e3 / 240;
    this.startTime = 0;
    this.prevTime = 0;
    this.useTimeout = false;
    this.lastUpdate = this.startTime;
    this.nextTime = this.frameFPS;
    this.req = void 0;
    this.id = -1;
    this.tweenId = 0;
    this.tickFn = [];
    this.state = "sleep";
    this.time = 0;
    this.frame = 0;
    this.removeReq = function(id) {
      return _this.useTimeout ? clearTimeout(id) : (0, import_raf.cancel)(id);
    };
    this.tick = function() {
      var tickFn = _this.tickFn;
      if (!_this.startTime) {
        _this.startTime = getTime() - _this.frameFPS;
        _this.lastUpdate = _this.startTime;
      }
      _this.elapsed = getTime() - _this.lastUpdate;
      if (_this.elapsed > _this.lagThreshold) {
        _this.startTime += _this.elapsed - _this.adjustedLag;
      }
      _this.lastUpdate += _this.elapsed;
      _this.time = _this.lastUpdate - _this.startTime;
      var overlap = _this.time - _this.nextTime;
      if (overlap > 0) {
        _this.frame++;
        _this.nextTime += overlap + (overlap >= _this.frameFPS ? 4 : _this.frameFPS - overlap);
        var f = _this.time - _this.prevTime;
        for (var i = 0; i < tickFn.length; i++) {
          tickFn[i].fn({
            time: _this.time,
            elapsed: f < _this.frameFPS ? _this.frameFPS : f
          });
        }
        _this.prevTime = _this.time;
      }
      if (!_this.tickFn.length) {
        if (!_this.emptyTime) {
          _this.emptyTime = _this.time + 500;
        }
        if (_this.time >= _this.emptyTime) {
          _this.emptyTime = 0;
          _this.sleep();
          return;
        }
      }
      if (_this.req) {
        _this.id = _this.req(_this.tick);
      }
    };
    this.wake = function() {
      if (_this.id) {
        _this.sleep();
      }
      _this.req = _this.useTimeout ? function(f) {
        return setTimeout(f, _this.frameFPS);
      } : import_raf.default;
      _this.tick();
      _this.state = "wake";
    };
    this.sleep = function() {
      _this.removeReq(_this.id);
      _this.id = -1;
      _this.req = void 0;
      _this.state = "sleep";
    };
    this.add = function(fn) {
      var key = "TweenOneTicker_".concat(_this.tweenId);
      _this.tweenId += 1;
      if (_this.tickFn.findIndex(function(c) {
        return c.key === key;
      }) === -1) {
        _this.tickFn.push({
          key,
          fn
        });
      }
      _this.emptyTime = 0;
      if (!_this.req) {
        _this.wake();
      }
      return key;
    };
    this.clear = function(f) {
      _this.tickFn = _this.tickFn.filter(function(c) {
        return c.key !== f && c.fn !== f;
      });
    };
    this.timeout = function(fn, time) {
      if (!(typeof fn === "function")) {
        return console.warn("not function");
      }
      var startTime = _this.time;
      var timeoutID = _this.add(function() {
        var moment = _this.time - startTime;
        if (moment >= (time || 0)) {
          _this.clear(timeoutID);
          fn();
        }
      });
      return timeoutID;
    };
    this.interval = function(fn, time) {
      if (!(typeof fn === "function")) {
        console.warn("not function");
        return null;
      }
      var starTime = _this.time;
      return _this.add(function() {
        var moment = _this.time - starTime;
        if (moment >= (time || 0)) {
          starTime = _this.time;
          fn();
        }
      });
    };
  }
  _createClass(Ticker2, [{
    key: "fps",
    value: function fps(_fps, useTimeout) {
      this.frameFPS = 1e3 / (_fps || 240);
      this.nextTime = this.time + this.frameFPS;
      this.useTimeout = typeof useTimeout === "undefined" ? this.useTimeout : useTimeout;
      if (this.useTimeout) {
        this.req = function(f) {
          return setTimeout(f, _fps);
        };
      }
    }
  }]);
  return Ticker2;
}();
var ticker = new Ticker();
var ticker_default = ticker;

// node_modules/tween-one/es/animate/ease.js
var import_tween_functions = __toESM(require_tween_functions());
import_tween_functions.default.path = function(_path, _param) {
  var param = _param || {};
  if (windowIsUndefined) {
    return "linear";
  }
  var pathNode = parsePath(_path);
  var pathLength = pathNode.getTotalLength();
  var rect = param.rect || 100;
  var lengthPixel = param.lengthPixel || 200;
  var points = [];
  for (var i = 0; i < lengthPixel - 1; i++) {
    points.push(pathNode.getPointAtLength(pathLength / (lengthPixel - 1) * i));
  }
  points.push(pathNode.getPointAtLength(lengthPixel));
  return function path(t, b, _c, d) {
    var p = import_tween_functions.default.linear(t, b, _c, d);
    var timePointX = rect * p;
    var point = points.filter(function(item) {
      return item.x >= timePointX;
    })[0] || pathNode.getPointAtLength(p * pathLength);
    return 1 - point.y / rect;
  };
};
var ease_default = import_tween_functions.default;

// node_modules/tween-one/es/TweenOne.js
var import_regenerator = __toESM(require_regenerator());

// node_modules/tween-one/es/animate/timeline.js
var Timeline = /* @__PURE__ */ function() {
  function Timeline2() {
    var _this = this;
    _classCallCheck(this, Timeline2);
    this.children = [];
    this.autoSleep = 200;
    this.tickerKey = void 0;
    this.startTime = void 0;
    this.addChild = function(animate) {
      if (_this.children.indexOf(animate) === -1) {
        _this.children.push(animate);
        _this.updateTickerState();
      } else {
        _this.start();
      }
    };
    this.removeChild = function(animate) {
      _this.children = _this.children.filter(function(c) {
        return c !== animate;
      });
      _this.updateTickerState();
    };
    this.kill = function(targets) {
      _this.children = _this.children.filter(function(c) {
        var currentTargets = c.root.targets;
        var newTargets = currentTargets.map(function(d, i) {
          if (targets.indexOf(d) === -1) {
            return d;
          }
          delete d._tweenOneVars;
          return;
        });
        c.root.targets = newTargets;
        var v = !!newTargets.filter(function(a) {
          return a;
        }).length;
        if (!v) {
          c.kill();
        }
        return v;
      });
      _this.updateTickerState();
    };
    this.killAll = function(clearChild) {
      if (clearChild) {
        _this.children.forEach(function(c) {
          c === null || c === void 0 ? void 0 : c.root.targets.forEach(function(d) {
            if (!d) {
              return;
            }
            delete d._tweenOneVars;
          });
        });
        _this.children = [];
      }
      ticker_default.clear(_this.tickerKey);
      _this.tickerKey = void 0;
    };
    this.getTotalTime = function() {
      var totalTime = 0;
      for (var i = 0; i < _this.children.length; i++) {
        var item = _this.children[i];
        var itemTime = item.pausedState ? 0 : item.startTime + item.totalTime;
        if (!totalTime) {
          totalTime = itemTime;
        } else {
          totalTime = Math.max(itemTime, totalTime);
        }
      }
      return totalTime;
    };
    this.updateTickerState = function() {
      if (!_this.children.length || !_this.children.some(function(c) {
        return !(c === null || c === void 0 ? void 0 : c.pausedState) && (!(c === null || c === void 0 ? void 0 : c.reverseState) && c.progressTime < c.totalTime || (c === null || c === void 0 ? void 0 : c.reverseState) && c.progressTime > 0);
      })) {
        _this.killAll(!_this.children.length);
      } else {
        _this.start();
      }
    };
    this.start = function() {
      if (!_this.tickerKey) {
        _this.tickerKey = ticker_default.add(_this.render);
      }
    };
    this.render = function(_ref) {
      var time = _ref.time, _ref$elapsed = _ref.elapsed, elapsed = _ref$elapsed === void 0 ? 0 : _ref$elapsed;
      var children = _this.children;
      var length = children.length;
      for (var i = 0; i < length; i++) {
        var animate = children[i];
        if (!animate) {
          continue;
        }
        var startTime = animate.startTime - elapsed;
        var totalTime = animate.startTime + animate.totalTime + elapsed;
        if (time > startTime && time < totalTime && !animate.pausedState) {
          animate.render({
            time,
            elapsed
          });
        }
      }
    };
  }
  _createClass(Timeline2, [{
    key: "totalTime",
    get: function get() {
      return this.getTotalTime();
    }
  }]);
  return Timeline2;
}();
var timeline_default = Timeline;

// node_modules/tween-one/es/animate/animateElement.js
var Element2 = /* @__PURE__ */ function() {
  function Element4(_item) {
    var _this = this;
    _classCallCheck(this, Element4);
    this.item = void 0;
    this.vars = {};
    this.start = void 0;
    this.parent = void 0;
    this.root = void 0;
    this.startAt = {};
    this.mode = void 0;
    this.appearTo = 0;
    this.props = {};
    this.index = void 0;
    this.register = void 0;
    this.reverseStart = void 0;
    this.repeatNum = 0;
    this.prevMoment = void 0;
    this.easing = void 0;
    this.changeValueToVars = function(k2, value2, skipPlugin) {
      var isArray = (Array.isArray(value2) || k2.match(/color|fill|stroke|.*shadow/i) && typeof value2 === "string" || typeof value2 === "string" && value2.split(/[\s|,]/).length > 1) && !(k2 in plugins_default);
      if (k2 in plugins_default || isArray) {
        if (skipPlugin) {
          return value2;
        }
        return {
          value: value2,
          plugins: [],
          array: isArray
        };
      }
      var vars = parseFloat(value2.toString().replace(/=/g, ""));
      var unit = value2.toString().replace(/[^a-z|%]/g, "");
      var count = value2.toString().charAt(1) === "=" ? value2.toString().replace(/[^\+\=|\-\=]/gi, "") : "";
      return {
        vars,
        unit,
        count
      };
    };
    this.setEase = function(e) {
      if (typeof e === "function") {
        _this.easing = e;
        return;
      } else if (e.match(/,/g)) {
        _this.easing = ease_default.path(e);
        return;
      }
      _this.easing = ease_default[e];
    };
    this.getTotalTime = function() {
      var _this$props = _this.props, _this$props$duration = _this$props.duration, duration = _this$props$duration === void 0 ? 450 : _this$props$duration, _this$props$delay = _this$props.delay, delay = _this$props$delay === void 0 ? 0 : _this$props$delay, _this$props$repeat = _this$props.repeat, repeat = _this$props$repeat === void 0 ? 0 : _this$props$repeat, _this$props$repeatDel = _this$props.repeatDelay, repeatDelay = _this$props$repeatDel === void 0 ? 0 : _this$props$repeatDel;
      return repeat === -1 ? Number.MAX_VALUE : delay + duration * (repeat + 1) + repeatDelay * repeat;
    };
    this.getEaseToRatio = function(r, isFrom) {
      var _this$props$ease = _this.props.ease, ease = _this$props$ease === void 0 ? "" : _this$props$ease;
      return (r === 0 || r === 1) && !(typeof ease === "function" || ease.match(/,/g)) ? r : _this.easing(isFrom ? 1 - r : r, isFrom ? 1 : 0, isFrom ? 0 : 1, 1);
    };
    this.setRatioToVars = function(ratio) {
      var vars = _this.vars, root = _this.root;
      for (var i = 0; i < root.targets.length; i++) {
        if (!root.targets[i]) {
          continue;
        }
        for (var key in vars) {
          var item = vars[key];
          if (item.plugins) {
            if (key === "PathMotion") {
              root.vars[i].style = item.plugins[i].render(ratio);
            } else {
              root.vars[i][key] = item.plugins[i].render(ratio);
            }
            continue;
          }
          var endVars = item.vars, count = item.count, unit = item.unit;
          var startVars = _this.start[i][key];
          root.vars[i][key] = getValue(startVars, endVars, ratio, count, unit);
        }
      }
    };
    this.onRegisterAnimate = function() {
      _this.register = true;
      var root = _this.root, parent2 = _this.parent, startAt = _this.startAt;
      var start = [];
      for (var i = 0; i < root.targets.length; i++) {
        var target = root.targets[i];
        var vars = root.vars[i];
        var s = {};
        for (var key in _this.vars) {
          var cItem = _this.vars[key];
          if (cItem.plugins) {
            var plugin = new plugins_default[cItem.array ? "ArrayPlugin" : key](cItem.value, key);
            plugin.target = target;
            plugin.root = root;
            plugin.parent = parent2;
            plugin.targetIndex = i;
            plugin.tweenVars = vars;
            plugin.index = _this.index;
            plugin.startAt = startAt;
            s[key] = plugin.getAnimStart();
            cItem.plugins.push(plugin);
          } else {
            var _ref, _startAt$key;
            var targetValue = (_ref = root.attr ? target.getAttribute(key) : vars[key] || target[key]) !== null && _ref !== void 0 ? _ref : getDefaultStart(key);
            var startData = (_startAt$key = startAt[key]) !== null && _startAt$key !== void 0 ? _startAt$key : targetValue;
            var isStartAt = _typeof(startData) === "object" && "vars" in startData && "count" in startData;
            var unit = isStartAt ? startData.unit : "".concat(startData).replace(/[^a-z|%]/g, "");
            var varsUnit = cItem.unit;
            if (unit && unit !== varsUnit) {
              console.warn("Different units, start unit ".concat(unit, ", to value unit ").concat(varsUnit, ", remove start unit."));
            }
            s[key] = isStartAt ? getStartAtValue(targetValue, startData) : parseFloat(startData);
          }
        }
        start.push(s);
      }
      _this.start = start;
    };
    this.overflowRatio = function(ratio) {
      var r = ratio < 0 ? 0 : ratio;
      var duration = _this.props.duration;
      r = r > duration ? duration : r;
      return r;
    };
    this.render = function(_ref2) {
      var moment = _ref2.moment, _ref2$fps = _ref2.fps, fps = _ref2$fps === void 0 ? 0 : _ref2$fps, silence = _ref2.silence, render = _ref2.render;
      var parent2 = _this.parent, root = _this.root, props = _this.props;
      var targets = flatArray(root.targets);
      var onChange = parent2.onChange;
      var _props$repeat = props.repeat, repeat = _props$repeat === void 0 ? 0 : _props$repeat;
      var _props$type = props.type, type = _props$type === void 0 ? "to" : _props$type, _props$duration = props.duration, duration = _props$duration === void 0 ? 450 : _props$duration, _props$delay = props.delay, delay = _props$delay === void 0 ? 0 : _props$delay, _props$repeatDelay = props.repeatDelay, repeatDelay = _props$repeatDelay === void 0 ? 0 : _props$repeatDelay, yoyo = props.yoyo;
      repeat = repeat === -1 ? Number.MAX_VALUE : repeat;
      var ratio = moment - delay;
      var repeatNum = Math.floor(ratio / (duration + repeatDelay)) || 0;
      repeatNum = repeatNum > repeat ? repeat : repeatNum;
      repeatNum = repeatNum < 0 ? 0 : repeatNum;
      ratio = ratio - (duration + repeatDelay) * repeatNum;
      var yoyoReverse = !!(yoyo && repeatNum % 2);
      var isFrom = type === "from";
      var backwards = yoyoReverse && isFrom ? false : yoyoReverse || isFrom;
      ratio = backwards ? duration - ratio : ratio;
      var fromDelay = isFrom ? 0 : delay;
      var r = backwards ? 1 : 0;
      if (!_this.register && moment >= fromDelay) {
        _this.onRegisterAnimate();
        if (backwards && ratio <= 0 || !backwards && ratio >= duration && duration) {
          _this.prevMoment = moment;
          r = backwards ? 0 : 1;
        }
        _this.setRatioToVars(r);
        onChange({
          index: _this.index,
          vars: root.vars
        });
      }
      if (_this.register && moment > delay - fps && moment < _this.totalTime + fps) {
        ratio = _this.overflowRatio(ratio);
        r = backwards ? 1 : 0;
        if (moment >= _this.totalTime && _this.mode !== "onComplete" && _this.prevMoment !== void 0 || _this.prevMoment === void 0 && moment >= _this.totalTime && duration) {
          r = backwards ? 0 : 1;
          _this.mode = "onComplete";
          if (_this.props.onComplete) {
            _this.props.onComplete({
              mode: _this.mode,
              index: _this.index,
              moment: ratio,
              ratio: r,
              targets,
              vars: flatArray(root.vars)
            });
          }
        } else if (_this.prevMoment === void 0 || moment <= 0 && moment > -fps && _this.mode !== "onStart" && _this.prevMoment > moment) {
          _this.mode = "onStart";
          if (_this.props.onStart) {
            _this.props.onStart({
              mode: _this.mode,
              index: _this.index,
              moment: ratio,
              ratio: r,
              targets,
              vars: flatArray(root.vars)
            });
          }
        } else {
          r = ratio && duration ? ratio / duration : 0;
          _this.mode = "onUpdate";
          if (_this.props.onUpdate) {
            _this.props.onUpdate({
              mode: _this.mode,
              index: _this.index,
              moment: ratio,
              ratio: r,
              targets,
              vars: flatArray(root.vars)
            });
          }
        }
        if (repeat && repeatNum !== _this.repeatNum && moment && _this.mode === "onUpdate") {
          _this.mode = "onRepeat";
          if (_this.props.onRepeat) {
            _this.props.onRepeat({
              mode: _this.mode,
              index: _this.index,
              moment: ratio,
              ratio: r,
              targets,
              vars: flatArray(_this.root.vars)
            });
          }
        }
        _this.setRatioToVars(_this.getEaseToRatio(r, isFrom));
        if (repeat) {
          _this.repeatNum = repeatNum;
        }
        var cb = {
          mode: _this.mode,
          moment: ratio,
          repeat: repeatNum,
          ratio: r,
          targets: root.targets,
          vars: root.vars,
          index: _this.index
        };
        if (silence) {
          cb.silence = silence;
        }
        if (render) {
          cb.render = render;
        }
        onChange(cb);
        _this.prevMoment = moment;
      }
    };
    this.item = _item;
    this.startAt = _objectSpread2({}, _item.startAt);
    Object.keys(this.startAt).forEach(function(c) {
      _this.startAt[c] = _this.changeValueToVars(c, _this.startAt[c], true);
    });
    var _props = {};
    for (var k in _item) {
      var value = _item[k];
      if (!(k in initAnimProps)) {
        this.vars[k] = this.changeValueToVars(k, value);
      } else {
        _props[k] = value;
      }
    }
    this.props = _objectSpread2(_objectSpread2({}, initAnimProps), _props);
    this.setEase(this.props.ease);
  }
  _createClass(Element4, [{
    key: "totalTime",
    get: (
      // parentBackwards?: boolean;
      function get() {
        return this.getTotalTime();
      }
    )
  }]);
  return Element4;
}();

// node_modules/tween-one/es/animate/animate.js
var AnimateGroup = /* @__PURE__ */ _createClass(function AnimateGroup2(_props) {
  var _this = this;
  _classCallCheck(this, AnimateGroup2);
  this.props = void 0;
  this.id = void 0;
  this.children = [];
  this.totalTime = 0;
  this.totalTimeRegion = 0;
  this.childTotalTime = 0;
  this.childRegionTotalTime = 0;
  this.prevMoment = void 0;
  this.progressTime = 0;
  this.progressMoment = -1;
  this.startMoment = 0;
  this.startTime = 0;
  this.repeatNum = 0;
  this.mode = "onTimelineStart";
  this.pausedState = void 0;
  this.reverseState = void 0;
  this.root = void 0;
  this.parent = void 0;
  this.regionStartTime = 0;
  this.regionEndTime = void 0;
  this.onChangeChild = void 0;
  this.onChangeTimeline = void 0;
  this.init = function() {
    var _this$props = _this.props, reverse = _this$props.reverse, animation = _this$props.animation, moment = _this$props.moment;
    var animateArray = dataToArray(animation);
    for (var i = 0; i < animateArray.length; i++) {
      var item = animateArray[i];
      if (item.type === "set") {
        item.duration = 0;
      }
      var animate = new Element2(item);
      animate.index = i;
      var pos = i ? getAnimatePos(item, animateArray[i - 1]) : 0;
      item.appearTo = pos;
      animate.appearTo = pos;
      _this.addChild(animate);
    }
    _this.render({
      time: (reverse ? _this.totalTime : 0) + _this.startTime,
      elapsed: 16.67
    });
    if (!_this.totalTime) {
      _this.render({
        time: (reverse ? _this.totalTime : 0) + _this.startTime,
        elapsed: 16.67
      });
    }
    if (moment) {
      _this.goto(moment);
    } else {
      _this.play();
    }
  };
  this.addChild = function(animate) {
    animate.parent = _this;
    animate.root = _this.root;
    if (_this.children.indexOf(animate) === -1) {
      _this.children.push(animate);
      _this.setTotalTime();
    }
  };
  this.setTotalTime = function() {
    _this.childTotalTime = 0;
    _this.childRegionTotalTime = 0;
    for (var i = 0; i < _this.children.length; i++) {
      var item = _this.children[i];
      if (item.appearTo !== _this.childTotalTime) {
        var itemTime = item.appearTo + item.totalTime;
        if (itemTime > _this.childTotalTime) {
          _this.childTotalTime = itemTime;
          _this.childRegionTotalTime = itemTime;
        }
      } else {
        _this.childTotalTime += item.totalTime;
        _this.childRegionTotalTime += item.totalTime;
      }
    }
    if (_this.regionStartTime) {
      _this.childRegionTotalTime -= _this.regionStartTime;
    }
    if (_this.regionEndTime) {
      _this.childRegionTotalTime = _this.regionEndTime - _this.regionStartTime;
    }
    var _this$props2 = _this.props, _this$props2$repeat = _this$props2.repeat, repeat = _this$props2$repeat === void 0 ? 0 : _this$props2$repeat, _this$props2$repeatDe = _this$props2.repeatDelay, repeatDelay = _this$props2$repeatDe === void 0 ? 0 : _this$props2$repeatDe, delay = _this$props2.delay;
    _this.totalTime = repeat === -1 ? Number.MAX_VALUE : delay + _this.childTotalTime * (repeat + 1) + repeatDelay * repeat;
    _this.totalTimeRegion = repeat === -1 ? Number.MAX_VALUE : delay + _this.childRegionTotalTime * (repeat + 1) + repeatDelay * repeat;
  };
  this.setStartTimeOrMoment = function(start) {
    _this.startTime = ticker_default.time;
    _this.startMoment = start || _this.progressMoment;
  };
  this.reRenderCall = function() {
    _this.render({
      time: _this.startTime,
      elapsed: ticker_default.elapsed || ticker_default.frameFPS
    });
  };
  this.play = function(v) {
    if (!v) {
      var _this$parent;
      (_this$parent = _this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.addChild(_this);
    } else {
      var _this$parent2;
      (_this$parent2 = _this.parent) === null || _this$parent2 === void 0 ? void 0 : _this$parent2.updateTickerState();
    }
  };
  this.paused = function() {
    var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    _this.pausedState = v;
    _this.setStartTimeOrMoment();
    _this.play(v);
  };
  this.reverse = function(v) {
    _this.reverseState = v;
    _this.setStartTimeOrMoment();
    _this.play(_this.pausedState);
  };
  this.goto = function($moment, paused) {
    var moment = $moment - _this.regionStartTime;
    _this.startTime = ticker_default.time;
    _this.startMoment = moment > _this.totalTime ? _this.totalTime : moment;
    _this.progressMoment = _this.startMoment;
    _this.progressTime = moment;
    _this.play(_this.pausedState);
    _this.reRenderCall();
    if (!!paused !== _this.pausedState) {
      _this.paused(paused);
    }
  };
  this.kill = function(index) {
    if (typeof index === "number") {
      _this.paused();
      delete _this.children[index];
      _this.setTotalTime();
      _this.paused(false);
    } else {
      var _this$parent3;
      _this.children = [];
      (_this$parent3 = _this.parent) === null || _this$parent3 === void 0 ? void 0 : _this$parent3.removeChild(_this);
    }
  };
  this.onChange = function(e) {
    e.timelineMoment = _this.progressMoment;
    _this.onChangeChild(e);
  };
  this.render = function(_ref) {
    var time = _ref.time, elapsed = _ref.elapsed;
    var fps = elapsed || ticker_default.frameFPS || 0;
    var totalTime = _this.totalTime, totalTimeRegion = _this.totalTimeRegion, childTotalTime = _this.childTotalTime, childRegionTotalTime = _this.childRegionTotalTime, children = _this.children, props = _this.props, startTime = _this.startTime, reverseState = _this.reverseState, pausedState = _this.pausedState, startMoment = _this.startMoment, onChangeTimeline = _this.onChangeTimeline, parent2 = _this.parent, root = _this.root, prevMoment = _this.prevMoment, regionStartTime = _this.regionStartTime;
    var _props$repeatDelay = props.repeatDelay, repeatDelay = _props$repeatDelay === void 0 ? 0 : _props$repeatDelay, yoyo = props.yoyo, delay = props.delay;
    var _props$repeat = props.repeat, repeat = _props$repeat === void 0 ? 0 : _props$repeat;
    repeat = repeat === -1 ? Number.MAX_VALUE : repeat;
    var t = time - startTime - delay;
    var m = reverseState ? startMoment - t : t + startMoment;
    if (m < -fps) {
      return;
    }
    var moment = m < 0 ? 0 : m;
    moment = moment > totalTime ? totalTime : moment;
    moment = startMoment < regionStartTime ? m : moment;
    moment = startMoment > totalTimeRegion ? startMoment : moment;
    var repeatNum = repeat ? Math.floor(moment / (childRegionTotalTime + repeatDelay)) : 0;
    repeatNum = repeat && repeatNum > repeat ? repeat : repeatNum;
    var tweenMoment = moment - (childRegionTotalTime + repeatDelay) * repeatNum;
    var yoyoReverse = !!(yoyo && repeatNum % 2);
    tweenMoment = yoyoReverse ? childRegionTotalTime - tweenMoment : tweenMoment;
    tweenMoment = regionStartTime + tweenMoment;
    var reverse = reverseState ? !yoyoReverse : yoyoReverse;
    _this.mode = "onTimelineUpdate";
    if (typeof prevMoment !== "number") {
      _this.mode = "onTimelineStart";
    }
    if (moment >= totalTimeRegion - delay && typeof prevMoment === "number") {
      _this.mode = "onTimelineComplete";
    }
    if (repeatNum !== _this.repeatNum) {
      _this.mode = "onTimelineRepeat";
      if (moment > childTotalTime * repeatNum && moment < childTotalTime * repeatNum + fps) {
        for (var i = reverse ? 0 : children.length - 1; reverse ? i <= children.length - 1 : i >= 0; reverse ? i++ : i--) {
          var item = children[i];
          if (!reverse) {
            item.prevMoment = void 0;
          }
          item.render({
            moment: reverse ? item.totalTime : 0,
            fps
          });
        }
        onChangeTimeline({
          moment,
          totalTime,
          repeat: repeatNum,
          mode: _this.mode,
          targets: root.targets
        });
        _this.mode = "onTimelineUpdate";
      }
    }
    if (repeat) {
      _this.repeatNum = repeatNum;
    }
    _this.progressMoment = moment;
    _this.prevMoment = moment;
    _this.progressTime = t;
    for (var _i = 0; _i < children.length; _i++) {
      var _item = children[_i];
      var duration = _item.totalTime + _item.appearTo;
      var tweenTime = tweenMoment >= _item.appearTo - fps && tweenMoment < duration + fps;
      if (_item.mode !== "onComplete" && tweenMoment > duration + fps && !yoyoReverse && _item.totalTime || typeof _item.mode === "undefined" && !_item.totalTime) {
        _item.render({
          moment: _item.totalTime,
          fps
        });
        _item.prevMoment = void 0;
      }
      if (tweenMoment < _item.appearTo - fps && _item.mode && _item.mode !== "onStart") {
        _item.render({
          moment: _item.appearTo,
          fps,
          silence: true
        });
        _item.prevMoment = void 0;
        _item.mode = void 0;
      }
      if (tweenTime) {
        var _t = tweenMoment < 0 ? 0 : tweenMoment;
        if (tweenMoment > duration && _item.mode === "onComplete" && !yoyoReverse) {
          return;
        }
        _t = tweenMoment > duration ? duration : tweenMoment;
        _item.render({
          moment: _t - _item.appearTo,
          fps
        });
        if (!duration) {
          _item.render({
            moment: _item.totalTime,
            fps,
            render: true
          });
          _item.prevMoment = void 0;
        }
      }
    }
    onChangeTimeline({
      moment,
      totalTime,
      repeat: repeatNum,
      mode: _this.mode,
      targets: root.targets
    });
    if (pausedState || totalTimeRegion && m + delay >= totalTimeRegion && !reverseState || reverseState && m + delay <= 0 || !children.length) {
      parent2 === null || parent2 === void 0 ? void 0 : parent2.removeChild(_this);
    }
  };
  this.props = _props;
  var _this$props3 = this.props, _paused = _this$props3.paused, _reverse = _this$props3.reverse;
  this.reverseState = _reverse;
  this.pausedState = _paused;
  this.regionStartTime = _props.regionStartTime || 0;
  this.regionEndTime = _props.regionEndTime;
});

// node_modules/tween-one/es/TweenOne.js
plugins_default.push(ArrayPlugin_default);
plugins_default.push(GradientsPlugin);
plugins_default.push(StylePlugin_default);
var tweenId = 0;
var globalTimeline = new timeline_default();
var Tween = /* @__PURE__ */ function() {
  function Tween2(targets, _props) {
    var _this = this;
    _classCallCheck(this, Tween2);
    this.targets = void 0;
    this.props = void 0;
    this.timeline = void 0;
    this.animate = void 0;
    this.$reverse = false;
    this.vars = [];
    this.initTime = void 0;
    this.attr = void 0;
    this.init = /* @__PURE__ */ function() {
      var _ref = _asyncToGenerator(/* @__PURE__ */ import_regenerator.default.mark(function _callee(vars) {
        var props;
        return import_regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                props = getInitProps(vars);
                if (_this.targets[0].tagName && !_this.attr) {
                  props.animation = dataToArray(props.animation).map(function(item) {
                    var c = {
                      style: {}
                    };
                    for (var k in item) {
                      if (k in plugins_default || k in initAnimProps) {
                        c[k] = item[k];
                      } else {
                        c.style[k] = item[k];
                      }
                    }
                    if (!Object.keys(c.style).length) {
                      delete c.style;
                    }
                    if (item.duration) {
                      item.duration = Math.round(item.duration);
                    }
                    if (item.delay) {
                      item.delay = Math.round(item.delay);
                    }
                    if (item.appearTo) {
                      item.appearTo = Math.round(item.appearTo);
                    }
                    if (item.repeatDelay) {
                      item.repeatDelay = Math.round(item.repeatDelay);
                    }
                    return c;
                  });
                }
                _this.animate = new AnimateGroup(props);
                _this.animate.id = "TweenOne_".concat(tweenId);
                tweenId++;
                _this.animate.startTime = _this.initTime;
                _this.animate.onChangeChild = _this.onChange;
                _this.animate.onChangeTimeline = _this.onChangeTimeline;
                _this.animate.root = _this;
                _this.animate.parent = _this.timeline;
                _this.animate.init();
              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return function(_x) {
        return _ref.apply(this, arguments);
      };
    }();
    this.renderToDom = function() {
      for (var i = 0; i < _this.vars.length; i++) {
        var item = _this.vars[i];
        for (var key in item) {
          var value = item[key];
          var target = _this.targets[i];
          if (!target) {
            continue;
          }
          if (_this.props.attr && target.tagName && target.setAttribute) {
            if (key === "style") {
              for (var ck in value) {
                target.style[ck] = value[key];
              }
            }
            target.setAttribute(key, value);
          } else if (key in plugins_default) {
            var $key = plugins_default[key].key;
            if (typeof target[$key] === "function") {
              target[$key](value.attr, value.path);
            } else if (_typeof(value) === "object" && _typeof(target[$key]) === "object" && $key) {
              for (var _ck in value) {
                var va = value[_ck];
                if ($key === "__self") {
                  target[_ck] = va;
                } else {
                  target[$key][_ck] = _typeof(va) === "object" && va.text || va;
                }
              }
            } else {
              target[$key || key] = value;
            }
          } else {
            target[key] = value;
          }
        }
      }
    };
    this.onChange = function(e) {
      if (e.mode === "onComplete" && e.render) {
        _this.renderToDom();
      }
      if (e.mode && _this.props.onChange && !e.silence) {
        e.targets = flatArray(e.targets);
        e.vars = flatArray(e.vars);
        _this.props.onChange(e);
      }
    };
    this.onChangeTimeline = function(e) {
      _this.renderToDom();
      if (e.mode === "onTimelineComplete") {
        var _e$targets;
        (_e$targets = e.targets) === null || _e$targets === void 0 ? void 0 : _e$targets.forEach(function(item) {
          delete item._tweenOneVars;
        });
      }
      if (e.mode && _this.props.onChangeTimeline) {
        e.targets = flatArray(e.targets);
        e.vars = flatArray(_this.vars);
        _this.props.onChangeTimeline(e);
      }
    };
    this.goto = function(moment, paused) {
      _this.targets.forEach(function(item) {
        if (!item) {
          return;
        }
        Object.keys(item._tweenOneVars || {}).forEach(function(key) {
          delete item._tweenOneVars[key];
        });
      });
      _this.animate.goto(moment, paused);
    };
    this.kill = function(index) {
      _this.animate.kill(index);
    };
    this.targets = targets;
    this.props = _props;
    this.timeline = globalTimeline;
    this.initTime = ticker_default.time;
    this.attr = _props.attr;
    targets.forEach(function(item) {
      _this.vars.push(item._tweenOneVars);
    });
    this.init(_props);
  }
  _createClass(Tween2, [{
    key: "paused",
    get: function get() {
      return this.animate.pausedState;
    },
    set: function set(v) {
      this.animate.paused(v);
    }
  }, {
    key: "reverse",
    get: function get() {
      return this.$reverse;
    },
    set: function set(v) {
      this.$reverse = v;
      this.animate.reverse(v);
    }
  }, {
    key: "regionStartTime",
    get: function get() {
      return this.animate.regionStartTime;
    },
    set: function set(v) {
      this.animate.regionStartTime = v;
      this.animate.setTotalTime();
    }
  }, {
    key: "regionEndTime",
    get: function get() {
      return this.animate.regionEndTime || this.animate.totalTime;
    },
    set: function set(v) {
      this.animate.regionEndTime = v;
      this.animate.setTotalTime();
    }
  }]);
  return Tween2;
}();
var TweenOne = function TweenOne2(targets, vars) {
  if (!targets) {
    console.error("Error: targets is undefined.");
    return void 0;
  }
  if (ticker_default.state !== "wake") {
    ticker_default.wake();
  }
  var t = dataToArray(targets).map(function(item) {
    item._tweenOneVars = item._tweenOneVars || {};
    return item;
  });
  var doms = t.filter(function(c) {
    return c.tagName;
  });
  var objs = t.filter(function(c) {
    return !c.tagName;
  });
  var tween = [];
  if (doms.length) {
    tween.push(new Tween(doms, vars));
  }
  if (objs.length) {
    tween.push(new Tween(objs, vars));
  }
  return flatArray(tween);
};
TweenOne.kill = function(targets) {
  if (typeof targets === "undefined") {
    globalTimeline.killAll(true);
  } else {
    globalTimeline.kill(dataToArray(targets));
  }
};
TweenOne.plugins = plugins_default;
var TweenOne_default = TweenOne;

// node_modules/tween-one/es/index.js
var es_default = TweenOne_default;

// node_modules/rc-queue-anim/es/utils.js
var import_react2 = __toESM(require_react());
var windowIsUndefined2 = !(typeof window !== "undefined" && window.document && window.document.createElement);
function toArrayChildren(children) {
  var ret = [];
  import_react2.default.Children.forEach(children, function(c) {
    ret.push(c);
  });
  return ret;
}
function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function(c) {
      if (ret || !c) {
        return;
      }
      if (c.key === key) {
        ret = c;
      }
    });
  }
  return ret;
}
function mergeChildren(prev, next) {
  var ret = [];
  var nextChildrenPending = {};
  var pendingChildren = [];
  var followChildrenKey;
  prev.forEach(function(c) {
    if (!c) {
      return;
    }
    if (findChildInChildrenByKey(next, c.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[c.key] = pendingChildren;
        pendingChildren = [];
      }
      followChildrenKey = c.key;
    } else if (c.key) {
      pendingChildren.push(c);
    }
  });
  if (!followChildrenKey) {
    ret = ret.concat(pendingChildren);
  }
  next.forEach(function(c) {
    if (!c) {
      return;
    }
    if (nextChildrenPending.hasOwnProperty(c.key)) {
      ret = ret.concat(nextChildrenPending[c.key]);
    }
    ret.push(c);
    if (c.key === followChildrenKey) {
      ret = ret.concat(pendingChildren);
    }
  });
  return ret;
}
function transformArguments(arg, key, i) {
  var result;
  if (typeof arg === "function") {
    result = arg({
      key,
      index: i
    });
  } else {
    result = arg;
  }
  if (Array.isArray(result)) {
    if (result.length === 2) {
      return result;
    }
    return [result[0], result[0]];
  }
  return [result, result];
}

// node_modules/rc-queue-anim/es/animTypes.js
var animTypes_default = {
  left: {
    opacity: [1, 0],
    translateX: [0, -30]
  },
  top: {
    opacity: [1, 0],
    translateY: [0, -30]
  },
  right: {
    opacity: [1, 0],
    translateX: [0, 30]
  },
  bottom: {
    opacity: [1, 0],
    translateY: [0, 30]
  },
  alpha: {
    opacity: [1, 0]
  },
  scale: {
    opacity: [1, 0],
    scale: [1, 0]
  },
  scaleBig: {
    opacity: [1, 0],
    scale: [1, 2]
  },
  scaleX: {
    opacity: [1, 0],
    scaleX: [1, 0]
  },
  scaleY: {
    opacity: [1, 0],
    scaleY: [1, 0]
  }
};

// node_modules/rc-queue-anim/es/QueueAnim.js
var _excluded = ["component", "componentProps", "interval", "duration", "delay", "type", "animConfig", "ease", "leaveReverse", "forcedReplay", "animatingClassName", "onEnd", "appear"];
var noop2 = function noop3() {
};
var QueueAnim_default = /* @__PURE__ */ (0, import_react3.forwardRef)(function(props, ref) {
  var _props$component = props.component, component = _props$component === void 0 ? "div" : _props$component, _props$componentProps = props.componentProps, componentProps = _props$componentProps === void 0 ? {} : _props$componentProps, _props$interval = props.interval, interval = _props$interval === void 0 ? 100 : _props$interval, _props$duration = props.duration, duration = _props$duration === void 0 ? 450 : _props$duration, _props$delay = props.delay, delay = _props$delay === void 0 ? 0 : _props$delay, _props$type = props.type, type = _props$type === void 0 ? "right" : _props$type, _props$animConfig = props.animConfig, animConfig = _props$animConfig === void 0 ? null : _props$animConfig, _props$ease = props.ease, ease = _props$ease === void 0 ? "easeOutQuart" : _props$ease, _props$leaveReverse = props.leaveReverse, leaveReverse = _props$leaveReverse === void 0 ? false : _props$leaveReverse, _props$forcedReplay = props.forcedReplay, forcedReplay = _props$forcedReplay === void 0 ? false : _props$forcedReplay, _props$animatingClass = props.animatingClassName, animatingClassName = _props$animatingClass === void 0 ? ["queue-anim-entering", "queue-anim-leaving"] : _props$animatingClass, _props$onEnd = props.onEnd, onEnd = _props$onEnd === void 0 ? noop2 : _props$onEnd, _props$appear = props.appear, appear = _props$appear === void 0 ? true : _props$appear, tagProps = _objectWithoutProperties(props, _excluded);
  var childrenShow = (0, import_react3.useRef)({});
  var keysToEnter = (0, import_react3.useRef)([]);
  var recordKeysToEnter = (0, import_react3.useRef)([]);
  var keysToLeave = (0, import_react3.useRef)([]);
  var recordKeysToLeave = (0, import_react3.useRef)([]);
  var placeholderTimeoutIds = (0, import_react3.useRef)({});
  var childRefs = (0, import_react3.useRef)({});
  var recordAnimKeys = (0, import_react3.useRef)({});
  var recordTweenKeys = (0, import_react3.useRef)({});
  var oneEnterBool = (0, import_react3.useRef)(false);
  var originalChildren = (0, import_react3.useRef)([]);
  var _useState = (0, import_react3.useState)(), _useState2 = _slicedToArray(_useState, 2), child = _useState2[0], setChild = _useState2[1];
  var _useState3 = (0, import_react3.useState)({}), _useState4 = _slicedToArray(_useState3, 2), childShow = _useState4[0], setChildShow = _useState4[1];
  var getTweenSingleConfig = function getTweenSingleConfig2(data, num, enterOrLeave) {
    var obj = {};
    Object.keys(data).forEach(function(key) {
      if (Array.isArray(data[key])) {
        obj[key] = data[key][num];
      } else if (!enterOrLeave && !num || enterOrLeave && num) {
        obj[key] = data[key];
      }
    });
    return obj;
  };
  var getTweenAnimConfig = function getTweenAnimConfig2(data, num, enterOrLeave) {
    if (Array.isArray(data)) {
      return data.map(function(item) {
        return getTweenSingleConfig(item, num, enterOrLeave);
      });
    }
    return getTweenSingleConfig(data, num, enterOrLeave);
  };
  var getTweenType = function getTweenType2($type, num) {
    var data = animTypes_default[$type];
    return getTweenAnimConfig(data, num);
  };
  var getAnimData = function getAnimData2(key, i, enterOrLeave, startOrEnd) {
    return (
      /**
       * transformArguments 第一个为 enter, 第二个为 leave；
       * getTweenAnimConfig or getTweenType 第一个为到达的位置， 第二个为开始的位置。
       * 用 tween-one 的数组来实现老的动画逻辑。。。
       */
      animConfig ? getTweenAnimConfig(transformArguments(animConfig, key, i)[enterOrLeave], startOrEnd, enterOrLeave) : getTweenType(transformArguments(type, key, i)[enterOrLeave], startOrEnd)
    );
  };
  var getTweenData = function getTweenData2(key, i, $type) {
    var enterOrLeave = $type === "enter" ? 0 : 1;
    var start = $type === "enter" ? 1 : 0;
    var end = $type === "enter" ? 0 : 1;
    var animate = getAnimData(key, i, enterOrLeave, end);
    var startAnim = $type === "enter" && (forcedReplay || !childrenShow.current[key]) ? getAnimData(key, i, enterOrLeave, start) : null;
    var $ease = transformArguments(ease, key, i)[enterOrLeave];
    var $duration = transformArguments(duration, key, i)[enterOrLeave];
    if (Array.isArray(ease) && (ease.length > 2 || Array.isArray(ease[0]))) {
      $ease = $ease.map(function(num) {
        return num * 100;
      });
      $ease = "M0,100C".concat($ease[0], ",").concat(100 - $ease[1], ",").concat($ease[2], ",").concat(100 - $ease[3], ",100,0");
    }
    return {
      startAnim,
      animate,
      ease: $ease,
      duration: $duration
    };
  };
  var enterBegin = function enterBegin2(key, e) {
    var elem = e.targets;
    elem.className = elem.className.replace(animatingClassName[1], "");
    if (elem.className.indexOf(animatingClassName[0]) === -1) {
      elem.className = "".concat(elem.className, " ").concat(animatingClassName[0]).trim();
    }
    if (keysToEnter.current.indexOf(key) >= 0) {
      keysToEnter.current.splice(keysToEnter.current.indexOf(key), 1);
    }
    childrenShow.current[key] = true;
  };
  var enterComplete = function enterComplete2(key, e) {
    if (keysToLeave.current.indexOf(key) >= 0) {
      return;
    }
    var elem = e.targets;
    elem.className = elem.className.replace(animatingClassName[0], "").trim();
    delete recordTweenKeys.current[key];
    onEnd({
      key,
      type: "enter",
      target: elem
    });
  };
  var leaveBegin = function leaveBegin2(key, e) {
    var elem = e.targets;
    elem.className = elem.className.replace(animatingClassName[0], "");
    if (elem.className.indexOf(animatingClassName[1]) === -1) {
      elem.className = "".concat(elem.className, " ").concat(animatingClassName[1]).trim();
    }
  };
  var leaveComplete = function leaveComplete2(key, e) {
    toArrayChildren(props.children).findIndex(function(c) {
      return c && c.key === key;
    });
    if (toArrayChildren(props.children).findIndex(function(c) {
      return c && c.key === key;
    }) >= 0) {
      return;
    }
    delete childrenShow.current[key];
    delete recordTweenKeys.current[key];
    originalChildren.current = originalChildren.current.filter(function(c) {
      return c.key !== key;
    });
    if (keysToLeave.current.indexOf(key) >= 0) {
      keysToLeave.current.splice(keysToLeave.current.indexOf(key), 1);
    }
    var needLeave = keysToLeave.current.some(function(c) {
      return childShow[c];
    });
    if (!needLeave) {
      var currentChildren = toArrayChildren(props.children);
      setChild(currentChildren);
      setChildShow(_objectSpread2({}, childrenShow.current));
      recordKeysToLeave.current.forEach(function(k) {
        delete recordAnimKeys.current[k];
      });
    }
    var elem = e.targets;
    elem.className = elem.className.replace(animatingClassName[1], "").trim();
    onEnd({
      key,
      type: "leave",
      target: elem
    });
  };
  var performEnterBegin = function performEnterBegin2(key) {
    childShow[key] = true;
    ticker_default.clear(placeholderTimeoutIds.current[key]);
    delete placeholderTimeoutIds.current[key];
    setChildShow(_objectSpread2({}, childShow));
  };
  var performEnter = function performEnter2(key, i) {
    var $interval = transformArguments(interval, key, i)[0];
    var $delay = transformArguments(delay, key, i)[0];
    placeholderTimeoutIds.current[key] = ticker_default.timeout(function() {
      performEnterBegin(key);
    }, $interval * i + $delay);
  };
  var performLeave = function performLeave2(key) {
    ticker_default.clear(placeholderTimeoutIds.current[key]);
    delete placeholderTimeoutIds.current[key];
  };
  var getTweenOneEnterOrLeave = function getTweenOneEnterOrLeave2(key, i, $delay, $type) {
    var animateData = getTweenData(key, i, $type);
    var onStart = function onStart2(e) {
      ($type === "enter" ? enterBegin : leaveBegin)(key, e);
    };
    var onComplete = function onComplete2(e) {
      ($type === "enter" ? enterComplete : leaveComplete)(key, e);
    };
    if (Array.isArray(animateData.animate)) {
      var length = animateData.animate.length - 1;
      var animation = animateData.animate.map(function(item, ii) {
        return _objectSpread2(_objectSpread2({}, item), {}, {
          startAt: animateData.startAnim ? animateData.startAnim[ii] : void 0,
          duration: animateData.duration / length,
          delay: !ii && $type === "leave" ? $delay : 0,
          onStart: !ii ? onStart : void 0,
          onComplete: ii === length ? onComplete : void 0
        });
      });
      return animation;
    }
    return _objectSpread2(_objectSpread2({}, animateData.animate), {}, {
      startAt: animateData.startAnim || void 0,
      ease: animateData.ease,
      duration: animateData.duration,
      onStart,
      onComplete,
      delay: $delay
    });
  };
  (0, import_react3.useEffect)(function() {
    return function() {
      Object.keys(recordTweenKeys.current).forEach(function(key) {
        var tween = recordTweenKeys.current[key];
        if (!tween) {
          return;
        }
        tween.kill();
      });
    };
  }, []);
  (0, import_react3.useEffect)(function() {
    var nextChildren = toArrayChildren(props.children).filter(function(c) {
      return c;
    });
    var currentChildren = originalChildren.current.filter(function(item) {
      return item;
    });
    var newChildren = mergeChildren(currentChildren, nextChildren);
    var $keysToEnter = [];
    var $keysToLeave = [];
    if (!appear && !oneEnterBool.current) {
      var $childShow = {};
      newChildren.forEach(function(c) {
        if (!c || !c.key) {
          return;
        }
        $childShow[c.key] = true;
      });
      originalChildren.current = newChildren;
      childrenShow.current = _objectSpread2({}, $childShow);
      setChildShow($childShow);
    } else {
      currentChildren.forEach(function(c) {
        if (!c) {
          return;
        }
        var key = c.key;
        var hasNext = findChildInChildrenByKey(nextChildren, key);
        if (!hasNext && key) {
          $keysToLeave.push(key);
          ticker_default.clear(placeholderTimeoutIds.current[key]);
          delete placeholderTimeoutIds.current[key];
        }
      });
      nextChildren.forEach(function(c) {
        if (!c) {
          return;
        }
        var key = c.key;
        var hasPrev = findChildInChildrenByKey(currentChildren, key);
        if (!hasPrev && key || (!recordAnimKeys.current[key] || recordAnimKeys.current[key] === "leave" || keysToEnter.current.indexOf(key) >= 0) && $keysToLeave.indexOf(key) === -1) {
          $keysToEnter.push(key);
        }
      });
    }
    keysToEnter.current = $keysToEnter;
    recordKeysToEnter.current = [].concat($keysToEnter);
    keysToLeave.current = $keysToLeave;
    recordKeysToLeave.current = [].concat($keysToLeave);
    setChild(newChildren);
  }, [props.children]);
  (0, import_react3.useLayoutEffect)(function() {
    originalChildren.current = child || [];
    if (appear || oneEnterBool.current) {
      var $keysToEnter = _toConsumableArray(keysToEnter.current);
      var $keysToLeave = _toConsumableArray(keysToLeave.current);
      $keysToEnter.forEach(performEnter);
      $keysToLeave.forEach(performLeave);
    }
    if (child) {
      oneEnterBool.current = true;
    }
  }, [child]);
  (0, import_react3.useLayoutEffect)(function() {
    if (child) {
      child.forEach(function(item) {
        var key = item.key;
        var dom = childRefs.current[key];
        if (!dom) {
          return;
        }
        var animation;
        var index = keysToLeave.current.indexOf(key);
        var $interval = transformArguments(interval, key, index);
        var $delay = transformArguments(delay, key, index);
        if (index >= 0) {
          if (recordAnimKeys.current[key] === "leave") {
            return;
          }
          var order = leaveReverse ? keysToLeave.current.length - index - 1 : index;
          var d = $interval[1] * order + $delay[1];
          animation = getTweenOneEnterOrLeave(key, index, d, "leave");
          recordAnimKeys.current[key] = "leave";
        } else {
          if (recordAnimKeys.current[key] === "enter" || keysToEnter.current.indexOf(key) === -1) {
            return;
          }
          index = recordKeysToEnter.current.indexOf(key);
          var _d = $interval[0] * index + $delay[0];
          animation = getTweenOneEnterOrLeave(key, index, recordAnimKeys.current[key] === "leave" ? _d : 0, "enter");
          recordAnimKeys.current[key] = "enter";
        }
        if (recordTweenKeys.current[key]) {
          recordTweenKeys.current[key].kill();
        }
        if (forcedReplay) {
          var anim = _objectSpread2(_objectSpread2({}, Array.isArray(animation) ? animation[0].startAt : animation.startAt), {}, {
            type: "set"
          });
          es_default(dom, {
            animation: anim
          });
        }
        recordTweenKeys.current[key] = es_default(dom, {
          animation
        });
      });
    }
  }, [childShow, child]);
  return (0, import_react3.useMemo)(function() {
    if (windowIsUndefined2) {
      return /* @__PURE__ */ (0, import_react3.createElement)(component, _objectSpread2(_objectSpread2(_objectSpread2({}, tagProps), componentProps), {}, {
        ref
      }));
    }
    var childrenToRender = toArrayChildren(child).map(function(item) {
      if (!item || !item.key) {
        return item;
      }
      return childShow[item.key] && /* @__PURE__ */ (0, import_react3.cloneElement)(item, {
        ref: function ref2(c) {
          childRefs.current[item.key] = c instanceof Element ? c : (0, import_react_dom.findDOMNode)(c);
          if (!c) {
            delete childRefs.current[item.key];
          }
        },
        key: item.key
      });
    });
    var p = _objectSpread2(_objectSpread2(_objectSpread2({}, tagProps), componentProps), {}, {
      ref
    });
    return /* @__PURE__ */ (0, import_react3.createElement)(component, p, childrenToRender);
  }, [childShow, child]);
});

// node_modules/rc-queue-anim/es/index.js
var es_default2 = QueueAnim_default;

// app/components/common/QueAnim.client.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function QueAnim(props) {
  const { items } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    es_default2,
    {
      component: "ul",
      type: ["right", "left"],
      style: { padding: 0, margin: 0 },
      leaveReverse: true,
      children: items
    },
    void 0,
    false,
    {
      fileName: "app/components/common/QueAnim.client.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}

// app/components/common/SwipeButton.client.tsx
var import_react_slide_button = __toESM(require_build());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function SwipeButton(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_slide_button.default, { ...props }, void 0, false, {
    fileName: "app/components/common/SwipeButton.client.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/components/pages/Party/PartyChat.tsx
var import_react5 = __toESM(require_react());
var import_react_scroll = __toESM(require_modules());
var import_dayjs = __toESM(require_dayjs_min());

// app/contexts/WebsocketContext.tsx
var import_react4 = __toESM(require_react());
var import_react_use_websocket = __toESM(require_dist());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var WebsocketContext = import_react4.default.createContext({
  readyState: import_react_use_websocket.ReadyState.UNINSTANTIATED,
  messageData: null,
  socket: null
});
var WebsocketContextProvider = (props) => {
  const url = props.websocketUrl;
  const identifier = props.identifier;
  const [newMessage, setNewMessage] = (0, import_react4.useState)(null);
  let option = {
    shouldReconnect: () => true
  };
  if (identifier) {
    option = {
      ...option,
      queryParams: { identifier }
    };
  }
  const { lastMessage, readyState } = (0, import_react_use_websocket.default)(url, option);
  (0, import_react4.useEffect)(() => {
    if (lastMessage !== null) {
      setNewMessage(JSON.parse(lastMessage.data));
    }
  }, [lastMessage, setNewMessage]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    WebsocketContext.Provider,
    {
      value: {
        readyState,
        messageData: newMessage
      },
      children: props.children
    },
    void 0,
    false,
    {
      fileName: "app/contexts/WebsocketContext.tsx",
      lineNumber: 50,
      columnNumber: 5
    },
    this
  );
};

// app/components/pages/Party/PartyChat.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var { Text } = typography_default;
var { useToken } = theme_default;
function PartyChat(props) {
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { t } = useTranslation();
  const [form] = form_default.useForm();
  const { fetcher, party, closePartyDetail } = props;
  const { user } = (0, import_react5.useContext)(AuthContext);
  const { token } = useToken();
  const [loading, setLoading] = (0, import_react5.useState)(true);
  const [chats, setChats] = (0, import_react5.useState)([]);
  const { messageData } = (0, import_react5.useContext)(WebsocketContext);
  const handleSendMessage = (values) => {
    fetcher.submit(
      {
        data: JSON.stringify({ message: values.message }),
        partyId: party.id
      },
      {
        method: "post",
        action: `/resources/send-party-a-message`
      }
    );
    const timeout = setTimeout(() => {
      import_react_scroll.scroller.scrollTo("last-chat", {
        containerId: "chat-messages",
        duration: 300
      });
      clearTimeout(timeout);
    }, 200);
    form.resetFields();
  };
  (0, import_react5.useEffect)(() => {
    setLoading(true);
    fetcher.load(
      `/resources/party-chat?partyId=${party.id}&gameId=${party.gameId}`
    );
  }, [party]);
  (0, import_react5.useEffect)(() => {
    if (fetcher && fetcher.data) {
      const { sendFailed } = fetcher.data;
      if (sendFailed) {
        closePartyDetail();
      }
    }
  }, [fetcher]);
  (0, import_react5.useEffect)(() => {
    if (messageData) {
      const newChats = [...chats, messageData];
      setChats(newChats);
    }
  }, [messageData]);
  (0, import_react5.useEffect)(() => {
    if (fetcher && fetcher.data && fetcher.state === "idle") {
      if (fetcher.data.chats && fetcher.data.partyId && `${fetcher.data.partyId}` === `${party.id}`) {
        setLoading(false);
        setChats(fetcher.data.chats);
      }
    }
  }, [fetcher, party]);
  (0, import_react5.useEffect)(() => {
    if (!loading) {
      import_react_scroll.scroller.scrollTo("last-chat", {
        containerId: "chat-messages",
        duration: 0
      });
    }
  }, [loading]);
  const getChatMessage = (message) => {
    if (message === "system:PartyIsReady") {
      return t("All members of your party are here and ready to play!");
    }
    return message;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(card_default, { style: { borderRadius: 12 }, bodyStyle: { padding: 0 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      flex_default,
      {
        id: "chat-messages",
        vertical: true,
        gap: 15,
        style: { height: 350, padding: 15, overflowY: "auto" },
        children: [
          loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(skeleton_default, { active: true }, void 0, false, {
            fileName: "app/components/pages/Party/PartyChat.tsx",
            lineNumber: 143,
            columnNumber: 11
          }, this) : chats.length > 0 ? chats.map((chat, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "div",
            {
              style: {
                paddingBottom: 15,
                borderBottom: `1px solid ${token.colorBorder}`
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                row_default,
                {
                  wrap: false,
                  gutter: 10,
                  style: { alignItems: "flex-start" },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                      avatar_default,
                      {
                        src: chat.createdBy.displayImage ? `${cdnUrl}/${chat.createdBy.displayImage}` : "/image/avatar-anonymous.jpg",
                        size: 50
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/pages/Party/PartyChat.tsx",
                        lineNumber: 159,
                        columnNumber: 19
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/components/pages/Party/PartyChat.tsx",
                      lineNumber: 158,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(flex_default, { vertical: true, gap: 10, children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(flex_default, { justify: "space-between", align: "flex-start", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(flex_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { style: { fontWeight: 600 }, children: chat.createdBy.ign ? chat.createdBy.ign : "system" }, void 0, false, {
                          fileName: "app/components/pages/Party/PartyChat.tsx",
                          lineNumber: 172,
                          columnNumber: 25
                        }, this) }, void 0, false, {
                          fileName: "app/components/pages/Party/PartyChat.tsx",
                          lineNumber: 171,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(flex_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                          Text,
                          {
                            style: {
                              opacity: 0.5,
                              whiteSpace: "nowrap"
                            },
                            children: (0, import_dayjs.default)(chat.createdAt).isToday() ? (0, import_dayjs.default)(chat.createdAt).format("HH:mm") : (0, import_dayjs.default)(chat.createdAt).format("DD MMM HH:mm")
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/components/pages/Party/PartyChat.tsx",
                            lineNumber: 177,
                            columnNumber: 25
                          },
                          this
                        ) }, void 0, false, {
                          fileName: "app/components/pages/Party/PartyChat.tsx",
                          lineNumber: 176,
                          columnNumber: 23
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/components/pages/Party/PartyChat.tsx",
                        lineNumber: 170,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { children: getChatMessage(chat.message) }, void 0, false, {
                        fileName: "app/components/pages/Party/PartyChat.tsx",
                        lineNumber: 189,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/components/pages/Party/PartyChat.tsx",
                      lineNumber: 169,
                      columnNumber: 19
                    }, this) }, void 0, false, {
                      fileName: "app/components/pages/Party/PartyChat.tsx",
                      lineNumber: 168,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/pages/Party/PartyChat.tsx",
                  lineNumber: 153,
                  columnNumber: 15
                },
                this
              )
            },
            `chat-${index}`,
            false,
            {
              fileName: "app/components/pages/Party/PartyChat.tsx",
              lineNumber: 146,
              columnNumber: 13
            },
            this
          )) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(empty_default, { description: t("no chat") }, void 0, false, {
            fileName: "app/components/pages/Party/PartyChat.tsx",
            lineNumber: 196,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_scroll.Element, { name: "last-chat" }, void 0, false, {
            fileName: "app/components/pages/Party/PartyChat.tsx",
            lineNumber: 198,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/pages/Party/PartyChat.tsx",
        lineNumber: 136,
        columnNumber: 7
      },
      this
    ),
    user && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      flex_default,
      {
        gap: 10,
        align: "center",
        style: { padding: 15, borderTop: `1px solid ${token.colorBorder}` },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            avatar_default,
            {
              src: user.displayImage ? `${cdnUrl}/${user.displayImage}` : "/image/placeholder.png",
              size: 50
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Party/PartyChat.tsx",
              lineNumber: 206,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            form_default,
            {
              form,
              onFinish: handleSendMessage,
              style: { width: "100%" },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                form_default.Item,
                {
                  name: "message",
                  noStyle: true,
                  rules: [
                    {
                      required: true,
                      message: `${t("please type message")}`
                    }
                  ],
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                    input_default,
                    {
                      autoFocus: true,
                      placeholder: t("type message here"),
                      autoComplete: "off",
                      suffix: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                        TiltButton,
                        {
                          color: "primary",
                          style: { paddingBlock: 5 },
                          onClick: form.submit,
                          children: t("send")
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/components/pages/Party/PartyChat.tsx",
                          lineNumber: 235,
                          columnNumber: 19
                        },
                        this
                      )
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/Party/PartyChat.tsx",
                      lineNumber: 230,
                      columnNumber: 15
                    },
                    this
                  )
                },
                "message",
                false,
                {
                  fileName: "app/components/pages/Party/PartyChat.tsx",
                  lineNumber: 219,
                  columnNumber: 13
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Party/PartyChat.tsx",
              lineNumber: 214,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/pages/Party/PartyChat.tsx",
        lineNumber: 201,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/pages/Party/PartyChat.tsx",
    lineNumber: 135,
    columnNumber: 5
  }, this);
}

// app/components/pages/Party/PartyDetail.tsx
var import_react7 = __toESM(require_react());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var { Text: Text2 } = typography_default;
function PartyDetail(props) {
  const { fetcher, hadParty, party, closePartyDetail } = props;
  const { t } = useTranslation();
  const { user } = (0, import_react7.useContext)(AuthContext);
  const matches = useMatches();
  const { websocketUrl } = matches[0].data;
  const [currentParty, setCurrentParty] = (0, import_react7.useState)(party);
  const [modal, modalContextHolder] = modal_default.useModal();
  const [currentTabIndex, setCurrentTabIndex] = (0, import_react7.useState)(0);
  const [tabs, setTabs] = (0, import_react7.useState)([]);
  const infoTab = {
    label: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(image_default, { src: "/image/game-icon.svg", width: 30, preview: false }, void 0, false, {
      fileName: "app/components/pages/Party/PartyDetail.tsx",
      lineNumber: 40,
      columnNumber: 12
    }, this),
    slug: "info"
  };
  const membersTab = {
    label: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(image_default, { src: "/image/user-icon.svg", width: 30, preview: false }, void 0, false, {
      fileName: "app/components/pages/Party/PartyDetail.tsx",
      lineNumber: 44,
      columnNumber: 12
    }, this),
    slug: "members"
  };
  const chatTab = {
    label: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(image_default, { src: "/image/chat-icon.svg", width: 30, preview: false }, void 0, false, {
      fileName: "app/components/pages/Party/PartyDetail.tsx",
      lineNumber: 48,
      columnNumber: 12
    }, this),
    slug: "chat"
  };
  const isOwner = (0, import_react7.useCallback)(
    (partyData) => {
      const master = partyData.partyMembers.find(
        (member) => member.isPartyMaster === true
      );
      return user ? master.userId === user.id : false;
    },
    [user]
  );
  const inTheTeam = (0, import_react7.useCallback)(
    (partyData) => {
      return user && partyData.partyMembers && partyData.partyMembers.find((m) => m.userId === user.id) ? true : false;
    },
    [user]
  );
  const handleLeaveParty = (0, import_react7.useCallback)(() => {
    modal.confirm({
      title: `${t(`are you sure to leave the party`)}?`,
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ExclamationCircleFilled_default, {}, void 0, false, {
        fileName: "app/components/pages/Party/PartyDetail.tsx",
        lineNumber: 76,
        columnNumber: 13
      }, this),
      okText: t("confirm"),
      okType: "danger",
      cancelText: t("cancel"),
      maskClosable: true,
      onOk() {
        fetcher.submit(
          { id: party.id, gameId: party.gameId },
          {
            method: "post",
            action: `/resources/leave-party`
          }
        );
      }
    });
  }, [fetcher, party]);
  (0, import_react7.useEffect)(() => {
    if (fetcher && fetcher.data && fetcher.state === "idle") {
      if (fetcher.data.success && (fetcher.data.success === "update-party" || fetcher.data.success === "boost-party" || fetcher.data.success === "create-party-member" || fetcher.data.success === "update-party-member" || fetcher.data.success === "delete-party-member")) {
        if (fetcher.data.party) {
          setCurrentParty(fetcher.data.party);
        }
        resetFetcher(fetcher);
      }
    }
  }, [fetcher]);
  (0, import_react7.useEffect)(() => {
    setCurrentParty(party);
    let newTabs = [];
    if (isOwner(party)) {
      newTabs = [infoTab, membersTab, chatTab];
    } else {
      newTabs = [membersTab];
      if (inTheTeam(party)) {
        newTabs.push(chatTab);
      }
    }
    setTabs(newTabs);
    setCurrentTabIndex(0);
  }, [party]);
  (0, import_react7.useEffect)(() => {
    setCurrentTabIndex(0);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { padding: 10 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(flex_default, { gap: 20, vertical: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PartyDetailHeader, { data: currentParty }, void 0, false, {
        fileName: "app/components/pages/Party/PartyDetail.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(flex_default, { children: tabs.length > 0 && tabs.map((tab, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        TiltButton,
        {
          color: index === currentTabIndex ? "primary" : "transparent",
          style: { width: `${100 / tabs.length}%` },
          noBorder: true,
          onClick: () => setCurrentTabIndex(index),
          children: tab.label
        },
        tab.slug,
        false,
        {
          fileName: "app/components/pages/Party/PartyDetail.tsx",
          lineNumber: 137,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "app/components/pages/Party/PartyDetail.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(divider_default, { style: { margin: 0 } }, void 0, false, {
        fileName: "app/components/pages/Party/PartyDetail.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, this),
      tabs.length && tabs[currentTabIndex].slug === "info" ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PartyDetailForm, { fetcher, party: currentParty }, void 0, false, {
        fileName: "app/components/pages/Party/PartyDetail.tsx",
        lineNumber: 150,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, {}, void 0, false, {
        fileName: "app/components/pages/Party/PartyDetail.tsx",
        lineNumber: 152,
        columnNumber: 11
      }, this),
      tabs.length && tabs[currentTabIndex].slug === "members" ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(flex_default, { gap: 20, vertical: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PartyMemberLists, { fetcher, party: currentParty }, void 0, false, {
          fileName: "app/components/pages/Party/PartyDetail.tsx",
          lineNumber: 156,
          columnNumber: 13
        }, this),
        isOwner(currentParty) && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          PartyRequests,
          {
            fetcher,
            party: currentParty,
            accepted: (party2) => setCurrentParty(party2)
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Party/PartyDetail.tsx",
            lineNumber: 158,
            columnNumber: 15
          },
          this
        ),
        !hadParty && !inTheTeam(currentParty) && currentParty.isClosed === false && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PartyRequestForm, { fetcher, party: currentParty }, void 0, false, {
          fileName: "app/components/pages/Party/PartyDetail.tsx",
          lineNumber: 167,
          columnNumber: 17
        }, this),
        inTheTeam(currentParty) && currentParty.discordUrl && currentParty.discordUrl.length && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "a",
          {
            href: currentParty.discordUrl,
            target: "_blank",
            rel: "noreferrer",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TiltButton, { color: "primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(space_default, { size: 10, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(avatar_default, { src: "/image/social/discord.png", size: 25 }, void 0, false, {
                fileName: "app/components/pages/Party/PartyDetail.tsx",
                lineNumber: 179,
                columnNumber: 23
              }, this),
              "Discord"
            ] }, void 0, true, {
              fileName: "app/components/pages/Party/PartyDetail.tsx",
              lineNumber: 178,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/pages/Party/PartyDetail.tsx",
              lineNumber: 177,
              columnNumber: 19
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Party/PartyDetail.tsx",
            lineNumber: 172,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/pages/Party/PartyDetail.tsx",
        lineNumber: 155,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, {}, void 0, false, {
        fileName: "app/components/pages/Party/PartyDetail.tsx",
        lineNumber: 187,
        columnNumber: 11
      }, this),
      tabs.length && tabs[currentTabIndex].slug === "chat" ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        WebsocketContextProvider,
        {
          websocketUrl,
          identifier: user ? user.uuid : null,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            PartyChat,
            {
              fetcher,
              party: currentParty,
              closePartyDetail
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Party/PartyDetail.tsx",
              lineNumber: 194,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Party/PartyDetail.tsx",
          lineNumber: 190,
          columnNumber: 11
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, {}, void 0, false, {
        fileName: "app/components/pages/Party/PartyDetail.tsx",
        lineNumber: 201,
        columnNumber: 11
      }, this),
      inTheTeam(currentParty) && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        flex_default,
        {
          justify: "center",
          style: { marginTop: 15, cursor: "pointer" },
          onClick: handleLeaveParty,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text2, { type: "danger", children: [
            `${t("leave party")}  `,
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LogoutOutlined_default, { type: "danger" }, void 0, false, {
              fileName: "app/components/pages/Party/PartyDetail.tsx",
              lineNumber: 211,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/Party/PartyDetail.tsx",
            lineNumber: 209,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Party/PartyDetail.tsx",
          lineNumber: 204,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/pages/Party/PartyDetail.tsx",
      lineNumber: 132,
      columnNumber: 7
    }, this),
    modalContextHolder
  ] }, void 0, true, {
    fileName: "app/components/pages/Party/PartyDetail.tsx",
    lineNumber: 131,
    columnNumber: 5
  }, this);
}

// app/components/pages/Party/PartyDetailForm.tsx
var import_dayjs2 = __toESM(require_dayjs_min());
var import_react9 = __toESM(require_react());
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var { Text: Text3 } = typography_default;
var { Countdown } = statistic_default;
function PartyDetailForm(props) {
  const { fetcher, party } = props;
  const { t } = useTranslation();
  const { closePartyModal } = (0, import_react9.useContext)(PartyContext);
  const [loading, setLoading] = (0, import_react9.useState)(true);
  const [lastBoost, setLastBoost] = (0, import_react9.useState)(party.lastBoostAt);
  const [enableBoost, setEnableBoost] = (0, import_react9.useState)(
    !party.lastBoostAt || party.lastBoostAt && (0, import_dayjs2.default)().diff(party.lastBoostAt, "minute") > 4
  );
  const [form] = form_default.useForm();
  const initValues = {
    name: party.name,
    discordUrl: party.discordUrl,
    isPrivate: party.isPrivate,
    isActive: !party.isClosed
  };
  const handleCountDownFinish = () => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
      clearTimeout(timeout);
    }, 100);
    setEnableBoost(true);
  };
  const handleSubmit = (0, import_react9.useCallback)(
    (values) => {
      values = {
        ...values,
        isClosed: !values.isActive
      };
      fetcher.submit(
        {
          id: party.id,
          data: JSON.stringify({ ...values })
        },
        {
          method: "put",
          action: `/resources/update-party`
        }
      );
    },
    [fetcher, party]
  );
  const handleBoostParty = (0, import_react9.useCallback)(() => {
    fetcher.submit(
      { id: party.id },
      {
        method: "post",
        action: `/resources/boost-party`
      }
    );
    setEnableBoost(false);
    setLastBoost((0, import_dayjs2.default)(/* @__PURE__ */ new Date()));
  }, [fetcher, party]);
  (0, import_react9.useEffect)(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
      clearTimeout(timeout);
    }, 100);
    form.resetFields();
  }, [party]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { marginTop: 15 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      PartyInlineAvatar,
      {
        members: party.partyMembers,
        maxPlayers: party.maxPlayers
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/Party/PartyDetailForm.tsx",
        lineNumber: 103,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/pages/Party/PartyDetailForm.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      form_default,
      {
        form,
        initialValues: initValues,
        onFinish: handleSubmit,
        layout: "vertical",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            form_default.Item,
            {
              name: "name",
              rules: [
                {
                  required: true,
                  message: t("please input party name")
                }
              ],
              label: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text3, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("party name") }, void 0, false, {
                fileName: "app/components/pages/Party/PartyDetailForm.tsx",
                lineNumber: 124,
                columnNumber: 13
              }, this),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(input_default, {}, void 0, false, {
                fileName: "app/components/pages/Party/PartyDetailForm.tsx",
                lineNumber: 129,
                columnNumber: 11
              }, this)
            },
            "name",
            false,
            {
              fileName: "app/components/pages/Party/PartyDetailForm.tsx",
              lineNumber: 114,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            form_default.Item,
            {
              name: "discordUrl",
              label: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(space_default, { size: 5, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(avatar_default, { src: "/image/social/discord.png", size: 25 }, void 0, false, {
                  fileName: "app/components/pages/Party/PartyDetailForm.tsx",
                  lineNumber: 136,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text3, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("Discord URL") }, void 0, false, {
                  fileName: "app/components/pages/Party/PartyDetailForm.tsx",
                  lineNumber: 137,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/pages/Party/PartyDetailForm.tsx",
                lineNumber: 135,
                columnNumber: 13
              }, this),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(input_default, {}, void 0, false, {
                fileName: "app/components/pages/Party/PartyDetailForm.tsx",
                lineNumber: 143,
                columnNumber: 11
              }, this)
            },
            "discordUrl",
            false,
            {
              fileName: "app/components/pages/Party/PartyDetailForm.tsx",
              lineNumber: 131,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(flex_default, { gap: 10, align: "baseline", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(form_default.Item, { name: "isPrivate", valuePropName: "checked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(switch_default, {}, void 0, false, {
              fileName: "app/components/pages/Party/PartyDetailForm.tsx",
              lineNumber: 147,
              columnNumber: 13
            }, this) }, "isPrivate", false, {
              fileName: "app/components/pages/Party/PartyDetailForm.tsx",
              lineNumber: 146,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text3, { children: `${t("private party")} ` }, void 0, false, {
              fileName: "app/components/pages/Party/PartyDetailForm.tsx",
              lineNumber: 149,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              tooltip_default,
              {
                placement: "top",
                arrow: false,
                title: t("party owner must approve before joining"),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                  QuestionCircleOutlined_default,
                  {
                    style: { cursor: "pointer", color: "#7a6fee" }
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/Party/PartyDetailForm.tsx",
                    lineNumber: 156,
                    columnNumber: 15
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/components/pages/Party/PartyDetailForm.tsx",
                  lineNumber: 155,
                  columnNumber: 13
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Party/PartyDetailForm.tsx",
                lineNumber: 150,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/pages/Party/PartyDetailForm.tsx",
            lineNumber: 145,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(flex_default, { gap: 10, align: "baseline", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(form_default.Item, { name: "isActive", valuePropName: "checked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(switch_default, {}, void 0, false, {
              fileName: "app/components/pages/Party/PartyDetailForm.tsx",
              lineNumber: 164,
              columnNumber: 13
            }, this) }, "isActive", false, {
              fileName: "app/components/pages/Party/PartyDetailForm.tsx",
              lineNumber: 163,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text3, { children: t("party active") }, void 0, false, {
              fileName: "app/components/pages/Party/PartyDetailForm.tsx",
              lineNumber: 166,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/Party/PartyDetailForm.tsx",
            lineNumber: 162,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(row_default, { gutter: 10, style: { marginTop: 10 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TiltButton, { color: "secondary", onClick: closePartyModal, children: t("cancel") }, void 0, false, {
              fileName: "app/components/pages/Party/PartyDetailForm.tsx",
              lineNumber: 170,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/components/pages/Party/PartyDetailForm.tsx",
              lineNumber: 169,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TiltButton, { color: "primary", onClick: () => form.submit(), children: t("update") }, void 0, false, {
              fileName: "app/components/pages/Party/PartyDetailForm.tsx",
              lineNumber: 175,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/components/pages/Party/PartyDetailForm.tsx",
              lineNumber: 174,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/Party/PartyDetailForm.tsx",
            lineNumber: 168,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/pages/Party/PartyDetailForm.tsx",
        lineNumber: 108,
        columnNumber: 7
      },
      this
    ),
    loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "div",
      {
        style: {
          width: "100%",
          height: 48,
          backgroundColor: "#201d1d",
          transform: "skew(-15deg)",
          borderRadius: 10
        }
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/Party/PartyDetailForm.tsx",
        lineNumber: 182,
        columnNumber: 9
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { position: "relative" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        SwipeButton,
        {
          customCaretWidth: 60,
          caret: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            image_default,
            {
              src: "/image/chevron-right-icon.svg",
              width: 30,
              preview: false
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Party/PartyDetailForm.tsx",
              lineNumber: 196,
              columnNumber: 15
            },
            this
          ),
          mainText: enableBoost ? t("boost party") : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(space_default, { size: 5, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text3, { style: { color: "#ffffff" }, children: t("boost again in") }, void 0, false, {
              fileName: "app/components/pages/Party/PartyDetailForm.tsx",
              lineNumber: 207,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              Countdown,
              {
                value: (0, import_dayjs2.default)(lastBoost).add(5, "minute").toString(),
                format: "m:ss",
                onFinish: handleCountDownFinish,
                valueStyle: {
                  fontSize: "14px",
                  color: "#ffffff"
                }
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Party/PartyDetailForm.tsx",
                lineNumber: 210,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/pages/Party/PartyDetailForm.tsx",
            lineNumber: 206,
            columnNumber: 17
          }, this),
          overlayText: t("party boosted"),
          onSlideDone: enableBoost ? handleBoostParty : void 0
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Party/PartyDetailForm.tsx",
          lineNumber: 193,
          columnNumber: 11
        },
        this
      ),
      !enableBoost ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        OverlayBg,
        {
          style: { zIndex: 1, transform: "skew(-15deg)", borderRadius: 10 }
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Party/PartyDetailForm.tsx",
          lineNumber: 226,
          columnNumber: 13
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, {}, void 0, false, {
        fileName: "app/components/pages/Party/PartyDetailForm.tsx",
        lineNumber: 230,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Party/PartyDetailForm.tsx",
      lineNumber: 192,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Party/PartyDetailForm.tsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
}

// app/components/pages/Party/PartyDetailHeader.tsx
var import_react10 = __toESM(require_react());
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
var { Text: Text4, Title } = typography_default;
function PartyDetailHeader(props) {
  const { data } = props;
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { baseUrl } = (0, import_react10.useContext)(AppContext);
  const { closePartyModal } = (0, import_react10.useContext)(PartyContext);
  const inviteUrl = `${baseUrl}/parties/${data.gameId}?join=${data.id}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(flex_default, { justify: "space-between", align: "flex-start", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(space_default, { size: 15, wrap: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        image_default,
        {
          preview: false,
          src: data.game.mainImageUrl ? `${cdnUrl}/${data.game.mainImageUrl}` : "/image/placeholder.png",
          width: 60
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Party/PartyDetailHeader.tsx",
          lineNumber: 27,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(space_default, { direction: "vertical", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Title, { level: 4, style: { margin: 0 }, children: data.name }, void 0, false, {
          fileName: "app/components/pages/Party/PartyDetailHeader.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(space_default, { wrap: true, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            TiltButton,
            {
              color: "secondary",
              style: { paddingBlock: 3, fontWeight: 400 },
              children: data.mode.name
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Party/PartyDetailHeader.tsx",
              lineNumber: 41,
              columnNumber: 13
            },
            this
          ),
          data.rankOnParties && data.rankOnParties.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(space_default, { size: 3, children: data.rankOnParties.map((rankOnParty, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            tooltip_default,
            {
              placement: "top",
              title: rankOnParty.rank.name,
              arrow: false,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                avatar_default,
                {
                  shape: "square",
                  src: rankOnParty.rank.imageUrl ? `${cdnUrl}/${rankOnParty.rank.imageUrl}` : "/image/placeholder.png",
                  size: 30
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Party/PartyDetailHeader.tsx",
                  lineNumber: 56,
                  columnNumber: 21
                },
                this
              )
            },
            `${data.id}-rank-${index}`,
            false,
            {
              fileName: "app/components/pages/Party/PartyDetailHeader.tsx",
              lineNumber: 50,
              columnNumber: 19
            },
            this
          )) }, void 0, false, {
            fileName: "app/components/pages/Party/PartyDetailHeader.tsx",
            lineNumber: 48,
            columnNumber: 15
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, {}, void 0, false, {
            fileName: "app/components/pages/Party/PartyDetailHeader.tsx",
            lineNumber: 69,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            badge_default,
            {
              status: !data.isClosed ? "success" : "error",
              text: !data.isClosed ? t("active") : t("inactive"),
              style: { fontStyle: "italic" },
              styles: { indicator: { padding: 4 } }
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Party/PartyDetailHeader.tsx",
              lineNumber: 71,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/pages/Party/PartyDetailHeader.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Party/PartyDetailHeader.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Party/PartyDetailHeader.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(space_default, { size: 20, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        ShareDropDown,
        {
          postUrl: inviteUrl,
          copiedMessage: t("party link copied")
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Party/PartyDetailHeader.tsx",
          lineNumber: 81,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        Text4,
        {
          style: { fontSize: 18, cursor: "pointer" },
          onClick: closePartyModal,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CloseOutlined_default, {}, void 0, false, {
            fileName: "app/components/pages/Party/PartyDetailHeader.tsx",
            lineNumber: 89,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Party/PartyDetailHeader.tsx",
          lineNumber: 85,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/pages/Party/PartyDetailHeader.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Party/PartyDetailHeader.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/components/pages/Party/PartyEntry.tsx
var import_react13 = __toESM(require_react());

// app/components/pages/Party/PartyEntryMembers.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
function PartyEntryMembers(props) {
  const matches = useMatches();
  const { t } = useTranslation();
  const { cdnUrl } = matches[0].data;
  const { members, maxPlayers } = props;
  const transformedMembers = transformMembers(members, maxPlayers);
  const handleUserClicked = (uuid) => {
    window.open(`/users/${uuid}`, "_blank");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(flex_default, { gap: 5, style: { width: "100%" }, children: transformedMembers.map((member) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    tooltip_default,
    {
      placement: "top",
      title: member.user ? member.user.displayName : member.status === "availableSlot" ? t("available") : t("reserved"),
      arrow: false,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "div",
        {
          style: {
            display: "flex",
            position: "relative",
            width: "20%",
            borderRadius: 10,
            overflow: "hidden",
            cursor: member.user ? "pointer" : "default"
          },
          onClick: member.user ? () => {
            var _a;
            return handleUserClicked(
              ((_a = member.user) == null ? void 0 : _a.userName) ? member.user.userName : member.user.uuid
            );
          } : void 0,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "div",
            {
              style: {
                width: "100%",
                paddingBottom: "125%",
                transform: "skew(15deg)"
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: 0,
                    left: "-15%",
                    width: "130%",
                    height: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: member.status === "member" ? `url("${cdnUrl}/${member.user.displayImage}")` : member.status === "lockedSlot" ? `url("/image/party-lock-slot.jpg")` : `url("/image/party-available-slot.jpg")`
                  }
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Party/PartyEntryMembers.tsx",
                  lineNumber: 63,
                  columnNumber: 15
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Party/PartyEntryMembers.tsx",
              lineNumber: 56,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Party/PartyEntryMembers.tsx",
          lineNumber: 36,
          columnNumber: 11
        },
        this
      )
    },
    member.id ? member.id : null,
    false,
    {
      fileName: "app/components/pages/Party/PartyEntryMembers.tsx",
      lineNumber: 24,
      columnNumber: 9
    },
    this
  )) }, void 0, false, {
    fileName: "app/components/pages/Party/PartyEntryMembers.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
function transformMembers(members, maxPlayers) {
  const copyMembers = [...members];
  let transformedMembers = [];
  const masterIndex = copyMembers.findIndex(
    (member) => member.isPartyMaster === true
  );
  if (masterIndex !== -1) {
    transformedMembers.push({
      ...copyMembers[masterIndex],
      status: "member"
    });
    copyMembers.splice(masterIndex, 1);
  }
  while (transformedMembers.length < maxPlayers) {
    const memberIndex = copyMembers.findIndex(
      (member) => member.isSlotLocked === false
    );
    if (memberIndex === -1) {
      const lockedIndex = copyMembers.findIndex(
        (member) => member.isSlotLocked === true
      );
      if (lockedIndex !== -1) {
        transformedMembers.push({
          ...copyMembers[lockedIndex],
          status: "lockedSlot"
        });
        copyMembers.splice(lockedIndex, 1);
      } else {
        break;
      }
    } else {
      transformedMembers.push({
        ...copyMembers[memberIndex],
        status: "member"
      });
      copyMembers.splice(memberIndex, 1);
    }
  }
  while (transformedMembers.length < maxPlayers) {
    transformedMembers.push({
      status: "availableSlot",
      id: `availableSlot-${transformedMembers.length}`
    });
  }
  return transformedMembers;
}

// app/components/pages/Party/PartyEntry.tsx
var import_dayjs3 = __toESM(require_dayjs_min());
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
var { Text: Text5, Title: Title2 } = typography_default;
function PartyEntry(props) {
  const { data, onClick } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { baseUrl } = (0, import_react13.useContext)(AppContext);
  const { t } = useTranslation();
  const inviteUrl = `${baseUrl}/parties/${data.gameId}?join=${data.id}`;
  const isOwner = data.isPartyMaster === true;
  const joined = data.status === "joined";
  const handleClick = (0, import_react13.useCallback)(() => {
    onClick(data);
  }, [data]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { style: { paddingInline: 20 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    card_default,
    {
      bordered: false,
      style: {
        transform: "skew(-15deg)",
        filter: "drop-shadow(4px 4px 0px rgba(124, 111, 246, 0.50))"
      },
      bodyStyle: { padding: 15 },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(flex_default, { vertical: true, gap: 20, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(flex_default, { justify: "space-between", align: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(space_default, { size: 10, style: { alignItems: "center" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Title2, { level: 3, style: { margin: 0 }, children: data.name }, void 0, false, {
              fileName: "app/components/pages/Party/PartyEntry.tsx",
              lineNumber: 47,
              columnNumber: 15
            }, this),
            data.rankOnParties && data.rankOnParties.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(space_default, { size: 3, style: { transform: "skew(15deg)" }, children: data.rankOnParties.map((rankOnParty, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              tooltip_default,
              {
                placement: "top",
                title: rankOnParty.rank.name,
                arrow: false,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  avatar_default,
                  {
                    shape: "square",
                    src: `${cdnUrl}/${rankOnParty.rank.imageUrl}`,
                    size: 26
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/Party/PartyEntry.tsx",
                    lineNumber: 59,
                    columnNumber: 23
                  },
                  this
                )
              },
              `${data.id}-rank-${index}-${rankOnParty.id}`,
              false,
              {
                fileName: "app/components/pages/Party/PartyEntry.tsx",
                lineNumber: 53,
                columnNumber: 21
              },
              this
            )) }, void 0, false, {
              fileName: "app/components/pages/Party/PartyEntry.tsx",
              lineNumber: 51,
              columnNumber: 17
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, {}, void 0, false, {
              fileName: "app/components/pages/Party/PartyEntry.tsx",
              lineNumber: 68,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/Party/PartyEntry.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(space_default, { size: 5, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Media, { greaterThan: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Text5, { style: { opacity: 0.6 }, children: (0, import_dayjs3.default)(data.createdAt).format("DD MMM YYYY") }, void 0, false, {
              fileName: "app/components/pages/Party/PartyEntry.tsx",
              lineNumber: 73,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/components/pages/Party/PartyEntry.tsx",
              lineNumber: 72,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              ShareDropDown,
              {
                postUrl: inviteUrl,
                copiedMessage: t("party link copied")
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Party/PartyEntry.tsx",
                lineNumber: 77,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/pages/Party/PartyEntry.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/Party/PartyEntry.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Media, { greaterThan: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(flex_default, { gap: 10, align: "flex-end", children: [
          data.partyMembers && data.partyMembers.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            PartyEntryMembers,
            {
              members: data.partyMembers,
              maxPlayers: data.maxPlayers
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Party/PartyEntry.tsx",
              lineNumber: 86,
              columnNumber: 17
            },
            this
          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, {}, void 0, false, {
            fileName: "app/components/pages/Party/PartyEntry.tsx",
            lineNumber: 91,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            flex_default,
            {
              vertical: true,
              gap: 5,
              wrap: "nowrap",
              style: { width: 140 },
              align: "end",
              children: [
                data.availableSlots > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Text5, { children: `${t("available")} ${data.availableSlots}` }, void 0, false, {
                  fileName: "app/components/pages/Party/PartyEntry.tsx",
                  lineNumber: 101,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(space_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  TiltButton,
                  {
                    color: isOwner ? "secondary-brand" : joined ? "secondary" : "primary",
                    style: { whiteSpace: "nowrap", transform: "skew(15deg)" },
                    onClick: handleClick,
                    children: isOwner ? t("manage") : joined && data.availableSlots > 0 ? t("detail") : data.isPrivate && data.availableSlots > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(space_default, { size: 5, children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(LockOutlined_default, {}, void 0, false, {
                        fileName: "app/components/pages/Party/PartyEntry.tsx",
                        lineNumber: 121,
                        columnNumber: 25
                      }, this),
                      t("request")
                    ] }, void 0, true, {
                      fileName: "app/components/pages/Party/PartyEntry.tsx",
                      lineNumber: 120,
                      columnNumber: 23
                    }, this) : t("join")
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/Party/PartyEntry.tsx",
                    lineNumber: 104,
                    columnNumber: 19
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/components/pages/Party/PartyEntry.tsx",
                  lineNumber: 103,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/pages/Party/PartyEntry.tsx",
              lineNumber: 93,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/pages/Party/PartyEntry.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/pages/Party/PartyEntry.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Media, { at: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(flex_default, { vertical: true, gap: 15, children: [
          data.partyMembers && data.partyMembers.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            PartyEntryMembers,
            {
              members: data.partyMembers,
              maxPlayers: data.maxPlayers
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Party/PartyEntry.tsx",
              lineNumber: 135,
              columnNumber: 17
            },
            this
          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, {}, void 0, false, {
            fileName: "app/components/pages/Party/PartyEntry.tsx",
            lineNumber: 140,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(flex_default, { justify: "space-between", align: "center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Text5, { style: { opacity: 0.6 }, children: (0, import_dayjs3.default)(data.createdAt).format("DD MMM YYYY") }, void 0, false, {
              fileName: "app/components/pages/Party/PartyEntry.tsx",
              lineNumber: 143,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(space_default, { size: 10, children: [
              data.availableSlots > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Text5, { children: `${t("available")} ${data.availableSlots}` }, void 0, false, {
                fileName: "app/components/pages/Party/PartyEntry.tsx",
                lineNumber: 148,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                TiltButton,
                {
                  color: isOwner ? "secondary-brand" : joined ? "secondary" : "primary",
                  style: {
                    paddingBlock: 8,
                    whiteSpace: "nowrap",
                    transform: "skew(15deg)"
                  },
                  onClick: handleClick,
                  children: isOwner ? t("manage") : joined && data.availableSlots > 0 ? t("detail") : data.isPrivate && data.availableSlots > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(space_default, { size: 5, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(LockOutlined_default, {}, void 0, false, {
                      fileName: "app/components/pages/Party/PartyEntry.tsx",
                      lineNumber: 171,
                      columnNumber: 25
                    }, this),
                    t("request")
                  ] }, void 0, true, {
                    fileName: "app/components/pages/Party/PartyEntry.tsx",
                    lineNumber: 170,
                    columnNumber: 23
                  }, this) : t("join")
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Party/PartyEntry.tsx",
                  lineNumber: 150,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/pages/Party/PartyEntry.tsx",
              lineNumber: 146,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/Party/PartyEntry.tsx",
            lineNumber: 142,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/Party/PartyEntry.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/pages/Party/PartyEntry.tsx",
          lineNumber: 132,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Party/PartyEntry.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/pages/Party/PartyEntry.tsx",
      lineNumber: 36,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/pages/Party/PartyEntry.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/components/pages/Party/PartyForm.tsx
var import_react16 = __toESM(require_react());

// app/components/pages/Party/PartyFormInlineAvatar.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
var { useToken: useToken2 } = theme_default;
function PartyFormInlineAvatar(props) {
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { maxPlayers, members, require: require2 } = props;
  const { token } = useToken2();
  const finalMembers = [...members];
  if (require2) {
    for (let index = 0; index < maxPlayers - require2 - members.length && finalMembers.length < maxPlayers; index++) {
      finalMembers.push({ status: "reserved", user: {} });
    }
  }
  if (finalMembers.length < maxPlayers) {
    for (let j = finalMembers.length; j < maxPlayers; j++) {
      finalMembers.push({ status: "pending", user: null });
    }
  }
  const renderAvatar = (member, index) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      badge_default,
      {
        count: index == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          image_default,
          {
            preview: false,
            src: "/image/crowd-icon.png",
            width: 24,
            height: 24,
            wrapperStyle: { position: "absolute", right: 5, top: 5 }
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Party/PartyFormInlineAvatar.tsx",
            lineNumber: 38,
            columnNumber: 13
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, {}, void 0, false, {
          fileName: "app/components/pages/Party/PartyFormInlineAvatar.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          avatar_default,
          {
            src: member.user ? member.user.displayImage ? `${cdnUrl}/${member.user.displayImage}` : `/image/party-lock-thumbnail.jpg` : `/image/party-available-thumbnail.jpg`,
            style: {
              border: `1px solid ${token.colorBorder}`
            },
            size: 50
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Party/PartyFormInlineAvatar.tsx",
            lineNumber: 51,
            columnNumber: 9
          },
          this
        )
      },
      `member-${index}`,
      false,
      {
        fileName: "app/components/pages/Party/PartyFormInlineAvatar.tsx",
        lineNumber: 35,
        columnNumber: 7
      },
      this
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(flex_default, { justify: "center", gap: 10, children: finalMembers.map(
    (member, index) => member.username ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      tooltip_default,
      {
        placement: "top",
        title: member.username,
        arrow: false,
        children: renderAvatar(member, index)
      },
      `member-${index}`,
      false,
      {
        fileName: "app/components/pages/Party/PartyFormInlineAvatar.tsx",
        lineNumber: 72,
        columnNumber: 11
      },
      this
    ) : renderAvatar(member, index)
  ) }, void 0, false, {
    fileName: "app/components/pages/Party/PartyFormInlineAvatar.tsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
}

// app/components/pages/Party/PartyForm.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
var { Text: Text6, Title: Title3 } = typography_default;
var { useToken: useToken3 } = theme_default;
function PartyForm(props) {
  const { fetcher, form, game, games, initialValues, onCancel } = props;
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { token } = useToken3();
  const { user } = (0, import_react16.useContext)(AuthContext);
  let defaultValues = initialValues ? initialValues : void 0;
  let defaultMode = null;
  let ign = "";
  const gameId = game.id;
  const userGame = user && user.userGames && user.userGames.length > 0 ? user.userGames.find((userGame2) => userGame2.gameId === gameId) : null;
  if (userGame) {
    ign = userGame.ign;
  }
  if (game && game.modes) {
    defaultMode = game.modes.find((m) => m.isDefaultMode);
    if (defaultMode) {
      defaultValues = {
        mode: defaultMode.name,
        slots: defaultMode.maxPlayer - 1,
        username: ign
      };
    }
  }
  const [gameModal, setGameModal] = (0, import_react16.useState)(false);
  const [currentSlots, setCurrentSlots] = (0, import_react16.useState)(
    defaultMode ? defaultMode.maxPlayer - 1 : 0
  );
  const [currentMax, setCurrentMax] = (0, import_react16.useState)(
    defaultMode ? defaultValues.maxPlayer : null
  );
  const [selectedGameId, setSelectedGameId] = (0, import_react16.useState)(
    initialValues && initialValues.gameId ? initialValues.gameId : game.id ? game.id : null
  );
  const [selectedGame, setSelectedGame] = (0, import_react16.useState)(
    initialValues && initialValues.gameId ? games.find((g) => g.id == initialValues.gameId) : game ? game : null
  );
  const modalProps = {
    closeIcon: false,
    footer: null,
    modalRender: (modal) => modal
  };
  const openGameModal = () => {
    setGameModal(true);
  };
  const closeGameModal = () => {
    setGameModal(false);
  };
  const handleGameChanged = (gameId2) => {
    const newSelectedGame = games.find((g) => g.id == gameId2);
    const defaultMode2 = newSelectedGame.modes.find((m) => m.isDefaultMode);
    if (defaultMode2) {
      form.setFieldsValue({
        mode: defaultMode2.name,
        slots: defaultMode2.maxPlayer - 1
      });
      setCurrentSlots(defaultMode2.maxPlayer - 1);
      setCurrentMax(defaultMode2.maxPlayer);
    } else {
      form.setFieldsValue({ mode: null, slots: null });
      setCurrentSlots(0);
      setCurrentMax(null);
    }
    setGameModal(false);
    setSelectedGameId(gameId2);
    setSelectedGame(newSelectedGame);
  };
  const handleTiltSelect = (0, import_react16.useCallback)(
    (field, values) => {
      if (field === "mode" && selectedGame) {
        const selectedMode = selectedGame.modes.find(
          (m) => m.name === values
        );
        const newSlots = selectedMode.maxPlayer ? selectedMode.maxPlayer - 1 : 0;
        setCurrentSlots(newSlots);
        form.setFieldValue("slots", newSlots);
        setCurrentMax(selectedMode.maxPlayer ? selectedMode.maxPlayer : null);
      } else if (field === "slots") {
        setCurrentSlots(values);
      }
      form.setFieldValue(field, values);
    },
    [selectedGame]
  );
  const handleSubmit = (0, import_react16.useCallback)(
    (values) => {
      const mode = selectedGame.modes.find(
        (mode2) => mode2.name === values.mode
      );
      if (selectedGameId && mode) {
        const newValues = {
          name: values.name,
          gameId: selectedGameId,
          modeId: mode.id,
          maxPlayers: mode.maxPlayer,
          availableSlots: values.slots,
          discordUrl: values.discordUrl,
          isPrivate: values.isPrivate ? values.isPrivate : false,
          ign: values.username,
          rankIds: values.ranks
        };
        fetcher.submit(
          {
            data: JSON.stringify(newValues)
          },
          {
            method: "post",
            action: `/resources/create-party`
          }
        );
      }
      onCancel();
    },
    [selectedGameId]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { style: { padding: 10 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      form_default,
      {
        form,
        initialValues: defaultValues,
        onFinish: handleSubmit,
        layout: "vertical",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Title3, { level: 4, style: { margin: 0 }, children: t("create party") }, void 0, false, {
            fileName: "app/components/pages/Party/PartyForm.tsx",
            lineNumber: 190,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(divider_default, {}, void 0, false, {
            fileName: "app/components/pages/Party/PartyForm.tsx",
            lineNumber: 193,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(flex_default, { gap: 15, vertical: true, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              PartyFormInlineAvatar,
              {
                members: (initialValues == null ? void 0 : initialValues.members) || [{ status: "active", user }],
                maxPlayers: currentMax ? currentMax : 5,
                require: currentSlots
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Party/PartyForm.tsx",
                lineNumber: 195,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              form_default.Item,
              {
                name: "name",
                rules: [
                  {
                    required: true,
                    message: t("please input party name")
                  }
                ],
                label: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(space_default, { size: 10, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text6, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("party name") }, void 0, false, {
                    fileName: "app/components/pages/Party/PartyForm.tsx",
                    lineNumber: 213,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                    tooltip_default,
                    {
                      placement: "top",
                      arrow: false,
                      title: t("fill in party detail"),
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                        QuestionCircleOutlined_default,
                        {
                          style: { cursor: "pointer", color: "#7a6fee" }
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/components/pages/Party/PartyForm.tsx",
                          lineNumber: 222,
                          columnNumber: 21
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/components/pages/Party/PartyForm.tsx",
                        lineNumber: 221,
                        columnNumber: 19
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/Party/PartyForm.tsx",
                      lineNumber: 216,
                      columnNumber: 17
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "app/components/pages/Party/PartyForm.tsx",
                  lineNumber: 212,
                  columnNumber: 15
                }, this),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(input_default, {}, void 0, false, {
                  fileName: "app/components/pages/Party/PartyForm.tsx",
                  lineNumber: 230,
                  columnNumber: 13
                }, this)
              },
              "name",
              false,
              {
                fileName: "app/components/pages/Party/PartyForm.tsx",
                lineNumber: 202,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(row_default, { gutter: [15, 15], children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(space_default, { children: selectedGame ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                GameCard,
                {
                  avatarStyle: {
                    position: "relative",
                    width: 160,
                    overflow: "hidden",
                    cursor: "pointer",
                    borderRadius: 10,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: selectedGame && selectedGame.mainImageUrl && selectedGame.mainImageUrl !== "-" ? `url("${cdnUrl}/${selectedGame.mainImageUrl}")` : `url("/image/placeholder.png")`
                  },
                  onClick: openGameModal
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Party/PartyForm.tsx",
                  lineNumber: 236,
                  columnNumber: 19
                },
                this
              ) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                card_default,
                {
                  style: {
                    backgroundColor: token.colorBgElevated,
                    textAlign: "center"
                  },
                  bodyStyle: { padding: "30px 10px", cursor: "pointer" },
                  onClick: openGameModal,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(space_default, { direction: "vertical", size: 5, align: "center", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                      image_default,
                      {
                        preview: false,
                        src: "/image/game-icon.svg",
                        width: 30,
                        height: 30
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/pages/Party/PartyForm.tsx",
                        lineNumber: 264,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text6, { children: t("select game") }, void 0, false, {
                      fileName: "app/components/pages/Party/PartyForm.tsx",
                      lineNumber: 270,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/components/pages/Party/PartyForm.tsx",
                    lineNumber: 263,
                    columnNumber: 21
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Party/PartyForm.tsx",
                  lineNumber: 255,
                  columnNumber: 19
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/pages/Party/PartyForm.tsx",
                lineNumber: 234,
                columnNumber: 15
              }, this) }, void 0, false, {
                fileName: "app/components/pages/Party/PartyForm.tsx",
                lineNumber: 233,
                columnNumber: 13
              }, this),
              selectedGame && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                form_default.Item,
                {
                  name: "username",
                  rules: [
                    {
                      required: true,
                      message: t("please input game username")
                    }
                  ],
                  label: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text6, { style: { fontWeight: 600, fontSize: "inherit" }, children: `${selectedGame.name} ${t("username")}` }, void 0, false, {
                    fileName: "app/components/pages/Party/PartyForm.tsx",
                    lineNumber: 288,
                    columnNumber: 21
                  }, this),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(input_default, {}, void 0, false, {
                    fileName: "app/components/pages/Party/PartyForm.tsx",
                    lineNumber: 293,
                    columnNumber: 19
                  }, this)
                },
                "username",
                false,
                {
                  fileName: "app/components/pages/Party/PartyForm.tsx",
                  lineNumber: 278,
                  columnNumber: 17
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/pages/Party/PartyForm.tsx",
                lineNumber: 277,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/pages/Party/PartyForm.tsx",
              lineNumber: 232,
              columnNumber: 11
            }, this),
            selectedGame && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                form_default.Item,
                {
                  name: "mode",
                  rules: [
                    {
                      required: true,
                      message: t("please select at least 1 mode")
                    }
                  ],
                  label: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text6, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("mode") }, void 0, false, {
                    fileName: "app/components/pages/Party/PartyForm.tsx",
                    lineNumber: 310,
                    columnNumber: 19
                  }, this),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                    TiltCheck,
                    {
                      fieldName: "mode",
                      labelKey: "name",
                      labelValue: "name",
                      options: selectedGame.modes ? selectedGame.modes : [],
                      onSelect: handleTiltSelect,
                      initialValues: form.getFieldValue("mode") || defaultValues.mode
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/Party/PartyForm.tsx",
                      lineNumber: 315,
                      columnNumber: 17
                    },
                    this
                  )
                },
                "mode",
                false,
                {
                  fileName: "app/components/pages/Party/PartyForm.tsx",
                  lineNumber: 300,
                  columnNumber: 15
                },
                this
              ),
              (form.getFieldValue("mode") || defaultValues.mode) && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                form_default.Item,
                {
                  name: "slots",
                  rules: [
                    {
                      required: true,
                      message: t("please select slots")
                    }
                  ],
                  label: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text6, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("required slots") }, void 0, false, {
                    fileName: "app/components/pages/Party/PartyForm.tsx",
                    lineNumber: 337,
                    columnNumber: 21
                  }, this),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                    TiltCheck,
                    {
                      fieldName: "slots",
                      labelKey: "label",
                      labelValue: "value",
                      options: Array(currentMax ? currentMax - 1 : 4).fill("").map((_, index) => ({
                        label: index + 1,
                        value: index + 1
                      })),
                      onSelect: handleTiltSelect,
                      initialValues: form.getFieldValue("slots") || defaultValues.slots
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/Party/PartyForm.tsx",
                      lineNumber: 342,
                      columnNumber: 19
                    },
                    this
                  )
                },
                "slots",
                false,
                {
                  fileName: "app/components/pages/Party/PartyForm.tsx",
                  lineNumber: 327,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                form_default.Item,
                {
                  name: "ranks",
                  label: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(space_default, { size: 10, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text6, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("ranks") }, void 0, false, {
                      fileName: "app/components/pages/Party/PartyForm.tsx",
                      lineNumber: 364,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                      tooltip_default,
                      {
                        placement: "top",
                        arrow: false,
                        title: t("select the preferred ranks"),
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                          QuestionCircleOutlined_default,
                          {
                            style: { cursor: "pointer", color: "#7a6fee" }
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/components/pages/Party/PartyForm.tsx",
                            lineNumber: 373,
                            columnNumber: 25
                          },
                          this
                        ) }, void 0, false, {
                          fileName: "app/components/pages/Party/PartyForm.tsx",
                          lineNumber: 372,
                          columnNumber: 23
                        }, this)
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/pages/Party/PartyForm.tsx",
                        lineNumber: 367,
                        columnNumber: 21
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "app/components/pages/Party/PartyForm.tsx",
                    lineNumber: 363,
                    columnNumber: 19
                  }, this),
                  rules: [
                    () => ({
                      validator(_, value) {
                        if (!value) {
                          return Promise.resolve();
                        } else {
                          if (value.length > 3) {
                            form.setFieldValue("ranks", value.slice(0, 3));
                          }
                        }
                        return Promise.resolve();
                      }
                    })
                  ],
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                    select_default,
                    {
                      mode: "multiple",
                      style: { width: "100%" },
                      placeholder: t("select ranks"),
                      options: selectedGame.ranks ? selectedGame.ranks.map((rank) => ({
                        label: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(space_default, { size: 5, children: [
                          rank.imageUrl ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                            avatar_default,
                            {
                              src: `${cdnUrl}/${rank.imageUrl}`,
                              size: 20,
                              shape: "square"
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/components/pages/Party/PartyForm.tsx",
                              lineNumber: 405,
                              columnNumber: 33
                            },
                            this
                          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, {}, void 0, false, {
                            fileName: "app/components/pages/Party/PartyForm.tsx",
                            lineNumber: 411,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text6, { style: { color: "inherit" }, children: rank.name }, void 0, false, {
                            fileName: "app/components/pages/Party/PartyForm.tsx",
                            lineNumber: 413,
                            columnNumber: 31
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/components/pages/Party/PartyForm.tsx",
                          lineNumber: 403,
                          columnNumber: 29
                        }, this),
                        value: rank.id
                      })) : []
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/Party/PartyForm.tsx",
                      lineNumber: 395,
                      columnNumber: 17
                    },
                    this
                  )
                },
                "ranks",
                false,
                {
                  fileName: "app/components/pages/Party/PartyForm.tsx",
                  lineNumber: 359,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/pages/Party/PartyForm.tsx",
              lineNumber: 299,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              form_default.Item,
              {
                name: "discordUrl",
                label: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(space_default, { size: 5, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(avatar_default, { src: "/image/social/discord.png", size: 25 }, void 0, false, {
                    fileName: "app/components/pages/Party/PartyForm.tsx",
                    lineNumber: 431,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text6, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("Discord URL") }, void 0, false, {
                    fileName: "app/components/pages/Party/PartyForm.tsx",
                    lineNumber: 432,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/pages/Party/PartyForm.tsx",
                  lineNumber: 430,
                  columnNumber: 15
                }, this),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(input_default, {}, void 0, false, {
                  fileName: "app/components/pages/Party/PartyForm.tsx",
                  lineNumber: 438,
                  columnNumber: 13
                }, this)
              },
              "discordUrl",
              false,
              {
                fileName: "app/components/pages/Party/PartyForm.tsx",
                lineNumber: 426,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(space_default, { size: 10, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                form_default.Item,
                {
                  name: "isPrivate",
                  valuePropName: "checked",
                  noStyle: true,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(switch_default, {}, void 0, false, {
                    fileName: "app/components/pages/Party/PartyForm.tsx",
                    lineNumber: 447,
                    columnNumber: 15
                  }, this)
                },
                "isPrivate",
                false,
                {
                  fileName: "app/components/pages/Party/PartyForm.tsx",
                  lineNumber: 441,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text6, { children: t("private party") }, void 0, false, {
                fileName: "app/components/pages/Party/PartyForm.tsx",
                lineNumber: 449,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                tooltip_default,
                {
                  placement: "top",
                  arrow: false,
                  title: t("party owner must approve before joining"),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                    QuestionCircleOutlined_default,
                    {
                      style: { cursor: "pointer", color: "#7a6fee" }
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/Party/PartyForm.tsx",
                      lineNumber: 456,
                      columnNumber: 17
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/components/pages/Party/PartyForm.tsx",
                    lineNumber: 455,
                    columnNumber: 15
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Party/PartyForm.tsx",
                  lineNumber: 450,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/pages/Party/PartyForm.tsx",
              lineNumber: 440,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/Party/PartyForm.tsx",
            lineNumber: 194,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(row_default, { gutter: 10, style: { marginTop: 30 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(TiltButton, { color: "secondary", onClick: onCancel, children: t("cancel") }, void 0, false, {
              fileName: "app/components/pages/Party/PartyForm.tsx",
              lineNumber: 465,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/components/pages/Party/PartyForm.tsx",
              lineNumber: 464,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(TiltButton, { color: "primary", onClick: () => form.submit(), children: t("create party") }, void 0, false, {
              fileName: "app/components/pages/Party/PartyForm.tsx",
              lineNumber: 470,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/components/pages/Party/PartyForm.tsx",
              lineNumber: 469,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/Party/PartyForm.tsx",
            lineNumber: 463,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/pages/Party/PartyForm.tsx",
        lineNumber: 184,
        columnNumber: 7
      },
      this
    ),
    !initialValues ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      modal_default,
      {
        ...modalProps,
        width: 600,
        onCancel: closeGameModal,
        open: gameModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          GameSelect,
          {
            currentGameId: selectedGameId ? selectedGameId : null,
            games,
            onGameSelect: handleGameChanged
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Party/PartyForm.tsx",
            lineNumber: 483,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/Party/PartyForm.tsx",
        lineNumber: 477,
        columnNumber: 9
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, {}, void 0, false, {
      fileName: "app/components/pages/Party/PartyForm.tsx",
      lineNumber: 490,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Party/PartyForm.tsx",
    lineNumber: 183,
    columnNumber: 5
  }, this);
}

// app/components/pages/Party/PartyHero.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
function PartyHero(props) {
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { game, loading, onGameClick } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    flex_default,
    {
      style: {
        position: "relative",
        width: "100%",
        height: 300,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: game && game.bannerImageUrl && game.bannerImageUrl !== "-" ? `url("${cdnUrl}/${game.bannerImageUrl}")` : `url("/image/placeholder.png")`
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(OverlayBg, {}, void 0, false, {
          fileName: "app/components/pages/Party/PartyHero.tsx",
          lineNumber: 30,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          flex_default,
          {
            style: {
              position: "relative",
              width: "100%",
              maxWidth: 1440,
              paddingInline: "3.5%",
              marginInline: "auto"
            },
            children: loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(skeleton_default, { active: true }, void 0, false, {
              fileName: "app/components/pages/Party/PartyHero.tsx",
              lineNumber: 41,
              columnNumber: 11
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              flex_default,
              {
                style: {
                  position: "relative",
                  width: "100%",
                  paddingBlock: 20
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                  GameCard,
                  {
                    avatarStyle: {
                      position: "absolute",
                      width: 240,
                      left: 0,
                      bottom: -40,
                      overflow: "hidden",
                      cursor: "pointer",
                      borderRadius: 20,
                      zIndex: 1,
                      boxShadow: "0px 0px 24px 0px rgba(71, 0, 252, 0.50)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundImage: game && game.mainImageUrl && game.mainImageUrl !== "-" ? `url("${cdnUrl}/${game.mainImageUrl}")` : `url("/image/placeholder.png")`
                    },
                    onClick: onGameClick
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/Party/PartyHero.tsx",
                    lineNumber: 50,
                    columnNumber: 13
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Party/PartyHero.tsx",
                lineNumber: 43,
                columnNumber: 11
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Party/PartyHero.tsx",
            lineNumber: 31,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/pages/Party/PartyHero.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    this
  );
}

// app/components/pages/Party/PartyInlineAvatar.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime());
var { useToken: useToken4 } = theme_default;
function PartyInlineAvatar(props) {
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { maxPlayers, members } = props;
  const { token } = useToken4();
  const transformedMembers = transformMembers2(members, maxPlayers);
  const renderAvatar = (member, index) => {
    const avatarUrl = member.status === "member" ? `${cdnUrl}/${member.user.displayImage}` : member.status === "lockedSlot" ? `/image/party-lock-thumbnail.jpg` : `/image/party-available-thumbnail.jpg`;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      badge_default,
      {
        count: index == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          image_default,
          {
            preview: false,
            src: "/image/crowd-icon.png",
            width: 24,
            height: 24,
            wrapperStyle: { position: "absolute", right: 5, top: 5 }
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Party/PartyInlineAvatar.tsx",
            lineNumber: 28,
            columnNumber: 13
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, {}, void 0, false, {
          fileName: "app/components/pages/Party/PartyInlineAvatar.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          avatar_default,
          {
            src: avatarUrl,
            style: {
              border: `1px solid ${token.colorBorder}`
            },
            size: 50
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Party/PartyInlineAvatar.tsx",
            lineNumber: 41,
            columnNumber: 9
          },
          this
        )
      },
      `member-${index}`,
      false,
      {
        fileName: "app/components/pages/Party/PartyInlineAvatar.tsx",
        lineNumber: 25,
        columnNumber: 7
      },
      this
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(flex_default, { justify: "center", gap: 10, children: transformedMembers.map(
    (member, index) => member.user ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      tooltip_default,
      {
        placement: "top",
        title: member.user.username,
        arrow: false,
        children: renderAvatar(member, index)
      },
      `member-${index}`,
      false,
      {
        fileName: "app/components/pages/Party/PartyInlineAvatar.tsx",
        lineNumber: 56,
        columnNumber: 11
      },
      this
    ) : renderAvatar(member, index)
  ) }, void 0, false, {
    fileName: "app/components/pages/Party/PartyInlineAvatar.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
function transformMembers2(members, maxPlayers) {
  const copyMembers = [...members];
  let transformedMembers = [];
  const masterIndex = copyMembers.findIndex(
    (member) => member.isPartyMaster === true
  );
  if (masterIndex !== -1) {
    transformedMembers.push({
      ...copyMembers[masterIndex],
      status: "member"
    });
    copyMembers.splice(masterIndex, 1);
  }
  while (transformedMembers.length < maxPlayers) {
    const memberIndex = copyMembers.findIndex(
      (member) => member.isSlotLocked === false
    );
    if (memberIndex === -1) {
      const lockedIndex = copyMembers.findIndex(
        (member) => member.isSlotLocked === true
      );
      if (lockedIndex !== -1) {
        transformedMembers.push({
          ...copyMembers[lockedIndex],
          status: "lockedSlot"
        });
        copyMembers.splice(lockedIndex, 1);
      } else {
        break;
      }
    } else {
      transformedMembers.push({
        ...copyMembers[memberIndex],
        status: "member"
      });
      copyMembers.splice(memberIndex, 1);
    }
  }
  while (transformedMembers.length < maxPlayers) {
    transformedMembers.push({
      status: "availableSlot",
      id: `availableSlot-${transformedMembers.length}`
    });
  }
  return transformedMembers;
}

// app/components/pages/Party/PartyLists.tsx
var import_dayjs4 = __toESM(require_dayjs_min());
var import_react20 = __toESM(require_react());
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime());
function PartyLists(props) {
  const { data, onEntryClick } = props;
  const { t } = useTranslation();
  const [initialLoading, setInitialLoading] = (0, import_react20.useState)(true);
  const handleEntryClick = (data2) => {
    onEntryClick(data2);
  };
  (0, import_react20.useEffect)(() => {
    setInitialLoading(false);
  }, []);
  let items = [];
  if (data && data.length > 0) {
    items = data.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "li",
      {
        style: { listStyle: "none", padding: 0, margin: "0 0 20px" },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(PartyEntry, { data: item, onClick: handleEntryClick }, void 0, false, {
          fileName: "app/components/pages/Party/PartyLists.tsx",
          lineNumber: 35,
          columnNumber: 9
        }, this)
      },
      `${item.id}-${(0, import_dayjs4.default)(item.lastActivityAt).unix()}`,
      false,
      {
        fileName: "app/components/pages/Party/PartyLists.tsx",
        lineNumber: 31,
        columnNumber: 7
      },
      this
    ));
  }
  return initialLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(skeleton_default, { active: true }, void 0, false, {
    fileName: "app/components/pages/Party/PartyLists.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this) : items.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(flex_default, { vertical: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(QueAnim, { items }, void 0, false, {
    fileName: "app/components/pages/Party/PartyLists.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Party/PartyLists.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(card_default, { style: { borderRadius: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(result_default, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(InboxOutlined_default, {}, void 0, false, {
    fileName: "app/components/pages/Party/PartyLists.tsx",
    lineNumber: 48,
    columnNumber: 21
  }, this), title: t("no party matched") }, void 0, false, {
    fileName: "app/components/pages/Party/PartyLists.tsx",
    lineNumber: 48,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Party/PartyLists.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

// app/components/pages/Party/PartyIndexHeader.tsx
var import_react21 = __toESM(require_react());
var import_lodash = __toESM(require_lodash());
var import_dayjs5 = __toESM(require_dayjs_min());
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime());
var { useToken: useToken5 } = theme_default;
var { Countdown: Countdown2 } = statistic_default;
var { Text: Text7 } = typography_default;
function PartyIndexHeader(props) {
  const matches = useMatches();
  const { autoRefreshInterval, manualRefreshInterval } = matches[0].data;
  const { children, fetcher, onRefresh, searchParams, submit } = props;
  const [openSearch, setOpenSearch] = (0, import_react21.useState)(false);
  const { scheme } = (0, import_react21.useContext)(AppContext);
  const { t } = useTranslation();
  const { token } = useToken5();
  const [manualDeadline, setManualDeadline] = (0, import_react21.useState)(
    (0, import_dayjs5.default)().add(manualRefreshInterval, "seconds")
  );
  const [manualCountdown, setManualCountdown] = (0, import_react21.useState)(false);
  const [autoDeadline, setAutoDeadline] = (0, import_react21.useState)(
    (0, import_dayjs5.default)().add(autoRefreshInterval, "seconds")
  );
  const [autoCountdown, setAutoCountdown] = (0, import_react21.useState)(true);
  const searchCardStyle = {
    height: 54,
    marginTop: 10,
    borderRadius: 0,
    boxShadow: "none",
    overflow: "visible",
    zIndex: 1
  };
  const searchCardBodyStyle = {
    padding: 5,
    backgroundColor: "inherit",
    borderRadius: 10,
    boxShadow: scheme === "dark" ? "0px 4px 15px -5px rgba(255,255,255,0.75)" : "0px 4px 15px -5px rgba(0,0,0,0.75)",
    overflow: "hidden"
  };
  const handleOpenSearch = () => {
    setOpenSearch(true);
  };
  const handleCloseSearch = () => {
    setOpenSearch(false);
  };
  const handleManualCountdownFinish = () => {
    setManualCountdown(false);
  };
  const handleAutoCountdownFinish = () => {
    setAutoCountdown(false);
    const timeout = setTimeout(() => {
      handleAutoRefresh();
      clearTimeout(timeout);
    }, 300);
  };
  const handleManualRefresh = () => {
    setManualCountdown(true);
    setManualDeadline((0, import_dayjs5.default)().add(manualRefreshInterval, "seconds"));
    setAutoDeadline((0, import_dayjs5.default)().add(autoRefreshInterval, "seconds"));
    onRefresh();
  };
  const handleAutoRefresh = () => {
    setAutoCountdown(true);
    setAutoDeadline((0, import_dayjs5.default)().add(autoRefreshInterval, "seconds"));
    onRefresh();
  };
  const handleSearch = (0, import_react21.useCallback)(
    (e) => {
      const searchString = e.target.value;
      let newSearchParams = { ...searchParams };
      if (searchString.length > 0) {
        newSearchParams.q = searchString;
        submit(
          (0, import_lodash.omitBy)(newSearchParams, (v) => (0, import_lodash.isNil)(v) && (0, import_lodash.isEmpty)(v)),
          { method: "get", preventScrollReset: true }
        );
      } else {
        delete newSearchParams["q"];
        submit(
          (0, import_lodash.omitBy)(newSearchParams, (v) => (0, import_lodash.isNil)(v) && (0, import_lodash.isEmpty)(v)),
          { method: "get", preventScrollReset: true }
        );
      }
    },
    [fetcher, searchParams, submit]
  );
  const handleDebounceSearch = (0, import_react21.useMemo)(
    () => (0, import_lodash.debounce)(handleSearch, 500),
    [handleSearch]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(row_default, { gutter: [15, 15], wrap: true, style: { alignItems: "center" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(space_default, { children }, void 0, false, {
        fileName: "app/components/pages/Party/PartyIndexHeader.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Party/PartyIndexHeader.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(space_default, { size: 15, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          TiltButton,
          {
            style: {
              opacity: manualCountdown ? 0.5 : 1
            },
            onClick: handleManualRefresh,
            disabled: manualCountdown,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(space_default, { style: { alignItems: "center" }, size: 5, children: [
              t("refresh"),
              manualCountdown && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                Countdown2,
                {
                  value: manualDeadline,
                  onFinish: handleManualCountdownFinish,
                  format: "s",
                  valueStyle: {
                    fontSize: 12,
                    color: "#000"
                  }
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Party/PartyIndexHeader.tsx",
                  lineNumber: 151,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/pages/Party/PartyIndexHeader.tsx",
              lineNumber: 148,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Party/PartyIndexHeader.tsx",
            lineNumber: 141,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Text7, { children: t("refresh in") }, void 0, false, {
          fileName: "app/components/pages/Party/PartyIndexHeader.tsx",
          lineNumber: 163,
          columnNumber: 13
        }, this),
        autoCountdown && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          Countdown2,
          {
            value: autoDeadline,
            onFinish: handleAutoCountdownFinish,
            format: "s",
            valueStyle: {
              fontSize: 12,
              color: "inherit"
            }
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Party/PartyIndexHeader.tsx",
            lineNumber: 165,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Text7, { children: t(`second`) }, void 0, false, {
          fileName: "app/components/pages/Party/PartyIndexHeader.tsx",
          lineNumber: 175,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Text7, { children: openSearch ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          CloseOutlined_default,
          {
            style: { fontSize: 20 },
            onClick: handleCloseSearch
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Party/PartyIndexHeader.tsx",
            lineNumber: 205,
            columnNumber: 17
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Search, { style: { fontSize: 20 }, onClick: handleOpenSearch }, void 0, false, {
          fileName: "app/components/pages/Party/PartyIndexHeader.tsx",
          lineNumber: 210,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/pages/Party/PartyIndexHeader.tsx",
          lineNumber: 203,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Party/PartyIndexHeader.tsx",
        lineNumber: 140,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Party/PartyIndexHeader.tsx",
        lineNumber: 139,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Party/PartyIndexHeader.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    openSearch && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      card_default,
      {
        bordered: false,
        bodyStyle: searchCardBodyStyle,
        style: searchCardStyle,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          input_default,
          {
            autoFocus: true,
            bordered: false,
            prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              Search,
              {
                className: "site-form-item-icon",
                style: { fontSize: 20, paddingRight: 10 }
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Party/PartyIndexHeader.tsx",
                lineNumber: 226,
                columnNumber: 15
              },
              this
            ),
            defaultValue: searchParams && searchParams.q ? searchParams.q : "",
            onChange: handleDebounceSearch
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Party/PartyIndexHeader.tsx",
            lineNumber: 222,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/Party/PartyIndexHeader.tsx",
        lineNumber: 217,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/pages/Party/PartyIndexHeader.tsx",
    lineNumber: 134,
    columnNumber: 5
  }, this);
}

// app/components/pages/Party/PartyMemberEntry.tsx
var import_react24 = __toESM(require_react());
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime());
var { Text: Text8 } = typography_default;
var { useToken: useToken6 } = theme_default;
function PartyMemberEntry(props) {
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { user } = (0, import_react24.useContext)(AuthContext);
  const { editable, fetcher, member, isPartyOwner, partyId, gameId } = props;
  const { t } = useTranslation();
  const { token } = useToken6();
  const [editMode, setEditMode] = (0, import_react24.useState)(false);
  const [modal, modalContextHolder] = modal_default.useModal();
  const [form] = form_default.useForm();
  const openEditMode = () => {
    setEditMode(true);
  };
  const closeEditMode = () => {
    setEditMode(false);
  };
  const handleUpdateMember = (0, import_react24.useCallback)(
    (values) => {
      if (member.status === "availableSlot") {
        fetcher.submit(
          {
            data: JSON.stringify({ ign: values.username }),
            gameId,
            partyId
          },
          {
            method: "post",
            action: `/resources/create-party-member`
          }
        );
      } else {
        fetcher.submit(
          {
            data: JSON.stringify({ ign: values.username, memberId: member.id }),
            gameId,
            partyId
          },
          {
            method: "put",
            action: `/resources/update-party-member`
          }
        );
      }
      setEditMode(false);
    },
    [member, partyId]
  );
  const handleRemove = (0, import_react24.useCallback)(() => {
    modal.confirm({
      title: `${t(`are you sure to delete party member`)}?`,
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(ExclamationCircleFilled_default, {}, void 0, false, {
        fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this),
      okText: t("confirm"),
      okType: "danger",
      cancelText: t("cancel"),
      maskClosable: true,
      onOk() {
        fetcher.submit(
          { memberId: member.id, partyId, gameId },
          {
            method: "delete",
            action: `/resources/delete-party-member`
          }
        );
      }
    });
  }, [member, partyId]);
  const handleClick = (0, import_react24.useCallback)(() => {
    var _a;
    if (member.user && member.user.uuid) {
      window.open(
        `/users/${((_a = member.user) == null ? void 0 : _a.userName) ? member.user.userName : member.user.uuid}`,
        "_blank"
      );
    }
  }, [member]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      row_default,
      {
        gutter: [20, 15],
        style: {
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(col_default, { flex: "none", children: member.status === "availableSlot" ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            avatar_default,
            {
              src: "/image/party-available-thumbnail.jpg",
              style: {
                border: `1px solid ${token.colorBorder}`
              },
              size: 50
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
              lineNumber: 132,
              columnNumber: 13
            },
            this
          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            badge_default,
            {
              count: member.isPartyMaster ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                image_default,
                {
                  preview: false,
                  src: "/image/crowd-icon.png",
                  width: 24,
                  height: 24,
                  wrapperStyle: { position: "absolute", right: 5, top: 5 }
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
                  lineNumber: 143,
                  columnNumber: 19
                },
                this
              ) : isPartyOwner ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                "div",
                {
                  style: {
                    position: "absolute",
                    right: 5,
                    top: 5,
                    display: "flex",
                    backgroundColor: "#c43025",
                    padding: 3,
                    borderRadius: "50%",
                    cursor: "pointer"
                  },
                  onClick: handleRemove,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                    MinusCircleOutlined_default,
                    {
                      style: { fontSize: 12, color: "#fff", strokeWidth: 2 }
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
                      lineNumber: 164,
                      columnNumber: 21
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
                  lineNumber: 151,
                  columnNumber: 19
                },
                this
              ) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, {}, void 0, false, {
                fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
                lineNumber: 169,
                columnNumber: 19
              }, this),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                avatar_default,
                {
                  src: member && member.user && member.user.displayImage ? `${cdnUrl}/${member.user.displayImage}` : "/image/party-lock-thumbnail.jpg",
                  onClick: member.user ? handleClick : void 0,
                  style: {
                    cursor: member.user ? "pointer" : "default",
                    border: `1px solid ${token.colorBorder}`
                  },
                  size: 50
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
                  lineNumber: 173,
                  columnNumber: 15
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
              lineNumber: 140,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
            lineNumber: 130,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(col_default, { flex: "auto", children: editMode ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            form_default,
            {
              form,
              initialValues: {
                username: member && member.user ? member.user.userGames[0].ign : t("Unnamed Player")
              },
              onFinish: handleUpdateMember,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                form_default.Item,
                {
                  name: "username",
                  rules: [
                    {
                      required: true,
                      message: `${t("please input username")}`
                    }
                  ],
                  noStyle: true,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                    input_default,
                    {
                      autoFocus: true,
                      suffix: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(space_default, { size: 10, children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                          CheckOutlined_default,
                          {
                            style: { color: "#18Bd62", cursor: "pointer" },
                            onClick: () => form.submit()
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
                            lineNumber: 216,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                          CloseOutlined_default,
                          {
                            style: { color: "#cf1714", cursor: "pointer" },
                            onClick: closeEditMode
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
                            lineNumber: 220,
                            columnNumber: 23
                          },
                          this
                        )
                      ] }, void 0, true, {
                        fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
                        lineNumber: 215,
                        columnNumber: 21
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
                      lineNumber: 212,
                      columnNumber: 17
                    },
                    this
                  )
                },
                "username",
                false,
                {
                  fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
                  lineNumber: 201,
                  columnNumber: 15
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
              lineNumber: 191,
              columnNumber: 13
            },
            this
          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(flex_default, { justify: "space-between", align: "center", children: [
            member && member.user && editable ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              ToCopyField,
              {
                alertMessage: t("username copied"),
                copyMessage: member.user.userGames[0].ign,
                text: member.user.userGames[0].ign,
                plain: true,
                style: { paddingBlock: 5 }
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
                lineNumber: 232,
                columnNumber: 17
              },
              this
            ) : member && member.user ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Text8, { children: member.user.userGames[0].ign }, void 0, false, {
              fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
              lineNumber: 240,
              columnNumber: 17
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Text8, { style: { opacity: 0.75 }, children: member.isSlotLocked === true ? member.lockedSlotIgn : t("available") }, void 0, false, {
              fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
              lineNumber: 242,
              columnNumber: 17
            }, this),
            member.status === "availableSlot" && isPartyOwner ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(TiltButton, { color: "primary", onClick: openEditMode, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(space_default, { size: 5, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(LockOutlined_default, {}, void 0, false, {
                fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
                lineNumber: 251,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Text8, { children: t("lock") }, void 0, false, {
                fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
                lineNumber: 252,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
              lineNumber: 250,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
              lineNumber: 249,
              columnNumber: 17
            }, this) : user && member && member.userId && user.id === member.userId || member.isSlotLocked && isPartyOwner ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              space_default,
              {
                size: 10,
                onClick: openEditMode,
                style: { cursor: "pointer" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(EditOutlined_default, { style: { color: "#7a6fee" } }, void 0, false, {
                    fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
                    lineNumber: 265,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Text8, { children: t("edit") }, void 0, false, {
                    fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
                    lineNumber: 266,
                    columnNumber: 19
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
                lineNumber: 260,
                columnNumber: 17
              },
              this
            ) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, {}, void 0, false, {
              fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
              lineNumber: 269,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
            lineNumber: 230,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
            lineNumber: 189,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
        lineNumber: 124,
        columnNumber: 7
      },
      this
    ),
    modalContextHolder
  ] }, void 0, true, {
    fileName: "app/components/pages/Party/PartyMemberEntry.tsx",
    lineNumber: 123,
    columnNumber: 5
  }, this);
}

// app/components/pages/Party/PartyMemberLists.tsx
var import_react25 = __toESM(require_react());
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime());
function PartyMemberLists(props) {
  const { fetcher, party } = props;
  const { user } = (0, import_react25.useContext)(AuthContext);
  const master = party.partyMembers.find(
    (member) => member.isPartyMaster === true
  );
  const isOwner = user ? master.userId === user.id : false;
  const editable = user && party.partyMembers && party.partyMembers.find((m) => m.userId === user.id) ? true : false;
  const transformedMembers = transformMembers3(
    party.partyMembers,
    party.maxPlayers
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(flex_default, { vertical: true, gap: 10, children: transformedMembers.map((member) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    PartyMemberEntry,
    {
      editable,
      fetcher,
      member,
      partyId: party.id,
      gameId: party.gameId,
      isPartyOwner: isOwner
    },
    `member-${member.id}`,
    false,
    {
      fileName: "app/components/pages/Party/PartyMemberLists.tsx",
      lineNumber: 33,
      columnNumber: 9
    },
    this
  )) }, void 0, false, {
    fileName: "app/components/pages/Party/PartyMemberLists.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
function transformMembers3(members, maxPlayers) {
  const copyMembers = [...members];
  let transformedMembers = [];
  const masterIndex = copyMembers.findIndex(
    (member) => member.isPartyMaster === true
  );
  if (masterIndex !== -1) {
    transformedMembers.push({
      ...copyMembers[masterIndex],
      status: "member"
    });
    copyMembers.splice(masterIndex, 1);
  }
  while (transformedMembers.length < maxPlayers) {
    const memberIndex = copyMembers.findIndex(
      (member) => member.isSlotLocked === false
    );
    if (memberIndex === -1) {
      const lockedIndex = copyMembers.findIndex(
        (member) => member.isSlotLocked === true
      );
      if (lockedIndex !== -1) {
        transformedMembers.push({
          ...copyMembers[lockedIndex],
          status: "lockedSlot"
        });
        copyMembers.splice(lockedIndex, 1);
      } else {
        break;
      }
    } else {
      transformedMembers.push({
        ...copyMembers[memberIndex],
        status: "member"
      });
      copyMembers.splice(memberIndex, 1);
    }
  }
  while (transformedMembers.length < maxPlayers) {
    transformedMembers.push({
      status: "availableSlot",
      id: `availableSlot-${transformedMembers.length}`
    });
  }
  return transformedMembers;
}

// app/components/pages/Party/PartyRequestEntry.tsx
var import_jsx_dev_runtime18 = __toESM(require_jsx_dev_runtime());
var { Text: Text9 } = typography_default;
function PartyRequestEntry(props) {
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { fetcher, hasDivider, request: request2, partyId, gameId } = props;
  const handleApproveRequest = () => {
    fetcher.submit(
      {
        requestId: request2.id,
        partyId,
        gameId
      },
      {
        method: "post",
        action: `/resources/approve-party-request`
      }
    );
  };
  const handleRejectRequest = () => {
    fetcher.submit(
      {
        requestId: request2.id,
        partyId
      },
      {
        method: "post",
        action: `/resources/reject-party-request`
      }
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      flex_default,
      {
        justify: "space-between",
        align: "center",
        style: { opacity: 1 },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(space_default, { size: 10, style: { alignItems: "center" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
              avatar_default,
              {
                src: request2.user.displayImage ? `${cdnUrl}/${request2.user.displayImage}` : "/image/placeholder.png",
                size: 50
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Party/PartyRequestEntry.tsx",
                lineNumber: 61,
                columnNumber: 11
              },
              this
            ),
            request2.user.userGames && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Text9, { children: request2.user.userGames[0].ign }, void 0, false, {
              fileName: "app/components/pages/Party/PartyRequestEntry.tsx",
              lineNumber: 70,
              columnNumber: 13
            }, this),
            request2.message && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(tooltip_default, { title: request2.message, placement: "top", arrow: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(CommentOutlined_default, { style: { color: "#7a6fee" } }, void 0, false, {
              fileName: "app/components/pages/Party/PartyRequestEntry.tsx",
              lineNumber: 74,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/components/pages/Party/PartyRequestEntry.tsx",
              lineNumber: 73,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/Party/PartyRequestEntry.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(space_default, { size: 10, style: { alignItems: "center" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
              CheckOutlined_default,
              {
                style: { color: "#18Bd62", cursor: "pointer" },
                onClick: handleApproveRequest
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Party/PartyRequestEntry.tsx",
                lineNumber: 79,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
              CloseOutlined_default,
              {
                style: { color: "#cf1714", cursor: "pointer" },
                onClick: handleRejectRequest
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Party/PartyRequestEntry.tsx",
                lineNumber: 83,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/pages/Party/PartyRequestEntry.tsx",
            lineNumber: 78,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/pages/Party/PartyRequestEntry.tsx",
        lineNumber: 54,
        columnNumber: 7
      },
      this
    ),
    hasDivider && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(divider_default, { style: { marginBlock: 5 } }, void 0, false, {
      fileName: "app/components/pages/Party/PartyRequestEntry.tsx",
      lineNumber: 115,
      columnNumber: 22
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Party/PartyRequestEntry.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

// app/components/pages/Party/PartyRequestForm.tsx
var import_react27 = __toESM(require_react());
var import_jsx_dev_runtime19 = __toESM(require_jsx_dev_runtime());
var { Text: Text10, Title: Title4 } = typography_default;
function PartyRequestForm(props) {
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { fetcher, party } = props;
  const { user, openLoginModal } = (0, import_react27.useContext)(AuthContext);
  const { t } = useTranslation();
  const routeLoader = useRouteLoaderData("routes/_app.parties");
  const { hasParty } = routeLoader;
  const [modal, modalContextHolder] = modal_default.useModal();
  const [username, setUsername] = (0, import_react27.useState)("");
  const [message, setMessage] = (0, import_react27.useState)("");
  const [loading, setLoading] = (0, import_react27.useState)(true);
  const [request2, setRequest] = (0, import_react27.useState)(null);
  let ign = "";
  const gameId = party.gameId;
  const userGame = user && user.userGames && user.userGames.length > 0 ? user.userGames.find((userGame2) => userGame2.gameId === gameId) : null;
  if (userGame) {
    ign = userGame.ign;
  }
  const handleUsernameChanged = (e) => {
    setUsername(e.target.value);
  };
  const handleMessageChanged = (e) => {
    setMessage(e.target.value);
  };
  const handleDeleteRequest = (0, import_react27.useCallback)(() => {
    if (request2 && request2.id) {
      modal.confirm({
        title: `${t(`are you sure to delete party request`)}?`,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ExclamationCircleFilled_default, {}, void 0, false, {
          fileName: "app/components/pages/Party/PartyRequestForm.tsx",
          lineNumber: 61,
          columnNumber: 15
        }, this),
        okText: t("confirm"),
        okType: "danger",
        cancelText: t("cancel"),
        maskClosable: true,
        onOk() {
          fetcher.submit(
            { requestId: request2.id, partyId: party.id, gameId: party.gameId },
            {
              method: "delete",
              action: `/resources/delete-party-request`
            }
          );
        }
      });
    }
  }, [party, request2]);
  const handleSubmitRequest = (0, import_react27.useCallback)(() => {
    const values = {
      ign: username,
      message,
      isPrivate: party.isPrivate
    };
    fetcher.submit(
      {
        data: JSON.stringify({ ...values, hasParty }),
        partyId: party.id,
        gameId: party.gameId
      },
      {
        method: "post",
        action: `/resources/create-party-request`
      }
    );
  }, [party, message, username]);
  (0, import_react27.useEffect)(() => {
    setRequest(null);
    setLoading(true);
    setUsername(ign);
    setMessage("");
    fetcher.load(
      `/resources/party-request?partyId=${party.id}&&gameId=${party.gameId}`
    );
  }, [party]);
  (0, import_react27.useEffect)(() => {
    if (fetcher && fetcher.data && fetcher.state === "idle") {
      if (fetcher.data.request && fetcher.data.partyId && `${fetcher.data.partyId}` === `${party.id}`) {
        setLoading(false);
        setRequest(fetcher.data.request);
        setUsername(fetcher.data.request.user.userGames[0].ign);
        setMessage(
          fetcher.data.request.message ? fetcher.data.request.message : ""
        );
      } else if (fetcher.data.success && fetcher.data.success === "delete-party-request") {
        setRequest(null);
      } else if (fetcher.data.success && fetcher.data.success === "join-party") {
        return;
      } else {
        setLoading(false);
      }
    }
  }, [fetcher, party]);
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(skeleton_default, { active: true, paragraph: { rows: 2 } }, void 0, false, {
      fileName: "app/components/pages/Party/PartyRequestForm.tsx",
      lineNumber: 138,
      columnNumber: 12
    }, this);
  }
  if (!user) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TiltButton, { color: "primary", onClick: openLoginModal, children: party.isPrivate ? t("request") : t("join") }, void 0, false, {
      fileName: "app/components/pages/Party/PartyRequestForm.tsx",
      lineNumber: 143,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(flex_default, { vertical: true, gap: 20, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(card_default, { style: { borderRadius: 12 }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Title4, { level: 4, style: { marginTop: 0, marginBottom: 20 }, children: request2 ? t(`party request`) : party.isPrivate ? t("request to join party") : t("confirm game username") }, void 0, false, {
          fileName: "app/components/pages/Party/PartyRequestForm.tsx",
          lineNumber: 152,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(flex_default, { vertical: true, gap: 5, style: { marginBottom: 10 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Title4, { level: 5, style: { margin: 0 }, children: `${party.game.name} ${t("username")}` }, void 0, false, {
            fileName: "app/components/pages/Party/PartyRequestForm.tsx",
            lineNumber: 160,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(row_default, { gutter: 10, wrap: false, style: { alignItems: "center" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              avatar_default,
              {
                size: 50,
                src: user && user.displayImage ? `${cdnUrl}/${user.displayImage}` : "/image/placeholder.png"
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Party/PartyRequestForm.tsx",
                lineNumber: 165,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/pages/Party/PartyRequestForm.tsx",
              lineNumber: 164,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              input_default,
              {
                autoFocus: true,
                status: !username.length ? "error" : void 0,
                onChange: handleUsernameChanged,
                disabled: request2 ? true : false,
                value: username
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Party/PartyRequestForm.tsx",
                lineNumber: 175,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/pages/Party/PartyRequestForm.tsx",
              lineNumber: 174,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/Party/PartyRequestForm.tsx",
            lineNumber: 163,
            columnNumber: 13
          }, this),
          party.isPrivate === true ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(flex_default, { vertical: true, gap: 5, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Title4, { level: 5, style: { margin: 0 }, children: t("request message") }, void 0, false, {
              fileName: "app/components/pages/Party/PartyRequestForm.tsx",
              lineNumber: 186,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              input_default,
              {
                onChange: handleMessageChanged,
                disabled: request2 ? true : false,
                value: message
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Party/PartyRequestForm.tsx",
                lineNumber: 189,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/pages/Party/PartyRequestForm.tsx",
            lineNumber: 185,
            columnNumber: 15
          }, this) : false
        ] }, void 0, true, {
          fileName: "app/components/pages/Party/PartyRequestForm.tsx",
          lineNumber: 159,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Party/PartyRequestForm.tsx",
        lineNumber: 151,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        TiltButton,
        {
          color: request2 || !username.length ? "secondary" : "primary",
          disabled: !username.length,
          onClick: !request2 ? handleSubmitRequest : void 0,
          children: request2 ? t("request sent") : party.isPrivate ? t("request") : t("join")
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Party/PartyRequestForm.tsx",
          lineNumber: 200,
          columnNumber: 9
        },
        this
      ),
      request2 && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        flex_default,
        {
          justify: "center",
          style: { marginTop: 15, cursor: "pointer" },
          onClick: handleDeleteRequest,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Text10, { type: "danger", children: [
            `${t("delete request")}  `,
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(LogoutOutlined_default, { type: "danger" }, void 0, false, {
              fileName: "app/components/pages/Party/PartyRequestForm.tsx",
              lineNumber: 219,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/Party/PartyRequestForm.tsx",
            lineNumber: 217,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Party/PartyRequestForm.tsx",
          lineNumber: 212,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/pages/Party/PartyRequestForm.tsx",
      lineNumber: 150,
      columnNumber: 7
    }, this),
    modalContextHolder
  ] }, void 0, true, {
    fileName: "app/components/pages/Party/PartyRequestForm.tsx",
    lineNumber: 149,
    columnNumber: 5
  }, this);
}

// app/components/pages/Party/PartyRequests.tsx
var import_react29 = __toESM(require_react());
var import_jsx_dev_runtime20 = __toESM(require_jsx_dev_runtime());
var { Title: Title5 } = typography_default;
function PartyRequests(props) {
  const { fetcher, party, accepted } = props;
  const { t } = useTranslation();
  const [loading, setLoading] = (0, import_react29.useState)(true);
  const [requests, setRequests] = (0, import_react29.useState)([]);
  (0, import_react29.useEffect)(() => {
    setLoading(true);
    fetcher.load(
      `/resources/party-requests?partyId=${party.id}&gameId=${party.gameId}`
    );
  }, [party]);
  (0, import_react29.useEffect)(() => {
    if (fetcher && fetcher.data && fetcher.state === "idle") {
      if (fetcher.data.requests && fetcher.data.partyId && `${fetcher.data.partyId}` === `${party.id}`) {
        setLoading(false);
        setRequests(fetcher.data.requests);
      } else if (fetcher.data.success && (fetcher.data.success === "approve-party-request" || fetcher.data.success === "reject-party-request")) {
        setRequests([]);
        setLoading(true);
        if (fetcher.data.party) {
          accepted(fetcher.data.party);
        }
        fetcher.load(
          `/resources/party-requests?partyId=${party.id}&gameId=${party.gameId}`
        );
      }
    }
  }, [fetcher, party]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    card_default,
    {
      bodyStyle: {
        padding: 20,
        maxHeight: 400,
        overflowY: "auto",
        overflowX: "hidden",
        border: "1px solid #dfdfdf"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Title5, { level: 4, style: { marginTop: 0, marginBottom: 20 }, children: t("party requests") }, void 0, false, {
          fileName: "app/components/pages/Party/PartyRequests.tsx",
          lineNumber: 62,
          columnNumber: 7
        }, this),
        loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(skeleton_default, { active: true, title: false }, void 0, false, {
          fileName: "app/components/pages/Party/PartyRequests.tsx",
          lineNumber: 66,
          columnNumber: 9
        }, this) : requests && requests.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(flex_default, { vertical: true, children: requests.map((request2, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          PartyRequestEntry,
          {
            partyId: party.id,
            request: request2,
            fetcher,
            hasDivider: index < requests.length - 1,
            gameId: party.gameId
          },
          `request-${request2.id}`,
          false,
          {
            fileName: "app/components/pages/Party/PartyRequests.tsx",
            lineNumber: 70,
            columnNumber: 13
          },
          this
        )) }, void 0, false, {
          fileName: "app/components/pages/Party/PartyRequests.tsx",
          lineNumber: 68,
          columnNumber: 9
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(empty_default, { description: t("no party request") }, void 0, false, {
          fileName: "app/components/pages/Party/PartyRequests.tsx",
          lineNumber: 81,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/pages/Party/PartyRequests.tsx",
      lineNumber: 53,
      columnNumber: 5
    },
    this
  );
}

// app/components/pages/Party/PartyRules.tsx
var import_react30 = __toESM(require_react());

// app/components/common/HowToCreateParty.tsx
var import_jsx_dev_runtime21 = __toESM(require_jsx_dev_runtime());
var { Text: Text11, Title: Title6 } = typography_default;
var HowToCraeteParty = (props) => {
  const { t } = useTranslation();
  const { onCancel } = props;
  const handleAcceptAgreemnet = () => {
    onCancel();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(flex_default, { vertical: true, gap: 20, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Title6, { level: 3, style: { margin: 0 }, children: t("How to Create a Party") }, void 0, false, {
      fileName: "app/components/common/HowToCreateParty.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(list_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(list_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Text11, { children: t("1. Navigate to the Party Matching menu.") }, void 0, false, {
        fileName: "app/components/common/HowToCreateParty.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/HowToCreateParty.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(list_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Text11, { children: t("2. Click the \u201CCreate Party\u201D button.") }, void 0, false, {
        fileName: "app/components/common/HowToCreateParty.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/HowToCreateParty.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(list_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Text11, { children: t(
        "3. Set the party name, enter your in-game character name, choose the play mode, select the desired number of players for the party, pick the rank range for participants, and input the communication channel link for party members."
      ) }, void 0, false, {
        fileName: "app/components/common/HowToCreateParty.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/HowToCreateParty.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(list_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Text11, { children: t(
        "4. Optionally, you can set the party to private if the party creator wants to filter incoming players."
      ) }, void 0, false, {
        fileName: "app/components/common/HowToCreateParty.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/HowToCreateParty.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/HowToCreateParty.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(flex_default, { justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(TiltButton, { color: "primary", onClick: handleAcceptAgreemnet, children: t("close") }, void 0, false, {
      fileName: "app/components/common/HowToCreateParty.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/common/HowToCreateParty.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/HowToCreateParty.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
};

// app/components/common/HowToJoinParty.tsx
var import_jsx_dev_runtime22 = __toESM(require_jsx_dev_runtime());
var { Text: Text12, Title: Title7 } = typography_default;
var HowToJoinParty = (props) => {
  const { t } = useTranslation();
  const { onCancel } = props;
  const handleAcceptAgreemnet = () => {
    onCancel();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(flex_default, { vertical: true, gap: 20, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Title7, { level: 3, style: { margin: 0 }, children: t("How to Join a Party") }, void 0, false, {
      fileName: "app/components/common/HowToJoinParty.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(list_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(list_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Text12, { children: t("1. Click the \u201CJoin\u201D button on the desired party.") }, void 0, false, {
        fileName: "app/components/common/HowToJoinParty.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/HowToJoinParty.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(list_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Text12, { children: t("2. Enter your in-game character name.") }, void 0, false, {
        fileName: "app/components/common/HowToJoinParty.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/HowToJoinParty.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/HowToJoinParty.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(flex_default, { justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(TiltButton, { color: "primary", onClick: handleAcceptAgreemnet, children: t("close") }, void 0, false, {
      fileName: "app/components/common/HowToJoinParty.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/common/HowToJoinParty.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/HowToJoinParty.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
};

// app/components/common/HowToStartGame.tsx
var import_jsx_dev_runtime23 = __toESM(require_jsx_dev_runtime());
var { Text: Text13, Title: Title8 } = typography_default;
var HowToStartGame = (props) => {
  const { t } = useTranslation();
  const { onCancel } = props;
  const handleAcceptAgreemnet = () => {
    onCancel();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(flex_default, { vertical: true, gap: 20, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Title8, { level: 3, style: { margin: 0 }, children: t("how to start playing") }, void 0, false, {
      fileName: "app/components/common/HowToStartGame.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(list_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(list_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Text13, { children: t(
        "1. When all members join the party, the party status changes to offline."
      ) }, void 0, false, {
        fileName: "app/components/common/HowToStartGame.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/HowToStartGame.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(list_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Text13, { children: t(
        "2. Members can coordinate and schedule gameplay using the contact information provided in the party details."
      ) }, void 0, false, {
        fileName: "app/components/common/HowToStartGame.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/HowToStartGame.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(list_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Text13, { children: t(
        "3. Players can then gather and start playing games together using the formed party."
      ) }, void 0, false, {
        fileName: "app/components/common/HowToStartGame.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/HowToStartGame.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/HowToStartGame.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(flex_default, { justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(TiltButton, { color: "primary", onClick: handleAcceptAgreemnet, children: t("close") }, void 0, false, {
      fileName: "app/components/common/HowToStartGame.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/common/HowToStartGame.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/HowToStartGame.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
};

// app/components/pages/Party/PartyRules.tsx
var import_jsx_dev_runtime24 = __toESM(require_jsx_dev_runtime());
var { Title: Title9 } = typography_default;
var { useToken: useToken7 } = theme_default;
function PartyRules(props) {
  const { menus, mobileStyle, title } = props;
  const { t } = useTranslation();
  const { scheme } = (0, import_react30.useContext)(AppContext);
  const { token } = useToken7();
  const [createPartyModal, setcreatePartyModal] = (0, import_react30.useState)(false);
  const [joinPartyModal, setJoinPartyModal] = (0, import_react30.useState)(false);
  const [startGameModal, setStartGameModal] = (0, import_react30.useState)(false);
  const modalProps = {
    closeIcon: false,
    footer: null,
    modalRender: (modal) => modal,
    styles: {
      body: { padding: "20px 30px" }
    }
  };
  const openCreateParty = () => {
    setcreatePartyModal(true);
  };
  const closeCreateParty = () => {
    setcreatePartyModal(false);
  };
  const openJoinParty = () => {
    setJoinPartyModal(true);
  };
  const closeJoinParty = () => {
    setJoinPartyModal(false);
  };
  const openStartGame = () => {
    setStartGameModal(true);
  };
  const closeStartGame = () => {
    setStartGameModal(false);
  };
  const filteredMenus = menus ? menus : [
    {
      title: "how to create party",
      onClick: openCreateParty
    },
    {
      title: "how to join party",
      onClick: openJoinParty
    },
    {
      title: "how to start the game",
      onClick: openStartGame
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      card_default,
      {
        bordered: false,
        style: {
          backgroundColor: mobileStyle ? "transparent" : scheme === "light" ? "#ebebeb" : "#0f0e0e",
          borderRadius: 10,
          boxShadow: "none"
        },
        bodyStyle: {
          padding: mobileStyle ? 0 : 20
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(flex_default, { gap: 10, vertical: true, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Title9, { level: mobileStyle ? 5 : 4, style: { marginTop: 0 }, children: title }, void 0, false, {
            fileName: "app/components/pages/Party/PartyRules.tsx",
            lineNumber: 97,
            columnNumber: 11
          }, this),
          filteredMenus.map((menu, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
            button_default,
            {
              type: "text",
              onClick: menu.onClick,
              className: `ctrlg-link ${scheme}`,
              style: { padding: 5, borderRadius: 6 },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                flex_default,
                {
                  justify: "space-between",
                  gap: 10,
                  style: { fontSize: "1.05em" },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                      space_default,
                      {
                        size: 8,
                        style: {
                          color: token.colorTextBase,
                          alignItems: "flex-start"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(CaretRightOutlined_default, { style: { fontSize: "1.1em" } }, void 0, false, {
                            fileName: "app/components/pages/Party/PartyRules.tsx",
                            lineNumber: 120,
                            columnNumber: 19
                          }, this),
                          t(menu.title)
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "app/components/pages/Party/PartyRules.tsx",
                        lineNumber: 113,
                        columnNumber: 17
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                      ArrowUpRight,
                      {
                        className: "arrow-icon",
                        style: { color: "#7a6fee" }
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/pages/Party/PartyRules.tsx",
                        lineNumber: 123,
                        columnNumber: 17
                      },
                      this
                    )
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/pages/Party/PartyRules.tsx",
                  lineNumber: 108,
                  columnNumber: 15
                },
                this
              )
            },
            `menu-${index}`,
            false,
            {
              fileName: "app/components/pages/Party/PartyRules.tsx",
              lineNumber: 101,
              columnNumber: 13
            },
            this
          ))
        ] }, void 0, true, {
          fileName: "app/components/pages/Party/PartyRules.tsx",
          lineNumber: 96,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/Party/PartyRules.tsx",
        lineNumber: 81,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      modal_default,
      {
        ...modalProps,
        onCancel: closeCreateParty,
        open: createPartyModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(HowToCraeteParty, { onCancel: closeCreateParty }, void 0, false, {
          fileName: "app/components/pages/Party/PartyRules.tsx",
          lineNumber: 137,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/Party/PartyRules.tsx",
        lineNumber: 132,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(modal_default, { ...modalProps, onCancel: closeJoinParty, open: joinPartyModal, children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(HowToJoinParty, { onCancel: closeJoinParty }, void 0, false, {
      fileName: "app/components/pages/Party/PartyRules.tsx",
      lineNumber: 140,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Party/PartyRules.tsx",
      lineNumber: 139,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(modal_default, { ...modalProps, onCancel: closeStartGame, open: startGameModal, children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(HowToStartGame, { onCancel: closeStartGame }, void 0, false, {
      fileName: "app/components/pages/Party/PartyRules.tsx",
      lineNumber: 143,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Party/PartyRules.tsx",
      lineNumber: 142,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Party/PartyRules.tsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
}

// app/routes/_app.parties.$gameId.tsx
var import_lodash2 = __toESM(require_lodash());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime25 = __toESM(require_jsx_dev_runtime());
var { Text: Text14, Title: Title10 } = typography_default;
var currentGame;
var meta = () => {
  return [
    { title: "CTRL G" },
    {
      name: "description",
      content: "\u0E2B\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21\u0E44\u0E14\u0E49\u0E07\u0E48\u0E32\u0E22 \u0E46 \u0E15\u0E35\u0E49\u0E44\u0E21\u0E48\u0E04\u0E23\u0E1A\u0E08\u0E1A\u0E17\u0E35\u0E48 CTRL G"
    },
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, user-scalable=no" },
    {
      property: "og:title",
      content: `\u0E2B\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21! ${(currentGame == null ? void 0 : currentGame.name) ? currentGame == null ? void 0 : currentGame.name : "Valorant"} \u0E23\u0E31\u0E1A\u0E23\u0E2D\u0E07\u0E21\u0E31\u0E19\u0E2A\u0E4C\u0E41\u0E19\u0E48\u0E16\u0E49\u0E32\u0E41\u0E21\u0E48\u0E44\u0E21\u0E48\u0E27\u0E48\u0E32 | Ctrlg.gg`
    },
    {
      property: "og:image",
      content: `https://d2007awoau332v.cloudfront.net/assets/party.jpg`
    },
    {
      property: "og:image:width",
      content: "200"
    },
    {
      property: "og:image:height",
      content: "200"
    },
    {
      property: "og:description",
      content: "\u0E2B\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21\u0E44\u0E14\u0E49\u0E07\u0E48\u0E32\u0E22 \u0E46 \u0E15\u0E35\u0E49\u0E44\u0E21\u0E48\u0E04\u0E23\u0E1A\u0E08\u0E1A\u0E17\u0E35\u0E48 CTRL G"
    }
  ];
};
function PartyIndex() {
  const { parties, gameId, searchParams } = useLoaderData();
  const routeLoader = useRouteLoaderData("routes/_app.parties");
  const matches = useMatches();
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const submit = useSubmit();
  const fetcher = useFetcher();
  const revalidator = useRevalidator();
  const { cdnUrl } = matches[0].data;
  const { games, myParties } = routeLoader;
  const [form] = form_default.useForm();
  const { user, openLoginModal } = (0, import_react31.useContext)(AuthContext);
  const [searchArgs] = useSearchParams();
  const [gameModal, setGameModal] = (0, import_react31.useState)(false);
  const [newPartyModal, setNewPartyModal] = (0, import_react31.useState)(false);
  const [partyDetail, setPartyDetail] = (0, import_react31.useState)(null);
  const [api, contextHolder] = notification_default.useNotification();
  const [items, setItems] = (0, import_react31.useState)(parties.items);
  const [nextCursor, setNextCursor] = (0, import_react31.useState)(parties.nextCursor);
  const [isTheLastPage, setIsTheLastPage] = (0, import_react31.useState)(
    parties.isTheLastPage
  );
  const selectedGame = games.find((game) => `${game.id}` === `${gameId}`);
  const filters = [];
  const navigation = useNavigation();
  if (selectedGame.ranks && selectedGame.ranks.length > 0) {
    filters.push({
      type: "tilt-button",
      name: "ranks",
      title: t("select rank"),
      withAvatar: true,
      options: selectedGame.ranks && selectedGame.ranks.length ? selectedGame.ranks.map((rank) => ({
        label: rank.name,
        value: rank.id,
        image: `${cdnUrl}/${rank.imageUrl}`
      })) : []
    });
  }
  if (selectedGame.modes && selectedGame.modes.length > 0) {
    filters.push({
      type: "tilt-button",
      name: "modes",
      title: t("select mode"),
      options: selectedGame.modes && selectedGame.modes.length ? selectedGame.modes.map((mode) => ({
        label: mode.name,
        value: mode.id
      })) : []
    });
  }
  if (selectedGame.maxPlayers) {
    filters.push({
      type: "tilt-button",
      name: "availableSlots",
      title: t("available slots"),
      options: Array(selectedGame.maxPlayers - 1).fill("").map((_, index) => ({ label: index + 1, value: index + 1 }))
    });
  }
  const modalProps = {
    closeIcon: false,
    footer: null,
    modalRender: (modal) => modal
  };
  const changeGame = (id) => {
    navigate(`/parties/${id}`);
    setGameModal(false);
  };
  const openGameModal = () => {
    setGameModal(true);
  };
  const closeGameModal = () => {
    setGameModal(false);
  };
  const openNewPartyModal = () => {
    setNewPartyModal(true);
  };
  const closeNewPartyModal = () => {
    setNewPartyModal(false);
  };
  const openPartyDetail = (party) => {
    setPartyDetail(party);
  };
  const closePartyDetail = (0, import_react31.useCallback)(() => {
    setPartyDetail(null);
    if (searchArgs && searchArgs.get("join")) {
      navigate(location.pathname, { preventScrollReset: true });
    }
  }, [searchArgs]);
  const handleFilter = (0, import_react31.useCallback)(
    (name, value) => {
      let newSearchParams = { ...searchParams };
      if (searchParams && searchParams[name]) {
        const values = searchParams[name].split(",");
        const containedIndex = values.indexOf(`${value}`);
        if (containedIndex > -1) {
          values.splice(containedIndex, 1);
        } else {
          values.push(value.toString());
        }
        if (values.length) {
          newSearchParams[name] = values.join(",");
        } else {
          delete newSearchParams[name];
        }
      } else {
        newSearchParams[name] = `${value}`;
      }
      if ((0, import_lodash2.floor)(items.length / 20)) {
        newSearchParams["take"] = (0, import_lodash2.ceil)(items.length / 20) * 20;
      }
      submit(
        (0, import_lodash2.omitBy)(newSearchParams, (v) => (0, import_lodash2.isNil)(v) && (0, import_lodash2.isEmpty)(v)),
        { method: "get", preventScrollReset: true }
      );
    },
    [searchParams, submit, items]
  );
  const handleDebounceFilter = (0, import_react31.useMemo)(
    () => (0, import_lodash2.debounce)(handleFilter, 300),
    [handleFilter]
  );
  const handleLoadMore = (0, import_react31.useCallback)(() => {
    const newSearchParams = {
      ...searchParams,
      cursor: nextCursor,
      game: gameId
    };
    const queryString = new URLSearchParams(
      (0, import_lodash2.omitBy)(newSearchParams, import_lodash2.isNil)
    ).toString();
    fetcher.load(`.?${queryString}`);
  }, [items, searchParams]);
  (0, import_react31.useEffect)(() => {
    if (fetcher && fetcher.data && fetcher.state === "idle" && revalidator.state === "idle") {
      if (fetcher.data.success && (fetcher.data.success === "create-party" || fetcher.data.success === "leave-party" || fetcher.data.success === "join-party") && `${fetcher.data.gameId}` === `${gameId}`) {
        revalidator.revalidate();
        setPartyDetail(null);
        setNewPartyModal(false);
        resetFetcher(fetcher);
        api.open({
          message: t(`successfully ${fetcher.data.success}`),
          type: "success",
          duration: 5,
          placement: "bottomRight"
        });
      } else if (fetcher.data.party && `${fetcher.data.gameId}` === `${gameId}`) {
        setPartyDetail(fetcher.data.party);
        resetFetcher(fetcher);
      } else if (fetcher.data.parties) {
        setItems([...items, ...fetcher.data.parties.items]);
        setNextCursor(fetcher.data.parties.nextCursor);
        setIsTheLastPage(fetcher.data.parties.isTheLastPage);
        resetFetcher(fetcher);
      }
    }
  }, [items, fetcher, revalidator]);
  (0, import_react31.useEffect)(() => {
    setItems(parties.items);
    setNextCursor(parties.nextCursor);
    setIsTheLastPage(parties.isTheLastPage);
  }, [parties]);
  (0, import_react31.useEffect)(() => {
    if (searchArgs && searchArgs.get("join")) {
      fetcher.load(
        `/resources/party?partyId=${searchArgs.get("join")}&gameId=${gameId}`
      );
    }
  }, [gameId, searchArgs]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    PartyContext.Provider,
    {
      value: {
        closePartyModal: closePartyDetail
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          PartyHero,
          {
            loading: !selectedGame,
            game: selectedGame,
            onGameClick: openGameModal
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.parties.$gameId.tsx",
            lineNumber: 349,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          "div",
          {
            style: {
              paddingInline: "3.5%",
              paddingBlock: 20,
              maxWidth: 1440,
              marginInline: "auto"
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(row_default, { gutter: [30, 10], style: { paddingBlock: 30 }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(col_default, { span: 24, md: { span: 6, order: 0 }, style: { paddingTop: 30 }, children: [
                !selectedGame ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(skeleton_default, { active: true }, void 0, false, {
                  fileName: "app/routes/_app.parties.$gameId.tsx",
                  lineNumber: 364,
                  columnNumber: 30
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, {}, void 0, false, {
                  fileName: "app/routes/_app.parties.$gameId.tsx",
                  lineNumber: 364,
                  columnNumber: 52
                }, this),
                selectedGame && selectedGame.name ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Title10, { level: 2, style: { marginTop: 0, marginBottom: 40 }, children: selectedGame.name }, void 0, false, {
                  fileName: "app/routes/_app.parties.$gameId.tsx",
                  lineNumber: 366,
                  columnNumber: 15
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, {}, void 0, false, {
                  fileName: "app/routes/_app.parties.$gameId.tsx",
                  lineNumber: 370,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(affix_default, { offsetTop: 80, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                  "div",
                  {
                    className: "hide-scrollbar",
                    style: {
                      maxHeight: "calc(100vh - 60px)",
                      overflowY: "auto"
                    },
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                      IndexFilter,
                      {
                        values: searchParams,
                        onFilterClicked: handleDebounceFilter,
                        filters
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/_app.parties.$gameId.tsx",
                        lineNumber: 380,
                        columnNumber: 17
                      },
                      this
                    )
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_app.parties.$gameId.tsx",
                    lineNumber: 373,
                    columnNumber: 15
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/routes/_app.parties.$gameId.tsx",
                  lineNumber: 372,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_app.parties.$gameId.tsx",
                lineNumber: 363,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(col_default, { span: 24, md: { span: 6, order: 2 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Media, { greaterThan: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(affix_default, { offsetTop: 80, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                PartyRules,
                {
                  title: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(space_default, { size: 10, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(InfoCircleOutlined_default, {}, void 0, false, {
                      fileName: "app/routes/_app.parties.$gameId.tsx",
                      lineNumber: 395,
                      columnNumber: 25
                    }, this),
                    `${t("how it works")}?`
                  ] }, void 0, true, {
                    fileName: "app/routes/_app.parties.$gameId.tsx",
                    lineNumber: 394,
                    columnNumber: 23
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.parties.$gameId.tsx",
                  lineNumber: 392,
                  columnNumber: 19
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/_app.parties.$gameId.tsx",
                lineNumber: 391,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "app/routes/_app.parties.$gameId.tsx",
                lineNumber: 390,
                columnNumber: 15
              }, this) }, void 0, false, {
                fileName: "app/routes/_app.parties.$gameId.tsx",
                lineNumber: 389,
                columnNumber: 13
              }, this) }, void 0, false, {
                fileName: "app/routes/_app.parties.$gameId.tsx",
                lineNumber: 388,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(col_default, { span: 24, md: { span: 12, order: 1 }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                  PartyIndexHeader,
                  {
                    fetcher,
                    onRefresh: revalidator.revalidate,
                    searchParams,
                    submit,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                      TiltButton,
                      {
                        color: "primary",
                        onClick: user ? openNewPartyModal : openLoginModal,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Text14, { children: t("new party") }, void 0, false, {
                          fileName: "app/routes/_app.parties.$gameId.tsx",
                          lineNumber: 415,
                          columnNumber: 17
                        }, this)
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/_app.parties.$gameId.tsx",
                        lineNumber: 411,
                        columnNumber: 15
                      },
                      this
                    )
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_app.parties.$gameId.tsx",
                    lineNumber: 405,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { style: { marginTop: 30 }, children: [
                  myParties && myParties.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { style: { marginBottom: 30 }, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                      divider_default,
                      {
                        orientation: "left",
                        orientationMargin: 0,
                        style: { marginBottom: 20 },
                        children: t("my parties")
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/_app.parties.$gameId.tsx",
                        lineNumber: 421,
                        columnNumber: 19
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(PartyLists, { data: myParties, onEntryClick: openPartyDetail }, void 0, false, {
                      fileName: "app/routes/_app.parties.$gameId.tsx",
                      lineNumber: 428,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/_app.parties.$gameId.tsx",
                    lineNumber: 420,
                    columnNumber: 17
                  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, {}, void 0, false, {
                    fileName: "app/routes/_app.parties.$gameId.tsx",
                    lineNumber: 431,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                    divider_default,
                    {
                      orientation: "left",
                      orientationMargin: 0,
                      style: { marginBottom: 20 },
                      children: t("all parties")
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/_app.parties.$gameId.tsx",
                      lineNumber: 433,
                      columnNumber: 15
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                    PartyLists,
                    {
                      data: items,
                      onEntryClick: user ? openPartyDetail : openLoginModal
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/_app.parties.$gameId.tsx",
                      lineNumber: 440,
                      columnNumber: 15
                    },
                    this
                  ),
                  !isTheLastPage && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(flex_default, { justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                    TiltButton,
                    {
                      color: "primary",
                      onClick: handleLoadMore,
                      disabled: isTheLastPage === true,
                      style: { padding: "15px 30px" },
                      children: t("load more")
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/_app.parties.$gameId.tsx",
                      lineNumber: 446,
                      columnNumber: 19
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/routes/_app.parties.$gameId.tsx",
                    lineNumber: 445,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/_app.parties.$gameId.tsx",
                  lineNumber: 418,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_app.parties.$gameId.tsx",
                lineNumber: 404,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_app.parties.$gameId.tsx",
              lineNumber: 362,
              columnNumber: 9
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.parties.$gameId.tsx",
            lineNumber: 354,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(modal_default, { ...modalProps, onCancel: closeNewPartyModal, open: newPartyModal, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          PartyForm,
          {
            fetcher,
            form,
            game: selectedGame,
            games,
            onCancel: closeNewPartyModal
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.parties.$gameId.tsx",
            lineNumber: 461,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/_app.parties.$gameId.tsx",
          lineNumber: 460,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(modal_default, { ...modalProps, onCancel: closePartyDetail, open: partyDetail, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          PartyDetail,
          {
            fetcher,
            party: partyDetail,
            hadParty: myParties && myParties.length > 0,
            closePartyDetail
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.parties.$gameId.tsx",
            lineNumber: 470,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/_app.parties.$gameId.tsx",
          lineNumber: 469,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          modal_default,
          {
            ...modalProps,
            width: 600,
            onCancel: closeGameModal,
            open: gameModal,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              GameSelect,
              {
                currentGameId: gameId,
                games,
                onGameSelect: changeGame
              },
              void 0,
              false,
              {
                fileName: "app/routes/_app.parties.$gameId.tsx",
                lineNumber: 483,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.parties.$gameId.tsx",
            lineNumber: 477,
            columnNumber: 7
          },
          this
        ),
        contextHolder,
        navigation.state === "loading" && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(OverlayBg, { style: { position: "fixed", zIndex: 100 }, opacity: 0.7, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Loading, {}, void 0, false, {
          fileName: "app/routes/_app.parties.$gameId.tsx",
          lineNumber: 492,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.parties.$gameId.tsx",
          lineNumber: 491,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/_app.parties.$gameId.tsx",
      lineNumber: 344,
      columnNumber: 5
    },
    this
  );
}
export {
  PartyIndex as default,
  meta
};
/*! Bundled license information:

@babel/runtime/helpers/regeneratorRuntime.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)
*/
//# sourceMappingURL=/build/routes/_app.parties.$gameId-KXMP6B6J.js.map
