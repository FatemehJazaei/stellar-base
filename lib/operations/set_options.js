"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setOptions = setOptions;
var _xdr = _interopRequireDefault(require("../xdr"));
var _keypair = require("../keypair");
var _strkey = require("../strkey");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_goz36s7yg() {
  var path = "/mnt/g/stellar-base/src/operations/set_options.js";
  var hash = "1d9c06a20e1c17a57c7a12d088e8ecfa587249a6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/operations/set_options.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 10,
          column: 3
        }
      },
      "1": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 16
        }
      },
      "2": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 61
        }
      },
      "3": {
        start: {
          line: 50,
          column: 21
        },
        end: {
          line: 50,
          column: 23
        }
      },
      "4": {
        start: {
          line: 52,
          column: 2
        },
        end: {
          line: 59,
          column: 3
        }
      },
      "5": {
        start: {
          line: 53,
          column: 4
        },
        end: {
          line: 55,
          column: 5
        }
      },
      "6": {
        start: {
          line: 54,
          column: 6
        },
        end: {
          line: 54,
          column: 50
        }
      },
      "7": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 58,
          column: 21
        }
      },
      "8": {
        start: {
          line: 61,
          column: 2
        },
        end: {
          line: 64,
          column: 4
        }
      },
      "9": {
        start: {
          line: 65,
          column: 2
        },
        end: {
          line: 65,
          column: 79
        }
      },
      "10": {
        start: {
          line: 66,
          column: 2
        },
        end: {
          line: 70,
          column: 4
        }
      },
      "11": {
        start: {
          line: 71,
          column: 2
        },
        end: {
          line: 75,
          column: 4
        }
      },
      "12": {
        start: {
          line: 76,
          column: 2
        },
        end: {
          line: 80,
          column: 4
        }
      },
      "13": {
        start: {
          line: 81,
          column: 2
        },
        end: {
          line: 85,
          column: 4
        }
      },
      "14": {
        start: {
          line: 87,
          column: 2
        },
        end: {
          line: 89,
          column: 3
        }
      },
      "15": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 88,
          column: 70
        }
      },
      "16": {
        start: {
          line: 90,
          column: 2
        },
        end: {
          line: 90,
          column: 42
        }
      },
      "17": {
        start: {
          line: 92,
          column: 2
        },
        end: {
          line: 175,
          column: 3
        }
      },
      "18": {
        start: {
          line: 93,
          column: 19
        },
        end: {
          line: 97,
          column: 5
        }
      },
      "19": {
        start: {
          line: 100,
          column: 20
        },
        end: {
          line: 100,
          column: 21
        }
      },
      "20": {
        start: {
          line: 102,
          column: 4
        },
        end: {
          line: 113,
          column: 5
        }
      },
      "21": {
        start: {
          line: 103,
          column: 6
        },
        end: {
          line: 105,
          column: 7
        }
      },
      "22": {
        start: {
          line: 104,
          column: 8
        },
        end: {
          line: 104,
          column: 66
        }
      },
      "23": {
        start: {
          line: 106,
          column: 21
        },
        end: {
          line: 108,
          column: 7
        }
      },
      "24": {
        start: {
          line: 111,
          column: 6
        },
        end: {
          line: 111,
          column: 62
        }
      },
      "25": {
        start: {
          line: 112,
          column: 6
        },
        end: {
          line: 112,
          column: 21
        }
      },
      "26": {
        start: {
          line: 115,
          column: 4
        },
        end: {
          line: 132,
          column: 5
        }
      },
      "27": {
        start: {
          line: 116,
          column: 6
        },
        end: {
          line: 118,
          column: 7
        }
      },
      "28": {
        start: {
          line: 117,
          column: 8
        },
        end: {
          line: 117,
          column: 74
        }
      },
      "29": {
        start: {
          line: 120,
          column: 6
        },
        end: {
          line: 127,
          column: 7
        }
      },
      "30": {
        start: {
          line: 126,
          column: 8
        },
        end: {
          line: 126,
          column: 69
        }
      },
      "31": {
        start: {
          line: 130,
          column: 6
        },
        end: {
          line: 130,
          column: 76
        }
      },
      "32": {
        start: {
          line: 131,
          column: 6
        },
        end: {
          line: 131,
          column: 21
        }
      },
      "33": {
        start: {
          line: 134,
          column: 4
        },
        end: {
          line: 151,
          column: 5
        }
      },
      "34": {
        start: {
          line: 135,
          column: 6
        },
        end: {
          line: 137,
          column: 7
        }
      },
      "35": {
        start: {
          line: 136,
          column: 8
        },
        end: {
          line: 136,
          column: 76
        }
      },
      "36": {
        start: {
          line: 139,
          column: 6
        },
        end: {
          line: 146,
          column: 7
        }
      },
      "37": {
        start: {
          line: 145,
          column: 8
        },
        end: {
          line: 145,
          column: 70
        }
      },
      "38": {
        start: {
          line: 149,
          column: 6
        },
        end: {
          line: 149,
          column: 73
        }
      },
      "39": {
        start: {
          line: 150,
          column: 6
        },
        end: {
          line: 150,
          column: 21
        }
      },
      "40": {
        start: {
          line: 153,
          column: 4
        },
        end: {
          line: 166,
          column: 5
        }
      },
      "41": {
        start: {
          line: 154,
          column: 6
        },
        end: {
          line: 156,
          column: 7
        }
      },
      "42": {
        start: {
          line: 155,
          column: 8
        },
        end: {
          line: 155,
          column: 70
        }
      },
      "43": {
        start: {
          line: 157,
          column: 21
        },
        end: {
          line: 159,
          column: 7
        }
      },
      "44": {
        start: {
          line: 161,
          column: 8
        },
        end: {
          line: 161,
          column: 60
        }
      },
      "45": {
        start: {
          line: 164,
          column: 6
        },
        end: {
          line: 164,
          column: 81
        }
      },
      "46": {
        start: {
          line: 165,
          column: 6
        },
        end: {
          line: 165,
          column: 21
        }
      },
      "47": {
        start: {
          line: 168,
          column: 4
        },
        end: {
          line: 172,
          column: 5
        }
      },
      "48": {
        start: {
          line: 169,
          column: 6
        },
        end: {
          line: 171,
          column: 8
        }
      },
      "49": {
        start: {
          line: 174,
          column: 4
        },
        end: {
          line: 174,
          column: 56
        }
      },
      "50": {
        start: {
          line: 177,
          column: 23
        },
        end: {
          line: 177,
          column: 55
        }
      },
      "51": {
        start: {
          line: 179,
          column: 23
        },
        end: {
          line: 179,
          column: 25
        }
      },
      "52": {
        start: {
          line: 180,
          column: 2
        },
        end: {
          line: 180,
          column: 65
        }
      },
      "53": {
        start: {
          line: 181,
          column: 2
        },
        end: {
          line: 181,
          column: 44
        }
      },
      "54": {
        start: {
          line: 183,
          column: 2
        },
        end: {
          line: 183,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "weightCheckFunction",
        decl: {
          start: {
            line: 7,
            column: 9
          },
          end: {
            line: 7,
            column: 28
          }
        },
        loc: {
          start: {
            line: 7,
            column: 42
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "setOptions",
        decl: {
          start: {
            line: 49,
            column: 16
          },
          end: {
            line: 49,
            column: 26
          }
        },
        loc: {
          start: {
            line: 49,
            column: 33
          },
          end: {
            line: 184,
            column: 1
          }
        },
        line: 49
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 10,
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
        line: 8
      },
      "1": {
        loc: {
          start: {
            line: 8,
            column: 6
          },
          end: {
            line: 8,
            column: 32
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 8,
            column: 6
          },
          end: {
            line: 8,
            column: 16
          }
        }, {
          start: {
            line: 8,
            column: 20
          },
          end: {
            line: 8,
            column: 32
          }
        }],
        line: 8
      },
      "2": {
        loc: {
          start: {
            line: 52,
            column: 2
          },
          end: {
            line: 59,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 52,
            column: 2
          },
          end: {
            line: 59,
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
        line: 52
      },
      "3": {
        loc: {
          start: {
            line: 53,
            column: 4
          },
          end: {
            line: 55,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 53,
            column: 4
          },
          end: {
            line: 55,
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
        line: 53
      },
      "4": {
        loc: {
          start: {
            line: 87,
            column: 2
          },
          end: {
            line: 89,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 87,
            column: 2
          },
          end: {
            line: 89,
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
        line: 87
      },
      "5": {
        loc: {
          start: {
            line: 87,
            column: 6
          },
          end: {
            line: 87,
            column: 74
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 87,
            column: 6
          },
          end: {
            line: 87,
            column: 35
          }
        }, {
          start: {
            line: 87,
            column: 39
          },
          end: {
            line: 87,
            column: 74
          }
        }],
        line: 87
      },
      "6": {
        loc: {
          start: {
            line: 92,
            column: 2
          },
          end: {
            line: 175,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 92,
            column: 2
          },
          end: {
            line: 175,
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
        line: 92
      },
      "7": {
        loc: {
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 113,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 113,
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
        line: 102
      },
      "8": {
        loc: {
          start: {
            line: 103,
            column: 6
          },
          end: {
            line: 105,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 103,
            column: 6
          },
          end: {
            line: 105,
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
        line: 103
      },
      "9": {
        loc: {
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 132,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 132,
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
        line: 115
      },
      "10": {
        loc: {
          start: {
            line: 116,
            column: 6
          },
          end: {
            line: 118,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 116,
            column: 6
          },
          end: {
            line: 118,
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
        line: 116
      },
      "11": {
        loc: {
          start: {
            line: 120,
            column: 6
          },
          end: {
            line: 127,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 120,
            column: 6
          },
          end: {
            line: 127,
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
        line: 120
      },
      "12": {
        loc: {
          start: {
            line: 122,
            column: 10
          },
          end: {
            line: 123,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 122,
            column: 10
          },
          end: {
            line: 122,
            column: 48
          }
        }, {
          start: {
            line: 123,
            column: 10
          },
          end: {
            line: 123,
            column: 45
          }
        }],
        line: 122
      },
      "13": {
        loc: {
          start: {
            line: 134,
            column: 4
          },
          end: {
            line: 151,
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
            line: 151,
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
      "14": {
        loc: {
          start: {
            line: 135,
            column: 6
          },
          end: {
            line: 137,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 135,
            column: 6
          },
          end: {
            line: 137,
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
        line: 135
      },
      "15": {
        loc: {
          start: {
            line: 139,
            column: 6
          },
          end: {
            line: 146,
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
            line: 146,
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
      "16": {
        loc: {
          start: {
            line: 141,
            column: 10
          },
          end: {
            line: 142,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 141,
            column: 10
          },
          end: {
            line: 141,
            column: 49
          }
        }, {
          start: {
            line: 142,
            column: 10
          },
          end: {
            line: 142,
            column: 46
          }
        }],
        line: 141
      },
      "17": {
        loc: {
          start: {
            line: 153,
            column: 4
          },
          end: {
            line: 166,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 153,
            column: 4
          },
          end: {
            line: 166,
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
        line: 153
      },
      "18": {
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
      "19": {
        loc: {
          start: {
            line: 168,
            column: 4
          },
          end: {
            line: 172,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 168,
            column: 4
          },
          end: {
            line: 172,
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
        line: 168
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
      "54": 0
    },
    f: {
      "0": 0,
      "1": 0
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
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1d9c06a20e1c17a57c7a12d088e8ecfa587249a6"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_goz36s7yg = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_goz36s7yg();
/* eslint-disable no-param-reassign */
function weightCheckFunction(value, name) {
  cov_goz36s7yg().f[0]++;
  cov_goz36s7yg().s[0]++;
  if ((cov_goz36s7yg().b[1][0]++, value >= 0) && (cov_goz36s7yg().b[1][1]++, value <= 255)) {
    cov_goz36s7yg().b[0][0]++;
    cov_goz36s7yg().s[1]++;
    return true;
  } else {
    cov_goz36s7yg().b[0][1]++;
  }
  cov_goz36s7yg().s[2]++;
  throw new Error("".concat(name, " value must be between 0 and 255"));
}

/**
 * Returns an XDR SetOptionsOp. A "set options" operations set or clear account flags,
 * set the account's inflation destination, and/or add new signers to the account.
 * The flags used in `opts.clearFlags` and `opts.setFlags` can be the following:
 *   - `{@link AuthRequiredFlag}`
 *   - `{@link AuthRevocableFlag}`
 *   - `{@link AuthImmutableFlag}`
 *   - `{@link AuthClawbackEnabledFlag}`
 *
 * It's possible to set/clear multiple flags at once using logical or.
 *
 * @function
 * @alias Operation.setOptions
 *
 * @param {object} opts Options object
 * @param {string} [opts.inflationDest] - Set this account ID as the account's inflation destination.
 * @param {(number|string)} [opts.clearFlags] - Bitmap integer for which account flags to clear.
 * @param {(number|string)} [opts.setFlags] - Bitmap integer for which account flags to set.
 * @param {number|string} [opts.masterWeight] - The master key weight.
 * @param {number|string} [opts.lowThreshold] - The sum weight for the low threshold.
 * @param {number|string} [opts.medThreshold] - The sum weight for the medium threshold.
 * @param {number|string} [opts.highThreshold] - The sum weight for the high threshold.
 * @param {object} [opts.signer] - Add or remove a signer from the account. The signer is
 *                                 deleted if the weight is 0. Only one of `dilithium2PublicKey`, `sha256Hash`, `preAuthTx` should be defined.
 * @param {string} [opts.signer.dilithium2PublicKey] - The dilithium2 public key of the signer.
 * @param {Buffer|string} [opts.signer.sha256Hash] - sha256 hash (Buffer or hex string) of preimage that will unlock funds. Preimage should be used as signature of future transaction.
 * @param {Buffer|string} [opts.signer.preAuthTx] - Hash (Buffer or hex string) of transaction that will unlock funds.
 * @param {string} [opts.signer.dilithium2SignedPayload] - Signed payload signer (dilithium2 public key + raw payload) for atomic transaction signature disclosure.
 * @param {number|string} [opts.signer.weight] - The weight of the new signer (0 to delete or 1-255)
 * @param {string} [opts.homeDomain] - sets the home domain used for reverse federation lookup.
 * @param {string} [opts.source] - The source account (defaults to transaction source).
 *
 * @returns {xdr.SetOptionsOp}  XDR operation
 * @see [Account flags](https://developers.stellar.org/docs/glossary/accounts/#flags)
 */
function setOptions(opts) {
  cov_goz36s7yg().f[1]++;
  var attributes = (cov_goz36s7yg().s[3]++, {});
  cov_goz36s7yg().s[4]++;
  if (opts.inflationDest) {
    cov_goz36s7yg().b[2][0]++;
    cov_goz36s7yg().s[5]++;
    if (!_strkey.StrKey.isValidDilithium2PublicKey(opts.inflationDest)) {
      cov_goz36s7yg().b[3][0]++;
      cov_goz36s7yg().s[6]++;
      throw new Error('inflationDest is invalid');
    } else {
      cov_goz36s7yg().b[3][1]++;
    }
    cov_goz36s7yg().s[7]++;
    attributes.inflationDest = _keypair.Keypair.fromPublicKey(opts.inflationDest).xdrAccountId();
  } else {
    cov_goz36s7yg().b[2][1]++;
  }
  cov_goz36s7yg().s[8]++;
  attributes.clearFlags = this._checkUnsignedIntValue('clearFlags', opts.clearFlags);
  cov_goz36s7yg().s[9]++;
  attributes.setFlags = this._checkUnsignedIntValue('setFlags', opts.setFlags);
  cov_goz36s7yg().s[10]++;
  attributes.masterWeight = this._checkUnsignedIntValue('masterWeight', opts.masterWeight, weightCheckFunction);
  cov_goz36s7yg().s[11]++;
  attributes.lowThreshold = this._checkUnsignedIntValue('lowThreshold', opts.lowThreshold, weightCheckFunction);
  cov_goz36s7yg().s[12]++;
  attributes.medThreshold = this._checkUnsignedIntValue('medThreshold', opts.medThreshold, weightCheckFunction);
  cov_goz36s7yg().s[13]++;
  attributes.highThreshold = this._checkUnsignedIntValue('highThreshold', opts.highThreshold, weightCheckFunction);
  cov_goz36s7yg().s[14]++;
  if ((cov_goz36s7yg().b[5][0]++, opts.homeDomain !== undefined) && (cov_goz36s7yg().b[5][1]++, typeof opts.homeDomain !== 'string')) {
    cov_goz36s7yg().b[4][0]++;
    cov_goz36s7yg().s[15]++;
    throw new TypeError('homeDomain argument must be of type String');
  } else {
    cov_goz36s7yg().b[4][1]++;
  }
  cov_goz36s7yg().s[16]++;
  attributes.homeDomain = opts.homeDomain;
  cov_goz36s7yg().s[17]++;
  if (opts.signer) {
    cov_goz36s7yg().b[6][0]++;
    var weight = (cov_goz36s7yg().s[18]++, this._checkUnsignedIntValue('signer.weight', opts.signer.weight, weightCheckFunction));
    var key;
    var setValues = (cov_goz36s7yg().s[19]++, 0);
    cov_goz36s7yg().s[20]++;
    if (opts.signer.dilithium2PublicKey) {
      cov_goz36s7yg().b[7][0]++;
      cov_goz36s7yg().s[21]++;
      if (!_strkey.StrKey.isValidDilithium2PublicKey(opts.signer.dilithium2PublicKey)) {
        cov_goz36s7yg().b[8][0]++;
        cov_goz36s7yg().s[22]++;
        throw new Error('signer.dilithium2PublicKey is invalid.');
      } else {
        cov_goz36s7yg().b[8][1]++;
      }
      var rawKey = (cov_goz36s7yg().s[23]++, _strkey.StrKey.decodeDilithium2PublicKey(opts.signer.dilithium2PublicKey));

      // eslint-disable-next-line new-cap
      cov_goz36s7yg().s[24]++;
      key = new _xdr["default"].SignerKey.signerKeyTypeDilithium2(rawKey);
      cov_goz36s7yg().s[25]++;
      setValues += 1;
    } else {
      cov_goz36s7yg().b[7][1]++;
    }
    cov_goz36s7yg().s[26]++;
    if (opts.signer.preAuthTx) {
      cov_goz36s7yg().b[9][0]++;
      cov_goz36s7yg().s[27]++;
      if (typeof opts.signer.preAuthTx === 'string') {
        cov_goz36s7yg().b[10][0]++;
        cov_goz36s7yg().s[28]++;
        opts.signer.preAuthTx = Buffer.from(opts.signer.preAuthTx, 'hex');
      } else {
        cov_goz36s7yg().b[10][1]++;
      }
      cov_goz36s7yg().s[29]++;
      if (!((cov_goz36s7yg().b[12][0]++, Buffer.isBuffer(opts.signer.preAuthTx)) && (cov_goz36s7yg().b[12][1]++, opts.signer.preAuthTx.length === 32))) {
        cov_goz36s7yg().b[11][0]++;
        cov_goz36s7yg().s[30]++;
        throw new Error('signer.preAuthTx must be 32 bytes Buffer.');
      } else {
        cov_goz36s7yg().b[11][1]++;
      }

      // eslint-disable-next-line new-cap
      cov_goz36s7yg().s[31]++;
      key = new _xdr["default"].SignerKey.signerKeyTypePreAuthTx(opts.signer.preAuthTx);
      cov_goz36s7yg().s[32]++;
      setValues += 1;
    } else {
      cov_goz36s7yg().b[9][1]++;
    }
    cov_goz36s7yg().s[33]++;
    if (opts.signer.sha256Hash) {
      cov_goz36s7yg().b[13][0]++;
      cov_goz36s7yg().s[34]++;
      if (typeof opts.signer.sha256Hash === 'string') {
        cov_goz36s7yg().b[14][0]++;
        cov_goz36s7yg().s[35]++;
        opts.signer.sha256Hash = Buffer.from(opts.signer.sha256Hash, 'hex');
      } else {
        cov_goz36s7yg().b[14][1]++;
      }
      cov_goz36s7yg().s[36]++;
      if (!((cov_goz36s7yg().b[16][0]++, Buffer.isBuffer(opts.signer.sha256Hash)) && (cov_goz36s7yg().b[16][1]++, opts.signer.sha256Hash.length === 32))) {
        cov_goz36s7yg().b[15][0]++;
        cov_goz36s7yg().s[37]++;
        throw new Error('signer.sha256Hash must be 32 bytes Buffer.');
      } else {
        cov_goz36s7yg().b[15][1]++;
      }

      // eslint-disable-next-line new-cap
      cov_goz36s7yg().s[38]++;
      key = new _xdr["default"].SignerKey.signerKeyTypeHashX(opts.signer.sha256Hash);
      cov_goz36s7yg().s[39]++;
      setValues += 1;
    } else {
      cov_goz36s7yg().b[13][1]++;
    }
    cov_goz36s7yg().s[40]++;
    if (opts.signer.dilithium2SignedPayload) {
      cov_goz36s7yg().b[17][0]++;
      cov_goz36s7yg().s[41]++;
      if (!_strkey.StrKey.isValidSignedPayload(opts.signer.dilithium2SignedPayload)) {
        cov_goz36s7yg().b[18][0]++;
        cov_goz36s7yg().s[42]++;
        throw new Error('signer.dilithium2SignedPayload is invalid.');
      } else {
        cov_goz36s7yg().b[18][1]++;
      }
      var _rawKey = (cov_goz36s7yg().s[43]++, _strkey.StrKey.decodeSignedPayload(opts.signer.dilithium2SignedPayload));
      var signedPayloadXdr = (cov_goz36s7yg().s[44]++, _xdr["default"].SignerKeyDilithium2SignedPayload.fromXDR(_rawKey));

      // eslint-disable-next-line new-cap
      cov_goz36s7yg().s[45]++;
      key = _xdr["default"].SignerKey.signerKeyTypeDilithium2SignedPayload(signedPayloadXdr);
      cov_goz36s7yg().s[46]++;
      setValues += 1;
    } else {
      cov_goz36s7yg().b[17][1]++;
    }
    cov_goz36s7yg().s[47]++;
    if (setValues !== 1) {
      cov_goz36s7yg().b[19][0]++;
      cov_goz36s7yg().s[48]++;
      throw new Error('Signer object must contain exactly one of signer.dilithium2PublicKey, signer.sha256Hash, signer.preAuthTx.');
    } else {
      cov_goz36s7yg().b[19][1]++;
    }
    cov_goz36s7yg().s[49]++;
    attributes.signer = new _xdr["default"].Signer({
      key: key,
      weight: weight
    });
  } else {
    cov_goz36s7yg().b[6][1]++;
  }
  var setOptionsOp = (cov_goz36s7yg().s[50]++, new _xdr["default"].SetOptionsOp(attributes));
  var opAttributes = (cov_goz36s7yg().s[51]++, {});
  cov_goz36s7yg().s[52]++;
  opAttributes.body = _xdr["default"].OperationBody.setOptions(setOptionsOp);
  cov_goz36s7yg().s[53]++;
  this.setSourceAccount(opAttributes, opts);
  cov_goz36s7yg().s[54]++;
  return new _xdr["default"].Operation(opAttributes);
}