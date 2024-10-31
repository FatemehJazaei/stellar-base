"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contract = void 0;
var _address = require("./address");
var _operation = require("./operation");
var _xdr = _interopRequireDefault(require("./xdr"));
var _strkey = require("./strkey");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_1b85vzw7jk() {
  var path = "/mnt/g/stellar-base/src/contract.js";
  var hash = "67b6c6dca752b481348cc8e473ce110a03ad0aa6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/contract.js",
    statementMap: {
      "0": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 26,
          column: 5
        }
      },
      "1": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 23,
          column: 51
        }
      },
      "2": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 60
        }
      },
      "3": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 43
        }
      },
      "4": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 29
        }
      },
      "5": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 38
        }
      },
      "6": {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 68,
          column: 7
        }
      },
      "7": {
        start: {
          line: 79,
          column: 4
        },
        end: {
          line: 85,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        },
        loc: {
          start: {
            line: 20,
            column: 26
          },
          end: {
            line: 27,
            column: 3
          }
        },
        line: 20
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 34,
            column: 2
          },
          end: {
            line: 34,
            column: 3
          }
        },
        loc: {
          start: {
            line: 34,
            column: 15
          },
          end: {
            line: 36,
            column: 3
          }
        },
        line: 34
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 39,
            column: 2
          },
          end: {
            line: 39,
            column: 3
          }
        },
        loc: {
          start: {
            line: 39,
            column: 13
          },
          end: {
            line: 41,
            column: 3
          }
        },
        line: 39
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 44,
            column: 2
          },
          end: {
            line: 44,
            column: 3
          }
        },
        loc: {
          start: {
            line: 44,
            column: 12
          },
          end: {
            line: 46,
            column: 3
          }
        },
        line: 44
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 63,
            column: 2
          },
          end: {
            line: 63,
            column: 3
          }
        },
        loc: {
          start: {
            line: 63,
            column: 26
          },
          end: {
            line: 69,
            column: 3
          }
        },
        line: 63
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 78,
            column: 2
          },
          end: {
            line: 78,
            column: 3
          }
        },
        loc: {
          start: {
            line: 78,
            column: 17
          },
          end: {
            line: 86,
            column: 3
          }
        },
        line: 78
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "67b6c6dca752b481348cc8e473ce110a03ad0aa6"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1b85vzw7jk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1b85vzw7jk();
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Create a new Contract object.
 *
 * `Contract` represents a single contract in the Stellar network, embodying the
 * interface of the contract. See
 * [Contracts](https://soroban.stellar.org/docs/learn/interacting-with-contracts)
 * for more information about how contracts work in Stellar.
 *
 * @constructor
 *
 * @param {string} contractId - ID of the contract (ex.
 *     `CA3D5KRYM6CB7OWQ6TWYRR3Z4T7GNZLKERYNZGGA5SOAOPIFY6YQGAXE`).
 */
var Contract = exports.Contract = /*#__PURE__*/function () {
  function Contract(contractId) {
    _classCallCheck(this, Contract);
    cov_1b85vzw7jk().f[0]++;
    cov_1b85vzw7jk().s[0]++;
    try {
      cov_1b85vzw7jk().s[1]++;
      // First, try it as a strkey
      this._id = _strkey.StrKey.decodeContract(contractId);
    } catch (_) {
      cov_1b85vzw7jk().s[2]++;
      throw new Error("Invalid contract ID: ".concat(contractId));
    }
  }

  /**
   * Returns Stellar contract ID as a strkey, ex.
   * `CA3D5KRYM6CB7OWQ6TWYRR3Z4T7GNZLKERYNZGGA5SOAOPIFY6YQGAXE`.
   * @returns {string}
   */
  return _createClass(Contract, [{
    key: "contractId",
    value: function contractId() {
      cov_1b85vzw7jk().f[1]++;
      cov_1b85vzw7jk().s[3]++;
      return _strkey.StrKey.encodeContract(this._id);
    }

    /** @returns {string} the ID as a strkey (C...) */
  }, {
    key: "toString",
    value: function toString() {
      cov_1b85vzw7jk().f[2]++;
      cov_1b85vzw7jk().s[4]++;
      return this.contractId();
    }

    /** @returns {Address} the wrapped address of this contract */
  }, {
    key: "address",
    value: function address() {
      cov_1b85vzw7jk().f[3]++;
      cov_1b85vzw7jk().s[5]++;
      return _address.Address.contract(this._id);
    }

    /**
     * Returns an operation that will invoke this contract call.
     *
     * @param {string}        method   name of the method to call
     * @param {...xdr.ScVal}  params   arguments to pass to the function call
     *
     * @returns {xdr.Operation}   an InvokeHostFunctionOp operation to call the
     *    contract with the given method and parameters
     *
     * @see Operation.invokeHostFunction
     * @see Operation.invokeContractFunction
     * @see Operation.createCustomContract
     * @see Operation.createStellarAssetContract
     * @see Operation.uploadContractWasm
     */
  }, {
    key: "call",
    value: function call(method) {
      cov_1b85vzw7jk().f[4]++;
      cov_1b85vzw7jk().s[6]++;
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }
      return _operation.Operation.invokeContractFunction({
        contract: this.address().toString(),
        "function": method,
        args: params
      });
    }

    /**
     * Returns the read-only footprint entries necessary for any invocations to
     * this contract, for convenience when manually adding it to your
     * transaction's overall footprint or doing bump/restore operations.
     *
     * @returns {xdr.LedgerKey} the ledger key for the deployed contract instance
     */
  }, {
    key: "getFootprint",
    value: function getFootprint() {
      cov_1b85vzw7jk().f[5]++;
      cov_1b85vzw7jk().s[7]++;
      return _xdr["default"].LedgerKey.contractData(new _xdr["default"].LedgerKeyContractData({
        contract: this.address().toScAddress(),
        key: _xdr["default"].ScVal.scvLedgerKeyContractInstance(),
        durability: _xdr["default"].ContractDataDurability.persistent()
      }));
    }
  }]);
}();