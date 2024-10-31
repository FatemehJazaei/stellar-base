"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allowTrust = allowTrust;
var _xdr = _interopRequireDefault(require("../xdr"));
var _keypair = require("../keypair");
var _strkey = require("../strkey");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_2hw5860bf2() {
  var path = "/mnt/g/stellar-base/src/operations/allow_trust.js";
  var hash = "1e2eb7aa8a63ea3d3cb42a3071004ccfd89b5172";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/operations/allow_trust.js",
    statementMap: {
      "0": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 25,
          column: 3
        }
      },
      "1": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 42
        }
      },
      "2": {
        start: {
          line: 26,
          column: 21
        },
        end: {
          line: 26,
          column: 23
        }
      },
      "3": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 27,
          column: 74
        }
      },
      "4": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 36,
          column: 3
        }
      },
      "5": {
        start: {
          line: 29,
          column: 17
        },
        end: {
          line: 29,
          column: 47
        }
      },
      "6": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 68
        }
      },
      "7": {
        start: {
          line: 31,
          column: 9
        },
        end: {
          line: 36,
          column: 3
        }
      },
      "8": {
        start: {
          line: 32,
          column: 17
        },
        end: {
          line: 32,
          column: 48
        }
      },
      "9": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 69
        }
      },
      "10": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 64
        }
      },
      "11": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 46,
          column: 3
        }
      },
      "12": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 43,
          column: 5
        }
      },
      "13": {
        start: {
          line: 40,
          column: 6
        },
        end: {
          line: 40,
          column: 71
        }
      },
      "14": {
        start: {
          line: 42,
          column: 6
        },
        end: {
          line: 42,
          column: 31
        }
      },
      "15": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 42
        }
      },
      "16": {
        start: {
          line: 48,
          column: 23
        },
        end: {
          line: 48,
          column: 55
        }
      },
      "17": {
        start: {
          line: 50,
          column: 23
        },
        end: {
          line: 50,
          column: 25
        }
      },
      "18": {
        start: {
          line: 51,
          column: 2
        },
        end: {
          line: 51,
          column: 65
        }
      },
      "19": {
        start: {
          line: 52,
          column: 2
        },
        end: {
          line: 52,
          column: 44
        }
      },
      "20": {
        start: {
          line: 54,
          column: 2
        },
        end: {
          line: 54,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "allowTrust",
        decl: {
          start: {
            line: 22,
            column: 16
          },
          end: {
            line: 22,
            column: 26
          }
        },
        loc: {
          start: {
            line: 22,
            column: 33
          },
          end: {
            line: 55,
            column: 1
          }
        },
        line: 22
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 25,
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
        line: 23
      },
      "1": {
        loc: {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 36,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 36,
            column: 3
          }
        }, {
          start: {
            line: 31,
            column: 9
          },
          end: {
            line: 36,
            column: 3
          }
        }],
        line: 28
      },
      "2": {
        loc: {
          start: {
            line: 31,
            column: 9
          },
          end: {
            line: 36,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 9
          },
          end: {
            line: 36,
            column: 3
          }
        }, {
          start: {
            line: 34,
            column: 9
          },
          end: {
            line: 36,
            column: 3
          }
        }],
        line: 31
      },
      "3": {
        loc: {
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 46,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 46,
            column: 3
          }
        }, {
          start: {
            line: 44,
            column: 9
          },
          end: {
            line: 46,
            column: 3
          }
        }],
        line: 38
      },
      "4": {
        loc: {
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 43,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 43,
            column: 5
          }
        }, {
          start: {
            line: 41,
            column: 11
          },
          end: {
            line: 43,
            column: 5
          }
        }],
        line: 39
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
      "20": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1e2eb7aa8a63ea3d3cb42a3071004ccfd89b5172"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2hw5860bf2 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2hw5860bf2();
/**
 * @deprecated since v5.0
 *
 * Returns an XDR AllowTrustOp. An "allow trust" operation authorizes another
 * account to hold your account's credit for a given asset.
 *
 * @function
 * @alias Operation.allowTrust
 *
 * @param {object} opts Options object
 * @param {string} opts.trustor - The trusting account (the one being authorized)
 * @param {string} opts.assetCode - The asset code being authorized.
 * @param {(0|1|2)} opts.authorize - `1` to authorize, `2` to authorize to maintain liabilities, and `0` to deauthorize.
 * @param {string} [opts.source] - The source account (defaults to transaction source).
 *
 * @returns {xdr.AllowTrustOp} Allow Trust operation
 */
function allowTrust(opts) {
  cov_2hw5860bf2().f[0]++;
  cov_2hw5860bf2().s[0]++;
  if (!_strkey.StrKey.isValidDilithium2PublicKey(opts.trustor)) {
    cov_2hw5860bf2().b[0][0]++;
    cov_2hw5860bf2().s[1]++;
    throw new Error('trustor is invalid');
  } else {
    cov_2hw5860bf2().b[0][1]++;
  }
  var attributes = (cov_2hw5860bf2().s[2]++, {});
  cov_2hw5860bf2().s[3]++;
  attributes.trustor = _keypair.Keypair.fromPublicKey(opts.trustor).xdrAccountId();
  cov_2hw5860bf2().s[4]++;
  if (opts.assetCode.length <= 4) {
    cov_2hw5860bf2().b[1][0]++;
    var code = (cov_2hw5860bf2().s[5]++, opts.assetCode.padEnd(4, '\0'));
    cov_2hw5860bf2().s[6]++;
    attributes.asset = _xdr["default"].AssetCode.assetTypeCreditAlphanum4(code);
  } else {
    cov_2hw5860bf2().b[1][1]++;
    cov_2hw5860bf2().s[7]++;
    if (opts.assetCode.length <= 12) {
      cov_2hw5860bf2().b[2][0]++;
      var _code = (cov_2hw5860bf2().s[8]++, opts.assetCode.padEnd(12, '\0'));
      cov_2hw5860bf2().s[9]++;
      attributes.asset = _xdr["default"].AssetCode.assetTypeCreditAlphanum12(_code);
    } else {
      cov_2hw5860bf2().b[2][1]++;
      cov_2hw5860bf2().s[10]++;
      throw new Error('Asset code must be 12 characters at max.');
    }
  }
  cov_2hw5860bf2().s[11]++;
  if (typeof opts.authorize === 'boolean') {
    cov_2hw5860bf2().b[3][0]++;
    cov_2hw5860bf2().s[12]++;
    if (opts.authorize) {
      cov_2hw5860bf2().b[4][0]++;
      cov_2hw5860bf2().s[13]++;
      attributes.authorize = _xdr["default"].TrustLineFlags.authorizedFlag().value;
    } else {
      cov_2hw5860bf2().b[4][1]++;
      cov_2hw5860bf2().s[14]++;
      attributes.authorize = 0;
    }
  } else {
    cov_2hw5860bf2().b[3][1]++;
    cov_2hw5860bf2().s[15]++;
    attributes.authorize = opts.authorize;
  }
  var allowTrustOp = (cov_2hw5860bf2().s[16]++, new _xdr["default"].AllowTrustOp(attributes));
  var opAttributes = (cov_2hw5860bf2().s[17]++, {});
  cov_2hw5860bf2().s[18]++;
  opAttributes.body = _xdr["default"].OperationBody.allowTrust(allowTrustOp);
  cov_2hw5860bf2().s[19]++;
  this.setSourceAccount(opAttributes, opts);
  cov_2hw5860bf2().s[20]++;
  return new _xdr["default"].Operation(opAttributes);
}