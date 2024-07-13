// node_modules/jwt-decode/build/jwt-decode.esm.js
function e(e2) {
  this.message = e2;
}
e.prototype = new Error(), e.prototype.name = "InvalidCharacterError";
var r = "undefined" != typeof window && window.atob && window.atob.bind(window) || function(r2) {
  var t = String(r2).replace(/=+$/, "");
  if (t.length % 4 == 1)
    throw new e("'atob' failed: The string to be decoded is not correctly encoded.");
  for (var n2, o, a = 0, i = 0, c = ""; o = t.charAt(i++); ~o && (n2 = a % 4 ? 64 * n2 + o : o, a++ % 4) ? c += String.fromCharCode(255 & n2 >> (-2 * a & 6)) : 0)
    o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);
  return c;
};
function n(e2) {
  this.message = e2;
}
n.prototype = new Error(), n.prototype.name = "InvalidTokenError";
//# sourceMappingURL=/build/_shared/chunk-CF33ONIU.js.map
