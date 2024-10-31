"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transaction = void 0;
var _xdr = _interopRequireDefault(require("./xdr"));
var _hashing = require("./hashing");
var _strkey = require("./strkey");
var _operation = require("./operation");
var _memo = require("./memo");
var _transaction_base = require("./transaction_base");
var _decode_encode_muxed_account = require("./util/decode_encode_muxed_account");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_18v175hvfo() {
  var path = "/mnt/g/stellar-base/src/transaction.js";
  var hash = "a93b2ec6fbed2623cb6041a9d8fe38868b00be13";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/transaction.js",
    statementMap: {
      "0": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 37,
          column: 5
        }
      },
      "1": {
        start: {
          line: 35,
          column: 21
        },
        end: {
          line: 35,
          column: 52
        }
      },
      "2": {
        start: {
          line: 36,
          column: 6
        },
        end: {
          line: 36,
          column: 57
        }
      },
      "3": {
        start: {
          line: 39,
          column: 25
        },
        end: {
          line: 39,
          column: 42
        }
      },
      "4": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 49,
          column: 5
        }
      },
      "5": {
        start: {
          line: 46,
          column: 6
        },
        end: {
          line: 48,
          column: 8
        }
      },
      "6": {
        start: {
          line: 51,
          column: 23
        },
        end: {
          line: 51,
          column: 39
        }
      },
      "7": {
        start: {
          line: 52,
          column: 15
        },
        end: {
          line: 52,
          column: 30
        }
      },
      "8": {
        start: {
          line: 53,
          column: 16
        },
        end: {
          line: 53,
          column: 35
        }
      },
      "9": {
        start: {
          line: 54,
          column: 23
        },
        end: {
          line: 54,
          column: 62
        }
      },
      "10": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 56,
          column: 50
        }
      },
      "11": {
        start: {
          line: 58,
          column: 4
        },
        end: {
          line: 58,
          column: 38
        }
      },
      "12": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 59,
          column: 27
        }
      },
      "13": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 60,
          column: 44
        }
      },
      "14": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 71,
          column: 5
        }
      },
      "15": {
        start: {
          line: 64,
          column: 8
        },
        end: {
          line: 66,
          column: 10
        }
      },
      "16": {
        start: {
          line: 67,
          column: 8
        },
        end: {
          line: 67,
          column: 14
        }
      },
      "17": {
        start: {
          line: 69,
          column: 8
        },
        end: {
          line: 69,
          column: 76
        }
      },
      "18": {
        start: {
          line: 70,
          column: 8
        },
        end: {
          line: 70,
          column: 14
        }
      },
      "19": {
        start: {
          line: 73,
          column: 15
        },
        end: {
          line: 73,
          column: 19
        }
      },
      "20": {
        start: {
          line: 74,
          column: 21
        },
        end: {
          line: 74,
          column: 25
        }
      },
      "21": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 98,
          column: 5
        }
      },
      "22": {
        start: {
          line: 77,
          column: 8
        },
        end: {
          line: 77,
          column: 37
        }
      },
      "23": {
        start: {
          line: 78,
          column: 8
        },
        end: {
          line: 78,
          column: 14
        }
      },
      "24": {
        start: {
          line: 81,
          column: 8
        },
        end: {
          line: 93,
          column: 9
        }
      },
      "25": {
        start: {
          line: 83,
          column: 12
        },
        end: {
          line: 83,
          column: 48
        }
      },
      "26": {
        start: {
          line: 84,
          column: 12
        },
        end: {
          line: 84,
          column: 18
        }
      },
      "27": {
        start: {
          line: 87,
          column: 12
        },
        end: {
          line: 87,
          column: 34
        }
      },
      "28": {
        start: {
          line: 88,
          column: 12
        },
        end: {
          line: 88,
          column: 43
        }
      },
      "29": {
        start: {
          line: 89,
          column: 12
        },
        end: {
          line: 89,
          column: 18
        }
      },
      "30": {
        start: {
          line: 92,
          column: 12
        },
        end: {
          line: 92,
          column: 18
        }
      },
      "31": {
        start: {
          line: 94,
          column: 8
        },
        end: {
          line: 94,
          column: 14
        }
      },
      "32": {
        start: {
          line: 97,
          column: 8
        },
        end: {
          line: 97,
          column: 14
        }
      },
      "33": {
        start: {
          line: 100,
          column: 4
        },
        end: {
          line: 105,
          column: 5
        }
      },
      "34": {
        start: {
          line: 101,
          column: 6
        },
        end: {
          line: 104,
          column: 8
        }
      },
      "35": {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 124,
          column: 5
        }
      },
      "36": {
        start: {
          line: 108,
          column: 27
        },
        end: {
          line: 108,
          column: 46
        }
      },
      "37": {
        start: {
          line: 109,
          column: 6
        },
        end: {
          line: 114,
          column: 7
        }
      },
      "38": {
        start: {
          line: 110,
          column: 8
        },
        end: {
          line: 113,
          column: 10
        }
      },
      "39": {
        start: {
          line: 116,
          column: 21
        },
        end: {
          line: 116,
          column: 37
        }
      },
      "40": {
        start: {
          line: 117,
          column: 6
        },
        end: {
          line: 119,
          column: 7
        }
      },
      "41": {
        start: {
          line: 118,
          column: 8
        },
        end: {
          line: 118,
          column: 53
        }
      },
      "42": {
        start: {
          line: 121,
          column: 6
        },
        end: {
          line: 121,
          column: 53
        }
      },
      "43": {
        start: {
          line: 122,
          column: 6
        },
        end: {
          line: 122,
          column: 65
        }
      },
      "44": {
        start: {
          line: 123,
          column: 6
        },
        end: {
          line: 123,
          column: 47
        }
      },
      "45": {
        start: {
          line: 126,
          column: 23
        },
        end: {
          line: 126,
          column: 44
        }
      },
      "46": {
        start: {
          line: 127,
          column: 4
        },
        end: {
          line: 127,
          column: 75
        }
      },
      "47": {
        start: {
          line: 127,
          column: 46
        },
        end: {
          line: 127,
          column: 73
        }
      },
      "48": {
        start: {
          line: 137,
          column: 4
        },
        end: {
          line: 137,
          column: 28
        }
      },
      "49": {
        start: {
          line: 140,
          column: 4
        },
        end: {
          line: 140,
          column: 48
        }
      },
      "50": {
        start: {
          line: 150,
          column: 4
        },
        end: {
          line: 150,
          column: 30
        }
      },
      "51": {
        start: {
          line: 153,
          column: 4
        },
        end: {
          line: 153,
          column: 48
        }
      },
      "52": {
        start: {
          line: 162,
          column: 4
        },
        end: {
          line: 162,
          column: 36
        }
      },
      "53": {
        start: {
          line: 165,
          column: 4
        },
        end: {
          line: 165,
          column: 48
        }
      },
      "54": {
        start: {
          line: 174,
          column: 4
        },
        end: {
          line: 174,
          column: 39
        }
      },
      "55": {
        start: {
          line: 177,
          column: 4
        },
        end: {
          line: 177,
          column: 48
        }
      },
      "56": {
        start: {
          line: 186,
          column: 4
        },
        end: {
          line: 186,
          column: 45
        }
      },
      "57": {
        start: {
          line: 189,
          column: 4
        },
        end: {
          line: 189,
          column: 48
        }
      },
      "58": {
        start: {
          line: 198,
          column: 4
        },
        end: {
          line: 198,
          column: 30
        }
      },
      "59": {
        start: {
          line: 201,
          column: 4
        },
        end: {
          line: 201,
          column: 48
        }
      },
      "60": {
        start: {
          line: 209,
          column: 4
        },
        end: {
          line: 209,
          column: 26
        }
      },
      "61": {
        start: {
          line: 212,
          column: 4
        },
        end: {
          line: 212,
          column: 48
        }
      },
      "62": {
        start: {
          line: 220,
          column: 4
        },
        end: {
          line: 220,
          column: 24
        }
      },
      "63": {
        start: {
          line: 223,
          column: 4
        },
        end: {
          line: 223,
          column: 48
        }
      },
      "64": {
        start: {
          line: 231,
          column: 4
        },
        end: {
          line: 231,
          column: 28
        }
      },
      "65": {
        start: {
          line: 234,
          column: 4
        },
        end: {
          line: 234,
          column: 48
        }
      },
      "66": {
        start: {
          line: 242,
          column: 4
        },
        end: {
          line: 242,
          column: 42
        }
      },
      "67": {
        start: {
          line: 245,
          column: 4
        },
        end: {
          line: 245,
          column: 48
        }
      },
      "68": {
        start: {
          line: 258,
          column: 13
        },
        end: {
          line: 258,
          column: 20
        }
      },
      "69": {
        start: {
          line: 262,
          column: 4
        },
        end: {
          line: 272,
          column: 5
        }
      },
      "70": {
        start: {
          line: 263,
          column: 6
        },
        end: {
          line: 271,
          column: 8
        }
      },
      "71": {
        start: {
          line: 275,
          column: 6
        },
        end: {
          line: 275,
          column: 77
        }
      },
      "72": {
        start: {
          line: 277,
          column: 24
        },
        end: {
          line: 280,
          column: 6
        }
      },
      "73": {
        start: {
          line: 282,
          column: 4
        },
        end: {
          line: 282,
          column: 31
        }
      },
      "74": {
        start: {
          line: 290,
          column: 18
        },
        end: {
          line: 290,
          column: 33
        }
      },
      "75": {
        start: {
          line: 291,
          column: 23
        },
        end: {
          line: 291,
          column: 46
        }
      },
      "76": {
        start: {
          line: 294,
          column: 4
        },
        end: {
          line: 315,
          column: 5
        }
      },
      "77": {
        start: {
          line: 296,
          column: 8
        },
        end: {
          line: 301,
          column: 10
        }
      },
      "78": {
        start: {
          line: 302,
          column: 8
        },
        end: {
          line: 302,
          column: 14
        }
      },
      "79": {
        start: {
          line: 304,
          column: 8
        },
        end: {
          line: 309,
          column: 10
        }
      },
      "80": {
        start: {
          line: 310,
          column: 8
        },
        end: {
          line: 310,
          column: 14
        }
      },
      "81": {
        start: {
          line: 312,
          column: 8
        },
        end: {
          line: 314,
          column: 10
        }
      },
      "82": {
        start: {
          line: 317,
          column: 4
        },
        end: {
          line: 317,
          column: 20
        }
      },
      "83": {
        start: {
          line: 335,
          column: 4
        },
        end: {
          line: 341,
          column: 5
        }
      },
      "84": {
        start: {
          line: 340,
          column: 6
        },
        end: {
          line: 340,
          column: 54
        }
      },
      "85": {
        start: {
          line: 343,
          column: 13
        },
        end: {
          line: 343,
          column: 37
        }
      },
      "86": {
        start: {
          line: 344,
          column: 4
        },
        end: {
          line: 350,
          column: 5
        }
      },
      "87": {
        start: {
          line: 345,
          column: 6
        },
        end: {
          line: 345,
          column: 48
        }
      },
      "88": {
        start: {
          line: 347,
          column: 6
        },
        end: {
          line: 349,
          column: 8
        }
      },
      "89": {
        start: {
          line: 353,
          column: 20
        },
        end: {
          line: 355,
          column: 5
        }
      },
      "90": {
        start: {
          line: 356,
          column: 24
        },
        end: {
          line: 362,
          column: 5
        }
      },
      "91": {
        start: {
          line: 364,
          column: 21
        },
        end: {
          line: 364,
          column: 51
        }
      },
      "92": {
        start: {
          line: 365,
          column: 22
        },
        end: {
          line: 365,
          column: 79
        }
      },
      "93": {
        start: {
          line: 366,
          column: 4
        },
        end: {
          line: 366,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 33,
            column: 2
          },
          end: {
            line: 33,
            column: 3
          }
        },
        loc: {
          start: {
            line: 33,
            column: 43
          },
          end: {
            line: 128,
            column: 3
          }
        },
        line: 33
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 127,
            column: 38
          },
          end: {
            line: 127,
            column: 39
          }
        },
        loc: {
          start: {
            line: 127,
            column: 46
          },
          end: {
            line: 127,
            column: 73
          }
        },
        line: 127
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 136,
            column: 2
          },
          end: {
            line: 136,
            column: 3
          }
        },
        loc: {
          start: {
            line: 136,
            column: 19
          },
          end: {
            line: 138,
            column: 3
          }
        },
        line: 136
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 139,
            column: 2
          },
          end: {
            line: 139,
            column: 3
          }
        },
        loc: {
          start: {
            line: 139,
            column: 24
          },
          end: {
            line: 141,
            column: 3
          }
        },
        line: 139
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 149,
            column: 2
          },
          end: {
            line: 149,
            column: 3
          }
        },
        loc: {
          start: {
            line: 149,
            column: 21
          },
          end: {
            line: 151,
            column: 3
          }
        },
        line: 149
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 152,
            column: 2
          },
          end: {
            line: 152,
            column: 3
          }
        },
        loc: {
          start: {
            line: 152,
            column: 26
          },
          end: {
            line: 154,
            column: 3
          }
        },
        line: 152
      },
      "6": {
        name: "(anonymous_6)",
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
            column: 27
          },
          end: {
            line: 163,
            column: 3
          }
        },
        line: 161
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 164,
            column: 2
          },
          end: {
            line: 164,
            column: 3
          }
        },
        loc: {
          start: {
            line: 164,
            column: 32
          },
          end: {
            line: 166,
            column: 3
          }
        },
        line: 164
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 173,
            column: 2
          },
          end: {
            line: 173,
            column: 3
          }
        },
        loc: {
          start: {
            line: 173,
            column: 30
          },
          end: {
            line: 175,
            column: 3
          }
        },
        line: 173
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 176,
            column: 2
          },
          end: {
            line: 176,
            column: 3
          }
        },
        loc: {
          start: {
            line: 176,
            column: 35
          },
          end: {
            line: 178,
            column: 3
          }
        },
        line: 176
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 185,
            column: 2
          },
          end: {
            line: 185,
            column: 3
          }
        },
        loc: {
          start: {
            line: 185,
            column: 36
          },
          end: {
            line: 187,
            column: 3
          }
        },
        line: 185
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 188,
            column: 2
          },
          end: {
            line: 188,
            column: 3
          }
        },
        loc: {
          start: {
            line: 188,
            column: 41
          },
          end: {
            line: 190,
            column: 3
          }
        },
        line: 188
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 197,
            column: 2
          },
          end: {
            line: 197,
            column: 3
          }
        },
        loc: {
          start: {
            line: 197,
            column: 21
          },
          end: {
            line: 199,
            column: 3
          }
        },
        line: 197
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 200,
            column: 2
          },
          end: {
            line: 200,
            column: 3
          }
        },
        loc: {
          start: {
            line: 200,
            column: 26
          },
          end: {
            line: 202,
            column: 3
          }
        },
        line: 200
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 208,
            column: 2
          },
          end: {
            line: 208,
            column: 3
          }
        },
        loc: {
          start: {
            line: 208,
            column: 17
          },
          end: {
            line: 210,
            column: 3
          }
        },
        line: 208
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 211,
            column: 2
          },
          end: {
            line: 211,
            column: 3
          }
        },
        loc: {
          start: {
            line: 211,
            column: 22
          },
          end: {
            line: 213,
            column: 3
          }
        },
        line: 211
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 219,
            column: 2
          },
          end: {
            line: 219,
            column: 3
          }
        },
        loc: {
          start: {
            line: 219,
            column: 15
          },
          end: {
            line: 221,
            column: 3
          }
        },
        line: 219
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 222,
            column: 2
          },
          end: {
            line: 222,
            column: 3
          }
        },
        loc: {
          start: {
            line: 222,
            column: 20
          },
          end: {
            line: 224,
            column: 3
          }
        },
        line: 222
      },
      "18": {
        name: "(anonymous_18)",
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
            column: 19
          },
          end: {
            line: 232,
            column: 3
          }
        },
        line: 230
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 233,
            column: 2
          },
          end: {
            line: 233,
            column: 3
          }
        },
        loc: {
          start: {
            line: 233,
            column: 24
          },
          end: {
            line: 235,
            column: 3
          }
        },
        line: 233
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 241,
            column: 2
          },
          end: {
            line: 241,
            column: 3
          }
        },
        loc: {
          start: {
            line: 241,
            column: 13
          },
          end: {
            line: 243,
            column: 3
          }
        },
        line: 241
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 244,
            column: 2
          },
          end: {
            line: 244,
            column: 3
          }
        },
        loc: {
          start: {
            line: 244,
            column: 18
          },
          end: {
            line: 246,
            column: 3
          }
        },
        line: 244
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 257,
            column: 2
          },
          end: {
            line: 257,
            column: 3
          }
        },
        loc: {
          start: {
            line: 257,
            column: 18
          },
          end: {
            line: 283,
            column: 3
          }
        },
        line: 257
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 289,
            column: 2
          },
          end: {
            line: 289,
            column: 3
          }
        },
        loc: {
          start: {
            line: 289,
            column: 15
          },
          end: {
            line: 318,
            column: 3
          }
        },
        line: 289
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 333,
            column: 2
          },
          end: {
            line: 333,
            column: 3
          }
        },
        loc: {
          start: {
            line: 333,
            column: 33
          },
          end: {
            line: 367,
            column: 3
          }
        },
        line: 333
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 34,
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
            line: 34,
            column: 4
          },
          end: {
            line: 37,
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
        line: 34
      },
      "1": {
        loc: {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 49,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 49,
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
        line: 40
      },
      "2": {
        loc: {
          start: {
            line: 42,
            column: 8
          },
          end: {
            line: 43,
            column: 58
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 42,
            column: 8
          },
          end: {
            line: 42,
            column: 60
          }
        }, {
          start: {
            line: 43,
            column: 8
          },
          end: {
            line: 43,
            column: 58
          }
        }],
        line: 42
      },
      "3": {
        loc: {
          start: {
            line: 54,
            column: 24
          },
          end: {
            line: 54,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 54,
            column: 24
          },
          end: {
            line: 54,
            column: 47
          }
        }, {
          start: {
            line: 54,
            column: 51
          },
          end: {
            line: 54,
            column: 53
          }
        }],
        line: 54
      },
      "4": {
        loc: {
          start: {
            line: 62,
            column: 4
          },
          end: {
            line: 71,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 63,
            column: 6
          },
          end: {
            line: 67,
            column: 14
          }
        }, {
          start: {
            line: 68,
            column: 6
          },
          end: {
            line: 70,
            column: 14
          }
        }],
        line: 62
      },
      "5": {
        loc: {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 98,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 76,
            column: 6
          },
          end: {
            line: 78,
            column: 14
          }
        }, {
          start: {
            line: 80,
            column: 6
          },
          end: {
            line: 94,
            column: 14
          }
        }, {
          start: {
            line: 96,
            column: 6
          },
          end: {
            line: 97,
            column: 14
          }
        }],
        line: 75
      },
      "6": {
        loc: {
          start: {
            line: 81,
            column: 8
          },
          end: {
            line: 93,
            column: 9
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 82,
            column: 10
          },
          end: {
            line: 84,
            column: 18
          }
        }, {
          start: {
            line: 86,
            column: 10
          },
          end: {
            line: 89,
            column: 18
          }
        }, {
          start: {
            line: 91,
            column: 10
          },
          end: {
            line: 92,
            column: 18
          }
        }],
        line: 81
      },
      "7": {
        loc: {
          start: {
            line: 100,
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
            line: 100,
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
        line: 100
      },
      "8": {
        loc: {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 124,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 124,
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
        line: 107
      },
      "9": {
        loc: {
          start: {
            line: 109,
            column: 6
          },
          end: {
            line: 114,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 109,
            column: 6
          },
          end: {
            line: 114,
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
        line: 109
      },
      "10": {
        loc: {
          start: {
            line: 117,
            column: 6
          },
          end: {
            line: 119,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 117,
            column: 6
          },
          end: {
            line: 119,
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
        line: 117
      },
      "11": {
        loc: {
          start: {
            line: 126,
            column: 23
          },
          end: {
            line: 126,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 126,
            column: 23
          },
          end: {
            line: 126,
            column: 38
          }
        }, {
          start: {
            line: 126,
            column: 42
          },
          end: {
            line: 126,
            column: 44
          }
        }],
        line: 126
      },
      "12": {
        loc: {
          start: {
            line: 262,
            column: 4
          },
          end: {
            line: 272,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 262,
            column: 4
          },
          end: {
            line: 272,
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
        line: 262
      },
      "13": {
        loc: {
          start: {
            line: 294,
            column: 4
          },
          end: {
            line: 315,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 295,
            column: 6
          },
          end: {
            line: 302,
            column: 14
          }
        }, {
          start: {
            line: 303,
            column: 6
          },
          end: {
            line: 310,
            column: 14
          }
        }, {
          start: {
            line: 311,
            column: 6
          },
          end: {
            line: 314,
            column: 10
          }
        }],
        line: 294
      },
      "14": {
        loc: {
          start: {
            line: 335,
            column: 4
          },
          end: {
            line: 341,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 335,
            column: 4
          },
          end: {
            line: 341,
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
        line: 335
      },
      "15": {
        loc: {
          start: {
            line: 336,
            column: 6
          },
          end: {
            line: 338,
            column: 39
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 336,
            column: 6
          },
          end: {
            line: 336,
            column: 32
          }
        }, {
          start: {
            line: 337,
            column: 6
          },
          end: {
            line: 337,
            column: 17
          }
        }, {
          start: {
            line: 338,
            column: 6
          },
          end: {
            line: 338,
            column: 39
          }
        }],
        line: 336
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
      "93": 0
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
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0, 0],
      "6": [0, 0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0, 0],
      "14": [0, 0],
      "15": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a93b2ec6fbed2623cb6041a9d8fe38868b00be13"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_18v175hvfo = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_18v175hvfo();
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * Use {@link TransactionBuilder} to build a transaction object. If you have an
 * object or base64-encoded string of the transaction envelope XDR, use {@link
 * TransactionBuilder.fromXDR}.
 *
 * Once a Transaction has been created, its attributes and operations should not
 * be changed. You should only add signatures (using {@link Transaction#sign})
 * to a Transaction object before submitting to the network or forwarding on to
 * additional signers.
 *
 * @constructor
 *
 * @param {string|xdr.TransactionEnvelope} envelope - transaction envelope
 *     object or base64 encoded string
 * @param {string}  [networkPassphrase] - passphrase of the target stellar
 *     network (e.g. "Public Global Stellar Network ; September 2015")
 *
 * @extends TransactionBase
 */
var Transaction = exports.Transaction = /*#__PURE__*/function (_TransactionBase) {
  function Transaction(envelope, networkPassphrase) {
    var _this;
    _classCallCheck(this, Transaction);
    cov_18v175hvfo().f[0]++;
    cov_18v175hvfo().s[0]++;
    if (typeof envelope === 'string') {
      cov_18v175hvfo().b[0][0]++;
      var buffer = (cov_18v175hvfo().s[1]++, Buffer.from(envelope, 'base64'));
      cov_18v175hvfo().s[2]++;
      envelope = _xdr["default"].TransactionEnvelope.fromXDR(buffer);
    } else {
      cov_18v175hvfo().b[0][1]++;
    }
    var envelopeType = (cov_18v175hvfo().s[3]++, envelope["switch"]());
    cov_18v175hvfo().s[4]++;
    if (!((cov_18v175hvfo().b[2][0]++, envelopeType === _xdr["default"].EnvelopeType.envelopeTypeTxV0()) || (cov_18v175hvfo().b[2][1]++, envelopeType === _xdr["default"].EnvelopeType.envelopeTypeTx()))) {
      cov_18v175hvfo().b[1][0]++;
      cov_18v175hvfo().s[5]++;
      throw new Error("Invalid TransactionEnvelope: expected an envelopeTypeTxV0 or envelopeTypeTx but received an ".concat(envelopeType.name, "."));
    } else {
      cov_18v175hvfo().b[1][1]++;
    }
    var txEnvelope = (cov_18v175hvfo().s[6]++, envelope.value());
    var tx = (cov_18v175hvfo().s[7]++, txEnvelope.tx());
    var fee = (cov_18v175hvfo().s[8]++, tx.fee().toString());
    var signatures = (cov_18v175hvfo().s[9]++, ((cov_18v175hvfo().b[3][0]++, txEnvelope.signatures()) || (cov_18v175hvfo().b[3][1]++, [])).slice());
    cov_18v175hvfo().s[10]++;
    _this = _callSuper(this, Transaction, [tx, signatures, fee, networkPassphrase]);
    cov_18v175hvfo().s[11]++;
    _this._envelopeType = envelopeType;
    cov_18v175hvfo().s[12]++;
    _this._memo = tx.memo();
    cov_18v175hvfo().s[13]++;
    _this._sequence = tx.seqNum().toString();
    cov_18v175hvfo().s[14]++;
    switch (_this._envelopeType) {
      case _xdr["default"].EnvelopeType.envelopeTypeTxV0():
        cov_18v175hvfo().b[4][0]++;
        cov_18v175hvfo().s[15]++;
        _this._source = _strkey.StrKey.encodeDilithium2PublicKey(_this.tx.sourceAccountDilithium2());
        cov_18v175hvfo().s[16]++;
        break;
      default:
        cov_18v175hvfo().b[4][1]++;
        cov_18v175hvfo().s[17]++;
        _this._source = (0, _decode_encode_muxed_account.encodeMuxedAccountToAddress)(_this.tx.sourceAccount());
        cov_18v175hvfo().s[18]++;
        break;
    }
    var cond = (cov_18v175hvfo().s[19]++, null);
    var timeBounds = (cov_18v175hvfo().s[20]++, null);
    cov_18v175hvfo().s[21]++;
    switch (_this._envelopeType) {
      case _xdr["default"].EnvelopeType.envelopeTypeTxV0():
        cov_18v175hvfo().b[5][0]++;
        cov_18v175hvfo().s[22]++;
        timeBounds = tx.timeBounds();
        cov_18v175hvfo().s[23]++;
        break;
      case _xdr["default"].EnvelopeType.envelopeTypeTx():
        cov_18v175hvfo().b[5][1]++;
        cov_18v175hvfo().s[24]++;
        switch (tx.cond()["switch"]()) {
          case _xdr["default"].PreconditionType.precondTime():
            cov_18v175hvfo().b[6][0]++;
            cov_18v175hvfo().s[25]++;
            timeBounds = tx.cond().timeBounds();
            cov_18v175hvfo().s[26]++;
            break;
          case _xdr["default"].PreconditionType.precondV2():
            cov_18v175hvfo().b[6][1]++;
            cov_18v175hvfo().s[27]++;
            cond = tx.cond().v2();
            cov_18v175hvfo().s[28]++;
            timeBounds = cond.timeBounds();
            cov_18v175hvfo().s[29]++;
            break;
          default:
            cov_18v175hvfo().b[6][2]++;
            cov_18v175hvfo().s[30]++;
            break;
        }
        cov_18v175hvfo().s[31]++;
        break;
      default:
        cov_18v175hvfo().b[5][2]++;
        cov_18v175hvfo().s[32]++;
        break;
    }
    cov_18v175hvfo().s[33]++;
    if (timeBounds) {
      cov_18v175hvfo().b[7][0]++;
      cov_18v175hvfo().s[34]++;
      _this._timeBounds = {
        minTime: timeBounds.minTime().toString(),
        maxTime: timeBounds.maxTime().toString()
      };
    } else {
      cov_18v175hvfo().b[7][1]++;
    }
    cov_18v175hvfo().s[35]++;
    if (cond) {
      cov_18v175hvfo().b[8][0]++;
      var ledgerBounds = (cov_18v175hvfo().s[36]++, cond.ledgerBounds());
      cov_18v175hvfo().s[37]++;
      if (ledgerBounds) {
        cov_18v175hvfo().b[9][0]++;
        cov_18v175hvfo().s[38]++;
        _this._ledgerBounds = {
          minLedger: ledgerBounds.minLedger(),
          maxLedger: ledgerBounds.maxLedger()
        };
      } else {
        cov_18v175hvfo().b[9][1]++;
      }
      var minSeq = (cov_18v175hvfo().s[39]++, cond.minSeqNum());
      cov_18v175hvfo().s[40]++;
      if (minSeq) {
        cov_18v175hvfo().b[10][0]++;
        cov_18v175hvfo().s[41]++;
        _this._minAccountSequence = minSeq.toString();
      } else {
        cov_18v175hvfo().b[10][1]++;
      }
      cov_18v175hvfo().s[42]++;
      _this._minAccountSequenceAge = cond.minSeqAge();
      cov_18v175hvfo().s[43]++;
      _this._minAccountSequenceLedgerGap = cond.minSeqLedgerGap();
      cov_18v175hvfo().s[44]++;
      _this._extraSigners = cond.extraSigners();
    } else {
      cov_18v175hvfo().b[8][1]++;
    }
    var operations = (cov_18v175hvfo().s[45]++, (cov_18v175hvfo().b[11][0]++, tx.operations()) || (cov_18v175hvfo().b[11][1]++, []));
    cov_18v175hvfo().s[46]++;
    _this._operations = operations.map(function (op) {
      cov_18v175hvfo().f[1]++;
      cov_18v175hvfo().s[47]++;
      return _operation.Operation.fromXDRObject(op);
    });
    return _this;
  }

  /**
   * @type {object}
   * @property {string} 64 bit unix timestamp
   * @property {string} 64 bit unix timestamp
   * @readonly
   */
  _inherits(Transaction, _TransactionBase);
  return _createClass(Transaction, [{
    key: "timeBounds",
    get: function get() {
      cov_18v175hvfo().f[2]++;
      cov_18v175hvfo().s[48]++;
      return this._timeBounds;
    },
    set: function set(value) {
      cov_18v175hvfo().f[3]++;
      cov_18v175hvfo().s[49]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * @type {object}
     * @property {number} minLedger - smallest ledger bound (uint32)
     * @property {number} maxLedger - largest ledger bound (or 0 for inf)
     * @readonly
     */
  }, {
    key: "ledgerBounds",
    get: function get() {
      cov_18v175hvfo().f[4]++;
      cov_18v175hvfo().s[50]++;
      return this._ledgerBounds;
    },
    set: function set(value) {
      cov_18v175hvfo().f[5]++;
      cov_18v175hvfo().s[51]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * 64 bit account sequence
     * @readonly
     * @type {string}
     */
  }, {
    key: "minAccountSequence",
    get: function get() {
      cov_18v175hvfo().f[6]++;
      cov_18v175hvfo().s[52]++;
      return this._minAccountSequence;
    },
    set: function set(value) {
      cov_18v175hvfo().f[7]++;
      cov_18v175hvfo().s[53]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * 64 bit number of seconds
     * @type {number}
     * @readonly
     */
  }, {
    key: "minAccountSequenceAge",
    get: function get() {
      cov_18v175hvfo().f[8]++;
      cov_18v175hvfo().s[54]++;
      return this._minAccountSequenceAge;
    },
    set: function set(value) {
      cov_18v175hvfo().f[9]++;
      cov_18v175hvfo().s[55]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * 32 bit number of ledgers
     * @type {number}
     * @readonly
     */
  }, {
    key: "minAccountSequenceLedgerGap",
    get: function get() {
      cov_18v175hvfo().f[10]++;
      cov_18v175hvfo().s[56]++;
      return this._minAccountSequenceLedgerGap;
    },
    set: function set(value) {
      cov_18v175hvfo().f[11]++;
      cov_18v175hvfo().s[57]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * array of extra signers ({@link StrKey}s)
     * @type {string[]}
     * @readonly
     */
  }, {
    key: "extraSigners",
    get: function get() {
      cov_18v175hvfo().f[12]++;
      cov_18v175hvfo().s[58]++;
      return this._extraSigners;
    },
    set: function set(value) {
      cov_18v175hvfo().f[13]++;
      cov_18v175hvfo().s[59]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * @type {string}
     * @readonly
     */
  }, {
    key: "sequence",
    get: function get() {
      cov_18v175hvfo().f[14]++;
      cov_18v175hvfo().s[60]++;
      return this._sequence;
    },
    set: function set(value) {
      cov_18v175hvfo().f[15]++;
      cov_18v175hvfo().s[61]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * @type {string}
     * @readonly
     */
  }, {
    key: "source",
    get: function get() {
      cov_18v175hvfo().f[16]++;
      cov_18v175hvfo().s[62]++;
      return this._source;
    },
    set: function set(value) {
      cov_18v175hvfo().f[17]++;
      cov_18v175hvfo().s[63]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * @type {Array.<xdr.Operation>}
     * @readonly
     */
  }, {
    key: "operations",
    get: function get() {
      cov_18v175hvfo().f[18]++;
      cov_18v175hvfo().s[64]++;
      return this._operations;
    },
    set: function set(value) {
      cov_18v175hvfo().f[19]++;
      cov_18v175hvfo().s[65]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * @type {string}
     * @readonly
     */
  }, {
    key: "memo",
    get: function get() {
      cov_18v175hvfo().f[20]++;
      cov_18v175hvfo().s[66]++;
      return _memo.Memo.fromXDRObject(this._memo);
    },
    set: function set(value) {
      cov_18v175hvfo().f[21]++;
      cov_18v175hvfo().s[67]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * Returns the "signature base" of this transaction, which is the value
     * that, when hashed, should be signed to create a signature that
     * validators on the Stellar Network will accept.
     *
     * It is composed of a 4 prefix bytes followed by the xdr-encoded form
     * of this transaction.
     * @returns {Buffer}
     */
  }, {
    key: "signatureBase",
    value: function signatureBase() {
      cov_18v175hvfo().f[22]++;
      var tx = (cov_18v175hvfo().s[68]++, this.tx);

      // Backwards Compatibility: Use ENVELOPE_TYPE_TX to sign ENVELOPE_TYPE_TX_V0
      // we need a Transaction to generate the signature base
      cov_18v175hvfo().s[69]++;
      if (this._envelopeType === _xdr["default"].EnvelopeType.envelopeTypeTxV0()) {
        cov_18v175hvfo().b[12][0]++;
        cov_18v175hvfo().s[70]++;
        tx = _xdr["default"].Transaction.fromXDR(Buffer.concat([
        // TransactionV0 is a transaction with the AccountID discriminant
        // stripped off, we need to put it back to build a valid transaction
        // which we can use to build a TransactionSignaturePayloadTaggedTransaction
        _xdr["default"].PublicKeyType.publicKeyTypeDilithium2().toXDR(), tx.toXDR()]));
      } else {
        cov_18v175hvfo().b[12][1]++;
      }
      var taggedTransaction = (cov_18v175hvfo().s[71]++, new _xdr["default"].TransactionSignaturePayloadTaggedTransaction.envelopeTypeTx(tx));
      var txSignature = (cov_18v175hvfo().s[72]++, new _xdr["default"].TransactionSignaturePayload({
        networkId: _xdr["default"].Hash.fromXDR((0, _hashing.hash)(this.networkPassphrase)),
        taggedTransaction: taggedTransaction
      }));
      cov_18v175hvfo().s[73]++;
      return txSignature.toXDR();
    }

    /**
     * To envelope returns a xdr.TransactionEnvelope which can be submitted to the network.
     * @returns {xdr.TransactionEnvelope}
     */
  }, {
    key: "toEnvelope",
    value: function toEnvelope() {
      cov_18v175hvfo().f[23]++;
      var rawTx = (cov_18v175hvfo().s[74]++, this.tx.toXDR());
      var signatures = (cov_18v175hvfo().s[75]++, this.signatures.slice()); // make a copy of the signatures

      var envelope;
      cov_18v175hvfo().s[76]++;
      switch (this._envelopeType) {
        case _xdr["default"].EnvelopeType.envelopeTypeTxV0():
          cov_18v175hvfo().b[13][0]++;
          cov_18v175hvfo().s[77]++;
          envelope = new _xdr["default"].TransactionEnvelope.envelopeTypeTxV0(new _xdr["default"].TransactionV0Envelope({
            tx: _xdr["default"].TransactionV0.fromXDR(rawTx),
            // make a copy of tx
            signatures: signatures
          }));
          cov_18v175hvfo().s[78]++;
          break;
        case _xdr["default"].EnvelopeType.envelopeTypeTx():
          cov_18v175hvfo().b[13][1]++;
          cov_18v175hvfo().s[79]++;
          envelope = new _xdr["default"].TransactionEnvelope.envelopeTypeTx(new _xdr["default"].TransactionV1Envelope({
            tx: _xdr["default"].Transaction.fromXDR(rawTx),
            // make a copy of tx
            signatures: signatures
          }));
          cov_18v175hvfo().s[80]++;
          break;
        default:
          cov_18v175hvfo().b[13][2]++;
          cov_18v175hvfo().s[81]++;
          throw new Error("Invalid TransactionEnvelope: expected an envelopeTypeTxV0 or envelopeTypeTx but received an ".concat(this._envelopeType.name, "."));
      }
      cov_18v175hvfo().s[82]++;
      return envelope;
    }

    /**
     * Calculate the claimable balance ID for an operation within the transaction.
     *
     * @param   {integer}  opIndex   the index of the CreateClaimableBalance op
     * @returns {string}   a hex string representing the claimable balance ID
     *
     * @throws {RangeError}   for invalid `opIndex` value
     * @throws {TypeError}    if op at `opIndex` is not `CreateClaimableBalance`
     * @throws for general XDR un/marshalling failures
     *
     * @see https://github.com/stellar/go/blob/d712346e61e288d450b0c08038c158f8848cc3e4/txnbuild/transaction.go#L392-L435
     *
     */
  }, {
    key: "getClaimableBalanceId",
    value: function getClaimableBalanceId(opIndex) {
      cov_18v175hvfo().f[24]++;
      cov_18v175hvfo().s[83]++;
      // Validate and then extract the operation from the transaction.
      if ((cov_18v175hvfo().b[15][0]++, !Number.isInteger(opIndex)) || (cov_18v175hvfo().b[15][1]++, opIndex < 0) || (cov_18v175hvfo().b[15][2]++, opIndex >= this.operations.length)) {
        cov_18v175hvfo().b[14][0]++;
        cov_18v175hvfo().s[84]++;
        throw new RangeError('invalid operation index');
      } else {
        cov_18v175hvfo().b[14][1]++;
      }
      var op = (cov_18v175hvfo().s[85]++, this.operations[opIndex]);
      cov_18v175hvfo().s[86]++;
      try {
        cov_18v175hvfo().s[87]++;
        op = _operation.Operation.createClaimableBalance(op);
      } catch (err) {
        cov_18v175hvfo().s[88]++;
        throw new TypeError("expected createClaimableBalance, got ".concat(op.type, ": ").concat(err));
      }

      // Always use the transaction's *unmuxed* source.
      var account = (cov_18v175hvfo().s[89]++, _strkey.StrKey.decodeDilithium2PublicKey((0, _decode_encode_muxed_account.extractBaseAddress)(this.source)));
      var operationId = (cov_18v175hvfo().s[90]++, _xdr["default"].HashIdPreimage.envelopeTypeOpId(new _xdr["default"].HashIdPreimageOperationId({
        sourceAccount: _xdr["default"].AccountId.publicKeyTypeDilithium2(account),
        seqNum: _xdr["default"].SequenceNumber.fromString(this.sequence),
        opNum: opIndex
      })));
      var opIdHash = (cov_18v175hvfo().s[91]++, (0, _hashing.hash)(operationId.toXDR('raw')));
      var balanceId = (cov_18v175hvfo().s[92]++, _xdr["default"].ClaimableBalanceId.claimableBalanceIdTypeV0(opIdHash));
      cov_18v175hvfo().s[93]++;
      return balanceId.toXDR('hex');
    }
  }]);
}(_transaction_base.TransactionBase);