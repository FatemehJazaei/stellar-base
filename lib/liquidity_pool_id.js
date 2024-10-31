"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LiquidityPoolId = void 0;
var _xdr = _interopRequireDefault(require("./xdr"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_xwwe9nbmg() {
  var path = "/mnt/g/stellar-base/src/liquidity_pool_id.js";
  var hash = "0585ab9ab8fa0d30916620cf06b19657ecdda477";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/liquidity_pool_id.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 14,
          column: 5
        }
      },
      "1": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 57
        }
      },
      "2": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 17,
          column: 5
        }
      },
      "3": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 63
        }
      },
      "4": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 43
        }
      },
      "5": {
        start: {
          line: 28,
          column: 22
        },
        end: {
          line: 28,
          column: 41
        }
      },
      "6": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 32,
          column: 5
        }
      },
      "7": {
        start: {
          line: 30,
          column: 30
        },
        end: {
          line: 30,
          column: 74
        }
      },
      "8": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 31,
          column: 39
        }
      },
      "9": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 61
        }
      },
      "10": {
        start: {
          line: 47,
          column: 22
        },
        end: {
          line: 47,
          column: 69
        }
      },
      "11": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 48,
          column: 67
        }
      },
      "12": {
        start: {
          line: 55,
          column: 4
        },
        end: {
          line: 55,
          column: 40
        }
      },
      "13": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 63,
          column: 35
        }
      },
      "14": {
        start: {
          line: 71,
          column: 4
        },
        end: {
          line: 71,
          column: 63
        }
      },
      "15": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 75,
          column: 52
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 11,
            column: 3
          }
        },
        loc: {
          start: {
            line: 11,
            column: 31
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 11
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        },
        loc: {
          start: {
            line: 27,
            column: 35
          },
          end: {
            line: 35,
            column: 3
          }
        },
        line: 27
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 46,
            column: 2
          },
          end: {
            line: 46,
            column: 3
          }
        },
        loc: {
          start: {
            line: 46,
            column: 16
          },
          end: {
            line: 49,
            column: 3
          }
        },
        line: 46
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 54,
            column: 2
          },
          end: {
            line: 54,
            column: 3
          }
        },
        loc: {
          start: {
            line: 54,
            column: 23
          },
          end: {
            line: 56,
            column: 3
          }
        },
        line: 54
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 62,
            column: 2
          },
          end: {
            line: 62,
            column: 3
          }
        },
        loc: {
          start: {
            line: 62,
            column: 17
          },
          end: {
            line: 64,
            column: 3
          }
        },
        line: 62
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 70,
            column: 2
          },
          end: {
            line: 70,
            column: 3
          }
        },
        loc: {
          start: {
            line: 70,
            column: 16
          },
          end: {
            line: 72,
            column: 3
          }
        },
        line: 70
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 74,
            column: 2
          },
          end: {
            line: 74,
            column: 3
          }
        },
        loc: {
          start: {
            line: 74,
            column: 13
          },
          end: {
            line: 76,
            column: 3
          }
        },
        line: 74
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 14,
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
        line: 12
      },
      "1": {
        loc: {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 17,
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
        line: 15
      },
      "2": {
        loc: {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 32,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 32,
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
        line: 29
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
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0585ab9ab8fa0d30916620cf06b19657ecdda477"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_xwwe9nbmg = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_xwwe9nbmg();
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * LiquidityPoolId class represents the asset referenced by a trustline to a
 * liquidity pool.
 *
 * @constructor
 * @param {string} liquidityPoolId - The ID of the liquidity pool in string 'hex'.
 */
var LiquidityPoolId = exports.LiquidityPoolId = /*#__PURE__*/function () {
  function LiquidityPoolId(liquidityPoolId) {
    _classCallCheck(this, LiquidityPoolId);
    cov_xwwe9nbmg().f[0]++;
    cov_xwwe9nbmg().s[0]++;
    if (!liquidityPoolId) {
      cov_xwwe9nbmg().b[0][0]++;
      cov_xwwe9nbmg().s[1]++;
      throw new Error('liquidityPoolId cannot be empty');
    } else {
      cov_xwwe9nbmg().b[0][1]++;
    }
    cov_xwwe9nbmg().s[2]++;
    if (!/^[a-f0-9]{64}$/.test(liquidityPoolId)) {
      cov_xwwe9nbmg().b[1][0]++;
      cov_xwwe9nbmg().s[3]++;
      throw new Error('Liquidity pool ID is not a valid hash');
    } else {
      cov_xwwe9nbmg().b[1][1]++;
    }
    cov_xwwe9nbmg().s[4]++;
    this.liquidityPoolId = liquidityPoolId;
  }

  /**
   * Returns a liquidity pool ID object from its xdr.TrustLineAsset representation.
   * @param {xdr.TrustLineAsset} tlAssetXdr - The asset XDR object.
   * @returns {LiquidityPoolId}
   */
  return _createClass(LiquidityPoolId, [{
    key: "toXDRObject",
    value:
    /**
     * Returns the `xdr.TrustLineAsset` object for this liquidity pool ID.
     *
     * Note: To convert from {@link Asset `Asset`} to `xdr.TrustLineAsset` please
     * refer to the
     * {@link Asset.toTrustLineXDRObject `Asset.toTrustLineXDRObject`} method.
     *
     * @returns {xdr.TrustLineAsset} XDR LiquidityPoolId object
     */
    function toXDRObject() {
      cov_xwwe9nbmg().f[2]++;
      var xdrPoolId = (cov_xwwe9nbmg().s[10]++, _xdr["default"].PoolId.fromXDR(this.liquidityPoolId, 'hex'));
      cov_xwwe9nbmg().s[11]++;
      return new _xdr["default"].TrustLineAsset('assetTypePoolShare', xdrPoolId);
    }

    /**
     * @returns {string} Liquidity pool ID.
     */
  }, {
    key: "getLiquidityPoolId",
    value: function getLiquidityPoolId() {
      cov_xwwe9nbmg().f[3]++;
      cov_xwwe9nbmg().s[12]++;
      return String(this.liquidityPoolId);
    }

    /**
     * @see [Assets concept](https://developers.stellar.org/docs/glossary/assets/)
     * @returns {AssetType.liquidityPoolShares} asset type. Can only be `liquidity_pool_shares`.
     */
  }, {
    key: "getAssetType",
    value: function getAssetType() {
      cov_xwwe9nbmg().f[4]++;
      cov_xwwe9nbmg().s[13]++;
      return 'liquidity_pool_shares';
    }

    /**
     * @param {LiquidityPoolId} asset LiquidityPoolId to compare.
     * @returns {boolean} `true` if this asset equals the given asset.
     */
  }, {
    key: "equals",
    value: function equals(asset) {
      cov_xwwe9nbmg().f[5]++;
      cov_xwwe9nbmg().s[14]++;
      return this.liquidityPoolId === asset.getLiquidityPoolId();
    }
  }, {
    key: "toString",
    value: function toString() {
      cov_xwwe9nbmg().f[6]++;
      cov_xwwe9nbmg().s[15]++;
      return "liquidity_pool:".concat(this.liquidityPoolId);
    }
  }], [{
    key: "fromOperation",
    value: function fromOperation(tlAssetXdr) {
      cov_xwwe9nbmg().f[1]++;
      var assetType = (cov_xwwe9nbmg().s[5]++, tlAssetXdr["switch"]());
      cov_xwwe9nbmg().s[6]++;
      if (assetType === _xdr["default"].AssetType.assetTypePoolShare()) {
        cov_xwwe9nbmg().b[2][0]++;
        var liquidityPoolId = (cov_xwwe9nbmg().s[7]++, tlAssetXdr.liquidityPoolId().toString('hex'));
        cov_xwwe9nbmg().s[8]++;
        return new this(liquidityPoolId);
      } else {
        cov_xwwe9nbmg().b[2][1]++;
      }
      cov_xwwe9nbmg().s[9]++;
      throw new Error("Invalid asset type: ".concat(assetType.name));
    }
  }]);
}();