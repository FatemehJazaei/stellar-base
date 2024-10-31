"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LiquidityPoolFeeV18 = void 0;
exports.getLiquidityPoolId = getLiquidityPoolId;
var _xdr = _interopRequireDefault(require("./xdr"));
var _asset = require("./asset");
var _hashing = require("./hashing");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_u3wxpzh00() {
  var path = "/mnt/g/stellar-base/src/get_liquidity_pool_id.js";
  var hash = "891043586556fa045946b8347f17bb0038d58ff1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/get_liquidity_pool_id.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 35
        },
        end: {
          line: 6,
          column: 37
        }
      },
      "1": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 28,
          column: 3
        }
      },
      "2": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 52
        }
      },
      "3": {
        start: {
          line: 30,
          column: 34
        },
        end: {
          line: 30,
          column: 57
        }
      },
      "4": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 33,
          column: 3
        }
      },
      "5": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 41
        }
      },
      "6": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 36,
          column: 3
        }
      },
      "7": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 41
        }
      },
      "8": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 39,
          column: 3
        }
      },
      "9": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
          column: 38
        }
      },
      "10": {
        start: {
          line: 41,
          column: 2
        },
        end: {
          line: 43,
          column: 3
        }
      },
      "11": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 61
        }
      },
      "12": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 64
        }
      },
      "13": {
        start: {
          line: 47,
          column: 23
        },
        end: {
          line: 51,
          column: 12
        }
      },
      "14": {
        start: {
          line: 52,
          column: 18
        },
        end: {
          line: 52,
          column: 59
        }
      },
      "15": {
        start: {
          line: 53,
          column: 2
        },
        end: {
          line: 53,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "getLiquidityPoolId",
        decl: {
          start: {
            line: 22,
            column: 16
          },
          end: {
            line: 22,
            column: 34
          }
        },
        loc: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 54,
            column: 1
          }
        },
        line: 25
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 24,
            column: 30
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 24,
            column: 28
          },
          end: {
            line: 24,
            column: 30
          }
        }],
        line: 24
      },
      "1": {
        loc: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 28,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 28,
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
        line: 26
      },
      "2": {
        loc: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 33,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 33,
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
        line: 31
      },
      "3": {
        loc: {
          start: {
            line: 31,
            column: 6
          },
          end: {
            line: 31,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 31,
            column: 6
          },
          end: {
            line: 31,
            column: 13
          }
        }, {
          start: {
            line: 31,
            column: 17
          },
          end: {
            line: 31,
            column: 43
          }
        }],
        line: 31
      },
      "4": {
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
      "5": {
        loc: {
          start: {
            line: 34,
            column: 6
          },
          end: {
            line: 34,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 34,
            column: 6
          },
          end: {
            line: 34,
            column: 13
          }
        }, {
          start: {
            line: 34,
            column: 17
          },
          end: {
            line: 34,
            column: 43
          }
        }],
        line: 34
      },
      "6": {
        loc: {
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 39,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 39,
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
        line: 37
      },
      "7": {
        loc: {
          start: {
            line: 37,
            column: 6
          },
          end: {
            line: 37,
            column: 41
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 37,
            column: 6
          },
          end: {
            line: 37,
            column: 10
          }
        }, {
          start: {
            line: 37,
            column: 14
          },
          end: {
            line: 37,
            column: 41
          }
        }],
        line: 37
      },
      "8": {
        loc: {
          start: {
            line: 41,
            column: 2
          },
          end: {
            line: 43,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 41,
            column: 2
          },
          end: {
            line: 43,
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
        line: 41
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
      "15": 0
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
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "891043586556fa045946b8347f17bb0038d58ff1"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_u3wxpzh00 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_u3wxpzh00();
// LiquidityPoolFeeV18 is the default liquidity pool fee in protocol v18. It defaults to 30 base points (0.3%).
var LiquidityPoolFeeV18 = exports.LiquidityPoolFeeV18 = (cov_u3wxpzh00().s[0]++, 30);

/**
 * getLiquidityPoolId computes the Pool ID for the given assets, fee and pool type.
 *
 * @see [stellar-core getPoolID](https://github.com/stellar/stellar-core/blob/9f3a48c6a8f1aa77b6043a055d0638661f718080/src/ledger/test/LedgerTxnTests.cpp#L3746-L3751)
 *
 * @export
 * @param {string} liquidityPoolType – A string representing the liquidity pool type.
 * @param {object} liquidityPoolParameters        – The liquidity pool parameters.
 * @param {Asset}  liquidityPoolParameters.assetA – The first asset in the Pool, it must respect the rule assetA < assetB.
 * @param {Asset}  liquidityPoolParameters.assetB – The second asset in the Pool, it must respect the rule assetA < assetB.
 * @param {number} liquidityPoolParameters.fee    – The liquidity pool fee. For now the only fee supported is `30`.
 *
 * @return {Buffer} the raw Pool ID buffer, which can be stringfied with `toString('hex')`
 */
function getLiquidityPoolId(liquidityPoolType) {
  var liquidityPoolParameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_u3wxpzh00().b[0][0]++, {});
  cov_u3wxpzh00().f[0]++;
  cov_u3wxpzh00().s[1]++;
  if (liquidityPoolType !== 'constant_product') {
    cov_u3wxpzh00().b[1][0]++;
    cov_u3wxpzh00().s[2]++;
    throw new Error('liquidityPoolType is invalid');
  } else {
    cov_u3wxpzh00().b[1][1]++;
  }
  var _ref = (cov_u3wxpzh00().s[3]++, liquidityPoolParameters),
    assetA = _ref.assetA,
    assetB = _ref.assetB,
    fee = _ref.fee;
  cov_u3wxpzh00().s[4]++;
  if ((cov_u3wxpzh00().b[3][0]++, !assetA) || (cov_u3wxpzh00().b[3][1]++, !(assetA instanceof _asset.Asset))) {
    cov_u3wxpzh00().b[2][0]++;
    cov_u3wxpzh00().s[5]++;
    throw new Error('assetA is invalid');
  } else {
    cov_u3wxpzh00().b[2][1]++;
  }
  cov_u3wxpzh00().s[6]++;
  if ((cov_u3wxpzh00().b[5][0]++, !assetB) || (cov_u3wxpzh00().b[5][1]++, !(assetB instanceof _asset.Asset))) {
    cov_u3wxpzh00().b[4][0]++;
    cov_u3wxpzh00().s[7]++;
    throw new Error('assetB is invalid');
  } else {
    cov_u3wxpzh00().b[4][1]++;
  }
  cov_u3wxpzh00().s[8]++;
  if ((cov_u3wxpzh00().b[7][0]++, !fee) || (cov_u3wxpzh00().b[7][1]++, fee !== LiquidityPoolFeeV18)) {
    cov_u3wxpzh00().b[6][0]++;
    cov_u3wxpzh00().s[9]++;
    throw new Error('fee is invalid');
  } else {
    cov_u3wxpzh00().b[6][1]++;
  }
  cov_u3wxpzh00().s[10]++;
  if (_asset.Asset.compare(assetA, assetB) !== -1) {
    cov_u3wxpzh00().b[8][0]++;
    cov_u3wxpzh00().s[11]++;
    throw new Error('Assets are not in lexicographic order');
  } else {
    cov_u3wxpzh00().b[8][1]++;
  }
  var lpTypeData = (cov_u3wxpzh00().s[12]++, _xdr["default"].LiquidityPoolType.liquidityPoolConstantProduct().toXDR());
  var lpParamsData = (cov_u3wxpzh00().s[13]++, new _xdr["default"].LiquidityPoolConstantProductParameters({
    assetA: assetA.toXDRObject(),
    assetB: assetB.toXDRObject(),
    fee: fee
  }).toXDR());
  var payload = (cov_u3wxpzh00().s[14]++, Buffer.concat([lpTypeData, lpParamsData]));
  cov_u3wxpzh00().s[15]++;
  return (0, _hashing.hash)(payload);
}