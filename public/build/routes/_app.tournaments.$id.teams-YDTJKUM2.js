import {
  TournamentTeam
} from "/build/_shared/chunk-HJN2TGDW.js";
import "/build/_shared/chunk-JFV4VOHN.js";
import "/build/_shared/chunk-A5OSP4DA.js";
import "/build/_shared/chunk-C3CQI34N.js";
import "/build/_shared/chunk-EKWFIVWG.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
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
  InboxOutlined_default
} from "/build/_shared/chunk-ONWVZSRO.js";
import "/build/_shared/chunk-JWZLYAAR.js";
import {
  DownloadOutlined_default,
  button_default,
  card_default,
  checkbox_default,
  col_default,
  divider_default,
  input_default,
  modal_default,
  result_default,
  row_default,
  space_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import "/build/_shared/chunk-UPPG42YI.js";
import {
  useLoaderData,
  useMatches,
  useRouteLoaderData,
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

// node_modules/papaparse/papaparse.min.js
var require_papaparse_min = __commonJS({
  "node_modules/papaparse/papaparse.min.js"(exports, module) {
    !function(e2, t2) {
      "function" == typeof define && define.amd ? define([], t2) : "object" == typeof module && "undefined" != typeof exports ? module.exports = t2() : e2.Papa = t2();
    }(exports, function s2() {
      "use strict";
      var f2 = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== f2 ? f2 : {};
      var n2 = !f2.document && !!f2.postMessage, o2 = f2.IS_PAPA_WORKER || false, a2 = {}, u = 0, b = { parse: function(e2, t2) {
        var r3 = (t2 = t2 || {}).dynamicTyping || false;
        J(r3) && (t2.dynamicTypingFunction = r3, r3 = {});
        if (t2.dynamicTyping = r3, t2.transform = !!J(t2.transform) && t2.transform, t2.worker && b.WORKERS_SUPPORTED) {
          var i2 = function() {
            if (!b.WORKERS_SUPPORTED)
              return false;
            var e3 = (r4 = f2.URL || f2.webkitURL || null, i3 = s2.toString(), b.BLOB_URL || (b.BLOB_URL = r4.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", i3, ")();"], { type: "text/javascript" })))), t3 = new f2.Worker(e3);
            var r4, i3;
            return t3.onmessage = _2, t3.id = u++, a2[t3.id] = t3;
          }();
          return i2.userStep = t2.step, i2.userChunk = t2.chunk, i2.userComplete = t2.complete, i2.userError = t2.error, t2.step = J(t2.step), t2.chunk = J(t2.chunk), t2.complete = J(t2.complete), t2.error = J(t2.error), delete t2.worker, void i2.postMessage({ input: e2, config: t2, workerId: i2.id });
        }
        var n3 = null;
        b.NODE_STREAM_INPUT, "string" == typeof e2 ? (e2 = function(e3) {
          if (65279 === e3.charCodeAt(0))
            return e3.slice(1);
          return e3;
        }(e2), n3 = t2.download ? new l(t2) : new p(t2)) : true === e2.readable && J(e2.read) && J(e2.on) ? n3 = new g(t2) : (f2.File && e2 instanceof File || e2 instanceof Object) && (n3 = new c2(t2));
        return n3.stream(e2);
      }, unparse: function(e2, t2) {
        var n3 = false, _3 = true, m2 = ",", y2 = "\r\n", s3 = '"', a3 = s3 + s3, r3 = false, i2 = null, o3 = false;
        !function() {
          if ("object" != typeof t2)
            return;
          "string" != typeof t2.delimiter || b.BAD_DELIMITERS.filter(function(e3) {
            return -1 !== t2.delimiter.indexOf(e3);
          }).length || (m2 = t2.delimiter);
          ("boolean" == typeof t2.quotes || "function" == typeof t2.quotes || Array.isArray(t2.quotes)) && (n3 = t2.quotes);
          "boolean" != typeof t2.skipEmptyLines && "string" != typeof t2.skipEmptyLines || (r3 = t2.skipEmptyLines);
          "string" == typeof t2.newline && (y2 = t2.newline);
          "string" == typeof t2.quoteChar && (s3 = t2.quoteChar);
          "boolean" == typeof t2.header && (_3 = t2.header);
          if (Array.isArray(t2.columns)) {
            if (0 === t2.columns.length)
              throw new Error("Option columns is empty");
            i2 = t2.columns;
          }
          void 0 !== t2.escapeChar && (a3 = t2.escapeChar + s3);
          ("boolean" == typeof t2.escapeFormulae || t2.escapeFormulae instanceof RegExp) && (o3 = t2.escapeFormulae instanceof RegExp ? t2.escapeFormulae : /^[=+\-@\t\r].*$/);
        }();
        var u2 = new RegExp(Q(s3), "g");
        "string" == typeof e2 && (e2 = JSON.parse(e2));
        if (Array.isArray(e2)) {
          if (!e2.length || Array.isArray(e2[0]))
            return h2(null, e2, r3);
          if ("object" == typeof e2[0])
            return h2(i2 || Object.keys(e2[0]), e2, r3);
        } else if ("object" == typeof e2)
          return "string" == typeof e2.data && (e2.data = JSON.parse(e2.data)), Array.isArray(e2.data) && (e2.fields || (e2.fields = e2.meta && e2.meta.fields || i2), e2.fields || (e2.fields = Array.isArray(e2.data[0]) ? e2.fields : "object" == typeof e2.data[0] ? Object.keys(e2.data[0]) : []), Array.isArray(e2.data[0]) || "object" == typeof e2.data[0] || (e2.data = [e2.data])), h2(e2.fields || [], e2.data || [], r3);
        throw new Error("Unable to serialize unrecognized input");
        function h2(e3, t3, r4) {
          var i3 = "";
          "string" == typeof e3 && (e3 = JSON.parse(e3)), "string" == typeof t3 && (t3 = JSON.parse(t3));
          var n4 = Array.isArray(e3) && 0 < e3.length, s4 = !Array.isArray(t3[0]);
          if (n4 && _3) {
            for (var a4 = 0; a4 < e3.length; a4++)
              0 < a4 && (i3 += m2), i3 += v2(e3[a4], a4);
            0 < t3.length && (i3 += y2);
          }
          for (var o4 = 0; o4 < t3.length; o4++) {
            var u3 = n4 ? e3.length : t3[o4].length, h3 = false, f3 = n4 ? 0 === Object.keys(t3[o4]).length : 0 === t3[o4].length;
            if (r4 && !n4 && (h3 = "greedy" === r4 ? "" === t3[o4].join("").trim() : 1 === t3[o4].length && 0 === t3[o4][0].length), "greedy" === r4 && n4) {
              for (var d2 = [], l2 = 0; l2 < u3; l2++) {
                var c3 = s4 ? e3[l2] : l2;
                d2.push(t3[o4][c3]);
              }
              h3 = "" === d2.join("").trim();
            }
            if (!h3) {
              for (var p2 = 0; p2 < u3; p2++) {
                0 < p2 && !f3 && (i3 += m2);
                var g2 = n4 && s4 ? e3[p2] : p2;
                i3 += v2(t3[o4][g2], p2);
              }
              o4 < t3.length - 1 && (!r4 || 0 < u3 && !f3) && (i3 += y2);
            }
          }
          return i3;
        }
        function v2(e3, t3) {
          if (null == e3)
            return "";
          if (e3.constructor === Date)
            return JSON.stringify(e3).slice(1, 25);
          var r4 = false;
          o3 && "string" == typeof e3 && o3.test(e3) && (e3 = "'" + e3, r4 = true);
          var i3 = e3.toString().replace(u2, a3);
          return (r4 = r4 || true === n3 || "function" == typeof n3 && n3(e3, t3) || Array.isArray(n3) && n3[t3] || function(e4, t4) {
            for (var r5 = 0; r5 < t4.length; r5++)
              if (-1 < e4.indexOf(t4[r5]))
                return true;
            return false;
          }(i3, b.BAD_DELIMITERS) || -1 < i3.indexOf(m2) || " " === i3.charAt(0) || " " === i3.charAt(i3.length - 1)) ? s3 + i3 + s3 : i3;
        }
      } };
      if (b.RECORD_SEP = String.fromCharCode(30), b.UNIT_SEP = String.fromCharCode(31), b.BYTE_ORDER_MARK = "\uFEFF", b.BAD_DELIMITERS = ["\r", "\n", '"', b.BYTE_ORDER_MARK], b.WORKERS_SUPPORTED = !n2 && !!f2.Worker, b.NODE_STREAM_INPUT = 1, b.LocalChunkSize = 10485760, b.RemoteChunkSize = 5242880, b.DefaultDelimiter = ",", b.Parser = E, b.ParserHandle = r2, b.NetworkStreamer = l, b.FileStreamer = c2, b.StringStreamer = p, b.ReadableStreamStreamer = g, f2.jQuery) {
        var d = f2.jQuery;
        d.fn.parse = function(o3) {
          var r3 = o3.config || {}, u2 = [];
          return this.each(function(e3) {
            if (!("INPUT" === d(this).prop("tagName").toUpperCase() && "file" === d(this).attr("type").toLowerCase() && f2.FileReader) || !this.files || 0 === this.files.length)
              return true;
            for (var t2 = 0; t2 < this.files.length; t2++)
              u2.push({ file: this.files[t2], inputElem: this, instanceConfig: d.extend({}, r3) });
          }), e2(), this;
          function e2() {
            if (0 !== u2.length) {
              var e3, t2, r4, i2, n3 = u2[0];
              if (J(o3.before)) {
                var s3 = o3.before(n3.file, n3.inputElem);
                if ("object" == typeof s3) {
                  if ("abort" === s3.action)
                    return e3 = "AbortError", t2 = n3.file, r4 = n3.inputElem, i2 = s3.reason, void (J(o3.error) && o3.error({ name: e3 }, t2, r4, i2));
                  if ("skip" === s3.action)
                    return void h2();
                  "object" == typeof s3.config && (n3.instanceConfig = d.extend(n3.instanceConfig, s3.config));
                } else if ("skip" === s3)
                  return void h2();
              }
              var a3 = n3.instanceConfig.complete;
              n3.instanceConfig.complete = function(e4) {
                J(a3) && a3(e4, n3.file, n3.inputElem), h2();
              }, b.parse(n3.file, n3.instanceConfig);
            } else
              J(o3.complete) && o3.complete();
          }
          function h2() {
            u2.splice(0, 1), e2();
          }
        };
      }
      function h(e2) {
        this._handle = null, this._finished = false, this._completed = false, this._halted = false, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = true, this._completeResults = { data: [], errors: [], meta: {} }, function(e3) {
          var t2 = w(e3);
          t2.chunkSize = parseInt(t2.chunkSize), e3.step || e3.chunk || (t2.chunkSize = null);
          this._handle = new r2(t2), (this._handle.streamer = this)._config = t2;
        }.call(this, e2), this.parseChunk = function(e3, t2) {
          if (this.isFirstChunk && J(this._config.beforeFirstChunk)) {
            var r3 = this._config.beforeFirstChunk(e3);
            void 0 !== r3 && (e3 = r3);
          }
          this.isFirstChunk = false, this._halted = false;
          var i2 = this._partialLine + e3;
          this._partialLine = "";
          var n3 = this._handle.parse(i2, this._baseIndex, !this._finished);
          if (!this._handle.paused() && !this._handle.aborted()) {
            var s3 = n3.meta.cursor;
            this._finished || (this._partialLine = i2.substring(s3 - this._baseIndex), this._baseIndex = s3), n3 && n3.data && (this._rowCount += n3.data.length);
            var a3 = this._finished || this._config.preview && this._rowCount >= this._config.preview;
            if (o2)
              f2.postMessage({ results: n3, workerId: b.WORKER_ID, finished: a3 });
            else if (J(this._config.chunk) && !t2) {
              if (this._config.chunk(n3, this._handle), this._handle.paused() || this._handle.aborted())
                return void (this._halted = true);
              n3 = void 0, this._completeResults = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(n3.data), this._completeResults.errors = this._completeResults.errors.concat(n3.errors), this._completeResults.meta = n3.meta), this._completed || !a3 || !J(this._config.complete) || n3 && n3.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = true), a3 || n3 && n3.meta.paused || this._nextChunk(), n3;
          }
          this._halted = true;
        }, this._sendError = function(e3) {
          J(this._config.error) ? this._config.error(e3) : o2 && this._config.error && f2.postMessage({ workerId: b.WORKER_ID, error: e3, finished: false });
        };
      }
      function l(e2) {
        var i2;
        (e2 = e2 || {}).chunkSize || (e2.chunkSize = b.RemoteChunkSize), h.call(this, e2), this._nextChunk = n2 ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(e3) {
          this._input = e3, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished)
            this._chunkLoaded();
          else {
            if (i2 = new XMLHttpRequest(), this._config.withCredentials && (i2.withCredentials = this._config.withCredentials), n2 || (i2.onload = v(this._chunkLoaded, this), i2.onerror = v(this._chunkError, this)), i2.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !n2), this._config.downloadRequestHeaders) {
              var e3 = this._config.downloadRequestHeaders;
              for (var t2 in e3)
                i2.setRequestHeader(t2, e3[t2]);
            }
            if (this._config.chunkSize) {
              var r3 = this._start + this._config.chunkSize - 1;
              i2.setRequestHeader("Range", "bytes=" + this._start + "-" + r3);
            }
            try {
              i2.send(this._config.downloadRequestBody);
            } catch (e4) {
              this._chunkError(e4.message);
            }
            n2 && 0 === i2.status && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          4 === i2.readyState && (i2.status < 200 || 400 <= i2.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : i2.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(e3) {
            var t2 = e3.getResponseHeader("Content-Range");
            if (null === t2)
              return -1;
            return parseInt(t2.substring(t2.lastIndexOf("/") + 1));
          }(i2), this.parseChunk(i2.responseText)));
        }, this._chunkError = function(e3) {
          var t2 = i2.statusText || e3;
          this._sendError(new Error(t2));
        };
      }
      function c2(e2) {
        var i2, n3;
        (e2 = e2 || {}).chunkSize || (e2.chunkSize = b.LocalChunkSize), h.call(this, e2);
        var s3 = "undefined" != typeof FileReader;
        this.stream = function(e3) {
          this._input = e3, n3 = e3.slice || e3.webkitSlice || e3.mozSlice, s3 ? ((i2 = new FileReader()).onload = v(this._chunkLoaded, this), i2.onerror = v(this._chunkError, this)) : i2 = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var e3 = this._input;
          if (this._config.chunkSize) {
            var t2 = Math.min(this._start + this._config.chunkSize, this._input.size);
            e3 = n3.call(e3, this._start, t2);
          }
          var r3 = i2.readAsText(e3, this._config.encoding);
          s3 || this._chunkLoaded({ target: { result: r3 } });
        }, this._chunkLoaded = function(e3) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(e3.target.result);
        }, this._chunkError = function() {
          this._sendError(i2.error);
        };
      }
      function p(e2) {
        var r3;
        h.call(this, e2 = e2 || {}), this.stream = function(e3) {
          return r3 = e3, this._nextChunk();
        }, this._nextChunk = function() {
          if (!this._finished) {
            var e3, t2 = this._config.chunkSize;
            return t2 ? (e3 = r3.substring(0, t2), r3 = r3.substring(t2)) : (e3 = r3, r3 = ""), this._finished = !r3, this.parseChunk(e3);
          }
        };
      }
      function g(e2) {
        h.call(this, e2 = e2 || {});
        var t2 = [], r3 = true, i2 = false;
        this.pause = function() {
          h.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          h.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(e3) {
          this._input = e3, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          i2 && 1 === t2.length && (this._finished = true);
        }, this._nextChunk = function() {
          this._checkIsFinished(), t2.length ? this.parseChunk(t2.shift()) : r3 = true;
        }, this._streamData = v(function(e3) {
          try {
            t2.push("string" == typeof e3 ? e3 : e3.toString(this._config.encoding)), r3 && (r3 = false, this._checkIsFinished(), this.parseChunk(t2.shift()));
          } catch (e4) {
            this._streamError(e4);
          }
        }, this), this._streamError = v(function(e3) {
          this._streamCleanUp(), this._sendError(e3);
        }, this), this._streamEnd = v(function() {
          this._streamCleanUp(), i2 = true, this._streamData("");
        }, this), this._streamCleanUp = v(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function r2(m2) {
        var a3, o3, u2, i2 = Math.pow(2, 53), n3 = -i2, s3 = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, h2 = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, t2 = this, r3 = 0, f3 = 0, d2 = false, e2 = false, l2 = [], c3 = { data: [], errors: [], meta: {} };
        if (J(m2.step)) {
          var p2 = m2.step;
          m2.step = function(e3) {
            if (c3 = e3, _3())
              g2();
            else {
              if (g2(), 0 === c3.data.length)
                return;
              r3 += e3.data.length, m2.preview && r3 > m2.preview ? o3.abort() : (c3.data = c3.data[0], p2(c3, t2));
            }
          };
        }
        function y2(e3) {
          return "greedy" === m2.skipEmptyLines ? "" === e3.join("").trim() : 1 === e3.length && 0 === e3[0].length;
        }
        function g2() {
          return c3 && u2 && (k2("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + b.DefaultDelimiter + "'"), u2 = false), m2.skipEmptyLines && (c3.data = c3.data.filter(function(e3) {
            return !y2(e3);
          })), _3() && function() {
            if (!c3)
              return;
            function e3(e4, t4) {
              J(m2.transformHeader) && (e4 = m2.transformHeader(e4, t4)), l2.push(e4);
            }
            if (Array.isArray(c3.data[0])) {
              for (var t3 = 0; _3() && t3 < c3.data.length; t3++)
                c3.data[t3].forEach(e3);
              c3.data.splice(0, 1);
            } else
              c3.data.forEach(e3);
          }(), function() {
            if (!c3 || !m2.header && !m2.dynamicTyping && !m2.transform)
              return c3;
            function e3(e4, t4) {
              var r4, i3 = m2.header ? {} : [];
              for (r4 = 0; r4 < e4.length; r4++) {
                var n4 = r4, s4 = e4[r4];
                m2.header && (n4 = r4 >= l2.length ? "__parsed_extra" : l2[r4]), m2.transform && (s4 = m2.transform(s4, n4)), s4 = v2(n4, s4), "__parsed_extra" === n4 ? (i3[n4] = i3[n4] || [], i3[n4].push(s4)) : i3[n4] = s4;
              }
              return m2.header && (r4 > l2.length ? k2("FieldMismatch", "TooManyFields", "Too many fields: expected " + l2.length + " fields but parsed " + r4, f3 + t4) : r4 < l2.length && k2("FieldMismatch", "TooFewFields", "Too few fields: expected " + l2.length + " fields but parsed " + r4, f3 + t4)), i3;
            }
            var t3 = 1;
            !c3.data.length || Array.isArray(c3.data[0]) ? (c3.data = c3.data.map(e3), t3 = c3.data.length) : c3.data = e3(c3.data, 0);
            m2.header && c3.meta && (c3.meta.fields = l2);
            return f3 += t3, c3;
          }();
        }
        function _3() {
          return m2.header && 0 === l2.length;
        }
        function v2(e3, t3) {
          return r4 = e3, m2.dynamicTypingFunction && void 0 === m2.dynamicTyping[r4] && (m2.dynamicTyping[r4] = m2.dynamicTypingFunction(r4)), true === (m2.dynamicTyping[r4] || m2.dynamicTyping) ? "true" === t3 || "TRUE" === t3 || "false" !== t3 && "FALSE" !== t3 && (function(e4) {
            if (s3.test(e4)) {
              var t4 = parseFloat(e4);
              if (n3 < t4 && t4 < i2)
                return true;
            }
            return false;
          }(t3) ? parseFloat(t3) : h2.test(t3) ? new Date(t3) : "" === t3 ? null : t3) : t3;
          var r4;
        }
        function k2(e3, t3, r4, i3) {
          var n4 = { type: e3, code: t3, message: r4 };
          void 0 !== i3 && (n4.row = i3), c3.errors.push(n4);
        }
        this.parse = function(e3, t3, r4) {
          var i3 = m2.quoteChar || '"';
          if (m2.newline || (m2.newline = function(e4, t4) {
            e4 = e4.substring(0, 1048576);
            var r5 = new RegExp(Q(t4) + "([^]*?)" + Q(t4), "gm"), i4 = (e4 = e4.replace(r5, "")).split("\r"), n5 = e4.split("\n"), s5 = 1 < n5.length && n5[0].length < i4[0].length;
            if (1 === i4.length || s5)
              return "\n";
            for (var a4 = 0, o4 = 0; o4 < i4.length; o4++)
              "\n" === i4[o4][0] && a4++;
            return a4 >= i4.length / 2 ? "\r\n" : "\r";
          }(e3, i3)), u2 = false, m2.delimiter)
            J(m2.delimiter) && (m2.delimiter = m2.delimiter(e3), c3.meta.delimiter = m2.delimiter);
          else {
            var n4 = function(e4, t4, r5, i4, n5) {
              var s5, a4, o4, u3;
              n5 = n5 || [",", "	", "|", ";", b.RECORD_SEP, b.UNIT_SEP];
              for (var h3 = 0; h3 < n5.length; h3++) {
                var f4 = n5[h3], d3 = 0, l3 = 0, c4 = 0;
                o4 = void 0;
                for (var p3 = new E({ comments: i4, delimiter: f4, newline: t4, preview: 10 }).parse(e4), g3 = 0; g3 < p3.data.length; g3++)
                  if (r5 && y2(p3.data[g3]))
                    c4++;
                  else {
                    var _4 = p3.data[g3].length;
                    l3 += _4, void 0 !== o4 ? 0 < _4 && (d3 += Math.abs(_4 - o4), o4 = _4) : o4 = _4;
                  }
                0 < p3.data.length && (l3 /= p3.data.length - c4), (void 0 === a4 || d3 <= a4) && (void 0 === u3 || u3 < l3) && 1.99 < l3 && (a4 = d3, s5 = f4, u3 = l3);
              }
              return { successful: !!(m2.delimiter = s5), bestDelimiter: s5 };
            }(e3, m2.newline, m2.skipEmptyLines, m2.comments, m2.delimitersToGuess);
            n4.successful ? m2.delimiter = n4.bestDelimiter : (u2 = true, m2.delimiter = b.DefaultDelimiter), c3.meta.delimiter = m2.delimiter;
          }
          var s4 = w(m2);
          return m2.preview && m2.header && s4.preview++, a3 = e3, o3 = new E(s4), c3 = o3.parse(a3, t3, r4), g2(), d2 ? { meta: { paused: true } } : c3 || { meta: { paused: false } };
        }, this.paused = function() {
          return d2;
        }, this.pause = function() {
          d2 = true, o3.abort(), a3 = J(m2.chunk) ? "" : a3.substring(o3.getCharIndex());
        }, this.resume = function() {
          t2.streamer._halted ? (d2 = false, t2.streamer.parseChunk(a3, true)) : setTimeout(t2.resume, 3);
        }, this.aborted = function() {
          return e2;
        }, this.abort = function() {
          e2 = true, o3.abort(), c3.meta.aborted = true, J(m2.complete) && m2.complete(c3), a3 = "";
        };
      }
      function Q(e2) {
        return e2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function E(j) {
        var z, M = (j = j || {}).delimiter, P2 = j.newline, U2 = j.comments, q2 = j.step, N2 = j.preview, B = j.fastMode, K = z = void 0 === j.quoteChar || null === j.quoteChar ? '"' : j.quoteChar;
        if (void 0 !== j.escapeChar && (K = j.escapeChar), ("string" != typeof M || -1 < b.BAD_DELIMITERS.indexOf(M)) && (M = ","), U2 === M)
          throw new Error("Comment character same as delimiter");
        true === U2 ? U2 = "#" : ("string" != typeof U2 || -1 < b.BAD_DELIMITERS.indexOf(U2)) && (U2 = false), "\n" !== P2 && "\r" !== P2 && "\r\n" !== P2 && (P2 = "\n");
        var W = 0, H = false;
        this.parse = function(i2, t2, r3) {
          if ("string" != typeof i2)
            throw new Error("Input must be a string");
          var n3 = i2.length, e2 = M.length, s3 = P2.length, a3 = U2.length, o3 = J(q2), u2 = [], h2 = [], f3 = [], d2 = W = 0;
          if (!i2)
            return L();
          if (j.header && !t2) {
            var l2 = i2.split(P2)[0].split(M), c3 = [], p2 = {}, g2 = false;
            for (var _3 in l2) {
              var m2 = l2[_3];
              J(j.transformHeader) && (m2 = j.transformHeader(m2, _3));
              var y2 = m2, v2 = p2[m2] || 0;
              for (0 < v2 && (g2 = true, y2 = m2 + "_" + v2), p2[m2] = v2 + 1; c3.includes(y2); )
                y2 = y2 + "_" + v2;
              c3.push(y2);
            }
            if (g2) {
              var k2 = i2.split(P2);
              k2[0] = c3.join(M), i2 = k2.join(P2);
            }
          }
          if (B || false !== B && -1 === i2.indexOf(z)) {
            for (var b2 = i2.split(P2), E2 = 0; E2 < b2.length; E2++) {
              if (f3 = b2[E2], W += f3.length, E2 !== b2.length - 1)
                W += P2.length;
              else if (r3)
                return L();
              if (!U2 || f3.substring(0, a3) !== U2) {
                if (o3) {
                  if (u2 = [], I2(f3.split(M)), F(), H)
                    return L();
                } else
                  I2(f3.split(M));
                if (N2 && N2 <= E2)
                  return u2 = u2.slice(0, N2), L(true);
              }
            }
            return L();
          }
          for (var w2 = i2.indexOf(M, W), R = i2.indexOf(P2, W), C2 = new RegExp(Q(K) + Q(z), "g"), S2 = i2.indexOf(z, W); ; )
            if (i2[W] !== z)
              if (U2 && 0 === f3.length && i2.substring(W, W + a3) === U2) {
                if (-1 === R)
                  return L();
                W = R + s3, R = i2.indexOf(P2, W), w2 = i2.indexOf(M, W);
              } else if (-1 !== w2 && (w2 < R || -1 === R))
                f3.push(i2.substring(W, w2)), W = w2 + e2, w2 = i2.indexOf(M, W);
              else {
                if (-1 === R)
                  break;
                if (f3.push(i2.substring(W, R)), D(R + s3), o3 && (F(), H))
                  return L();
                if (N2 && u2.length >= N2)
                  return L(true);
              }
            else
              for (S2 = W, W++; ; ) {
                if (-1 === (S2 = i2.indexOf(z, S2 + 1)))
                  return r3 || h2.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: u2.length, index: W }), T();
                if (S2 === n3 - 1)
                  return T(i2.substring(W, S2).replace(C2, z));
                if (z !== K || i2[S2 + 1] !== K) {
                  if (z === K || 0 === S2 || i2[S2 - 1] !== K) {
                    -1 !== w2 && w2 < S2 + 1 && (w2 = i2.indexOf(M, S2 + 1)), -1 !== R && R < S2 + 1 && (R = i2.indexOf(P2, S2 + 1));
                    var O2 = A(-1 === R ? w2 : Math.min(w2, R));
                    if (i2.substr(S2 + 1 + O2, e2) === M) {
                      f3.push(i2.substring(W, S2).replace(C2, z)), i2[W = S2 + 1 + O2 + e2] !== z && (S2 = i2.indexOf(z, W)), w2 = i2.indexOf(M, W), R = i2.indexOf(P2, W);
                      break;
                    }
                    var x2 = A(R);
                    if (i2.substring(S2 + 1 + x2, S2 + 1 + x2 + s3) === P2) {
                      if (f3.push(i2.substring(W, S2).replace(C2, z)), D(S2 + 1 + x2 + s3), w2 = i2.indexOf(M, W), S2 = i2.indexOf(z, W), o3 && (F(), H))
                        return L();
                      if (N2 && u2.length >= N2)
                        return L(true);
                      break;
                    }
                    h2.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: u2.length, index: W }), S2++;
                  }
                } else
                  S2++;
              }
          return T();
          function I2(e3) {
            u2.push(e3), d2 = W;
          }
          function A(e3) {
            var t3 = 0;
            if (-1 !== e3) {
              var r4 = i2.substring(S2 + 1, e3);
              r4 && "" === r4.trim() && (t3 = r4.length);
            }
            return t3;
          }
          function T(e3) {
            return r3 || (void 0 === e3 && (e3 = i2.substring(W)), f3.push(e3), W = n3, I2(f3), o3 && F()), L();
          }
          function D(e3) {
            W = e3, I2(f3), f3 = [], R = i2.indexOf(P2, W);
          }
          function L(e3) {
            return { data: u2, errors: h2, meta: { delimiter: M, linebreak: P2, aborted: H, truncated: !!e3, cursor: d2 + (t2 || 0) } };
          }
          function F() {
            q2(L()), u2 = [], h2 = [];
          }
        }, this.abort = function() {
          H = true;
        }, this.getCharIndex = function() {
          return W;
        };
      }
      function _2(e2) {
        var t2 = e2.data, r3 = a2[t2.workerId], i2 = false;
        if (t2.error)
          r3.userError(t2.error, t2.file);
        else if (t2.results && t2.results.data) {
          var n3 = { abort: function() {
            i2 = true, m(t2.workerId, { data: [], errors: [], meta: { aborted: true } });
          }, pause: y, resume: y };
          if (J(r3.userStep)) {
            for (var s3 = 0; s3 < t2.results.data.length && (r3.userStep({ data: t2.results.data[s3], errors: t2.results.errors, meta: t2.results.meta }, n3), !i2); s3++)
              ;
            delete t2.results;
          } else
            J(r3.userChunk) && (r3.userChunk(t2.results, n3, t2.file), delete t2.results);
        }
        t2.finished && !i2 && m(t2.workerId, t2.results);
      }
      function m(e2, t2) {
        var r3 = a2[e2];
        J(r3.userComplete) && r3.userComplete(t2), r3.terminate(), delete a2[e2];
      }
      function y() {
        throw new Error("Not implemented.");
      }
      function w(e2) {
        if ("object" != typeof e2 || null === e2)
          return e2;
        var t2 = Array.isArray(e2) ? [] : {};
        for (var r3 in e2)
          t2[r3] = w(e2[r3]);
        return t2;
      }
      function v(e2, t2) {
        return function() {
          e2.apply(t2, arguments);
        };
      }
      function J(e2) {
        return "function" == typeof e2;
      }
      return o2 && (f2.onmessage = function(e2) {
        var t2 = e2.data;
        void 0 === b.WORKER_ID && t2 && (b.WORKER_ID = t2.workerId);
        if ("string" == typeof t2.input)
          f2.postMessage({ workerId: b.WORKER_ID, results: b.parse(t2.input, t2.config), finished: true });
        else if (f2.File && t2.input instanceof File || t2.input instanceof Object) {
          var r3 = b.parse(t2.input, t2.config);
          r3 && f2.postMessage({ workerId: b.WORKER_ID, results: r3, finished: true });
        }
      }), (l.prototype = Object.create(h.prototype)).constructor = l, (c2.prototype = Object.create(h.prototype)).constructor = c2, (p.prototype = Object.create(p.prototype)).constructor = p, (g.prototype = Object.create(h.prototype)).constructor = g, b;
    });
  }
});

// app/routes/_app.tournaments.$id.teams.tsx
var import_react2 = __toESM(require_react());
var import_node = __toESM(require_node());

// node_modules/react-papaparse/dist/react-papaparse.es.js
var import_papaparse = __toESM(require_papaparse_min());
var import_react = __toESM(require_react());
function s(e2, n2, t2, r2) {
  return new (t2 || (t2 = Promise))(function(o2, i2) {
    function a2(e3) {
      try {
        u(r2.next(e3));
      } catch (e4) {
        i2(e4);
      }
    }
    function c2(e3) {
      try {
        u(r2.throw(e3));
      } catch (e4) {
        i2(e4);
      }
    }
    function u(e3) {
      var n3;
      e3.done ? o2(e3.value) : (n3 = e3.value, n3 instanceof t2 ? n3 : new t2(function(e4) {
        e4(n3);
      })).then(a2, c2);
    }
    u((r2 = r2.apply(e2, n2 || [])).next());
  });
}
function f(e2, n2) {
  var t2, r2, o2, i2, a2 = { label: 0, sent: function() {
    if (1 & o2[0])
      throw o2[1];
    return o2[1];
  }, trys: [], ops: [] };
  return i2 = { next: c2(0), throw: c2(1), return: c2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
    return this;
  }), i2;
  function c2(c3) {
    return function(u) {
      return function(c4) {
        if (t2)
          throw new TypeError("Generator is already executing.");
        for (; i2 && (i2 = 0, c4[0] && (a2 = 0)), a2; )
          try {
            if (t2 = 1, r2 && (o2 = 2 & c4[0] ? r2.return : c4[0] ? r2.throw || ((o2 = r2.return) && o2.call(r2), 0) : r2.next) && !(o2 = o2.call(r2, c4[1])).done)
              return o2;
            switch (r2 = 0, o2 && (c4 = [2 & c4[0], o2.value]), c4[0]) {
              case 0:
              case 1:
                o2 = c4;
                break;
              case 4:
                return a2.label++, { value: c4[1], done: false };
              case 5:
                a2.label++, r2 = c4[1], c4 = [0];
                continue;
              case 7:
                c4 = a2.ops.pop(), a2.trys.pop();
                continue;
              default:
                if (!(o2 = a2.trys, (o2 = o2.length > 0 && o2[o2.length - 1]) || 6 !== c4[0] && 2 !== c4[0])) {
                  a2 = 0;
                  continue;
                }
                if (3 === c4[0] && (!o2 || c4[1] > o2[0] && c4[1] < o2[3])) {
                  a2.label = c4[1];
                  break;
                }
                if (6 === c4[0] && a2.label < o2[1]) {
                  a2.label = o2[1], o2 = c4;
                  break;
                }
                if (o2 && a2.label < o2[2]) {
                  a2.label = o2[2], a2.ops.push(c4);
                  break;
                }
                o2[2] && a2.ops.pop(), a2.trys.pop();
                continue;
            }
            c4 = n2.call(e2, a2);
          } catch (e3) {
            c4 = [6, e3], r2 = 0;
          } finally {
            t2 = o2 = 0;
          }
        if (5 & c4[0])
          throw c4[1];
        return { value: c4[0] ? c4[1] : void 0, done: true };
      }([c3, u]);
    };
  }
}
function P(n2, t2) {
  return import_papaparse.default.parse(n2, t2);
}
function x(n2, t2) {
  import_papaparse.default.parse(n2, Object.assign({}, { download: true }, t2));
}
function O(n2, t2) {
  return void 0 === t2 && (t2 = {}), import_papaparse.default.unparse(n2, t2);
}
function S() {
  return { readString: P, readRemoteFile: x, jsonToCSV: O };
}
var k = { Link: "link", Button: "button" };
function C() {
  return { CSVDownloader: function() {
    var t2 = this, r2 = function(r3) {
      var o2 = r3.children, i2 = r3.data, a2 = void 0 === i2 ? {} : i2, c2 = r3.filename, u = r3.type, l = void 0 === u ? k.Link : u, d = r3.style, p = void 0 === d ? {} : d, v = r3.className, g = void 0 === v ? "" : v, y = r3.bom, m = void 0 !== y && y, h = r3.config, b = void 0 === h ? {} : h, w = function() {
        return s(t2, void 0, void 0, function() {
          var n2, t3, r4, o3, i3, u2;
          return f(this, function(l2) {
            switch (l2.label) {
              case 0:
                return n2 = m ? "\uFEFF" : "", t3 = null, r4 = null, "function" != typeof a2 ? [3, 2] : [4, a2()];
              case 1:
                a2 = l2.sent(), l2.label = 2;
              case 2:
                return t3 = "object" == typeof a2 ? import_papaparse.default.unparse(a2, b) : a2, o3 = new Blob(["".concat(n2).concat(t3)], { type: "text/csv;charset=utf-8;" }), i3 = window.navigator, r4 = i3.msSaveBlob ? i3.msSaveBlob(o3, "".concat(c2, ".csv")) : window.URL.createObjectURL(o3), (u2 = document.createElement("a")).href = r4, u2.setAttribute("download", "".concat(c2, ".csv")), u2.click(), u2.remove(), [2];
            }
          });
        });
      };
      return import_react.default.createElement(import_react.default.Fragment, null, l === k.Button ? import_react.default.createElement("button", { onClick: function() {
        return w();
      }, style: p, className: g }, o2) : import_react.default.createElement("a", { onClick: function() {
        return w();
      }, style: p, className: g }, o2));
    };
    return import_react.default.useMemo(function() {
      return r2;
    }, []);
  }(), Type: k };
}
var N = import_papaparse.default.BAD_DELIMITERS;
var I = import_papaparse.default.RECORD_SEP;
var U = import_papaparse.default.UNIT_SEP;
var _ = import_papaparse.default.WORKERS_SUPPORTED;
var q = import_papaparse.default.LocalChunkSize;
var V = import_papaparse.default.DefaultDelimiter;

// app/components/common/ResponsiveImageCard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text } = typography_default;
var ResponsiveImageCard = (props) => {
  const { image, label, onClick } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    card_default,
    {
      onClick,
      bordered: false,
      bodyStyle: { padding: 20, textAlign: "center" },
      style: onClick ? { cursor: "pointer" } : {},
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { direction: "vertical", size: 10, style: { display: "flex" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { paddingInline: "2.5%" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            style: {
              width: "100%",
              paddingBottom: "100%",
              marginInline: "auto",
              borderRadius: "50%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: image,
              overflow: "hidden"
            }
          },
          void 0,
          false,
          {
            fileName: "app/components/common/ResponsiveImageCard.tsx",
            lineNumber: 24,
            columnNumber: 11
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/common/ResponsiveImageCard.tsx",
          lineNumber: 23,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: label }, void 0, false, {
          fileName: "app/components/common/ResponsiveImageCard.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/common/ResponsiveImageCard.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/common/ResponsiveImageCard.tsx",
      lineNumber: 16,
      columnNumber: 5
    },
    this
  );
};

// app/routes/_app.tournaments.$id.teams.tsx
var import_session = __toESM(require_session());
var import_lodash = __toESM(require_lodash());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var { Title } = typography_default;
function TournamentSingleTeams() {
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { exportPendingTeams, exportApprovedTeams, teams, teamsPending } = useLoaderData();
  const submit = useSubmit();
  const routeLoader = useRouteLoaderData("routes/_app.tournaments.$id");
  const { user } = (0, import_react2.useContext)(AuthContext);
  const { tournament } = routeLoader;
  const { t: t2 } = useTranslation();
  const { CSVDownloader, Type } = C();
  const { jsonToCSV } = S();
  const [checkedIds, setCheckedIds] = (0, import_react2.useState)([]);
  const [teamModalId, setTeamModalId] = (0, import_react2.useState)(null);
  const [teamModalStatus, setTeamModalStatus] = (0, import_react2.useState)(null);
  const [remark, setRemark] = (0, import_react2.useState)("");
  const [remarkModal, setRemarkModal] = (0, import_react2.useState)(false);
  const isOrganizerAndOwenr = tournament.organizer.id === (user == null ? void 0 : user.id);
  const organizerActionAvailable = isOrganizerAndOwenr && tournament.status === "opening";
  const approvedTeams = teams.filter(
    (teams2) => teams2.status === "approved"
  );
  const pendingTeams = teamsPending;
  const handleTeamClicked = (teamId, status) => {
    setTeamModalId(teamId);
    setTeamModalStatus(status);
  };
  const handleCloseModal = () => {
    setTeamModalId(null);
    setTeamModalStatus(null);
  };
  const handleRemarkChanged = (e2) => {
    setRemark(e2.target.value);
  };
  const handleSelectTeam = (0, import_react2.useCallback)(
    (teamId) => {
      if (checkedIds.includes(teamId)) {
        (0, import_lodash.remove)(checkedIds, (id) => id === teamId);
      } else {
        checkedIds.push(teamId);
      }
      setCheckedIds([...checkedIds]);
    },
    [checkedIds]
  );
  const handleSelectAll = (0, import_react2.useCallback)(
    (e2) => {
      if (checkedIds.length != pendingTeams.length) {
        setCheckedIds(pendingTeams.map((team) => team.id));
      } else {
        setCheckedIds([]);
      }
    },
    [checkedIds, pendingTeams]
  );
  const handleOrganizerAction = (0, import_react2.useCallback)(
    (action, remark2) => {
      if (teamModalId) {
        submit(
          { action, remark: remark2 ? remark2 : "", teamId: teamModalId },
          { method: "post" }
        );
        setTeamModalId(null);
        setTeamModalStatus(null);
      }
    },
    [teamModalId]
  );
  const handleBulkApprove = (0, import_react2.useCallback)(() => {
    submit(
      {
        action: "bulk-approve",
        teamIds: checkedIds
      },
      { method: "post" }
    );
  }, [checkedIds]);
  const handleBulkReject = (0, import_react2.useCallback)(() => {
    submit(
      {
        action: "bulk-reject",
        remark: remark ? remark : "",
        teamIds: checkedIds
      },
      { method: "post" }
    );
    setRemark("");
    setRemarkModal(false);
  }, [checkedIds, remark]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { direction: "vertical", size: 20, style: { display: "flex" }, children: [
      organizerActionAvailable && pendingTeams && pendingTeams.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          row_default,
          {
            style: { alignItems: "center", marginBottom: 20 },
            gutter: [10, 20],
            children: [
              isOrganizerAndOwenr && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { size: 10, style: { display: "flex" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Title, { level: 4, style: { margin: 0 }, children: t2("pending teams") }, void 0, false, {
                  fileName: "app/routes/_app.tournaments.$id.teams.tsx",
                  lineNumber: 300,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  CSVDownloader,
                  {
                    type: Type.Link,
                    filename: "pending-teams",
                    bom: true,
                    data: jsonToCSV([...exportPendingTeams]),
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      button_default,
                      {
                        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DownloadOutlined_default, {}, void 0, false, {
                          fileName: "app/routes/_app.tournaments.$id.teams.tsx",
                          lineNumber: 310,
                          columnNumber: 33
                        }, this),
                        style: {
                          backgroundColor: "#7a6fee",
                          border: "none",
                          color: "#fff"
                        },
                        children: t2("export all")
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/_app.tournaments.$id.teams.tsx",
                        lineNumber: 309,
                        columnNumber: 25
                      },
                      this
                    )
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_app.tournaments.$id.teams.tsx",
                    lineNumber: 303,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/_app.tournaments.$id.teams.tsx",
                lineNumber: 299,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/_app.tournaments.$id.teams.tsx",
                lineNumber: 298,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { size: 10, style: { display: "flex" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  checkbox_default,
                  {
                    onChange: handleSelectAll,
                    checked: checkedIds.length == pendingTeams.length,
                    children: t2("select all")
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_app.tournaments.$id.teams.tsx",
                    lineNumber: 326,
                    columnNumber: 21
                  },
                  this
                ),
                checkedIds.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { size: 5, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(button_default, { type: "primary", onClick: handleBulkApprove, children: t2("approve") }, void 0, false, {
                  fileName: "app/routes/_app.tournaments.$id.teams.tsx",
                  lineNumber: 334,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/_app.tournaments.$id.teams.tsx",
                  lineNumber: 333,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_app.tournaments.$id.teams.tsx",
                lineNumber: 325,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "app/routes/_app.tournaments.$id.teams.tsx",
                lineNumber: 324,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/_app.tournaments.$id.teams.tsx",
            lineNumber: 293,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(row_default, { gutter: [5, 5], children: pendingTeams.map((team, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(col_default, { span: 12, sm: 8, md: 6, lg: 4, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            ResponsiveImageCard,
            {
              image: team && team.logo ? `url("${cdnUrl}/${team.logo}")` : `url("/image/placeholder.png")`,
              label: team.name,
              onClick: (e2) => handleTeamClicked(team.id, team.status)
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.tournaments.$id.teams.tsx",
              lineNumber: 345,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: { position: "absolute", top: 10, right: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            checkbox_default,
            {
              onChange: () => handleSelectTeam(team.id),
              checked: checkedIds.includes(team.id)
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.tournaments.$id.teams.tsx",
              lineNumber: 357,
              columnNumber: 23
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/_app.tournaments.$id.teams.tsx",
            lineNumber: 356,
            columnNumber: 21
          }, this)
        ] }, `pending-${index}`, true, {
          fileName: "app/routes/_app.tournaments.$id.teams.tsx",
          lineNumber: 344,
          columnNumber: 19
        }, this)) }, void 0, false, {
          fileName: "app/routes/_app.tournaments.$id.teams.tsx",
          lineNumber: 342,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(divider_default, {}, void 0, false, {
          fileName: "app/routes/_app.tournaments.$id.teams.tsx",
          lineNumber: 365,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_app.tournaments.$id.teams.tsx",
        lineNumber: 292,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { size: 10, style: { display: "flex" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Title, { level: 4, style: { margin: 0 }, children: t2("tournament participants") }, void 0, false, {
            fileName: "app/routes/_app.tournaments.$id.teams.tsx",
            lineNumber: 370,
            columnNumber: 13
          }, this),
          isOrganizerAndOwenr && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            CSVDownloader,
            {
              type: Type.Link,
              filename: "approved-teams",
              bom: true,
              data: jsonToCSV([...exportApprovedTeams]),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                button_default,
                {
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DownloadOutlined_default, {}, void 0, false, {
                    fileName: "app/routes/_app.tournaments.$id.teams.tsx",
                    lineNumber: 381,
                    columnNumber: 25
                  }, this),
                  style: {
                    backgroundColor: "#7a6fee",
                    border: "none",
                    color: "#fff"
                  },
                  children: t2("export all")
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.tournaments.$id.teams.tsx",
                  lineNumber: 380,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.tournaments.$id.teams.tsx",
              lineNumber: 374,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/_app.tournaments.$id.teams.tsx",
          lineNumber: 369,
          columnNumber: 11
        }, this),
        approvedTeams.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(row_default, { gutter: [5, 5], children: approvedTeams.map((team, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(col_default, { span: 12, sm: 8, md: 6, lg: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          ResponsiveImageCard,
          {
            image: team && team.logo ? `url("${cdnUrl}/${team.logo}")` : `url("/image/placeholder.png")`,
            label: team.name,
            onClick: (e2) => handleTeamClicked(team.id, team.status)
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.tournaments.$id.teams.tsx",
            lineNumber: 398,
            columnNumber: 19
          },
          this
        ) }, `approved-${index}`, false, {
          fileName: "app/routes/_app.tournaments.$id.teams.tsx",
          lineNumber: 397,
          columnNumber: 17
        }, this)) }, void 0, false, {
          fileName: "app/routes/_app.tournaments.$id.teams.tsx",
          lineNumber: 395,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(card_default, { style: { borderRadius: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(result_default, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InboxOutlined_default, {}, void 0, false, {
          fileName: "app/routes/_app.tournaments.$id.teams.tsx",
          lineNumber: 414,
          columnNumber: 29
        }, this), title: t2("no participant") }, void 0, false, {
          fileName: "app/routes/_app.tournaments.$id.teams.tsx",
          lineNumber: 414,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.tournaments.$id.teams.tsx",
          lineNumber: 413,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_app.tournaments.$id.teams.tsx",
        lineNumber: 368,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_app.tournaments.$id.teams.tsx",
      lineNumber: 288,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      modal_default,
      {
        closeIcon: false,
        footer: null,
        open: teamModalId !== null,
        onCancel: handleCloseModal,
        style: { backgroundColor: "transparent" },
        styles: { body: { backgroundColor: "transparent" } },
        modalRender: (modal) => modal,
        children: teamModalId !== null && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          TournamentTeam,
          {
            data: teamModalStatus === "approved" ? teams.find((team) => team.id === teamModalId) : teamsPending.find((team) => team.id === teamModalId),
            onOrganizerAction: organizerActionAvailable ? handleOrganizerAction : void 0,
            additionalMembers: tournament.additionalPlayerCount,
            minMembers: tournament.playerCount,
            style: {
              backgroundColor: "transparent",
              boxShadow: "none"
            }
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.tournaments.$id.teams.tsx",
            lineNumber: 429,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.tournaments.$id.teams.tsx",
        lineNumber: 419,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      modal_default,
      {
        closeIcon: false,
        footer: null,
        open: remarkModal,
        onCancel: () => setRemarkModal(false),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { size: 20, direction: "vertical", style: { display: "flex" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Title, { level: 4, style: { margin: 0 }, children: t2("remark") }, void 0, false, {
            fileName: "app/routes/_app.tournaments.$id.teams.tsx",
            lineNumber: 454,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            input_default.TextArea,
            {
              rows: 4,
              value: remark,
              onChange: handleRemarkChanged
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.tournaments.$id.teams.tsx",
              lineNumber: 457,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(row_default, { gutter: 10, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              TiltButton,
              {
                color: "secondary",
                onClick: () => setRemarkModal(false),
                children: t2("cancel")
              },
              void 0,
              false,
              {
                fileName: "app/routes/_app.tournaments.$id.teams.tsx",
                lineNumber: 464,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/_app.tournaments.$id.teams.tsx",
              lineNumber: 463,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TiltButton, { color: "danger", onClick: handleBulkReject, children: t2("confirm") }, void 0, false, {
              fileName: "app/routes/_app.tournaments.$id.teams.tsx",
              lineNumber: 472,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/routes/_app.tournaments.$id.teams.tsx",
              lineNumber: 471,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_app.tournaments.$id.teams.tsx",
            lineNumber: 462,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_app.tournaments.$id.teams.tsx",
          lineNumber: 453,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.tournaments.$id.teams.tsx",
        lineNumber: 447,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/_app.tournaments.$id.teams.tsx",
    lineNumber: 287,
    columnNumber: 5
  }, this);
}
export {
  TournamentSingleTeams as default
};
/*! Bundled license information:

papaparse/papaparse.min.js:
  (* @license
  Papa Parse
  v5.4.1
  https://github.com/mholt/PapaParse
  License: MIT
  *)
*/
//# sourceMappingURL=/build/routes/_app.tournaments.$id.teams-YDTJKUM2.js.map
