"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inflation = inflation;
var _xdr = _interopRequireDefault(require("../xdr"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_kjwoa18hm() {
  var path = "/mnt/g/stellar-base/src/operations/inflation.js";
  var hash = "b31876b7d6c0f584d3f9f115cd6484a2d1408786";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/operations/inflation.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 23
        },
        end: {
          line: 12,
          column: 25
        }
      },
      "1": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 52
        }
      },
      "2": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 44
        }
      },
      "3": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 15,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "inflation",
        decl: {
          start: {
            line: 11,
            column: 16
          },
          end: {
            line: 11,
            column: 25
          }
        },
        loc: {
          start: {
            line: 11,
            column: 37
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 11
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 26
          },
          end: {
            line: 11,
            column: 35
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 11,
            column: 33
          },
          end: {
            line: 11,
            column: 35
          }
        }],
        line: 11
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
      "0": [0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b31876b7d6c0f584d3f9f115cd6484a2d1408786"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_kjwoa18hm = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_kjwoa18hm();
/**
 * This operation generates the inflation.
 * @function
 * @alias Operation.inflation
 * @param {object} [opts] Options object
 * @param {string} [opts.source] - The optional source account.
 * @returns {xdr.InflationOp} Inflation operation
 */
function inflation() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_kjwoa18hm().b[0][0]++, {});
  cov_kjwoa18hm().f[0]++;
  var opAttributes = (cov_kjwoa18hm().s[0]++, {});
  cov_kjwoa18hm().s[1]++;
  opAttributes.body = _xdr["default"].OperationBody.inflation();
  cov_kjwoa18hm().s[2]++;
  this.setSourceAccount(opAttributes, opts);
  cov_kjwoa18hm().s[3]++;
  return new _xdr["default"].Operation(opAttributes);
}