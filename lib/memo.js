"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MemoText = exports.MemoReturn = exports.MemoNone = exports.MemoID = exports.MemoHash = exports.Memo = void 0;
var _jsXdr = require("@stellar/js-xdr");
var _bignumber = _interopRequireDefault(require("./util/bignumber"));
var _xdr = _interopRequireDefault(require("./xdr"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_1noe2lbhxq() {
  var path = "/mnt/g/stellar-base/src/memo.js";
  var hash = "c4ca4336540a2ad67832cac234d5400fa6d29321";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/memo.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 24
        },
        end: {
          line: 8,
          column: 30
        }
      },
      "1": {
        start: {
          line: 12,
          column: 22
        },
        end: {
          line: 12,
          column: 26
        }
      },
      "2": {
        start: {
          line: 16,
          column: 24
        },
        end: {
          line: 16,
          column: 30
        }
      },
      "3": {
        start: {
          line: 20,
          column: 24
        },
        end: {
          line: 20,
          column: 30
        }
      },
      "4": {
        start: {
          line: 24,
          column: 26
        },
        end: {
          line: 24,
          column: 34
        }
      },
      "5": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 22
        }
      },
      "6": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 24
        }
      },
      "7": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 58,
          column: 5
        }
      },
      "8": {
        start: {
          line: 41,
          column: 8
        },
        end: {
          line: 41,
          column: 14
        }
      },
      "9": {
        start: {
          line: 43,
          column: 8
        },
        end: {
          line: 43,
          column: 37
        }
      },
      "10": {
        start: {
          line: 44,
          column: 8
        },
        end: {
          line: 44,
          column: 14
        }
      },
      "11": {
        start: {
          line: 46,
          column: 8
        },
        end: {
          line: 46,
          column: 39
        }
      },
      "12": {
        start: {
          line: 47,
          column: 8
        },
        end: {
          line: 47,
          column: 14
        }
      },
      "13": {
        start: {
          line: 50,
          column: 8
        },
        end: {
          line: 50,
          column: 39
        }
      },
      "14": {
        start: {
          line: 52,
          column: 8
        },
        end: {
          line: 54,
          column: 9
        }
      },
      "15": {
        start: {
          line: 53,
          column: 10
        },
        end: {
          line: 53,
          column: 50
        }
      },
      "16": {
        start: {
          line: 55,
          column: 8
        },
        end: {
          line: 55,
          column: 14
        }
      },
      "17": {
        start: {
          line: 57,
          column: 8
        },
        end: {
          line: 57,
          column: 45
        }
      },
      "18": {
        start: {
          line: 65,
          column: 4
        },
        end: {
          line: 65,
          column: 22
        }
      },
      "19": {
        start: {
          line: 69,
          column: 4
        },
        end: {
          line: 69,
          column: 41
        }
      },
      "20": {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 91,
          column: 5
        }
      },
      "21": {
        start: {
          line: 82,
          column: 8
        },
        end: {
          line: 82,
          column: 20
        }
      },
      "22": {
        start: {
          line: 85,
          column: 8
        },
        end: {
          line: 85,
          column: 27
        }
      },
      "23": {
        start: {
          line: 88,
          column: 8
        },
        end: {
          line: 88,
          column: 40
        }
      },
      "24": {
        start: {
          line: 90,
          column: 8
        },
        end: {
          line: 90,
          column: 45
        }
      },
      "25": {
        start: {
          line: 95,
          column: 4
        },
        end: {
          line: 95,
          column: 41
        }
      },
      "26": {
        start: {
          line: 99,
          column: 18
        },
        end: {
          line: 99,
          column: 72
        }
      },
      "27": {
        start: {
          line: 101,
          column: 4
        },
        end: {
          line: 103,
          column: 5
        }
      },
      "28": {
        start: {
          line: 102,
          column: 6
        },
        end: {
          line: 102,
          column: 18
        }
      },
      "29": {
        start: {
          line: 106,
          column: 4
        },
        end: {
          line: 110,
          column: 5
        }
      },
      "30": {
        start: {
          line: 107,
          column: 6
        },
        end: {
          line: 107,
          column: 36
        }
      },
      "31": {
        start: {
          line: 109,
          column: 6
        },
        end: {
          line: 109,
          column: 18
        }
      },
      "32": {
        start: {
          line: 113,
          column: 4
        },
        end: {
          line: 115,
          column: 5
        }
      },
      "33": {
        start: {
          line: 114,
          column: 6
        },
        end: {
          line: 114,
          column: 18
        }
      },
      "34": {
        start: {
          line: 118,
          column: 4
        },
        end: {
          line: 120,
          column: 5
        }
      },
      "35": {
        start: {
          line: 119,
          column: 6
        },
        end: {
          line: 119,
          column: 18
        }
      },
      "36": {
        start: {
          line: 124,
          column: 4
        },
        end: {
          line: 126,
          column: 5
        }
      },
      "37": {
        start: {
          line: 125,
          column: 6
        },
        end: {
          line: 125,
          column: 71
        }
      },
      "38": {
        start: {
          line: 130,
          column: 18
        },
        end: {
          line: 132,
          column: 5
        }
      },
      "39": {
        start: {
          line: 134,
          column: 4
        },
        end: {
          line: 136,
          column: 5
        }
      },
      "40": {
        start: {
          line: 135,
          column: 6
        },
        end: {
          line: 135,
          column: 18
        }
      },
      "41": {
        start: {
          line: 139,
          column: 4
        },
        end: {
          line: 148,
          column: 5
        }
      },
      "42": {
        start: {
          line: 140,
          column: 6
        },
        end: {
          line: 142,
          column: 7
        }
      },
      "43": {
        start: {
          line: 141,
          column: 8
        },
        end: {
          line: 141,
          column: 20
        }
      },
      "44": {
        start: {
          line: 143,
          column: 6
        },
        end: {
          line: 143,
          column: 46
        }
      },
      "45": {
        start: {
          line: 144,
          column: 11
        },
        end: {
          line: 148,
          column: 5
        }
      },
      "46": {
        start: {
          line: 145,
          column: 6
        },
        end: {
          line: 145,
          column: 39
        }
      },
      "47": {
        start: {
          line: 147,
          column: 6
        },
        end: {
          line: 147,
          column: 18
        }
      },
      "48": {
        start: {
          line: 150,
          column: 4
        },
        end: {
          line: 152,
          column: 5
        }
      },
      "49": {
        start: {
          line: 151,
          column: 6
        },
        end: {
          line: 151,
          column: 18
        }
      },
      "50": {
        start: {
          line: 160,
          column: 4
        },
        end: {
          line: 160,
          column: 30
        }
      },
      "51": {
        start: {
          line: 169,
          column: 4
        },
        end: {
          line: 169,
          column: 36
        }
      },
      "52": {
        start: {
          line: 178,
          column: 4
        },
        end: {
          line: 178,
          column: 32
        }
      },
      "53": {
        start: {
          line: 187,
          column: 4
        },
        end: {
          line: 187,
          column: 36
        }
      },
      "54": {
        start: {
          line: 196,
          column: 4
        },
        end: {
          line: 196,
          column: 38
        }
      },
      "55": {
        start: {
          line: 204,
          column: 4
        },
        end: {
          line: 217,
          column: 5
        }
      },
      "56": {
        start: {
          line: 206,
          column: 8
        },
        end: {
          line: 206,
          column: 35
        }
      },
      "57": {
        start: {
          line: 208,
          column: 8
        },
        end: {
          line: 208,
          column: 70
        }
      },
      "58": {
        start: {
          line: 210,
          column: 8
        },
        end: {
          line: 210,
          column: 46
        }
      },
      "59": {
        start: {
          line: 212,
          column: 8
        },
        end: {
          line: 212,
          column: 46
        }
      },
      "60": {
        start: {
          line: 214,
          column: 8
        },
        end: {
          line: 214,
          column: 48
        }
      },
      "61": {
        start: {
          line: 216,
          column: 8
        },
        end: {
          line: 216,
          column: 20
        }
      },
      "62": {
        start: {
          line: 226,
          column: 4
        },
        end: {
          line: 237,
          column: 5
        }
      },
      "63": {
        start: {
          line: 228,
          column: 8
        },
        end: {
          line: 228,
          column: 50
        }
      },
      "64": {
        start: {
          line: 230,
          column: 8
        },
        end: {
          line: 230,
          column: 41
        }
      },
      "65": {
        start: {
          line: 232,
          column: 8
        },
        end: {
          line: 232,
          column: 41
        }
      },
      "66": {
        start: {
          line: 234,
          column: 8
        },
        end: {
          line: 234,
          column: 43
        }
      },
      "67": {
        start: {
          line: 236,
          column: 8
        },
        end: {
          line: 236,
          column: 14
        }
      },
      "68": {
        start: {
          line: 239,
          column: 4
        },
        end: {
          line: 241,
          column: 5
        }
      },
      "69": {
        start: {
          line: 240,
          column: 6
        },
        end: {
          line: 240,
          column: 25
        }
      },
      "70": {
        start: {
          line: 243,
          column: 4
        },
        end: {
          line: 243,
          column: 36
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 35,
            column: 2
          },
          end: {
            line: 35,
            column: 3
          }
        },
        loc: {
          start: {
            line: 35,
            column: 34
          },
          end: {
            line: 59,
            column: 3
          }
        },
        line: 35
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 64,
            column: 2
          },
          end: {
            line: 64,
            column: 3
          }
        },
        loc: {
          start: {
            line: 64,
            column: 13
          },
          end: {
            line: 66,
            column: 3
          }
        },
        line: 64
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 68,
            column: 3
          }
        },
        loc: {
          start: {
            line: 68,
            column: 17
          },
          end: {
            line: 70,
            column: 3
          }
        },
        line: 68
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
            column: 14
          },
          end: {
            line: 92,
            column: 3
          }
        },
        line: 79
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 94,
            column: 2
          },
          end: {
            line: 94,
            column: 3
          }
        },
        loc: {
          start: {
            line: 94,
            column: 19
          },
          end: {
            line: 96,
            column: 3
          }
        },
        line: 94
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 98,
            column: 2
          },
          end: {
            line: 98,
            column: 3
          }
        },
        loc: {
          start: {
            line: 98,
            column: 33
          },
          end: {
            line: 121,
            column: 3
          }
        },
        line: 98
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 123,
            column: 2
          },
          end: {
            line: 123,
            column: 3
          }
        },
        loc: {
          start: {
            line: 123,
            column: 35
          },
          end: {
            line: 127,
            column: 3
          }
        },
        line: 123
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 129,
            column: 2
          },
          end: {
            line: 129,
            column: 3
          }
        },
        loc: {
          start: {
            line: 129,
            column: 35
          },
          end: {
            line: 153,
            column: 3
          }
        },
        line: 129
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 159,
            column: 2
          },
          end: {
            line: 159,
            column: 3
          }
        },
        loc: {
          start: {
            line: 159,
            column: 16
          },
          end: {
            line: 161,
            column: 3
          }
        },
        line: 159
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
            column: 20
          },
          end: {
            line: 170,
            column: 3
          }
        },
        line: 168
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 177,
            column: 2
          },
          end: {
            line: 177,
            column: 3
          }
        },
        loc: {
          start: {
            line: 177,
            column: 16
          },
          end: {
            line: 179,
            column: 3
          }
        },
        line: 177
      },
      "11": {
        name: "(anonymous_11)",
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
            column: 20
          },
          end: {
            line: 188,
            column: 3
          }
        },
        line: 186
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 195,
            column: 2
          },
          end: {
            line: 195,
            column: 3
          }
        },
        loc: {
          start: {
            line: 195,
            column: 22
          },
          end: {
            line: 197,
            column: 3
          }
        },
        line: 195
      },
      "13": {
        name: "(anonymous_13)",
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
            column: 16
          },
          end: {
            line: 218,
            column: 3
          }
        },
        line: 203
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 225,
            column: 2
          },
          end: {
            line: 225,
            column: 3
          }
        },
        loc: {
          start: {
            line: 225,
            column: 31
          },
          end: {
            line: 244,
            column: 3
          }
        },
        line: 225
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 35,
            column: 20
          },
          end: {
            line: 35,
            column: 32
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 35,
            column: 28
          },
          end: {
            line: 35,
            column: 32
          }
        }],
        line: 35
      },
      "1": {
        loc: {
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 58,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 40,
            column: 6
          },
          end: {
            line: 41,
            column: 14
          }
        }, {
          start: {
            line: 42,
            column: 6
          },
          end: {
            line: 44,
            column: 14
          }
        }, {
          start: {
            line: 45,
            column: 6
          },
          end: {
            line: 47,
            column: 14
          }
        }, {
          start: {
            line: 48,
            column: 6
          },
          end: {
            line: 48,
            column: 20
          }
        }, {
          start: {
            line: 49,
            column: 6
          },
          end: {
            line: 55,
            column: 14
          }
        }, {
          start: {
            line: 56,
            column: 6
          },
          end: {
            line: 57,
            column: 45
          }
        }],
        line: 39
      },
      "2": {
        loc: {
          start: {
            line: 52,
            column: 8
          },
          end: {
            line: 54,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 52,
            column: 8
          },
          end: {
            line: 54,
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
        line: 52
      },
      "3": {
        loc: {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 91,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 81,
            column: 6
          },
          end: {
            line: 82,
            column: 20
          }
        }, {
          start: {
            line: 83,
            column: 6
          },
          end: {
            line: 83,
            column: 18
          }
        }, {
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 85,
            column: 27
          }
        }, {
          start: {
            line: 86,
            column: 6
          },
          end: {
            line: 86,
            column: 20
          }
        }, {
          start: {
            line: 87,
            column: 6
          },
          end: {
            line: 88,
            column: 40
          }
        }, {
          start: {
            line: 89,
            column: 6
          },
          end: {
            line: 90,
            column: 45
          }
        }],
        line: 80
      },
      "4": {
        loc: {
          start: {
            line: 101,
            column: 4
          },
          end: {
            line: 103,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 101,
            column: 4
          },
          end: {
            line: 103,
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
        line: 101
      },
      "5": {
        loc: {
          start: {
            line: 113,
            column: 4
          },
          end: {
            line: 115,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 113,
            column: 4
          },
          end: {
            line: 115,
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
        line: 113
      },
      "6": {
        loc: {
          start: {
            line: 118,
            column: 4
          },
          end: {
            line: 120,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 118,
            column: 4
          },
          end: {
            line: 120,
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
        line: 118
      },
      "7": {
        loc: {
          start: {
            line: 124,
            column: 4
          },
          end: {
            line: 126,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 124,
            column: 4
          },
          end: {
            line: 126,
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
        line: 124
      },
      "8": {
        loc: {
          start: {
            line: 134,
            column: 4
          },
          end: {
            line: 136,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 134,
            column: 4
          },
          end: {
            line: 136,
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
        line: 134
      },
      "9": {
        loc: {
          start: {
            line: 134,
            column: 8
          },
          end: {
            line: 134,
            column: 54
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 134,
            column: 8
          },
          end: {
            line: 134,
            column: 22
          }
        }, {
          start: {
            line: 134,
            column: 26
          },
          end: {
            line: 134,
            column: 54
          }
        }],
        line: 134
      },
      "10": {
        loc: {
          start: {
            line: 139,
            column: 4
          },
          end: {
            line: 148,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 139,
            column: 4
          },
          end: {
            line: 148,
            column: 5
          }
        }, {
          start: {
            line: 144,
            column: 11
          },
          end: {
            line: 148,
            column: 5
          }
        }],
        line: 139
      },
      "11": {
        loc: {
          start: {
            line: 140,
            column: 6
          },
          end: {
            line: 142,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 140,
            column: 6
          },
          end: {
            line: 142,
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
        line: 140
      },
      "12": {
        loc: {
          start: {
            line: 144,
            column: 11
          },
          end: {
            line: 148,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 144,
            column: 11
          },
          end: {
            line: 148,
            column: 5
          }
        }, {
          start: {
            line: 146,
            column: 11
          },
          end: {
            line: 148,
            column: 5
          }
        }],
        line: 144
      },
      "13": {
        loc: {
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 152,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 152,
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
        line: 150
      },
      "14": {
        loc: {
          start: {
            line: 150,
            column: 8
          },
          end: {
            line: 150,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 150,
            column: 8
          },
          end: {
            line: 150,
            column: 27
          }
        }, {
          start: {
            line: 150,
            column: 31
          },
          end: {
            line: 150,
            column: 56
          }
        }],
        line: 150
      },
      "15": {
        loc: {
          start: {
            line: 204,
            column: 4
          },
          end: {
            line: 217,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 205,
            column: 6
          },
          end: {
            line: 206,
            column: 35
          }
        }, {
          start: {
            line: 207,
            column: 6
          },
          end: {
            line: 208,
            column: 70
          }
        }, {
          start: {
            line: 209,
            column: 6
          },
          end: {
            line: 210,
            column: 46
          }
        }, {
          start: {
            line: 211,
            column: 6
          },
          end: {
            line: 212,
            column: 46
          }
        }, {
          start: {
            line: 213,
            column: 6
          },
          end: {
            line: 214,
            column: 48
          }
        }, {
          start: {
            line: 215,
            column: 6
          },
          end: {
            line: 216,
            column: 20
          }
        }],
        line: 204
      },
      "16": {
        loc: {
          start: {
            line: 226,
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
            line: 227,
            column: 6
          },
          end: {
            line: 228,
            column: 50
          }
        }, {
          start: {
            line: 229,
            column: 6
          },
          end: {
            line: 230,
            column: 41
          }
        }, {
          start: {
            line: 231,
            column: 6
          },
          end: {
            line: 232,
            column: 41
          }
        }, {
          start: {
            line: 233,
            column: 6
          },
          end: {
            line: 234,
            column: 43
          }
        }, {
          start: {
            line: 235,
            column: 6
          },
          end: {
            line: 236,
            column: 14
          }
        }],
        line: 226
      },
      "17": {
        loc: {
          start: {
            line: 239,
            column: 4
          },
          end: {
            line: 241,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 239,
            column: 4
          },
          end: {
            line: 241,
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
        line: 239
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
      "70": 0
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
      "14": 0
    },
    b: {
      "0": [0],
      "1": [0, 0, 0, 0, 0, 0],
      "2": [0, 0],
      "3": [0, 0, 0, 0, 0, 0],
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
      "14": [0, 0],
      "15": [0, 0, 0, 0, 0, 0],
      "16": [0, 0, 0, 0, 0],
      "17": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c4ca4336540a2ad67832cac234d5400fa6d29321"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1noe2lbhxq = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1noe2lbhxq();
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Type of {@link Memo}.
 */
var MemoNone = exports.MemoNone = (cov_1noe2lbhxq().s[0]++, 'none');
/**
 * Type of {@link Memo}.
 */
var MemoID = exports.MemoID = (cov_1noe2lbhxq().s[1]++, 'id');
/**
 * Type of {@link Memo}.
 */
var MemoText = exports.MemoText = (cov_1noe2lbhxq().s[2]++, 'text');
/**
 * Type of {@link Memo}.
 */
var MemoHash = exports.MemoHash = (cov_1noe2lbhxq().s[3]++, 'hash');
/**
 * Type of {@link Memo}.
 */
var MemoReturn = exports.MemoReturn = (cov_1noe2lbhxq().s[4]++, 'return');

/**
 * `Memo` represents memos attached to transactions.
 *
 * @param {string} type - `MemoNone`, `MemoID`, `MemoText`, `MemoHash` or `MemoReturn`
 * @param {*} value - `string` for `MemoID`, `MemoText`, buffer of hex string for `MemoHash` or `MemoReturn`
 * @see [Transactions concept](https://developers.stellar.org/docs/glossary/transactions/)
 * @class Memo
 */
var Memo = exports.Memo = /*#__PURE__*/function () {
  function Memo(type) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_1noe2lbhxq().b[0][0]++, null);
    _classCallCheck(this, Memo);
    cov_1noe2lbhxq().f[0]++;
    cov_1noe2lbhxq().s[5]++;
    this._type = type;
    cov_1noe2lbhxq().s[6]++;
    this._value = value;
    cov_1noe2lbhxq().s[7]++;
    switch (this._type) {
      case MemoNone:
        cov_1noe2lbhxq().b[1][0]++;
        cov_1noe2lbhxq().s[8]++;
        break;
      case MemoID:
        cov_1noe2lbhxq().b[1][1]++;
        cov_1noe2lbhxq().s[9]++;
        Memo._validateIdValue(value);
        cov_1noe2lbhxq().s[10]++;
        break;
      case MemoText:
        cov_1noe2lbhxq().b[1][2]++;
        cov_1noe2lbhxq().s[11]++;
        Memo._validateTextValue(value);
        cov_1noe2lbhxq().s[12]++;
        break;
      case MemoHash:
        cov_1noe2lbhxq().b[1][3]++;
      case MemoReturn:
        cov_1noe2lbhxq().b[1][4]++;
        cov_1noe2lbhxq().s[13]++;
        Memo._validateHashValue(value);
        // We want MemoHash and MemoReturn to have Buffer as a value
        cov_1noe2lbhxq().s[14]++;
        if (typeof value === 'string') {
          cov_1noe2lbhxq().b[2][0]++;
          cov_1noe2lbhxq().s[15]++;
          this._value = Buffer.from(value, 'hex');
        } else {
          cov_1noe2lbhxq().b[2][1]++;
        }
        cov_1noe2lbhxq().s[16]++;
        break;
      default:
        cov_1noe2lbhxq().b[1][5]++;
        cov_1noe2lbhxq().s[17]++;
        throw new Error('Invalid memo type');
    }
  }

  /**
   * Contains memo type: `MemoNone`, `MemoID`, `MemoText`, `MemoHash` or `MemoReturn`
   */
  return _createClass(Memo, [{
    key: "type",
    get: function get() {
      cov_1noe2lbhxq().f[1]++;
      cov_1noe2lbhxq().s[18]++;
      return this._type;
    },
    set: function set(type) {
      cov_1noe2lbhxq().f[2]++;
      cov_1noe2lbhxq().s[19]++;
      throw new Error('Memo is immutable');
    }

    /**
     * Contains memo value:
     * * `null` for `MemoNone`,
     * * `string` for `MemoID`,
     * * `Buffer` for `MemoText` after decoding using `fromXDRObject`, original value otherwise,
     * * `Buffer` for `MemoHash`, `MemoReturn`.
     */
  }, {
    key: "value",
    get: function get() {
      cov_1noe2lbhxq().f[3]++;
      cov_1noe2lbhxq().s[20]++;
      switch (this._type) {
        case MemoNone:
          cov_1noe2lbhxq().b[3][0]++;
          cov_1noe2lbhxq().s[21]++;
          return null;
        case MemoID:
          cov_1noe2lbhxq().b[3][1]++;
        case MemoText:
          cov_1noe2lbhxq().b[3][2]++;
          cov_1noe2lbhxq().s[22]++;
          return this._value;
        case MemoHash:
          cov_1noe2lbhxq().b[3][3]++;
        case MemoReturn:
          cov_1noe2lbhxq().b[3][4]++;
          cov_1noe2lbhxq().s[23]++;
          return Buffer.from(this._value);
        default:
          cov_1noe2lbhxq().b[3][5]++;
          cov_1noe2lbhxq().s[24]++;
          throw new Error('Invalid memo type');
      }
    },
    set: function set(value) {
      cov_1noe2lbhxq().f[4]++;
      cov_1noe2lbhxq().s[25]++;
      throw new Error('Memo is immutable');
    }
  }, {
    key: "toXDRObject",
    value:
    /**
     * Returns XDR memo object.
     * @returns {xdr.Memo}
     */
    function toXDRObject() {
      cov_1noe2lbhxq().f[13]++;
      cov_1noe2lbhxq().s[55]++;
      switch (this._type) {
        case MemoNone:
          cov_1noe2lbhxq().b[15][0]++;
          cov_1noe2lbhxq().s[56]++;
          return _xdr["default"].Memo.memoNone();
        case MemoID:
          cov_1noe2lbhxq().b[15][1]++;
          cov_1noe2lbhxq().s[57]++;
          return _xdr["default"].Memo.memoId(_jsXdr.UnsignedHyper.fromString(this._value));
        case MemoText:
          cov_1noe2lbhxq().b[15][2]++;
          cov_1noe2lbhxq().s[58]++;
          return _xdr["default"].Memo.memoText(this._value);
        case MemoHash:
          cov_1noe2lbhxq().b[15][3]++;
          cov_1noe2lbhxq().s[59]++;
          return _xdr["default"].Memo.memoHash(this._value);
        case MemoReturn:
          cov_1noe2lbhxq().b[15][4]++;
          cov_1noe2lbhxq().s[60]++;
          return _xdr["default"].Memo.memoReturn(this._value);
        default:
          cov_1noe2lbhxq().b[15][5]++;
          cov_1noe2lbhxq().s[61]++;
          return null;
      }
    }

    /**
     * Returns {@link Memo} from XDR memo object.
     * @param {xdr.Memo} object XDR memo object
     * @returns {Memo}
     */
  }], [{
    key: "_validateIdValue",
    value: function _validateIdValue(value) {
      cov_1noe2lbhxq().f[5]++;
      var error = (cov_1noe2lbhxq().s[26]++, new Error("Expects a int64 as a string. Got ".concat(value)));
      cov_1noe2lbhxq().s[27]++;
      if (typeof value !== 'string') {
        cov_1noe2lbhxq().b[4][0]++;
        cov_1noe2lbhxq().s[28]++;
        throw error;
      } else {
        cov_1noe2lbhxq().b[4][1]++;
      }
      var number;
      cov_1noe2lbhxq().s[29]++;
      try {
        cov_1noe2lbhxq().s[30]++;
        number = new _bignumber["default"](value);
      } catch (e) {
        cov_1noe2lbhxq().s[31]++;
        throw error;
      }

      // Infinity
      cov_1noe2lbhxq().s[32]++;
      if (!number.isFinite()) {
        cov_1noe2lbhxq().b[5][0]++;
        cov_1noe2lbhxq().s[33]++;
        throw error;
      } else {
        cov_1noe2lbhxq().b[5][1]++;
      }

      // NaN
      cov_1noe2lbhxq().s[34]++;
      if (number.isNaN()) {
        cov_1noe2lbhxq().b[6][0]++;
        cov_1noe2lbhxq().s[35]++;
        throw error;
      } else {
        cov_1noe2lbhxq().b[6][1]++;
      }
    }
  }, {
    key: "_validateTextValue",
    value: function _validateTextValue(value) {
      cov_1noe2lbhxq().f[6]++;
      cov_1noe2lbhxq().s[36]++;
      if (!_xdr["default"].Memo.armTypeForArm('text').isValid(value)) {
        cov_1noe2lbhxq().b[7][0]++;
        cov_1noe2lbhxq().s[37]++;
        throw new Error('Expects string, array or buffer, max 28 bytes');
      } else {
        cov_1noe2lbhxq().b[7][1]++;
      }
    }
  }, {
    key: "_validateHashValue",
    value: function _validateHashValue(value) {
      cov_1noe2lbhxq().f[7]++;
      var error = (cov_1noe2lbhxq().s[38]++, new Error("Expects a 32 byte hash value or hex encoded string. Got ".concat(value)));
      cov_1noe2lbhxq().s[39]++;
      if ((cov_1noe2lbhxq().b[9][0]++, value === null) || (cov_1noe2lbhxq().b[9][1]++, typeof value === 'undefined')) {
        cov_1noe2lbhxq().b[8][0]++;
        cov_1noe2lbhxq().s[40]++;
        throw error;
      } else {
        cov_1noe2lbhxq().b[8][1]++;
      }
      var valueBuffer;
      cov_1noe2lbhxq().s[41]++;
      if (typeof value === 'string') {
        cov_1noe2lbhxq().b[10][0]++;
        cov_1noe2lbhxq().s[42]++;
        if (!/^[0-9A-Fa-f]{64}$/g.test(value)) {
          cov_1noe2lbhxq().b[11][0]++;
          cov_1noe2lbhxq().s[43]++;
          throw error;
        } else {
          cov_1noe2lbhxq().b[11][1]++;
        }
        cov_1noe2lbhxq().s[44]++;
        valueBuffer = Buffer.from(value, 'hex');
      } else {
        cov_1noe2lbhxq().b[10][1]++;
        cov_1noe2lbhxq().s[45]++;
        if (Buffer.isBuffer(value)) {
          cov_1noe2lbhxq().b[12][0]++;
          cov_1noe2lbhxq().s[46]++;
          valueBuffer = Buffer.from(value);
        } else {
          cov_1noe2lbhxq().b[12][1]++;
          cov_1noe2lbhxq().s[47]++;
          throw error;
        }
      }
      cov_1noe2lbhxq().s[48]++;
      if ((cov_1noe2lbhxq().b[14][0]++, !valueBuffer.length) || (cov_1noe2lbhxq().b[14][1]++, valueBuffer.length !== 32)) {
        cov_1noe2lbhxq().b[13][0]++;
        cov_1noe2lbhxq().s[49]++;
        throw error;
      } else {
        cov_1noe2lbhxq().b[13][1]++;
      }
    }

    /**
     * Returns an empty memo (`MemoNone`).
     * @returns {Memo}
     */
  }, {
    key: "none",
    value: function none() {
      cov_1noe2lbhxq().f[8]++;
      cov_1noe2lbhxq().s[50]++;
      return new Memo(MemoNone);
    }

    /**
     * Creates and returns a `MemoText` memo.
     * @param {string} text - memo text
     * @returns {Memo}
     */
  }, {
    key: "text",
    value: function text(_text) {
      cov_1noe2lbhxq().f[9]++;
      cov_1noe2lbhxq().s[51]++;
      return new Memo(MemoText, _text);
    }

    /**
     * Creates and returns a `MemoID` memo.
     * @param {string} id - 64-bit number represented as a string
     * @returns {Memo}
     */
  }, {
    key: "id",
    value: function id(_id) {
      cov_1noe2lbhxq().f[10]++;
      cov_1noe2lbhxq().s[52]++;
      return new Memo(MemoID, _id);
    }

    /**
     * Creates and returns a `MemoHash` memo.
     * @param {array|string} hash - 32 byte hash or hex encoded string
     * @returns {Memo}
     */
  }, {
    key: "hash",
    value: function hash(_hash) {
      cov_1noe2lbhxq().f[11]++;
      cov_1noe2lbhxq().s[53]++;
      return new Memo(MemoHash, _hash);
    }

    /**
     * Creates and returns a `MemoReturn` memo.
     * @param {array|string} hash - 32 byte hash or hex encoded string
     * @returns {Memo}
     */
  }, {
    key: "return",
    value: function _return(hash) {
      cov_1noe2lbhxq().f[12]++;
      cov_1noe2lbhxq().s[54]++;
      return new Memo(MemoReturn, hash);
    }
  }, {
    key: "fromXDRObject",
    value: function fromXDRObject(object) {
      cov_1noe2lbhxq().f[14]++;
      cov_1noe2lbhxq().s[62]++;
      switch (object.arm()) {
        case 'id':
          cov_1noe2lbhxq().b[16][0]++;
          cov_1noe2lbhxq().s[63]++;
          return Memo.id(object.value().toString());
        case 'text':
          cov_1noe2lbhxq().b[16][1]++;
          cov_1noe2lbhxq().s[64]++;
          return Memo.text(object.value());
        case 'hash':
          cov_1noe2lbhxq().b[16][2]++;
          cov_1noe2lbhxq().s[65]++;
          return Memo.hash(object.value());
        case 'retHash':
          cov_1noe2lbhxq().b[16][3]++;
          cov_1noe2lbhxq().s[66]++;
          return Memo["return"](object.value());
        default:
          cov_1noe2lbhxq().b[16][4]++;
          cov_1noe2lbhxq().s[67]++;
          break;
      }
      cov_1noe2lbhxq().s[68]++;
      if (typeof object.value() === 'undefined') {
        cov_1noe2lbhxq().b[17][0]++;
        cov_1noe2lbhxq().s[69]++;
        return Memo.none();
      } else {
        cov_1noe2lbhxq().b[17][1]++;
      }
      cov_1noe2lbhxq().s[70]++;
      throw new Error('Unknown type');
    }
  }]);
}();