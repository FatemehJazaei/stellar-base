"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendFootprintTtl = extendFootprintTtl;
var _xdr = _interopRequireDefault(require("../xdr"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_2ja87yiq3j() {
  var path = "/mnt/g/stellar-base/src/operations/extend_footprint_ttl.js";
  var hash = "021133dc7c515f25b64e24aed382c971b8aea126";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/operations/extend_footprint_ttl.js",
    statementMap: {
      "0": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 36,
          column: 3
        }
      },
      "1": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 56
        }
      },
      "2": {
        start: {
          line: 38,
          column: 28
        },
        end: {
          line: 41,
          column: 4
        }
      },
      "3": {
        start: {
          line: 43,
          column: 23
        },
        end: {
          line: 45,
          column: 3
        }
      },
      "4": {
        start: {
          line: 46,
          column: 2
        },
        end: {
          line: 46,
          column: 44
        }
      },
      "5": {
        start: {
          line: 48,
          column: 2
        },
        end: {
          line: 48,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "extendFootprintTtl",
        decl: {
          start: {
            line: 33,
            column: 16
          },
          end: {
            line: 33,
            column: 34
          }
        },
        loc: {
          start: {
            line: 33,
            column: 41
          },
          end: {
            line: 49,
            column: 1
          }
        },
        line: 33
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 34,
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
            line: 34,
            column: 2
          },
          end: {
            line: 36,
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
        line: 34
      },
      "1": {
        loc: {
          start: {
            line: 34,
            column: 7
          },
          end: {
            line: 34,
            column: 26
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 34,
            column: 7
          },
          end: {
            line: 34,
            column: 20
          }
        }, {
          start: {
            line: 34,
            column: 24
          },
          end: {
            line: 34,
            column: 26
          }
        }],
        line: 34
      }
    },
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
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "021133dc7c515f25b64e24aed382c971b8aea126"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ja87yiq3j = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2ja87yiq3j();
/**
 * Builds an operation to bump the time-to-live (TTL) of the ledger keys. The
 * keys for extension have to be provided in the read-only footprint of
 * the transaction.
 *
 * The only parameter of the operation itself is the new minimum TTL for
 * all the provided entries. If an entry already has a higher TTL, then it
 * will just be skipped.
 *
 * TTL is the number of ledgers from the current ledger (exclusive) until
 * the last ledger the entry is still considered alive (inclusive). Thus
 * the exact ledger until the entries will live will only be determined
 * when transaction has been applied.
 *
 * The footprint has to be specified in the transaction. See
 * {@link TransactionBuilder}'s `opts.sorobanData` parameter, which is a
 * {@link xdr.SorobanTransactionData} instance that contains fee data & resource
 * usage as part of {@link xdr.SorobanResources}.
 *
 * @function
 * @alias Operation.extendFootprintTtl
 *
 * @param {object} opts - object holding operation parameters
 * @param {number} opts.extendTo - the minimum TTL that all the entries in
 *    the read-only footprint will have
 * @param {string} [opts.source] - an optional source account
 *
 * @returns {xdr.Operation} an Extend Footprint TTL operation
 *    (xdr.ExtendFootprintTTLOp)
 */
function extendFootprintTtl(opts) {
  var _ref;
  cov_2ja87yiq3j().f[0]++;
  cov_2ja87yiq3j().s[0]++;
  if (((_ref = (cov_2ja87yiq3j().b[1][0]++, opts.extendTo)) !== null && _ref !== void 0 ? _ref : (cov_2ja87yiq3j().b[1][1]++, -1)) <= 0) {
    cov_2ja87yiq3j().b[0][0]++;
    cov_2ja87yiq3j().s[1]++;
    throw new RangeError('extendTo has to be positive');
  } else {
    cov_2ja87yiq3j().b[0][1]++;
  }
  var extendFootprintOp = (cov_2ja87yiq3j().s[2]++, new _xdr["default"].ExtendFootprintTtlOp({
    ext: new _xdr["default"].ExtensionPoint(0),
    extendTo: opts.extendTo
  }));
  var opAttributes = (cov_2ja87yiq3j().s[3]++, {
    body: _xdr["default"].OperationBody.extendFootprintTtl(extendFootprintOp)
  });
  cov_2ja87yiq3j().s[4]++;
  this.setSourceAccount(opAttributes, opts);
  cov_2ja87yiq3j().s[5]++;
  return new _xdr["default"].Operation(opAttributes);
}