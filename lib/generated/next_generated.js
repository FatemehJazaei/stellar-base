"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var XDR = _interopRequireWildcard(require("@stellar/js-xdr"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function cov_bo6mr71vg() {
  var path = "/mnt/g/stellar-base/src/generated/next_generated.js";
  var hash = "294d1e122afc8883bea987172a8062d49def474a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/generated/next_generated.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 12
        },
        end: {
          line: 10026,
          column: 2
        }
      },
      "1": {
        start: {
          line: 15,
          column: 23
        },
        end: {
          line: 15,
          column: 27
        }
      },
      "2": {
        start: {
          line: 16,
          column: 26
        },
        end: {
          line: 16,
          column: 30
        }
      },
      "3": {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
          column: 38
        }
      },
      "4": {
        start: {
          line: 33,
          column: 0
        },
        end: {
          line: 36,
          column: 3
        }
      },
      "5": {
        start: {
          line: 49,
          column: 0
        },
        end: {
          line: 54,
          column: 3
        }
      },
      "6": {
        start: {
          line: 66,
          column: 0
        },
        end: {
          line: 70,
          column: 3
        }
      },
      "7": {
        start: {
          line: 85,
          column: 0
        },
        end: {
          line: 92,
          column: 3
        }
      },
      "8": {
        start: {
          line: 106,
          column: 0
        },
        end: {
          line: 112,
          column: 3
        }
      },
      "9": {
        start: {
          line: 124,
          column: 0
        },
        end: {
          line: 128,
          column: 3
        }
      },
      "10": {
        start: {
          line: 165,
          column: 0
        },
        end: {
          line: 180,
          column: 3
        }
      },
      "11": {
        start: {
          line: 224,
          column: 0
        },
        end: {
          line: 228,
          column: 3
        }
      },
      "12": {
        start: {
          line: 239,
          column: 0
        },
        end: {
          line: 242,
          column: 3
        }
      },
      "13": {
        start: {
          line: 254,
          column: 0
        },
        end: {
          line: 258,
          column: 3
        }
      },
      "14": {
        start: {
          line: 265,
          column: 0
        },
        end: {
          line: 265,
          column: 41
        }
      },
      "15": {
        start: {
          line: 272,
          column: 0
        },
        end: {
          line: 272,
          column: 40
        }
      },
      "16": {
        start: {
          line: 279,
          column: 0
        },
        end: {
          line: 279,
          column: 40
        }
      },
      "17": {
        start: {
          line: 286,
          column: 0
        },
        end: {
          line: 286,
          column: 51
        }
      },
      "18": {
        start: {
          line: 293,
          column: 0
        },
        end: {
          line: 293,
          column: 44
        }
      },
      "19": {
        start: {
          line: 300,
          column: 0
        },
        end: {
          line: 300,
          column: 42
        }
      },
      "20": {
        start: {
          line: 307,
          column: 0
        },
        end: {
          line: 307,
          column: 41
        }
      },
      "21": {
        start: {
          line: 314,
          column: 0
        },
        end: {
          line: 314,
          column: 43
        }
      },
      "22": {
        start: {
          line: 327,
          column: 0
        },
        end: {
          line: 332,
          column: 3
        }
      },
      "23": {
        start: {
          line: 348,
          column: 0
        },
        end: {
          line: 359,
          column: 3
        }
      },
      "24": {
        start: {
          line: 370,
          column: 0
        },
        end: {
          line: 373,
          column: 3
        }
      },
      "25": {
        start: {
          line: 384,
          column: 0
        },
        end: {
          line: 387,
          column: 3
        }
      },
      "26": {
        start: {
          line: 406,
          column: 0
        },
        end: {
          line: 418,
          column: 3
        }
      },
      "27": {
        start: {
          line: 429,
          column: 0
        },
        end: {
          line: 432,
          column: 3
        }
      },
      "28": {
        start: {
          line: 443,
          column: 0
        },
        end: {
          line: 446,
          column: 3
        }
      },
      "29": {
        start: {
          line: 459,
          column: 0
        },
        end: {
          line: 464,
          column: 3
        }
      },
      "30": {
        start: {
          line: 483,
          column: 0
        },
        end: {
          line: 494,
          column: 3
        }
      },
      "31": {
        start: {
          line: 505,
          column: 0
        },
        end: {
          line: 508,
          column: 3
        }
      },
      "32": {
        start: {
          line: 531,
          column: 0
        },
        end: {
          line: 536,
          column: 3
        }
      },
      "33": {
        start: {
          line: 543,
          column: 0
        },
        end: {
          line: 543,
          column: 37
        }
      },
      "34": {
        start: {
          line: 550,
          column: 0
        },
        end: {
          line: 550,
          column: 41
        }
      },
      "35": {
        start: {
          line: 557,
          column: 0
        },
        end: {
          line: 557,
          column: 29
        }
      },
      "36": {
        start: {
          line: 564,
          column: 0
        },
        end: {
          line: 564,
          column: 74
        }
      },
      "37": {
        start: {
          line: 582,
          column: 0
        },
        end: {
          line: 586,
          column: 3
        }
      },
      "38": {
        start: {
          line: 599,
          column: 0
        },
        end: {
          line: 609,
          column: 3
        }
      },
      "39": {
        start: {
          line: 630,
          column: 0
        },
        end: {
          line: 635,
          column: 3
        }
      },
      "40": {
        start: {
          line: 648,
          column: 0
        },
        end: {
          line: 658,
          column: 3
        }
      },
      "41": {
        start: {
          line: 677,
          column: 0
        },
        end: {
          line: 680,
          column: 3
        }
      },
      "42": {
        start: {
          line: 693,
          column: 0
        },
        end: {
          line: 703,
          column: 3
        }
      },
      "43": {
        start: {
          line: 737,
          column: 0
        },
        end: {
          line: 748,
          column: 3
        }
      },
      "44": {
        start: {
          line: 765,
          column: 0
        },
        end: {
          line: 769,
          column: 3
        }
      },
      "45": {
        start: {
          line: 776,
          column: 0
        },
        end: {
          line: 776,
          column: 37
        }
      },
      "46": {
        start: {
          line: 783,
          column: 0
        },
        end: {
          line: 783,
          column: 41
        }
      },
      "47": {
        start: {
          line: 790,
          column: 0
        },
        end: {
          line: 790,
          column: 41
        }
      },
      "48": {
        start: {
          line: 800,
          column: 0
        },
        end: {
          line: 802,
          column: 3
        }
      },
      "49": {
        start: {
          line: 824,
          column: 0
        },
        end: {
          line: 838,
          column: 3
        }
      },
      "50": {
        start: {
          line: 849,
          column: 0
        },
        end: {
          line: 857,
          column: 3
        }
      },
      "51": {
        start: {
          line: 874,
          column: 0
        },
        end: {
          line: 877,
          column: 3
        }
      },
      "52": {
        start: {
          line: 890,
          column: 0
        },
        end: {
          line: 900,
          column: 3
        }
      },
      "53": {
        start: {
          line: 919,
          column: 0
        },
        end: {
          line: 922,
          column: 3
        }
      },
      "54": {
        start: {
          line: 947,
          column: 0
        },
        end: {
          line: 957,
          column: 3
        }
      },
      "55": {
        start: {
          line: 995,
          column: 0
        },
        end: {
          line: 1002,
          column: 3
        }
      },
      "56": {
        start: {
          line: 1014,
          column: 0
        },
        end: {
          line: 1016,
          column: 3
        }
      },
      "57": {
        start: {
          line: 1023,
          column: 0
        },
        end: {
          line: 1023,
          column: 38
        }
      },
      "58": {
        start: {
          line: 1034,
          column: 0
        },
        end: {
          line: 1042,
          column: 3
        }
      },
      "59": {
        start: {
          line: 1072,
          column: 0
        },
        end: {
          line: 1081,
          column: 3
        }
      },
      "60": {
        start: {
          line: 1092,
          column: 0
        },
        end: {
          line: 1100,
          column: 3
        }
      },
      "61": {
        start: {
          line: 1120,
          column: 0
        },
        end: {
          line: 1125,
          column: 3
        }
      },
      "62": {
        start: {
          line: 1140,
          column: 0
        },
        end: {
          line: 1147,
          column: 3
        }
      },
      "63": {
        start: {
          line: 1169,
          column: 0
        },
        end: {
          line: 1187,
          column: 3
        }
      },
      "64": {
        start: {
          line: 1197,
          column: 0
        },
        end: {
          line: 1199,
          column: 3
        }
      },
      "65": {
        start: {
          line: 1210,
          column: 0
        },
        end: {
          line: 1213,
          column: 3
        }
      },
      "66": {
        start: {
          line: 1228,
          column: 0
        },
        end: {
          line: 1237,
          column: 3
        }
      },
      "67": {
        start: {
          line: 1247,
          column: 0
        },
        end: {
          line: 1249,
          column: 3
        }
      },
      "68": {
        start: {
          line: 1260,
          column: 0
        },
        end: {
          line: 1269,
          column: 3
        }
      },
      "69": {
        start: {
          line: 1281,
          column: 0
        },
        end: {
          line: 1283,
          column: 3
        }
      },
      "70": {
        start: {
          line: 1290,
          column: 0
        },
        end: {
          line: 1290,
          column: 47
        }
      },
      "71": {
        start: {
          line: 1301,
          column: 0
        },
        end: {
          line: 1309,
          column: 3
        }
      },
      "72": {
        start: {
          line: 1326,
          column: 0
        },
        end: {
          line: 1329,
          column: 3
        }
      },
      "73": {
        start: {
          line: 1342,
          column: 0
        },
        end: {
          line: 1352,
          column: 3
        }
      },
      "74": {
        start: {
          line: 1382,
          column: 0
        },
        end: {
          line: 1388,
          column: 3
        }
      },
      "75": {
        start: {
          line: 1400,
          column: 0
        },
        end: {
          line: 1404,
          column: 3
        }
      },
      "76": {
        start: {
          line: 1420,
          column: 0
        },
        end: {
          line: 1426,
          column: 3
        }
      },
      "77": {
        start: {
          line: 1446,
          column: 0
        },
        end: {
          line: 1455,
          column: 3
        }
      },
      "78": {
        start: {
          line: 1481,
          column: 0
        },
        end: {
          line: 1484,
          column: 3
        }
      },
      "79": {
        start: {
          line: 1494,
          column: 0
        },
        end: {
          line: 1497,
          column: 3
        }
      },
      "80": {
        start: {
          line: 1511,
          column: 0
        },
        end: {
          line: 1517,
          column: 3
        }
      },
      "81": {
        start: {
          line: 1536,
          column: 0
        },
        end: {
          line: 1548,
          column: 3
        }
      },
      "82": {
        start: {
          line: 1559,
          column: 0
        },
        end: {
          line: 1562,
          column: 3
        }
      },
      "83": {
        start: {
          line: 1579,
          column: 0
        },
        end: {
          line: 1589,
          column: 3
        }
      },
      "84": {
        start: {
          line: 1611,
          column: 0
        },
        end: {
          line: 1615,
          column: 3
        }
      },
      "85": {
        start: {
          line: 1626,
          column: 0
        },
        end: {
          line: 1629,
          column: 3
        }
      },
      "86": {
        start: {
          line: 1640,
          column: 0
        },
        end: {
          line: 1648,
          column: 3
        }
      },
      "87": {
        start: {
          line: 1665,
          column: 0
        },
        end: {
          line: 1668,
          column: 3
        }
      },
      "88": {
        start: {
          line: 1697,
          column: 0
        },
        end: {
          line: 1724,
          column: 3
        }
      },
      "89": {
        start: {
          line: 1737,
          column: 0
        },
        end: {
          line: 1747,
          column: 3
        }
      },
      "90": {
        start: {
          line: 1792,
          column: 0
        },
        end: {
          line: 1796,
          column: 3
        }
      },
      "91": {
        start: {
          line: 1806,
          column: 0
        },
        end: {
          line: 1808,
          column: 3
        }
      },
      "92": {
        start: {
          line: 1819,
          column: 0
        },
        end: {
          line: 1822,
          column: 3
        }
      },
      "93": {
        start: {
          line: 1833,
          column: 0
        },
        end: {
          line: 1836,
          column: 3
        }
      },
      "94": {
        start: {
          line: 1847,
          column: 0
        },
        end: {
          line: 1850,
          column: 3
        }
      },
      "95": {
        start: {
          line: 1860,
          column: 0
        },
        end: {
          line: 1862,
          column: 3
        }
      },
      "96": {
        start: {
          line: 1872,
          column: 0
        },
        end: {
          line: 1874,
          column: 3
        }
      },
      "97": {
        start: {
          line: 1886,
          column: 0
        },
        end: {
          line: 1890,
          column: 3
        }
      },
      "98": {
        start: {
          line: 1900,
          column: 0
        },
        end: {
          line: 1902,
          column: 3
        }
      },
      "99": {
        start: {
          line: 1912,
          column: 0
        },
        end: {
          line: 1914,
          column: 3
        }
      },
      "100": {
        start: {
          line: 1925,
          column: 0
        },
        end: {
          line: 1927,
          column: 3
        }
      },
      "101": {
        start: {
          line: 1997,
          column: 0
        },
        end: {
          line: 2024,
          column: 3
        }
      },
      "102": {
        start: {
          line: 2043,
          column: 0
        },
        end: {
          line: 2054,
          column: 3
        }
      },
      "103": {
        start: {
          line: 2061,
          column: 0
        },
        end: {
          line: 2061,
          column: 47
        }
      },
      "104": {
        start: {
          line: 2072,
          column: 0
        },
        end: {
          line: 2075,
          column: 3
        }
      },
      "105": {
        start: {
          line: 2086,
          column: 0
        },
        end: {
          line: 2089,
          column: 3
        }
      },
      "106": {
        start: {
          line: 2102,
          column: 0
        },
        end: {
          line: 2112,
          column: 3
        }
      },
      "107": {
        start: {
          line: 2140,
          column: 0
        },
        end: {
          line: 2145,
          column: 3
        }
      },
      "108": {
        start: {
          line: 2152,
          column: 0
        },
        end: {
          line: 2152,
          column: 43
        }
      },
      "109": {
        start: {
          line: 2164,
          column: 0
        },
        end: {
          line: 2168,
          column: 3
        }
      },
      "110": {
        start: {
          line: 2179,
          column: 0
        },
        end: {
          line: 2187,
          column: 3
        }
      },
      "111": {
        start: {
          line: 2204,
          column: 0
        },
        end: {
          line: 2207,
          column: 3
        }
      },
      "112": {
        start: {
          line: 2220,
          column: 0
        },
        end: {
          line: 2230,
          column: 3
        }
      },
      "113": {
        start: {
          line: 2275,
          column: 0
        },
        end: {
          line: 2291,
          column: 3
        }
      },
      "114": {
        start: {
          line: 2307,
          column: 0
        },
        end: {
          line: 2315,
          column: 3
        }
      },
      "115": {
        start: {
          line: 2325,
          column: 0
        },
        end: {
          line: 2328,
          column: 3
        }
      },
      "116": {
        start: {
          line: 2354,
          column: 0
        },
        end: {
          line: 2375,
          column: 3
        }
      },
      "117": {
        start: {
          line: 2384,
          column: 0
        },
        end: {
          line: 2386,
          column: 3
        }
      },
      "118": {
        start: {
          line: 2401,
          column: 0
        },
        end: {
          line: 2406,
          column: 3
        }
      },
      "119": {
        start: {
          line: 2417,
          column: 0
        },
        end: {
          line: 2425,
          column: 3
        }
      },
      "120": {
        start: {
          line: 2444,
          column: 0
        },
        end: {
          line: 2447,
          column: 3
        }
      },
      "121": {
        start: {
          line: 2464,
          column: 0
        },
        end: {
          line: 2478,
          column: 3
        }
      },
      "122": {
        start: {
          line: 2490,
          column: 0
        },
        end: {
          line: 2492,
          column: 3
        }
      },
      "123": {
        start: {
          line: 2503,
          column: 0
        },
        end: {
          line: 2506,
          column: 3
        }
      },
      "124": {
        start: {
          line: 2521,
          column: 0
        },
        end: {
          line: 2530,
          column: 3
        }
      },
      "125": {
        start: {
          line: 2541,
          column: 0
        },
        end: {
          line: 2550,
          column: 3
        }
      },
      "126": {
        start: {
          line: 2561,
          column: 0
        },
        end: {
          line: 2564,
          column: 3
        }
      },
      "127": {
        start: {
          line: 2575,
          column: 0
        },
        end: {
          line: 2578,
          column: 3
        }
      },
      "128": {
        start: {
          line: 2590,
          column: 0
        },
        end: {
          line: 2599,
          column: 3
        }
      },
      "129": {
        start: {
          line: 2610,
          column: 0
        },
        end: {
          line: 2613,
          column: 3
        }
      },
      "130": {
        start: {
          line: 2623,
          column: 0
        },
        end: {
          line: 2625,
          column: 3
        }
      },
      "131": {
        start: {
          line: 2638,
          column: 0
        },
        end: {
          line: 2648,
          column: 3
        }
      },
      "132": {
        start: {
          line: 2669,
          column: 0
        },
        end: {
          line: 2673,
          column: 3
        }
      },
      "133": {
        start: {
          line: 2684,
          column: 0
        },
        end: {
          line: 2692,
          column: 3
        }
      },
      "134": {
        start: {
          line: 2711,
          column: 0
        },
        end: {
          line: 2715,
          column: 3
        }
      },
      "135": {
        start: {
          line: 2726,
          column: 0
        },
        end: {
          line: 2734,
          column: 3
        }
      },
      "136": {
        start: {
          line: 2753,
          column: 0
        },
        end: {
          line: 2757,
          column: 3
        }
      },
      "137": {
        start: {
          line: 2768,
          column: 0
        },
        end: {
          line: 2771,
          column: 3
        }
      },
      "138": {
        start: {
          line: 2782,
          column: 0
        },
        end: {
          line: 2785,
          column: 3
        }
      },
      "139": {
        start: {
          line: 2796,
          column: 0
        },
        end: {
          line: 2805,
          column: 3
        }
      },
      "140": {
        start: {
          line: 2818,
          column: 0
        },
        end: {
          line: 2823,
          column: 3
        }
      },
      "141": {
        start: {
          line: 2840,
          column: 0
        },
        end: {
          line: 2855,
          column: 3
        }
      },
      "142": {
        start: {
          line: 2862,
          column: 0
        },
        end: {
          line: 2862,
          column: 93
        }
      },
      "143": {
        start: {
          line: 2872,
          column: 0
        },
        end: {
          line: 2874,
          column: 3
        }
      },
      "144": {
        start: {
          line: 2885,
          column: 0
        },
        end: {
          line: 2888,
          column: 3
        }
      },
      "145": {
        start: {
          line: 2902,
          column: 0
        },
        end: {
          line: 2906,
          column: 3
        }
      },
      "146": {
        start: {
          line: 2918,
          column: 0
        },
        end: {
          line: 2922,
          column: 3
        }
      },
      "147": {
        start: {
          line: 2933,
          column: 0
        },
        end: {
          line: 2936,
          column: 3
        }
      },
      "148": {
        start: {
          line: 2951,
          column: 0
        },
        end: {
          line: 2960,
          column: 3
        }
      },
      "149": {
        start: {
          line: 2986,
          column: 0
        },
        end: {
          line: 2991,
          column: 3
        }
      },
      "150": {
        start: {
          line: 3002,
          column: 0
        },
        end: {
          line: 3005,
          column: 3
        }
      },
      "151": {
        start: {
          line: 3044,
          column: 0
        },
        end: {
          line: 3049,
          column: 3
        }
      },
      "152": {
        start: {
          line: 3062,
          column: 0
        },
        end: {
          line: 3072,
          column: 3
        }
      },
      "153": {
        start: {
          line: 3091,
          column: 0
        },
        end: {
          line: 3096,
          column: 3
        }
      },
      "154": {
        start: {
          line: 3114,
          column: 0
        },
        end: {
          line: 3120,
          column: 3
        }
      },
      "155": {
        start: {
          line: 3131,
          column: 0
        },
        end: {
          line: 3134,
          column: 3
        }
      },
      "156": {
        start: {
          line: 3151,
          column: 0
        },
        end: {
          line: 3166,
          column: 3
        }
      },
      "157": {
        start: {
          line: 3178,
          column: 0
        },
        end: {
          line: 3182,
          column: 3
        }
      },
      "158": {
        start: {
          line: 3193,
          column: 0
        },
        end: {
          line: 3196,
          column: 3
        }
      },
      "159": {
        start: {
          line: 3219,
          column: 0
        },
        end: {
          line: 3225,
          column: 3
        }
      },
      "160": {
        start: {
          line: 3236,
          column: 0
        },
        end: {
          line: 3239,
          column: 3
        }
      },
      "161": {
        start: {
          line: 3252,
          column: 0
        },
        end: {
          line: 3262,
          column: 3
        }
      },
      "162": {
        start: {
          line: 3298,
          column: 0
        },
        end: {
          line: 3308,
          column: 3
        }
      },
      "163": {
        start: {
          line: 3321,
          column: 0
        },
        end: {
          line: 3332,
          column: 3
        }
      },
      "164": {
        start: {
          line: 3346,
          column: 0
        },
        end: {
          line: 3352,
          column: 3
        }
      },
      "165": {
        start: {
          line: 3363,
          column: 0
        },
        end: {
          line: 3366,
          column: 3
        }
      },
      "166": {
        start: {
          line: 3376,
          column: 0
        },
        end: {
          line: 3378,
          column: 3
        }
      },
      "167": {
        start: {
          line: 3389,
          column: 0
        },
        end: {
          line: 3392,
          column: 3
        }
      },
      "168": {
        start: {
          line: 3404,
          column: 0
        },
        end: {
          line: 3408,
          column: 3
        }
      },
      "169": {
        start: {
          line: 3426,
          column: 0
        },
        end: {
          line: 3436,
          column: 3
        }
      },
      "170": {
        start: {
          line: 3443,
          column: 0
        },
        end: {
          line: 3443,
          column: 61
        }
      },
      "171": {
        start: {
          line: 3453,
          column: 0
        },
        end: {
          line: 3455,
          column: 3
        }
      },
      "172": {
        start: {
          line: 3466,
          column: 0
        },
        end: {
          line: 3469,
          column: 3
        }
      },
      "173": {
        start: {
          line: 3482,
          column: 0
        },
        end: {
          line: 3493,
          column: 3
        }
      },
      "174": {
        start: {
          line: 3512,
          column: 0
        },
        end: {
          line: 3516,
          column: 3
        }
      },
      "175": {
        start: {
          line: 3555,
          column: 0
        },
        end: {
          line: 3576,
          column: 3
        }
      },
      "176": {
        start: {
          line: 3587,
          column: 0
        },
        end: {
          line: 3590,
          column: 3
        }
      },
      "177": {
        start: {
          line: 3600,
          column: 0
        },
        end: {
          line: 3602,
          column: 3
        }
      },
      "178": {
        start: {
          line: 3613,
          column: 0
        },
        end: {
          line: 3616,
          column: 3
        }
      },
      "179": {
        start: {
          line: 3630,
          column: 0
        },
        end: {
          line: 3636,
          column: 3
        }
      },
      "180": {
        start: {
          line: 3647,
          column: 0
        },
        end: {
          line: 3650,
          column: 3
        }
      },
      "181": {
        start: {
          line: 3657,
          column: 0
        },
        end: {
          line: 3657,
          column: 51
        }
      },
      "182": {
        start: {
          line: 3671,
          column: 0
        },
        end: {
          line: 3677,
          column: 3
        }
      },
      "183": {
        start: {
          line: 3688,
          column: 0
        },
        end: {
          line: 3691,
          column: 3
        }
      },
      "184": {
        start: {
          line: 3717,
          column: 0
        },
        end: {
          line: 3733,
          column: 3
        }
      },
      "185": {
        start: {
          line: 3740,
          column: 0
        },
        end: {
          line: 3740,
          column: 71
        }
      },
      "186": {
        start: {
          line: 3754,
          column: 0
        },
        end: {
          line: 3759,
          column: 3
        }
      },
      "187": {
        start: {
          line: 3776,
          column: 0
        },
        end: {
          line: 3783,
          column: 3
        }
      },
      "188": {
        start: {
          line: 3796,
          column: 0
        },
        end: {
          line: 3807,
          column: 3
        }
      },
      "189": {
        start: {
          line: 3814,
          column: 0
        },
        end: {
          line: 3814,
          column: 45
        }
      },
      "190": {
        start: {
          line: 3821,
          column: 0
        },
        end: {
          line: 3821,
          column: 105
        }
      },
      "191": {
        start: {
          line: 3831,
          column: 0
        },
        end: {
          line: 3833,
          column: 3
        }
      },
      "192": {
        start: {
          line: 3840,
          column: 0
        },
        end: {
          line: 3840,
          column: 45
        }
      },
      "193": {
        start: {
          line: 3847,
          column: 0
        },
        end: {
          line: 3847,
          column: 105
        }
      },
      "194": {
        start: {
          line: 3857,
          column: 0
        },
        end: {
          line: 3859,
          column: 3
        }
      },
      "195": {
        start: {
          line: 3915,
          column: 0
        },
        end: {
          line: 3961,
          column: 3
        }
      },
      "196": {
        start: {
          line: 3973,
          column: 0
        },
        end: {
          line: 3977,
          column: 3
        }
      },
      "197": {
        start: {
          line: 3993,
          column: 0
        },
        end: {
          line: 4002,
          column: 3
        }
      },
      "198": {
        start: {
          line: 4009,
          column: 0
        },
        end: {
          line: 4009,
          column: 33
        }
      },
      "199": {
        start: {
          line: 4020,
          column: 0
        },
        end: {
          line: 4029,
          column: 3
        }
      },
      "200": {
        start: {
          line: 4040,
          column: 0
        },
        end: {
          line: 4043,
          column: 3
        }
      },
      "201": {
        start: {
          line: 4060,
          column: 0
        },
        end: {
          line: 4071,
          column: 3
        }
      },
      "202": {
        start: {
          line: 4082,
          column: 0
        },
        end: {
          line: 4085,
          column: 3
        }
      },
      "203": {
        start: {
          line: 4121,
          column: 0
        },
        end: {
          line: 4149,
          column: 3
        }
      },
      "204": {
        start: {
          line: 4160,
          column: 0
        },
        end: {
          line: 4163,
          column: 3
        }
      },
      "205": {
        start: {
          line: 4175,
          column: 0
        },
        end: {
          line: 4179,
          column: 3
        }
      },
      "206": {
        start: {
          line: 4198,
          column: 0
        },
        end: {
          line: 4205,
          column: 3
        }
      },
      "207": {
        start: {
          line: 4224,
          column: 0
        },
        end: {
          line: 4231,
          column: 3
        }
      },
      "208": {
        start: {
          line: 4247,
          column: 0
        },
        end: {
          line: 4253,
          column: 3
        }
      },
      "209": {
        start: {
          line: 4270,
          column: 0
        },
        end: {
          line: 4276,
          column: 3
        }
      },
      "210": {
        start: {
          line: 4289,
          column: 0
        },
        end: {
          line: 4294,
          column: 3
        }
      },
      "211": {
        start: {
          line: 4319,
          column: 0
        },
        end: {
          line: 4329,
          column: 3
        }
      },
      "212": {
        start: {
          line: 4351,
          column: 0
        },
        end: {
          line: 4365,
          column: 3
        }
      },
      "213": {
        start: {
          line: 4378,
          column: 0
        },
        end: {
          line: 4381,
          column: 3
        }
      },
      "214": {
        start: {
          line: 4395,
          column: 0
        },
        end: {
          line: 4399,
          column: 3
        }
      },
      "215": {
        start: {
          line: 4410,
          column: 0
        },
        end: {
          line: 4413,
          column: 3
        }
      },
      "216": {
        start: {
          line: 4423,
          column: 0
        },
        end: {
          line: 4425,
          column: 3
        }
      },
      "217": {
        start: {
          line: 4437,
          column: 0
        },
        end: {
          line: 4441,
          column: 3
        }
      },
      "218": {
        start: {
          line: 4451,
          column: 0
        },
        end: {
          line: 4453,
          column: 3
        }
      },
      "219": {
        start: {
          line: 4463,
          column: 0
        },
        end: {
          line: 4465,
          column: 3
        }
      },
      "220": {
        start: {
          line: 4476,
          column: 0
        },
        end: {
          line: 4479,
          column: 3
        }
      },
      "221": {
        start: {
          line: 4490,
          column: 0
        },
        end: {
          line: 4493,
          column: 3
        }
      },
      "222": {
        start: {
          line: 4510,
          column: 0
        },
        end: {
          line: 4521,
          column: 3
        }
      },
      "223": {
        start: {
          line: 4533,
          column: 0
        },
        end: {
          line: 4537,
          column: 3
        }
      },
      "224": {
        start: {
          line: 4547,
          column: 0
        },
        end: {
          line: 4549,
          column: 3
        }
      },
      "225": {
        start: {
          line: 4563,
          column: 0
        },
        end: {
          line: 4568,
          column: 3
        }
      },
      "226": {
        start: {
          line: 4575,
          column: 0
        },
        end: {
          line: 4575,
          column: 40
        }
      },
      "227": {
        start: {
          line: 4589,
          column: 0
        },
        end: {
          line: 4595,
          column: 3
        }
      },
      "228": {
        start: {
          line: 4608,
          column: 0
        },
        end: {
          line: 4613,
          column: 3
        }
      },
      "229": {
        start: {
          line: 4625,
          column: 0
        },
        end: {
          line: 4629,
          column: 3
        }
      },
      "230": {
        start: {
          line: 4640,
          column: 0
        },
        end: {
          line: 4643,
          column: 3
        }
      },
      "231": {
        start: {
          line: 4654,
          column: 0
        },
        end: {
          line: 4657,
          column: 3
        }
      },
      "232": {
        start: {
          line: 4674,
          column: 0
        },
        end: {
          line: 4685,
          column: 3
        }
      },
      "233": {
        start: {
          line: 4696,
          column: 0
        },
        end: {
          line: 4699,
          column: 3
        }
      },
      "234": {
        start: {
          line: 4710,
          column: 0
        },
        end: {
          line: 4714,
          column: 3
        }
      },
      "235": {
        start: {
          line: 4729,
          column: 0
        },
        end: {
          line: 4742,
          column: 3
        }
      },
      "236": {
        start: {
          line: 4753,
          column: 0
        },
        end: {
          line: 4756,
          column: 3
        }
      },
      "237": {
        start: {
          line: 4769,
          column: 0
        },
        end: {
          line: 4780,
          column: 3
        }
      },
      "238": {
        start: {
          line: 4791,
          column: 0
        },
        end: {
          line: 4794,
          column: 3
        }
      },
      "239": {
        start: {
          line: 4807,
          column: 0
        },
        end: {
          line: 4812,
          column: 3
        }
      },
      "240": {
        start: {
          line: 4823,
          column: 0
        },
        end: {
          line: 4826,
          column: 3
        }
      },
      "241": {
        start: {
          line: 4839,
          column: 0
        },
        end: {
          line: 4849,
          column: 3
        }
      },
      "242": {
        start: {
          line: 4860,
          column: 0
        },
        end: {
          line: 4863,
          column: 3
        }
      },
      "243": {
        start: {
          line: 4876,
          column: 0
        },
        end: {
          line: 4879,
          column: 3
        }
      },
      "244": {
        start: {
          line: 4890,
          column: 0
        },
        end: {
          line: 4893,
          column: 3
        }
      },
      "245": {
        start: {
          line: 4903,
          column: 0
        },
        end: {
          line: 4905,
          column: 3
        }
      },
      "246": {
        start: {
          line: 4968,
          column: 0
        },
        end: {
          line: 5027,
          column: 3
        }
      },
      "247": {
        start: {
          line: 5099,
          column: 0
        },
        end: {
          line: 5102,
          column: 3
        }
      },
      "248": {
        start: {
          line: 5114,
          column: 0
        },
        end: {
          line: 5118,
          column: 3
        }
      },
      "249": {
        start: {
          line: 5132,
          column: 0
        },
        end: {
          line: 5138,
          column: 3
        }
      },
      "250": {
        start: {
          line: 5149,
          column: 0
        },
        end: {
          line: 5152,
          column: 3
        }
      },
      "251": {
        start: {
          line: 5165,
          column: 0
        },
        end: {
          line: 5170,
          column: 3
        }
      },
      "252": {
        start: {
          line: 5209,
          column: 0
        },
        end: {
          line: 5224,
          column: 3
        }
      },
      "253": {
        start: {
          line: 5238,
          column: 0
        },
        end: {
          line: 5244,
          column: 3
        }
      },
      "254": {
        start: {
          line: 5263,
          column: 0
        },
        end: {
          line: 5279,
          column: 3
        }
      },
      "255": {
        start: {
          line: 5290,
          column: 0
        },
        end: {
          line: 5293,
          column: 3
        }
      },
      "256": {
        start: {
          line: 5304,
          column: 0
        },
        end: {
          line: 5307,
          column: 3
        }
      },
      "257": {
        start: {
          line: 5345,
          column: 0
        },
        end: {
          line: 5352,
          column: 3
        }
      },
      "258": {
        start: {
          line: 5364,
          column: 0
        },
        end: {
          line: 5368,
          column: 3
        }
      },
      "259": {
        start: {
          line: 5383,
          column: 0
        },
        end: {
          line: 5395,
          column: 3
        }
      },
      "260": {
        start: {
          line: 5406,
          column: 0
        },
        end: {
          line: 5409,
          column: 3
        }
      },
      "261": {
        start: {
          line: 5427,
          column: 0
        },
        end: {
          line: 5432,
          column: 3
        }
      },
      "262": {
        start: {
          line: 5453,
          column: 0
        },
        end: {
          line: 5457,
          column: 3
        }
      },
      "263": {
        start: {
          line: 5468,
          column: 0
        },
        end: {
          line: 5476,
          column: 3
        }
      },
      "264": {
        start: {
          line: 5497,
          column: 0
        },
        end: {
          line: 5505,
          column: 3
        }
      },
      "265": {
        start: {
          line: 5518,
          column: 0
        },
        end: {
          line: 5521,
          column: 3
        }
      },
      "266": {
        start: {
          line: 5534,
          column: 0
        },
        end: {
          line: 5544,
          column: 3
        }
      },
      "267": {
        start: {
          line: 5578,
          column: 0
        },
        end: {
          line: 5586,
          column: 3
        }
      },
      "268": {
        start: {
          line: 5599,
          column: 0
        },
        end: {
          line: 5602,
          column: 3
        }
      },
      "269": {
        start: {
          line: 5613,
          column: 0
        },
        end: {
          line: 5622,
          column: 3
        }
      },
      "270": {
        start: {
          line: 5633,
          column: 0
        },
        end: {
          line: 5641,
          column: 3
        }
      },
      "271": {
        start: {
          line: 5664,
          column: 0
        },
        end: {
          line: 5669,
          column: 3
        }
      },
      "272": {
        start: {
          line: 5682,
          column: 0
        },
        end: {
          line: 5685,
          column: 3
        }
      },
      "273": {
        start: {
          line: 5700,
          column: 0
        },
        end: {
          line: 5713,
          column: 3
        }
      },
      "274": {
        start: {
          line: 5727,
          column: 0
        },
        end: {
          line: 5738,
          column: 3
        }
      },
      "275": {
        start: {
          line: 5757,
          column: 0
        },
        end: {
          line: 5760,
          column: 3
        }
      },
      "276": {
        start: {
          line: 5772,
          column: 0
        },
        end: {
          line: 5776,
          column: 3
        }
      },
      "277": {
        start: {
          line: 5796,
          column: 0
        },
        end: {
          line: 5803,
          column: 3
        }
      },
      "278": {
        start: {
          line: 5823,
          column: 0
        },
        end: {
          line: 5830,
          column: 3
        }
      },
      "279": {
        start: {
          line: 5848,
          column: 0
        },
        end: {
          line: 5854,
          column: 3
        }
      },
      "280": {
        start: {
          line: 5869,
          column: 0
        },
        end: {
          line: 5882,
          column: 3
        }
      },
      "281": {
        start: {
          line: 5900,
          column: 0
        },
        end: {
          line: 5906,
          column: 3
        }
      },
      "282": {
        start: {
          line: 5922,
          column: 0
        },
        end: {
          line: 5934,
          column: 3
        }
      },
      "283": {
        start: {
          line: 5956,
          column: 0
        },
        end: {
          line: 5967,
          column: 3
        }
      },
      "284": {
        start: {
          line: 5988,
          column: 0
        },
        end: {
          line: 6005,
          column: 3
        }
      },
      "285": {
        start: {
          line: 6039,
          column: 0
        },
        end: {
          line: 6053,
          column: 3
        }
      },
      "286": {
        start: {
          line: 6065,
          column: 0
        },
        end: {
          line: 6069,
          column: 3
        }
      },
      "287": {
        start: {
          line: 6080,
          column: 0
        },
        end: {
          line: 6083,
          column: 3
        }
      },
      "288": {
        start: {
          line: 6114,
          column: 0
        },
        end: {
          line: 6136,
          column: 3
        }
      },
      "289": {
        start: {
          line: 6169,
          column: 0
        },
        end: {
          line: 6183,
          column: 3
        }
      },
      "290": {
        start: {
          line: 6194,
          column: 0
        },
        end: {
          line: 6197,
          column: 3
        }
      },
      "291": {
        start: {
          line: 6227,
          column: 0
        },
        end: {
          line: 6249,
          column: 3
        }
      },
      "292": {
        start: {
          line: 6281,
          column: 0
        },
        end: {
          line: 6295,
          column: 3
        }
      },
      "293": {
        start: {
          line: 6307,
          column: 0
        },
        end: {
          line: 6311,
          column: 3
        }
      },
      "294": {
        start: {
          line: 6325,
          column: 0
        },
        end: {
          line: 6336,
          column: 3
        }
      },
      "295": {
        start: {
          line: 6357,
          column: 0
        },
        end: {
          line: 6360,
          column: 3
        }
      },
      "296": {
        start: {
          line: 6384,
          column: 0
        },
        end: {
          line: 6405,
          column: 3
        }
      },
      "297": {
        start: {
          line: 6434,
          column: 0
        },
        end: {
          line: 6448,
          column: 3
        }
      },
      "298": {
        start: {
          line: 6472,
          column: 0
        },
        end: {
          line: 6493,
          column: 3
        }
      },
      "299": {
        start: {
          line: 6516,
          column: 0
        },
        end: {
          line: 6528,
          column: 3
        }
      },
      "300": {
        start: {
          line: 6550,
          column: 0
        },
        end: {
          line: 6568,
          column: 3
        }
      },
      "301": {
        start: {
          line: 6592,
          column: 0
        },
        end: {
          line: 6602,
          column: 3
        }
      },
      "302": {
        start: {
          line: 6622,
          column: 0
        },
        end: {
          line: 6638,
          column: 3
        }
      },
      "303": {
        start: {
          line: 6658,
          column: 0
        },
        end: {
          line: 6666,
          column: 3
        }
      },
      "304": {
        start: {
          line: 6684,
          column: 0
        },
        end: {
          line: 6698,
          column: 3
        }
      },
      "305": {
        start: {
          line: 6718,
          column: 0
        },
        end: {
          line: 6727,
          column: 3
        }
      },
      "306": {
        start: {
          line: 6746,
          column: 0
        },
        end: {
          line: 6762,
          column: 3
        }
      },
      "307": {
        start: {
          line: 6775,
          column: 0
        },
        end: {
          line: 6778,
          column: 3
        }
      },
      "308": {
        start: {
          line: 6789,
          column: 0
        },
        end: {
          line: 6792,
          column: 3
        }
      },
      "309": {
        start: {
          line: 6805,
          column: 0
        },
        end: {
          line: 6815,
          column: 3
        }
      },
      "310": {
        start: {
          line: 6833,
          column: 0
        },
        end: {
          line: 6839,
          column: 3
        }
      },
      "311": {
        start: {
          line: 6855,
          column: 0
        },
        end: {
          line: 6867,
          column: 3
        }
      },
      "312": {
        start: {
          line: 6880,
          column: 0
        },
        end: {
          line: 6883,
          column: 3
        }
      },
      "313": {
        start: {
          line: 6896,
          column: 0
        },
        end: {
          line: 6905,
          column: 3
        }
      },
      "314": {
        start: {
          line: 6920,
          column: 0
        },
        end: {
          line: 6927,
          column: 3
        }
      },
      "315": {
        start: {
          line: 6945,
          column: 0
        },
        end: {
          line: 6959,
          column: 3
        }
      },
      "316": {
        start: {
          line: 6974,
          column: 0
        },
        end: {
          line: 6981,
          column: 3
        }
      },
      "317": {
        start: {
          line: 6998,
          column: 0
        },
        end: {
          line: 7011,
          column: 3
        }
      },
      "318": {
        start: {
          line: 7027,
          column: 0
        },
        end: {
          line: 7032,
          column: 3
        }
      },
      "319": {
        start: {
          line: 7048,
          column: 0
        },
        end: {
          line: 7059,
          column: 3
        }
      },
      "320": {
        start: {
          line: 7073,
          column: 0
        },
        end: {
          line: 7076,
          column: 3
        }
      },
      "321": {
        start: {
          line: 7090,
          column: 0
        },
        end: {
          line: 7099,
          column: 3
        }
      },
      "322": {
        start: {
          line: 7117,
          column: 0
        },
        end: {
          line: 7124,
          column: 3
        }
      },
      "323": {
        start: {
          line: 7141,
          column: 0
        },
        end: {
          line: 7154,
          column: 3
        }
      },
      "324": {
        start: {
          line: 7171,
          column: 0
        },
        end: {
          line: 7177,
          column: 3
        }
      },
      "325": {
        start: {
          line: 7193,
          column: 0
        },
        end: {
          line: 7205,
          column: 3
        }
      },
      "326": {
        start: {
          line: 7221,
          column: 0
        },
        end: {
          line: 7226,
          column: 3
        }
      },
      "327": {
        start: {
          line: 7242,
          column: 0
        },
        end: {
          line: 7253,
          column: 3
        }
      },
      "328": {
        start: {
          line: 7272,
          column: 0
        },
        end: {
          line: 7279,
          column: 3
        }
      },
      "329": {
        start: {
          line: 7296,
          column: 0
        },
        end: {
          line: 7309,
          column: 3
        }
      },
      "330": {
        start: {
          line: 7333,
          column: 0
        },
        end: {
          line: 7342,
          column: 3
        }
      },
      "331": {
        start: {
          line: 7361,
          column: 0
        },
        end: {
          line: 7376,
          column: 3
        }
      },
      "332": {
        start: {
          line: 7397,
          column: 0
        },
        end: {
          line: 7404,
          column: 3
        }
      },
      "333": {
        start: {
          line: 7421,
          column: 0
        },
        end: {
          line: 7434,
          column: 3
        }
      },
      "334": {
        start: {
          line: 7452,
          column: 0
        },
        end: {
          line: 7459,
          column: 3
        }
      },
      "335": {
        start: {
          line: 7476,
          column: 0
        },
        end: {
          line: 7490,
          column: 3
        }
      },
      "336": {
        start: {
          line: 7506,
          column: 0
        },
        end: {
          line: 7511,
          column: 3
        }
      },
      "337": {
        start: {
          line: 7526,
          column: 0
        },
        end: {
          line: 7537,
          column: 3
        }
      },
      "338": {
        start: {
          line: 7553,
          column: 0
        },
        end: {
          line: 7558,
          column: 3
        }
      },
      "339": {
        start: {
          line: 7573,
          column: 0
        },
        end: {
          line: 7584,
          column: 3
        }
      },
      "340": {
        start: {
          line: 7601,
          column: 0
        },
        end: {
          line: 7609,
          column: 3
        }
      },
      "341": {
        start: {
          line: 7672,
          column: 0
        },
        end: {
          line: 7733,
          column: 3
        }
      },
      "342": {
        start: {
          line: 7808,
          column: 0
        },
        end: {
          line: 7823,
          column: 3
        }
      },
      "343": {
        start: {
          line: 7855,
          column: 0
        },
        end: {
          line: 7875,
          column: 3
        }
      },
      "344": {
        start: {
          line: 7905,
          column: 0
        },
        end: {
          line: 7930,
          column: 3
        }
      },
      "345": {
        start: {
          line: 7941,
          column: 0
        },
        end: {
          line: 7949,
          column: 3
        }
      },
      "346": {
        start: {
          line: 7994,
          column: 0
        },
        end: {
          line: 7998,
          column: 3
        }
      },
      "347": {
        start: {
          line: 8009,
          column: 0
        },
        end: {
          line: 8012,
          column: 3
        }
      },
      "348": {
        start: {
          line: 8044,
          column: 0
        },
        end: {
          line: 8072,
          column: 3
        }
      },
      "349": {
        start: {
          line: 8083,
          column: 0
        },
        end: {
          line: 8091,
          column: 3
        }
      },
      "350": {
        start: {
          line: 8137,
          column: 0
        },
        end: {
          line: 8141,
          column: 3
        }
      },
      "351": {
        start: {
          line: 8148,
          column: 0
        },
        end: {
          line: 8148,
          column: 36
        }
      },
      "352": {
        start: {
          line: 8155,
          column: 0
        },
        end: {
          line: 8155,
          column: 39
        }
      },
      "353": {
        start: {
          line: 8162,
          column: 0
        },
        end: {
          line: 8162,
          column: 34
        }
      },
      "354": {
        start: {
          line: 8169,
          column: 0
        },
        end: {
          line: 8169,
          column: 32
        }
      },
      "355": {
        start: {
          line: 8176,
          column: 0
        },
        end: {
          line: 8176,
          column: 36
        }
      },
      "356": {
        start: {
          line: 8183,
          column: 0
        },
        end: {
          line: 8183,
          column: 34
        }
      },
      "357": {
        start: {
          line: 8190,
          column: 0
        },
        end: {
          line: 8190,
          column: 47
        }
      },
      "358": {
        start: {
          line: 8197,
          column: 0
        },
        end: {
          line: 8197,
          column: 46
        }
      },
      "359": {
        start: {
          line: 8208,
          column: 0
        },
        end: {
          line: 8216,
          column: 3
        }
      },
      "360": {
        start: {
          line: 8232,
          column: 0
        },
        end: {
          line: 8238,
          column: 3
        }
      },
      "361": {
        start: {
          line: 8248,
          column: 0
        },
        end: {
          line: 8250,
          column: 3
        }
      },
      "362": {
        start: {
          line: 8263,
          column: 0
        },
        end: {
          line: 8268,
          column: 3
        }
      },
      "363": {
        start: {
          line: 8279,
          column: 0
        },
        end: {
          line: 8288,
          column: 3
        }
      },
      "364": {
        start: {
          line: 8301,
          column: 0
        },
        end: {
          line: 8304,
          column: 3
        }
      },
      "365": {
        start: {
          line: 8329,
          column: 0
        },
        end: {
          line: 8344,
          column: 3
        }
      },
      "366": {
        start: {
          line: 8351,
          column: 0
        },
        end: {
          line: 8351,
          column: 44
        }
      },
      "367": {
        start: {
          line: 8358,
          column: 0
        },
        end: {
          line: 8358,
          column: 44
        }
      },
      "368": {
        start: {
          line: 8365,
          column: 0
        },
        end: {
          line: 8365,
          column: 47
        }
      },
      "369": {
        start: {
          line: 8372,
          column: 0
        },
        end: {
          line: 8372,
          column: 50
        }
      },
      "370": {
        start: {
          line: 8382,
          column: 0
        },
        end: {
          line: 8384,
          column: 3
        }
      },
      "371": {
        start: {
          line: 8394,
          column: 0
        },
        end: {
          line: 8396,
          column: 3
        }
      },
      "372": {
        start: {
          line: 8406,
          column: 0
        },
        end: {
          line: 8408,
          column: 3
        }
      },
      "373": {
        start: {
          line: 8418,
          column: 0
        },
        end: {
          line: 8420,
          column: 3
        }
      },
      "374": {
        start: {
          line: 8480,
          column: 0
        },
        end: {
          line: 8503,
          column: 3
        }
      },
      "375": {
        start: {
          line: 8522,
          column: 0
        },
        end: {
          line: 8533,
          column: 3
        }
      },
      "376": {
        start: {
          line: 8552,
          column: 0
        },
        end: {
          line: 8563,
          column: 3
        }
      },
      "377": {
        start: {
          line: 8584,
          column: 0
        },
        end: {
          line: 8603,
          column: 3
        }
      },
      "378": {
        start: {
          line: 8613,
          column: 0
        },
        end: {
          line: 8616,
          column: 3
        }
      },
      "379": {
        start: {
          line: 8626,
          column: 0
        },
        end: {
          line: 8629,
          column: 3
        }
      },
      "380": {
        start: {
          line: 8641,
          column: 0
        },
        end: {
          line: 8646,
          column: 3
        }
      },
      "381": {
        start: {
          line: 8658,
          column: 0
        },
        end: {
          line: 8663,
          column: 3
        }
      },
      "382": {
        start: {
          line: 8674,
          column: 0
        },
        end: {
          line: 8677,
          column: 3
        }
      },
      "383": {
        start: {
          line: 8690,
          column: 0
        },
        end: {
          line: 8700,
          column: 3
        }
      },
      "384": {
        start: {
          line: 8711,
          column: 0
        },
        end: {
          line: 8714,
          column: 3
        }
      },
      "385": {
        start: {
          line: 8727,
          column: 0
        },
        end: {
          line: 8738,
          column: 3
        }
      },
      "386": {
        start: {
          line: 8745,
          column: 0
        },
        end: {
          line: 8745,
          column: 32
        }
      },
      "387": {
        start: {
          line: 8752,
          column: 0
        },
        end: {
          line: 8752,
          column: 68
        }
      },
      "388": {
        start: {
          line: 8759,
          column: 0
        },
        end: {
          line: 8759,
          column: 73
        }
      },
      "389": {
        start: {
          line: 8766,
          column: 0
        },
        end: {
          line: 8766,
          column: 40
        }
      },
      "390": {
        start: {
          line: 8773,
          column: 0
        },
        end: {
          line: 8773,
          column: 38
        }
      },
      "391": {
        start: {
          line: 8780,
          column: 0
        },
        end: {
          line: 8780,
          column: 52
        }
      },
      "392": {
        start: {
          line: 8789,
          column: 0
        },
        end: {
          line: 8791,
          column: 3
        }
      },
      "393": {
        start: {
          line: 8801,
          column: 0
        },
        end: {
          line: 8804,
          column: 3
        }
      },
      "394": {
        start: {
          line: 8871,
          column: 0
        },
        end: {
          line: 8920,
          column: 3
        }
      },
      "395": {
        start: {
          line: 8931,
          column: 0
        },
        end: {
          line: 8934,
          column: 3
        }
      },
      "396": {
        start: {
          line: 8944,
          column: 0
        },
        end: {
          line: 8946,
          column: 3
        }
      },
      "397": {
        start: {
          line: 8957,
          column: 0
        },
        end: {
          line: 8966,
          column: 3
        }
      },
      "398": {
        start: {
          line: 8977,
          column: 0
        },
        end: {
          line: 8980,
          column: 3
        }
      },
      "399": {
        start: {
          line: 8990,
          column: 0
        },
        end: {
          line: 8992,
          column: 3
        }
      },
      "400": {
        start: {
          line: 9003,
          column: 0
        },
        end: {
          line: 9012,
          column: 3
        }
      },
      "401": {
        start: {
          line: 9019,
          column: 0
        },
        end: {
          line: 9019,
          column: 37
        }
      },
      "402": {
        start: {
          line: 9059,
          column: 0
        },
        end: {
          line: 9085,
          column: 3
        }
      },
      "403": {
        start: {
          line: 9095,
          column: 0
        },
        end: {
          line: 9097,
          column: 3
        }
      },
      "404": {
        start: {
          line: 9108,
          column: 0
        },
        end: {
          line: 9111,
          column: 3
        }
      },
      "405": {
        start: {
          line: 9121,
          column: 0
        },
        end: {
          line: 9123,
          column: 3
        }
      },
      "406": {
        start: {
          line: 9134,
          column: 0
        },
        end: {
          line: 9137,
          column: 3
        }
      },
      "407": {
        start: {
          line: 9147,
          column: 0
        },
        end: {
          line: 9149,
          column: 3
        }
      },
      "408": {
        start: {
          line: 9159,
          column: 0
        },
        end: {
          line: 9161,
          column: 3
        }
      },
      "409": {
        start: {
          line: 9171,
          column: 0
        },
        end: {
          line: 9173,
          column: 3
        }
      },
      "410": {
        start: {
          line: 9215,
          column: 0
        },
        end: {
          line: 9254,
          column: 3
        }
      },
      "411": {
        start: {
          line: 9266,
          column: 0
        },
        end: {
          line: 9270,
          column: 3
        }
      },
      "412": {
        start: {
          line: 9283,
          column: 0
        },
        end: {
          line: 9288,
          column: 3
        }
      },
      "413": {
        start: {
          line: 9299,
          column: 0
        },
        end: {
          line: 9302,
          column: 3
        }
      },
      "414": {
        start: {
          line: 9314,
          column: 0
        },
        end: {
          line: 9318,
          column: 3
        }
      },
      "415": {
        start: {
          line: 9329,
          column: 0
        },
        end: {
          line: 9332,
          column: 3
        }
      },
      "416": {
        start: {
          line: 9345,
          column: 0
        },
        end: {
          line: 9356,
          column: 3
        }
      },
      "417": {
        start: {
          line: 9369,
          column: 0
        },
        end: {
          line: 9374,
          column: 3
        }
      },
      "418": {
        start: {
          line: 9386,
          column: 0
        },
        end: {
          line: 9390,
          column: 3
        }
      },
      "419": {
        start: {
          line: 9403,
          column: 0
        },
        end: {
          line: 9408,
          column: 3
        }
      },
      "420": {
        start: {
          line: 9420,
          column: 0
        },
        end: {
          line: 9424,
          column: 3
        }
      },
      "421": {
        start: {
          line: 9437,
          column: 0
        },
        end: {
          line: 9442,
          column: 3
        }
      },
      "422": {
        start: {
          line: 9454,
          column: 0
        },
        end: {
          line: 9458,
          column: 3
        }
      },
      "423": {
        start: {
          line: 9471,
          column: 0
        },
        end: {
          line: 9476,
          column: 3
        }
      },
      "424": {
        start: {
          line: 9490,
          column: 0
        },
        end: {
          line: 9496,
          column: 3
        }
      },
      "425": {
        start: {
          line: 9515,
          column: 0
        },
        end: {
          line: 9532,
          column: 3
        }
      },
      "426": {
        start: {
          line: 9543,
          column: 0
        },
        end: {
          line: 9545,
          column: 3
        }
      },
      "427": {
        start: {
          line: 9564,
          column: 0
        },
        end: {
          line: 9569,
          column: 3
        }
      },
      "428": {
        start: {
          line: 9610,
          column: 0
        },
        end: {
          line: 9626,
          column: 3
        }
      },
      "429": {
        start: {
          line: 9636,
          column: 0
        },
        end: {
          line: 9638,
          column: 3
        }
      },
      "430": {
        start: {
          line: 9651,
          column: 0
        },
        end: {
          line: 9654,
          column: 3
        }
      },
      "431": {
        start: {
          line: 9670,
          column: 0
        },
        end: {
          line: 9674,
          column: 3
        }
      },
      "432": {
        start: {
          line: 9781,
          column: 0
        },
        end: {
          line: 9827,
          column: 3
        }
      },
      "433": {
        start: {
          line: 9840,
          column: 0
        },
        end: {
          line: 9844,
          column: 3
        }
      },
      "434": {
        start: {
          line: 9874,
          column: 0
        },
        end: {
          line: 9885,
          column: 3
        }
      },
      "435": {
        start: {
          line: 9896,
          column: 0
        },
        end: {
          line: 9900,
          column: 3
        }
      },
      "436": {
        start: {
          line: 9907,
          column: 0
        },
        end: {
          line: 9907,
          column: 45
        }
      },
      "437": {
        start: {
          line: 9914,
          column: 0
        },
        end: {
          line: 9914,
          column: 127
        }
      },
      "438": {
        start: {
          line: 9937,
          column: 0
        },
        end: {
          line: 9952,
          column: 3
        }
      },
      "439": {
        start: {
          line: 9989,
          column: 0
        },
        end: {
          line: 10024,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 23
          },
          end: {
            line: 10,
            column: 24
          }
        },
        loc: {
          start: {
            line: 10,
            column: 30
          },
          end: {
            line: 10026,
            column: 1
          }
        },
        line: 10
      }
    },
    branchMap: {},
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
      "297": 0,
      "298": 0,
      "299": 0,
      "300": 0,
      "301": 0,
      "302": 0,
      "303": 0,
      "304": 0,
      "305": 0,
      "306": 0,
      "307": 0,
      "308": 0,
      "309": 0,
      "310": 0,
      "311": 0,
      "312": 0,
      "313": 0,
      "314": 0,
      "315": 0,
      "316": 0,
      "317": 0,
      "318": 0,
      "319": 0,
      "320": 0,
      "321": 0,
      "322": 0,
      "323": 0,
      "324": 0,
      "325": 0,
      "326": 0,
      "327": 0,
      "328": 0,
      "329": 0,
      "330": 0,
      "331": 0,
      "332": 0,
      "333": 0,
      "334": 0,
      "335": 0,
      "336": 0,
      "337": 0,
      "338": 0,
      "339": 0,
      "340": 0,
      "341": 0,
      "342": 0,
      "343": 0,
      "344": 0,
      "345": 0,
      "346": 0,
      "347": 0,
      "348": 0,
      "349": 0,
      "350": 0,
      "351": 0,
      "352": 0,
      "353": 0,
      "354": 0,
      "355": 0,
      "356": 0,
      "357": 0,
      "358": 0,
      "359": 0,
      "360": 0,
      "361": 0,
      "362": 0,
      "363": 0,
      "364": 0,
      "365": 0,
      "366": 0,
      "367": 0,
      "368": 0,
      "369": 0,
      "370": 0,
      "371": 0,
      "372": 0,
      "373": 0,
      "374": 0,
      "375": 0,
      "376": 0,
      "377": 0,
      "378": 0,
      "379": 0,
      "380": 0,
      "381": 0,
      "382": 0,
      "383": 0,
      "384": 0,
      "385": 0,
      "386": 0,
      "387": 0,
      "388": 0,
      "389": 0,
      "390": 0,
      "391": 0,
      "392": 0,
      "393": 0,
      "394": 0,
      "395": 0,
      "396": 0,
      "397": 0,
      "398": 0,
      "399": 0,
      "400": 0,
      "401": 0,
      "402": 0,
      "403": 0,
      "404": 0,
      "405": 0,
      "406": 0,
      "407": 0,
      "408": 0,
      "409": 0,
      "410": 0,
      "411": 0,
      "412": 0,
      "413": 0,
      "414": 0,
      "415": 0,
      "416": 0,
      "417": 0,
      "418": 0,
      "419": 0,
      "420": 0,
      "421": 0,
      "422": 0,
      "423": 0,
      "424": 0,
      "425": 0,
      "426": 0,
      "427": 0,
      "428": 0,
      "429": 0,
      "430": 0,
      "431": 0,
      "432": 0,
      "433": 0,
      "434": 0,
      "435": 0,
      "436": 0,
      "437": 0,
      "438": 0,
      "439": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "294d1e122afc8883bea987172a8062d49def474a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_bo6mr71vg = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_bo6mr71vg(); // Automatically generated by xdrgen
// DO NOT EDIT or your changes may be overwritten
/* jshint maxstatements:2147483647  */
/* jshint esnext:true  */
var types = (cov_bo6mr71vg().s[0]++, XDR.config(function (xdr) {
  cov_bo6mr71vg().f[0]++;
  // Workaround for https://github.com/stellar/xdrgen/issues/152
  //
  // The "correct" way would be to replace bare instances of each constant with
  // xdr.lookup("..."), but that's more error-prone.
  var SCSYMBOL_LIMIT = (cov_bo6mr71vg().s[1]++, 1312);
  var SC_SPEC_DOC_LIMIT = (cov_bo6mr71vg().s[2]++, 4000);
  // === xdr source ============================================================
  //
  //   typedef opaque Value<>;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[3]++;
  xdr.typedef("Value", xdr.varOpaque());

  // === xdr source ============================================================
  //
  //   struct SCPBallot
  //   {
  //       uint32 counter; // n
  //       Value value;    // x
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[4]++;
  xdr.struct("ScpBallot", [["counter", xdr.lookup("Uint32")], ["value", xdr.lookup("Value")]]);

  // === xdr source ============================================================
  //
  //   enum SCPStatementType
  //   {
  //       SCP_ST_PREPARE = 0,
  //       SCP_ST_CONFIRM = 1,
  //       SCP_ST_EXTERNALIZE = 2,
  //       SCP_ST_NOMINATE = 3
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[5]++;
  xdr["enum"]("ScpStatementType", {
    scpStPrepare: 0,
    scpStConfirm: 1,
    scpStExternalize: 2,
    scpStNominate: 3
  });

  // === xdr source ============================================================
  //
  //   struct SCPNomination
  //   {
  //       Hash quorumSetHash; // D
  //       Value votes<>;      // X
  //       Value accepted<>;   // Y
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[6]++;
  xdr.struct("ScpNomination", [["quorumSetHash", xdr.lookup("Hash")], ["votes", xdr.varArray(xdr.lookup("Value"), 2147483647)], ["accepted", xdr.varArray(xdr.lookup("Value"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   struct
  //           {
  //               Hash quorumSetHash;       // D
  //               SCPBallot ballot;         // b
  //               SCPBallot* prepared;      // p
  //               SCPBallot* preparedPrime; // p'
  //               uint32 nC;                // c.n
  //               uint32 nH;                // h.n
  //           }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[7]++;
  xdr.struct("ScpStatementPrepare", [["quorumSetHash", xdr.lookup("Hash")], ["ballot", xdr.lookup("ScpBallot")], ["prepared", xdr.option(xdr.lookup("ScpBallot"))], ["preparedPrime", xdr.option(xdr.lookup("ScpBallot"))], ["nC", xdr.lookup("Uint32")], ["nH", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   struct
  //           {
  //               SCPBallot ballot;   // b
  //               uint32 nPrepared;   // p.n
  //               uint32 nCommit;     // c.n
  //               uint32 nH;          // h.n
  //               Hash quorumSetHash; // D
  //           }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[8]++;
  xdr.struct("ScpStatementConfirm", [["ballot", xdr.lookup("ScpBallot")], ["nPrepared", xdr.lookup("Uint32")], ["nCommit", xdr.lookup("Uint32")], ["nH", xdr.lookup("Uint32")], ["quorumSetHash", xdr.lookup("Hash")]]);

  // === xdr source ============================================================
  //
  //   struct
  //           {
  //               SCPBallot commit;         // c
  //               uint32 nH;                // h.n
  //               Hash commitQuorumSetHash; // D used before EXTERNALIZE
  //           }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[9]++;
  xdr.struct("ScpStatementExternalize", [["commit", xdr.lookup("ScpBallot")], ["nH", xdr.lookup("Uint32")], ["commitQuorumSetHash", xdr.lookup("Hash")]]);

  // === xdr source ============================================================
  //
  //   union switch (SCPStatementType type)
  //       {
  //       case SCP_ST_PREPARE:
  //           struct
  //           {
  //               Hash quorumSetHash;       // D
  //               SCPBallot ballot;         // b
  //               SCPBallot* prepared;      // p
  //               SCPBallot* preparedPrime; // p'
  //               uint32 nC;                // c.n
  //               uint32 nH;                // h.n
  //           } prepare;
  //       case SCP_ST_CONFIRM:
  //           struct
  //           {
  //               SCPBallot ballot;   // b
  //               uint32 nPrepared;   // p.n
  //               uint32 nCommit;     // c.n
  //               uint32 nH;          // h.n
  //               Hash quorumSetHash; // D
  //           } confirm;
  //       case SCP_ST_EXTERNALIZE:
  //           struct
  //           {
  //               SCPBallot commit;         // c
  //               uint32 nH;                // h.n
  //               Hash commitQuorumSetHash; // D used before EXTERNALIZE
  //           } externalize;
  //       case SCP_ST_NOMINATE:
  //           SCPNomination nominate;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[10]++;
  xdr.union("ScpStatementPledges", {
    switchOn: xdr.lookup("ScpStatementType"),
    switchName: "type",
    switches: [["scpStPrepare", "prepare"], ["scpStConfirm", "confirm"], ["scpStExternalize", "externalize"], ["scpStNominate", "nominate"]],
    arms: {
      prepare: xdr.lookup("ScpStatementPrepare"),
      confirm: xdr.lookup("ScpStatementConfirm"),
      externalize: xdr.lookup("ScpStatementExternalize"),
      nominate: xdr.lookup("ScpNomination")
    }
  });

  // === xdr source ============================================================
  //
  //   struct SCPStatement
  //   {
  //       NodeID nodeID;    // v
  //       uint64 slotIndex; // i
  //   
  //       union switch (SCPStatementType type)
  //       {
  //       case SCP_ST_PREPARE:
  //           struct
  //           {
  //               Hash quorumSetHash;       // D
  //               SCPBallot ballot;         // b
  //               SCPBallot* prepared;      // p
  //               SCPBallot* preparedPrime; // p'
  //               uint32 nC;                // c.n
  //               uint32 nH;                // h.n
  //           } prepare;
  //       case SCP_ST_CONFIRM:
  //           struct
  //           {
  //               SCPBallot ballot;   // b
  //               uint32 nPrepared;   // p.n
  //               uint32 nCommit;     // c.n
  //               uint32 nH;          // h.n
  //               Hash quorumSetHash; // D
  //           } confirm;
  //       case SCP_ST_EXTERNALIZE:
  //           struct
  //           {
  //               SCPBallot commit;         // c
  //               uint32 nH;                // h.n
  //               Hash commitQuorumSetHash; // D used before EXTERNALIZE
  //           } externalize;
  //       case SCP_ST_NOMINATE:
  //           SCPNomination nominate;
  //       }
  //       pledges;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[11]++;
  xdr.struct("ScpStatement", [["nodeId", xdr.lookup("NodeId")], ["slotIndex", xdr.lookup("Uint64")], ["pledges", xdr.lookup("ScpStatementPledges")]]);

  // === xdr source ============================================================
  //
  //   struct SCPEnvelope
  //   {
  //       SCPStatement statement;
  //       Signature signature;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[12]++;
  xdr.struct("ScpEnvelope", [["statement", xdr.lookup("ScpStatement")], ["signature", xdr.lookup("Signature")]]);

  // === xdr source ============================================================
  //
  //   struct SCPQuorumSet
  //   {
  //       uint32 threshold;
  //       NodeID validators<>;
  //       SCPQuorumSet innerSets<>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[13]++;
  xdr.struct("ScpQuorumSet", [["threshold", xdr.lookup("Uint32")], ["validators", xdr.varArray(xdr.lookup("NodeId"), 2147483647)], ["innerSets", xdr.varArray(xdr.lookup("ScpQuorumSet"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   typedef opaque Thresholds[4];
  //
  // ===========================================================================
  cov_bo6mr71vg().s[14]++;
  xdr.typedef("Thresholds", xdr.opaque(4));

  // === xdr source ============================================================
  //
  //   typedef string string32<32>;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[15]++;
  xdr.typedef("String32", xdr.string(32));

  // === xdr source ============================================================
  //
  //   typedef string string64<64>;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[16]++;
  xdr.typedef("String64", xdr.string(64));

  // === xdr source ============================================================
  //
  //   typedef int64 SequenceNumber;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[17]++;
  xdr.typedef("SequenceNumber", xdr.lookup("Int64"));

  // === xdr source ============================================================
  //
  //   typedef opaque DataValue<64>;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[18]++;
  xdr.typedef("DataValue", xdr.varOpaque(64));

  // === xdr source ============================================================
  //
  //   typedef Hash PoolID;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[19]++;
  xdr.typedef("PoolId", xdr.lookup("Hash"));

  // === xdr source ============================================================
  //
  //   typedef opaque AssetCode4[4];
  //
  // ===========================================================================
  cov_bo6mr71vg().s[20]++;
  xdr.typedef("AssetCode4", xdr.opaque(4));

  // === xdr source ============================================================
  //
  //   typedef opaque AssetCode12[12];
  //
  // ===========================================================================
  cov_bo6mr71vg().s[21]++;
  xdr.typedef("AssetCode12", xdr.opaque(12));

  // === xdr source ============================================================
  //
  //   enum AssetType
  //   {
  //       ASSET_TYPE_NATIVE = 0,
  //       ASSET_TYPE_CREDIT_ALPHANUM4 = 1,
  //       ASSET_TYPE_CREDIT_ALPHANUM12 = 2,
  //       ASSET_TYPE_POOL_SHARE = 3
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[22]++;
  xdr["enum"]("AssetType", {
    assetTypeNative: 0,
    assetTypeCreditAlphanum4: 1,
    assetTypeCreditAlphanum12: 2,
    assetTypePoolShare: 3
  });

  // === xdr source ============================================================
  //
  //   union AssetCode switch (AssetType type)
  //   {
  //   case ASSET_TYPE_CREDIT_ALPHANUM4:
  //       AssetCode4 assetCode4;
  //   
  //   case ASSET_TYPE_CREDIT_ALPHANUM12:
  //       AssetCode12 assetCode12;
  //   
  //       // add other asset types here in the future
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[23]++;
  xdr.union("AssetCode", {
    switchOn: xdr.lookup("AssetType"),
    switchName: "type",
    switches: [["assetTypeCreditAlphanum4", "assetCode4"], ["assetTypeCreditAlphanum12", "assetCode12"]],
    arms: {
      assetCode4: xdr.lookup("AssetCode4"),
      assetCode12: xdr.lookup("AssetCode12")
    }
  });

  // === xdr source ============================================================
  //
  //   struct AlphaNum4
  //   {
  //       AssetCode4 assetCode;
  //       AccountID issuer;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[24]++;
  xdr.struct("AlphaNum4", [["assetCode", xdr.lookup("AssetCode4")], ["issuer", xdr.lookup("AccountId")]]);

  // === xdr source ============================================================
  //
  //   struct AlphaNum12
  //   {
  //       AssetCode12 assetCode;
  //       AccountID issuer;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[25]++;
  xdr.struct("AlphaNum12", [["assetCode", xdr.lookup("AssetCode12")], ["issuer", xdr.lookup("AccountId")]]);

  // === xdr source ============================================================
  //
  //   union Asset switch (AssetType type)
  //   {
  //   case ASSET_TYPE_NATIVE: // Not credit
  //       void;
  //   
  //   case ASSET_TYPE_CREDIT_ALPHANUM4:
  //       AlphaNum4 alphaNum4;
  //   
  //   case ASSET_TYPE_CREDIT_ALPHANUM12:
  //       AlphaNum12 alphaNum12;
  //   
  //       // add other asset types here in the future
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[26]++;
  xdr.union("Asset", {
    switchOn: xdr.lookup("AssetType"),
    switchName: "type",
    switches: [["assetTypeNative", xdr["void"]()], ["assetTypeCreditAlphanum4", "alphaNum4"], ["assetTypeCreditAlphanum12", "alphaNum12"]],
    arms: {
      alphaNum4: xdr.lookup("AlphaNum4"),
      alphaNum12: xdr.lookup("AlphaNum12")
    }
  });

  // === xdr source ============================================================
  //
  //   struct Price
  //   {
  //       int32 n; // numerator
  //       int32 d; // denominator
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[27]++;
  xdr.struct("Price", [["n", xdr.lookup("Int32")], ["d", xdr.lookup("Int32")]]);

  // === xdr source ============================================================
  //
  //   struct Liabilities
  //   {
  //       int64 buying;
  //       int64 selling;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[28]++;
  xdr.struct("Liabilities", [["buying", xdr.lookup("Int64")], ["selling", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   enum ThresholdIndexes
  //   {
  //       THRESHOLD_MASTER_WEIGHT = 0,
  //       THRESHOLD_LOW = 1,
  //       THRESHOLD_MED = 2,
  //       THRESHOLD_HIGH = 3
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[29]++;
  xdr["enum"]("ThresholdIndices", {
    thresholdMasterWeight: 0,
    thresholdLow: 1,
    thresholdMed: 2,
    thresholdHigh: 3
  });

  // === xdr source ============================================================
  //
  //   enum LedgerEntryType
  //   {
  //       ACCOUNT = 0,
  //       TRUSTLINE = 1,
  //       OFFER = 2,
  //       DATA = 3,
  //       CLAIMABLE_BALANCE = 4,
  //       LIQUIDITY_POOL = 5,
  //       CONTRACT_DATA = 6,
  //       CONTRACT_CODE = 7,
  //       CONFIG_SETTING = 8,
  //       TTL = 9
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[30]++;
  xdr["enum"]("LedgerEntryType", {
    account: 0,
    trustline: 1,
    offer: 2,
    data: 3,
    claimableBalance: 4,
    liquidityPool: 5,
    contractData: 6,
    contractCode: 7,
    configSetting: 8,
    ttl: 9
  });

  // === xdr source ============================================================
  //
  //   struct Signer
  //   {
  //       SignerKey key;
  //       uint32 weight; // really only need 1 byte
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[31]++;
  xdr.struct("Signer", [["key", xdr.lookup("SignerKey")], ["weight", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   enum AccountFlags
  //   { // masks for each flag
  //   
  //       // Flags set on issuer accounts
  //       // TrustLines are created with authorized set to "false" requiring
  //       // the issuer to set it for each TrustLine
  //       AUTH_REQUIRED_FLAG = 0x1,
  //       // If set, the authorized flag in TrustLines can be cleared
  //       // otherwise, authorization cannot be revoked
  //       AUTH_REVOCABLE_FLAG = 0x2,
  //       // Once set, causes all AUTH_* flags to be read-only
  //       AUTH_IMMUTABLE_FLAG = 0x4,
  //       // Trustlines are created with clawback enabled set to "true",
  //       // and claimable balances created from those trustlines are created
  //       // with clawback enabled set to "true"
  //       AUTH_CLAWBACK_ENABLED_FLAG = 0x8
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[32]++;
  xdr["enum"]("AccountFlags", {
    authRequiredFlag: 1,
    authRevocableFlag: 2,
    authImmutableFlag: 4,
    authClawbackEnabledFlag: 8
  });

  // === xdr source ============================================================
  //
  //   const MASK_ACCOUNT_FLAGS = 0x7;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[33]++;
  xdr["const"]("MASK_ACCOUNT_FLAGS", 0x7);

  // === xdr source ============================================================
  //
  //   const MASK_ACCOUNT_FLAGS_V17 = 0xF;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[34]++;
  xdr["const"]("MASK_ACCOUNT_FLAGS_V17", 0xF);

  // === xdr source ============================================================
  //
  //   const MAX_SIGNERS = 20;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[35]++;
  xdr["const"]("MAX_SIGNERS", 20);

  // === xdr source ============================================================
  //
  //   typedef AccountID* SponsorshipDescriptor;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[36]++;
  xdr.typedef("SponsorshipDescriptor", xdr.option(xdr.lookup("AccountId")));

  // === xdr source ============================================================
  //
  //   struct AccountEntryExtensionV3
  //   {
  //       // We can use this to add more fields, or because it is first, to
  //       // change AccountEntryExtensionV3 into a union.
  //       ExtensionPoint ext;
  //   
  //       // Ledger number at which `seqNum` took on its present value.
  //       uint32 seqLedger;
  //   
  //       // Time at which `seqNum` took on its present value.
  //       TimePoint seqTime;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[37]++;
  xdr.struct("AccountEntryExtensionV3", [["ext", xdr.lookup("ExtensionPoint")], ["seqLedger", xdr.lookup("Uint32")], ["seqTime", xdr.lookup("TimePoint")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 3:
  //           AccountEntryExtensionV3 v3;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[38]++;
  xdr.union("AccountEntryExtensionV2Ext", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()], [3, "v3"]],
    arms: {
      v3: xdr.lookup("AccountEntryExtensionV3")
    }
  });

  // === xdr source ============================================================
  //
  //   struct AccountEntryExtensionV2
  //   {
  //       uint32 numSponsored;
  //       uint32 numSponsoring;
  //       SponsorshipDescriptor signerSponsoringIDs<MAX_SIGNERS>;
  //   
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 3:
  //           AccountEntryExtensionV3 v3;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[39]++;
  xdr.struct("AccountEntryExtensionV2", [["numSponsored", xdr.lookup("Uint32")], ["numSponsoring", xdr.lookup("Uint32")], ["signerSponsoringIDs", xdr.varArray(xdr.lookup("SponsorshipDescriptor"), xdr.lookup("MAX_SIGNERS"))], ["ext", xdr.lookup("AccountEntryExtensionV2Ext")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 2:
  //           AccountEntryExtensionV2 v2;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[40]++;
  xdr.union("AccountEntryExtensionV1Ext", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()], [2, "v2"]],
    arms: {
      v2: xdr.lookup("AccountEntryExtensionV2")
    }
  });

  // === xdr source ============================================================
  //
  //   struct AccountEntryExtensionV1
  //   {
  //       Liabilities liabilities;
  //   
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 2:
  //           AccountEntryExtensionV2 v2;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[41]++;
  xdr.struct("AccountEntryExtensionV1", [["liabilities", xdr.lookup("Liabilities")], ["ext", xdr.lookup("AccountEntryExtensionV1Ext")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           AccountEntryExtensionV1 v1;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[42]++;
  xdr.union("AccountEntryExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()], [1, "v1"]],
    arms: {
      v1: xdr.lookup("AccountEntryExtensionV1")
    }
  });

  // === xdr source ============================================================
  //
  //   struct AccountEntry
  //   {
  //       AccountID accountID;      // master public key for this account
  //       int64 balance;            // in stroops
  //       SequenceNumber seqNum;    // last sequence number used for this account
  //       uint32 numSubEntries;     // number of sub-entries this account has
  //                                 // drives the reserve
  //       AccountID* inflationDest; // Account to vote for during inflation
  //       uint32 flags;             // see AccountFlags
  //   
  //       string32 homeDomain; // can be used for reverse federation and memo lookup
  //   
  //       // fields used for signatures
  //       // thresholds stores unsigned bytes: [weight of master|low|medium|high]
  //       Thresholds thresholds;
  //   
  //       Signer signers<MAX_SIGNERS>; // possible signers for this account
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           AccountEntryExtensionV1 v1;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[43]++;
  xdr.struct("AccountEntry", [["accountId", xdr.lookup("AccountId")], ["balance", xdr.lookup("Int64")], ["seqNum", xdr.lookup("SequenceNumber")], ["numSubEntries", xdr.lookup("Uint32")], ["inflationDest", xdr.option(xdr.lookup("AccountId"))], ["flags", xdr.lookup("Uint32")], ["homeDomain", xdr.lookup("String32")], ["thresholds", xdr.lookup("Thresholds")], ["signers", xdr.varArray(xdr.lookup("Signer"), xdr.lookup("MAX_SIGNERS"))], ["ext", xdr.lookup("AccountEntryExt")]]);

  // === xdr source ============================================================
  //
  //   enum TrustLineFlags
  //   {
  //       // issuer has authorized account to perform transactions with its credit
  //       AUTHORIZED_FLAG = 1,
  //       // issuer has authorized account to maintain and reduce liabilities for its
  //       // credit
  //       AUTHORIZED_TO_MAINTAIN_LIABILITIES_FLAG = 2,
  //       // issuer has specified that it may clawback its credit, and that claimable
  //       // balances created with its credit may also be clawed back
  //       TRUSTLINE_CLAWBACK_ENABLED_FLAG = 4
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[44]++;
  xdr["enum"]("TrustLineFlags", {
    authorizedFlag: 1,
    authorizedToMaintainLiabilitiesFlag: 2,
    trustlineClawbackEnabledFlag: 4
  });

  // === xdr source ============================================================
  //
  //   const MASK_TRUSTLINE_FLAGS = 1;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[45]++;
  xdr["const"]("MASK_TRUSTLINE_FLAGS", 1);

  // === xdr source ============================================================
  //
  //   const MASK_TRUSTLINE_FLAGS_V13 = 3;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[46]++;
  xdr["const"]("MASK_TRUSTLINE_FLAGS_V13", 3);

  // === xdr source ============================================================
  //
  //   const MASK_TRUSTLINE_FLAGS_V17 = 7;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[47]++;
  xdr["const"]("MASK_TRUSTLINE_FLAGS_V17", 7);

  // === xdr source ============================================================
  //
  //   enum LiquidityPoolType
  //   {
  //       LIQUIDITY_POOL_CONSTANT_PRODUCT = 0
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[48]++;
  xdr["enum"]("LiquidityPoolType", {
    liquidityPoolConstantProduct: 0
  });

  // === xdr source ============================================================
  //
  //   union TrustLineAsset switch (AssetType type)
  //   {
  //   case ASSET_TYPE_NATIVE: // Not credit
  //       void;
  //   
  //   case ASSET_TYPE_CREDIT_ALPHANUM4:
  //       AlphaNum4 alphaNum4;
  //   
  //   case ASSET_TYPE_CREDIT_ALPHANUM12:
  //       AlphaNum12 alphaNum12;
  //   
  //   case ASSET_TYPE_POOL_SHARE:
  //       PoolID liquidityPoolID;
  //   
  //       // add other asset types here in the future
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[49]++;
  xdr.union("TrustLineAsset", {
    switchOn: xdr.lookup("AssetType"),
    switchName: "type",
    switches: [["assetTypeNative", xdr["void"]()], ["assetTypeCreditAlphanum4", "alphaNum4"], ["assetTypeCreditAlphanum12", "alphaNum12"], ["assetTypePoolShare", "liquidityPoolId"]],
    arms: {
      alphaNum4: xdr.lookup("AlphaNum4"),
      alphaNum12: xdr.lookup("AlphaNum12"),
      liquidityPoolId: xdr.lookup("PoolId")
    }
  });

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[50]++;
  xdr.union("TrustLineEntryExtensionV2Ext", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct TrustLineEntryExtensionV2
  //   {
  //       int32 liquidityPoolUseCount;
  //   
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[51]++;
  xdr.struct("TrustLineEntryExtensionV2", [["liquidityPoolUseCount", xdr.lookup("Int32")], ["ext", xdr.lookup("TrustLineEntryExtensionV2Ext")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //               {
  //               case 0:
  //                   void;
  //               case 2:
  //                   TrustLineEntryExtensionV2 v2;
  //               }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[52]++;
  xdr.union("TrustLineEntryV1Ext", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()], [2, "v2"]],
    arms: {
      v2: xdr.lookup("TrustLineEntryExtensionV2")
    }
  });

  // === xdr source ============================================================
  //
  //   struct
  //           {
  //               Liabilities liabilities;
  //   
  //               union switch (int v)
  //               {
  //               case 0:
  //                   void;
  //               case 2:
  //                   TrustLineEntryExtensionV2 v2;
  //               }
  //               ext;
  //           }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[53]++;
  xdr.struct("TrustLineEntryV1", [["liabilities", xdr.lookup("Liabilities")], ["ext", xdr.lookup("TrustLineEntryV1Ext")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           struct
  //           {
  //               Liabilities liabilities;
  //   
  //               union switch (int v)
  //               {
  //               case 0:
  //                   void;
  //               case 2:
  //                   TrustLineEntryExtensionV2 v2;
  //               }
  //               ext;
  //           } v1;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[54]++;
  xdr.union("TrustLineEntryExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()], [1, "v1"]],
    arms: {
      v1: xdr.lookup("TrustLineEntryV1")
    }
  });

  // === xdr source ============================================================
  //
  //   struct TrustLineEntry
  //   {
  //       AccountID accountID;  // account this trustline belongs to
  //       TrustLineAsset asset; // type of asset (with issuer)
  //       int64 balance;        // how much of this asset the user has.
  //                             // Asset defines the unit for this;
  //   
  //       int64 limit;  // balance cannot be above this
  //       uint32 flags; // see TrustLineFlags
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           struct
  //           {
  //               Liabilities liabilities;
  //   
  //               union switch (int v)
  //               {
  //               case 0:
  //                   void;
  //               case 2:
  //                   TrustLineEntryExtensionV2 v2;
  //               }
  //               ext;
  //           } v1;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[55]++;
  xdr.struct("TrustLineEntry", [["accountId", xdr.lookup("AccountId")], ["asset", xdr.lookup("TrustLineAsset")], ["balance", xdr.lookup("Int64")], ["limit", xdr.lookup("Int64")], ["flags", xdr.lookup("Uint32")], ["ext", xdr.lookup("TrustLineEntryExt")]]);

  // === xdr source ============================================================
  //
  //   enum OfferEntryFlags
  //   {
  //       // an offer with this flag will not act on and take a reverse offer of equal
  //       // price
  //       PASSIVE_FLAG = 1
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[56]++;
  xdr["enum"]("OfferEntryFlags", {
    passiveFlag: 1
  });

  // === xdr source ============================================================
  //
  //   const MASK_OFFERENTRY_FLAGS = 1;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[57]++;
  xdr["const"]("MASK_OFFERENTRY_FLAGS", 1);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[58]++;
  xdr.union("OfferEntryExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct OfferEntry
  //   {
  //       AccountID sellerID;
  //       int64 offerID;
  //       Asset selling; // A
  //       Asset buying;  // B
  //       int64 amount;  // amount of A
  //   
  //       /* price for this offer:
  //           price of A in terms of B
  //           price=AmountB/AmountA=priceNumerator/priceDenominator
  //           price is after fees
  //       */
  //       Price price;
  //       uint32 flags; // see OfferEntryFlags
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[59]++;
  xdr.struct("OfferEntry", [["sellerId", xdr.lookup("AccountId")], ["offerId", xdr.lookup("Int64")], ["selling", xdr.lookup("Asset")], ["buying", xdr.lookup("Asset")], ["amount", xdr.lookup("Int64")], ["price", xdr.lookup("Price")], ["flags", xdr.lookup("Uint32")], ["ext", xdr.lookup("OfferEntryExt")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[60]++;
  xdr.union("DataEntryExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct DataEntry
  //   {
  //       AccountID accountID; // account this data belongs to
  //       string64 dataName;
  //       DataValue dataValue;
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[61]++;
  xdr.struct("DataEntry", [["accountId", xdr.lookup("AccountId")], ["dataName", xdr.lookup("String64")], ["dataValue", xdr.lookup("DataValue")], ["ext", xdr.lookup("DataEntryExt")]]);

  // === xdr source ============================================================
  //
  //   enum ClaimPredicateType
  //   {
  //       CLAIM_PREDICATE_UNCONDITIONAL = 0,
  //       CLAIM_PREDICATE_AND = 1,
  //       CLAIM_PREDICATE_OR = 2,
  //       CLAIM_PREDICATE_NOT = 3,
  //       CLAIM_PREDICATE_BEFORE_ABSOLUTE_TIME = 4,
  //       CLAIM_PREDICATE_BEFORE_RELATIVE_TIME = 5
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[62]++;
  xdr["enum"]("ClaimPredicateType", {
    claimPredicateUnconditional: 0,
    claimPredicateAnd: 1,
    claimPredicateOr: 2,
    claimPredicateNot: 3,
    claimPredicateBeforeAbsoluteTime: 4,
    claimPredicateBeforeRelativeTime: 5
  });

  // === xdr source ============================================================
  //
  //   union ClaimPredicate switch (ClaimPredicateType type)
  //   {
  //   case CLAIM_PREDICATE_UNCONDITIONAL:
  //       void;
  //   case CLAIM_PREDICATE_AND:
  //       ClaimPredicate andPredicates<2>;
  //   case CLAIM_PREDICATE_OR:
  //       ClaimPredicate orPredicates<2>;
  //   case CLAIM_PREDICATE_NOT:
  //       ClaimPredicate* notPredicate;
  //   case CLAIM_PREDICATE_BEFORE_ABSOLUTE_TIME:
  //       int64 absBefore; // Predicate will be true if closeTime < absBefore
  //   case CLAIM_PREDICATE_BEFORE_RELATIVE_TIME:
  //       int64 relBefore; // Seconds since closeTime of the ledger in which the
  //                        // ClaimableBalanceEntry was created
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[63]++;
  xdr.union("ClaimPredicate", {
    switchOn: xdr.lookup("ClaimPredicateType"),
    switchName: "type",
    switches: [["claimPredicateUnconditional", xdr["void"]()], ["claimPredicateAnd", "andPredicates"], ["claimPredicateOr", "orPredicates"], ["claimPredicateNot", "notPredicate"], ["claimPredicateBeforeAbsoluteTime", "absBefore"], ["claimPredicateBeforeRelativeTime", "relBefore"]],
    arms: {
      andPredicates: xdr.varArray(xdr.lookup("ClaimPredicate"), 2),
      orPredicates: xdr.varArray(xdr.lookup("ClaimPredicate"), 2),
      notPredicate: xdr.option(xdr.lookup("ClaimPredicate")),
      absBefore: xdr.lookup("Int64"),
      relBefore: xdr.lookup("Int64")
    }
  });

  // === xdr source ============================================================
  //
  //   enum ClaimantType
  //   {
  //       CLAIMANT_TYPE_V0 = 0
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[64]++;
  xdr["enum"]("ClaimantType", {
    claimantTypeV0: 0
  });

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           AccountID destination;    // The account that can use this condition
  //           ClaimPredicate predicate; // Claimable if predicate is true
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[65]++;
  xdr.struct("ClaimantV0", [["destination", xdr.lookup("AccountId")], ["predicate", xdr.lookup("ClaimPredicate")]]);

  // === xdr source ============================================================
  //
  //   union Claimant switch (ClaimantType type)
  //   {
  //   case CLAIMANT_TYPE_V0:
  //       struct
  //       {
  //           AccountID destination;    // The account that can use this condition
  //           ClaimPredicate predicate; // Claimable if predicate is true
  //       } v0;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[66]++;
  xdr.union("Claimant", {
    switchOn: xdr.lookup("ClaimantType"),
    switchName: "type",
    switches: [["claimantTypeV0", "v0"]],
    arms: {
      v0: xdr.lookup("ClaimantV0")
    }
  });

  // === xdr source ============================================================
  //
  //   enum ClaimableBalanceIDType
  //   {
  //       CLAIMABLE_BALANCE_ID_TYPE_V0 = 0
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[67]++;
  xdr["enum"]("ClaimableBalanceIdType", {
    claimableBalanceIdTypeV0: 0
  });

  // === xdr source ============================================================
  //
  //   union ClaimableBalanceID switch (ClaimableBalanceIDType type)
  //   {
  //   case CLAIMABLE_BALANCE_ID_TYPE_V0:
  //       Hash v0;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[68]++;
  xdr.union("ClaimableBalanceId", {
    switchOn: xdr.lookup("ClaimableBalanceIdType"),
    switchName: "type",
    switches: [["claimableBalanceIdTypeV0", "v0"]],
    arms: {
      v0: xdr.lookup("Hash")
    }
  });

  // === xdr source ============================================================
  //
  //   enum ClaimableBalanceFlags
  //   {
  //       // If set, the issuer account of the asset held by the claimable balance may
  //       // clawback the claimable balance
  //       CLAIMABLE_BALANCE_CLAWBACK_ENABLED_FLAG = 0x1
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[69]++;
  xdr["enum"]("ClaimableBalanceFlags", {
    claimableBalanceClawbackEnabledFlag: 1
  });

  // === xdr source ============================================================
  //
  //   const MASK_CLAIMABLE_BALANCE_FLAGS = 0x1;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[70]++;
  xdr["const"]("MASK_CLAIMABLE_BALANCE_FLAGS", 0x1);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[71]++;
  xdr.union("ClaimableBalanceEntryExtensionV1Ext", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct ClaimableBalanceEntryExtensionV1
  //   {
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   
  //       uint32 flags; // see ClaimableBalanceFlags
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[72]++;
  xdr.struct("ClaimableBalanceEntryExtensionV1", [["ext", xdr.lookup("ClaimableBalanceEntryExtensionV1Ext")], ["flags", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           ClaimableBalanceEntryExtensionV1 v1;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[73]++;
  xdr.union("ClaimableBalanceEntryExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()], [1, "v1"]],
    arms: {
      v1: xdr.lookup("ClaimableBalanceEntryExtensionV1")
    }
  });

  // === xdr source ============================================================
  //
  //   struct ClaimableBalanceEntry
  //   {
  //       // Unique identifier for this ClaimableBalanceEntry
  //       ClaimableBalanceID balanceID;
  //   
  //       // List of claimants with associated predicate
  //       Claimant claimants<10>;
  //   
  //       // Any asset including native
  //       Asset asset;
  //   
  //       // Amount of asset
  //       int64 amount;
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           ClaimableBalanceEntryExtensionV1 v1;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[74]++;
  xdr.struct("ClaimableBalanceEntry", [["balanceId", xdr.lookup("ClaimableBalanceId")], ["claimants", xdr.varArray(xdr.lookup("Claimant"), 10)], ["asset", xdr.lookup("Asset")], ["amount", xdr.lookup("Int64")], ["ext", xdr.lookup("ClaimableBalanceEntryExt")]]);

  // === xdr source ============================================================
  //
  //   struct LiquidityPoolConstantProductParameters
  //   {
  //       Asset assetA; // assetA < assetB
  //       Asset assetB;
  //       int32 fee; // Fee is in basis points, so the actual rate is (fee/100)%
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[75]++;
  xdr.struct("LiquidityPoolConstantProductParameters", [["assetA", xdr.lookup("Asset")], ["assetB", xdr.lookup("Asset")], ["fee", xdr.lookup("Int32")]]);

  // === xdr source ============================================================
  //
  //   struct
  //           {
  //               LiquidityPoolConstantProductParameters params;
  //   
  //               int64 reserveA;        // amount of A in the pool
  //               int64 reserveB;        // amount of B in the pool
  //               int64 totalPoolShares; // total number of pool shares issued
  //               int64 poolSharesTrustLineCount; // number of trust lines for the
  //                                               // associated pool shares
  //           }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[76]++;
  xdr.struct("LiquidityPoolEntryConstantProduct", [["params", xdr.lookup("LiquidityPoolConstantProductParameters")], ["reserveA", xdr.lookup("Int64")], ["reserveB", xdr.lookup("Int64")], ["totalPoolShares", xdr.lookup("Int64")], ["poolSharesTrustLineCount", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   union switch (LiquidityPoolType type)
  //       {
  //       case LIQUIDITY_POOL_CONSTANT_PRODUCT:
  //           struct
  //           {
  //               LiquidityPoolConstantProductParameters params;
  //   
  //               int64 reserveA;        // amount of A in the pool
  //               int64 reserveB;        // amount of B in the pool
  //               int64 totalPoolShares; // total number of pool shares issued
  //               int64 poolSharesTrustLineCount; // number of trust lines for the
  //                                               // associated pool shares
  //           } constantProduct;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[77]++;
  xdr.union("LiquidityPoolEntryBody", {
    switchOn: xdr.lookup("LiquidityPoolType"),
    switchName: "type",
    switches: [["liquidityPoolConstantProduct", "constantProduct"]],
    arms: {
      constantProduct: xdr.lookup("LiquidityPoolEntryConstantProduct")
    }
  });

  // === xdr source ============================================================
  //
  //   struct LiquidityPoolEntry
  //   {
  //       PoolID liquidityPoolID;
  //   
  //       union switch (LiquidityPoolType type)
  //       {
  //       case LIQUIDITY_POOL_CONSTANT_PRODUCT:
  //           struct
  //           {
  //               LiquidityPoolConstantProductParameters params;
  //   
  //               int64 reserveA;        // amount of A in the pool
  //               int64 reserveB;        // amount of B in the pool
  //               int64 totalPoolShares; // total number of pool shares issued
  //               int64 poolSharesTrustLineCount; // number of trust lines for the
  //                                               // associated pool shares
  //           } constantProduct;
  //       }
  //       body;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[78]++;
  xdr.struct("LiquidityPoolEntry", [["liquidityPoolId", xdr.lookup("PoolId")], ["body", xdr.lookup("LiquidityPoolEntryBody")]]);

  // === xdr source ============================================================
  //
  //   enum ContractDataDurability {
  //       TEMPORARY = 0,
  //       PERSISTENT = 1
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[79]++;
  xdr["enum"]("ContractDataDurability", {
    temporary: 0,
    persistent: 1
  });

  // === xdr source ============================================================
  //
  //   struct ContractDataEntry {
  //       ExtensionPoint ext;
  //   
  //       SCAddress contract;
  //       SCVal key;
  //       ContractDataDurability durability;
  //       SCVal val;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[80]++;
  xdr.struct("ContractDataEntry", [["ext", xdr.lookup("ExtensionPoint")], ["contract", xdr.lookup("ScAddress")], ["key", xdr.lookup("ScVal")], ["durability", xdr.lookup("ContractDataDurability")], ["val", xdr.lookup("ScVal")]]);

  // === xdr source ============================================================
  //
  //   struct ContractCodeCostInputs {
  //       ExtensionPoint ext;
  //       uint32 nInstructions;
  //       uint32 nFunctions;
  //       uint32 nGlobals;
  //       uint32 nTableEntries;
  //       uint32 nTypes;
  //       uint32 nDataSegments;
  //       uint32 nElemSegments;
  //       uint32 nImports;
  //       uint32 nExports;
  //       uint32 nDataSegmentBytes;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[81]++;
  xdr.struct("ContractCodeCostInputs", [["ext", xdr.lookup("ExtensionPoint")], ["nInstructions", xdr.lookup("Uint32")], ["nFunctions", xdr.lookup("Uint32")], ["nGlobals", xdr.lookup("Uint32")], ["nTableEntries", xdr.lookup("Uint32")], ["nTypes", xdr.lookup("Uint32")], ["nDataSegments", xdr.lookup("Uint32")], ["nElemSegments", xdr.lookup("Uint32")], ["nImports", xdr.lookup("Uint32")], ["nExports", xdr.lookup("Uint32")], ["nDataSegmentBytes", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   struct
  //               {
  //                   ExtensionPoint ext;
  //                   ContractCodeCostInputs costInputs;
  //               }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[82]++;
  xdr.struct("ContractCodeEntryV1", [["ext", xdr.lookup("ExtensionPoint")], ["costInputs", xdr.lookup("ContractCodeCostInputs")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //           case 0:
  //               void;
  //           case 1:
  //               struct
  //               {
  //                   ExtensionPoint ext;
  //                   ContractCodeCostInputs costInputs;
  //               } v1;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[83]++;
  xdr.union("ContractCodeEntryExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()], [1, "v1"]],
    arms: {
      v1: xdr.lookup("ContractCodeEntryV1")
    }
  });

  // === xdr source ============================================================
  //
  //   struct ContractCodeEntry {
  //       union switch (int v)
  //       {
  //           case 0:
  //               void;
  //           case 1:
  //               struct
  //               {
  //                   ExtensionPoint ext;
  //                   ContractCodeCostInputs costInputs;
  //               } v1;
  //       } ext;
  //   
  //       Hash hash;
  //       opaque code<>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[84]++;
  xdr.struct("ContractCodeEntry", [["ext", xdr.lookup("ContractCodeEntryExt")], ["hash", xdr.lookup("Hash")], ["code", xdr.varOpaque()]]);

  // === xdr source ============================================================
  //
  //   struct TTLEntry {
  //       // Hash of the LedgerKey that is associated with this TTLEntry
  //       Hash keyHash;
  //       uint32 liveUntilLedgerSeq;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[85]++;
  xdr.struct("TtlEntry", [["keyHash", xdr.lookup("Hash")], ["liveUntilLedgerSeq", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[86]++;
  xdr.union("LedgerEntryExtensionV1Ext", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct LedgerEntryExtensionV1
  //   {
  //       SponsorshipDescriptor sponsoringID;
  //   
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[87]++;
  xdr.struct("LedgerEntryExtensionV1", [["sponsoringId", xdr.lookup("SponsorshipDescriptor")], ["ext", xdr.lookup("LedgerEntryExtensionV1Ext")]]);

  // === xdr source ============================================================
  //
  //   union switch (LedgerEntryType type)
  //       {
  //       case ACCOUNT:
  //           AccountEntry account;
  //       case TRUSTLINE:
  //           TrustLineEntry trustLine;
  //       case OFFER:
  //           OfferEntry offer;
  //       case DATA:
  //           DataEntry data;
  //       case CLAIMABLE_BALANCE:
  //           ClaimableBalanceEntry claimableBalance;
  //       case LIQUIDITY_POOL:
  //           LiquidityPoolEntry liquidityPool;
  //       case CONTRACT_DATA:
  //           ContractDataEntry contractData;
  //       case CONTRACT_CODE:
  //           ContractCodeEntry contractCode;
  //       case CONFIG_SETTING:
  //           ConfigSettingEntry configSetting;
  //       case TTL:
  //           TTLEntry ttl;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[88]++;
  xdr.union("LedgerEntryData", {
    switchOn: xdr.lookup("LedgerEntryType"),
    switchName: "type",
    switches: [["account", "account"], ["trustline", "trustLine"], ["offer", "offer"], ["data", "data"], ["claimableBalance", "claimableBalance"], ["liquidityPool", "liquidityPool"], ["contractData", "contractData"], ["contractCode", "contractCode"], ["configSetting", "configSetting"], ["ttl", "ttl"]],
    arms: {
      account: xdr.lookup("AccountEntry"),
      trustLine: xdr.lookup("TrustLineEntry"),
      offer: xdr.lookup("OfferEntry"),
      data: xdr.lookup("DataEntry"),
      claimableBalance: xdr.lookup("ClaimableBalanceEntry"),
      liquidityPool: xdr.lookup("LiquidityPoolEntry"),
      contractData: xdr.lookup("ContractDataEntry"),
      contractCode: xdr.lookup("ContractCodeEntry"),
      configSetting: xdr.lookup("ConfigSettingEntry"),
      ttl: xdr.lookup("TtlEntry")
    }
  });

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           LedgerEntryExtensionV1 v1;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[89]++;
  xdr.union("LedgerEntryExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()], [1, "v1"]],
    arms: {
      v1: xdr.lookup("LedgerEntryExtensionV1")
    }
  });

  // === xdr source ============================================================
  //
  //   struct LedgerEntry
  //   {
  //       uint32 lastModifiedLedgerSeq; // ledger the LedgerEntry was last changed
  //   
  //       union switch (LedgerEntryType type)
  //       {
  //       case ACCOUNT:
  //           AccountEntry account;
  //       case TRUSTLINE:
  //           TrustLineEntry trustLine;
  //       case OFFER:
  //           OfferEntry offer;
  //       case DATA:
  //           DataEntry data;
  //       case CLAIMABLE_BALANCE:
  //           ClaimableBalanceEntry claimableBalance;
  //       case LIQUIDITY_POOL:
  //           LiquidityPoolEntry liquidityPool;
  //       case CONTRACT_DATA:
  //           ContractDataEntry contractData;
  //       case CONTRACT_CODE:
  //           ContractCodeEntry contractCode;
  //       case CONFIG_SETTING:
  //           ConfigSettingEntry configSetting;
  //       case TTL:
  //           TTLEntry ttl;
  //       }
  //       data;
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           LedgerEntryExtensionV1 v1;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[90]++;
  xdr.struct("LedgerEntry", [["lastModifiedLedgerSeq", xdr.lookup("Uint32")], ["data", xdr.lookup("LedgerEntryData")], ["ext", xdr.lookup("LedgerEntryExt")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           AccountID accountID;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[91]++;
  xdr.struct("LedgerKeyAccount", [["accountId", xdr.lookup("AccountId")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           AccountID accountID;
  //           TrustLineAsset asset;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[92]++;
  xdr.struct("LedgerKeyTrustLine", [["accountId", xdr.lookup("AccountId")], ["asset", xdr.lookup("TrustLineAsset")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           AccountID sellerID;
  //           int64 offerID;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[93]++;
  xdr.struct("LedgerKeyOffer", [["sellerId", xdr.lookup("AccountId")], ["offerId", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           AccountID accountID;
  //           string64 dataName;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[94]++;
  xdr.struct("LedgerKeyData", [["accountId", xdr.lookup("AccountId")], ["dataName", xdr.lookup("String64")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           ClaimableBalanceID balanceID;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[95]++;
  xdr.struct("LedgerKeyClaimableBalance", [["balanceId", xdr.lookup("ClaimableBalanceId")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           PoolID liquidityPoolID;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[96]++;
  xdr.struct("LedgerKeyLiquidityPool", [["liquidityPoolId", xdr.lookup("PoolId")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           SCAddress contract;
  //           SCVal key;
  //           ContractDataDurability durability;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[97]++;
  xdr.struct("LedgerKeyContractData", [["contract", xdr.lookup("ScAddress")], ["key", xdr.lookup("ScVal")], ["durability", xdr.lookup("ContractDataDurability")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           Hash hash;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[98]++;
  xdr.struct("LedgerKeyContractCode", [["hash", xdr.lookup("Hash")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           ConfigSettingID configSettingID;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[99]++;
  xdr.struct("LedgerKeyConfigSetting", [["configSettingId", xdr.lookup("ConfigSettingId")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           // Hash of the LedgerKey that is associated with this TTLEntry
  //           Hash keyHash;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[100]++;
  xdr.struct("LedgerKeyTtl", [["keyHash", xdr.lookup("Hash")]]);

  // === xdr source ============================================================
  //
  //   union LedgerKey switch (LedgerEntryType type)
  //   {
  //   case ACCOUNT:
  //       struct
  //       {
  //           AccountID accountID;
  //       } account;
  //   
  //   case TRUSTLINE:
  //       struct
  //       {
  //           AccountID accountID;
  //           TrustLineAsset asset;
  //       } trustLine;
  //   
  //   case OFFER:
  //       struct
  //       {
  //           AccountID sellerID;
  //           int64 offerID;
  //       } offer;
  //   
  //   case DATA:
  //       struct
  //       {
  //           AccountID accountID;
  //           string64 dataName;
  //       } data;
  //   
  //   case CLAIMABLE_BALANCE:
  //       struct
  //       {
  //           ClaimableBalanceID balanceID;
  //       } claimableBalance;
  //   
  //   case LIQUIDITY_POOL:
  //       struct
  //       {
  //           PoolID liquidityPoolID;
  //       } liquidityPool;
  //   case CONTRACT_DATA:
  //       struct
  //       {
  //           SCAddress contract;
  //           SCVal key;
  //           ContractDataDurability durability;
  //       } contractData;
  //   case CONTRACT_CODE:
  //       struct
  //       {
  //           Hash hash;
  //       } contractCode;
  //   case CONFIG_SETTING:
  //       struct
  //       {
  //           ConfigSettingID configSettingID;
  //       } configSetting;
  //   case TTL:
  //       struct
  //       {
  //           // Hash of the LedgerKey that is associated with this TTLEntry
  //           Hash keyHash;
  //       } ttl;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[101]++;
  xdr.union("LedgerKey", {
    switchOn: xdr.lookup("LedgerEntryType"),
    switchName: "type",
    switches: [["account", "account"], ["trustline", "trustLine"], ["offer", "offer"], ["data", "data"], ["claimableBalance", "claimableBalance"], ["liquidityPool", "liquidityPool"], ["contractData", "contractData"], ["contractCode", "contractCode"], ["configSetting", "configSetting"], ["ttl", "ttl"]],
    arms: {
      account: xdr.lookup("LedgerKeyAccount"),
      trustLine: xdr.lookup("LedgerKeyTrustLine"),
      offer: xdr.lookup("LedgerKeyOffer"),
      data: xdr.lookup("LedgerKeyData"),
      claimableBalance: xdr.lookup("LedgerKeyClaimableBalance"),
      liquidityPool: xdr.lookup("LedgerKeyLiquidityPool"),
      contractData: xdr.lookup("LedgerKeyContractData"),
      contractCode: xdr.lookup("LedgerKeyContractCode"),
      configSetting: xdr.lookup("LedgerKeyConfigSetting"),
      ttl: xdr.lookup("LedgerKeyTtl")
    }
  });

  // === xdr source ============================================================
  //
  //   enum EnvelopeType
  //   {
  //       ENVELOPE_TYPE_TX_V0 = 0,
  //       ENVELOPE_TYPE_SCP = 1,
  //       ENVELOPE_TYPE_TX = 2,
  //       ENVELOPE_TYPE_AUTH = 3,
  //       ENVELOPE_TYPE_SCPVALUE = 4,
  //       ENVELOPE_TYPE_TX_FEE_BUMP = 5,
  //       ENVELOPE_TYPE_OP_ID = 6,
  //       ENVELOPE_TYPE_POOL_REVOKE_OP_ID = 7,
  //       ENVELOPE_TYPE_CONTRACT_ID = 8,
  //       ENVELOPE_TYPE_SOROBAN_AUTHORIZATION = 9
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[102]++;
  xdr["enum"]("EnvelopeType", {
    envelopeTypeTxV0: 0,
    envelopeTypeScp: 1,
    envelopeTypeTx: 2,
    envelopeTypeAuth: 3,
    envelopeTypeScpvalue: 4,
    envelopeTypeTxFeeBump: 5,
    envelopeTypeOpId: 6,
    envelopeTypePoolRevokeOpId: 7,
    envelopeTypeContractId: 8,
    envelopeTypeSorobanAuthorization: 9
  });

  // === xdr source ============================================================
  //
  //   typedef opaque UpgradeType<128>;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[103]++;
  xdr.typedef("UpgradeType", xdr.varOpaque(128));

  // === xdr source ============================================================
  //
  //   enum StellarValueType
  //   {
  //       STELLAR_VALUE_BASIC = 0,
  //       STELLAR_VALUE_SIGNED = 1
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[104]++;
  xdr["enum"]("StellarValueType", {
    stellarValueBasic: 0,
    stellarValueSigned: 1
  });

  // === xdr source ============================================================
  //
  //   struct LedgerCloseValueSignature
  //   {
  //       NodeID nodeID;       // which node introduced the value
  //       Signature signature; // nodeID's signature
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[105]++;
  xdr.struct("LedgerCloseValueSignature", [["nodeId", xdr.lookup("NodeId")], ["signature", xdr.lookup("Signature")]]);

  // === xdr source ============================================================
  //
  //   union switch (StellarValueType v)
  //       {
  //       case STELLAR_VALUE_BASIC:
  //           void;
  //       case STELLAR_VALUE_SIGNED:
  //           LedgerCloseValueSignature lcValueSignature;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[106]++;
  xdr.union("StellarValueExt", {
    switchOn: xdr.lookup("StellarValueType"),
    switchName: "v",
    switches: [["stellarValueBasic", xdr["void"]()], ["stellarValueSigned", "lcValueSignature"]],
    arms: {
      lcValueSignature: xdr.lookup("LedgerCloseValueSignature")
    }
  });

  // === xdr source ============================================================
  //
  //   struct StellarValue
  //   {
  //       Hash txSetHash;      // transaction set to apply to previous ledger
  //       TimePoint closeTime; // network close time
  //   
  //       // upgrades to apply to the previous ledger (usually empty)
  //       // this is a vector of encoded 'LedgerUpgrade' so that nodes can drop
  //       // unknown steps during consensus if needed.
  //       // see notes below on 'LedgerUpgrade' for more detail
  //       // max size is dictated by number of upgrade types (+ room for future)
  //       UpgradeType upgrades<6>;
  //   
  //       // reserved for future use
  //       union switch (StellarValueType v)
  //       {
  //       case STELLAR_VALUE_BASIC:
  //           void;
  //       case STELLAR_VALUE_SIGNED:
  //           LedgerCloseValueSignature lcValueSignature;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[107]++;
  xdr.struct("StellarValue", [["txSetHash", xdr.lookup("Hash")], ["closeTime", xdr.lookup("TimePoint")], ["upgrades", xdr.varArray(xdr.lookup("UpgradeType"), 6)], ["ext", xdr.lookup("StellarValueExt")]]);

  // === xdr source ============================================================
  //
  //   const MASK_LEDGER_HEADER_FLAGS = 0x7;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[108]++;
  xdr["const"]("MASK_LEDGER_HEADER_FLAGS", 0x7);

  // === xdr source ============================================================
  //
  //   enum LedgerHeaderFlags
  //   {
  //       DISABLE_LIQUIDITY_POOL_TRADING_FLAG = 0x1,
  //       DISABLE_LIQUIDITY_POOL_DEPOSIT_FLAG = 0x2,
  //       DISABLE_LIQUIDITY_POOL_WITHDRAWAL_FLAG = 0x4
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[109]++;
  xdr["enum"]("LedgerHeaderFlags", {
    disableLiquidityPoolTradingFlag: 1,
    disableLiquidityPoolDepositFlag: 2,
    disableLiquidityPoolWithdrawalFlag: 4
  });

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[110]++;
  xdr.union("LedgerHeaderExtensionV1Ext", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct LedgerHeaderExtensionV1
  //   {
  //       uint32 flags; // LedgerHeaderFlags
  //   
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[111]++;
  xdr.struct("LedgerHeaderExtensionV1", [["flags", xdr.lookup("Uint32")], ["ext", xdr.lookup("LedgerHeaderExtensionV1Ext")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           LedgerHeaderExtensionV1 v1;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[112]++;
  xdr.union("LedgerHeaderExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()], [1, "v1"]],
    arms: {
      v1: xdr.lookup("LedgerHeaderExtensionV1")
    }
  });

  // === xdr source ============================================================
  //
  //   struct LedgerHeader
  //   {
  //       uint32 ledgerVersion;    // the protocol version of the ledger
  //       Hash previousLedgerHash; // hash of the previous ledger header
  //       StellarValue scpValue;   // what consensus agreed to
  //       Hash txSetResultHash;    // the TransactionResultSet that led to this ledger
  //       Hash bucketListHash;     // hash of the ledger state
  //   
  //       uint32 ledgerSeq; // sequence number of this ledger
  //   
  //       int64 totalCoins; // total number of stroops in existence.
  //                         // 10,000,000 stroops in 1 XLM
  //   
  //       int64 feePool;       // fees burned since last inflation run
  //       uint32 inflationSeq; // inflation sequence number
  //   
  //       uint64 idPool; // last used global ID, used for generating objects
  //   
  //       uint32 baseFee;     // base fee per operation in stroops
  //       uint32 baseReserve; // account base reserve in stroops
  //   
  //       uint32 maxTxSetSize; // maximum size a transaction set can be
  //   
  //       Hash skipList[4]; // hashes of ledgers in the past. allows you to jump back
  //                         // in time without walking the chain back ledger by ledger
  //                         // each slot contains the oldest ledger that is mod of
  //                         // either 50  5000  50000 or 500000 depending on index
  //                         // skipList[0] mod(50), skipList[1] mod(5000), etc
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           LedgerHeaderExtensionV1 v1;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[113]++;
  xdr.struct("LedgerHeader", [["ledgerVersion", xdr.lookup("Uint32")], ["previousLedgerHash", xdr.lookup("Hash")], ["scpValue", xdr.lookup("StellarValue")], ["txSetResultHash", xdr.lookup("Hash")], ["bucketListHash", xdr.lookup("Hash")], ["ledgerSeq", xdr.lookup("Uint32")], ["totalCoins", xdr.lookup("Int64")], ["feePool", xdr.lookup("Int64")], ["inflationSeq", xdr.lookup("Uint32")], ["idPool", xdr.lookup("Uint64")], ["baseFee", xdr.lookup("Uint32")], ["baseReserve", xdr.lookup("Uint32")], ["maxTxSetSize", xdr.lookup("Uint32")], ["skipList", xdr.array(xdr.lookup("Hash"), 4)], ["ext", xdr.lookup("LedgerHeaderExt")]]);

  // === xdr source ============================================================
  //
  //   enum LedgerUpgradeType
  //   {
  //       LEDGER_UPGRADE_VERSION = 1,
  //       LEDGER_UPGRADE_BASE_FEE = 2,
  //       LEDGER_UPGRADE_MAX_TX_SET_SIZE = 3,
  //       LEDGER_UPGRADE_BASE_RESERVE = 4,
  //       LEDGER_UPGRADE_FLAGS = 5,
  //       LEDGER_UPGRADE_CONFIG = 6,
  //       LEDGER_UPGRADE_MAX_SOROBAN_TX_SET_SIZE = 7
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[114]++;
  xdr["enum"]("LedgerUpgradeType", {
    ledgerUpgradeVersion: 1,
    ledgerUpgradeBaseFee: 2,
    ledgerUpgradeMaxTxSetSize: 3,
    ledgerUpgradeBaseReserve: 4,
    ledgerUpgradeFlags: 5,
    ledgerUpgradeConfig: 6,
    ledgerUpgradeMaxSorobanTxSetSize: 7
  });

  // === xdr source ============================================================
  //
  //   struct ConfigUpgradeSetKey {
  //       Hash contractID;
  //       Hash contentHash;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[115]++;
  xdr.struct("ConfigUpgradeSetKey", [["contractId", xdr.lookup("Hash")], ["contentHash", xdr.lookup("Hash")]]);

  // === xdr source ============================================================
  //
  //   union LedgerUpgrade switch (LedgerUpgradeType type)
  //   {
  //   case LEDGER_UPGRADE_VERSION:
  //       uint32 newLedgerVersion; // update ledgerVersion
  //   case LEDGER_UPGRADE_BASE_FEE:
  //       uint32 newBaseFee; // update baseFee
  //   case LEDGER_UPGRADE_MAX_TX_SET_SIZE:
  //       uint32 newMaxTxSetSize; // update maxTxSetSize
  //   case LEDGER_UPGRADE_BASE_RESERVE:
  //       uint32 newBaseReserve; // update baseReserve
  //   case LEDGER_UPGRADE_FLAGS:
  //       uint32 newFlags; // update flags
  //   case LEDGER_UPGRADE_CONFIG:
  //       // Update arbitrary `ConfigSetting` entries identified by the key.
  //       ConfigUpgradeSetKey newConfig;
  //   case LEDGER_UPGRADE_MAX_SOROBAN_TX_SET_SIZE:
  //       // Update ConfigSettingContractExecutionLanesV0.ledgerMaxTxCount without
  //       // using `LEDGER_UPGRADE_CONFIG`.
  //       uint32 newMaxSorobanTxSetSize;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[116]++;
  xdr.union("LedgerUpgrade", {
    switchOn: xdr.lookup("LedgerUpgradeType"),
    switchName: "type",
    switches: [["ledgerUpgradeVersion", "newLedgerVersion"], ["ledgerUpgradeBaseFee", "newBaseFee"], ["ledgerUpgradeMaxTxSetSize", "newMaxTxSetSize"], ["ledgerUpgradeBaseReserve", "newBaseReserve"], ["ledgerUpgradeFlags", "newFlags"], ["ledgerUpgradeConfig", "newConfig"], ["ledgerUpgradeMaxSorobanTxSetSize", "newMaxSorobanTxSetSize"]],
    arms: {
      newLedgerVersion: xdr.lookup("Uint32"),
      newBaseFee: xdr.lookup("Uint32"),
      newMaxTxSetSize: xdr.lookup("Uint32"),
      newBaseReserve: xdr.lookup("Uint32"),
      newFlags: xdr.lookup("Uint32"),
      newConfig: xdr.lookup("ConfigUpgradeSetKey"),
      newMaxSorobanTxSetSize: xdr.lookup("Uint32")
    }
  });

  // === xdr source ============================================================
  //
  //   struct ConfigUpgradeSet {
  //       ConfigSettingEntry updatedEntry<>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[117]++;
  xdr.struct("ConfigUpgradeSet", [["updatedEntry", xdr.varArray(xdr.lookup("ConfigSettingEntry"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   enum BucketEntryType
  //   {
  //       METAENTRY =
  //           -1, // At-and-after protocol 11: bucket metadata, should come first.
  //       LIVEENTRY = 0, // Before protocol 11: created-or-updated;
  //                      // At-and-after protocol 11: only updated.
  //       DEADENTRY = 1,
  //       INITENTRY = 2 // At-and-after protocol 11: only created.
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[118]++;
  xdr["enum"]("BucketEntryType", {
    metaentry: -1,
    liveentry: 0,
    deadentry: 1,
    initentry: 2
  });

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[119]++;
  xdr.union("BucketMetadataExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct BucketMetadata
  //   {
  //       // Indicates the protocol version used to create / merge this bucket.
  //       uint32 ledgerVersion;
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[120]++;
  xdr.struct("BucketMetadata", [["ledgerVersion", xdr.lookup("Uint32")], ["ext", xdr.lookup("BucketMetadataExt")]]);

  // === xdr source ============================================================
  //
  //   union BucketEntry switch (BucketEntryType type)
  //   {
  //   case LIVEENTRY:
  //   case INITENTRY:
  //       LedgerEntry liveEntry;
  //   
  //   case DEADENTRY:
  //       LedgerKey deadEntry;
  //   case METAENTRY:
  //       BucketMetadata metaEntry;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[121]++;
  xdr.union("BucketEntry", {
    switchOn: xdr.lookup("BucketEntryType"),
    switchName: "type",
    switches: [["liveentry", "liveEntry"], ["initentry", "liveEntry"], ["deadentry", "deadEntry"], ["metaentry", "metaEntry"]],
    arms: {
      liveEntry: xdr.lookup("LedgerEntry"),
      deadEntry: xdr.lookup("LedgerKey"),
      metaEntry: xdr.lookup("BucketMetadata")
    }
  });

  // === xdr source ============================================================
  //
  //   enum TxSetComponentType
  //   {
  //     // txs with effective fee <= bid derived from a base fee (if any).
  //     // If base fee is not specified, no discount is applied.
  //     TXSET_COMP_TXS_MAYBE_DISCOUNTED_FEE = 0
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[122]++;
  xdr["enum"]("TxSetComponentType", {
    txsetCompTxsMaybeDiscountedFee: 0
  });

  // === xdr source ============================================================
  //
  //   struct
  //     {
  //       int64* baseFee;
  //       TransactionEnvelope txs<>;
  //     }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[123]++;
  xdr.struct("TxSetComponentTxsMaybeDiscountedFee", [["baseFee", xdr.option(xdr.lookup("Int64"))], ["txes", xdr.varArray(xdr.lookup("TransactionEnvelope"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   union TxSetComponent switch (TxSetComponentType type)
  //   {
  //   case TXSET_COMP_TXS_MAYBE_DISCOUNTED_FEE:
  //     struct
  //     {
  //       int64* baseFee;
  //       TransactionEnvelope txs<>;
  //     } txsMaybeDiscountedFee;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[124]++;
  xdr.union("TxSetComponent", {
    switchOn: xdr.lookup("TxSetComponentType"),
    switchName: "type",
    switches: [["txsetCompTxsMaybeDiscountedFee", "txsMaybeDiscountedFee"]],
    arms: {
      txsMaybeDiscountedFee: xdr.lookup("TxSetComponentTxsMaybeDiscountedFee")
    }
  });

  // === xdr source ============================================================
  //
  //   union TransactionPhase switch (int v)
  //   {
  //   case 0:
  //       TxSetComponent v0Components<>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[125]++;
  xdr.union("TransactionPhase", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, "v0Components"]],
    arms: {
      v0Components: xdr.varArray(xdr.lookup("TxSetComponent"), 2147483647)
    }
  });

  // === xdr source ============================================================
  //
  //   struct TransactionSet
  //   {
  //       Hash previousLedgerHash;
  //       TransactionEnvelope txs<>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[126]++;
  xdr.struct("TransactionSet", [["previousLedgerHash", xdr.lookup("Hash")], ["txes", xdr.varArray(xdr.lookup("TransactionEnvelope"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   struct TransactionSetV1
  //   {
  //       Hash previousLedgerHash;
  //       TransactionPhase phases<>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[127]++;
  xdr.struct("TransactionSetV1", [["previousLedgerHash", xdr.lookup("Hash")], ["phases", xdr.varArray(xdr.lookup("TransactionPhase"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   union GeneralizedTransactionSet switch (int v)
  //   {
  //   // We consider the legacy TransactionSet to be v0.
  //   case 1:
  //       TransactionSetV1 v1TxSet;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[128]++;
  xdr.union("GeneralizedTransactionSet", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[1, "v1TxSet"]],
    arms: {
      v1TxSet: xdr.lookup("TransactionSetV1")
    }
  });

  // === xdr source ============================================================
  //
  //   struct TransactionResultPair
  //   {
  //       Hash transactionHash;
  //       TransactionResult result; // result for the transaction
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[129]++;
  xdr.struct("TransactionResultPair", [["transactionHash", xdr.lookup("Hash")], ["result", xdr.lookup("TransactionResult")]]);

  // === xdr source ============================================================
  //
  //   struct TransactionResultSet
  //   {
  //       TransactionResultPair results<>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[130]++;
  xdr.struct("TransactionResultSet", [["results", xdr.varArray(xdr.lookup("TransactionResultPair"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           GeneralizedTransactionSet generalizedTxSet;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[131]++;
  xdr.union("TransactionHistoryEntryExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()], [1, "generalizedTxSet"]],
    arms: {
      generalizedTxSet: xdr.lookup("GeneralizedTransactionSet")
    }
  });

  // === xdr source ============================================================
  //
  //   struct TransactionHistoryEntry
  //   {
  //       uint32 ledgerSeq;
  //       TransactionSet txSet;
  //   
  //       // when v != 0, txSet must be empty
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           GeneralizedTransactionSet generalizedTxSet;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[132]++;
  xdr.struct("TransactionHistoryEntry", [["ledgerSeq", xdr.lookup("Uint32")], ["txSet", xdr.lookup("TransactionSet")], ["ext", xdr.lookup("TransactionHistoryEntryExt")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[133]++;
  xdr.union("TransactionHistoryResultEntryExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct TransactionHistoryResultEntry
  //   {
  //       uint32 ledgerSeq;
  //       TransactionResultSet txResultSet;
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[134]++;
  xdr.struct("TransactionHistoryResultEntry", [["ledgerSeq", xdr.lookup("Uint32")], ["txResultSet", xdr.lookup("TransactionResultSet")], ["ext", xdr.lookup("TransactionHistoryResultEntryExt")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[135]++;
  xdr.union("LedgerHeaderHistoryEntryExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct LedgerHeaderHistoryEntry
  //   {
  //       Hash hash;
  //       LedgerHeader header;
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[136]++;
  xdr.struct("LedgerHeaderHistoryEntry", [["hash", xdr.lookup("Hash")], ["header", xdr.lookup("LedgerHeader")], ["ext", xdr.lookup("LedgerHeaderHistoryEntryExt")]]);

  // === xdr source ============================================================
  //
  //   struct LedgerSCPMessages
  //   {
  //       uint32 ledgerSeq;
  //       SCPEnvelope messages<>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[137]++;
  xdr.struct("LedgerScpMessages", [["ledgerSeq", xdr.lookup("Uint32")], ["messages", xdr.varArray(xdr.lookup("ScpEnvelope"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   struct SCPHistoryEntryV0
  //   {
  //       SCPQuorumSet quorumSets<>; // additional quorum sets used by ledgerMessages
  //       LedgerSCPMessages ledgerMessages;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[138]++;
  xdr.struct("ScpHistoryEntryV0", [["quorumSets", xdr.varArray(xdr.lookup("ScpQuorumSet"), 2147483647)], ["ledgerMessages", xdr.lookup("LedgerScpMessages")]]);

  // === xdr source ============================================================
  //
  //   union SCPHistoryEntry switch (int v)
  //   {
  //   case 0:
  //       SCPHistoryEntryV0 v0;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[139]++;
  xdr.union("ScpHistoryEntry", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, "v0"]],
    arms: {
      v0: xdr.lookup("ScpHistoryEntryV0")
    }
  });

  // === xdr source ============================================================
  //
  //   enum LedgerEntryChangeType
  //   {
  //       LEDGER_ENTRY_CREATED = 0, // entry was added to the ledger
  //       LEDGER_ENTRY_UPDATED = 1, // entry was modified in the ledger
  //       LEDGER_ENTRY_REMOVED = 2, // entry was removed from the ledger
  //       LEDGER_ENTRY_STATE = 3    // value of the entry
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[140]++;
  xdr["enum"]("LedgerEntryChangeType", {
    ledgerEntryCreated: 0,
    ledgerEntryUpdated: 1,
    ledgerEntryRemoved: 2,
    ledgerEntryState: 3
  });

  // === xdr source ============================================================
  //
  //   union LedgerEntryChange switch (LedgerEntryChangeType type)
  //   {
  //   case LEDGER_ENTRY_CREATED:
  //       LedgerEntry created;
  //   case LEDGER_ENTRY_UPDATED:
  //       LedgerEntry updated;
  //   case LEDGER_ENTRY_REMOVED:
  //       LedgerKey removed;
  //   case LEDGER_ENTRY_STATE:
  //       LedgerEntry state;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[141]++;
  xdr.union("LedgerEntryChange", {
    switchOn: xdr.lookup("LedgerEntryChangeType"),
    switchName: "type",
    switches: [["ledgerEntryCreated", "created"], ["ledgerEntryUpdated", "updated"], ["ledgerEntryRemoved", "removed"], ["ledgerEntryState", "state"]],
    arms: {
      created: xdr.lookup("LedgerEntry"),
      updated: xdr.lookup("LedgerEntry"),
      removed: xdr.lookup("LedgerKey"),
      state: xdr.lookup("LedgerEntry")
    }
  });

  // === xdr source ============================================================
  //
  //   typedef LedgerEntryChange LedgerEntryChanges<>;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[142]++;
  xdr.typedef("LedgerEntryChanges", xdr.varArray(xdr.lookup("LedgerEntryChange"), 2147483647));

  // === xdr source ============================================================
  //
  //   struct OperationMeta
  //   {
  //       LedgerEntryChanges changes;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[143]++;
  xdr.struct("OperationMeta", [["changes", xdr.lookup("LedgerEntryChanges")]]);

  // === xdr source ============================================================
  //
  //   struct TransactionMetaV1
  //   {
  //       LedgerEntryChanges txChanges; // tx level changes if any
  //       OperationMeta operations<>;   // meta for each operation
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[144]++;
  xdr.struct("TransactionMetaV1", [["txChanges", xdr.lookup("LedgerEntryChanges")], ["operations", xdr.varArray(xdr.lookup("OperationMeta"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   struct TransactionMetaV2
  //   {
  //       LedgerEntryChanges txChangesBefore; // tx level changes before operations
  //                                           // are applied if any
  //       OperationMeta operations<>;         // meta for each operation
  //       LedgerEntryChanges txChangesAfter;  // tx level changes after operations are
  //                                           // applied if any
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[145]++;
  xdr.struct("TransactionMetaV2", [["txChangesBefore", xdr.lookup("LedgerEntryChanges")], ["operations", xdr.varArray(xdr.lookup("OperationMeta"), 2147483647)], ["txChangesAfter", xdr.lookup("LedgerEntryChanges")]]);

  // === xdr source ============================================================
  //
  //   enum ContractEventType
  //   {
  //       SYSTEM = 0,
  //       CONTRACT = 1,
  //       DIAGNOSTIC = 2
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[146]++;
  xdr["enum"]("ContractEventType", {
    system: 0,
    contract: 1,
    diagnostic: 2
  });

  // === xdr source ============================================================
  //
  //   struct
  //           {
  //               SCVal topics<>;
  //               SCVal data;
  //           }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[147]++;
  xdr.struct("ContractEventV0", [["topics", xdr.varArray(xdr.lookup("ScVal"), 2147483647)], ["data", xdr.lookup("ScVal")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           struct
  //           {
  //               SCVal topics<>;
  //               SCVal data;
  //           } v0;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[148]++;
  xdr.union("ContractEventBody", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, "v0"]],
    arms: {
      v0: xdr.lookup("ContractEventV0")
    }
  });

  // === xdr source ============================================================
  //
  //   struct ContractEvent
  //   {
  //       // We can use this to add more fields, or because it
  //       // is first, to change ContractEvent into a union.
  //       ExtensionPoint ext;
  //   
  //       Hash* contractID;
  //       ContractEventType type;
  //   
  //       union switch (int v)
  //       {
  //       case 0:
  //           struct
  //           {
  //               SCVal topics<>;
  //               SCVal data;
  //           } v0;
  //       }
  //       body;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[149]++;
  xdr.struct("ContractEvent", [["ext", xdr.lookup("ExtensionPoint")], ["contractId", xdr.option(xdr.lookup("Hash"))], ["type", xdr.lookup("ContractEventType")], ["body", xdr.lookup("ContractEventBody")]]);

  // === xdr source ============================================================
  //
  //   struct DiagnosticEvent
  //   {
  //       bool inSuccessfulContractCall;
  //       ContractEvent event;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[150]++;
  xdr.struct("DiagnosticEvent", [["inSuccessfulContractCall", xdr.bool()], ["event", xdr.lookup("ContractEvent")]]);

  // === xdr source ============================================================
  //
  //   struct SorobanTransactionMetaExtV1
  //   {
  //       ExtensionPoint ext;
  //   
  //       // The following are the components of the overall Soroban resource fee
  //       // charged for the transaction.
  //       // The following relation holds:
  //       // `resourceFeeCharged = totalNonRefundableResourceFeeCharged + totalRefundableResourceFeeCharged`
  //       // where `resourceFeeCharged` is the overall fee charged for the 
  //       // transaction. Also, `resourceFeeCharged` <= `sorobanData.resourceFee` 
  //       // i.e.we never charge more than the declared resource fee.
  //       // The inclusion fee for charged the Soroban transaction can be found using 
  //       // the following equation:
  //       // `result.feeCharged = resourceFeeCharged + inclusionFeeCharged`.
  //   
  //       // Total amount (in stroops) that has been charged for non-refundable
  //       // Soroban resources.
  //       // Non-refundable resources are charged based on the usage declared in
  //       // the transaction envelope (such as `instructions`, `readBytes` etc.) and 
  //       // is charged regardless of the success of the transaction.
  //       int64 totalNonRefundableResourceFeeCharged;
  //       // Total amount (in stroops) that has been charged for refundable
  //       // Soroban resource fees.
  //       // Currently this comprises the rent fee (`rentFeeCharged`) and the
  //       // fee for the events and return value.
  //       // Refundable resources are charged based on the actual resources usage.
  //       // Since currently refundable resources are only used for the successful
  //       // transactions, this will be `0` for failed transactions.
  //       int64 totalRefundableResourceFeeCharged;
  //       // Amount (in stroops) that has been charged for rent.
  //       // This is a part of `totalNonRefundableResourceFeeCharged`.
  //       int64 rentFeeCharged;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[151]++;
  xdr.struct("SorobanTransactionMetaExtV1", [["ext", xdr.lookup("ExtensionPoint")], ["totalNonRefundableResourceFeeCharged", xdr.lookup("Int64")], ["totalRefundableResourceFeeCharged", xdr.lookup("Int64")], ["rentFeeCharged", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   union SorobanTransactionMetaExt switch (int v)
  //   {
  //   case 0:
  //       void;
  //   case 1:
  //       SorobanTransactionMetaExtV1 v1;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[152]++;
  xdr.union("SorobanTransactionMetaExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()], [1, "v1"]],
    arms: {
      v1: xdr.lookup("SorobanTransactionMetaExtV1")
    }
  });

  // === xdr source ============================================================
  //
  //   struct SorobanTransactionMeta 
  //   {
  //       SorobanTransactionMetaExt ext;
  //   
  //       ContractEvent events<>;             // custom events populated by the
  //                                           // contracts themselves.
  //       SCVal returnValue;                  // return value of the host fn invocation
  //   
  //       // Diagnostics events that are not hashed.
  //       // This will contain all contract and diagnostic events. Even ones
  //       // that were emitted in a failed contract call.
  //       DiagnosticEvent diagnosticEvents<>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[153]++;
  xdr.struct("SorobanTransactionMeta", [["ext", xdr.lookup("SorobanTransactionMetaExt")], ["events", xdr.varArray(xdr.lookup("ContractEvent"), 2147483647)], ["returnValue", xdr.lookup("ScVal")], ["diagnosticEvents", xdr.varArray(xdr.lookup("DiagnosticEvent"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   struct TransactionMetaV3
  //   {
  //       ExtensionPoint ext;
  //   
  //       LedgerEntryChanges txChangesBefore;  // tx level changes before operations
  //                                            // are applied if any
  //       OperationMeta operations<>;          // meta for each operation
  //       LedgerEntryChanges txChangesAfter;   // tx level changes after operations are
  //                                            // applied if any
  //       SorobanTransactionMeta* sorobanMeta; // Soroban-specific meta (only for 
  //                                            // Soroban transactions).
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[154]++;
  xdr.struct("TransactionMetaV3", [["ext", xdr.lookup("ExtensionPoint")], ["txChangesBefore", xdr.lookup("LedgerEntryChanges")], ["operations", xdr.varArray(xdr.lookup("OperationMeta"), 2147483647)], ["txChangesAfter", xdr.lookup("LedgerEntryChanges")], ["sorobanMeta", xdr.option(xdr.lookup("SorobanTransactionMeta"))]]);

  // === xdr source ============================================================
  //
  //   struct InvokeHostFunctionSuccessPreImage
  //   {
  //       SCVal returnValue;
  //       ContractEvent events<>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[155]++;
  xdr.struct("InvokeHostFunctionSuccessPreImage", [["returnValue", xdr.lookup("ScVal")], ["events", xdr.varArray(xdr.lookup("ContractEvent"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   union TransactionMeta switch (int v)
  //   {
  //   case 0:
  //       OperationMeta operations<>;
  //   case 1:
  //       TransactionMetaV1 v1;
  //   case 2:
  //       TransactionMetaV2 v2;
  //   case 3:
  //       TransactionMetaV3 v3;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[156]++;
  xdr.union("TransactionMeta", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, "operations"], [1, "v1"], [2, "v2"], [3, "v3"]],
    arms: {
      operations: xdr.varArray(xdr.lookup("OperationMeta"), 2147483647),
      v1: xdr.lookup("TransactionMetaV1"),
      v2: xdr.lookup("TransactionMetaV2"),
      v3: xdr.lookup("TransactionMetaV3")
    }
  });

  // === xdr source ============================================================
  //
  //   struct TransactionResultMeta
  //   {
  //       TransactionResultPair result;
  //       LedgerEntryChanges feeProcessing;
  //       TransactionMeta txApplyProcessing;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[157]++;
  xdr.struct("TransactionResultMeta", [["result", xdr.lookup("TransactionResultPair")], ["feeProcessing", xdr.lookup("LedgerEntryChanges")], ["txApplyProcessing", xdr.lookup("TransactionMeta")]]);

  // === xdr source ============================================================
  //
  //   struct UpgradeEntryMeta
  //   {
  //       LedgerUpgrade upgrade;
  //       LedgerEntryChanges changes;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[158]++;
  xdr.struct("UpgradeEntryMeta", [["upgrade", xdr.lookup("LedgerUpgrade")], ["changes", xdr.lookup("LedgerEntryChanges")]]);

  // === xdr source ============================================================
  //
  //   struct LedgerCloseMetaV0
  //   {
  //       LedgerHeaderHistoryEntry ledgerHeader;
  //       // NB: txSet is sorted in "Hash order"
  //       TransactionSet txSet;
  //   
  //       // NB: transactions are sorted in apply order here
  //       // fees for all transactions are processed first
  //       // followed by applying transactions
  //       TransactionResultMeta txProcessing<>;
  //   
  //       // upgrades are applied last
  //       UpgradeEntryMeta upgradesProcessing<>;
  //   
  //       // other misc information attached to the ledger close
  //       SCPHistoryEntry scpInfo<>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[159]++;
  xdr.struct("LedgerCloseMetaV0", [["ledgerHeader", xdr.lookup("LedgerHeaderHistoryEntry")], ["txSet", xdr.lookup("TransactionSet")], ["txProcessing", xdr.varArray(xdr.lookup("TransactionResultMeta"), 2147483647)], ["upgradesProcessing", xdr.varArray(xdr.lookup("UpgradeEntryMeta"), 2147483647)], ["scpInfo", xdr.varArray(xdr.lookup("ScpHistoryEntry"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   struct LedgerCloseMetaExtV1
  //   {
  //       ExtensionPoint ext;
  //       int64 sorobanFeeWrite1KB;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[160]++;
  xdr.struct("LedgerCloseMetaExtV1", [["ext", xdr.lookup("ExtensionPoint")], ["sorobanFeeWrite1Kb", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   union LedgerCloseMetaExt switch (int v)
  //   {
  //   case 0:
  //       void;
  //   case 1:
  //       LedgerCloseMetaExtV1 v1;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[161]++;
  xdr.union("LedgerCloseMetaExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()], [1, "v1"]],
    arms: {
      v1: xdr.lookup("LedgerCloseMetaExtV1")
    }
  });

  // === xdr source ============================================================
  //
  //   struct LedgerCloseMetaV1
  //   {
  //       LedgerCloseMetaExt ext;
  //   
  //       LedgerHeaderHistoryEntry ledgerHeader;
  //   
  //       GeneralizedTransactionSet txSet;
  //   
  //       // NB: transactions are sorted in apply order here
  //       // fees for all transactions are processed first
  //       // followed by applying transactions
  //       TransactionResultMeta txProcessing<>;
  //   
  //       // upgrades are applied last
  //       UpgradeEntryMeta upgradesProcessing<>;
  //   
  //       // other misc information attached to the ledger close
  //       SCPHistoryEntry scpInfo<>;
  //   
  //       // Size in bytes of BucketList, to support downstream
  //       // systems calculating storage fees correctly.
  //       uint64 totalByteSizeOfBucketList;
  //   
  //       // Temp keys that are being evicted at this ledger.
  //       LedgerKey evictedTemporaryLedgerKeys<>;
  //   
  //       // Archived restorable ledger entries that are being
  //       // evicted at this ledger.
  //       LedgerEntry evictedPersistentLedgerEntries<>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[162]++;
  xdr.struct("LedgerCloseMetaV1", [["ext", xdr.lookup("LedgerCloseMetaExt")], ["ledgerHeader", xdr.lookup("LedgerHeaderHistoryEntry")], ["txSet", xdr.lookup("GeneralizedTransactionSet")], ["txProcessing", xdr.varArray(xdr.lookup("TransactionResultMeta"), 2147483647)], ["upgradesProcessing", xdr.varArray(xdr.lookup("UpgradeEntryMeta"), 2147483647)], ["scpInfo", xdr.varArray(xdr.lookup("ScpHistoryEntry"), 2147483647)], ["totalByteSizeOfBucketList", xdr.lookup("Uint64")], ["evictedTemporaryLedgerKeys", xdr.varArray(xdr.lookup("LedgerKey"), 2147483647)], ["evictedPersistentLedgerEntries", xdr.varArray(xdr.lookup("LedgerEntry"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   union LedgerCloseMeta switch (int v)
  //   {
  //   case 0:
  //       LedgerCloseMetaV0 v0;
  //   case 1:
  //       LedgerCloseMetaV1 v1;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[163]++;
  xdr.union("LedgerCloseMeta", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, "v0"], [1, "v1"]],
    arms: {
      v0: xdr.lookup("LedgerCloseMetaV0"),
      v1: xdr.lookup("LedgerCloseMetaV1")
    }
  });

  // === xdr source ============================================================
  //
  //   enum ErrorCode
  //   {
  //       ERR_MISC = 0, // Unspecific error
  //       ERR_DATA = 1, // Malformed data
  //       ERR_CONF = 2, // Misconfiguration error
  //       ERR_AUTH = 3, // Authentication failure
  //       ERR_LOAD = 4  // System overloaded
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[164]++;
  xdr["enum"]("ErrorCode", {
    errMisc: 0,
    errData: 1,
    errConf: 2,
    errAuth: 3,
    errLoad: 4
  });

  // === xdr source ============================================================
  //
  //   struct Error
  //   {
  //       ErrorCode code;
  //       string msg<100>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[165]++;
  xdr.struct("Error", [["code", xdr.lookup("ErrorCode")], ["msg", xdr.string(100)]]);

  // === xdr source ============================================================
  //
  //   struct SendMore
  //   {
  //       uint32 numMessages;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[166]++;
  xdr.struct("SendMore", [["numMessages", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   struct SendMoreExtended
  //   {
  //       uint32 numMessages;
  //       uint32 numBytes;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[167]++;
  xdr.struct("SendMoreExtended", [["numMessages", xdr.lookup("Uint32")], ["numBytes", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   struct AuthCert
  //   {
  //       Dilithium2Public pubkey;
  //       uint64 expiration;
  //       Signature sig;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[168]++;
  xdr.struct("AuthCert", [["pubkey", xdr.lookup("Dilithium2Public")], ["expiration", xdr.lookup("Uint64")], ["sig", xdr.lookup("Signature")]]);

  // === xdr source ============================================================
  //
  //   struct Hello
  //   {
  //       uint32 ledgerVersion;
  //       uint32 overlayVersion;
  //       uint32 overlayMinVersion;
  //       Hash networkID;
  //       string versionStr<100>;
  //       int listeningPort;
  //       NodeID peerID;
  //       AuthCert cert;
  //       uint256 nonce;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[169]++;
  xdr.struct("Hello", [["ledgerVersion", xdr.lookup("Uint32")], ["overlayVersion", xdr.lookup("Uint32")], ["overlayMinVersion", xdr.lookup("Uint32")], ["networkId", xdr.lookup("Hash")], ["versionStr", xdr.string(100)], ["listeningPort", xdr["int"]()], ["peerId", xdr.lookup("NodeId")], ["cert", xdr.lookup("AuthCert")], ["nonce", xdr.lookup("Uint256")]]);

  // === xdr source ============================================================
  //
  //   const AUTH_MSG_FLAG_FLOW_CONTROL_BYTES_REQUESTED = 200;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[170]++;
  xdr["const"]("AUTH_MSG_FLAG_FLOW_CONTROL_BYTES_REQUESTED", 200);

  // === xdr source ============================================================
  //
  //   struct Auth
  //   {
  //       int flags;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[171]++;
  xdr.struct("Auth", [["flags", xdr["int"]()]]);

  // === xdr source ============================================================
  //
  //   enum IPAddrType
  //   {
  //       IPv4 = 0,
  //       IPv6 = 1
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[172]++;
  xdr["enum"]("IpAddrType", {
    iPv4: 0,
    iPv6: 1
  });

  // === xdr source ============================================================
  //
  //   union switch (IPAddrType type)
  //       {
  //       case IPv4:
  //           opaque ipv4[4];
  //       case IPv6:
  //           opaque ipv6[16];
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[173]++;
  xdr.union("PeerAddressIp", {
    switchOn: xdr.lookup("IpAddrType"),
    switchName: "type",
    switches: [["iPv4", "ipv4"], ["iPv6", "ipv6"]],
    arms: {
      ipv4: xdr.opaque(4),
      ipv6: xdr.opaque(16)
    }
  });

  // === xdr source ============================================================
  //
  //   struct PeerAddress
  //   {
  //       union switch (IPAddrType type)
  //       {
  //       case IPv4:
  //           opaque ipv4[4];
  //       case IPv6:
  //           opaque ipv6[16];
  //       }
  //       ip;
  //       uint32 port;
  //       uint32 numFailures;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[174]++;
  xdr.struct("PeerAddress", [["ip", xdr.lookup("PeerAddressIp")], ["port", xdr.lookup("Uint32")], ["numFailures", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   enum MessageType
  //   {
  //       ERROR_MSG = 0,
  //       AUTH = 2,
  //       DONT_HAVE = 3,
  //   
  //       GET_PEERS = 4, // gets a list of peers this guy knows about
  //       PEERS = 5,
  //   
  //       GET_TX_SET = 6, // gets a particular txset by hash
  //       TX_SET = 7,
  //       GENERALIZED_TX_SET = 17,
  //   
  //       TRANSACTION = 8, // pass on a tx you have heard about
  //   
  //       // SCP
  //       GET_SCP_QUORUMSET = 9,
  //       SCP_QUORUMSET = 10,
  //       SCP_MESSAGE = 11,
  //       GET_SCP_STATE = 12,
  //   
  //       // new messages
  //       HELLO = 13,
  //   
  //       SURVEY_REQUEST = 14,
  //       SURVEY_RESPONSE = 15,
  //   
  //       SEND_MORE = 16,
  //       SEND_MORE_EXTENDED = 20,
  //   
  //       FLOOD_ADVERT = 18,
  //       FLOOD_DEMAND = 19
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[175]++;
  xdr["enum"]("MessageType", {
    errorMsg: 0,
    auth: 2,
    dontHave: 3,
    getPeers: 4,
    peers: 5,
    getTxSet: 6,
    txSet: 7,
    generalizedTxSet: 17,
    transaction: 8,
    getScpQuorumset: 9,
    scpQuorumset: 10,
    scpMessage: 11,
    getScpState: 12,
    hello: 13,
    surveyRequest: 14,
    surveyResponse: 15,
    sendMore: 16,
    sendMoreExtended: 20,
    floodAdvert: 18,
    floodDemand: 19
  });

  // === xdr source ============================================================
  //
  //   struct DontHave
  //   {
  //       MessageType type;
  //       uint256 reqHash;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[176]++;
  xdr.struct("DontHave", [["type", xdr.lookup("MessageType")], ["reqHash", xdr.lookup("Uint256")]]);

  // === xdr source ============================================================
  //
  //   enum SurveyMessageCommandType
  //   {
  //       SURVEY_TOPOLOGY = 0
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[177]++;
  xdr["enum"]("SurveyMessageCommandType", {
    surveyTopology: 0
  });

  // === xdr source ============================================================
  //
  //   enum SurveyMessageResponseType
  //   {
  //       SURVEY_TOPOLOGY_RESPONSE_V0 = 0,
  //       SURVEY_TOPOLOGY_RESPONSE_V1 = 1
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[178]++;
  xdr["enum"]("SurveyMessageResponseType", {
    surveyTopologyResponseV0: 0,
    surveyTopologyResponseV1: 1
  });

  // === xdr source ============================================================
  //
  //   struct SurveyRequestMessage
  //   {
  //       NodeID surveyorPeerID;
  //       NodeID surveyedPeerID;
  //       uint32 ledgerNum;
  //       Dilithium2Public encryptionKey;
  //       SurveyMessageCommandType commandType;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[179]++;
  xdr.struct("SurveyRequestMessage", [["surveyorPeerId", xdr.lookup("NodeId")], ["surveyedPeerId", xdr.lookup("NodeId")], ["ledgerNum", xdr.lookup("Uint32")], ["encryptionKey", xdr.lookup("Dilithium2Public")], ["commandType", xdr.lookup("SurveyMessageCommandType")]]);

  // === xdr source ============================================================
  //
  //   struct SignedSurveyRequestMessage
  //   {
  //       Signature requestSignature;
  //       SurveyRequestMessage request;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[180]++;
  xdr.struct("SignedSurveyRequestMessage", [["requestSignature", xdr.lookup("Signature")], ["request", xdr.lookup("SurveyRequestMessage")]]);

  // === xdr source ============================================================
  //
  //   typedef opaque EncryptedBody<64000>;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[181]++;
  xdr.typedef("EncryptedBody", xdr.varOpaque(64000));

  // === xdr source ============================================================
  //
  //   struct SurveyResponseMessage
  //   {
  //       NodeID surveyorPeerID;
  //       NodeID surveyedPeerID;
  //       uint32 ledgerNum;
  //       SurveyMessageCommandType commandType;
  //       EncryptedBody encryptedBody;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[182]++;
  xdr.struct("SurveyResponseMessage", [["surveyorPeerId", xdr.lookup("NodeId")], ["surveyedPeerId", xdr.lookup("NodeId")], ["ledgerNum", xdr.lookup("Uint32")], ["commandType", xdr.lookup("SurveyMessageCommandType")], ["encryptedBody", xdr.lookup("EncryptedBody")]]);

  // === xdr source ============================================================
  //
  //   struct SignedSurveyResponseMessage
  //   {
  //       Signature responseSignature;
  //       SurveyResponseMessage response;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[183]++;
  xdr.struct("SignedSurveyResponseMessage", [["responseSignature", xdr.lookup("Signature")], ["response", xdr.lookup("SurveyResponseMessage")]]);

  // === xdr source ============================================================
  //
  //   struct PeerStats
  //   {
  //       NodeID id;
  //       string versionStr<100>;
  //       uint64 messagesRead;
  //       uint64 messagesWritten;
  //       uint64 bytesRead;
  //       uint64 bytesWritten;
  //       uint64 secondsConnected;
  //   
  //       uint64 uniqueFloodBytesRecv;
  //       uint64 duplicateFloodBytesRecv;
  //       uint64 uniqueFetchBytesRecv;
  //       uint64 duplicateFetchBytesRecv;
  //   
  //       uint64 uniqueFloodMessageRecv;
  //       uint64 duplicateFloodMessageRecv;
  //       uint64 uniqueFetchMessageRecv;
  //       uint64 duplicateFetchMessageRecv;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[184]++;
  xdr.struct("PeerStats", [["id", xdr.lookup("NodeId")], ["versionStr", xdr.string(100)], ["messagesRead", xdr.lookup("Uint64")], ["messagesWritten", xdr.lookup("Uint64")], ["bytesRead", xdr.lookup("Uint64")], ["bytesWritten", xdr.lookup("Uint64")], ["secondsConnected", xdr.lookup("Uint64")], ["uniqueFloodBytesRecv", xdr.lookup("Uint64")], ["duplicateFloodBytesRecv", xdr.lookup("Uint64")], ["uniqueFetchBytesRecv", xdr.lookup("Uint64")], ["duplicateFetchBytesRecv", xdr.lookup("Uint64")], ["uniqueFloodMessageRecv", xdr.lookup("Uint64")], ["duplicateFloodMessageRecv", xdr.lookup("Uint64")], ["uniqueFetchMessageRecv", xdr.lookup("Uint64")], ["duplicateFetchMessageRecv", xdr.lookup("Uint64")]]);

  // === xdr source ============================================================
  //
  //   typedef PeerStats PeerStatList<25>;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[185]++;
  xdr.typedef("PeerStatList", xdr.varArray(xdr.lookup("PeerStats"), 25));

  // === xdr source ============================================================
  //
  //   struct TopologyResponseBodyV0
  //   {
  //       PeerStatList inboundPeers;
  //       PeerStatList outboundPeers;
  //   
  //       uint32 totalInboundPeerCount;
  //       uint32 totalOutboundPeerCount;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[186]++;
  xdr.struct("TopologyResponseBodyV0", [["inboundPeers", xdr.lookup("PeerStatList")], ["outboundPeers", xdr.lookup("PeerStatList")], ["totalInboundPeerCount", xdr.lookup("Uint32")], ["totalOutboundPeerCount", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   struct TopologyResponseBodyV1
  //   {
  //       PeerStatList inboundPeers;
  //       PeerStatList outboundPeers;
  //   
  //       uint32 totalInboundPeerCount;
  //       uint32 totalOutboundPeerCount;
  //   
  //       uint32 maxInboundPeerCount;
  //       uint32 maxOutboundPeerCount;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[187]++;
  xdr.struct("TopologyResponseBodyV1", [["inboundPeers", xdr.lookup("PeerStatList")], ["outboundPeers", xdr.lookup("PeerStatList")], ["totalInboundPeerCount", xdr.lookup("Uint32")], ["totalOutboundPeerCount", xdr.lookup("Uint32")], ["maxInboundPeerCount", xdr.lookup("Uint32")], ["maxOutboundPeerCount", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   union SurveyResponseBody switch (SurveyMessageResponseType type)
  //   {
  //   case SURVEY_TOPOLOGY_RESPONSE_V0:
  //       TopologyResponseBodyV0 topologyResponseBodyV0;
  //   case SURVEY_TOPOLOGY_RESPONSE_V1:
  //       TopologyResponseBodyV1 topologyResponseBodyV1;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[188]++;
  xdr.union("SurveyResponseBody", {
    switchOn: xdr.lookup("SurveyMessageResponseType"),
    switchName: "type",
    switches: [["surveyTopologyResponseV0", "topologyResponseBodyV0"], ["surveyTopologyResponseV1", "topologyResponseBodyV1"]],
    arms: {
      topologyResponseBodyV0: xdr.lookup("TopologyResponseBodyV0"),
      topologyResponseBodyV1: xdr.lookup("TopologyResponseBodyV1")
    }
  });

  // === xdr source ============================================================
  //
  //   const TX_ADVERT_VECTOR_MAX_SIZE = 1000;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[189]++;
  xdr["const"]("TX_ADVERT_VECTOR_MAX_SIZE", 1000);

  // === xdr source ============================================================
  //
  //   typedef Hash TxAdvertVector<TX_ADVERT_VECTOR_MAX_SIZE>;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[190]++;
  xdr.typedef("TxAdvertVector", xdr.varArray(xdr.lookup("Hash"), xdr.lookup("TX_ADVERT_VECTOR_MAX_SIZE")));

  // === xdr source ============================================================
  //
  //   struct FloodAdvert
  //   {
  //       TxAdvertVector txHashes;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[191]++;
  xdr.struct("FloodAdvert", [["txHashes", xdr.lookup("TxAdvertVector")]]);

  // === xdr source ============================================================
  //
  //   const TX_DEMAND_VECTOR_MAX_SIZE = 1000;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[192]++;
  xdr["const"]("TX_DEMAND_VECTOR_MAX_SIZE", 1000);

  // === xdr source ============================================================
  //
  //   typedef Hash TxDemandVector<TX_DEMAND_VECTOR_MAX_SIZE>;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[193]++;
  xdr.typedef("TxDemandVector", xdr.varArray(xdr.lookup("Hash"), xdr.lookup("TX_DEMAND_VECTOR_MAX_SIZE")));

  // === xdr source ============================================================
  //
  //   struct FloodDemand
  //   {
  //       TxDemandVector txHashes;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[194]++;
  xdr.struct("FloodDemand", [["txHashes", xdr.lookup("TxDemandVector")]]);

  // === xdr source ============================================================
  //
  //   union StellarMessage switch (MessageType type)
  //   {
  //   case ERROR_MSG:
  //       Error error;
  //   case HELLO:
  //       Hello hello;
  //   case AUTH:
  //       Auth auth;
  //   case DONT_HAVE:
  //       DontHave dontHave;
  //   case GET_PEERS:
  //       void;
  //   case PEERS:
  //       PeerAddress peers<100>;
  //   
  //   case GET_TX_SET:
  //       uint256 txSetHash;
  //   case TX_SET:
  //       TransactionSet txSet;
  //   case GENERALIZED_TX_SET:
  //       GeneralizedTransactionSet generalizedTxSet;
  //   
  //   case TRANSACTION:
  //       TransactionEnvelope transaction;
  //   
  //   case SURVEY_REQUEST:
  //       SignedSurveyRequestMessage signedSurveyRequestMessage;
  //   
  //   case SURVEY_RESPONSE:
  //       SignedSurveyResponseMessage signedSurveyResponseMessage;
  //   
  //   // SCP
  //   case GET_SCP_QUORUMSET:
  //       uint256 qSetHash;
  //   case SCP_QUORUMSET:
  //       SCPQuorumSet qSet;
  //   case SCP_MESSAGE:
  //       SCPEnvelope envelope;
  //   case GET_SCP_STATE:
  //       uint32 getSCPLedgerSeq; // ledger seq requested ; if 0, requests the latest
  //   case SEND_MORE:
  //       SendMore sendMoreMessage;
  //   case SEND_MORE_EXTENDED:
  //       SendMoreExtended sendMoreExtendedMessage;
  //   // Pull mode
  //   case FLOOD_ADVERT:
  //        FloodAdvert floodAdvert;
  //   case FLOOD_DEMAND:
  //        FloodDemand floodDemand;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[195]++;
  xdr.union("StellarMessage", {
    switchOn: xdr.lookup("MessageType"),
    switchName: "type",
    switches: [["errorMsg", "error"], ["hello", "hello"], ["auth", "auth"], ["dontHave", "dontHave"], ["getPeers", xdr["void"]()], ["peers", "peers"], ["getTxSet", "txSetHash"], ["txSet", "txSet"], ["generalizedTxSet", "generalizedTxSet"], ["transaction", "transaction"], ["surveyRequest", "signedSurveyRequestMessage"], ["surveyResponse", "signedSurveyResponseMessage"], ["getScpQuorumset", "qSetHash"], ["scpQuorumset", "qSet"], ["scpMessage", "envelope"], ["getScpState", "getScpLedgerSeq"], ["sendMore", "sendMoreMessage"], ["sendMoreExtended", "sendMoreExtendedMessage"], ["floodAdvert", "floodAdvert"], ["floodDemand", "floodDemand"]],
    arms: {
      error: xdr.lookup("Error"),
      hello: xdr.lookup("Hello"),
      auth: xdr.lookup("Auth"),
      dontHave: xdr.lookup("DontHave"),
      peers: xdr.varArray(xdr.lookup("PeerAddress"), 100),
      txSetHash: xdr.lookup("Uint256"),
      txSet: xdr.lookup("TransactionSet"),
      generalizedTxSet: xdr.lookup("GeneralizedTransactionSet"),
      transaction: xdr.lookup("TransactionEnvelope"),
      signedSurveyRequestMessage: xdr.lookup("SignedSurveyRequestMessage"),
      signedSurveyResponseMessage: xdr.lookup("SignedSurveyResponseMessage"),
      qSetHash: xdr.lookup("Uint256"),
      qSet: xdr.lookup("ScpQuorumSet"),
      envelope: xdr.lookup("ScpEnvelope"),
      getScpLedgerSeq: xdr.lookup("Uint32"),
      sendMoreMessage: xdr.lookup("SendMore"),
      sendMoreExtendedMessage: xdr.lookup("SendMoreExtended"),
      floodAdvert: xdr.lookup("FloodAdvert"),
      floodDemand: xdr.lookup("FloodDemand")
    }
  });

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           uint64 sequence;
  //           StellarMessage message;
  //           HmacSha256Mac mac;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[196]++;
  xdr.struct("AuthenticatedMessageV0", [["sequence", xdr.lookup("Uint64")], ["message", xdr.lookup("StellarMessage")], ["mac", xdr.lookup("HmacSha256Mac")]]);

  // === xdr source ============================================================
  //
  //   union AuthenticatedMessage switch (uint32 v)
  //   {
  //   case 0:
  //       struct
  //       {
  //           uint64 sequence;
  //           StellarMessage message;
  //           HmacSha256Mac mac;
  //       } v0;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[197]++;
  xdr.union("AuthenticatedMessage", {
    switchOn: xdr.lookup("Uint32"),
    switchName: "v",
    switches: [[0, "v0"]],
    arms: {
      v0: xdr.lookup("AuthenticatedMessageV0")
    }
  });

  // === xdr source ============================================================
  //
  //   const MAX_OPS_PER_TX = 100;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[198]++;
  xdr["const"]("MAX_OPS_PER_TX", 100);

  // === xdr source ============================================================
  //
  //   union LiquidityPoolParameters switch (LiquidityPoolType type)
  //   {
  //   case LIQUIDITY_POOL_CONSTANT_PRODUCT:
  //       LiquidityPoolConstantProductParameters constantProduct;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[199]++;
  xdr.union("LiquidityPoolParameters", {
    switchOn: xdr.lookup("LiquidityPoolType"),
    switchName: "type",
    switches: [["liquidityPoolConstantProduct", "constantProduct"]],
    arms: {
      constantProduct: xdr.lookup("LiquidityPoolConstantProductParameters")
    }
  });

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           uint64 id;
  //           opaque dilithium2[1312];
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[200]++;
  xdr.struct("MuxedAccountMdilithium2", [["id", xdr.lookup("Uint64")], ["dilithium2", xdr.opaque(1312)]]);

  // === xdr source ============================================================
  //
  //   union MuxedAccount switch (CryptoKeyType type)
  //   {
  //   case KEY_TYPE_DILITHIUM2:
  //       opaque dilithium2[1312];
  //   case KEY_TYPE_MUXED_DILITHIUM2:
  //       struct
  //       {
  //           uint64 id;
  //           opaque dilithium2[1312];
  //       } mdilithium2;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[201]++;
  xdr.union("MuxedAccount", {
    switchOn: xdr.lookup("CryptoKeyType"),
    switchName: "type",
    switches: [["keyTypeDilithium2", "dilithium2"], ["keyTypeMuxedDilithium2", "mdilithium2"]],
    arms: {
      dilithium2: xdr.opaque(1312),
      mdilithium2: xdr.lookup("MuxedAccountMdilithium2")
    }
  });

  // === xdr source ============================================================
  //
  //   struct DecoratedSignature
  //   {
  //       SignatureHint hint;  // last 4 bytes of the public key, used as a hint
  //       Signature signature; // actual signature
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[202]++;
  xdr.struct("DecoratedSignature", [["hint", xdr.lookup("SignatureHint")], ["signature", xdr.lookup("Signature")]]);

  // === xdr source ============================================================
  //
  //   enum OperationType
  //   {
  //       CREATE_ACCOUNT = 0,
  //       PAYMENT = 1,
  //       PATH_PAYMENT_STRICT_RECEIVE = 2,
  //       MANAGE_SELL_OFFER = 3,
  //       CREATE_PASSIVE_SELL_OFFER = 4,
  //       SET_OPTIONS = 5,
  //       CHANGE_TRUST = 6,
  //       ALLOW_TRUST = 7,
  //       ACCOUNT_MERGE = 8,
  //       INFLATION = 9,
  //       MANAGE_DATA = 10,
  //       BUMP_SEQUENCE = 11,
  //       MANAGE_BUY_OFFER = 12,
  //       PATH_PAYMENT_STRICT_SEND = 13,
  //       CREATE_CLAIMABLE_BALANCE = 14,
  //       CLAIM_CLAIMABLE_BALANCE = 15,
  //       BEGIN_SPONSORING_FUTURE_RESERVES = 16,
  //       END_SPONSORING_FUTURE_RESERVES = 17,
  //       REVOKE_SPONSORSHIP = 18,
  //       CLAWBACK = 19,
  //       CLAWBACK_CLAIMABLE_BALANCE = 20,
  //       SET_TRUST_LINE_FLAGS = 21,
  //       LIQUIDITY_POOL_DEPOSIT = 22,
  //       LIQUIDITY_POOL_WITHDRAW = 23,
  //       INVOKE_HOST_FUNCTION = 24,
  //       EXTEND_FOOTPRINT_TTL = 25,
  //       RESTORE_FOOTPRINT = 26
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[203]++;
  xdr["enum"]("OperationType", {
    createAccount: 0,
    payment: 1,
    pathPaymentStrictReceive: 2,
    manageSellOffer: 3,
    createPassiveSellOffer: 4,
    setOptions: 5,
    changeTrust: 6,
    allowTrust: 7,
    accountMerge: 8,
    inflation: 9,
    manageData: 10,
    bumpSequence: 11,
    manageBuyOffer: 12,
    pathPaymentStrictSend: 13,
    createClaimableBalance: 14,
    claimClaimableBalance: 15,
    beginSponsoringFutureReserves: 16,
    endSponsoringFutureReserves: 17,
    revokeSponsorship: 18,
    clawback: 19,
    clawbackClaimableBalance: 20,
    setTrustLineFlags: 21,
    liquidityPoolDeposit: 22,
    liquidityPoolWithdraw: 23,
    invokeHostFunction: 24,
    extendFootprintTtl: 25,
    restoreFootprint: 26
  });

  // === xdr source ============================================================
  //
  //   struct CreateAccountOp
  //   {
  //       AccountID destination; // account to create
  //       int64 startingBalance; // amount they end up with
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[204]++;
  xdr.struct("CreateAccountOp", [["destination", xdr.lookup("AccountId")], ["startingBalance", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct PaymentOp
  //   {
  //       MuxedAccount destination; // recipient of the payment
  //       Asset asset;              // what they end up with
  //       int64 amount;             // amount they end up with
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[205]++;
  xdr.struct("PaymentOp", [["destination", xdr.lookup("MuxedAccount")], ["asset", xdr.lookup("Asset")], ["amount", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct PathPaymentStrictReceiveOp
  //   {
  //       Asset sendAsset; // asset we pay with
  //       int64 sendMax;   // the maximum amount of sendAsset to
  //                        // send (excluding fees).
  //                        // The operation will fail if can't be met
  //   
  //       MuxedAccount destination; // recipient of the payment
  //       Asset destAsset;          // what they end up with
  //       int64 destAmount;         // amount they end up with
  //   
  //       Asset path<5>; // additional hops it must go through to get there
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[206]++;
  xdr.struct("PathPaymentStrictReceiveOp", [["sendAsset", xdr.lookup("Asset")], ["sendMax", xdr.lookup("Int64")], ["destination", xdr.lookup("MuxedAccount")], ["destAsset", xdr.lookup("Asset")], ["destAmount", xdr.lookup("Int64")], ["path", xdr.varArray(xdr.lookup("Asset"), 5)]]);

  // === xdr source ============================================================
  //
  //   struct PathPaymentStrictSendOp
  //   {
  //       Asset sendAsset;  // asset we pay with
  //       int64 sendAmount; // amount of sendAsset to send (excluding fees)
  //   
  //       MuxedAccount destination; // recipient of the payment
  //       Asset destAsset;          // what they end up with
  //       int64 destMin;            // the minimum amount of dest asset to
  //                                 // be received
  //                                 // The operation will fail if it can't be met
  //   
  //       Asset path<5>; // additional hops it must go through to get there
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[207]++;
  xdr.struct("PathPaymentStrictSendOp", [["sendAsset", xdr.lookup("Asset")], ["sendAmount", xdr.lookup("Int64")], ["destination", xdr.lookup("MuxedAccount")], ["destAsset", xdr.lookup("Asset")], ["destMin", xdr.lookup("Int64")], ["path", xdr.varArray(xdr.lookup("Asset"), 5)]]);

  // === xdr source ============================================================
  //
  //   struct ManageSellOfferOp
  //   {
  //       Asset selling;
  //       Asset buying;
  //       int64 amount; // amount being sold. if set to 0, delete the offer
  //       Price price;  // price of thing being sold in terms of what you are buying
  //   
  //       // 0=create a new offer, otherwise edit an existing offer
  //       int64 offerID;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[208]++;
  xdr.struct("ManageSellOfferOp", [["selling", xdr.lookup("Asset")], ["buying", xdr.lookup("Asset")], ["amount", xdr.lookup("Int64")], ["price", xdr.lookup("Price")], ["offerId", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct ManageBuyOfferOp
  //   {
  //       Asset selling;
  //       Asset buying;
  //       int64 buyAmount; // amount being bought. if set to 0, delete the offer
  //       Price price;     // price of thing being bought in terms of what you are
  //                        // selling
  //   
  //       // 0=create a new offer, otherwise edit an existing offer
  //       int64 offerID;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[209]++;
  xdr.struct("ManageBuyOfferOp", [["selling", xdr.lookup("Asset")], ["buying", xdr.lookup("Asset")], ["buyAmount", xdr.lookup("Int64")], ["price", xdr.lookup("Price")], ["offerId", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct CreatePassiveSellOfferOp
  //   {
  //       Asset selling; // A
  //       Asset buying;  // B
  //       int64 amount;  // amount taker gets
  //       Price price;   // cost of A in terms of B
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[210]++;
  xdr.struct("CreatePassiveSellOfferOp", [["selling", xdr.lookup("Asset")], ["buying", xdr.lookup("Asset")], ["amount", xdr.lookup("Int64")], ["price", xdr.lookup("Price")]]);

  // === xdr source ============================================================
  //
  //   struct SetOptionsOp
  //   {
  //       AccountID* inflationDest; // sets the inflation destination
  //   
  //       uint32* clearFlags; // which flags to clear
  //       uint32* setFlags;   // which flags to set
  //   
  //       // account threshold manipulation
  //       uint32* masterWeight; // weight of the master account
  //       uint32* lowThreshold;
  //       uint32* medThreshold;
  //       uint32* highThreshold;
  //   
  //       string32* homeDomain; // sets the home domain
  //   
  //       // Add, update or remove a signer for the account
  //       // signer is deleted if the weight is 0
  //       Signer* signer;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[211]++;
  xdr.struct("SetOptionsOp", [["inflationDest", xdr.option(xdr.lookup("AccountId"))], ["clearFlags", xdr.option(xdr.lookup("Uint32"))], ["setFlags", xdr.option(xdr.lookup("Uint32"))], ["masterWeight", xdr.option(xdr.lookup("Uint32"))], ["lowThreshold", xdr.option(xdr.lookup("Uint32"))], ["medThreshold", xdr.option(xdr.lookup("Uint32"))], ["highThreshold", xdr.option(xdr.lookup("Uint32"))], ["homeDomain", xdr.option(xdr.lookup("String32"))], ["signer", xdr.option(xdr.lookup("Signer"))]]);

  // === xdr source ============================================================
  //
  //   union ChangeTrustAsset switch (AssetType type)
  //   {
  //   case ASSET_TYPE_NATIVE: // Not credit
  //       void;
  //   
  //   case ASSET_TYPE_CREDIT_ALPHANUM4:
  //       AlphaNum4 alphaNum4;
  //   
  //   case ASSET_TYPE_CREDIT_ALPHANUM12:
  //       AlphaNum12 alphaNum12;
  //   
  //   case ASSET_TYPE_POOL_SHARE:
  //       LiquidityPoolParameters liquidityPool;
  //   
  //       // add other asset types here in the future
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[212]++;
  xdr.union("ChangeTrustAsset", {
    switchOn: xdr.lookup("AssetType"),
    switchName: "type",
    switches: [["assetTypeNative", xdr["void"]()], ["assetTypeCreditAlphanum4", "alphaNum4"], ["assetTypeCreditAlphanum12", "alphaNum12"], ["assetTypePoolShare", "liquidityPool"]],
    arms: {
      alphaNum4: xdr.lookup("AlphaNum4"),
      alphaNum12: xdr.lookup("AlphaNum12"),
      liquidityPool: xdr.lookup("LiquidityPoolParameters")
    }
  });

  // === xdr source ============================================================
  //
  //   struct ChangeTrustOp
  //   {
  //       ChangeTrustAsset line;
  //   
  //       // if limit is set to 0, deletes the trust line
  //       int64 limit;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[213]++;
  xdr.struct("ChangeTrustOp", [["line", xdr.lookup("ChangeTrustAsset")], ["limit", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct AllowTrustOp
  //   {
  //       AccountID trustor;
  //       AssetCode asset;
  //   
  //       // One of 0, AUTHORIZED_FLAG, or AUTHORIZED_TO_MAINTAIN_LIABILITIES_FLAG
  //       uint32 authorize;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[214]++;
  xdr.struct("AllowTrustOp", [["trustor", xdr.lookup("AccountId")], ["asset", xdr.lookup("AssetCode")], ["authorize", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   struct ManageDataOp
  //   {
  //       string64 dataName;
  //       DataValue* dataValue; // set to null to clear
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[215]++;
  xdr.struct("ManageDataOp", [["dataName", xdr.lookup("String64")], ["dataValue", xdr.option(xdr.lookup("DataValue"))]]);

  // === xdr source ============================================================
  //
  //   struct BumpSequenceOp
  //   {
  //       SequenceNumber bumpTo;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[216]++;
  xdr.struct("BumpSequenceOp", [["bumpTo", xdr.lookup("SequenceNumber")]]);

  // === xdr source ============================================================
  //
  //   struct CreateClaimableBalanceOp
  //   {
  //       Asset asset;
  //       int64 amount;
  //       Claimant claimants<10>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[217]++;
  xdr.struct("CreateClaimableBalanceOp", [["asset", xdr.lookup("Asset")], ["amount", xdr.lookup("Int64")], ["claimants", xdr.varArray(xdr.lookup("Claimant"), 10)]]);

  // === xdr source ============================================================
  //
  //   struct ClaimClaimableBalanceOp
  //   {
  //       ClaimableBalanceID balanceID;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[218]++;
  xdr.struct("ClaimClaimableBalanceOp", [["balanceId", xdr.lookup("ClaimableBalanceId")]]);

  // === xdr source ============================================================
  //
  //   struct BeginSponsoringFutureReservesOp
  //   {
  //       AccountID sponsoredID;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[219]++;
  xdr.struct("BeginSponsoringFutureReservesOp", [["sponsoredId", xdr.lookup("AccountId")]]);

  // === xdr source ============================================================
  //
  //   enum RevokeSponsorshipType
  //   {
  //       REVOKE_SPONSORSHIP_LEDGER_ENTRY = 0,
  //       REVOKE_SPONSORSHIP_SIGNER = 1
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[220]++;
  xdr["enum"]("RevokeSponsorshipType", {
    revokeSponsorshipLedgerEntry: 0,
    revokeSponsorshipSigner: 1
  });

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           AccountID accountID;
  //           SignerKey signerKey;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[221]++;
  xdr.struct("RevokeSponsorshipOpSigner", [["accountId", xdr.lookup("AccountId")], ["signerKey", xdr.lookup("SignerKey")]]);

  // === xdr source ============================================================
  //
  //   union RevokeSponsorshipOp switch (RevokeSponsorshipType type)
  //   {
  //   case REVOKE_SPONSORSHIP_LEDGER_ENTRY:
  //       LedgerKey ledgerKey;
  //   case REVOKE_SPONSORSHIP_SIGNER:
  //       struct
  //       {
  //           AccountID accountID;
  //           SignerKey signerKey;
  //       } signer;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[222]++;
  xdr.union("RevokeSponsorshipOp", {
    switchOn: xdr.lookup("RevokeSponsorshipType"),
    switchName: "type",
    switches: [["revokeSponsorshipLedgerEntry", "ledgerKey"], ["revokeSponsorshipSigner", "signer"]],
    arms: {
      ledgerKey: xdr.lookup("LedgerKey"),
      signer: xdr.lookup("RevokeSponsorshipOpSigner")
    }
  });

  // === xdr source ============================================================
  //
  //   struct ClawbackOp
  //   {
  //       Asset asset;
  //       MuxedAccount from;
  //       int64 amount;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[223]++;
  xdr.struct("ClawbackOp", [["asset", xdr.lookup("Asset")], ["from", xdr.lookup("MuxedAccount")], ["amount", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct ClawbackClaimableBalanceOp
  //   {
  //       ClaimableBalanceID balanceID;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[224]++;
  xdr.struct("ClawbackClaimableBalanceOp", [["balanceId", xdr.lookup("ClaimableBalanceId")]]);

  // === xdr source ============================================================
  //
  //   struct SetTrustLineFlagsOp
  //   {
  //       AccountID trustor;
  //       Asset asset;
  //   
  //       uint32 clearFlags; // which flags to clear
  //       uint32 setFlags;   // which flags to set
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[225]++;
  xdr.struct("SetTrustLineFlagsOp", [["trustor", xdr.lookup("AccountId")], ["asset", xdr.lookup("Asset")], ["clearFlags", xdr.lookup("Uint32")], ["setFlags", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   const LIQUIDITY_POOL_FEE_V18 = 30;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[226]++;
  xdr["const"]("LIQUIDITY_POOL_FEE_V18", 30);

  // === xdr source ============================================================
  //
  //   struct LiquidityPoolDepositOp
  //   {
  //       PoolID liquidityPoolID;
  //       int64 maxAmountA; // maximum amount of first asset to deposit
  //       int64 maxAmountB; // maximum amount of second asset to deposit
  //       Price minPrice;   // minimum depositA/depositB
  //       Price maxPrice;   // maximum depositA/depositB
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[227]++;
  xdr.struct("LiquidityPoolDepositOp", [["liquidityPoolId", xdr.lookup("PoolId")], ["maxAmountA", xdr.lookup("Int64")], ["maxAmountB", xdr.lookup("Int64")], ["minPrice", xdr.lookup("Price")], ["maxPrice", xdr.lookup("Price")]]);

  // === xdr source ============================================================
  //
  //   struct LiquidityPoolWithdrawOp
  //   {
  //       PoolID liquidityPoolID;
  //       int64 amount;     // amount of pool shares to withdraw
  //       int64 minAmountA; // minimum amount of first asset to withdraw
  //       int64 minAmountB; // minimum amount of second asset to withdraw
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[228]++;
  xdr.struct("LiquidityPoolWithdrawOp", [["liquidityPoolId", xdr.lookup("PoolId")], ["amount", xdr.lookup("Int64")], ["minAmountA", xdr.lookup("Int64")], ["minAmountB", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   enum HostFunctionType
  //   {
  //       HOST_FUNCTION_TYPE_INVOKE_CONTRACT = 0,
  //       HOST_FUNCTION_TYPE_CREATE_CONTRACT = 1,
  //       HOST_FUNCTION_TYPE_UPLOAD_CONTRACT_WASM = 2
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[229]++;
  xdr["enum"]("HostFunctionType", {
    hostFunctionTypeInvokeContract: 0,
    hostFunctionTypeCreateContract: 1,
    hostFunctionTypeUploadContractWasm: 2
  });

  // === xdr source ============================================================
  //
  //   enum ContractIDPreimageType
  //   {
  //       CONTRACT_ID_PREIMAGE_FROM_ADDRESS = 0,
  //       CONTRACT_ID_PREIMAGE_FROM_ASSET = 1
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[230]++;
  xdr["enum"]("ContractIdPreimageType", {
    contractIdPreimageFromAddress: 0,
    contractIdPreimageFromAsset: 1
  });

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           SCAddress address;
  //           uint256 salt;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[231]++;
  xdr.struct("ContractIdPreimageFromAddress", [["address", xdr.lookup("ScAddress")], ["salt", xdr.lookup("Uint256")]]);

  // === xdr source ============================================================
  //
  //   union ContractIDPreimage switch (ContractIDPreimageType type)
  //   {
  //   case CONTRACT_ID_PREIMAGE_FROM_ADDRESS:
  //       struct
  //       {
  //           SCAddress address;
  //           uint256 salt;
  //       } fromAddress;
  //   case CONTRACT_ID_PREIMAGE_FROM_ASSET:
  //       Asset fromAsset;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[232]++;
  xdr.union("ContractIdPreimage", {
    switchOn: xdr.lookup("ContractIdPreimageType"),
    switchName: "type",
    switches: [["contractIdPreimageFromAddress", "fromAddress"], ["contractIdPreimageFromAsset", "fromAsset"]],
    arms: {
      fromAddress: xdr.lookup("ContractIdPreimageFromAddress"),
      fromAsset: xdr.lookup("Asset")
    }
  });

  // === xdr source ============================================================
  //
  //   struct CreateContractArgs
  //   {
  //       ContractIDPreimage contractIDPreimage;
  //       ContractExecutable executable;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[233]++;
  xdr.struct("CreateContractArgs", [["contractIdPreimage", xdr.lookup("ContractIdPreimage")], ["executable", xdr.lookup("ContractExecutable")]]);

  // === xdr source ============================================================
  //
  //   struct InvokeContractArgs {
  //       SCAddress contractAddress;
  //       SCSymbol functionName;
  //       SCVal args<>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[234]++;
  xdr.struct("InvokeContractArgs", [["contractAddress", xdr.lookup("ScAddress")], ["functionName", xdr.lookup("ScSymbol")], ["args", xdr.varArray(xdr.lookup("ScVal"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   union HostFunction switch (HostFunctionType type)
  //   {
  //   case HOST_FUNCTION_TYPE_INVOKE_CONTRACT:
  //       InvokeContractArgs invokeContract;
  //   case HOST_FUNCTION_TYPE_CREATE_CONTRACT:
  //       CreateContractArgs createContract;
  //   case HOST_FUNCTION_TYPE_UPLOAD_CONTRACT_WASM:
  //       opaque wasm<>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[235]++;
  xdr.union("HostFunction", {
    switchOn: xdr.lookup("HostFunctionType"),
    switchName: "type",
    switches: [["hostFunctionTypeInvokeContract", "invokeContract"], ["hostFunctionTypeCreateContract", "createContract"], ["hostFunctionTypeUploadContractWasm", "wasm"]],
    arms: {
      invokeContract: xdr.lookup("InvokeContractArgs"),
      createContract: xdr.lookup("CreateContractArgs"),
      wasm: xdr.varOpaque()
    }
  });

  // === xdr source ============================================================
  //
  //   enum SorobanAuthorizedFunctionType
  //   {
  //       SOROBAN_AUTHORIZED_FUNCTION_TYPE_CONTRACT_FN = 0,
  //       SOROBAN_AUTHORIZED_FUNCTION_TYPE_CREATE_CONTRACT_HOST_FN = 1
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[236]++;
  xdr["enum"]("SorobanAuthorizedFunctionType", {
    sorobanAuthorizedFunctionTypeContractFn: 0,
    sorobanAuthorizedFunctionTypeCreateContractHostFn: 1
  });

  // === xdr source ============================================================
  //
  //   union SorobanAuthorizedFunction switch (SorobanAuthorizedFunctionType type)
  //   {
  //   case SOROBAN_AUTHORIZED_FUNCTION_TYPE_CONTRACT_FN:
  //       InvokeContractArgs contractFn;
  //   case SOROBAN_AUTHORIZED_FUNCTION_TYPE_CREATE_CONTRACT_HOST_FN:
  //       CreateContractArgs createContractHostFn;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[237]++;
  xdr.union("SorobanAuthorizedFunction", {
    switchOn: xdr.lookup("SorobanAuthorizedFunctionType"),
    switchName: "type",
    switches: [["sorobanAuthorizedFunctionTypeContractFn", "contractFn"], ["sorobanAuthorizedFunctionTypeCreateContractHostFn", "createContractHostFn"]],
    arms: {
      contractFn: xdr.lookup("InvokeContractArgs"),
      createContractHostFn: xdr.lookup("CreateContractArgs")
    }
  });

  // === xdr source ============================================================
  //
  //   struct SorobanAuthorizedInvocation
  //   {
  //       SorobanAuthorizedFunction function;
  //       SorobanAuthorizedInvocation subInvocations<>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[238]++;
  xdr.struct("SorobanAuthorizedInvocation", [["function", xdr.lookup("SorobanAuthorizedFunction")], ["subInvocations", xdr.varArray(xdr.lookup("SorobanAuthorizedInvocation"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   struct SorobanAddressCredentials
  //   {
  //       SCAddress address;
  //       int64 nonce;
  //       uint32 signatureExpirationLedger;    
  //       SCVal signature;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[239]++;
  xdr.struct("SorobanAddressCredentials", [["address", xdr.lookup("ScAddress")], ["nonce", xdr.lookup("Int64")], ["signatureExpirationLedger", xdr.lookup("Uint32")], ["signature", xdr.lookup("ScVal")]]);

  // === xdr source ============================================================
  //
  //   enum SorobanCredentialsType
  //   {
  //       SOROBAN_CREDENTIALS_SOURCE_ACCOUNT = 0,
  //       SOROBAN_CREDENTIALS_ADDRESS = 1
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[240]++;
  xdr["enum"]("SorobanCredentialsType", {
    sorobanCredentialsSourceAccount: 0,
    sorobanCredentialsAddress: 1
  });

  // === xdr source ============================================================
  //
  //   union SorobanCredentials switch (SorobanCredentialsType type)
  //   {
  //   case SOROBAN_CREDENTIALS_SOURCE_ACCOUNT:
  //       void;
  //   case SOROBAN_CREDENTIALS_ADDRESS:
  //       SorobanAddressCredentials address;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[241]++;
  xdr.union("SorobanCredentials", {
    switchOn: xdr.lookup("SorobanCredentialsType"),
    switchName: "type",
    switches: [["sorobanCredentialsSourceAccount", xdr["void"]()], ["sorobanCredentialsAddress", "address"]],
    arms: {
      address: xdr.lookup("SorobanAddressCredentials")
    }
  });

  // === xdr source ============================================================
  //
  //   struct SorobanAuthorizationEntry
  //   {
  //       SorobanCredentials credentials;
  //       SorobanAuthorizedInvocation rootInvocation;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[242]++;
  xdr.struct("SorobanAuthorizationEntry", [["credentials", xdr.lookup("SorobanCredentials")], ["rootInvocation", xdr.lookup("SorobanAuthorizedInvocation")]]);

  // === xdr source ============================================================
  //
  //   struct InvokeHostFunctionOp
  //   {
  //       // Host function to invoke.
  //       HostFunction hostFunction;
  //       // Per-address authorizations for this host function.
  //       SorobanAuthorizationEntry auth<>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[243]++;
  xdr.struct("InvokeHostFunctionOp", [["hostFunction", xdr.lookup("HostFunction")], ["auth", xdr.varArray(xdr.lookup("SorobanAuthorizationEntry"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   struct ExtendFootprintTTLOp
  //   {
  //       ExtensionPoint ext;
  //       uint32 extendTo;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[244]++;
  xdr.struct("ExtendFootprintTtlOp", [["ext", xdr.lookup("ExtensionPoint")], ["extendTo", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   struct RestoreFootprintOp
  //   {
  //       ExtensionPoint ext;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[245]++;
  xdr.struct("RestoreFootprintOp", [["ext", xdr.lookup("ExtensionPoint")]]);

  // === xdr source ============================================================
  //
  //   union switch (OperationType type)
  //       {
  //       case CREATE_ACCOUNT:
  //           CreateAccountOp createAccountOp;
  //       case PAYMENT:
  //           PaymentOp paymentOp;
  //       case PATH_PAYMENT_STRICT_RECEIVE:
  //           PathPaymentStrictReceiveOp pathPaymentStrictReceiveOp;
  //       case MANAGE_SELL_OFFER:
  //           ManageSellOfferOp manageSellOfferOp;
  //       case CREATE_PASSIVE_SELL_OFFER:
  //           CreatePassiveSellOfferOp createPassiveSellOfferOp;
  //       case SET_OPTIONS:
  //           SetOptionsOp setOptionsOp;
  //       case CHANGE_TRUST:
  //           ChangeTrustOp changeTrustOp;
  //       case ALLOW_TRUST:
  //           AllowTrustOp allowTrustOp;
  //       case ACCOUNT_MERGE:
  //           MuxedAccount destination;
  //       case INFLATION:
  //           void;
  //       case MANAGE_DATA:
  //           ManageDataOp manageDataOp;
  //       case BUMP_SEQUENCE:
  //           BumpSequenceOp bumpSequenceOp;
  //       case MANAGE_BUY_OFFER:
  //           ManageBuyOfferOp manageBuyOfferOp;
  //       case PATH_PAYMENT_STRICT_SEND:
  //           PathPaymentStrictSendOp pathPaymentStrictSendOp;
  //       case CREATE_CLAIMABLE_BALANCE:
  //           CreateClaimableBalanceOp createClaimableBalanceOp;
  //       case CLAIM_CLAIMABLE_BALANCE:
  //           ClaimClaimableBalanceOp claimClaimableBalanceOp;
  //       case BEGIN_SPONSORING_FUTURE_RESERVES:
  //           BeginSponsoringFutureReservesOp beginSponsoringFutureReservesOp;
  //       case END_SPONSORING_FUTURE_RESERVES:
  //           void;
  //       case REVOKE_SPONSORSHIP:
  //           RevokeSponsorshipOp revokeSponsorshipOp;
  //       case CLAWBACK:
  //           ClawbackOp clawbackOp;
  //       case CLAWBACK_CLAIMABLE_BALANCE:
  //           ClawbackClaimableBalanceOp clawbackClaimableBalanceOp;
  //       case SET_TRUST_LINE_FLAGS:
  //           SetTrustLineFlagsOp setTrustLineFlagsOp;
  //       case LIQUIDITY_POOL_DEPOSIT:
  //           LiquidityPoolDepositOp liquidityPoolDepositOp;
  //       case LIQUIDITY_POOL_WITHDRAW:
  //           LiquidityPoolWithdrawOp liquidityPoolWithdrawOp;
  //       case INVOKE_HOST_FUNCTION:
  //           InvokeHostFunctionOp invokeHostFunctionOp;
  //       case EXTEND_FOOTPRINT_TTL:
  //           ExtendFootprintTTLOp extendFootprintTTLOp;
  //       case RESTORE_FOOTPRINT:
  //           RestoreFootprintOp restoreFootprintOp;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[246]++;
  xdr.union("OperationBody", {
    switchOn: xdr.lookup("OperationType"),
    switchName: "type",
    switches: [["createAccount", "createAccountOp"], ["payment", "paymentOp"], ["pathPaymentStrictReceive", "pathPaymentStrictReceiveOp"], ["manageSellOffer", "manageSellOfferOp"], ["createPassiveSellOffer", "createPassiveSellOfferOp"], ["setOptions", "setOptionsOp"], ["changeTrust", "changeTrustOp"], ["allowTrust", "allowTrustOp"], ["accountMerge", "destination"], ["inflation", xdr["void"]()], ["manageData", "manageDataOp"], ["bumpSequence", "bumpSequenceOp"], ["manageBuyOffer", "manageBuyOfferOp"], ["pathPaymentStrictSend", "pathPaymentStrictSendOp"], ["createClaimableBalance", "createClaimableBalanceOp"], ["claimClaimableBalance", "claimClaimableBalanceOp"], ["beginSponsoringFutureReserves", "beginSponsoringFutureReservesOp"], ["endSponsoringFutureReserves", xdr["void"]()], ["revokeSponsorship", "revokeSponsorshipOp"], ["clawback", "clawbackOp"], ["clawbackClaimableBalance", "clawbackClaimableBalanceOp"], ["setTrustLineFlags", "setTrustLineFlagsOp"], ["liquidityPoolDeposit", "liquidityPoolDepositOp"], ["liquidityPoolWithdraw", "liquidityPoolWithdrawOp"], ["invokeHostFunction", "invokeHostFunctionOp"], ["extendFootprintTtl", "extendFootprintTtlOp"], ["restoreFootprint", "restoreFootprintOp"]],
    arms: {
      createAccountOp: xdr.lookup("CreateAccountOp"),
      paymentOp: xdr.lookup("PaymentOp"),
      pathPaymentStrictReceiveOp: xdr.lookup("PathPaymentStrictReceiveOp"),
      manageSellOfferOp: xdr.lookup("ManageSellOfferOp"),
      createPassiveSellOfferOp: xdr.lookup("CreatePassiveSellOfferOp"),
      setOptionsOp: xdr.lookup("SetOptionsOp"),
      changeTrustOp: xdr.lookup("ChangeTrustOp"),
      allowTrustOp: xdr.lookup("AllowTrustOp"),
      destination: xdr.lookup("MuxedAccount"),
      manageDataOp: xdr.lookup("ManageDataOp"),
      bumpSequenceOp: xdr.lookup("BumpSequenceOp"),
      manageBuyOfferOp: xdr.lookup("ManageBuyOfferOp"),
      pathPaymentStrictSendOp: xdr.lookup("PathPaymentStrictSendOp"),
      createClaimableBalanceOp: xdr.lookup("CreateClaimableBalanceOp"),
      claimClaimableBalanceOp: xdr.lookup("ClaimClaimableBalanceOp"),
      beginSponsoringFutureReservesOp: xdr.lookup("BeginSponsoringFutureReservesOp"),
      revokeSponsorshipOp: xdr.lookup("RevokeSponsorshipOp"),
      clawbackOp: xdr.lookup("ClawbackOp"),
      clawbackClaimableBalanceOp: xdr.lookup("ClawbackClaimableBalanceOp"),
      setTrustLineFlagsOp: xdr.lookup("SetTrustLineFlagsOp"),
      liquidityPoolDepositOp: xdr.lookup("LiquidityPoolDepositOp"),
      liquidityPoolWithdrawOp: xdr.lookup("LiquidityPoolWithdrawOp"),
      invokeHostFunctionOp: xdr.lookup("InvokeHostFunctionOp"),
      extendFootprintTtlOp: xdr.lookup("ExtendFootprintTtlOp"),
      restoreFootprintOp: xdr.lookup("RestoreFootprintOp")
    }
  });

  // === xdr source ============================================================
  //
  //   struct Operation
  //   {
  //       // sourceAccount is the account used to run the operation
  //       // if not set, the runtime defaults to "sourceAccount" specified at
  //       // the transaction level
  //       MuxedAccount* sourceAccount;
  //   
  //       union switch (OperationType type)
  //       {
  //       case CREATE_ACCOUNT:
  //           CreateAccountOp createAccountOp;
  //       case PAYMENT:
  //           PaymentOp paymentOp;
  //       case PATH_PAYMENT_STRICT_RECEIVE:
  //           PathPaymentStrictReceiveOp pathPaymentStrictReceiveOp;
  //       case MANAGE_SELL_OFFER:
  //           ManageSellOfferOp manageSellOfferOp;
  //       case CREATE_PASSIVE_SELL_OFFER:
  //           CreatePassiveSellOfferOp createPassiveSellOfferOp;
  //       case SET_OPTIONS:
  //           SetOptionsOp setOptionsOp;
  //       case CHANGE_TRUST:
  //           ChangeTrustOp changeTrustOp;
  //       case ALLOW_TRUST:
  //           AllowTrustOp allowTrustOp;
  //       case ACCOUNT_MERGE:
  //           MuxedAccount destination;
  //       case INFLATION:
  //           void;
  //       case MANAGE_DATA:
  //           ManageDataOp manageDataOp;
  //       case BUMP_SEQUENCE:
  //           BumpSequenceOp bumpSequenceOp;
  //       case MANAGE_BUY_OFFER:
  //           ManageBuyOfferOp manageBuyOfferOp;
  //       case PATH_PAYMENT_STRICT_SEND:
  //           PathPaymentStrictSendOp pathPaymentStrictSendOp;
  //       case CREATE_CLAIMABLE_BALANCE:
  //           CreateClaimableBalanceOp createClaimableBalanceOp;
  //       case CLAIM_CLAIMABLE_BALANCE:
  //           ClaimClaimableBalanceOp claimClaimableBalanceOp;
  //       case BEGIN_SPONSORING_FUTURE_RESERVES:
  //           BeginSponsoringFutureReservesOp beginSponsoringFutureReservesOp;
  //       case END_SPONSORING_FUTURE_RESERVES:
  //           void;
  //       case REVOKE_SPONSORSHIP:
  //           RevokeSponsorshipOp revokeSponsorshipOp;
  //       case CLAWBACK:
  //           ClawbackOp clawbackOp;
  //       case CLAWBACK_CLAIMABLE_BALANCE:
  //           ClawbackClaimableBalanceOp clawbackClaimableBalanceOp;
  //       case SET_TRUST_LINE_FLAGS:
  //           SetTrustLineFlagsOp setTrustLineFlagsOp;
  //       case LIQUIDITY_POOL_DEPOSIT:
  //           LiquidityPoolDepositOp liquidityPoolDepositOp;
  //       case LIQUIDITY_POOL_WITHDRAW:
  //           LiquidityPoolWithdrawOp liquidityPoolWithdrawOp;
  //       case INVOKE_HOST_FUNCTION:
  //           InvokeHostFunctionOp invokeHostFunctionOp;
  //       case EXTEND_FOOTPRINT_TTL:
  //           ExtendFootprintTTLOp extendFootprintTTLOp;
  //       case RESTORE_FOOTPRINT:
  //           RestoreFootprintOp restoreFootprintOp;
  //       }
  //       body;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[247]++;
  xdr.struct("Operation", [["sourceAccount", xdr.option(xdr.lookup("MuxedAccount"))], ["body", xdr.lookup("OperationBody")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           AccountID sourceAccount;
  //           SequenceNumber seqNum;
  //           uint32 opNum;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[248]++;
  xdr.struct("HashIdPreimageOperationId", [["sourceAccount", xdr.lookup("AccountId")], ["seqNum", xdr.lookup("SequenceNumber")], ["opNum", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           AccountID sourceAccount;
  //           SequenceNumber seqNum; 
  //           uint32 opNum;
  //           PoolID liquidityPoolID;
  //           Asset asset;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[249]++;
  xdr.struct("HashIdPreimageRevokeId", [["sourceAccount", xdr.lookup("AccountId")], ["seqNum", xdr.lookup("SequenceNumber")], ["opNum", xdr.lookup("Uint32")], ["liquidityPoolId", xdr.lookup("PoolId")], ["asset", xdr.lookup("Asset")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           Hash networkID;
  //           ContractIDPreimage contractIDPreimage;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[250]++;
  xdr.struct("HashIdPreimageContractId", [["networkId", xdr.lookup("Hash")], ["contractIdPreimage", xdr.lookup("ContractIdPreimage")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           Hash networkID;
  //           int64 nonce;
  //           uint32 signatureExpirationLedger;
  //           SorobanAuthorizedInvocation invocation;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[251]++;
  xdr.struct("HashIdPreimageSorobanAuthorization", [["networkId", xdr.lookup("Hash")], ["nonce", xdr.lookup("Int64")], ["signatureExpirationLedger", xdr.lookup("Uint32")], ["invocation", xdr.lookup("SorobanAuthorizedInvocation")]]);

  // === xdr source ============================================================
  //
  //   union HashIDPreimage switch (EnvelopeType type)
  //   {
  //   case ENVELOPE_TYPE_OP_ID:
  //       struct
  //       {
  //           AccountID sourceAccount;
  //           SequenceNumber seqNum;
  //           uint32 opNum;
  //       } operationID;
  //   case ENVELOPE_TYPE_POOL_REVOKE_OP_ID:
  //       struct
  //       {
  //           AccountID sourceAccount;
  //           SequenceNumber seqNum; 
  //           uint32 opNum;
  //           PoolID liquidityPoolID;
  //           Asset asset;
  //       } revokeID;
  //   case ENVELOPE_TYPE_CONTRACT_ID:
  //       struct
  //       {
  //           Hash networkID;
  //           ContractIDPreimage contractIDPreimage;
  //       } contractID;
  //   case ENVELOPE_TYPE_SOROBAN_AUTHORIZATION:
  //       struct
  //       {
  //           Hash networkID;
  //           int64 nonce;
  //           uint32 signatureExpirationLedger;
  //           SorobanAuthorizedInvocation invocation;
  //       } sorobanAuthorization;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[252]++;
  xdr.union("HashIdPreimage", {
    switchOn: xdr.lookup("EnvelopeType"),
    switchName: "type",
    switches: [["envelopeTypeOpId", "operationId"], ["envelopeTypePoolRevokeOpId", "revokeId"], ["envelopeTypeContractId", "contractId"], ["envelopeTypeSorobanAuthorization", "sorobanAuthorization"]],
    arms: {
      operationId: xdr.lookup("HashIdPreimageOperationId"),
      revokeId: xdr.lookup("HashIdPreimageRevokeId"),
      contractId: xdr.lookup("HashIdPreimageContractId"),
      sorobanAuthorization: xdr.lookup("HashIdPreimageSorobanAuthorization")
    }
  });

  // === xdr source ============================================================
  //
  //   enum MemoType
  //   {
  //       MEMO_NONE = 0,
  //       MEMO_TEXT = 1,
  //       MEMO_ID = 2,
  //       MEMO_HASH = 3,
  //       MEMO_RETURN = 4
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[253]++;
  xdr["enum"]("MemoType", {
    memoNone: 0,
    memoText: 1,
    memoId: 2,
    memoHash: 3,
    memoReturn: 4
  });

  // === xdr source ============================================================
  //
  //   union Memo switch (MemoType type)
  //   {
  //   case MEMO_NONE:
  //       void;
  //   case MEMO_TEXT:
  //       string text<28>;
  //   case MEMO_ID:
  //       uint64 id;
  //   case MEMO_HASH:
  //       Hash hash; // the hash of what to pull from the content server
  //   case MEMO_RETURN:
  //       Hash retHash; // the hash of the tx you are rejecting
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[254]++;
  xdr.union("Memo", {
    switchOn: xdr.lookup("MemoType"),
    switchName: "type",
    switches: [["memoNone", xdr["void"]()], ["memoText", "text"], ["memoId", "id"], ["memoHash", "hash"], ["memoReturn", "retHash"]],
    arms: {
      text: xdr.string(28),
      id: xdr.lookup("Uint64"),
      hash: xdr.lookup("Hash"),
      retHash: xdr.lookup("Hash")
    }
  });

  // === xdr source ============================================================
  //
  //   struct TimeBounds
  //   {
  //       TimePoint minTime;
  //       TimePoint maxTime; // 0 here means no maxTime
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[255]++;
  xdr.struct("TimeBounds", [["minTime", xdr.lookup("TimePoint")], ["maxTime", xdr.lookup("TimePoint")]]);

  // === xdr source ============================================================
  //
  //   struct LedgerBounds
  //   {
  //       uint32 minLedger;
  //       uint32 maxLedger; // 0 here means no maxLedger
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[256]++;
  xdr.struct("LedgerBounds", [["minLedger", xdr.lookup("Uint32")], ["maxLedger", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   struct PreconditionsV2
  //   {
  //       TimeBounds* timeBounds;
  //   
  //       // Transaction only valid for ledger numbers n such that
  //       // minLedger <= n < maxLedger (if maxLedger == 0, then
  //       // only minLedger is checked)
  //       LedgerBounds* ledgerBounds;
  //   
  //       // If NULL, only valid when sourceAccount's sequence number
  //       // is seqNum - 1.  Otherwise, valid when sourceAccount's
  //       // sequence number n satisfies minSeqNum <= n < tx.seqNum.
  //       // Note that after execution the account's sequence number
  //       // is always raised to tx.seqNum, and a transaction is not
  //       // valid if tx.seqNum is too high to ensure replay protection.
  //       SequenceNumber* minSeqNum;
  //   
  //       // For the transaction to be valid, the current ledger time must
  //       // be at least minSeqAge greater than sourceAccount's seqTime.
  //       Duration minSeqAge;
  //   
  //       // For the transaction to be valid, the current ledger number
  //       // must be at least minSeqLedgerGap greater than sourceAccount's
  //       // seqLedger.
  //       uint32 minSeqLedgerGap;
  //   
  //       // For the transaction to be valid, there must be a signature
  //       // corresponding to every Signer in this array, even if the
  //       // signature is not otherwise required by the sourceAccount or
  //       // operations.
  //       SignerKey extraSigners<2>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[257]++;
  xdr.struct("PreconditionsV2", [["timeBounds", xdr.option(xdr.lookup("TimeBounds"))], ["ledgerBounds", xdr.option(xdr.lookup("LedgerBounds"))], ["minSeqNum", xdr.option(xdr.lookup("SequenceNumber"))], ["minSeqAge", xdr.lookup("Duration")], ["minSeqLedgerGap", xdr.lookup("Uint32")], ["extraSigners", xdr.varArray(xdr.lookup("SignerKey"), 2)]]);

  // === xdr source ============================================================
  //
  //   enum PreconditionType
  //   {
  //       PRECOND_NONE = 0,
  //       PRECOND_TIME = 1,
  //       PRECOND_V2 = 2
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[258]++;
  xdr["enum"]("PreconditionType", {
    precondNone: 0,
    precondTime: 1,
    precondV2: 2
  });

  // === xdr source ============================================================
  //
  //   union Preconditions switch (PreconditionType type)
  //   {
  //   case PRECOND_NONE:
  //       void;
  //   case PRECOND_TIME:
  //       TimeBounds timeBounds;
  //   case PRECOND_V2:
  //       PreconditionsV2 v2;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[259]++;
  xdr.union("Preconditions", {
    switchOn: xdr.lookup("PreconditionType"),
    switchName: "type",
    switches: [["precondNone", xdr["void"]()], ["precondTime", "timeBounds"], ["precondV2", "v2"]],
    arms: {
      timeBounds: xdr.lookup("TimeBounds"),
      v2: xdr.lookup("PreconditionsV2")
    }
  });

  // === xdr source ============================================================
  //
  //   struct LedgerFootprint
  //   {
  //       LedgerKey readOnly<>;
  //       LedgerKey readWrite<>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[260]++;
  xdr.struct("LedgerFootprint", [["readOnly", xdr.varArray(xdr.lookup("LedgerKey"), 2147483647)], ["readWrite", xdr.varArray(xdr.lookup("LedgerKey"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   struct SorobanResources
  //   {   
  //       // The ledger footprint of the transaction.
  //       LedgerFootprint footprint;
  //       // The maximum number of instructions this transaction can use
  //       uint32 instructions; 
  //   
  //       // The maximum number of bytes this transaction can read from ledger
  //       uint32 readBytes;
  //       // The maximum number of bytes this transaction can write to ledger
  //       uint32 writeBytes;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[261]++;
  xdr.struct("SorobanResources", [["footprint", xdr.lookup("LedgerFootprint")], ["instructions", xdr.lookup("Uint32")], ["readBytes", xdr.lookup("Uint32")], ["writeBytes", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   struct SorobanTransactionData
  //   {
  //       ExtensionPoint ext;
  //       SorobanResources resources;
  //       // Amount of the transaction `fee` allocated to the Soroban resource fees.
  //       // The fraction of `resourceFee` corresponding to `resources` specified 
  //       // above is *not* refundable (i.e. fees for instructions, ledger I/O), as
  //       // well as fees for the transaction size.
  //       // The remaining part of the fee is refundable and the charged value is
  //       // based on the actual consumption of refundable resources (events, ledger
  //       // rent bumps).
  //       // The `inclusionFee` used for prioritization of the transaction is defined
  //       // as `tx.fee - resourceFee`.
  //       int64 resourceFee;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[262]++;
  xdr.struct("SorobanTransactionData", [["ext", xdr.lookup("ExtensionPoint")], ["resources", xdr.lookup("SorobanResources")], ["resourceFee", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[263]++;
  xdr.union("TransactionV0Ext", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct TransactionV0
  //   {
  //       opaque sourceAccountDilithium2[1312];
  //       uint32 fee;
  //       SequenceNumber seqNum;
  //       TimeBounds* timeBounds;
  //       Memo memo;
  //       Operation operations<MAX_OPS_PER_TX>;
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[264]++;
  xdr.struct("TransactionV0", [["sourceAccountDilithium2", xdr.opaque(1312)], ["fee", xdr.lookup("Uint32")], ["seqNum", xdr.lookup("SequenceNumber")], ["timeBounds", xdr.option(xdr.lookup("TimeBounds"))], ["memo", xdr.lookup("Memo")], ["operations", xdr.varArray(xdr.lookup("Operation"), xdr.lookup("MAX_OPS_PER_TX"))], ["ext", xdr.lookup("TransactionV0Ext")]]);

  // === xdr source ============================================================
  //
  //   struct TransactionV0Envelope
  //   {
  //       TransactionV0 tx;
  //       /* Each decorated signature is a signature over the SHA256 hash of
  //        * a TransactionSignaturePayload */
  //       DecoratedSignature signatures<20>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[265]++;
  xdr.struct("TransactionV0Envelope", [["tx", xdr.lookup("TransactionV0")], ["signatures", xdr.varArray(xdr.lookup("DecoratedSignature"), 20)]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           SorobanTransactionData sorobanData;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[266]++;
  xdr.union("TransactionExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()], [1, "sorobanData"]],
    arms: {
      sorobanData: xdr.lookup("SorobanTransactionData")
    }
  });

  // === xdr source ============================================================
  //
  //   struct Transaction
  //   {
  //       // account used to run the transaction
  //       MuxedAccount sourceAccount;
  //   
  //       // the fee the sourceAccount will pay
  //       uint32 fee;
  //   
  //       // sequence number to consume in the account
  //       SequenceNumber seqNum;
  //   
  //       // validity conditions
  //       Preconditions cond;
  //   
  //       Memo memo;
  //   
  //       Operation operations<MAX_OPS_PER_TX>;
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           SorobanTransactionData sorobanData;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[267]++;
  xdr.struct("Transaction", [["sourceAccount", xdr.lookup("MuxedAccount")], ["fee", xdr.lookup("Uint32")], ["seqNum", xdr.lookup("SequenceNumber")], ["cond", xdr.lookup("Preconditions")], ["memo", xdr.lookup("Memo")], ["operations", xdr.varArray(xdr.lookup("Operation"), xdr.lookup("MAX_OPS_PER_TX"))], ["ext", xdr.lookup("TransactionExt")]]);

  // === xdr source ============================================================
  //
  //   struct TransactionV1Envelope
  //   {
  //       Transaction tx;
  //       /* Each decorated signature is a signature over the SHA256 hash of
  //        * a TransactionSignaturePayload */
  //       DecoratedSignature signatures<20>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[268]++;
  xdr.struct("TransactionV1Envelope", [["tx", xdr.lookup("Transaction")], ["signatures", xdr.varArray(xdr.lookup("DecoratedSignature"), 20)]]);

  // === xdr source ============================================================
  //
  //   union switch (EnvelopeType type)
  //       {
  //       case ENVELOPE_TYPE_TX:
  //           TransactionV1Envelope v1;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[269]++;
  xdr.union("FeeBumpTransactionInnerTx", {
    switchOn: xdr.lookup("EnvelopeType"),
    switchName: "type",
    switches: [["envelopeTypeTx", "v1"]],
    arms: {
      v1: xdr.lookup("TransactionV1Envelope")
    }
  });

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[270]++;
  xdr.union("FeeBumpTransactionExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct FeeBumpTransaction
  //   {
  //       MuxedAccount feeSource;
  //       int64 fee;
  //       union switch (EnvelopeType type)
  //       {
  //       case ENVELOPE_TYPE_TX:
  //           TransactionV1Envelope v1;
  //       }
  //       innerTx;
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[271]++;
  xdr.struct("FeeBumpTransaction", [["feeSource", xdr.lookup("MuxedAccount")], ["fee", xdr.lookup("Int64")], ["innerTx", xdr.lookup("FeeBumpTransactionInnerTx")], ["ext", xdr.lookup("FeeBumpTransactionExt")]]);

  // === xdr source ============================================================
  //
  //   struct FeeBumpTransactionEnvelope
  //   {
  //       FeeBumpTransaction tx;
  //       /* Each decorated signature is a signature over the SHA256 hash of
  //        * a TransactionSignaturePayload */
  //       DecoratedSignature signatures<20>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[272]++;
  xdr.struct("FeeBumpTransactionEnvelope", [["tx", xdr.lookup("FeeBumpTransaction")], ["signatures", xdr.varArray(xdr.lookup("DecoratedSignature"), 20)]]);

  // === xdr source ============================================================
  //
  //   union TransactionEnvelope switch (EnvelopeType type)
  //   {
  //   case ENVELOPE_TYPE_TX_V0:
  //       TransactionV0Envelope v0;
  //   case ENVELOPE_TYPE_TX:
  //       TransactionV1Envelope v1;
  //   case ENVELOPE_TYPE_TX_FEE_BUMP:
  //       FeeBumpTransactionEnvelope feeBump;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[273]++;
  xdr.union("TransactionEnvelope", {
    switchOn: xdr.lookup("EnvelopeType"),
    switchName: "type",
    switches: [["envelopeTypeTxV0", "v0"], ["envelopeTypeTx", "v1"], ["envelopeTypeTxFeeBump", "feeBump"]],
    arms: {
      v0: xdr.lookup("TransactionV0Envelope"),
      v1: xdr.lookup("TransactionV1Envelope"),
      feeBump: xdr.lookup("FeeBumpTransactionEnvelope")
    }
  });

  // === xdr source ============================================================
  //
  //   union switch (EnvelopeType type)
  //       {
  //       // Backwards Compatibility: Use ENVELOPE_TYPE_TX to sign ENVELOPE_TYPE_TX_V0
  //       case ENVELOPE_TYPE_TX:
  //           Transaction tx;
  //       case ENVELOPE_TYPE_TX_FEE_BUMP:
  //           FeeBumpTransaction feeBump;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[274]++;
  xdr.union("TransactionSignaturePayloadTaggedTransaction", {
    switchOn: xdr.lookup("EnvelopeType"),
    switchName: "type",
    switches: [["envelopeTypeTx", "tx"], ["envelopeTypeTxFeeBump", "feeBump"]],
    arms: {
      tx: xdr.lookup("Transaction"),
      feeBump: xdr.lookup("FeeBumpTransaction")
    }
  });

  // === xdr source ============================================================
  //
  //   struct TransactionSignaturePayload
  //   {
  //       Hash networkId;
  //       union switch (EnvelopeType type)
  //       {
  //       // Backwards Compatibility: Use ENVELOPE_TYPE_TX to sign ENVELOPE_TYPE_TX_V0
  //       case ENVELOPE_TYPE_TX:
  //           Transaction tx;
  //       case ENVELOPE_TYPE_TX_FEE_BUMP:
  //           FeeBumpTransaction feeBump;
  //       }
  //       taggedTransaction;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[275]++;
  xdr.struct("TransactionSignaturePayload", [["networkId", xdr.lookup("Hash")], ["taggedTransaction", xdr.lookup("TransactionSignaturePayloadTaggedTransaction")]]);

  // === xdr source ============================================================
  //
  //   enum ClaimAtomType
  //   {
  //       CLAIM_ATOM_TYPE_V0 = 0,
  //       CLAIM_ATOM_TYPE_ORDER_BOOK = 1,
  //       CLAIM_ATOM_TYPE_LIQUIDITY_POOL = 2
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[276]++;
  xdr["enum"]("ClaimAtomType", {
    claimAtomTypeV0: 0,
    claimAtomTypeOrderBook: 1,
    claimAtomTypeLiquidityPool: 2
  });

  // === xdr source ============================================================
  //
  //   struct ClaimOfferAtomV0
  //   {
  //       // emitted to identify the offer
  //       opaque sellerDilithium2[1312]; // Account that owns the offer
  //       int64 offerID;
  //   
  //       // amount and asset taken from the owner
  //       Asset assetSold;
  //       int64 amountSold;
  //   
  //       // amount and asset sent to the owner
  //       Asset assetBought;
  //       int64 amountBought;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[277]++;
  xdr.struct("ClaimOfferAtomV0", [["sellerDilithium2", xdr.opaque(1312)], ["offerId", xdr.lookup("Int64")], ["assetSold", xdr.lookup("Asset")], ["amountSold", xdr.lookup("Int64")], ["assetBought", xdr.lookup("Asset")], ["amountBought", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct ClaimOfferAtom
  //   {
  //       // emitted to identify the offer
  //       AccountID sellerID; // Account that owns the offer
  //       int64 offerID;
  //   
  //       // amount and asset taken from the owner
  //       Asset assetSold;
  //       int64 amountSold;
  //   
  //       // amount and asset sent to the owner
  //       Asset assetBought;
  //       int64 amountBought;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[278]++;
  xdr.struct("ClaimOfferAtom", [["sellerId", xdr.lookup("AccountId")], ["offerId", xdr.lookup("Int64")], ["assetSold", xdr.lookup("Asset")], ["amountSold", xdr.lookup("Int64")], ["assetBought", xdr.lookup("Asset")], ["amountBought", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct ClaimLiquidityAtom
  //   {
  //       PoolID liquidityPoolID;
  //   
  //       // amount and asset taken from the pool
  //       Asset assetSold;
  //       int64 amountSold;
  //   
  //       // amount and asset sent to the pool
  //       Asset assetBought;
  //       int64 amountBought;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[279]++;
  xdr.struct("ClaimLiquidityAtom", [["liquidityPoolId", xdr.lookup("PoolId")], ["assetSold", xdr.lookup("Asset")], ["amountSold", xdr.lookup("Int64")], ["assetBought", xdr.lookup("Asset")], ["amountBought", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   union ClaimAtom switch (ClaimAtomType type)
  //   {
  //   case CLAIM_ATOM_TYPE_V0:
  //       ClaimOfferAtomV0 v0;
  //   case CLAIM_ATOM_TYPE_ORDER_BOOK:
  //       ClaimOfferAtom orderBook;
  //   case CLAIM_ATOM_TYPE_LIQUIDITY_POOL:
  //       ClaimLiquidityAtom liquidityPool;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[280]++;
  xdr.union("ClaimAtom", {
    switchOn: xdr.lookup("ClaimAtomType"),
    switchName: "type",
    switches: [["claimAtomTypeV0", "v0"], ["claimAtomTypeOrderBook", "orderBook"], ["claimAtomTypeLiquidityPool", "liquidityPool"]],
    arms: {
      v0: xdr.lookup("ClaimOfferAtomV0"),
      orderBook: xdr.lookup("ClaimOfferAtom"),
      liquidityPool: xdr.lookup("ClaimLiquidityAtom")
    }
  });

  // === xdr source ============================================================
  //
  //   enum CreateAccountResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       CREATE_ACCOUNT_SUCCESS = 0, // account was created
  //   
  //       // codes considered as "failure" for the operation
  //       CREATE_ACCOUNT_MALFORMED = -1,   // invalid destination
  //       CREATE_ACCOUNT_UNDERFUNDED = -2, // not enough funds in source account
  //       CREATE_ACCOUNT_LOW_RESERVE =
  //           -3, // would create an account below the min reserve
  //       CREATE_ACCOUNT_ALREADY_EXIST = -4 // account already exists
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[281]++;
  xdr["enum"]("CreateAccountResultCode", {
    createAccountSuccess: 0,
    createAccountMalformed: -1,
    createAccountUnderfunded: -2,
    createAccountLowReserve: -3,
    createAccountAlreadyExist: -4
  });

  // === xdr source ============================================================
  //
  //   union CreateAccountResult switch (CreateAccountResultCode code)
  //   {
  //   case CREATE_ACCOUNT_SUCCESS:
  //       void;
  //   case CREATE_ACCOUNT_MALFORMED:
  //   case CREATE_ACCOUNT_UNDERFUNDED:
  //   case CREATE_ACCOUNT_LOW_RESERVE:
  //   case CREATE_ACCOUNT_ALREADY_EXIST:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[282]++;
  xdr.union("CreateAccountResult", {
    switchOn: xdr.lookup("CreateAccountResultCode"),
    switchName: "code",
    switches: [["createAccountSuccess", xdr["void"]()], ["createAccountMalformed", xdr["void"]()], ["createAccountUnderfunded", xdr["void"]()], ["createAccountLowReserve", xdr["void"]()], ["createAccountAlreadyExist", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum PaymentResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       PAYMENT_SUCCESS = 0, // payment successfully completed
  //   
  //       // codes considered as "failure" for the operation
  //       PAYMENT_MALFORMED = -1,          // bad input
  //       PAYMENT_UNDERFUNDED = -2,        // not enough funds in source account
  //       PAYMENT_SRC_NO_TRUST = -3,       // no trust line on source account
  //       PAYMENT_SRC_NOT_AUTHORIZED = -4, // source not authorized to transfer
  //       PAYMENT_NO_DESTINATION = -5,     // destination account does not exist
  //       PAYMENT_NO_TRUST = -6,       // destination missing a trust line for asset
  //       PAYMENT_NOT_AUTHORIZED = -7, // destination not authorized to hold asset
  //       PAYMENT_LINE_FULL = -8,      // destination would go above their limit
  //       PAYMENT_NO_ISSUER = -9       // missing issuer on asset
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[283]++;
  xdr["enum"]("PaymentResultCode", {
    paymentSuccess: 0,
    paymentMalformed: -1,
    paymentUnderfunded: -2,
    paymentSrcNoTrust: -3,
    paymentSrcNotAuthorized: -4,
    paymentNoDestination: -5,
    paymentNoTrust: -6,
    paymentNotAuthorized: -7,
    paymentLineFull: -8,
    paymentNoIssuer: -9
  });

  // === xdr source ============================================================
  //
  //   union PaymentResult switch (PaymentResultCode code)
  //   {
  //   case PAYMENT_SUCCESS:
  //       void;
  //   case PAYMENT_MALFORMED:
  //   case PAYMENT_UNDERFUNDED:
  //   case PAYMENT_SRC_NO_TRUST:
  //   case PAYMENT_SRC_NOT_AUTHORIZED:
  //   case PAYMENT_NO_DESTINATION:
  //   case PAYMENT_NO_TRUST:
  //   case PAYMENT_NOT_AUTHORIZED:
  //   case PAYMENT_LINE_FULL:
  //   case PAYMENT_NO_ISSUER:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[284]++;
  xdr.union("PaymentResult", {
    switchOn: xdr.lookup("PaymentResultCode"),
    switchName: "code",
    switches: [["paymentSuccess", xdr["void"]()], ["paymentMalformed", xdr["void"]()], ["paymentUnderfunded", xdr["void"]()], ["paymentSrcNoTrust", xdr["void"]()], ["paymentSrcNotAuthorized", xdr["void"]()], ["paymentNoDestination", xdr["void"]()], ["paymentNoTrust", xdr["void"]()], ["paymentNotAuthorized", xdr["void"]()], ["paymentLineFull", xdr["void"]()], ["paymentNoIssuer", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum PathPaymentStrictReceiveResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       PATH_PAYMENT_STRICT_RECEIVE_SUCCESS = 0, // success
  //   
  //       // codes considered as "failure" for the operation
  //       PATH_PAYMENT_STRICT_RECEIVE_MALFORMED = -1, // bad input
  //       PATH_PAYMENT_STRICT_RECEIVE_UNDERFUNDED =
  //           -2, // not enough funds in source account
  //       PATH_PAYMENT_STRICT_RECEIVE_SRC_NO_TRUST =
  //           -3, // no trust line on source account
  //       PATH_PAYMENT_STRICT_RECEIVE_SRC_NOT_AUTHORIZED =
  //           -4, // source not authorized to transfer
  //       PATH_PAYMENT_STRICT_RECEIVE_NO_DESTINATION =
  //           -5, // destination account does not exist
  //       PATH_PAYMENT_STRICT_RECEIVE_NO_TRUST =
  //           -6, // dest missing a trust line for asset
  //       PATH_PAYMENT_STRICT_RECEIVE_NOT_AUTHORIZED =
  //           -7, // dest not authorized to hold asset
  //       PATH_PAYMENT_STRICT_RECEIVE_LINE_FULL =
  //           -8, // dest would go above their limit
  //       PATH_PAYMENT_STRICT_RECEIVE_NO_ISSUER = -9, // missing issuer on one asset
  //       PATH_PAYMENT_STRICT_RECEIVE_TOO_FEW_OFFERS =
  //           -10, // not enough offers to satisfy path
  //       PATH_PAYMENT_STRICT_RECEIVE_OFFER_CROSS_SELF =
  //           -11, // would cross one of its own offers
  //       PATH_PAYMENT_STRICT_RECEIVE_OVER_SENDMAX = -12 // could not satisfy sendmax
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[285]++;
  xdr["enum"]("PathPaymentStrictReceiveResultCode", {
    pathPaymentStrictReceiveSuccess: 0,
    pathPaymentStrictReceiveMalformed: -1,
    pathPaymentStrictReceiveUnderfunded: -2,
    pathPaymentStrictReceiveSrcNoTrust: -3,
    pathPaymentStrictReceiveSrcNotAuthorized: -4,
    pathPaymentStrictReceiveNoDestination: -5,
    pathPaymentStrictReceiveNoTrust: -6,
    pathPaymentStrictReceiveNotAuthorized: -7,
    pathPaymentStrictReceiveLineFull: -8,
    pathPaymentStrictReceiveNoIssuer: -9,
    pathPaymentStrictReceiveTooFewOffers: -10,
    pathPaymentStrictReceiveOfferCrossSelf: -11,
    pathPaymentStrictReceiveOverSendmax: -12
  });

  // === xdr source ============================================================
  //
  //   struct SimplePaymentResult
  //   {
  //       AccountID destination;
  //       Asset asset;
  //       int64 amount;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[286]++;
  xdr.struct("SimplePaymentResult", [["destination", xdr.lookup("AccountId")], ["asset", xdr.lookup("Asset")], ["amount", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           ClaimAtom offers<>;
  //           SimplePaymentResult last;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[287]++;
  xdr.struct("PathPaymentStrictReceiveResultSuccess", [["offers", xdr.varArray(xdr.lookup("ClaimAtom"), 2147483647)], ["last", xdr.lookup("SimplePaymentResult")]]);

  // === xdr source ============================================================
  //
  //   union PathPaymentStrictReceiveResult switch (
  //       PathPaymentStrictReceiveResultCode code)
  //   {
  //   case PATH_PAYMENT_STRICT_RECEIVE_SUCCESS:
  //       struct
  //       {
  //           ClaimAtom offers<>;
  //           SimplePaymentResult last;
  //       } success;
  //   case PATH_PAYMENT_STRICT_RECEIVE_MALFORMED:
  //   case PATH_PAYMENT_STRICT_RECEIVE_UNDERFUNDED:
  //   case PATH_PAYMENT_STRICT_RECEIVE_SRC_NO_TRUST:
  //   case PATH_PAYMENT_STRICT_RECEIVE_SRC_NOT_AUTHORIZED:
  //   case PATH_PAYMENT_STRICT_RECEIVE_NO_DESTINATION:
  //   case PATH_PAYMENT_STRICT_RECEIVE_NO_TRUST:
  //   case PATH_PAYMENT_STRICT_RECEIVE_NOT_AUTHORIZED:
  //   case PATH_PAYMENT_STRICT_RECEIVE_LINE_FULL:
  //       void;
  //   case PATH_PAYMENT_STRICT_RECEIVE_NO_ISSUER:
  //       Asset noIssuer; // the asset that caused the error
  //   case PATH_PAYMENT_STRICT_RECEIVE_TOO_FEW_OFFERS:
  //   case PATH_PAYMENT_STRICT_RECEIVE_OFFER_CROSS_SELF:
  //   case PATH_PAYMENT_STRICT_RECEIVE_OVER_SENDMAX:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[288]++;
  xdr.union("PathPaymentStrictReceiveResult", {
    switchOn: xdr.lookup("PathPaymentStrictReceiveResultCode"),
    switchName: "code",
    switches: [["pathPaymentStrictReceiveSuccess", "success"], ["pathPaymentStrictReceiveMalformed", xdr["void"]()], ["pathPaymentStrictReceiveUnderfunded", xdr["void"]()], ["pathPaymentStrictReceiveSrcNoTrust", xdr["void"]()], ["pathPaymentStrictReceiveSrcNotAuthorized", xdr["void"]()], ["pathPaymentStrictReceiveNoDestination", xdr["void"]()], ["pathPaymentStrictReceiveNoTrust", xdr["void"]()], ["pathPaymentStrictReceiveNotAuthorized", xdr["void"]()], ["pathPaymentStrictReceiveLineFull", xdr["void"]()], ["pathPaymentStrictReceiveNoIssuer", "noIssuer"], ["pathPaymentStrictReceiveTooFewOffers", xdr["void"]()], ["pathPaymentStrictReceiveOfferCrossSelf", xdr["void"]()], ["pathPaymentStrictReceiveOverSendmax", xdr["void"]()]],
    arms: {
      success: xdr.lookup("PathPaymentStrictReceiveResultSuccess"),
      noIssuer: xdr.lookup("Asset")
    }
  });

  // === xdr source ============================================================
  //
  //   enum PathPaymentStrictSendResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       PATH_PAYMENT_STRICT_SEND_SUCCESS = 0, // success
  //   
  //       // codes considered as "failure" for the operation
  //       PATH_PAYMENT_STRICT_SEND_MALFORMED = -1, // bad input
  //       PATH_PAYMENT_STRICT_SEND_UNDERFUNDED =
  //           -2, // not enough funds in source account
  //       PATH_PAYMENT_STRICT_SEND_SRC_NO_TRUST =
  //           -3, // no trust line on source account
  //       PATH_PAYMENT_STRICT_SEND_SRC_NOT_AUTHORIZED =
  //           -4, // source not authorized to transfer
  //       PATH_PAYMENT_STRICT_SEND_NO_DESTINATION =
  //           -5, // destination account does not exist
  //       PATH_PAYMENT_STRICT_SEND_NO_TRUST =
  //           -6, // dest missing a trust line for asset
  //       PATH_PAYMENT_STRICT_SEND_NOT_AUTHORIZED =
  //           -7, // dest not authorized to hold asset
  //       PATH_PAYMENT_STRICT_SEND_LINE_FULL = -8, // dest would go above their limit
  //       PATH_PAYMENT_STRICT_SEND_NO_ISSUER = -9, // missing issuer on one asset
  //       PATH_PAYMENT_STRICT_SEND_TOO_FEW_OFFERS =
  //           -10, // not enough offers to satisfy path
  //       PATH_PAYMENT_STRICT_SEND_OFFER_CROSS_SELF =
  //           -11, // would cross one of its own offers
  //       PATH_PAYMENT_STRICT_SEND_UNDER_DESTMIN = -12 // could not satisfy destMin
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[289]++;
  xdr["enum"]("PathPaymentStrictSendResultCode", {
    pathPaymentStrictSendSuccess: 0,
    pathPaymentStrictSendMalformed: -1,
    pathPaymentStrictSendUnderfunded: -2,
    pathPaymentStrictSendSrcNoTrust: -3,
    pathPaymentStrictSendSrcNotAuthorized: -4,
    pathPaymentStrictSendNoDestination: -5,
    pathPaymentStrictSendNoTrust: -6,
    pathPaymentStrictSendNotAuthorized: -7,
    pathPaymentStrictSendLineFull: -8,
    pathPaymentStrictSendNoIssuer: -9,
    pathPaymentStrictSendTooFewOffers: -10,
    pathPaymentStrictSendOfferCrossSelf: -11,
    pathPaymentStrictSendUnderDestmin: -12
  });

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           ClaimAtom offers<>;
  //           SimplePaymentResult last;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[290]++;
  xdr.struct("PathPaymentStrictSendResultSuccess", [["offers", xdr.varArray(xdr.lookup("ClaimAtom"), 2147483647)], ["last", xdr.lookup("SimplePaymentResult")]]);

  // === xdr source ============================================================
  //
  //   union PathPaymentStrictSendResult switch (PathPaymentStrictSendResultCode code)
  //   {
  //   case PATH_PAYMENT_STRICT_SEND_SUCCESS:
  //       struct
  //       {
  //           ClaimAtom offers<>;
  //           SimplePaymentResult last;
  //       } success;
  //   case PATH_PAYMENT_STRICT_SEND_MALFORMED:
  //   case PATH_PAYMENT_STRICT_SEND_UNDERFUNDED:
  //   case PATH_PAYMENT_STRICT_SEND_SRC_NO_TRUST:
  //   case PATH_PAYMENT_STRICT_SEND_SRC_NOT_AUTHORIZED:
  //   case PATH_PAYMENT_STRICT_SEND_NO_DESTINATION:
  //   case PATH_PAYMENT_STRICT_SEND_NO_TRUST:
  //   case PATH_PAYMENT_STRICT_SEND_NOT_AUTHORIZED:
  //   case PATH_PAYMENT_STRICT_SEND_LINE_FULL:
  //       void;
  //   case PATH_PAYMENT_STRICT_SEND_NO_ISSUER:
  //       Asset noIssuer; // the asset that caused the error
  //   case PATH_PAYMENT_STRICT_SEND_TOO_FEW_OFFERS:
  //   case PATH_PAYMENT_STRICT_SEND_OFFER_CROSS_SELF:
  //   case PATH_PAYMENT_STRICT_SEND_UNDER_DESTMIN:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[291]++;
  xdr.union("PathPaymentStrictSendResult", {
    switchOn: xdr.lookup("PathPaymentStrictSendResultCode"),
    switchName: "code",
    switches: [["pathPaymentStrictSendSuccess", "success"], ["pathPaymentStrictSendMalformed", xdr["void"]()], ["pathPaymentStrictSendUnderfunded", xdr["void"]()], ["pathPaymentStrictSendSrcNoTrust", xdr["void"]()], ["pathPaymentStrictSendSrcNotAuthorized", xdr["void"]()], ["pathPaymentStrictSendNoDestination", xdr["void"]()], ["pathPaymentStrictSendNoTrust", xdr["void"]()], ["pathPaymentStrictSendNotAuthorized", xdr["void"]()], ["pathPaymentStrictSendLineFull", xdr["void"]()], ["pathPaymentStrictSendNoIssuer", "noIssuer"], ["pathPaymentStrictSendTooFewOffers", xdr["void"]()], ["pathPaymentStrictSendOfferCrossSelf", xdr["void"]()], ["pathPaymentStrictSendUnderDestmin", xdr["void"]()]],
    arms: {
      success: xdr.lookup("PathPaymentStrictSendResultSuccess"),
      noIssuer: xdr.lookup("Asset")
    }
  });

  // === xdr source ============================================================
  //
  //   enum ManageSellOfferResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       MANAGE_SELL_OFFER_SUCCESS = 0,
  //   
  //       // codes considered as "failure" for the operation
  //       MANAGE_SELL_OFFER_MALFORMED = -1, // generated offer would be invalid
  //       MANAGE_SELL_OFFER_SELL_NO_TRUST =
  //           -2,                              // no trust line for what we're selling
  //       MANAGE_SELL_OFFER_BUY_NO_TRUST = -3, // no trust line for what we're buying
  //       MANAGE_SELL_OFFER_SELL_NOT_AUTHORIZED = -4, // not authorized to sell
  //       MANAGE_SELL_OFFER_BUY_NOT_AUTHORIZED = -5,  // not authorized to buy
  //       MANAGE_SELL_OFFER_LINE_FULL = -6, // can't receive more of what it's buying
  //       MANAGE_SELL_OFFER_UNDERFUNDED = -7, // doesn't hold what it's trying to sell
  //       MANAGE_SELL_OFFER_CROSS_SELF =
  //           -8, // would cross an offer from the same user
  //       MANAGE_SELL_OFFER_SELL_NO_ISSUER = -9, // no issuer for what we're selling
  //       MANAGE_SELL_OFFER_BUY_NO_ISSUER = -10, // no issuer for what we're buying
  //   
  //       // update errors
  //       MANAGE_SELL_OFFER_NOT_FOUND =
  //           -11, // offerID does not match an existing offer
  //   
  //       MANAGE_SELL_OFFER_LOW_RESERVE =
  //           -12 // not enough funds to create a new Offer
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[292]++;
  xdr["enum"]("ManageSellOfferResultCode", {
    manageSellOfferSuccess: 0,
    manageSellOfferMalformed: -1,
    manageSellOfferSellNoTrust: -2,
    manageSellOfferBuyNoTrust: -3,
    manageSellOfferSellNotAuthorized: -4,
    manageSellOfferBuyNotAuthorized: -5,
    manageSellOfferLineFull: -6,
    manageSellOfferUnderfunded: -7,
    manageSellOfferCrossSelf: -8,
    manageSellOfferSellNoIssuer: -9,
    manageSellOfferBuyNoIssuer: -10,
    manageSellOfferNotFound: -11,
    manageSellOfferLowReserve: -12
  });

  // === xdr source ============================================================
  //
  //   enum ManageOfferEffect
  //   {
  //       MANAGE_OFFER_CREATED = 0,
  //       MANAGE_OFFER_UPDATED = 1,
  //       MANAGE_OFFER_DELETED = 2
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[293]++;
  xdr["enum"]("ManageOfferEffect", {
    manageOfferCreated: 0,
    manageOfferUpdated: 1,
    manageOfferDeleted: 2
  });

  // === xdr source ============================================================
  //
  //   union switch (ManageOfferEffect effect)
  //       {
  //       case MANAGE_OFFER_CREATED:
  //       case MANAGE_OFFER_UPDATED:
  //           OfferEntry offer;
  //       case MANAGE_OFFER_DELETED:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[294]++;
  xdr.union("ManageOfferSuccessResultOffer", {
    switchOn: xdr.lookup("ManageOfferEffect"),
    switchName: "effect",
    switches: [["manageOfferCreated", "offer"], ["manageOfferUpdated", "offer"], ["manageOfferDeleted", xdr["void"]()]],
    arms: {
      offer: xdr.lookup("OfferEntry")
    }
  });

  // === xdr source ============================================================
  //
  //   struct ManageOfferSuccessResult
  //   {
  //       // offers that got claimed while creating this offer
  //       ClaimAtom offersClaimed<>;
  //   
  //       union switch (ManageOfferEffect effect)
  //       {
  //       case MANAGE_OFFER_CREATED:
  //       case MANAGE_OFFER_UPDATED:
  //           OfferEntry offer;
  //       case MANAGE_OFFER_DELETED:
  //           void;
  //       }
  //       offer;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[295]++;
  xdr.struct("ManageOfferSuccessResult", [["offersClaimed", xdr.varArray(xdr.lookup("ClaimAtom"), 2147483647)], ["offer", xdr.lookup("ManageOfferSuccessResultOffer")]]);

  // === xdr source ============================================================
  //
  //   union ManageSellOfferResult switch (ManageSellOfferResultCode code)
  //   {
  //   case MANAGE_SELL_OFFER_SUCCESS:
  //       ManageOfferSuccessResult success;
  //   case MANAGE_SELL_OFFER_MALFORMED:
  //   case MANAGE_SELL_OFFER_SELL_NO_TRUST:
  //   case MANAGE_SELL_OFFER_BUY_NO_TRUST:
  //   case MANAGE_SELL_OFFER_SELL_NOT_AUTHORIZED:
  //   case MANAGE_SELL_OFFER_BUY_NOT_AUTHORIZED:
  //   case MANAGE_SELL_OFFER_LINE_FULL:
  //   case MANAGE_SELL_OFFER_UNDERFUNDED:
  //   case MANAGE_SELL_OFFER_CROSS_SELF:
  //   case MANAGE_SELL_OFFER_SELL_NO_ISSUER:
  //   case MANAGE_SELL_OFFER_BUY_NO_ISSUER:
  //   case MANAGE_SELL_OFFER_NOT_FOUND:
  //   case MANAGE_SELL_OFFER_LOW_RESERVE:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[296]++;
  xdr.union("ManageSellOfferResult", {
    switchOn: xdr.lookup("ManageSellOfferResultCode"),
    switchName: "code",
    switches: [["manageSellOfferSuccess", "success"], ["manageSellOfferMalformed", xdr["void"]()], ["manageSellOfferSellNoTrust", xdr["void"]()], ["manageSellOfferBuyNoTrust", xdr["void"]()], ["manageSellOfferSellNotAuthorized", xdr["void"]()], ["manageSellOfferBuyNotAuthorized", xdr["void"]()], ["manageSellOfferLineFull", xdr["void"]()], ["manageSellOfferUnderfunded", xdr["void"]()], ["manageSellOfferCrossSelf", xdr["void"]()], ["manageSellOfferSellNoIssuer", xdr["void"]()], ["manageSellOfferBuyNoIssuer", xdr["void"]()], ["manageSellOfferNotFound", xdr["void"]()], ["manageSellOfferLowReserve", xdr["void"]()]],
    arms: {
      success: xdr.lookup("ManageOfferSuccessResult")
    }
  });

  // === xdr source ============================================================
  //
  //   enum ManageBuyOfferResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       MANAGE_BUY_OFFER_SUCCESS = 0,
  //   
  //       // codes considered as "failure" for the operation
  //       MANAGE_BUY_OFFER_MALFORMED = -1,     // generated offer would be invalid
  //       MANAGE_BUY_OFFER_SELL_NO_TRUST = -2, // no trust line for what we're selling
  //       MANAGE_BUY_OFFER_BUY_NO_TRUST = -3,  // no trust line for what we're buying
  //       MANAGE_BUY_OFFER_SELL_NOT_AUTHORIZED = -4, // not authorized to sell
  //       MANAGE_BUY_OFFER_BUY_NOT_AUTHORIZED = -5,  // not authorized to buy
  //       MANAGE_BUY_OFFER_LINE_FULL = -6,   // can't receive more of what it's buying
  //       MANAGE_BUY_OFFER_UNDERFUNDED = -7, // doesn't hold what it's trying to sell
  //       MANAGE_BUY_OFFER_CROSS_SELF = -8, // would cross an offer from the same user
  //       MANAGE_BUY_OFFER_SELL_NO_ISSUER = -9, // no issuer for what we're selling
  //       MANAGE_BUY_OFFER_BUY_NO_ISSUER = -10, // no issuer for what we're buying
  //   
  //       // update errors
  //       MANAGE_BUY_OFFER_NOT_FOUND =
  //           -11, // offerID does not match an existing offer
  //   
  //       MANAGE_BUY_OFFER_LOW_RESERVE = -12 // not enough funds to create a new Offer
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[297]++;
  xdr["enum"]("ManageBuyOfferResultCode", {
    manageBuyOfferSuccess: 0,
    manageBuyOfferMalformed: -1,
    manageBuyOfferSellNoTrust: -2,
    manageBuyOfferBuyNoTrust: -3,
    manageBuyOfferSellNotAuthorized: -4,
    manageBuyOfferBuyNotAuthorized: -5,
    manageBuyOfferLineFull: -6,
    manageBuyOfferUnderfunded: -7,
    manageBuyOfferCrossSelf: -8,
    manageBuyOfferSellNoIssuer: -9,
    manageBuyOfferBuyNoIssuer: -10,
    manageBuyOfferNotFound: -11,
    manageBuyOfferLowReserve: -12
  });

  // === xdr source ============================================================
  //
  //   union ManageBuyOfferResult switch (ManageBuyOfferResultCode code)
  //   {
  //   case MANAGE_BUY_OFFER_SUCCESS:
  //       ManageOfferSuccessResult success;
  //   case MANAGE_BUY_OFFER_MALFORMED:
  //   case MANAGE_BUY_OFFER_SELL_NO_TRUST:
  //   case MANAGE_BUY_OFFER_BUY_NO_TRUST:
  //   case MANAGE_BUY_OFFER_SELL_NOT_AUTHORIZED:
  //   case MANAGE_BUY_OFFER_BUY_NOT_AUTHORIZED:
  //   case MANAGE_BUY_OFFER_LINE_FULL:
  //   case MANAGE_BUY_OFFER_UNDERFUNDED:
  //   case MANAGE_BUY_OFFER_CROSS_SELF:
  //   case MANAGE_BUY_OFFER_SELL_NO_ISSUER:
  //   case MANAGE_BUY_OFFER_BUY_NO_ISSUER:
  //   case MANAGE_BUY_OFFER_NOT_FOUND:
  //   case MANAGE_BUY_OFFER_LOW_RESERVE:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[298]++;
  xdr.union("ManageBuyOfferResult", {
    switchOn: xdr.lookup("ManageBuyOfferResultCode"),
    switchName: "code",
    switches: [["manageBuyOfferSuccess", "success"], ["manageBuyOfferMalformed", xdr["void"]()], ["manageBuyOfferSellNoTrust", xdr["void"]()], ["manageBuyOfferBuyNoTrust", xdr["void"]()], ["manageBuyOfferSellNotAuthorized", xdr["void"]()], ["manageBuyOfferBuyNotAuthorized", xdr["void"]()], ["manageBuyOfferLineFull", xdr["void"]()], ["manageBuyOfferUnderfunded", xdr["void"]()], ["manageBuyOfferCrossSelf", xdr["void"]()], ["manageBuyOfferSellNoIssuer", xdr["void"]()], ["manageBuyOfferBuyNoIssuer", xdr["void"]()], ["manageBuyOfferNotFound", xdr["void"]()], ["manageBuyOfferLowReserve", xdr["void"]()]],
    arms: {
      success: xdr.lookup("ManageOfferSuccessResult")
    }
  });

  // === xdr source ============================================================
  //
  //   enum SetOptionsResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       SET_OPTIONS_SUCCESS = 0,
  //       // codes considered as "failure" for the operation
  //       SET_OPTIONS_LOW_RESERVE = -1,      // not enough funds to add a signer
  //       SET_OPTIONS_TOO_MANY_SIGNERS = -2, // max number of signers already reached
  //       SET_OPTIONS_BAD_FLAGS = -3,        // invalid combination of clear/set flags
  //       SET_OPTIONS_INVALID_INFLATION = -4,      // inflation account does not exist
  //       SET_OPTIONS_CANT_CHANGE = -5,            // can no longer change this option
  //       SET_OPTIONS_UNKNOWN_FLAG = -6,           // can't set an unknown flag
  //       SET_OPTIONS_THRESHOLD_OUT_OF_RANGE = -7, // bad value for weight/threshold
  //       SET_OPTIONS_BAD_SIGNER = -8,             // signer cannot be masterkey
  //       SET_OPTIONS_INVALID_HOME_DOMAIN = -9,    // malformed home domain
  //       SET_OPTIONS_AUTH_REVOCABLE_REQUIRED =
  //           -10 // auth revocable is required for clawback
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[299]++;
  xdr["enum"]("SetOptionsResultCode", {
    setOptionsSuccess: 0,
    setOptionsLowReserve: -1,
    setOptionsTooManySigners: -2,
    setOptionsBadFlags: -3,
    setOptionsInvalidInflation: -4,
    setOptionsCantChange: -5,
    setOptionsUnknownFlag: -6,
    setOptionsThresholdOutOfRange: -7,
    setOptionsBadSigner: -8,
    setOptionsInvalidHomeDomain: -9,
    setOptionsAuthRevocableRequired: -10
  });

  // === xdr source ============================================================
  //
  //   union SetOptionsResult switch (SetOptionsResultCode code)
  //   {
  //   case SET_OPTIONS_SUCCESS:
  //       void;
  //   case SET_OPTIONS_LOW_RESERVE:
  //   case SET_OPTIONS_TOO_MANY_SIGNERS:
  //   case SET_OPTIONS_BAD_FLAGS:
  //   case SET_OPTIONS_INVALID_INFLATION:
  //   case SET_OPTIONS_CANT_CHANGE:
  //   case SET_OPTIONS_UNKNOWN_FLAG:
  //   case SET_OPTIONS_THRESHOLD_OUT_OF_RANGE:
  //   case SET_OPTIONS_BAD_SIGNER:
  //   case SET_OPTIONS_INVALID_HOME_DOMAIN:
  //   case SET_OPTIONS_AUTH_REVOCABLE_REQUIRED:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[300]++;
  xdr.union("SetOptionsResult", {
    switchOn: xdr.lookup("SetOptionsResultCode"),
    switchName: "code",
    switches: [["setOptionsSuccess", xdr["void"]()], ["setOptionsLowReserve", xdr["void"]()], ["setOptionsTooManySigners", xdr["void"]()], ["setOptionsBadFlags", xdr["void"]()], ["setOptionsInvalidInflation", xdr["void"]()], ["setOptionsCantChange", xdr["void"]()], ["setOptionsUnknownFlag", xdr["void"]()], ["setOptionsThresholdOutOfRange", xdr["void"]()], ["setOptionsBadSigner", xdr["void"]()], ["setOptionsInvalidHomeDomain", xdr["void"]()], ["setOptionsAuthRevocableRequired", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum ChangeTrustResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       CHANGE_TRUST_SUCCESS = 0,
  //       // codes considered as "failure" for the operation
  //       CHANGE_TRUST_MALFORMED = -1,     // bad input
  //       CHANGE_TRUST_NO_ISSUER = -2,     // could not find issuer
  //       CHANGE_TRUST_INVALID_LIMIT = -3, // cannot drop limit below balance
  //                                        // cannot create with a limit of 0
  //       CHANGE_TRUST_LOW_RESERVE =
  //           -4, // not enough funds to create a new trust line,
  //       CHANGE_TRUST_SELF_NOT_ALLOWED = -5,   // trusting self is not allowed
  //       CHANGE_TRUST_TRUST_LINE_MISSING = -6, // Asset trustline is missing for pool
  //       CHANGE_TRUST_CANNOT_DELETE =
  //           -7, // Asset trustline is still referenced in a pool
  //       CHANGE_TRUST_NOT_AUTH_MAINTAIN_LIABILITIES =
  //           -8 // Asset trustline is deauthorized
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[301]++;
  xdr["enum"]("ChangeTrustResultCode", {
    changeTrustSuccess: 0,
    changeTrustMalformed: -1,
    changeTrustNoIssuer: -2,
    changeTrustInvalidLimit: -3,
    changeTrustLowReserve: -4,
    changeTrustSelfNotAllowed: -5,
    changeTrustTrustLineMissing: -6,
    changeTrustCannotDelete: -7,
    changeTrustNotAuthMaintainLiabilities: -8
  });

  // === xdr source ============================================================
  //
  //   union ChangeTrustResult switch (ChangeTrustResultCode code)
  //   {
  //   case CHANGE_TRUST_SUCCESS:
  //       void;
  //   case CHANGE_TRUST_MALFORMED:
  //   case CHANGE_TRUST_NO_ISSUER:
  //   case CHANGE_TRUST_INVALID_LIMIT:
  //   case CHANGE_TRUST_LOW_RESERVE:
  //   case CHANGE_TRUST_SELF_NOT_ALLOWED:
  //   case CHANGE_TRUST_TRUST_LINE_MISSING:
  //   case CHANGE_TRUST_CANNOT_DELETE:
  //   case CHANGE_TRUST_NOT_AUTH_MAINTAIN_LIABILITIES:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[302]++;
  xdr.union("ChangeTrustResult", {
    switchOn: xdr.lookup("ChangeTrustResultCode"),
    switchName: "code",
    switches: [["changeTrustSuccess", xdr["void"]()], ["changeTrustMalformed", xdr["void"]()], ["changeTrustNoIssuer", xdr["void"]()], ["changeTrustInvalidLimit", xdr["void"]()], ["changeTrustLowReserve", xdr["void"]()], ["changeTrustSelfNotAllowed", xdr["void"]()], ["changeTrustTrustLineMissing", xdr["void"]()], ["changeTrustCannotDelete", xdr["void"]()], ["changeTrustNotAuthMaintainLiabilities", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum AllowTrustResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       ALLOW_TRUST_SUCCESS = 0,
  //       // codes considered as "failure" for the operation
  //       ALLOW_TRUST_MALFORMED = -1,     // asset is not ASSET_TYPE_ALPHANUM
  //       ALLOW_TRUST_NO_TRUST_LINE = -2, // trustor does not have a trustline
  //                                       // source account does not require trust
  //       ALLOW_TRUST_TRUST_NOT_REQUIRED = -3,
  //       ALLOW_TRUST_CANT_REVOKE = -4,      // source account can't revoke trust,
  //       ALLOW_TRUST_SELF_NOT_ALLOWED = -5, // trusting self is not allowed
  //       ALLOW_TRUST_LOW_RESERVE = -6       // claimable balances can't be created
  //                                          // on revoke due to low reserves
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[303]++;
  xdr["enum"]("AllowTrustResultCode", {
    allowTrustSuccess: 0,
    allowTrustMalformed: -1,
    allowTrustNoTrustLine: -2,
    allowTrustTrustNotRequired: -3,
    allowTrustCantRevoke: -4,
    allowTrustSelfNotAllowed: -5,
    allowTrustLowReserve: -6
  });

  // === xdr source ============================================================
  //
  //   union AllowTrustResult switch (AllowTrustResultCode code)
  //   {
  //   case ALLOW_TRUST_SUCCESS:
  //       void;
  //   case ALLOW_TRUST_MALFORMED:
  //   case ALLOW_TRUST_NO_TRUST_LINE:
  //   case ALLOW_TRUST_TRUST_NOT_REQUIRED:
  //   case ALLOW_TRUST_CANT_REVOKE:
  //   case ALLOW_TRUST_SELF_NOT_ALLOWED:
  //   case ALLOW_TRUST_LOW_RESERVE:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[304]++;
  xdr.union("AllowTrustResult", {
    switchOn: xdr.lookup("AllowTrustResultCode"),
    switchName: "code",
    switches: [["allowTrustSuccess", xdr["void"]()], ["allowTrustMalformed", xdr["void"]()], ["allowTrustNoTrustLine", xdr["void"]()], ["allowTrustTrustNotRequired", xdr["void"]()], ["allowTrustCantRevoke", xdr["void"]()], ["allowTrustSelfNotAllowed", xdr["void"]()], ["allowTrustLowReserve", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum AccountMergeResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       ACCOUNT_MERGE_SUCCESS = 0,
  //       // codes considered as "failure" for the operation
  //       ACCOUNT_MERGE_MALFORMED = -1,       // can't merge onto itself
  //       ACCOUNT_MERGE_NO_ACCOUNT = -2,      // destination does not exist
  //       ACCOUNT_MERGE_IMMUTABLE_SET = -3,   // source account has AUTH_IMMUTABLE set
  //       ACCOUNT_MERGE_HAS_SUB_ENTRIES = -4, // account has trust lines/offers
  //       ACCOUNT_MERGE_SEQNUM_TOO_FAR = -5,  // sequence number is over max allowed
  //       ACCOUNT_MERGE_DEST_FULL = -6,       // can't add source balance to
  //                                           // destination balance
  //       ACCOUNT_MERGE_IS_SPONSOR = -7       // can't merge account that is a sponsor
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[305]++;
  xdr["enum"]("AccountMergeResultCode", {
    accountMergeSuccess: 0,
    accountMergeMalformed: -1,
    accountMergeNoAccount: -2,
    accountMergeImmutableSet: -3,
    accountMergeHasSubEntries: -4,
    accountMergeSeqnumTooFar: -5,
    accountMergeDestFull: -6,
    accountMergeIsSponsor: -7
  });

  // === xdr source ============================================================
  //
  //   union AccountMergeResult switch (AccountMergeResultCode code)
  //   {
  //   case ACCOUNT_MERGE_SUCCESS:
  //       int64 sourceAccountBalance; // how much got transferred from source account
  //   case ACCOUNT_MERGE_MALFORMED:
  //   case ACCOUNT_MERGE_NO_ACCOUNT:
  //   case ACCOUNT_MERGE_IMMUTABLE_SET:
  //   case ACCOUNT_MERGE_HAS_SUB_ENTRIES:
  //   case ACCOUNT_MERGE_SEQNUM_TOO_FAR:
  //   case ACCOUNT_MERGE_DEST_FULL:
  //   case ACCOUNT_MERGE_IS_SPONSOR:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[306]++;
  xdr.union("AccountMergeResult", {
    switchOn: xdr.lookup("AccountMergeResultCode"),
    switchName: "code",
    switches: [["accountMergeSuccess", "sourceAccountBalance"], ["accountMergeMalformed", xdr["void"]()], ["accountMergeNoAccount", xdr["void"]()], ["accountMergeImmutableSet", xdr["void"]()], ["accountMergeHasSubEntries", xdr["void"]()], ["accountMergeSeqnumTooFar", xdr["void"]()], ["accountMergeDestFull", xdr["void"]()], ["accountMergeIsSponsor", xdr["void"]()]],
    arms: {
      sourceAccountBalance: xdr.lookup("Int64")
    }
  });

  // === xdr source ============================================================
  //
  //   enum InflationResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       INFLATION_SUCCESS = 0,
  //       // codes considered as "failure" for the operation
  //       INFLATION_NOT_TIME = -1
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[307]++;
  xdr["enum"]("InflationResultCode", {
    inflationSuccess: 0,
    inflationNotTime: -1
  });

  // === xdr source ============================================================
  //
  //   struct InflationPayout // or use PaymentResultAtom to limit types?
  //   {
  //       AccountID destination;
  //       int64 amount;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[308]++;
  xdr.struct("InflationPayout", [["destination", xdr.lookup("AccountId")], ["amount", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   union InflationResult switch (InflationResultCode code)
  //   {
  //   case INFLATION_SUCCESS:
  //       InflationPayout payouts<>;
  //   case INFLATION_NOT_TIME:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[309]++;
  xdr.union("InflationResult", {
    switchOn: xdr.lookup("InflationResultCode"),
    switchName: "code",
    switches: [["inflationSuccess", "payouts"], ["inflationNotTime", xdr["void"]()]],
    arms: {
      payouts: xdr.varArray(xdr.lookup("InflationPayout"), 2147483647)
    }
  });

  // === xdr source ============================================================
  //
  //   enum ManageDataResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       MANAGE_DATA_SUCCESS = 0,
  //       // codes considered as "failure" for the operation
  //       MANAGE_DATA_NOT_SUPPORTED_YET =
  //           -1, // The network hasn't moved to this protocol change yet
  //       MANAGE_DATA_NAME_NOT_FOUND =
  //           -2, // Trying to remove a Data Entry that isn't there
  //       MANAGE_DATA_LOW_RESERVE = -3, // not enough funds to create a new Data Entry
  //       MANAGE_DATA_INVALID_NAME = -4 // Name not a valid string
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[310]++;
  xdr["enum"]("ManageDataResultCode", {
    manageDataSuccess: 0,
    manageDataNotSupportedYet: -1,
    manageDataNameNotFound: -2,
    manageDataLowReserve: -3,
    manageDataInvalidName: -4
  });

  // === xdr source ============================================================
  //
  //   union ManageDataResult switch (ManageDataResultCode code)
  //   {
  //   case MANAGE_DATA_SUCCESS:
  //       void;
  //   case MANAGE_DATA_NOT_SUPPORTED_YET:
  //   case MANAGE_DATA_NAME_NOT_FOUND:
  //   case MANAGE_DATA_LOW_RESERVE:
  //   case MANAGE_DATA_INVALID_NAME:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[311]++;
  xdr.union("ManageDataResult", {
    switchOn: xdr.lookup("ManageDataResultCode"),
    switchName: "code",
    switches: [["manageDataSuccess", xdr["void"]()], ["manageDataNotSupportedYet", xdr["void"]()], ["manageDataNameNotFound", xdr["void"]()], ["manageDataLowReserve", xdr["void"]()], ["manageDataInvalidName", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum BumpSequenceResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       BUMP_SEQUENCE_SUCCESS = 0,
  //       // codes considered as "failure" for the operation
  //       BUMP_SEQUENCE_BAD_SEQ = -1 // `bumpTo` is not within bounds
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[312]++;
  xdr["enum"]("BumpSequenceResultCode", {
    bumpSequenceSuccess: 0,
    bumpSequenceBadSeq: -1
  });

  // === xdr source ============================================================
  //
  //   union BumpSequenceResult switch (BumpSequenceResultCode code)
  //   {
  //   case BUMP_SEQUENCE_SUCCESS:
  //       void;
  //   case BUMP_SEQUENCE_BAD_SEQ:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[313]++;
  xdr.union("BumpSequenceResult", {
    switchOn: xdr.lookup("BumpSequenceResultCode"),
    switchName: "code",
    switches: [["bumpSequenceSuccess", xdr["void"]()], ["bumpSequenceBadSeq", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum CreateClaimableBalanceResultCode
  //   {
  //       CREATE_CLAIMABLE_BALANCE_SUCCESS = 0,
  //       CREATE_CLAIMABLE_BALANCE_MALFORMED = -1,
  //       CREATE_CLAIMABLE_BALANCE_LOW_RESERVE = -2,
  //       CREATE_CLAIMABLE_BALANCE_NO_TRUST = -3,
  //       CREATE_CLAIMABLE_BALANCE_NOT_AUTHORIZED = -4,
  //       CREATE_CLAIMABLE_BALANCE_UNDERFUNDED = -5
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[314]++;
  xdr["enum"]("CreateClaimableBalanceResultCode", {
    createClaimableBalanceSuccess: 0,
    createClaimableBalanceMalformed: -1,
    createClaimableBalanceLowReserve: -2,
    createClaimableBalanceNoTrust: -3,
    createClaimableBalanceNotAuthorized: -4,
    createClaimableBalanceUnderfunded: -5
  });

  // === xdr source ============================================================
  //
  //   union CreateClaimableBalanceResult switch (
  //       CreateClaimableBalanceResultCode code)
  //   {
  //   case CREATE_CLAIMABLE_BALANCE_SUCCESS:
  //       ClaimableBalanceID balanceID;
  //   case CREATE_CLAIMABLE_BALANCE_MALFORMED:
  //   case CREATE_CLAIMABLE_BALANCE_LOW_RESERVE:
  //   case CREATE_CLAIMABLE_BALANCE_NO_TRUST:
  //   case CREATE_CLAIMABLE_BALANCE_NOT_AUTHORIZED:
  //   case CREATE_CLAIMABLE_BALANCE_UNDERFUNDED:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[315]++;
  xdr.union("CreateClaimableBalanceResult", {
    switchOn: xdr.lookup("CreateClaimableBalanceResultCode"),
    switchName: "code",
    switches: [["createClaimableBalanceSuccess", "balanceId"], ["createClaimableBalanceMalformed", xdr["void"]()], ["createClaimableBalanceLowReserve", xdr["void"]()], ["createClaimableBalanceNoTrust", xdr["void"]()], ["createClaimableBalanceNotAuthorized", xdr["void"]()], ["createClaimableBalanceUnderfunded", xdr["void"]()]],
    arms: {
      balanceId: xdr.lookup("ClaimableBalanceId")
    }
  });

  // === xdr source ============================================================
  //
  //   enum ClaimClaimableBalanceResultCode
  //   {
  //       CLAIM_CLAIMABLE_BALANCE_SUCCESS = 0,
  //       CLAIM_CLAIMABLE_BALANCE_DOES_NOT_EXIST = -1,
  //       CLAIM_CLAIMABLE_BALANCE_CANNOT_CLAIM = -2,
  //       CLAIM_CLAIMABLE_BALANCE_LINE_FULL = -3,
  //       CLAIM_CLAIMABLE_BALANCE_NO_TRUST = -4,
  //       CLAIM_CLAIMABLE_BALANCE_NOT_AUTHORIZED = -5
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[316]++;
  xdr["enum"]("ClaimClaimableBalanceResultCode", {
    claimClaimableBalanceSuccess: 0,
    claimClaimableBalanceDoesNotExist: -1,
    claimClaimableBalanceCannotClaim: -2,
    claimClaimableBalanceLineFull: -3,
    claimClaimableBalanceNoTrust: -4,
    claimClaimableBalanceNotAuthorized: -5
  });

  // === xdr source ============================================================
  //
  //   union ClaimClaimableBalanceResult switch (ClaimClaimableBalanceResultCode code)
  //   {
  //   case CLAIM_CLAIMABLE_BALANCE_SUCCESS:
  //       void;
  //   case CLAIM_CLAIMABLE_BALANCE_DOES_NOT_EXIST:
  //   case CLAIM_CLAIMABLE_BALANCE_CANNOT_CLAIM:
  //   case CLAIM_CLAIMABLE_BALANCE_LINE_FULL:
  //   case CLAIM_CLAIMABLE_BALANCE_NO_TRUST:
  //   case CLAIM_CLAIMABLE_BALANCE_NOT_AUTHORIZED:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[317]++;
  xdr.union("ClaimClaimableBalanceResult", {
    switchOn: xdr.lookup("ClaimClaimableBalanceResultCode"),
    switchName: "code",
    switches: [["claimClaimableBalanceSuccess", xdr["void"]()], ["claimClaimableBalanceDoesNotExist", xdr["void"]()], ["claimClaimableBalanceCannotClaim", xdr["void"]()], ["claimClaimableBalanceLineFull", xdr["void"]()], ["claimClaimableBalanceNoTrust", xdr["void"]()], ["claimClaimableBalanceNotAuthorized", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum BeginSponsoringFutureReservesResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       BEGIN_SPONSORING_FUTURE_RESERVES_SUCCESS = 0,
  //   
  //       // codes considered as "failure" for the operation
  //       BEGIN_SPONSORING_FUTURE_RESERVES_MALFORMED = -1,
  //       BEGIN_SPONSORING_FUTURE_RESERVES_ALREADY_SPONSORED = -2,
  //       BEGIN_SPONSORING_FUTURE_RESERVES_RECURSIVE = -3
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[318]++;
  xdr["enum"]("BeginSponsoringFutureReservesResultCode", {
    beginSponsoringFutureReservesSuccess: 0,
    beginSponsoringFutureReservesMalformed: -1,
    beginSponsoringFutureReservesAlreadySponsored: -2,
    beginSponsoringFutureReservesRecursive: -3
  });

  // === xdr source ============================================================
  //
  //   union BeginSponsoringFutureReservesResult switch (
  //       BeginSponsoringFutureReservesResultCode code)
  //   {
  //   case BEGIN_SPONSORING_FUTURE_RESERVES_SUCCESS:
  //       void;
  //   case BEGIN_SPONSORING_FUTURE_RESERVES_MALFORMED:
  //   case BEGIN_SPONSORING_FUTURE_RESERVES_ALREADY_SPONSORED:
  //   case BEGIN_SPONSORING_FUTURE_RESERVES_RECURSIVE:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[319]++;
  xdr.union("BeginSponsoringFutureReservesResult", {
    switchOn: xdr.lookup("BeginSponsoringFutureReservesResultCode"),
    switchName: "code",
    switches: [["beginSponsoringFutureReservesSuccess", xdr["void"]()], ["beginSponsoringFutureReservesMalformed", xdr["void"]()], ["beginSponsoringFutureReservesAlreadySponsored", xdr["void"]()], ["beginSponsoringFutureReservesRecursive", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum EndSponsoringFutureReservesResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       END_SPONSORING_FUTURE_RESERVES_SUCCESS = 0,
  //   
  //       // codes considered as "failure" for the operation
  //       END_SPONSORING_FUTURE_RESERVES_NOT_SPONSORED = -1
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[320]++;
  xdr["enum"]("EndSponsoringFutureReservesResultCode", {
    endSponsoringFutureReservesSuccess: 0,
    endSponsoringFutureReservesNotSponsored: -1
  });

  // === xdr source ============================================================
  //
  //   union EndSponsoringFutureReservesResult switch (
  //       EndSponsoringFutureReservesResultCode code)
  //   {
  //   case END_SPONSORING_FUTURE_RESERVES_SUCCESS:
  //       void;
  //   case END_SPONSORING_FUTURE_RESERVES_NOT_SPONSORED:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[321]++;
  xdr.union("EndSponsoringFutureReservesResult", {
    switchOn: xdr.lookup("EndSponsoringFutureReservesResultCode"),
    switchName: "code",
    switches: [["endSponsoringFutureReservesSuccess", xdr["void"]()], ["endSponsoringFutureReservesNotSponsored", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum RevokeSponsorshipResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       REVOKE_SPONSORSHIP_SUCCESS = 0,
  //   
  //       // codes considered as "failure" for the operation
  //       REVOKE_SPONSORSHIP_DOES_NOT_EXIST = -1,
  //       REVOKE_SPONSORSHIP_NOT_SPONSOR = -2,
  //       REVOKE_SPONSORSHIP_LOW_RESERVE = -3,
  //       REVOKE_SPONSORSHIP_ONLY_TRANSFERABLE = -4,
  //       REVOKE_SPONSORSHIP_MALFORMED = -5
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[322]++;
  xdr["enum"]("RevokeSponsorshipResultCode", {
    revokeSponsorshipSuccess: 0,
    revokeSponsorshipDoesNotExist: -1,
    revokeSponsorshipNotSponsor: -2,
    revokeSponsorshipLowReserve: -3,
    revokeSponsorshipOnlyTransferable: -4,
    revokeSponsorshipMalformed: -5
  });

  // === xdr source ============================================================
  //
  //   union RevokeSponsorshipResult switch (RevokeSponsorshipResultCode code)
  //   {
  //   case REVOKE_SPONSORSHIP_SUCCESS:
  //       void;
  //   case REVOKE_SPONSORSHIP_DOES_NOT_EXIST:
  //   case REVOKE_SPONSORSHIP_NOT_SPONSOR:
  //   case REVOKE_SPONSORSHIP_LOW_RESERVE:
  //   case REVOKE_SPONSORSHIP_ONLY_TRANSFERABLE:
  //   case REVOKE_SPONSORSHIP_MALFORMED:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[323]++;
  xdr.union("RevokeSponsorshipResult", {
    switchOn: xdr.lookup("RevokeSponsorshipResultCode"),
    switchName: "code",
    switches: [["revokeSponsorshipSuccess", xdr["void"]()], ["revokeSponsorshipDoesNotExist", xdr["void"]()], ["revokeSponsorshipNotSponsor", xdr["void"]()], ["revokeSponsorshipLowReserve", xdr["void"]()], ["revokeSponsorshipOnlyTransferable", xdr["void"]()], ["revokeSponsorshipMalformed", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum ClawbackResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       CLAWBACK_SUCCESS = 0,
  //   
  //       // codes considered as "failure" for the operation
  //       CLAWBACK_MALFORMED = -1,
  //       CLAWBACK_NOT_CLAWBACK_ENABLED = -2,
  //       CLAWBACK_NO_TRUST = -3,
  //       CLAWBACK_UNDERFUNDED = -4
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[324]++;
  xdr["enum"]("ClawbackResultCode", {
    clawbackSuccess: 0,
    clawbackMalformed: -1,
    clawbackNotClawbackEnabled: -2,
    clawbackNoTrust: -3,
    clawbackUnderfunded: -4
  });

  // === xdr source ============================================================
  //
  //   union ClawbackResult switch (ClawbackResultCode code)
  //   {
  //   case CLAWBACK_SUCCESS:
  //       void;
  //   case CLAWBACK_MALFORMED:
  //   case CLAWBACK_NOT_CLAWBACK_ENABLED:
  //   case CLAWBACK_NO_TRUST:
  //   case CLAWBACK_UNDERFUNDED:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[325]++;
  xdr.union("ClawbackResult", {
    switchOn: xdr.lookup("ClawbackResultCode"),
    switchName: "code",
    switches: [["clawbackSuccess", xdr["void"]()], ["clawbackMalformed", xdr["void"]()], ["clawbackNotClawbackEnabled", xdr["void"]()], ["clawbackNoTrust", xdr["void"]()], ["clawbackUnderfunded", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum ClawbackClaimableBalanceResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       CLAWBACK_CLAIMABLE_BALANCE_SUCCESS = 0,
  //   
  //       // codes considered as "failure" for the operation
  //       CLAWBACK_CLAIMABLE_BALANCE_DOES_NOT_EXIST = -1,
  //       CLAWBACK_CLAIMABLE_BALANCE_NOT_ISSUER = -2,
  //       CLAWBACK_CLAIMABLE_BALANCE_NOT_CLAWBACK_ENABLED = -3
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[326]++;
  xdr["enum"]("ClawbackClaimableBalanceResultCode", {
    clawbackClaimableBalanceSuccess: 0,
    clawbackClaimableBalanceDoesNotExist: -1,
    clawbackClaimableBalanceNotIssuer: -2,
    clawbackClaimableBalanceNotClawbackEnabled: -3
  });

  // === xdr source ============================================================
  //
  //   union ClawbackClaimableBalanceResult switch (
  //       ClawbackClaimableBalanceResultCode code)
  //   {
  //   case CLAWBACK_CLAIMABLE_BALANCE_SUCCESS:
  //       void;
  //   case CLAWBACK_CLAIMABLE_BALANCE_DOES_NOT_EXIST:
  //   case CLAWBACK_CLAIMABLE_BALANCE_NOT_ISSUER:
  //   case CLAWBACK_CLAIMABLE_BALANCE_NOT_CLAWBACK_ENABLED:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[327]++;
  xdr.union("ClawbackClaimableBalanceResult", {
    switchOn: xdr.lookup("ClawbackClaimableBalanceResultCode"),
    switchName: "code",
    switches: [["clawbackClaimableBalanceSuccess", xdr["void"]()], ["clawbackClaimableBalanceDoesNotExist", xdr["void"]()], ["clawbackClaimableBalanceNotIssuer", xdr["void"]()], ["clawbackClaimableBalanceNotClawbackEnabled", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum SetTrustLineFlagsResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       SET_TRUST_LINE_FLAGS_SUCCESS = 0,
  //   
  //       // codes considered as "failure" for the operation
  //       SET_TRUST_LINE_FLAGS_MALFORMED = -1,
  //       SET_TRUST_LINE_FLAGS_NO_TRUST_LINE = -2,
  //       SET_TRUST_LINE_FLAGS_CANT_REVOKE = -3,
  //       SET_TRUST_LINE_FLAGS_INVALID_STATE = -4,
  //       SET_TRUST_LINE_FLAGS_LOW_RESERVE = -5 // claimable balances can't be created
  //                                             // on revoke due to low reserves
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[328]++;
  xdr["enum"]("SetTrustLineFlagsResultCode", {
    setTrustLineFlagsSuccess: 0,
    setTrustLineFlagsMalformed: -1,
    setTrustLineFlagsNoTrustLine: -2,
    setTrustLineFlagsCantRevoke: -3,
    setTrustLineFlagsInvalidState: -4,
    setTrustLineFlagsLowReserve: -5
  });

  // === xdr source ============================================================
  //
  //   union SetTrustLineFlagsResult switch (SetTrustLineFlagsResultCode code)
  //   {
  //   case SET_TRUST_LINE_FLAGS_SUCCESS:
  //       void;
  //   case SET_TRUST_LINE_FLAGS_MALFORMED:
  //   case SET_TRUST_LINE_FLAGS_NO_TRUST_LINE:
  //   case SET_TRUST_LINE_FLAGS_CANT_REVOKE:
  //   case SET_TRUST_LINE_FLAGS_INVALID_STATE:
  //   case SET_TRUST_LINE_FLAGS_LOW_RESERVE:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[329]++;
  xdr.union("SetTrustLineFlagsResult", {
    switchOn: xdr.lookup("SetTrustLineFlagsResultCode"),
    switchName: "code",
    switches: [["setTrustLineFlagsSuccess", xdr["void"]()], ["setTrustLineFlagsMalformed", xdr["void"]()], ["setTrustLineFlagsNoTrustLine", xdr["void"]()], ["setTrustLineFlagsCantRevoke", xdr["void"]()], ["setTrustLineFlagsInvalidState", xdr["void"]()], ["setTrustLineFlagsLowReserve", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum LiquidityPoolDepositResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       LIQUIDITY_POOL_DEPOSIT_SUCCESS = 0,
  //   
  //       // codes considered as "failure" for the operation
  //       LIQUIDITY_POOL_DEPOSIT_MALFORMED = -1,      // bad input
  //       LIQUIDITY_POOL_DEPOSIT_NO_TRUST = -2,       // no trust line for one of the
  //                                                   // assets
  //       LIQUIDITY_POOL_DEPOSIT_NOT_AUTHORIZED = -3, // not authorized for one of the
  //                                                   // assets
  //       LIQUIDITY_POOL_DEPOSIT_UNDERFUNDED = -4,    // not enough balance for one of
  //                                                   // the assets
  //       LIQUIDITY_POOL_DEPOSIT_LINE_FULL = -5,      // pool share trust line doesn't
  //                                                   // have sufficient limit
  //       LIQUIDITY_POOL_DEPOSIT_BAD_PRICE = -6,      // deposit price outside bounds
  //       LIQUIDITY_POOL_DEPOSIT_POOL_FULL = -7       // pool reserves are full
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[330]++;
  xdr["enum"]("LiquidityPoolDepositResultCode", {
    liquidityPoolDepositSuccess: 0,
    liquidityPoolDepositMalformed: -1,
    liquidityPoolDepositNoTrust: -2,
    liquidityPoolDepositNotAuthorized: -3,
    liquidityPoolDepositUnderfunded: -4,
    liquidityPoolDepositLineFull: -5,
    liquidityPoolDepositBadPrice: -6,
    liquidityPoolDepositPoolFull: -7
  });

  // === xdr source ============================================================
  //
  //   union LiquidityPoolDepositResult switch (LiquidityPoolDepositResultCode code)
  //   {
  //   case LIQUIDITY_POOL_DEPOSIT_SUCCESS:
  //       void;
  //   case LIQUIDITY_POOL_DEPOSIT_MALFORMED:
  //   case LIQUIDITY_POOL_DEPOSIT_NO_TRUST:
  //   case LIQUIDITY_POOL_DEPOSIT_NOT_AUTHORIZED:
  //   case LIQUIDITY_POOL_DEPOSIT_UNDERFUNDED:
  //   case LIQUIDITY_POOL_DEPOSIT_LINE_FULL:
  //   case LIQUIDITY_POOL_DEPOSIT_BAD_PRICE:
  //   case LIQUIDITY_POOL_DEPOSIT_POOL_FULL:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[331]++;
  xdr.union("LiquidityPoolDepositResult", {
    switchOn: xdr.lookup("LiquidityPoolDepositResultCode"),
    switchName: "code",
    switches: [["liquidityPoolDepositSuccess", xdr["void"]()], ["liquidityPoolDepositMalformed", xdr["void"]()], ["liquidityPoolDepositNoTrust", xdr["void"]()], ["liquidityPoolDepositNotAuthorized", xdr["void"]()], ["liquidityPoolDepositUnderfunded", xdr["void"]()], ["liquidityPoolDepositLineFull", xdr["void"]()], ["liquidityPoolDepositBadPrice", xdr["void"]()], ["liquidityPoolDepositPoolFull", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum LiquidityPoolWithdrawResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       LIQUIDITY_POOL_WITHDRAW_SUCCESS = 0,
  //   
  //       // codes considered as "failure" for the operation
  //       LIQUIDITY_POOL_WITHDRAW_MALFORMED = -1,    // bad input
  //       LIQUIDITY_POOL_WITHDRAW_NO_TRUST = -2,     // no trust line for one of the
  //                                                  // assets
  //       LIQUIDITY_POOL_WITHDRAW_UNDERFUNDED = -3,  // not enough balance of the
  //                                                  // pool share
  //       LIQUIDITY_POOL_WITHDRAW_LINE_FULL = -4,    // would go above limit for one
  //                                                  // of the assets
  //       LIQUIDITY_POOL_WITHDRAW_UNDER_MINIMUM = -5 // didn't withdraw enough
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[332]++;
  xdr["enum"]("LiquidityPoolWithdrawResultCode", {
    liquidityPoolWithdrawSuccess: 0,
    liquidityPoolWithdrawMalformed: -1,
    liquidityPoolWithdrawNoTrust: -2,
    liquidityPoolWithdrawUnderfunded: -3,
    liquidityPoolWithdrawLineFull: -4,
    liquidityPoolWithdrawUnderMinimum: -5
  });

  // === xdr source ============================================================
  //
  //   union LiquidityPoolWithdrawResult switch (LiquidityPoolWithdrawResultCode code)
  //   {
  //   case LIQUIDITY_POOL_WITHDRAW_SUCCESS:
  //       void;
  //   case LIQUIDITY_POOL_WITHDRAW_MALFORMED:
  //   case LIQUIDITY_POOL_WITHDRAW_NO_TRUST:
  //   case LIQUIDITY_POOL_WITHDRAW_UNDERFUNDED:
  //   case LIQUIDITY_POOL_WITHDRAW_LINE_FULL:
  //   case LIQUIDITY_POOL_WITHDRAW_UNDER_MINIMUM:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[333]++;
  xdr.union("LiquidityPoolWithdrawResult", {
    switchOn: xdr.lookup("LiquidityPoolWithdrawResultCode"),
    switchName: "code",
    switches: [["liquidityPoolWithdrawSuccess", xdr["void"]()], ["liquidityPoolWithdrawMalformed", xdr["void"]()], ["liquidityPoolWithdrawNoTrust", xdr["void"]()], ["liquidityPoolWithdrawUnderfunded", xdr["void"]()], ["liquidityPoolWithdrawLineFull", xdr["void"]()], ["liquidityPoolWithdrawUnderMinimum", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum InvokeHostFunctionResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       INVOKE_HOST_FUNCTION_SUCCESS = 0,
  //   
  //       // codes considered as "failure" for the operation
  //       INVOKE_HOST_FUNCTION_MALFORMED = -1,
  //       INVOKE_HOST_FUNCTION_TRAPPED = -2,
  //       INVOKE_HOST_FUNCTION_RESOURCE_LIMIT_EXCEEDED = -3,
  //       INVOKE_HOST_FUNCTION_ENTRY_ARCHIVED = -4,
  //       INVOKE_HOST_FUNCTION_INSUFFICIENT_REFUNDABLE_FEE = -5
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[334]++;
  xdr["enum"]("InvokeHostFunctionResultCode", {
    invokeHostFunctionSuccess: 0,
    invokeHostFunctionMalformed: -1,
    invokeHostFunctionTrapped: -2,
    invokeHostFunctionResourceLimitExceeded: -3,
    invokeHostFunctionEntryArchived: -4,
    invokeHostFunctionInsufficientRefundableFee: -5
  });

  // === xdr source ============================================================
  //
  //   union InvokeHostFunctionResult switch (InvokeHostFunctionResultCode code)
  //   {
  //   case INVOKE_HOST_FUNCTION_SUCCESS:
  //       Hash success; // sha256(InvokeHostFunctionSuccessPreImage)
  //   case INVOKE_HOST_FUNCTION_MALFORMED:
  //   case INVOKE_HOST_FUNCTION_TRAPPED:
  //   case INVOKE_HOST_FUNCTION_RESOURCE_LIMIT_EXCEEDED:
  //   case INVOKE_HOST_FUNCTION_ENTRY_ARCHIVED:
  //   case INVOKE_HOST_FUNCTION_INSUFFICIENT_REFUNDABLE_FEE:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[335]++;
  xdr.union("InvokeHostFunctionResult", {
    switchOn: xdr.lookup("InvokeHostFunctionResultCode"),
    switchName: "code",
    switches: [["invokeHostFunctionSuccess", "success"], ["invokeHostFunctionMalformed", xdr["void"]()], ["invokeHostFunctionTrapped", xdr["void"]()], ["invokeHostFunctionResourceLimitExceeded", xdr["void"]()], ["invokeHostFunctionEntryArchived", xdr["void"]()], ["invokeHostFunctionInsufficientRefundableFee", xdr["void"]()]],
    arms: {
      success: xdr.lookup("Hash")
    }
  });

  // === xdr source ============================================================
  //
  //   enum ExtendFootprintTTLResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       EXTEND_FOOTPRINT_TTL_SUCCESS = 0,
  //   
  //       // codes considered as "failure" for the operation
  //       EXTEND_FOOTPRINT_TTL_MALFORMED = -1,
  //       EXTEND_FOOTPRINT_TTL_RESOURCE_LIMIT_EXCEEDED = -2,
  //       EXTEND_FOOTPRINT_TTL_INSUFFICIENT_REFUNDABLE_FEE = -3
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[336]++;
  xdr["enum"]("ExtendFootprintTtlResultCode", {
    extendFootprintTtlSuccess: 0,
    extendFootprintTtlMalformed: -1,
    extendFootprintTtlResourceLimitExceeded: -2,
    extendFootprintTtlInsufficientRefundableFee: -3
  });

  // === xdr source ============================================================
  //
  //   union ExtendFootprintTTLResult switch (ExtendFootprintTTLResultCode code)
  //   {
  //   case EXTEND_FOOTPRINT_TTL_SUCCESS:
  //       void;
  //   case EXTEND_FOOTPRINT_TTL_MALFORMED:
  //   case EXTEND_FOOTPRINT_TTL_RESOURCE_LIMIT_EXCEEDED:
  //   case EXTEND_FOOTPRINT_TTL_INSUFFICIENT_REFUNDABLE_FEE:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[337]++;
  xdr.union("ExtendFootprintTtlResult", {
    switchOn: xdr.lookup("ExtendFootprintTtlResultCode"),
    switchName: "code",
    switches: [["extendFootprintTtlSuccess", xdr["void"]()], ["extendFootprintTtlMalformed", xdr["void"]()], ["extendFootprintTtlResourceLimitExceeded", xdr["void"]()], ["extendFootprintTtlInsufficientRefundableFee", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum RestoreFootprintResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       RESTORE_FOOTPRINT_SUCCESS = 0,
  //   
  //       // codes considered as "failure" for the operation
  //       RESTORE_FOOTPRINT_MALFORMED = -1,
  //       RESTORE_FOOTPRINT_RESOURCE_LIMIT_EXCEEDED = -2,
  //       RESTORE_FOOTPRINT_INSUFFICIENT_REFUNDABLE_FEE = -3
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[338]++;
  xdr["enum"]("RestoreFootprintResultCode", {
    restoreFootprintSuccess: 0,
    restoreFootprintMalformed: -1,
    restoreFootprintResourceLimitExceeded: -2,
    restoreFootprintInsufficientRefundableFee: -3
  });

  // === xdr source ============================================================
  //
  //   union RestoreFootprintResult switch (RestoreFootprintResultCode code)
  //   {
  //   case RESTORE_FOOTPRINT_SUCCESS:
  //       void;
  //   case RESTORE_FOOTPRINT_MALFORMED:
  //   case RESTORE_FOOTPRINT_RESOURCE_LIMIT_EXCEEDED:
  //   case RESTORE_FOOTPRINT_INSUFFICIENT_REFUNDABLE_FEE:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[339]++;
  xdr.union("RestoreFootprintResult", {
    switchOn: xdr.lookup("RestoreFootprintResultCode"),
    switchName: "code",
    switches: [["restoreFootprintSuccess", xdr["void"]()], ["restoreFootprintMalformed", xdr["void"]()], ["restoreFootprintResourceLimitExceeded", xdr["void"]()], ["restoreFootprintInsufficientRefundableFee", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum OperationResultCode
  //   {
  //       opINNER = 0, // inner object result is valid
  //   
  //       opBAD_AUTH = -1,            // too few valid signatures / wrong network
  //       opNO_ACCOUNT = -2,          // source account was not found
  //       opNOT_SUPPORTED = -3,       // operation not supported at this time
  //       opTOO_MANY_SUBENTRIES = -4, // max number of subentries already reached
  //       opEXCEEDED_WORK_LIMIT = -5, // operation did too much work
  //       opTOO_MANY_SPONSORING = -6  // account is sponsoring too many entries
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[340]++;
  xdr["enum"]("OperationResultCode", {
    opInner: 0,
    opBadAuth: -1,
    opNoAccount: -2,
    opNotSupported: -3,
    opTooManySubentries: -4,
    opExceededWorkLimit: -5,
    opTooManySponsoring: -6
  });

  // === xdr source ============================================================
  //
  //   union switch (OperationType type)
  //       {
  //       case CREATE_ACCOUNT:
  //           CreateAccountResult createAccountResult;
  //       case PAYMENT:
  //           PaymentResult paymentResult;
  //       case PATH_PAYMENT_STRICT_RECEIVE:
  //           PathPaymentStrictReceiveResult pathPaymentStrictReceiveResult;
  //       case MANAGE_SELL_OFFER:
  //           ManageSellOfferResult manageSellOfferResult;
  //       case CREATE_PASSIVE_SELL_OFFER:
  //           ManageSellOfferResult createPassiveSellOfferResult;
  //       case SET_OPTIONS:
  //           SetOptionsResult setOptionsResult;
  //       case CHANGE_TRUST:
  //           ChangeTrustResult changeTrustResult;
  //       case ALLOW_TRUST:
  //           AllowTrustResult allowTrustResult;
  //       case ACCOUNT_MERGE:
  //           AccountMergeResult accountMergeResult;
  //       case INFLATION:
  //           InflationResult inflationResult;
  //       case MANAGE_DATA:
  //           ManageDataResult manageDataResult;
  //       case BUMP_SEQUENCE:
  //           BumpSequenceResult bumpSeqResult;
  //       case MANAGE_BUY_OFFER:
  //           ManageBuyOfferResult manageBuyOfferResult;
  //       case PATH_PAYMENT_STRICT_SEND:
  //           PathPaymentStrictSendResult pathPaymentStrictSendResult;
  //       case CREATE_CLAIMABLE_BALANCE:
  //           CreateClaimableBalanceResult createClaimableBalanceResult;
  //       case CLAIM_CLAIMABLE_BALANCE:
  //           ClaimClaimableBalanceResult claimClaimableBalanceResult;
  //       case BEGIN_SPONSORING_FUTURE_RESERVES:
  //           BeginSponsoringFutureReservesResult beginSponsoringFutureReservesResult;
  //       case END_SPONSORING_FUTURE_RESERVES:
  //           EndSponsoringFutureReservesResult endSponsoringFutureReservesResult;
  //       case REVOKE_SPONSORSHIP:
  //           RevokeSponsorshipResult revokeSponsorshipResult;
  //       case CLAWBACK:
  //           ClawbackResult clawbackResult;
  //       case CLAWBACK_CLAIMABLE_BALANCE:
  //           ClawbackClaimableBalanceResult clawbackClaimableBalanceResult;
  //       case SET_TRUST_LINE_FLAGS:
  //           SetTrustLineFlagsResult setTrustLineFlagsResult;
  //       case LIQUIDITY_POOL_DEPOSIT:
  //           LiquidityPoolDepositResult liquidityPoolDepositResult;
  //       case LIQUIDITY_POOL_WITHDRAW:
  //           LiquidityPoolWithdrawResult liquidityPoolWithdrawResult;
  //       case INVOKE_HOST_FUNCTION:
  //           InvokeHostFunctionResult invokeHostFunctionResult;
  //       case EXTEND_FOOTPRINT_TTL:
  //           ExtendFootprintTTLResult extendFootprintTTLResult;
  //       case RESTORE_FOOTPRINT:
  //           RestoreFootprintResult restoreFootprintResult;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[341]++;
  xdr.union("OperationResultTr", {
    switchOn: xdr.lookup("OperationType"),
    switchName: "type",
    switches: [["createAccount", "createAccountResult"], ["payment", "paymentResult"], ["pathPaymentStrictReceive", "pathPaymentStrictReceiveResult"], ["manageSellOffer", "manageSellOfferResult"], ["createPassiveSellOffer", "createPassiveSellOfferResult"], ["setOptions", "setOptionsResult"], ["changeTrust", "changeTrustResult"], ["allowTrust", "allowTrustResult"], ["accountMerge", "accountMergeResult"], ["inflation", "inflationResult"], ["manageData", "manageDataResult"], ["bumpSequence", "bumpSeqResult"], ["manageBuyOffer", "manageBuyOfferResult"], ["pathPaymentStrictSend", "pathPaymentStrictSendResult"], ["createClaimableBalance", "createClaimableBalanceResult"], ["claimClaimableBalance", "claimClaimableBalanceResult"], ["beginSponsoringFutureReserves", "beginSponsoringFutureReservesResult"], ["endSponsoringFutureReserves", "endSponsoringFutureReservesResult"], ["revokeSponsorship", "revokeSponsorshipResult"], ["clawback", "clawbackResult"], ["clawbackClaimableBalance", "clawbackClaimableBalanceResult"], ["setTrustLineFlags", "setTrustLineFlagsResult"], ["liquidityPoolDeposit", "liquidityPoolDepositResult"], ["liquidityPoolWithdraw", "liquidityPoolWithdrawResult"], ["invokeHostFunction", "invokeHostFunctionResult"], ["extendFootprintTtl", "extendFootprintTtlResult"], ["restoreFootprint", "restoreFootprintResult"]],
    arms: {
      createAccountResult: xdr.lookup("CreateAccountResult"),
      paymentResult: xdr.lookup("PaymentResult"),
      pathPaymentStrictReceiveResult: xdr.lookup("PathPaymentStrictReceiveResult"),
      manageSellOfferResult: xdr.lookup("ManageSellOfferResult"),
      createPassiveSellOfferResult: xdr.lookup("ManageSellOfferResult"),
      setOptionsResult: xdr.lookup("SetOptionsResult"),
      changeTrustResult: xdr.lookup("ChangeTrustResult"),
      allowTrustResult: xdr.lookup("AllowTrustResult"),
      accountMergeResult: xdr.lookup("AccountMergeResult"),
      inflationResult: xdr.lookup("InflationResult"),
      manageDataResult: xdr.lookup("ManageDataResult"),
      bumpSeqResult: xdr.lookup("BumpSequenceResult"),
      manageBuyOfferResult: xdr.lookup("ManageBuyOfferResult"),
      pathPaymentStrictSendResult: xdr.lookup("PathPaymentStrictSendResult"),
      createClaimableBalanceResult: xdr.lookup("CreateClaimableBalanceResult"),
      claimClaimableBalanceResult: xdr.lookup("ClaimClaimableBalanceResult"),
      beginSponsoringFutureReservesResult: xdr.lookup("BeginSponsoringFutureReservesResult"),
      endSponsoringFutureReservesResult: xdr.lookup("EndSponsoringFutureReservesResult"),
      revokeSponsorshipResult: xdr.lookup("RevokeSponsorshipResult"),
      clawbackResult: xdr.lookup("ClawbackResult"),
      clawbackClaimableBalanceResult: xdr.lookup("ClawbackClaimableBalanceResult"),
      setTrustLineFlagsResult: xdr.lookup("SetTrustLineFlagsResult"),
      liquidityPoolDepositResult: xdr.lookup("LiquidityPoolDepositResult"),
      liquidityPoolWithdrawResult: xdr.lookup("LiquidityPoolWithdrawResult"),
      invokeHostFunctionResult: xdr.lookup("InvokeHostFunctionResult"),
      extendFootprintTtlResult: xdr.lookup("ExtendFootprintTtlResult"),
      restoreFootprintResult: xdr.lookup("RestoreFootprintResult")
    }
  });

  // === xdr source ============================================================
  //
  //   union OperationResult switch (OperationResultCode code)
  //   {
  //   case opINNER:
  //       union switch (OperationType type)
  //       {
  //       case CREATE_ACCOUNT:
  //           CreateAccountResult createAccountResult;
  //       case PAYMENT:
  //           PaymentResult paymentResult;
  //       case PATH_PAYMENT_STRICT_RECEIVE:
  //           PathPaymentStrictReceiveResult pathPaymentStrictReceiveResult;
  //       case MANAGE_SELL_OFFER:
  //           ManageSellOfferResult manageSellOfferResult;
  //       case CREATE_PASSIVE_SELL_OFFER:
  //           ManageSellOfferResult createPassiveSellOfferResult;
  //       case SET_OPTIONS:
  //           SetOptionsResult setOptionsResult;
  //       case CHANGE_TRUST:
  //           ChangeTrustResult changeTrustResult;
  //       case ALLOW_TRUST:
  //           AllowTrustResult allowTrustResult;
  //       case ACCOUNT_MERGE:
  //           AccountMergeResult accountMergeResult;
  //       case INFLATION:
  //           InflationResult inflationResult;
  //       case MANAGE_DATA:
  //           ManageDataResult manageDataResult;
  //       case BUMP_SEQUENCE:
  //           BumpSequenceResult bumpSeqResult;
  //       case MANAGE_BUY_OFFER:
  //           ManageBuyOfferResult manageBuyOfferResult;
  //       case PATH_PAYMENT_STRICT_SEND:
  //           PathPaymentStrictSendResult pathPaymentStrictSendResult;
  //       case CREATE_CLAIMABLE_BALANCE:
  //           CreateClaimableBalanceResult createClaimableBalanceResult;
  //       case CLAIM_CLAIMABLE_BALANCE:
  //           ClaimClaimableBalanceResult claimClaimableBalanceResult;
  //       case BEGIN_SPONSORING_FUTURE_RESERVES:
  //           BeginSponsoringFutureReservesResult beginSponsoringFutureReservesResult;
  //       case END_SPONSORING_FUTURE_RESERVES:
  //           EndSponsoringFutureReservesResult endSponsoringFutureReservesResult;
  //       case REVOKE_SPONSORSHIP:
  //           RevokeSponsorshipResult revokeSponsorshipResult;
  //       case CLAWBACK:
  //           ClawbackResult clawbackResult;
  //       case CLAWBACK_CLAIMABLE_BALANCE:
  //           ClawbackClaimableBalanceResult clawbackClaimableBalanceResult;
  //       case SET_TRUST_LINE_FLAGS:
  //           SetTrustLineFlagsResult setTrustLineFlagsResult;
  //       case LIQUIDITY_POOL_DEPOSIT:
  //           LiquidityPoolDepositResult liquidityPoolDepositResult;
  //       case LIQUIDITY_POOL_WITHDRAW:
  //           LiquidityPoolWithdrawResult liquidityPoolWithdrawResult;
  //       case INVOKE_HOST_FUNCTION:
  //           InvokeHostFunctionResult invokeHostFunctionResult;
  //       case EXTEND_FOOTPRINT_TTL:
  //           ExtendFootprintTTLResult extendFootprintTTLResult;
  //       case RESTORE_FOOTPRINT:
  //           RestoreFootprintResult restoreFootprintResult;
  //       }
  //       tr;
  //   case opBAD_AUTH:
  //   case opNO_ACCOUNT:
  //   case opNOT_SUPPORTED:
  //   case opTOO_MANY_SUBENTRIES:
  //   case opEXCEEDED_WORK_LIMIT:
  //   case opTOO_MANY_SPONSORING:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[342]++;
  xdr.union("OperationResult", {
    switchOn: xdr.lookup("OperationResultCode"),
    switchName: "code",
    switches: [["opInner", "tr"], ["opBadAuth", xdr["void"]()], ["opNoAccount", xdr["void"]()], ["opNotSupported", xdr["void"]()], ["opTooManySubentries", xdr["void"]()], ["opExceededWorkLimit", xdr["void"]()], ["opTooManySponsoring", xdr["void"]()]],
    arms: {
      tr: xdr.lookup("OperationResultTr")
    }
  });

  // === xdr source ============================================================
  //
  //   enum TransactionResultCode
  //   {
  //       txFEE_BUMP_INNER_SUCCESS = 1, // fee bump inner transaction succeeded
  //       txSUCCESS = 0,                // all operations succeeded
  //   
  //       txFAILED = -1, // one of the operations failed (none were applied)
  //   
  //       txTOO_EARLY = -2,         // ledger closeTime before minTime
  //       txTOO_LATE = -3,          // ledger closeTime after maxTime
  //       txMISSING_OPERATION = -4, // no operation was specified
  //       txBAD_SEQ = -5,           // sequence number does not match source account
  //   
  //       txBAD_AUTH = -6,             // too few valid signatures / wrong network
  //       txINSUFFICIENT_BALANCE = -7, // fee would bring account below reserve
  //       txNO_ACCOUNT = -8,           // source account not found
  //       txINSUFFICIENT_FEE = -9,     // fee is too small
  //       txBAD_AUTH_EXTRA = -10,      // unused signatures attached to transaction
  //       txINTERNAL_ERROR = -11,      // an unknown error occurred
  //   
  //       txNOT_SUPPORTED = -12,          // transaction type not supported
  //       txFEE_BUMP_INNER_FAILED = -13,  // fee bump inner transaction failed
  //       txBAD_SPONSORSHIP = -14,        // sponsorship not confirmed
  //       txBAD_MIN_SEQ_AGE_OR_GAP = -15, // minSeqAge or minSeqLedgerGap conditions not met
  //       txMALFORMED = -16,              // precondition is invalid
  //       txSOROBAN_INVALID = -17         // soroban-specific preconditions were not met
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[343]++;
  xdr["enum"]("TransactionResultCode", {
    txFeeBumpInnerSuccess: 1,
    txSuccess: 0,
    txFailed: -1,
    txTooEarly: -2,
    txTooLate: -3,
    txMissingOperation: -4,
    txBadSeq: -5,
    txBadAuth: -6,
    txInsufficientBalance: -7,
    txNoAccount: -8,
    txInsufficientFee: -9,
    txBadAuthExtra: -10,
    txInternalError: -11,
    txNotSupported: -12,
    txFeeBumpInnerFailed: -13,
    txBadSponsorship: -14,
    txBadMinSeqAgeOrGap: -15,
    txMalformed: -16,
    txSorobanInvalid: -17
  });

  // === xdr source ============================================================
  //
  //   union switch (TransactionResultCode code)
  //       {
  //       // txFEE_BUMP_INNER_SUCCESS is not included
  //       case txSUCCESS:
  //       case txFAILED:
  //           OperationResult results<>;
  //       case txTOO_EARLY:
  //       case txTOO_LATE:
  //       case txMISSING_OPERATION:
  //       case txBAD_SEQ:
  //       case txBAD_AUTH:
  //       case txINSUFFICIENT_BALANCE:
  //       case txNO_ACCOUNT:
  //       case txINSUFFICIENT_FEE:
  //       case txBAD_AUTH_EXTRA:
  //       case txINTERNAL_ERROR:
  //       case txNOT_SUPPORTED:
  //       // txFEE_BUMP_INNER_FAILED is not included
  //       case txBAD_SPONSORSHIP:
  //       case txBAD_MIN_SEQ_AGE_OR_GAP:
  //       case txMALFORMED:
  //       case txSOROBAN_INVALID:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[344]++;
  xdr.union("InnerTransactionResultResult", {
    switchOn: xdr.lookup("TransactionResultCode"),
    switchName: "code",
    switches: [["txSuccess", "results"], ["txFailed", "results"], ["txTooEarly", xdr["void"]()], ["txTooLate", xdr["void"]()], ["txMissingOperation", xdr["void"]()], ["txBadSeq", xdr["void"]()], ["txBadAuth", xdr["void"]()], ["txInsufficientBalance", xdr["void"]()], ["txNoAccount", xdr["void"]()], ["txInsufficientFee", xdr["void"]()], ["txBadAuthExtra", xdr["void"]()], ["txInternalError", xdr["void"]()], ["txNotSupported", xdr["void"]()], ["txBadSponsorship", xdr["void"]()], ["txBadMinSeqAgeOrGap", xdr["void"]()], ["txMalformed", xdr["void"]()], ["txSorobanInvalid", xdr["void"]()]],
    arms: {
      results: xdr.varArray(xdr.lookup("OperationResult"), 2147483647)
    }
  });

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[345]++;
  xdr.union("InnerTransactionResultExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct InnerTransactionResult
  //   {
  //       // Always 0. Here for binary compatibility.
  //       int64 feeCharged;
  //   
  //       union switch (TransactionResultCode code)
  //       {
  //       // txFEE_BUMP_INNER_SUCCESS is not included
  //       case txSUCCESS:
  //       case txFAILED:
  //           OperationResult results<>;
  //       case txTOO_EARLY:
  //       case txTOO_LATE:
  //       case txMISSING_OPERATION:
  //       case txBAD_SEQ:
  //       case txBAD_AUTH:
  //       case txINSUFFICIENT_BALANCE:
  //       case txNO_ACCOUNT:
  //       case txINSUFFICIENT_FEE:
  //       case txBAD_AUTH_EXTRA:
  //       case txINTERNAL_ERROR:
  //       case txNOT_SUPPORTED:
  //       // txFEE_BUMP_INNER_FAILED is not included
  //       case txBAD_SPONSORSHIP:
  //       case txBAD_MIN_SEQ_AGE_OR_GAP:
  //       case txMALFORMED:
  //       case txSOROBAN_INVALID:
  //           void;
  //       }
  //       result;
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[346]++;
  xdr.struct("InnerTransactionResult", [["feeCharged", xdr.lookup("Int64")], ["result", xdr.lookup("InnerTransactionResultResult")], ["ext", xdr.lookup("InnerTransactionResultExt")]]);

  // === xdr source ============================================================
  //
  //   struct InnerTransactionResultPair
  //   {
  //       Hash transactionHash;          // hash of the inner transaction
  //       InnerTransactionResult result; // result for the inner transaction
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[347]++;
  xdr.struct("InnerTransactionResultPair", [["transactionHash", xdr.lookup("Hash")], ["result", xdr.lookup("InnerTransactionResult")]]);

  // === xdr source ============================================================
  //
  //   union switch (TransactionResultCode code)
  //       {
  //       case txFEE_BUMP_INNER_SUCCESS:
  //       case txFEE_BUMP_INNER_FAILED:
  //           InnerTransactionResultPair innerResultPair;
  //       case txSUCCESS:
  //       case txFAILED:
  //           OperationResult results<>;
  //       case txTOO_EARLY:
  //       case txTOO_LATE:
  //       case txMISSING_OPERATION:
  //       case txBAD_SEQ:
  //       case txBAD_AUTH:
  //       case txINSUFFICIENT_BALANCE:
  //       case txNO_ACCOUNT:
  //       case txINSUFFICIENT_FEE:
  //       case txBAD_AUTH_EXTRA:
  //       case txINTERNAL_ERROR:
  //       case txNOT_SUPPORTED:
  //       // case txFEE_BUMP_INNER_FAILED: handled above
  //       case txBAD_SPONSORSHIP:
  //       case txBAD_MIN_SEQ_AGE_OR_GAP:
  //       case txMALFORMED:
  //       case txSOROBAN_INVALID:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[348]++;
  xdr.union("TransactionResultResult", {
    switchOn: xdr.lookup("TransactionResultCode"),
    switchName: "code",
    switches: [["txFeeBumpInnerSuccess", "innerResultPair"], ["txFeeBumpInnerFailed", "innerResultPair"], ["txSuccess", "results"], ["txFailed", "results"], ["txTooEarly", xdr["void"]()], ["txTooLate", xdr["void"]()], ["txMissingOperation", xdr["void"]()], ["txBadSeq", xdr["void"]()], ["txBadAuth", xdr["void"]()], ["txInsufficientBalance", xdr["void"]()], ["txNoAccount", xdr["void"]()], ["txInsufficientFee", xdr["void"]()], ["txBadAuthExtra", xdr["void"]()], ["txInternalError", xdr["void"]()], ["txNotSupported", xdr["void"]()], ["txBadSponsorship", xdr["void"]()], ["txBadMinSeqAgeOrGap", xdr["void"]()], ["txMalformed", xdr["void"]()], ["txSorobanInvalid", xdr["void"]()]],
    arms: {
      innerResultPair: xdr.lookup("InnerTransactionResultPair"),
      results: xdr.varArray(xdr.lookup("OperationResult"), 2147483647)
    }
  });

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[349]++;
  xdr.union("TransactionResultExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct TransactionResult
  //   {
  //       int64 feeCharged; // actual fee charged for the transaction
  //   
  //       union switch (TransactionResultCode code)
  //       {
  //       case txFEE_BUMP_INNER_SUCCESS:
  //       case txFEE_BUMP_INNER_FAILED:
  //           InnerTransactionResultPair innerResultPair;
  //       case txSUCCESS:
  //       case txFAILED:
  //           OperationResult results<>;
  //       case txTOO_EARLY:
  //       case txTOO_LATE:
  //       case txMISSING_OPERATION:
  //       case txBAD_SEQ:
  //       case txBAD_AUTH:
  //       case txINSUFFICIENT_BALANCE:
  //       case txNO_ACCOUNT:
  //       case txINSUFFICIENT_FEE:
  //       case txBAD_AUTH_EXTRA:
  //       case txINTERNAL_ERROR:
  //       case txNOT_SUPPORTED:
  //       // case txFEE_BUMP_INNER_FAILED: handled above
  //       case txBAD_SPONSORSHIP:
  //       case txBAD_MIN_SEQ_AGE_OR_GAP:
  //       case txMALFORMED:
  //       case txSOROBAN_INVALID:
  //           void;
  //       }
  //       result;
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[350]++;
  xdr.struct("TransactionResult", [["feeCharged", xdr.lookup("Int64")], ["result", xdr.lookup("TransactionResultResult")], ["ext", xdr.lookup("TransactionResultExt")]]);

  // === xdr source ============================================================
  //
  //   typedef opaque Hash[32];
  //
  // ===========================================================================
  cov_bo6mr71vg().s[351]++;
  xdr.typedef("Hash", xdr.opaque(32));

  // === xdr source ============================================================
  //
  //   typedef opaque uint256[32];
  //
  // ===========================================================================
  cov_bo6mr71vg().s[352]++;
  xdr.typedef("Uint256", xdr.opaque(32));

  // === xdr source ============================================================
  //
  //   typedef unsigned int uint32;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[353]++;
  xdr.typedef("Uint32", xdr.uint());

  // === xdr source ============================================================
  //
  //   typedef int int32;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[354]++;
  xdr.typedef("Int32", xdr["int"]());

  // === xdr source ============================================================
  //
  //   typedef unsigned hyper uint64;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[355]++;
  xdr.typedef("Uint64", xdr.uhyper());

  // === xdr source ============================================================
  //
  //   typedef hyper int64;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[356]++;
  xdr.typedef("Int64", xdr.hyper());

  // === xdr source ============================================================
  //
  //   typedef uint64 TimePoint;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[357]++;
  xdr.typedef("TimePoint", xdr.lookup("Uint64"));

  // === xdr source ============================================================
  //
  //   typedef uint64 Duration;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[358]++;
  xdr.typedef("Duration", xdr.lookup("Uint64"));

  // === xdr source ============================================================
  //
  //   union ExtensionPoint switch (int v)
  //   {
  //   case 0:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[359]++;
  xdr.union("ExtensionPoint", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum CryptoKeyType
  //   {
  //       KEY_TYPE_DILITHIUM2 = 0,
  //       KEY_TYPE_PRE_AUTH_TX = 1,
  //       KEY_TYPE_HASH_X = 2,
  //       KEY_TYPE_DILITHIUM2_SIGNED_PAYLOAD = 3,
  //       // MUXED enum values for supported type are derived from the enum values
  //       // above by ORing them with 0x100
  //       KEY_TYPE_MUXED_DILITHIUM2 = 0x100
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[360]++;
  xdr["enum"]("CryptoKeyType", {
    keyTypeDilithium2: 0,
    keyTypePreAuthTx: 1,
    keyTypeHashX: 2,
    keyTypeDilithium2SignedPayload: 3,
    keyTypeMuxedDilithium2: 256
  });

  // === xdr source ============================================================
  //
  //   enum PublicKeyType
  //   {
  //       PUBLIC_KEY_TYPE_DILITHIUM2 = KEY_TYPE_DILITHIUM2
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[361]++;
  xdr["enum"]("PublicKeyType", {
    publicKeyTypeDilithium2: 0
  });

  // === xdr source ============================================================
  //
  //   enum SignerKeyType
  //   {
  //       SIGNER_KEY_TYPE_DILITHIUM2 = KEY_TYPE_DILITHIUM2,
  //       SIGNER_KEY_TYPE_PRE_AUTH_TX = KEY_TYPE_PRE_AUTH_TX,
  //       SIGNER_KEY_TYPE_HASH_X = KEY_TYPE_HASH_X,
  //       SIGNER_KEY_TYPE_DILITHIUM2_SIGNED_PAYLOAD = KEY_TYPE_DILITHIUM2_SIGNED_PAYLOAD
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[362]++;
  xdr["enum"]("SignerKeyType", {
    signerKeyTypeDilithium2: 0,
    signerKeyTypePreAuthTx: 1,
    signerKeyTypeHashX: 2,
    signerKeyTypeDilithium2SignedPayload: 3
  });

  // === xdr source ============================================================
  //
  //   union PublicKey switch (PublicKeyType type)
  //   {
  //   case PUBLIC_KEY_TYPE_DILITHIUM2:
  //       opaque dilithium2[1312];
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[363]++;
  xdr.union("PublicKey", {
    switchOn: xdr.lookup("PublicKeyType"),
    switchName: "type",
    switches: [["publicKeyTypeDilithium2", "dilithium2"]],
    arms: {
      dilithium2: xdr.opaque(1312)
    }
  });

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           /* Public key that must sign the payload. */
  //           opaque dilithium2[1312];
  //           /* Payload to be raw signed by dilithium2. */
  //           opaque payload<64>;
  //       }
  //
  // ===========================================================================
  cov_bo6mr71vg().s[364]++;
  xdr.struct("SignerKeyDilithium2SignedPayload", [["dilithium2", xdr.opaque(1312)], ["payload", xdr.varOpaque(64)]]);

  // === xdr source ============================================================
  //
  //   union SignerKey switch (SignerKeyType type)
  //   {
  //   case SIGNER_KEY_TYPE_DILITHIUM2:
  //       opaque dilithium2[1312];
  //   case SIGNER_KEY_TYPE_PRE_AUTH_TX:
  //       /* SHA-256 Hash of TransactionSignaturePayload structure */
  //       uint256 preAuthTx;
  //   case SIGNER_KEY_TYPE_HASH_X:
  //       /* Hash of random 256 bit preimage X */
  //       uint256 hashX;
  //   case SIGNER_KEY_TYPE_DILITHIUM2_SIGNED_PAYLOAD:
  //       struct
  //       {
  //           /* Public key that must sign the payload. */
  //           opaque dilithium2[1312];
  //           /* Payload to be raw signed by dilithium2. */
  //           opaque payload<64>;
  //       } dilithium2SignedPayload;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[365]++;
  xdr.union("SignerKey", {
    switchOn: xdr.lookup("SignerKeyType"),
    switchName: "type",
    switches: [["signerKeyTypeDilithium2", "dilithium2"], ["signerKeyTypePreAuthTx", "preAuthTx"], ["signerKeyTypeHashX", "hashX"], ["signerKeyTypeDilithium2SignedPayload", "dilithium2SignedPayload"]],
    arms: {
      dilithium2: xdr.opaque(1312),
      preAuthTx: xdr.lookup("Uint256"),
      hashX: xdr.lookup("Uint256"),
      dilithium2SignedPayload: xdr.lookup("SignerKeyDilithium2SignedPayload")
    }
  });

  // === xdr source ============================================================
  //
  //   typedef opaque Signature<64>;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[366]++;
  xdr.typedef("Signature", xdr.varOpaque(64));

  // === xdr source ============================================================
  //
  //   typedef opaque SignatureHint[4];
  //
  // ===========================================================================
  cov_bo6mr71vg().s[367]++;
  xdr.typedef("SignatureHint", xdr.opaque(4));

  // === xdr source ============================================================
  //
  //   typedef PublicKey NodeID;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[368]++;
  xdr.typedef("NodeId", xdr.lookup("PublicKey"));

  // === xdr source ============================================================
  //
  //   typedef PublicKey AccountID;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[369]++;
  xdr.typedef("AccountId", xdr.lookup("PublicKey"));

  // === xdr source ============================================================
  //
  //   struct Dilithium2Secret
  //   {
  //       opaque key[32];
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[370]++;
  xdr.struct("Dilithium2Secret", [["key", xdr.opaque(32)]]);

  // === xdr source ============================================================
  //
  //   struct Dilithium2Public
  //   {
  //       opaque key[1312];
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[371]++;
  xdr.struct("Dilithium2Public", [["key", xdr.opaque(1312)]]);

  // === xdr source ============================================================
  //
  //   struct HmacSha256Key
  //   {
  //       opaque key[32];
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[372]++;
  xdr.struct("HmacSha256Key", [["key", xdr.opaque(32)]]);

  // === xdr source ============================================================
  //
  //   struct HmacSha256Mac
  //   {
  //       opaque mac[32];
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[373]++;
  xdr.struct("HmacSha256Mac", [["mac", xdr.opaque(32)]]);

  // === xdr source ============================================================
  //
  //   enum SCValType
  //   {
  //       SCV_BOOL = 0,
  //       SCV_VOID = 1,
  //       SCV_ERROR = 2,
  //   
  //       // 32 bits is the smallest type in WASM or XDR; no need for u8/u16.
  //       SCV_U32 = 3,
  //       SCV_I32 = 4,
  //   
  //       // 64 bits is naturally supported by both WASM and XDR also.
  //       SCV_U64 = 5,
  //       SCV_I64 = 6,
  //   
  //       // Time-related u64 subtypes with their own functions and formatting.
  //       SCV_TIMEPOINT = 7,
  //       SCV_DURATION = 8,
  //   
  //       // 128 bits is naturally supported by Rust and we use it for Soroban
  //       // fixed-point arithmetic prices / balances / similar "quantities". These
  //       // are represented in XDR as a pair of 2 u64s.
  //       SCV_U128 = 9,
  //       SCV_I128 = 10,
  //   
  //       // 256 bits is the size of sha256 output and the EVM machine
  //       // word, so for interop use we include this even though it requires a small
  //       // amount of Rust guest and/or host library code.
  //       SCV_U256 = 11,
  //       SCV_I256 = 12,
  //   
  //       // Bytes come in 3 flavors, 2 of which have meaningfully different
  //       // formatting and validity-checking / domain-restriction.
  //       SCV_BYTES = 13,
  //       SCV_STRING = 14,
  //       SCV_SYMBOL = 15,
  //   
  //       // Vecs and maps are just polymorphic containers of other ScVals.
  //       SCV_VEC = 16,
  //       SCV_MAP = 17,
  //   
  //       // Address is the universal identifier for contracts and classic
  //       // accounts.
  //       SCV_ADDRESS = 18,
  //   
  //       // The following are the internal SCVal variants that are not
  //       // exposed to the contracts. 
  //       SCV_CONTRACT_INSTANCE = 19,
  //   
  //       // SCV_LEDGER_KEY_CONTRACT_INSTANCE and SCV_LEDGER_KEY_NONCE are unique
  //       // symbolic SCVals used as the key for ledger entries for a contract's
  //       // instance and an address' nonce, respectively.
  //       SCV_LEDGER_KEY_CONTRACT_INSTANCE = 20,
  //       SCV_LEDGER_KEY_NONCE = 21
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[374]++;
  xdr["enum"]("ScValType", {
    scvBool: 0,
    scvVoid: 1,
    scvError: 2,
    scvU32: 3,
    scvI32: 4,
    scvU64: 5,
    scvI64: 6,
    scvTimepoint: 7,
    scvDuration: 8,
    scvU128: 9,
    scvI128: 10,
    scvU256: 11,
    scvI256: 12,
    scvBytes: 13,
    scvString: 14,
    scvSymbol: 15,
    scvVec: 16,
    scvMap: 17,
    scvAddress: 18,
    scvContractInstance: 19,
    scvLedgerKeyContractInstance: 20,
    scvLedgerKeyNonce: 21
  });

  // === xdr source ============================================================
  //
  //   enum SCErrorType
  //   {
  //       SCE_CONTRACT = 0,          // Contract-specific, user-defined codes.
  //       SCE_WASM_VM = 1,           // Errors while interpreting WASM bytecode.
  //       SCE_CONTEXT = 2,           // Errors in the contract's host context.
  //       SCE_STORAGE = 3,           // Errors accessing host storage.
  //       SCE_OBJECT = 4,            // Errors working with host objects.
  //       SCE_CRYPTO = 5,            // Errors in cryptographic operations.
  //       SCE_EVENTS = 6,            // Errors while emitting events.
  //       SCE_BUDGET = 7,            // Errors relating to budget limits.
  //       SCE_VALUE = 8,             // Errors working with host values or SCVals.
  //       SCE_AUTH = 9               // Errors from the authentication subsystem.
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[375]++;
  xdr["enum"]("ScErrorType", {
    sceContract: 0,
    sceWasmVm: 1,
    sceContext: 2,
    sceStorage: 3,
    sceObject: 4,
    sceCrypto: 5,
    sceEvents: 6,
    sceBudget: 7,
    sceValue: 8,
    sceAuth: 9
  });

  // === xdr source ============================================================
  //
  //   enum SCErrorCode
  //   {
  //       SCEC_ARITH_DOMAIN = 0,      // Some arithmetic was undefined (overflow, divide-by-zero).
  //       SCEC_INDEX_BOUNDS = 1,      // Something was indexed beyond its bounds.
  //       SCEC_INVALID_INPUT = 2,     // User provided some otherwise-bad data.
  //       SCEC_MISSING_VALUE = 3,     // Some value was required but not provided.
  //       SCEC_EXISTING_VALUE = 4,    // Some value was provided where not allowed.
  //       SCEC_EXCEEDED_LIMIT = 5,    // Some arbitrary limit -- gas or otherwise -- was hit.
  //       SCEC_INVALID_ACTION = 6,    // Data was valid but action requested was not.
  //       SCEC_INTERNAL_ERROR = 7,    // The host detected an error in its own logic.
  //       SCEC_UNEXPECTED_TYPE = 8,   // Some type wasn't as expected.
  //       SCEC_UNEXPECTED_SIZE = 9    // Something's size wasn't as expected.
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[376]++;
  xdr["enum"]("ScErrorCode", {
    scecArithDomain: 0,
    scecIndexBounds: 1,
    scecInvalidInput: 2,
    scecMissingValue: 3,
    scecExistingValue: 4,
    scecExceededLimit: 5,
    scecInvalidAction: 6,
    scecInternalError: 7,
    scecUnexpectedType: 8,
    scecUnexpectedSize: 9
  });

  // === xdr source ============================================================
  //
  //   union SCError switch (SCErrorType type)
  //   {
  //   case SCE_CONTRACT:
  //       uint32 contractCode;
  //   case SCE_WASM_VM:
  //   case SCE_CONTEXT:
  //   case SCE_STORAGE:
  //   case SCE_OBJECT:
  //   case SCE_CRYPTO:
  //   case SCE_EVENTS:
  //   case SCE_BUDGET:
  //   case SCE_VALUE:
  //   case SCE_AUTH:
  //       SCErrorCode code;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[377]++;
  xdr.union("ScError", {
    switchOn: xdr.lookup("ScErrorType"),
    switchName: "type",
    switches: [["sceContract", "contractCode"], ["sceWasmVm", "code"], ["sceContext", "code"], ["sceStorage", "code"], ["sceObject", "code"], ["sceCrypto", "code"], ["sceEvents", "code"], ["sceBudget", "code"], ["sceValue", "code"], ["sceAuth", "code"]],
    arms: {
      contractCode: xdr.lookup("Uint32"),
      code: xdr.lookup("ScErrorCode")
    }
  });

  // === xdr source ============================================================
  //
  //   struct UInt128Parts {
  //       uint64 hi;
  //       uint64 lo;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[378]++;
  xdr.struct("UInt128Parts", [["hi", xdr.lookup("Uint64")], ["lo", xdr.lookup("Uint64")]]);

  // === xdr source ============================================================
  //
  //   struct Int128Parts {
  //       int64 hi;
  //       uint64 lo;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[379]++;
  xdr.struct("Int128Parts", [["hi", xdr.lookup("Int64")], ["lo", xdr.lookup("Uint64")]]);

  // === xdr source ============================================================
  //
  //   struct UInt256Parts {
  //       uint64 hi_hi;
  //       uint64 hi_lo;
  //       uint64 lo_hi;
  //       uint64 lo_lo;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[380]++;
  xdr.struct("UInt256Parts", [["hiHi", xdr.lookup("Uint64")], ["hiLo", xdr.lookup("Uint64")], ["loHi", xdr.lookup("Uint64")], ["loLo", xdr.lookup("Uint64")]]);

  // === xdr source ============================================================
  //
  //   struct Int256Parts {
  //       int64 hi_hi;
  //       uint64 hi_lo;
  //       uint64 lo_hi;
  //       uint64 lo_lo;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[381]++;
  xdr.struct("Int256Parts", [["hiHi", xdr.lookup("Int64")], ["hiLo", xdr.lookup("Uint64")], ["loHi", xdr.lookup("Uint64")], ["loLo", xdr.lookup("Uint64")]]);

  // === xdr source ============================================================
  //
  //   enum ContractExecutableType
  //   {
  //       CONTRACT_EXECUTABLE_WASM = 0,
  //       CONTRACT_EXECUTABLE_STELLAR_ASSET = 1
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[382]++;
  xdr["enum"]("ContractExecutableType", {
    contractExecutableWasm: 0,
    contractExecutableStellarAsset: 1
  });

  // === xdr source ============================================================
  //
  //   union ContractExecutable switch (ContractExecutableType type)
  //   {
  //   case CONTRACT_EXECUTABLE_WASM:
  //       Hash wasm_hash;
  //   case CONTRACT_EXECUTABLE_STELLAR_ASSET:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[383]++;
  xdr.union("ContractExecutable", {
    switchOn: xdr.lookup("ContractExecutableType"),
    switchName: "type",
    switches: [["contractExecutableWasm", "wasmHash"], ["contractExecutableStellarAsset", xdr["void"]()]],
    arms: {
      wasmHash: xdr.lookup("Hash")
    }
  });

  // === xdr source ============================================================
  //
  //   enum SCAddressType
  //   {
  //       SC_ADDRESS_TYPE_ACCOUNT = 0,
  //       SC_ADDRESS_TYPE_CONTRACT = 1
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[384]++;
  xdr["enum"]("ScAddressType", {
    scAddressTypeAccount: 0,
    scAddressTypeContract: 1
  });

  // === xdr source ============================================================
  //
  //   union SCAddress switch (SCAddressType type)
  //   {
  //   case SC_ADDRESS_TYPE_ACCOUNT:
  //       AccountID accountId;
  //   case SC_ADDRESS_TYPE_CONTRACT:
  //       Hash contractId;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[385]++;
  xdr.union("ScAddress", {
    switchOn: xdr.lookup("ScAddressType"),
    switchName: "type",
    switches: [["scAddressTypeAccount", "accountId"], ["scAddressTypeContract", "contractId"]],
    arms: {
      accountId: xdr.lookup("AccountId"),
      contractId: xdr.lookup("Hash")
    }
  });

  // === xdr source ============================================================
  //
  //   const SCSYMBOL_LIMIT = 32;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[386]++;
  xdr["const"]("SCSYMBOL_LIMIT", 32);

  // === xdr source ============================================================
  //
  //   typedef SCVal SCVec<>;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[387]++;
  xdr.typedef("ScVec", xdr.varArray(xdr.lookup("ScVal"), 2147483647));

  // === xdr source ============================================================
  //
  //   typedef SCMapEntry SCMap<>;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[388]++;
  xdr.typedef("ScMap", xdr.varArray(xdr.lookup("ScMapEntry"), 2147483647));

  // === xdr source ============================================================
  //
  //   typedef opaque SCBytes<>;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[389]++;
  xdr.typedef("ScBytes", xdr.varOpaque());

  // === xdr source ============================================================
  //
  //   typedef string SCString<>;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[390]++;
  xdr.typedef("ScString", xdr.string());

  // === xdr source ============================================================
  //
  //   typedef string SCSymbol<SCSYMBOL_LIMIT>;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[391]++;
  xdr.typedef("ScSymbol", xdr.string(SCSYMBOL_LIMIT));

  // === xdr source ============================================================
  //
  //   struct SCNonceKey {
  //       int64 nonce;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[392]++;
  xdr.struct("ScNonceKey", [["nonce", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct SCContractInstance {
  //       ContractExecutable executable;
  //       SCMap* storage;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[393]++;
  xdr.struct("ScContractInstance", [["executable", xdr.lookup("ContractExecutable")], ["storage", xdr.option(xdr.lookup("ScMap"))]]);

  // === xdr source ============================================================
  //
  //   union SCVal switch (SCValType type)
  //   {
  //   
  //   case SCV_BOOL:
  //       bool b;
  //   case SCV_VOID:
  //       void;
  //   case SCV_ERROR:
  //       SCError error;
  //   
  //   case SCV_U32:
  //       uint32 u32;
  //   case SCV_I32:
  //       int32 i32;
  //   
  //   case SCV_U64:
  //       uint64 u64;
  //   case SCV_I64:
  //       int64 i64;
  //   case SCV_TIMEPOINT:
  //       TimePoint timepoint;
  //   case SCV_DURATION:
  //       Duration duration;
  //   
  //   case SCV_U128:
  //       UInt128Parts u128;
  //   case SCV_I128:
  //       Int128Parts i128;
  //   
  //   case SCV_U256:
  //       UInt256Parts u256;
  //   case SCV_I256:
  //       Int256Parts i256;
  //   
  //   case SCV_BYTES:
  //       SCBytes bytes;
  //   case SCV_STRING:
  //       SCString str;
  //   case SCV_SYMBOL:
  //       SCSymbol sym;
  //   
  //   // Vec and Map are recursive so need to live
  //   // behind an option, due to xdrpp limitations.
  //   case SCV_VEC:
  //       SCVec *vec;
  //   case SCV_MAP:
  //       SCMap *map;
  //   
  //   case SCV_ADDRESS:
  //       SCAddress address;
  //   
  //   // Special SCVals reserved for system-constructed contract-data
  //   // ledger keys, not generally usable elsewhere.
  //   case SCV_LEDGER_KEY_CONTRACT_INSTANCE:
  //       void;
  //   case SCV_LEDGER_KEY_NONCE:
  //       SCNonceKey nonce_key;
  //   
  //   case SCV_CONTRACT_INSTANCE:
  //       SCContractInstance instance;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[394]++;
  xdr.union("ScVal", {
    switchOn: xdr.lookup("ScValType"),
    switchName: "type",
    switches: [["scvBool", "b"], ["scvVoid", xdr["void"]()], ["scvError", "error"], ["scvU32", "u32"], ["scvI32", "i32"], ["scvU64", "u64"], ["scvI64", "i64"], ["scvTimepoint", "timepoint"], ["scvDuration", "duration"], ["scvU128", "u128"], ["scvI128", "i128"], ["scvU256", "u256"], ["scvI256", "i256"], ["scvBytes", "bytes"], ["scvString", "str"], ["scvSymbol", "sym"], ["scvVec", "vec"], ["scvMap", "map"], ["scvAddress", "address"], ["scvLedgerKeyContractInstance", xdr["void"]()], ["scvLedgerKeyNonce", "nonceKey"], ["scvContractInstance", "instance"]],
    arms: {
      b: xdr.bool(),
      error: xdr.lookup("ScError"),
      u32: xdr.lookup("Uint32"),
      i32: xdr.lookup("Int32"),
      u64: xdr.lookup("Uint64"),
      i64: xdr.lookup("Int64"),
      timepoint: xdr.lookup("TimePoint"),
      duration: xdr.lookup("Duration"),
      u128: xdr.lookup("UInt128Parts"),
      i128: xdr.lookup("Int128Parts"),
      u256: xdr.lookup("UInt256Parts"),
      i256: xdr.lookup("Int256Parts"),
      bytes: xdr.lookup("ScBytes"),
      str: xdr.lookup("ScString"),
      sym: xdr.lookup("ScSymbol"),
      vec: xdr.option(xdr.lookup("ScVec")),
      map: xdr.option(xdr.lookup("ScMap")),
      address: xdr.lookup("ScAddress"),
      nonceKey: xdr.lookup("ScNonceKey"),
      instance: xdr.lookup("ScContractInstance")
    }
  });

  // === xdr source ============================================================
  //
  //   struct SCMapEntry
  //   {
  //       SCVal key;
  //       SCVal val;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[395]++;
  xdr.struct("ScMapEntry", [["key", xdr.lookup("ScVal")], ["val", xdr.lookup("ScVal")]]);

  // === xdr source ============================================================
  //
  //   enum SCEnvMetaKind
  //   {
  //       SC_ENV_META_KIND_INTERFACE_VERSION = 0
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[396]++;
  xdr["enum"]("ScEnvMetaKind", {
    scEnvMetaKindInterfaceVersion: 0
  });

  // === xdr source ============================================================
  //
  //   union SCEnvMetaEntry switch (SCEnvMetaKind kind)
  //   {
  //   case SC_ENV_META_KIND_INTERFACE_VERSION:
  //       uint64 interfaceVersion;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[397]++;
  xdr.union("ScEnvMetaEntry", {
    switchOn: xdr.lookup("ScEnvMetaKind"),
    switchName: "kind",
    switches: [["scEnvMetaKindInterfaceVersion", "interfaceVersion"]],
    arms: {
      interfaceVersion: xdr.lookup("Uint64")
    }
  });

  // === xdr source ============================================================
  //
  //   struct SCMetaV0
  //   {
  //       string key<>;
  //       string val<>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[398]++;
  xdr.struct("ScMetaV0", [["key", xdr.string()], ["val", xdr.string()]]);

  // === xdr source ============================================================
  //
  //   enum SCMetaKind
  //   {
  //       SC_META_V0 = 0
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[399]++;
  xdr["enum"]("ScMetaKind", {
    scMetaV0: 0
  });

  // === xdr source ============================================================
  //
  //   union SCMetaEntry switch (SCMetaKind kind)
  //   {
  //   case SC_META_V0:
  //       SCMetaV0 v0;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[400]++;
  xdr.union("ScMetaEntry", {
    switchOn: xdr.lookup("ScMetaKind"),
    switchName: "kind",
    switches: [["scMetaV0", "v0"]],
    arms: {
      v0: xdr.lookup("ScMetaV0")
    }
  });

  // === xdr source ============================================================
  //
  //   const SC_SPEC_DOC_LIMIT = 1024;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[401]++;
  xdr["const"]("SC_SPEC_DOC_LIMIT", 1024);

  // === xdr source ============================================================
  //
  //   enum SCSpecType
  //   {
  //       SC_SPEC_TYPE_VAL = 0,
  //   
  //       // Types with no parameters.
  //       SC_SPEC_TYPE_BOOL = 1,
  //       SC_SPEC_TYPE_VOID = 2,
  //       SC_SPEC_TYPE_ERROR = 3,
  //       SC_SPEC_TYPE_U32 = 4,
  //       SC_SPEC_TYPE_I32 = 5,
  //       SC_SPEC_TYPE_U64 = 6,
  //       SC_SPEC_TYPE_I64 = 7,
  //       SC_SPEC_TYPE_TIMEPOINT = 8,
  //       SC_SPEC_TYPE_DURATION = 9,
  //       SC_SPEC_TYPE_U128 = 10,
  //       SC_SPEC_TYPE_I128 = 11,
  //       SC_SPEC_TYPE_U256 = 12,
  //       SC_SPEC_TYPE_I256 = 13,
  //       SC_SPEC_TYPE_BYTES = 14,
  //       SC_SPEC_TYPE_STRING = 16,
  //       SC_SPEC_TYPE_SYMBOL = 17,
  //       SC_SPEC_TYPE_ADDRESS = 19,
  //   
  //       // Types with parameters.
  //       SC_SPEC_TYPE_OPTION = 1000,
  //       SC_SPEC_TYPE_RESULT = 1001,
  //       SC_SPEC_TYPE_VEC = 1002,
  //       SC_SPEC_TYPE_MAP = 1004,
  //       SC_SPEC_TYPE_TUPLE = 1005,
  //       SC_SPEC_TYPE_BYTES_N = 1006,
  //   
  //       // User defined types.
  //       SC_SPEC_TYPE_UDT = 2000
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[402]++;
  xdr["enum"]("ScSpecType", {
    scSpecTypeVal: 0,
    scSpecTypeBool: 1,
    scSpecTypeVoid: 2,
    scSpecTypeError: 3,
    scSpecTypeU32: 4,
    scSpecTypeI32: 5,
    scSpecTypeU64: 6,
    scSpecTypeI64: 7,
    scSpecTypeTimepoint: 8,
    scSpecTypeDuration: 9,
    scSpecTypeU128: 10,
    scSpecTypeI128: 11,
    scSpecTypeU256: 12,
    scSpecTypeI256: 13,
    scSpecTypeBytes: 14,
    scSpecTypeString: 16,
    scSpecTypeSymbol: 17,
    scSpecTypeAddress: 19,
    scSpecTypeOption: 1000,
    scSpecTypeResult: 1001,
    scSpecTypeVec: 1002,
    scSpecTypeMap: 1004,
    scSpecTypeTuple: 1005,
    scSpecTypeBytesN: 1006,
    scSpecTypeUdt: 2000
  });

  // === xdr source ============================================================
  //
  //   struct SCSpecTypeOption
  //   {
  //       SCSpecTypeDef valueType;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[403]++;
  xdr.struct("ScSpecTypeOption", [["valueType", xdr.lookup("ScSpecTypeDef")]]);

  // === xdr source ============================================================
  //
  //   struct SCSpecTypeResult
  //   {
  //       SCSpecTypeDef okType;
  //       SCSpecTypeDef errorType;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[404]++;
  xdr.struct("ScSpecTypeResult", [["okType", xdr.lookup("ScSpecTypeDef")], ["errorType", xdr.lookup("ScSpecTypeDef")]]);

  // === xdr source ============================================================
  //
  //   struct SCSpecTypeVec
  //   {
  //       SCSpecTypeDef elementType;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[405]++;
  xdr.struct("ScSpecTypeVec", [["elementType", xdr.lookup("ScSpecTypeDef")]]);

  // === xdr source ============================================================
  //
  //   struct SCSpecTypeMap
  //   {
  //       SCSpecTypeDef keyType;
  //       SCSpecTypeDef valueType;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[406]++;
  xdr.struct("ScSpecTypeMap", [["keyType", xdr.lookup("ScSpecTypeDef")], ["valueType", xdr.lookup("ScSpecTypeDef")]]);

  // === xdr source ============================================================
  //
  //   struct SCSpecTypeTuple
  //   {
  //       SCSpecTypeDef valueTypes<12>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[407]++;
  xdr.struct("ScSpecTypeTuple", [["valueTypes", xdr.varArray(xdr.lookup("ScSpecTypeDef"), 12)]]);

  // === xdr source ============================================================
  //
  //   struct SCSpecTypeBytesN
  //   {
  //       uint32 n;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[408]++;
  xdr.struct("ScSpecTypeBytesN", [["n", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   struct SCSpecTypeUDT
  //   {
  //       string name<60>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[409]++;
  xdr.struct("ScSpecTypeUdt", [["name", xdr.string(60)]]);

  // === xdr source ============================================================
  //
  //   union SCSpecTypeDef switch (SCSpecType type)
  //   {
  //   case SC_SPEC_TYPE_VAL:
  //   case SC_SPEC_TYPE_BOOL:
  //   case SC_SPEC_TYPE_VOID:
  //   case SC_SPEC_TYPE_ERROR:
  //   case SC_SPEC_TYPE_U32:
  //   case SC_SPEC_TYPE_I32:
  //   case SC_SPEC_TYPE_U64:
  //   case SC_SPEC_TYPE_I64:
  //   case SC_SPEC_TYPE_TIMEPOINT:
  //   case SC_SPEC_TYPE_DURATION:
  //   case SC_SPEC_TYPE_U128:
  //   case SC_SPEC_TYPE_I128:
  //   case SC_SPEC_TYPE_U256:
  //   case SC_SPEC_TYPE_I256:
  //   case SC_SPEC_TYPE_BYTES:
  //   case SC_SPEC_TYPE_STRING:
  //   case SC_SPEC_TYPE_SYMBOL:
  //   case SC_SPEC_TYPE_ADDRESS:
  //       void;
  //   case SC_SPEC_TYPE_OPTION:
  //       SCSpecTypeOption option;
  //   case SC_SPEC_TYPE_RESULT:
  //       SCSpecTypeResult result;
  //   case SC_SPEC_TYPE_VEC:
  //       SCSpecTypeVec vec;
  //   case SC_SPEC_TYPE_MAP:
  //       SCSpecTypeMap map;
  //   case SC_SPEC_TYPE_TUPLE:
  //       SCSpecTypeTuple tuple;
  //   case SC_SPEC_TYPE_BYTES_N:
  //       SCSpecTypeBytesN bytesN;
  //   case SC_SPEC_TYPE_UDT:
  //       SCSpecTypeUDT udt;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[410]++;
  xdr.union("ScSpecTypeDef", {
    switchOn: xdr.lookup("ScSpecType"),
    switchName: "type",
    switches: [["scSpecTypeVal", xdr["void"]()], ["scSpecTypeBool", xdr["void"]()], ["scSpecTypeVoid", xdr["void"]()], ["scSpecTypeError", xdr["void"]()], ["scSpecTypeU32", xdr["void"]()], ["scSpecTypeI32", xdr["void"]()], ["scSpecTypeU64", xdr["void"]()], ["scSpecTypeI64", xdr["void"]()], ["scSpecTypeTimepoint", xdr["void"]()], ["scSpecTypeDuration", xdr["void"]()], ["scSpecTypeU128", xdr["void"]()], ["scSpecTypeI128", xdr["void"]()], ["scSpecTypeU256", xdr["void"]()], ["scSpecTypeI256", xdr["void"]()], ["scSpecTypeBytes", xdr["void"]()], ["scSpecTypeString", xdr["void"]()], ["scSpecTypeSymbol", xdr["void"]()], ["scSpecTypeAddress", xdr["void"]()], ["scSpecTypeOption", "option"], ["scSpecTypeResult", "result"], ["scSpecTypeVec", "vec"], ["scSpecTypeMap", "map"], ["scSpecTypeTuple", "tuple"], ["scSpecTypeBytesN", "bytesN"], ["scSpecTypeUdt", "udt"]],
    arms: {
      option: xdr.lookup("ScSpecTypeOption"),
      result: xdr.lookup("ScSpecTypeResult"),
      vec: xdr.lookup("ScSpecTypeVec"),
      map: xdr.lookup("ScSpecTypeMap"),
      tuple: xdr.lookup("ScSpecTypeTuple"),
      bytesN: xdr.lookup("ScSpecTypeBytesN"),
      udt: xdr.lookup("ScSpecTypeUdt")
    }
  });

  // === xdr source ============================================================
  //
  //   struct SCSpecUDTStructFieldV0
  //   {
  //       string doc<SC_SPEC_DOC_LIMIT>;
  //       string name<30>;
  //       SCSpecTypeDef type;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[411]++;
  xdr.struct("ScSpecUdtStructFieldV0", [["doc", xdr.string(SC_SPEC_DOC_LIMIT)], ["name", xdr.string(30)], ["type", xdr.lookup("ScSpecTypeDef")]]);

  // === xdr source ============================================================
  //
  //   struct SCSpecUDTStructV0
  //   {
  //       string doc<SC_SPEC_DOC_LIMIT>;
  //       string lib<80>;
  //       string name<60>;
  //       SCSpecUDTStructFieldV0 fields<40>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[412]++;
  xdr.struct("ScSpecUdtStructV0", [["doc", xdr.string(SC_SPEC_DOC_LIMIT)], ["lib", xdr.string(80)], ["name", xdr.string(60)], ["fields", xdr.varArray(xdr.lookup("ScSpecUdtStructFieldV0"), 40)]]);

  // === xdr source ============================================================
  //
  //   struct SCSpecUDTUnionCaseVoidV0
  //   {
  //       string doc<SC_SPEC_DOC_LIMIT>;
  //       string name<60>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[413]++;
  xdr.struct("ScSpecUdtUnionCaseVoidV0", [["doc", xdr.string(SC_SPEC_DOC_LIMIT)], ["name", xdr.string(60)]]);

  // === xdr source ============================================================
  //
  //   struct SCSpecUDTUnionCaseTupleV0
  //   {
  //       string doc<SC_SPEC_DOC_LIMIT>;
  //       string name<60>;
  //       SCSpecTypeDef type<12>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[414]++;
  xdr.struct("ScSpecUdtUnionCaseTupleV0", [["doc", xdr.string(SC_SPEC_DOC_LIMIT)], ["name", xdr.string(60)], ["type", xdr.varArray(xdr.lookup("ScSpecTypeDef"), 12)]]);

  // === xdr source ============================================================
  //
  //   enum SCSpecUDTUnionCaseV0Kind
  //   {
  //       SC_SPEC_UDT_UNION_CASE_VOID_V0 = 0,
  //       SC_SPEC_UDT_UNION_CASE_TUPLE_V0 = 1
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[415]++;
  xdr["enum"]("ScSpecUdtUnionCaseV0Kind", {
    scSpecUdtUnionCaseVoidV0: 0,
    scSpecUdtUnionCaseTupleV0: 1
  });

  // === xdr source ============================================================
  //
  //   union SCSpecUDTUnionCaseV0 switch (SCSpecUDTUnionCaseV0Kind kind)
  //   {
  //   case SC_SPEC_UDT_UNION_CASE_VOID_V0:
  //       SCSpecUDTUnionCaseVoidV0 voidCase;
  //   case SC_SPEC_UDT_UNION_CASE_TUPLE_V0:
  //       SCSpecUDTUnionCaseTupleV0 tupleCase;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[416]++;
  xdr.union("ScSpecUdtUnionCaseV0", {
    switchOn: xdr.lookup("ScSpecUdtUnionCaseV0Kind"),
    switchName: "kind",
    switches: [["scSpecUdtUnionCaseVoidV0", "voidCase"], ["scSpecUdtUnionCaseTupleV0", "tupleCase"]],
    arms: {
      voidCase: xdr.lookup("ScSpecUdtUnionCaseVoidV0"),
      tupleCase: xdr.lookup("ScSpecUdtUnionCaseTupleV0")
    }
  });

  // === xdr source ============================================================
  //
  //   struct SCSpecUDTUnionV0
  //   {
  //       string doc<SC_SPEC_DOC_LIMIT>;
  //       string lib<80>;
  //       string name<60>;
  //       SCSpecUDTUnionCaseV0 cases<50>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[417]++;
  xdr.struct("ScSpecUdtUnionV0", [["doc", xdr.string(SC_SPEC_DOC_LIMIT)], ["lib", xdr.string(80)], ["name", xdr.string(60)], ["cases", xdr.varArray(xdr.lookup("ScSpecUdtUnionCaseV0"), 50)]]);

  // === xdr source ============================================================
  //
  //   struct SCSpecUDTEnumCaseV0
  //   {
  //       string doc<SC_SPEC_DOC_LIMIT>;
  //       string name<60>;
  //       uint32 value;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[418]++;
  xdr.struct("ScSpecUdtEnumCaseV0", [["doc", xdr.string(SC_SPEC_DOC_LIMIT)], ["name", xdr.string(60)], ["value", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   struct SCSpecUDTEnumV0
  //   {
  //       string doc<SC_SPEC_DOC_LIMIT>;
  //       string lib<80>;
  //       string name<60>;
  //       SCSpecUDTEnumCaseV0 cases<50>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[419]++;
  xdr.struct("ScSpecUdtEnumV0", [["doc", xdr.string(SC_SPEC_DOC_LIMIT)], ["lib", xdr.string(80)], ["name", xdr.string(60)], ["cases", xdr.varArray(xdr.lookup("ScSpecUdtEnumCaseV0"), 50)]]);

  // === xdr source ============================================================
  //
  //   struct SCSpecUDTErrorEnumCaseV0
  //   {
  //       string doc<SC_SPEC_DOC_LIMIT>;
  //       string name<60>;
  //       uint32 value;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[420]++;
  xdr.struct("ScSpecUdtErrorEnumCaseV0", [["doc", xdr.string(SC_SPEC_DOC_LIMIT)], ["name", xdr.string(60)], ["value", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   struct SCSpecUDTErrorEnumV0
  //   {
  //       string doc<SC_SPEC_DOC_LIMIT>;
  //       string lib<80>;
  //       string name<60>;
  //       SCSpecUDTErrorEnumCaseV0 cases<50>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[421]++;
  xdr.struct("ScSpecUdtErrorEnumV0", [["doc", xdr.string(SC_SPEC_DOC_LIMIT)], ["lib", xdr.string(80)], ["name", xdr.string(60)], ["cases", xdr.varArray(xdr.lookup("ScSpecUdtErrorEnumCaseV0"), 50)]]);

  // === xdr source ============================================================
  //
  //   struct SCSpecFunctionInputV0
  //   {
  //       string doc<SC_SPEC_DOC_LIMIT>;
  //       string name<30>;
  //       SCSpecTypeDef type;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[422]++;
  xdr.struct("ScSpecFunctionInputV0", [["doc", xdr.string(SC_SPEC_DOC_LIMIT)], ["name", xdr.string(30)], ["type", xdr.lookup("ScSpecTypeDef")]]);

  // === xdr source ============================================================
  //
  //   struct SCSpecFunctionV0
  //   {
  //       string doc<SC_SPEC_DOC_LIMIT>;
  //       SCSymbol name;
  //       SCSpecFunctionInputV0 inputs<10>;
  //       SCSpecTypeDef outputs<1>;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[423]++;
  xdr.struct("ScSpecFunctionV0", [["doc", xdr.string(SC_SPEC_DOC_LIMIT)], ["name", xdr.lookup("ScSymbol")], ["inputs", xdr.varArray(xdr.lookup("ScSpecFunctionInputV0"), 10)], ["outputs", xdr.varArray(xdr.lookup("ScSpecTypeDef"), 1)]]);

  // === xdr source ============================================================
  //
  //   enum SCSpecEntryKind
  //   {
  //       SC_SPEC_ENTRY_FUNCTION_V0 = 0,
  //       SC_SPEC_ENTRY_UDT_STRUCT_V0 = 1,
  //       SC_SPEC_ENTRY_UDT_UNION_V0 = 2,
  //       SC_SPEC_ENTRY_UDT_ENUM_V0 = 3,
  //       SC_SPEC_ENTRY_UDT_ERROR_ENUM_V0 = 4
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[424]++;
  xdr["enum"]("ScSpecEntryKind", {
    scSpecEntryFunctionV0: 0,
    scSpecEntryUdtStructV0: 1,
    scSpecEntryUdtUnionV0: 2,
    scSpecEntryUdtEnumV0: 3,
    scSpecEntryUdtErrorEnumV0: 4
  });

  // === xdr source ============================================================
  //
  //   union SCSpecEntry switch (SCSpecEntryKind kind)
  //   {
  //   case SC_SPEC_ENTRY_FUNCTION_V0:
  //       SCSpecFunctionV0 functionV0;
  //   case SC_SPEC_ENTRY_UDT_STRUCT_V0:
  //       SCSpecUDTStructV0 udtStructV0;
  //   case SC_SPEC_ENTRY_UDT_UNION_V0:
  //       SCSpecUDTUnionV0 udtUnionV0;
  //   case SC_SPEC_ENTRY_UDT_ENUM_V0:
  //       SCSpecUDTEnumV0 udtEnumV0;
  //   case SC_SPEC_ENTRY_UDT_ERROR_ENUM_V0:
  //       SCSpecUDTErrorEnumV0 udtErrorEnumV0;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[425]++;
  xdr.union("ScSpecEntry", {
    switchOn: xdr.lookup("ScSpecEntryKind"),
    switchName: "kind",
    switches: [["scSpecEntryFunctionV0", "functionV0"], ["scSpecEntryUdtStructV0", "udtStructV0"], ["scSpecEntryUdtUnionV0", "udtUnionV0"], ["scSpecEntryUdtEnumV0", "udtEnumV0"], ["scSpecEntryUdtErrorEnumV0", "udtErrorEnumV0"]],
    arms: {
      functionV0: xdr.lookup("ScSpecFunctionV0"),
      udtStructV0: xdr.lookup("ScSpecUdtStructV0"),
      udtUnionV0: xdr.lookup("ScSpecUdtUnionV0"),
      udtEnumV0: xdr.lookup("ScSpecUdtEnumV0"),
      udtErrorEnumV0: xdr.lookup("ScSpecUdtErrorEnumV0")
    }
  });

  // === xdr source ============================================================
  //
  //   struct ConfigSettingContractExecutionLanesV0
  //   {
  //       // maximum number of Soroban transactions per ledger
  //       uint32 ledgerMaxTxCount;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[426]++;
  xdr.struct("ConfigSettingContractExecutionLanesV0", [["ledgerMaxTxCount", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   struct ConfigSettingContractComputeV0
  //   {
  //       // Maximum instructions per ledger
  //       int64 ledgerMaxInstructions;
  //       // Maximum instructions per transaction
  //       int64 txMaxInstructions;
  //       // Cost of 10000 instructions
  //       int64 feeRatePerInstructionsIncrement;
  //   
  //       // Memory limit per transaction. Unlike instructions, there is no fee
  //       // for memory, just the limit.
  //       uint32 txMemoryLimit;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[427]++;
  xdr.struct("ConfigSettingContractComputeV0", [["ledgerMaxInstructions", xdr.lookup("Int64")], ["txMaxInstructions", xdr.lookup("Int64")], ["feeRatePerInstructionsIncrement", xdr.lookup("Int64")], ["txMemoryLimit", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   struct ConfigSettingContractLedgerCostV0
  //   {
  //       // Maximum number of ledger entry read operations per ledger
  //       uint32 ledgerMaxReadLedgerEntries;
  //       // Maximum number of bytes that can be read per ledger
  //       uint32 ledgerMaxReadBytes;
  //       // Maximum number of ledger entry write operations per ledger
  //       uint32 ledgerMaxWriteLedgerEntries;
  //       // Maximum number of bytes that can be written per ledger
  //       uint32 ledgerMaxWriteBytes;
  //   
  //       // Maximum number of ledger entry read operations per transaction
  //       uint32 txMaxReadLedgerEntries;
  //       // Maximum number of bytes that can be read per transaction
  //       uint32 txMaxReadBytes;
  //       // Maximum number of ledger entry write operations per transaction
  //       uint32 txMaxWriteLedgerEntries;
  //       // Maximum number of bytes that can be written per transaction
  //       uint32 txMaxWriteBytes;
  //   
  //       int64 feeReadLedgerEntry;  // Fee per ledger entry read
  //       int64 feeWriteLedgerEntry; // Fee per ledger entry write
  //   
  //       int64 feeRead1KB;  // Fee for reading 1KB
  //   
  //       // The following parameters determine the write fee per 1KB.
  //       // Write fee grows linearly until bucket list reaches this size
  //       int64 bucketListTargetSizeBytes;
  //       // Fee per 1KB write when the bucket list is empty
  //       int64 writeFee1KBBucketListLow;
  //       // Fee per 1KB write when the bucket list has reached `bucketListTargetSizeBytes` 
  //       int64 writeFee1KBBucketListHigh;
  //       // Write fee multiplier for any additional data past the first `bucketListTargetSizeBytes`
  //       uint32 bucketListWriteFeeGrowthFactor;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[428]++;
  xdr.struct("ConfigSettingContractLedgerCostV0", [["ledgerMaxReadLedgerEntries", xdr.lookup("Uint32")], ["ledgerMaxReadBytes", xdr.lookup("Uint32")], ["ledgerMaxWriteLedgerEntries", xdr.lookup("Uint32")], ["ledgerMaxWriteBytes", xdr.lookup("Uint32")], ["txMaxReadLedgerEntries", xdr.lookup("Uint32")], ["txMaxReadBytes", xdr.lookup("Uint32")], ["txMaxWriteLedgerEntries", xdr.lookup("Uint32")], ["txMaxWriteBytes", xdr.lookup("Uint32")], ["feeReadLedgerEntry", xdr.lookup("Int64")], ["feeWriteLedgerEntry", xdr.lookup("Int64")], ["feeRead1Kb", xdr.lookup("Int64")], ["bucketListTargetSizeBytes", xdr.lookup("Int64")], ["writeFee1KbBucketListLow", xdr.lookup("Int64")], ["writeFee1KbBucketListHigh", xdr.lookup("Int64")], ["bucketListWriteFeeGrowthFactor", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   struct ConfigSettingContractHistoricalDataV0
  //   {
  //       int64 feeHistorical1KB; // Fee for storing 1KB in archives
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[429]++;
  xdr.struct("ConfigSettingContractHistoricalDataV0", [["feeHistorical1Kb", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct ConfigSettingContractEventsV0
  //   {
  //       // Maximum size of events that a contract call can emit.
  //       uint32 txMaxContractEventsSizeBytes;
  //       // Fee for generating 1KB of contract events.
  //       int64 feeContractEvents1KB;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[430]++;
  xdr.struct("ConfigSettingContractEventsV0", [["txMaxContractEventsSizeBytes", xdr.lookup("Uint32")], ["feeContractEvents1Kb", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct ConfigSettingContractBandwidthV0
  //   {
  //       // Maximum sum of all transaction sizes in the ledger in bytes
  //       uint32 ledgerMaxTxsSizeBytes;
  //       // Maximum size in bytes for a transaction
  //       uint32 txMaxSizeBytes;
  //   
  //       // Fee for 1 KB of transaction size
  //       int64 feeTxSize1KB;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[431]++;
  xdr.struct("ConfigSettingContractBandwidthV0", [["ledgerMaxTxsSizeBytes", xdr.lookup("Uint32")], ["txMaxSizeBytes", xdr.lookup("Uint32")], ["feeTxSize1Kb", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   enum ContractCostType {
  //       // Cost of running 1 wasm instruction
  //       WasmInsnExec = 0,
  //       // Cost of allocating a slice of memory (in bytes)
  //       MemAlloc = 1,
  //       // Cost of copying a slice of bytes into a pre-allocated memory
  //       MemCpy = 2,
  //       // Cost of comparing two slices of memory
  //       MemCmp = 3,
  //       // Cost of a host function dispatch, not including the actual work done by
  //       // the function nor the cost of VM invocation machinary
  //       DispatchHostFunction = 4,
  //       // Cost of visiting a host object from the host object storage. Exists to 
  //       // make sure some baseline cost coverage, i.e. repeatly visiting objects
  //       // by the guest will always incur some charges.
  //       VisitObject = 5,
  //       // Cost of serializing an xdr object to bytes
  //       ValSer = 6,
  //       // Cost of deserializing an xdr object from bytes
  //       ValDeser = 7,
  //       // Cost of computing the sha256 hash from bytes
  //       ComputeSha256Hash = 8,
  //       // Cost of computing the dilithium2 pubkey from bytes
  //       ComputeDilithium2PubKey = 9,
  //       // Cost of verifying dilithium2 signature of a payload.
  //       VerifyDilithium2Sig = 10,
  //       // Cost of instantiation a VM from wasm bytes code.
  //       VmInstantiation = 11,
  //       // Cost of instantiation a VM from a cached state.
  //       VmCachedInstantiation = 12,
  //       // Cost of invoking a function on the VM. If the function is a host function,
  //       // additional cost will be covered by `DispatchHostFunction`.
  //       InvokeVmFunction = 13,
  //       // Cost of computing a keccak256 hash from bytes.
  //       ComputeKeccak256Hash = 14,
  //       // Cost of decoding an ECDSA signature computed from a 256-bit prime modulus
  //       // curve (e.g. secp256k1 and secp256r1)
  //       DecodeEcdsaCurve256Sig = 15,
  //       // Cost of recovering an ECDSA secp256k1 key from a signature.
  //       RecoverEcdsaSecp256k1Key = 16,
  //       // Cost of int256 addition (`+`) and subtraction (`-`) operations
  //       Int256AddSub = 17,
  //       // Cost of int256 multiplication (`*`) operation
  //       Int256Mul = 18,
  //       // Cost of int256 division (`/`) operation
  //       Int256Div = 19,
  //       // Cost of int256 power (`exp`) operation
  //       Int256Pow = 20,
  //       // Cost of int256 shift (`shl`, `shr`) operation
  //       Int256Shift = 21,
  //       // Cost of drawing random bytes using a ChaCha20 PRNG
  //       ChaCha20DrawBytes = 22,
  //   
  //       // Cost of parsing wasm bytes that only encode instructions.
  //       ParseWasmInstructions = 23,
  //       // Cost of parsing a known number of wasm functions.
  //       ParseWasmFunctions = 24,
  //       // Cost of parsing a known number of wasm globals.
  //       ParseWasmGlobals = 25,
  //       // Cost of parsing a known number of wasm table entries.
  //       ParseWasmTableEntries = 26,
  //       // Cost of parsing a known number of wasm types.
  //       ParseWasmTypes = 27,
  //       // Cost of parsing a known number of wasm data segments.
  //       ParseWasmDataSegments = 28,
  //       // Cost of parsing a known number of wasm element segments.
  //       ParseWasmElemSegments = 29,
  //       // Cost of parsing a known number of wasm imports.
  //       ParseWasmImports = 30,
  //       // Cost of parsing a known number of wasm exports.
  //       ParseWasmExports = 31,
  //       // Cost of parsing a known number of data segment bytes.
  //       ParseWasmDataSegmentBytes = 32,
  //   
  //       // Cost of instantiating wasm bytes that only encode instructions.
  //       InstantiateWasmInstructions = 33,
  //       // Cost of instantiating a known number of wasm functions.
  //       InstantiateWasmFunctions = 34,
  //       // Cost of instantiating a known number of wasm globals.
  //       InstantiateWasmGlobals = 35,
  //       // Cost of instantiating a known number of wasm table entries.
  //       InstantiateWasmTableEntries = 36,
  //       // Cost of instantiating a known number of wasm types.
  //       InstantiateWasmTypes = 37,
  //       // Cost of instantiating a known number of wasm data segments.
  //       InstantiateWasmDataSegments = 38,
  //       // Cost of instantiating a known number of wasm element segments.
  //       InstantiateWasmElemSegments = 39,
  //       // Cost of instantiating a known number of wasm imports.
  //       InstantiateWasmImports = 40,
  //       // Cost of instantiating a known number of wasm exports.
  //       InstantiateWasmExports = 41,
  //       // Cost of instantiating a known number of data segment bytes.
  //       InstantiateWasmDataSegmentBytes = 42,
  //   
  //       // Cost of decoding a bytes array representing an uncompressed SEC-1 encoded
  //       // point on a 256-bit elliptic curve
  //       Sec1DecodePointUncompressed = 43,
  //       // Cost of verifying an ECDSA Secp256r1 signature
  //       VerifyEcdsaSecp256r1Sig = 44
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[432]++;
  xdr["enum"]("ContractCostType", {
    wasmInsnExec: 0,
    memAlloc: 1,
    memCpy: 2,
    memCmp: 3,
    dispatchHostFunction: 4,
    visitObject: 5,
    valSer: 6,
    valDeser: 7,
    computeSha256Hash: 8,
    computeDilithium2PubKey: 9,
    verifyDilithium2Sig: 10,
    vmInstantiation: 11,
    vmCachedInstantiation: 12,
    invokeVmFunction: 13,
    computeKeccak256Hash: 14,
    decodeEcdsaCurve256Sig: 15,
    recoverEcdsaSecp256k1Key: 16,
    int256AddSub: 17,
    int256Mul: 18,
    int256Div: 19,
    int256Pow: 20,
    int256Shift: 21,
    chaCha20DrawBytes: 22,
    parseWasmInstructions: 23,
    parseWasmFunctions: 24,
    parseWasmGlobals: 25,
    parseWasmTableEntries: 26,
    parseWasmTypes: 27,
    parseWasmDataSegments: 28,
    parseWasmElemSegments: 29,
    parseWasmImports: 30,
    parseWasmExports: 31,
    parseWasmDataSegmentBytes: 32,
    instantiateWasmInstructions: 33,
    instantiateWasmFunctions: 34,
    instantiateWasmGlobals: 35,
    instantiateWasmTableEntries: 36,
    instantiateWasmTypes: 37,
    instantiateWasmDataSegments: 38,
    instantiateWasmElemSegments: 39,
    instantiateWasmImports: 40,
    instantiateWasmExports: 41,
    instantiateWasmDataSegmentBytes: 42,
    sec1DecodePointUncompressed: 43,
    verifyEcdsaSecp256r1Sig: 44
  });

  // === xdr source ============================================================
  //
  //   struct ContractCostParamEntry {
  //       // use `ext` to add more terms (e.g. higher order polynomials) in the future
  //       ExtensionPoint ext;
  //   
  //       int64 constTerm;
  //       int64 linearTerm;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[433]++;
  xdr.struct("ContractCostParamEntry", [["ext", xdr.lookup("ExtensionPoint")], ["constTerm", xdr.lookup("Int64")], ["linearTerm", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct StateArchivalSettings {
  //       uint32 maxEntryTTL;
  //       uint32 minTemporaryTTL;
  //       uint32 minPersistentTTL;
  //   
  //       // rent_fee = wfee_rate_average / rent_rate_denominator_for_type
  //       int64 persistentRentRateDenominator;
  //       int64 tempRentRateDenominator;
  //   
  //       // max number of entries that emit archival meta in a single ledger
  //       uint32 maxEntriesToArchive;
  //   
  //       // Number of snapshots to use when calculating average BucketList size
  //       uint32 bucketListSizeWindowSampleSize;
  //   
  //       // How often to sample the BucketList size for the average, in ledgers
  //       uint32 bucketListWindowSamplePeriod;
  //   
  //       // Maximum number of bytes that we scan for eviction per ledger
  //       uint32 evictionScanSize;
  //   
  //       // Lowest BucketList level to be scanned to evict entries
  //       uint32 startingEvictionScanLevel;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[434]++;
  xdr.struct("StateArchivalSettings", [["maxEntryTtl", xdr.lookup("Uint32")], ["minTemporaryTtl", xdr.lookup("Uint32")], ["minPersistentTtl", xdr.lookup("Uint32")], ["persistentRentRateDenominator", xdr.lookup("Int64")], ["tempRentRateDenominator", xdr.lookup("Int64")], ["maxEntriesToArchive", xdr.lookup("Uint32")], ["bucketListSizeWindowSampleSize", xdr.lookup("Uint32")], ["bucketListWindowSamplePeriod", xdr.lookup("Uint32")], ["evictionScanSize", xdr.lookup("Uint32")], ["startingEvictionScanLevel", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   struct EvictionIterator {
  //       uint32 bucketListLevel;
  //       bool isCurrBucket;
  //       uint64 bucketFileOffset;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[435]++;
  xdr.struct("EvictionIterator", [["bucketListLevel", xdr.lookup("Uint32")], ["isCurrBucket", xdr.bool()], ["bucketFileOffset", xdr.lookup("Uint64")]]);

  // === xdr source ============================================================
  //
  //   const CONTRACT_COST_COUNT_LIMIT = 1024;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[436]++;
  xdr["const"]("CONTRACT_COST_COUNT_LIMIT", 1024);

  // === xdr source ============================================================
  //
  //   typedef ContractCostParamEntry ContractCostParams<CONTRACT_COST_COUNT_LIMIT>;
  //
  // ===========================================================================
  cov_bo6mr71vg().s[437]++;
  xdr.typedef("ContractCostParams", xdr.varArray(xdr.lookup("ContractCostParamEntry"), xdr.lookup("CONTRACT_COST_COUNT_LIMIT")));

  // === xdr source ============================================================
  //
  //   enum ConfigSettingID
  //   {
  //       CONFIG_SETTING_CONTRACT_MAX_SIZE_BYTES = 0,
  //       CONFIG_SETTING_CONTRACT_COMPUTE_V0 = 1,
  //       CONFIG_SETTING_CONTRACT_LEDGER_COST_V0 = 2,
  //       CONFIG_SETTING_CONTRACT_HISTORICAL_DATA_V0 = 3,
  //       CONFIG_SETTING_CONTRACT_EVENTS_V0 = 4,
  //       CONFIG_SETTING_CONTRACT_BANDWIDTH_V0 = 5,
  //       CONFIG_SETTING_CONTRACT_COST_PARAMS_CPU_INSTRUCTIONS = 6,
  //       CONFIG_SETTING_CONTRACT_COST_PARAMS_MEMORY_BYTES = 7,
  //       CONFIG_SETTING_CONTRACT_DATA_KEY_SIZE_BYTES = 8,
  //       CONFIG_SETTING_CONTRACT_DATA_ENTRY_SIZE_BYTES = 9,
  //       CONFIG_SETTING_STATE_ARCHIVAL = 10,
  //       CONFIG_SETTING_CONTRACT_EXECUTION_LANES = 11,
  //       CONFIG_SETTING_BUCKETLIST_SIZE_WINDOW = 12,
  //       CONFIG_SETTING_EVICTION_ITERATOR = 13
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[438]++;
  xdr["enum"]("ConfigSettingId", {
    configSettingContractMaxSizeBytes: 0,
    configSettingContractComputeV0: 1,
    configSettingContractLedgerCostV0: 2,
    configSettingContractHistoricalDataV0: 3,
    configSettingContractEventsV0: 4,
    configSettingContractBandwidthV0: 5,
    configSettingContractCostParamsCpuInstructions: 6,
    configSettingContractCostParamsMemoryBytes: 7,
    configSettingContractDataKeySizeBytes: 8,
    configSettingContractDataEntrySizeBytes: 9,
    configSettingStateArchival: 10,
    configSettingContractExecutionLanes: 11,
    configSettingBucketlistSizeWindow: 12,
    configSettingEvictionIterator: 13
  });

  // === xdr source ============================================================
  //
  //   union ConfigSettingEntry switch (ConfigSettingID configSettingID)
  //   {
  //   case CONFIG_SETTING_CONTRACT_MAX_SIZE_BYTES:
  //       uint32 contractMaxSizeBytes;
  //   case CONFIG_SETTING_CONTRACT_COMPUTE_V0:
  //       ConfigSettingContractComputeV0 contractCompute;
  //   case CONFIG_SETTING_CONTRACT_LEDGER_COST_V0:
  //       ConfigSettingContractLedgerCostV0 contractLedgerCost;
  //   case CONFIG_SETTING_CONTRACT_HISTORICAL_DATA_V0:
  //       ConfigSettingContractHistoricalDataV0 contractHistoricalData;
  //   case CONFIG_SETTING_CONTRACT_EVENTS_V0:
  //       ConfigSettingContractEventsV0 contractEvents;
  //   case CONFIG_SETTING_CONTRACT_BANDWIDTH_V0:
  //       ConfigSettingContractBandwidthV0 contractBandwidth;
  //   case CONFIG_SETTING_CONTRACT_COST_PARAMS_CPU_INSTRUCTIONS:
  //       ContractCostParams contractCostParamsCpuInsns;
  //   case CONFIG_SETTING_CONTRACT_COST_PARAMS_MEMORY_BYTES:
  //       ContractCostParams contractCostParamsMemBytes;
  //   case CONFIG_SETTING_CONTRACT_DATA_KEY_SIZE_BYTES:
  //       uint32 contractDataKeySizeBytes;
  //   case CONFIG_SETTING_CONTRACT_DATA_ENTRY_SIZE_BYTES:
  //       uint32 contractDataEntrySizeBytes;
  //   case CONFIG_SETTING_STATE_ARCHIVAL:
  //       StateArchivalSettings stateArchivalSettings;
  //   case CONFIG_SETTING_CONTRACT_EXECUTION_LANES:
  //       ConfigSettingContractExecutionLanesV0 contractExecutionLanes;
  //   case CONFIG_SETTING_BUCKETLIST_SIZE_WINDOW:
  //       uint64 bucketListSizeWindow<>;
  //   case CONFIG_SETTING_EVICTION_ITERATOR:
  //       EvictionIterator evictionIterator;
  //   };
  //
  // ===========================================================================
  cov_bo6mr71vg().s[439]++;
  xdr.union("ConfigSettingEntry", {
    switchOn: xdr.lookup("ConfigSettingId"),
    switchName: "configSettingId",
    switches: [["configSettingContractMaxSizeBytes", "contractMaxSizeBytes"], ["configSettingContractComputeV0", "contractCompute"], ["configSettingContractLedgerCostV0", "contractLedgerCost"], ["configSettingContractHistoricalDataV0", "contractHistoricalData"], ["configSettingContractEventsV0", "contractEvents"], ["configSettingContractBandwidthV0", "contractBandwidth"], ["configSettingContractCostParamsCpuInstructions", "contractCostParamsCpuInsns"], ["configSettingContractCostParamsMemoryBytes", "contractCostParamsMemBytes"], ["configSettingContractDataKeySizeBytes", "contractDataKeySizeBytes"], ["configSettingContractDataEntrySizeBytes", "contractDataEntrySizeBytes"], ["configSettingStateArchival", "stateArchivalSettings"], ["configSettingContractExecutionLanes", "contractExecutionLanes"], ["configSettingBucketlistSizeWindow", "bucketListSizeWindow"], ["configSettingEvictionIterator", "evictionIterator"]],
    arms: {
      contractMaxSizeBytes: xdr.lookup("Uint32"),
      contractCompute: xdr.lookup("ConfigSettingContractComputeV0"),
      contractLedgerCost: xdr.lookup("ConfigSettingContractLedgerCostV0"),
      contractHistoricalData: xdr.lookup("ConfigSettingContractHistoricalDataV0"),
      contractEvents: xdr.lookup("ConfigSettingContractEventsV0"),
      contractBandwidth: xdr.lookup("ConfigSettingContractBandwidthV0"),
      contractCostParamsCpuInsns: xdr.lookup("ContractCostParams"),
      contractCostParamsMemBytes: xdr.lookup("ContractCostParams"),
      contractDataKeySizeBytes: xdr.lookup("Uint32"),
      contractDataEntrySizeBytes: xdr.lookup("Uint32"),
      stateArchivalSettings: xdr.lookup("StateArchivalSettings"),
      contractExecutionLanes: xdr.lookup("ConfigSettingContractExecutionLanesV0"),
      bucketListSizeWindow: xdr.varArray(xdr.lookup("Uint64"), 2147483647),
      evictionIterator: xdr.lookup("EvictionIterator")
    }
  });
}));
var _default = exports["default"] = types;