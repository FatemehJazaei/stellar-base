"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Asset = void 0;
var _util = require("./util/util");
var _xdr = _interopRequireDefault(require("./xdr"));
var _keypair = require("./keypair");
var _strkey = require("./strkey");
var _hashing = require("./hashing");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_26qmmq3po1() {
  var path = "/mnt/g/stellar-base/src/asset.js";
  var hash = "2e1737a708ebfe71c626b4ceae98a829463c85f2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/asset.js",
    statementMap: {
      "0": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 24,
          column: 5
        }
      },
      "1": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 23,
          column: 8
        }
      },
      "2": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 27,
          column: 5
        }
      },
      "3": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 26,
          column: 47
        }
      },
      "4": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 30,
          column: 5
        }
      },
      "5": {
        start: {
          line: 29,
          column: 6
        },
        end: {
          line: 29,
          column: 43
        }
      },
      "6": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 37,
          column: 5
        }
      },
      "7": {
        start: {
          line: 34,
          column: 6
        },
        end: {
          line: 34,
          column: 24
        }
      },
      "8": {
        start: {
          line: 36,
          column: 6
        },
        end: {
          line: 36,
          column: 23
        }
      },
      "9": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 39,
          column: 25
        }
      },
      "10": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 28
        }
      },
      "11": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 72,
          column: 5
        }
      },
      "12": {
        start: {
          line: 61,
          column: 8
        },
        end: {
          line: 61,
          column: 29
        }
      },
      "13": {
        start: {
          line: 63,
          column: 8
        },
        end: {
          line: 63,
          column: 36
        }
      },
      "14": {
        start: {
          line: 66,
          column: 8
        },
        end: {
          line: 66,
          column: 45
        }
      },
      "15": {
        start: {
          line: 67,
          column: 8
        },
        end: {
          line: 67,
          column: 78
        }
      },
      "16": {
        start: {
          line: 68,
          column: 8
        },
        end: {
          line: 68,
          column: 47
        }
      },
      "17": {
        start: {
          line: 69,
          column: 8
        },
        end: {
          line: 69,
          column: 38
        }
      },
      "18": {
        start: {
          line: 71,
          column: 8
        },
        end: {
          line: 71,
          column: 73
        }
      },
      "19": {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 80,
          column: 40
        }
      },
      "20": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 88,
          column: 51
        }
      },
      "21": {
        start: {
          line: 96,
          column: 4
        },
        end: {
          line: 96,
          column: 49
        }
      },
      "22": {
        start: {
          line: 112,
          column: 22
        },
        end: {
          line: 112,
          column: 58
        }
      },
      "23": {
        start: {
          line: 113,
          column: 21
        },
        end: {
          line: 120,
          column: 5
        }
      },
      "24": {
        start: {
          line: 122,
          column: 4
        },
        end: {
          line: 122,
          column: 57
        }
      },
      "25": {
        start: {
          line: 131,
          column: 4
        },
        end: {
          line: 133,
          column: 5
        }
      },
      "26": {
        start: {
          line: 132,
          column: 6
        },
        end: {
          line: 132,
          column: 40
        }
      },
      "27": {
        start: {
          line: 137,
          column: 4
        },
        end: {
          line: 143,
          column: 5
        }
      },
      "28": {
        start: {
          line: 138,
          column: 6
        },
        end: {
          line: 138,
          column: 30
        }
      },
      "29": {
        start: {
          line: 139,
          column: 6
        },
        end: {
          line: 139,
          column: 49
        }
      },
      "30": {
        start: {
          line: 141,
          column: 6
        },
        end: {
          line: 141,
          column: 31
        }
      },
      "31": {
        start: {
          line: 142,
          column: 6
        },
        end: {
          line: 142,
          column: 50
        }
      },
      "32": {
        start: {
          line: 146,
          column: 22
        },
        end: {
          line: 146,
          column: 52
        }
      },
      "33": {
        start: {
          line: 147,
          column: 23
        },
        end: {
          line: 147,
          column: 56
        }
      },
      "34": {
        start: {
          line: 150,
          column: 22
        },
        end: {
          line: 153,
          column: 6
        }
      },
      "35": {
        start: {
          line: 155,
          column: 4
        },
        end: {
          line: 155,
          column: 50
        }
      },
      "36": {
        start: {
          line: 162,
          column: 4
        },
        end: {
          line: 164,
          column: 5
        }
      },
      "37": {
        start: {
          line: 163,
          column: 6
        },
        end: {
          line: 163,
          column: 23
        }
      },
      "38": {
        start: {
          line: 165,
          column: 4
        },
        end: {
          line: 165,
          column: 29
        }
      },
      "39": {
        start: {
          line: 172,
          column: 4
        },
        end: {
          line: 174,
          column: 5
        }
      },
      "40": {
        start: {
          line: 173,
          column: 6
        },
        end: {
          line: 173,
          column: 23
        }
      },
      "41": {
        start: {
          line: 175,
          column: 4
        },
        end: {
          line: 175,
          column: 31
        }
      },
      "42": {
        start: {
          line: 188,
          column: 4
        },
        end: {
          line: 197,
          column: 5
        }
      },
      "43": {
        start: {
          line: 190,
          column: 8
        },
        end: {
          line: 190,
          column: 24
        }
      },
      "44": {
        start: {
          line: 192,
          column: 8
        },
        end: {
          line: 192,
          column: 34
        }
      },
      "45": {
        start: {
          line: 194,
          column: 8
        },
        end: {
          line: 194,
          column: 35
        }
      },
      "46": {
        start: {
          line: 196,
          column: 8
        },
        end: {
          line: 196,
          column: 25
        }
      },
      "47": {
        start: {
          line: 204,
          column: 4
        },
        end: {
          line: 206,
          column: 5
        }
      },
      "48": {
        start: {
          line: 205,
          column: 6
        },
        end: {
          line: 205,
          column: 45
        }
      },
      "49": {
        start: {
          line: 208,
          column: 4
        },
        end: {
          line: 210,
          column: 5
        }
      },
      "50": {
        start: {
          line: 209,
          column: 6
        },
        end: {
          line: 209,
          column: 54
        }
      },
      "51": {
        start: {
          line: 212,
          column: 4
        },
        end: {
          line: 212,
          column: 53
        }
      },
      "52": {
        start: {
          line: 219,
          column: 4
        },
        end: {
          line: 219,
          column: 24
        }
      },
      "53": {
        start: {
          line: 227,
          column: 4
        },
        end: {
          line: 227,
          column: 78
        }
      },
      "54": {
        start: {
          line: 231,
          column: 4
        },
        end: {
          line: 233,
          column: 5
        }
      },
      "55": {
        start: {
          line: 232,
          column: 6
        },
        end: {
          line: 232,
          column: 22
        }
      },
      "56": {
        start: {
          line: 235,
          column: 4
        },
        end: {
          line: 235,
          column: 51
        }
      },
      "57": {
        start: {
          line: 253,
          column: 4
        },
        end: {
          line: 255,
          column: 5
        }
      },
      "58": {
        start: {
          line: 254,
          column: 6
        },
        end: {
          line: 254,
          column: 43
        }
      },
      "59": {
        start: {
          line: 256,
          column: 4
        },
        end: {
          line: 258,
          column: 5
        }
      },
      "60": {
        start: {
          line: 257,
          column: 6
        },
        end: {
          line: 257,
          column: 43
        }
      },
      "61": {
        start: {
          line: 260,
          column: 4
        },
        end: {
          line: 262,
          column: 5
        }
      },
      "62": {
        start: {
          line: 261,
          column: 6
        },
        end: {
          line: 261,
          column: 15
        }
      },
      "63": {
        start: {
          line: 265,
          column: 21
        },
        end: {
          line: 265,
          column: 51
        }
      },
      "64": {
        start: {
          line: 266,
          column: 21
        },
        end: {
          line: 266,
          column: 51
        }
      },
      "65": {
        start: {
          line: 267,
          column: 4
        },
        end: {
          line: 269,
          column: 5
        }
      },
      "66": {
        start: {
          line: 268,
          column: 6
        },
        end: {
          line: 268,
          column: 42
        }
      },
      "67": {
        start: {
          line: 272,
          column: 19
        },
        end: {
          line: 272,
          column: 67
        }
      },
      "68": {
        start: {
          line: 273,
          column: 4
        },
        end: {
          line: 275,
          column: 5
        }
      },
      "69": {
        start: {
          line: 274,
          column: 6
        },
        end: {
          line: 274,
          column: 20
        }
      },
      "70": {
        start: {
          line: 278,
          column: 4
        },
        end: {
          line: 278,
          column: 64
        }
      },
      "71": {
        start: {
          line: 293,
          column: 2
        },
        end: {
          line: 293,
          column: 74
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        },
        loc: {
          start: {
            line: 19,
            column: 28
          },
          end: {
            line: 40,
            column: 3
          }
        },
        line: 19
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 46,
            column: 2
          },
          end: {
            line: 46,
            column: 3
          }
        },
        loc: {
          start: {
            line: 46,
            column: 18
          },
          end: {
            line: 48,
            column: 3
          }
        },
        line: 46
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 55,
            column: 2
          },
          end: {
            line: 55,
            column: 3
          }
        },
        loc: {
          start: {
            line: 55,
            column: 33
          },
          end: {
            line: 73,
            column: 3
          }
        },
        line: 55
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 79,
            column: 2
          },
          end: {
            line: 79,
            column: 3
          }
        },
        loc: {
          start: {
            line: 79,
            column: 16
          },
          end: {
            line: 81,
            column: 3
          }
        },
        line: 79
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 87,
            column: 2
          },
          end: {
            line: 87,
            column: 3
          }
        },
        loc: {
          start: {
            line: 87,
            column: 27
          },
          end: {
            line: 89,
            column: 3
          }
        },
        line: 87
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 95,
            column: 2
          },
          end: {
            line: 95,
            column: 3
          }
        },
        loc: {
          start: {
            line: 95,
            column: 25
          },
          end: {
            line: 97,
            column: 3
          }
        },
        line: 95
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 111,
            column: 2
          },
          end: {
            line: 111,
            column: 3
          }
        },
        loc: {
          start: {
            line: 111,
            column: 32
          },
          end: {
            line: 123,
            column: 3
          }
        },
        line: 111
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 130,
            column: 2
          },
          end: {
            line: 130,
            column: 3
          }
        },
        loc: {
          start: {
            line: 130,
            column: 37
          },
          end: {
            line: 156,
            column: 3
          }
        },
        line: 130
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 161,
            column: 2
          },
          end: {
            line: 161,
            column: 3
          }
        },
        loc: {
          start: {
            line: 161,
            column: 12
          },
          end: {
            line: 166,
            column: 3
          }
        },
        line: 161
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 171,
            column: 2
          },
          end: {
            line: 171,
            column: 3
          }
        },
        loc: {
          start: {
            line: 171,
            column: 14
          },
          end: {
            line: 176,
            column: 3
          }
        },
        line: 171
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 187,
            column: 2
          },
          end: {
            line: 187,
            column: 3
          }
        },
        loc: {
          start: {
            line: 187,
            column: 17
          },
          end: {
            line: 198,
            column: 3
          }
        },
        line: 187
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 203,
            column: 2
          },
          end: {
            line: 203,
            column: 3
          }
        },
        loc: {
          start: {
            line: 203,
            column: 20
          },
          end: {
            line: 213,
            column: 3
          }
        },
        line: 203
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 218,
            column: 2
          },
          end: {
            line: 218,
            column: 3
          }
        },
        loc: {
          start: {
            line: 218,
            column: 13
          },
          end: {
            line: 220,
            column: 3
          }
        },
        line: 218
      },
      "13": {
        name: "(anonymous_13)",
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
            column: 16
          },
          end: {
            line: 228,
            column: 3
          }
        },
        line: 226
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 230,
            column: 2
          },
          end: {
            line: 230,
            column: 3
          }
        },
        loc: {
          start: {
            line: 230,
            column: 13
          },
          end: {
            line: 236,
            column: 3
          }
        },
        line: 230
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 252,
            column: 2
          },
          end: {
            line: 252,
            column: 3
          }
        },
        loc: {
          start: {
            line: 252,
            column: 33
          },
          end: {
            line: 279,
            column: 3
          }
        },
        line: 252
      },
      "16": {
        name: "asciiCompare",
        decl: {
          start: {
            line: 292,
            column: 9
          },
          end: {
            line: 292,
            column: 21
          }
        },
        loc: {
          start: {
            line: 292,
            column: 28
          },
          end: {
            line: 294,
            column: 1
          }
        },
        line: 292
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 24,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 24,
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
        line: 20
      },
      "1": {
        loc: {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 27,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 27,
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
        line: 25
      },
      "2": {
        loc: {
          start: {
            line: 25,
            column: 8
          },
          end: {
            line: 25,
            column: 55
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 25,
            column: 8
          },
          end: {
            line: 25,
            column: 44
          }
        }, {
          start: {
            line: 25,
            column: 48
          },
          end: {
            line: 25,
            column: 55
          }
        }],
        line: 25
      },
      "3": {
        loc: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 30,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 30,
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
        line: 28
      },
      "4": {
        loc: {
          start: {
            line: 28,
            column: 8
          },
          end: {
            line: 28,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 28,
            column: 8
          },
          end: {
            line: 28,
            column: 14
          }
        }, {
          start: {
            line: 28,
            column: 18
          },
          end: {
            line: 28,
            column: 60
          }
        }],
        line: 28
      },
      "5": {
        loc: {
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 37,
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
            line: 37,
            column: 5
          }
        }, {
          start: {
            line: 35,
            column: 11
          },
          end: {
            line: 37,
            column: 5
          }
        }],
        line: 32
      },
      "6": {
        loc: {
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 72,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 60,
            column: 6
          },
          end: {
            line: 61,
            column: 29
          }
        }, {
          start: {
            line: 62,
            column: 6
          },
          end: {
            line: 63,
            column: 36
          }
        }, {
          start: {
            line: 65,
            column: 6
          },
          end: {
            line: 69,
            column: 38
          }
        }, {
          start: {
            line: 70,
            column: 6
          },
          end: {
            line: 71,
            column: 73
          }
        }],
        line: 59
      },
      "7": {
        loc: {
          start: {
            line: 66,
            column: 15
          },
          end: {
            line: 66,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 66,
            column: 15
          },
          end: {
            line: 66,
            column: 19
          }
        }, {
          start: {
            line: 66,
            column: 23
          },
          end: {
            line: 66,
            column: 44
          }
        }],
        line: 66
      },
      "8": {
        loc: {
          start: {
            line: 130,
            column: 15
          },
          end: {
            line: 130,
            column: 35
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 130,
            column: 26
          },
          end: {
            line: 130,
            column: 35
          }
        }],
        line: 130
      },
      "9": {
        loc: {
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 133,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 133,
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
        line: 131
      },
      "10": {
        loc: {
          start: {
            line: 137,
            column: 4
          },
          end: {
            line: 143,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 137,
            column: 4
          },
          end: {
            line: 143,
            column: 5
          }
        }, {
          start: {
            line: 140,
            column: 11
          },
          end: {
            line: 143,
            column: 5
          }
        }],
        line: 137
      },
      "11": {
        loc: {
          start: {
            line: 146,
            column: 22
          },
          end: {
            line: 146,
            column: 52
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 146,
            column: 46
          },
          end: {
            line: 146,
            column: 47
          }
        }, {
          start: {
            line: 146,
            column: 50
          },
          end: {
            line: 146,
            column: 52
          }
        }],
        line: 146
      },
      "12": {
        loc: {
          start: {
            line: 162,
            column: 4
          },
          end: {
            line: 164,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 162,
            column: 4
          },
          end: {
            line: 164,
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
        line: 162
      },
      "13": {
        loc: {
          start: {
            line: 172,
            column: 4
          },
          end: {
            line: 174,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 172,
            column: 4
          },
          end: {
            line: 174,
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
        line: 172
      },
      "14": {
        loc: {
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 197,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 189,
            column: 6
          },
          end: {
            line: 190,
            column: 24
          }
        }, {
          start: {
            line: 191,
            column: 6
          },
          end: {
            line: 192,
            column: 34
          }
        }, {
          start: {
            line: 193,
            column: 6
          },
          end: {
            line: 194,
            column: 35
          }
        }, {
          start: {
            line: 195,
            column: 6
          },
          end: {
            line: 196,
            column: 25
          }
        }],
        line: 188
      },
      "15": {
        loc: {
          start: {
            line: 204,
            column: 4
          },
          end: {
            line: 206,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 204,
            column: 4
          },
          end: {
            line: 206,
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
        line: 204
      },
      "16": {
        loc: {
          start: {
            line: 208,
            column: 4
          },
          end: {
            line: 210,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 208,
            column: 4
          },
          end: {
            line: 210,
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
        line: 208
      },
      "17": {
        loc: {
          start: {
            line: 227,
            column: 11
          },
          end: {
            line: 227,
            column: 77
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 227,
            column: 11
          },
          end: {
            line: 227,
            column: 40
          }
        }, {
          start: {
            line: 227,
            column: 44
          },
          end: {
            line: 227,
            column: 77
          }
        }],
        line: 227
      },
      "18": {
        loc: {
          start: {
            line: 231,
            column: 4
          },
          end: {
            line: 233,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 231,
            column: 4
          },
          end: {
            line: 233,
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
        line: 231
      },
      "19": {
        loc: {
          start: {
            line: 253,
            column: 4
          },
          end: {
            line: 255,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 253,
            column: 4
          },
          end: {
            line: 255,
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
        line: 253
      },
      "20": {
        loc: {
          start: {
            line: 253,
            column: 8
          },
          end: {
            line: 253,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 253,
            column: 8
          },
          end: {
            line: 253,
            column: 15
          }
        }, {
          start: {
            line: 253,
            column: 19
          },
          end: {
            line: 253,
            column: 45
          }
        }],
        line: 253
      },
      "21": {
        loc: {
          start: {
            line: 256,
            column: 4
          },
          end: {
            line: 258,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 256,
            column: 4
          },
          end: {
            line: 258,
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
        line: 256
      },
      "22": {
        loc: {
          start: {
            line: 256,
            column: 8
          },
          end: {
            line: 256,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 256,
            column: 8
          },
          end: {
            line: 256,
            column: 15
          }
        }, {
          start: {
            line: 256,
            column: 19
          },
          end: {
            line: 256,
            column: 45
          }
        }],
        line: 256
      },
      "23": {
        loc: {
          start: {
            line: 260,
            column: 4
          },
          end: {
            line: 262,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 260,
            column: 4
          },
          end: {
            line: 262,
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
        line: 260
      },
      "24": {
        loc: {
          start: {
            line: 267,
            column: 4
          },
          end: {
            line: 269,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 267,
            column: 4
          },
          end: {
            line: 269,
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
        line: 267
      },
      "25": {
        loc: {
          start: {
            line: 268,
            column: 13
          },
          end: {
            line: 268,
            column: 41
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 268,
            column: 35
          },
          end: {
            line: 268,
            column: 37
          }
        }, {
          start: {
            line: 268,
            column: 40
          },
          end: {
            line: 268,
            column: 41
          }
        }],
        line: 268
      },
      "26": {
        loc: {
          start: {
            line: 273,
            column: 4
          },
          end: {
            line: 275,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 273,
            column: 4
          },
          end: {
            line: 275,
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
        line: 273
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
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0, 0, 0],
      "7": [0, 0],
      "8": [0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0, 0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2e1737a708ebfe71c626b4ceae98a829463c85f2"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_26qmmq3po1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_26qmmq3po1();
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Asset class represents an asset, either the native asset (`XLM`)
 * or an asset code / issuer account ID pair.
 *
 * An asset code describes an asset code and issuer pair. In the case of the native
 * asset XLM, the issuer will be null.
 *
 * @constructor
 * @param {string} code - The asset code.
 * @param {string} issuer - The account ID of the issuer.
 */
var Asset = exports.Asset = /*#__PURE__*/function () {
  function Asset(code, issuer) {
    _classCallCheck(this, Asset);
    cov_26qmmq3po1().f[0]++;
    cov_26qmmq3po1().s[0]++;
    if (!/^[a-zA-Z0-9]{1,12}$/.test(code)) {
      cov_26qmmq3po1().b[0][0]++;
      cov_26qmmq3po1().s[1]++;
      throw new Error('Asset code is invalid (maximum alphanumeric, 12 characters at max)');
    } else {
      cov_26qmmq3po1().b[0][1]++;
    }
    cov_26qmmq3po1().s[2]++;
    if ((cov_26qmmq3po1().b[2][0]++, String(code).toLowerCase() !== 'xlm') && (cov_26qmmq3po1().b[2][1]++, !issuer)) {
      cov_26qmmq3po1().b[1][0]++;
      cov_26qmmq3po1().s[3]++;
      throw new Error('Issuer cannot be null');
    } else {
      cov_26qmmq3po1().b[1][1]++;
    }
    cov_26qmmq3po1().s[4]++;
    if ((cov_26qmmq3po1().b[4][0]++, issuer) && (cov_26qmmq3po1().b[4][1]++, !_strkey.StrKey.isValidDilithium2PublicKey(issuer))) {
      cov_26qmmq3po1().b[3][0]++;
      cov_26qmmq3po1().s[5]++;
      throw new Error('Issuer is invalid');
    } else {
      cov_26qmmq3po1().b[3][1]++;
    }
    cov_26qmmq3po1().s[6]++;
    if (String(code).toLowerCase() === 'xlm') {
      cov_26qmmq3po1().b[5][0]++;
      cov_26qmmq3po1().s[7]++;
      // transform all xLM, Xlm, etc. variants -> XLM
      this.code = 'XLM';
    } else {
      cov_26qmmq3po1().b[5][1]++;
      cov_26qmmq3po1().s[8]++;
      this.code = code;
    }
    cov_26qmmq3po1().s[9]++;
    this.issuer = issuer;
  }

  /**
   * Returns an asset object for the native asset.
   * @Return {Asset}
   */
  return _createClass(Asset, [{
    key: "toXDRObject",
    value:
    /**
     * Returns the xdr.Asset object for this asset.
     * @returns {xdr.Asset} XDR asset object
     */
    function toXDRObject() {
      cov_26qmmq3po1().f[3]++;
      cov_26qmmq3po1().s[19]++;
      return this._toXDRObject(_xdr["default"].Asset);
    }

    /**
     * Returns the xdr.ChangeTrustAsset object for this asset.
     * @returns {xdr.ChangeTrustAsset} XDR asset object
     */
  }, {
    key: "toChangeTrustXDRObject",
    value: function toChangeTrustXDRObject() {
      cov_26qmmq3po1().f[4]++;
      cov_26qmmq3po1().s[20]++;
      return this._toXDRObject(_xdr["default"].ChangeTrustAsset);
    }

    /**
     * Returns the xdr.TrustLineAsset object for this asset.
     * @returns {xdr.TrustLineAsset} XDR asset object
     */
  }, {
    key: "toTrustLineXDRObject",
    value: function toTrustLineXDRObject() {
      cov_26qmmq3po1().f[5]++;
      cov_26qmmq3po1().s[21]++;
      return this._toXDRObject(_xdr["default"].TrustLineAsset);
    }

    /**
     * Returns the would-be contract ID (`C...` format) for this asset on a given
     * network.
     *
     * @param {string}    networkPassphrase   indicates which network the contract
     *    ID should refer to, since every network will have a unique ID for the
     *    same contract (see {@link Networks} for options)
     *
     * @returns {string}  the strkey-encoded (`C...`) contract ID for this asset
     *
     * @warning This makes no guarantee that this contract actually *exists*.
     */
  }, {
    key: "contractId",
    value: function contractId(networkPassphrase) {
      cov_26qmmq3po1().f[6]++;
      var networkId = (cov_26qmmq3po1().s[22]++, (0, _hashing.hash)(Buffer.from(networkPassphrase)));
      var preimage = (cov_26qmmq3po1().s[23]++, _xdr["default"].HashIdPreimage.envelopeTypeContractId(new _xdr["default"].HashIdPreimageContractId({
        networkId: networkId,
        contractIdPreimage: _xdr["default"].ContractIdPreimage.contractIdPreimageFromAsset(this.toXDRObject())
      })));
      cov_26qmmq3po1().s[24]++;
      return _strkey.StrKey.encodeContract((0, _hashing.hash)(preimage.toXDR()));
    }

    /**
     * Returns the xdr object for this asset.
     * @param {xdr.Asset | xdr.ChangeTrustAsset} xdrAsset - The asset xdr object.
     * @returns {xdr.Asset | xdr.ChangeTrustAsset | xdr.TrustLineAsset} XDR Asset object
     */
  }, {
    key: "_toXDRObject",
    value: function _toXDRObject() {
      var xdrAsset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_26qmmq3po1().b[8][0]++, _xdr["default"].Asset);
      cov_26qmmq3po1().f[7]++;
      cov_26qmmq3po1().s[25]++;
      if (this.isNative()) {
        cov_26qmmq3po1().b[9][0]++;
        cov_26qmmq3po1().s[26]++;
        return xdrAsset.assetTypeNative();
      } else {
        cov_26qmmq3po1().b[9][1]++;
      }
      var xdrType;
      var xdrTypeString;
      cov_26qmmq3po1().s[27]++;
      if (this.code.length <= 4) {
        cov_26qmmq3po1().b[10][0]++;
        cov_26qmmq3po1().s[28]++;
        xdrType = _xdr["default"].AlphaNum4;
        cov_26qmmq3po1().s[29]++;
        xdrTypeString = 'assetTypeCreditAlphanum4';
      } else {
        cov_26qmmq3po1().b[10][1]++;
        cov_26qmmq3po1().s[30]++;
        xdrType = _xdr["default"].AlphaNum12;
        cov_26qmmq3po1().s[31]++;
        xdrTypeString = 'assetTypeCreditAlphanum12';
      }

      // pad code with null bytes if necessary
      var padLength = (cov_26qmmq3po1().s[32]++, this.code.length <= 4 ? (cov_26qmmq3po1().b[11][0]++, 4) : (cov_26qmmq3po1().b[11][1]++, 12));
      var paddedCode = (cov_26qmmq3po1().s[33]++, this.code.padEnd(padLength, '\0'));

      // eslint-disable-next-line new-cap
      var assetType = (cov_26qmmq3po1().s[34]++, new xdrType({
        assetCode: paddedCode,
        issuer: _keypair.Keypair.fromPublicKey(this.issuer).xdrAccountId()
      }));
      cov_26qmmq3po1().s[35]++;
      return new xdrAsset(xdrTypeString, assetType);
    }

    /**
     * @returns {string} Asset code
     */
  }, {
    key: "getCode",
    value: function getCode() {
      cov_26qmmq3po1().f[8]++;
      cov_26qmmq3po1().s[36]++;
      if (this.code === undefined) {
        cov_26qmmq3po1().b[12][0]++;
        cov_26qmmq3po1().s[37]++;
        return undefined;
      } else {
        cov_26qmmq3po1().b[12][1]++;
      }
      cov_26qmmq3po1().s[38]++;
      return String(this.code);
    }

    /**
     * @returns {string} Asset issuer
     */
  }, {
    key: "getIssuer",
    value: function getIssuer() {
      cov_26qmmq3po1().f[9]++;
      cov_26qmmq3po1().s[39]++;
      if (this.issuer === undefined) {
        cov_26qmmq3po1().b[13][0]++;
        cov_26qmmq3po1().s[40]++;
        return undefined;
      } else {
        cov_26qmmq3po1().b[13][1]++;
      }
      cov_26qmmq3po1().s[41]++;
      return String(this.issuer);
    }

    /**
     * @see [Assets concept](https://developers.stellar.org/docs/glossary/assets/)
     * @returns {string} Asset type. Can be one of following types:
     *
     *  - `native`,
     *  - `credit_alphanum4`,
     *  - `credit_alphanum12`, or
     *  - `unknown` as the error case (which should never occur)
     */
  }, {
    key: "getAssetType",
    value: function getAssetType() {
      cov_26qmmq3po1().f[10]++;
      cov_26qmmq3po1().s[42]++;
      switch (this.getRawAssetType().value) {
        case _xdr["default"].AssetType.assetTypeNative().value:
          cov_26qmmq3po1().b[14][0]++;
          cov_26qmmq3po1().s[43]++;
          return 'native';
        case _xdr["default"].AssetType.assetTypeCreditAlphanum4().value:
          cov_26qmmq3po1().b[14][1]++;
          cov_26qmmq3po1().s[44]++;
          return 'credit_alphanum4';
        case _xdr["default"].AssetType.assetTypeCreditAlphanum12().value:
          cov_26qmmq3po1().b[14][2]++;
          cov_26qmmq3po1().s[45]++;
          return 'credit_alphanum12';
        default:
          cov_26qmmq3po1().b[14][3]++;
          cov_26qmmq3po1().s[46]++;
          return 'unknown';
      }
    }

    /**
     * @returns {xdr.AssetType}  the raw XDR representation of the asset type
     */
  }, {
    key: "getRawAssetType",
    value: function getRawAssetType() {
      cov_26qmmq3po1().f[11]++;
      cov_26qmmq3po1().s[47]++;
      if (this.isNative()) {
        cov_26qmmq3po1().b[15][0]++;
        cov_26qmmq3po1().s[48]++;
        return _xdr["default"].AssetType.assetTypeNative();
      } else {
        cov_26qmmq3po1().b[15][1]++;
      }
      cov_26qmmq3po1().s[49]++;
      if (this.code.length <= 4) {
        cov_26qmmq3po1().b[16][0]++;
        cov_26qmmq3po1().s[50]++;
        return _xdr["default"].AssetType.assetTypeCreditAlphanum4();
      } else {
        cov_26qmmq3po1().b[16][1]++;
      }
      cov_26qmmq3po1().s[51]++;
      return _xdr["default"].AssetType.assetTypeCreditAlphanum12();
    }

    /**
     * @returns {boolean}  true if this asset object is the native asset.
     */
  }, {
    key: "isNative",
    value: function isNative() {
      cov_26qmmq3po1().f[12]++;
      cov_26qmmq3po1().s[52]++;
      return !this.issuer;
    }

    /**
     * @param {Asset} asset Asset to compare
     * @returns {boolean} true if this asset equals the given asset.
     */
  }, {
    key: "equals",
    value: function equals(asset) {
      cov_26qmmq3po1().f[13]++;
      cov_26qmmq3po1().s[53]++;
      return (cov_26qmmq3po1().b[17][0]++, this.code === asset.getCode()) && (cov_26qmmq3po1().b[17][1]++, this.issuer === asset.getIssuer());
    }
  }, {
    key: "toString",
    value: function toString() {
      cov_26qmmq3po1().f[14]++;
      cov_26qmmq3po1().s[54]++;
      if (this.isNative()) {
        cov_26qmmq3po1().b[18][0]++;
        cov_26qmmq3po1().s[55]++;
        return 'native';
      } else {
        cov_26qmmq3po1().b[18][1]++;
      }
      cov_26qmmq3po1().s[56]++;
      return "".concat(this.getCode(), ":").concat(this.getIssuer());
    }

    /**
     * Compares two assets according to the criteria:
     *
     *  1. First compare the type (native < alphanum4 < alphanum12).
     *  2. If the types are equal, compare the assets codes.
     *  3. If the asset codes are equal, compare the issuers.
     *
     * @param   {Asset} assetA - the first asset
     * @param   {Asset} assetB - the second asset
     * @returns {number} `-1` if assetA < assetB, `0` if assetA == assetB, `1` if assetA > assetB.
     *
     * @static
     * @memberof Asset
     */
  }], [{
    key: "native",
    value: function _native() {
      cov_26qmmq3po1().f[1]++;
      cov_26qmmq3po1().s[10]++;
      return new Asset('XLM');
    }

    /**
     * Returns an asset object from its XDR object representation.
     * @param {xdr.Asset} assetXdr - The asset xdr object.
     * @returns {Asset}
     */
  }, {
    key: "fromOperation",
    value: function fromOperation(assetXdr) {
      cov_26qmmq3po1().f[2]++;
      var anum;
      var code;
      var issuer;
      cov_26qmmq3po1().s[11]++;
      switch (assetXdr["switch"]()) {
        case _xdr["default"].AssetType.assetTypeNative():
          cov_26qmmq3po1().b[6][0]++;
          cov_26qmmq3po1().s[12]++;
          return this["native"]();
        case _xdr["default"].AssetType.assetTypeCreditAlphanum4():
          cov_26qmmq3po1().b[6][1]++;
          cov_26qmmq3po1().s[13]++;
          anum = assetXdr.alphaNum4();
        /* falls through */
        case _xdr["default"].AssetType.assetTypeCreditAlphanum12():
          cov_26qmmq3po1().b[6][2]++;
          cov_26qmmq3po1().s[14]++;
          anum = (cov_26qmmq3po1().b[7][0]++, anum) || (cov_26qmmq3po1().b[7][1]++, assetXdr.alphaNum12());
          cov_26qmmq3po1().s[15]++;
          issuer = _strkey.StrKey.encodeDilithium2PublicKey(anum.issuer().dilithium2());
          cov_26qmmq3po1().s[16]++;
          code = (0, _util.trimEnd)(anum.assetCode(), '\0');
          cov_26qmmq3po1().s[17]++;
          return new this(code, issuer);
        default:
          cov_26qmmq3po1().b[6][3]++;
          cov_26qmmq3po1().s[18]++;
          throw new Error("Invalid asset type: ".concat(assetXdr["switch"]().name));
      }
    }
  }, {
    key: "compare",
    value: function compare(assetA, assetB) {
      cov_26qmmq3po1().f[15]++;
      cov_26qmmq3po1().s[57]++;
      if ((cov_26qmmq3po1().b[20][0]++, !assetA) || (cov_26qmmq3po1().b[20][1]++, !(assetA instanceof Asset))) {
        cov_26qmmq3po1().b[19][0]++;
        cov_26qmmq3po1().s[58]++;
        throw new Error('assetA is invalid');
      } else {
        cov_26qmmq3po1().b[19][1]++;
      }
      cov_26qmmq3po1().s[59]++;
      if ((cov_26qmmq3po1().b[22][0]++, !assetB) || (cov_26qmmq3po1().b[22][1]++, !(assetB instanceof Asset))) {
        cov_26qmmq3po1().b[21][0]++;
        cov_26qmmq3po1().s[60]++;
        throw new Error('assetB is invalid');
      } else {
        cov_26qmmq3po1().b[21][1]++;
      }
      cov_26qmmq3po1().s[61]++;
      if (assetA.equals(assetB)) {
        cov_26qmmq3po1().b[23][0]++;
        cov_26qmmq3po1().s[62]++;
        return 0;
      } else {
        cov_26qmmq3po1().b[23][1]++;
      }

      // Compare asset types.
      var xdrAtype = (cov_26qmmq3po1().s[63]++, assetA.getRawAssetType().value);
      var xdrBtype = (cov_26qmmq3po1().s[64]++, assetB.getRawAssetType().value);
      cov_26qmmq3po1().s[65]++;
      if (xdrAtype !== xdrBtype) {
        cov_26qmmq3po1().b[24][0]++;
        cov_26qmmq3po1().s[66]++;
        return xdrAtype < xdrBtype ? (cov_26qmmq3po1().b[25][0]++, -1) : (cov_26qmmq3po1().b[25][1]++, 1);
      } else {
        cov_26qmmq3po1().b[24][1]++;
      }

      // Compare asset codes.
      var result = (cov_26qmmq3po1().s[67]++, asciiCompare(assetA.getCode(), assetB.getCode()));
      cov_26qmmq3po1().s[68]++;
      if (result !== 0) {
        cov_26qmmq3po1().b[26][0]++;
        cov_26qmmq3po1().s[69]++;
        return result;
      } else {
        cov_26qmmq3po1().b[26][1]++;
      }

      // Compare asset issuers.
      cov_26qmmq3po1().s[70]++;
      return asciiCompare(assetA.getIssuer(), assetB.getIssuer());
    }
  }]);
}();
/**
 * Compares two ASCII strings in lexographic order with uppercase precedence.
 *
 * @param   {string} a - the first string to compare
 * @param   {string} b - the second
 * @returns {number} like all `compare()`s:
 *     -1 if `a < b`, 0 if `a == b`, and 1 if `a > b`
 *
 * @warning No type-checks are done on the parameters
 */
function asciiCompare(a, b) {
  cov_26qmmq3po1().f[16]++;
  cov_26qmmq3po1().s[71]++;
  return Buffer.compare(Buffer.from(a, 'ascii'), Buffer.from(b, 'ascii'));
}