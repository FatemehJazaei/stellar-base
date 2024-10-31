"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.liquidityPoolDeposit = liquidityPoolDeposit;
var _xdr = _interopRequireDefault(require("../xdr"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_199b2i0yie() {
  var path = "/mnt/g/stellar-base/src/operations/liquidity_pool_deposit.js";
  var hash = "19bfd58bae86080365b28c207abcd0520dff7b20";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/operations/liquidity_pool_deposit.js",
    statementMap: {
      "0": {
        start: {
          line: 25,
          column: 74
        },
        end: {
          line: 25,
          column: 78
        }
      },
      "1": {
        start: {
          line: 26,
          column: 21
        },
        end: {
          line: 26,
          column: 23
        }
      },
      "2": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 30,
          column: 3
        }
      },
      "3": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 64
        }
      },
      "4": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 31,
          column: 74
        }
      },
      "5": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 35,
          column: 3
        }
      },
      "6": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 77
        }
      },
      "7": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 36,
          column: 56
        }
      },
      "8": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 40,
          column: 3
        }
      },
      "9": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 39,
          column: 77
        }
      },
      "10": {
        start: {
          line: 41,
          column: 2
        },
        end: {
          line: 41,
          column: 56
        }
      },
      "11": {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 45,
          column: 3
        }
      },
      "12": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 44,
          column: 57
        }
      },
      "13": {
        start: {
          line: 46,
          column: 2
        },
        end: {
          line: 46,
          column: 51
        }
      },
      "14": {
        start: {
          line: 48,
          column: 2
        },
        end: {
          line: 50,
          column: 3
        }
      },
      "15": {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 49,
          column: 57
        }
      },
      "16": {
        start: {
          line: 51,
          column: 2
        },
        end: {
          line: 51,
          column: 51
        }
      },
      "17": {
        start: {
          line: 53,
          column: 33
        },
        end: {
          line: 53,
          column: 75
        }
      },
      "18": {
        start: {
          line: 54,
          column: 23
        },
        end: {
          line: 56,
          column: 3
        }
      },
      "19": {
        start: {
          line: 57,
          column: 2
        },
        end: {
          line: 57,
          column: 44
        }
      },
      "20": {
        start: {
          line: 59,
          column: 2
        },
        end: {
          line: 59,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "liquidityPoolDeposit",
        decl: {
          start: {
            line: 24,
            column: 16
          },
          end: {
            line: 24,
            column: 36
          }
        },
        loc: {
          start: {
            line: 24,
            column: 48
          },
          end: {
            line: 60,
            column: 1
          }
        },
        line: 24
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 24,
            column: 37
          },
          end: {
            line: 24,
            column: 46
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 24,
            column: 44
          },
          end: {
            line: 24,
            column: 46
          }
        }],
        line: 24
      },
      "1": {
        loc: {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 30,
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
            line: 30,
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
        line: 28
      },
      "2": {
        loc: {
          start: {
            line: 33,
            column: 2
          },
          end: {
            line: 35,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 33,
            column: 2
          },
          end: {
            line: 35,
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
        line: 33
      },
      "3": {
        loc: {
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 40,
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
            line: 40,
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
        line: 38
      },
      "4": {
        loc: {
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 45,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 45,
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
        line: 43
      },
      "5": {
        loc: {
          start: {
            line: 48,
            column: 2
          },
          end: {
            line: 50,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 48,
            column: 2
          },
          end: {
            line: 50,
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
        line: 48
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
      "0": [0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "19bfd58bae86080365b28c207abcd0520dff7b20"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_199b2i0yie = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_199b2i0yie();
/**
 * Creates a liquidity pool deposit operation.
 *
 * @function
 * @alias Operation.liquidityPoolDeposit
 * @see https://developers.stellar.org/docs/start/list-of-operations/#liquidity-pool-deposit
 *
 * @param {object} opts - Options object
 * @param {string} opts.liquidityPoolId - The liquidity pool ID.
 * @param {string} opts.maxAmountA - Maximum amount of first asset to deposit.
 * @param {string} opts.maxAmountB - Maximum amount of second asset to deposit.
 * @param {number|string|BigNumber|Object} opts.minPrice -  Minimum depositA/depositB price.
 * @param {number} opts.minPrice.n - If `opts.minPrice` is an object: the price numerator
 * @param {number} opts.minPrice.d - If `opts.minPrice` is an object: the price denominator
 * @param {number|string|BigNumber|Object} opts.maxPrice -  Maximum depositA/depositB price.
 * @param {number} opts.maxPrice.n - If `opts.maxPrice` is an object: the price numerator
 * @param {number} opts.maxPrice.d - If `opts.maxPrice` is an object: the price denominator
 * @param {string} [opts.source] - The source account for the operation. Defaults to the transaction's source account.
 *
 * @returns {xdr.Operation} The resulting operation (xdr.LiquidityPoolDepositOp).
 */
function liquidityPoolDeposit() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_199b2i0yie().b[0][0]++, {});
  cov_199b2i0yie().f[0]++;
  var _ref = (cov_199b2i0yie().s[0]++, opts),
    liquidityPoolId = _ref.liquidityPoolId,
    maxAmountA = _ref.maxAmountA,
    maxAmountB = _ref.maxAmountB,
    minPrice = _ref.minPrice,
    maxPrice = _ref.maxPrice;
  var attributes = (cov_199b2i0yie().s[1]++, {});
  cov_199b2i0yie().s[2]++;
  if (!liquidityPoolId) {
    cov_199b2i0yie().b[1][0]++;
    cov_199b2i0yie().s[3]++;
    throw new TypeError('liquidityPoolId argument is required');
  } else {
    cov_199b2i0yie().b[1][1]++;
  }
  cov_199b2i0yie().s[4]++;
  attributes.liquidityPoolId = _xdr["default"].PoolId.fromXDR(liquidityPoolId, 'hex');
  cov_199b2i0yie().s[5]++;
  if (!this.isValidAmount(maxAmountA, true)) {
    cov_199b2i0yie().b[2][0]++;
    cov_199b2i0yie().s[6]++;
    throw new TypeError(this.constructAmountRequirementsError('maxAmountA'));
  } else {
    cov_199b2i0yie().b[2][1]++;
  }
  cov_199b2i0yie().s[7]++;
  attributes.maxAmountA = this._toXDRAmount(maxAmountA);
  cov_199b2i0yie().s[8]++;
  if (!this.isValidAmount(maxAmountB, true)) {
    cov_199b2i0yie().b[3][0]++;
    cov_199b2i0yie().s[9]++;
    throw new TypeError(this.constructAmountRequirementsError('maxAmountB'));
  } else {
    cov_199b2i0yie().b[3][1]++;
  }
  cov_199b2i0yie().s[10]++;
  attributes.maxAmountB = this._toXDRAmount(maxAmountB);
  cov_199b2i0yie().s[11]++;
  if (minPrice === undefined) {
    cov_199b2i0yie().b[4][0]++;
    cov_199b2i0yie().s[12]++;
    throw new TypeError('minPrice argument is required');
  } else {
    cov_199b2i0yie().b[4][1]++;
  }
  cov_199b2i0yie().s[13]++;
  attributes.minPrice = this._toXDRPrice(minPrice);
  cov_199b2i0yie().s[14]++;
  if (maxPrice === undefined) {
    cov_199b2i0yie().b[5][0]++;
    cov_199b2i0yie().s[15]++;
    throw new TypeError('maxPrice argument is required');
  } else {
    cov_199b2i0yie().b[5][1]++;
  }
  cov_199b2i0yie().s[16]++;
  attributes.maxPrice = this._toXDRPrice(maxPrice);
  var liquidityPoolDepositOp = (cov_199b2i0yie().s[17]++, new _xdr["default"].LiquidityPoolDepositOp(attributes));
  var opAttributes = (cov_199b2i0yie().s[18]++, {
    body: _xdr["default"].OperationBody.liquidityPoolDeposit(liquidityPoolDepositOp)
  });
  cov_199b2i0yie().s[19]++;
  this.setSourceAccount(opAttributes, opts);
  cov_199b2i0yie().s[20]++;
  return new _xdr["default"].Operation(opAttributes);
}