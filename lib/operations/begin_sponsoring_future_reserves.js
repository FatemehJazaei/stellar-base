"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.beginSponsoringFutureReserves = beginSponsoringFutureReserves;
var _xdr = _interopRequireDefault(require("../xdr"));
var _strkey = require("../strkey");
var _keypair = require("../keypair");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_28tfkeepta() {
  var path = "/mnt/g/stellar-base/src/operations/begin_sponsoring_future_reserves.js";
  var hash = "ba4aaab9c297bae5265a3594d9979ae215391f2c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/operations/begin_sponsoring_future_reserves.js",
    statementMap: {
      "0": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 23,
          column: 3
        }
      },
      "1": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 46
        }
      },
      "2": {
        start: {
          line: 24,
          column: 13
        },
        end: {
          line: 26,
          column: 4
        }
      },
      "3": {
        start: {
          line: 28,
          column: 23
        },
        end: {
          line: 28,
          column: 25
        }
      },
      "4": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 74
        }
      },
      "5": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 30,
          column: 44
        }
      },
      "6": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 32,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "beginSponsoringFutureReserves",
        decl: {
          start: {
            line: 20,
            column: 16
          },
          end: {
            line: 20,
            column: 45
          }
        },
        loc: {
          start: {
            line: 20,
            column: 57
          },
          end: {
            line: 33,
            column: 1
          }
        },
        line: 20
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 20,
            column: 46
          },
          end: {
            line: 20,
            column: 55
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 20,
            column: 53
          },
          end: {
            line: 20,
            column: 55
          }
        }],
        line: 20
      },
      "1": {
        loc: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 23,
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
        line: 21
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ba4aaab9c297bae5265a3594d9979ae215391f2c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_28tfkeepta = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_28tfkeepta();
/**
 * Create a "begin sponsoring future reserves" operation.
 * @function
 * @alias Operation.beginSponsoringFutureReserves
 * @param {object} opts Options object
 * @param {string} opts.sponsoredId - The sponsored account id.
 * @param {string} [opts.source] - The source account for the operation. Defaults to the transaction's source account.
 * @returns {xdr.Operation} xdr operation
 *
 * @example
 * const op = Operation.beginSponsoringFutureReserves({
 *   sponsoredId: 'GDGU5OAPHNPU5UCLE5RDJHG7PXZFQYWKCFOEXSXNMR6KRQRI5T6XXCD7'
 * });
 *
 */
function beginSponsoringFutureReserves() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_28tfkeepta().b[0][0]++, {});
  cov_28tfkeepta().f[0]++;
  cov_28tfkeepta().s[0]++;
  if (!_strkey.StrKey.isValidDilithium2PublicKey(opts.sponsoredId)) {
    cov_28tfkeepta().b[1][0]++;
    cov_28tfkeepta().s[1]++;
    throw new Error('sponsoredId is invalid');
  } else {
    cov_28tfkeepta().b[1][1]++;
  }
  var op = (cov_28tfkeepta().s[2]++, new _xdr["default"].BeginSponsoringFutureReservesOp({
    sponsoredId: _keypair.Keypair.fromPublicKey(opts.sponsoredId).xdrAccountId()
  }));
  var opAttributes = (cov_28tfkeepta().s[3]++, {});
  cov_28tfkeepta().s[4]++;
  opAttributes.body = _xdr["default"].OperationBody.beginSponsoringFutureReserves(op);
  cov_28tfkeepta().s[5]++;
  this.setSourceAccount(opAttributes, opts);
  cov_28tfkeepta().s[6]++;
  return new _xdr["default"].Operation(opAttributes);
}