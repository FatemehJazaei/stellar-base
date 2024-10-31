"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XdrLargeInt = void 0;
var _jsXdr = require("@stellar/js-xdr");
var _uint = require("./uint128");
var _uint2 = require("./uint256");
var _int = require("./int128");
var _int2 = require("./int256");
var _xdr = _interopRequireDefault(require("../xdr"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_mwupiiy3e() {
  var path = "/mnt/g/stellar-base/src/numbers/xdr_large_int.js";
  var hash = "3c73e24f29cb9995bf3fa07fe1d00eea30f90465";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/numbers/xdr_large_int.js",
    statementMap: {
      "0": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 34,
          column: 5
        }
      },
      "1": {
        start: {
          line: 33,
          column: 6
        },
        end: {
          line: 33,
          column: 24
        }
      },
      "2": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 46,
          column: 7
        }
      },
      "3": {
        start: {
          line: 39,
          column: 6
        },
        end: {
          line: 41,
          column: 7
        }
      },
      "4": {
        start: {
          line: 40,
          column: 8
        },
        end: {
          line: 40,
          column: 17
        }
      },
      "5": {
        start: {
          line: 42,
          column: 6
        },
        end: {
          line: 44,
          column: 7
        }
      },
      "6": {
        start: {
          line: 43,
          column: 8
        },
        end: {
          line: 43,
          column: 28
        }
      },
      "7": {
        start: {
          line: 45,
          column: 6
        },
        end: {
          line: 45,
          column: 23
        }
      },
      "8": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 69,
          column: 5
        }
      },
      "9": {
        start: {
          line: 50,
          column: 8
        },
        end: {
          line: 50,
          column: 37
        }
      },
      "10": {
        start: {
          line: 51,
          column: 8
        },
        end: {
          line: 51,
          column: 14
        }
      },
      "11": {
        start: {
          line: 53,
          column: 8
        },
        end: {
          line: 53,
          column: 38
        }
      },
      "12": {
        start: {
          line: 54,
          column: 8
        },
        end: {
          line: 54,
          column: 14
        }
      },
      "13": {
        start: {
          line: 56,
          column: 8
        },
        end: {
          line: 56,
          column: 38
        }
      },
      "14": {
        start: {
          line: 57,
          column: 8
        },
        end: {
          line: 57,
          column: 14
        }
      },
      "15": {
        start: {
          line: 59,
          column: 8
        },
        end: {
          line: 59,
          column: 45
        }
      },
      "16": {
        start: {
          line: 60,
          column: 8
        },
        end: {
          line: 60,
          column: 14
        }
      },
      "17": {
        start: {
          line: 62,
          column: 8
        },
        end: {
          line: 62,
          column: 39
        }
      },
      "18": {
        start: {
          line: 63,
          column: 8
        },
        end: {
          line: 63,
          column: 14
        }
      },
      "19": {
        start: {
          line: 65,
          column: 8
        },
        end: {
          line: 65,
          column: 39
        }
      },
      "20": {
        start: {
          line: 66,
          column: 8
        },
        end: {
          line: 66,
          column: 14
        }
      },
      "21": {
        start: {
          line: 68,
          column: 8
        },
        end: {
          line: 68,
          column: 49
        }
      },
      "22": {
        start: {
          line: 71,
          column: 4
        },
        end: {
          line: 71,
          column: 21
        }
      },
      "23": {
        start: {
          line: 79,
          column: 15
        },
        end: {
          line: 79,
          column: 34
        }
      },
      "24": {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 85,
          column: 5
        }
      },
      "25": {
        start: {
          line: 81,
          column: 6
        },
        end: {
          line: 84,
          column: 8
        }
      },
      "26": {
        start: {
          line: 87,
          column: 4
        },
        end: {
          line: 87,
          column: 22
        }
      },
      "27": {
        start: {
          line: 92,
          column: 4
        },
        end: {
          line: 92,
          column: 31
        }
      },
      "28": {
        start: {
          line: 97,
          column: 4
        },
        end: {
          line: 97,
          column: 24
        }
      },
      "29": {
        start: {
          line: 98,
          column: 14
        },
        end: {
          line: 98,
          column: 29
        }
      },
      "30": {
        start: {
          line: 99,
          column: 4
        },
        end: {
          line: 101,
          column: 5
        }
      },
      "31": {
        start: {
          line: 100,
          column: 6
        },
        end: {
          line: 100,
          column: 56
        }
      },
      "32": {
        start: {
          line: 103,
          column: 4
        },
        end: {
          line: 103,
          column: 46
        }
      },
      "33": {
        start: {
          line: 108,
          column: 4
        },
        end: {
          line: 108,
          column: 24
        }
      },
      "34": {
        start: {
          line: 109,
          column: 4
        },
        end: {
          line: 111,
          column: 6
        }
      },
      "35": {
        start: {
          line: 119,
          column: 4
        },
        end: {
          line: 119,
          column: 25
        }
      },
      "36": {
        start: {
          line: 121,
          column: 14
        },
        end: {
          line: 121,
          column: 33
        }
      },
      "37": {
        start: {
          line: 122,
          column: 17
        },
        end: {
          line: 122,
          column: 44
        }
      },
      "38": {
        start: {
          line: 123,
          column: 17
        },
        end: {
          line: 123,
          column: 38
        }
      },
      "39": {
        start: {
          line: 125,
          column: 4
        },
        end: {
          line: 130,
          column: 6
        }
      },
      "40": {
        start: {
          line: 138,
          column: 4
        },
        end: {
          line: 138,
          column: 25
        }
      },
      "41": {
        start: {
          line: 139,
          column: 14
        },
        end: {
          line: 139,
          column: 33
        }
      },
      "42": {
        start: {
          line: 141,
          column: 4
        },
        end: {
          line: 146,
          column: 6
        }
      },
      "43": {
        start: {
          line: 151,
          column: 14
        },
        end: {
          line: 151,
          column: 33
        }
      },
      "44": {
        start: {
          line: 152,
          column: 19
        },
        end: {
          line: 152,
          column: 47
        }
      },
      "45": {
        start: {
          line: 153,
          column: 19
        },
        end: {
          line: 153,
          column: 48
        }
      },
      "46": {
        start: {
          line: 154,
          column: 19
        },
        end: {
          line: 154,
          column: 47
        }
      },
      "47": {
        start: {
          line: 155,
          column: 19
        },
        end: {
          line: 155,
          column: 40
        }
      },
      "48": {
        start: {
          line: 157,
          column: 4
        },
        end: {
          line: 164,
          column: 6
        }
      },
      "49": {
        start: {
          line: 169,
          column: 14
        },
        end: {
          line: 169,
          column: 33
        }
      },
      "50": {
        start: {
          line: 170,
          column: 19
        },
        end: {
          line: 170,
          column: 48
        }
      },
      "51": {
        start: {
          line: 171,
          column: 19
        },
        end: {
          line: 171,
          column: 48
        }
      },
      "52": {
        start: {
          line: 172,
          column: 19
        },
        end: {
          line: 172,
          column: 47
        }
      },
      "53": {
        start: {
          line: 173,
          column: 19
        },
        end: {
          line: 173,
          column: 40
        }
      },
      "54": {
        start: {
          line: 175,
          column: 4
        },
        end: {
          line: 182,
          column: 6
        }
      },
      "55": {
        start: {
          line: 187,
          column: 4
        },
        end: {
          line: 202,
          column: 5
        }
      },
      "56": {
        start: {
          line: 189,
          column: 8
        },
        end: {
          line: 189,
          column: 28
        }
      },
      "57": {
        start: {
          line: 191,
          column: 8
        },
        end: {
          line: 191,
          column: 29
        }
      },
      "58": {
        start: {
          line: 193,
          column: 8
        },
        end: {
          line: 193,
          column: 29
        }
      },
      "59": {
        start: {
          line: 195,
          column: 8
        },
        end: {
          line: 195,
          column: 28
        }
      },
      "60": {
        start: {
          line: 197,
          column: 8
        },
        end: {
          line: 197,
          column: 29
        }
      },
      "61": {
        start: {
          line: 199,
          column: 8
        },
        end: {
          line: 199,
          column: 29
        }
      },
      "62": {
        start: {
          line: 201,
          column: 8
        },
        end: {
          line: 201,
          column: 54
        }
      },
      "63": {
        start: {
          line: 206,
          column: 4
        },
        end: {
          line: 206,
          column: 30
        }
      },
      "64": {
        start: {
          line: 210,
          column: 4
        },
        end: {
          line: 210,
          column: 31
        }
      },
      "65": {
        start: {
          line: 214,
          column: 4
        },
        end: {
          line: 217,
          column: 6
        }
      },
      "66": {
        start: {
          line: 221,
          column: 4
        },
        end: {
          line: 223,
          column: 5
        }
      },
      "67": {
        start: {
          line: 222,
          column: 6
        },
        end: {
          line: 222,
          column: 74
        }
      },
      "68": {
        start: {
          line: 227,
          column: 4
        },
        end: {
          line: 237,
          column: 5
        }
      },
      "69": {
        start: {
          line: 234,
          column: 8
        },
        end: {
          line: 234,
          column: 20
        }
      },
      "70": {
        start: {
          line: 236,
          column: 8
        },
        end: {
          line: 236,
          column: 21
        }
      },
      "71": {
        start: {
          line: 248,
          column: 4
        },
        end: {
          line: 248,
          column: 42
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        },
        loc: {
          start: {
            line: 31,
            column: 28
          },
          end: {
            line: 72,
            column: 3
          }
        },
        line: 31
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 37,
            column: 24
          },
          end: {
            line: 37,
            column: 25
          }
        },
        loc: {
          start: {
            line: 37,
            column: 31
          },
          end: {
            line: 46,
            column: 5
          }
        },
        line: 37
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 78,
            column: 2
          },
          end: {
            line: 78,
            column: 3
          }
        },
        loc: {
          start: {
            line: 78,
            column: 13
          },
          end: {
            line: 88,
            column: 3
          }
        },
        line: 78
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 91,
            column: 2
          },
          end: {
            line: 91,
            column: 3
          }
        },
        loc: {
          start: {
            line: 91,
            column: 13
          },
          end: {
            line: 93,
            column: 3
          }
        },
        line: 91
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 96,
            column: 2
          },
          end: {
            line: 96,
            column: 3
          }
        },
        loc: {
          start: {
            line: 96,
            column: 10
          },
          end: {
            line: 104,
            column: 3
          }
        },
        line: 96
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 107,
            column: 2
          },
          end: {
            line: 107,
            column: 3
          }
        },
        loc: {
          start: {
            line: 107,
            column: 10
          },
          end: {
            line: 112,
            column: 3
          }
        },
        line: 107
      },
      "6": {
        name: "(anonymous_6)",
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
            column: 11
          },
          end: {
            line: 131,
            column: 3
          }
        },
        line: 118
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 137,
            column: 2
          },
          end: {
            line: 137,
            column: 3
          }
        },
        loc: {
          start: {
            line: 137,
            column: 11
          },
          end: {
            line: 147,
            column: 3
          }
        },
        line: 137
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 150,
            column: 2
          },
          end: {
            line: 150,
            column: 3
          }
        },
        loc: {
          start: {
            line: 150,
            column: 11
          },
          end: {
            line: 165,
            column: 3
          }
        },
        line: 150
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 168,
            column: 2
          },
          end: {
            line: 168,
            column: 3
          }
        },
        loc: {
          start: {
            line: 168,
            column: 11
          },
          end: {
            line: 183,
            column: 3
          }
        },
        line: 168
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 186,
            column: 2
          },
          end: {
            line: 186,
            column: 3
          }
        },
        loc: {
          start: {
            line: 186,
            column: 12
          },
          end: {
            line: 203,
            column: 3
          }
        },
        line: 186
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 205,
            column: 2
          },
          end: {
            line: 205,
            column: 3
          }
        },
        loc: {
          start: {
            line: 205,
            column: 12
          },
          end: {
            line: 207,
            column: 3
          }
        },
        line: 205
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 209,
            column: 2
          },
          end: {
            line: 209,
            column: 3
          }
        },
        loc: {
          start: {
            line: 209,
            column: 13
          },
          end: {
            line: 211,
            column: 3
          }
        },
        line: 209
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 213,
            column: 2
          },
          end: {
            line: 213,
            column: 3
          }
        },
        loc: {
          start: {
            line: 213,
            column: 11
          },
          end: {
            line: 218,
            column: 3
          }
        },
        line: 213
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 220,
            column: 2
          },
          end: {
            line: 220,
            column: 3
          }
        },
        loc: {
          start: {
            line: 220,
            column: 19
          },
          end: {
            line: 224,
            column: 3
          }
        },
        line: 220
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 226,
            column: 2
          },
          end: {
            line: 226,
            column: 3
          }
        },
        loc: {
          start: {
            line: 226,
            column: 22
          },
          end: {
            line: 238,
            column: 3
          }
        },
        line: 226
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 247,
            column: 2
          },
          end: {
            line: 247,
            column: 3
          }
        },
        loc: {
          start: {
            line: 247,
            column: 26
          },
          end: {
            line: 249,
            column: 3
          }
        },
        line: 247
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 34,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 34,
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
        line: 32
      },
      "1": {
        loc: {
          start: {
            line: 39,
            column: 6
          },
          end: {
            line: 41,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 39,
            column: 6
          },
          end: {
            line: 41,
            column: 7
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
        line: 39
      },
      "2": {
        loc: {
          start: {
            line: 42,
            column: 6
          },
          end: {
            line: 44,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 42,
            column: 6
          },
          end: {
            line: 44,
            column: 7
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
        line: 42
      },
      "3": {
        loc: {
          start: {
            line: 48,
            column: 4
          },
          end: {
            line: 69,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 49,
            column: 6
          },
          end: {
            line: 51,
            column: 14
          }
        }, {
          start: {
            line: 52,
            column: 6
          },
          end: {
            line: 54,
            column: 14
          }
        }, {
          start: {
            line: 55,
            column: 6
          },
          end: {
            line: 57,
            column: 14
          }
        }, {
          start: {
            line: 58,
            column: 6
          },
          end: {
            line: 60,
            column: 14
          }
        }, {
          start: {
            line: 61,
            column: 6
          },
          end: {
            line: 63,
            column: 14
          }
        }, {
          start: {
            line: 64,
            column: 6
          },
          end: {
            line: 66,
            column: 14
          }
        }, {
          start: {
            line: 67,
            column: 6
          },
          end: {
            line: 68,
            column: 49
          }
        }],
        line: 48
      },
      "4": {
        loc: {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 85,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 85,
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
        line: 80
      },
      "5": {
        loc: {
          start: {
            line: 80,
            column: 8
          },
          end: {
            line: 80,
            column: 68
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 80,
            column: 8
          },
          end: {
            line: 80,
            column: 36
          }
        }, {
          start: {
            line: 80,
            column: 40
          },
          end: {
            line: 80,
            column: 68
          }
        }],
        line: 80
      },
      "6": {
        loc: {
          start: {
            line: 99,
            column: 4
          },
          end: {
            line: 101,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 99,
            column: 4
          },
          end: {
            line: 101,
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
        line: 99
      },
      "7": {
        loc: {
          start: {
            line: 187,
            column: 4
          },
          end: {
            line: 202,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 188,
            column: 6
          },
          end: {
            line: 189,
            column: 28
          }
        }, {
          start: {
            line: 190,
            column: 6
          },
          end: {
            line: 191,
            column: 29
          }
        }, {
          start: {
            line: 192,
            column: 6
          },
          end: {
            line: 193,
            column: 29
          }
        }, {
          start: {
            line: 194,
            column: 6
          },
          end: {
            line: 195,
            column: 28
          }
        }, {
          start: {
            line: 196,
            column: 6
          },
          end: {
            line: 197,
            column: 29
          }
        }, {
          start: {
            line: 198,
            column: 6
          },
          end: {
            line: 199,
            column: 29
          }
        }, {
          start: {
            line: 200,
            column: 6
          },
          end: {
            line: 201,
            column: 54
          }
        }],
        line: 187
      },
      "8": {
        loc: {
          start: {
            line: 221,
            column: 4
          },
          end: {
            line: 223,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 221,
            column: 4
          },
          end: {
            line: 223,
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
        line: 221
      },
      "9": {
        loc: {
          start: {
            line: 227,
            column: 4
          },
          end: {
            line: 237,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 228,
            column: 6
          },
          end: {
            line: 228,
            column: 17
          }
        }, {
          start: {
            line: 229,
            column: 6
          },
          end: {
            line: 229,
            column: 18
          }
        }, {
          start: {
            line: 230,
            column: 6
          },
          end: {
            line: 230,
            column: 18
          }
        }, {
          start: {
            line: 231,
            column: 6
          },
          end: {
            line: 231,
            column: 17
          }
        }, {
          start: {
            line: 232,
            column: 6
          },
          end: {
            line: 232,
            column: 18
          }
        }, {
          start: {
            line: 233,
            column: 6
          },
          end: {
            line: 234,
            column: 20
          }
        }, {
          start: {
            line: 235,
            column: 6
          },
          end: {
            line: 236,
            column: 21
          }
        }],
        line: 227
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
      "71": 0
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
      "2": [0, 0],
      "3": [0, 0, 0, 0, 0, 0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0, 0, 0, 0, 0, 0],
      "8": [0, 0],
      "9": [0, 0, 0, 0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3c73e24f29cb9995bf3fa07fe1d00eea30f90465"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_mwupiiy3e = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_mwupiiy3e();
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* eslint no-bitwise: ["error", {"allow": [">>"]}] */
/**
 * A wrapper class to represent large XDR-encodable integers.
 *
 * This operates at a lower level than {@link ScInt} by forcing you to specify
 * the type / width / size in bits of the integer you're targeting, regardless
 * of the input value(s) you provide.
 *
 * @param {string}  type - force a specific data type. the type choices are:
 *    'i64', 'u64', 'i128', 'u128', 'i256', and 'u256' (default: the smallest
 *    one that fits the `value`) (see {@link XdrLargeInt.isType})
 * @param {number|bigint|string|Array<number|bigint|string>} values   a list of
 *    integer-like values interpreted in big-endian order
 */
var XdrLargeInt = exports.XdrLargeInt = /*#__PURE__*/function () {
  function XdrLargeInt(type, values) {
    _classCallCheck(this, XdrLargeInt);
    /** @type {xdr.LargeInt} */
    _defineProperty(this, "int", void 0);
    // child class of a jsXdr.LargeInt
    /** @type {string} */
    _defineProperty(this, "type", void 0);
    cov_mwupiiy3e().f[0]++;
    cov_mwupiiy3e().s[0]++;
    if (!(values instanceof Array)) {
      cov_mwupiiy3e().b[0][0]++;
      cov_mwupiiy3e().s[1]++;
      values = [values];
    } else {
      cov_mwupiiy3e().b[0][1]++;
    }

    // normalize values to one type
    cov_mwupiiy3e().s[2]++;
    values = values.map(function (i) {
      cov_mwupiiy3e().f[1]++;
      cov_mwupiiy3e().s[3]++;
      // micro-optimization to no-op on the likeliest input value:
      if (typeof i === 'bigint') {
        cov_mwupiiy3e().b[1][0]++;
        cov_mwupiiy3e().s[4]++;
        return i;
      } else {
        cov_mwupiiy3e().b[1][1]++;
      }
      cov_mwupiiy3e().s[5]++;
      if (i instanceof XdrLargeInt) {
        cov_mwupiiy3e().b[2][0]++;
        cov_mwupiiy3e().s[6]++;
        return i.toBigInt();
      } else {
        cov_mwupiiy3e().b[2][1]++;
      }
      cov_mwupiiy3e().s[7]++;
      return BigInt(i);
    });
    cov_mwupiiy3e().s[8]++;
    switch (type) {
      case 'i64':
        cov_mwupiiy3e().b[3][0]++;
        cov_mwupiiy3e().s[9]++;
        this["int"] = new _jsXdr.Hyper(values);
        cov_mwupiiy3e().s[10]++;
        break;
      case 'i128':
        cov_mwupiiy3e().b[3][1]++;
        cov_mwupiiy3e().s[11]++;
        this["int"] = new _int.Int128(values);
        cov_mwupiiy3e().s[12]++;
        break;
      case 'i256':
        cov_mwupiiy3e().b[3][2]++;
        cov_mwupiiy3e().s[13]++;
        this["int"] = new _int2.Int256(values);
        cov_mwupiiy3e().s[14]++;
        break;
      case 'u64':
        cov_mwupiiy3e().b[3][3]++;
        cov_mwupiiy3e().s[15]++;
        this["int"] = new _jsXdr.UnsignedHyper(values);
        cov_mwupiiy3e().s[16]++;
        break;
      case 'u128':
        cov_mwupiiy3e().b[3][4]++;
        cov_mwupiiy3e().s[17]++;
        this["int"] = new _uint.Uint128(values);
        cov_mwupiiy3e().s[18]++;
        break;
      case 'u256':
        cov_mwupiiy3e().b[3][5]++;
        cov_mwupiiy3e().s[19]++;
        this["int"] = new _uint2.Uint256(values);
        cov_mwupiiy3e().s[20]++;
        break;
      default:
        cov_mwupiiy3e().b[3][6]++;
        cov_mwupiiy3e().s[21]++;
        throw TypeError("invalid type: ".concat(type));
    }
    cov_mwupiiy3e().s[22]++;
    this.type = type;
  }

  /**
   * @returns {number}
   * @throws {RangeError} if the value can't fit into a Number
   */
  return _createClass(XdrLargeInt, [{
    key: "toNumber",
    value: function toNumber() {
      cov_mwupiiy3e().f[2]++;
      var bi = (cov_mwupiiy3e().s[23]++, this["int"].toBigInt());
      cov_mwupiiy3e().s[24]++;
      if ((cov_mwupiiy3e().b[5][0]++, bi > Number.MAX_SAFE_INTEGER) || (cov_mwupiiy3e().b[5][1]++, bi < Number.MIN_SAFE_INTEGER)) {
        cov_mwupiiy3e().b[4][0]++;
        cov_mwupiiy3e().s[25]++;
        throw RangeError("value ".concat(bi, " not in range for Number ") + "[".concat(Number.MAX_SAFE_INTEGER, ", ").concat(Number.MIN_SAFE_INTEGER, "]"));
      } else {
        cov_mwupiiy3e().b[4][1]++;
      }
      cov_mwupiiy3e().s[26]++;
      return Number(bi);
    }

    /** @returns {bigint} */
  }, {
    key: "toBigInt",
    value: function toBigInt() {
      cov_mwupiiy3e().f[3]++;
      cov_mwupiiy3e().s[27]++;
      return this["int"].toBigInt();
    }

    /** @returns {xdr.ScVal} the integer encoded with `ScValType = I64` */
  }, {
    key: "toI64",
    value: function toI64() {
      cov_mwupiiy3e().f[4]++;
      cov_mwupiiy3e().s[28]++;
      this._sizeCheck(64);
      var v = (cov_mwupiiy3e().s[29]++, this.toBigInt());
      cov_mwupiiy3e().s[30]++;
      if (BigInt.asIntN(64, v) !== v) {
        cov_mwupiiy3e().b[6][0]++;
        cov_mwupiiy3e().s[31]++;
        throw RangeError("value too large for i64: ".concat(v));
      } else {
        cov_mwupiiy3e().b[6][1]++;
      }
      cov_mwupiiy3e().s[32]++;
      return _xdr["default"].ScVal.scvI64(new _xdr["default"].Int64(v));
    }

    /** @returns {xdr.ScVal} the integer encoded with `ScValType = U64` */
  }, {
    key: "toU64",
    value: function toU64() {
      cov_mwupiiy3e().f[5]++;
      cov_mwupiiy3e().s[33]++;
      this._sizeCheck(64);
      cov_mwupiiy3e().s[34]++;
      return _xdr["default"].ScVal.scvU64(new _xdr["default"].Uint64(BigInt.asUintN(64, this.toBigInt())) // reiterpret as unsigned
      );
    }

    /**
     * @returns {xdr.ScVal} the integer encoded with `ScValType = I128`
     * @throws {RangeError} if the value cannot fit in 128 bits
     */
  }, {
    key: "toI128",
    value: function toI128() {
      cov_mwupiiy3e().f[6]++;
      cov_mwupiiy3e().s[35]++;
      this._sizeCheck(128);
      var v = (cov_mwupiiy3e().s[36]++, this["int"].toBigInt());
      var hi64 = (cov_mwupiiy3e().s[37]++, BigInt.asIntN(64, v >> 64n)); // encode top 64 w/ sign bit
      var lo64 = (cov_mwupiiy3e().s[38]++, BigInt.asUintN(64, v)); // grab btm 64, encode sign
      cov_mwupiiy3e().s[39]++;
      return _xdr["default"].ScVal.scvI128(new _xdr["default"].Int128Parts({
        hi: new _xdr["default"].Int64(hi64),
        lo: new _xdr["default"].Uint64(lo64)
      }));
    }

    /**
     * @returns {xdr.ScVal} the integer encoded with `ScValType = U128`
     * @throws {RangeError} if the value cannot fit in 128 bits
     */
  }, {
    key: "toU128",
    value: function toU128() {
      cov_mwupiiy3e().f[7]++;
      cov_mwupiiy3e().s[40]++;
      this._sizeCheck(128);
      var v = (cov_mwupiiy3e().s[41]++, this["int"].toBigInt());
      cov_mwupiiy3e().s[42]++;
      return _xdr["default"].ScVal.scvU128(new _xdr["default"].UInt128Parts({
        hi: new _xdr["default"].Uint64(BigInt.asUintN(64, v >> 64n)),
        lo: new _xdr["default"].Uint64(BigInt.asUintN(64, v))
      }));
    }

    /** @returns {xdr.ScVal} the integer encoded with `ScValType = I256` */
  }, {
    key: "toI256",
    value: function toI256() {
      cov_mwupiiy3e().f[8]++;
      var v = (cov_mwupiiy3e().s[43]++, this["int"].toBigInt());
      var hiHi64 = (cov_mwupiiy3e().s[44]++, BigInt.asIntN(64, v >> 192n)); // keep sign bit
      var hiLo64 = (cov_mwupiiy3e().s[45]++, BigInt.asUintN(64, v >> 128n));
      var loHi64 = (cov_mwupiiy3e().s[46]++, BigInt.asUintN(64, v >> 64n));
      var loLo64 = (cov_mwupiiy3e().s[47]++, BigInt.asUintN(64, v));
      cov_mwupiiy3e().s[48]++;
      return _xdr["default"].ScVal.scvI256(new _xdr["default"].Int256Parts({
        hiHi: new _xdr["default"].Int64(hiHi64),
        hiLo: new _xdr["default"].Uint64(hiLo64),
        loHi: new _xdr["default"].Uint64(loHi64),
        loLo: new _xdr["default"].Uint64(loLo64)
      }));
    }

    /** @returns {xdr.ScVal} the integer encoded with `ScValType = U256` */
  }, {
    key: "toU256",
    value: function toU256() {
      cov_mwupiiy3e().f[9]++;
      var v = (cov_mwupiiy3e().s[49]++, this["int"].toBigInt());
      var hiHi64 = (cov_mwupiiy3e().s[50]++, BigInt.asUintN(64, v >> 192n)); // encode sign bit
      var hiLo64 = (cov_mwupiiy3e().s[51]++, BigInt.asUintN(64, v >> 128n));
      var loHi64 = (cov_mwupiiy3e().s[52]++, BigInt.asUintN(64, v >> 64n));
      var loLo64 = (cov_mwupiiy3e().s[53]++, BigInt.asUintN(64, v));
      cov_mwupiiy3e().s[54]++;
      return _xdr["default"].ScVal.scvU256(new _xdr["default"].UInt256Parts({
        hiHi: new _xdr["default"].Uint64(hiHi64),
        hiLo: new _xdr["default"].Uint64(hiLo64),
        loHi: new _xdr["default"].Uint64(loHi64),
        loLo: new _xdr["default"].Uint64(loLo64)
      }));
    }

    /** @returns {xdr.ScVal} the smallest interpretation of the stored value */
  }, {
    key: "toScVal",
    value: function toScVal() {
      cov_mwupiiy3e().f[10]++;
      cov_mwupiiy3e().s[55]++;
      switch (this.type) {
        case 'i64':
          cov_mwupiiy3e().b[7][0]++;
          cov_mwupiiy3e().s[56]++;
          return this.toI64();
        case 'i128':
          cov_mwupiiy3e().b[7][1]++;
          cov_mwupiiy3e().s[57]++;
          return this.toI128();
        case 'i256':
          cov_mwupiiy3e().b[7][2]++;
          cov_mwupiiy3e().s[58]++;
          return this.toI256();
        case 'u64':
          cov_mwupiiy3e().b[7][3]++;
          cov_mwupiiy3e().s[59]++;
          return this.toU64();
        case 'u128':
          cov_mwupiiy3e().b[7][4]++;
          cov_mwupiiy3e().s[60]++;
          return this.toU128();
        case 'u256':
          cov_mwupiiy3e().b[7][5]++;
          cov_mwupiiy3e().s[61]++;
          return this.toU256();
        default:
          cov_mwupiiy3e().b[7][6]++;
          cov_mwupiiy3e().s[62]++;
          throw TypeError("invalid type: ".concat(this.type));
      }
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      cov_mwupiiy3e().f[11]++;
      cov_mwupiiy3e().s[63]++;
      return this["int"].valueOf();
    }
  }, {
    key: "toString",
    value: function toString() {
      cov_mwupiiy3e().f[12]++;
      cov_mwupiiy3e().s[64]++;
      return this["int"].toString();
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      cov_mwupiiy3e().f[13]++;
      cov_mwupiiy3e().s[65]++;
      return {
        value: this.toBigInt().toString(),
        type: this.type
      };
    }
  }, {
    key: "_sizeCheck",
    value: function _sizeCheck(bits) {
      cov_mwupiiy3e().f[14]++;
      cov_mwupiiy3e().s[66]++;
      if (this["int"].size > bits) {
        cov_mwupiiy3e().b[8][0]++;
        cov_mwupiiy3e().s[67]++;
        throw RangeError("value too large for ".concat(bits, " bits (").concat(this.type, ")"));
      } else {
        cov_mwupiiy3e().b[8][1]++;
      }
    }
  }], [{
    key: "isType",
    value: function isType(type) {
      cov_mwupiiy3e().f[15]++;
      cov_mwupiiy3e().s[68]++;
      switch (type) {
        case 'i64':
          cov_mwupiiy3e().b[9][0]++;
        case 'i128':
          cov_mwupiiy3e().b[9][1]++;
        case 'i256':
          cov_mwupiiy3e().b[9][2]++;
        case 'u64':
          cov_mwupiiy3e().b[9][3]++;
        case 'u128':
          cov_mwupiiy3e().b[9][4]++;
        case 'u256':
          cov_mwupiiy3e().b[9][5]++;
          cov_mwupiiy3e().s[69]++;
          return true;
        default:
          cov_mwupiiy3e().b[9][6]++;
          cov_mwupiiy3e().s[70]++;
          return false;
      }
    }

    /**
     * Convert the raw `ScValType` string (e.g. 'scvI128', generated by the XDR)
     * to a type description for {@link XdrLargeInt} construction (e.g. 'i128')
     *
     * @param {string} scvType  the `xdr.ScValType` as a string
     * @returns {string} a suitable equivalent type to construct this object
     */
  }, {
    key: "getType",
    value: function getType(scvType) {
      cov_mwupiiy3e().f[16]++;
      cov_mwupiiy3e().s[71]++;
      return scvType.slice(3).toLowerCase();
    }
  }]);
}();