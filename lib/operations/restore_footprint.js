"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restoreFootprint = restoreFootprint;
var _xdr = _interopRequireDefault(require("../xdr"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_2pkj2f0ami() {
  var path = "/mnt/g/stellar-base/src/operations/restore_footprint.js";
  var hash = "c342707c47efbc6afc62b78509097c397169ea9a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/operations/restore_footprint.js",
    statementMap: {
      "0": {
        start: {
          line: 27,
          column: 13
        },
        end: {
          line: 27,
          column: 75
        }
      },
      "1": {
        start: {
          line: 28,
          column: 23
        },
        end: {
          line: 30,
          column: 3
        }
      },
      "2": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 31,
          column: 50
        }
      },
      "3": {
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
        name: "restoreFootprint",
        decl: {
          start: {
            line: 26,
            column: 16
          },
          end: {
            line: 26,
            column: 32
          }
        },
        loc: {
          start: {
            line: 26,
            column: 44
          },
          end: {
            line: 33,
            column: 1
          }
        },
        line: 26
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 26,
            column: 33
          },
          end: {
            line: 26,
            column: 42
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 26,
            column: 40
          },
          end: {
            line: 26,
            column: 42
          }
        }],
        line: 26
      },
      "1": {
        loc: {
          start: {
            line: 31,
            column: 38
          },
          end: {
            line: 31,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 31,
            column: 38
          },
          end: {
            line: 31,
            column: 42
          }
        }, {
          start: {
            line: 31,
            column: 46
          },
          end: {
            line: 31,
            column: 48
          }
        }],
        line: 31
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c342707c47efbc6afc62b78509097c397169ea9a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2pkj2f0ami = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2pkj2f0ami();
/**
 * Builds an operation to restore the archived ledger entries specified
 * by the ledger keys.
 *
 * The ledger keys to restore are specified separately from the operation
 * in read-write footprint of the transaction.
 *
 * It takes no parameters because the relevant footprint is derived from the
 * transaction itself. See {@link TransactionBuilder}'s `opts.sorobanData`
 * parameter (or {@link TransactionBuilder.setSorobanData} /
 * {@link TransactionBuilder.setLedgerKeys}), which is a
 * {@link xdr.SorobanTransactionData} instance that contains fee data & resource
 * usage as part of {@link xdr.SorobanTransactionData}.
 *
 * @function
 * @alias Operation.restoreFootprint
 *
 * @param {object} [opts] - an optional set of parameters
 * @param {string} [opts.source] - an optional source account
 *
 * @returns {xdr.Operation} a Bump Footprint Expiration operation
 *    (xdr.RestoreFootprintOp)
 */
function restoreFootprint() {
  var _ref;
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_2pkj2f0ami().b[0][0]++, {});
  cov_2pkj2f0ami().f[0]++;
  var op = (cov_2pkj2f0ami().s[0]++, new _xdr["default"].RestoreFootprintOp({
    ext: new _xdr["default"].ExtensionPoint(0)
  }));
  var opAttributes = (cov_2pkj2f0ami().s[1]++, {
    body: _xdr["default"].OperationBody.restoreFootprint(op)
  });
  cov_2pkj2f0ami().s[2]++;
  this.setSourceAccount(opAttributes, (_ref = (cov_2pkj2f0ami().b[1][0]++, opts)) !== null && _ref !== void 0 ? _ref : (cov_2pkj2f0ami().b[1][1]++, {}));
  cov_2pkj2f0ami().s[3]++;
  return new _xdr["default"].Operation(opAttributes);
}