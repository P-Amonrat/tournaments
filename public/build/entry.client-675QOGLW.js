import {
  I18nextProvider,
  initReactI18next
} from "/build/_shared/chunk-IDB3BDWM.js";
import {
  _classCallCheck,
  _createClass,
  require_react_dom
} from "/build/_shared/chunk-UPPG42YI.js";
import {
  RemixBrowser
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __commonJS,
  __require,
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// node_modules/cross-fetch/dist/browser-ponyfill.js
var require_browser_ponyfill = __commonJS({
  "node_modules/cross-fetch/dist/browser-ponyfill.js"(exports, module) {
    var __global__ = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof globalThis !== "undefined" && globalThis;
    var __globalThis__ = function() {
      function F() {
        this.fetch = false;
        this.DOMException = __global__.DOMException;
      }
      F.prototype = __global__;
      return new F();
    }();
    (function(globalThis2) {
      var irrelevant = function(exports2) {
        var global2 = typeof globalThis2 !== "undefined" && globalThis2 || typeof self !== "undefined" && self || typeof global2 !== "undefined" && global2;
        var support = {
          searchParams: "URLSearchParams" in global2,
          iterable: "Symbol" in global2 && "iterator" in Symbol,
          blob: "FileReader" in global2 && "Blob" in global2 && function() {
            try {
              new Blob();
              return true;
            } catch (e) {
              return false;
            }
          }(),
          formData: "FormData" in global2,
          arrayBuffer: "ArrayBuffer" in global2
        };
        function isDataView(obj) {
          return obj && DataView.prototype.isPrototypeOf(obj);
        }
        if (support.arrayBuffer) {
          var viewClasses = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ];
          var isArrayBufferView = ArrayBuffer.isView || function(obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
          };
        }
        function normalizeName(name) {
          if (typeof name !== "string") {
            name = String(name);
          }
          if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === "") {
            throw new TypeError('Invalid character in header field name: "' + name + '"');
          }
          return name.toLowerCase();
        }
        function normalizeValue(value) {
          if (typeof value !== "string") {
            value = String(value);
          }
          return value;
        }
        function iteratorFor(items) {
          var iterator = {
            next: function() {
              var value = items.shift();
              return { done: value === void 0, value };
            }
          };
          if (support.iterable) {
            iterator[Symbol.iterator] = function() {
              return iterator;
            };
          }
          return iterator;
        }
        function Headers(headers) {
          this.map = {};
          if (headers instanceof Headers) {
            headers.forEach(function(value, name) {
              this.append(name, value);
            }, this);
          } else if (Array.isArray(headers)) {
            headers.forEach(function(header) {
              this.append(header[0], header[1]);
            }, this);
          } else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function(name) {
              this.append(name, headers[name]);
            }, this);
          }
        }
        Headers.prototype.append = function(name, value) {
          name = normalizeName(name);
          value = normalizeValue(value);
          var oldValue = this.map[name];
          this.map[name] = oldValue ? oldValue + ", " + value : value;
        };
        Headers.prototype["delete"] = function(name) {
          delete this.map[normalizeName(name)];
        };
        Headers.prototype.get = function(name) {
          name = normalizeName(name);
          return this.has(name) ? this.map[name] : null;
        };
        Headers.prototype.has = function(name) {
          return this.map.hasOwnProperty(normalizeName(name));
        };
        Headers.prototype.set = function(name, value) {
          this.map[normalizeName(name)] = normalizeValue(value);
        };
        Headers.prototype.forEach = function(callback, thisArg) {
          for (var name in this.map) {
            if (this.map.hasOwnProperty(name)) {
              callback.call(thisArg, this.map[name], name, this);
            }
          }
        };
        Headers.prototype.keys = function() {
          var items = [];
          this.forEach(function(value, name) {
            items.push(name);
          });
          return iteratorFor(items);
        };
        Headers.prototype.values = function() {
          var items = [];
          this.forEach(function(value) {
            items.push(value);
          });
          return iteratorFor(items);
        };
        Headers.prototype.entries = function() {
          var items = [];
          this.forEach(function(value, name) {
            items.push([name, value]);
          });
          return iteratorFor(items);
        };
        if (support.iterable) {
          Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
        }
        function consumed(body) {
          if (body.bodyUsed) {
            return Promise.reject(new TypeError("Already read"));
          }
          body.bodyUsed = true;
        }
        function fileReaderReady(reader) {
          return new Promise(function(resolve, reject) {
            reader.onload = function() {
              resolve(reader.result);
            };
            reader.onerror = function() {
              reject(reader.error);
            };
          });
        }
        function readBlobAsArrayBuffer(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsArrayBuffer(blob);
          return promise;
        }
        function readBlobAsText(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsText(blob);
          return promise;
        }
        function readArrayBufferAsText(buf) {
          var view = new Uint8Array(buf);
          var chars2 = new Array(view.length);
          for (var i = 0; i < view.length; i++) {
            chars2[i] = String.fromCharCode(view[i]);
          }
          return chars2.join("");
        }
        function bufferClone(buf) {
          if (buf.slice) {
            return buf.slice(0);
          } else {
            var view = new Uint8Array(buf.byteLength);
            view.set(new Uint8Array(buf));
            return view.buffer;
          }
        }
        function Body() {
          this.bodyUsed = false;
          this._initBody = function(body) {
            this.bodyUsed = this.bodyUsed;
            this._bodyInit = body;
            if (!body) {
              this._bodyText = "";
            } else if (typeof body === "string") {
              this._bodyText = body;
            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
              this._bodyBlob = body;
            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
              this._bodyFormData = body;
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this._bodyText = body.toString();
            } else if (support.arrayBuffer && support.blob && isDataView(body)) {
              this._bodyArrayBuffer = bufferClone(body.buffer);
              this._bodyInit = new Blob([this._bodyArrayBuffer]);
            } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
              this._bodyArrayBuffer = bufferClone(body);
            } else {
              this._bodyText = body = Object.prototype.toString.call(body);
            }
            if (!this.headers.get("content-type")) {
              if (typeof body === "string") {
                this.headers.set("content-type", "text/plain;charset=UTF-8");
              } else if (this._bodyBlob && this._bodyBlob.type) {
                this.headers.set("content-type", this._bodyBlob.type);
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
            }
          };
          if (support.blob) {
            this.blob = function() {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return Promise.resolve(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as blob");
              } else {
                return Promise.resolve(new Blob([this._bodyText]));
              }
            };
            this.arrayBuffer = function() {
              if (this._bodyArrayBuffer) {
                var isConsumed = consumed(this);
                if (isConsumed) {
                  return isConsumed;
                }
                if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
                  return Promise.resolve(
                    this._bodyArrayBuffer.buffer.slice(
                      this._bodyArrayBuffer.byteOffset,
                      this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
                    )
                  );
                } else {
                  return Promise.resolve(this._bodyArrayBuffer);
                }
              } else {
                return this.blob().then(readBlobAsArrayBuffer);
              }
            };
          }
          this.text = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return readBlobAsText(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as text");
            } else {
              return Promise.resolve(this._bodyText);
            }
          };
          if (support.formData) {
            this.formData = function() {
              return this.text().then(decode);
            };
          }
          this.json = function() {
            return this.text().then(JSON.parse);
          };
          return this;
        }
        var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function normalizeMethod(method) {
          var upcased = method.toUpperCase();
          return methods.indexOf(upcased) > -1 ? upcased : method;
        }
        function Request(input, options) {
          if (!(this instanceof Request)) {
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          }
          options = options || {};
          var body = options.body;
          if (input instanceof Request) {
            if (input.bodyUsed) {
              throw new TypeError("Already read");
            }
            this.url = input.url;
            this.credentials = input.credentials;
            if (!options.headers) {
              this.headers = new Headers(input.headers);
            }
            this.method = input.method;
            this.mode = input.mode;
            this.signal = input.signal;
            if (!body && input._bodyInit != null) {
              body = input._bodyInit;
              input.bodyUsed = true;
            }
          } else {
            this.url = String(input);
          }
          this.credentials = options.credentials || this.credentials || "same-origin";
          if (options.headers || !this.headers) {
            this.headers = new Headers(options.headers);
          }
          this.method = normalizeMethod(options.method || this.method || "GET");
          this.mode = options.mode || this.mode || null;
          this.signal = options.signal || this.signal;
          this.referrer = null;
          if ((this.method === "GET" || this.method === "HEAD") && body) {
            throw new TypeError("Body not allowed for GET or HEAD requests");
          }
          this._initBody(body);
          if (this.method === "GET" || this.method === "HEAD") {
            if (options.cache === "no-store" || options.cache === "no-cache") {
              var reParamSearch = /([?&])_=[^&]*/;
              if (reParamSearch.test(this.url)) {
                this.url = this.url.replace(reParamSearch, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
              } else {
                var reQueryString = /\?/;
                this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
              }
            }
          }
        }
        Request.prototype.clone = function() {
          return new Request(this, { body: this._bodyInit });
        };
        function decode(body) {
          var form = new FormData();
          body.trim().split("&").forEach(function(bytes) {
            if (bytes) {
              var split = bytes.split("=");
              var name = split.shift().replace(/\+/g, " ");
              var value = split.join("=").replace(/\+/g, " ");
              form.append(decodeURIComponent(name), decodeURIComponent(value));
            }
          });
          return form;
        }
        function parseHeaders(rawHeaders) {
          var headers = new Headers();
          var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
          preProcessedHeaders.split("\r").map(function(header) {
            return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
          }).forEach(function(line) {
            var parts = line.split(":");
            var key = parts.shift().trim();
            if (key) {
              var value = parts.join(":").trim();
              headers.append(key, value);
            }
          });
          return headers;
        }
        Body.call(Request.prototype);
        function Response(bodyInit, options) {
          if (!(this instanceof Response)) {
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          }
          if (!options) {
            options = {};
          }
          this.type = "default";
          this.status = options.status === void 0 ? 200 : options.status;
          this.ok = this.status >= 200 && this.status < 300;
          this.statusText = options.statusText === void 0 ? "" : "" + options.statusText;
          this.headers = new Headers(options.headers);
          this.url = options.url || "";
          this._initBody(bodyInit);
        }
        Body.call(Response.prototype);
        Response.prototype.clone = function() {
          return new Response(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers(this.headers),
            url: this.url
          });
        };
        Response.error = function() {
          var response = new Response(null, { status: 0, statusText: "" });
          response.type = "error";
          return response;
        };
        var redirectStatuses = [301, 302, 303, 307, 308];
        Response.redirect = function(url, status) {
          if (redirectStatuses.indexOf(status) === -1) {
            throw new RangeError("Invalid status code");
          }
          return new Response(null, { status, headers: { location: url } });
        };
        exports2.DOMException = global2.DOMException;
        try {
          new exports2.DOMException();
        } catch (err) {
          exports2.DOMException = function(message, name) {
            this.message = message;
            this.name = name;
            var error = Error(message);
            this.stack = error.stack;
          };
          exports2.DOMException.prototype = Object.create(Error.prototype);
          exports2.DOMException.prototype.constructor = exports2.DOMException;
        }
        function fetch2(input, init2) {
          return new Promise(function(resolve, reject) {
            var request3 = new Request(input, init2);
            if (request3.signal && request3.signal.aborted) {
              return reject(new exports2.DOMException("Aborted", "AbortError"));
            }
            var xhr = new XMLHttpRequest();
            function abortXhr() {
              xhr.abort();
            }
            xhr.onload = function() {
              var options = {
                status: xhr.status,
                statusText: xhr.statusText,
                headers: parseHeaders(xhr.getAllResponseHeaders() || "")
              };
              options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
              var body = "response" in xhr ? xhr.response : xhr.responseText;
              setTimeout(function() {
                resolve(new Response(body, options));
              }, 0);
            };
            xhr.onerror = function() {
              setTimeout(function() {
                reject(new TypeError("Network request failed"));
              }, 0);
            };
            xhr.ontimeout = function() {
              setTimeout(function() {
                reject(new TypeError("Network request failed"));
              }, 0);
            };
            xhr.onabort = function() {
              setTimeout(function() {
                reject(new exports2.DOMException("Aborted", "AbortError"));
              }, 0);
            };
            function fixUrl(url) {
              try {
                return url === "" && global2.location.href ? global2.location.href : url;
              } catch (e) {
                return url;
              }
            }
            xhr.open(request3.method, fixUrl(request3.url), true);
            if (request3.credentials === "include") {
              xhr.withCredentials = true;
            } else if (request3.credentials === "omit") {
              xhr.withCredentials = false;
            }
            if ("responseType" in xhr) {
              if (support.blob) {
                xhr.responseType = "blob";
              } else if (support.arrayBuffer && request3.headers.get("Content-Type") && request3.headers.get("Content-Type").indexOf("application/octet-stream") !== -1) {
                xhr.responseType = "arraybuffer";
              }
            }
            if (init2 && typeof init2.headers === "object" && !(init2.headers instanceof Headers)) {
              Object.getOwnPropertyNames(init2.headers).forEach(function(name) {
                xhr.setRequestHeader(name, normalizeValue(init2.headers[name]));
              });
            } else {
              request3.headers.forEach(function(value, name) {
                xhr.setRequestHeader(name, value);
              });
            }
            if (request3.signal) {
              request3.signal.addEventListener("abort", abortXhr);
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                  request3.signal.removeEventListener("abort", abortXhr);
                }
              };
            }
            xhr.send(typeof request3._bodyInit === "undefined" ? null : request3._bodyInit);
          });
        }
        fetch2.polyfill = true;
        if (!global2.fetch) {
          global2.fetch = fetch2;
          global2.Headers = Headers;
          global2.Request = Request;
          global2.Response = Response;
        }
        exports2.Headers = Headers;
        exports2.Request = Request;
        exports2.Response = Response;
        exports2.fetch = fetch2;
        return exports2;
      }({});
    })(__globalThis__);
    __globalThis__.fetch.ponyfill = true;
    delete __globalThis__.fetch.polyfill;
    var ctx = __global__.fetch ? __global__ : __globalThis__;
    exports = ctx.fetch;
    exports.default = ctx.fetch;
    exports.fetch = ctx.fetch;
    exports.Headers = ctx.Headers;
    exports.Request = ctx.Request;
    exports.Response = ctx.Response;
    module.exports = exports;
  }
});

// node_modules/i18next-http-backend/esm/getFetch.cjs
var require_getFetch = __commonJS({
  "node_modules/i18next-http-backend/esm/getFetch.cjs"(exports, module) {
    var fetchApi2;
    if (typeof fetch === "function") {
      if (typeof globalThis !== "undefined" && globalThis.fetch) {
        fetchApi2 = globalThis.fetch;
      } else if (typeof window !== "undefined" && window.fetch) {
        fetchApi2 = window.fetch;
      } else {
        fetchApi2 = fetch;
      }
    }
    if (typeof __require !== "undefined" && (typeof window === "undefined" || typeof window.document === "undefined")) {
      f = fetchApi2 || require_browser_ponyfill();
      if (f.default)
        f = f.default;
      exports.default = f;
      module.exports = exports.default;
    }
    var f;
  }
});

// app/entry.client.tsx
var import_react2 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/i18next/dist/esm/i18next.js
var consoleLogger = {
  type: "logger",
  log(args) {
    this.output("log", args);
  },
  warn(args) {
    this.output("warn", args);
  },
  error(args) {
    this.output("error", args);
  },
  output(type, args) {
    if (console && console[type])
      console[type].apply(console, args);
  }
};
var Logger = class {
  constructor(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(concreteLogger, options);
  }
  init(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = options.prefix || "i18next:";
    this.logger = concreteLogger || consoleLogger;
    this.options = options;
    this.debug = options.debug;
  }
  log() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.forward(args, "log", "", true);
  }
  warn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return this.forward(args, "warn", "", true);
  }
  error() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return this.forward(args, "error", "");
  }
  deprecate() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
  }
  forward(args, lvl, prefix, debugOnly) {
    if (debugOnly && !this.debug)
      return null;
    if (typeof args[0] === "string")
      args[0] = `${prefix}${this.prefix} ${args[0]}`;
    return this.logger[lvl](args);
  }
  create(moduleName) {
    return new Logger(this.logger, {
      ...{
        prefix: `${this.prefix}:${moduleName}:`
      },
      ...this.options
    });
  }
  clone(options) {
    options = options || this.options;
    options.prefix = options.prefix || this.prefix;
    return new Logger(this.logger, options);
  }
};
var baseLogger = new Logger();
var EventEmitter = class {
  constructor() {
    this.observers = {};
  }
  on(events, listener) {
    events.split(" ").forEach((event) => {
      this.observers[event] = this.observers[event] || [];
      this.observers[event].push(listener);
    });
    return this;
  }
  off(event, listener) {
    if (!this.observers[event])
      return;
    if (!listener) {
      delete this.observers[event];
      return;
    }
    this.observers[event] = this.observers[event].filter((l) => l !== listener);
  }
  emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (this.observers[event]) {
      const cloned = [].concat(this.observers[event]);
      cloned.forEach((observer) => {
        observer(...args);
      });
    }
    if (this.observers["*"]) {
      const cloned = [].concat(this.observers["*"]);
      cloned.forEach((observer) => {
        observer.apply(observer, [event, ...args]);
      });
    }
  }
};
function defer() {
  let res;
  let rej;
  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString(object) {
  if (object == null)
    return "";
  return "" + object;
}
function copy(a, s, t2) {
  a.forEach((m) => {
    if (s[m])
      t2[m] = s[m];
  });
}
function getLastOfPath(object, path2, Empty) {
  function cleanKey(key) {
    return key && key.indexOf("###") > -1 ? key.replace(/###/g, ".") : key;
  }
  function canNotTraverseDeeper() {
    return !object || typeof object === "string";
  }
  const stack = typeof path2 !== "string" ? [].concat(path2) : path2.split(".");
  while (stack.length > 1) {
    if (canNotTraverseDeeper())
      return {};
    const key = cleanKey(stack.shift());
    if (!object[key] && Empty)
      object[key] = new Empty();
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
  }
  if (canNotTraverseDeeper())
    return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}
function setPath(object, path2, newValue) {
  const {
    obj,
    k
  } = getLastOfPath(object, path2, Object);
  obj[k] = newValue;
}
function pushPath(object, path2, newValue, concat) {
  const {
    obj,
    k
  } = getLastOfPath(object, path2, Object);
  obj[k] = obj[k] || [];
  if (concat)
    obj[k] = obj[k].concat(newValue);
  if (!concat)
    obj[k].push(newValue);
}
function getPath(object, path2) {
  const {
    obj,
    k
  } = getLastOfPath(object, path2);
  if (!obj)
    return void 0;
  return obj[k];
}
function getPathWithDefaults(data, defaultData, key) {
  const value = getPath(data, key);
  if (value !== void 0) {
    return value;
  }
  return getPath(defaultData, key);
}
function deepExtend(target, source, overwrite) {
  for (const prop in source) {
    if (prop !== "__proto__" && prop !== "constructor") {
      if (prop in target) {
        if (typeof target[prop] === "string" || target[prop] instanceof String || typeof source[prop] === "string" || source[prop] instanceof String) {
          if (overwrite)
            target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
}
function regexEscape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var _entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function escape(data) {
  if (typeof data === "string") {
    return data.replace(/[&<>"'\/]/g, (s) => _entityMap[s]);
  }
  return data;
}
var chars = [" ", ",", "?", "!", ";"];
function looksLikeObjectPath(key, nsSeparator, keySeparator) {
  nsSeparator = nsSeparator || "";
  keySeparator = keySeparator || "";
  const possibleChars = chars.filter((c) => nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0);
  if (possibleChars.length === 0)
    return true;
  const r = new RegExp(`(${possibleChars.map((c) => c === "?" ? "\\?" : c).join("|")})`);
  let matched = !r.test(key);
  if (!matched) {
    const ki = key.indexOf(keySeparator);
    if (ki > 0 && !r.test(key.substring(0, ki))) {
      matched = true;
    }
  }
  return matched;
}
function deepFind(obj, path2) {
  let keySeparator = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!obj)
    return void 0;
  if (obj[path2])
    return obj[path2];
  const paths = path2.split(keySeparator);
  let current = obj;
  for (let i = 0; i < paths.length; ++i) {
    if (!current)
      return void 0;
    if (typeof current[paths[i]] === "string" && i + 1 < paths.length) {
      return void 0;
    }
    if (current[paths[i]] === void 0) {
      let j = 2;
      let p = paths.slice(i, i + j).join(keySeparator);
      let mix = current[p];
      while (mix === void 0 && paths.length > i + j) {
        j++;
        p = paths.slice(i, i + j).join(keySeparator);
        mix = current[p];
      }
      if (mix === void 0)
        return void 0;
      if (mix === null)
        return null;
      if (path2.endsWith(p)) {
        if (typeof mix === "string")
          return mix;
        if (p && typeof mix[p] === "string")
          return mix[p];
      }
      const joinedPath = paths.slice(i + j).join(keySeparator);
      if (joinedPath)
        return deepFind(mix, joinedPath, keySeparator);
      return void 0;
    }
    current = current[paths[i]];
  }
  return current;
}
function getCleanedCode(code) {
  if (code && code.indexOf("_") > 0)
    return code.replace("_", "-");
  return code;
}
var ResourceStore = class extends EventEmitter {
  constructor(data) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super();
    this.data = data || {};
    this.options = options;
    if (this.options.keySeparator === void 0) {
      this.options.keySeparator = ".";
    }
    if (this.options.ignoreJSONStructure === void 0) {
      this.options.ignoreJSONStructure = true;
    }
  }
  addNamespaces(ns) {
    if (this.options.ns.indexOf(ns) < 0) {
      this.options.ns.push(ns);
    }
  }
  removeNamespaces(ns) {
    const index = this.options.ns.indexOf(ns);
    if (index > -1) {
      this.options.ns.splice(index, 1);
    }
  }
  getResource(lng, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    const ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let path2 = [lng, ns];
    if (key && typeof key !== "string")
      path2 = path2.concat(key);
    if (key && typeof key === "string")
      path2 = path2.concat(keySeparator ? key.split(keySeparator) : key);
    if (lng.indexOf(".") > -1) {
      path2 = lng.split(".");
    }
    const result = getPath(this.data, path2);
    if (result || !ignoreJSONStructure || typeof key !== "string")
      return result;
    return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
  }
  addResource(lng, ns, key, value) {
    let options = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: false
    };
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    let path2 = [lng, ns];
    if (key)
      path2 = path2.concat(keySeparator ? key.split(keySeparator) : key);
    if (lng.indexOf(".") > -1) {
      path2 = lng.split(".");
      value = ns;
      ns = path2[1];
    }
    this.addNamespaces(ns);
    setPath(this.data, path2, value);
    if (!options.silent)
      this.emit("added", lng, ns, key, value);
  }
  addResources(lng, ns, resources) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: false
    };
    for (const m in resources) {
      if (typeof resources[m] === "string" || Object.prototype.toString.apply(resources[m]) === "[object Array]")
        this.addResource(lng, ns, m, resources[m], {
          silent: true
        });
    }
    if (!options.silent)
      this.emit("added", lng, ns, resources);
  }
  addResourceBundle(lng, ns, resources, deep, overwrite) {
    let options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: false
    };
    let path2 = [lng, ns];
    if (lng.indexOf(".") > -1) {
      path2 = lng.split(".");
      deep = resources;
      resources = ns;
      ns = path2[1];
    }
    this.addNamespaces(ns);
    let pack = getPath(this.data, path2) || {};
    if (deep) {
      deepExtend(pack, resources, overwrite);
    } else {
      pack = {
        ...pack,
        ...resources
      };
    }
    setPath(this.data, path2, pack);
    if (!options.silent)
      this.emit("added", lng, ns, resources);
  }
  removeResourceBundle(lng, ns) {
    if (this.hasResourceBundle(lng, ns)) {
      delete this.data[lng][ns];
    }
    this.removeNamespaces(ns);
    this.emit("removed", lng, ns);
  }
  hasResourceBundle(lng, ns) {
    return this.getResource(lng, ns) !== void 0;
  }
  getResourceBundle(lng, ns) {
    if (!ns)
      ns = this.options.defaultNS;
    if (this.options.compatibilityAPI === "v1")
      return {
        ...{},
        ...this.getResource(lng, ns)
      };
    return this.getResource(lng, ns);
  }
  getDataByLanguage(lng) {
    return this.data[lng];
  }
  hasLanguageSomeTranslations(lng) {
    const data = this.getDataByLanguage(lng);
    const n = data && Object.keys(data) || [];
    return !!n.find((v) => data[v] && Object.keys(data[v]).length > 0);
  }
  toJSON() {
    return this.data;
  }
};
var postProcessor = {
  processors: {},
  addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle(processors, value, key, options, translator) {
    processors.forEach((processor) => {
      if (this.processors[processor])
        value = this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};
var checkedLoadedFor = {};
var Translator = class extends EventEmitter {
  constructor(services) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super();
    copy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], services, this);
    this.options = options;
    if (this.options.keySeparator === void 0) {
      this.options.keySeparator = ".";
    }
    this.logger = baseLogger.create("translator");
  }
  changeLanguage(lng) {
    if (lng)
      this.language = lng;
  }
  exists(key) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (key === void 0 || key === null) {
      return false;
    }
    const resolved = this.resolve(key, options);
    return resolved && resolved.res !== void 0;
  }
  extractFromKey(key, options) {
    let nsSeparator = options.nsSeparator !== void 0 ? options.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === void 0)
      nsSeparator = ":";
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    let namespaces = options.ns || this.options.defaultNS || [];
    const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
    const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
    if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
      const m = key.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0) {
        return {
          key,
          namespaces
        };
      }
      const parts = key.split(nsSeparator);
      if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1)
        namespaces = parts.shift();
      key = parts.join(keySeparator);
    }
    if (typeof namespaces === "string")
      namespaces = [namespaces];
    return {
      key,
      namespaces
    };
  }
  translate(keys, options, lastKey) {
    if (typeof options !== "object" && this.options.overloadTranslationOptionHandler) {
      options = this.options.overloadTranslationOptionHandler(arguments);
    }
    if (typeof options === "object")
      options = {
        ...options
      };
    if (!options)
      options = {};
    if (keys === void 0 || keys === null)
      return "";
    if (!Array.isArray(keys))
      keys = [String(keys)];
    const returnDetails = options.returnDetails !== void 0 ? options.returnDetails : this.options.returnDetails;
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    const {
      key,
      namespaces
    } = this.extractFromKey(keys[keys.length - 1], options);
    const namespace = namespaces[namespaces.length - 1];
    const lng = options.lng || this.language;
    const appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (lng && lng.toLowerCase() === "cimode") {
      if (appendNamespaceToCIMode) {
        const nsSeparator = options.nsSeparator || this.options.nsSeparator;
        if (returnDetails) {
          return {
            res: `${namespace}${nsSeparator}${key}`,
            usedKey: key,
            exactUsedKey: key,
            usedLng: lng,
            usedNS: namespace,
            usedParams: this.getUsedParamsDetails(options)
          };
        }
        return `${namespace}${nsSeparator}${key}`;
      }
      if (returnDetails) {
        return {
          res: key,
          usedKey: key,
          exactUsedKey: key,
          usedLng: lng,
          usedNS: namespace,
          usedParams: this.getUsedParamsDetails(options)
        };
      }
      return key;
    }
    const resolved = this.resolve(keys, options);
    let res = resolved && resolved.res;
    const resUsedKey = resolved && resolved.usedKey || key;
    const resExactUsedKey = resolved && resolved.exactUsedKey || key;
    const resType = Object.prototype.toString.apply(res);
    const noObject = ["[object Number]", "[object Function]", "[object RegExp]"];
    const joinArrays = options.joinArrays !== void 0 ? options.joinArrays : this.options.joinArrays;
    const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
    const handleAsObject = typeof res !== "string" && typeof res !== "boolean" && typeof res !== "number";
    if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === "string" && resType === "[object Array]")) {
      if (!options.returnObjects && !this.options.returnObjects) {
        if (!this.options.returnedObjectHandler) {
          this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        }
        const r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, {
          ...options,
          ns: namespaces
        }) : `key '${key} (${this.language})' returned an object instead of string.`;
        if (returnDetails) {
          resolved.res = r;
          resolved.usedParams = this.getUsedParamsDetails(options);
          return resolved;
        }
        return r;
      }
      if (keySeparator) {
        const resTypeIsArray = resType === "[object Array]";
        const copy2 = resTypeIsArray ? [] : {};
        const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
        for (const m in res) {
          if (Object.prototype.hasOwnProperty.call(res, m)) {
            const deepKey = `${newKeyToUse}${keySeparator}${m}`;
            copy2[m] = this.translate(deepKey, {
              ...options,
              ...{
                joinArrays: false,
                ns: namespaces
              }
            });
            if (copy2[m] === deepKey)
              copy2[m] = res[m];
          }
        }
        res = copy2;
      }
    } else if (handleAsObjectInI18nFormat && typeof joinArrays === "string" && resType === "[object Array]") {
      res = res.join(joinArrays);
      if (res)
        res = this.extendTranslation(res, keys, options, lastKey);
    } else {
      let usedDefault = false;
      let usedKey = false;
      const needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
      const hasDefaultValue = Translator.hasDefaultValue(options);
      const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : "";
      const defaultValueSuffixOrdinalFallback = options.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, {
        ordinal: false
      }) : "";
      const defaultValue = options[`defaultValue${defaultValueSuffix}`] || options[`defaultValue${defaultValueSuffixOrdinalFallback}`] || options.defaultValue;
      if (!this.isValidLookup(res) && hasDefaultValue) {
        usedDefault = true;
        res = defaultValue;
      }
      if (!this.isValidLookup(res)) {
        usedKey = true;
        res = key;
      }
      const missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
      const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? void 0 : res;
      const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
      if (usedKey || usedDefault || updateMissing) {
        this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, key, updateMissing ? defaultValue : res);
        if (keySeparator) {
          const fk = this.resolve(key, {
            ...options,
            keySeparator: false
          });
          if (fk && fk.res)
            this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let lngs = [];
        const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) {
          for (let i = 0; i < fallbackLngs.length; i++) {
            lngs.push(fallbackLngs[i]);
          }
        } else if (this.options.saveMissingTo === "all") {
          lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
        } else {
          lngs.push(options.lng || this.language);
        }
        const send = (l, k, specificDefaultValue) => {
          const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
          if (this.options.missingKeyHandler) {
            this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
          } else if (this.backendConnector && this.backendConnector.saveMissing) {
            this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
          }
          this.emit("missingKey", l, namespace, k, res);
        };
        if (this.options.saveMissing) {
          if (this.options.saveMissingPlurals && needsPluralHandling) {
            lngs.forEach((language) => {
              this.pluralResolver.getSuffixes(language, options).forEach((suffix) => {
                send([language], key + suffix, options[`defaultValue${suffix}`] || defaultValue);
              });
            });
          } else {
            send(lngs, key, defaultValue);
          }
        }
      }
      res = this.extendTranslation(res, keys, options, resolved, lastKey);
      if (usedKey && res === key && this.options.appendNamespaceToMissingKey)
        res = `${namespace}:${key}`;
      if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
        if (this.options.compatibilityAPI !== "v1") {
          res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}:${key}` : key, usedDefault ? res : void 0);
        } else {
          res = this.options.parseMissingKeyHandler(res);
        }
      }
    }
    if (returnDetails) {
      resolved.res = res;
      resolved.usedParams = this.getUsedParamsDetails(options);
      return resolved;
    }
    return res;
  }
  extendTranslation(res, key, options, resolved, lastKey) {
    var _this = this;
    if (this.i18nFormat && this.i18nFormat.parse) {
      res = this.i18nFormat.parse(res, {
        ...this.options.interpolation.defaultVariables,
        ...options
      }, options.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
        resolved
      });
    } else if (!options.skipInterpolation) {
      if (options.interpolation)
        this.interpolator.init({
          ...options,
          ...{
            interpolation: {
              ...this.options.interpolation,
              ...options.interpolation
            }
          }
        });
      const skipOnVariables = typeof res === "string" && (options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let nestBef;
      if (skipOnVariables) {
        const nb = res.match(this.interpolator.nestingRegexp);
        nestBef = nb && nb.length;
      }
      let data = options.replace && typeof options.replace !== "string" ? options.replace : options;
      if (this.options.interpolation.defaultVariables)
        data = {
          ...this.options.interpolation.defaultVariables,
          ...data
        };
      res = this.interpolator.interpolate(res, data, options.lng || this.language, options);
      if (skipOnVariables) {
        const na = res.match(this.interpolator.nestingRegexp);
        const nestAft = na && na.length;
        if (nestBef < nestAft)
          options.nest = false;
      }
      if (!options.lng && this.options.compatibilityAPI !== "v1" && resolved && resolved.res)
        options.lng = resolved.usedLng;
      if (options.nest !== false)
        res = this.interpolator.nest(res, function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          if (lastKey && lastKey[0] === args[0] && !options.context) {
            _this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
            return null;
          }
          return _this.translate(...args, key);
        }, options);
      if (options.interpolation)
        this.interpolator.reset();
    }
    const postProcess = options.postProcess || this.options.postProcess;
    const postProcessorNames = typeof postProcess === "string" ? [postProcess] : postProcess;
    if (res !== void 0 && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
      res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
        i18nResolved: {
          ...resolved,
          usedParams: this.getUsedParamsDetails(options)
        },
        ...options
      } : options, this);
    }
    return res;
  }
  resolve(keys) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let found;
    let usedKey;
    let exactUsedKey;
    let usedLng;
    let usedNS;
    if (typeof keys === "string")
      keys = [keys];
    keys.forEach((k) => {
      if (this.isValidLookup(found))
        return;
      const extracted = this.extractFromKey(k, options);
      const key = extracted.key;
      usedKey = key;
      let namespaces = extracted.namespaces;
      if (this.options.fallbackNS)
        namespaces = namespaces.concat(this.options.fallbackNS);
      const needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
      const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && this.pluralResolver.shouldUseIntlApi();
      const needsContextHandling = options.context !== void 0 && (typeof options.context === "string" || typeof options.context === "number") && options.context !== "";
      const codes = options.lngs ? options.lngs : this.languageUtils.toResolveHierarchy(options.lng || this.language, options.fallbackLng);
      namespaces.forEach((ns) => {
        if (this.isValidLookup(found))
          return;
        usedNS = ns;
        if (!checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(usedNS)) {
          checkedLoadedFor[`${codes[0]}-${ns}`] = true;
          this.logger.warn(`key "${usedKey}" for languages "${codes.join(", ")}" won't get resolved as namespace "${usedNS}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        }
        codes.forEach((code) => {
          if (this.isValidLookup(found))
            return;
          usedLng = code;
          const finalKeys = [key];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys) {
            this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
          } else {
            let pluralSuffix;
            if (needsPluralHandling)
              pluralSuffix = this.pluralResolver.getSuffix(code, options.count, options);
            const zeroSuffix = `${this.options.pluralSeparator}zero`;
            const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (needsPluralHandling) {
              finalKeys.push(key + pluralSuffix);
              if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
              }
              if (needsZeroSuffixLookup) {
                finalKeys.push(key + zeroSuffix);
              }
            }
            if (needsContextHandling) {
              const contextKey = `${key}${this.options.contextSeparator}${options.context}`;
              finalKeys.push(contextKey);
              if (needsPluralHandling) {
                finalKeys.push(contextKey + pluralSuffix);
                if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                  finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                }
                if (needsZeroSuffixLookup) {
                  finalKeys.push(contextKey + zeroSuffix);
                }
              }
            }
          }
          let possibleKey;
          while (possibleKey = finalKeys.pop()) {
            if (!this.isValidLookup(found)) {
              exactUsedKey = possibleKey;
              found = this.getResource(code, ns, possibleKey, options);
            }
          }
        });
      });
    });
    return {
      res: found,
      usedKey,
      exactUsedKey,
      usedLng,
      usedNS
    };
  }
  isValidLookup(res) {
    return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
  }
  getResource(code, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (this.i18nFormat && this.i18nFormat.getResource)
      return this.i18nFormat.getResource(code, ns, key, options);
    return this.resourceStore.getResource(code, ns, key, options);
  }
  getUsedParamsDetails() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const optionsKeys = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"];
    const useOptionsReplaceForData = options.replace && typeof options.replace !== "string";
    let data = useOptionsReplaceForData ? options.replace : options;
    if (useOptionsReplaceForData && typeof options.count !== "undefined") {
      data.count = options.count;
    }
    if (this.options.interpolation.defaultVariables) {
      data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
    }
    if (!useOptionsReplaceForData) {
      data = {
        ...data
      };
      for (const key of optionsKeys) {
        delete data[key];
      }
    }
    return data;
  }
  static hasDefaultValue(options) {
    const prefix = "defaultValue";
    for (const option in options) {
      if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && void 0 !== options[option]) {
        return true;
      }
    }
    return false;
  }
};
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
var LanguageUtil = class {
  constructor(options) {
    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create("languageUtils");
  }
  getScriptPartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf("-") < 0)
      return null;
    const p = code.split("-");
    if (p.length === 2)
      return null;
    p.pop();
    if (p[p.length - 1].toLowerCase() === "x")
      return null;
    return this.formatLanguageCode(p.join("-"));
  }
  getLanguagePartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf("-") < 0)
      return code;
    const p = code.split("-");
    return this.formatLanguageCode(p[0]);
  }
  formatLanguageCode(code) {
    if (typeof code === "string" && code.indexOf("-") > -1) {
      const specialCases = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let p = code.split("-");
      if (this.options.lowerCaseLng) {
        p = p.map((part) => part.toLowerCase());
      } else if (p.length === 2) {
        p[0] = p[0].toLowerCase();
        p[1] = p[1].toUpperCase();
        if (specialCases.indexOf(p[1].toLowerCase()) > -1)
          p[1] = capitalize(p[1].toLowerCase());
      } else if (p.length === 3) {
        p[0] = p[0].toLowerCase();
        if (p[1].length === 2)
          p[1] = p[1].toUpperCase();
        if (p[0] !== "sgn" && p[2].length === 2)
          p[2] = p[2].toUpperCase();
        if (specialCases.indexOf(p[1].toLowerCase()) > -1)
          p[1] = capitalize(p[1].toLowerCase());
        if (specialCases.indexOf(p[2].toLowerCase()) > -1)
          p[2] = capitalize(p[2].toLowerCase());
      }
      return p.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
  }
  isSupportedCode(code) {
    if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
      code = this.getLanguagePartFromCode(code);
    }
    return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
  }
  getBestMatchFromCodes(codes) {
    if (!codes)
      return null;
    let found;
    codes.forEach((code) => {
      if (found)
        return;
      const cleanedLng = this.formatLanguageCode(code);
      if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng))
        found = cleanedLng;
    });
    if (!found && this.options.supportedLngs) {
      codes.forEach((code) => {
        if (found)
          return;
        const lngOnly = this.getLanguagePartFromCode(code);
        if (this.isSupportedCode(lngOnly))
          return found = lngOnly;
        found = this.options.supportedLngs.find((supportedLng) => {
          if (supportedLng === lngOnly)
            return supportedLng;
          if (supportedLng.indexOf("-") < 0 && lngOnly.indexOf("-") < 0)
            return;
          if (supportedLng.indexOf(lngOnly) === 0)
            return supportedLng;
        });
      });
    }
    if (!found)
      found = this.getFallbackCodes(this.options.fallbackLng)[0];
    return found;
  }
  getFallbackCodes(fallbacks, code) {
    if (!fallbacks)
      return [];
    if (typeof fallbacks === "function")
      fallbacks = fallbacks(code);
    if (typeof fallbacks === "string")
      fallbacks = [fallbacks];
    if (Object.prototype.toString.apply(fallbacks) === "[object Array]")
      return fallbacks;
    if (!code)
      return fallbacks.default || [];
    let found = fallbacks[code];
    if (!found)
      found = fallbacks[this.getScriptPartFromCode(code)];
    if (!found)
      found = fallbacks[this.formatLanguageCode(code)];
    if (!found)
      found = fallbacks[this.getLanguagePartFromCode(code)];
    if (!found)
      found = fallbacks.default;
    return found || [];
  }
  toResolveHierarchy(code, fallbackCode) {
    const fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
    const codes = [];
    const addCode = (c) => {
      if (!c)
        return;
      if (this.isSupportedCode(c)) {
        codes.push(c);
      } else {
        this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`);
      }
    };
    if (typeof code === "string" && (code.indexOf("-") > -1 || code.indexOf("_") > -1)) {
      if (this.options.load !== "languageOnly")
        addCode(this.formatLanguageCode(code));
      if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly")
        addCode(this.getScriptPartFromCode(code));
      if (this.options.load !== "currentOnly")
        addCode(this.getLanguagePartFromCode(code));
    } else if (typeof code === "string") {
      addCode(this.formatLanguageCode(code));
    }
    fallbackCodes.forEach((fc) => {
      if (codes.indexOf(fc) < 0)
        addCode(this.formatLanguageCode(fc));
    });
    return codes;
  }
};
var sets = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}];
var _rulesPluralsTypes = {
  1: function(n) {
    return Number(n > 1);
  },
  2: function(n) {
    return Number(n != 1);
  },
  3: function(n) {
    return 0;
  },
  4: function(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function(n) {
    return Number(n >= 2);
  },
  10: function(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function(n) {
    return Number(n !== 0);
  },
  14: function(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function(n) {
    return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
  },
  18: function(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  },
  22: function(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
  }
};
var nonIntlVersions = ["v1", "v2", "v3"];
var intlVersions = ["v4"];
var suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function createRules() {
  const rules = {};
  sets.forEach((set) => {
    set.lngs.forEach((l) => {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}
var PluralResolver = class {
  constructor(languageUtils) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create("pluralResolver");
    if ((!this.options.compatibilityJSON || intlVersions.includes(this.options.compatibilityJSON)) && (typeof Intl === "undefined" || !Intl.PluralRules)) {
      this.options.compatibilityJSON = "v3";
      this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.");
    }
    this.rules = createRules();
  }
  addRule(lng, obj) {
    this.rules[lng] = obj;
  }
  getRule(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      try {
        return new Intl.PluralRules(getCleanedCode(code), {
          type: options.ordinal ? "ordinal" : "cardinal"
        });
      } catch (err) {
        return;
      }
    }
    return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
  }
  needsPlural(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const rule = this.getRule(code, options);
    if (this.shouldUseIntlApi()) {
      return rule && rule.resolvedOptions().pluralCategories.length > 1;
    }
    return rule && rule.numbers.length > 1;
  }
  getPluralFormsOfKey(code, key) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(code, options).map((suffix) => `${key}${suffix}`);
  }
  getSuffixes(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const rule = this.getRule(code, options);
    if (!rule) {
      return [];
    }
    if (this.shouldUseIntlApi()) {
      return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map((pluralCategory) => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${pluralCategory}`);
    }
    return rule.numbers.map((number) => this.getSuffix(code, number, options));
  }
  getSuffix(code, count) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const rule = this.getRule(code, options);
    if (rule) {
      if (this.shouldUseIntlApi()) {
        return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${rule.select(count)}`;
      }
      return this.getSuffixRetroCompatible(rule, count);
    }
    this.logger.warn(`no plural rule found for: ${code}`);
    return "";
  }
  getSuffixRetroCompatible(rule, count) {
    const idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
    let suffix = rule.numbers[idx];
    if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
      if (suffix === 2) {
        suffix = "plural";
      } else if (suffix === 1) {
        suffix = "";
      }
    }
    const returnSuffix = () => this.options.prepend && suffix.toString() ? this.options.prepend + suffix.toString() : suffix.toString();
    if (this.options.compatibilityJSON === "v1") {
      if (suffix === 1)
        return "";
      if (typeof suffix === "number")
        return `_plural_${suffix.toString()}`;
      return returnSuffix();
    } else if (this.options.compatibilityJSON === "v2") {
      return returnSuffix();
    } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
      return returnSuffix();
    }
    return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
  }
  shouldUseIntlApi() {
    return !nonIntlVersions.includes(this.options.compatibilityJSON);
  }
};
function deepFindWithDefaults(data, defaultData, key) {
  let keySeparator = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".";
  let ignoreJSONStructure = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
  let path2 = getPathWithDefaults(data, defaultData, key);
  if (!path2 && ignoreJSONStructure && typeof key === "string") {
    path2 = deepFind(data, key, keySeparator);
    if (path2 === void 0)
      path2 = deepFind(defaultData, key, keySeparator);
  }
  return path2;
}
var Interpolator = class {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = baseLogger.create("interpolator");
    this.options = options;
    this.format = options.interpolation && options.interpolation.format || ((value) => value);
    this.init(options);
  }
  init() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!options.interpolation)
      options.interpolation = {
        escapeValue: true
      };
    const iOpts = options.interpolation;
    this.escape = iOpts.escape !== void 0 ? iOpts.escape : escape;
    this.escapeValue = iOpts.escapeValue !== void 0 ? iOpts.escapeValue : true;
    this.useRawValueToEscape = iOpts.useRawValueToEscape !== void 0 ? iOpts.useRawValueToEscape : false;
    this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || "{{";
    this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || "}}";
    this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
    this.unescapePrefix = iOpts.unescapeSuffix ? "" : iOpts.unescapePrefix || "-";
    this.unescapeSuffix = this.unescapePrefix ? "" : iOpts.unescapeSuffix || "";
    this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape("$t(");
    this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(")");
    this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ",";
    this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1e3;
    this.alwaysFormat = iOpts.alwaysFormat !== void 0 ? iOpts.alwaysFormat : false;
    this.resetRegExp();
  }
  reset() {
    if (this.options)
      this.init(this.options);
  }
  resetRegExp() {
    const regexpStr = `${this.prefix}(.+?)${this.suffix}`;
    this.regexp = new RegExp(regexpStr, "g");
    const regexpUnescapeStr = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
    this.regexpUnescape = new RegExp(regexpUnescapeStr, "g");
    const nestingRegexpStr = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
    this.nestingRegexp = new RegExp(nestingRegexpStr, "g");
  }
  interpolate(str, data, lng, options) {
    let match;
    let value;
    let replaces;
    const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function regexSafe(val) {
      return val.replace(/\$/g, "$$$$");
    }
    const handleFormat = (key) => {
      if (key.indexOf(this.formatSeparator) < 0) {
        const path2 = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(path2, void 0, lng, {
          ...options,
          ...data,
          interpolationkey: key
        }) : path2;
      }
      const p = key.split(this.formatSeparator);
      const k = p.shift().trim();
      const f = p.join(this.formatSeparator).trim();
      return this.format(deepFindWithDefaults(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
        ...options,
        ...data,
        interpolationkey: k
      });
    };
    this.resetRegExp();
    const missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
    const skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    const todos = [{
      regex: this.regexpUnescape,
      safeValue: (val) => regexSafe(val)
    }, {
      regex: this.regexp,
      safeValue: (val) => this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
    }];
    todos.forEach((todo) => {
      replaces = 0;
      while (match = todo.regex.exec(str)) {
        const matchedVar = match[1].trim();
        value = handleFormat(matchedVar);
        if (value === void 0) {
          if (typeof missingInterpolationHandler === "function") {
            const temp = missingInterpolationHandler(str, match, options);
            value = typeof temp === "string" ? temp : "";
          } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
            value = "";
          } else if (skipOnVariables) {
            value = match[0];
            continue;
          } else {
            this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
            value = "";
          }
        } else if (typeof value !== "string" && !this.useRawValueToEscape) {
          value = makeString(value);
        }
        const safeValue = todo.safeValue(value);
        str = str.replace(match[0], safeValue);
        if (skipOnVariables) {
          todo.regex.lastIndex += value.length;
          todo.regex.lastIndex -= match[0].length;
        } else {
          todo.regex.lastIndex = 0;
        }
        replaces++;
        if (replaces >= this.maxReplaces) {
          break;
        }
      }
    });
    return str;
  }
  nest(str, fc) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    let match;
    let value;
    let clonedOptions;
    function handleHasOptions(key, inheritedOptions) {
      const sep = this.nestingOptionsSeparator;
      if (key.indexOf(sep) < 0)
        return key;
      const c = key.split(new RegExp(`${sep}[ ]*{`));
      let optionsString = `{${c[1]}`;
      key = c[0];
      optionsString = this.interpolate(optionsString, clonedOptions);
      const matchedSingleQuotes = optionsString.match(/'/g);
      const matchedDoubleQuotes = optionsString.match(/"/g);
      if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
        optionsString = optionsString.replace(/'/g, '"');
      }
      try {
        clonedOptions = JSON.parse(optionsString);
        if (inheritedOptions)
          clonedOptions = {
            ...inheritedOptions,
            ...clonedOptions
          };
      } catch (e) {
        this.logger.warn(`failed parsing options string in nesting for key ${key}`, e);
        return `${key}${sep}${optionsString}`;
      }
      delete clonedOptions.defaultValue;
      return key;
    }
    while (match = this.nestingRegexp.exec(str)) {
      let formatters = [];
      clonedOptions = {
        ...options
      };
      clonedOptions = clonedOptions.replace && typeof clonedOptions.replace !== "string" ? clonedOptions.replace : clonedOptions;
      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;
      let doReduce = false;
      if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
        const r = match[1].split(this.formatSeparator).map((elem) => elem.trim());
        match[1] = r.shift();
        formatters = r;
        doReduce = true;
      }
      value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
      if (value && match[0] === str && typeof value !== "string")
        return value;
      if (typeof value !== "string")
        value = makeString(value);
      if (!value) {
        this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
        value = "";
      }
      if (doReduce) {
        value = formatters.reduce((v, f) => this.format(v, f, options.lng, {
          ...options,
          interpolationkey: match[1].trim()
        }), value.trim());
      }
      str = str.replace(match[0], value);
      this.regexp.lastIndex = 0;
    }
    return str;
  }
};
function parseFormatStr(formatStr) {
  let formatName = formatStr.toLowerCase().trim();
  const formatOptions = {};
  if (formatStr.indexOf("(") > -1) {
    const p = formatStr.split("(");
    formatName = p[0].toLowerCase().trim();
    const optStr = p[1].substring(0, p[1].length - 1);
    if (formatName === "currency" && optStr.indexOf(":") < 0) {
      if (!formatOptions.currency)
        formatOptions.currency = optStr.trim();
    } else if (formatName === "relativetime" && optStr.indexOf(":") < 0) {
      if (!formatOptions.range)
        formatOptions.range = optStr.trim();
    } else {
      const opts = optStr.split(";");
      opts.forEach((opt) => {
        if (!opt)
          return;
        const [key, ...rest] = opt.split(":");
        const val = rest.join(":").trim().replace(/^'+|'+$/g, "");
        if (!formatOptions[key.trim()])
          formatOptions[key.trim()] = val;
        if (val === "false")
          formatOptions[key.trim()] = false;
        if (val === "true")
          formatOptions[key.trim()] = true;
        if (!isNaN(val))
          formatOptions[key.trim()] = parseInt(val, 10);
      });
    }
  }
  return {
    formatName,
    formatOptions
  };
}
function createCachedFormatter(fn) {
  const cache = {};
  return function invokeFormatter(val, lng, options) {
    const key = lng + JSON.stringify(options);
    let formatter = cache[key];
    if (!formatter) {
      formatter = fn(getCleanedCode(lng), options);
      cache[key] = formatter;
    }
    return formatter(val);
  };
}
var Formatter = class {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = baseLogger.create("formatter");
    this.options = options;
    this.formats = {
      number: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      }),
      currency: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt,
          style: "currency"
        });
        return (val) => formatter.format(val);
      }),
      datetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.DateTimeFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      }),
      relativetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.RelativeTimeFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val, opt.range || "day");
      }),
      list: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.ListFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      })
    };
    this.init(options);
  }
  init(services) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    const iOpts = options.interpolation;
    this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
  }
  add(name, fc) {
    this.formats[name.toLowerCase().trim()] = fc;
  }
  addCached(name, fc) {
    this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
  }
  format(value, format, lng) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const formats = format.split(this.formatSeparator);
    const result = formats.reduce((mem, f) => {
      const {
        formatName,
        formatOptions
      } = parseFormatStr(f);
      if (this.formats[formatName]) {
        let formatted = mem;
        try {
          const valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
          const l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
          formatted = this.formats[formatName](mem, l, {
            ...formatOptions,
            ...options,
            ...valOptions
          });
        } catch (error) {
          this.logger.warn(error);
        }
        return formatted;
      } else {
        this.logger.warn(`there was no format function for ${formatName}`);
      }
      return mem;
    }, value);
    return result;
  }
};
function removePending(q, name) {
  if (q.pending[name] !== void 0) {
    delete q.pending[name];
    q.pendingCount--;
  }
}
var Connector = class extends EventEmitter {
  constructor(backend, store, services) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super();
    this.backend = backend;
    this.store = store;
    this.services = services;
    this.languageUtils = services.languageUtils;
    this.options = options;
    this.logger = baseLogger.create("backendConnector");
    this.waitingReads = [];
    this.maxParallelReads = options.maxParallelReads || 10;
    this.readingCalls = 0;
    this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
    this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
    this.state = {};
    this.queue = [];
    if (this.backend && this.backend.init) {
      this.backend.init(services, options.backend, options);
    }
  }
  queueLoad(languages, namespaces, options, callback) {
    const toLoad = {};
    const pending = {};
    const toLoadLanguages = {};
    const toLoadNamespaces = {};
    languages.forEach((lng) => {
      let hasAllNamespaces = true;
      namespaces.forEach((ns) => {
        const name = `${lng}|${ns}`;
        if (!options.reload && this.store.hasResourceBundle(lng, ns)) {
          this.state[name] = 2;
        } else if (this.state[name] < 0)
          ;
        else if (this.state[name] === 1) {
          if (pending[name] === void 0)
            pending[name] = true;
        } else {
          this.state[name] = 1;
          hasAllNamespaces = false;
          if (pending[name] === void 0)
            pending[name] = true;
          if (toLoad[name] === void 0)
            toLoad[name] = true;
          if (toLoadNamespaces[ns] === void 0)
            toLoadNamespaces[ns] = true;
        }
      });
      if (!hasAllNamespaces)
        toLoadLanguages[lng] = true;
    });
    if (Object.keys(toLoad).length || Object.keys(pending).length) {
      this.queue.push({
        pending,
        pendingCount: Object.keys(pending).length,
        loaded: {},
        errors: [],
        callback
      });
    }
    return {
      toLoad: Object.keys(toLoad),
      pending: Object.keys(pending),
      toLoadLanguages: Object.keys(toLoadLanguages),
      toLoadNamespaces: Object.keys(toLoadNamespaces)
    };
  }
  loaded(name, err, data) {
    const s = name.split("|");
    const lng = s[0];
    const ns = s[1];
    if (err)
      this.emit("failedLoading", lng, ns, err);
    if (data) {
      this.store.addResourceBundle(lng, ns, data);
    }
    this.state[name] = err ? -1 : 2;
    const loaded = {};
    this.queue.forEach((q) => {
      pushPath(q.loaded, [lng], ns);
      removePending(q, name);
      if (err)
        q.errors.push(err);
      if (q.pendingCount === 0 && !q.done) {
        Object.keys(q.loaded).forEach((l) => {
          if (!loaded[l])
            loaded[l] = {};
          const loadedKeys = q.loaded[l];
          if (loadedKeys.length) {
            loadedKeys.forEach((n) => {
              if (loaded[l][n] === void 0)
                loaded[l][n] = true;
            });
          }
        });
        q.done = true;
        if (q.errors.length) {
          q.callback(q.errors);
        } else {
          q.callback();
        }
      }
    });
    this.emit("loaded", loaded);
    this.queue = this.queue.filter((q) => !q.done);
  }
  read(lng, ns, fcName) {
    let tried = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    let wait = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout;
    let callback = arguments.length > 5 ? arguments[5] : void 0;
    if (!lng.length)
      return callback(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng,
        ns,
        fcName,
        tried,
        wait,
        callback
      });
      return;
    }
    this.readingCalls++;
    const resolver = (err, data) => {
      this.readingCalls--;
      if (this.waitingReads.length > 0) {
        const next = this.waitingReads.shift();
        this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
      }
      if (err && data && tried < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
        }, wait);
        return;
      }
      callback(err, data);
    };
    const fc = this.backend[fcName].bind(this.backend);
    if (fc.length === 2) {
      try {
        const r = fc(lng, ns);
        if (r && typeof r.then === "function") {
          r.then((data) => resolver(null, data)).catch(resolver);
        } else {
          resolver(null, r);
        }
      } catch (err) {
        resolver(err);
      }
      return;
    }
    return fc(lng, ns, resolver);
  }
  prepareLoading(languages, namespaces) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    let callback = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend) {
      this.logger.warn("No backend was added via i18next.use. Will not load resources.");
      return callback && callback();
    }
    if (typeof languages === "string")
      languages = this.languageUtils.toResolveHierarchy(languages);
    if (typeof namespaces === "string")
      namespaces = [namespaces];
    const toLoad = this.queueLoad(languages, namespaces, options, callback);
    if (!toLoad.toLoad.length) {
      if (!toLoad.pending.length)
        callback();
      return null;
    }
    toLoad.toLoad.forEach((name) => {
      this.loadOne(name);
    });
  }
  load(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {}, callback);
  }
  reload(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {
      reload: true
    }, callback);
  }
  loadOne(name) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const s = name.split("|");
    const lng = s[0];
    const ns = s[1];
    this.read(lng, ns, "read", void 0, void 0, (err, data) => {
      if (err)
        this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
      if (!err && data)
        this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
      this.loaded(name, err, data);
    });
  }
  saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
    let options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
    let clb = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
      this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (key === void 0 || key === null || key === "")
      return;
    if (this.backend && this.backend.create) {
      const opts = {
        ...options,
        isUpdate
      };
      const fc = this.backend.create.bind(this.backend);
      if (fc.length < 6) {
        try {
          let r;
          if (fc.length === 5) {
            r = fc(languages, namespace, key, fallbackValue, opts);
          } else {
            r = fc(languages, namespace, key, fallbackValue);
          }
          if (r && typeof r.then === "function") {
            r.then((data) => clb(null, data)).catch(clb);
          } else {
            clb(null, r);
          }
        } catch (err) {
          clb(err);
        }
      } else {
        fc(languages, namespace, key, fallbackValue, clb, opts);
      }
    }
    if (!languages || !languages[0])
      return;
    this.store.addResource(languages[0], namespace, key, fallbackValue);
  }
};
function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: "all",
    preload: false,
    simplifyPluralSuffix: true,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: "fallback",
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: false,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle(args) {
      let ret = {};
      if (typeof args[1] === "object")
        ret = args[1];
      if (typeof args[1] === "string")
        ret.defaultValue = args[1];
      if (typeof args[2] === "string")
        ret.tDescription = args[2];
      if (typeof args[2] === "object" || typeof args[3] === "object") {
        const options = args[3] || args[2];
        Object.keys(options).forEach((key) => {
          ret[key] = options[key];
        });
      }
      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: (value, format, lng, options) => value,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: true
    }
  };
}
function transformOptions(options) {
  if (typeof options.ns === "string")
    options.ns = [options.ns];
  if (typeof options.fallbackLng === "string")
    options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === "string")
    options.fallbackNS = [options.fallbackNS];
  if (options.supportedLngs && options.supportedLngs.indexOf("cimode") < 0) {
    options.supportedLngs = options.supportedLngs.concat(["cimode"]);
  }
  return options;
}
function noop() {
}
function bindMemberFunctions(inst) {
  const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach((mem) => {
    if (typeof inst[mem] === "function") {
      inst[mem] = inst[mem].bind(inst);
    }
  });
}
var I18n = class extends EventEmitter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    super();
    this.options = transformOptions(options);
    this.services = {};
    this.logger = baseLogger;
    this.modules = {
      external: []
    };
    bindMemberFunctions(this);
    if (callback && !this.isInitialized && !options.isClone) {
      if (!this.options.initImmediate) {
        this.init(options, callback);
        return this;
      }
      setTimeout(() => {
        this.init(options, callback);
      }, 0);
    }
  }
  init() {
    var _this = this;
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (!options.defaultNS && options.defaultNS !== false && options.ns) {
      if (typeof options.ns === "string") {
        options.defaultNS = options.ns;
      } else if (options.ns.indexOf("translation") < 0) {
        options.defaultNS = options.ns[0];
      }
    }
    const defOpts = get();
    this.options = {
      ...defOpts,
      ...this.options,
      ...transformOptions(options)
    };
    if (this.options.compatibilityAPI !== "v1") {
      this.options.interpolation = {
        ...defOpts.interpolation,
        ...this.options.interpolation
      };
    }
    if (options.keySeparator !== void 0) {
      this.options.userDefinedKeySeparator = options.keySeparator;
    }
    if (options.nsSeparator !== void 0) {
      this.options.userDefinedNsSeparator = options.nsSeparator;
    }
    function createClassOnDemand(ClassOrObject) {
      if (!ClassOrObject)
        return null;
      if (typeof ClassOrObject === "function")
        return new ClassOrObject();
      return ClassOrObject;
    }
    if (!this.options.isClone) {
      if (this.modules.logger) {
        baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
      } else {
        baseLogger.init(null, this.options);
      }
      let formatter;
      if (this.modules.formatter) {
        formatter = this.modules.formatter;
      } else if (typeof Intl !== "undefined") {
        formatter = Formatter;
      }
      const lu = new LanguageUtil(this.options);
      this.store = new ResourceStore(this.options.resources, this.options);
      const s = this.services;
      s.logger = baseLogger;
      s.resourceStore = this.store;
      s.languageUtils = lu;
      s.pluralResolver = new PluralResolver(lu, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      });
      if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
        s.formatter = createClassOnDemand(formatter);
        s.formatter.init(s, this.options);
        this.options.interpolation.format = s.formatter.format.bind(s.formatter);
      }
      s.interpolator = new Interpolator(this.options);
      s.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      };
      s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
      s.backendConnector.on("*", function(event) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        _this.emit(event, ...args);
      });
      if (this.modules.languageDetector) {
        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
        if (s.languageDetector.init)
          s.languageDetector.init(s, this.options.detection, this.options);
      }
      if (this.modules.i18nFormat) {
        s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
        if (s.i18nFormat.init)
          s.i18nFormat.init(this);
      }
      this.translator = new Translator(this.services, this.options);
      this.translator.on("*", function(event) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        _this.emit(event, ...args);
      });
      this.modules.external.forEach((m) => {
        if (m.init)
          m.init(this);
      });
    }
    this.format = this.options.interpolation.format;
    if (!callback)
      callback = noop;
    if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      if (codes.length > 0 && codes[0] !== "dev")
        this.options.lng = codes[0];
    }
    if (!this.services.languageDetector && !this.options.lng) {
      this.logger.warn("init: no languageDetector is used and no lng is defined");
    }
    const storeApi = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
    storeApi.forEach((fcName) => {
      this[fcName] = function() {
        return _this.store[fcName](...arguments);
      };
    });
    const storeApiChained = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
    storeApiChained.forEach((fcName) => {
      this[fcName] = function() {
        _this.store[fcName](...arguments);
        return _this;
      };
    });
    const deferred = defer();
    const load = () => {
      const finish = (err, t2) => {
        if (this.isInitialized && !this.initializedStoreOnce)
          this.logger.warn("init: i18next is already initialized. You should call init just once!");
        this.isInitialized = true;
        if (!this.options.isClone)
          this.logger.log("initialized", this.options);
        this.emit("initialized", this.options);
        deferred.resolve(t2);
        callback(err, t2);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return finish(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, finish);
    };
    if (this.options.resources || !this.options.initImmediate) {
      load();
    } else {
      setTimeout(load, 0);
    }
    return deferred;
  }
  loadResources(language) {
    let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    let usedCallback = callback;
    const usedLng = typeof language === "string" ? language : this.language;
    if (typeof language === "function")
      usedCallback = language;
    if (!this.options.resources || this.options.partialBundledLanguages) {
      if (usedLng && usedLng.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return usedCallback();
      const toLoad = [];
      const append = (lng) => {
        if (!lng)
          return;
        if (lng === "cimode")
          return;
        const lngs = this.services.languageUtils.toResolveHierarchy(lng);
        lngs.forEach((l) => {
          if (l === "cimode")
            return;
          if (toLoad.indexOf(l) < 0)
            toLoad.push(l);
        });
      };
      if (!usedLng) {
        const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        fallbacks.forEach((l) => append(l));
      } else {
        append(usedLng);
      }
      if (this.options.preload) {
        this.options.preload.forEach((l) => append(l));
      }
      this.services.backendConnector.load(toLoad, this.options.ns, (e) => {
        if (!e && !this.resolvedLanguage && this.language)
          this.setResolvedLanguage(this.language);
        usedCallback(e);
      });
    } else {
      usedCallback(null);
    }
  }
  reloadResources(lngs, ns, callback) {
    const deferred = defer();
    if (!lngs)
      lngs = this.languages;
    if (!ns)
      ns = this.options.ns;
    if (!callback)
      callback = noop;
    this.services.backendConnector.reload(lngs, ns, (err) => {
      deferred.resolve();
      callback(err);
    });
    return deferred;
  }
  use(module) {
    if (!module)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!module.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    if (module.type === "backend") {
      this.modules.backend = module;
    }
    if (module.type === "logger" || module.log && module.warn && module.error) {
      this.modules.logger = module;
    }
    if (module.type === "languageDetector") {
      this.modules.languageDetector = module;
    }
    if (module.type === "i18nFormat") {
      this.modules.i18nFormat = module;
    }
    if (module.type === "postProcessor") {
      postProcessor.addPostProcessor(module);
    }
    if (module.type === "formatter") {
      this.modules.formatter = module;
    }
    if (module.type === "3rdParty") {
      this.modules.external.push(module);
    }
    return this;
  }
  setResolvedLanguage(l) {
    if (!l || !this.languages)
      return;
    if (["cimode", "dev"].indexOf(l) > -1)
      return;
    for (let li = 0; li < this.languages.length; li++) {
      const lngInLngs = this.languages[li];
      if (["cimode", "dev"].indexOf(lngInLngs) > -1)
        continue;
      if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
        this.resolvedLanguage = lngInLngs;
        break;
      }
    }
  }
  changeLanguage(lng, callback) {
    var _this2 = this;
    this.isLanguageChangingTo = lng;
    const deferred = defer();
    this.emit("languageChanging", lng);
    const setLngProps = (l) => {
      this.language = l;
      this.languages = this.services.languageUtils.toResolveHierarchy(l);
      this.resolvedLanguage = void 0;
      this.setResolvedLanguage(l);
    };
    const done = (err, l) => {
      if (l) {
        setLngProps(l);
        this.translator.changeLanguage(l);
        this.isLanguageChangingTo = void 0;
        this.emit("languageChanged", l);
        this.logger.log("languageChanged", l);
      } else {
        this.isLanguageChangingTo = void 0;
      }
      deferred.resolve(function() {
        return _this2.t(...arguments);
      });
      if (callback)
        callback(err, function() {
          return _this2.t(...arguments);
        });
    };
    const setLng = (lngs) => {
      if (!lng && !lngs && this.services.languageDetector)
        lngs = [];
      const l = typeof lngs === "string" ? lngs : this.services.languageUtils.getBestMatchFromCodes(lngs);
      if (l) {
        if (!this.language) {
          setLngProps(l);
        }
        if (!this.translator.language)
          this.translator.changeLanguage(l);
        if (this.services.languageDetector && this.services.languageDetector.cacheUserLanguage)
          this.services.languageDetector.cacheUserLanguage(l);
      }
      this.loadResources(l, (err) => {
        done(err, l);
      });
    };
    if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
      setLng(this.services.languageDetector.detect());
    } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
      if (this.services.languageDetector.detect.length === 0) {
        this.services.languageDetector.detect().then(setLng);
      } else {
        this.services.languageDetector.detect(setLng);
      }
    } else {
      setLng(lng);
    }
    return deferred;
  }
  getFixedT(lng, ns, keyPrefix) {
    var _this3 = this;
    const fixedT = function(key, opts) {
      let options;
      if (typeof opts !== "object") {
        for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          rest[_key3 - 2] = arguments[_key3];
        }
        options = _this3.options.overloadTranslationOptionHandler([key, opts].concat(rest));
      } else {
        options = {
          ...opts
        };
      }
      options.lng = options.lng || fixedT.lng;
      options.lngs = options.lngs || fixedT.lngs;
      options.ns = options.ns || fixedT.ns;
      options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
      const keySeparator = _this3.options.keySeparator || ".";
      let resultKey;
      if (options.keyPrefix && Array.isArray(key)) {
        resultKey = key.map((k) => `${options.keyPrefix}${keySeparator}${k}`);
      } else {
        resultKey = options.keyPrefix ? `${options.keyPrefix}${keySeparator}${key}` : key;
      }
      return _this3.t(resultKey, options);
    };
    if (typeof lng === "string") {
      fixedT.lng = lng;
    } else {
      fixedT.lngs = lng;
    }
    fixedT.ns = ns;
    fixedT.keyPrefix = keyPrefix;
    return fixedT;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(ns) {
    this.options.defaultNS = ns;
  }
  hasLoadedNamespace(ns) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized) {
      this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
      return false;
    }
    if (!this.languages || !this.languages.length) {
      this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
      return false;
    }
    const lng = options.lng || this.resolvedLanguage || this.languages[0];
    const fallbackLng = this.options ? this.options.fallbackLng : false;
    const lastLng = this.languages[this.languages.length - 1];
    if (lng.toLowerCase() === "cimode")
      return true;
    const loadNotPending = (l, n) => {
      const loadState = this.services.backendConnector.state[`${l}|${n}`];
      return loadState === -1 || loadState === 2;
    };
    if (options.precheck) {
      const preResult = options.precheck(this, loadNotPending);
      if (preResult !== void 0)
        return preResult;
    }
    if (this.hasResourceBundle(lng, ns))
      return true;
    if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages)
      return true;
    if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns)))
      return true;
    return false;
  }
  loadNamespaces(ns, callback) {
    const deferred = defer();
    if (!this.options.ns) {
      if (callback)
        callback();
      return Promise.resolve();
    }
    if (typeof ns === "string")
      ns = [ns];
    ns.forEach((n) => {
      if (this.options.ns.indexOf(n) < 0)
        this.options.ns.push(n);
    });
    this.loadResources((err) => {
      deferred.resolve();
      if (callback)
        callback(err);
    });
    return deferred;
  }
  loadLanguages(lngs, callback) {
    const deferred = defer();
    if (typeof lngs === "string")
      lngs = [lngs];
    const preloaded = this.options.preload || [];
    const newLngs = lngs.filter((lng) => preloaded.indexOf(lng) < 0);
    if (!newLngs.length) {
      if (callback)
        callback();
      return Promise.resolve();
    }
    this.options.preload = preloaded.concat(newLngs);
    this.loadResources((err) => {
      deferred.resolve();
      if (callback)
        callback(err);
    });
    return deferred;
  }
  dir(lng) {
    if (!lng)
      lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
    if (!lng)
      return "rtl";
    const rtlLngs = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
    const languageUtils = this.services && this.services.languageUtils || new LanguageUtil(get());
    return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    return new I18n(options, callback);
  }
  cloneInstance() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    const forkResourceStore = options.forkResourceStore;
    if (forkResourceStore)
      delete options.forkResourceStore;
    const mergedOptions = {
      ...this.options,
      ...options,
      ...{
        isClone: true
      }
    };
    const clone = new I18n(mergedOptions);
    if (options.debug !== void 0 || options.prefix !== void 0) {
      clone.logger = clone.logger.clone(options);
    }
    const membersToCopy = ["store", "services", "language"];
    membersToCopy.forEach((m) => {
      clone[m] = this[m];
    });
    clone.services = {
      ...this.services
    };
    clone.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    if (forkResourceStore) {
      clone.store = new ResourceStore(this.store.data, mergedOptions);
      clone.services.resourceStore = clone.store;
    }
    clone.translator = new Translator(clone.services, mergedOptions);
    clone.translator.on("*", function(event) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }
      clone.emit(event, ...args);
    });
    clone.init(mergedOptions, callback);
    clone.translator.options = mergedOptions;
    clone.translator.backendConnector.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    return clone;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
};
var instance = I18n.createInstance();
instance.createInstance = I18n.createInstance;
var createInstance = instance.createInstance;
var dir = instance.dir;
var init = instance.init;
var loadResources = instance.loadResources;
var reloadResources = instance.reloadResources;
var use = instance.use;
var changeLanguage = instance.changeLanguage;
var getFixedT = instance.getFixedT;
var t = instance.t;
var exists = instance.exists;
var setDefaultNamespace = instance.setDefaultNamespace;
var hasLoadedNamespace = instance.hasLoadedNamespace;
var loadNamespaces = instance.loadNamespaces;
var loadLanguages = instance.loadLanguages;

// node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js
var arr = [];
var each = arr.forEach;
var slice = arr.slice;
function defaults(obj) {
  each.call(slice.call(arguments, 1), function(source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === void 0)
          obj[prop] = source[prop];
      }
    }
  });
  return obj;
}
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
var serializeCookie = function serializeCookie2(name, val, options) {
  var opt = options || {};
  opt.path = opt.path || "/";
  var value = encodeURIComponent(val);
  var str = "".concat(name, "=").concat(value);
  if (opt.maxAge > 0) {
    var maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge))
      throw new Error("maxAge should be a Number");
    str += "; Max-Age=".concat(Math.floor(maxAge));
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=".concat(opt.domain);
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=".concat(opt.path);
  }
  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== "function") {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=".concat(opt.expires.toUTCString());
  }
  if (opt.httpOnly)
    str += "; HttpOnly";
  if (opt.secure)
    str += "; Secure";
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
};
var cookie = {
  create: function create(name, value, minutes, domain) {
    var cookieOptions = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    if (minutes) {
      cookieOptions.expires = /* @__PURE__ */ new Date();
      cookieOptions.expires.setTime(cookieOptions.expires.getTime() + minutes * 60 * 1e3);
    }
    if (domain)
      cookieOptions.domain = domain;
    document.cookie = serializeCookie(name, encodeURIComponent(value), cookieOptions);
  },
  read: function read(name) {
    var nameEQ = "".concat(name, "=");
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ")
        c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0)
        return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  remove: function remove(name) {
    this.create(name, "", -1);
  }
};
var cookie$1 = {
  name: "cookie",
  lookup: function lookup(options) {
    var found;
    if (options.lookupCookie && typeof document !== "undefined") {
      var c = cookie.read(options.lookupCookie);
      if (c)
        found = c;
    }
    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupCookie && typeof document !== "undefined") {
      cookie.create(options.lookupCookie, lng, options.cookieMinutes, options.cookieDomain, options.cookieOptions);
    }
  }
};
var querystring = {
  name: "querystring",
  lookup: function lookup2(options) {
    var found;
    if (typeof window !== "undefined") {
      var search = window.location.search;
      if (!window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1) {
        search = window.location.hash.substring(window.location.hash.indexOf("?"));
      }
      var query = search.substring(1);
      var params = query.split("&");
      for (var i = 0; i < params.length; i++) {
        var pos = params[i].indexOf("=");
        if (pos > 0) {
          var key = params[i].substring(0, pos);
          if (key === options.lookupQuerystring) {
            found = params[i].substring(pos + 1);
          }
        }
      }
    }
    return found;
  }
};
var hasLocalStorageSupport = null;
var localStorageAvailable = function localStorageAvailable2() {
  if (hasLocalStorageSupport !== null)
    return hasLocalStorageSupport;
  try {
    hasLocalStorageSupport = window !== "undefined" && window.localStorage !== null;
    var testKey = "i18next.translate.boo";
    window.localStorage.setItem(testKey, "foo");
    window.localStorage.removeItem(testKey);
  } catch (e) {
    hasLocalStorageSupport = false;
  }
  return hasLocalStorageSupport;
};
var localStorage = {
  name: "localStorage",
  lookup: function lookup3(options) {
    var found;
    if (options.lookupLocalStorage && localStorageAvailable()) {
      var lng = window.localStorage.getItem(options.lookupLocalStorage);
      if (lng)
        found = lng;
    }
    return found;
  },
  cacheUserLanguage: function cacheUserLanguage2(lng, options) {
    if (options.lookupLocalStorage && localStorageAvailable()) {
      window.localStorage.setItem(options.lookupLocalStorage, lng);
    }
  }
};
var hasSessionStorageSupport = null;
var sessionStorageAvailable = function sessionStorageAvailable2() {
  if (hasSessionStorageSupport !== null)
    return hasSessionStorageSupport;
  try {
    hasSessionStorageSupport = window !== "undefined" && window.sessionStorage !== null;
    var testKey = "i18next.translate.boo";
    window.sessionStorage.setItem(testKey, "foo");
    window.sessionStorage.removeItem(testKey);
  } catch (e) {
    hasSessionStorageSupport = false;
  }
  return hasSessionStorageSupport;
};
var sessionStorage = {
  name: "sessionStorage",
  lookup: function lookup4(options) {
    var found;
    if (options.lookupSessionStorage && sessionStorageAvailable()) {
      var lng = window.sessionStorage.getItem(options.lookupSessionStorage);
      if (lng)
        found = lng;
    }
    return found;
  },
  cacheUserLanguage: function cacheUserLanguage3(lng, options) {
    if (options.lookupSessionStorage && sessionStorageAvailable()) {
      window.sessionStorage.setItem(options.lookupSessionStorage, lng);
    }
  }
};
var navigator$1 = {
  name: "navigator",
  lookup: function lookup5(options) {
    var found = [];
    if (typeof navigator !== "undefined") {
      if (navigator.languages) {
        for (var i = 0; i < navigator.languages.length; i++) {
          found.push(navigator.languages[i]);
        }
      }
      if (navigator.userLanguage) {
        found.push(navigator.userLanguage);
      }
      if (navigator.language) {
        found.push(navigator.language);
      }
    }
    return found.length > 0 ? found : void 0;
  }
};
var htmlTag = {
  name: "htmlTag",
  lookup: function lookup6(options) {
    var found;
    var htmlTag2 = options.htmlTag || (typeof document !== "undefined" ? document.documentElement : null);
    if (htmlTag2 && typeof htmlTag2.getAttribute === "function") {
      found = htmlTag2.getAttribute("lang");
    }
    return found;
  }
};
var path = {
  name: "path",
  lookup: function lookup7(options) {
    var found;
    if (typeof window !== "undefined") {
      var language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      if (language instanceof Array) {
        if (typeof options.lookupFromPathIndex === "number") {
          if (typeof language[options.lookupFromPathIndex] !== "string") {
            return void 0;
          }
          found = language[options.lookupFromPathIndex].replace("/", "");
        } else {
          found = language[0].replace("/", "");
        }
      }
    }
    return found;
  }
};
var subdomain = {
  name: "subdomain",
  lookup: function lookup8(options) {
    var lookupFromSubdomainIndex = typeof options.lookupFromSubdomainIndex === "number" ? options.lookupFromSubdomainIndex + 1 : 1;
    var language = typeof window !== "undefined" && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
    if (!language)
      return void 0;
    return language[lookupFromSubdomainIndex];
  }
};
function getDefaults() {
  return {
    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    // cache user language
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    // cookieMinutes: 10,
    // cookieDomain: 'myDomain'
    convertDetectedLanguage: function convertDetectedLanguage(l) {
      return l;
    }
  };
}
var Browser = /* @__PURE__ */ function() {
  function Browser2(services) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, Browser2);
    this.type = "languageDetector";
    this.detectors = {};
    this.init(services, options);
  }
  _createClass(Browser2, [{
    key: "init",
    value: function init2(services) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var i18nOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = services || {
        languageUtils: {}
      };
      this.options = defaults(options, this.options || {}, getDefaults());
      if (typeof this.options.convertDetectedLanguage === "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1) {
        this.options.convertDetectedLanguage = function(l) {
          return l.replace("-", "_");
        };
      }
      if (this.options.lookupFromUrlIndex)
        this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
      this.i18nOptions = i18nOptions;
      this.addDetector(cookie$1);
      this.addDetector(querystring);
      this.addDetector(localStorage);
      this.addDetector(sessionStorage);
      this.addDetector(navigator$1);
      this.addDetector(htmlTag);
      this.addDetector(path);
      this.addDetector(subdomain);
    }
  }, {
    key: "addDetector",
    value: function addDetector(detector) {
      this.detectors[detector.name] = detector;
    }
  }, {
    key: "detect",
    value: function detect(detectionOrder) {
      var _this = this;
      if (!detectionOrder)
        detectionOrder = this.options.order;
      var detected = [];
      detectionOrder.forEach(function(detectorName) {
        if (_this.detectors[detectorName]) {
          var lookup9 = _this.detectors[detectorName].lookup(_this.options);
          if (lookup9 && typeof lookup9 === "string")
            lookup9 = [lookup9];
          if (lookup9)
            detected = detected.concat(lookup9);
        }
      });
      detected = detected.map(function(d) {
        return _this.options.convertDetectedLanguage(d);
      });
      if (this.services.languageUtils.getBestMatchFromCodes)
        return detected;
      return detected.length > 0 ? detected[0] : null;
    }
  }, {
    key: "cacheUserLanguage",
    value: function cacheUserLanguage4(lng, caches) {
      var _this2 = this;
      if (!caches)
        caches = this.options.caches;
      if (!caches)
        return;
      if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1)
        return;
      caches.forEach(function(cacheName) {
        if (_this2.detectors[cacheName])
          _this2.detectors[cacheName].cacheUserLanguage(lng, _this2.options);
      });
    }
  }]);
  return Browser2;
}();
Browser.type = "languageDetector";

// node_modules/i18next-http-backend/esm/utils.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
var arr2 = [];
var each2 = arr2.forEach;
var slice2 = arr2.slice;
function defaults2(obj) {
  each2.call(slice2.call(arguments, 1), function(source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === void 0)
          obj[prop] = source[prop];
      }
    }
  });
  return obj;
}
function hasXMLHttpRequest() {
  return typeof XMLHttpRequest === "function" || (typeof XMLHttpRequest === "undefined" ? "undefined" : _typeof(XMLHttpRequest)) === "object";
}
function isPromise(maybePromise) {
  return !!maybePromise && typeof maybePromise.then === "function";
}
function makePromise(maybePromise) {
  if (isPromise(maybePromise)) {
    return maybePromise;
  }
  return Promise.resolve(maybePromise);
}

// node_modules/i18next-http-backend/esm/request.js
var fetchNode = __toESM(require_getFetch(), 1);
function _typeof2(o) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof2(o);
}
var fetchApi;
if (typeof fetch === "function") {
  if (typeof globalThis !== "undefined" && globalThis.fetch) {
    fetchApi = globalThis.fetch;
  } else if (typeof window !== "undefined" && window.fetch) {
    fetchApi = window.fetch;
  } else {
    fetchApi = fetch;
  }
}
var XmlHttpRequestApi;
if (hasXMLHttpRequest()) {
  if (typeof globalThis !== "undefined" && globalThis.XMLHttpRequest) {
    XmlHttpRequestApi = globalThis.XMLHttpRequest;
  } else if (typeof window !== "undefined" && window.XMLHttpRequest) {
    XmlHttpRequestApi = window.XMLHttpRequest;
  }
}
var ActiveXObjectApi;
if (typeof ActiveXObject === "function") {
  if (typeof globalThis !== "undefined" && globalThis.ActiveXObject) {
    ActiveXObjectApi = globalThis.ActiveXObject;
  } else if (typeof window !== "undefined" && window.ActiveXObject) {
    ActiveXObjectApi = window.ActiveXObject;
  }
}
if (!fetchApi && fetchNode && !XmlHttpRequestApi && !ActiveXObjectApi)
  fetchApi = fetchNode.default || fetchNode;
if (typeof fetchApi !== "function")
  fetchApi = void 0;
var addQueryString = function addQueryString2(url, params) {
  if (params && _typeof2(params) === "object") {
    var queryString = "";
    for (var paramName in params) {
      queryString += "&" + encodeURIComponent(paramName) + "=" + encodeURIComponent(params[paramName]);
    }
    if (!queryString)
      return url;
    url = url + (url.indexOf("?") !== -1 ? "&" : "?") + queryString.slice(1);
  }
  return url;
};
var fetchIt = function fetchIt2(url, fetchOptions, callback) {
  var resolver = function resolver2(response) {
    if (!response.ok)
      return callback(response.statusText || "Error", {
        status: response.status
      });
    response.text().then(function(data) {
      callback(null, {
        status: response.status,
        data
      });
    }).catch(callback);
  };
  if (typeof fetch === "function") {
    fetch(url, fetchOptions).then(resolver).catch(callback);
  } else {
    fetchApi(url, fetchOptions).then(resolver).catch(callback);
  }
};
var omitFetchOptions = false;
var requestWithFetch = function requestWithFetch2(options, url, payload, callback) {
  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }
  var headers = defaults2({}, typeof options.customHeaders === "function" ? options.customHeaders() : options.customHeaders);
  if (typeof window === "undefined" && typeof globalThis !== "undefined" && typeof globalThis.process !== "undefined" && globalThis.process.versions && globalThis.process.versions.node) {
    headers["User-Agent"] = "i18next-http-backend (node/".concat(globalThis.process.version, "; ").concat(globalThis.process.platform, " ").concat(globalThis.process.arch, ")");
  }
  if (payload)
    headers["Content-Type"] = "application/json";
  var reqOptions = typeof options.requestOptions === "function" ? options.requestOptions(payload) : options.requestOptions;
  var fetchOptions = defaults2({
    method: payload ? "POST" : "GET",
    body: payload ? options.stringify(payload) : void 0,
    headers
  }, omitFetchOptions ? {} : reqOptions);
  try {
    fetchIt(url, fetchOptions, callback);
  } catch (e) {
    if (!reqOptions || Object.keys(reqOptions).length === 0 || !e.message || e.message.indexOf("not implemented") < 0) {
      return callback(e);
    }
    try {
      Object.keys(reqOptions).forEach(function(opt) {
        delete fetchOptions[opt];
      });
      fetchIt(url, fetchOptions, callback);
      omitFetchOptions = true;
    } catch (err) {
      callback(err);
    }
  }
};
var requestWithXmlHttpRequest = function requestWithXmlHttpRequest2(options, url, payload, callback) {
  if (payload && _typeof2(payload) === "object") {
    payload = addQueryString("", payload).slice(1);
  }
  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }
  try {
    var x;
    if (XmlHttpRequestApi) {
      x = new XmlHttpRequestApi();
    } else {
      x = new ActiveXObjectApi("MSXML2.XMLHTTP.3.0");
    }
    x.open(payload ? "POST" : "GET", url, 1);
    if (!options.crossDomain) {
      x.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    }
    x.withCredentials = !!options.withCredentials;
    if (payload) {
      x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    if (x.overrideMimeType) {
      x.overrideMimeType("application/json");
    }
    var h = options.customHeaders;
    h = typeof h === "function" ? h() : h;
    if (h) {
      for (var i in h) {
        x.setRequestHeader(i, h[i]);
      }
    }
    x.onreadystatechange = function() {
      x.readyState > 3 && callback(x.status >= 400 ? x.statusText : null, {
        status: x.status,
        data: x.responseText
      });
    };
    x.send(payload);
  } catch (e) {
    console && console.log(e);
  }
};
var request = function request2(options, url, payload, callback) {
  if (typeof payload === "function") {
    callback = payload;
    payload = void 0;
  }
  callback = callback || function() {
  };
  if (fetchApi && url.indexOf("file:") !== 0) {
    return requestWithFetch(options, url, payload, callback);
  }
  if (hasXMLHttpRequest() || typeof ActiveXObject === "function") {
    return requestWithXmlHttpRequest(options, url, payload, callback);
  }
  callback(new Error("No fetch and no xhr implementation found!"));
};
var request_default = request;

// node_modules/i18next-http-backend/esm/index.js
function _typeof3(o) {
  "@babel/helpers - typeof";
  return _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof3(o);
}
function _classCallCheck2(instance2, Constructor) {
  if (!(instance2 instanceof Constructor)) {
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
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof3(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof3(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof3(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var getDefaults2 = function getDefaults3() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    parse: function parse(data) {
      return JSON.parse(data);
    },
    stringify: JSON.stringify,
    parsePayload: function parsePayload(namespace, key, fallbackValue) {
      return _defineProperty({}, key, fallbackValue || "");
    },
    parseLoadPayload: function parseLoadPayload(languages, namespaces) {
      return void 0;
    },
    request: request_default,
    reloadInterval: typeof window !== "undefined" ? false : 60 * 60 * 1e3,
    customHeaders: {},
    queryStringParams: {},
    crossDomain: false,
    withCredentials: false,
    overrideMimeType: false,
    requestOptions: {
      mode: "cors",
      credentials: "same-origin",
      cache: "default"
    }
  };
};
var Backend = function() {
  function Backend2(services) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var allOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    _classCallCheck2(this, Backend2);
    this.services = services;
    this.options = options;
    this.allOptions = allOptions;
    this.type = "backend";
    this.init(services, options, allOptions);
  }
  _createClass2(Backend2, [{
    key: "init",
    value: function init2(services) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var allOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = services;
      this.options = defaults2(options, this.options || {}, getDefaults2());
      this.allOptions = allOptions;
      if (this.services && this.options.reloadInterval) {
        setInterval(function() {
          return _this.reload();
        }, this.options.reloadInterval);
      }
    }
  }, {
    key: "readMulti",
    value: function readMulti(languages, namespaces, callback) {
      this._readAny(languages, languages, namespaces, namespaces, callback);
    }
  }, {
    key: "read",
    value: function read2(language, namespace, callback) {
      this._readAny([language], language, [namespace], namespace, callback);
    }
  }, {
    key: "_readAny",
    value: function _readAny(languages, loadUrlLanguages, namespaces, loadUrlNamespaces, callback) {
      var _this2 = this;
      var loadPath = this.options.loadPath;
      if (typeof this.options.loadPath === "function") {
        loadPath = this.options.loadPath(languages, namespaces);
      }
      loadPath = makePromise(loadPath);
      loadPath.then(function(resolvedLoadPath) {
        if (!resolvedLoadPath)
          return callback(null, {});
        var url = _this2.services.interpolator.interpolate(resolvedLoadPath, {
          lng: languages.join("+"),
          ns: namespaces.join("+")
        });
        _this2.loadUrl(url, callback, loadUrlLanguages, loadUrlNamespaces);
      });
    }
  }, {
    key: "loadUrl",
    value: function loadUrl(url, callback, languages, namespaces) {
      var _this3 = this;
      var lng = typeof languages === "string" ? [languages] : languages;
      var ns = typeof namespaces === "string" ? [namespaces] : namespaces;
      var payload = this.options.parseLoadPayload(lng, ns);
      this.options.request(this.options, url, payload, function(err, res) {
        if (res && (res.status >= 500 && res.status < 600 || !res.status))
          return callback("failed loading " + url + "; status code: " + res.status, true);
        if (res && res.status >= 400 && res.status < 500)
          return callback("failed loading " + url + "; status code: " + res.status, false);
        if (!res && err && err.message && err.message.indexOf("Failed to fetch") > -1)
          return callback("failed loading " + url + ": " + err.message, true);
        if (err)
          return callback(err, false);
        var ret, parseErr;
        try {
          if (typeof res.data === "string") {
            ret = _this3.options.parse(res.data, languages, namespaces);
          } else {
            ret = res.data;
          }
        } catch (e) {
          parseErr = "failed parsing " + url + " to json";
        }
        if (parseErr)
          return callback(parseErr, false);
        callback(null, ret);
      });
    }
  }, {
    key: "create",
    value: function create2(languages, namespace, key, fallbackValue, callback) {
      var _this4 = this;
      if (!this.options.addPath)
        return;
      if (typeof languages === "string")
        languages = [languages];
      var payload = this.options.parsePayload(namespace, key, fallbackValue);
      var finished = 0;
      var dataArray = [];
      var resArray = [];
      languages.forEach(function(lng) {
        var addPath = _this4.options.addPath;
        if (typeof _this4.options.addPath === "function") {
          addPath = _this4.options.addPath(lng, namespace);
        }
        var url = _this4.services.interpolator.interpolate(addPath, {
          lng,
          ns: namespace
        });
        _this4.options.request(_this4.options, url, payload, function(data, res) {
          finished += 1;
          dataArray.push(data);
          resArray.push(res);
          if (finished === languages.length) {
            if (typeof callback === "function")
              callback(dataArray, resArray);
          }
        });
      });
    }
  }, {
    key: "reload",
    value: function reload() {
      var _this5 = this;
      var _this$services = this.services, backendConnector = _this$services.backendConnector, languageUtils = _this$services.languageUtils, logger = _this$services.logger;
      var currentLanguage = backendConnector.language;
      if (currentLanguage && currentLanguage.toLowerCase() === "cimode")
        return;
      var toLoad = [];
      var append = function append2(lng) {
        var lngs = languageUtils.toResolveHierarchy(lng);
        lngs.forEach(function(l) {
          if (toLoad.indexOf(l) < 0)
            toLoad.push(l);
        });
      };
      append(currentLanguage);
      if (this.allOptions.preload)
        this.allOptions.preload.forEach(function(l) {
          return append(l);
        });
      toLoad.forEach(function(lng) {
        _this5.allOptions.ns.forEach(function(ns) {
          backendConnector.read(lng, ns, "read", null, null, function(err, data) {
            if (err)
              logger.warn("loading namespace ".concat(ns, " for language ").concat(lng, " failed"), err);
            if (!err && data)
              logger.log("loaded namespace ".concat(ns, " for language ").concat(lng), data);
            backendConnector.loaded("".concat(lng, "|").concat(ns), err, data);
          });
        });
      });
    }
  }]);
  return Backend2;
}();
Backend.type = "backend";
var esm_default = Backend;

// public/locales/th/common.json
var common_default = {
  news: "\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23",
  help: "\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D",
  general: "\u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B",
  review: "\u0E23\u0E35\u0E27\u0E34\u0E27\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32",
  "buy sell": "\u0E0B\u0E37\u0E49\u0E2D\u0E02\u0E32\u0E22",
  tutorial: "\u0E40\u0E17\u0E04\u0E19\u0E34\u0E04\u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E19",
  "1. Membership posting in the buy-sell section is reserved exclusively for users who have completed the KYC process.": "1. \u0E2A\u0E07\u0E27\u0E19\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E43\u0E2B\u0E49\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E35\u0E48\u0E17\u0E33\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E0B\u0E37\u0E49\u0E2D\u0E02\u0E32\u0E22\u0E44\u0E14\u0E49 \u0E40\u0E09\u0E1E\u0E32\u0E30\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E35\u0E48 KYC \u0E41\u0E25\u0E49\u0E27\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19",
  "2. Posting any form of direct sales business, chain sharing, online work, or anything causing harm or disturbance to others is strictly prohibited.": "2. \u0E2B\u0E49\u0E32\u0E21\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08\u0E02\u0E32\u0E22\u0E15\u0E23\u0E07\u0E17\u0E38\u0E01\u0E0A\u0E19\u0E34\u0E14 \u0E41\u0E0A\u0E23\u0E4C\u0E25\u0E39\u0E01\u0E42\u0E0B\u0E48 \u0E17\u0E33\u0E07\u0E32\u0E19\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C \u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E01\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E40\u0E01\u0E34\u0E14\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E32\u0E22\u0E41\u0E25\u0E30\u0E23\u0E1A\u0E01\u0E27\u0E19\u0E15\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E2D\u0E37\u0E48\u0E19",
  "3. Before making any transactions, please check the seller\u2019s history at": "3. \u0E01\u0E48\u0E2D\u0E19\u0E17\u0E33\u0E01\u0E32\u0E23\u0E42\u0E2D\u0E19\u0E40\u0E07\u0E34\u0E19 \u0E2D\u0E22\u0E48\u0E32\u0E25\u0E37\u0E21\u0E40\u0E0A\u0E47\u0E01\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E02\u0E2D\u0E07\u0E04\u0E19\u0E02\u0E32\u0E22\u0E17\u0E35\u0E48",
  "4. In case of fraud, report the incident online at": "4. \u0E2B\u0E32\u0E01\u0E42\u0E14\u0E19\u0E42\u0E01\u0E07 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E08\u0E49\u0E07\u0E04\u0E27\u0E32\u0E21 Online",
  "5. Contact platform administrators via the Facebook Page ctrl g": "5. \u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E41\u0E1E\u0E25\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48 Facebook Page : CTRL G",
  "1. Navigate to the Party Matching menu.": "1. \u0E40\u0E02\u0E49\u0E32\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E40\u0E21\u0E19\u0E39 Party Matching",
  "2. Click the \u201CCreate Party\u201D button.": "2. \u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21 \u201C\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u201D",
  "3. Set the party name, enter your in-game character name, choose the play mode, select the desired number of players for the party, pick the rank range for participants, and input the communication channel link for party members.": "3. \u0E15\u0E31\u0E49\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49 / \u0E43\u0E2A\u0E48\u0E0A\u0E37\u0E48\u0E2D\u0E15\u0E31\u0E27\u0E25\u0E30\u0E04\u0E23\u0E20\u0E32\u0E22\u0E43\u0E19\u0E40\u0E01\u0E21 / \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E42\u0E2B\u0E21\u0E14\u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E19 / \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E08\u0E33\u0E19\u0E27\u0E19\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E19\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49 / \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E23\u0E07\u0E04\u0E4C\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21 / \u0E43\u0E2A\u0E48\u0E25\u0E34\u0E07\u0E04\u0E4C\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E01\u0E31\u0E1A\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E43\u0E19\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49",
  "4. Optionally, you can set the party to private if the party creator wants to filter incoming players.": "4. \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E15\u0E31\u0E49\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27\u0E44\u0E14\u0E49 \u0E2B\u0E32\u0E01\u0E1C\u0E39\u0E49\u0E15\u0E31\u0E49\u0E07\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E04\u0E31\u0E14\u0E01\u0E23\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E17\u0E35\u0E48\u0E08\u0E30\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E43\u0E19\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49",
  "1. Click the \u201CJoin\u201D button on the desired party.": "1. \u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21 \u201C\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u201D \u0E17\u0E35\u0E48\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21",
  "2. Enter your in-game character name.": "2. \u0E43\u0E2A\u0E48\u0E0A\u0E37\u0E48\u0E2D\u0E15\u0E31\u0E27\u0E25\u0E30\u0E04\u0E23\u0E20\u0E32\u0E22\u0E43\u0E19\u0E40\u0E01\u0E21",
  "1. When all members join the party, the party status changes to offline.": "1. \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E04\u0E19\u0E43\u0E19\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E40\u0E02\u0E49\u0E32\u0E08\u0E19\u0E04\u0E23\u0E1A\u0E41\u0E25\u0E49\u0E27 \u0E2A\u0E16\u0E32\u0E19\u0E30\u0E02\u0E2D\u0E07\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E08\u0E30\u0E16\u0E39\u0E01\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E2D\u0E1F\u0E44\u0E25\u0E19\u0E4C",
  "2. Members can coordinate and schedule gameplay using the contact information provided in the party details.": "2. \u0E1C\u0E39\u0E49\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E19\u0E31\u0E14\u0E2B\u0E21\u0E32\u0E22\u0E01\u0E31\u0E19\u0E44\u0E14\u0E49\u0E15\u0E32\u0E21\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E17\u0E35\u0E48\u0E43\u0E2A\u0E48\u0E40\u0E2D\u0E32\u0E44\u0E27\u0E49\u0E43\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49",
  "3. Players can then gather and start playing games together using the formed party.": "3. \u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E19\u0E31\u0E49\u0E19 \u0E04\u0E19\u0E43\u0E19\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E02\u0E49\u0E32\u0E44\u0E1B\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21\u0E14\u0E49\u0E27\u0E22\u0E01\u0E31\u0E19\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22",
  "1. rule rare card": "1. \u0E2A\u0E21\u0E31\u0E04\u0E23 \u0E2B\u0E23\u0E37\u0E2D Log - in CTRL G \u0E01\u0E48\u0E2D\u0E19\u0E17\u0E33 Quiz",
  "2. rule rare card": '2. \u0E04\u0E25\u0E34\u0E01 "\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E01\u0E23\u0E2D\u0E1A\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C',
  "3. rule rare card": '3. \u0E04\u0E25\u0E34\u0E01 "\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E01\u0E23\u0E2D\u0E1A\u0E44\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A',
  "4. rule rare card": "4. \u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48\u0E23\u0E39\u0E1B\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E14\u0E49\u0E32\u0E19\u0E0B\u0E49\u0E32\u0E22\u0E21\u0E37\u0E2D \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E41\u0E25\u0E30\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E43\u0E0A\u0E49\u0E01\u0E23\u0E2D\u0E1A\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E17\u0E35\u0E48\u0E2A\u0E30\u0E2A\u0E21\u0E40\u0E2D\u0E32\u0E44\u0E27\u0E49",
  about: "\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E40\u0E23\u0E32",
  "about us paragraph 1": "CTRL G \u0E23\u0E31\u0E1A\u0E08\u0E1A \u0E04\u0E23\u0E1A\u0E17\u0E38\u0E01\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07 Esports",
  "about us paragraph 2": "CTRL G \u0E40\u0E1B\u0E47\u0E19\u0E01\u0E32\u0E23\u0E23\u0E27\u0E21\u0E15\u0E31\u0E27\u0E01\u0E31\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E19\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21\u0E41\u0E25\u0E30\u0E04\u0E19\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E27\u0E07\u0E01\u0E32\u0E23\u0E40\u0E01\u0E21\u0E21\u0E32\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E22\u0E32\u0E27\u0E19\u0E32\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07 \u0E2D\u0E34\u0E07\u0E04\u0E4C Pannys \u0E2D\u0E14\u0E35\u0E15\u0E19\u0E31\u0E01\u0E41\u0E02\u0E48\u0E07\u0E40\u0E01\u0E21 Overwatch \u0E17\u0E35\u0E21\u0E0A\u0E32\u0E15\u0E34\u0E44\u0E17\u0E22\u0E41\u0E25\u0E30 Talent Manager / \u0E40\u0E2D\u0E22 Viperdemon \u0E2D\u0E14\u0E35\u0E15\u0E19\u0E31\u0E01\u0E41\u0E02\u0E48\u0E07\u0E40\u0E01\u0E21 CS:GO \u0E41\u0E25\u0E30 Streamer / \u0E17\u0E23\u0E34\u0E1B Ptrip Analyst \u0E41\u0E25\u0E30\u0E19\u0E31\u0E01\u0E1E\u0E32\u0E01\u0E22\u0E4C\u0E40\u0E01\u0E21 Valorant",
  "about us paragraph 3": "\u0E1E\u0E27\u0E01\u0E40\u0E02\u0E32\u0E23\u0E27\u0E21\u0E15\u0E31\u0E27\u0E01\u0E31\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E35\u0E48\u0E08\u0E30\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E22\u0E01\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E27\u0E07\u0E01\u0E32\u0E23 Esports \u0E43\u0E19\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E44\u0E17\u0E22\u0E43\u0E2B\u0E49\u0E21\u0E35\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E41\u0E25\u0E30\u0E22\u0E34\u0E48\u0E07\u0E43\u0E2B\u0E0D\u0E48\u0E21\u0E32\u0E01\u0E22\u0E34\u0E48\u0E07\u0E02\u0E36\u0E49\u0E19 \u0E42\u0E14\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07 Community \u0E17\u0E35\u0E48\u0E08\u0E30\u0E23\u0E27\u0E21\u0E40\u0E2B\u0E25\u0E48\u0E32\u0E04\u0E19\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21\u0E41\u0E25\u0E30\u0E1C\u0E39\u0E49\u0E17\u0E35\u0E48\u0E2A\u0E19\u0E43\u0E08\u0E43\u0E19\u0E27\u0E07\u0E01\u0E32\u0E23 Esports \u0E21\u0E32\u0E23\u0E48\u0E27\u0E21\u0E41\u0E0A\u0E23\u0E4C\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23\u0E2A\u0E38\u0E14 Insight \u0E40\u0E08\u0E32\u0E30\u0E25\u0E36\u0E01\u0E27\u0E07\u0E01\u0E32\u0E23 Esport \u0E23\u0E27\u0E21\u0E44\u0E1B\u0E16\u0E36\u0E07\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14 Esport Event \u0E42\u0E14\u0E22\u0E40\u0E23\u0E34\u0E48\u0E21\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14 Campus Tour \u0E41\u0E25\u0E30 School Tour \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E44\u0E1B\u0E08\u0E31\u0E14\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E43\u0E2B\u0E49\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E01\u0E31\u0E1A\u0E19\u0E49\u0E2D\u0E07 \u0E46 \u0E17\u0E35\u0E48\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E19\u0E43\u0E08\u0E43\u0E19\u0E27\u0E07\u0E01\u0E32\u0E23 Esport ",
  "about us paragraph 4": "Talent Management \u0E04\u0E37\u0E2D\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E1C\u0E39\u0E49\u0E17\u0E35\u0E48\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2B\u0E23\u0E37\u0E2D\u0E21\u0E35\u0E1E\u0E23\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C\u0E43\u0E19\u0E27\u0E07\u0E01\u0E32\u0E23\u0E40\u0E01\u0E21 CTRL G \u0E01\u0E47\u0E21\u0E35\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23\u0E17\u0E35\u0E48\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E08\u0E30\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E41\u0E25\u0E30\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E1A\u0E38\u0E04\u0E04\u0E25\u0E40\u0E2B\u0E25\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E35\u0E48\u0E08\u0E30\u0E43\u0E2B\u0E49\u0E1E\u0E27\u0E01\u0E40\u0E02\u0E32\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E0A\u0E49\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E2D\u0E2D\u0E01\u0E21\u0E32\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E15\u0E47\u0E21\u0E17\u0E35\u0E48\u0E41\u0E25\u0E30\u0E40\u0E15\u0E47\u0E21\u0E1B\u0E23\u0E30\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E20\u0E32\u0E1E ",
  "about us paragraph 5": "\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19 Esport Tournament \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E22\u0E01\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19\u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E41\u0E25\u0E30\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22 \u0E43\u0E2B\u0E49\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E40\u0E02\u0E49\u0E21\u0E02\u0E49\u0E19\u0E41\u0E25\u0E30\u0E08\u0E23\u0E34\u0E07\u0E08\u0E31\u0E07\u0E21\u0E32\u0E01\u0E22\u0E34\u0E48\u0E07\u0E02\u0E36\u0E49\u0E19 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1C\u0E25\u0E34\u0E15\u0E40\u0E2B\u0E25\u0E48\u0E32\u0E19\u0E31\u0E01\u0E41\u0E02\u0E48\u0E07\u0E41\u0E25\u0E30\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E27\u0E07\u0E01\u0E32\u0E23 Esports",
  accept: "\u0E22\u0E34\u0E19\u0E22\u0E2D\u0E21",
  "achievement image": "\u0E23\u0E39\u0E1B\u0E1C\u0E25\u0E07\u0E32\u0E19",
  "achievement name": "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E25\u0E07\u0E32\u0E19",
  "achievement title": "\u0E0A\u0E37\u0E48\u0E2D\u0E01\u0E25\u0E38\u0E48\u0E21\u0E1C\u0E25\u0E07\u0E32\u0E19",
  "achievement url": "\u0E41\u0E19\u0E1A URL \u0E44\u0E1B\u0E17\u0E35\u0E48\u0E1C\u0E25\u0E07\u0E32\u0E19 (\u0E16\u0E49\u0E32\u0E21\u0E35)",
  active: "\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C",
  add: "\u0E40\u0E1E\u0E34\u0E48\u0E21",
  "add achievement": "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1C\u0E25\u0E07\u0E32\u0E19",
  "add experince": "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C",
  "add experience": "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C",
  "add experience title": "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E2D\u0E37\u0E48\u0E19\u0E46",
  "add game": "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E01\u0E21",
  "Add Item": "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E01\u0E25\u0E48\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25",
  "add more": "\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E1E\u0E34\u0E48\u0E21",
  "add more prize": "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25",
  "additional fields": "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23",
  "additional player": "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E15\u0E31\u0E27\u0E2A\u0E33\u0E23\u0E2D\u0E07",
  "address paragraph 1": "Space Phahon 19 1687/1 \u0E16\u0E19\u0E19\u0E1E\u0E2B\u0E25\u0E42\u0E22\u0E18\u0E34\u0E19,",
  "address paragraph 2": "\u0E41\u0E02\u0E27\u0E07\u0E08\u0E15\u0E38\u0E08\u0E31\u0E01\u0E23, \u0E40\u0E02\u0E15\u0E08\u0E15\u0E38\u0E08\u0E31\u0E01\u0E23, \u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E\u0E2F 10900",
  admin: "\u0E41\u0E2D\u0E14\u0E21\u0E34\u0E19",
  "album name": "\u0E0A\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E25\u0E1A\u0E31\u0E49\u0E21",
  "album url copied": "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E2D\u0E31\u0E25\u0E1A\u0E31\u0E49\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  albums: "\u0E2D\u0E31\u0E25\u0E1A\u0E31\u0E49\u0E21\u0E23\u0E39\u0E1B",
  "all games": "\u0E40\u0E01\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
  "All members of your party are here and ready to play!": "\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E40\u0E15\u0E47\u0E21\u0E41\u0E25\u0E49\u0E27! \u0E41\u0E2D\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E43\u0E19\u0E40\u0E01\u0E21\u0E41\u0E25\u0E49\u0E27\u0E40\u0E23\u0E34\u0E48\u0E21\u0E40\u0E25\u0E48\u0E19\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22",
  "all notifications": "\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
  "all parties": "\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
  "all tournaments": "\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
  "allow cookies messages": "CTRL G \u0E43\u0E0A\u0E49\u0E04\u0E38\u0E01\u0E01\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1B\u0E23\u0E30\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E20\u0E32\u0E1E\u0E43\u0E19\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23 \u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E21\u0E2D\u0E1A\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48\u0E14\u0E35\u0E43\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E41\u0E25\u0E30\u0E17\u0E33\u0E04\u0E27\u0E32\u0E21\u0E40\u0E02\u0E49\u0E32\u0E43\u0E08",
  "and contact platform administrators for information about the fraudulent party.": "\u0E41\u0E25\u0E49\u0E27\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E41\u0E1E\u0E25\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E02\u0E2D\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E17\u0E38\u0E08\u0E23\u0E34\u0E15",
  "and more options...": "\u0E14\u0E39\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21",
  anonymous: "\u0E44\u0E21\u0E48\u0E23\u0E30\u0E1A\u0E38\u0E15\u0E31\u0E27\u0E15\u0E19",
  approve: "\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34",
  approved: "\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34\u0E41\u0E25\u0E49\u0E27",
  "are you sure to delete team": "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E22\u0E38\u0E1A\u0E17\u0E35\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48",
  "are you sure to delete team member": "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E15\u0E30\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E35\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48",
  "are you sure to delete this post": "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48",
  "are you sure to delete this tournamnet": "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C\u0E19\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48",
  "are you sure to delete party member": "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E15\u0E30\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48",
  "are you sure to delete party request": "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48",
  "are you sure to leave the party": "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48",
  "are you sure to leave team": "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E17\u0E35\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48",
  "are you sure to proceed": "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48",
  "are you sure to reject team": "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1B\u0E0F\u0E34\u0E40\u0E2A\u0E18\u0E17\u0E35\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48",
  "are you sure to remove team": "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E15\u0E31\u0E14\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E17\u0E35\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48",
  "are you sure to submit team": "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E17\u0E35\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48",
  "are you sure you want to delete this achievement?": "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E19\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?",
  "are you sure you want to delete this album?": "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E2D\u0E31\u0E25\u0E1A\u0E31\u0E49\u0E21\u0E19\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?",
  "are you sure you want to delete this expereince?": "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E19\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?",
  "are you sure you want to delete this expereince title?": "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E19\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?",
  "are you sure you want to delete this photo?": "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E23\u0E39\u0E1B\u0E19\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?",
  "are you sure you want to delete this rank?": "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E41\u0E23\u0E07\u0E04\u0E4C\u0E19\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?",
  "are you to vote": "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E42\u0E2B\u0E27\u0E15",
  ascendant: "Ascendant",
  "at least 2 options": "\u0E01\u0E23\u0E2D\u0E01\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22 2 \u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01",
  "attachment image": "\u0E41\u0E19\u0E1A\u0E23\u0E39\u0E1B",
  attend: "\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21",
  attended: "\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E41\u0E25\u0E49\u0E27",
  "auto refresh countdown": "\u0E08\u0E30\u0E42\u0E2B\u0E25\u0E14\u0E43\u0E2B\u0E21\u0E48\u0E43\u0E19",
  "Autosize height with minimum and maximum number of lines": "\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
  available: "\u0E27\u0E48\u0E32\u0E07",
  "available slots": "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E27\u0E48\u0E32\u0E07",
  back: "\u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A",
  "back to albums": "\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E2B\u0E19\u0E49\u0E32\u0E2D\u0E31\u0E25\u0E1A\u0E31\u0E49\u0E21",
  "back to edit team": "\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E41\u0E01\u0E49\u0E44\u0E02\u0E17\u0E35\u0E21",
  "back to tournament": "\u0E01\u0E25\u0E31\u0E1A\u0E2A\u0E39\u0E48\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C",
  "banner image": "\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E23\u0E39\u0E1B Banner",
  "below 5,000": "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32 5,000",
  bio: "Bio",
  "boost again in": "\u0E14\u0E31\u0E19\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E44\u0E14\u0E49\u0E20\u0E32\u0E22\u0E43\u0E19",
  "boost party": "\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E31\u0E19\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49",
  bronze: "Bronze",
  "buy sell conditions": "\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E01\u0E23\u0E30\u0E14\u0E32\u0E19\u0E1E\u0E39\u0E14\u0E04\u0E38\u0E22",
  "Buy Sell rules": "\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E01\u0E23\u0E30\u0E14\u0E32\u0E19\u0E1E\u0E39\u0E14\u0E04\u0E38\u0E22\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E2B\u0E49\u0E2D\u0E07 \u201C\u0E0B\u0E37\u0E49\u0E2D\u0E02\u0E32\u0E22\u201D",
  "buy sell rules descriptoins": "(\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14)",
  by: "\u0E42\u0E14\u0E22",
  "by clicking your profile picture": "\u0E42\u0E14\u0E22\u0E01\u0E32\u0E23\u0E01\u0E14\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E23\u0E39\u0E1B\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
  campaign: "\u0E40\u0E25\u0E48\u0E19\u0E04\u0E27\u0E34\u0E0B",
  "can create post and comment in anonymouse mode": "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E41\u0E2A\u0E14\u0E07\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2B\u0E47\u0E19\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E23\u0E30\u0E1A\u0E38\u0E15\u0E31\u0E27\u0E15\u0E19\u0E43\u0E19\u0E01\u0E23\u0E30\u0E14\u0E32\u0E19\u0E1E\u0E39\u0E14\u0E04\u0E38\u0E22",
  "can create post and comment in buy sell room": "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E1A\u0E19\u0E2B\u0E49\u0E2D\u0E07 \u201C\u0E0B\u0E37\u0E49\u0E2D\u0E02\u0E32\u0E22\u201D \u0E43\u0E19\u0E01\u0E23\u0E30\u0E14\u0E32\u0E19\u0E1E\u0E39\u0E14\u0E04\u0E38\u0E22",
  "can enter buy sell page": "\u0E40\u0E02\u0E49\u0E32\u0E2B\u0E49\u0E2D\u0E07 \u201C\u0E0B\u0E37\u0E49\u0E2D\u0E02\u0E32\u0E22\u201D \u0E43\u0E19\u0E01\u0E23\u0E30\u0E14\u0E32\u0E19\u0E1E\u0E39\u0E14\u0E04\u0E38\u0E22",
  cancel: "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",
  change: "\u0E41\u0E01\u0E49\u0E44\u0E02",
  "change cover": "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E23\u0E39\u0E1B\u0E1B\u0E01",
  "change game": "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E40\u0E01\u0E21",
  "citizen id": "\u0E40\u0E25\u0E02\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E15\u0E31\u0E27\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19",
  close: "\u0E1B\u0E34\u0E14\u0E2B\u0E19\u0E49\u0E32\u0E15\u0E48\u0E32\u0E07",
  comment: "\u0E41\u0E2A\u0E14\u0E07\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19",
  comments: "\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2B\u0E47\u0E19",
  company: "\u0E41\u0E1A\u0E23\u0E19\u0E14\u0E4C",
  confirm: "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19",
  "confirm game username": "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E0A\u0E37\u0E48\u0E2D\u0E43\u0E19\u0E40\u0E01\u0E21\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
  "confirm password": "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
  "connect account": "\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E1A\u0E31\u0E0D\u0E0A\u0E35",
  "connect whallet": "\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E1A\u0E31\u0E0D\u0E0A\u0E35",
  "connect with CTRL G account to get reward and display result": "\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E01\u0E23\u0E2D\u0E1A\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C \u0E1C\u0E48\u0E32\u0E19\u0E1A\u0E31\u0E0D\u0E0A\u0E35 CTRL G!",
  contact: "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32",
  "contact paragraph 1": "\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E42\u0E0B\u0E40\u0E0A\u0E35\u0E22\u0E25\u0E21\u0E35\u0E40\u0E14\u0E35\u0E22\u0E02\u0E2D\u0E07\u0E1E\u0E27\u0E01\u0E40\u0E23\u0E32 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23 \u0E2B\u0E23\u0E37\u0E2D Feedback \u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E15\u0E48\u0E32\u0E07 \u0E46 \u0E44\u0E14\u0E49\u0E17\u0E35\u0E48\u0E43\u0E15\u0E49\u0E04\u0E2D\u0E21\u0E40\u0E21\u0E19\u0E15\u0E4C \u0E2B\u0E23\u0E37\u0E2D\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E32\u0E40\u0E23\u0E32\u0E44\u0E14\u0E49\u0E42\u0E14\u0E22\u0E15\u0E23\u0E07",
  "contact person": "\u0E1C\u0E39\u0E49\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D",
  "contact person email": "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E1C\u0E39\u0E49\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D",
  "contact person name": "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D",
  "contact person phone": "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E1C\u0E39\u0E49\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D",
  content: "\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32 (\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E23\u0E39\u0E1B\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19 10 \u0E23\u0E39\u0E1B)",
  continue: "\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E1A\u0E31\u0E0D\u0E0A\u0E35",
  cookies: "\u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E04\u0E38\u0E01\u0E01\u0E35\u0E49",
  "cookies policy": "\u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E04\u0E38\u0E01\u0E01\u0E35\u0E49",
  "cookies usage": "\u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E04\u0E38\u0E01\u0E01\u0E35\u0E49",
  "Copy URL": "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01 URL",
  "create achievement": "\u0E40\u0E1E\u0E34\u0E48\u0E21",
  "create album": "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2D\u0E31\u0E25\u0E1A\u0E31\u0E49\u0E21",
  "create experience": "\u0E40\u0E1E\u0E34\u0E48\u0E21",
  "create new": "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E40\u0E25\u0E48\u0E19\u0E43\u0E2B\u0E21\u0E48",
  "create party": "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49",
  "create poll": "\u0E40\u0E1B\u0E34\u0E14\u0E42\u0E2B\u0E27\u0E15",
  "create post": "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49",
  "create post with own profile": "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E2B\u0E23\u0E37\u0E2D comment \u0E14\u0E49\u0E27\u0E22 profile \u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E15\u0E19\u0E40\u0E2D\u0E07",
  "create team": "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E17\u0E35\u0E21",
  "create tournament": "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C",
  "create tournament post": "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E04\u0E33\u0E16\u0E32\u0E21-\u0E15\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C",
  "customize profile by your own style, and share to your friends": "\u0E15\u0E01\u0E41\u0E15\u0E48\u0E07\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E15\u0E32\u0E21\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 \u0E41\u0E25\u0E49\u0E27\u0E41\u0E0A\u0E23\u0E4C\u0E44\u0E1B\u0E2D\u0E27\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E46\u0E0A\u0E32\u0E27\u0E27\u0E32\u0E42\u0E25",
  darkmode: "\u0E42\u0E2B\u0E21\u0E14\u0E01\u0E25\u0E32\u0E07\u0E04\u0E37\u0E19",
  dashboard: "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C",
  "date of birth": "\u0E27\u0E31\u0E19\u0E40\u0E01\u0E34\u0E14",
  "date picker": "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48",
  "days ago": "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
  delete: "\u0E25\u0E1A",
  "delete detail box": "\u0E25\u0E1A\u0E01\u0E25\u0E48\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25",
  "delete experience title": "\u0E25\u0E1A\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C",
  "delete request": "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21",
  "delete team": "\u0E22\u0E38\u0E1A\u0E17\u0E35\u0E21",
  "delete tournament": "\u0E25\u0E1A\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C",
  "deleted at": "\u0E25\u0E1A\u0E40\u0E21\u0E37\u0E48\u0E2D",
  "Deleted comment": "--\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E16\u0E39\u0E01\u0E25\u0E1A\u0E41\u0E25\u0E49\u0E27--",
  description: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
  descriptionEn: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 (English)",
  detail: "\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
  "detail personal details": "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E09\u0E31\u0E19",
  detail_1: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C",
  detail_2: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
  diamond: "Diamond",
  "discord id": "Discord ID",
  "discord ID": "Discord ID",
  "discord ID copied": "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01 Discord ID \u0E41\u0E25\u0E49\u0E27",
  "discord url": "Discord URL",
  "display name": "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",
  "display name is too long (maximum 20 characters)": "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E22\u0E32\u0E27\u0E40\u0E01\u0E34\u0E19\u0E44\u0E1B (\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 20 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23)",
  "display order": "\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25",
  "display result immediately": "\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25\u0E17\u0E31\u0E19\u0E17\u0E35",
  Download: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",
  "Download Avatar": "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C",
  durability: "TRICK",
  edit: "\u0E41\u0E01\u0E49\u0E44\u0E02",
  "edit achievement": "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E1C\u0E25\u0E07\u0E32\u0E19",
  "edit achievement title": "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E0A\u0E37\u0E48\u0E2D\u0E01\u0E25\u0E38\u0E48\u0E21\u0E1C\u0E25\u0E07\u0E32\u0E19",
  "edit album": "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E2D\u0E31\u0E25\u0E1A\u0E31\u0E49\u0E21",
  "edit experience": "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C",
  "edit experience title": "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C",
  "edit game": "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E40\u0E01\u0E21",
  "edit post": "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49",
  "edit profile": "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C",
  "edited at": "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E40\u0E21\u0E37\u0E48\u0E2D",
  email: "\u0E2D\u0E35\u0E40\u0E21\u0E25",
  "email or phone": "\u0E2D\u0E35\u0E40\u0E21\u0E25 \u0E2B\u0E23\u0E37\u0E2D \u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C",
  "end date": "\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48",
  "end date must be after the start date": "\u0E15\u0E49\u0E2D\u0E07\u0E2D\u0E22\u0E39\u0E48\u0E2B\u0E25\u0E31\u0E07\u0E27\u0E31\u0E19\u0E40\u0E23\u0E34\u0E48\u0E21",
  "end date must be before start date": "\u0E15\u0E49\u0E2D\u0E07\u0E2D\u0E22\u0E39\u0E48\u0E2B\u0E25\u0E31\u0E07\u0E27\u0E31\u0E19\u0E40\u0E23\u0E34\u0E48\u0E21",
  experience: "\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C",
  "experience end date": "\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14",
  "experience start date": "\u0E40\u0E23\u0E34\u0E48\u0E21",
  "experience title": "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E01\u0E21",
  experiences: "\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C",
  "export all": "Export \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
  "failed to create party": "\u0E04\u0E38\u0E13\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E2D\u0E37\u0E48\u0E19\u0E41\u0E25\u0E49\u0E27",
  FAQs: "\u0E04\u0E33\u0E16\u0E32\u0E21\u0E17\u0E35\u0E48\u0E1E\u0E1A\u0E1A\u0E48\u0E2D\u0E22",
  "featured tournament": "\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C\u0E41\u0E19\u0E30\u0E19\u0E33",
  feedback: "\u0E41\u0E19\u0E30\u0E19\u0E33-\u0E15\u0E34\u0E0A\u0E21",
  "file upload failed due to too large image size": "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E19\u0E32\u0E14\u0E43\u0E2B\u0E0D\u0E48\u0E40\u0E01\u0E34\u0E19 2 MB",
  "fill in party detail": "\u0E23\u0E30\u0E1A\u0E38\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E2B\u0E49\u0E2D\u0E07\u0E15\u0E32\u0E21\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E48\u0E19 '\u0E2B\u0E32 G P D 25%'",
  filter: "\u0E15\u0E31\u0E27\u0E01\u0E23\u0E2D\u0E07",
  Filters: "\u0E15\u0E31\u0E27\u0E01\u0E23\u0E2D\u0E07",
  "final round location": "\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19 (\u0E2B\u0E32\u0E01\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C \u0E43\u0E2B\u0E49\u0E01\u0E23\u0E2D\u0E01\u0E27\u0E48\u0E32 \u201C\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C\u201D)",
  "final round location (English)": "\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19 (English)",
  "finished quiz already, let's see who you look alike": "\u0E15\u0E2D\u0E1A\u0E04\u0E33\u0E16\u0E32\u0E21\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27 \u0E21\u0E32\u0E14\u0E39\u0E01\u0E31\u0E19\u0E40\u0E25\u0E22\u0E27\u0E48\u0E32\u0E04\u0E38\u0E13\u0E40\u0E1B\u0E47\u0E19\u0E43\u0E04\u0E23!",
  "finished tournaments": "\u0E08\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19",
  "first 2 characters must be alphabet": "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23 2 \u0E15\u0E31\u0E27\u0E41\u0E23\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29",
  "first name": "\u0E0A\u0E37\u0E48\u0E2D",
  "forgot password?": "\u0E25\u0E37\u0E21\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19?",
  forum_admin: "\u0E41\u0E2D\u0E14\u0E21\u0E34\u0E19\u0E40\u0E27\u0E47\u0E1A\u0E1A\u0E2D\u0E23\u0E4C\u0E14",
  game: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E01\u0E21",
  "game icon": "\u0E44\u0E2D\u0E04\u0E2D\u0E19\u0E40\u0E01\u0E21",
  "game username": "\u0E0A\u0E37\u0E48\u0E2D\u0E43\u0E19\u0E40\u0E01\u0E21",
  "game usernames": "\u0E0A\u0E37\u0E48\u0E2D\u0E43\u0E19\u0E40\u0E01\u0E21",
  games: "\u0E40\u0E01\u0E21",
  "general user": "\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B",
  "get the gift": "\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25",
  "get verrified badge": "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2B\u0E21\u0E32\u0E22 'Verified' \u0E01\u0E33\u0E01\u0E31\u0E1A\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C",
  "go to profile": "\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
  "go to profile and click profile picture to change frame": "\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E43\u0E0A\u0E49\u0E01\u0E23\u0E2D\u0E1A\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E44\u0E14\u0E49 \u0E42\u0E14\u0E22\u0E01\u0E32\u0E23\u0E01\u0E14\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E23\u0E39\u0E1B\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
  gold: "Gold",
  "have a chance to get rare card": "\u0E27\u0E34\u0E18\u0E35\u0E23\u0E31\u0E1A\u0E01\u0E23\u0E2D\u0E1A\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E48\u0E19\u0E14\u0E49\u0E27\u0E22\u0E1A\u0E31\u0E0D\u0E0A\u0E35 CTRL G",
  history: "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34",
  home: "\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01",
  "hours ago": "\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
  "how it works": "How it works",
  "How to Create a Party": "\u0E27\u0E34\u0E18\u0E35\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07 Party",
  "how to create party": "\u0E27\u0E34\u0E18\u0E35\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49",
  "How to Join a Party": "\u0E27\u0E34\u0E18\u0E35\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21 Party",
  "how to join party": "\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E23",
  "how to start playing": "Party \u0E04\u0E23\u0E1A\u0E41\u0E25\u0E49\u0E27 \u0E40\u0E23\u0E34\u0E48\u0E21\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E23",
  "how to start the game": "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E23",
  "id card has already registered on ctrlg": "\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19\u0E40\u0E04\u0E22\u0E16\u0E39\u0E01\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E01\u0E31\u0E1A CTRL G \u0E44\u0E1B\u0E41\u0E25\u0E49\u0E27",
  images: "\u0E23\u0E39\u0E1B",
  immortal: "Immortal",
  "in game username": "\u0E0A\u0E37\u0E48\u0E2D\u0E43\u0E19\u0E40\u0E01\u0E21",
  inactive: "\u0E2D\u0E2D\u0E1F\u0E44\u0E25\u0E19\u0E4C",
  "input description": "\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
  "input in game username": "\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E43\u0E19\u0E40\u0E01\u0E21...",
  "input tags": "\u0E01\u0E23\u0E2D\u0E01 Hashtag",
  intelligence: "RECOVERY",
  "invalid laser idcard length": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E25\u0E02\u0E2B\u0E25\u0E31\u0E07\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19\u0E43\u0E2B\u0E49\u0E04\u0E23\u0E1A 12 \u0E2B\u0E25\u0E31\u0E01",
  "Invalid Password": "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07",
  "invalid password": "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07",
  "invalid thai pattern": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E1B\u0E47\u0E19\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22",
  iron: "Iron",
  "is discordId required": "\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E23\u0E2D\u0E01 Discord ID",
  "is email required": "\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E23\u0E2D\u0E01\u0E2D\u0E35\u0E40\u0E21\u0E25",
  "is ign required": "\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E43\u0E19\u0E40\u0E01\u0E21",
  "is kyc required": "\u0E15\u0E49\u0E2D\u0E07\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E15\u0E31\u0E27\u0E15\u0E19",
  "is phone Number required": "\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C",
  "is slip required": "\u0E15\u0E49\u0E2D\u0E07\u0E0A\u0E33\u0E23\u0E30\u0E04\u0E48\u0E32\u0E2A\u0E21\u0E31\u0E04\u0E23",
  items: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",
  join: "\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21",
  "join team link copied": "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E25\u0E34\u0E07\u0E04\u0E4C\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E17\u0E35\u0E21\u0E41\u0E25\u0E49\u0E27",
  "joined tournaments": "\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21",
  "KYC benefits": "\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E1B\u0E23\u0E30\u0E42\u0E22\u0E0A\u0E19\u0E4C",
  "KYC info": "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E1A\u0E31\u0E0D\u0E0A\u0E35",
  'KYC to access "anonymouse" and "buy sell" rooms': '\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E15\u0E31\u0E27\u0E15\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E1A"\u0E44\u0E21\u0E48\u0E48\u0E23\u0E30\u0E1A\u0E38\u0E15\u0E31\u0E27\u0E15\u0E19"',
  'KYC to access "buy sell" and "tournament" rooms': "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E15\u0E31\u0E27\u0E15\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49 '\u0E0B\u0E37\u0E49\u0E2D\u0E02\u0E32\u0E22'",
  language: "\u0E20\u0E32\u0E29\u0E32",
  "laser code": "\u0E40\u0E25\u0E02\u0E2B\u0E25\u0E31\u0E07\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19",
  "last 10 characters must be numbers": "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23 10 \u0E15\u0E31\u0E27\u0E2B\u0E25\u0E31\u0E07\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02",
  "last name": "\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25",
  "last update": "\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E17\u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14",
  "lastest post": "\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E43\u0E2B\u0E21\u0E48",
  "leave party": "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49",
  "leave team": "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E17\u0E35\u0E21",
  like: "\u0E0A\u0E2D\u0E1A",
  liked: "\u0E0A\u0E2D\u0E1A",
  "load less": "\u0E22\u0E48\u0E2D\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25",
  "load more": "\u0E14\u0E39\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21",
  "Load More": "\u0E14\u0E39\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21",
  lock: "\u0E25\u0E47\u0E2D\u0E04\u0E17\u0E35\u0E48\u0E27\u0E48\u0E32\u0E07",
  login: "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A",
  "login with Google": "\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E14\u0E49\u0E27\u0E22 Google",
  "login with LINE": "\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E14\u0E49\u0E27\u0E22 LINE",
  logout: "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A",
  manage: "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23",
  "maximum 10 fields": "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E23\u0E2D\u0E01\u0E44\u0E14\u0E49\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 10 \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25",
  "maximum 10 options": "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E2A\u0E48\u0E44\u0E14\u0E49\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 10 \u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01",
  "maximum 10 prizes": "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E23\u0E2D\u0E01\u0E44\u0E14\u0E49\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 10 \u0E23\u0E32\u0E07\u0E27\u0E31\u0E25",
  "maximum team": "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E21\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E34\u0E14\u0E23\u0E31\u0E1A",
  "Member limit reached": "\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E04\u0E23\u0E1A\u0E15\u0E32\u0E21\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E41\u0E25\u0E49\u0E27",
  "Member limit not reached, Please wait for other members to join the team": "\u0E17\u0E35\u0E21\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E22\u0E31\u0E07\u0E21\u0E35\u0E08\u0E33\u0E19\u0E27\u0E19\u0E44\u0E21\u0E48\u0E04\u0E23\u0E1A\u0E15\u0E32\u0E21\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14",
  merchant: "\u0E23\u0E49\u0E32\u0E19\u0E04\u0E49\u0E32",
  message: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21",
  "minutes ago": "\u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
  mode: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E42\u0E2B\u0E21\u0E14",
  "most comments": "\u0E1B\u0E23\u0E30\u0E40\u0E14\u0E47\u0E19\u0E23\u0E49\u0E2D\u0E19 (24 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07)",
  "most reactions": "\u0E22\u0E2D\u0E14\u0E19\u0E34\u0E22\u0E21 (24 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07)",
  "must contain at least 5 characters": "\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 5 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
  "must contain 5-30 characters": "\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 5 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
  "my achievement": "\u0E1C\u0E25\u0E07\u0E32\u0E19",
  "my album": "\u0E2D\u0E31\u0E25\u0E1A\u0E31\u0E49\u0E21",
  "my albums": "\u0E2D\u0E31\u0E25\u0E1A\u0E31\u0E49\u0E21\u0E23\u0E39\u0E1B",
  "my conversations": "\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
  "my comments": "\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
  "my experiences": "\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C",
  "my games": "\u0E41\u0E23\u0E07\u0E04\u0E4C\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
  "my notifications": "\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19",
  "my parties": "\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
  "my personal details": "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E09\u0E31\u0E19",
  "my team": "\u0E17\u0E35\u0E21\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
  "my tournaments": "\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
  "my webboards": "\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
  name: "\u0E40\u0E0A\u0E48\u0E19 \u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19",
  "name (English)": "\u0E40\u0E0A\u0E48\u0E19 \u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19 (English)",
  "new party": "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49",
  "new post": "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49",
  next: "\u0E16\u0E31\u0E14\u0E44\u0E1B",
  "Note: KYC refers to the Know Your Customer process, a standard in the financial industry to verify the identity of customers.": "\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38: KYC \u0E2B\u0E21\u0E32\u0E22\u0E16\u0E36\u0E07\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23 Know Your Customer \u0E0B\u0E36\u0E48\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E43\u0E19\u0E2D\u0E38\u0E15\u0E2A\u0E32\u0E2B\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23\u0E40\u0E07\u0E34\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E15\u0E31\u0E27\u0E15\u0E19\u0E02\u0E2D\u0E07\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32",
  "notification:has replied to your comment": "\u0E44\u0E14\u0E49\u0E15\u0E2D\u0E1A\u0E01\u0E25\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
  "notification:has commented on your post": "\u0E44\u0E14\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2B\u0E47\u0E19\u0E43\u0E19\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
  "notification:has sent a request to join your party": "\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
  "notification:Your Party is ready! start gaming by adding friend's username": "\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E40\u0E15\u0E47\u0E21\u0E41\u0E25\u0E49\u0E27! \u0E41\u0E2D\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E43\u0E19\u0E40\u0E01\u0E21\u0E41\u0E25\u0E49\u0E27\u0E40\u0E23\u0E34\u0E48\u0E21\u0E40\u0E25\u0E48\u0E19\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22",
  "notification:Your request to join": "\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49",
  "notification:party has been accepted": "\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34\u0E41\u0E25\u0E49\u0E27",
  "notification:party has been rejected": "\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E0F\u0E34\u0E40\u0E2A\u0E18",
  "notification:Your team": "\u0E17\u0E35\u0E21\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
  "notification:has been approved to join": "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34\u0E43\u0E2B\u0E49\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C",
  "notification:that has been approved to join": "\u0E16\u0E39\u0E01\u0E15\u0E31\u0E14\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C",
  "notification:tournament": "\u0E41\u0E25\u0E49\u0E27",
  "notification:tournament has been removed because": "\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01",
  "notification:request to join": "\u0E16\u0E39\u0E01\u0E1B\u0E0F\u0E34\u0E40\u0E2A\u0E18\u0E43\u0E19\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C",
  "notification:tournament has been rejected because": "\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01",
  "notification:Your tournament": "\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C",
  "notification:has been approved": "\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34\u0E41\u0E25\u0E49\u0E27",
  "notification:has been rejected because": "\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E16\u0E39\u0E01\u0E1B\u0E0F\u0E34\u0E40\u0E2A\u0E18\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01",
  "no chat": "\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21",
  "no data": "\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25",
  "No data": "\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21",
  "no game username": "\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E0A\u0E37\u0E48\u0E2D\u0E43\u0E19\u0E40\u0E01\u0E21",
  "no notifications": "\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19",
  "no participant": "\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1C\u0E39\u0E49\u0E40\u0E02\u0E49\u0E32\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19",
  "no party matched": "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E17\u0E35\u0E48\u0E04\u0E49\u0E19\u0E2B\u0E32",
  "no party request": "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21",
  "no party requests": "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21",
  "no password found": "\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E44\u0E21\u0E48\u0E21\u0E35\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
  "no past tournament": "\u0E04\u0E38\u0E13\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E40\u0E04\u0E22\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C",
  "no user": "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",
  "no webboard": "\u0E04\u0E38\u0E13\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E32\u0E23\u0E2A\u0E19\u0E17\u0E19\u0E32",
  "ongoing tournaments": "\u0E2D\u0E22\u0E39\u0E48\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19",
  "only accept number": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19",
  "only english characters and numbers are allowed": "\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E23\u0E2D\u0E01\u0E44\u0E14\u0E49\u0E41\u0E04\u0E48\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29 \u0E41\u0E25\u0E30 \u0E15\u0E31\u0E27\u0E40\u0E25\u0E02 (A-Z, a-z, 0-9)",
  "only english characters and numbers are allowed, and no spaces": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29\u0E2B\u0E23\u0E37\u0E2D\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 \u0E41\u0E25\u0E30\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E0A\u0E49\u0E0A\u0E48\u0E2D\u0E07\u0E27\u0E48\u0E32\u0E07\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E27\u0E49\u0E19\u0E27\u0E23\u0E23\u0E04",
  "opening registration": "\u0E40\u0E1B\u0E34\u0E14\u0E23\u0E31\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23",
  "opening tournaments": "\u0E40\u0E1B\u0E34\u0E14\u0E23\u0E31\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23",
  option: "\u0E01\u0E23\u0E2D\u0E01\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01",
  or: "\u0E2B\u0E23\u0E37\u0E2D",
  organizer: "\u0E1C\u0E39\u0E49\u0E08\u0E31\u0E14\u0E17\u0E31\u0E27\u0E23\u0E4C",
  "over 30,000": "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 30,000",
  participants: "\u0E1C\u0E39\u0E49\u0E40\u0E02\u0E49\u0E32\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19",
  parties: "\u0E2B\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21",
  "party active": "\u0E15\u0E31\u0E49\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C",
  "party boosted": "\u0E14\u0E31\u0E19\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E41\u0E25\u0E49\u0E27!",
  "party link copied": "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "party matching": "\u0E2B\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21",
  "party name": "\u0E0A\u0E37\u0E48\u0E2D\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49",
  "party owner must approve before joining": "\u0E2B\u0E31\u0E27\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E49\u0E2D\u0E07\u0E08\u0E30\u0E15\u0E49\u0E2D\u0E07\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E04\u0E33\u0E02\u0E2D\u0E01\u0E48\u0E2D\u0E19\u0E08\u0E36\u0E07\u0E08\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E44\u0E14\u0E49",
  "party request": "\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E41\u0E25\u0E49\u0E27",
  "party requests": "\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21",
  password: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
  "password doesn't match": "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E19",
  "past tournaments": "\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C\u0E17\u0E35\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E21\u0E32",
  pending: "\u0E23\u0E2D\u0E01\u0E32\u0E23\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34",
  "pending teams": "\u0E17\u0E35\u0E21\u0E23\u0E2D\u0E01\u0E32\u0E23\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34",
  "people who liked you": "\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E01\u0E14\u0E0A\u0E2D\u0E1A",
  personalDetails: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E09\u0E31\u0E19",
  "personal details": "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E09\u0E31\u0E19",
  phone: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C",
  "phone number": "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C",
  platinum: "Platinum",
  "player info": "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19",
  "please agree to this field": "\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E14",
  "please do not input '-'": "\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2B\u0E21\u0E32\u0E22\u0E02\u0E35\u0E14 '-'",
  "please enter otp": "\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A OTP",
  "please enter username": "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E16\u0E39\u0E01\u0E43\u0E0A\u0E49\u0E44\u0E1B\u0E41\u0E25\u0E49\u0E27",
  "please input achievement image": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E23\u0E39\u0E1B\u0E1C\u0E25\u0E07\u0E32\u0E19",
  "please input achievement name": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E25\u0E07\u0E32\u0E19",
  "please input achievement title": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E1C\u0E25\u0E07\u0E32\u0E19",
  "please input album name": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E25\u0E1A\u0E31\u0E49\u0E21",
  "please input citizen id": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E25\u0E02\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E15\u0E31\u0E27\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19",
  "please input contactName": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D",
  "please input content": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49",
  "please input correct citizen id": "\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E15\u0E31\u0E27\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07",
  "please input correct email": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E43\u0E2B\u0E49\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07",
  "please input correct email or phone": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C",
  "please input data": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25",
  "please input description": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C",
  "please input detail": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27",
  "please input discord id": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D Discord",
  "please input email": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E2D\u0E35\u0E40\u0E21\u0E25",
  "please input experience name": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E17\u0E35\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E0A\u0E37\u0E48\u0E2D\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C",
  "please input experience title": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E01\u0E21",
  "please input feedback message": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E19\u0E30\u0E19\u0E33-\u0E15\u0E34\u0E0A\u0E21",
  "please input firstname": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D",
  "please input game icon": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E2D\u0E04\u0E2D\u0E19\u0E40\u0E01\u0E21",
  "please input game rank": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E23\u0E07\u0E04\u0E4C",
  "please input game username": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E43\u0E19\u0E40\u0E01\u0E21",
  "please input laser code": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E25\u0E02\u0E2B\u0E25\u0E31\u0E07\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19",
  "please input lastname": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25",
  "please input max team": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E21\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E34\u0E14\u0E23\u0E31\u0E1A",
  "please input name": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23",
  "please input name in English": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29",
  "please input number of additional player": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E35\u0E21\u0E15\u0E31\u0E27\u0E2A\u0E33\u0E23\u0E2D\u0E07",
  "please input number of required player": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E35\u0E21\u0E15\u0E31\u0E27\u0E08\u0E23\u0E34\u0E07",
  "please input password": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
  "please input party name": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49",
  "please input phone": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C",
  "please input phone number": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C",
  "please input qualification rules": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E01\u0E15\u0E34\u0E01\u0E32\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C",
  "please input reason to report": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E2B\u0E15\u0E38\u0E1C\u0E25\u0E43\u0E19\u0E01\u0E32\u0E23\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19",
  "please input room": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E49\u0E2D\u0E07",
  "please input team logo": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E23\u0E37\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E23\u0E39\u0E1B\u0E17\u0E35\u0E21",
  "please input team name": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E17\u0E35\u0E21",
  "please input title": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49",
  "please input title personal detail": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D",
  "please input tournament name": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C",
  "please select date of birth": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E27\u0E31\u0E19\u0E40\u0E01\u0E34\u0E14",
  "please select end date": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E27\u0E31\u0E19\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19",
  "please select experience end date": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E27\u0E31\u0E19\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C",
  "please select experience start date": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E27\u0E31\u0E19\u0E40\u0E23\u0E34\u0E48\u0E21\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C",
  "please select game": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E01\u0E21",
  "please select registration end date": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E27\u0E31\u0E19\u0E1B\u0E34\u0E14\u0E01\u0E32\u0E23\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19",
  "please select registration start date": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E27\u0E31\u0E19\u0E40\u0E23\u0E34\u0E48\u0E21\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19",
  "please select start date": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E27\u0E31\u0E19\u0E40\u0E23\u0E34\u0E48\u0E21\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19",
  "please select tournament type": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19",
  "please upload banner image": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E23\u0E39\u0E1B Banner",
  "please upload cover image": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E23\u0E39\u0E1B\u0E1B\u0E01\u0E2D\u0E31\u0E25\u0E1A\u0E31\u0E49\u0E21",
  "please upload post thumbnail": "\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E23\u0E39\u0E1B\u0E1B\u0E01\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49",
  "please upload slip image": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E2A\u0E25\u0E34\u0E1B\u0E42\u0E2D\u0E19\u0E40\u0E07\u0E34\u0E19\u0E04\u0E48\u0E32\u0E2A\u0E21\u0E31\u0E04\u0E23",
  "please upload thumnail image": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E23\u0E39\u0E1B\u0E1B\u0E01 Thumbnail",
  "poll options": "\u0E23\u0E30\u0E1A\u0E38\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01",
  "popular tags": "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E19\u0E43\u0E08\u0E02\u0E13\u0E30\u0E19\u0E35\u0E49",
  "post url copied": "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E25\u0E34\u0E07\u0E04\u0E4C\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E41\u0E25\u0E49\u0E27",
  posts: "\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49",
  present: "\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19",
  privacy: "\u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27",
  private: "\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27",
  "private album": "\u0E2D\u0E31\u0E25\u0E1A\u0E31\u0E49\u0E21\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27",
  "private party": "\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27",
  prize: "\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25...",
  "prize additional fields": "\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E02\u0E2D\u0E07\u0E41\u0E15\u0E48\u0E25\u0E30\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A",
  prizeNumber: "\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A\u0E17\u0E35\u0E48",
  profile: "\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C",
  "profile url copied": "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  public: "\u0E2A\u0E32\u0E18\u0E32\u0E23\u0E13\u0E30",
  "qualification rules": "\u0E01\u0E15\u0E34\u0E01\u0E32\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19",
  "qualification rules (English)": "\u0E01\u0E15\u0E34\u0E01\u0E32\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19 (English)",
  radiant: "Radiant",
  rank: "\u0E41\u0E23\u0E07\u0E04\u0E4C",
  "rank in game": "\u0E41\u0E23\u0E07\u0E04\u0E4C\u0E43\u0E19\u0E40\u0E01\u0E21",
  "Ranking game already exists": "\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E01\u0E21\u0E19\u0E35\u0E49\u0E44\u0E1B\u0E41\u0E25\u0E49\u0E27",
  ranks: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E23\u0E07\u0E04\u0E4C",
  "rare rules": "\u0E01\u0E15\u0E34\u0E01\u0E32",
  refresh: "\u0E42\u0E2B\u0E25\u0E14\u0E43\u0E2B\u0E21\u0E48",
  "refresh in": "\u0E08\u0E30\u0E23\u0E35\u0E40\u0E1F\u0E23\u0E0A\u0E43\u0E19",
  register: "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01",
  "registration end date": "\u0E1B\u0E34\u0E14\u0E01\u0E32\u0E23\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48",
  "registration start date": "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48",
  reject: "\u0E1B\u0E0F\u0E34\u0E40\u0E2A\u0E18",
  "reject comment": "\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E2B\u0E15\u0E38\u0E1C\u0E25\u0E2B\u0E32\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1B\u0E0F\u0E34\u0E40\u0E2A\u0E18\u0E17\u0E35\u0E21",
  "reject team": "\u0E1B\u0E0F\u0E34\u0E40\u0E2A\u0E18\u0E17\u0E35\u0E21",
  "related tournaments": "\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07",
  reply: "\u0E15\u0E2D\u0E1A\u0E01\u0E25\u0E31\u0E1A",
  "reply to": "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E15\u0E2D\u0E1A\u0E01\u0E25\u0E31\u0E1A...",
  report: "\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19",
  request: "\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D",
  "request message": "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E02\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21",
  "request sent": "\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E41\u0E25\u0E49\u0E27",
  "request to join party": "\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21",
  reserved: "\u0E08\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
  "reset password email has been sent, please return to ctrlg after reset success": "\u0E2A\u0E48\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E17\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08,  \u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E17\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08\u0E41\u0E25\u0E49\u0E27\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E17\u0E35\u0E48 CTRL G",
  "remark should not be empty": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E2B\u0E15\u0E38\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E0F\u0E34\u0E40\u0E2A\u0E18\u0E17\u0E35\u0E21",
  "remove comment": "\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E2B\u0E15\u0E38\u0E1C\u0E25\u0E2B\u0E32\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1B\u0E0F\u0E34\u0E40\u0E2A\u0E18\u0E17\u0E35\u0E21",
  "remove team": "\u0E15\u0E31\u0E14\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E17\u0E35\u0E21",
  "remove team remark should not be empty": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E2B\u0E15\u0E38\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E15\u0E31\u0E14\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E17\u0E35\u0E21",
  "removed team members have to create a new team": "(\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E35\u0E21\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E15\u0E31\u0E14\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E17\u0E35\u0E21\u0E43\u0E2B\u0E21\u0E48 \u0E2B\u0E32\u0E01\u0E22\u0E31\u0E07\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E34\u0E14\u0E23\u0E31\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23)",
  required: "\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E23\u0E2D\u0E01",
  "required players": "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E35\u0E21\u0E15\u0E31\u0E27\u0E08\u0E23\u0E34\u0E07",
  "required slots": "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2B\u0E32",
  "reward #": "\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E17\u0E35\u0E48",
  "reward center": "\u0E17\u0E35\u0E48\u0E41\u0E25\u0E01\u0E02\u0E2D\u0E07\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25",
  "Reward center": "\u0E17\u0E35\u0E48\u0E41\u0E25\u0E01\u0E02\u0E2D\u0E07\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25",
  "REWARD CENTER": "\u0E17\u0E35\u0E48\u0E41\u0E25\u0E01\u0E02\u0E2D\u0E07\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25",
  "recommended ratio": "\u0E2D\u0E31\u0E15\u0E23\u0E32\u0E2A\u0E48\u0E27\u0E19\u0E41\u0E19\u0E30\u0E19\u0E33",
  "recommended resolution": "\u0E02\u0E19\u0E32\u0E14\u0E23\u0E39\u0E1B\u0E41\u0E19\u0E30\u0E19\u0E33",
  "recommended resolution 1920x1080": "\u0E02\u0E19\u0E32\u0E14\u0E23\u0E39\u0E1B\u0E41\u0E19\u0E30\u0E19\u0E33 1920x1080",
  rooms: "\u0E2B\u0E49\u0E2D\u0E07",
  rules: "\u0E01\u0E15\u0E34\u0E01\u0E32\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19",
  save: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",
  "schedule hasn't yet been released": "\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E15\u0E32\u0E23\u0E32\u0E07\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19",
  "secret chamber": "\u0E04\u0E25\u0E31\u0E1A\u0E1E\u0E34\u0E40\u0E28\u0E29",
  "Secret chamber": "\u0E04\u0E25\u0E31\u0E1A\u0E1E\u0E34\u0E40\u0E28\u0E29",
  "SECRET CHAMBER": "\u0E04\u0E25\u0E31\u0E1A\u0E1E\u0E34\u0E40\u0E28\u0E29",
  second: "\u0E27\u0E34",
  "seconds ago": "\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
  "select all": "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
  "select cover image": "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E39\u0E1B\u0E1B\u0E01",
  "select avatar image": "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E39\u0E1B\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C",
  "select display image": "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E42\u0E25\u0E42\u0E01\u0E49\u0E17\u0E35\u0E21",
  "select file": "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E1F\u0E25\u0E4C",
  "select frame": "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E01\u0E23\u0E2D\u0E1A\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C",
  "select game": "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E01\u0E21",
  "select mode": "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E42\u0E2B\u0E21\u0E14",
  "select rank": "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E23\u0E07\u0E04\u0E4C",
  "select ranks": "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E23\u0E07\u0E04\u0E4C",
  "select room": "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E49\u0E2D\u0E07",
  "select the preferred ranks": "\u0E40\u0E25\u0E37\u0E2D\u0E01 Rank \u0E02\u0E2D\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E23\u0E48\u0E27\u0E21\u0E17\u0E35\u0E21\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23 \u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 3 Rank",
  "select your profile frame": "\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E43\u0E0A\u0E49\u0E01\u0E23\u0E2D\u0E1A\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E44\u0E14\u0E49",
  send: "\u0E2A\u0E48\u0E07",
  "send a message failed": "\u0E04\u0E38\u0E13\u0E16\u0E39\u0E01\u0E40\u0E15\u0E30\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E41\u0E25\u0E49\u0E27",
  "send request": "\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21",
  setting: "\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32",
  settings: "\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32",
  share: "\u0E41\u0E0A\u0E23\u0E4C",
  "Share Avatar": "\u0E41\u0E0A\u0E23\u0E4C\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C",
  signature: "\u0E25\u0E32\u0E22\u0E40\u0E0B\u0E47\u0E19",
  silver: "Silver",
  "single elimination": "\u0E41\u0E1A\u0E1A\u0E41\u0E1E\u0E49\u0E04\u0E31\u0E14\u0E2D\u0E2D\u0E01",
  "social accounts": "\u0E1A\u0E31\u0E0D\u0E0A\u0E35 Social",
  "sort order": "\u0E40\u0E23\u0E35\u0E22\u0E07\u0E25\u0E33\u0E14\u0E31\u0E1A",
  "sorting order": "\u0E40\u0E23\u0E35\u0E22\u0E07\u0E25\u0E33\u0E14\u0E31\u0E1A",
  "spaces are not allowed": "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E0A\u0E49\u0E0A\u0E48\u0E2D\u0E07\u0E27\u0E48\u0E32\u0E07\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E27\u0E49\u0E19\u0E27\u0E23\u0E23\u0E04",
  speed: "SPEED",
  "start buy sell & anonymous after complete verification": "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E0B\u0E37\u0E49\u0E2D\u0E02\u0E32\u0E22\u0E44\u0E14\u0E49\u0E17\u0E31\u0E19\u0E17\u0E35 \u0E2B\u0E25\u0E31\u0E07\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E15\u0E31\u0E27\u0E15\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "start date": "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48",
  "start date must be before end date": "\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E32\u0E01\u0E48\u0E2D\u0E19\u0E27\u0E31\u0E19\u0E2A\u0E38\u0E14\u0E17\u0E49\u0E32\u0E22",
  "start date must be before end date and at least 2 days later than today": "\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E32\u0E01\u0E48\u0E2D\u0E19\u0E27\u0E31\u0E19\u0E2A\u0E38\u0E14\u0E17\u0E49\u0E32\u0E22",
  "start quiz": "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E40\u0E25\u0E48\u0E19\u0E40\u0E25\u0E22",
  "start verification": "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E15\u0E31\u0E27\u0E15\u0E19",
  streamer: "\u0E2A\u0E15\u0E23\u0E35\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C / \u0E19\u0E31\u0E01\u0E01\u0E35\u0E2C\u0E32",
  strength: "POWER",
  submit: "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19",
  "submit feedback": "\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21",
  "submit team": "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E17\u0E35\u0E21",
  "successfully add user in game": "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E23\u0E07\u0E04\u0E4C\u0E43\u0E19\u0E40\u0E01\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully approved request": "\u0E23\u0E31\u0E1A\u0E04\u0E33\u0E02\u0E2D\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully boosted party": "\u0E14\u0E31\u0E19\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully bulk-approve": "\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34\u0E17\u0E35\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E41\u0E25\u0E49\u0E27",
  "successfully claim reward": "\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "Successfully commented": "\u0E41\u0E2A\u0E14\u0E07\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully create tournament": "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully create webboard": "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully create-team": "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E17\u0E35\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully created achievement": "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully created album": "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2D\u0E31\u0E25\u0E1A\u0E31\u0E49\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "Successfully created experience": "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully created experience title": "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E2D\u0E37\u0E48\u0E19\u0E46\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully created party": "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully created party member": "\u0E25\u0E47\u0E2D\u0E04\u0E17\u0E35\u0E48\u0E27\u0E48\u0E32\u0E07\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully created request": "\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully delete member": "\u0E40\u0E15\u0E30\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully delete request": "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "Successfully deleted achievement}": "\u0E25\u0E1A\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "Successfully deleted album": "\u0E25\u0E1A\u0E2D\u0E31\u0E25\u0E1A\u0E31\u0E49\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "Successfully deleted experience": "\u0E25\u0E1A\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "Successfully deleted experience title": "\u0E25\u0E1A\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "Successfully deleted comment": "\u0E25\u0E1A\u0E04\u0E2D\u0E21\u0E40\u0E21\u0E49\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully deleted frame": "\u0E16\u0E2D\u0E14\u0E01\u0E23\u0E2D\u0E1A\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully deleted member": "\u0E40\u0E15\u0E30\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "Successfully deleted photo": "\u0E25\u0E1A\u0E23\u0E39\u0E1B\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully deleted request": "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E04\u0E33\u0E02\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "Successfully deleted tournament}": "\u0E25\u0E1A\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "Successfully deleted user in game": "\u0E25\u0E1A\u0E41\u0E23\u0E07\u0E04\u0E4C\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "Successfully deleted webboard": "\u0E25\u0E1A\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully delete-team": "\u0E22\u0E38\u0E1A\u0E17\u0E35\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully delete-team-member": "\u0E40\u0E15\u0E30\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E35\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully edit profile": "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully joined party": "\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully join-team": "\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E17\u0E35\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully leave-team": "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E17\u0E35\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully left party": "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully login": "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully Login": "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully Register Account": "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully reject": "\u0E1B\u0E0F\u0E34\u0E40\u0E2A\u0E18\u0E17\u0E35\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully rejected request": "\u0E1B\u0E0F\u0E34\u0E40\u0E2A\u0E18\u0E04\u0E33\u0E02\u0E2D\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully remove": "\u0E15\u0E31\u0E14\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E17\u0E35\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "Successfully reported webboard": "\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully sent feedback": "\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E41\u0E19\u0E30\u0E19\u0E33-\u0E15\u0E34\u0E0A\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully saved to profile index": "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully sorted album": "\u0E40\u0E23\u0E35\u0E22\u0E07\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E2D\u0E31\u0E25\u0E1A\u0E31\u0E49\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully sorted my achievement": "\u0E40\u0E23\u0E35\u0E22\u0E07\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully sorted my achievement title": "\u0E40\u0E23\u0E35\u0E22\u0E07\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully sorted my experience title": "\u0E40\u0E23\u0E35\u0E22\u0E07\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully sorted my games": "\u0E40\u0E23\u0E35\u0E22\u0E07\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E40\u0E01\u0E21\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully sorted personal details": "\u0E40\u0E23\u0E35\u0E22\u0E07\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E09\u0E31\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully sorted profile": "\u0E40\u0E23\u0E35\u0E22\u0E07\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully submit-team": "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E17\u0E35\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "Successfully update comment": "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2B\u0E47\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "Successfully update party": "\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E17\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully update party member": "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully update profile": "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully update signature": "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E25\u0E32\u0E22\u0E40\u0E0B\u0E47\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully update tournament": "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully update webboard": "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully updated achievement": "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully updated achievement title": "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully updated album": "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E2D\u0E31\u0E25\u0E1A\u0E31\u0E49\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "Successfully updated experience": "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully updated personal details": "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E09\u0E31\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully updated user in game": "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E41\u0E23\u0E07\u0E04\u0E4C\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully update-team": "\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E17\u0E17\u0E35\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully update-team-member": "\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "successfully upload photos": "\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E20\u0E32\u0E1E\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "Successfully uploaded cover image": "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E23\u0E39\u0E1B\u0E1B\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "Successfully uploaded display image": "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E23\u0E39\u0E1B\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "Successfully uploaded frame image": "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E01\u0E23\u0E2D\u0E1A\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "Successfully voted": "\u0E42\u0E2B\u0E27\u0E15\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  system: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A",
  tags: "\u0E40\u0E1E\u0E34\u0E48\u0E21 Hashtag",
  teams: "\u0E17\u0E35\u0E21",
  "team info": "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E21",
  "team logo": "\u0E42\u0E25\u0E42\u0E01\u0E49\u0E17\u0E35\u0E21",
  "team members": "\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E35\u0E21",
  "team name": "\u0E0A\u0E37\u0E48\u0E2D\u0E17\u0E35\u0E21",
  "team name or tournament name": "\u0E0A\u0E37\u0E48\u0E2D\u0E17\u0E35\u0E21 / \u0E0A\u0E37\u0E48\u0E2D\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C",
  terms: "\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14",
  "text input": "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B",
  thb: "\u0E1A\u0E32\u0E17",
  "this action cannot be undone": "(\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E01\u0E49\u0E44\u0E02\u0E42\u0E2B\u0E27\u0E15\u0E44\u0E14\u0E49)",
  "This id card has already been registered on CtrlG": "\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19\u0E40\u0E04\u0E22\u0E16\u0E39\u0E01\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E01\u0E31\u0E1A CTRL G \u0E44\u0E1B\u0E41\u0E25\u0E49\u0E27",
  "This is your avatar": "\u0E04\u0E25\u0E34\u0E01\u0E1B\u0E38\u0E48\u0E21\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E2B\u0E23\u0E37\u0E2D\u0E41\u0E0A\u0E23\u0E4C\u0E20\u0E32\u0E1E\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
  "This is your gift": "\u0E22\u0E34\u0E19\u0E14\u0E35\u0E14\u0E49\u0E27\u0E22! \u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E23\u0E2D\u0E1A\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E1E\u0E34\u0E40\u0E28\u0E29",
  "this is your profile": "\u0E19\u0E35\u0E48\u0E04\u0E37\u0E2D\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
  "thumbnail image": "\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E23\u0E39\u0E1B\u0E1B\u0E01 Thumbnail",
  title: "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49 (\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19 200 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23)",
  "title must contain only 30 charaters": "\u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E22\u0E32\u0E27\u0E40\u0E01\u0E34\u0E19\u0E44\u0E1B (\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 30 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23)",
  "title personal details": "\u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D",
  today: "\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49",
  "total prize": "\u0E40\u0E07\u0E34\u0E19\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E23\u0E27\u0E21 (\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25\u0E1A\u0E19\u0E23\u0E39\u0E1B\u0E1B\u0E01\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C)",
  tournament: "\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C",
  "tournament board": "\u0E04\u0E33\u0E16\u0E32\u0E21 - \u0E04\u0E33\u0E15\u0E2D\u0E1A",
  "tournament date": "\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19",
  "tournament finished": "\u0E08\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19",
  "tournament invitation to": "\u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E0A\u0E34\u0E0D\u0E43\u0E2B\u0E49\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E17\u0E35\u0E21",
  "tournament location": "\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19",
  "tournament name": "\u0E0A\u0E37\u0E48\u0E2D\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C",
  "tournament name (English)": "\u0E0A\u0E37\u0E48\u0E2D\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C (English)",
  "tournament ongoing": "\u0E2D\u0E22\u0E39\u0E48\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07",
  "tournament participants": "\u0E1C\u0E39\u0E49\u0E40\u0E02\u0E49\u0E32\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19",
  "tournament Q&A post title can be edited on webboard": "(\u0E2B\u0E32\u0E01\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49 \u0E04\u0E33\u0E16\u0E32\u0E21-\u0E04\u0E33\u0E15\u0E2D\u0E1A \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E02\u0E49\u0E32\u0E44\u0E1B\u0E41\u0E01\u0E49\u0E44\u0E02\u0E0A\u0E37\u0E48\u0E2D\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E44\u0E14\u0E49)",
  "tournament schedule": "\u0E15\u0E32\u0E23\u0E32\u0E07\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19",
  "tournament type": "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19",
  tournaments: "\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C",
  "The request exceed the limit.": "\u0E2A\u0E48\u0E07\u0E23\u0E2B\u0E31\u0E2A\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14 \u0E01\u0E23\u0E38\u0E13\u0E32\u0E25\u0E2D\u0E07\u0E43\u0E2B\u0E21\u0E48\u0E43\u0E19\u0E2D\u0E35\u0E01 15 \u0E19\u0E32\u0E17\u0E35",
  "type message here": "\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21",
  "Unnamed Player": "\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E2D\u0E37\u0E48\u0E19",
  "upcoming tournaments": "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E08\u0E30\u0E40\u0E1B\u0E34\u0E14",
  update: "\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E17",
  upload: "\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14",
  "Upload bracket": "\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E20\u0E32\u0E1E\u0E15\u0E32\u0E23\u0E32\u0E07\u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19",
  "upload cover image": "\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E20\u0E32\u0E1E\u0E1B\u0E01\u0E2D\u0E31\u0E25\u0E1A\u0E31\u0E49\u0E21",
  "upload image": "\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E20\u0E32\u0E1E",
  "upload images in album": "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E23\u0E39\u0E1B",
  "upload slip image": "\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E2A\u0E25\u0E34\u0E1B\u0E42\u0E2D\u0E19\u0E40\u0E07\u0E34\u0E19\u0E04\u0E48\u0E32\u0E2A\u0E21\u0E31\u0E04\u0E23",
  Uploading: "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E42\u0E2B\u0E25\u0E14",
  "user is banned": "\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E16\u0E39\u0E01\u0E23\u0E30\u0E07\u0E31\u0E1A",
  "User is permanently banned": "\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E16\u0E39\u0E01\u0E23\u0E30\u0E07\u0E31\u0E1A",
  "user url": "\u0E0A\u0E37\u0E48\u0E2D\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 (\u0E0A\u0E37\u0E48\u0E2D URL \u0E02\u0E2D\u0E07 Profile)",
  "username copied": "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E43\u0E19\u0E40\u0E01\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
  "username in game": "\u0E0A\u0E37\u0E48\u0E2D\u0E43\u0E19\u0E40\u0E01\u0E21",
  "username can't be more than 30 characters": "\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14",
  "username must be more than 5 characters": "\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 5 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
  userAchievements: "\u0E1C\u0E25\u0E07\u0E32\u0E19",
  userExperiences: "\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C",
  userRankingGames: "\u0E41\u0E23\u0E07\u0E04\u0E4C\u0E43\u0E19\u0E40\u0E01\u0E21",
  "value must be higher than 0": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E08\u0E33\u0E19\u0E27\u0E19\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 0",
  verified: "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E15\u0E31\u0E27\u0E15\u0E19\u0E41\u0E25\u0E49\u0E27",
  Verified: "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E15\u0E31\u0E27\u0E15\u0E19\u0E41\u0E25\u0E49\u0E27",
  "verified user": "\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E41\u0E25\u0E49\u0E27",
  "verify account": "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E1A\u0E31\u0E0D\u0E0A\u0E35",
  "verify identity": "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E1A\u0E31\u0E0D\u0E0A\u0E35",
  "view more": "\u0E14\u0E39\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21",
  webboard: "\u0E01\u0E23\u0E30\u0E14\u0E32\u0E19\u0E1E\u0E39\u0E14\u0E04\u0E38\u0E22",
  "webboard usage rules": "\u0E01\u0E0E\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E40\u0E27\u0E47\u0E1A\u0E1A\u0E2D\u0E23\u0E4C\u0E14",
  "Webboard usage rules": "\u0E01\u0E0E\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E40\u0E27\u0E47\u0E1A\u0E1A\u0E2D\u0E23\u0E4C\u0E14",
  website: "\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C",
  "weebboard usage rule 1": "1. \u0E2B\u0E49\u0E32\u0E21\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E2D\u0E31\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E32\u0E23\u0E27\u0E34\u0E1E\u0E32\u0E01\u0E29\u0E4C\u0E27\u0E34\u0E08\u0E32\u0E23\u0E13\u0E4C\u0E2B\u0E23\u0E37\u0E2D\u0E1E\u0E32\u0E14\u0E1E\u0E34\u0E07\u0E2A\u0E16\u0E32\u0E1A\u0E31\u0E19\u0E21\u0E2B\u0E32\u0E01\u0E29\u0E31\u0E15\u0E23\u0E34\u0E22\u0E4C\u0E41\u0E25\u0E30\u0E23\u0E32\u0E0A\u0E27\u0E07\u0E28\u0E4C",
  "weebboard usage rule 2": "2. \u0E2B\u0E49\u0E32\u0E21\u0E40\u0E02\u0E35\u0E22\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E17\u0E35\u0E48\u0E2A\u0E48\u0E2D\u0E44\u0E1B\u0E43\u0E19\u0E17\u0E32\u0E07\u0E2B\u0E22\u0E32\u0E1A\u0E04\u0E32\u0E22 \u0E01\u0E49\u0E32\u0E27\u0E23\u0E49\u0E32\u0E27",
  "weebboard usage rule 3": "3. \u0E2B\u0E49\u0E32\u0E21\u0E40\u0E02\u0E35\u0E22\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E17\u0E35\u0E48\u0E2A\u0E48\u0E2D\u0E44\u0E1B\u0E43\u0E19\u0E17\u0E32\u0E07 \u0E25\u0E32\u0E21\u0E01 \u0E2D\u0E19\u0E32\u0E08\u0E32\u0E23 \u0E23\u0E38\u0E19\u0E41\u0E23\u0E07",
  "weebboard usage rule 4": "4. \u0E2B\u0E49\u0E32\u0E21\u0E40\u0E02\u0E35\u0E22\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E2D\u0E31\u0E19\u0E21\u0E35\u0E40\u0E08\u0E15\u0E19\u0E32\u0E43\u0E2A\u0E48\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E43\u0E2A\u0E48\u0E23\u0E49\u0E32\u0E22\u0E1A\u0E38\u0E04\u0E04\u0E25\u0E2D\u0E37\u0E48\u0E19",
  "weebboard usage rule 5": "5. \u0E2B\u0E49\u0E32\u0E21\u0E40\u0E02\u0E35\u0E22\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E2D\u0E31\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E32\u0E23\u0E17\u0E49\u0E32\u0E17\u0E32\u0E22 \u0E0A\u0E31\u0E01\u0E0A\u0E27\u0E19 \u0E42\u0E14\u0E22\u0E21\u0E35\u0E40\u0E08\u0E15\u0E19\u0E32\u0E01\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E40\u0E01\u0E34\u0E14\u0E01\u0E32\u0E23\u0E17\u0E30\u0E40\u0E25\u0E32\u0E30\u0E27\u0E34\u0E27\u0E32\u0E17 \u0E2B\u0E23\u0E37\u0E2D\u0E01\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E40\u0E01\u0E34\u0E14\u0E04\u0E27\u0E32\u0E21\u0E27\u0E38\u0E48\u0E19\u0E27\u0E32\u0E22\u0E02\u0E36\u0E49\u0E19 \u0E42\u0E1B\u0E23\u0E14\u0E41\u0E2A\u0E14\u0E07\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19\u0E42\u0E14\u0E22\u0E40\u0E2A\u0E23\u0E35\u0E40\u0E0A\u0E48\u0E19\u0E27\u0E34\u0E0D\u0E0D\u0E39\u0E0A\u0E19\u0E1E\u0E36\u0E07\u0E01\u0E23\u0E30\u0E17\u0E33",
  "weebboard usage rule 6": "6. \u0E2B\u0E49\u0E32\u0E21\u0E40\u0E02\u0E35\u0E22\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E01\u0E25\u0E48\u0E32\u0E27\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E2B\u0E23\u0E37\u0E2D\u0E27\u0E34\u0E1E\u0E32\u0E01\u0E29\u0E4C\u0E27\u0E34\u0E08\u0E32\u0E23\u0E13\u0E4C\u0E43\u0E19\u0E17\u0E32\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E32\u0E22\u0E28\u0E32\u0E2A\u0E19\u0E32 \u0E41\u0E25\u0E30\u0E04\u0E27\u0E23\u0E2B\u0E25\u0E35\u0E01\u0E40\u0E25\u0E35\u0E48\u0E22\u0E07\u0E01\u0E32\u0E23\u0E16\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E14\u0E47\u0E19\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E40\u0E21\u0E37\u0E2D\u0E07",
  "weebboard usage rule 7": "7. \u0E2B\u0E49\u0E32\u0E21\u0E43\u0E0A\u0E49\u0E19\u0E32\u0E21\u0E41\u0E1D\u0E07\u0E2D\u0E31\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E0A\u0E37\u0E48\u0E2D\u0E08\u0E23\u0E34\u0E07\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E2D\u0E37\u0E48\u0E19 \u0E42\u0E14\u0E22\u0E21\u0E35\u0E40\u0E08\u0E15\u0E19\u0E32\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E2A\u0E32\u0E18\u0E32\u0E23\u0E13\u0E0A\u0E19\u0E40\u0E02\u0E49\u0E32\u0E43\u0E08\u0E1C\u0E34\u0E14 \u0E41\u0E25\u0E30\u0E40\u0E08\u0E49\u0E32\u0E02\u0E2D\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E19\u0E31\u0E49\u0E19\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E32\u0E22 \u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E2A\u0E37\u0E48\u0E2D\u0E21\u0E40\u0E2A\u0E35\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E2A\u0E35\u0E22\u0E07",
  "weebboard usage rule 8": "8. \u0E2B\u0E49\u0E32\u0E21\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E2D\u0E37\u0E48\u0E19 \u0E40\u0E0A\u0E48\u0E19 \u0E2D\u0E35\u0E40\u0E21\u0E25\u0E2B\u0E23\u0E37\u0E2D\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C \u0E42\u0E14\u0E22\u0E21\u0E35\u0E40\u0E08\u0E15\u0E19\u0E32\u0E01\u0E25\u0E31\u0E48\u0E19\u0E41\u0E01\u0E25\u0E49\u0E07\u0E43\u0E2B\u0E49\u0E1C\u0E39\u0E49\u0E2D\u0E37\u0E48\u0E19\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E40\u0E14\u0E37\u0E2D\u0E14\u0E23\u0E49\u0E2D\u0E19\u0E23\u0E33\u0E04\u0E32\u0E0D \u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E32\u0E22 \u0E42\u0E14\u0E22\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E22\u0E34\u0E48\u0E07\u0E01\u0E23\u0E13\u0E35\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C \u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E04\u0E25\u0E32\u0E14\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19 \u0E41\u0E25\u0E30\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E37\u0E48\u0E2D\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E01\u0E32\u0E23\u0E01\u0E25\u0E31\u0E48\u0E19\u0E41\u0E01\u0E25\u0E49\u0E07\u0E44\u0E14\u0E49\u0E07\u0E48\u0E32\u0E22\u0E01\u0E27\u0E48\u0E32\u0E0A\u0E19\u0E34\u0E14\u0E2D\u0E37\u0E48\u0E19 ctrlg.gg \u0E08\u0E36\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E27\u0E31\u0E15\u0E16\u0E38\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E43\u0E19\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E37\u0E48\u0E2D\u0E01\u0E25\u0E32\u0E07\u0E43\u0E19\u0E01\u0E32\u0E23\u0E19\u0E33\u0E40\u0E2A\u0E19\u0E2D",
  "weebboard usage rule 9": "9. \u0E2B\u0E49\u0E32\u0E21\u0E40\u0E02\u0E35\u0E22\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E2D\u0E31\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E1A\u0E2A\u0E34\u0E48\u0E07\u0E1C\u0E34\u0E14\u0E01\u0E0E\u0E2B\u0E21\u0E32\u0E22\u0E2B\u0E23\u0E37\u0E2D\u0E28\u0E35\u0E25\u0E18\u0E23\u0E23\u0E21\u0E2D\u0E31\u0E19\u0E14\u0E35\u0E02\u0E2D\u0E07\u0E2A\u0E31\u0E07\u0E04\u0E21",
  "weebboard usage rule 10": "10. \u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E42\u0E1E\u0E2A\u0E15\u0E4C \u0E40\u0E1B\u0E47\u0E19\u0E04\u0E27\u0E32\u0E21\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19",
  "weebboard usage rule 11": "11. \u0E02\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E23\u0E48\u0E27\u0E21\u0E21\u0E37\u0E2D\u0E17\u0E38\u0E01\u0E04\u0E19\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E43\u0E2B\u0E49\u0E16\u0E39\u0E01\u0E2B\u0E49\u0E2D\u0E07 \u0E43\u0E2A\u0E48 Tag \u0E43\u0E2B\u0E49\u0E16\u0E39\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E2D\u0E07\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32",
  "weebboard usage rule 12": "12. \u0E2B\u0E32\u0E01\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E2B\u0E49\u0E2D\u0E07\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49 \u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E41\u0E1E\u0E25\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E21\u0E35\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E17\u0E35\u0E48\u0E08\u0E30\u0E25\u0E1A\u0E2B\u0E23\u0E37\u0E2D\u0E22\u0E49\u0E32\u0E22\u0E01\u0E23\u0E30\u0E17\u0E39\u0E49\u0E44\u0E14\u0E49 \u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E1A\u0E2D\u0E01\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32",
  "weebboard usage rule 13": "13. \u0E2B\u0E32\u0E01\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E1E\u0E34\u0E1E\u0E32\u0E17\u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19 \u0E01\u0E32\u0E23\u0E15\u0E31\u0E14\u0E2A\u0E34\u0E19\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E41\u0E1E\u0E25\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E16\u0E37\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14",
  "who you look alike in Valorant, let's create and share": "\u0E17\u0E32\u0E22\u0E19\u0E34\u0E2A\u0E31\u0E22 ...\u0E04\u0E38\u0E13\u0E40\u0E1B\u0E47\u0E19\u0E43\u0E04\u0E23\u0E40\u0E27\u0E25\u0E32\u0E40\u0E25\u0E48\u0E19 Valorant \u0E21\u0E32\u0E40\u0E25\u0E48\u0E19 Quiz \u0E41\u0E25\u0E49\u0E27\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E17\u0E48\u0E46 \u0E44\u0E1B\u0E2D\u0E27\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E01\u0E31\u0E19",
  "you agree to allow whallet to send KYC data to DOPA": "\u0E09\u0E31\u0E19\u0E22\u0E34\u0E19\u0E22\u0E2D\u0E21\u0E43\u0E2B\u0E49 whallet \u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1A\u0E19\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19\u0E02\u0E2D\u0E07\u0E17\u0E48\u0E32\u0E19\u0E44\u0E1B\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E04\u0E27\u0E32\u0E21 \u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E1A\u0E10\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19\u0E02\u0E2D\u0E07\u0E23\u0E31\u0E10\u0E2F",
  "you are already in a team": "\u0E04\u0E38\u0E13\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E17\u0E35\u0E21\u0E2D\u0E37\u0E48\u0E19\u0E41\u0E25\u0E49\u0E27",
  "you are not in a team": "\u0E04\u0E38\u0E13\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E17\u0E35\u0E21",
  "you are team contact person": "\u0E09\u0E31\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E1C\u0E39\u0E49\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E02\u0E2D\u0E07\u0E17\u0E35\u0E21",
  "you can only add up to 3 personal details": "\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E01\u0E25\u0E48\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E14\u0E49\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 3 \u0E01\u0E25\u0E48\u0E2D\u0E07",
  "you require": "\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2D\u0E35\u0E01",
  "You are already in a team": "\u0E04\u0E38\u0E13\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E17\u0E35\u0E21\u0E2D\u0E37\u0E48\u0E19\u0E41\u0E25\u0E49\u0E27",
  "more member": "\u0E04\u0E19",
  "your party is full, start your game by adding friends": "\u0E1B\u0E32\u0E23\u0E4C\u0E15\u0E35\u0E49\u0E40\u0E15\u0E47\u0E21\u0E41\u0E25\u0E49\u0E27! \u0E41\u0E2D\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E43\u0E19\u0E40\u0E01\u0E21\u0E41\u0E25\u0E49\u0E27\u0E40\u0E23\u0E34\u0E48\u0E21\u0E40\u0E25\u0E48\u0E19\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22",
  "your team has been approved": "\u0E17\u0E35\u0E21\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E1C\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34\u0E41\u0E25\u0E49\u0E27",
  "your team has been rejected": "\u0E04\u0E33\u0E02\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E16\u0E39\u0E01\u0E1B\u0E0F\u0E34\u0E40\u0E2A\u0E18",
  "your team is waiting for approval": "\u0E17\u0E35\u0E21\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E01\u0E33\u0E25\u0E31\u0E07\u0E23\u0E2D\u0E01\u0E32\u0E23\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34",
  "play quiz": "\u0E40\u0E25\u0E48\u0E19\u0E04\u0E27\u0E34\u0E0B"
};

// public/locales/en/common.json
var common_default2 = {
  news: "News",
  help: "Help",
  general: "General",
  review: "Review",
  "buy sell": "Buy-Sell",
  tutorial: "Tutorial",
  "1. Membership posting in the buy-sell section is reserved exclusively for users who have completed the KYC process.": "1. Membership posting in the buy-sell section is reserved exclusively for users who have completed the KYC process.",
  "2. Posting any form of direct sales business, chain sharing, online work, or anything causing harm or disturbance to others is strictly prohibited.": "2. Posting any form of direct sales business, chain sharing, online work, or anything causing harm or disturbance to others is strictly prohibited.",
  "3. Before making any transactions, please check the seller\u2019s history at": "3. Before making any transactions, please check the seller's history at",
  "4. In case of fraud, report the incident online at": "4. In case of fraud, report the incident online at",
  "5. Contact platform administrators via the Facebook Page ctrl g": "5. Contact platform administrators via the Facebook Page: CTRL G",
  "1. Navigate to the Party Matching menu.": "1. Navigate to the Party Matching menu.",
  "2. Click the \u201CCreate Party\u201D button.": "2. Click the \u201CCreate Party\u201D button.",
  "3. Set the party name, enter your in-game character name, choose the play mode, select the desired number of players for the party, pick the rank range for participants, and input the communication channel link for party members.": "3. Set the party name, enter your in-game character name, choose the play mode, select the desired number of players for the party, pick the rank range for participants, and input the communication channel link for party members.",
  "4. Optionally, you can set the party to private if the party creator wants to filter incoming players.": "4. Optionally, you can set the party to private if the party creator wants to filter incoming players.",
  "1. Click the \u201CJoin\u201D button on the desired party.": "1. Click the \u201CJoin\u201D button on the desired party.",
  "2. Enter your in-game character name.": "2. Enter your in-game character name.",
  "1. When all members join the party, the party status changes to offline.": "1. When all members join the party, the party status changes to offline.",
  "2. Members can coordinate and schedule gameplay using the contact information provided in the party details.": "2. Members can coordinate and schedule gameplay using the contact information provided in the party details.",
  "3. Players can then gather and start playing games together using the formed party.": "3. Players can then gather and start playing games together using the formed party.",
  "1. rule rare card": "1. \u0E2A\u0E21\u0E31\u0E04\u0E23 \u0E2B\u0E23\u0E37\u0E2D Log - in CTRL G \u0E01\u0E48\u0E2D\u0E19\u0E17\u0E33 Quiz",
  "2. rule rare card": '2. \u0E04\u0E25\u0E34\u0E01 "\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E01\u0E23\u0E2D\u0E1A\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C',
  "3. rule rare card": '3. \u0E04\u0E25\u0E34\u0E01 "\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E01\u0E23\u0E2D\u0E1A\u0E44\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A',
  "4. rule rare card": "4. \u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48\u0E23\u0E39\u0E1B\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E14\u0E49\u0E32\u0E19\u0E0B\u0E49\u0E32\u0E22\u0E21\u0E37\u0E2D \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E41\u0E25\u0E30\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E43\u0E0A\u0E49\u0E01\u0E23\u0E2D\u0E1A\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E17\u0E35\u0E48\u0E2A\u0E30\u0E2A\u0E21\u0E40\u0E2D\u0E32\u0E44\u0E27\u0E49",
  about: "About Us",
  "about us paragraph 1": "CTRL G : Completing everything in Esports. ",
  "about us paragraph 2": "CTRL G is a collaborative effort between gamers and industry veterans, including Ink (Pannys), a former Thai national Overwatch player, and Talent Manager / Aey (Viperdemon), a former CS:GO player and streamer / and Trip (Ptrip), an analyst and commentator for Valorant.",
  "about us paragraph 3": "They have joined forces with the aim of elevating the quality and scale of the Esports scene in Thailand. Their mission involves creating a community that brings together gamers and Esports enthusiasts, where they can share information, news, and deep insights into the Esports industry.",
  "about us paragraph 4": "In addition, they are organizing Esport events, starting with Campus and School Tours to educate and engage students interested in Esports.",
  "about us paragraph 5": "Talent Management is a critical aspect of their mission, with CTRL G's team prepared to develop and manage individuals with gaming potential or talents. Their goal is to enable these individuals to harness their abilities to the fullest and with maximum efficiency. They are also dedicated to overseeing Esport Tournaments to enhance competition at the school and university levels, fostering increased intensity and professionalism. Their ultimate objective is to produce high-caliber players and professionals who can excel in the Esports industry.",
  accept: "Accept",
  "achievement image": "Achievement Image",
  "achievement name": "Achievement Name",
  "achievement title": "Achievement Group Name",
  "achievement url": "Add URL to Achievement (optional)",
  active: "Active",
  add: "Add",
  "add achievement": "Add Achievement",
  "add experince": "Add Experience",
  "add experience": "Add Experience",
  "add experience title": "Add Other Experiences",
  "add game": "Add Game",
  "Add Item": "Add Details",
  "add more": "Add More",
  "add more prize": "Add Rankings",
  "additional fields": "Team Member Personal Info",
  "additional player": "Number of Substitutions",
  "address paragraph 1": "Space Phahon 19, 1687/1 Phahonyothin Road,",
  "address paragraph 2": "Chatuchak Sub-district, BKK 10900",
  admin: "Admin",
  "album name": "Album Name",
  "album url copied": "Successfully copied Album URL",
  albums: "Photo Album",
  "all games": "All Games",
  "All members of your party are here and ready to play!": "Your Party is ready! start gaming by adding friend's username",
  "all notifications": "All Notifications",
  "all parties": "All Parties",
  "all tournaments": "All",
  "allow cookies messages": "CTRL G use cookies to improve our service and enhance user browsing experience, please read and understand",
  "and contact platform administrators for information about the fraudulent party.": "and contact platform administrators for information about the fraudulent party.",
  "and more options...": "View more options",
  anonymous: "Anonymous",
  approve: "Approve",
  approved: "Approved",
  "are you sure to delete team": "Are you sure to delete team",
  "are you sure to delete team member": "Are you sure to remove team member",
  "are you sure to delete this post": "Are you sure to delete post",
  "are you sure to delete this tournamnet": "Are you sure to delete this tournament",
  "are you sure to delete party member": "Are you sure to remove party member",
  "are you sure to delete party request": "Are you sure to cancel party request",
  "are you sure to leave the party": "Are you sure to leave the party",
  "are you sure to leave team": "Are you sure to leave team",
  "are you sure to proceed": "Are you sure to proceed",
  "are you sure to reject team": "Are you sure to reject team",
  "are you sure to remove team": "Are you sure to remove team",
  "are you sure to submit team": "Are you sure to submit team",
  "are you sure you want to delete this achievement?": "Are you sure to delete this Achievement?",
  "are you sure you want to delete this album?": "Are you sure to delete this Album?",
  "are you sure you want to delete this expereince?": "Are you sure to delete this Experience?",
  "are you sure you want to delete this expereince title?": "Are you sure to delete this Experience Title?",
  "are you sure you want to delete this photo?": "Are you sure to delete this Image?",
  "are you sure you want to delete this rank?": "Are you sure to delete this Rank?",
  "are you to vote": "Confirm vote",
  ascendant: "Ascendant",
  "at least 2 options": "Please fill at least 2 options",
  "attachment image": "Attachment image",
  attend: "Join",
  attended: "Joined",
  "auto refresh countdown": "Refresh countdown",
  "Autosize height with minimum and maximum number of lines": "Input Description",
  available: "available",
  "available slots": "Available Slots",
  back: "Back",
  "back to albums": "Back to Albums",
  "back to edit team": "Back to Edit Team",
  "back to tournament": "Back to Tournament",
  "banner image": "Banner Image",
  "below 5,000": "Below 5,000",
  bio: "Bio",
  "boost again in": "Can Boost in",
  "boost party": "Swipe to Boost Party",
  bronze: "Bronze",
  "buy sell conditions": "Webboard Terms of Use",
  "Buy Sell rules": "Webboards and 'Buy-Sell' room terms",
  "buy sell rules descriptoins": "(Description)",
  by: "By",
  "by clicking your profile picture": "\u0E42\u0E14\u0E22\u0E01\u0E32\u0E23\u0E01\u0E14\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E23\u0E39\u0E1B\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
  campaign: "Play Quiz",
  "can create post and comment in anonymouse mode": "Create posts and comments in 'Anonymous' mode",
  "can create post and comment in buy sell room": "Create 'Buy-Sell' posts in Webboards",
  "can enter buy sell page": "Visit 'Buy-Sell' posts in Webboards",
  cancel: "Cancel",
  change: "Edit",
  "change cover": "Change Cover",
  "change game": "Change Game",
  "citizen id": "Citizen ID",
  close: "Close",
  comment: "Write a Comment",
  comments: "comments",
  company: "Company",
  confirm: "Confirm",
  "confirm game username": "Confirm your Username",
  "confirm password": "Confirm Password",
  "connect account": "Connect Account",
  "connect whallet": "Connect Account",
  "connect with CTRL G account to get reward and display result": "\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E01\u0E23\u0E2D\u0E1A\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C \u0E1C\u0E48\u0E32\u0E19\u0E1A\u0E31\u0E0D\u0E0A\u0E35 CTRL G!",
  contact: "Contact Us",
  "contact paragraph 1": "You can follow us on social media to stay updated with news and provide feedback. You can do so by leaving comments or sending us direct messages.",
  "contact person": "Contact Person",
  "contact person email": "Contact Person Email",
  "contact person name": "Contact Person Name",
  "contact person phone": "Contact Person Phone No.",
  content: "Description (Max 10 uploaded images)",
  continue: "Continue",
  cookies: "Cookies Policy",
  "cookies policy": "Cookies Policy",
  "cookies usage": "Cookies Usage",
  "Copy URL": "Copy URL",
  "create achievement": "Add",
  "create album": "Create New Album",
  "create experience": "Add",
  "create new": "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E40\u0E25\u0E48\u0E19\u0E43\u0E2B\u0E21\u0E48",
  "create party": "Create Party",
  "create poll": "Create Poll",
  "create post": "Submit Post",
  "create post with own profile": "Post or Comment in Webboards with own profile",
  "create team": "Create Team",
  "create tournament": "Create Tournament",
  "create tournament post": "Create Tournament Q&A Post on Webboard?",
  "customize profile by your own style, and share to your friends": "\u0E15\u0E01\u0E41\u0E15\u0E48\u0E07\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E15\u0E32\u0E21\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 \u0E41\u0E25\u0E49\u0E27\u0E41\u0E0A\u0E23\u0E4C\u0E44\u0E1B\u0E2D\u0E27\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E46\u0E0A\u0E32\u0E27\u0E27\u0E32\u0E42\u0E25",
  darkmode: "Dark Mode",
  dashboard: "Dashboard",
  "date of birth": "Date of Birth",
  "date picker": "Date Calendar",
  "days ago": "days ago",
  delete: "Delete",
  "delete detail box": "Delete Detail",
  "delete experience title": "Delete Experience Title",
  "delete request": "Delete Join Request",
  "delete team": "Delete Team",
  "delete tournament": "Delete Tournament",
  "deleted at": "Deleted at",
  "Deleted comment": "--comment deleted--",
  description: "Description",
  descriptionEn: "Description (English)",
  detail: "Party Info",
  "detail personal details": "Personal Detail",
  detail_1: "Information",
  detail_2: "Description",
  diamond: "Diamond",
  "discord id": "Discord ID",
  "discord ID": "Discord ID",
  "discord ID copied": "Discord ID copied",
  "discord url": "Discord URL",
  "display name": "Username",
  "display name is too long (maximum 20 characters)": "Username is too long (Maximum 20 characters)",
  "display order": "Display Order",
  "display result immediately": "\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25\u0E17\u0E31\u0E19\u0E17\u0E35",
  Download: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",
  "Download Avatar": "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C",
  durability: "TRICK",
  edit: "Edit",
  "edit achievement": "Edit Achievement",
  "edit achievement title": "Edit Achievement Group Name",
  "edit album": "Edit Album",
  "edit experience": "Edit Experience",
  "edit experience title": "Edit Experience Title",
  "edit game": "Edit Game",
  "edit post": "Edit Post",
  "edit profile": "Edit Profile",
  "edited at": "Edited at",
  email: "Email",
  "email or phone": "Email or Phone No.",
  "end date": "Tournament End Date",
  "end date must be after the start date": "End Date must be before Start Date",
  "end date must be before start date": "End Date must be before Start Date",
  experience: "Experience",
  "experience end date": "Until",
  "experience start date": "From",
  "experience title": "Game Name",
  experiences: "Experience",
  "export all": "Export all teams",
  "failed to create party": "You already have a party",
  FAQs: "FAQs",
  "featured tournament": "Featured Tournaments",
  feedback: "Feedback",
  "file upload failed due to too large image size": "Cannot upload file larger than 2 MB",
  "fill in party detail": "Fill in party detail e.g., 'Looking for G P D 25%'",
  filter: "Filters",
  Filters: "Filters",
  "final round location": "Tournament Location (For online tournaments, please fill in \u201Conline\u201D)",
  "final round location (English)": "Tournament Location (English)",
  "finished quiz already, let's see who you look alike": "\u0E15\u0E2D\u0E1A\u0E04\u0E33\u0E16\u0E32\u0E21\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27 \u0E21\u0E32\u0E14\u0E39\u0E01\u0E31\u0E19\u0E40\u0E25\u0E22\u0E27\u0E48\u0E32\u0E04\u0E38\u0E13\u0E40\u0E1B\u0E47\u0E19\u0E43\u0E04\u0E23!",
  "finished tournaments": "Finished",
  "first 2 characters must be alphabet": "The first 2 characters must be alphabets",
  "first name": "First Name",
  "forgot password?": "Forgot Password?",
  forum_admin: "Webboard Admin",
  game: "Select Game",
  "game icon": "Game Icon",
  "game username": "In-game Username",
  "game usernames": "In-game Username",
  games: "Game",
  "general user": "Normal User",
  "get the gift": "\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25",
  "get verrified badge": "Receive 'Verified' badge on profile",
  "go to profile": "\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
  "go to profile and click profile picture to change frame": "\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E43\u0E0A\u0E49\u0E01\u0E23\u0E2D\u0E1A\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E44\u0E14\u0E49 \u0E42\u0E14\u0E22\u0E01\u0E32\u0E23\u0E01\u0E14\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E23\u0E39\u0E1B\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
  gold: "Gold",
  "have a chance to get rare card": "\u0E27\u0E34\u0E18\u0E35\u0E23\u0E31\u0E1A\u0E01\u0E23\u0E2D\u0E1A\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E48\u0E19\u0E14\u0E49\u0E27\u0E22\u0E1A\u0E31\u0E0D\u0E0A\u0E35 CTRL G",
  history: "History",
  home: "Home",
  "hours ago": "hours ago",
  "how it works": "How it works",
  "How to Create a Party": "How to Create a Party",
  "how to create party": "How to create party",
  "How to Join a Party": "How to Join a Party",
  "how to join party": "How to join party",
  "how to start playing": "Once the party is complete, here's how to start playing",
  "how to start the game": "How to start the game",
  "id card has already registered on ctrlg": "ID card has already registered on CTRL G",
  images: "Images",
  immortal: "Immortal",
  "in game username": "Username",
  inactive: "Inactive",
  "input description": "Input Description",
  "input in game username": "Input in game username...",
  "input tags": "Add Hashtags",
  intelligence: "RECOVERY",
  "invalid laser idcard length": "Incorrect Laser Code length",
  "Invalid Password": "Incorrect Password",
  "invalid password": "Incorrect Password",
  "invalid thai pattern": "Please fill the form in Thai",
  iron: "Iron",
  "is discordId required": "Require Discord ID",
  "is email required": "Require Email",
  "is ign required": "Require In-game Username",
  "is kyc required": "Require ID Verification",
  "is phone Number required": "Require Phone No.",
  "is slip required": "Require Registration Fee",
  items: "Tournaments",
  join: "Join",
  "join team link copied": "Team invitation link copied",
  "joined tournaments": "Joined tournaments",
  "KYC benefits": "KYC benefits",
  "KYC info": "Verify My Account",
  'KYC to access "anonymouse" and "buy sell" rooms': "Verify your account to use 'Anonymous'",
  'KYC to access "buy sell" and "tournament" rooms': "Verify your account to create 'Buy-Sell' posts",
  language: "Language",
  "laser code": "Laser Code",
  "last 10 characters must be numbers": "The last 10 characters must be numbers",
  "last name": "Last Name",
  "last update": "Latest",
  "lastest post": "New Post",
  "leave party": "Leave Party",
  "leave team": "Leave Team",
  like: "Like",
  liked: "Liked",
  "load less": "Collapse",
  "load more": "Load More",
  "Load More": "Load More",
  lock: "Lock",
  login: "Login",
  "login with Google": "Connect with Google",
  "login with LINE": "Connect with LINE",
  logout: "Logout",
  manage: "Manage",
  "maximum 10 fields": "Cannot add more than 10 fields",
  "maximum 10 options": "Cannot add more than 10 choices",
  "maximum 10 prizes": "Cannot add more than 10 prizes",
  "maximum team": "Maximum Teams",
  "Member limit reached": "Number of Team Member has reached criteria",
  "Member limit not reached, Please wait for other members to join the team": "Number of Team Member has not reached criteria",
  merchant: "Merchant",
  message: "Messages",
  "minutes ago": "minutes ago",
  mode: "Choose Mode",
  "most comments": "Hot Topic (24hr)",
  "most reactions": "Most Reactions (24hr)",
  "must contain at least 5 characters": "Must contain at least 5 characters",
  "must contain 5-30 characters": "Must contain at least 5 characters",
  "my achievement": "Achievements",
  "my album": "Album",
  "my albums": "Photo Album",
  "my conversations": "My Posts",
  "my comments": "My Comments",
  "my experiences": "Experiences",
  "my games": "My Games",
  "my notifications": "Notifications",
  "my parties": "My Party",
  "my personal details": "Personal Details",
  "my team": "My Team",
  "my tournaments": "My Tournaments",
  "my webboards": "My Posts",
  name: "Example: Name",
  "name (English)": "Example: Name (English)",
  "new party": "Create Party",
  "new post": "Create Post",
  next: "Next",
  "Note: KYC refers to the Know Your Customer process, a standard in the financial industry to verify the identity of customers.": "Note: KYC refers to the Know Your Customer process, a standard in the financial industry to verify the identity of customers.",
  "notification:has replied to your comment": "has replied to your comment.",
  "notification:has commented on your post": "has commented on your post.",
  "notification:has sent a request to join your party": "has sent a request to join your party.",
  "notification:Your Party is ready! start gaming by adding friend's username": "Your Party is ready! start gaming by adding friend's username.",
  "notification:Your request to join": "Your request to join",
  "notification:party has been accepted": "party has been accepted.",
  "notification:party has been rejected": "party has been rejected.",
  "notification:Your team": "Your team",
  "notification:has been approved to join": "has been approved to join",
  "notification:that has been approved to join": "has been removed from tournament",
  "notification:tournament": "tournament.",
  "notification:tournament has been removed because": "because",
  "notification:request to join": "request to join",
  "notification:tournament has been rejected because": "tournament has been rejected because",
  "notification:Your tournament": "Your tournament",
  "notification:has been approved": "has been approved.",
  "notification:has been rejected because": "has been rejected because",
  "no chat": "No messages",
  "no data": "No information",
  "No data": "No messages",
  "no game username": "No In-game Username",
  "no notifications": "No Notifications",
  "no participant": "No Participants",
  "no party matched": "No matching party",
  "no party request": "No request",
  "no party requests": "No request",
  "no password found": "Your account does not have a password",
  "no past tournament": "You have not joined a tournament",
  "no user": "No user found",
  "no webboard": "No conversations",
  "ongoing tournaments": "Ongoing",
  "only accept number": "Please fill only numbers",
  "only english characters and numbers are allowed": "Can only input alphanumeric characters (A-Z, a-z, 0-9)",
  "only english characters and numbers are allowed, and no spaces": "Please input alphanumeric characters only, and also exclude spaces",
  "opening registration": "Registeration open",
  "opening tournaments": "Open",
  option: "Add a choice",
  or: "Or",
  organizer: "Organizer",
  "over 30,000": "Over 30,000",
  participants: "Participants",
  parties: "Party Matching",
  "party active": "Set active Party",
  "party boosted": "Party Boosted!",
  "party link copied": "Party Link copied",
  "party matching": "Party Matching",
  "party name": "Party Name",
  "party owner must approve before joining": "Members will be able to join once Party Owner accepted their request",
  "party request": "Join Request sent",
  "party requests": "Join Requests",
  password: "Password",
  "password doesn't match": "Password doesn't match",
  "past tournaments": "Past Tournaments",
  pending: "Pending Approval",
  "pending teams": "Teams Pending Approval",
  "people who liked you": "People who liked",
  personalDetails: "Personal Details",
  "personal details": "Information",
  phone: "Phone No.",
  "phone number": "Phone No.",
  platinum: "Platinum",
  "player info": "Player Info",
  "please agree to this field": "Required",
  "please do not input '-'": "Please do not input '-'",
  "please enter otp": "Fill in OTP",
  "please enter username": "Username is already existed",
  "please input achievement image": "Please upload Achievement Image",
  "please input achievement name": "Please input Achievement Name",
  "please input achievement title": "Please input Achievement Title",
  "please input album name": "Please input Album Name",
  "please input citizen id": "Please input Citizen ID",
  "please input contactName": "Please input Contact Person Name",
  "please input content": "Please input content description",
  "please input correct citizen id": "Incorrect Citizen ID",
  "please input correct email": "Please input correct Email",
  "please input correct email or phone": "Please input correct Email or Phone No.",
  "please input data": "Please input data",
  "please input description": "Please input tournament description",
  "please input detail": "Please input Details",
  "please input discord id": "Please input Discord ID",
  "please input email": "Please input Email",
  "please input experience name": "Please input Team Name or Tournament Name",
  "please input experience title": "Please input Game Name",
  "please input feedback message": "Please input Feedback message",
  "please input firstname": "Please input First Name",
  "please input game icon": "Please input Game Icon",
  "please input game rank": "Please select Rank",
  "please input game username": "Please input In-game Username",
  "please input laser code": "Please input Laser Code",
  "please input lastname": "Please input Last Name",
  "please input max team": "Please select Maximum Teams",
  "please input name": "Please input field name",
  "please input name in English": "Please input field name in English",
  "please input number of additional player": "Please input number of Additional Members (Substitutions)",
  "please input number of required player": "Please input number of Team Members required",
  "please input password": "Please input Password",
  "please input party name": "Please input Party Name",
  "please input phone": "Please input Phone Number",
  "please input phone number": "Please input Phone Number",
  "please input qualification rules": "Please input Qualifications & Rules",
  "please input reason to report": "Please select report reason",
  "please input room": "Please select room",
  "please input team logo": "Please input Team Logo",
  "please input team name": "Please input Team Name",
  "please input title": "Please input Post Title",
  "please input title personal detail": "Please input Title Name",
  "please input tournament name": "Please input Tournament Name",
  "please select date of birth": "Please select Date of Birth",
  "please select end date": "Please select Tournament End Date",
  "please select experience end date": "Please select Experience End date",
  "please select experience start date": "Please select Experience Start date",
  "please select game": "Please select Game",
  "please select registration end date": "Please select Registeration End Date",
  "please select registration start date": "Please select Registeration Start Date",
  "please select start date": "Please select Tournament Start Date",
  "please select tournament type": "Please select Tournament Type",
  "please upload banner image": "Please upload Banner Image",
  "please upload cover image": "Please upload Album Cover",
  "please upload post thumbnail": "Upload Post Thumbnail",
  "please upload slip image": "Please Upload Registeration Fee Payment Slip",
  "please upload thumnail image": "Please upload Thumbnail Image",
  "poll options": "Poll Choices",
  "popular tags": "Trending Now",
  "post url copied": "Post URL copied",
  posts: "posts",
  present: "Present",
  privacy: "Privacy Policy",
  private: "Private",
  "private album": "Private Album",
  "private party": "Private Party",
  prize: "Fill in prize...",
  "prize additional fields": "Tournament Prize per rankings",
  prizeNumber: "Ranking",
  profile: "Profile",
  "profile url copied": "Profile URL copied",
  public: "Public",
  "qualification rules": "Qualifications & Rules",
  "qualification rules (English)": "Qualifications & Rules (English)",
  radiant: "Radiant",
  rank: "Rank",
  "rank in game": "My Rank",
  "Ranking game already exists": "Game already existed",
  ranks: "Choose Ranks",
  "rare rules": "\u0E01\u0E15\u0E34\u0E01\u0E32",
  refresh: "Refresh",
  "refresh in": "Refresh in",
  register: "Register",
  "registration end date": "Registeration End Date",
  "registration start date": "Registeration Start Date",
  reject: "Reject",
  "reject comment": "Team Rejection Remark",
  "reject team": "Reject Team",
  "related tournaments": "Recommended Tournaments",
  reply: "Reply",
  "reply to": "Replying to...",
  report: "Report",
  request: "Send Request",
  "request message": "Add request message",
  "request sent": "Join Request sent",
  "request to join party": "Send Join Request",
  reserved: "Reserved",
  "reset password email has been sent, please return to ctrlg after reset success": "Password Reset email has been sent, please return to CTRL G after reset success",
  "remark should not be empty": "Please fill in rejection remark",
  "remove comment": "Team Removal Remark",
  "remove team": "Remove Team",
  "remove team remark should not be empty": "Please fill in removal remark",
  "removed team members have to create a new team": "(Removed team will be erased. Members can create a new team if under tournament registration period)",
  required: "Required",
  "required players": "Number of Required Members",
  "required slots": "Looking for...",
  "reward #": "Reward #",
  "reward center": "REWARD CENTER",
  "Reward center": "REWARD CENTER",
  "REWARD CENTER": "REWARD CENTER",
  "recommended ratio": "Recommended ratio",
  "recommended resolution": "Recommended resolution",
  "recommended resolution 1920x1080": "Recommended resolution 1920x1080",
  rooms: "Room",
  rules: "Rules",
  save: "Save",
  "schedule hasn't yet been released": "Schedule has not been announced",
  "secret chamber": "SECRET CHAMBER",
  "Secret chamber": "SECRET CHAMBER",
  "SECRET CHAMBER": "SECRET CHAMBER",
  second: "seconds",
  "seconds ago": "seconds ago",
  "select all": "Select All",
  "select cover image": "Select Cover Image",
  "select avatar image": "Select Avatar Image",
  "select display image": "Select Team Logo",
  "select file": "Select File",
  "select frame": "Select frame",
  "select game": "Select Game",
  "select mode": "Select Mode",
  "select rank": "Select Rank",
  "select ranks": "Select Rank",
  "select room": "Select Room",
  "select the preferred ranks": "Select the preferred team member ranks (Maximum 3 Ranks)",
  "select your profile frame": "\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E43\u0E0A\u0E49\u0E01\u0E23\u0E2D\u0E1A\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E44\u0E14\u0E49",
  send: "Send",
  "send a message failed": "You have been removed from Party",
  "send request": "Send Join Request",
  setting: "Settings",
  settings: "Settings",
  share: "\u0E41\u0E0A\u0E23\u0E4C",
  "Share Avatar": "\u0E41\u0E0A\u0E23\u0E4C\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C",
  signature: "Signature",
  silver: "Silver",
  "single elimination": "Single Elimination",
  "social accounts": "Social Accounts",
  "sort order": "Sort Order",
  "sorting order": "Sort Order",
  "spaces are not allowed": "Spaces are not allowed",
  speed: "SPEED",
  "start buy sell & anonymous after complete verification": "Start buy & sell after verification completed",
  "start date": "Tournament Start Date",
  "start date must be before end date": "Start Date must be before End Date",
  "start date must be before end date and at least 2 days later than today": "Start Date must be before End Date",
  "start quiz": "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E40\u0E25\u0E48\u0E19\u0E40\u0E25\u0E22",
  "start verification": "Start Verification",
  streamer: "Streamer / Player",
  strength: "POWER",
  submit: "Submit",
  "submit feedback": "Submit Feedback",
  "submit team": "Submit team",
  "successfully add user in game": "Successfully added My Ranks",
  "successfully approved request": "Successfully approved request",
  "successfully boosted party": "Successfully boosted party",
  "successfully bulk-approve": "Successfully approve all",
  "successfully claim reward": "Successfully claimed gift",
  "Successfully commented": "Successfully commented",
  "successfully create tournament": "Successfully created tournament",
  "successfully create webboard": "Successfully created post",
  "successfully create-team": "Successfully created team",
  "successfully created achievement": "Successfully added Achievement",
  "successfully created album": "Successfully created Album",
  "Successfully created experience": "Successfully created Experience",
  "successfully created experience title": "Successfully added Experience Title",
  "successfully created party": "Successfully created party",
  "successfully created party member": "Successfully lock slot",
  "successfully created request": "Successfully sent join request",
  "successfully delete member": "Successfully remove Party Member",
  "successfully delete request": "Successfully cancel request",
  "Successfully deleted achievement}": "Successfully deleted Achievement",
  "Successfully deleted album": "Successfully deleted Album",
  "Successfully deleted experience": "Successfully deleted Experience",
  "Successfully deleted experience title": "Successfully deleted Experience Title",
  "Successfully deleted comment": "Successfully deleted comment",
  "successfully deleted frame": "Successfully removed profile frame",
  "successfully deleted member": "Successfully remove Party Member",
  "Successfully deleted photo": "Successfully deleted image",
  "successfully deleted request": "Successfully cancel request",
  "Successfully deleted tournament}": "Successfully deleted tournament",
  "Successfully deleted user in game": "Successfully deleted My Rank",
  "Successfully deleted webboard": "Successfully delete post",
  "successfully delete-team": "Successfully delete team",
  "successfully delete-team-member": "Successfully remove Team Member",
  "successfully edit profile": "Successfully edit profile",
  "successfully joined party": "Successfully joined party",
  "successfully join-team": "Successfully join team",
  "successfully leave-team": "Successfully leave team",
  "successfully left party": "Successfully left party",
  "successfully login": "Successfully Login",
  "successfully Login": "Login Success",
  "successfully Register Account": "Registration Success",
  "successfully reject": "Successfully rejected team",
  "successfully rejected request": "Successfully rejected request",
  "successfully remove": "Successfully removed team",
  "Successfully reported webboard": "Successfully reported",
  "successfully saved to profile index": "Save Success",
  "successfully sent feedback": "Successfully sent Feedback",
  "successfully sorted album": "Successfully sorted Albums",
  "successfully sorted my achievement": "Successfully sorted Achievements",
  "successfully sorted my achievement title": "Successfully sorted Achievement Titles",
  "successfully sorted my experience title": "Successfully sorted Experience Titles",
  "successfully sorted my games": "Successfully sorted My games",
  "successfully sorted personal details": "Successfully sorted Personal Details",
  "successfully sorted profile": "Successfully sorted My Profile",
  "successfully submit-team": "Successfully submit team",
  "Successfully update comment": "Successfully update comment",
  "Successfully update party": "Successfully update party",
  "successfully update party member": "Successfully update party member",
  "successfully update profile": "Successfully update profile",
  "successfully update signature": "Successfully update signature",
  "successfully update tournament": "Successfully update tournament",
  "successfully update webboard": "Successfully update post",
  "successfully updated achievement": "Successfully updated Achievement",
  "successfully updated achievement title": "Successfully updated Achievement Title",
  "successfully updated album": "Successfully updated Album",
  "Successfully updated experience": "Successfully updated Experience",
  "successfully updated personal details": "Successfully updated Personal Details",
  "successfully updated user in game": "Successfully updated My Rank",
  "successfully update-team": "Successfully update team",
  "successfully update-team-member": "Successfully update Team Member",
  "successfully upload photos": "Successfully upload images",
  "Successfully uploaded cover image": "Successfully changed cover image",
  "Successfully uploaded display image": "Successfully changed display image",
  "Successfully uploaded frame image": "Successfully changed profile frame",
  "Successfully voted": "Successfully voted",
  system: "System",
  tags: "Add Hashtags",
  teams: "Teams",
  "team logo": "Team Logo",
  "team info": "Team Info",
  "team members": "Team Members",
  "team name": "Team Name",
  "team name or tournament name": "Team Name / Tournament Name",
  terms: "Terms & Conditions",
  "text input": "Normal Text",
  thb: "THB",
  "this action cannot be undone": "(This action cannot be undone)",
  "This id card has already been registered on CtrlG": "This id card has already been registered on CTRL G",
  "This is your avatar": "\u0E04\u0E25\u0E34\u0E01\u0E1B\u0E38\u0E48\u0E21\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E2B\u0E23\u0E37\u0E2D\u0E41\u0E0A\u0E23\u0E4C\u0E20\u0E32\u0E1E\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
  "This is your gift": "\u0E22\u0E34\u0E19\u0E14\u0E35\u0E14\u0E49\u0E27\u0E22! \u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E23\u0E2D\u0E1A\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E1E\u0E34\u0E40\u0E28\u0E29",
  "this is your profile": "\u0E19\u0E35\u0E48\u0E04\u0E37\u0E2D\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
  "thumbnail image": "Thumbnail Image",
  title: "Post Title (Max 200 characters)",
  "title must contain only 30 charaters": "Title is too long (Maximum 30 characters)",
  "title personal details": "Title Name",
  today: "Today",
  "total prize": "Tournament Total Prize (Display on Thumbnail)",
  tournament: "Tournament",
  "tournament board": "Q&A",
  "tournament date": "Tournament Period",
  "tournament finished": "Finished",
  "tournament invitation to": "You have received an invitation to join",
  "tournament location": "Tournament Location",
  "tournament name": "Tournament Name",
  "tournament name (English)": "Tournament Name (English)",
  "tournament ongoing": "Ongoing",
  "tournament participants": "Participants",
  "tournament Q&A post title can be edited on webboard": "(Tournament Q&A Post Title can be edited on webboard)",
  "tournament schedule": "Tournament Schedule",
  "tournament type": "Select Tournament Type",
  tournaments: "Tournament",
  "The request exceed the limit.": "Request exceed limit, Please try again in 15 minutes",
  "type message here": "Type messages",
  "Unnamed Player": "Unnamed Player",
  "upcoming tournaments": "Upcoming",
  update: "Update",
  upload: "Upload",
  "Upload bracket": "Upload Tournament bracket image",
  "upload cover image": "Upload Album Cover",
  "upload image": "Upload Image",
  "upload images in album": "Add Images",
  "upload slip image": "Upload Registeration Fee Payment Slip",
  Uploading: "Uploading",
  "user is banned": "Your account has been banned",
  "User is permanently banned": "Your account has been banned",
  "user url": "User Profile URL",
  "username copied": "Username copied",
  "username in game": "Username",
  "username can't be more than 30 characters": "Max character limit reached",
  "username must be more than 5 characters": "Must contain at least 5 characters",
  userAchievements: "Achievements",
  userExperiences: "Experiences",
  userRankingGames: "My Rank",
  "value must be higher than 0": "Please fill value higher than 0",
  verified: "Verified",
  Verified: "Verified",
  "verified user": "Verified User",
  "verify account": "Verify Account",
  "verify identity": "Verify Account",
  "view more": "View More",
  webboard: "Webboard",
  "webboard usage rules": "Webboard usage rules",
  "Webboard usage rules": "Webboard usage rules",
  website: "Website",
  "weebboard usage rule 1": "1. Do not criticize or defame the monarchy or royal family.",
  "weebboard usage rule 2": "2. No vulgar, aggressive, or violent content allowed.",
  "weebboard usage rule 3": "3. Do not post sexual contents or any contents involving obscenity or violence.",
  "weebboard usage rule 4": "4. Messages that intentionally insult or harm others are prohibited.",
  "weebboard usage rule 5": "5. Avoid content that provokes or incites disputes, chaos, or confusion; express opinions respectfully.",
  "weebboard usage rule 6": "6. Steer clear of attacking religions or engaging in sensitive political issues.",
  "weebboard usage rule 7": "7. Using fake names to harm someone's reputation is not allowed.",
  "weebboard usage rule 8": "8. Posting others' private information, such as email addresses or phone numbers, with the intention of harassing, causing distress, or harm is prohibited, especially phone numbers which are prone to errors and misuse. ctrlg.gg does not aim to be a medium for such presentations.",
  "weebboard usage rule 9": "9. Writing content related to illegal or unethical activities that are harmful to society is prohibited.",
  "weebboard usage rule 10": "10. The posted content is the responsibility of the poster alone.",
  "weebboard usage rule 11": "11. Ensure that posts are in the appropriate forum and categorized correctly.",
  "weebboard usage rule 12": "12. If a post is not in the correct forum, Webboard Admins have the right to delete or move the post without prior notice.",
  "weebboard usage rule 13": "13. In case of disputes, the decision of the platform moderators is final.",
  "who you look alike in Valorant, let's create and share": "\u0E17\u0E32\u0E22\u0E19\u0E34\u0E2A\u0E31\u0E22 ...\u0E04\u0E38\u0E13\u0E40\u0E1B\u0E47\u0E19\u0E43\u0E04\u0E23\u0E40\u0E27\u0E25\u0E32\u0E40\u0E25\u0E48\u0E19 Valorant \u0E21\u0E32\u0E40\u0E25\u0E48\u0E19 Quiz \u0E41\u0E25\u0E49\u0E27\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E17\u0E48\u0E46 \u0E44\u0E1B\u0E2D\u0E27\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E01\u0E31\u0E19",
  "you agree to allow whallet to send KYC data to DOPA": "I agree to allow whallet to send my personal info to verify with DOPA citizen ID database",
  "you are already in a team": "You are already in a team",
  "you are not in a team": "You are not in a team",
  "you are team contact person": "I am team contact person",
  "you can only add up to 3 personal details": "Maximum of 3 Personal Details reached",
  "you require": "You required",
  "You are already in a team": "You are already in a team",
  "more member": "more member",
  "your party is full, start your game by adding friends": "Party is ready, start gaming by adding friend's In-game username",
  "your team has been approved": "Your team has been approved",
  "your team has been rejected": "Your submission was rejected",
  "your team is waiting for approval": "Your team is waiting for approval",
  "play quiz": "Play Quiz"
};

// app/i18n.ts
var i18n_default = {
  // lng: "th",
  preload: ["en", "th"],
  // This is the list of languages your application supports
  supportedLngs: ["en", "th"],
  // This is the language you want to use in case
  // if the user language is not in the supportedLngs
  fallbackLng: "th",
  // The default namespace of i18next is "translation", but you can customize it here
  defaultNS: "common",
  // Disabling suspense is recommended
  react: { useSuspense: false },
  resources: {
    th: {
      common: common_default
    },
    en: {
      common: common_default2
    }
  }
};

// app/entry.client.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
async function hydrate() {
  await instance.use(initReactI18next).use(Browser).use(esm_default).init({
    ...i18n_default,
    // spread the configuration
    // This function detects the namespaces your routes rendered while SSR use
    supportedLngs: ["en", "th"],
    ns: "common",
    // ns: getInitialNamespaces(),
    detection: {
      // Here only enable htmlTag detection, we'll detect the language only
      // server-side with remix-i18next, by using the `<html lang>` attribute
      // we can communicate to the client the language detected server-side
      order: ["htmlTag"],
      // Because we only use htmlTag, there's no reason to cache the language
      // on the browser, so we disable it
      caches: []
    }
  });
  (0, import_react2.startTransition)(() => {
    (0, import_react_dom.hydrate)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I18nextProvider, { i18n: instance, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
        fileName: "app/entry.client.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/entry.client.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/entry.client.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this),
      document
    );
  });
}
if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  window.setTimeout(hydrate, 1);
}
//# sourceMappingURL=/build/entry.client-675QOGLW.js.map
