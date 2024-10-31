"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StrKey = void 0;
exports.decodeCheck = decodeCheck;
exports.encodeCheck = encodeCheck;
var _base = _interopRequireDefault(require("base32.js"));
var _checksum = require("./util/checksum");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_2mcp710y2x() {
  var path = "/mnt/g/stellar-base/src/strkey.js";
  var hash = "d1943e772590d77627063a03bd941397661f134a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/strkey.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 21
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "1": {
        start: {
          line: 16,
          column: 20
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "2": {
        start: {
          line: 42,
          column: 2
        },
        end: {
          line: 42,
          column: 50
        }
      },
      "3": {
        start: {
          line: 55,
          column: 2
        },
        end: {
          line: 55,
          column: 50
        }
      },
      "4": {
        start: {
          line: 64,
          column: 2
        },
        end: {
          line: 64,
          column: 51
        }
      },
      "5": {
        start: {
          line: 72,
          column: 2
        },
        end: {
          line: 72,
          column: 51
        }
      },
      "6": {
        start: {
          line: 81,
          column: 2
        },
        end: {
          line: 81,
          column: 54
        }
      },
      "7": {
        start: {
          line: 90,
          column: 2
        },
        end: {
          line: 90,
          column: 47
        }
      },
      "8": {
        start: {
          line: 100,
          column: 4
        },
        end: {
          line: 100,
          column: 53
        }
      },
      "9": {
        start: {
          line: 109,
          column: 4
        },
        end: {
          line: 109,
          column: 56
        }
      },
      "10": {
        start: {
          line: 118,
          column: 4
        },
        end: {
          line: 118,
          column: 54
        }
      },
      "11": {
        start: {
          line: 127,
          column: 4
        },
        end: {
          line: 127,
          column: 42
        }
      },
      "12": {
        start: {
          line: 136,
          column: 4
        },
        end: {
          line: 136,
          column: 45
        }
      },
      "13": {
        start: {
          line: 145,
          column: 4
        },
        end: {
          line: 145,
          column: 43
        }
      },
      "14": {
        start: {
          line: 154,
          column: 4
        },
        end: {
          line: 154,
          column: 46
        }
      },
      "15": {
        start: {
          line: 163,
          column: 4
        },
        end: {
          line: 163,
          column: 46
        }
      },
      "16": {
        start: {
          line: 172,
          column: 4
        },
        end: {
          line: 172,
          column: 49
        }
      },
      "17": {
        start: {
          line: 181,
          column: 4
        },
        end: {
          line: 181,
          column: 45
        }
      },
      "18": {
        start: {
          line: 190,
          column: 4
        },
        end: {
          line: 190,
          column: 41
        }
      },
      "19": {
        start: {
          line: 199,
          column: 4
        },
        end: {
          line: 199,
          column: 44
        }
      },
      "20": {
        start: {
          line: 208,
          column: 4
        },
        end: {
          line: 208,
          column: 40
        }
      },
      "21": {
        start: {
          line: 212,
          column: 4
        },
        end: {
          line: 212,
          column: 35
        }
      },
      "22": {
        start: {
          line: 230,
          column: 2
        },
        end: {
          line: 232,
          column: 3
        }
      },
      "23": {
        start: {
          line: 231,
          column: 4
        },
        end: {
          line: 231,
          column: 17
        }
      },
      "24": {
        start: {
          line: 235,
          column: 2
        },
        end: {
          line: 272,
          column: 3
        }
      },
      "25": {
        start: {
          line: 239,
          column: 6
        },
        end: {
          line: 241,
          column: 7
        }
      },
      "26": {
        start: {
          line: 240,
          column: 8
        },
        end: {
          line: 240,
          column: 21
        }
      },
      "27": {
        start: {
          line: 242,
          column: 6
        },
        end: {
          line: 242,
          column: 12
        }
      },
      "28": {
        start: {
          line: 246,
          column: 6
        },
        end: {
          line: 248,
          column: 7
        }
      },
      "29": {
        start: {
          line: 247,
          column: 8
        },
        end: {
          line: 247,
          column: 21
        }
      },
      "30": {
        start: {
          line: 249,
          column: 6
        },
        end: {
          line: 249,
          column: 12
        }
      },
      "31": {
        start: {
          line: 253,
          column: 4
        },
        end: {
          line: 255,
          column: 5
        }
      },
      "32": {
        start: {
          line: 254,
          column: 6
        },
        end: {
          line: 254,
          column: 19
        }
      },
      "33": {
        start: {
          line: 256,
          column: 4
        },
        end: {
          line: 256,
          column: 10
        }
      },
      "34": {
        start: {
          line: 259,
          column: 6
        },
        end: {
          line: 261,
          column: 7
        }
      },
      "35": {
        start: {
          line: 260,
          column: 8
        },
        end: {
          line: 260,
          column: 21
        }
      },
      "36": {
        start: {
          line: 262,
          column: 6
        },
        end: {
          line: 262,
          column: 12
        }
      },
      "37": {
        start: {
          line: 265,
          column: 6
        },
        end: {
          line: 267,
          column: 7
        }
      },
      "38": {
        start: {
          line: 266,
          column: 8
        },
        end: {
          line: 266,
          column: 21
        }
      },
      "39": {
        start: {
          line: 268,
          column: 6
        },
        end: {
          line: 268,
          column: 12
        }
      },
      "40": {
        start: {
          line: 271,
          column: 6
        },
        end: {
          line: 271,
          column: 19
        }
      },
      "41": {
        start: {
          line: 274,
          column: 16
        },
        end: {
          line: 274,
          column: 18
        }
      },
      "42": {
        start: {
          line: 275,
          column: 2
        },
        end: {
          line: 279,
          column: 3
        }
      },
      "43": {
        start: {
          line: 276,
          column: 4
        },
        end: {
          line: 276,
          column: 52
        }
      },
      "44": {
        start: {
          line: 278,
          column: 4
        },
        end: {
          line: 278,
          column: 17
        }
      },
      "45": {
        start: {
          line: 282,
          column: 2
        },
        end: {
          line: 308,
          column: 3
        }
      },
      "46": {
        start: {
          line: 286,
          column: 6
        },
        end: {
          line: 286,
          column: 37
        }
      },
      "47": {
        start: {
          line: 290,
          column: 6
        },
        end: {
          line: 290,
          column: 37
        }
      },
      "48": {
        start: {
          line: 294,
          column: 6
        },
        end: {
          line: 294,
          column: 35
        }
      },
      "49": {
        start: {
          line: 297,
          column: 6
        },
        end: {
          line: 297,
          column: 37
        }
      },
      "50": {
        start: {
          line: 300,
          column: 6
        },
        end: {
          line: 304,
          column: 8
        }
      },
      "51": {
        start: {
          line: 307,
          column: 6
        },
        end: {
          line: 307,
          column: 19
        }
      },
      "52": {
        start: {
          line: 312,
          column: 2
        },
        end: {
          line: 314,
          column: 3
        }
      },
      "53": {
        start: {
          line: 313,
          column: 4
        },
        end: {
          line: 313,
          column: 67
        }
      },
      "54": {
        start: {
          line: 316,
          column: 18
        },
        end: {
          line: 316,
          column: 40
        }
      },
      "55": {
        start: {
          line: 317,
          column: 22
        },
        end: {
          line: 317,
          column: 32
        }
      },
      "56": {
        start: {
          line: 318,
          column: 18
        },
        end: {
          line: 318,
          column: 38
        }
      },
      "57": {
        start: {
          line: 319,
          column: 15
        },
        end: {
          line: 319,
          column: 31
        }
      },
      "58": {
        start: {
          line: 320,
          column: 19
        },
        end: {
          line: 320,
          column: 36
        }
      },
      "59": {
        start: {
          line: 322,
          column: 2
        },
        end: {
          line: 324,
          column: 3
        }
      },
      "60": {
        start: {
          line: 323,
          column: 4
        },
        end: {
          line: 323,
          column: 46
        }
      },
      "61": {
        start: {
          line: 326,
          column: 26
        },
        end: {
          line: 326,
          column: 55
        }
      },
      "62": {
        start: {
          line: 328,
          column: 2
        },
        end: {
          line: 333,
          column: 3
        }
      },
      "63": {
        start: {
          line: 329,
          column: 4
        },
        end: {
          line: 332,
          column: 6
        }
      },
      "64": {
        start: {
          line: 335,
          column: 2
        },
        end: {
          line: 339,
          column: 3
        }
      },
      "65": {
        start: {
          line: 336,
          column: 4
        },
        end: {
          line: 338,
          column: 6
        }
      },
      "66": {
        start: {
          line: 341,
          column: 27
        },
        end: {
          line: 341,
          column: 53
        }
      },
      "67": {
        start: {
          line: 343,
          column: 2
        },
        end: {
          line: 345,
          column: 3
        }
      },
      "68": {
        start: {
          line: 344,
          column: 4
        },
        end: {
          line: 344,
          column: 40
        }
      },
      "69": {
        start: {
          line: 347,
          column: 2
        },
        end: {
          line: 347,
          column: 27
        }
      },
      "70": {
        start: {
          line: 351,
          column: 2
        },
        end: {
          line: 353,
          column: 3
        }
      },
      "71": {
        start: {
          line: 352,
          column: 4
        },
        end: {
          line: 352,
          column: 47
        }
      },
      "72": {
        start: {
          line: 355,
          column: 22
        },
        end: {
          line: 355,
          column: 51
        }
      },
      "73": {
        start: {
          line: 357,
          column: 2
        },
        end: {
          line: 362,
          column: 3
        }
      },
      "74": {
        start: {
          line: 358,
          column: 4
        },
        end: {
          line: 361,
          column: 6
        }
      },
      "75": {
        start: {
          line: 363,
          column: 2
        },
        end: {
          line: 363,
          column: 27
        }
      },
      "76": {
        start: {
          line: 365,
          column: 24
        },
        end: {
          line: 365,
          column: 50
        }
      },
      "77": {
        start: {
          line: 366,
          column: 18
        },
        end: {
          line: 366,
          column: 54
        }
      },
      "78": {
        start: {
          line: 367,
          column: 19
        },
        end: {
          line: 367,
          column: 58
        }
      },
      "79": {
        start: {
          line: 368,
          column: 20
        },
        end: {
          line: 368,
          column: 54
        }
      },
      "80": {
        start: {
          line: 369,
          column: 2
        },
        end: {
          line: 369,
          column: 34
        }
      },
      "81": {
        start: {
          line: 374,
          column: 19
        },
        end: {
          line: 404,
          column: 3
        }
      },
      "82": {
        start: {
          line: 406,
          column: 14
        },
        end: {
          line: 406,
          column: 17
        }
      },
      "83": {
        start: {
          line: 408,
          column: 2
        },
        end: {
          line: 413,
          column: 3
        }
      },
      "84": {
        start: {
          line: 408,
          column: 15
        },
        end: {
          line: 408,
          column: 16
        }
      },
      "85": {
        start: {
          line: 409,
          column: 17
        },
        end: {
          line: 409,
          column: 27
        }
      },
      "86": {
        start: {
          line: 410,
          column: 24
        },
        end: {
          line: 410,
          column: 43
        }
      },
      "87": {
        start: {
          line: 411,
          column: 4
        },
        end: {
          line: 411,
          column: 49
        }
      },
      "88": {
        start: {
          line: 412,
          column: 4
        },
        end: {
          line: 412,
          column: 20
        }
      },
      "89": {
        start: {
          line: 414,
          column: 19
        },
        end: {
          line: 414,
          column: 36
        }
      },
      "90": {
        start: {
          line: 415,
          column: 2
        },
        end: {
          line: 415,
          column: 29
        }
      },
      "91": {
        start: {
          line: 416,
          column: 2
        },
        end: {
          line: 416,
          column: 36
        }
      },
      "92": {
        start: {
          line: 417,
          column: 2
        },
        end: {
          line: 417,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 41,
            column: 0
          },
          end: {
            line: 41,
            column: 1
          }
        },
        loc: {
          start: {
            line: 41,
            column: 39
          },
          end: {
            line: 43,
            column: 1
          }
        },
        line: 41
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 54,
            column: 0
          },
          end: {
            line: 54,
            column: 1
          }
        },
        loc: {
          start: {
            line: 54,
            column: 39
          },
          end: {
            line: 56,
            column: 1
          }
        },
        line: 54
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 63,
            column: 0
          },
          end: {
            line: 63,
            column: 1
          }
        },
        loc: {
          start: {
            line: 63,
            column: 45
          },
          end: {
            line: 65,
            column: 1
          }
        },
        line: 63
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 71,
            column: 0
          },
          end: {
            line: 71,
            column: 1
          }
        },
        loc: {
          start: {
            line: 71,
            column: 40
          },
          end: {
            line: 73,
            column: 1
          }
        },
        line: 71
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 80,
            column: 0
          },
          end: {
            line: 80,
            column: 1
          }
        },
        loc: {
          start: {
            line: 80,
            column: 43
          },
          end: {
            line: 82,
            column: 1
          }
        },
        line: 80
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 89,
            column: 0
          },
          end: {
            line: 89,
            column: 1
          }
        },
        loc: {
          start: {
            line: 89,
            column: 41
          },
          end: {
            line: 91,
            column: 1
          }
        },
        line: 89
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 99,
            column: 2
          },
          end: {
            line: 99,
            column: 3
          }
        },
        loc: {
          start: {
            line: 99,
            column: 42
          },
          end: {
            line: 101,
            column: 3
          }
        },
        line: 99
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 108,
            column: 2
          },
          end: {
            line: 108,
            column: 3
          }
        },
        loc: {
          start: {
            line: 108,
            column: 45
          },
          end: {
            line: 110,
            column: 3
          }
        },
        line: 108
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 117,
            column: 2
          },
          end: {
            line: 117,
            column: 3
          }
        },
        loc: {
          start: {
            line: 117,
            column: 48
          },
          end: {
            line: 119,
            column: 3
          }
        },
        line: 117
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 126,
            column: 2
          },
          end: {
            line: 126,
            column: 3
          }
        },
        loc: {
          start: {
            line: 126,
            column: 31
          },
          end: {
            line: 128,
            column: 3
          }
        },
        line: 126
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 135,
            column: 2
          },
          end: {
            line: 135,
            column: 3
          }
        },
        loc: {
          start: {
            line: 135,
            column: 34
          },
          end: {
            line: 137,
            column: 3
          }
        },
        line: 135
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 144,
            column: 2
          },
          end: {
            line: 144,
            column: 3
          }
        },
        loc: {
          start: {
            line: 144,
            column: 32
          },
          end: {
            line: 146,
            column: 3
          }
        },
        line: 144
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 153,
            column: 2
          },
          end: {
            line: 153,
            column: 3
          }
        },
        loc: {
          start: {
            line: 153,
            column: 35
          },
          end: {
            line: 155,
            column: 3
          }
        },
        line: 153
      },
      "13": {
        name: "(anonymous_13)",
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
            column: 35
          },
          end: {
            line: 164,
            column: 3
          }
        },
        line: 162
      },
      "14": {
        name: "(anonymous_14)",
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
            column: 38
          },
          end: {
            line: 173,
            column: 3
          }
        },
        line: 171
      },
      "15": {
        name: "(anonymous_15)",
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
            column: 39
          },
          end: {
            line: 182,
            column: 3
          }
        },
        line: 180
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 189,
            column: 2
          },
          end: {
            line: 189,
            column: 3
          }
        },
        loc: {
          start: {
            line: 189,
            column: 30
          },
          end: {
            line: 191,
            column: 3
          }
        },
        line: 189
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 198,
            column: 2
          },
          end: {
            line: 198,
            column: 3
          }
        },
        loc: {
          start: {
            line: 198,
            column: 33
          },
          end: {
            line: 200,
            column: 3
          }
        },
        line: 198
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 207,
            column: 2
          },
          end: {
            line: 207,
            column: 3
          }
        },
        loc: {
          start: {
            line: 207,
            column: 34
          },
          end: {
            line: 209,
            column: 3
          }
        },
        line: 207
      },
      "19": {
        name: "(anonymous_19)",
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
            column: 42
          },
          end: {
            line: 213,
            column: 3
          }
        },
        line: 211
      },
      "20": {
        name: "isValid",
        decl: {
          start: {
            line: 229,
            column: 9
          },
          end: {
            line: 229,
            column: 16
          }
        },
        loc: {
          start: {
            line: 229,
            column: 43
          },
          end: {
            line: 309,
            column: 1
          }
        },
        line: 229
      },
      "21": {
        name: "decodeCheck",
        decl: {
          start: {
            line: 311,
            column: 16
          },
          end: {
            line: 311,
            column: 27
          }
        },
        loc: {
          start: {
            line: 311,
            column: 54
          },
          end: {
            line: 348,
            column: 1
          }
        },
        line: 311
      },
      "22": {
        name: "encodeCheck",
        decl: {
          start: {
            line: 350,
            column: 16
          },
          end: {
            line: 350,
            column: 27
          }
        },
        loc: {
          start: {
            line: 350,
            column: 51
          },
          end: {
            line: 370,
            column: 1
          }
        },
        line: 350
      },
      "23": {
        name: "calculateChecksum",
        decl: {
          start: {
            line: 373,
            column: 9
          },
          end: {
            line: 373,
            column: 26
          }
        },
        loc: {
          start: {
            line: 373,
            column: 36
          },
          end: {
            line: 418,
            column: 1
          }
        },
        line: 373
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 230,
            column: 2
          },
          end: {
            line: 232,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 230,
            column: 2
          },
          end: {
            line: 232,
            column: 3
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
        line: 230
      },
      "1": {
        loc: {
          start: {
            line: 235,
            column: 2
          },
          end: {
            line: 272,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 236,
            column: 4
          },
          end: {
            line: 236,
            column: 21
          }
        }, {
          start: {
            line: 237,
            column: 4
          },
          end: {
            line: 237,
            column: 22
          }
        }, {
          start: {
            line: 238,
            column: 4
          },
          end: {
            line: 242,
            column: 12
          }
        }, {
          start: {
            line: 245,
            column: 4
          },
          end: {
            line: 249,
            column: 12
          }
        }, {
          start: {
            line: 252,
            column: 4
          },
          end: {
            line: 256,
            column: 10
          }
        }, {
          start: {
            line: 258,
            column: 4
          },
          end: {
            line: 262,
            column: 12
          }
        }, {
          start: {
            line: 264,
            column: 4
          },
          end: {
            line: 268,
            column: 12
          }
        }, {
          start: {
            line: 270,
            column: 4
          },
          end: {
            line: 271,
            column: 19
          }
        }],
        line: 235
      },
      "2": {
        loc: {
          start: {
            line: 239,
            column: 6
          },
          end: {
            line: 241,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 239,
            column: 6
          },
          end: {
            line: 241,
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
        line: 239
      },
      "3": {
        loc: {
          start: {
            line: 246,
            column: 6
          },
          end: {
            line: 248,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 246,
            column: 6
          },
          end: {
            line: 248,
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
        line: 246
      },
      "4": {
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
      "5": {
        loc: {
          start: {
            line: 259,
            column: 6
          },
          end: {
            line: 261,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 259,
            column: 6
          },
          end: {
            line: 261,
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
        line: 259
      },
      "6": {
        loc: {
          start: {
            line: 265,
            column: 6
          },
          end: {
            line: 267,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 265,
            column: 6
          },
          end: {
            line: 267,
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
        line: 265
      },
      "7": {
        loc: {
          start: {
            line: 265,
            column: 10
          },
          end: {
            line: 265,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 265,
            column: 10
          },
          end: {
            line: 265,
            column: 31
          }
        }, {
          start: {
            line: 265,
            column: 35
          },
          end: {
            line: 265,
            column: 56
          }
        }],
        line: 265
      },
      "8": {
        loc: {
          start: {
            line: 282,
            column: 2
          },
          end: {
            line: 308,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 283,
            column: 4
          },
          end: {
            line: 283,
            column: 21
          }
        }, {
          start: {
            line: 284,
            column: 4
          },
          end: {
            line: 284,
            column: 22
          }
        }, {
          start: {
            line: 285,
            column: 4
          },
          end: {
            line: 286,
            column: 37
          }
        }, {
          start: {
            line: 289,
            column: 4
          },
          end: {
            line: 290,
            column: 37
          }
        }, {
          start: {
            line: 293,
            column: 4
          },
          end: {
            line: 294,
            column: 35
          }
        }, {
          start: {
            line: 296,
            column: 4
          },
          end: {
            line: 297,
            column: 37
          }
        }, {
          start: {
            line: 299,
            column: 4
          },
          end: {
            line: 304,
            column: 8
          }
        }, {
          start: {
            line: 306,
            column: 4
          },
          end: {
            line: 307,
            column: 19
          }
        }],
        line: 282
      },
      "9": {
        loc: {
          start: {
            line: 303,
            column: 8
          },
          end: {
            line: 303,
            column: 75
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 303,
            column: 8
          },
          end: {
            line: 303,
            column: 38
          }
        }, {
          start: {
            line: 303,
            column: 42
          },
          end: {
            line: 303,
            column: 75
          }
        }],
        line: 303
      },
      "10": {
        loc: {
          start: {
            line: 312,
            column: 2
          },
          end: {
            line: 314,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 312,
            column: 2
          },
          end: {
            line: 314,
            column: 3
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
        line: 312
      },
      "11": {
        loc: {
          start: {
            line: 322,
            column: 2
          },
          end: {
            line: 324,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 322,
            column: 2
          },
          end: {
            line: 324,
            column: 3
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
        line: 322
      },
      "12": {
        loc: {
          start: {
            line: 328,
            column: 2
          },
          end: {
            line: 333,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 328,
            column: 2
          },
          end: {
            line: 333,
            column: 3
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
        line: 328
      },
      "13": {
        loc: {
          start: {
            line: 335,
            column: 2
          },
          end: {
            line: 339,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 335,
            column: 2
          },
          end: {
            line: 339,
            column: 3
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
      "14": {
        loc: {
          start: {
            line: 343,
            column: 2
          },
          end: {
            line: 345,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 343,
            column: 2
          },
          end: {
            line: 345,
            column: 3
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
        line: 343
      },
      "15": {
        loc: {
          start: {
            line: 351,
            column: 2
          },
          end: {
            line: 353,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 351,
            column: 2
          },
          end: {
            line: 353,
            column: 3
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
        line: 351
      },
      "16": {
        loc: {
          start: {
            line: 351,
            column: 6
          },
          end: {
            line: 351,
            column: 41
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 351,
            column: 6
          },
          end: {
            line: 351,
            column: 19
          }
        }, {
          start: {
            line: 351,
            column: 23
          },
          end: {
            line: 351,
            column: 41
          }
        }],
        line: 351
      },
      "17": {
        loc: {
          start: {
            line: 357,
            column: 2
          },
          end: {
            line: 362,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 357,
            column: 2
          },
          end: {
            line: 362,
            column: 3
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
        line: 357
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
      "92": 0
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
      "23": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0, 0, 0, 0, 0, 0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0, 0, 0, 0, 0, 0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d1943e772590d77627063a03bd941397661f134a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2mcp710y2x = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2mcp710y2x();
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* eslint no-bitwise: ["error", {"allow": ["<<", ">>", "^", "&", "&="]}] */
var versionBytes = (cov_2mcp710y2x().s[0]++, {
  mdilithium2PublicKey: 12 << 3,
  // M    96
  preAuthTx: 19 << 3,
  // T  = 152
  sha256Hash: 23 << 3,
  // X = 184
  signedPayload: 15 << 3,
  // P = 120
  contract: 2 << 3,
  // C = 16
  dilithium2PublicKey: 3 << 3,
  // D = 3 * 2^3 = 24
  dilithium2SecretSeed: 4 << 3 // E = 4 * 2^3 = 32
});
var strkeyTypes = (cov_2mcp710y2x().s[1]++, {
  M: 'mdilithium2PublicKey',
  T: 'preAuthTx',
  X: 'sha256Hash',
  P: 'signedPayload',
  C: 'contract',
  D: 'dilithium2PublicKey',
  E: 'dilithium2SecretSeed'
});

/**
 * StrKey is a helper class that allows encoding and decoding Stellar keys
 * to/from strings, i.e. between their binary (Buffer, xdr.PublicKey, etc.) and
 * string (i.e. "GABCD...", etc.) representations.
 */
var StrKey = exports.StrKey = /*#__PURE__*/function () {
  function StrKey() {
    _classCallCheck(this, StrKey);
  }
  return _createClass(StrKey, null, [{
    key: "encodeDilithium2PublicKey",
    value:
    // Dilithium2 

    /**
       * Encodes `data` to strkey dilithium2 public key.
       *
       * @param   {Buffer} data   raw data to encode
       * @returns {string}        "D..." representation of the key
       */
    function encodeDilithium2PublicKey(data) {
      cov_2mcp710y2x().f[0]++;
      cov_2mcp710y2x().s[2]++;
      return encodeCheck('dilithium2PublicKey', data);
    }

    /**
     * Decodes strkey dilithium2 public key to raw data.
     *
     * If the parameter is a muxed account key ("M..."), this will only encode it
     * as a basic dilithium2 key (as if in "D..." format).
     *
     * @param   {string} data   "D..." (or "M...") key representation to decode
     * @returns {Buffer}        raw key
     */
  }, {
    key: "decodeDilithium2PublicKey",
    value: function decodeDilithium2PublicKey(data) {
      cov_2mcp710y2x().f[1]++;
      cov_2mcp710y2x().s[3]++;
      return decodeCheck('dilithium2PublicKey', data);
    }

    /**
     * Returns true if the given Stellar public key is a valid dilithium2 public key.
     * @param {string} publicKey public key to check
     * @returns {boolean}
     */
  }, {
    key: "isValidDilithium2PublicKey",
    value: function isValidDilithium2PublicKey(publicKey) {
      cov_2mcp710y2x().f[2]++;
      cov_2mcp710y2x().s[4]++;
      return isValid('dilithium2PublicKey', publicKey);
    }
    /**
       * Encodes data to strkey dilithium2 seed.
       * @param {Buffer} data data to encode
       * @returns {string}
       */
  }, {
    key: "encodeDilithium2SecretSeed",
    value: function encodeDilithium2SecretSeed(data) {
      cov_2mcp710y2x().f[3]++;
      cov_2mcp710y2x().s[5]++;
      return encodeCheck('dilithium2SecretSeed', data);
    }

    /**
     * Decodes strkey dilithium2 seed to raw data.
     * @param {string} address data to decode
     * @returns {Buffer}
     */
  }, {
    key: "decodeDilithium2SecretSeed",
    value: function decodeDilithium2SecretSeed(address) {
      cov_2mcp710y2x().f[4]++;
      cov_2mcp710y2x().s[6]++;
      return decodeCheck('dilithium2SecretSeed', address);
    }

    /**
     * Returns true if the given Stellar secret key is a valid dilithium2 secret seed.
     * @param {string} seed seed to check
     * @returns {boolean}
     */
  }, {
    key: "isValidDilithium2SecretSeed",
    value: function isValidDilithium2SecretSeed(seed) {
      cov_2mcp710y2x().f[5]++;
      cov_2mcp710y2x().s[7]++;
      return isValid('dilithium2SecretSeed', seed);
    }

    /**
     * Encodes data to strkey mdilithium2 public key.
     * @param {Buffer} data data to encode
     * @returns {string}
     */
  }, {
    key: "encodeMdilithium2PublicKey",
    value: function encodeMdilithium2PublicKey(data) {
      cov_2mcp710y2x().f[6]++;
      cov_2mcp710y2x().s[8]++;
      return encodeCheck('mdilithium2PublicKey', data);
    }

    /**
     * Decodes strkey mdilithium2 public key to raw data.
     * @param {string} address data to decode
     * @returns {Buffer}
     */
  }, {
    key: "decodeMdilithium2PublicKey",
    value: function decodeMdilithium2PublicKey(address) {
      cov_2mcp710y2x().f[7]++;
      cov_2mcp710y2x().s[9]++;
      return decodeCheck('mdilithium2PublicKey', address);
    }

    /**
     * Returns true if the given Stellar public key is a valid mdilithium2 public key.
     * @param {string} publicKey public key to check
     * @returns {boolean}
     */
  }, {
    key: "isValidMdilithium2PublicKey",
    value: function isValidMdilithium2PublicKey(publicKey) {
      cov_2mcp710y2x().f[8]++;
      cov_2mcp710y2x().s[10]++;
      return isValid('mdilithium2PublicKey', publicKey);
    }

    /**
     * Encodes data to strkey preAuthTx.
     * @param {Buffer} data data to encode
     * @returns {string}
     */
  }, {
    key: "encodePreAuthTx",
    value: function encodePreAuthTx(data) {
      cov_2mcp710y2x().f[9]++;
      cov_2mcp710y2x().s[11]++;
      return encodeCheck('preAuthTx', data);
    }

    /**
     * Decodes strkey PreAuthTx to raw data.
     * @param {string} address data to decode
     * @returns {Buffer}
     */
  }, {
    key: "decodePreAuthTx",
    value: function decodePreAuthTx(address) {
      cov_2mcp710y2x().f[10]++;
      cov_2mcp710y2x().s[12]++;
      return decodeCheck('preAuthTx', address);
    }

    /**
     * Encodes data to strkey sha256 hash.
     * @param {Buffer} data data to encode
     * @returns {string}
     */
  }, {
    key: "encodeSha256Hash",
    value: function encodeSha256Hash(data) {
      cov_2mcp710y2x().f[11]++;
      cov_2mcp710y2x().s[13]++;
      return encodeCheck('sha256Hash', data);
    }

    /**
     * Decodes strkey sha256 hash to raw data.
     * @param {string} address data to decode
     * @returns {Buffer}
     */
  }, {
    key: "decodeSha256Hash",
    value: function decodeSha256Hash(address) {
      cov_2mcp710y2x().f[12]++;
      cov_2mcp710y2x().s[14]++;
      return decodeCheck('sha256Hash', address);
    }

    /**
     * Encodes raw data to strkey signed payload (P...).
     * @param   {Buffer} data  data to encode
     * @returns {string}
     */
  }, {
    key: "encodeSignedPayload",
    value: function encodeSignedPayload(data) {
      cov_2mcp710y2x().f[13]++;
      cov_2mcp710y2x().s[15]++;
      return encodeCheck('signedPayload', data);
    }

    /**
     * Decodes strkey signed payload (P...) to raw data.
     * @param   {string} address  address to decode
     * @returns {Buffer}
     */
  }, {
    key: "decodeSignedPayload",
    value: function decodeSignedPayload(address) {
      cov_2mcp710y2x().f[14]++;
      cov_2mcp710y2x().s[16]++;
      return decodeCheck('signedPayload', address);
    }

    /**
     * Checks validity of alleged signed payload (P...) strkey address.
     * @param   {string} address  signer key to check
     * @returns {boolean}
     */
  }, {
    key: "isValidSignedPayload",
    value: function isValidSignedPayload(address) {
      cov_2mcp710y2x().f[15]++;
      cov_2mcp710y2x().s[17]++;
      return isValid('signedPayload', address);
    }

    /**
     * Encodes raw data to strkey contract (C...).
     * @param   {Buffer} data  data to encode
     * @returns {string}
     */
  }, {
    key: "encodeContract",
    value: function encodeContract(data) {
      cov_2mcp710y2x().f[16]++;
      cov_2mcp710y2x().s[18]++;
      return encodeCheck('contract', data);
    }

    /**
     * Decodes strkey contract (C...) to raw data.
     * @param   {string} address  address to decode
     * @returns {Buffer}
     */
  }, {
    key: "decodeContract",
    value: function decodeContract(address) {
      cov_2mcp710y2x().f[17]++;
      cov_2mcp710y2x().s[19]++;
      return decodeCheck('contract', address);
    }

    /**
     * Checks validity of alleged contract (C...) strkey address.
     * @param   {string} address  signer key to check
     * @returns {boolean}
     */
  }, {
    key: "isValidContract",
    value: function isValidContract(address) {
      cov_2mcp710y2x().f[18]++;
      cov_2mcp710y2x().s[20]++;
      return isValid('contract', address);
    }
  }, {
    key: "getVersionByteForPrefix",
    value: function getVersionByteForPrefix(address) {
      cov_2mcp710y2x().f[19]++;
      cov_2mcp710y2x().s[21]++;
      return strkeyTypes[address[0]];
    }
  }]);
}();
/**
 * Sanity-checks whether or not a strkey *appears* valid.
 *
 * @param  {string}  versionByteName the type of strkey to expect in `encoded`
 * @param  {string}  encoded         the strkey to validate
 *
 * @return {Boolean} whether or not the `encoded` strkey appears valid for the
 *     `versionByteName` strkey type (see `versionBytes`, above).
 *
 * @note This isn't a *definitive* check of validity, but rather a best-effort
 *     check based on (a) input length, (b) whether or not it can be decoded,
 *     and (c) output length.
 */
function isValid(versionByteName, encoded) {
  cov_2mcp710y2x().f[20]++;
  cov_2mcp710y2x().s[22]++;
  if (typeof encoded !== 'string') {
    cov_2mcp710y2x().b[0][0]++;
    cov_2mcp710y2x().s[23]++;
    return false;
  } else {
    cov_2mcp710y2x().b[0][1]++;
  }

  // basic length checks on the strkey lengths
  cov_2mcp710y2x().s[24]++;
  switch (versionByteName) {
    case 'preAuthTx':
      cov_2mcp710y2x().b[1][0]++;
    // falls through
    case 'sha256Hash':
      cov_2mcp710y2x().b[1][1]++;
    // falls through
    case 'contract':
      cov_2mcp710y2x().b[1][2]++;
      cov_2mcp710y2x().s[25]++;
      if (encoded.length !== 2104) {
        cov_2mcp710y2x().b[2][0]++;
        cov_2mcp710y2x().s[26]++;
        return false;
      } else {
        cov_2mcp710y2x().b[2][1]++;
      }
      cov_2mcp710y2x().s[27]++;
      break;

    // Base32 5 byte = 8 charecter  so (1312 + 2 + 1) * 8 / 5 = 2104  
    case 'dilithium2PublicKey':
      cov_2mcp710y2x().b[1][3]++;
      cov_2mcp710y2x().s[28]++;
      // falls through
      if (encoded.length !== 2104) {
        cov_2mcp710y2x().b[3][0]++;
        cov_2mcp710y2x().s[29]++;
        return false;
      } else {
        cov_2mcp710y2x().b[3][1]++;
      }
      cov_2mcp710y2x().s[30]++;
      break;

    // Base32 5 byte = 8 charecter  so (32+1+2) * 8 / 5 = 56 
    case 'dilithium2SecretSeed':
      cov_2mcp710y2x().b[1][4]++;
      cov_2mcp710y2x().s[31]++;
      // falls through
      if (encoded.length !== 56) {
        cov_2mcp710y2x().b[4][0]++;
        cov_2mcp710y2x().s[32]++;
        return false;
      } else {
        cov_2mcp710y2x().b[4][1]++;
      }
      cov_2mcp710y2x().s[33]++;
      break;
    // 1312 + 8 = 1320  => (1320+3)*8/5=2117
    case 'medilithium2PublicKey':
      cov_2mcp710y2x().b[1][5]++;
      cov_2mcp710y2x().s[34]++;
      if (encoded.length !== 2117) {
        cov_2mcp710y2x().b[5][0]++;
        cov_2mcp710y2x().s[35]++;
        return false;
      } else {
        cov_2mcp710y2x().b[5][1]++;
      }
      cov_2mcp710y2x().s[36]++;
      break;
    case 'signedPayload':
      cov_2mcp710y2x().b[1][6]++;
      cov_2mcp710y2x().s[37]++;
      if ((cov_2mcp710y2x().b[7][0]++, encoded.length < 2117) || (cov_2mcp710y2x().b[7][1]++, encoded.length > 5983)) {
        cov_2mcp710y2x().b[6][0]++;
        cov_2mcp710y2x().s[38]++;
        return false;
      } else {
        cov_2mcp710y2x().b[6][1]++;
      }
      cov_2mcp710y2x().s[39]++;
      break;
    default:
      cov_2mcp710y2x().b[1][7]++;
      cov_2mcp710y2x().s[40]++;
      return false;
  }
  var decoded = (cov_2mcp710y2x().s[41]++, '');
  cov_2mcp710y2x().s[42]++;
  try {
    cov_2mcp710y2x().s[43]++;
    decoded = decodeCheck(versionByteName, encoded);
  } catch (err) {
    cov_2mcp710y2x().s[44]++;
    return false;
  }

  // basic length checks on the resulting buffer sizes
  cov_2mcp710y2x().s[45]++;
  switch (versionByteName) {
    case 'preAuthTx':
      cov_2mcp710y2x().b[8][0]++;
    // falls through
    case 'sha256Hash':
      cov_2mcp710y2x().b[8][1]++;
    // falls through
    case 'contract':
      cov_2mcp710y2x().b[8][2]++;
      cov_2mcp710y2x().s[46]++;
      return decoded.length === 1312;

    // Dilithium2  PublicKey = 1312 byte  
    case 'dilithium2PublicKey':
      cov_2mcp710y2x().b[8][3]++;
      cov_2mcp710y2x().s[47]++;
      // falls through
      return decoded.length === 1312;

    // Dilithium2  SecretSeed = 32 byte  
    case 'dilithium2SecretSeed':
      cov_2mcp710y2x().b[8][4]++;
      cov_2mcp710y2x().s[48]++;
      // falls through
      return decoded.length === 32;
    case 'mdilithium2PublicKey':
      cov_2mcp710y2x().b[8][5]++;
      cov_2mcp710y2x().s[49]++;
      return decoded.length === 1320;
    // +8 bytes for the ID

    case 'signedPayload':
      cov_2mcp710y2x().b[8][6]++;
      cov_2mcp710y2x().s[50]++;
      return (
        // 32 for the signer, +4 for the payload size, then either +4 for the
        // min or +64 for the max payload
        (cov_2mcp710y2x().b[9][0]++, decoded.length >= 1312 + 4 + 4) && (cov_2mcp710y2x().b[9][1]++, decoded.length <= 1312 + 4 + 2420)
      );
    default:
      cov_2mcp710y2x().b[8][7]++;
      cov_2mcp710y2x().s[51]++;
      return false;
  }
}
function decodeCheck(versionByteName, encoded) {
  cov_2mcp710y2x().f[21]++;
  cov_2mcp710y2x().s[52]++;
  if (typeof encoded !== 'string') {
    cov_2mcp710y2x().b[10][0]++;
    cov_2mcp710y2x().s[53]++;
    throw new TypeError('encoded argument must be of type String');
  } else {
    cov_2mcp710y2x().b[10][1]++;
  }
  var decoded = (cov_2mcp710y2x().s[54]++, _base["default"].decode(encoded));
  var versionByte = (cov_2mcp710y2x().s[55]++, decoded[0]);
  var payload = (cov_2mcp710y2x().s[56]++, decoded.slice(0, -2));
  var data = (cov_2mcp710y2x().s[57]++, payload.slice(1));
  var checksum = (cov_2mcp710y2x().s[58]++, decoded.slice(-2));
  cov_2mcp710y2x().s[59]++;
  if (encoded !== _base["default"].encode(decoded)) {
    cov_2mcp710y2x().b[11][0]++;
    cov_2mcp710y2x().s[60]++;
    throw new Error('invalid encoded string');
  } else {
    cov_2mcp710y2x().b[11][1]++;
  }
  var expectedVersion = (cov_2mcp710y2x().s[61]++, versionBytes[versionByteName]);
  cov_2mcp710y2x().s[62]++;
  if (expectedVersion === undefined) {
    cov_2mcp710y2x().b[12][0]++;
    cov_2mcp710y2x().s[63]++;
    throw new Error("".concat(versionByteName, " is not a valid version byte name. ") + "Expected one of ".concat(Object.keys(versionBytes).join(', ')));
  } else {
    cov_2mcp710y2x().b[12][1]++;
  }
  cov_2mcp710y2x().s[64]++;
  if (versionByte !== expectedVersion) {
    cov_2mcp710y2x().b[13][0]++;
    cov_2mcp710y2x().s[65]++;
    throw new Error("invalid version byte. expected ".concat(expectedVersion, ", got ").concat(versionByte));
  } else {
    cov_2mcp710y2x().b[13][1]++;
  }
  var expectedChecksum = (cov_2mcp710y2x().s[66]++, calculateChecksum(payload));
  cov_2mcp710y2x().s[67]++;
  if (!(0, _checksum.verifyChecksum)(expectedChecksum, checksum)) {
    cov_2mcp710y2x().b[14][0]++;
    cov_2mcp710y2x().s[68]++;
    throw new Error("invalid checksum");
  } else {
    cov_2mcp710y2x().b[14][1]++;
  }
  cov_2mcp710y2x().s[69]++;
  return Buffer.from(data);
}
function encodeCheck(versionByteName, data) {
  cov_2mcp710y2x().f[22]++;
  cov_2mcp710y2x().s[70]++;
  if ((cov_2mcp710y2x().b[16][0]++, data === null) || (cov_2mcp710y2x().b[16][1]++, data === undefined)) {
    cov_2mcp710y2x().b[15][0]++;
    cov_2mcp710y2x().s[71]++;
    throw new Error('cannot encode null data');
  } else {
    cov_2mcp710y2x().b[15][1]++;
  }
  var versionByte = (cov_2mcp710y2x().s[72]++, versionBytes[versionByteName]);
  cov_2mcp710y2x().s[73]++;
  if (versionByte === undefined) {
    cov_2mcp710y2x().b[17][0]++;
    cov_2mcp710y2x().s[74]++;
    throw new Error("".concat(versionByteName, " is not a valid version byte name. ") + "Expected one of ".concat(Object.keys(versionBytes).join(', ')));
  } else {
    cov_2mcp710y2x().b[17][1]++;
  }
  cov_2mcp710y2x().s[75]++;
  data = Buffer.from(data);
  var versionBuffer = (cov_2mcp710y2x().s[76]++, Buffer.from([versionByte]));
  var payload = (cov_2mcp710y2x().s[77]++, Buffer.concat([versionBuffer, data]));
  var checksum = (cov_2mcp710y2x().s[78]++, Buffer.from(calculateChecksum(payload)));
  var unencoded = (cov_2mcp710y2x().s[79]++, Buffer.concat([payload, checksum]));
  cov_2mcp710y2x().s[80]++;
  return _base["default"].encode(unencoded);
}

// Computes the CRC16-XModem checksum of `payload` in little-endian order
function calculateChecksum(payload) {
  cov_2mcp710y2x().f[23]++;
  var crcTable = (cov_2mcp710y2x().s[81]++, [0x0000, 0x1021, 0x2042, 0x3063, 0x4084, 0x50a5, 0x60c6, 0x70e7, 0x8108, 0x9129, 0xa14a, 0xb16b, 0xc18c, 0xd1ad, 0xe1ce, 0xf1ef, 0x1231, 0x0210, 0x3273, 0x2252, 0x52b5, 0x4294, 0x72f7, 0x62d6, 0x9339, 0x8318, 0xb37b, 0xa35a, 0xd3bd, 0xc39c, 0xf3ff, 0xe3de, 0x2462, 0x3443, 0x0420, 0x1401, 0x64e6, 0x74c7, 0x44a4, 0x5485, 0xa56a, 0xb54b, 0x8528, 0x9509, 0xe5ee, 0xf5cf, 0xc5ac, 0xd58d, 0x3653, 0x2672, 0x1611, 0x0630, 0x76d7, 0x66f6, 0x5695, 0x46b4, 0xb75b, 0xa77a, 0x9719, 0x8738, 0xf7df, 0xe7fe, 0xd79d, 0xc7bc, 0x48c4, 0x58e5, 0x6886, 0x78a7, 0x0840, 0x1861, 0x2802, 0x3823, 0xc9cc, 0xd9ed, 0xe98e, 0xf9af, 0x8948, 0x9969, 0xa90a, 0xb92b, 0x5af5, 0x4ad4, 0x7ab7, 0x6a96, 0x1a71, 0x0a50, 0x3a33, 0x2a12, 0xdbfd, 0xcbdc, 0xfbbf, 0xeb9e, 0x9b79, 0x8b58, 0xbb3b, 0xab1a, 0x6ca6, 0x7c87, 0x4ce4, 0x5cc5, 0x2c22, 0x3c03, 0x0c60, 0x1c41, 0xedae, 0xfd8f, 0xcdec, 0xddcd, 0xad2a, 0xbd0b, 0x8d68, 0x9d49, 0x7e97, 0x6eb6, 0x5ed5, 0x4ef4, 0x3e13, 0x2e32, 0x1e51, 0x0e70, 0xff9f, 0xefbe, 0xdfdd, 0xcffc, 0xbf1b, 0xaf3a, 0x9f59, 0x8f78, 0x9188, 0x81a9, 0xb1ca, 0xa1eb, 0xd10c, 0xc12d, 0xf14e, 0xe16f, 0x1080, 0x00a1, 0x30c2, 0x20e3, 0x5004, 0x4025, 0x7046, 0x6067, 0x83b9, 0x9398, 0xa3fb, 0xb3da, 0xc33d, 0xd31c, 0xe37f, 0xf35e, 0x02b1, 0x1290, 0x22f3, 0x32d2, 0x4235, 0x5214, 0x6277, 0x7256, 0xb5ea, 0xa5cb, 0x95a8, 0x8589, 0xf56e, 0xe54f, 0xd52c, 0xc50d, 0x34e2, 0x24c3, 0x14a0, 0x0481, 0x7466, 0x6447, 0x5424, 0x4405, 0xa7db, 0xb7fa, 0x8799, 0x97b8, 0xe75f, 0xf77e, 0xc71d, 0xd73c, 0x26d3, 0x36f2, 0x0691, 0x16b0, 0x6657, 0x7676, 0x4615, 0x5634, 0xd94c, 0xc96d, 0xf90e, 0xe92f, 0x99c8, 0x89e9, 0xb98a, 0xa9ab, 0x5844, 0x4865, 0x7806, 0x6827, 0x18c0, 0x08e1, 0x3882, 0x28a3, 0xcb7d, 0xdb5c, 0xeb3f, 0xfb1e, 0x8bf9, 0x9bd8, 0xabbb, 0xbb9a, 0x4a75, 0x5a54, 0x6a37, 0x7a16, 0x0af1, 0x1ad0, 0x2ab3, 0x3a92, 0xfd2e, 0xed0f, 0xdd6c, 0xcd4d, 0xbdaa, 0xad8b, 0x9de8, 0x8dc9, 0x7c26, 0x6c07, 0x5c64, 0x4c45, 0x3ca2, 0x2c83, 0x1ce0, 0x0cc1, 0xef1f, 0xff3e, 0xcf5d, 0xdf7c, 0xaf9b, 0xbfba, 0x8fd9, 0x9ff8, 0x6e17, 0x7e36, 0x4e55, 0x5e74, 0x2e93, 0x3eb2, 0x0ed1, 0x1ef0]);
  var crc16 = (cov_2mcp710y2x().s[82]++, 0x0);
  cov_2mcp710y2x().s[83]++;
  for (var i = (cov_2mcp710y2x().s[84]++, 0); i < payload.length; i += 1) {
    var _byte = (cov_2mcp710y2x().s[85]++, payload[i]);
    var lookupIndex = (cov_2mcp710y2x().s[86]++, crc16 >> 8 ^ _byte);
    cov_2mcp710y2x().s[87]++;
    crc16 = crc16 << 8 ^ crcTable[lookupIndex];
    cov_2mcp710y2x().s[88]++;
    crc16 &= 0xffff;
  }
  var checksum = (cov_2mcp710y2x().s[89]++, new Uint8Array(2));
  cov_2mcp710y2x().s[90]++;
  checksum[0] = crc16 & 0xff;
  cov_2mcp710y2x().s[91]++;
  checksum[1] = crc16 >> 8 & 0xff;
  cov_2mcp710y2x().s[92]++;
  return checksum;
}