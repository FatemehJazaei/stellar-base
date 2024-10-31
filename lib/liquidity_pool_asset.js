"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LiquidityPoolAsset = void 0;
var _xdr = _interopRequireDefault(require("./xdr"));
var _asset = require("./asset");
var _get_liquidity_pool_id = require("./get_liquidity_pool_id");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_25bav6nmc1() {
  var path = "/mnt/g/stellar-base/src/liquidity_pool_asset.js";
  var hash = "dc8b903fc48244f4a38ffebafe50bd238b125cfe";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/liquidity_pool_asset.js",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 20,
          column: 5
        }
      },
      "1": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 43
        }
      },
      "2": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 23,
          column: 5
        }
      },
      "3": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 22,
          column: 43
        }
      },
      "4": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 26,
          column: 5
        }
      },
      "5": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 63
        }
      },
      "6": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 29,
          column: 5
        }
      },
      "7": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 28,
          column: 40
        }
      },
      "8": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 25
        }
      },
      "9": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 25
        }
      },
      "10": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 19
        }
      },
      "11": {
        start: {
          line: 43,
          column: 22
        },
        end: {
          line: 43,
          column: 41
        }
      },
      "12": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 53,
          column: 5
        }
      },
      "13": {
        start: {
          line: 45,
          column: 38
        },
        end: {
          line: 47,
          column: 26
        }
      },
      "14": {
        start: {
          line: 48,
          column: 6
        },
        end: {
          line: 52,
          column: 8
        }
      },
      "15": {
        start: {
          line: 55,
          column: 4
        },
        end: {
          line: 55,
          column: 61
        }
      },
      "16": {
        start: {
          line: 69,
          column: 6
        },
        end: {
          line: 73,
          column: 8
        }
      },
      "17": {
        start: {
          line: 74,
          column: 24
        },
        end: {
          line: 77,
          column: 5
        }
      },
      "18": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 78,
          column: 71
        }
      },
      "19": {
        start: {
          line: 85,
          column: 4
        },
        end: {
          line: 90,
          column: 6
        }
      },
      "20": {
        start: {
          line: 98,
          column: 4
        },
        end: {
          line: 98,
          column: 35
        }
      },
      "21": {
        start: {
          line: 106,
          column: 4
        },
        end: {
          line: 110,
          column: 6
        }
      },
      "22": {
        start: {
          line: 114,
          column: 19
        },
        end: {
          line: 117,
          column: 21
        }
      },
      "23": {
        start: {
          line: 118,
          column: 4
        },
        end: {
          line: 118,
          column: 38
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        },
        loc: {
          start: {
            line: 17,
            column: 35
          },
          end: {
            line: 34,
            column: 3
          }
        },
        line: 17
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 42,
            column: 2
          },
          end: {
            line: 42,
            column: 3
          }
        },
        loc: {
          start: {
            line: 42,
            column: 35
          },
          end: {
            line: 56,
            column: 3
          }
        },
        line: 42
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 67,
            column: 2
          },
          end: {
            line: 67,
            column: 3
          }
        },
        loc: {
          start: {
            line: 67,
            column: 16
          },
          end: {
            line: 79,
            column: 3
          }
        },
        line: 67
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 84,
            column: 2
          },
          end: {
            line: 84,
            column: 3
          }
        },
        loc: {
          start: {
            line: 84,
            column: 31
          },
          end: {
            line: 91,
            column: 3
          }
        },
        line: 84
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 97,
            column: 2
          },
          end: {
            line: 97,
            column: 3
          }
        },
        loc: {
          start: {
            line: 97,
            column: 17
          },
          end: {
            line: 99,
            column: 3
          }
        },
        line: 97
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 105,
            column: 2
          },
          end: {
            line: 105,
            column: 3
          }
        },
        loc: {
          start: {
            line: 105,
            column: 16
          },
          end: {
            line: 111,
            column: 3
          }
        },
        line: 105
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 113,
            column: 2
          },
          end: {
            line: 113,
            column: 3
          }
        },
        loc: {
          start: {
            line: 113,
            column: 13
          },
          end: {
            line: 119,
            column: 3
          }
        },
        line: 113
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 20,
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
        line: 18
      },
      "1": {
        loc: {
          start: {
            line: 18,
            column: 8
          },
          end: {
            line: 18,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 18,
            column: 8
          },
          end: {
            line: 18,
            column: 15
          }
        }, {
          start: {
            line: 18,
            column: 19
          },
          end: {
            line: 18,
            column: 45
          }
        }],
        line: 18
      },
      "2": {
        loc: {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 23,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 23,
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
        line: 21
      },
      "3": {
        loc: {
          start: {
            line: 21,
            column: 8
          },
          end: {
            line: 21,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 21,
            column: 8
          },
          end: {
            line: 21,
            column: 15
          }
        }, {
          start: {
            line: 21,
            column: 19
          },
          end: {
            line: 21,
            column: 45
          }
        }],
        line: 21
      },
      "4": {
        loc: {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 26,
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
        line: 24
      },
      "5": {
        loc: {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 29,
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
        line: 27
      },
      "6": {
        loc: {
          start: {
            line: 27,
            column: 8
          },
          end: {
            line: 27,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 27,
            column: 8
          },
          end: {
            line: 27,
            column: 12
          }
        }, {
          start: {
            line: 27,
            column: 16
          },
          end: {
            line: 27,
            column: 43
          }
        }],
        line: 27
      },
      "7": {
        loc: {
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 53,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 53,
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
        line: 44
      },
      "8": {
        loc: {
          start: {
            line: 107,
            column: 6
          },
          end: {
            line: 109,
            column: 28
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 107,
            column: 6
          },
          end: {
            line: 107,
            column: 38
          }
        }, {
          start: {
            line: 108,
            column: 6
          },
          end: {
            line: 108,
            column: 38
          }
        }, {
          start: {
            line: 109,
            column: 6
          },
          end: {
            line: 109,
            column: 28
          }
        }],
        line: 107
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
      "23": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
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
      "8": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "dc8b903fc48244f4a38ffebafe50bd238b125cfe"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_25bav6nmc1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_25bav6nmc1();
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * LiquidityPoolAsset class represents a liquidity pool trustline change.
 *
 * @constructor
 * @param {Asset} assetA – The first asset in the Pool, it must respect the rule assetA < assetB. See {@link Asset.compare} for more details on how assets are sorted.
 * @param {Asset} assetB – The second asset in the Pool, it must respect the rule assetA < assetB. See {@link Asset.compare} for more details on how assets are sorted.
 * @param {number} fee – The liquidity pool fee. For now the only fee supported is `30`.
 */
var LiquidityPoolAsset = exports.LiquidityPoolAsset = /*#__PURE__*/function () {
  function LiquidityPoolAsset(assetA, assetB, fee) {
    _classCallCheck(this, LiquidityPoolAsset);
    cov_25bav6nmc1().f[0]++;
    cov_25bav6nmc1().s[0]++;
    if ((cov_25bav6nmc1().b[1][0]++, !assetA) || (cov_25bav6nmc1().b[1][1]++, !(assetA instanceof _asset.Asset))) {
      cov_25bav6nmc1().b[0][0]++;
      cov_25bav6nmc1().s[1]++;
      throw new Error('assetA is invalid');
    } else {
      cov_25bav6nmc1().b[0][1]++;
    }
    cov_25bav6nmc1().s[2]++;
    if ((cov_25bav6nmc1().b[3][0]++, !assetB) || (cov_25bav6nmc1().b[3][1]++, !(assetB instanceof _asset.Asset))) {
      cov_25bav6nmc1().b[2][0]++;
      cov_25bav6nmc1().s[3]++;
      throw new Error('assetB is invalid');
    } else {
      cov_25bav6nmc1().b[2][1]++;
    }
    cov_25bav6nmc1().s[4]++;
    if (_asset.Asset.compare(assetA, assetB) !== -1) {
      cov_25bav6nmc1().b[4][0]++;
      cov_25bav6nmc1().s[5]++;
      throw new Error('Assets are not in lexicographic order');
    } else {
      cov_25bav6nmc1().b[4][1]++;
    }
    cov_25bav6nmc1().s[6]++;
    if ((cov_25bav6nmc1().b[6][0]++, !fee) || (cov_25bav6nmc1().b[6][1]++, fee !== _get_liquidity_pool_id.LiquidityPoolFeeV18)) {
      cov_25bav6nmc1().b[5][0]++;
      cov_25bav6nmc1().s[7]++;
      throw new Error('fee is invalid');
    } else {
      cov_25bav6nmc1().b[5][1]++;
    }
    cov_25bav6nmc1().s[8]++;
    this.assetA = assetA;
    cov_25bav6nmc1().s[9]++;
    this.assetB = assetB;
    cov_25bav6nmc1().s[10]++;
    this.fee = fee;
  }

  /**
   * Returns a liquidity pool asset object from its XDR ChangeTrustAsset object
   * representation.
   * @param {xdr.ChangeTrustAsset} ctAssetXdr - The asset XDR object.
   * @returns {LiquidityPoolAsset}
   */
  return _createClass(LiquidityPoolAsset, [{
    key: "toXDRObject",
    value:
    /**
     * Returns the `xdr.ChangeTrustAsset` object for this liquidity pool asset.
     *
     * Note: To convert from an {@link Asset `Asset`} to `xdr.ChangeTrustAsset`
     * please refer to the
     * {@link Asset.toChangeTrustXDRObject `Asset.toChangeTrustXDRObject`} method.
     *
     * @returns {xdr.ChangeTrustAsset} XDR ChangeTrustAsset object.
     */
    function toXDRObject() {
      cov_25bav6nmc1().f[2]++;
      var lpConstantProductParamsXdr = (cov_25bav6nmc1().s[16]++, new _xdr["default"].LiquidityPoolConstantProductParameters({
        assetA: this.assetA.toXDRObject(),
        assetB: this.assetB.toXDRObject(),
        fee: this.fee
      }));
      var lpParamsXdr = (cov_25bav6nmc1().s[17]++, new _xdr["default"].LiquidityPoolParameters('liquidityPoolConstantProduct', lpConstantProductParamsXdr));
      cov_25bav6nmc1().s[18]++;
      return new _xdr["default"].ChangeTrustAsset('assetTypePoolShare', lpParamsXdr);
    }

    /**
     * @returns {LiquidityPoolParameters} Liquidity pool parameters.
     */
  }, {
    key: "getLiquidityPoolParameters",
    value: function getLiquidityPoolParameters() {
      cov_25bav6nmc1().f[3]++;
      cov_25bav6nmc1().s[19]++;
      return _objectSpread(_objectSpread({}, this), {}, {
        assetA: this.assetA,
        assetB: this.assetB,
        fee: this.fee
      });
    }

    /**
     * @see [Assets concept](https://developers.stellar.org/docs/glossary/assets/)
     * @returns {AssetType.liquidityPoolShares} asset type. Can only be `liquidity_pool_shares`.
     */
  }, {
    key: "getAssetType",
    value: function getAssetType() {
      cov_25bav6nmc1().f[4]++;
      cov_25bav6nmc1().s[20]++;
      return 'liquidity_pool_shares';
    }

    /**
     * @param {LiquidityPoolAsset} other the LiquidityPoolAsset to compare
     * @returns {boolean} `true` if this asset equals the given asset.
     */
  }, {
    key: "equals",
    value: function equals(other) {
      cov_25bav6nmc1().f[5]++;
      cov_25bav6nmc1().s[21]++;
      return (cov_25bav6nmc1().b[8][0]++, this.assetA.equals(other.assetA)) && (cov_25bav6nmc1().b[8][1]++, this.assetB.equals(other.assetB)) && (cov_25bav6nmc1().b[8][2]++, this.fee === other.fee);
    }
  }, {
    key: "toString",
    value: function toString() {
      cov_25bav6nmc1().f[6]++;
      var poolId = (cov_25bav6nmc1().s[22]++, (0, _get_liquidity_pool_id.getLiquidityPoolId)('constant_product', this.getLiquidityPoolParameters()).toString('hex'));
      cov_25bav6nmc1().s[23]++;
      return "liquidity_pool:".concat(poolId);
    }
  }], [{
    key: "fromOperation",
    value: function fromOperation(ctAssetXdr) {
      cov_25bav6nmc1().f[1]++;
      var assetType = (cov_25bav6nmc1().s[11]++, ctAssetXdr["switch"]());
      cov_25bav6nmc1().s[12]++;
      if (assetType === _xdr["default"].AssetType.assetTypePoolShare()) {
        cov_25bav6nmc1().b[7][0]++;
        var liquidityPoolParameters = (cov_25bav6nmc1().s[13]++, ctAssetXdr.liquidityPool().constantProduct());
        cov_25bav6nmc1().s[14]++;
        return new this(_asset.Asset.fromOperation(liquidityPoolParameters.assetA()), _asset.Asset.fromOperation(liquidityPoolParameters.assetB()), liquidityPoolParameters.fee());
      } else {
        cov_25bav6nmc1().b[7][1]++;
      }
      cov_25bav6nmc1().s[15]++;
      throw new Error("Invalid asset type: ".concat(assetType.name));
    }
  }]);
}();