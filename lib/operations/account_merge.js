"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accountMerge = accountMerge;
var _xdr = _interopRequireDefault(require("../xdr"));
var _decode_encode_muxed_account = require("../util/decode_encode_muxed_account");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_2od0blool3() {
  var path = "/mnt/g/stellar-base/src/operations/account_merge.js";
  var hash = "e0336e50907a53c224dd57335cb90e2f3d35c5e5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/operations/account_merge.js",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 23
        },
        end: {
          line: 18,
          column: 25
        }
      },
      "1": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 25,
          column: 3
        }
      },
      "2": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 22,
          column: 6
        }
      },
      "3": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 46
        }
      },
      "4": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 44
        }
      },
      "5": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "accountMerge",
        decl: {
          start: {
            line: 17,
            column: 16
          },
          end: {
            line: 17,
            column: 28
          }
        },
        loc: {
          start: {
            line: 17,
            column: 35
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 17
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e0336e50907a53c224dd57335cb90e2f3d35c5e5"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2od0blool3 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2od0blool3();
/**
 * Transfers native balance to destination account.
 *
 * @function
 * @alias Operation.accountMerge
 *
 * @param {object} opts - options object
 * @param {string} opts.destination - destination to merge the source account into
 * @param {string} [opts.source]    - operation source account (defaults to
 *     transaction source)
 *
 * @returns {xdr.Operation} an Account Merge operation (xdr.AccountMergeOp)
 */
function accountMerge(opts) {
  cov_2od0blool3().f[0]++;
  var opAttributes = (cov_2od0blool3().s[0]++, {});
  cov_2od0blool3().s[1]++;
  try {
    cov_2od0blool3().s[2]++;
    opAttributes.body = _xdr["default"].OperationBody.accountMerge((0, _decode_encode_muxed_account.decodeAddressToMuxedAccount)(opts.destination));
  } catch (e) {
    cov_2od0blool3().s[3]++;
    throw new Error('destination is invalid');
  }
  cov_2od0blool3().s[4]++;
  this.setSourceAccount(opAttributes, opts);
  cov_2od0blool3().s[5]++;
  return new _xdr["default"].Operation(opAttributes);
}