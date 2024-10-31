"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.revokeAccountSponsorship = revokeAccountSponsorship;
exports.revokeClaimableBalanceSponsorship = revokeClaimableBalanceSponsorship;
exports.revokeDataSponsorship = revokeDataSponsorship;
exports.revokeLiquidityPoolSponsorship = revokeLiquidityPoolSponsorship;
exports.revokeOfferSponsorship = revokeOfferSponsorship;
exports.revokeSignerSponsorship = revokeSignerSponsorship;
exports.revokeTrustlineSponsorship = revokeTrustlineSponsorship;
var _xdr = _interopRequireDefault(require("../xdr"));
var _strkey = require("../strkey");
var _keypair = require("../keypair");
var _asset = require("../asset");
var _liquidity_pool_id = require("../liquidity_pool_id");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_1z5dq5mam9() {
  var path = "/mnt/g/stellar-base/src/operations/revoke_sponsorship.js";
  var hash = "a80ef7e0cc7db3e8862aef6cfb5d90ebd60cca79";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/operations/revoke_sponsorship.js",
    statementMap: {
      "0": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 26,
          column: 3
        }
      },
      "1": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 42
        }
      },
      "2": {
        start: {
          line: 28,
          column: 20
        },
        end: {
          line: 32,
          column: 3
        }
      },
      "3": {
        start: {
          line: 33,
          column: 13
        },
        end: {
          line: 33,
          column: 76
        }
      },
      "4": {
        start: {
          line: 34,
          column: 23
        },
        end: {
          line: 34,
          column: 25
        }
      },
      "5": {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 35,
          column: 62
        }
      },
      "6": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 36,
          column: 44
        }
      },
      "7": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 38,
          column: 41
        }
      },
      "8": {
        start: {
          line: 63,
          column: 2
        },
        end: {
          line: 65,
          column: 3
        }
      },
      "9": {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 64,
          column: 42
        }
      },
      "10": {
        start: {
          line: 68,
          column: 2
        },
        end: {
          line: 74,
          column: 3
        }
      },
      "11": {
        start: {
          line: 69,
          column: 4
        },
        end: {
          line: 69,
          column: 46
        }
      },
      "12": {
        start: {
          line: 70,
          column: 9
        },
        end: {
          line: 74,
          column: 3
        }
      },
      "13": {
        start: {
          line: 71,
          column: 4
        },
        end: {
          line: 71,
          column: 37
        }
      },
      "14": {
        start: {
          line: 73,
          column: 4
        },
        end: {
          line: 73,
          column: 69
        }
      },
      "15": {
        start: {
          line: 76,
          column: 20
        },
        end: {
          line: 81,
          column: 3
        }
      },
      "16": {
        start: {
          line: 82,
          column: 13
        },
        end: {
          line: 82,
          column: 76
        }
      },
      "17": {
        start: {
          line: 83,
          column: 23
        },
        end: {
          line: 83,
          column: 25
        }
      },
      "18": {
        start: {
          line: 84,
          column: 2
        },
        end: {
          line: 84,
          column: 62
        }
      },
      "19": {
        start: {
          line: 85,
          column: 2
        },
        end: {
          line: 85,
          column: 44
        }
      },
      "20": {
        start: {
          line: 87,
          column: 2
        },
        end: {
          line: 87,
          column: 41
        }
      },
      "21": {
        start: {
          line: 109,
          column: 2
        },
        end: {
          line: 111,
          column: 3
        }
      },
      "22": {
        start: {
          line: 110,
          column: 4
        },
        end: {
          line: 110,
          column: 41
        }
      },
      "23": {
        start: {
          line: 112,
          column: 2
        },
        end: {
          line: 114,
          column: 3
        }
      },
      "24": {
        start: {
          line: 113,
          column: 4
        },
        end: {
          line: 113,
          column: 42
        }
      },
      "25": {
        start: {
          line: 116,
          column: 20
        },
        end: {
          line: 121,
          column: 3
        }
      },
      "26": {
        start: {
          line: 122,
          column: 13
        },
        end: {
          line: 122,
          column: 76
        }
      },
      "27": {
        start: {
          line: 123,
          column: 23
        },
        end: {
          line: 123,
          column: 25
        }
      },
      "28": {
        start: {
          line: 124,
          column: 2
        },
        end: {
          line: 124,
          column: 62
        }
      },
      "29": {
        start: {
          line: 125,
          column: 2
        },
        end: {
          line: 125,
          column: 44
        }
      },
      "30": {
        start: {
          line: 127,
          column: 2
        },
        end: {
          line: 127,
          column: 41
        }
      },
      "31": {
        start: {
          line: 149,
          column: 2
        },
        end: {
          line: 151,
          column: 3
        }
      },
      "32": {
        start: {
          line: 150,
          column: 4
        },
        end: {
          line: 150,
          column: 42
        }
      },
      "33": {
        start: {
          line: 152,
          column: 2
        },
        end: {
          line: 154,
          column: 3
        }
      },
      "34": {
        start: {
          line: 153,
          column: 4
        },
        end: {
          line: 153,
          column: 66
        }
      },
      "35": {
        start: {
          line: 156,
          column: 20
        },
        end: {
          line: 161,
          column: 3
        }
      },
      "36": {
        start: {
          line: 162,
          column: 13
        },
        end: {
          line: 162,
          column: 76
        }
      },
      "37": {
        start: {
          line: 163,
          column: 23
        },
        end: {
          line: 163,
          column: 25
        }
      },
      "38": {
        start: {
          line: 164,
          column: 2
        },
        end: {
          line: 164,
          column: 62
        }
      },
      "39": {
        start: {
          line: 165,
          column: 2
        },
        end: {
          line: 165,
          column: 44
        }
      },
      "40": {
        start: {
          line: 167,
          column: 2
        },
        end: {
          line: 167,
          column: 41
        }
      },
      "41": {
        start: {
          line: 187,
          column: 2
        },
        end: {
          line: 189,
          column: 3
        }
      },
      "42": {
        start: {
          line: 188,
          column: 4
        },
        end: {
          line: 188,
          column: 44
        }
      },
      "43": {
        start: {
          line: 191,
          column: 20
        },
        end: {
          line: 195,
          column: 3
        }
      },
      "44": {
        start: {
          line: 196,
          column: 13
        },
        end: {
          line: 196,
          column: 76
        }
      },
      "45": {
        start: {
          line: 197,
          column: 23
        },
        end: {
          line: 197,
          column: 25
        }
      },
      "46": {
        start: {
          line: 198,
          column: 2
        },
        end: {
          line: 198,
          column: 62
        }
      },
      "47": {
        start: {
          line: 199,
          column: 2
        },
        end: {
          line: 199,
          column: 44
        }
      },
      "48": {
        start: {
          line: 201,
          column: 2
        },
        end: {
          line: 201,
          column: 41
        }
      },
      "49": {
        start: {
          line: 221,
          column: 2
        },
        end: {
          line: 223,
          column: 3
        }
      },
      "50": {
        start: {
          line: 222,
          column: 4
        },
        end: {
          line: 222,
          column: 50
        }
      },
      "51": {
        start: {
          line: 225,
          column: 20
        },
        end: {
          line: 229,
          column: 3
        }
      },
      "52": {
        start: {
          line: 231,
          column: 13
        },
        end: {
          line: 231,
          column: 76
        }
      },
      "53": {
        start: {
          line: 232,
          column: 23
        },
        end: {
          line: 234,
          column: 3
        }
      },
      "54": {
        start: {
          line: 235,
          column: 2
        },
        end: {
          line: 235,
          column: 44
        }
      },
      "55": {
        start: {
          line: 237,
          column: 2
        },
        end: {
          line: 237,
          column: 41
        }
      },
      "56": {
        start: {
          line: 264,
          column: 2
        },
        end: {
          line: 266,
          column: 3
        }
      },
      "57": {
        start: {
          line: 265,
          column: 4
        },
        end: {
          line: 265,
          column: 42
        }
      },
      "58": {
        start: {
          line: 268,
          column: 2
        },
        end: {
          line: 303,
          column: 3
        }
      },
      "59": {
        start: {
          line: 269,
          column: 4
        },
        end: {
          line: 271,
          column: 5
        }
      },
      "60": {
        start: {
          line: 270,
          column: 6
        },
        end: {
          line: 270,
          column: 64
        }
      },
      "61": {
        start: {
          line: 272,
          column: 19
        },
        end: {
          line: 272,
          column: 84
        }
      },
      "62": {
        start: {
          line: 274,
          column: 4
        },
        end: {
          line: 274,
          column: 60
        }
      },
      "63": {
        start: {
          line: 275,
          column: 9
        },
        end: {
          line: 303,
          column: 3
        }
      },
      "64": {
        start: {
          line: 277,
          column: 4
        },
        end: {
          line: 281,
          column: 5
        }
      },
      "65": {
        start: {
          line: 278,
          column: 6
        },
        end: {
          line: 278,
          column: 57
        }
      },
      "66": {
        start: {
          line: 280,
          column: 6
        },
        end: {
          line: 280,
          column: 37
        }
      },
      "67": {
        start: {
          line: 283,
          column: 4
        },
        end: {
          line: 285,
          column: 5
        }
      },
      "68": {
        start: {
          line: 284,
          column: 6
        },
        end: {
          line: 284,
          column: 67
        }
      },
      "69": {
        start: {
          line: 287,
          column: 4
        },
        end: {
          line: 287,
          column: 59
        }
      },
      "70": {
        start: {
          line: 288,
          column: 9
        },
        end: {
          line: 303,
          column: 3
        }
      },
      "71": {
        start: {
          line: 290,
          column: 4
        },
        end: {
          line: 294,
          column: 5
        }
      },
      "72": {
        start: {
          line: 291,
          column: 6
        },
        end: {
          line: 291,
          column: 58
        }
      },
      "73": {
        start: {
          line: 293,
          column: 6
        },
        end: {
          line: 293,
          column: 38
        }
      },
      "74": {
        start: {
          line: 296,
          column: 4
        },
        end: {
          line: 298,
          column: 5
        }
      },
      "75": {
        start: {
          line: 297,
          column: 6
        },
        end: {
          line: 297,
          column: 68
        }
      },
      "76": {
        start: {
          line: 300,
          column: 4
        },
        end: {
          line: 300,
          column: 55
        }
      },
      "77": {
        start: {
          line: 302,
          column: 4
        },
        end: {
          line: 302,
          column: 41
        }
      },
      "78": {
        start: {
          line: 305,
          column: 17
        },
        end: {
          line: 308,
          column: 4
        }
      },
      "79": {
        start: {
          line: 310,
          column: 13
        },
        end: {
          line: 310,
          column: 68
        }
      },
      "80": {
        start: {
          line: 311,
          column: 23
        },
        end: {
          line: 311,
          column: 25
        }
      },
      "81": {
        start: {
          line: 312,
          column: 2
        },
        end: {
          line: 312,
          column: 62
        }
      },
      "82": {
        start: {
          line: 313,
          column: 2
        },
        end: {
          line: 313,
          column: 44
        }
      },
      "83": {
        start: {
          line: 315,
          column: 2
        },
        end: {
          line: 315,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "revokeAccountSponsorship",
        decl: {
          start: {
            line: 23,
            column: 16
          },
          end: {
            line: 23,
            column: 40
          }
        },
        loc: {
          start: {
            line: 23,
            column: 52
          },
          end: {
            line: 39,
            column: 1
          }
        },
        line: 23
      },
      "1": {
        name: "revokeTrustlineSponsorship",
        decl: {
          start: {
            line: 62,
            column: 16
          },
          end: {
            line: 62,
            column: 42
          }
        },
        loc: {
          start: {
            line: 62,
            column: 54
          },
          end: {
            line: 88,
            column: 1
          }
        },
        line: 62
      },
      "2": {
        name: "revokeOfferSponsorship",
        decl: {
          start: {
            line: 108,
            column: 16
          },
          end: {
            line: 108,
            column: 38
          }
        },
        loc: {
          start: {
            line: 108,
            column: 50
          },
          end: {
            line: 128,
            column: 1
          }
        },
        line: 108
      },
      "3": {
        name: "revokeDataSponsorship",
        decl: {
          start: {
            line: 148,
            column: 16
          },
          end: {
            line: 148,
            column: 37
          }
        },
        loc: {
          start: {
            line: 148,
            column: 49
          },
          end: {
            line: 168,
            column: 1
          }
        },
        line: 148
      },
      "4": {
        name: "revokeClaimableBalanceSponsorship",
        decl: {
          start: {
            line: 186,
            column: 16
          },
          end: {
            line: 186,
            column: 49
          }
        },
        loc: {
          start: {
            line: 186,
            column: 61
          },
          end: {
            line: 202,
            column: 1
          }
        },
        line: 186
      },
      "5": {
        name: "revokeLiquidityPoolSponsorship",
        decl: {
          start: {
            line: 220,
            column: 16
          },
          end: {
            line: 220,
            column: 46
          }
        },
        loc: {
          start: {
            line: 220,
            column: 58
          },
          end: {
            line: 238,
            column: 1
          }
        },
        line: 220
      },
      "6": {
        name: "revokeSignerSponsorship",
        decl: {
          start: {
            line: 263,
            column: 16
          },
          end: {
            line: 263,
            column: 39
          }
        },
        loc: {
          start: {
            line: 263,
            column: 51
          },
          end: {
            line: 316,
            column: 1
          }
        },
        line: 263
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 23,
            column: 41
          },
          end: {
            line: 23,
            column: 50
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 23,
            column: 48
          },
          end: {
            line: 23,
            column: 50
          }
        }],
        line: 23
      },
      "1": {
        loc: {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 26,
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
        line: 24
      },
      "2": {
        loc: {
          start: {
            line: 62,
            column: 43
          },
          end: {
            line: 62,
            column: 52
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 62,
            column: 50
          },
          end: {
            line: 62,
            column: 52
          }
        }],
        line: 62
      },
      "3": {
        loc: {
          start: {
            line: 63,
            column: 2
          },
          end: {
            line: 65,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 63,
            column: 2
          },
          end: {
            line: 65,
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
        line: 63
      },
      "4": {
        loc: {
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 74,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 74,
            column: 3
          }
        }, {
          start: {
            line: 70,
            column: 9
          },
          end: {
            line: 74,
            column: 3
          }
        }],
        line: 68
      },
      "5": {
        loc: {
          start: {
            line: 70,
            column: 9
          },
          end: {
            line: 74,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 70,
            column: 9
          },
          end: {
            line: 74,
            column: 3
          }
        }, {
          start: {
            line: 72,
            column: 9
          },
          end: {
            line: 74,
            column: 3
          }
        }],
        line: 70
      },
      "6": {
        loc: {
          start: {
            line: 108,
            column: 39
          },
          end: {
            line: 108,
            column: 48
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 108,
            column: 46
          },
          end: {
            line: 108,
            column: 48
          }
        }],
        line: 108
      },
      "7": {
        loc: {
          start: {
            line: 109,
            column: 2
          },
          end: {
            line: 111,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 109,
            column: 2
          },
          end: {
            line: 111,
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
        line: 109
      },
      "8": {
        loc: {
          start: {
            line: 112,
            column: 2
          },
          end: {
            line: 114,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 112,
            column: 2
          },
          end: {
            line: 114,
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
        line: 112
      },
      "9": {
        loc: {
          start: {
            line: 148,
            column: 38
          },
          end: {
            line: 148,
            column: 47
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 148,
            column: 45
          },
          end: {
            line: 148,
            column: 47
          }
        }],
        line: 148
      },
      "10": {
        loc: {
          start: {
            line: 149,
            column: 2
          },
          end: {
            line: 151,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 149,
            column: 2
          },
          end: {
            line: 151,
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
        line: 149
      },
      "11": {
        loc: {
          start: {
            line: 152,
            column: 2
          },
          end: {
            line: 154,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 152,
            column: 2
          },
          end: {
            line: 154,
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
        line: 152
      },
      "12": {
        loc: {
          start: {
            line: 152,
            column: 6
          },
          end: {
            line: 152,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 152,
            column: 6
          },
          end: {
            line: 152,
            column: 35
          }
        }, {
          start: {
            line: 152,
            column: 39
          },
          end: {
            line: 152,
            column: 60
          }
        }],
        line: 152
      },
      "13": {
        loc: {
          start: {
            line: 186,
            column: 50
          },
          end: {
            line: 186,
            column: 59
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 186,
            column: 57
          },
          end: {
            line: 186,
            column: 59
          }
        }],
        line: 186
      },
      "14": {
        loc: {
          start: {
            line: 187,
            column: 2
          },
          end: {
            line: 189,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 187,
            column: 2
          },
          end: {
            line: 189,
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
        line: 187
      },
      "15": {
        loc: {
          start: {
            line: 220,
            column: 47
          },
          end: {
            line: 220,
            column: 56
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 220,
            column: 54
          },
          end: {
            line: 220,
            column: 56
          }
        }],
        line: 220
      },
      "16": {
        loc: {
          start: {
            line: 221,
            column: 2
          },
          end: {
            line: 223,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 221,
            column: 2
          },
          end: {
            line: 223,
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
        line: 221
      },
      "17": {
        loc: {
          start: {
            line: 263,
            column: 40
          },
          end: {
            line: 263,
            column: 49
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 263,
            column: 47
          },
          end: {
            line: 263,
            column: 49
          }
        }],
        line: 263
      },
      "18": {
        loc: {
          start: {
            line: 264,
            column: 2
          },
          end: {
            line: 266,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 264,
            column: 2
          },
          end: {
            line: 266,
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
        line: 264
      },
      "19": {
        loc: {
          start: {
            line: 268,
            column: 2
          },
          end: {
            line: 303,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 268,
            column: 2
          },
          end: {
            line: 303,
            column: 3
          }
        }, {
          start: {
            line: 275,
            column: 9
          },
          end: {
            line: 303,
            column: 3
          }
        }],
        line: 268
      },
      "20": {
        loc: {
          start: {
            line: 269,
            column: 4
          },
          end: {
            line: 271,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 269,
            column: 4
          },
          end: {
            line: 271,
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
        line: 269
      },
      "21": {
        loc: {
          start: {
            line: 275,
            column: 9
          },
          end: {
            line: 303,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 275,
            column: 9
          },
          end: {
            line: 303,
            column: 3
          }
        }, {
          start: {
            line: 288,
            column: 9
          },
          end: {
            line: 303,
            column: 3
          }
        }],
        line: 275
      },
      "22": {
        loc: {
          start: {
            line: 277,
            column: 4
          },
          end: {
            line: 281,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 277,
            column: 4
          },
          end: {
            line: 281,
            column: 5
          }
        }, {
          start: {
            line: 279,
            column: 11
          },
          end: {
            line: 281,
            column: 5
          }
        }],
        line: 277
      },
      "23": {
        loc: {
          start: {
            line: 283,
            column: 4
          },
          end: {
            line: 285,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 283,
            column: 4
          },
          end: {
            line: 285,
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
        line: 283
      },
      "24": {
        loc: {
          start: {
            line: 283,
            column: 10
          },
          end: {
            line: 283,
            column: 57
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 283,
            column: 10
          },
          end: {
            line: 283,
            column: 33
          }
        }, {
          start: {
            line: 283,
            column: 37
          },
          end: {
            line: 283,
            column: 57
          }
        }],
        line: 283
      },
      "25": {
        loc: {
          start: {
            line: 288,
            column: 9
          },
          end: {
            line: 303,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 288,
            column: 9
          },
          end: {
            line: 303,
            column: 3
          }
        }, {
          start: {
            line: 301,
            column: 9
          },
          end: {
            line: 303,
            column: 3
          }
        }],
        line: 288
      },
      "26": {
        loc: {
          start: {
            line: 290,
            column: 4
          },
          end: {
            line: 294,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 290,
            column: 4
          },
          end: {
            line: 294,
            column: 5
          }
        }, {
          start: {
            line: 292,
            column: 11
          },
          end: {
            line: 294,
            column: 5
          }
        }],
        line: 290
      },
      "27": {
        loc: {
          start: {
            line: 296,
            column: 4
          },
          end: {
            line: 298,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 296,
            column: 4
          },
          end: {
            line: 298,
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
        line: 296
      },
      "28": {
        loc: {
          start: {
            line: 296,
            column: 10
          },
          end: {
            line: 296,
            column: 57
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 296,
            column: 10
          },
          end: {
            line: 296,
            column: 33
          }
        }, {
          start: {
            line: 296,
            column: 37
          },
          end: {
            line: 296,
            column: 57
          }
        }],
        line: 296
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
      "83": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0],
      "14": [0, 0],
      "15": [0],
      "16": [0, 0],
      "17": [0],
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
      "28": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a80ef7e0cc7db3e8862aef6cfb5d90ebd60cca79"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1z5dq5mam9 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1z5dq5mam9();
/**
 * Create a "revoke sponsorship" operation for an account.
 *
 * @function
 * @alias Operation.revokeAccountSponsorship
 * @param {object} opts Options object
 * @param {string} opts.account - The sponsored account ID.
 * @param {string} [opts.source] - The source account for the operation. Defaults to the transaction's source account.
 * @returns {xdr.Operation} xdr operation
 *
 * @example
 * const op = Operation.revokeAccountSponsorship({
 *   account: 'GDGU5OAPHNPU5UCLE5RDJHG7PXZFQYWKCFOEXSXNMR6KRQRI5T6XXCD7
 * });
 *
 */
function revokeAccountSponsorship() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1z5dq5mam9().b[0][0]++, {});
  cov_1z5dq5mam9().f[0]++;
  cov_1z5dq5mam9().s[0]++;
  if (!_strkey.StrKey.isValidDilithium2PublicKey(opts.account)) {
    cov_1z5dq5mam9().b[1][0]++;
    cov_1z5dq5mam9().s[1]++;
    throw new Error('account is invalid');
  } else {
    cov_1z5dq5mam9().b[1][1]++;
  }
  var ledgerKey = (cov_1z5dq5mam9().s[2]++, _xdr["default"].LedgerKey.account(new _xdr["default"].LedgerKeyAccount({
    accountId: _keypair.Keypair.fromPublicKey(opts.account).xdrAccountId()
  })));
  var op = (cov_1z5dq5mam9().s[3]++, _xdr["default"].RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey));
  var opAttributes = (cov_1z5dq5mam9().s[4]++, {});
  cov_1z5dq5mam9().s[5]++;
  opAttributes.body = _xdr["default"].OperationBody.revokeSponsorship(op);
  cov_1z5dq5mam9().s[6]++;
  this.setSourceAccount(opAttributes, opts);
  cov_1z5dq5mam9().s[7]++;
  return new _xdr["default"].Operation(opAttributes);
}

/**
 * Create a "revoke sponsorship" operation for a trustline.
 *
 * @function
 * @alias Operation.revokeTrustlineSponsorship
 * @param {object} opts Options object
 * @param {string} opts.account - The account ID which owns the trustline.
 * @param {Asset | LiquidityPoolId} opts.asset - The trustline asset.
 * @param {string} [opts.source] - The source account for the operation. Defaults to the transaction's source account.
 * @returns {xdr.Operation} xdr operation
 *
 * @example
 * const op = Operation.revokeTrustlineSponsorship({
 *   account: 'GDGU5OAPHNPU5UCLE5RDJHG7PXZFQYWKCFOEXSXNMR6KRQRI5T6XXCD7
 *   asset: new StellarBase.LiquidityPoolId(
 *     'USDUSD',
 *     'GDGU5OAPHNPU5UCLE5RDJHG7PXZFQYWKCFOEXSXNMR6KRQRI5T6XXCD7'
 *   )
 * });
 *
 */
function revokeTrustlineSponsorship() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1z5dq5mam9().b[2][0]++, {});
  cov_1z5dq5mam9().f[1]++;
  cov_1z5dq5mam9().s[8]++;
  if (!_strkey.StrKey.isValidDilithium2PublicKey(opts.account)) {
    cov_1z5dq5mam9().b[3][0]++;
    cov_1z5dq5mam9().s[9]++;
    throw new Error('account is invalid');
  } else {
    cov_1z5dq5mam9().b[3][1]++;
  }
  var asset;
  cov_1z5dq5mam9().s[10]++;
  if (opts.asset instanceof _asset.Asset) {
    cov_1z5dq5mam9().b[4][0]++;
    cov_1z5dq5mam9().s[11]++;
    asset = opts.asset.toTrustLineXDRObject();
  } else {
    cov_1z5dq5mam9().b[4][1]++;
    cov_1z5dq5mam9().s[12]++;
    if (opts.asset instanceof _liquidity_pool_id.LiquidityPoolId) {
      cov_1z5dq5mam9().b[5][0]++;
      cov_1z5dq5mam9().s[13]++;
      asset = opts.asset.toXDRObject();
    } else {
      cov_1z5dq5mam9().b[5][1]++;
      cov_1z5dq5mam9().s[14]++;
      throw new TypeError('asset must be an Asset or LiquidityPoolId');
    }
  }
  var ledgerKey = (cov_1z5dq5mam9().s[15]++, _xdr["default"].LedgerKey.trustline(new _xdr["default"].LedgerKeyTrustLine({
    accountId: _keypair.Keypair.fromPublicKey(opts.account).xdrAccountId(),
    asset: asset
  })));
  var op = (cov_1z5dq5mam9().s[16]++, _xdr["default"].RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey));
  var opAttributes = (cov_1z5dq5mam9().s[17]++, {});
  cov_1z5dq5mam9().s[18]++;
  opAttributes.body = _xdr["default"].OperationBody.revokeSponsorship(op);
  cov_1z5dq5mam9().s[19]++;
  this.setSourceAccount(opAttributes, opts);
  cov_1z5dq5mam9().s[20]++;
  return new _xdr["default"].Operation(opAttributes);
}

/**
 * Create a "revoke sponsorship" operation for an offer.
 *
 * @function
 * @alias Operation.revokeOfferSponsorship
 * @param {object} opts Options object
 * @param {string} opts.seller - The account ID which created the offer.
 * @param {string} opts.offerId - The offer ID.
 * @param {string} [opts.source] - The source account for the operation. Defaults to the transaction's source account.
 * @returns {xdr.Operation} xdr operation
 *
 * @example
 * const op = Operation.revokeOfferSponsorship({
 *   seller: 'GDGU5OAPHNPU5UCLE5RDJHG7PXZFQYWKCFOEXSXNMR6KRQRI5T6XXCD7
 *   offerId: '1234'
 * });
 *
 */
function revokeOfferSponsorship() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1z5dq5mam9().b[6][0]++, {});
  cov_1z5dq5mam9().f[2]++;
  cov_1z5dq5mam9().s[21]++;
  if (!_strkey.StrKey.isValidDilithium2PublicKey(opts.seller)) {
    cov_1z5dq5mam9().b[7][0]++;
    cov_1z5dq5mam9().s[22]++;
    throw new Error('seller is invalid');
  } else {
    cov_1z5dq5mam9().b[7][1]++;
  }
  cov_1z5dq5mam9().s[23]++;
  if (typeof opts.offerId !== 'string') {
    cov_1z5dq5mam9().b[8][0]++;
    cov_1z5dq5mam9().s[24]++;
    throw new Error('offerId is invalid');
  } else {
    cov_1z5dq5mam9().b[8][1]++;
  }
  var ledgerKey = (cov_1z5dq5mam9().s[25]++, _xdr["default"].LedgerKey.offer(new _xdr["default"].LedgerKeyOffer({
    sellerId: _keypair.Keypair.fromPublicKey(opts.seller).xdrAccountId(),
    offerId: _xdr["default"].Int64.fromString(opts.offerId)
  })));
  var op = (cov_1z5dq5mam9().s[26]++, _xdr["default"].RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey));
  var opAttributes = (cov_1z5dq5mam9().s[27]++, {});
  cov_1z5dq5mam9().s[28]++;
  opAttributes.body = _xdr["default"].OperationBody.revokeSponsorship(op);
  cov_1z5dq5mam9().s[29]++;
  this.setSourceAccount(opAttributes, opts);
  cov_1z5dq5mam9().s[30]++;
  return new _xdr["default"].Operation(opAttributes);
}

/**
 * Create a "revoke sponsorship" operation for a data entry.
 *
 * @function
 * @alias Operation.revokeDataSponsorship
 * @param {object} opts Options object
 * @param {string} opts.account - The account ID which owns the data entry.
 * @param {string} opts.name - The name of the data entry
 * @param {string} [opts.source] - The source account for the operation. Defaults to the transaction's source account.
 * @returns {xdr.Operation} xdr operation
 *
 * @example
 * const op = Operation.revokeDataSponsorship({
 *   account: 'GDGU5OAPHNPU5UCLE5RDJHG7PXZFQYWKCFOEXSXNMR6KRQRI5T6XXCD7
 *   name: 'foo'
 * });
 *
 */
function revokeDataSponsorship() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1z5dq5mam9().b[9][0]++, {});
  cov_1z5dq5mam9().f[3]++;
  cov_1z5dq5mam9().s[31]++;
  if (!_strkey.StrKey.isValidDilithium2PublicKey(opts.account)) {
    cov_1z5dq5mam9().b[10][0]++;
    cov_1z5dq5mam9().s[32]++;
    throw new Error('account is invalid');
  } else {
    cov_1z5dq5mam9().b[10][1]++;
  }
  cov_1z5dq5mam9().s[33]++;
  if ((cov_1z5dq5mam9().b[12][0]++, typeof opts.name !== 'string') || (cov_1z5dq5mam9().b[12][1]++, opts.name.length > 64)) {
    cov_1z5dq5mam9().b[11][0]++;
    cov_1z5dq5mam9().s[34]++;
    throw new Error('name must be a string, up to 64 characters');
  } else {
    cov_1z5dq5mam9().b[11][1]++;
  }
  var ledgerKey = (cov_1z5dq5mam9().s[35]++, _xdr["default"].LedgerKey.data(new _xdr["default"].LedgerKeyData({
    accountId: _keypair.Keypair.fromPublicKey(opts.account).xdrAccountId(),
    dataName: opts.name
  })));
  var op = (cov_1z5dq5mam9().s[36]++, _xdr["default"].RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey));
  var opAttributes = (cov_1z5dq5mam9().s[37]++, {});
  cov_1z5dq5mam9().s[38]++;
  opAttributes.body = _xdr["default"].OperationBody.revokeSponsorship(op);
  cov_1z5dq5mam9().s[39]++;
  this.setSourceAccount(opAttributes, opts);
  cov_1z5dq5mam9().s[40]++;
  return new _xdr["default"].Operation(opAttributes);
}

/**
 * Create a "revoke sponsorship" operation for a claimable balance.
 *
 * @function
 * @alias Operation.revokeClaimableBalanceSponsorship
 * @param {object} opts Options object
 * @param {string} opts.balanceId - The sponsored claimable balance ID.
 * @param {string} [opts.source] - The source account for the operation. Defaults to the transaction's source account.
 * @returns {xdr.Operation} xdr operation
 *
 * @example
 * const op = Operation.revokeClaimableBalanceSponsorship({
 *   balanceId: '00000000da0d57da7d4850e7fc10d2a9d0ebc731f7afb40574c03395b17d49149b91f5be',
 * });
 *
 */
function revokeClaimableBalanceSponsorship() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1z5dq5mam9().b[13][0]++, {});
  cov_1z5dq5mam9().f[4]++;
  cov_1z5dq5mam9().s[41]++;
  if (typeof opts.balanceId !== 'string') {
    cov_1z5dq5mam9().b[14][0]++;
    cov_1z5dq5mam9().s[42]++;
    throw new Error('balanceId is invalid');
  } else {
    cov_1z5dq5mam9().b[14][1]++;
  }
  var ledgerKey = (cov_1z5dq5mam9().s[43]++, _xdr["default"].LedgerKey.claimableBalance(new _xdr["default"].LedgerKeyClaimableBalance({
    balanceId: _xdr["default"].ClaimableBalanceId.fromXDR(opts.balanceId, 'hex')
  })));
  var op = (cov_1z5dq5mam9().s[44]++, _xdr["default"].RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey));
  var opAttributes = (cov_1z5dq5mam9().s[45]++, {});
  cov_1z5dq5mam9().s[46]++;
  opAttributes.body = _xdr["default"].OperationBody.revokeSponsorship(op);
  cov_1z5dq5mam9().s[47]++;
  this.setSourceAccount(opAttributes, opts);
  cov_1z5dq5mam9().s[48]++;
  return new _xdr["default"].Operation(opAttributes);
}

/**
 * Creates a "revoke sponsorship" operation for a liquidity pool.
 *
 * @function
 * @alias Operation.revokeLiquidityPoolSponsorship
 * @param {object} opts – Options object.
 * @param {string} opts.liquidityPoolId - The sponsored liquidity pool ID in 'hex' string.
 * @param {string} [opts.source] - The source account for the operation. Defaults to the transaction's source account.
 * @returns {xdr.Operation} xdr Operation.
 *
 * @example
 * const op = Operation.revokeLiquidityPoolSponsorship({
 *   liquidityPoolId: 'dd7b1ab831c273310ddbec6f97870aa83c2fbd78ce22aded37ecbf4f3380fac7',
 * });
 *
 */
function revokeLiquidityPoolSponsorship() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1z5dq5mam9().b[15][0]++, {});
  cov_1z5dq5mam9().f[5]++;
  cov_1z5dq5mam9().s[49]++;
  if (typeof opts.liquidityPoolId !== 'string') {
    cov_1z5dq5mam9().b[16][0]++;
    cov_1z5dq5mam9().s[50]++;
    throw new Error('liquidityPoolId is invalid');
  } else {
    cov_1z5dq5mam9().b[16][1]++;
  }
  var ledgerKey = (cov_1z5dq5mam9().s[51]++, _xdr["default"].LedgerKey.liquidityPool(new _xdr["default"].LedgerKeyLiquidityPool({
    liquidityPoolId: _xdr["default"].PoolId.fromXDR(opts.liquidityPoolId, 'hex')
  })));
  var op = (cov_1z5dq5mam9().s[52]++, _xdr["default"].RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey));
  var opAttributes = (cov_1z5dq5mam9().s[53]++, {
    body: _xdr["default"].OperationBody.revokeSponsorship(op)
  });
  cov_1z5dq5mam9().s[54]++;
  this.setSourceAccount(opAttributes, opts);
  cov_1z5dq5mam9().s[55]++;
  return new _xdr["default"].Operation(opAttributes);
}

/**
 * Create a "revoke sponsorship" operation for a signer.
 *
 * @function
 * @alias Operation.revokeSignerSponsorship
 * @param {object} opts Options object
 * @param {string} opts.account - The account ID where the signer sponsorship is being removed from.
 * @param {object} opts.signer - The signer whose sponsorship is being removed.
 * @param {string} [opts.signer.dilithium2PublicKey] - The dilithium2 public key of the signer.
 * @param {Buffer|string} [opts.signer.sha256Hash] - sha256 hash (Buffer or hex string).
 * @param {Buffer|string} [opts.signer.preAuthTx] - Hash (Buffer or hex string) of transaction.
 * @param {string} [opts.source] - The source account for the operation. Defaults to the transaction's source account.
 * @returns {xdr.Operation} xdr operation
 *
 * @example
 * const op = Operation.revokeSignerSponsorship({
 *   account: 'GDGU5OAPHNPU5UCLE5RDJHG7PXZFQYWKCFOEXSXNMR6KRQRI5T6XXCD7
 *   signer: {
 *     dilithium2PublicKey: 'GCEZWKCA5VLDNRLN3RPRJMRZOX3Z6G5CHCGSNFHEYVXM3XOJMDS674JZ'
 *   }
 * })
 *
 */
function revokeSignerSponsorship() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1z5dq5mam9().b[17][0]++, {});
  cov_1z5dq5mam9().f[6]++;
  cov_1z5dq5mam9().s[56]++;
  if (!_strkey.StrKey.isValidDilithium2PublicKey(opts.account)) {
    cov_1z5dq5mam9().b[18][0]++;
    cov_1z5dq5mam9().s[57]++;
    throw new Error('account is invalid');
  } else {
    cov_1z5dq5mam9().b[18][1]++;
  }
  var key;
  cov_1z5dq5mam9().s[58]++;
  if (opts.signer.dilithium2PublicKey) {
    cov_1z5dq5mam9().b[19][0]++;
    cov_1z5dq5mam9().s[59]++;
    if (!_strkey.StrKey.isValidDilithium2PublicKey(opts.signer.dilithium2PublicKey)) {
      cov_1z5dq5mam9().b[20][0]++;
      cov_1z5dq5mam9().s[60]++;
      throw new Error('signer.dilithium2PublicKey is invalid.');
    } else {
      cov_1z5dq5mam9().b[20][1]++;
    }
    var rawKey = (cov_1z5dq5mam9().s[61]++, _strkey.StrKey.decodeDilithium2PublicKey(opts.signer.dilithium2PublicKey));
    cov_1z5dq5mam9().s[62]++;
    key = new _xdr["default"].SignerKey.signerKeyTypeDilithium2(rawKey);
  } else {
    cov_1z5dq5mam9().b[19][1]++;
    cov_1z5dq5mam9().s[63]++;
    if (opts.signer.preAuthTx) {
      cov_1z5dq5mam9().b[21][0]++;
      var buffer;
      cov_1z5dq5mam9().s[64]++;
      if (typeof opts.signer.preAuthTx === 'string') {
        cov_1z5dq5mam9().b[22][0]++;
        cov_1z5dq5mam9().s[65]++;
        buffer = Buffer.from(opts.signer.preAuthTx, 'hex');
      } else {
        cov_1z5dq5mam9().b[22][1]++;
        cov_1z5dq5mam9().s[66]++;
        buffer = opts.signer.preAuthTx;
      }
      cov_1z5dq5mam9().s[67]++;
      if (!((cov_1z5dq5mam9().b[24][0]++, Buffer.isBuffer(buffer)) && (cov_1z5dq5mam9().b[24][1]++, buffer.length === 32))) {
        cov_1z5dq5mam9().b[23][0]++;
        cov_1z5dq5mam9().s[68]++;
        throw new Error('signer.preAuthTx must be 32 bytes Buffer.');
      } else {
        cov_1z5dq5mam9().b[23][1]++;
      }
      cov_1z5dq5mam9().s[69]++;
      key = new _xdr["default"].SignerKey.signerKeyTypePreAuthTx(buffer);
    } else {
      cov_1z5dq5mam9().b[21][1]++;
      cov_1z5dq5mam9().s[70]++;
      if (opts.signer.sha256Hash) {
        cov_1z5dq5mam9().b[25][0]++;
        var _buffer;
        cov_1z5dq5mam9().s[71]++;
        if (typeof opts.signer.sha256Hash === 'string') {
          cov_1z5dq5mam9().b[26][0]++;
          cov_1z5dq5mam9().s[72]++;
          _buffer = Buffer.from(opts.signer.sha256Hash, 'hex');
        } else {
          cov_1z5dq5mam9().b[26][1]++;
          cov_1z5dq5mam9().s[73]++;
          _buffer = opts.signer.sha256Hash;
        }
        cov_1z5dq5mam9().s[74]++;
        if (!((cov_1z5dq5mam9().b[28][0]++, Buffer.isBuffer(_buffer)) && (cov_1z5dq5mam9().b[28][1]++, _buffer.length === 32))) {
          cov_1z5dq5mam9().b[27][0]++;
          cov_1z5dq5mam9().s[75]++;
          throw new Error('signer.sha256Hash must be 32 bytes Buffer.');
        } else {
          cov_1z5dq5mam9().b[27][1]++;
        }
        cov_1z5dq5mam9().s[76]++;
        key = new _xdr["default"].SignerKey.signerKeyTypeHashX(_buffer);
      } else {
        cov_1z5dq5mam9().b[25][1]++;
        cov_1z5dq5mam9().s[77]++;
        throw new Error('signer is invalid');
      }
    }
  }
  var signer = (cov_1z5dq5mam9().s[78]++, new _xdr["default"].RevokeSponsorshipOpSigner({
    accountId: _keypair.Keypair.fromPublicKey(opts.account).xdrAccountId(),
    signerKey: key
  }));
  var op = (cov_1z5dq5mam9().s[79]++, _xdr["default"].RevokeSponsorshipOp.revokeSponsorshipSigner(signer));
  var opAttributes = (cov_1z5dq5mam9().s[80]++, {});
  cov_1z5dq5mam9().s[81]++;
  opAttributes.body = _xdr["default"].OperationBody.revokeSponsorship(op);
  cov_1z5dq5mam9().s[82]++;
  this.setSourceAccount(opAttributes, opts);
  cov_1z5dq5mam9().s[83]++;
  return new _xdr["default"].Operation(opAttributes);
}