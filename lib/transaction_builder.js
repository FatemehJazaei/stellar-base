"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransactionBuilder = exports.TimeoutInfinite = exports.BASE_FEE = void 0;
exports.isValidDate = isValidDate;
var _jsXdr = require("@stellar/js-xdr");
var _bignumber = _interopRequireDefault(require("./util/bignumber"));
var _xdr = _interopRequireDefault(require("./xdr"));
var _account = require("./account");
var _muxed_account = require("./muxed_account");
var _decode_encode_muxed_account = require("./util/decode_encode_muxed_account");
var _transaction = require("./transaction");
var _fee_bump_transaction = require("./fee_bump_transaction");
var _sorobandata_builder = require("./sorobandata_builder");
var _strkey = require("./strkey");
var _signerkey = require("./signerkey");
var _memo = require("./memo");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_x4y6fyyjf() {
  var path = "/mnt/g/stellar-base/src/transaction_builder.js";
  var hash = "69cd84b3781c1c61f7148b51b91399cf6bb8e42c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/transaction_builder.js",
    statementMap: {
      "0": {
        start: {
          line: 28,
          column: 24
        },
        end: {
          line: 28,
          column: 29
        }
      },
      "1": {
        start: {
          line: 35,
          column: 31
        },
        end: {
          line: 35,
          column: 32
        }
      },
      "2": {
        start: {
          line: 128,
          column: 4
        },
        end: {
          line: 130,
          column: 5
        }
      },
      "3": {
        start: {
          line: 129,
          column: 6
        },
        end: {
          line: 129,
          column: 73
        }
      },
      "4": {
        start: {
          line: 132,
          column: 4
        },
        end: {
          line: 134,
          column: 5
        }
      },
      "5": {
        start: {
          line: 133,
          column: 6
        },
        end: {
          line: 133,
          column: 75
        }
      },
      "6": {
        start: {
          line: 136,
          column: 4
        },
        end: {
          line: 136,
          column: 32
        }
      },
      "7": {
        start: {
          line: 137,
          column: 4
        },
        end: {
          line: 137,
          column: 25
        }
      },
      "8": {
        start: {
          line: 139,
          column: 4
        },
        end: {
          line: 139,
          column: 28
        }
      },
      "9": {
        start: {
          line: 140,
          column: 4
        },
        end: {
          line: 140,
          column: 70
        }
      },
      "10": {
        start: {
          line: 141,
          column: 4
        },
        end: {
          line: 141,
          column: 76
        }
      },
      "11": {
        start: {
          line: 142,
          column: 4
        },
        end: {
          line: 142,
          column: 62
        }
      },
      "12": {
        start: {
          line: 143,
          column: 4
        },
        end: {
          line: 143,
          column: 68
        }
      },
      "13": {
        start: {
          line: 144,
          column: 4
        },
        end: {
          line: 144,
          column: 80
        }
      },
      "14": {
        start: {
          line: 145,
          column: 4
        },
        end: {
          line: 145,
          column: 74
        }
      },
      "15": {
        start: {
          line: 146,
          column: 4
        },
        end: {
          line: 146,
          column: 41
        }
      },
      "16": {
        start: {
          line: 147,
          column: 4
        },
        end: {
          line: 147,
          column: 60
        }
      },
      "17": {
        start: {
          line: 149,
          column: 4
        },
        end: {
          line: 151,
          column: 13
        }
      },
      "18": {
        start: {
          line: 180,
          column: 4
        },
        end: {
          line: 182,
          column: 5
        }
      },
      "19": {
        start: {
          line: 181,
          column: 6
        },
        end: {
          line: 181,
          column: 66
        }
      },
      "20": {
        start: {
          line: 184,
          column: 24
        },
        end: {
          line: 184,
          column: 61
        }
      },
      "21": {
        start: {
          line: 188,
          column: 4
        },
        end: {
          line: 194,
          column: 5
        }
      },
      "22": {
        start: {
          line: 189,
          column: 6
        },
        end: {
          line: 189,
          column: 64
        }
      },
      "23": {
        start: {
          line: 190,
          column: 11
        },
        end: {
          line: 194,
          column: 5
        }
      },
      "24": {
        start: {
          line: 191,
          column: 6
        },
        end: {
          line: 191,
          column: 51
        }
      },
      "25": {
        start: {
          line: 193,
          column: 6
        },
        end: {
          line: 193,
          column: 73
        }
      },
      "26": {
        start: {
          line: 198,
          column: 24
        },
        end: {
          line: 198,
          column: 67
        }
      },
      "27": {
        start: {
          line: 200,
          column: 20
        },
        end: {
          line: 211,
          column: 6
        }
      },
      "28": {
        start: {
          line: 213,
          column: 4
        },
        end: {
          line: 213,
          column: 66
        }
      },
      "29": {
        start: {
          line: 213,
          column: 40
        },
        end: {
          line: 213,
          column: 64
        }
      },
      "30": {
        start: {
          line: 215,
          column: 4
        },
        end: {
          line: 215,
          column: 19
        }
      },
      "31": {
        start: {
          line: 227,
          column: 4
        },
        end: {
          line: 227,
          column: 36
        }
      },
      "32": {
        start: {
          line: 228,
          column: 4
        },
        end: {
          line: 228,
          column: 16
        }
      },
      "33": {
        start: {
          line: 240,
          column: 4
        },
        end: {
          line: 240,
          column: 48
        }
      },
      "34": {
        start: {
          line: 241,
          column: 4
        },
        end: {
          line: 241,
          column: 16
        }
      },
      "35": {
        start: {
          line: 249,
          column: 4
        },
        end: {
          line: 249,
          column: 25
        }
      },
      "36": {
        start: {
          line: 250,
          column: 4
        },
        end: {
          line: 250,
          column: 16
        }
      },
      "37": {
        start: {
          line: 261,
          column: 4
        },
        end: {
          line: 261,
          column: 37
        }
      },
      "38": {
        start: {
          line: 262,
          column: 4
        },
        end: {
          line: 262,
          column: 16
        }
      },
      "39": {
        start: {
          line: 271,
          column: 4
        },
        end: {
          line: 271,
          column: 21
        }
      },
      "40": {
        start: {
          line: 272,
          column: 4
        },
        end: {
          line: 272,
          column: 16
        }
      },
      "41": {
        start: {
          line: 307,
          column: 4
        },
        end: {
          line: 311,
          column: 5
        }
      },
      "42": {
        start: {
          line: 308,
          column: 6
        },
        end: {
          line: 310,
          column: 8
        }
      },
      "43": {
        start: {
          line: 313,
          column: 4
        },
        end: {
          line: 315,
          column: 5
        }
      },
      "44": {
        start: {
          line: 314,
          column: 6
        },
        end: {
          line: 314,
          column: 52
        }
      },
      "45": {
        start: {
          line: 317,
          column: 4
        },
        end: {
          line: 332,
          column: 5
        }
      },
      "46": {
        start: {
          line: 318,
          column: 31
        },
        end: {
          line: 318,
          column: 77
        }
      },
      "47": {
        start: {
          line: 319,
          column: 6
        },
        end: {
          line: 326,
          column: 7
        }
      },
      "48": {
        start: {
          line: 320,
          column: 8
        },
        end: {
          line: 320,
          column: 68
        }
      },
      "49": {
        start: {
          line: 322,
          column: 8
        },
        end: {
          line: 325,
          column: 10
        }
      },
      "50": {
        start: {
          line: 328,
          column: 6
        },
        end: {
          line: 331,
          column: 8
        }
      },
      "51": {
        start: {
          line: 334,
          column: 4
        },
        end: {
          line: 334,
          column: 16
        }
      },
      "52": {
        start: {
          line: 356,
          column: 4
        },
        end: {
          line: 358,
          column: 5
        }
      },
      "53": {
        start: {
          line: 357,
          column: 6
        },
        end: {
          line: 357,
          column: 55
        }
      },
      "54": {
        start: {
          line: 359,
          column: 4
        },
        end: {
          line: 361,
          column: 5
        }
      },
      "55": {
        start: {
          line: 360,
          column: 6
        },
        end: {
          line: 360,
          column: 55
        }
      },
      "56": {
        start: {
          line: 363,
          column: 4
        },
        end: {
          line: 367,
          column: 5
        }
      },
      "57": {
        start: {
          line: 364,
          column: 6
        },
        end: {
          line: 366,
          column: 8
        }
      },
      "58": {
        start: {
          line: 370,
          column: 20
        },
        end: {
          line: 370,
          column: 63
        }
      },
      "59": {
        start: {
          line: 371,
          column: 20
        },
        end: {
          line: 371,
          column: 63
        }
      },
      "60": {
        start: {
          line: 372,
          column: 4
        },
        end: {
          line: 374,
          column: 5
        }
      },
      "61": {
        start: {
          line: 373,
          column: 6
        },
        end: {
          line: 373,
          column: 53
        }
      },
      "62": {
        start: {
          line: 375,
          column: 4
        },
        end: {
          line: 377,
          column: 5
        }
      },
      "63": {
        start: {
          line: 376,
          column: 6
        },
        end: {
          line: 376,
          column: 53
        }
      },
      "64": {
        start: {
          line: 378,
          column: 4
        },
        end: {
          line: 380,
          column: 5
        }
      },
      "65": {
        start: {
          line: 379,
          column: 6
        },
        end: {
          line: 379,
          column: 66
        }
      },
      "66": {
        start: {
          line: 382,
          column: 4
        },
        end: {
          line: 382,
          column: 43
        }
      },
      "67": {
        start: {
          line: 384,
          column: 4
        },
        end: {
          line: 384,
          column: 16
        }
      },
      "68": {
        start: {
          line: 403,
          column: 4
        },
        end: {
          line: 407,
          column: 5
        }
      },
      "69": {
        start: {
          line: 404,
          column: 6
        },
        end: {
          line: 406,
          column: 8
        }
      },
      "70": {
        start: {
          line: 409,
          column: 4
        },
        end: {
          line: 411,
          column: 5
        }
      },
      "71": {
        start: {
          line: 410,
          column: 6
        },
        end: {
          line: 410,
          column: 55
        }
      },
      "72": {
        start: {
          line: 412,
          column: 4
        },
        end: {
          line: 414,
          column: 5
        }
      },
      "73": {
        start: {
          line: 413,
          column: 6
        },
        end: {
          line: 413,
          column: 55
        }
      },
      "74": {
        start: {
          line: 415,
          column: 4
        },
        end: {
          line: 417,
          column: 5
        }
      },
      "75": {
        start: {
          line: 416,
          column: 6
        },
        end: {
          line: 416,
          column: 70
        }
      },
      "76": {
        start: {
          line: 419,
          column: 4
        },
        end: {
          line: 419,
          column: 49
        }
      },
      "77": {
        start: {
          line: 421,
          column: 4
        },
        end: {
          line: 421,
          column: 16
        }
      },
      "78": {
        start: {
          line: 442,
          column: 4
        },
        end: {
          line: 446,
          column: 5
        }
      },
      "79": {
        start: {
          line: 443,
          column: 6
        },
        end: {
          line: 445,
          column: 8
        }
      },
      "80": {
        start: {
          line: 448,
          column: 4
        },
        end: {
          line: 448,
          column: 49
        }
      },
      "81": {
        start: {
          line: 450,
          column: 4
        },
        end: {
          line: 450,
          column: 16
        }
      },
      "82": {
        start: {
          line: 466,
          column: 4
        },
        end: {
          line: 468,
          column: 5
        }
      },
      "83": {
        start: {
          line: 467,
          column: 6
        },
        end: {
          line: 467,
          column: 67
        }
      },
      "84": {
        start: {
          line: 469,
          column: 4
        },
        end: {
          line: 473,
          column: 5
        }
      },
      "85": {
        start: {
          line: 470,
          column: 6
        },
        end: {
          line: 472,
          column: 8
        }
      },
      "86": {
        start: {
          line: 475,
          column: 4
        },
        end: {
          line: 477,
          column: 5
        }
      },
      "87": {
        start: {
          line: 476,
          column: 6
        },
        end: {
          line: 476,
          column: 69
        }
      },
      "88": {
        start: {
          line: 479,
          column: 4
        },
        end: {
          line: 479,
          column: 51
        }
      },
      "89": {
        start: {
          line: 481,
          column: 4
        },
        end: {
          line: 481,
          column: 16
        }
      },
      "90": {
        start: {
          line: 497,
          column: 4
        },
        end: {
          line: 501,
          column: 5
        }
      },
      "91": {
        start: {
          line: 498,
          column: 6
        },
        end: {
          line: 500,
          column: 8
        }
      },
      "92": {
        start: {
          line: 503,
          column: 4
        },
        end: {
          line: 505,
          column: 5
        }
      },
      "93": {
        start: {
          line: 504,
          column: 6
        },
        end: {
          line: 504,
          column: 76
        }
      },
      "94": {
        start: {
          line: 507,
          column: 4
        },
        end: {
          line: 507,
          column: 43
        }
      },
      "95": {
        start: {
          line: 509,
          column: 4
        },
        end: {
          line: 509,
          column: 16
        }
      },
      "96": {
        start: {
          line: 523,
          column: 4
        },
        end: {
          line: 525,
          column: 5
        }
      },
      "97": {
        start: {
          line: 524,
          column: 6
        },
        end: {
          line: 524,
          column: 68
        }
      },
      "98": {
        start: {
          line: 527,
          column: 4
        },
        end: {
          line: 531,
          column: 5
        }
      },
      "99": {
        start: {
          line: 528,
          column: 6
        },
        end: {
          line: 530,
          column: 8
        }
      },
      "100": {
        start: {
          line: 533,
          column: 4
        },
        end: {
          line: 535,
          column: 5
        }
      },
      "101": {
        start: {
          line: 534,
          column: 6
        },
        end: {
          line: 534,
          column: 73
        }
      },
      "102": {
        start: {
          line: 537,
          column: 4
        },
        end: {
          line: 537,
          column: 42
        }
      },
      "103": {
        start: {
          line: 539,
          column: 4
        },
        end: {
          line: 539,
          column: 16
        }
      },
      "104": {
        start: {
          line: 551,
          column: 4
        },
        end: {
          line: 551,
          column: 47
        }
      },
      "105": {
        start: {
          line: 552,
          column: 4
        },
        end: {
          line: 552,
          column: 16
        }
      },
      "106": {
        start: {
          line: 575,
          column: 4
        },
        end: {
          line: 575,
          column: 67
        }
      },
      "107": {
        start: {
          line: 576,
          column: 4
        },
        end: {
          line: 576,
          column: 16
        }
      },
      "108": {
        start: {
          line: 585,
          column: 27
        },
        end: {
          line: 585,
          column: 78
        }
      },
      "109": {
        start: {
          line: 586,
          column: 16
        },
        end: {
          line: 588,
          column: 17
        }
      },
      "110": {
        start: {
          line: 589,
          column: 18
        },
        end: {
          line: 593,
          column: 5
        }
      },
      "111": {
        start: {
          line: 595,
          column: 4
        },
        end: {
          line: 603,
          column: 5
        }
      },
      "112": {
        start: {
          line: 600,
          column: 6
        },
        end: {
          line: 602,
          column: 8
        }
      },
      "113": {
        start: {
          line: 605,
          column: 4
        },
        end: {
          line: 607,
          column: 5
        }
      },
      "114": {
        start: {
          line: 606,
          column: 6
        },
        end: {
          line: 606,
          column: 73
        }
      },
      "115": {
        start: {
          line: 608,
          column: 4
        },
        end: {
          line: 610,
          column: 5
        }
      },
      "116": {
        start: {
          line: 609,
          column: 6
        },
        end: {
          line: 609,
          column: 73
        }
      },
      "117": {
        start: {
          line: 612,
          column: 4
        },
        end: {
          line: 614,
          column: 6
        }
      },
      "118": {
        start: {
          line: 615,
          column: 4
        },
        end: {
          line: 617,
          column: 6
        }
      },
      "119": {
        start: {
          line: 619,
          column: 23
        },
        end: {
          line: 619,
          column: 58
        }
      },
      "120": {
        start: {
          line: 621,
          column: 4
        },
        end: {
          line: 655,
          column: 5
        }
      },
      "121": {
        start: {
          line: 622,
          column: 25
        },
        end: {
          line: 622,
          column: 29
        }
      },
      "122": {
        start: {
          line: 623,
          column: 6
        },
        end: {
          line: 625,
          column: 7
        }
      },
      "123": {
        start: {
          line: 624,
          column: 8
        },
        end: {
          line: 624,
          column: 63
        }
      },
      "124": {
        start: {
          line: 627,
          column: 22
        },
        end: {
          line: 627,
          column: 52
        }
      },
      "125": {
        start: {
          line: 628,
          column: 6
        },
        end: {
          line: 628,
          column: 59
        }
      },
      "126": {
        start: {
          line: 630,
          column: 24
        },
        end: {
          line: 634,
          column: 7
        }
      },
      "127": {
        start: {
          line: 636,
          column: 30
        },
        end: {
          line: 636,
          column: 67
        }
      },
      "128": {
        start: {
          line: 639,
          column: 8
        },
        end: {
          line: 641,
          column: 14
        }
      },
      "129": {
        start: {
          line: 643,
          column: 6
        },
        end: {
          line: 652,
          column: 8
        }
      },
      "130": {
        start: {
          line: 654,
          column: 6
        },
        end: {
          line: 654,
          column: 61
        }
      },
      "131": {
        start: {
          line: 657,
          column: 4
        },
        end: {
          line: 657,
          column: 79
        }
      },
      "132": {
        start: {
          line: 662,
          column: 4
        },
        end: {
          line: 668,
          column: 5
        }
      },
      "133": {
        start: {
          line: 664,
          column: 6
        },
        end: {
          line: 664,
          column: 62
        }
      },
      "134": {
        start: {
          line: 667,
          column: 6
        },
        end: {
          line: 667,
          column: 54
        }
      },
      "135": {
        start: {
          line: 670,
          column: 16
        },
        end: {
          line: 670,
          column: 42
        }
      },
      "136": {
        start: {
          line: 671,
          column: 4
        },
        end: {
          line: 671,
          column: 36
        }
      },
      "137": {
        start: {
          line: 672,
          column: 23
        },
        end: {
          line: 674,
          column: 5
        }
      },
      "138": {
        start: {
          line: 676,
          column: 15
        },
        end: {
          line: 676,
          column: 66
        }
      },
      "139": {
        start: {
          line: 678,
          column: 4
        },
        end: {
          line: 678,
          column: 42
        }
      },
      "140": {
        start: {
          line: 680,
          column: 4
        },
        end: {
          line: 680,
          column: 14
        }
      },
      "141": {
        start: {
          line: 684,
          column: 4
        },
        end: {
          line: 690,
          column: 6
        }
      },
      "142": {
        start: {
          line: 723,
          column: 21
        },
        end: {
          line: 723,
          column: 46
        }
      },
      "143": {
        start: {
          line: 724,
          column: 29
        },
        end: {
          line: 724,
          column: 69
        }
      },
      "144": {
        start: {
          line: 725,
          column: 17
        },
        end: {
          line: 725,
          column: 39
        }
      },
      "145": {
        start: {
          line: 728,
          column: 4
        },
        end: {
          line: 732,
          column: 5
        }
      },
      "146": {
        start: {
          line: 729,
          column: 6
        },
        end: {
          line: 731,
          column: 8
        }
      },
      "147": {
        start: {
          line: 734,
          column: 23
        },
        end: {
          line: 734,
          column: 46
        }
      },
      "148": {
        start: {
          line: 737,
          column: 4
        },
        end: {
          line: 741,
          column: 5
        }
      },
      "149": {
        start: {
          line: 738,
          column: 6
        },
        end: {
          line: 740,
          column: 8
        }
      },
      "150": {
        start: {
          line: 743,
          column: 26
        },
        end: {
          line: 743,
          column: 46
        }
      },
      "151": {
        start: {
          line: 744,
          column: 4
        },
        end: {
          line: 763,
          column: 5
        }
      },
      "152": {
        start: {
          line: 745,
          column: 19
        },
        end: {
          line: 745,
          column: 44
        }
      },
      "153": {
        start: {
          line: 746,
          column: 19
        },
        end: {
          line: 756,
          column: 8
        }
      },
      "154": {
        start: {
          line: 757,
          column: 6
        },
        end: {
          line: 762,
          column: 8
        }
      },
      "155": {
        start: {
          line: 766,
          column: 4
        },
        end: {
          line: 770,
          column: 5
        }
      },
      "156": {
        start: {
          line: 767,
          column: 6
        },
        end: {
          line: 767,
          column: 64
        }
      },
      "157": {
        start: {
          line: 769,
          column: 6
        },
        end: {
          line: 769,
          column: 53
        }
      },
      "158": {
        start: {
          line: 772,
          column: 15
        },
        end: {
          line: 779,
          column: 6
        }
      },
      "159": {
        start: {
          line: 780,
          column: 30
        },
        end: {
          line: 783,
          column: 6
        }
      },
      "160": {
        start: {
          line: 784,
          column: 21
        },
        end: {
          line: 786,
          column: 5
        }
      },
      "161": {
        start: {
          line: 788,
          column: 4
        },
        end: {
          line: 788,
          column: 63
        }
      },
      "162": {
        start: {
          line: 804,
          column: 4
        },
        end: {
          line: 806,
          column: 5
        }
      },
      "163": {
        start: {
          line: 805,
          column: 6
        },
        end: {
          line: 805,
          column: 69
        }
      },
      "164": {
        start: {
          line: 808,
          column: 4
        },
        end: {
          line: 810,
          column: 5
        }
      },
      "165": {
        start: {
          line: 809,
          column: 6
        },
        end: {
          line: 809,
          column: 65
        }
      },
      "166": {
        start: {
          line: 812,
          column: 4
        },
        end: {
          line: 812,
          column: 56
        }
      },
      "167": {
        start: {
          line: 824,
          column: 2
        },
        end: {
          line: 824,
          column: 40
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 127,
            column: 2
          },
          end: {
            line: 127,
            column: 3
          }
        },
        loc: {
          start: {
            line: 127,
            column: 40
          },
          end: {
            line: 152,
            column: 3
          }
        },
        line: 127
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 179,
            column: 2
          },
          end: {
            line: 179,
            column: 3
          }
        },
        loc: {
          start: {
            line: 179,
            column: 34
          },
          end: {
            line: 216,
            column: 3
          }
        },
        line: 179
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 213,
            column: 32
          },
          end: {
            line: 213,
            column: 33
          }
        },
        loc: {
          start: {
            line: 213,
            column: 40
          },
          end: {
            line: 213,
            column: 64
          }
        },
        line: 213
      },
      "3": {
        name: "(anonymous_3)",
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
            column: 26
          },
          end: {
            line: 229,
            column: 3
          }
        },
        line: 226
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 239,
            column: 2
          },
          end: {
            line: 239,
            column: 3
          }
        },
        loc: {
          start: {
            line: 239,
            column: 35
          },
          end: {
            line: 242,
            column: 3
          }
        },
        line: 239
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 248,
            column: 2
          },
          end: {
            line: 248,
            column: 3
          }
        },
        loc: {
          start: {
            line: 248,
            column: 20
          },
          end: {
            line: 251,
            column: 3
          }
        },
        line: 248
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 260,
            column: 2
          },
          end: {
            line: 260,
            column: 3
          }
        },
        loc: {
          start: {
            line: 260,
            column: 26
          },
          end: {
            line: 263,
            column: 3
          }
        },
        line: 260
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 270,
            column: 2
          },
          end: {
            line: 270,
            column: 3
          }
        },
        loc: {
          start: {
            line: 270,
            column: 16
          },
          end: {
            line: 273,
            column: 3
          }
        },
        line: 270
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 306,
            column: 2
          },
          end: {
            line: 306,
            column: 3
          }
        },
        loc: {
          start: {
            line: 306,
            column: 29
          },
          end: {
            line: 335,
            column: 3
          }
        },
        line: 306
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 354,
            column: 2
          },
          end: {
            line: 354,
            column: 3
          }
        },
        loc: {
          start: {
            line: 354,
            column: 48
          },
          end: {
            line: 385,
            column: 3
          }
        },
        line: 354
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 402,
            column: 2
          },
          end: {
            line: 402,
            column: 3
          }
        },
        loc: {
          start: {
            line: 402,
            column: 40
          },
          end: {
            line: 422,
            column: 3
          }
        },
        line: 402
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 441,
            column: 2
          },
          end: {
            line: 441,
            column: 3
          }
        },
        loc: {
          start: {
            line: 441,
            column: 44
          },
          end: {
            line: 451,
            column: 3
          }
        },
        line: 441
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 465,
            column: 2
          },
          end: {
            line: 465,
            column: 3
          }
        },
        loc: {
          start: {
            line: 465,
            column: 46
          },
          end: {
            line: 482,
            column: 3
          }
        },
        line: 465
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 496,
            column: 2
          },
          end: {
            line: 496,
            column: 3
          }
        },
        loc: {
          start: {
            line: 496,
            column: 38
          },
          end: {
            line: 510,
            column: 3
          }
        },
        line: 496
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 522,
            column: 2
          },
          end: {
            line: 522,
            column: 3
          }
        },
        loc: {
          start: {
            line: 522,
            column: 32
          },
          end: {
            line: 540,
            column: 3
          }
        },
        line: 522
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 550,
            column: 2
          },
          end: {
            line: 550,
            column: 3
          }
        },
        loc: {
          start: {
            line: 550,
            column: 42
          },
          end: {
            line: 553,
            column: 3
          }
        },
        line: 550
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 574,
            column: 2
          },
          end: {
            line: 574,
            column: 3
          }
        },
        loc: {
          start: {
            line: 574,
            column: 30
          },
          end: {
            line: 577,
            column: 3
          }
        },
        line: 574
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 584,
            column: 2
          },
          end: {
            line: 584,
            column: 3
          }
        },
        loc: {
          start: {
            line: 584,
            column: 10
          },
          end: {
            line: 681,
            column: 3
          }
        },
        line: 584
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 683,
            column: 2
          },
          end: {
            line: 683,
            column: 3
          }
        },
        loc: {
          start: {
            line: 683,
            column: 23
          },
          end: {
            line: 691,
            column: 3
          }
        },
        line: 683
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 717,
            column: 2
          },
          end: {
            line: 717,
            column: 3
          }
        },
        loc: {
          start: {
            line: 722,
            column: 4
          },
          end: {
            line: 789,
            column: 3
          }
        },
        line: 722
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 803,
            column: 2
          },
          end: {
            line: 803,
            column: 3
          }
        },
        loc: {
          start: {
            line: 803,
            column: 46
          },
          end: {
            line: 813,
            column: 3
          }
        },
        line: 803
      },
      "21": {
        name: "isValidDate",
        decl: {
          start: {
            line: 821,
            column: 16
          },
          end: {
            line: 821,
            column: 27
          }
        },
        loc: {
          start: {
            line: 821,
            column: 31
          },
          end: {
            line: 825,
            column: 1
          }
        },
        line: 821
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 127,
            column: 29
          },
          end: {
            line: 127,
            column: 38
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 127,
            column: 36
          },
          end: {
            line: 127,
            column: 38
          }
        }],
        line: 127
      },
      "1": {
        loc: {
          start: {
            line: 128,
            column: 4
          },
          end: {
            line: 130,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 128,
            column: 4
          },
          end: {
            line: 130,
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
        line: 128
      },
      "2": {
        loc: {
          start: {
            line: 132,
            column: 4
          },
          end: {
            line: 134,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 132,
            column: 4
          },
          end: {
            line: 134,
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
        line: 132
      },
      "3": {
        loc: {
          start: {
            line: 140,
            column: 22
          },
          end: {
            line: 140,
            column: 69
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 140,
            column: 40
          },
          end: {
            line: 140,
            column: 62
          }
        }, {
          start: {
            line: 140,
            column: 65
          },
          end: {
            line: 140,
            column: 69
          }
        }],
        line: 140
      },
      "4": {
        loc: {
          start: {
            line: 141,
            column: 24
          },
          end: {
            line: 141,
            column: 75
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 141,
            column: 44
          },
          end: {
            line: 141,
            column: 68
          }
        }, {
          start: {
            line: 141,
            column: 71
          },
          end: {
            line: 141,
            column: 75
          }
        }],
        line: 141
      },
      "5": {
        loc: {
          start: {
            line: 142,
            column: 30
          },
          end: {
            line: 142,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 142,
            column: 30
          },
          end: {
            line: 142,
            column: 53
          }
        }, {
          start: {
            line: 142,
            column: 57
          },
          end: {
            line: 142,
            column: 61
          }
        }],
        line: 142
      },
      "6": {
        loc: {
          start: {
            line: 143,
            column: 33
          },
          end: {
            line: 143,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 143,
            column: 33
          },
          end: {
            line: 143,
            column: 59
          }
        }, {
          start: {
            line: 143,
            column: 63
          },
          end: {
            line: 143,
            column: 67
          }
        }],
        line: 143
      },
      "7": {
        loc: {
          start: {
            line: 144,
            column: 39
          },
          end: {
            line: 144,
            column: 79
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 144,
            column: 39
          },
          end: {
            line: 144,
            column: 71
          }
        }, {
          start: {
            line: 144,
            column: 75
          },
          end: {
            line: 144,
            column: 79
          }
        }],
        line: 144
      },
      "8": {
        loc: {
          start: {
            line: 145,
            column: 24
          },
          end: {
            line: 145,
            column: 73
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 145,
            column: 44
          },
          end: {
            line: 145,
            column: 66
          }
        }, {
          start: {
            line: 145,
            column: 69
          },
          end: {
            line: 145,
            column: 73
          }
        }],
        line: 145
      },
      "9": {
        loc: {
          start: {
            line: 146,
            column: 16
          },
          end: {
            line: 146,
            column: 40
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 146,
            column: 16
          },
          end: {
            line: 146,
            column: 25
          }
        }, {
          start: {
            line: 146,
            column: 29
          },
          end: {
            line: 146,
            column: 40
          }
        }],
        line: 146
      },
      "10": {
        loc: {
          start: {
            line: 147,
            column: 29
          },
          end: {
            line: 147,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 147,
            column: 29
          },
          end: {
            line: 147,
            column: 51
          }
        }, {
          start: {
            line: 147,
            column: 55
          },
          end: {
            line: 147,
            column: 59
          }
        }],
        line: 147
      },
      "11": {
        loc: {
          start: {
            line: 149,
            column: 23
          },
          end: {
            line: 151,
            column: 12
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 150,
            column: 8
          },
          end: {
            line: 150,
            column: 56
          }
        }, {
          start: {
            line: 151,
            column: 8
          },
          end: {
            line: 151,
            column: 12
          }
        }],
        line: 149
      },
      "12": {
        loc: {
          start: {
            line: 179,
            column: 23
          },
          end: {
            line: 179,
            column: 32
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 179,
            column: 30
          },
          end: {
            line: 179,
            column: 32
          }
        }],
        line: 179
      },
      "13": {
        loc: {
          start: {
            line: 180,
            column: 4
          },
          end: {
            line: 182,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 180,
            column: 4
          },
          end: {
            line: 182,
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
        line: 180
      },
      "14": {
        loc: {
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 194,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 194,
            column: 5
          }
        }, {
          start: {
            line: 190,
            column: 11
          },
          end: {
            line: 194,
            column: 5
          }
        }],
        line: 188
      },
      "15": {
        loc: {
          start: {
            line: 190,
            column: 11
          },
          end: {
            line: 194,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 190,
            column: 11
          },
          end: {
            line: 194,
            column: 5
          }
        }, {
          start: {
            line: 192,
            column: 11
          },
          end: {
            line: 194,
            column: 5
          }
        }],
        line: 190
      },
      "16": {
        loc: {
          start: {
            line: 201,
            column: 12
          },
          end: {
            line: 201,
            column: 35
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 201,
            column: 12
          },
          end: {
            line: 201,
            column: 23
          }
        }, {
          start: {
            line: 201,
            column: 27
          },
          end: {
            line: 201,
            column: 35
          }
        }],
        line: 201
      },
      "17": {
        loc: {
          start: {
            line: 307,
            column: 4
          },
          end: {
            line: 311,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 307,
            column: 4
          },
          end: {
            line: 311,
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
        line: 307
      },
      "18": {
        loc: {
          start: {
            line: 307,
            column: 8
          },
          end: {
            line: 307,
            column: 63
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 307,
            column: 8
          },
          end: {
            line: 307,
            column: 32
          }
        }, {
          start: {
            line: 307,
            column: 36
          },
          end: {
            line: 307,
            column: 63
          }
        }],
        line: 307
      },
      "19": {
        loc: {
          start: {
            line: 313,
            column: 4
          },
          end: {
            line: 315,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 313,
            column: 4
          },
          end: {
            line: 315,
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
        line: 313
      },
      "20": {
        loc: {
          start: {
            line: 317,
            column: 4
          },
          end: {
            line: 332,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 317,
            column: 4
          },
          end: {
            line: 332,
            column: 5
          }
        }, {
          start: {
            line: 327,
            column: 11
          },
          end: {
            line: 332,
            column: 5
          }
        }],
        line: 317
      },
      "21": {
        loc: {
          start: {
            line: 319,
            column: 6
          },
          end: {
            line: 326,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 319,
            column: 6
          },
          end: {
            line: 326,
            column: 7
          }
        }, {
          start: {
            line: 321,
            column: 13
          },
          end: {
            line: 326,
            column: 7
          }
        }],
        line: 319
      },
      "22": {
        loc: {
          start: {
            line: 356,
            column: 4
          },
          end: {
            line: 358,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 356,
            column: 4
          },
          end: {
            line: 358,
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
        line: 356
      },
      "23": {
        loc: {
          start: {
            line: 359,
            column: 4
          },
          end: {
            line: 361,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 359,
            column: 4
          },
          end: {
            line: 361,
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
        line: 359
      },
      "24": {
        loc: {
          start: {
            line: 363,
            column: 4
          },
          end: {
            line: 367,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 363,
            column: 4
          },
          end: {
            line: 367,
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
        line: 363
      },
      "25": {
        loc: {
          start: {
            line: 372,
            column: 4
          },
          end: {
            line: 374,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 372,
            column: 4
          },
          end: {
            line: 374,
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
        line: 372
      },
      "26": {
        loc: {
          start: {
            line: 375,
            column: 4
          },
          end: {
            line: 377,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 375,
            column: 4
          },
          end: {
            line: 377,
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
        line: 375
      },
      "27": {
        loc: {
          start: {
            line: 378,
            column: 4
          },
          end: {
            line: 380,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 378,
            column: 4
          },
          end: {
            line: 380,
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
        line: 378
      },
      "28": {
        loc: {
          start: {
            line: 378,
            column: 8
          },
          end: {
            line: 378,
            column: 40
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 378,
            column: 8
          },
          end: {
            line: 378,
            column: 19
          }
        }, {
          start: {
            line: 378,
            column: 23
          },
          end: {
            line: 378,
            column: 40
          }
        }],
        line: 378
      },
      "29": {
        loc: {
          start: {
            line: 403,
            column: 4
          },
          end: {
            line: 407,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 403,
            column: 4
          },
          end: {
            line: 407,
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
        line: 403
      },
      "30": {
        loc: {
          start: {
            line: 409,
            column: 4
          },
          end: {
            line: 411,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 409,
            column: 4
          },
          end: {
            line: 411,
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
        line: 409
      },
      "31": {
        loc: {
          start: {
            line: 412,
            column: 4
          },
          end: {
            line: 414,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 412,
            column: 4
          },
          end: {
            line: 414,
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
        line: 412
      },
      "32": {
        loc: {
          start: {
            line: 415,
            column: 4
          },
          end: {
            line: 417,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 415,
            column: 4
          },
          end: {
            line: 417,
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
        line: 415
      },
      "33": {
        loc: {
          start: {
            line: 415,
            column: 8
          },
          end: {
            line: 415,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 415,
            column: 8
          },
          end: {
            line: 415,
            column: 21
          }
        }, {
          start: {
            line: 415,
            column: 25
          },
          end: {
            line: 415,
            column: 46
          }
        }],
        line: 415
      },
      "34": {
        loc: {
          start: {
            line: 442,
            column: 4
          },
          end: {
            line: 446,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 442,
            column: 4
          },
          end: {
            line: 446,
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
        line: 442
      },
      "35": {
        loc: {
          start: {
            line: 466,
            column: 4
          },
          end: {
            line: 468,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 466,
            column: 4
          },
          end: {
            line: 468,
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
        line: 466
      },
      "36": {
        loc: {
          start: {
            line: 469,
            column: 4
          },
          end: {
            line: 473,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 469,
            column: 4
          },
          end: {
            line: 473,
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
        line: 469
      },
      "37": {
        loc: {
          start: {
            line: 475,
            column: 4
          },
          end: {
            line: 477,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 475,
            column: 4
          },
          end: {
            line: 477,
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
        line: 475
      },
      "38": {
        loc: {
          start: {
            line: 497,
            column: 4
          },
          end: {
            line: 501,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 497,
            column: 4
          },
          end: {
            line: 501,
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
        line: 497
      },
      "39": {
        loc: {
          start: {
            line: 503,
            column: 4
          },
          end: {
            line: 505,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 503,
            column: 4
          },
          end: {
            line: 505,
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
        line: 503
      },
      "40": {
        loc: {
          start: {
            line: 523,
            column: 4
          },
          end: {
            line: 525,
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
            line: 525,
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
        line: 523
      },
      "41": {
        loc: {
          start: {
            line: 527,
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
            line: 527,
            column: 4
          },
          end: {
            line: 531,
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
        line: 527
      },
      "42": {
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
      "43": {
        loc: {
          start: {
            line: 592,
            column: 12
          },
          end: {
            line: 592,
            column: 54
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 592,
            column: 24
          },
          end: {
            line: 592,
            column: 47
          }
        }, {
          start: {
            line: 592,
            column: 50
          },
          end: {
            line: 592,
            column: 54
          }
        }],
        line: 592
      },
      "44": {
        loc: {
          start: {
            line: 595,
            column: 4
          },
          end: {
            line: 603,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 595,
            column: 4
          },
          end: {
            line: 603,
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
        line: 595
      },
      "45": {
        loc: {
          start: {
            line: 596,
            column: 6
          },
          end: {
            line: 598,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 596,
            column: 6
          },
          end: {
            line: 596,
            column: 30
          }
        }, {
          start: {
            line: 597,
            column: 6
          },
          end: {
            line: 597,
            column: 52
          }
        }, {
          start: {
            line: 598,
            column: 6
          },
          end: {
            line: 598,
            column: 52
          }
        }],
        line: 596
      },
      "46": {
        loc: {
          start: {
            line: 605,
            column: 4
          },
          end: {
            line: 607,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 605,
            column: 4
          },
          end: {
            line: 607,
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
        line: 605
      },
      "47": {
        loc: {
          start: {
            line: 608,
            column: 4
          },
          end: {
            line: 610,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 608,
            column: 4
          },
          end: {
            line: 610,
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
        line: 608
      },
      "48": {
        loc: {
          start: {
            line: 621,
            column: 4
          },
          end: {
            line: 655,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 621,
            column: 4
          },
          end: {
            line: 655,
            column: 5
          }
        }, {
          start: {
            line: 653,
            column: 11
          },
          end: {
            line: 655,
            column: 5
          }
        }],
        line: 621
      },
      "49": {
        loc: {
          start: {
            line: 623,
            column: 6
          },
          end: {
            line: 625,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 623,
            column: 6
          },
          end: {
            line: 625,
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
        line: 623
      },
      "50": {
        loc: {
          start: {
            line: 627,
            column: 22
          },
          end: {
            line: 627,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 627,
            column: 22
          },
          end: {
            line: 627,
            column: 45
          }
        }, {
          start: {
            line: 627,
            column: 49
          },
          end: {
            line: 627,
            column: 52
          }
        }],
        line: 627
      },
      "51": {
        loc: {
          start: {
            line: 631,
            column: 8
          },
          end: {
            line: 633,
            column: 15
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 632,
            column: 12
          },
          end: {
            line: 632,
            column: 49
          }
        }, {
          start: {
            line: 633,
            column: 12
          },
          end: {
            line: 633,
            column: 15
          }
        }],
        line: 631
      },
      "52": {
        loc: {
          start: {
            line: 636,
            column: 30
          },
          end: {
            line: 636,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 636,
            column: 30
          },
          end: {
            line: 636,
            column: 62
          }
        }, {
          start: {
            line: 636,
            column: 66
          },
          end: {
            line: 636,
            column: 67
          }
        }],
        line: 636
      },
      "53": {
        loc: {
          start: {
            line: 639,
            column: 8
          },
          end: {
            line: 641,
            column: 14
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 640,
            column: 12
          },
          end: {
            line: 640,
            column: 58
          }
        }, {
          start: {
            line: 641,
            column: 12
          },
          end: {
            line: 641,
            column: 14
          }
        }],
        line: 639
      },
      "54": {
        loc: {
          start: {
            line: 662,
            column: 4
          },
          end: {
            line: 668,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 662,
            column: 4
          },
          end: {
            line: 668,
            column: 5
          }
        }, {
          start: {
            line: 665,
            column: 11
          },
          end: {
            line: 668,
            column: 5
          }
        }],
        line: 662
      },
      "55": {
        loc: {
          start: {
            line: 685,
            column: 6
          },
          end: {
            line: 689,
            column: 66
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 685,
            column: 6
          },
          end: {
            line: 685,
            column: 32
          }
        }, {
          start: {
            line: 686,
            column: 6
          },
          end: {
            line: 686,
            column: 38
          }
        }, {
          start: {
            line: 687,
            column: 6
          },
          end: {
            line: 687,
            column: 41
          }
        }, {
          start: {
            line: 688,
            column: 6
          },
          end: {
            line: 688,
            column: 47
          }
        }, {
          start: {
            line: 689,
            column: 7
          },
          end: {
            line: 689,
            column: 33
          }
        }, {
          start: {
            line: 689,
            column: 37
          },
          end: {
            line: 689,
            column: 65
          }
        }],
        line: 685
      },
      "56": {
        loc: {
          start: {
            line: 728,
            column: 4
          },
          end: {
            line: 732,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 728,
            column: 4
          },
          end: {
            line: 732,
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
        line: 728
      },
      "57": {
        loc: {
          start: {
            line: 737,
            column: 4
          },
          end: {
            line: 741,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 737,
            column: 4
          },
          end: {
            line: 741,
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
        line: 737
      },
      "58": {
        loc: {
          start: {
            line: 744,
            column: 4
          },
          end: {
            line: 763,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 744,
            column: 4
          },
          end: {
            line: 763,
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
        line: 744
      },
      "59": {
        loc: {
          start: {
            line: 766,
            column: 4
          },
          end: {
            line: 770,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 766,
            column: 4
          },
          end: {
            line: 770,
            column: 5
          }
        }, {
          start: {
            line: 768,
            column: 11
          },
          end: {
            line: 770,
            column: 5
          }
        }],
        line: 766
      },
      "60": {
        loc: {
          start: {
            line: 804,
            column: 4
          },
          end: {
            line: 806,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 804,
            column: 4
          },
          end: {
            line: 806,
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
        line: 804
      },
      "61": {
        loc: {
          start: {
            line: 808,
            column: 4
          },
          end: {
            line: 810,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 808,
            column: 4
          },
          end: {
            line: 810,
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
        line: 808
      },
      "62": {
        loc: {
          start: {
            line: 824,
            column: 9
          },
          end: {
            line: 824,
            column: 39
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 824,
            column: 9
          },
          end: {
            line: 824,
            column: 26
          }
        }, {
          start: {
            line: 824,
            column: 30
          },
          end: {
            line: 824,
            column: 39
          }
        }],
        line: 824
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
      "167": 0
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
      "21": 0
    },
    b: {
      "0": [0],
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
      "12": [0],
      "13": [0, 0],
      "14": [0, 0],
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
      "26": [0, 0],
      "27": [0, 0],
      "28": [0, 0],
      "29": [0, 0],
      "30": [0, 0],
      "31": [0, 0],
      "32": [0, 0],
      "33": [0, 0],
      "34": [0, 0],
      "35": [0, 0],
      "36": [0, 0],
      "37": [0, 0],
      "38": [0, 0],
      "39": [0, 0],
      "40": [0, 0],
      "41": [0, 0],
      "42": [0, 0],
      "43": [0, 0],
      "44": [0, 0],
      "45": [0, 0, 0],
      "46": [0, 0],
      "47": [0, 0],
      "48": [0, 0],
      "49": [0, 0],
      "50": [0, 0],
      "51": [0, 0],
      "52": [0, 0],
      "53": [0, 0],
      "54": [0, 0],
      "55": [0, 0, 0, 0, 0, 0],
      "56": [0, 0],
      "57": [0, 0],
      "58": [0, 0],
      "59": [0, 0],
      "60": [0, 0],
      "61": [0, 0],
      "62": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "69cd84b3781c1c61f7148b51b91399cf6bb8e42c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_x4y6fyyjf = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_x4y6fyyjf();
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Minimum base fee for transactions. If this fee is below the network
 * minimum, the transaction will fail. The more operations in the
 * transaction, the greater the required fee. Use {@link
 * Server#fetchBaseFee} to get an accurate value of minimum transaction
 * fee on the network.
 *
 * @constant
 * @see [Fees](https://developers.stellar.org/docs/glossary/fees/)
 */
var BASE_FEE = exports.BASE_FEE = (cov_x4y6fyyjf().s[0]++, '100'); // Stroops

/**
 * @constant
 * @see {@link TransactionBuilder#setTimeout}
 * @see [Timeout](https://developers.stellar.org/api/resources/transactions/post/)
 */
var TimeoutInfinite = exports.TimeoutInfinite = (cov_x4y6fyyjf().s[1]++, 0);

/**
 * <p>Transaction builder helps constructs a new `{@link Transaction}` using the
 * given {@link Account} as the transaction's "source account". The transaction
 * will use the current sequence number of the given account as its sequence
 * number and increment the given account's sequence number by one. The given
 * source account must include a private key for signing the transaction or an
 * error will be thrown.</p>
 *
 * <p>Operations can be added to the transaction via their corresponding builder
 * methods, and each returns the TransactionBuilder object so they can be
 * chained together. After adding the desired operations, call the `build()`
 * method on the `TransactionBuilder` to return a fully constructed `{@link
 * Transaction}` that can be signed. The returned transaction will contain the
 * sequence number of the source account and include the signature from the
 * source account.</p>
 *
 * <p><strong>Be careful about unsubmitted transactions!</strong> When you build
 * a transaction, `stellar-sdk` automatically increments the source account's
 * sequence number. If you end up not submitting this transaction and submitting
 * another one instead, it'll fail due to the sequence number being wrong. So if
 * you decide not to use a built transaction, make sure to update the source
 * account's sequence number with
 * [Server.loadAccount](https://stellar.github.io/js-stellar-sdk/Server.html#loadAccount)
 * before creating another transaction.</p>
 *
 * <p>The following code example creates a new transaction with {@link
 * Operation.createAccount} and {@link Operation.payment} operations. The
 * Transaction's source account first funds `destinationA`, then sends a payment
 * to `destinationB`. The built transaction is then signed by
 * `sourceKeypair`.</p>
 *
 * ```
 * var transaction = new TransactionBuilder(source, { fee, networkPassphrase: Networks.TESTNET })
 * .addOperation(Operation.createAccount({
 *     destination: destinationA,
 *     startingBalance: "20"
 * })) // <- funds and creates destinationA
 * .addOperation(Operation.payment({
 *     destination: destinationB,
 *     amount: "100",
 *     asset: Asset.native()
 * })) // <- sends 100 XLM to destinationB
 * .setTimeout(30)
 * .build();
 *
 * transaction.sign(sourceKeypair);
 * ```
 *
 * @constructor
 *
 * @param {Account} sourceAccount - source account for this transaction
 * @param {object}  opts          - Options object
 * @param {string}  opts.fee      - max fee you're willing to pay per
 *     operation in this transaction (**in stroops**)
 *
 * @param {object}              [opts.timebounds] - timebounds for the
 *     validity of this transaction
 * @param {number|string|Date}  [opts.timebounds.minTime] - 64-bit UNIX
 *     timestamp or Date object
 * @param {number|string|Date}  [opts.timebounds.maxTime] - 64-bit UNIX
 *     timestamp or Date object
 * @param {object}              [opts.ledgerbounds] - ledger bounds for the
 *     validity of this transaction
 * @param {number}              [opts.ledgerbounds.minLedger] - number of the minimum
 *     ledger sequence
 * @param {number}              [opts.ledgerbounds.maxLedger] - number of the maximum
 *     ledger sequence
 * @param {string}              [opts.minAccountSequence] - number for
 *     the minimum account sequence
 * @param {number}              [opts.minAccountSequenceAge] - number of
 *     seconds for the minimum account sequence age
 * @param {number}              [opts.minAccountSequenceLedgerGap] - number of
 *     ledgers for the minimum account sequence ledger gap
 * @param {string[]}            [opts.extraSigners] - list of the extra signers
 *     required for this transaction
 * @param {Memo}                [opts.memo] - memo for the transaction
 * @param {string}              [opts.networkPassphrase] passphrase of the
 *     target Stellar network (e.g. "Public Global Stellar Network ; September
 *     2015" for the pubnet)
 * @param {xdr.SorobanTransactionData | string}  [opts.sorobanData] - an
 *     optional instance of {@link xdr.SorobanTransactionData} to be set as the
 *     internal `Transaction.Ext.SorobanData` field (either the xdr object or a
 *     base64 string). In the case of Soroban transactions, this can be obtained
 *     from a prior simulation of the transaction with a contract invocation and
 *     provides necessary resource estimations. You can also use
 *     {@link SorobanDataBuilder} to construct complicated combinations of
 *     parameters without mucking with XDR directly. **Note:** For
 *     non-contract(non-Soroban) transactions, this has no effect.
 */
var TransactionBuilder = exports.TransactionBuilder = /*#__PURE__*/function () {
  function TransactionBuilder(sourceAccount) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_x4y6fyyjf().b[0][0]++, {});
    _classCallCheck(this, TransactionBuilder);
    cov_x4y6fyyjf().f[0]++;
    cov_x4y6fyyjf().s[2]++;
    if (!sourceAccount) {
      cov_x4y6fyyjf().b[1][0]++;
      cov_x4y6fyyjf().s[3]++;
      throw new Error('must specify source account for the transaction');
    } else {
      cov_x4y6fyyjf().b[1][1]++;
    }
    cov_x4y6fyyjf().s[4]++;
    if (opts.fee === undefined) {
      cov_x4y6fyyjf().b[2][0]++;
      cov_x4y6fyyjf().s[5]++;
      throw new Error('must specify fee for the transaction (in stroops)');
    } else {
      cov_x4y6fyyjf().b[2][1]++;
    }
    cov_x4y6fyyjf().s[6]++;
    this.source = sourceAccount;
    cov_x4y6fyyjf().s[7]++;
    this.operations = [];
    cov_x4y6fyyjf().s[8]++;
    this.baseFee = opts.fee;
    cov_x4y6fyyjf().s[9]++;
    this.timebounds = opts.timebounds ? (cov_x4y6fyyjf().b[3][0]++, _objectSpread({}, opts.timebounds)) : (cov_x4y6fyyjf().b[3][1]++, null);
    cov_x4y6fyyjf().s[10]++;
    this.ledgerbounds = opts.ledgerbounds ? (cov_x4y6fyyjf().b[4][0]++, _objectSpread({}, opts.ledgerbounds)) : (cov_x4y6fyyjf().b[4][1]++, null);
    cov_x4y6fyyjf().s[11]++;
    this.minAccountSequence = (cov_x4y6fyyjf().b[5][0]++, opts.minAccountSequence) || (cov_x4y6fyyjf().b[5][1]++, null);
    cov_x4y6fyyjf().s[12]++;
    this.minAccountSequenceAge = (cov_x4y6fyyjf().b[6][0]++, opts.minAccountSequenceAge) || (cov_x4y6fyyjf().b[6][1]++, null);
    cov_x4y6fyyjf().s[13]++;
    this.minAccountSequenceLedgerGap = (cov_x4y6fyyjf().b[7][0]++, opts.minAccountSequenceLedgerGap) || (cov_x4y6fyyjf().b[7][1]++, null);
    cov_x4y6fyyjf().s[14]++;
    this.extraSigners = opts.extraSigners ? (cov_x4y6fyyjf().b[8][0]++, _toConsumableArray(opts.extraSigners)) : (cov_x4y6fyyjf().b[8][1]++, null);
    cov_x4y6fyyjf().s[15]++;
    this.memo = (cov_x4y6fyyjf().b[9][0]++, opts.memo) || (cov_x4y6fyyjf().b[9][1]++, _memo.Memo.none());
    cov_x4y6fyyjf().s[16]++;
    this.networkPassphrase = (cov_x4y6fyyjf().b[10][0]++, opts.networkPassphrase) || (cov_x4y6fyyjf().b[10][1]++, null);
    cov_x4y6fyyjf().s[17]++;
    this.sorobanData = opts.sorobanData ? (cov_x4y6fyyjf().b[11][0]++, new _sorobandata_builder.SorobanDataBuilder(opts.sorobanData).build()) : (cov_x4y6fyyjf().b[11][1]++, null);
  }

  /**
   * Creates a builder instance using an existing {@link Transaction} as a
   * template, ignoring any existing envelope signatures.
   *
   * Note that the sequence number WILL be cloned, so EITHER this transaction or
   * the one it was cloned from will be valid. This is useful in situations
   * where you are constructing a transaction in pieces and need to make
   * adjustments as you go (for example, when filling out Soroban resource
   * information).
   *
   * @param {Transaction} tx  a "template" transaction to clone exactly
   * @param {object} [opts]   additional options to override the clone, e.g.
   *    {fee: '1000'} will override the existing base fee derived from `tx` (see
   *    the {@link TransactionBuilder} constructor for detailed options)
   *
   * @returns {TransactionBuilder} a "prepared" builder instance with the same
   *    configuration and operations as the given transaction
   *
   * @warning This does not clone the transaction's
   *    {@link xdr.SorobanTransactionData} (if applicable), use
   *    {@link SorobanDataBuilder} and {@link TransactionBuilder.setSorobanData}
   *    as needed, instead..
   *
   * @todo This cannot clone {@link FeeBumpTransaction}s, yet.
   */
  return _createClass(TransactionBuilder, [{
    key: "addOperation",
    value:
    /**
     * Adds an operation to the transaction.
     *
     * @param {xdr.Operation} operation   The xdr operation object, use {@link
     *     Operation} static methods.
     *
     * @returns {TransactionBuilder}
     */
    function addOperation(operation) {
      cov_x4y6fyyjf().f[3]++;
      cov_x4y6fyyjf().s[31]++;
      this.operations.push(operation);
      cov_x4y6fyyjf().s[32]++;
      return this;
    }

    /**
     * Adds an operation to the transaction at a specific index.
     *
     * @param {xdr.Operation} operation - The xdr operation object to add, use {@link Operation} static methods.
     * @param {number} index - The index at which to insert the operation.
     *
     * @returns {TransactionBuilder} - The TransactionBuilder instance for method chaining.
     */
  }, {
    key: "addOperationAt",
    value: function addOperationAt(operation, index) {
      cov_x4y6fyyjf().f[4]++;
      cov_x4y6fyyjf().s[33]++;
      this.operations.splice(index, 0, operation);
      cov_x4y6fyyjf().s[34]++;
      return this;
    }

    /**
     * Removes the operations from the builder (useful when cloning).
     * @returns {TransactionBuilder} this builder instance
     */
  }, {
    key: "clearOperations",
    value: function clearOperations() {
      cov_x4y6fyyjf().f[5]++;
      cov_x4y6fyyjf().s[35]++;
      this.operations = [];
      cov_x4y6fyyjf().s[36]++;
      return this;
    }

    /**
     * Removes the operation at the specified index from the transaction.
     *
     * @param {number} index - The index of the operation to remove.
     *
     * @returns {TransactionBuilder} The TransactionBuilder instance for method chaining.
     */
  }, {
    key: "clearOperationAt",
    value: function clearOperationAt(index) {
      cov_x4y6fyyjf().f[6]++;
      cov_x4y6fyyjf().s[37]++;
      this.operations.splice(index, 1);
      cov_x4y6fyyjf().s[38]++;
      return this;
    }

    /**
     * Adds a memo to the transaction.
     * @param {Memo} memo {@link Memo} object
     * @returns {TransactionBuilder}
     */
  }, {
    key: "addMemo",
    value: function addMemo(memo) {
      cov_x4y6fyyjf().f[7]++;
      cov_x4y6fyyjf().s[39]++;
      this.memo = memo;
      cov_x4y6fyyjf().s[40]++;
      return this;
    }

    /**
     * Sets a timeout precondition on the transaction.
     *
     *  Because of the distributed nature of the Stellar network it is possible
     *  that the status of your transaction will be determined after a long time
     *  if the network is highly congested. If you want to be sure to receive the
     *  status of the transaction within a given period you should set the {@link
     *  TimeBounds} with `maxTime` on the transaction (this is what `setTimeout`
     *  does internally; if there's `minTime` set but no `maxTime` it will be
     *  added).
     *
     *  A call to `TransactionBuilder.setTimeout` is **required** if Transaction
     *  does not have `max_time` set. If you don't want to set timeout, use
     *  `{@link TimeoutInfinite}`. In general you should set `{@link
     *  TimeoutInfinite}` only in smart contracts.
     *
     *  Please note that Horizon may still return <code>504 Gateway Timeout</code>
     *  error, even for short timeouts. In such case you need to resubmit the same
     *  transaction again without making any changes to receive a status. This
     *  method is using the machine system time (UTC), make sure it is set
     *  correctly.
     *
     * @param {number} timeoutSeconds   Number of seconds the transaction is good.
     *     Can't be negative. If the value is {@link TimeoutInfinite}, the
     *     transaction is good indefinitely.
     *
     * @returns {TransactionBuilder}
     *
     * @see {@link TimeoutInfinite}
     * @see https://developers.stellar.org/docs/tutorials/handling-errors/
     */
  }, {
    key: "setTimeout",
    value: function setTimeout(timeoutSeconds) {
      cov_x4y6fyyjf().f[8]++;
      cov_x4y6fyyjf().s[41]++;
      if ((cov_x4y6fyyjf().b[18][0]++, this.timebounds !== null) && (cov_x4y6fyyjf().b[18][1]++, this.timebounds.maxTime > 0)) {
        cov_x4y6fyyjf().b[17][0]++;
        cov_x4y6fyyjf().s[42]++;
        throw new Error('TimeBounds.max_time has been already set - setting timeout would overwrite it.');
      } else {
        cov_x4y6fyyjf().b[17][1]++;
      }
      cov_x4y6fyyjf().s[43]++;
      if (timeoutSeconds < 0) {
        cov_x4y6fyyjf().b[19][0]++;
        cov_x4y6fyyjf().s[44]++;
        throw new Error('timeout cannot be negative');
      } else {
        cov_x4y6fyyjf().b[19][1]++;
      }
      cov_x4y6fyyjf().s[45]++;
      if (timeoutSeconds > 0) {
        cov_x4y6fyyjf().b[20][0]++;
        var timeoutTimestamp = (cov_x4y6fyyjf().s[46]++, Math.floor(Date.now() / 1000) + timeoutSeconds);
        cov_x4y6fyyjf().s[47]++;
        if (this.timebounds === null) {
          cov_x4y6fyyjf().b[21][0]++;
          cov_x4y6fyyjf().s[48]++;
          this.timebounds = {
            minTime: 0,
            maxTime: timeoutTimestamp
          };
        } else {
          cov_x4y6fyyjf().b[21][1]++;
          cov_x4y6fyyjf().s[49]++;
          this.timebounds = {
            minTime: this.timebounds.minTime,
            maxTime: timeoutTimestamp
          };
        }
      } else {
        cov_x4y6fyyjf().b[20][1]++;
        cov_x4y6fyyjf().s[50]++;
        this.timebounds = {
          minTime: 0,
          maxTime: 0
        };
      }
      cov_x4y6fyyjf().s[51]++;
      return this;
    }

    /**
     * If you want to prepare a transaction which will become valid at some point
     * in the future, or be invalid after some time, you can set a timebounds
     * precondition. Internally this will set the `minTime`, and `maxTime`
     * preconditions. Conflicts with `setTimeout`, so use one or the other.
     *
     * @param {Date|number} minEpochOrDate  Either a JS Date object, or a number
     *     of UNIX epoch seconds. The transaction is valid after this timestamp.
     *     Can't be negative. If the value is `0`, the transaction is valid
     *     immediately.
     * @param {Date|number} maxEpochOrDate  Either a JS Date object, or a number
     *     of UNIX epoch seconds. The transaction is valid until this timestamp.
     *     Can't be negative. If the value is `0`, the transaction is valid
     *     indefinitely.
     *
     * @returns {TransactionBuilder}
     */
  }, {
    key: "setTimebounds",
    value: function setTimebounds(minEpochOrDate, maxEpochOrDate) {
      cov_x4y6fyyjf().f[9]++;
      cov_x4y6fyyjf().s[52]++;
      // Force it to a date type
      if (typeof minEpochOrDate === 'number') {
        cov_x4y6fyyjf().b[22][0]++;
        cov_x4y6fyyjf().s[53]++;
        minEpochOrDate = new Date(minEpochOrDate * 1000);
      } else {
        cov_x4y6fyyjf().b[22][1]++;
      }
      cov_x4y6fyyjf().s[54]++;
      if (typeof maxEpochOrDate === 'number') {
        cov_x4y6fyyjf().b[23][0]++;
        cov_x4y6fyyjf().s[55]++;
        maxEpochOrDate = new Date(maxEpochOrDate * 1000);
      } else {
        cov_x4y6fyyjf().b[23][1]++;
      }
      cov_x4y6fyyjf().s[56]++;
      if (this.timebounds !== null) {
        cov_x4y6fyyjf().b[24][0]++;
        cov_x4y6fyyjf().s[57]++;
        throw new Error('TimeBounds has been already set - setting timebounds would overwrite it.');
      } else {
        cov_x4y6fyyjf().b[24][1]++;
      }

      // Convert that date to the epoch seconds
      var minTime = (cov_x4y6fyyjf().s[58]++, Math.floor(minEpochOrDate.valueOf() / 1000));
      var maxTime = (cov_x4y6fyyjf().s[59]++, Math.floor(maxEpochOrDate.valueOf() / 1000));
      cov_x4y6fyyjf().s[60]++;
      if (minTime < 0) {
        cov_x4y6fyyjf().b[25][0]++;
        cov_x4y6fyyjf().s[61]++;
        throw new Error('min_time cannot be negative');
      } else {
        cov_x4y6fyyjf().b[25][1]++;
      }
      cov_x4y6fyyjf().s[62]++;
      if (maxTime < 0) {
        cov_x4y6fyyjf().b[26][0]++;
        cov_x4y6fyyjf().s[63]++;
        throw new Error('max_time cannot be negative');
      } else {
        cov_x4y6fyyjf().b[26][1]++;
      }
      cov_x4y6fyyjf().s[64]++;
      if ((cov_x4y6fyyjf().b[28][0]++, maxTime > 0) && (cov_x4y6fyyjf().b[28][1]++, minTime > maxTime)) {
        cov_x4y6fyyjf().b[27][0]++;
        cov_x4y6fyyjf().s[65]++;
        throw new Error('min_time cannot be greater than max_time');
      } else {
        cov_x4y6fyyjf().b[27][1]++;
      }
      cov_x4y6fyyjf().s[66]++;
      this.timebounds = {
        minTime: minTime,
        maxTime: maxTime
      };
      cov_x4y6fyyjf().s[67]++;
      return this;
    }

    /**
     * If you want to prepare a transaction which will only be valid within some
     * range of ledgers, you can set a ledgerbounds precondition.
     * Internally this will set the `minLedger` and `maxLedger` preconditions.
     *
     * @param {number} minLedger  The minimum ledger this transaction is valid at
     *     or after. Cannot be negative. If the value is `0` (the default), the
     *     transaction is valid immediately.
     *
     * @param {number} maxLedger  The maximum ledger this transaction is valid
     *     before. Cannot be negative. If the value is `0`, the transaction is
     *     valid indefinitely.
     *
     * @returns {TransactionBuilder}
     */
  }, {
    key: "setLedgerbounds",
    value: function setLedgerbounds(minLedger, maxLedger) {
      cov_x4y6fyyjf().f[10]++;
      cov_x4y6fyyjf().s[68]++;
      if (this.ledgerbounds !== null) {
        cov_x4y6fyyjf().b[29][0]++;
        cov_x4y6fyyjf().s[69]++;
        throw new Error('LedgerBounds has been already set - setting ledgerbounds would overwrite it.');
      } else {
        cov_x4y6fyyjf().b[29][1]++;
      }
      cov_x4y6fyyjf().s[70]++;
      if (minLedger < 0) {
        cov_x4y6fyyjf().b[30][0]++;
        cov_x4y6fyyjf().s[71]++;
        throw new Error('min_ledger cannot be negative');
      } else {
        cov_x4y6fyyjf().b[30][1]++;
      }
      cov_x4y6fyyjf().s[72]++;
      if (maxLedger < 0) {
        cov_x4y6fyyjf().b[31][0]++;
        cov_x4y6fyyjf().s[73]++;
        throw new Error('max_ledger cannot be negative');
      } else {
        cov_x4y6fyyjf().b[31][1]++;
      }
      cov_x4y6fyyjf().s[74]++;
      if ((cov_x4y6fyyjf().b[33][0]++, maxLedger > 0) && (cov_x4y6fyyjf().b[33][1]++, minLedger > maxLedger)) {
        cov_x4y6fyyjf().b[32][0]++;
        cov_x4y6fyyjf().s[75]++;
        throw new Error('min_ledger cannot be greater than max_ledger');
      } else {
        cov_x4y6fyyjf().b[32][1]++;
      }
      cov_x4y6fyyjf().s[76]++;
      this.ledgerbounds = {
        minLedger: minLedger,
        maxLedger: maxLedger
      };
      cov_x4y6fyyjf().s[77]++;
      return this;
    }

    /**
     * If you want to prepare a transaction which will be valid only while the
     * account sequence number is
     *
     *     minAccountSequence <= sourceAccountSequence < tx.seqNum
     *
     * Note that after execution the account's sequence number is always raised to
     * `tx.seqNum`. Internally this will set the `minAccountSequence`
     * precondition.
     *
     * @param {string} minAccountSequence   The minimum source account sequence
     *     number this transaction is valid for. If the value is `0` (the
     *     default), the transaction is valid when `sourceAccount's sequence
     *     number == tx.seqNum- 1`.
     *
     * @returns {TransactionBuilder}
     */
  }, {
    key: "setMinAccountSequence",
    value: function setMinAccountSequence(minAccountSequence) {
      cov_x4y6fyyjf().f[11]++;
      cov_x4y6fyyjf().s[78]++;
      if (this.minAccountSequence !== null) {
        cov_x4y6fyyjf().b[34][0]++;
        cov_x4y6fyyjf().s[79]++;
        throw new Error('min_account_sequence has been already set - setting min_account_sequence would overwrite it.');
      } else {
        cov_x4y6fyyjf().b[34][1]++;
      }
      cov_x4y6fyyjf().s[80]++;
      this.minAccountSequence = minAccountSequence;
      cov_x4y6fyyjf().s[81]++;
      return this;
    }

    /**
     * For the transaction to be valid, the current ledger time must be at least
     * `minAccountSequenceAge` greater than sourceAccount's `sequenceTime`.
     * Internally this will set the `minAccountSequenceAge` precondition.
     *
     * @param {number} durationInSeconds  The minimum amount of time between
     *     source account sequence time and the ledger time when this transaction
     *     will become valid. If the value is `0`, the transaction is unrestricted
     *     by the account sequence age. Cannot be negative.
     *
     * @returns {TransactionBuilder}
     */
  }, {
    key: "setMinAccountSequenceAge",
    value: function setMinAccountSequenceAge(durationInSeconds) {
      cov_x4y6fyyjf().f[12]++;
      cov_x4y6fyyjf().s[82]++;
      if (typeof durationInSeconds !== 'number') {
        cov_x4y6fyyjf().b[35][0]++;
        cov_x4y6fyyjf().s[83]++;
        throw new Error('min_account_sequence_age must be a number');
      } else {
        cov_x4y6fyyjf().b[35][1]++;
      }
      cov_x4y6fyyjf().s[84]++;
      if (this.minAccountSequenceAge !== null) {
        cov_x4y6fyyjf().b[36][0]++;
        cov_x4y6fyyjf().s[85]++;
        throw new Error('min_account_sequence_age has been already set - setting min_account_sequence_age would overwrite it.');
      } else {
        cov_x4y6fyyjf().b[36][1]++;
      }
      cov_x4y6fyyjf().s[86]++;
      if (durationInSeconds < 0) {
        cov_x4y6fyyjf().b[37][0]++;
        cov_x4y6fyyjf().s[87]++;
        throw new Error('min_account_sequence_age cannot be negative');
      } else {
        cov_x4y6fyyjf().b[37][1]++;
      }
      cov_x4y6fyyjf().s[88]++;
      this.minAccountSequenceAge = durationInSeconds;
      cov_x4y6fyyjf().s[89]++;
      return this;
    }

    /**
     * For the transaction to be valid, the current ledger number must be at least
     * `minAccountSequenceLedgerGap` greater than sourceAccount's ledger sequence.
     * Internally this will set the `minAccountSequenceLedgerGap` precondition.
     *
     * @param {number} gap  The minimum number of ledgers between source account
     *     sequence and the ledger number when this transaction will become valid.
     *     If the value is `0`, the transaction is unrestricted by the account
     *     sequence ledger. Cannot be negative.
     *
     * @returns {TransactionBuilder}
     */
  }, {
    key: "setMinAccountSequenceLedgerGap",
    value: function setMinAccountSequenceLedgerGap(gap) {
      cov_x4y6fyyjf().f[13]++;
      cov_x4y6fyyjf().s[90]++;
      if (this.minAccountSequenceLedgerGap !== null) {
        cov_x4y6fyyjf().b[38][0]++;
        cov_x4y6fyyjf().s[91]++;
        throw new Error('min_account_sequence_ledger_gap has been already set - setting min_account_sequence_ledger_gap would overwrite it.');
      } else {
        cov_x4y6fyyjf().b[38][1]++;
      }
      cov_x4y6fyyjf().s[92]++;
      if (gap < 0) {
        cov_x4y6fyyjf().b[39][0]++;
        cov_x4y6fyyjf().s[93]++;
        throw new Error('min_account_sequence_ledger_gap cannot be negative');
      } else {
        cov_x4y6fyyjf().b[39][1]++;
      }
      cov_x4y6fyyjf().s[94]++;
      this.minAccountSequenceLedgerGap = gap;
      cov_x4y6fyyjf().s[95]++;
      return this;
    }

    /**
     * For the transaction to be valid, there must be a signature corresponding to
     * every Signer in this array, even if the signature is not otherwise required
     * by the sourceAccount or operations. Internally this will set the
     * `extraSigners` precondition.
     *
     * @param {string[]} extraSigners   required extra signers (as {@link StrKey}s)
     *
     * @returns {TransactionBuilder}
     */
  }, {
    key: "setExtraSigners",
    value: function setExtraSigners(extraSigners) {
      cov_x4y6fyyjf().f[14]++;
      cov_x4y6fyyjf().s[96]++;
      if (!Array.isArray(extraSigners)) {
        cov_x4y6fyyjf().b[40][0]++;
        cov_x4y6fyyjf().s[97]++;
        throw new Error('extra_signers must be an array of strings.');
      } else {
        cov_x4y6fyyjf().b[40][1]++;
      }
      cov_x4y6fyyjf().s[98]++;
      if (this.extraSigners !== null) {
        cov_x4y6fyyjf().b[41][0]++;
        cov_x4y6fyyjf().s[99]++;
        throw new Error('extra_signers has been already set - setting extra_signers would overwrite it.');
      } else {
        cov_x4y6fyyjf().b[41][1]++;
      }
      cov_x4y6fyyjf().s[100]++;
      if (extraSigners.length > 2) {
        cov_x4y6fyyjf().b[42][0]++;
        cov_x4y6fyyjf().s[101]++;
        throw new Error('extra_signers cannot be longer than 2 elements.');
      } else {
        cov_x4y6fyyjf().b[42][1]++;
      }
      cov_x4y6fyyjf().s[102]++;
      this.extraSigners = _toConsumableArray(extraSigners);
      cov_x4y6fyyjf().s[103]++;
      return this;
    }

    /**
     * Set network nassphrase for the Transaction that will be built.
     *
     * @param {string} networkPassphrase    passphrase of the target Stellar
     *     network (e.g. "Public Global Stellar Network ; September 2015").
     *
     * @returns {TransactionBuilder}
     */
  }, {
    key: "setNetworkPassphrase",
    value: function setNetworkPassphrase(networkPassphrase) {
      cov_x4y6fyyjf().f[15]++;
      cov_x4y6fyyjf().s[104]++;
      this.networkPassphrase = networkPassphrase;
      cov_x4y6fyyjf().s[105]++;
      return this;
    }

    /**
     * Sets the transaction's internal Soroban transaction data (resources,
     * footprint, etc.).
     *
     * For non-contract(non-Soroban) transactions, this setting has no effect. In
     * the case of Soroban transactions, this is either an instance of
     * {@link xdr.SorobanTransactionData} or a base64-encoded string of said
     * structure. This is usually obtained from the simulation response based on a
     * transaction with a Soroban operation (e.g.
     * {@link Operation.invokeHostFunction}, providing necessary resource
     * and storage footprint estimations for contract invocation.
     *
     * @param {xdr.SorobanTransactionData | string} sorobanData    the
     *    {@link xdr.SorobanTransactionData} as a raw xdr object or a base64
     *    string to be decoded
     *
     * @returns {TransactionBuilder}
     * @see {SorobanDataBuilder}
     */
  }, {
    key: "setSorobanData",
    value: function setSorobanData(sorobanData) {
      cov_x4y6fyyjf().f[16]++;
      cov_x4y6fyyjf().s[106]++;
      this.sorobanData = new _sorobandata_builder.SorobanDataBuilder(sorobanData).build();
      cov_x4y6fyyjf().s[107]++;
      return this;
    }

    /**
     * This will build the transaction.
     * It will also increment the source account's sequence number by 1.
     * @returns {Transaction} This method will return the built {@link Transaction}.
     */
  }, {
    key: "build",
    value: function build() {
      cov_x4y6fyyjf().f[17]++;
      var sequenceNumber = (cov_x4y6fyyjf().s[108]++, new _bignumber["default"](this.source.sequenceNumber()).plus(1));
      var fee = (cov_x4y6fyyjf().s[109]++, new _bignumber["default"](this.baseFee).times(this.operations.length).toNumber());
      var attrs = (cov_x4y6fyyjf().s[110]++, {
        fee: fee,
        seqNum: _xdr["default"].SequenceNumber.fromString(sequenceNumber.toString()),
        memo: this.memo ? (cov_x4y6fyyjf().b[43][0]++, this.memo.toXDRObject()) : (cov_x4y6fyyjf().b[43][1]++, null)
      });
      cov_x4y6fyyjf().s[111]++;
      if ((cov_x4y6fyyjf().b[45][0]++, this.timebounds === null) || (cov_x4y6fyyjf().b[45][1]++, typeof this.timebounds.minTime === 'undefined') || (cov_x4y6fyyjf().b[45][2]++, typeof this.timebounds.maxTime === 'undefined')) {
        cov_x4y6fyyjf().b[44][0]++;
        cov_x4y6fyyjf().s[112]++;
        throw new Error('TimeBounds has to be set or you must call setTimeout(TimeoutInfinite).');
      } else {
        cov_x4y6fyyjf().b[44][1]++;
      }
      cov_x4y6fyyjf().s[113]++;
      if (isValidDate(this.timebounds.minTime)) {
        cov_x4y6fyyjf().b[46][0]++;
        cov_x4y6fyyjf().s[114]++;
        this.timebounds.minTime = this.timebounds.minTime.getTime() / 1000;
      } else {
        cov_x4y6fyyjf().b[46][1]++;
      }
      cov_x4y6fyyjf().s[115]++;
      if (isValidDate(this.timebounds.maxTime)) {
        cov_x4y6fyyjf().b[47][0]++;
        cov_x4y6fyyjf().s[116]++;
        this.timebounds.maxTime = this.timebounds.maxTime.getTime() / 1000;
      } else {
        cov_x4y6fyyjf().b[47][1]++;
      }
      cov_x4y6fyyjf().s[117]++;
      this.timebounds.minTime = _jsXdr.UnsignedHyper.fromString(this.timebounds.minTime.toString());
      cov_x4y6fyyjf().s[118]++;
      this.timebounds.maxTime = _jsXdr.UnsignedHyper.fromString(this.timebounds.maxTime.toString());
      var timeBounds = (cov_x4y6fyyjf().s[119]++, new _xdr["default"].TimeBounds(this.timebounds));
      cov_x4y6fyyjf().s[120]++;
      if (this.hasV2Preconditions()) {
        cov_x4y6fyyjf().b[48][0]++;
        var ledgerBounds = (cov_x4y6fyyjf().s[121]++, null);
        cov_x4y6fyyjf().s[122]++;
        if (this.ledgerbounds !== null) {
          cov_x4y6fyyjf().b[49][0]++;
          cov_x4y6fyyjf().s[123]++;
          ledgerBounds = new _xdr["default"].LedgerBounds(this.ledgerbounds);
        } else {
          cov_x4y6fyyjf().b[49][1]++;
        }
        var minSeqNum = (cov_x4y6fyyjf().s[124]++, (cov_x4y6fyyjf().b[50][0]++, this.minAccountSequence) || (cov_x4y6fyyjf().b[50][1]++, '0'));
        cov_x4y6fyyjf().s[125]++;
        minSeqNum = _xdr["default"].SequenceNumber.fromString(minSeqNum);
        var minSeqAge = (cov_x4y6fyyjf().s[126]++, _jsXdr.UnsignedHyper.fromString(this.minAccountSequenceAge !== null ? (cov_x4y6fyyjf().b[51][0]++, this.minAccountSequenceAge.toString()) : (cov_x4y6fyyjf().b[51][1]++, '0')));
        var minSeqLedgerGap = (cov_x4y6fyyjf().s[127]++, (cov_x4y6fyyjf().b[52][0]++, this.minAccountSequenceLedgerGap) || (cov_x4y6fyyjf().b[52][1]++, 0));
        var extraSigners = (cov_x4y6fyyjf().s[128]++, this.extraSigners !== null ? (cov_x4y6fyyjf().b[53][0]++, this.extraSigners.map(_signerkey.SignerKey.decodeAddress)) : (cov_x4y6fyyjf().b[53][1]++, []));
        cov_x4y6fyyjf().s[129]++;
        attrs.cond = _xdr["default"].Preconditions.precondV2(new _xdr["default"].PreconditionsV2({
          timeBounds: timeBounds,
          ledgerBounds: ledgerBounds,
          minSeqNum: minSeqNum,
          minSeqAge: minSeqAge,
          minSeqLedgerGap: minSeqLedgerGap,
          extraSigners: extraSigners
        }));
      } else {
        cov_x4y6fyyjf().b[48][1]++;
        cov_x4y6fyyjf().s[130]++;
        attrs.cond = _xdr["default"].Preconditions.precondTime(timeBounds);
      }
      cov_x4y6fyyjf().s[131]++;
      attrs.sourceAccount = (0, _decode_encode_muxed_account.decodeAddressToMuxedAccount)(this.source.accountId());

      // TODO - remove this workaround for TransactionExt ts constructor
      //       and use the typescript generated static factory method once fixed
      //       https://github.com/stellar/dts-xdr/issues/5
      cov_x4y6fyyjf().s[132]++;
      if (this.sorobanData) {
        cov_x4y6fyyjf().b[54][0]++;
        cov_x4y6fyyjf().s[133]++;
        // @ts-ignore
        attrs.ext = new _xdr["default"].TransactionExt(1, this.sorobanData);
      } else {
        cov_x4y6fyyjf().b[54][1]++;
        cov_x4y6fyyjf().s[134]++;
        // @ts-ignore
        attrs.ext = new _xdr["default"].TransactionExt(0, _xdr["default"].Void);
      }
      var xtx = (cov_x4y6fyyjf().s[135]++, new _xdr["default"].Transaction(attrs));
      cov_x4y6fyyjf().s[136]++;
      xtx.operations(this.operations);
      var txEnvelope = (cov_x4y6fyyjf().s[137]++, new _xdr["default"].TransactionEnvelope.envelopeTypeTx(new _xdr["default"].TransactionV1Envelope({
        tx: xtx
      })));
      var tx = (cov_x4y6fyyjf().s[138]++, new _transaction.Transaction(txEnvelope, this.networkPassphrase));
      cov_x4y6fyyjf().s[139]++;
      this.source.incrementSequenceNumber();
      cov_x4y6fyyjf().s[140]++;
      return tx;
    }
  }, {
    key: "hasV2Preconditions",
    value: function hasV2Preconditions() {
      cov_x4y6fyyjf().f[18]++;
      cov_x4y6fyyjf().s[141]++;
      return (cov_x4y6fyyjf().b[55][0]++, this.ledgerbounds !== null) || (cov_x4y6fyyjf().b[55][1]++, this.minAccountSequence !== null) || (cov_x4y6fyyjf().b[55][2]++, this.minAccountSequenceAge !== null) || (cov_x4y6fyyjf().b[55][3]++, this.minAccountSequenceLedgerGap !== null) || (cov_x4y6fyyjf().b[55][4]++, this.extraSigners !== null) && (cov_x4y6fyyjf().b[55][5]++, this.extraSigners.length > 0);
    }

    /**
     * Builds a {@link FeeBumpTransaction}, enabling you to resubmit an existing
     * transaction with a higher fee.
     *
     * @param {Keypair|string}  feeSource - account paying for the transaction,
     *     in the form of either a Keypair (only the public key is used) or
     *     an account ID (in G... or M... form, but refer to `withMuxing`)
     * @param {string}          baseFee   - max fee willing to pay per operation
     *     in inner transaction (**in stroops**)
     * @param {Transaction}     innerTx   - {@link Transaction} to be bumped by
     *     the fee bump transaction
     * @param {string}          networkPassphrase - passphrase of the target
     *     Stellar network (e.g. "Public Global Stellar Network ; September 2015",
     *     see {@link Networks})
     *
     * @todo Alongside the next major version bump, this type signature can be
     *       changed to be less awkward: accept a MuxedAccount as the `feeSource`
     *       rather than a keypair or string.
     *
     * @note Your fee-bump amount should be >= 10x the original fee.
     * @see  https://developers.stellar.org/docs/glossary/fee-bumps/#replace-by-fee
     *
     * @returns {FeeBumpTransaction}
     */
  }], [{
    key: "cloneFrom",
    value: function cloneFrom(tx) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_x4y6fyyjf().b[12][0]++, {});
      cov_x4y6fyyjf().f[1]++;
      cov_x4y6fyyjf().s[18]++;
      if (!(tx instanceof _transaction.Transaction)) {
        cov_x4y6fyyjf().b[13][0]++;
        cov_x4y6fyyjf().s[19]++;
        throw new TypeError("expected a 'Transaction', got: ".concat(tx));
      } else {
        cov_x4y6fyyjf().b[13][1]++;
      }
      var sequenceNum = (cov_x4y6fyyjf().s[20]++, (BigInt(tx.sequence) - 1n).toString());
      var source;
      // rebuild the source account based on the strkey
      cov_x4y6fyyjf().s[21]++;
      if (_strkey.StrKey.isValidMdilithium2PublicKey(tx.source)) {
        cov_x4y6fyyjf().b[14][0]++;
        cov_x4y6fyyjf().s[22]++;
        source = _muxed_account.MuxedAccount.fromAddress(tx.source, sequenceNum);
      } else {
        cov_x4y6fyyjf().b[14][1]++;
        cov_x4y6fyyjf().s[23]++;
        if (_strkey.StrKey.isValidDilithium2PublicKey(tx.source)) {
          cov_x4y6fyyjf().b[15][0]++;
          cov_x4y6fyyjf().s[24]++;
          source = new _account.Account(tx.source, sequenceNum);
        } else {
          cov_x4y6fyyjf().b[15][1]++;
          cov_x4y6fyyjf().s[25]++;
          throw new TypeError("unsupported tx source account: ".concat(tx.source));
        }
      }

      // the initial fee passed to the builder gets scaled up based on the number
      // of operations at the end, so we have to down-scale first
      var unscaledFee = (cov_x4y6fyyjf().s[26]++, parseInt(tx.fee, 10) / tx.operations.length);
      var builder = (cov_x4y6fyyjf().s[27]++, new TransactionBuilder(source, _objectSpread({
        fee: ((cov_x4y6fyyjf().b[16][0]++, unscaledFee) || (cov_x4y6fyyjf().b[16][1]++, BASE_FEE)).toString(),
        memo: tx.memo,
        networkPassphrase: tx.networkPassphrase,
        timebounds: tx.timeBounds,
        ledgerbounds: tx.ledgerBounds,
        minAccountSequence: tx.minAccountSequence,
        minAccountSequenceAge: tx.minAccountSequenceAge,
        minAccountSequenceLedgerGap: tx.minAccountSequenceLedgerGap,
        extraSigners: tx.extraSigners
      }, opts)));
      cov_x4y6fyyjf().s[28]++;
      tx._tx.operations().forEach(function (op) {
        cov_x4y6fyyjf().f[2]++;
        cov_x4y6fyyjf().s[29]++;
        return builder.addOperation(op);
      });
      cov_x4y6fyyjf().s[30]++;
      return builder;
    }
  }, {
    key: "buildFeeBumpTransaction",
    value: function buildFeeBumpTransaction(feeSource, baseFee, innerTx, networkPassphrase) {
      cov_x4y6fyyjf().f[19]++;
      var innerOps = (cov_x4y6fyyjf().s[142]++, innerTx.operations.length);
      var innerBaseFeeRate = (cov_x4y6fyyjf().s[143]++, new _bignumber["default"](innerTx.fee).div(innerOps));
      var base = (cov_x4y6fyyjf().s[144]++, new _bignumber["default"](baseFee));

      // The fee rate for fee bump is at least the fee rate of the inner transaction
      cov_x4y6fyyjf().s[145]++;
      if (base.lt(innerBaseFeeRate)) {
        cov_x4y6fyyjf().b[56][0]++;
        cov_x4y6fyyjf().s[146]++;
        throw new Error("Invalid baseFee, it should be at least ".concat(innerBaseFeeRate, " stroops."));
      } else {
        cov_x4y6fyyjf().b[56][1]++;
      }
      var minBaseFee = (cov_x4y6fyyjf().s[147]++, new _bignumber["default"](BASE_FEE));

      // The fee rate is at least the minimum fee
      cov_x4y6fyyjf().s[148]++;
      if (base.lt(minBaseFee)) {
        cov_x4y6fyyjf().b[57][0]++;
        cov_x4y6fyyjf().s[149]++;
        throw new Error("Invalid baseFee, it should be at least ".concat(minBaseFee, " stroops."));
      } else {
        cov_x4y6fyyjf().b[57][1]++;
      }
      var innerTxEnvelope = (cov_x4y6fyyjf().s[150]++, innerTx.toEnvelope());
      cov_x4y6fyyjf().s[151]++;
      if (innerTxEnvelope["switch"]() === _xdr["default"].EnvelopeType.envelopeTypeTxV0()) {
        cov_x4y6fyyjf().b[58][0]++;
        var v0Tx = (cov_x4y6fyyjf().s[152]++, innerTxEnvelope.v0().tx());
        var v1Tx = (cov_x4y6fyyjf().s[153]++, new _xdr["default"].Transaction({
          sourceAccount: new _xdr["default"].MuxedAccount.keyTypeDilithium2(v0Tx.sourceAccountDilithium2()),
          fee: v0Tx.fee(),
          seqNum: v0Tx.seqNum(),
          cond: _xdr["default"].Preconditions.precondTime(v0Tx.timeBounds()),
          memo: v0Tx.memo(),
          operations: v0Tx.operations(),
          ext: new _xdr["default"].TransactionExt(0)
        }));
        cov_x4y6fyyjf().s[154]++;
        innerTxEnvelope = new _xdr["default"].TransactionEnvelope.envelopeTypeTx(new _xdr["default"].TransactionV1Envelope({
          tx: v1Tx,
          signatures: innerTxEnvelope.v0().signatures()
        }));
      } else {
        cov_x4y6fyyjf().b[58][1]++;
      }
      var feeSourceAccount;
      cov_x4y6fyyjf().s[155]++;
      if (typeof feeSource === 'string') {
        cov_x4y6fyyjf().b[59][0]++;
        cov_x4y6fyyjf().s[156]++;
        feeSourceAccount = (0, _decode_encode_muxed_account.decodeAddressToMuxedAccount)(feeSource);
      } else {
        cov_x4y6fyyjf().b[59][1]++;
        cov_x4y6fyyjf().s[157]++;
        feeSourceAccount = feeSource.xdrMuxedAccount();
      }
      var tx = (cov_x4y6fyyjf().s[158]++, new _xdr["default"].FeeBumpTransaction({
        feeSource: feeSourceAccount,
        fee: _xdr["default"].Int64.fromString(base.times(innerOps + 1).toString()),
        innerTx: _xdr["default"].FeeBumpTransactionInnerTx.envelopeTypeTx(innerTxEnvelope.v1()),
        ext: new _xdr["default"].FeeBumpTransactionExt(0)
      }));
      var feeBumpTxEnvelope = (cov_x4y6fyyjf().s[159]++, new _xdr["default"].FeeBumpTransactionEnvelope({
        tx: tx,
        signatures: []
      }));
      var envelope = (cov_x4y6fyyjf().s[160]++, new _xdr["default"].TransactionEnvelope.envelopeTypeTxFeeBump(feeBumpTxEnvelope));
      cov_x4y6fyyjf().s[161]++;
      return new _fee_bump_transaction.FeeBumpTransaction(envelope, networkPassphrase);
    }

    /**
     * Build a {@link Transaction} or {@link FeeBumpTransaction} from an
     * xdr.TransactionEnvelope.
     *
     * @param {string|xdr.TransactionEnvelope} envelope - The transaction envelope
     *     object or base64 encoded string.
     * @param {string} networkPassphrase - The network passphrase of the target
     *     Stellar network (e.g. "Public Global Stellar Network ; September
     *     2015"), see {@link Networks}.
     *
     * @returns {Transaction|FeeBumpTransaction}
     */
  }, {
    key: "fromXDR",
    value: function fromXDR(envelope, networkPassphrase) {
      cov_x4y6fyyjf().f[20]++;
      cov_x4y6fyyjf().s[162]++;
      if (typeof envelope === 'string') {
        cov_x4y6fyyjf().b[60][0]++;
        cov_x4y6fyyjf().s[163]++;
        envelope = _xdr["default"].TransactionEnvelope.fromXDR(envelope, 'base64');
      } else {
        cov_x4y6fyyjf().b[60][1]++;
      }
      cov_x4y6fyyjf().s[164]++;
      if (envelope["switch"]() === _xdr["default"].EnvelopeType.envelopeTypeTxFeeBump()) {
        cov_x4y6fyyjf().b[61][0]++;
        cov_x4y6fyyjf().s[165]++;
        return new _fee_bump_transaction.FeeBumpTransaction(envelope, networkPassphrase);
      } else {
        cov_x4y6fyyjf().b[61][1]++;
      }
      cov_x4y6fyyjf().s[166]++;
      return new _transaction.Transaction(envelope, networkPassphrase);
    }
  }]);
}();
/**
 * Checks whether a provided object is a valid Date.
 * @argument {Date} d date object
 * @returns {boolean}
 */
function isValidDate(d) {
  cov_x4y6fyyjf().f[21]++;
  cov_x4y6fyyjf().s[167]++;
  // isnan is okay here because it correctly checks for invalid date objects
  // eslint-disable-next-line no-restricted-globals
  return (cov_x4y6fyyjf().b[62][0]++, d instanceof Date) && (cov_x4y6fyyjf().b[62][1]++, !isNaN(d));
}