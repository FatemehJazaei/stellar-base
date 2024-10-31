"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nativeToScVal = nativeToScVal;
exports.scValToNative = scValToNative;
var _xdr = _interopRequireDefault(require("./xdr"));
var _address = require("./address");
var _contract = require("./contract");
var _index = require("./numbers/index");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_9hn7pcfy() {
  var path = "/mnt/g/stellar-base/src/scval.js";
  var hash = "4eaeb948ef95673d22e477b2fb2096f88bf152d2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/scval.js",
    statementMap: {
      "0": {
        start: {
          line: 140,
          column: 2
        },
        end: {
          line: 270,
          column: 3
        }
      },
      "1": {
        start: {
          line: 142,
          column: 6
        },
        end: {
          line: 144,
          column: 7
        }
      },
      "2": {
        start: {
          line: 143,
          column: 8
        },
        end: {
          line: 143,
          column: 35
        }
      },
      "3": {
        start: {
          line: 146,
          column: 6
        },
        end: {
          line: 148,
          column: 7
        }
      },
      "4": {
        start: {
          line: 147,
          column: 8
        },
        end: {
          line: 147,
          column: 19
        }
      },
      "5": {
        start: {
          line: 150,
          column: 6
        },
        end: {
          line: 152,
          column: 7
        }
      },
      "6": {
        start: {
          line: 151,
          column: 8
        },
        end: {
          line: 151,
          column: 29
        }
      },
      "7": {
        start: {
          line: 154,
          column: 6
        },
        end: {
          line: 156,
          column: 7
        }
      },
      "8": {
        start: {
          line: 155,
          column: 8
        },
        end: {
          line: 155,
          column: 39
        }
      },
      "9": {
        start: {
          line: 158,
          column: 6
        },
        end: {
          line: 172,
          column: 7
        }
      },
      "10": {
        start: {
          line: 159,
          column: 21
        },
        end: {
          line: 159,
          column: 41
        }
      },
      "11": {
        start: {
          line: 160,
          column: 8
        },
        end: {
          line: 171,
          column: 9
        }
      },
      "12": {
        start: {
          line: 162,
          column: 12
        },
        end: {
          line: 162,
          column: 44
        }
      },
      "13": {
        start: {
          line: 164,
          column: 12
        },
        end: {
          line: 164,
          column: 45
        }
      },
      "14": {
        start: {
          line: 166,
          column: 12
        },
        end: {
          line: 166,
          column: 45
        }
      },
      "15": {
        start: {
          line: 168,
          column: 12
        },
        end: {
          line: 170,
          column: 14
        }
      },
      "16": {
        start: {
          line: 174,
          column: 6
        },
        end: {
          line: 183,
          column: 7
        }
      },
      "17": {
        start: {
          line: 175,
          column: 8
        },
        end: {
          line: 181,
          column: 9
        }
      },
      "18": {
        start: {
          line: 175,
          column: 46
        },
        end: {
          line: 175,
          column: 72
        }
      },
      "19": {
        start: {
          line: 176,
          column: 10
        },
        end: {
          line: 180,
          column: 12
        }
      },
      "20": {
        start: {
          line: 178,
          column: 26
        },
        end: {
          line: 178,
          column: 34
        }
      },
      "21": {
        start: {
          line: 182,
          column: 8
        },
        end: {
          line: 182,
          column: 72
        }
      },
      "22": {
        start: {
          line: 182,
          column: 47
        },
        end: {
          line: 182,
          column: 69
        }
      },
      "23": {
        start: {
          line: 185,
          column: 6
        },
        end: {
          line: 191,
          column: 7
        }
      },
      "24": {
        start: {
          line: 186,
          column: 8
        },
        end: {
          line: 190,
          column: 10
        }
      },
      "25": {
        start: {
          line: 193,
          column: 6
        },
        end: {
          line: 212,
          column: 8
        }
      },
      "26": {
        start: {
          line: 198,
          column: 36
        },
        end: {
          line: 198,
          column: 60
        }
      },
      "27": {
        start: {
          line: 203,
          column: 39
        },
        end: {
          line: 203,
          column: 76
        }
      },
      "28": {
        start: {
          line: 204,
          column: 28
        },
        end: {
          line: 204,
          column: 60
        }
      },
      "29": {
        start: {
          line: 205,
          column: 28
        },
        end: {
          line: 205,
          column: 60
        }
      },
      "30": {
        start: {
          line: 207,
          column: 12
        },
        end: {
          line: 210,
          column: 15
        }
      },
      "31": {
        start: {
          line: 217,
          column: 6
        },
        end: {
          line: 226,
          column: 7
        }
      },
      "32": {
        start: {
          line: 219,
          column: 10
        },
        end: {
          line: 219,
          column: 39
        }
      },
      "33": {
        start: {
          line: 222,
          column: 10
        },
        end: {
          line: 222,
          column: 39
        }
      },
      "34": {
        start: {
          line: 225,
          column: 10
        },
        end: {
          line: 225,
          column: 16
        }
      },
      "35": {
        start: {
          line: 228,
          column: 6
        },
        end: {
          line: 228,
          column: 60
        }
      },
      "36": {
        start: {
          line: 231,
          column: 22
        },
        end: {
          line: 231,
          column: 44
        }
      },
      "37": {
        start: {
          line: 232,
          column: 6
        },
        end: {
          line: 256,
          column: 7
        }
      },
      "38": {
        start: {
          line: 234,
          column: 10
        },
        end: {
          line: 234,
          column: 42
        }
      },
      "39": {
        start: {
          line: 237,
          column: 10
        },
        end: {
          line: 237,
          column: 42
        }
      },
      "40": {
        start: {
          line: 240,
          column: 10
        },
        end: {
          line: 240,
          column: 44
        }
      },
      "41": {
        start: {
          line: 243,
          column: 10
        },
        end: {
          line: 243,
          column: 53
        }
      },
      "42": {
        start: {
          line: 246,
          column: 10
        },
        end: {
          line: 246,
          column: 53
        }
      },
      "43": {
        start: {
          line: 249,
          column: 10
        },
        end: {
          line: 251,
          column: 11
        }
      },
      "44": {
        start: {
          line: 250,
          column: 12
        },
        end: {
          line: 250,
          column: 59
        }
      },
      "45": {
        start: {
          line: 253,
          column: 10
        },
        end: {
          line: 255,
          column: 12
        }
      },
      "46": {
        start: {
          line: 260,
          column: 6
        },
        end: {
          line: 260,
          column: 36
        }
      },
      "47": {
        start: {
          line: 263,
          column: 6
        },
        end: {
          line: 263,
          column: 33
        }
      },
      "48": {
        start: {
          line: 266,
          column: 6
        },
        end: {
          line: 266,
          column: 34
        }
      },
      "49": {
        start: {
          line: 269,
          column: 6
        },
        end: {
          line: 269,
          column: 77
        }
      },
      "50": {
        start: {
          line: 300,
          column: 2
        },
        end: {
          line: 384,
          column: 3
        }
      },
      "51": {
        start: {
          line: 302,
          column: 6
        },
        end: {
          line: 302,
          column: 18
        }
      },
      "52": {
        start: {
          line: 307,
          column: 6
        },
        end: {
          line: 307,
          column: 36
        }
      },
      "53": {
        start: {
          line: 316,
          column: 6
        },
        end: {
          line: 316,
          column: 32
        }
      },
      "54": {
        start: {
          line: 319,
          column: 6
        },
        end: {
          line: 319,
          column: 50
        }
      },
      "55": {
        start: {
          line: 322,
          column: 6
        },
        end: {
          line: 322,
          column: 47
        }
      },
      "56": {
        start: {
          line: 325,
          column: 6
        },
        end: {
          line: 330,
          column: 8
        }
      },
      "57": {
        start: {
          line: 326,
          column: 41
        },
        end: {
          line: 329,
          column: 9
        }
      },
      "58": {
        start: {
          line: 337,
          column: 6
        },
        end: {
          line: 337,
          column: 25
        }
      },
      "59": {
        start: {
          line: 350,
          column: 16
        },
        end: {
          line: 350,
          column: 27
        }
      },
      "60": {
        start: {
          line: 351,
          column: 6
        },
        end: {
          line: 357,
          column: 7
        }
      },
      "61": {
        start: {
          line: 352,
          column: 8
        },
        end: {
          line: 356,
          column: 9
        }
      },
      "62": {
        start: {
          line: 353,
          column: 10
        },
        end: {
          line: 353,
          column: 45
        }
      },
      "63": {
        start: {
          line: 355,
          column: 10
        },
        end: {
          line: 355,
          column: 42
        }
      },
      "64": {
        start: {
          line: 358,
          column: 6
        },
        end: {
          line: 358,
          column: 15
        }
      },
      "65": {
        start: {
          line: 364,
          column: 6
        },
        end: {
          line: 364,
          column: 52
        }
      },
      "66": {
        start: {
          line: 367,
          column: 6
        },
        end: {
          line: 379,
          column: 7
        }
      },
      "67": {
        start: {
          line: 370,
          column: 10
        },
        end: {
          line: 370,
          column: 72
        }
      },
      "68": {
        start: {
          line: 372,
          column: 22
        },
        end: {
          line: 372,
          column: 33
        }
      },
      "69": {
        start: {
          line: 373,
          column: 10
        },
        end: {
          line: 377,
          column: 12
        }
      },
      "70": {
        start: {
          line: 383,
          column: 6
        },
        end: {
          line: 383,
          column: 25
        }
      }
    },
    fnMap: {
      "0": {
        name: "nativeToScVal",
        decl: {
          start: {
            line: 139,
            column: 16
          },
          end: {
            line: 139,
            column: 29
          }
        },
        loc: {
          start: {
            line: 139,
            column: 46
          },
          end: {
            line: 271,
            column: 1
          }
        },
        line: 139
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 175,
            column: 39
          },
          end: {
            line: 175,
            column: 40
          }
        },
        loc: {
          start: {
            line: 175,
            column: 46
          },
          end: {
            line: 175,
            column: 72
          }
        },
        line: 175
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 178,
            column: 19
          },
          end: {
            line: 178,
            column: 20
          }
        },
        loc: {
          start: {
            line: 178,
            column: 26
          },
          end: {
            line: 178,
            column: 34
          }
        },
        line: 178
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 182,
            column: 40
          },
          end: {
            line: 182,
            column: 41
          }
        },
        loc: {
          start: {
            line: 182,
            column: 47
          },
          end: {
            line: 182,
            column: 69
          }
        },
        line: 182
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 198,
            column: 16
          },
          end: {
            line: 198,
            column: 17
          }
        },
        loc: {
          start: {
            line: 198,
            column: 36
          },
          end: {
            line: 198,
            column: 60
          }
        },
        line: 198
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 199,
            column: 15
          },
          end: {
            line: 199,
            column: 16
          }
        },
        loc: {
          start: {
            line: 199,
            column: 27
          },
          end: {
            line: 211,
            column: 11
          }
        },
        line: 199
      },
      "6": {
        name: "scValToNative",
        decl: {
          start: {
            line: 296,
            column: 16
          },
          end: {
            line: 296,
            column: 29
          }
        },
        loc: {
          start: {
            line: 296,
            column: 35
          },
          end: {
            line: 385,
            column: 1
          }
        },
        line: 296
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 326,
            column: 30
          },
          end: {
            line: 326,
            column: 31
          }
        },
        loc: {
          start: {
            line: 326,
            column: 41
          },
          end: {
            line: 329,
            column: 9
          }
        },
        line: 326
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 139,
            column: 35
          },
          end: {
            line: 139,
            column: 44
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 139,
            column: 42
          },
          end: {
            line: 139,
            column: 44
          }
        }],
        line: 139
      },
      "1": {
        loc: {
          start: {
            line: 140,
            column: 2
          },
          end: {
            line: 270,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 141,
            column: 4
          },
          end: {
            line: 213,
            column: 5
          }
        }, {
          start: {
            line: 215,
            column: 4
          },
          end: {
            line: 215,
            column: 18
          }
        }, {
          start: {
            line: 216,
            column: 4
          },
          end: {
            line: 228,
            column: 60
          }
        }, {
          start: {
            line: 230,
            column: 4
          },
          end: {
            line: 257,
            column: 5
          }
        }, {
          start: {
            line: 259,
            column: 4
          },
          end: {
            line: 260,
            column: 36
          }
        }, {
          start: {
            line: 262,
            column: 4
          },
          end: {
            line: 263,
            column: 33
          }
        }, {
          start: {
            line: 265,
            column: 4
          },
          end: {
            line: 266,
            column: 34
          }
        }, {
          start: {
            line: 268,
            column: 4
          },
          end: {
            line: 269,
            column: 77
          }
        }],
        line: 140
      },
      "2": {
        loc: {
          start: {
            line: 142,
            column: 6
          },
          end: {
            line: 144,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 142,
            column: 6
          },
          end: {
            line: 144,
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
        line: 142
      },
      "3": {
        loc: {
          start: {
            line: 146,
            column: 6
          },
          end: {
            line: 148,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 146,
            column: 6
          },
          end: {
            line: 148,
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
        line: 146
      },
      "4": {
        loc: {
          start: {
            line: 150,
            column: 6
          },
          end: {
            line: 152,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 150,
            column: 6
          },
          end: {
            line: 152,
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
        line: 150
      },
      "5": {
        loc: {
          start: {
            line: 154,
            column: 6
          },
          end: {
            line: 156,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 154,
            column: 6
          },
          end: {
            line: 156,
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
        line: 154
      },
      "6": {
        loc: {
          start: {
            line: 158,
            column: 6
          },
          end: {
            line: 172,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 158,
            column: 6
          },
          end: {
            line: 172,
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
        line: 158
      },
      "7": {
        loc: {
          start: {
            line: 158,
            column: 10
          },
          end: {
            line: 158,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 158,
            column: 10
          },
          end: {
            line: 158,
            column: 35
          }
        }, {
          start: {
            line: 158,
            column: 39
          },
          end: {
            line: 158,
            column: 59
          }
        }],
        line: 158
      },
      "8": {
        loc: {
          start: {
            line: 160,
            column: 8
          },
          end: {
            line: 171,
            column: 9
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 161,
            column: 10
          },
          end: {
            line: 162,
            column: 44
          }
        }, {
          start: {
            line: 163,
            column: 10
          },
          end: {
            line: 164,
            column: 45
          }
        }, {
          start: {
            line: 165,
            column: 10
          },
          end: {
            line: 166,
            column: 45
          }
        }, {
          start: {
            line: 167,
            column: 10
          },
          end: {
            line: 170,
            column: 14
          }
        }],
        line: 160
      },
      "9": {
        loc: {
          start: {
            line: 160,
            column: 16
          },
          end: {
            line: 160,
            column: 37
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 160,
            column: 16
          },
          end: {
            line: 160,
            column: 26
          }
        }, {
          start: {
            line: 160,
            column: 30
          },
          end: {
            line: 160,
            column: 37
          }
        }],
        line: 160
      },
      "10": {
        loc: {
          start: {
            line: 174,
            column: 6
          },
          end: {
            line: 183,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 174,
            column: 6
          },
          end: {
            line: 183,
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
        line: 174
      },
      "11": {
        loc: {
          start: {
            line: 175,
            column: 8
          },
          end: {
            line: 181,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 175,
            column: 8
          },
          end: {
            line: 181,
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
        line: 175
      },
      "12": {
        loc: {
          start: {
            line: 175,
            column: 12
          },
          end: {
            line: 175,
            column: 73
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 175,
            column: 12
          },
          end: {
            line: 175,
            column: 26
          }
        }, {
          start: {
            line: 175,
            column: 30
          },
          end: {
            line: 175,
            column: 73
          }
        }],
        line: 175
      },
      "13": {
        loc: {
          start: {
            line: 185,
            column: 6
          },
          end: {
            line: 191,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 185,
            column: 6
          },
          end: {
            line: 191,
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
        line: 185
      },
      "14": {
        loc: {
          start: {
            line: 185,
            column: 11
          },
          end: {
            line: 185,
            column: 38
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 185,
            column: 11
          },
          end: {
            line: 185,
            column: 32
          }
        }, {
          start: {
            line: 185,
            column: 36
          },
          end: {
            line: 185,
            column: 38
          }
        }],
        line: 185
      },
      "15": {
        loc: {
          start: {
            line: 203,
            column: 39
          },
          end: {
            line: 203,
            column: 76
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 203,
            column: 39
          },
          end: {
            line: 203,
            column: 60
          }
        }, {
          start: {
            line: 203,
            column: 64
          },
          end: {
            line: 203,
            column: 76
          }
        }],
        line: 203
      },
      "16": {
        loc: {
          start: {
            line: 203,
            column: 40
          },
          end: {
            line: 203,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 203,
            column: 40
          },
          end: {
            line: 203,
            column: 50
          }
        }, {
          start: {
            line: 203,
            column: 54
          },
          end: {
            line: 203,
            column: 56
          }
        }],
        line: 203
      },
      "17": {
        loc: {
          start: {
            line: 204,
            column: 28
          },
          end: {
            line: 204,
            column: 60
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 204,
            column: 38
          },
          end: {
            line: 204,
            column: 55
          }
        }, {
          start: {
            line: 204,
            column: 58
          },
          end: {
            line: 204,
            column: 60
          }
        }],
        line: 204
      },
      "18": {
        loc: {
          start: {
            line: 205,
            column: 28
          },
          end: {
            line: 205,
            column: 60
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 205,
            column: 38
          },
          end: {
            line: 205,
            column: 55
          }
        }, {
          start: {
            line: 205,
            column: 58
          },
          end: {
            line: 205,
            column: 60
          }
        }],
        line: 205
      },
      "19": {
        loc: {
          start: {
            line: 217,
            column: 6
          },
          end: {
            line: 226,
            column: 7
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 218,
            column: 8
          },
          end: {
            line: 219,
            column: 39
          }
        }, {
          start: {
            line: 221,
            column: 8
          },
          end: {
            line: 222,
            column: 39
          }
        }, {
          start: {
            line: 224,
            column: 8
          },
          end: {
            line: 225,
            column: 16
          }
        }],
        line: 217
      },
      "20": {
        loc: {
          start: {
            line: 231,
            column: 22
          },
          end: {
            line: 231,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 231,
            column: 22
          },
          end: {
            line: 231,
            column: 32
          }
        }, {
          start: {
            line: 231,
            column: 36
          },
          end: {
            line: 231,
            column: 44
          }
        }],
        line: 231
      },
      "21": {
        loc: {
          start: {
            line: 232,
            column: 6
          },
          end: {
            line: 256,
            column: 7
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 233,
            column: 8
          },
          end: {
            line: 234,
            column: 42
          }
        }, {
          start: {
            line: 236,
            column: 8
          },
          end: {
            line: 237,
            column: 42
          }
        }, {
          start: {
            line: 239,
            column: 8
          },
          end: {
            line: 240,
            column: 44
          }
        }, {
          start: {
            line: 242,
            column: 8
          },
          end: {
            line: 243,
            column: 53
          }
        }, {
          start: {
            line: 245,
            column: 8
          },
          end: {
            line: 246,
            column: 53
          }
        }, {
          start: {
            line: 248,
            column: 8
          },
          end: {
            line: 255,
            column: 12
          }
        }],
        line: 232
      },
      "22": {
        loc: {
          start: {
            line: 249,
            column: 10
          },
          end: {
            line: 251,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 249,
            column: 10
          },
          end: {
            line: 251,
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
        line: 249
      },
      "23": {
        loc: {
          start: {
            line: 300,
            column: 2
          },
          end: {
            line: 384,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 301,
            column: 4
          },
          end: {
            line: 302,
            column: 18
          }
        }, {
          start: {
            line: 305,
            column: 4
          },
          end: {
            line: 305,
            column: 38
          }
        }, {
          start: {
            line: 306,
            column: 4
          },
          end: {
            line: 307,
            column: 36
          }
        }, {
          start: {
            line: 312,
            column: 4
          },
          end: {
            line: 312,
            column: 39
          }
        }, {
          start: {
            line: 313,
            column: 4
          },
          end: {
            line: 313,
            column: 39
          }
        }, {
          start: {
            line: 314,
            column: 4
          },
          end: {
            line: 314,
            column: 39
          }
        }, {
          start: {
            line: 315,
            column: 4
          },
          end: {
            line: 316,
            column: 32
          }
        }, {
          start: {
            line: 318,
            column: 4
          },
          end: {
            line: 319,
            column: 50
          }
        }, {
          start: {
            line: 321,
            column: 4
          },
          end: {
            line: 322,
            column: 47
          }
        }, {
          start: {
            line: 324,
            column: 4
          },
          end: {
            line: 330,
            column: 8
          }
        }, {
          start: {
            line: 333,
            column: 4
          },
          end: {
            line: 333,
            column: 39
          }
        }, {
          start: {
            line: 334,
            column: 4
          },
          end: {
            line: 334,
            column: 38
          }
        }, {
          start: {
            line: 335,
            column: 4
          },
          end: {
            line: 335,
            column: 38
          }
        }, {
          start: {
            line: 336,
            column: 4
          },
          end: {
            line: 337,
            column: 25
          }
        }, {
          start: {
            line: 348,
            column: 4
          },
          end: {
            line: 348,
            column: 41
          }
        }, {
          start: {
            line: 349,
            column: 4
          },
          end: {
            line: 359,
            column: 5
          }
        }, {
          start: {
            line: 362,
            column: 4
          },
          end: {
            line: 362,
            column: 44
          }
        }, {
          start: {
            line: 363,
            column: 4
          },
          end: {
            line: 364,
            column: 52
          }
        }, {
          start: {
            line: 366,
            column: 4
          },
          end: {
            line: 379,
            column: 7
          }
        }, {
          start: {
            line: 382,
            column: 4
          },
          end: {
            line: 383,
            column: 25
          }
        }],
        line: 300
      },
      "24": {
        loc: {
          start: {
            line: 319,
            column: 14
          },
          end: {
            line: 319,
            column: 29
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 319,
            column: 14
          },
          end: {
            line: 319,
            column: 23
          }
        }, {
          start: {
            line: 319,
            column: 27
          },
          end: {
            line: 319,
            column: 29
          }
        }],
        line: 319
      },
      "25": {
        loc: {
          start: {
            line: 326,
            column: 9
          },
          end: {
            line: 326,
            column: 24
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 326,
            column: 9
          },
          end: {
            line: 326,
            column: 18
          }
        }, {
          start: {
            line: 326,
            column: 22
          },
          end: {
            line: 326,
            column: 24
          }
        }],
        line: 326
      },
      "26": {
        loc: {
          start: {
            line: 351,
            column: 6
          },
          end: {
            line: 357,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 351,
            column: 6
          },
          end: {
            line: 357,
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
        line: 351
      },
      "27": {
        loc: {
          start: {
            line: 351,
            column: 10
          },
          end: {
            line: 351,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 351,
            column: 10
          },
          end: {
            line: 351,
            column: 28
          }
        }, {
          start: {
            line: 351,
            column: 32
          },
          end: {
            line: 351,
            column: 53
          }
        }],
        line: 351
      },
      "28": {
        loc: {
          start: {
            line: 367,
            column: 6
          },
          end: {
            line: 379,
            column: 7
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 369,
            column: 8
          },
          end: {
            line: 370,
            column: 72
          }
        }, {
          start: {
            line: 371,
            column: 8
          },
          end: {
            line: 378,
            column: 9
          }
        }],
        line: 367
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
      "7": 0
    },
    b: {
      "0": [0],
      "1": [0, 0, 0, 0, 0, 0, 0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0, 0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0, 0],
      "20": [0, 0],
      "21": [0, 0, 0, 0, 0, 0],
      "22": [0, 0],
      "23": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0],
      "28": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4eaeb948ef95673d22e477b2fb2096f88bf152d2"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_9hn7pcfy = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_9hn7pcfy();
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Attempts to convert native types into smart contract values
 * ({@link xdr.ScVal}).
 *
 * Provides conversions from smart contract XDR values ({@link xdr.ScVal}) to
 * native JavaScript types.
 *
 * The conversions are as follows:
 *
 *  - xdr.ScVal -> passthrough
 *  - null/undefined -> scvVoid
 *  - string -> scvString (a copy is made)
 *  - UintArray8 -> scvBytes (a copy is made)
 *  - boolean -> scvBool
 *
 *  - number/bigint -> the smallest possible XDR integer type that will fit the
 *    input value (if you want a specific type, use {@link ScInt})
 *
 *  - {@link Address} or {@link Contract} -> scvAddress (for contracts and
 *    public keys)
 *
 *  - Array<T> -> scvVec after attempting to convert each item of type `T` to an
 *    xdr.ScVal (recursively). note that all values must be the same type!
 *
 *  - object -> scvMap after attempting to convert each key and value to an
 *    xdr.ScVal (recursively). note that there is no restriction on types
 *    matching anywhere (unlike arrays)
 *
 * When passing an integer-like native value, you can also optionally specify a
 * type which will force a particular interpretation of that value.
 *
 * Note that not all type specifications are compatible with all `ScVal`s, e.g.
 * `toScVal("a string", {type: "i256"})` will throw.
 *
 * @param {any} val -       a native (or convertible) input value to wrap
 * @param {object} [opts] - an optional set of hints around the type of
 *    conversion you'd like to see
 * @param {string} [opts.type] - there is different behavior for different input
 *    types for `val`:
 *
 *     - when `val` is an integer-like type (i.e. number|bigint), this will be
 *       forwarded to {@link ScInt} or forced to be u32/i32.
 *
 *     - when `val` is an array type, this is forwarded to the recursion
 *
 *     - when `val` is an object type (key-value entries), this should be an
 *       object in which each key has a pair of types (to represent forced types
 *       for the key and the value), where `null` (or a missing entry) indicates
 *       the default interpretation(s) (refer to the examples, below)
 *
 *     - when `val` is a string type, this can be 'string' or 'symbol' to force
 *       a particular interpretation of `val`.
 *
 *     - when `val` is a bytes-like type, this can be 'string', 'symbol', or
 *       'bytes' to force a particular interpretation
 *
 *    As a simple example, `nativeToScVal("hello", {type: 'symbol'})` will
 *    return an `scvSymbol`, whereas without the type it would have been an
 *    `scvString`.
 *
 * @returns {xdr.ScVal} a wrapped, smart, XDR version of the input value
 * @throws {TypeError} if...
 *  - there are arrays with more than one type in them
 *  - there are values that do not have a sensible conversion (e.g. random XDR
 *    types, custom classes)
 *  - the type of the input object (or some inner value of said object) cannot
 *    be determined (via `typeof`)
 *  - the type you specified (via `opts.type`) is incompatible with the value
 *    you passed in (`val`), e.g. `nativeToScVal("a string", { type: 'i128' })`,
 *    though this does not apply for types that ignore `opts` (e.g. addresses).
 * @see scValToNative
 *
 * @example
 * nativeToScVal(1000);                   // gives ScValType === scvU64
 * nativeToScVal(1000n);                  // gives ScValType === scvU64
 * nativeToScVal(1n << 100n);             // gives ScValType === scvU128
 * nativeToScVal(1000, { type: 'u32' });  // gives ScValType === scvU32
 * nativeToScVal(1000, { type: 'i125' }); // gives ScValType === scvI256
 * nativeToScVal("a string");                     // gives ScValType === scvString
 * nativeToScVal("a string", { type: 'symbol' }); // gives scvSymbol
 * nativeToScVal(new Uint8Array(5));                      // scvBytes
 * nativeToScVal(new Uint8Array(5), { type: 'symbol' });  // scvSymbol
 * nativeToScVal(null); // scvVoid
 * nativeToScVal(true); // scvBool
 * nativeToScVal([1, 2, 3]);                    // gives scvVec with each element as scvU64
 * nativeToScVal([1, 2, 3], { type: 'i128' });  // scvVec<scvI128>
 * nativeToScVal({ 'hello': 1, 'world': [ true, false ] }, {
 *   type: {
 *     'hello': [ 'symbol', 'i128' ],
 *   }
 * })
 * // gives scvMap with entries: [
 * //     [ scvSymbol, scvI128 ],
 * //     [ scvString, scvArray<scvBool> ]
 * // ]
 *
 * @example
 * import {
 *   nativeToScVal,
 *   scValToNative,
 *   ScInt,
 *   xdr
 * } from '@stellar/stellar-base';
 *
 * let gigaMap = {
 *   bool: true,
 *   void: null,
 *   u32: xdr.ScVal.scvU32(1),
 *   i32: xdr.ScVal.scvI32(1),
 *   u64: 1n,
 *   i64: -1n,
 *   u128: new ScInt(1).toU128(),
 *   i128: new ScInt(1).toI128(),
 *   u256: new ScInt(1).toU256(),
 *   i256: new ScInt(1).toI256(),
 *   map: {
 *     arbitrary: 1n,
 *     nested: 'values',
 *     etc: false
 *   },
 *   vec: ['same', 'type', 'list'],
 * };
 *
 * // then, simply:
 * let scv = nativeToScVal(gigaMap);    // scv.switch() == xdr.ScValType.scvMap()
 *
 * // then...
 * someContract.call("method", scv);
 *
 * // Similarly, the inverse should work:
 * scValToNative(scv) == gigaMap;       // true
 */
function nativeToScVal(val) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_9hn7pcfy().b[0][0]++, {});
  cov_9hn7pcfy().f[0]++;
  cov_9hn7pcfy().s[0]++;
  switch (_typeof(val)) {
    case 'object':
      cov_9hn7pcfy().b[1][0]++;
      {
        var _ref2, _val$constructor;
        cov_9hn7pcfy().s[1]++;
        if (val === null) {
          cov_9hn7pcfy().b[2][0]++;
          cov_9hn7pcfy().s[2]++;
          return _xdr["default"].ScVal.scvVoid();
        } else {
          cov_9hn7pcfy().b[2][1]++;
        }
        cov_9hn7pcfy().s[3]++;
        if (val instanceof _xdr["default"].ScVal) {
          cov_9hn7pcfy().b[3][0]++;
          cov_9hn7pcfy().s[4]++;
          return val; // should we copy?
        } else {
          cov_9hn7pcfy().b[3][1]++;
        }
        cov_9hn7pcfy().s[5]++;
        if (val instanceof _address.Address) {
          cov_9hn7pcfy().b[4][0]++;
          cov_9hn7pcfy().s[6]++;
          return val.toScVal();
        } else {
          cov_9hn7pcfy().b[4][1]++;
        }
        cov_9hn7pcfy().s[7]++;
        if (val instanceof _contract.Contract) {
          cov_9hn7pcfy().b[5][0]++;
          cov_9hn7pcfy().s[8]++;
          return val.address().toScVal();
        } else {
          cov_9hn7pcfy().b[5][1]++;
        }
        cov_9hn7pcfy().s[9]++;
        if ((cov_9hn7pcfy().b[7][0]++, val instanceof Uint8Array) || (cov_9hn7pcfy().b[7][1]++, Buffer.isBuffer(val))) {
          var _ref;
          cov_9hn7pcfy().b[6][0]++;
          var copy = (cov_9hn7pcfy().s[10]++, Uint8Array.from(val));
          cov_9hn7pcfy().s[11]++;
          switch ((_ref = (cov_9hn7pcfy().b[9][0]++, opts === null || opts === void 0 ? void 0 : opts.type)) !== null && _ref !== void 0 ? _ref : (cov_9hn7pcfy().b[9][1]++, 'bytes')) {
            case 'bytes':
              cov_9hn7pcfy().b[8][0]++;
              cov_9hn7pcfy().s[12]++;
              return _xdr["default"].ScVal.scvBytes(copy);
            case 'symbol':
              cov_9hn7pcfy().b[8][1]++;
              cov_9hn7pcfy().s[13]++;
              return _xdr["default"].ScVal.scvSymbol(copy);
            case 'string':
              cov_9hn7pcfy().b[8][2]++;
              cov_9hn7pcfy().s[14]++;
              return _xdr["default"].ScVal.scvString(copy);
            default:
              cov_9hn7pcfy().b[8][3]++;
              cov_9hn7pcfy().s[15]++;
              throw new TypeError("invalid type (".concat(opts.type, ") specified for bytes-like value"));
          }
        } else {
          cov_9hn7pcfy().b[6][1]++;
        }
        cov_9hn7pcfy().s[16]++;
        if (Array.isArray(val)) {
          cov_9hn7pcfy().b[10][0]++;
          cov_9hn7pcfy().s[17]++;
          if ((cov_9hn7pcfy().b[12][0]++, val.length > 0) && (cov_9hn7pcfy().b[12][1]++, val.some(function (v) {
            cov_9hn7pcfy().f[1]++;
            cov_9hn7pcfy().s[18]++;
            return _typeof(v) !== _typeof(val[0]);
          }))) {
            cov_9hn7pcfy().b[11][0]++;
            cov_9hn7pcfy().s[19]++;
            throw new TypeError("array values (".concat(val, ") must have the same type (types: ").concat(val.map(function (v) {
              cov_9hn7pcfy().f[2]++;
              cov_9hn7pcfy().s[20]++;
              return _typeof(v);
            }).join(','), ")"));
          } else {
            cov_9hn7pcfy().b[11][1]++;
          }
          cov_9hn7pcfy().s[21]++;
          return _xdr["default"].ScVal.scvVec(val.map(function (v) {
            cov_9hn7pcfy().f[3]++;
            cov_9hn7pcfy().s[22]++;
            return nativeToScVal(v, opts);
          }));
        } else {
          cov_9hn7pcfy().b[10][1]++;
        }
        cov_9hn7pcfy().s[23]++;
        if (((_ref2 = (cov_9hn7pcfy().b[14][0]++, (_val$constructor = val.constructor) === null || _val$constructor === void 0 ? void 0 : _val$constructor.name)) !== null && _ref2 !== void 0 ? _ref2 : (cov_9hn7pcfy().b[14][1]++, '')) !== 'Object') {
          var _val$constructor2;
          cov_9hn7pcfy().b[13][0]++;
          cov_9hn7pcfy().s[24]++;
          throw new TypeError("cannot interpret ".concat((_val$constructor2 = val.constructor) === null || _val$constructor2 === void 0 ? void 0 : _val$constructor2.name, " value as ScVal (").concat(JSON.stringify(val), ")"));
        } else {
          cov_9hn7pcfy().b[13][1]++;
        }
        cov_9hn7pcfy().s[25]++;
        return _xdr["default"].ScVal.scvMap(Object.entries(val)
        // The Soroban runtime expects maps to have their keys in sorted
        // order, so let's do that here as part of the conversion to prevent
        // confusing error messages on execution.
        .sort(function (_ref3, _ref4) {
          var _ref5 = _slicedToArray(_ref3, 1),
            key1 = _ref5[0];
          var _ref6 = _slicedToArray(_ref4, 1),
            key2 = _ref6[0];
          cov_9hn7pcfy().f[4]++;
          cov_9hn7pcfy().s[26]++;
          return key1.localeCompare(key2);
        }).map(function (_ref7) {
          var _ref11, _ref12;
          var _ref8 = _slicedToArray(_ref7, 2),
            k = _ref8[0],
            v = _ref8[1];
          cov_9hn7pcfy().f[5]++;
          // the type can be specified with an entry for the key and the value,
          // e.g. val = { 'hello': 1 } and opts.type = { hello: [ 'symbol',
          // 'u128' ]} or you can use `null` for the default interpretation
          var _ref9 = (cov_9hn7pcfy().s[27]++, (_ref11 = (cov_9hn7pcfy().b[15][0]++, ((_ref12 = (cov_9hn7pcfy().b[16][0]++, opts === null || opts === void 0 ? void 0 : opts.type)) !== null && _ref12 !== void 0 ? _ref12 : (cov_9hn7pcfy().b[16][1]++, {}))[k])) !== null && _ref11 !== void 0 ? _ref11 : (cov_9hn7pcfy().b[15][1]++, [null, null])),
            _ref10 = _slicedToArray(_ref9, 2),
            keyType = _ref10[0],
            valType = _ref10[1];
          var keyOpts = (cov_9hn7pcfy().s[28]++, keyType ? (cov_9hn7pcfy().b[17][0]++, {
            type: keyType
          }) : (cov_9hn7pcfy().b[17][1]++, {}));
          var valOpts = (cov_9hn7pcfy().s[29]++, valType ? (cov_9hn7pcfy().b[18][0]++, {
            type: valType
          }) : (cov_9hn7pcfy().b[18][1]++, {}));
          cov_9hn7pcfy().s[30]++;
          return new _xdr["default"].ScMapEntry({
            key: nativeToScVal(k, keyOpts),
            val: nativeToScVal(v, valOpts)
          });
        }));
      }
    case 'number':
      cov_9hn7pcfy().b[1][1]++;
    case 'bigint':
      cov_9hn7pcfy().b[1][2]++;
      cov_9hn7pcfy().s[31]++;
      switch (opts === null || opts === void 0 ? void 0 : opts.type) {
        case 'u32':
          cov_9hn7pcfy().b[19][0]++;
          cov_9hn7pcfy().s[32]++;
          return _xdr["default"].ScVal.scvU32(val);
        case 'i32':
          cov_9hn7pcfy().b[19][1]++;
          cov_9hn7pcfy().s[33]++;
          return _xdr["default"].ScVal.scvI32(val);
        default:
          cov_9hn7pcfy().b[19][2]++;
          cov_9hn7pcfy().s[34]++;
          break;
      }
      cov_9hn7pcfy().s[35]++;
      return new _index.ScInt(val, {
        type: opts === null || opts === void 0 ? void 0 : opts.type
      }).toScVal();
    case 'string':
      cov_9hn7pcfy().b[1][3]++;
      {
        var _ref13;
        var optType = (cov_9hn7pcfy().s[36]++, (_ref13 = (cov_9hn7pcfy().b[20][0]++, opts === null || opts === void 0 ? void 0 : opts.type)) !== null && _ref13 !== void 0 ? _ref13 : (cov_9hn7pcfy().b[20][1]++, 'string'));
        cov_9hn7pcfy().s[37]++;
        switch (optType) {
          case 'string':
            cov_9hn7pcfy().b[21][0]++;
            cov_9hn7pcfy().s[38]++;
            return _xdr["default"].ScVal.scvString(val);
          case 'symbol':
            cov_9hn7pcfy().b[21][1]++;
            cov_9hn7pcfy().s[39]++;
            return _xdr["default"].ScVal.scvSymbol(val);
          case 'address':
            cov_9hn7pcfy().b[21][2]++;
            cov_9hn7pcfy().s[40]++;
            return new _address.Address(val).toScVal();
          case 'u32':
            cov_9hn7pcfy().b[21][3]++;
            cov_9hn7pcfy().s[41]++;
            return _xdr["default"].ScVal.scvU32(parseInt(val, 10));
          case 'i32':
            cov_9hn7pcfy().b[21][4]++;
            cov_9hn7pcfy().s[42]++;
            return _xdr["default"].ScVal.scvI32(parseInt(val, 10));
          default:
            cov_9hn7pcfy().b[21][5]++;
            cov_9hn7pcfy().s[43]++;
            if (_index.XdrLargeInt.isType(optType)) {
              cov_9hn7pcfy().b[22][0]++;
              cov_9hn7pcfy().s[44]++;
              return new _index.XdrLargeInt(optType, val).toScVal();
            } else {
              cov_9hn7pcfy().b[22][1]++;
            }
            cov_9hn7pcfy().s[45]++;
            throw new TypeError("invalid type (".concat(opts.type, ") specified for string value"));
        }
      }
    case 'boolean':
      cov_9hn7pcfy().b[1][4]++;
      cov_9hn7pcfy().s[46]++;
      return _xdr["default"].ScVal.scvBool(val);
    case 'undefined':
      cov_9hn7pcfy().b[1][5]++;
      cov_9hn7pcfy().s[47]++;
      return _xdr["default"].ScVal.scvVoid();
    case 'function':
      cov_9hn7pcfy().b[1][6]++;
      cov_9hn7pcfy().s[48]++;
      // FIXME: Is this too helpful?
      return nativeToScVal(val());
    default:
      cov_9hn7pcfy().b[1][7]++;
      cov_9hn7pcfy().s[49]++;
      throw new TypeError("failed to convert typeof ".concat(_typeof(val), " (").concat(val, ")"));
  }
}

/**
 * Given a smart contract value, attempt to convert it to a native type.
 * Possible conversions include:
 *
 *  - void -> `null`
 *  - u32, i32 -> `number`
 *  - u64, i64, u128, i128, u256, i256 -> `bigint`
 *  - vec -> `Array` of any of the above (via recursion)
 *  - map -> key-value object of any of the above (via recursion)
 *  - bool -> `boolean`
 *  - bytes -> `Uint8Array`
 *  - symbol -> `string`
 *  - string -> `string` IF the underlying buffer can be decoded as ascii/utf8,
 *              `Uint8Array` of the raw contents in any error case
 *
 * If no viable conversion can be determined, this just "unwraps" the smart
 * value to return its underlying XDR value.
 *
 * @param {xdr.ScVal} scv - the input smart contract value
 *
 * @returns {any}
 * @see nativeToScVal
 */
function scValToNative(scv) {
  var _ref14, _ref15;
  cov_9hn7pcfy().f[6]++;
  cov_9hn7pcfy().s[50]++;
  // we use the verbose xdr.ScValType.<type>.value form here because it's faster
  // than string comparisons and the underlying constants never need to be
  // updated
  switch (scv["switch"]().value) {
    case _xdr["default"].ScValType.scvVoid().value:
      cov_9hn7pcfy().b[23][0]++;
      cov_9hn7pcfy().s[51]++;
      return null;

    // these can be converted to bigints directly
    case _xdr["default"].ScValType.scvU64().value:
      cov_9hn7pcfy().b[23][1]++;
    case _xdr["default"].ScValType.scvI64().value:
      cov_9hn7pcfy().b[23][2]++;
      cov_9hn7pcfy().s[52]++;
      return scv.value().toBigInt();

    // these can be parsed by internal abstractions note that this can also
    // handle the above two cases, but it's not as efficient (another
    // type-check, parsing, etc.)
    case _xdr["default"].ScValType.scvU128().value:
      cov_9hn7pcfy().b[23][3]++;
    case _xdr["default"].ScValType.scvI128().value:
      cov_9hn7pcfy().b[23][4]++;
    case _xdr["default"].ScValType.scvU256().value:
      cov_9hn7pcfy().b[23][5]++;
    case _xdr["default"].ScValType.scvI256().value:
      cov_9hn7pcfy().b[23][6]++;
      cov_9hn7pcfy().s[53]++;
      return (0, _index.scValToBigInt)(scv);
    case _xdr["default"].ScValType.scvVec().value:
      cov_9hn7pcfy().b[23][7]++;
      cov_9hn7pcfy().s[54]++;
      return ((_ref14 = (cov_9hn7pcfy().b[24][0]++, scv.vec())) !== null && _ref14 !== void 0 ? _ref14 : (cov_9hn7pcfy().b[24][1]++, [])).map(scValToNative);
    case _xdr["default"].ScValType.scvAddress().value:
      cov_9hn7pcfy().b[23][8]++;
      cov_9hn7pcfy().s[55]++;
      return _address.Address.fromScVal(scv).toString();
    case _xdr["default"].ScValType.scvMap().value:
      cov_9hn7pcfy().b[23][9]++;
      cov_9hn7pcfy().s[56]++;
      return Object.fromEntries(((_ref15 = (cov_9hn7pcfy().b[25][0]++, scv.map())) !== null && _ref15 !== void 0 ? _ref15 : (cov_9hn7pcfy().b[25][1]++, [])).map(function (entry) {
        cov_9hn7pcfy().f[7]++;
        cov_9hn7pcfy().s[57]++;
        return [scValToNative(entry.key()), scValToNative(entry.val())];
      }));

    // these return the primitive type directly
    case _xdr["default"].ScValType.scvBool().value:
      cov_9hn7pcfy().b[23][10]++;
    case _xdr["default"].ScValType.scvU32().value:
      cov_9hn7pcfy().b[23][11]++;
    case _xdr["default"].ScValType.scvI32().value:
      cov_9hn7pcfy().b[23][12]++;
    case _xdr["default"].ScValType.scvBytes().value:
      cov_9hn7pcfy().b[23][13]++;
      cov_9hn7pcfy().s[58]++;
      return scv.value();

    // Symbols are limited to [a-zA-Z0-9_]+, so we can safely make ascii strings
    //
    // Strings, however, are "presented" as strings and we treat them as such
    // (in other words, string = bytes with a hint that it's text). If the user
    // encoded non-printable bytes in their string value, that's on them.
    //
    // Note that we assume a utf8 encoding (ascii-compatible). For other
    // encodings, you should probably use bytes anyway. If it cannot be decoded,
    // the raw bytes are returned.
    case _xdr["default"].ScValType.scvSymbol().value:
      cov_9hn7pcfy().b[23][14]++;
    case _xdr["default"].ScValType.scvString().value:
      cov_9hn7pcfy().b[23][15]++;
      {
        var v = (cov_9hn7pcfy().s[59]++, scv.value()); // string|Buffer
        cov_9hn7pcfy().s[60]++;
        if ((cov_9hn7pcfy().b[27][0]++, Buffer.isBuffer(v)) || (cov_9hn7pcfy().b[27][1]++, ArrayBuffer.isView(v))) {
          cov_9hn7pcfy().b[26][0]++;
          cov_9hn7pcfy().s[61]++;
          try {
            cov_9hn7pcfy().s[62]++;
            return new TextDecoder().decode(v);
          } catch (e) {
            cov_9hn7pcfy().s[63]++;
            return new Uint8Array(v.buffer); // copy of bytes
          }
        } else {
          cov_9hn7pcfy().b[26][1]++;
        }
        cov_9hn7pcfy().s[64]++;
        return v; // string already
      }

    // these can be converted to bigint
    case _xdr["default"].ScValType.scvTimepoint().value:
      cov_9hn7pcfy().b[23][16]++;
    case _xdr["default"].ScValType.scvDuration().value:
      cov_9hn7pcfy().b[23][17]++;
      cov_9hn7pcfy().s[65]++;
      return new _xdr["default"].Uint64(scv.value()).toBigInt();
    case _xdr["default"].ScValType.scvError().value:
      cov_9hn7pcfy().b[23][18]++;
      cov_9hn7pcfy().s[66]++;
      switch (scv.error()["switch"]().value) {
        // Distinguish errors from the user contract.
        case _xdr["default"].ScErrorType.sceContract().value:
          cov_9hn7pcfy().b[28][0]++;
          cov_9hn7pcfy().s[67]++;
          return {
            type: 'contract',
            code: scv.error().contractCode()
          };
        default:
          cov_9hn7pcfy().b[28][1]++;
          {
            var err = (cov_9hn7pcfy().s[68]++, scv.error());
            cov_9hn7pcfy().s[69]++;
            return {
              type: 'system',
              code: err.code().value,
              value: err.code().name
            };
          }
      }

    // in the fallthrough case, just return the underlying value directly
    default:
      cov_9hn7pcfy().b[23][19]++;
      cov_9hn7pcfy().s[70]++;
      return scv.value();
  }
}