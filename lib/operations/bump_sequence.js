"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bumpSequence = bumpSequence;
var _jsXdr = require("@stellar/js-xdr");
var _bignumber = _interopRequireDefault(require("../util/bignumber"));
var _xdr = _interopRequireDefault(require("../xdr"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_10zqg3i4x6() {
  var path = "/mnt/g/stellar-base/src/operations/bump_sequence.js";
  var hash = "ad2953bc2c6bfba5223e5c38c0c95adfff72ad09";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/operations/bump_sequence.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 21
        },
        end: {
          line: 15,
          column: 23
        }
      },
      "1": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 19,
          column: 3
        }
      },
      "2": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 47
        }
      },
      "3": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 26,
          column: 3
        }
      },
      "4": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 31
        }
      },
      "5": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 59
        }
      },
      "6": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 52
        }
      },
      "7": {
        start: {
          line: 30,
          column: 25
        },
        end: {
          line: 30,
          column: 59
        }
      },
      "8": {
        start: {
          line: 32,
          column: 23
        },
        end: {
          line: 32,
          column: 25
        }
      },
      "9": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 33,
          column: 69
        }
      },
      "10": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 34,
          column: 44
        }
      },
      "11": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 36,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "bumpSequence",
        decl: {
          start: {
            line: 14,
            column: 16
          },
          end: {
            line: 14,
            column: 28
          }
        },
        loc: {
          start: {
            line: 14,
            column: 35
          },
          end: {
            line: 37,
            column: 1
          }
        },
        line: 14
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 19,
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
        line: 17
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
      "11": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ad2953bc2c6bfba5223e5c38c0c95adfff72ad09"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_10zqg3i4x6 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_10zqg3i4x6();
/**
 * This operation bumps sequence number.
 * @function
 * @alias Operation.bumpSequence
 * @param {object} opts Options object
 * @param {string} opts.bumpTo - Sequence number to bump to.
 * @param {string} [opts.source] - The optional source account.
 * @returns {xdr.BumpSequenceOp} Operation
 */
function bumpSequence(opts) {
  cov_10zqg3i4x6().f[0]++;
  var attributes = (cov_10zqg3i4x6().s[0]++, {});
  cov_10zqg3i4x6().s[1]++;
  if (typeof opts.bumpTo !== 'string') {
    cov_10zqg3i4x6().b[0][0]++;
    cov_10zqg3i4x6().s[2]++;
    throw new Error('bumpTo must be a string');
  } else {
    cov_10zqg3i4x6().b[0][1]++;
  }
  cov_10zqg3i4x6().s[3]++;
  try {
    cov_10zqg3i4x6().s[4]++;
    // eslint-disable-next-line no-new
    new _bignumber["default"](opts.bumpTo);
  } catch (e) {
    cov_10zqg3i4x6().s[5]++;
    throw new Error('bumpTo must be a stringified number');
  }
  cov_10zqg3i4x6().s[6]++;
  attributes.bumpTo = _jsXdr.Hyper.fromString(opts.bumpTo);
  var bumpSequenceOp = (cov_10zqg3i4x6().s[7]++, new _xdr["default"].BumpSequenceOp(attributes));
  var opAttributes = (cov_10zqg3i4x6().s[8]++, {});
  cov_10zqg3i4x6().s[9]++;
  opAttributes.body = _xdr["default"].OperationBody.bumpSequence(bumpSequenceOp);
  cov_10zqg3i4x6().s[10]++;
  this.setSourceAccount(opAttributes, opts);
  cov_10zqg3i4x6().s[11]++;
  return new _xdr["default"].Operation(opAttributes);
}