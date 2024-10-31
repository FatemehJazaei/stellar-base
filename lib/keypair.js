"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Keypair = void 0;
var _tweetnacl = _interopRequireDefault(require("tweetnacl"));
var _signing = require("./signing");
var _strkey = require("./strkey");
var _hashing = require("./hashing");
var _xdr = _interopRequireDefault(require("./xdr"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_19gmyzfjy0() {
  var path = "/mnt/g/stellar-base/src/keypair.js";
  var hash = "ab0a77a02918cdccbff2d7be1953a43f99bf55cd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/keypair.js",
    statementMap: {
      "0": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 30,
          column: 5
        }
      },
      "1": {
        start: {
          line: 29,
          column: 6
        },
        end: {
          line: 29,
          column: 43
        }
      },
      "2": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 26
        }
      },
      "3": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 57,
          column: 5
        }
      },
      "4": {
        start: {
          line: 35,
          column: 6
        },
        end: {
          line: 35,
          column: 51
        }
      },
      "5": {
        start: {
          line: 37,
          column: 6
        },
        end: {
          line: 39,
          column: 7
        }
      },
      "6": {
        start: {
          line: 38,
          column: 8
        },
        end: {
          line: 38,
          column: 55
        }
      },
      "7": {
        start: {
          line: 41,
          column: 6
        },
        end: {
          line: 41,
          column: 40
        }
      },
      "8": {
        start: {
          line: 42,
          column: 6
        },
        end: {
          line: 42,
          column: 49
        }
      },
      "9": {
        start: {
          line: 43,
          column: 6
        },
        end: {
          line: 43,
          column: 51
        }
      },
      "10": {
        start: {
          line: 45,
          column: 6
        },
        end: {
          line: 50,
          column: 7
        }
      },
      "11": {
        start: {
          line: 49,
          column: 8
        },
        end: {
          line: 49,
          column: 62
        }
      },
      "12": {
        start: {
          line: 52,
          column: 6
        },
        end: {
          line: 52,
          column: 52
        }
      },
      "13": {
        start: {
          line: 54,
          column: 6
        },
        end: {
          line: 56,
          column: 7
        }
      },
      "14": {
        start: {
          line: 55,
          column: 8
        },
        end: {
          line: 55,
          column: 55
        }
      },
      "15": {
        start: {
          line: 67,
          column: 22
        },
        end: {
          line: 67,
          column: 63
        }
      },
      "16": {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 68,
          column: 49
        }
      },
      "17": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 78,
          column: 64
        }
      },
      "18": {
        start: {
          line: 87,
          column: 4
        },
        end: {
          line: 91,
          column: 5
        }
      },
      "19": {
        start: {
          line: 88,
          column: 6
        },
        end: {
          line: 90,
          column: 8
        }
      },
      "20": {
        start: {
          line: 93,
          column: 4
        },
        end: {
          line: 93,
          column: 63
        }
      },
      "21": {
        start: {
          line: 102,
          column: 4
        },
        end: {
          line: 102,
          column: 60
        }
      },
      "22": {
        start: {
          line: 103,
          column: 4
        },
        end: {
          line: 105,
          column: 5
        }
      },
      "23": {
        start: {
          line: 104,
          column: 6
        },
        end: {
          line: 104,
          column: 52
        }
      },
      "24": {
        start: {
          line: 106,
          column: 4
        },
        end: {
          line: 106,
          column: 55
        }
      },
      "25": {
        start: {
          line: 114,
          column: 19
        },
        end: {
          line: 114,
          column: 39
        }
      },
      "26": {
        start: {
          line: 115,
          column: 4
        },
        end: {
          line: 115,
          column: 46
        }
      },
      "27": {
        start: {
          line: 119,
          column: 4
        },
        end: {
          line: 119,
          column: 70
        }
      },
      "28": {
        start: {
          line: 123,
          column: 4
        },
        end: {
          line: 123,
          column: 70
        }
      },
      "29": {
        start: {
          line: 138,
          column: 4
        },
        end: {
          line: 149,
          column: 5
        }
      },
      "30": {
        start: {
          line: 139,
          column: 6
        },
        end: {
          line: 141,
          column: 7
        }
      },
      "31": {
        start: {
          line: 140,
          column: 8
        },
        end: {
          line: 140,
          column: 72
        }
      },
      "32": {
        start: {
          line: 143,
          column: 6
        },
        end: {
          line: 148,
          column: 8
        }
      },
      "33": {
        start: {
          line: 151,
          column: 4
        },
        end: {
          line: 151,
          column: 67
        }
      },
      "34": {
        start: {
          line: 159,
          column: 4
        },
        end: {
          line: 159,
          column: 27
        }
      },
      "35": {
        start: {
          line: 163,
          column: 14
        },
        end: {
          line: 163,
          column: 41
        }
      },
      "36": {
        start: {
          line: 165,
          column: 4
        },
        end: {
          line: 165,
          column: 33
        }
      },
      "37": {
        start: {
          line: 173,
          column: 4
        },
        end: {
          line: 173,
          column: 61
        }
      },
      "38": {
        start: {
          line: 181,
          column: 4
        },
        end: {
          line: 183,
          column: 5
        }
      },
      "39": {
        start: {
          line: 182,
          column: 6
        },
        end: {
          line: 182,
          column: 49
        }
      },
      "40": {
        start: {
          line: 185,
          column: 4
        },
        end: {
          line: 187,
          column: 5
        }
      },
      "41": {
        start: {
          line: 186,
          column: 6
        },
        end: {
          line: 186,
          column: 65
        }
      },
      "42": {
        start: {
          line: 189,
          column: 4
        },
        end: {
          line: 189,
          column: 44
        }
      },
      "43": {
        start: {
          line: 197,
          column: 4
        },
        end: {
          line: 197,
          column: 28
        }
      },
      "44": {
        start: {
          line: 205,
          column: 4
        },
        end: {
          line: 205,
          column: 29
        }
      },
      "45": {
        start: {
          line: 214,
          column: 4
        },
        end: {
          line: 216,
          column: 5
        }
      },
      "46": {
        start: {
          line: 215,
          column: 6
        },
        end: {
          line: 215,
          column: 62
        }
      },
      "47": {
        start: {
          line: 218,
          column: 4
        },
        end: {
          line: 218,
          column: 39
        }
      },
      "48": {
        start: {
          line: 228,
          column: 4
        },
        end: {
          line: 228,
          column: 52
        }
      },
      "49": {
        start: {
          line: 241,
          column: 22
        },
        end: {
          line: 241,
          column: 37
        }
      },
      "50": {
        start: {
          line: 242,
          column: 17
        },
        end: {
          line: 242,
          column: 37
        }
      },
      "51": {
        start: {
          line: 244,
          column: 4
        },
        end: {
          line: 244,
          column: 59
        }
      },
      "52": {
        start: {
          line: 260,
          column: 22
        },
        end: {
          line: 260,
          column: 37
        }
      },
      "53": {
        start: {
          line: 261,
          column: 20
        },
        end: {
          line: 261,
          column: 40
        }
      },
      "54": {
        start: {
          line: 263,
          column: 15
        },
        end: {
          line: 263,
          column: 42
        }
      },
      "55": {
        start: {
          line: 264,
          column: 4
        },
        end: {
          line: 267,
          column: 5
        }
      },
      "56": {
        start: {
          line: 266,
          column: 6
        },
        end: {
          line: 266,
          column: 69
        }
      },
      "57": {
        start: {
          line: 269,
          column: 4
        },
        end: {
          line: 272,
          column: 7
        }
      },
      "58": {
        start: {
          line: 270,
          column: 34
        },
        end: {
          line: 270,
          column: 51
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        },
        loc: {
          start: {
            line: 27,
            column: 20
          },
          end: {
            line: 58,
            column: 3
          }
        },
        line: 27
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 66,
            column: 2
          },
          end: {
            line: 66,
            column: 3
          }
        },
        loc: {
          start: {
            line: 66,
            column: 28
          },
          end: {
            line: 69,
            column: 3
          }
        },
        line: 66
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 77,
            column: 2
          },
          end: {
            line: 77,
            column: 3
          }
        },
        loc: {
          start: {
            line: 77,
            column: 40
          },
          end: {
            line: 79,
            column: 3
          }
        },
        line: 77
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 86,
            column: 2
          },
          end: {
            line: 86,
            column: 3
          }
        },
        loc: {
          start: {
            line: 86,
            column: 35
          },
          end: {
            line: 94,
            column: 3
          }
        },
        line: 86
      },
      "4": {
        name: "(anonymous_4)",
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
            column: 34
          },
          end: {
            line: 107,
            column: 3
          }
        },
        line: 101
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 113,
            column: 2
          },
          end: {
            line: 113,
            column: 3
          }
        },
        loc: {
          start: {
            line: 113,
            column: 18
          },
          end: {
            line: 116,
            column: 3
          }
        },
        line: 113
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
            column: 17
          },
          end: {
            line: 120,
            column: 3
          }
        },
        line: 118
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 122,
            column: 2
          },
          end: {
            line: 122,
            column: 3
          }
        },
        loc: {
          start: {
            line: 122,
            column: 17
          },
          end: {
            line: 124,
            column: 3
          }
        },
        line: 122
      },
      "8": {
        name: "(anonymous_8)",
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
            column: 22
          },
          end: {
            line: 152,
            column: 3
          }
        },
        line: 137
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 158,
            column: 2
          },
          end: {
            line: 158,
            column: 3
          }
        },
        loc: {
          start: {
            line: 158,
            column: 17
          },
          end: {
            line: 160,
            column: 3
          }
        },
        line: 158
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 162,
            column: 2
          },
          end: {
            line: 162,
            column: 3
          }
        },
        loc: {
          start: {
            line: 162,
            column: 18
          },
          end: {
            line: 166,
            column: 3
          }
        },
        line: 162
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 172,
            column: 2
          },
          end: {
            line: 172,
            column: 3
          }
        },
        loc: {
          start: {
            line: 172,
            column: 14
          },
          end: {
            line: 174,
            column: 3
          }
        },
        line: 172
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 180,
            column: 2
          },
          end: {
            line: 180,
            column: 3
          }
        },
        loc: {
          start: {
            line: 180,
            column: 11
          },
          end: {
            line: 190,
            column: 3
          }
        },
        line: 180
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 196,
            column: 2
          },
          end: {
            line: 196,
            column: 3
          }
        },
        loc: {
          start: {
            line: 196,
            column: 17
          },
          end: {
            line: 198,
            column: 3
          }
        },
        line: 196
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 204,
            column: 2
          },
          end: {
            line: 204,
            column: 3
          }
        },
        loc: {
          start: {
            line: 204,
            column: 12
          },
          end: {
            line: 206,
            column: 3
          }
        },
        line: 204
      },
      "15": {
        name: "(anonymous_15)",
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
            column: 13
          },
          end: {
            line: 219,
            column: 3
          }
        },
        line: 213
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 227,
            column: 2
          },
          end: {
            line: 227,
            column: 3
          }
        },
        loc: {
          start: {
            line: 227,
            column: 26
          },
          end: {
            line: 229,
            column: 3
          }
        },
        line: 227
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 240,
            column: 2
          },
          end: {
            line: 240,
            column: 3
          }
        },
        loc: {
          start: {
            line: 240,
            column: 22
          },
          end: {
            line: 245,
            column: 3
          }
        },
        line: 240
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 259,
            column: 2
          },
          end: {
            line: 259,
            column: 3
          }
        },
        loc: {
          start: {
            line: 259,
            column: 29
          },
          end: {
            line: 273,
            column: 3
          }
        },
        line: 259
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 270,
            column: 21
          },
          end: {
            line: 270,
            column: 22
          }
        },
        loc: {
          start: {
            line: 270,
            column: 34
          },
          end: {
            line: 270,
            column: 51
          }
        },
        line: 270
      }
    },
    branchMap: {
      "0": {
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
      "1": {
        loc: {
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 57,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 57,
            column: 5
          }
        }, {
          start: {
            line: 51,
            column: 11
          },
          end: {
            line: 57,
            column: 5
          }
        }],
        line: 34
      },
      "2": {
        loc: {
          start: {
            line: 37,
            column: 6
          },
          end: {
            line: 39,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 37,
            column: 6
          },
          end: {
            line: 39,
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
        line: 37
      },
      "3": {
        loc: {
          start: {
            line: 45,
            column: 6
          },
          end: {
            line: 50,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 45,
            column: 6
          },
          end: {
            line: 50,
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
        line: 45
      },
      "4": {
        loc: {
          start: {
            line: 46,
            column: 8
          },
          end: {
            line: 47,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 46,
            column: 8
          },
          end: {
            line: 46,
            column: 22
          }
        }, {
          start: {
            line: 47,
            column: 8
          },
          end: {
            line: 47,
            column: 60
          }
        }],
        line: 46
      },
      "5": {
        loc: {
          start: {
            line: 54,
            column: 6
          },
          end: {
            line: 56,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 54,
            column: 6
          },
          end: {
            line: 56,
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
        line: 54
      },
      "6": {
        loc: {
          start: {
            line: 87,
            column: 4
          },
          end: {
            line: 91,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 87,
            column: 4
          },
          end: {
            line: 91,
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
        line: 87
      },
      "7": {
        loc: {
          start: {
            line: 103,
            column: 4
          },
          end: {
            line: 105,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 103,
            column: 4
          },
          end: {
            line: 105,
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
        line: 103
      },
      "8": {
        loc: {
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 149,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 149,
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
        line: 138
      },
      "9": {
        loc: {
          start: {
            line: 139,
            column: 6
          },
          end: {
            line: 141,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 139,
            column: 6
          },
          end: {
            line: 141,
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
        line: 139
      },
      "10": {
        loc: {
          start: {
            line: 181,
            column: 4
          },
          end: {
            line: 183,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 181,
            column: 4
          },
          end: {
            line: 183,
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
        line: 181
      },
      "11": {
        loc: {
          start: {
            line: 185,
            column: 4
          },
          end: {
            line: 187,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 185,
            column: 4
          },
          end: {
            line: 187,
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
        line: 185
      },
      "12": {
        loc: {
          start: {
            line: 214,
            column: 4
          },
          end: {
            line: 216,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 214,
            column: 4
          },
          end: {
            line: 216,
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
        line: 214
      },
      "13": {
        loc: {
          start: {
            line: 264,
            column: 4
          },
          end: {
            line: 267,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 264,
            column: 4
          },
          end: {
            line: 267,
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
        line: 264
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
      "58": 0
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
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
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
      "13": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ab0a77a02918cdccbff2d7be1953a43f99bf55cd"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_19gmyzfjy0 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_19gmyzfjy0();
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* eslint no-bitwise: ["error", {"allow": ["^"]}] */
/**
 * `Keypair` represents public (and secret) keys of the account.
 *
 * Currently `Keypair` only supports dilithium2 but in a future this class can be abstraction layer for other
 * public-key signature systems.
 *
 * Use more convenient methods to create `Keypair` object:
 * * `{@link Keypair.fromPublicKey}`
 * * `{@link Keypair.fromSecret}`
 * * `{@link Keypair.random}`
 *
 * @constructor
 * @param {object} keys At least one of keys must be provided.
 * @param {string} keys.type Public-key signature system name. (currently only `dilithium2` keys are supported)
 * @param {Buffer} [keys.publicKey] Raw public key 1312-byte
 * @param {Buffer} [keys.secretKey] Raw secret key (32-byte secret seed in dilithium2`)
 */
var Keypair = exports.Keypair = /*#__PURE__*/function () {
  function Keypair(keys) {
    _classCallCheck(this, Keypair);
    cov_19gmyzfjy0().f[0]++;
    cov_19gmyzfjy0().s[0]++;
    if (keys.type !== 'dilithium2') {
      cov_19gmyzfjy0().b[0][0]++;
      cov_19gmyzfjy0().s[1]++;
      throw new Error('Invalid keys type');
    } else {
      cov_19gmyzfjy0().b[0][1]++;
    }
    cov_19gmyzfjy0().s[2]++;
    this.type = keys.type;
    cov_19gmyzfjy0().s[3]++;
    if (keys.secretKey) {
      cov_19gmyzfjy0().b[1][0]++;
      cov_19gmyzfjy0().s[4]++;
      keys.secretKey = Buffer.from(keys.secretKey);
      cov_19gmyzfjy0().s[5]++;
      if (keys.secretKey.length !== 32) {
        cov_19gmyzfjy0().b[2][0]++;
        cov_19gmyzfjy0().s[6]++;
        throw new Error('secretKey length is invalid');
      } else {
        cov_19gmyzfjy0().b[2][1]++;
      }
      cov_19gmyzfjy0().s[7]++;
      this._secretSeed = keys.secretKey;
      cov_19gmyzfjy0().s[8]++;
      this._publicKey = (0, _signing.generate)(keys.secretKey);
      cov_19gmyzfjy0().s[9]++;
      this._secretKey = (0, _signing.generateSK)(keys.secretKey);
      cov_19gmyzfjy0().s[10]++;
      if ((cov_19gmyzfjy0().b[4][0]++, keys.publicKey) && (cov_19gmyzfjy0().b[4][1]++, !this._publicKey.equals(Buffer.from(keys.publicKey)))) {
        cov_19gmyzfjy0().b[3][0]++;
        cov_19gmyzfjy0().s[11]++;
        throw new Error('secretKey does not match publicKey');
      } else {
        cov_19gmyzfjy0().b[3][1]++;
      }
    } else {
      cov_19gmyzfjy0().b[1][1]++;
      cov_19gmyzfjy0().s[12]++;
      this._publicKey = Buffer.from(keys.publicKey);
      cov_19gmyzfjy0().s[13]++;
      if (this._publicKey.length !== 1312) {
        cov_19gmyzfjy0().b[5][0]++;
        cov_19gmyzfjy0().s[14]++;
        throw new Error('publicKey length is invalid');
      } else {
        cov_19gmyzfjy0().b[5][1]++;
      }
    }
  }

  /**
   * Creates a new `Keypair` instance from secret. This can either be secret key or secret seed depending
   * on underlying public-key signature system. Currently `Keypair` only supports dilithium2.
   * @param {string} secret secret key 
   * @returns {Keypair}
   */
  return _createClass(Keypair, [{
    key: "xdrAccountId",
    value: function xdrAccountId() {
      cov_19gmyzfjy0().f[6]++;
      cov_19gmyzfjy0().s[27]++;
      return new _xdr["default"].AccountId.publicKeyTypeDilithium2(this._publicKey);
    }
  }, {
    key: "xdrPublicKey",
    value: function xdrPublicKey() {
      cov_19gmyzfjy0().f[7]++;
      cov_19gmyzfjy0().s[28]++;
      return new _xdr["default"].PublicKey.publicKeyTypeDilithium2(this._publicKey);
    }

    /**
     * Creates a {@link xdr.MuxedAccount} object from the public key.
     *
     * You will get a different type of muxed account depending on whether or not
     * you pass an ID.
     *
     * @param  {string} [id] - stringified integer indicating the underlying muxed
     *     ID of the new account object
     *
     * @return {xdr.MuxedAccount}
     */
  }, {
    key: "xdrMuxedAccount",
    value: function xdrMuxedAccount(id) {
      cov_19gmyzfjy0().f[8]++;
      cov_19gmyzfjy0().s[29]++;
      if (typeof id !== 'undefined') {
        cov_19gmyzfjy0().b[8][0]++;
        cov_19gmyzfjy0().s[30]++;
        if (typeof id !== 'string') {
          cov_19gmyzfjy0().b[9][0]++;
          cov_19gmyzfjy0().s[31]++;
          throw new TypeError("expected string for ID, got ".concat(_typeof(id)));
        } else {
          cov_19gmyzfjy0().b[9][1]++;
        }
        cov_19gmyzfjy0().s[32]++;
        return _xdr["default"].MuxedAccount.keyTypeMuxedDilithium2(new _xdr["default"].MuxedAccountMdilithium2({
          id: _xdr["default"].Uint64.fromString(id),
          dilithium2: this._publicKey
        }));
      } else {
        cov_19gmyzfjy0().b[8][1]++;
      }
      cov_19gmyzfjy0().s[33]++;
      return new _xdr["default"].MuxedAccount.keyTypeDilithium2(this._publicKey);
    }

    /**
     * Returns raw public key
     * @returns {Buffer}
     */
  }, {
    key: "rawPublicKey",
    value: function rawPublicKey() {
      cov_19gmyzfjy0().f[9]++;
      cov_19gmyzfjy0().s[34]++;
      return this._publicKey;
    }
  }, {
    key: "signatureHint",
    value: function signatureHint() {
      cov_19gmyzfjy0().f[10]++;
      var a = (cov_19gmyzfjy0().s[35]++, this.xdrAccountId().toXDR());
      cov_19gmyzfjy0().s[36]++;
      return a.slice(a.length - 4);
    }

    /**
     * Returns public key associated with this `Keypair` object.
     * @returns {string}
     */
  }, {
    key: "publicKey",
    value: function publicKey() {
      cov_19gmyzfjy0().f[11]++;
      cov_19gmyzfjy0().s[37]++;
      return _strkey.StrKey.encodeDilithium2PublicKey(this._publicKey);
    }

    /**
     * Returns secret key associated with this `Keypair` object
     * @returns {string}
     */
  }, {
    key: "secret",
    value: function secret() {
      cov_19gmyzfjy0().f[12]++;
      cov_19gmyzfjy0().s[38]++;
      if (!this._secretSeed) {
        cov_19gmyzfjy0().b[10][0]++;
        cov_19gmyzfjy0().s[39]++;
        throw new Error('no secret key available');
      } else {
        cov_19gmyzfjy0().b[10][1]++;
      }
      cov_19gmyzfjy0().s[40]++;
      if (this.type === 'dilithium2') {
        cov_19gmyzfjy0().b[11][0]++;
        cov_19gmyzfjy0().s[41]++;
        return _strkey.StrKey.encodeDilithium2SecretSeed(this._secretSeed);
      } else {
        cov_19gmyzfjy0().b[11][1]++;
      }
      cov_19gmyzfjy0().s[42]++;
      throw new Error('Invalid Keypair type');
    }

    /**
     * Returns raw secret key.
     * @returns {Buffer}
     */
  }, {
    key: "rawSecretKey",
    value: function rawSecretKey() {
      cov_19gmyzfjy0().f[13]++;
      cov_19gmyzfjy0().s[43]++;
      return this._secretSeed;
    }

    /**
     * Returns `true` if this `Keypair` object contains secret key and can sign.
     * @returns {boolean}
     */
  }, {
    key: "canSign",
    value: function canSign() {
      cov_19gmyzfjy0().f[14]++;
      cov_19gmyzfjy0().s[44]++;
      return !!this._secretKey;
    }

    /**
     * Signs data.
     * @param {Buffer} data Data to sign
     * @returns {Buffer}
     */
  }, {
    key: "sign",
    value: function sign(data) {
      cov_19gmyzfjy0().f[15]++;
      cov_19gmyzfjy0().s[45]++;
      if (!this.canSign()) {
        cov_19gmyzfjy0().b[12][0]++;
        cov_19gmyzfjy0().s[46]++;
        throw new Error('cannot sign: no secret key available');
      } else {
        cov_19gmyzfjy0().b[12][1]++;
      }
      cov_19gmyzfjy0().s[47]++;
      return (0, _signing.sign)(data, this._secretKey);
    }

    /**
     * Verifies if `signature` for `data` is valid.
     * @param {Buffer} data Signed data
     * @param {Buffer} signature Signature
     * @returns {boolean}
     */
  }, {
    key: "verify",
    value: function verify(data, signature) {
      cov_19gmyzfjy0().f[16]++;
      cov_19gmyzfjy0().s[48]++;
      return (0, _signing.verify)(data, signature, this._publicKey);
    }

    /**
     * Returns the decorated signature (hint+sig) for arbitrary data.
     *
     * @param  {Buffer} data  arbitrary data to sign
     * @return {xdr.DecoratedSignature}   the raw signature structure which can be
     *     added directly to a transaction envelope
     *
     * @see TransactionBase.addDecoratedSignature
     */
  }, {
    key: "signDecorated",
    value: function signDecorated(data) {
      cov_19gmyzfjy0().f[17]++;
      var signature = (cov_19gmyzfjy0().s[49]++, this.sign(data));
      var hint = (cov_19gmyzfjy0().s[50]++, this.signatureHint());
      cov_19gmyzfjy0().s[51]++;
      return new _xdr["default"].DecoratedSignature({
        hint: hint,
        signature: signature
      });
    }

    /**
     * Returns the raw decorated signature (hint+sig) for a signed payload signer.
     *
     *  The hint is defined as the last 4 bytes of the signer key XORed with last
     *  4 bytes of the payload (zero-left-padded if necessary).
     *
     * @param  {Buffer} data    data to both sign and treat as the payload
     * @return {xdr.DecoratedSignature}
     *
     * @see https://github.com/stellar/stellar-protocol/blob/master/core/cap-0040.md#signature-hint
     * @see TransactionBase.addDecoratedSignature
     */
  }, {
    key: "signPayloadDecorated",
    value: function signPayloadDecorated(data) {
      cov_19gmyzfjy0().f[18]++;
      var signature = (cov_19gmyzfjy0().s[52]++, this.sign(data));
      var keyHint = (cov_19gmyzfjy0().s[53]++, this.signatureHint());
      var hint = (cov_19gmyzfjy0().s[54]++, Buffer.from(data.slice(-4)));
      cov_19gmyzfjy0().s[55]++;
      if (hint.length < 4) {
        cov_19gmyzfjy0().b[13][0]++;
        cov_19gmyzfjy0().s[56]++;
        // append zeroes as needed
        hint = Buffer.concat([hint, Buffer.alloc(4 - data.length, 0)]);
      } else {
        cov_19gmyzfjy0().b[13][1]++;
      }
      cov_19gmyzfjy0().s[57]++;
      return new _xdr["default"].DecoratedSignature({
        hint: hint.map(function (_byte, i) {
          cov_19gmyzfjy0().f[19]++;
          cov_19gmyzfjy0().s[58]++;
          return _byte ^ keyHint[i];
        }),
        signature: signature
      });
    }
  }], [{
    key: "fromSecret",
    value: function fromSecret(secret) {
      cov_19gmyzfjy0().f[1]++;
      var rawSecret = (cov_19gmyzfjy0().s[15]++, _strkey.StrKey.decodeDilithium2SecretSeed(secret));
      cov_19gmyzfjy0().s[16]++;
      return this.fromRawDilithium2Seed(rawSecret);
    }

    /**
     * Creates a new `Keypair` object from dilithium2 secret key seed raw bytes.
     *
     * @param {Buffer} rawSeed Raw 32-byte dilithium2 secret key seed
     * @returns {Keypair}
     */
  }, {
    key: "fromRawDilithium2Seed",
    value: function fromRawDilithium2Seed(rawSeed) {
      cov_19gmyzfjy0().f[2]++;
      cov_19gmyzfjy0().s[17]++;
      return new this({
        type: 'dilithium2',
        secretKey: rawSeed
      });
    }

    /**
     * Returns `Keypair` object representing network master key.
     * @param {string} networkPassphrase passphrase of the target stellar network (e.g. "Public Global Stellar Network ; September 2015").
     * @returns {Keypair}
     */
  }, {
    key: "master",
    value: function master(networkPassphrase) {
      cov_19gmyzfjy0().f[3]++;
      cov_19gmyzfjy0().s[18]++;
      if (!networkPassphrase) {
        cov_19gmyzfjy0().b[6][0]++;
        cov_19gmyzfjy0().s[19]++;
        throw new Error('No network selected. Please pass a network argument, e.g. `Keypair.master(Networks.PUBLIC)`.');
      } else {
        cov_19gmyzfjy0().b[6][1]++;
      }
      cov_19gmyzfjy0().s[20]++;
      return this.fromRawDilithium2Seed((0, _hashing.hash)(networkPassphrase));
    }

    /**
     * Creates a new `Keypair` object from public key.
     * @param {string} publicKey public key 
     * @returns {Keypair}
     */
  }, {
    key: "fromPublicKey",
    value: function fromPublicKey(publicKey) {
      cov_19gmyzfjy0().f[4]++;
      cov_19gmyzfjy0().s[21]++;
      publicKey = _strkey.StrKey.decodeDilithium2PublicKey(publicKey);
      cov_19gmyzfjy0().s[22]++;
      if (publicKey.length !== 1312) {
        cov_19gmyzfjy0().b[7][0]++;
        cov_19gmyzfjy0().s[23]++;
        throw new Error('Invalid Stellar public key');
      } else {
        cov_19gmyzfjy0().b[7][1]++;
      }
      cov_19gmyzfjy0().s[24]++;
      return new this({
        type: 'dilithium2',
        publicKey: publicKey
      });
    }

    /**
     * Create a random `Keypair` object.
     * @returns {Keypair}
     */
  }, {
    key: "random",
    value: function random() {
      cov_19gmyzfjy0().f[5]++;
      var secret = (cov_19gmyzfjy0().s[25]++, _tweetnacl["default"].randomBytes(32));
      cov_19gmyzfjy0().s[26]++;
      return this.fromRawDilithium2Seed(secret);
    }
  }]);
}();