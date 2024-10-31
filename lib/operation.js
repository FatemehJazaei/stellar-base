"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Operation = exports.AuthRevocableFlag = exports.AuthRequiredFlag = exports.AuthImmutableFlag = exports.AuthClawbackEnabledFlag = void 0;
var _jsXdr = require("@stellar/js-xdr");
var _bignumber = _interopRequireDefault(require("./util/bignumber"));
var _util = require("./util/util");
var _continued_fraction = require("./util/continued_fraction");
var _asset = require("./asset");
var _liquidity_pool_asset = require("./liquidity_pool_asset");
var _claimant = require("./claimant");
var _strkey = require("./strkey");
var _liquidity_pool_id = require("./liquidity_pool_id");
var _xdr = _interopRequireDefault(require("./xdr"));
var ops = _interopRequireWildcard(require("./operations"));
var _decode_encode_muxed_account = require("./util/decode_encode_muxed_account");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_2bzd75cz6h() {
  var path = "/mnt/g/stellar-base/src/operation.js";
  var hash = "b408bbd060252bb41b9e2854cd50812cefc40e7c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/operation.js",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 12
        },
        end: {
          line: 19,
          column: 20
        }
      },
      "1": {
        start: {
          line: 20,
          column: 18
        },
        end: {
          line: 20,
          column: 39
        }
      },
      "2": {
        start: {
          line: 30,
          column: 32
        },
        end: {
          line: 30,
          column: 38
        }
      },
      "3": {
        start: {
          line: 38,
          column: 33
        },
        end: {
          line: 38,
          column: 39
        }
      },
      "4": {
        start: {
          line: 46,
          column: 33
        },
        end: {
          line: 46,
          column: 39
        }
      },
      "5": {
        start: {
          line: 56,
          column: 39
        },
        end: {
          line: 56,
          column: 45
        }
      },
      "6": {
        start: {
          line: 102,
          column: 4
        },
        end: {
          line: 108,
          column: 5
        }
      },
      "7": {
        start: {
          line: 103,
          column: 6
        },
        end: {
          line: 107,
          column: 7
        }
      },
      "8": {
        start: {
          line: 104,
          column: 8
        },
        end: {
          line: 104,
          column: 78
        }
      },
      "9": {
        start: {
          line: 106,
          column: 8
        },
        end: {
          line: 106,
          column: 53
        }
      },
      "10": {
        start: {
          line: 119,
          column: 19
        },
        end: {
          line: 119,
          column: 21
        }
      },
      "11": {
        start: {
          line: 120,
          column: 4
        },
        end: {
          line: 122,
          column: 5
        }
      },
      "12": {
        start: {
          line: 121,
          column: 6
        },
        end: {
          line: 121,
          column: 77
        }
      },
      "13": {
        start: {
          line: 124,
          column: 18
        },
        end: {
          line: 124,
          column: 42
        }
      },
      "14": {
        start: {
          line: 125,
          column: 26
        },
        end: {
          line: 125,
          column: 56
        }
      },
      "15": {
        start: {
          line: 127,
          column: 4
        },
        end: {
          line: 396,
          column: 5
        }
      },
      "16": {
        start: {
          line: 129,
          column: 8
        },
        end: {
          line: 129,
          column: 38
        }
      },
      "17": {
        start: {
          line: 130,
          column: 8
        },
        end: {
          line: 130,
          column: 69
        }
      },
      "18": {
        start: {
          line: 131,
          column: 8
        },
        end: {
          line: 131,
          column: 78
        }
      },
      "19": {
        start: {
          line: 132,
          column: 8
        },
        end: {
          line: 132,
          column: 14
        }
      },
      "20": {
        start: {
          line: 135,
          column: 8
        },
        end: {
          line: 135,
          column: 32
        }
      },
      "21": {
        start: {
          line: 136,
          column: 8
        },
        end: {
          line: 136,
          column: 78
        }
      },
      "22": {
        start: {
          line: 137,
          column: 8
        },
        end: {
          line: 137,
          column: 58
        }
      },
      "23": {
        start: {
          line: 138,
          column: 8
        },
        end: {
          line: 138,
          column: 60
        }
      },
      "24": {
        start: {
          line: 139,
          column: 8
        },
        end: {
          line: 139,
          column: 14
        }
      },
      "25": {
        start: {
          line: 142,
          column: 8
        },
        end: {
          line: 142,
          column: 49
        }
      },
      "26": {
        start: {
          line: 143,
          column: 8
        },
        end: {
          line: 143,
          column: 66
        }
      },
      "27": {
        start: {
          line: 144,
          column: 8
        },
        end: {
          line: 144,
          column: 62
        }
      },
      "28": {
        start: {
          line: 145,
          column: 8
        },
        end: {
          line: 145,
          column: 78
        }
      },
      "29": {
        start: {
          line: 146,
          column: 8
        },
        end: {
          line: 146,
          column: 66
        }
      },
      "30": {
        start: {
          line: 147,
          column: 8
        },
        end: {
          line: 147,
          column: 68
        }
      },
      "31": {
        start: {
          line: 148,
          column: 8
        },
        end: {
          line: 148,
          column: 25
        }
      },
      "32": {
        start: {
          line: 150,
          column: 21
        },
        end: {
          line: 150,
          column: 33
        }
      },
      "33": {
        start: {
          line: 153,
          column: 8
        },
        end: {
          line: 155,
          column: 11
        }
      },
      "34": {
        start: {
          line: 154,
          column: 10
        },
        end: {
          line: 154,
          column: 63
        }
      },
      "35": {
        start: {
          line: 156,
          column: 8
        },
        end: {
          line: 156,
          column: 14
        }
      },
      "36": {
        start: {
          line: 159,
          column: 8
        },
        end: {
          line: 159,
          column: 46
        }
      },
      "37": {
        start: {
          line: 160,
          column: 8
        },
        end: {
          line: 160,
          column: 66
        }
      },
      "38": {
        start: {
          line: 161,
          column: 8
        },
        end: {
          line: 161,
          column: 68
        }
      },
      "39": {
        start: {
          line: 162,
          column: 8
        },
        end: {
          line: 162,
          column: 78
        }
      },
      "40": {
        start: {
          line: 163,
          column: 8
        },
        end: {
          line: 163,
          column: 66
        }
      },
      "41": {
        start: {
          line: 164,
          column: 8
        },
        end: {
          line: 164,
          column: 62
        }
      },
      "42": {
        start: {
          line: 165,
          column: 8
        },
        end: {
          line: 165,
          column: 25
        }
      },
      "43": {
        start: {
          line: 167,
          column: 21
        },
        end: {
          line: 167,
          column: 33
        }
      },
      "44": {
        start: {
          line: 170,
          column: 8
        },
        end: {
          line: 172,
          column: 11
        }
      },
      "45": {
        start: {
          line: 171,
          column: 10
        },
        end: {
          line: 171,
          column: 63
        }
      },
      "46": {
        start: {
          line: 173,
          column: 8
        },
        end: {
          line: 173,
          column: 14
        }
      },
      "47": {
        start: {
          line: 176,
          column: 8
        },
        end: {
          line: 176,
          column: 36
        }
      },
      "48": {
        start: {
          line: 177,
          column: 8
        },
        end: {
          line: 184,
          column: 9
        }
      },
      "49": {
        start: {
          line: 179,
          column: 12
        },
        end: {
          line: 179,
          column: 73
        }
      },
      "50": {
        start: {
          line: 180,
          column: 12
        },
        end: {
          line: 180,
          column: 18
        }
      },
      "51": {
        start: {
          line: 182,
          column: 12
        },
        end: {
          line: 182,
          column: 60
        }
      },
      "52": {
        start: {
          line: 183,
          column: 12
        },
        end: {
          line: 183,
          column: 18
        }
      },
      "53": {
        start: {
          line: 185,
          column: 8
        },
        end: {
          line: 185,
          column: 58
        }
      },
      "54": {
        start: {
          line: 186,
          column: 8
        },
        end: {
          line: 186,
          column: 14
        }
      },
      "55": {
        start: {
          line: 189,
          column: 8
        },
        end: {
          line: 189,
          column: 35
        }
      },
      "56": {
        start: {
          line: 190,
          column: 8
        },
        end: {
          line: 190,
          column: 61
        }
      },
      "57": {
        start: {
          line: 191,
          column: 8
        },
        end: {
          line: 191,
          column: 60
        }
      },
      "58": {
        start: {
          line: 192,
          column: 8
        },
        end: {
          line: 192,
          column: 59
        }
      },
      "59": {
        start: {
          line: 193,
          column: 8
        },
        end: {
          line: 193,
          column: 45
        }
      },
      "60": {
        start: {
          line: 194,
          column: 8
        },
        end: {
          line: 194,
          column: 14
        }
      },
      "61": {
        start: {
          line: 197,
          column: 8
        },
        end: {
          line: 197,
          column: 35
        }
      },
      "62": {
        start: {
          line: 198,
          column: 8
        },
        end: {
          line: 200,
          column: 9
        }
      },
      "63": {
        start: {
          line: 199,
          column: 10
        },
        end: {
          line: 199,
          column: 75
        }
      },
      "64": {
        start: {
          line: 202,
          column: 8
        },
        end: {
          line: 202,
          column: 47
        }
      },
      "65": {
        start: {
          line: 203,
          column: 8
        },
        end: {
          line: 203,
          column: 43
        }
      },
      "66": {
        start: {
          line: 204,
          column: 8
        },
        end: {
          line: 204,
          column: 51
        }
      },
      "67": {
        start: {
          line: 205,
          column: 8
        },
        end: {
          line: 205,
          column: 51
        }
      },
      "68": {
        start: {
          line: 206,
          column: 8
        },
        end: {
          line: 206,
          column: 51
        }
      },
      "69": {
        start: {
          line: 207,
          column: 8
        },
        end: {
          line: 207,
          column: 53
        }
      },
      "70": {
        start: {
          line: 209,
          column: 8
        },
        end: {
          line: 212,
          column: 24
        }
      },
      "71": {
        start: {
          line: 214,
          column: 8
        },
        end: {
          line: 232,
          column: 9
        }
      },
      "72": {
        start: {
          line: 215,
          column: 25
        },
        end: {
          line: 215,
          column: 27
        }
      },
      "73": {
        start: {
          line: 216,
          column: 22
        },
        end: {
          line: 216,
          column: 48
        }
      },
      "74": {
        start: {
          line: 217,
          column: 10
        },
        end: {
          line: 228,
          column: 11
        }
      },
      "75": {
        start: {
          line: 218,
          column: 12
        },
        end: {
          line: 218,
          column: 82
        }
      },
      "76": {
        start: {
          line: 219,
          column: 17
        },
        end: {
          line: 228,
          column: 11
        }
      },
      "77": {
        start: {
          line: 220,
          column: 12
        },
        end: {
          line: 220,
          column: 64
        }
      },
      "78": {
        start: {
          line: 221,
          column: 17
        },
        end: {
          line: 228,
          column: 11
        }
      },
      "79": {
        start: {
          line: 222,
          column: 12
        },
        end: {
          line: 222,
          column: 61
        }
      },
      "80": {
        start: {
          line: 223,
          column: 17
        },
        end: {
          line: 228,
          column: 11
        }
      },
      "81": {
        start: {
          line: 224,
          column: 34
        },
        end: {
          line: 224,
          column: 80
        }
      },
      "82": {
        start: {
          line: 225,
          column: 12
        },
        end: {
          line: 227,
          column: 14
        }
      },
      "83": {
        start: {
          line: 230,
          column: 10
        },
        end: {
          line: 230,
          column: 50
        }
      },
      "84": {
        start: {
          line: 231,
          column: 10
        },
        end: {
          line: 231,
          column: 33
        }
      },
      "85": {
        start: {
          line: 233,
          column: 8
        },
        end: {
          line: 233,
          column: 14
        }
      },
      "86": {
        start: {
          line: 238,
          column: 8
        },
        end: {
          line: 238,
          column: 40
        }
      },
      "87": {
        start: {
          line: 239,
          column: 8
        },
        end: {
          line: 239,
          column: 62
        }
      },
      "88": {
        start: {
          line: 240,
          column: 8
        },
        end: {
          line: 240,
          column: 60
        }
      },
      "89": {
        start: {
          line: 241,
          column: 8
        },
        end: {
          line: 241,
          column: 60
        }
      },
      "90": {
        start: {
          line: 242,
          column: 8
        },
        end: {
          line: 242,
          column: 57
        }
      },
      "91": {
        start: {
          line: 243,
          column: 8
        },
        end: {
          line: 243,
          column: 52
        }
      },
      "92": {
        start: {
          line: 244,
          column: 8
        },
        end: {
          line: 244,
          column: 14
        }
      },
      "93": {
        start: {
          line: 247,
          column: 8
        },
        end: {
          line: 247,
          column: 39
        }
      },
      "94": {
        start: {
          line: 248,
          column: 8
        },
        end: {
          line: 248,
          column: 62
        }
      },
      "95": {
        start: {
          line: 249,
          column: 8
        },
        end: {
          line: 249,
          column: 60
        }
      },
      "96": {
        start: {
          line: 250,
          column: 8
        },
        end: {
          line: 250,
          column: 66
        }
      },
      "97": {
        start: {
          line: 251,
          column: 8
        },
        end: {
          line: 251,
          column: 57
        }
      },
      "98": {
        start: {
          line: 252,
          column: 8
        },
        end: {
          line: 252,
          column: 52
        }
      },
      "99": {
        start: {
          line: 253,
          column: 8
        },
        end: {
          line: 253,
          column: 14
        }
      },
      "100": {
        start: {
          line: 258,
          column: 8
        },
        end: {
          line: 258,
          column: 47
        }
      },
      "101": {
        start: {
          line: 259,
          column: 8
        },
        end: {
          line: 259,
          column: 62
        }
      },
      "102": {
        start: {
          line: 260,
          column: 8
        },
        end: {
          line: 260,
          column: 60
        }
      },
      "103": {
        start: {
          line: 261,
          column: 8
        },
        end: {
          line: 261,
          column: 60
        }
      },
      "104": {
        start: {
          line: 262,
          column: 8
        },
        end: {
          line: 262,
          column: 57
        }
      },
      "105": {
        start: {
          line: 263,
          column: 8
        },
        end: {
          line: 263,
          column: 14
        }
      },
      "106": {
        start: {
          line: 266,
          column: 8
        },
        end: {
          line: 266,
          column: 37
        }
      },
      "107": {
        start: {
          line: 267,
          column: 8
        },
        end: {
          line: 267,
          column: 64
        }
      },
      "108": {
        start: {
          line: 268,
          column: 8
        },
        end: {
          line: 268,
          column: 14
        }
      },
      "109": {
        start: {
          line: 271,
          column: 8
        },
        end: {
          line: 271,
          column: 35
        }
      },
      "110": {
        start: {
          line: 273,
          column: 8
        },
        end: {
          line: 273,
          column: 57
        }
      },
      "111": {
        start: {
          line: 274,
          column: 8
        },
        end: {
          line: 274,
          column: 41
        }
      },
      "112": {
        start: {
          line: 275,
          column: 8
        },
        end: {
          line: 275,
          column: 14
        }
      },
      "113": {
        start: {
          line: 278,
          column: 8
        },
        end: {
          line: 278,
          column: 34
        }
      },
      "114": {
        start: {
          line: 279,
          column: 8
        },
        end: {
          line: 279,
          column: 14
        }
      },
      "115": {
        start: {
          line: 282,
          column: 8
        },
        end: {
          line: 282,
          column: 37
        }
      },
      "116": {
        start: {
          line: 283,
          column: 8
        },
        end: {
          line: 283,
          column: 50
        }
      },
      "117": {
        start: {
          line: 284,
          column: 8
        },
        end: {
          line: 284,
          column: 14
        }
      },
      "118": {
        start: {
          line: 287,
          column: 8
        },
        end: {
          line: 287,
          column: 47
        }
      },
      "119": {
        start: {
          line: 288,
          column: 8
        },
        end: {
          line: 288,
          column: 58
        }
      },
      "120": {
        start: {
          line: 289,
          column: 8
        },
        end: {
          line: 289,
          column: 60
        }
      },
      "121": {
        start: {
          line: 290,
          column: 8
        },
        end: {
          line: 290,
          column: 30
        }
      },
      "122": {
        start: {
          line: 291,
          column: 8
        },
        end: {
          line: 293,
          column: 11
        }
      },
      "123": {
        start: {
          line: 292,
          column: 10
        },
        end: {
          line: 292,
          column: 60
        }
      },
      "124": {
        start: {
          line: 294,
          column: 8
        },
        end: {
          line: 294,
          column: 14
        }
      },
      "125": {
        start: {
          line: 297,
          column: 8
        },
        end: {
          line: 297,
          column: 46
        }
      },
      "126": {
        start: {
          line: 298,
          column: 8
        },
        end: {
          line: 298,
          column: 46
        }
      },
      "127": {
        start: {
          line: 299,
          column: 8
        },
        end: {
          line: 299,
          column: 14
        }
      },
      "128": {
        start: {
          line: 302,
          column: 8
        },
        end: {
          line: 302,
          column: 54
        }
      },
      "129": {
        start: {
          line: 303,
          column: 8
        },
        end: {
          line: 303,
          column: 69
        }
      },
      "130": {
        start: {
          line: 304,
          column: 8
        },
        end: {
          line: 304,
          column: 14
        }
      },
      "131": {
        start: {
          line: 307,
          column: 8
        },
        end: {
          line: 307,
          column: 52
        }
      },
      "132": {
        start: {
          line: 308,
          column: 8
        },
        end: {
          line: 308,
          column: 14
        }
      },
      "133": {
        start: {
          line: 311,
          column: 8
        },
        end: {
          line: 311,
          column: 52
        }
      },
      "134": {
        start: {
          line: 312,
          column: 8
        },
        end: {
          line: 312,
          column: 14
        }
      },
      "135": {
        start: {
          line: 315,
          column: 8
        },
        end: {
          line: 315,
          column: 33
        }
      },
      "136": {
        start: {
          line: 316,
          column: 8
        },
        end: {
          line: 316,
          column: 60
        }
      },
      "137": {
        start: {
          line: 317,
          column: 8
        },
        end: {
          line: 317,
          column: 64
        }
      },
      "138": {
        start: {
          line: 318,
          column: 8
        },
        end: {
          line: 318,
          column: 58
        }
      },
      "139": {
        start: {
          line: 319,
          column: 8
        },
        end: {
          line: 319,
          column: 14
        }
      },
      "140": {
        start: {
          line: 322,
          column: 8
        },
        end: {
          line: 322,
          column: 49
        }
      },
      "141": {
        start: {
          line: 323,
          column: 8
        },
        end: {
          line: 323,
          column: 46
        }
      },
      "142": {
        start: {
          line: 324,
          column: 8
        },
        end: {
          line: 324,
          column: 14
        }
      },
      "143": {
        start: {
          line: 327,
          column: 8
        },
        end: {
          line: 327,
          column: 42
        }
      },
      "144": {
        start: {
          line: 328,
          column: 8
        },
        end: {
          line: 328,
          column: 58
        }
      },
      "145": {
        start: {
          line: 329,
          column: 8
        },
        end: {
          line: 329,
          column: 61
        }
      },
      "146": {
        start: {
          line: 333,
          column: 23
        },
        end: {
          line: 333,
          column: 41
        }
      },
      "147": {
        start: {
          line: 334,
          column: 21
        },
        end: {
          line: 334,
          column: 37
        }
      },
      "148": {
        start: {
          line: 336,
          column: 24
        },
        end: {
          line: 341,
          column: 9
        }
      },
      "149": {
        start: {
          line: 343,
          column: 29
        },
        end: {
          line: 352,
          column: 9
        }
      },
      "150": {
        start: {
          line: 344,
          column: 22
        },
        end: {
          line: 344,
          column: 40
        }
      },
      "151": {
        start: {
          line: 345,
          column: 10
        },
        end: {
          line: 347,
          column: 11
        }
      },
      "152": {
        start: {
          line: 346,
          column: 12
        },
        end: {
          line: 346,
          column: 24
        }
      },
      "153": {
        start: {
          line: 348,
          column: 10
        },
        end: {
          line: 350,
          column: 11
        }
      },
      "154": {
        start: {
          line: 349,
          column: 12
        },
        end: {
          line: 349,
          column: 25
        }
      },
      "155": {
        start: {
          line: 351,
          column: 10
        },
        end: {
          line: 351,
          column: 27
        }
      },
      "156": {
        start: {
          line: 354,
          column: 8
        },
        end: {
          line: 354,
          column: 26
        }
      },
      "157": {
        start: {
          line: 355,
          column: 8
        },
        end: {
          line: 357,
          column: 11
        }
      },
      "158": {
        start: {
          line: 356,
          column: 10
        },
        end: {
          line: 356,
          column: 58
        }
      },
      "159": {
        start: {
          line: 359,
          column: 8
        },
        end: {
          line: 359,
          column: 14
        }
      },
      "160": {
        start: {
          line: 362,
          column: 8
        },
        end: {
          line: 362,
          column: 45
        }
      },
      "161": {
        start: {
          line: 363,
          column: 8
        },
        end: {
          line: 363,
          column: 73
        }
      },
      "162": {
        start: {
          line: 364,
          column: 8
        },
        end: {
          line: 364,
          column: 68
        }
      },
      "163": {
        start: {
          line: 365,
          column: 8
        },
        end: {
          line: 365,
          column: 68
        }
      },
      "164": {
        start: {
          line: 366,
          column: 8
        },
        end: {
          line: 366,
          column: 63
        }
      },
      "165": {
        start: {
          line: 367,
          column: 8
        },
        end: {
          line: 367,
          column: 63
        }
      },
      "166": {
        start: {
          line: 368,
          column: 8
        },
        end: {
          line: 368,
          column: 14
        }
      },
      "167": {
        start: {
          line: 371,
          column: 8
        },
        end: {
          line: 371,
          column: 46
        }
      },
      "168": {
        start: {
          line: 372,
          column: 8
        },
        end: {
          line: 372,
          column: 73
        }
      },
      "169": {
        start: {
          line: 373,
          column: 8
        },
        end: {
          line: 373,
          column: 60
        }
      },
      "170": {
        start: {
          line: 374,
          column: 8
        },
        end: {
          line: 374,
          column: 68
        }
      },
      "171": {
        start: {
          line: 375,
          column: 8
        },
        end: {
          line: 375,
          column: 68
        }
      },
      "172": {
        start: {
          line: 376,
          column: 8
        },
        end: {
          line: 376,
          column: 14
        }
      },
      "173": {
        start: {
          line: 379,
          column: 8
        },
        end: {
          line: 379,
          column: 43
        }
      },
      "174": {
        start: {
          line: 380,
          column: 8
        },
        end: {
          line: 380,
          column: 43
        }
      },
      "175": {
        start: {
          line: 381,
          column: 8
        },
        end: {
          line: 381,
          column: 41
        }
      },
      "176": {
        start: {
          line: 382,
          column: 8
        },
        end: {
          line: 382,
          column: 14
        }
      },
      "177": {
        start: {
          line: 385,
          column: 8
        },
        end: {
          line: 385,
          column: 43
        }
      },
      "178": {
        start: {
          line: 386,
          column: 8
        },
        end: {
          line: 386,
          column: 43
        }
      },
      "179": {
        start: {
          line: 387,
          column: 8
        },
        end: {
          line: 387,
          column: 14
        }
      },
      "180": {
        start: {
          line: 390,
          column: 8
        },
        end: {
          line: 390,
          column: 41
        }
      },
      "181": {
        start: {
          line: 391,
          column: 8
        },
        end: {
          line: 391,
          column: 14
        }
      },
      "182": {
        start: {
          line: 394,
          column: 8
        },
        end: {
          line: 394,
          column: 63
        }
      },
      "183": {
        start: {
          line: 397,
          column: 4
        },
        end: {
          line: 397,
          column: 18
        }
      },
      "184": {
        start: {
          line: 416,
          column: 4
        },
        end: {
          line: 418,
          column: 5
        }
      },
      "185": {
        start: {
          line: 417,
          column: 6
        },
        end: {
          line: 417,
          column: 19
        }
      },
      "186": {
        start: {
          line: 421,
          column: 4
        },
        end: {
          line: 425,
          column: 5
        }
      },
      "187": {
        start: {
          line: 422,
          column: 6
        },
        end: {
          line: 422,
          column: 36
        }
      },
      "188": {
        start: {
          line: 424,
          column: 6
        },
        end: {
          line: 424,
          column: 19
        }
      },
      "189": {
        start: {
          line: 427,
          column: 4
        },
        end: {
          line: 441,
          column: 5
        }
      },
      "190": {
        start: {
          line: 440,
          column: 6
        },
        end: {
          line: 440,
          column: 19
        }
      },
      "191": {
        start: {
          line: 443,
          column: 4
        },
        end: {
          line: 443,
          column: 16
        }
      },
      "192": {
        start: {
          line: 447,
          column: 4
        },
        end: {
          line: 447,
          column: 125
        }
      },
      "193": {
        start: {
          line: 461,
          column: 4
        },
        end: {
          line: 463,
          column: 5
        }
      },
      "194": {
        start: {
          line: 462,
          column: 6
        },
        end: {
          line: 462,
          column: 23
        }
      },
      "195": {
        start: {
          line: 465,
          column: 4
        },
        end: {
          line: 467,
          column: 5
        }
      },
      "196": {
        start: {
          line: 466,
          column: 6
        },
        end: {
          line: 466,
          column: 32
        }
      },
      "197": {
        start: {
          line: 469,
          column: 4
        },
        end: {
          line: 481,
          column: 5
        }
      },
      "198": {
        start: {
          line: 473,
          column: 8
        },
        end: {
          line: 473,
          column: 52
        }
      },
      "199": {
        start: {
          line: 475,
          column: 8
        },
        end: {
          line: 475,
          column: 58
        }
      },
      "200": {
        start: {
          line: 478,
          column: 8
        },
        end: {
          line: 478,
          column: 21
        }
      },
      "201": {
        start: {
          line: 480,
          column: 8
        },
        end: {
          line: 480,
          column: 52
        }
      },
      "202": {
        start: {
          line: 489,
          column: 19
        },
        end: {
          line: 489,
          column: 50
        }
      },
      "203": {
        start: {
          line: 490,
          column: 4
        },
        end: {
          line: 490,
          column: 47
        }
      },
      "204": {
        start: {
          line: 499,
          column: 4
        },
        end: {
          line: 499,
          column: 52
        }
      },
      "205": {
        start: {
          line: 510,
          column: 14
        },
        end: {
          line: 510,
          column: 38
        }
      },
      "206": {
        start: {
          line: 511,
          column: 4
        },
        end: {
          line: 511,
          column: 54
        }
      },
      "207": {
        start: {
          line: 523,
          column: 4
        },
        end: {
          line: 531,
          column: 5
        }
      },
      "208": {
        start: {
          line: 524,
          column: 6
        },
        end: {
          line: 524,
          column: 39
        }
      },
      "209": {
        start: {
          line: 526,
          column: 21
        },
        end: {
          line: 526,
          column: 34
        }
      },
      "210": {
        start: {
          line: 527,
          column: 6
        },
        end: {
          line: 530,
          column: 9
        }
      },
      "211": {
        start: {
          line: 533,
          column: 4
        },
        end: {
          line: 535,
          column: 5
        }
      },
      "212": {
        start: {
          line: 534,
          column: 6
        },
        end: {
          line: 534,
          column: 48
        }
      },
      "213": {
        start: {
          line: 537,
          column: 4
        },
        end: {
          line: 537,
          column: 21
        }
      },
      "214": {
        start: {
          line: 542,
          column: 2
        },
        end: {
          line: 610,
          column: 3
        }
      },
      "215": {
        start: {
          line: 544,
          column: 24
        },
        end: {
          line: 544,
          column: 41
        }
      },
      "216": {
        start: {
          line: 545,
          column: 6
        },
        end: {
          line: 598,
          column: 7
        }
      },
      "217": {
        start: {
          line: 547,
          column: 10
        },
        end: {
          line: 547,
          column: 51
        }
      },
      "218": {
        start: {
          line: 548,
          column: 10
        },
        end: {
          line: 548,
          column: 79
        }
      },
      "219": {
        start: {
          line: 549,
          column: 10
        },
        end: {
          line: 549,
          column: 16
        }
      },
      "220": {
        start: {
          line: 552,
          column: 10
        },
        end: {
          line: 552,
          column: 53
        }
      },
      "221": {
        start: {
          line: 553,
          column: 10
        },
        end: {
          line: 555,
          column: 12
        }
      },
      "222": {
        start: {
          line: 556,
          column: 27
        },
        end: {
          line: 556,
          column: 56
        }
      },
      "223": {
        start: {
          line: 557,
          column: 10
        },
        end: {
          line: 564,
          column: 11
        }
      },
      "224": {
        start: {
          line: 559,
          column: 14
        },
        end: {
          line: 559,
          column: 69
        }
      },
      "225": {
        start: {
          line: 560,
          column: 14
        },
        end: {
          line: 560,
          column: 20
        }
      },
      "226": {
        start: {
          line: 562,
          column: 14
        },
        end: {
          line: 562,
          column: 59
        }
      },
      "227": {
        start: {
          line: 563,
          column: 14
        },
        end: {
          line: 563,
          column: 20
        }
      },
      "228": {
        start: {
          line: 565,
          column: 10
        },
        end: {
          line: 565,
          column: 16
        }
      },
      "229": {
        start: {
          line: 568,
          column: 10
        },
        end: {
          line: 568,
          column: 49
        }
      },
      "230": {
        start: {
          line: 569,
          column: 10
        },
        end: {
          line: 569,
          column: 75
        }
      },
      "231": {
        start: {
          line: 570,
          column: 10
        },
        end: {
          line: 570,
          column: 66
        }
      },
      "232": {
        start: {
          line: 571,
          column: 10
        },
        end: {
          line: 571,
          column: 16
        }
      },
      "233": {
        start: {
          line: 574,
          column: 10
        },
        end: {
          line: 574,
          column: 48
        }
      },
      "234": {
        start: {
          line: 575,
          column: 10
        },
        end: {
          line: 575,
          column: 76
        }
      },
      "235": {
        start: {
          line: 576,
          column: 10
        },
        end: {
          line: 576,
          column: 70
        }
      },
      "236": {
        start: {
          line: 577,
          column: 10
        },
        end: {
          line: 577,
          column: 16
        }
      },
      "237": {
        start: {
          line: 580,
          column: 10
        },
        end: {
          line: 580,
          column: 60
        }
      },
      "238": {
        start: {
          line: 581,
          column: 10
        },
        end: {
          line: 584,
          column: 26
        }
      },
      "239": {
        start: {
          line: 585,
          column: 10
        },
        end: {
          line: 585,
          column: 16
        }
      },
      "240": {
        start: {
          line: 588,
          column: 10
        },
        end: {
          line: 588,
          column: 57
        }
      },
      "241": {
        start: {
          line: 589,
          column: 10
        },
        end: {
          line: 592,
          column: 29
        }
      },
      "242": {
        start: {
          line: 593,
          column: 10
        },
        end: {
          line: 593,
          column: 16
        }
      },
      "243": {
        start: {
          line: 596,
          column: 10
        },
        end: {
          line: 596,
          column: 71
        }
      },
      "244": {
        start: {
          line: 599,
          column: 6
        },
        end: {
          line: 599,
          column: 12
        }
      },
      "245": {
        start: {
          line: 602,
          column: 6
        },
        end: {
          line: 602,
          column: 46
        }
      },
      "246": {
        start: {
          line: 603,
          column: 6
        },
        end: {
          line: 603,
          column: 70
        }
      },
      "247": {
        start: {
          line: 604,
          column: 6
        },
        end: {
          line: 604,
          column: 78
        }
      },
      "248": {
        start: {
          line: 605,
          column: 6
        },
        end: {
          line: 605,
          column: 12
        }
      },
      "249": {
        start: {
          line: 608,
          column: 6
        },
        end: {
          line: 608,
          column: 75
        }
      },
      "250": {
        start: {
          line: 614,
          column: 16
        },
        end: {
          line: 614,
          column: 18
        }
      },
      "251": {
        start: {
          line: 615,
          column: 2
        },
        end: {
          line: 633,
          column: 3
        }
      },
      "252": {
        start: {
          line: 617,
          column: 6
        },
        end: {
          line: 619,
          column: 8
        }
      },
      "253": {
        start: {
          line: 620,
          column: 6
        },
        end: {
          line: 620,
          column: 12
        }
      },
      "254": {
        start: {
          line: 623,
          column: 6
        },
        end: {
          line: 623,
          column: 62
        }
      },
      "255": {
        start: {
          line: 624,
          column: 6
        },
        end: {
          line: 624,
          column: 12
        }
      },
      "256": {
        start: {
          line: 627,
          column: 6
        },
        end: {
          line: 627,
          column: 59
        }
      },
      "257": {
        start: {
          line: 628,
          column: 6
        },
        end: {
          line: 628,
          column: 12
        }
      },
      "258": {
        start: {
          line: 631,
          column: 6
        },
        end: {
          line: 631,
          column: 71
        }
      },
      "259": {
        start: {
          line: 635,
          column: 2
        },
        end: {
          line: 635,
          column: 15
        }
      },
      "260": {
        start: {
          line: 639,
          column: 2
        },
        end: {
          line: 639,
          column: 66
        }
      },
      "261": {
        start: {
          line: 643,
          column: 0
        },
        end: {
          line: 643,
          column: 42
        }
      },
      "262": {
        start: {
          line: 644,
          column: 0
        },
        end: {
          line: 644,
          column: 38
        }
      },
      "263": {
        start: {
          line: 645,
          column: 0
        },
        end: {
          line: 645,
          column: 42
        }
      },
      "264": {
        start: {
          line: 646,
          column: 0
        },
        end: {
          line: 646,
          column: 40
        }
      },
      "265": {
        start: {
          line: 647,
          column: 0
        },
        end: {
          line: 647,
          column: 44
        }
      },
      "266": {
        start: {
          line: 648,
          column: 0
        },
        end: {
          line: 648,
          column: 62
        }
      },
      "267": {
        start: {
          line: 649,
          column: 0
        },
        end: {
          line: 649,
          column: 60
        }
      },
      "268": {
        start: {
          line: 650,
          column: 0
        },
        end: {
          line: 650,
          column: 66
        }
      },
      "269": {
        start: {
          line: 651,
          column: 0
        },
        end: {
          line: 651,
          column: 62
        }
      },
      "270": {
        start: {
          line: 652,
          column: 0
        },
        end: {
          line: 652,
          column: 36
        }
      },
      "271": {
        start: {
          line: 653,
          column: 0
        },
        end: {
          line: 653,
          column: 38
        }
      },
      "272": {
        start: {
          line: 654,
          column: 0
        },
        end: {
          line: 654,
          column: 48
        }
      },
      "273": {
        start: {
          line: 655,
          column: 0
        },
        end: {
          line: 655,
          column: 46
        }
      },
      "274": {
        start: {
          line: 656,
          column: 0
        },
        end: {
          line: 656,
          column: 66
        }
      },
      "275": {
        start: {
          line: 657,
          column: 0
        },
        end: {
          line: 657,
          column: 60
        }
      },
      "276": {
        start: {
          line: 658,
          column: 0
        },
        end: {
          line: 658,
          column: 32
        }
      },
      "277": {
        start: {
          line: 659,
          column: 0
        },
        end: {
          line: 659,
          column: 38
        }
      },
      "278": {
        start: {
          line: 660,
          column: 0
        },
        end: {
          line: 660,
          column: 76
        }
      },
      "279": {
        start: {
          line: 661,
          column: 0
        },
        end: {
          line: 661,
          column: 72
        }
      },
      "280": {
        start: {
          line: 662,
          column: 0
        },
        end: {
          line: 662,
          column: 66
        }
      },
      "281": {
        start: {
          line: 663,
          column: 0
        },
        end: {
          line: 663,
          column: 70
        }
      },
      "282": {
        start: {
          line: 664,
          column: 0
        },
        end: {
          line: 664,
          column: 62
        }
      },
      "283": {
        start: {
          line: 665,
          column: 0
        },
        end: {
          line: 665,
          column: 60
        }
      },
      "284": {
        start: {
          line: 666,
          column: 0
        },
        end: {
          line: 667,
          column: 40
        }
      },
      "285": {
        start: {
          line: 668,
          column: 0
        },
        end: {
          line: 668,
          column: 78
        }
      },
      "286": {
        start: {
          line: 669,
          column: 0
        },
        end: {
          line: 669,
          column: 64
        }
      },
      "287": {
        start: {
          line: 670,
          column: 0
        },
        end: {
          line: 670,
          column: 34
        }
      },
      "288": {
        start: {
          line: 671,
          column: 0
        },
        end: {
          line: 671,
          column: 52
        }
      },
      "289": {
        start: {
          line: 672,
          column: 0
        },
        end: {
          line: 672,
          column: 58
        }
      },
      "290": {
        start: {
          line: 673,
          column: 0
        },
        end: {
          line: 673,
          column: 60
        }
      },
      "291": {
        start: {
          line: 674,
          column: 0
        },
        end: {
          line: 674,
          column: 54
        }
      },
      "292": {
        start: {
          line: 675,
          column: 0
        },
        end: {
          line: 675,
          column: 54
        }
      },
      "293": {
        start: {
          line: 676,
          column: 0
        },
        end: {
          line: 676,
          column: 50
        }
      },
      "294": {
        start: {
          line: 680,
          column: 0
        },
        end: {
          line: 680,
          column: 70
        }
      },
      "295": {
        start: {
          line: 681,
          column: 0
        },
        end: {
          line: 681,
          column: 62
        }
      },
      "296": {
        start: {
          line: 682,
          column: 0
        },
        end: {
          line: 682,
          column: 58
        }
      },
      "297": {
        start: {
          line: 683,
          column: 0
        },
        end: {
          line: 683,
          column: 54
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 101,
            column: 2
          },
          end: {
            line: 101,
            column: 3
          }
        },
        loc: {
          start: {
            line: 101,
            column: 46
          },
          end: {
            line: 109,
            column: 3
          }
        },
        line: 101
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 118,
            column: 2
          },
          end: {
            line: 118,
            column: 3
          }
        },
        loc: {
          start: {
            line: 118,
            column: 34
          },
          end: {
            line: 398,
            column: 3
          }
        },
        line: 118
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 153,
            column: 34
          },
          end: {
            line: 153,
            column: 35
          }
        },
        loc: {
          start: {
            line: 153,
            column: 47
          },
          end: {
            line: 155,
            column: 9
          }
        },
        line: 153
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 170,
            column: 34
          },
          end: {
            line: 170,
            column: 35
          }
        },
        loc: {
          start: {
            line: 170,
            column: 47
          },
          end: {
            line: 172,
            column: 9
          }
        },
        line: 170
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 291,
            column: 34
          },
          end: {
            line: 291,
            column: 35
          }
        },
        loc: {
          start: {
            line: 291,
            column: 48
          },
          end: {
            line: 293,
            column: 9
          }
        },
        line: 291
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 343,
            column: 29
          },
          end: {
            line: 343,
            column: 30
          }
        },
        loc: {
          start: {
            line: 343,
            column: 38
          },
          end: {
            line: 352,
            column: 9
          }
        },
        line: 343
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 355,
            column: 37
          },
          end: {
            line: 355,
            column: 38
          }
        },
        loc: {
          start: {
            line: 355,
            column: 51
          },
          end: {
            line: 357,
            column: 9
          }
        },
        line: 355
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 415,
            column: 2
          },
          end: {
            line: 415,
            column: 3
          }
        },
        loc: {
          start: {
            line: 415,
            column: 49
          },
          end: {
            line: 444,
            column: 3
          }
        },
        line: 415
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 446,
            column: 2
          },
          end: {
            line: 446,
            column: 3
          }
        },
        loc: {
          start: {
            line: 446,
            column: 47
          },
          end: {
            line: 448,
            column: 3
          }
        },
        line: 446
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 460,
            column: 2
          },
          end: {
            line: 460,
            column: 3
          }
        },
        loc: {
          start: {
            line: 460,
            column: 69
          },
          end: {
            line: 482,
            column: 3
          }
        },
        line: 460
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 488,
            column: 2
          },
          end: {
            line: 488,
            column: 3
          }
        },
        loc: {
          start: {
            line: 488,
            column: 29
          },
          end: {
            line: 491,
            column: 3
          }
        },
        line: 488
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 498,
            column: 2
          },
          end: {
            line: 498,
            column: 3
          }
        },
        loc: {
          start: {
            line: 498,
            column: 31
          },
          end: {
            line: 500,
            column: 3
          }
        },
        line: 498
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 509,
            column: 2
          },
          end: {
            line: 509,
            column: 3
          }
        },
        loc: {
          start: {
            line: 509,
            column: 30
          },
          end: {
            line: 512,
            column: 3
          }
        },
        line: 509
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 521,
            column: 2
          },
          end: {
            line: 521,
            column: 3
          }
        },
        loc: {
          start: {
            line: 521,
            column: 28
          },
          end: {
            line: 538,
            column: 3
          }
        },
        line: 521
      },
      "14": {
        name: "extractRevokeSponshipDetails",
        decl: {
          start: {
            line: 541,
            column: 9
          },
          end: {
            line: 541,
            column: 37
          }
        },
        loc: {
          start: {
            line: 541,
            column: 53
          },
          end: {
            line: 611,
            column: 1
          }
        },
        line: 541
      },
      "15": {
        name: "convertXDRSignerKeyToObject",
        decl: {
          start: {
            line: 613,
            column: 9
          },
          end: {
            line: 613,
            column: 36
          }
        },
        loc: {
          start: {
            line: 613,
            column: 48
          },
          end: {
            line: 636,
            column: 1
          }
        },
        line: 613
      },
      "16": {
        name: "accountIdtoAddress",
        decl: {
          start: {
            line: 638,
            column: 9
          },
          end: {
            line: 638,
            column: 27
          }
        },
        loc: {
          start: {
            line: 638,
            column: 39
          },
          end: {
            line: 640,
            column: 1
          }
        },
        line: 638
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 108,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 108,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 102
      },
      "1": {
        loc: {
          start: {
            line: 120,
            column: 4
          },
          end: {
            line: 122,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 120,
            column: 4
          },
          end: {
            line: 122,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 120
      },
      "2": {
        loc: {
          start: {
            line: 127,
            column: 4
          },
          end: {
            line: 396,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 128,
            column: 6
          },
          end: {
            line: 133,
            column: 7
          }
        }, {
          start: {
            line: 134,
            column: 6
          },
          end: {
            line: 140,
            column: 7
          }
        }, {
          start: {
            line: 141,
            column: 6
          },
          end: {
            line: 157,
            column: 7
          }
        }, {
          start: {
            line: 158,
            column: 6
          },
          end: {
            line: 174,
            column: 7
          }
        }, {
          start: {
            line: 175,
            column: 6
          },
          end: {
            line: 187,
            column: 7
          }
        }, {
          start: {
            line: 188,
            column: 6
          },
          end: {
            line: 195,
            column: 7
          }
        }, {
          start: {
            line: 196,
            column: 6
          },
          end: {
            line: 234,
            column: 7
          }
        }, {
          start: {
            line: 236,
            column: 6
          },
          end: {
            line: 236,
            column: 25
          }
        }, {
          start: {
            line: 237,
            column: 6
          },
          end: {
            line: 245,
            column: 7
          }
        }, {
          start: {
            line: 246,
            column: 6
          },
          end: {
            line: 254,
            column: 7
          }
        }, {
          start: {
            line: 256,
            column: 6
          },
          end: {
            line: 256,
            column: 32
          }
        }, {
          start: {
            line: 257,
            column: 6
          },
          end: {
            line: 264,
            column: 7
          }
        }, {
          start: {
            line: 265,
            column: 6
          },
          end: {
            line: 269,
            column: 7
          }
        }, {
          start: {
            line: 270,
            column: 6
          },
          end: {
            line: 276,
            column: 7
          }
        }, {
          start: {
            line: 277,
            column: 6
          },
          end: {
            line: 280,
            column: 7
          }
        }, {
          start: {
            line: 281,
            column: 6
          },
          end: {
            line: 285,
            column: 7
          }
        }, {
          start: {
            line: 286,
            column: 6
          },
          end: {
            line: 295,
            column: 7
          }
        }, {
          start: {
            line: 296,
            column: 6
          },
          end: {
            line: 300,
            column: 7
          }
        }, {
          start: {
            line: 301,
            column: 6
          },
          end: {
            line: 305,
            column: 7
          }
        }, {
          start: {
            line: 306,
            column: 6
          },
          end: {
            line: 309,
            column: 7
          }
        }, {
          start: {
            line: 310,
            column: 6
          },
          end: {
            line: 313,
            column: 7
          }
        }, {
          start: {
            line: 314,
            column: 6
          },
          end: {
            line: 320,
            column: 7
          }
        }, {
          start: {
            line: 321,
            column: 6
          },
          end: {
            line: 325,
            column: 7
          }
        }, {
          start: {
            line: 326,
            column: 6
          },
          end: {
            line: 360,
            column: 7
          }
        }, {
          start: {
            line: 361,
            column: 6
          },
          end: {
            line: 369,
            column: 7
          }
        }, {
          start: {
            line: 370,
            column: 6
          },
          end: {
            line: 377,
            column: 7
          }
        }, {
          start: {
            line: 378,
            column: 6
          },
          end: {
            line: 383,
            column: 7
          }
        }, {
          start: {
            line: 384,
            column: 6
          },
          end: {
            line: 388,
            column: 7
          }
        }, {
          start: {
            line: 389,
            column: 6
          },
          end: {
            line: 392,
            column: 7
          }
        }, {
          start: {
            line: 393,
            column: 6
          },
          end: {
            line: 395,
            column: 7
          }
        }],
        line: 127
      },
      "3": {
        loc: {
          start: {
            line: 177,
            column: 8
          },
          end: {
            line: 184,
            column: 9
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 178,
            column: 10
          },
          end: {
            line: 180,
            column: 18
          }
        }, {
          start: {
            line: 181,
            column: 10
          },
          end: {
            line: 183,
            column: 18
          }
        }],
        line: 177
      },
      "4": {
        loc: {
          start: {
            line: 198,
            column: 8
          },
          end: {
            line: 200,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 198,
            column: 8
          },
          end: {
            line: 200,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 198
      },
      "5": {
        loc: {
          start: {
            line: 210,
            column: 10
          },
          end: {
            line: 212,
            column: 23
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 211,
            column: 14
          },
          end: {
            line: 211,
            column: 50
          }
        }, {
          start: {
            line: 212,
            column: 14
          },
          end: {
            line: 212,
            column: 23
          }
        }],
        line: 210
      },
      "6": {
        loc: {
          start: {
            line: 214,
            column: 8
          },
          end: {
            line: 232,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 214,
            column: 8
          },
          end: {
            line: 232,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 214
      },
      "7": {
        loc: {
          start: {
            line: 217,
            column: 10
          },
          end: {
            line: 228,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 217,
            column: 10
          },
          end: {
            line: 228,
            column: 11
          }
        }, {
          start: {
            line: 219,
            column: 17
          },
          end: {
            line: 228,
            column: 11
          }
        }],
        line: 217
      },
      "8": {
        loc: {
          start: {
            line: 219,
            column: 17
          },
          end: {
            line: 228,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 219,
            column: 17
          },
          end: {
            line: 228,
            column: 11
          }
        }, {
          start: {
            line: 221,
            column: 17
          },
          end: {
            line: 228,
            column: 11
          }
        }],
        line: 219
      },
      "9": {
        loc: {
          start: {
            line: 221,
            column: 17
          },
          end: {
            line: 228,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 221,
            column: 17
          },
          end: {
            line: 228,
            column: 11
          }
        }, {
          start: {
            line: 223,
            column: 17
          },
          end: {
            line: 228,
            column: 11
          }
        }],
        line: 221
      },
      "10": {
        loc: {
          start: {
            line: 223,
            column: 17
          },
          end: {
            line: 228,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 223,
            column: 17
          },
          end: {
            line: 228,
            column: 11
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 223
      },
      "11": {
        loc: {
          start: {
            line: 345,
            column: 10
          },
          end: {
            line: 347,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 345,
            column: 10
          },
          end: {
            line: 347,
            column: 11
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 345
      },
      "12": {
        loc: {
          start: {
            line: 348,
            column: 10
          },
          end: {
            line: 350,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 348,
            column: 10
          },
          end: {
            line: 350,
            column: 11
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 348
      },
      "13": {
        loc: {
          start: {
            line: 381,
            column: 22
          },
          end: {
            line: 381,
            column: 40
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 381,
            column: 22
          },
          end: {
            line: 381,
            column: 34
          }
        }, {
          start: {
            line: 381,
            column: 38
          },
          end: {
            line: 381,
            column: 40
          }
        }],
        line: 381
      },
      "14": {
        loc: {
          start: {
            line: 415,
            column: 30
          },
          end: {
            line: 415,
            column: 47
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 415,
            column: 42
          },
          end: {
            line: 415,
            column: 47
          }
        }],
        line: 415
      },
      "15": {
        loc: {
          start: {
            line: 416,
            column: 4
          },
          end: {
            line: 418,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 416,
            column: 4
          },
          end: {
            line: 418,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 416
      },
      "16": {
        loc: {
          start: {
            line: 427,
            column: 4
          },
          end: {
            line: 441,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 427,
            column: 4
          },
          end: {
            line: 441,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 427
      },
      "17": {
        loc: {
          start: {
            line: 429,
            column: 6
          },
          end: {
            line: 438,
            column: 24
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 429,
            column: 7
          },
          end: {
            line: 429,
            column: 17
          }
        }, {
          start: {
            line: 429,
            column: 21
          },
          end: {
            line: 429,
            column: 36
          }
        }, {
          start: {
            line: 431,
            column: 6
          },
          end: {
            line: 431,
            column: 25
          }
        }, {
          start: {
            line: 433,
            column: 6
          },
          end: {
            line: 433,
            column: 63
          }
        }, {
          start: {
            line: 435,
            column: 6
          },
          end: {
            line: 435,
            column: 32
          }
        }, {
          start: {
            line: 437,
            column: 6
          },
          end: {
            line: 437,
            column: 20
          }
        }, {
          start: {
            line: 438,
            column: 6
          },
          end: {
            line: 438,
            column: 24
          }
        }],
        line: 429
      },
      "18": {
        loc: {
          start: {
            line: 460,
            column: 45
          },
          end: {
            line: 460,
            column: 67
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 460,
            column: 63
          },
          end: {
            line: 460,
            column: 67
          }
        }],
        line: 460
      },
      "19": {
        loc: {
          start: {
            line: 461,
            column: 4
          },
          end: {
            line: 463,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 461,
            column: 4
          },
          end: {
            line: 463,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 461
      },
      "20": {
        loc: {
          start: {
            line: 465,
            column: 4
          },
          end: {
            line: 467,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 465,
            column: 4
          },
          end: {
            line: 467,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 465
      },
      "21": {
        loc: {
          start: {
            line: 469,
            column: 4
          },
          end: {
            line: 481,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 470,
            column: 6
          },
          end: {
            line: 473,
            column: 52
          }
        }, {
          start: {
            line: 474,
            column: 6
          },
          end: {
            line: 475,
            column: 58
          }
        }, {
          start: {
            line: 476,
            column: 6
          },
          end: {
            line: 478,
            column: 21
          }
        }, {
          start: {
            line: 479,
            column: 6
          },
          end: {
            line: 480,
            column: 52
          }
        }],
        line: 469
      },
      "22": {
        loc: {
          start: {
            line: 470,
            column: 11
          },
          end: {
            line: 472,
            column: 23
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 470,
            column: 11
          },
          end: {
            line: 470,
            column: 36
          }
        }, {
          start: {
            line: 471,
            column: 8
          },
          end: {
            line: 471,
            column: 31
          }
        }, {
          start: {
            line: 472,
            column: 8
          },
          end: {
            line: 472,
            column: 23
          }
        }],
        line: 470
      },
      "23": {
        loc: {
          start: {
            line: 476,
            column: 11
          },
          end: {
            line: 477,
            column: 57
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 476,
            column: 11
          },
          end: {
            line: 476,
            column: 27
          }
        }, {
          start: {
            line: 477,
            column: 9
          },
          end: {
            line: 477,
            column: 24
          }
        }, {
          start: {
            line: 477,
            column: 28
          },
          end: {
            line: 477,
            column: 56
          }
        }],
        line: 476
      },
      "24": {
        loc: {
          start: {
            line: 523,
            column: 4
          },
          end: {
            line: 531,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 523,
            column: 4
          },
          end: {
            line: 531,
            column: 5
          }
        }, {
          start: {
            line: 525,
            column: 11
          },
          end: {
            line: 531,
            column: 5
          }
        }],
        line: 523
      },
      "25": {
        loc: {
          start: {
            line: 523,
            column: 8
          },
          end: {
            line: 523,
            column: 26
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 523,
            column: 8
          },
          end: {
            line: 523,
            column: 15
          }
        }, {
          start: {
            line: 523,
            column: 19
          },
          end: {
            line: 523,
            column: 26
          }
        }],
        line: 523
      },
      "26": {
        loc: {
          start: {
            line: 533,
            column: 4
          },
          end: {
            line: 535,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 533,
            column: 4
          },
          end: {
            line: 535,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 533
      },
      "27": {
        loc: {
          start: {
            line: 533,
            column: 8
          },
          end: {
            line: 533,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 533,
            column: 8
          },
          end: {
            line: 533,
            column: 25
          }
        }, {
          start: {
            line: 533,
            column: 29
          },
          end: {
            line: 533,
            column: 46
          }
        }],
        line: 533
      },
      "28": {
        loc: {
          start: {
            line: 542,
            column: 2
          },
          end: {
            line: 610,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 543,
            column: 4
          },
          end: {
            line: 600,
            column: 5
          }
        }, {
          start: {
            line: 601,
            column: 4
          },
          end: {
            line: 606,
            column: 5
          }
        }, {
          start: {
            line: 607,
            column: 4
          },
          end: {
            line: 609,
            column: 5
          }
        }],
        line: 542
      },
      "29": {
        loc: {
          start: {
            line: 545,
            column: 6
          },
          end: {
            line: 598,
            column: 7
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 546,
            column: 8
          },
          end: {
            line: 550,
            column: 9
          }
        }, {
          start: {
            line: 551,
            column: 8
          },
          end: {
            line: 566,
            column: 9
          }
        }, {
          start: {
            line: 567,
            column: 8
          },
          end: {
            line: 572,
            column: 9
          }
        }, {
          start: {
            line: 573,
            column: 8
          },
          end: {
            line: 578,
            column: 9
          }
        }, {
          start: {
            line: 579,
            column: 8
          },
          end: {
            line: 586,
            column: 9
          }
        }, {
          start: {
            line: 587,
            column: 8
          },
          end: {
            line: 594,
            column: 9
          }
        }, {
          start: {
            line: 595,
            column: 8
          },
          end: {
            line: 597,
            column: 9
          }
        }],
        line: 545
      },
      "30": {
        loc: {
          start: {
            line: 557,
            column: 10
          },
          end: {
            line: 564,
            column: 11
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 558,
            column: 12
          },
          end: {
            line: 560,
            column: 20
          }
        }, {
          start: {
            line: 561,
            column: 12
          },
          end: {
            line: 563,
            column: 20
          }
        }],
        line: 557
      },
      "31": {
        loc: {
          start: {
            line: 615,
            column: 2
          },
          end: {
            line: 633,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 616,
            column: 4
          },
          end: {
            line: 621,
            column: 5
          }
        }, {
          start: {
            line: 622,
            column: 4
          },
          end: {
            line: 625,
            column: 5
          }
        }, {
          start: {
            line: 626,
            column: 4
          },
          end: {
            line: 629,
            column: 5
          }
        }, {
          start: {
            line: 630,
            column: 4
          },
          end: {
            line: 632,
            column: 5
          }
        }],
        line: 615
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0,
      "107": 0,
      "108": 0,
      "109": 0,
      "110": 0,
      "111": 0,
      "112": 0,
      "113": 0,
      "114": 0,
      "115": 0,
      "116": 0,
      "117": 0,
      "118": 0,
      "119": 0,
      "120": 0,
      "121": 0,
      "122": 0,
      "123": 0,
      "124": 0,
      "125": 0,
      "126": 0,
      "127": 0,
      "128": 0,
      "129": 0,
      "130": 0,
      "131": 0,
      "132": 0,
      "133": 0,
      "134": 0,
      "135": 0,
      "136": 0,
      "137": 0,
      "138": 0,
      "139": 0,
      "140": 0,
      "141": 0,
      "142": 0,
      "143": 0,
      "144": 0,
      "145": 0,
      "146": 0,
      "147": 0,
      "148": 0,
      "149": 0,
      "150": 0,
      "151": 0,
      "152": 0,
      "153": 0,
      "154": 0,
      "155": 0,
      "156": 0,
      "157": 0,
      "158": 0,
      "159": 0,
      "160": 0,
      "161": 0,
      "162": 0,
      "163": 0,
      "164": 0,
      "165": 0,
      "166": 0,
      "167": 0,
      "168": 0,
      "169": 0,
      "170": 0,
      "171": 0,
      "172": 0,
      "173": 0,
      "174": 0,
      "175": 0,
      "176": 0,
      "177": 0,
      "178": 0,
      "179": 0,
      "180": 0,
      "181": 0,
      "182": 0,
      "183": 0,
      "184": 0,
      "185": 0,
      "186": 0,
      "187": 0,
      "188": 0,
      "189": 0,
      "190": 0,
      "191": 0,
      "192": 0,
      "193": 0,
      "194": 0,
      "195": 0,
      "196": 0,
      "197": 0,
      "198": 0,
      "199": 0,
      "200": 0,
      "201": 0,
      "202": 0,
      "203": 0,
      "204": 0,
      "205": 0,
      "206": 0,
      "207": 0,
      "208": 0,
      "209": 0,
      "210": 0,
      "211": 0,
      "212": 0,
      "213": 0,
      "214": 0,
      "215": 0,
      "216": 0,
      "217": 0,
      "218": 0,
      "219": 0,
      "220": 0,
      "221": 0,
      "222": 0,
      "223": 0,
      "224": 0,
      "225": 0,
      "226": 0,
      "227": 0,
      "228": 0,
      "229": 0,
      "230": 0,
      "231": 0,
      "232": 0,
      "233": 0,
      "234": 0,
      "235": 0,
      "236": 0,
      "237": 0,
      "238": 0,
      "239": 0,
      "240": 0,
      "241": 0,
      "242": 0,
      "243": 0,
      "244": 0,
      "245": 0,
      "246": 0,
      "247": 0,
      "248": 0,
      "249": 0,
      "250": 0,
      "251": 0,
      "252": 0,
      "253": 0,
      "254": 0,
      "255": 0,
      "256": 0,
      "257": 0,
      "258": 0,
      "259": 0,
      "260": 0,
      "261": 0,
      "262": 0,
      "263": 0,
      "264": 0,
      "265": 0,
      "266": 0,
      "267": 0,
      "268": 0,
      "269": 0,
      "270": 0,
      "271": 0,
      "272": 0,
      "273": 0,
      "274": 0,
      "275": 0,
      "276": 0,
      "277": 0,
      "278": 0,
      "279": 0,
      "280": 0,
      "281": 0,
      "282": 0,
      "283": 0,
      "284": 0,
      "285": 0,
      "286": 0,
      "287": 0,
      "288": 0,
      "289": 0,
      "290": 0,
      "291": 0,
      "292": 0,
      "293": 0,
      "294": 0,
      "295": 0,
      "296": 0,
      "297": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0, 0, 0, 0, 0, 0],
      "18": [0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0, 0, 0],
      "22": [0, 0, 0],
      "23": [0, 0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0],
      "28": [0, 0, 0],
      "29": [0, 0, 0, 0, 0, 0, 0],
      "30": [0, 0],
      "31": [0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b408bbd060252bb41b9e2854cd50812cefc40e7c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2bzd75cz6h = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2bzd75cz6h();
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* eslint-disable no-bitwise */
var ONE = (cov_2bzd75cz6h().s[0]++, 10000000);
var MAX_INT64 = (cov_2bzd75cz6h().s[1]++, '9223372036854775807');

/**
 * When set using `{@link Operation.setOptions}` option, requires the issuing
 * account to give other accounts permission before they can hold the issuing
 * account’s credit.
 *
 * @constant
 * @see [Account flags](https://developers.stellar.org/docs/glossary/accounts/#flags)
 */
var AuthRequiredFlag = exports.AuthRequiredFlag = (cov_2bzd75cz6h().s[2]++, 1 << 0);
/**
 * When set using `{@link Operation.setOptions}` option, allows the issuing
 * account to revoke its credit held by other accounts.
 *
 * @constant
 * @see [Account flags](https://developers.stellar.org/docs/glossary/accounts/#flags)
 */
var AuthRevocableFlag = exports.AuthRevocableFlag = (cov_2bzd75cz6h().s[3]++, 1 << 1);
/**
 * When set using `{@link Operation.setOptions}` option, then none of the
 * authorization flags can be set and the account can never be deleted.
 *
 * @constant
 * @see [Account flags](https://developers.stellar.org/docs/glossary/accounts/#flags)
 */
var AuthImmutableFlag = exports.AuthImmutableFlag = (cov_2bzd75cz6h().s[4]++, 1 << 2);

/**
 * When set using `{@link Operation.setOptions}` option, then any trustlines
 * created by this account can have a ClawbackOp operation submitted for the
 * corresponding asset.
 *
 * @constant
 * @see [Account flags](https://developers.stellar.org/docs/glossary/accounts/#flags)
 */
var AuthClawbackEnabledFlag = exports.AuthClawbackEnabledFlag = (cov_2bzd75cz6h().s[5]++, 1 << 3);

/**
 * `Operation` class represents
 * [operations](https://developers.stellar.org/docs/glossary/operations/) in
 * Stellar network.
 *
 * Use one of static methods to create operations:
 * * `{@link Operation.createAccount}`
 * * `{@link Operation.payment}`
 * * `{@link Operation.pathPaymentStrictReceive}`
 * * `{@link Operation.pathPaymentStrictSend}`
 * * `{@link Operation.manageSellOffer}`
 * * `{@link Operation.manageBuyOffer}`
 * * `{@link Operation.createPassiveSellOffer}`
 * * `{@link Operation.setOptions}`
 * * `{@link Operation.changeTrust}`
 * * `{@link Operation.allowTrust}`
 * * `{@link Operation.accountMerge}`
 * * `{@link Operation.inflation}`
 * * `{@link Operation.manageData}`
 * * `{@link Operation.bumpSequence}`
 * * `{@link Operation.createClaimableBalance}`
 * * `{@link Operation.claimClaimableBalance}`
 * * `{@link Operation.beginSponsoringFutureReserves}`
 * * `{@link Operation.endSponsoringFutureReserves}`
 * * `{@link Operation.revokeAccountSponsorship}`
 * * `{@link Operation.revokeTrustlineSponsorship}`
 * * `{@link Operation.revokeOfferSponsorship}`
 * * `{@link Operation.revokeDataSponsorship}`
 * * `{@link Operation.revokeClaimableBalanceSponsorship}`
 * * `{@link Operation.revokeLiquidityPoolSponsorship}`
 * * `{@link Operation.revokeSignerSponsorship}`
 * * `{@link Operation.clawback}`
 * * `{@link Operation.clawbackClaimableBalance}`
 * * `{@link Operation.setTrustLineFlags}`
 * * `{@link Operation.liquidityPoolDeposit}`
 * * `{@link Operation.liquidityPoolWithdraw}`
 * * `{@link Operation.invokeHostFunction}`
 * * `{@link Operation.extendFootprintTtlOp}`
 * * `{@link Operation.restoreFootprint}`
 *
 * @class Operation
 */
var Operation = exports.Operation = /*#__PURE__*/function () {
  function Operation() {
    _classCallCheck(this, Operation);
  }
  return _createClass(Operation, null, [{
    key: "setSourceAccount",
    value: function setSourceAccount(opAttributes, opts) {
      cov_2bzd75cz6h().f[0]++;
      cov_2bzd75cz6h().s[6]++;
      if (opts.source) {
        cov_2bzd75cz6h().b[0][0]++;
        cov_2bzd75cz6h().s[7]++;
        try {
          cov_2bzd75cz6h().s[8]++;
          opAttributes.sourceAccount = (0, _decode_encode_muxed_account.decodeAddressToMuxedAccount)(opts.source);
        } catch (e) {
          cov_2bzd75cz6h().s[9]++;
          throw new Error('Source address is invalid');
        }
      } else {
        cov_2bzd75cz6h().b[0][1]++;
      }
    }

    /**
     * Deconstructs the raw XDR operation object into the structured object that
     * was used to create the operation (i.e. the `opts` parameter to most ops).
     *
     * @param {xdr.Operation}   operation - An XDR Operation.
     * @return {Operation}
     */
  }, {
    key: "fromXDRObject",
    value: function fromXDRObject(operation) {
      cov_2bzd75cz6h().f[1]++;
      var result = (cov_2bzd75cz6h().s[10]++, {});
      cov_2bzd75cz6h().s[11]++;
      if (operation.sourceAccount()) {
        cov_2bzd75cz6h().b[1][0]++;
        cov_2bzd75cz6h().s[12]++;
        result.source = (0, _decode_encode_muxed_account.encodeMuxedAccountToAddress)(operation.sourceAccount());
      } else {
        cov_2bzd75cz6h().b[1][1]++;
      }
      var attrs = (cov_2bzd75cz6h().s[13]++, operation.body().value());
      var operationName = (cov_2bzd75cz6h().s[14]++, operation.body()["switch"]().name);
      cov_2bzd75cz6h().s[15]++;
      switch (operationName) {
        case 'createAccount':
          cov_2bzd75cz6h().b[2][0]++;
          {
            cov_2bzd75cz6h().s[16]++;
            result.type = 'createAccount';
            cov_2bzd75cz6h().s[17]++;
            result.destination = accountIdtoAddress(attrs.destination());
            cov_2bzd75cz6h().s[18]++;
            result.startingBalance = this._fromXDRAmount(attrs.startingBalance());
            cov_2bzd75cz6h().s[19]++;
            break;
          }
        case 'payment':
          cov_2bzd75cz6h().b[2][1]++;
          {
            cov_2bzd75cz6h().s[20]++;
            result.type = 'payment';
            cov_2bzd75cz6h().s[21]++;
            result.destination = (0, _decode_encode_muxed_account.encodeMuxedAccountToAddress)(attrs.destination());
            cov_2bzd75cz6h().s[22]++;
            result.asset = _asset.Asset.fromOperation(attrs.asset());
            cov_2bzd75cz6h().s[23]++;
            result.amount = this._fromXDRAmount(attrs.amount());
            cov_2bzd75cz6h().s[24]++;
            break;
          }
        case 'pathPaymentStrictReceive':
          cov_2bzd75cz6h().b[2][2]++;
          {
            cov_2bzd75cz6h().s[25]++;
            result.type = 'pathPaymentStrictReceive';
            cov_2bzd75cz6h().s[26]++;
            result.sendAsset = _asset.Asset.fromOperation(attrs.sendAsset());
            cov_2bzd75cz6h().s[27]++;
            result.sendMax = this._fromXDRAmount(attrs.sendMax());
            cov_2bzd75cz6h().s[28]++;
            result.destination = (0, _decode_encode_muxed_account.encodeMuxedAccountToAddress)(attrs.destination());
            cov_2bzd75cz6h().s[29]++;
            result.destAsset = _asset.Asset.fromOperation(attrs.destAsset());
            cov_2bzd75cz6h().s[30]++;
            result.destAmount = this._fromXDRAmount(attrs.destAmount());
            cov_2bzd75cz6h().s[31]++;
            result.path = [];
            var path = (cov_2bzd75cz6h().s[32]++, attrs.path());

            // note that Object.values isn't supported by node 6!
            cov_2bzd75cz6h().s[33]++;
            Object.keys(path).forEach(function (pathKey) {
              cov_2bzd75cz6h().f[2]++;
              cov_2bzd75cz6h().s[34]++;
              result.path.push(_asset.Asset.fromOperation(path[pathKey]));
            });
            cov_2bzd75cz6h().s[35]++;
            break;
          }
        case 'pathPaymentStrictSend':
          cov_2bzd75cz6h().b[2][3]++;
          {
            cov_2bzd75cz6h().s[36]++;
            result.type = 'pathPaymentStrictSend';
            cov_2bzd75cz6h().s[37]++;
            result.sendAsset = _asset.Asset.fromOperation(attrs.sendAsset());
            cov_2bzd75cz6h().s[38]++;
            result.sendAmount = this._fromXDRAmount(attrs.sendAmount());
            cov_2bzd75cz6h().s[39]++;
            result.destination = (0, _decode_encode_muxed_account.encodeMuxedAccountToAddress)(attrs.destination());
            cov_2bzd75cz6h().s[40]++;
            result.destAsset = _asset.Asset.fromOperation(attrs.destAsset());
            cov_2bzd75cz6h().s[41]++;
            result.destMin = this._fromXDRAmount(attrs.destMin());
            cov_2bzd75cz6h().s[42]++;
            result.path = [];
            var _path = (cov_2bzd75cz6h().s[43]++, attrs.path());

            // note that Object.values isn't supported by node 6!
            cov_2bzd75cz6h().s[44]++;
            Object.keys(_path).forEach(function (pathKey) {
              cov_2bzd75cz6h().f[3]++;
              cov_2bzd75cz6h().s[45]++;
              result.path.push(_asset.Asset.fromOperation(_path[pathKey]));
            });
            cov_2bzd75cz6h().s[46]++;
            break;
          }
        case 'changeTrust':
          cov_2bzd75cz6h().b[2][4]++;
          {
            cov_2bzd75cz6h().s[47]++;
            result.type = 'changeTrust';
            cov_2bzd75cz6h().s[48]++;
            switch (attrs.line()["switch"]()) {
              case _xdr["default"].AssetType.assetTypePoolShare():
                cov_2bzd75cz6h().b[3][0]++;
                cov_2bzd75cz6h().s[49]++;
                result.line = _liquidity_pool_asset.LiquidityPoolAsset.fromOperation(attrs.line());
                cov_2bzd75cz6h().s[50]++;
                break;
              default:
                cov_2bzd75cz6h().b[3][1]++;
                cov_2bzd75cz6h().s[51]++;
                result.line = _asset.Asset.fromOperation(attrs.line());
                cov_2bzd75cz6h().s[52]++;
                break;
            }
            cov_2bzd75cz6h().s[53]++;
            result.limit = this._fromXDRAmount(attrs.limit());
            cov_2bzd75cz6h().s[54]++;
            break;
          }
        case 'allowTrust':
          cov_2bzd75cz6h().b[2][5]++;
          {
            cov_2bzd75cz6h().s[55]++;
            result.type = 'allowTrust';
            cov_2bzd75cz6h().s[56]++;
            result.trustor = accountIdtoAddress(attrs.trustor());
            cov_2bzd75cz6h().s[57]++;
            result.assetCode = attrs.asset().value().toString();
            cov_2bzd75cz6h().s[58]++;
            result.assetCode = (0, _util.trimEnd)(result.assetCode, '\0');
            cov_2bzd75cz6h().s[59]++;
            result.authorize = attrs.authorize();
            cov_2bzd75cz6h().s[60]++;
            break;
          }
        case 'setOptions':
          cov_2bzd75cz6h().b[2][6]++;
          {
            cov_2bzd75cz6h().s[61]++;
            result.type = 'setOptions';
            cov_2bzd75cz6h().s[62]++;
            if (attrs.inflationDest()) {
              cov_2bzd75cz6h().b[4][0]++;
              cov_2bzd75cz6h().s[63]++;
              result.inflationDest = accountIdtoAddress(attrs.inflationDest());
            } else {
              cov_2bzd75cz6h().b[4][1]++;
            }
            cov_2bzd75cz6h().s[64]++;
            result.clearFlags = attrs.clearFlags();
            cov_2bzd75cz6h().s[65]++;
            result.setFlags = attrs.setFlags();
            cov_2bzd75cz6h().s[66]++;
            result.masterWeight = attrs.masterWeight();
            cov_2bzd75cz6h().s[67]++;
            result.lowThreshold = attrs.lowThreshold();
            cov_2bzd75cz6h().s[68]++;
            result.medThreshold = attrs.medThreshold();
            cov_2bzd75cz6h().s[69]++;
            result.highThreshold = attrs.highThreshold();
            // home_domain is checked by iscntrl in stellar-core
            cov_2bzd75cz6h().s[70]++;
            result.homeDomain = attrs.homeDomain() !== undefined ? (cov_2bzd75cz6h().b[5][0]++, attrs.homeDomain().toString('ascii')) : (cov_2bzd75cz6h().b[5][1]++, undefined);
            cov_2bzd75cz6h().s[71]++;
            if (attrs.signer()) {
              cov_2bzd75cz6h().b[6][0]++;
              var signer = (cov_2bzd75cz6h().s[72]++, {});
              var arm = (cov_2bzd75cz6h().s[73]++, attrs.signer().key().arm());
              cov_2bzd75cz6h().s[74]++;
              if (arm === 'dilithium2') {
                cov_2bzd75cz6h().b[7][0]++;
                cov_2bzd75cz6h().s[75]++;
                signer.dilithium2PublicKey = accountIdtoAddress(attrs.signer().key());
              } else {
                cov_2bzd75cz6h().b[7][1]++;
                cov_2bzd75cz6h().s[76]++;
                if (arm === 'preAuthTx') {
                  cov_2bzd75cz6h().b[8][0]++;
                  cov_2bzd75cz6h().s[77]++;
                  signer.preAuthTx = attrs.signer().key().preAuthTx();
                } else {
                  cov_2bzd75cz6h().b[8][1]++;
                  cov_2bzd75cz6h().s[78]++;
                  if (arm === 'hashX') {
                    cov_2bzd75cz6h().b[9][0]++;
                    cov_2bzd75cz6h().s[79]++;
                    signer.sha256Hash = attrs.signer().key().hashX();
                  } else {
                    cov_2bzd75cz6h().b[9][1]++;
                    cov_2bzd75cz6h().s[80]++;
                    if (arm === 'dilithium2SignedPayload') {
                      cov_2bzd75cz6h().b[10][0]++;
                      var signedPayload = (cov_2bzd75cz6h().s[81]++, attrs.signer().key().dilithium2SignedPayload());
                      cov_2bzd75cz6h().s[82]++;
                      signer.dilithium2SignedPayload = _strkey.StrKey.encodeSignedPayload(signedPayload.toXDR());
                    } else {
                      cov_2bzd75cz6h().b[10][1]++;
                    }
                  }
                }
              }
              cov_2bzd75cz6h().s[83]++;
              signer.weight = attrs.signer().weight();
              cov_2bzd75cz6h().s[84]++;
              result.signer = signer;
            } else {
              cov_2bzd75cz6h().b[6][1]++;
            }
            cov_2bzd75cz6h().s[85]++;
            break;
          }
        // the next case intentionally falls through!
        case 'manageOffer':
          cov_2bzd75cz6h().b[2][7]++;
        case 'manageSellOffer':
          cov_2bzd75cz6h().b[2][8]++;
          {
            cov_2bzd75cz6h().s[86]++;
            result.type = 'manageSellOffer';
            cov_2bzd75cz6h().s[87]++;
            result.selling = _asset.Asset.fromOperation(attrs.selling());
            cov_2bzd75cz6h().s[88]++;
            result.buying = _asset.Asset.fromOperation(attrs.buying());
            cov_2bzd75cz6h().s[89]++;
            result.amount = this._fromXDRAmount(attrs.amount());
            cov_2bzd75cz6h().s[90]++;
            result.price = this._fromXDRPrice(attrs.price());
            cov_2bzd75cz6h().s[91]++;
            result.offerId = attrs.offerId().toString();
            cov_2bzd75cz6h().s[92]++;
            break;
          }
        case 'manageBuyOffer':
          cov_2bzd75cz6h().b[2][9]++;
          {
            cov_2bzd75cz6h().s[93]++;
            result.type = 'manageBuyOffer';
            cov_2bzd75cz6h().s[94]++;
            result.selling = _asset.Asset.fromOperation(attrs.selling());
            cov_2bzd75cz6h().s[95]++;
            result.buying = _asset.Asset.fromOperation(attrs.buying());
            cov_2bzd75cz6h().s[96]++;
            result.buyAmount = this._fromXDRAmount(attrs.buyAmount());
            cov_2bzd75cz6h().s[97]++;
            result.price = this._fromXDRPrice(attrs.price());
            cov_2bzd75cz6h().s[98]++;
            result.offerId = attrs.offerId().toString();
            cov_2bzd75cz6h().s[99]++;
            break;
          }
        // the next case intentionally falls through!
        case 'createPassiveOffer':
          cov_2bzd75cz6h().b[2][10]++;
        case 'createPassiveSellOffer':
          cov_2bzd75cz6h().b[2][11]++;
          {
            cov_2bzd75cz6h().s[100]++;
            result.type = 'createPassiveSellOffer';
            cov_2bzd75cz6h().s[101]++;
            result.selling = _asset.Asset.fromOperation(attrs.selling());
            cov_2bzd75cz6h().s[102]++;
            result.buying = _asset.Asset.fromOperation(attrs.buying());
            cov_2bzd75cz6h().s[103]++;
            result.amount = this._fromXDRAmount(attrs.amount());
            cov_2bzd75cz6h().s[104]++;
            result.price = this._fromXDRPrice(attrs.price());
            cov_2bzd75cz6h().s[105]++;
            break;
          }
        case 'accountMerge':
          cov_2bzd75cz6h().b[2][12]++;
          {
            cov_2bzd75cz6h().s[106]++;
            result.type = 'accountMerge';
            cov_2bzd75cz6h().s[107]++;
            result.destination = (0, _decode_encode_muxed_account.encodeMuxedAccountToAddress)(attrs);
            cov_2bzd75cz6h().s[108]++;
            break;
          }
        case 'manageData':
          cov_2bzd75cz6h().b[2][13]++;
          {
            cov_2bzd75cz6h().s[109]++;
            result.type = 'manageData';
            // manage_data.name is checked by iscntrl in stellar-core
            cov_2bzd75cz6h().s[110]++;
            result.name = attrs.dataName().toString('ascii');
            cov_2bzd75cz6h().s[111]++;
            result.value = attrs.dataValue();
            cov_2bzd75cz6h().s[112]++;
            break;
          }
        case 'inflation':
          cov_2bzd75cz6h().b[2][14]++;
          {
            cov_2bzd75cz6h().s[113]++;
            result.type = 'inflation';
            cov_2bzd75cz6h().s[114]++;
            break;
          }
        case 'bumpSequence':
          cov_2bzd75cz6h().b[2][15]++;
          {
            cov_2bzd75cz6h().s[115]++;
            result.type = 'bumpSequence';
            cov_2bzd75cz6h().s[116]++;
            result.bumpTo = attrs.bumpTo().toString();
            cov_2bzd75cz6h().s[117]++;
            break;
          }
        case 'createClaimableBalance':
          cov_2bzd75cz6h().b[2][16]++;
          {
            cov_2bzd75cz6h().s[118]++;
            result.type = 'createClaimableBalance';
            cov_2bzd75cz6h().s[119]++;
            result.asset = _asset.Asset.fromOperation(attrs.asset());
            cov_2bzd75cz6h().s[120]++;
            result.amount = this._fromXDRAmount(attrs.amount());
            cov_2bzd75cz6h().s[121]++;
            result.claimants = [];
            cov_2bzd75cz6h().s[122]++;
            attrs.claimants().forEach(function (claimant) {
              cov_2bzd75cz6h().f[4]++;
              cov_2bzd75cz6h().s[123]++;
              result.claimants.push(_claimant.Claimant.fromXDR(claimant));
            });
            cov_2bzd75cz6h().s[124]++;
            break;
          }
        case 'claimClaimableBalance':
          cov_2bzd75cz6h().b[2][17]++;
          {
            cov_2bzd75cz6h().s[125]++;
            result.type = 'claimClaimableBalance';
            cov_2bzd75cz6h().s[126]++;
            result.balanceId = attrs.toXDR('hex');
            cov_2bzd75cz6h().s[127]++;
            break;
          }
        case 'beginSponsoringFutureReserves':
          cov_2bzd75cz6h().b[2][18]++;
          {
            cov_2bzd75cz6h().s[128]++;
            result.type = 'beginSponsoringFutureReserves';
            cov_2bzd75cz6h().s[129]++;
            result.sponsoredId = accountIdtoAddress(attrs.sponsoredId());
            cov_2bzd75cz6h().s[130]++;
            break;
          }
        case 'endSponsoringFutureReserves':
          cov_2bzd75cz6h().b[2][19]++;
          {
            cov_2bzd75cz6h().s[131]++;
            result.type = 'endSponsoringFutureReserves';
            cov_2bzd75cz6h().s[132]++;
            break;
          }
        case 'revokeSponsorship':
          cov_2bzd75cz6h().b[2][20]++;
          {
            cov_2bzd75cz6h().s[133]++;
            extractRevokeSponshipDetails(attrs, result);
            cov_2bzd75cz6h().s[134]++;
            break;
          }
        case 'clawback':
          cov_2bzd75cz6h().b[2][21]++;
          {
            cov_2bzd75cz6h().s[135]++;
            result.type = 'clawback';
            cov_2bzd75cz6h().s[136]++;
            result.amount = this._fromXDRAmount(attrs.amount());
            cov_2bzd75cz6h().s[137]++;
            result.from = (0, _decode_encode_muxed_account.encodeMuxedAccountToAddress)(attrs.from());
            cov_2bzd75cz6h().s[138]++;
            result.asset = _asset.Asset.fromOperation(attrs.asset());
            cov_2bzd75cz6h().s[139]++;
            break;
          }
        case 'clawbackClaimableBalance':
          cov_2bzd75cz6h().b[2][22]++;
          {
            cov_2bzd75cz6h().s[140]++;
            result.type = 'clawbackClaimableBalance';
            cov_2bzd75cz6h().s[141]++;
            result.balanceId = attrs.toXDR('hex');
            cov_2bzd75cz6h().s[142]++;
            break;
          }
        case 'setTrustLineFlags':
          cov_2bzd75cz6h().b[2][23]++;
          {
            cov_2bzd75cz6h().s[143]++;
            result.type = 'setTrustLineFlags';
            cov_2bzd75cz6h().s[144]++;
            result.asset = _asset.Asset.fromOperation(attrs.asset());
            cov_2bzd75cz6h().s[145]++;
            result.trustor = accountIdtoAddress(attrs.trustor());

            // Convert from the integer-bitwised flag into a sensible object that
            // indicates true/false for each flag that's on/off.
            var clears = (cov_2bzd75cz6h().s[146]++, attrs.clearFlags());
            var sets = (cov_2bzd75cz6h().s[147]++, attrs.setFlags());
            var mapping = (cov_2bzd75cz6h().s[148]++, {
              authorized: _xdr["default"].TrustLineFlags.authorizedFlag(),
              authorizedToMaintainLiabilities: _xdr["default"].TrustLineFlags.authorizedToMaintainLiabilitiesFlag(),
              clawbackEnabled: _xdr["default"].TrustLineFlags.trustlineClawbackEnabledFlag()
            });
            cov_2bzd75cz6h().s[149]++;
            var getFlagValue = function getFlagValue(key) {
              cov_2bzd75cz6h().f[5]++;
              var bit = (cov_2bzd75cz6h().s[150]++, mapping[key].value);
              cov_2bzd75cz6h().s[151]++;
              if (sets & bit) {
                cov_2bzd75cz6h().b[11][0]++;
                cov_2bzd75cz6h().s[152]++;
                return true;
              } else {
                cov_2bzd75cz6h().b[11][1]++;
              }
              cov_2bzd75cz6h().s[153]++;
              if (clears & bit) {
                cov_2bzd75cz6h().b[12][0]++;
                cov_2bzd75cz6h().s[154]++;
                return false;
              } else {
                cov_2bzd75cz6h().b[12][1]++;
              }
              cov_2bzd75cz6h().s[155]++;
              return undefined;
            };
            cov_2bzd75cz6h().s[156]++;
            result.flags = {};
            cov_2bzd75cz6h().s[157]++;
            Object.keys(mapping).forEach(function (flagName) {
              cov_2bzd75cz6h().f[6]++;
              cov_2bzd75cz6h().s[158]++;
              result.flags[flagName] = getFlagValue(flagName);
            });
            cov_2bzd75cz6h().s[159]++;
            break;
          }
        case 'liquidityPoolDeposit':
          cov_2bzd75cz6h().b[2][24]++;
          {
            cov_2bzd75cz6h().s[160]++;
            result.type = 'liquidityPoolDeposit';
            cov_2bzd75cz6h().s[161]++;
            result.liquidityPoolId = attrs.liquidityPoolId().toString('hex');
            cov_2bzd75cz6h().s[162]++;
            result.maxAmountA = this._fromXDRAmount(attrs.maxAmountA());
            cov_2bzd75cz6h().s[163]++;
            result.maxAmountB = this._fromXDRAmount(attrs.maxAmountB());
            cov_2bzd75cz6h().s[164]++;
            result.minPrice = this._fromXDRPrice(attrs.minPrice());
            cov_2bzd75cz6h().s[165]++;
            result.maxPrice = this._fromXDRPrice(attrs.maxPrice());
            cov_2bzd75cz6h().s[166]++;
            break;
          }
        case 'liquidityPoolWithdraw':
          cov_2bzd75cz6h().b[2][25]++;
          {
            cov_2bzd75cz6h().s[167]++;
            result.type = 'liquidityPoolWithdraw';
            cov_2bzd75cz6h().s[168]++;
            result.liquidityPoolId = attrs.liquidityPoolId().toString('hex');
            cov_2bzd75cz6h().s[169]++;
            result.amount = this._fromXDRAmount(attrs.amount());
            cov_2bzd75cz6h().s[170]++;
            result.minAmountA = this._fromXDRAmount(attrs.minAmountA());
            cov_2bzd75cz6h().s[171]++;
            result.minAmountB = this._fromXDRAmount(attrs.minAmountB());
            cov_2bzd75cz6h().s[172]++;
            break;
          }
        case 'invokeHostFunction':
          cov_2bzd75cz6h().b[2][26]++;
          {
            var _ref;
            cov_2bzd75cz6h().s[173]++;
            result.type = 'invokeHostFunction';
            cov_2bzd75cz6h().s[174]++;
            result.func = attrs.hostFunction();
            cov_2bzd75cz6h().s[175]++;
            result.auth = (_ref = (cov_2bzd75cz6h().b[13][0]++, attrs.auth())) !== null && _ref !== void 0 ? _ref : (cov_2bzd75cz6h().b[13][1]++, []);
            cov_2bzd75cz6h().s[176]++;
            break;
          }
        case 'extendFootprintTtl':
          cov_2bzd75cz6h().b[2][27]++;
          {
            cov_2bzd75cz6h().s[177]++;
            result.type = 'extendFootprintTtl';
            cov_2bzd75cz6h().s[178]++;
            result.extendTo = attrs.extendTo();
            cov_2bzd75cz6h().s[179]++;
            break;
          }
        case 'restoreFootprint':
          cov_2bzd75cz6h().b[2][28]++;
          {
            cov_2bzd75cz6h().s[180]++;
            result.type = 'restoreFootprint';
            cov_2bzd75cz6h().s[181]++;
            break;
          }
        default:
          cov_2bzd75cz6h().b[2][29]++;
          {
            cov_2bzd75cz6h().s[182]++;
            throw new Error("Unknown operation: ".concat(operationName));
          }
      }
      cov_2bzd75cz6h().s[183]++;
      return result;
    }

    /**
     * Validates that a given amount is possible for a Stellar asset.
     *
     * Specifically, this means that the amount is well, a valid number, but also
     * that it is within the int64 range and has no more than 7 decimal levels of
     * precision.
     *
     * Note that while smart contracts allow larger amounts, this is oriented
     * towards validating the standard Stellar operations.
     *
     * @param {string}  value       the amount to validate
     * @param {boolean} allowZero   optionally, whether or not zero is valid (default: no)
     *
     * @returns {boolean}
     */
  }, {
    key: "isValidAmount",
    value: function isValidAmount(value) {
      var allowZero = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_2bzd75cz6h().b[14][0]++, false);
      cov_2bzd75cz6h().f[7]++;
      cov_2bzd75cz6h().s[184]++;
      if (typeof value !== 'string') {
        cov_2bzd75cz6h().b[15][0]++;
        cov_2bzd75cz6h().s[185]++;
        return false;
      } else {
        cov_2bzd75cz6h().b[15][1]++;
      }
      var amount;
      cov_2bzd75cz6h().s[186]++;
      try {
        cov_2bzd75cz6h().s[187]++;
        amount = new _bignumber["default"](value);
      } catch (e) {
        cov_2bzd75cz6h().s[188]++;
        return false;
      }
      cov_2bzd75cz6h().s[189]++;
      if (
      // == 0
      (cov_2bzd75cz6h().b[17][0]++, !allowZero) && (cov_2bzd75cz6h().b[17][1]++, amount.isZero()) || (cov_2bzd75cz6h().b[17][2]++,
      // < 0
      amount.isNegative()) || (cov_2bzd75cz6h().b[17][3]++,
      // > Max value
      amount.times(ONE).gt(new _bignumber["default"](MAX_INT64).toString())) || (cov_2bzd75cz6h().b[17][4]++,
      // Decimal places (max 7)
      amount.decimalPlaces() > 7) || (cov_2bzd75cz6h().b[17][5]++,
      // NaN or Infinity
      amount.isNaN()) || (cov_2bzd75cz6h().b[17][6]++, !amount.isFinite())) {
        cov_2bzd75cz6h().b[16][0]++;
        cov_2bzd75cz6h().s[190]++;
        return false;
      } else {
        cov_2bzd75cz6h().b[16][1]++;
      }
      cov_2bzd75cz6h().s[191]++;
      return true;
    }
  }, {
    key: "constructAmountRequirementsError",
    value: function constructAmountRequirementsError(arg) {
      cov_2bzd75cz6h().f[8]++;
      cov_2bzd75cz6h().s[192]++;
      return "".concat(arg, " argument must be of type String, represent a positive number and have at most 7 digits after the decimal");
    }

    /**
     * Returns value converted to uint32 value or undefined.
     * If `value` is not `Number`, `String` or `Undefined` then throws an error.
     * Used in {@link Operation.setOptions}.
     * @private
     * @param {string} name Name of the property (used in error message only)
     * @param {*} value Value to check
     * @param {function(value, name)} isValidFunction Function to check other constraints (the argument will be a `Number`)
     * @returns {undefined|Number}
     */
  }, {
    key: "_checkUnsignedIntValue",
    value: function _checkUnsignedIntValue(name, value) {
      var isValidFunction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (cov_2bzd75cz6h().b[18][0]++, null);
      cov_2bzd75cz6h().f[9]++;
      cov_2bzd75cz6h().s[193]++;
      if (typeof value === 'undefined') {
        cov_2bzd75cz6h().b[19][0]++;
        cov_2bzd75cz6h().s[194]++;
        return undefined;
      } else {
        cov_2bzd75cz6h().b[19][1]++;
      }
      cov_2bzd75cz6h().s[195]++;
      if (typeof value === 'string') {
        cov_2bzd75cz6h().b[20][0]++;
        cov_2bzd75cz6h().s[196]++;
        value = parseFloat(value);
      } else {
        cov_2bzd75cz6h().b[20][1]++;
      }
      cov_2bzd75cz6h().s[197]++;
      switch (true) {
        case (cov_2bzd75cz6h().b[22][0]++, typeof value !== 'number') || (cov_2bzd75cz6h().b[22][1]++, !Number.isFinite(value)) || (cov_2bzd75cz6h().b[22][2]++, value % 1 !== 0):
          cov_2bzd75cz6h().b[21][0]++;
          cov_2bzd75cz6h().s[198]++;
          throw new Error("".concat(name, " value is invalid"));
        case value < 0:
          cov_2bzd75cz6h().b[21][1]++;
          cov_2bzd75cz6h().s[199]++;
          throw new Error("".concat(name, " value must be unsigned"));
        case (cov_2bzd75cz6h().b[23][0]++, !isValidFunction) || (cov_2bzd75cz6h().b[23][1]++, isValidFunction) && (cov_2bzd75cz6h().b[23][2]++, isValidFunction(value, name)):
          cov_2bzd75cz6h().b[21][2]++;
          cov_2bzd75cz6h().s[200]++;
          return value;
        default:
          cov_2bzd75cz6h().b[21][3]++;
          cov_2bzd75cz6h().s[201]++;
          throw new Error("".concat(name, " value is invalid"));
      }
    }
    /**
     * @private
     * @param {string|BigNumber} value Value
     * @returns {Hyper} XDR amount
     */
  }, {
    key: "_toXDRAmount",
    value: function _toXDRAmount(value) {
      cov_2bzd75cz6h().f[10]++;
      var amount = (cov_2bzd75cz6h().s[202]++, new _bignumber["default"](value).times(ONE));
      cov_2bzd75cz6h().s[203]++;
      return _jsXdr.Hyper.fromString(amount.toString());
    }

    /**
     * @private
     * @param {string|BigNumber} value XDR amount
     * @returns {BigNumber} Number
     */
  }, {
    key: "_fromXDRAmount",
    value: function _fromXDRAmount(value) {
      cov_2bzd75cz6h().f[11]++;
      cov_2bzd75cz6h().s[204]++;
      return new _bignumber["default"](value).div(ONE).toFixed(7);
    }

    /**
     * @private
     * @param {object} price Price object
     * @param {function} price.n numerator function that returns a value
     * @param {function} price.d denominator function that returns a value
     * @returns {BigNumber} Big string
     */
  }, {
    key: "_fromXDRPrice",
    value: function _fromXDRPrice(price) {
      cov_2bzd75cz6h().f[12]++;
      var n = (cov_2bzd75cz6h().s[205]++, new _bignumber["default"](price.n()));
      cov_2bzd75cz6h().s[206]++;
      return n.div(new _bignumber["default"](price.d())).toString();
    }

    /**
     * @private
     * @param {object} price Price object
     * @param {function} price.n numerator function that returns a value
     * @param {function} price.d denominator function that returns a value
     * @returns {object} XDR price object
     */
  }, {
    key: "_toXDRPrice",
    value: function _toXDRPrice(price) {
      cov_2bzd75cz6h().f[13]++;
      var xdrObject;
      cov_2bzd75cz6h().s[207]++;
      if ((cov_2bzd75cz6h().b[25][0]++, price.n) && (cov_2bzd75cz6h().b[25][1]++, price.d)) {
        cov_2bzd75cz6h().b[24][0]++;
        cov_2bzd75cz6h().s[208]++;
        xdrObject = new _xdr["default"].Price(price);
      } else {
        cov_2bzd75cz6h().b[24][1]++;
        var approx = (cov_2bzd75cz6h().s[209]++, (0, _continued_fraction.best_r)(price));
        cov_2bzd75cz6h().s[210]++;
        xdrObject = new _xdr["default"].Price({
          n: parseInt(approx[0], 10),
          d: parseInt(approx[1], 10)
        });
      }
      cov_2bzd75cz6h().s[211]++;
      if ((cov_2bzd75cz6h().b[27][0]++, xdrObject.n() < 0) || (cov_2bzd75cz6h().b[27][1]++, xdrObject.d() < 0)) {
        cov_2bzd75cz6h().b[26][0]++;
        cov_2bzd75cz6h().s[212]++;
        throw new Error('price must be positive');
      } else {
        cov_2bzd75cz6h().b[26][1]++;
      }
      cov_2bzd75cz6h().s[213]++;
      return xdrObject;
    }
  }]);
}();
function extractRevokeSponshipDetails(attrs, result) {
  cov_2bzd75cz6h().f[14]++;
  cov_2bzd75cz6h().s[214]++;
  switch (attrs["switch"]().name) {
    case 'revokeSponsorshipLedgerEntry':
      cov_2bzd75cz6h().b[28][0]++;
      {
        var ledgerKey = (cov_2bzd75cz6h().s[215]++, attrs.ledgerKey());
        cov_2bzd75cz6h().s[216]++;
        switch (ledgerKey["switch"]().name) {
          case _xdr["default"].LedgerEntryType.account().name:
            cov_2bzd75cz6h().b[29][0]++;
            {
              cov_2bzd75cz6h().s[217]++;
              result.type = 'revokeAccountSponsorship';
              cov_2bzd75cz6h().s[218]++;
              result.account = accountIdtoAddress(ledgerKey.account().accountId());
              cov_2bzd75cz6h().s[219]++;
              break;
            }
          case _xdr["default"].LedgerEntryType.trustline().name:
            cov_2bzd75cz6h().b[29][1]++;
            {
              cov_2bzd75cz6h().s[220]++;
              result.type = 'revokeTrustlineSponsorship';
              cov_2bzd75cz6h().s[221]++;
              result.account = accountIdtoAddress(ledgerKey.trustLine().accountId());
              var xdrAsset = (cov_2bzd75cz6h().s[222]++, ledgerKey.trustLine().asset());
              cov_2bzd75cz6h().s[223]++;
              switch (xdrAsset["switch"]()) {
                case _xdr["default"].AssetType.assetTypePoolShare():
                  cov_2bzd75cz6h().b[30][0]++;
                  cov_2bzd75cz6h().s[224]++;
                  result.asset = _liquidity_pool_id.LiquidityPoolId.fromOperation(xdrAsset);
                  cov_2bzd75cz6h().s[225]++;
                  break;
                default:
                  cov_2bzd75cz6h().b[30][1]++;
                  cov_2bzd75cz6h().s[226]++;
                  result.asset = _asset.Asset.fromOperation(xdrAsset);
                  cov_2bzd75cz6h().s[227]++;
                  break;
              }
              cov_2bzd75cz6h().s[228]++;
              break;
            }
          case _xdr["default"].LedgerEntryType.offer().name:
            cov_2bzd75cz6h().b[29][2]++;
            {
              cov_2bzd75cz6h().s[229]++;
              result.type = 'revokeOfferSponsorship';
              cov_2bzd75cz6h().s[230]++;
              result.seller = accountIdtoAddress(ledgerKey.offer().sellerId());
              cov_2bzd75cz6h().s[231]++;
              result.offerId = ledgerKey.offer().offerId().toString();
              cov_2bzd75cz6h().s[232]++;
              break;
            }
          case _xdr["default"].LedgerEntryType.data().name:
            cov_2bzd75cz6h().b[29][3]++;
            {
              cov_2bzd75cz6h().s[233]++;
              result.type = 'revokeDataSponsorship';
              cov_2bzd75cz6h().s[234]++;
              result.account = accountIdtoAddress(ledgerKey.data().accountId());
              cov_2bzd75cz6h().s[235]++;
              result.name = ledgerKey.data().dataName().toString('ascii');
              cov_2bzd75cz6h().s[236]++;
              break;
            }
          case _xdr["default"].LedgerEntryType.claimableBalance().name:
            cov_2bzd75cz6h().b[29][4]++;
            {
              cov_2bzd75cz6h().s[237]++;
              result.type = 'revokeClaimableBalanceSponsorship';
              cov_2bzd75cz6h().s[238]++;
              result.balanceId = ledgerKey.claimableBalance().balanceId().toXDR('hex');
              cov_2bzd75cz6h().s[239]++;
              break;
            }
          case _xdr["default"].LedgerEntryType.liquidityPool().name:
            cov_2bzd75cz6h().b[29][5]++;
            {
              cov_2bzd75cz6h().s[240]++;
              result.type = 'revokeLiquidityPoolSponsorship';
              cov_2bzd75cz6h().s[241]++;
              result.liquidityPoolId = ledgerKey.liquidityPool().liquidityPoolId().toString('hex');
              cov_2bzd75cz6h().s[242]++;
              break;
            }
          default:
            cov_2bzd75cz6h().b[29][6]++;
            {
              cov_2bzd75cz6h().s[243]++;
              throw new Error("Unknown ledgerKey: ".concat(attrs["switch"]().name));
            }
        }
        cov_2bzd75cz6h().s[244]++;
        break;
      }
    case 'revokeSponsorshipSigner':
      cov_2bzd75cz6h().b[28][1]++;
      {
        cov_2bzd75cz6h().s[245]++;
        result.type = 'revokeSignerSponsorship';
        cov_2bzd75cz6h().s[246]++;
        result.account = accountIdtoAddress(attrs.signer().accountId());
        cov_2bzd75cz6h().s[247]++;
        result.signer = convertXDRSignerKeyToObject(attrs.signer().signerKey());
        cov_2bzd75cz6h().s[248]++;
        break;
      }
    default:
      cov_2bzd75cz6h().b[28][2]++;
      {
        cov_2bzd75cz6h().s[249]++;
        throw new Error("Unknown revokeSponsorship: ".concat(attrs["switch"]().name));
      }
  }
}
function convertXDRSignerKeyToObject(signerKey) {
  cov_2bzd75cz6h().f[15]++;
  var attrs = (cov_2bzd75cz6h().s[250]++, {});
  cov_2bzd75cz6h().s[251]++;
  switch (signerKey["switch"]().name) {
    case _xdr["default"].SignerKeyType.signerKeyTypeDilithium2().name:
      cov_2bzd75cz6h().b[31][0]++;
      {
        cov_2bzd75cz6h().s[252]++;
        attrs.dilithium2PublicKey = _strkey.StrKey.encodeDilithium2PublicKey(signerKey.dilithium2());
        cov_2bzd75cz6h().s[253]++;
        break;
      }
    case _xdr["default"].SignerKeyType.signerKeyTypePreAuthTx().name:
      cov_2bzd75cz6h().b[31][1]++;
      {
        cov_2bzd75cz6h().s[254]++;
        attrs.preAuthTx = signerKey.preAuthTx().toString('hex');
        cov_2bzd75cz6h().s[255]++;
        break;
      }
    case _xdr["default"].SignerKeyType.signerKeyTypeHashX().name:
      cov_2bzd75cz6h().b[31][2]++;
      {
        cov_2bzd75cz6h().s[256]++;
        attrs.sha256Hash = signerKey.hashX().toString('hex');
        cov_2bzd75cz6h().s[257]++;
        break;
      }
    default:
      cov_2bzd75cz6h().b[31][3]++;
      {
        cov_2bzd75cz6h().s[258]++;
        throw new Error("Unknown signerKey: ".concat(signerKey["switch"]().name));
      }
  }
  cov_2bzd75cz6h().s[259]++;
  return attrs;
}
function accountIdtoAddress(accountId) {
  cov_2bzd75cz6h().f[16]++;
  cov_2bzd75cz6h().s[260]++;
  return _strkey.StrKey.encodeDilithium2PublicKey(accountId.dilithium2());
}

// Attach all imported operations as static methods on the Operation class
cov_2bzd75cz6h().s[261]++;
Operation.accountMerge = ops.accountMerge;
cov_2bzd75cz6h().s[262]++;
Operation.allowTrust = ops.allowTrust;
cov_2bzd75cz6h().s[263]++;
Operation.bumpSequence = ops.bumpSequence;
cov_2bzd75cz6h().s[264]++;
Operation.changeTrust = ops.changeTrust;
cov_2bzd75cz6h().s[265]++;
Operation.createAccount = ops.createAccount;
cov_2bzd75cz6h().s[266]++;
Operation.createClaimableBalance = ops.createClaimableBalance;
cov_2bzd75cz6h().s[267]++;
Operation.claimClaimableBalance = ops.claimClaimableBalance;
cov_2bzd75cz6h().s[268]++;
Operation.clawbackClaimableBalance = ops.clawbackClaimableBalance;
cov_2bzd75cz6h().s[269]++;
Operation.createPassiveSellOffer = ops.createPassiveSellOffer;
cov_2bzd75cz6h().s[270]++;
Operation.inflation = ops.inflation;
cov_2bzd75cz6h().s[271]++;
Operation.manageData = ops.manageData;
cov_2bzd75cz6h().s[272]++;
Operation.manageSellOffer = ops.manageSellOffer;
cov_2bzd75cz6h().s[273]++;
Operation.manageBuyOffer = ops.manageBuyOffer;
cov_2bzd75cz6h().s[274]++;
Operation.pathPaymentStrictReceive = ops.pathPaymentStrictReceive;
cov_2bzd75cz6h().s[275]++;
Operation.pathPaymentStrictSend = ops.pathPaymentStrictSend;
cov_2bzd75cz6h().s[276]++;
Operation.payment = ops.payment;
cov_2bzd75cz6h().s[277]++;
Operation.setOptions = ops.setOptions;
cov_2bzd75cz6h().s[278]++;
Operation.beginSponsoringFutureReserves = ops.beginSponsoringFutureReserves;
cov_2bzd75cz6h().s[279]++;
Operation.endSponsoringFutureReserves = ops.endSponsoringFutureReserves;
cov_2bzd75cz6h().s[280]++;
Operation.revokeAccountSponsorship = ops.revokeAccountSponsorship;
cov_2bzd75cz6h().s[281]++;
Operation.revokeTrustlineSponsorship = ops.revokeTrustlineSponsorship;
cov_2bzd75cz6h().s[282]++;
Operation.revokeOfferSponsorship = ops.revokeOfferSponsorship;
cov_2bzd75cz6h().s[283]++;
Operation.revokeDataSponsorship = ops.revokeDataSponsorship;
cov_2bzd75cz6h().s[284]++;
Operation.revokeClaimableBalanceSponsorship = ops.revokeClaimableBalanceSponsorship;
cov_2bzd75cz6h().s[285]++;
Operation.revokeLiquidityPoolSponsorship = ops.revokeLiquidityPoolSponsorship;
cov_2bzd75cz6h().s[286]++;
Operation.revokeSignerSponsorship = ops.revokeSignerSponsorship;
cov_2bzd75cz6h().s[287]++;
Operation.clawback = ops.clawback;
cov_2bzd75cz6h().s[288]++;
Operation.setTrustLineFlags = ops.setTrustLineFlags;
cov_2bzd75cz6h().s[289]++;
Operation.liquidityPoolDeposit = ops.liquidityPoolDeposit;
cov_2bzd75cz6h().s[290]++;
Operation.liquidityPoolWithdraw = ops.liquidityPoolWithdraw;
cov_2bzd75cz6h().s[291]++;
Operation.invokeHostFunction = ops.invokeHostFunction;
cov_2bzd75cz6h().s[292]++;
Operation.extendFootprintTtl = ops.extendFootprintTtl;
cov_2bzd75cz6h().s[293]++;
Operation.restoreFootprint = ops.restoreFootprint;

// these are not `xdr.Operation`s directly, but are proxies for complex but
// common versions of `Operation.invokeHostFunction`
cov_2bzd75cz6h().s[294]++;
Operation.createStellarAssetContract = ops.createStellarAssetContract;
cov_2bzd75cz6h().s[295]++;
Operation.invokeContractFunction = ops.invokeContractFunction;
cov_2bzd75cz6h().s[296]++;
Operation.createCustomContract = ops.createCustomContract;
cov_2bzd75cz6h().s[297]++;
Operation.uploadContractWasm = ops.uploadContractWasm;