"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeeBumpTransaction = void 0;
var _xdr = _interopRequireDefault(require("./xdr"));
var _hashing = require("./hashing");
var _transaction = require("./transaction");
var _transaction_base = require("./transaction_base");
var _decode_encode_muxed_account = require("./util/decode_encode_muxed_account");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_hvs0rev22() {
  var path = "/mnt/g/stellar-base/src/fee_bump_transaction.js";
  var hash = "a3ea7e4ee9f5c8c324537137ccf68d580a1cd335";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/fee_bump_transaction.js",
    statementMap: {
      "0": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 29,
          column: 5
        }
      },
      "1": {
        start: {
          line: 27,
          column: 21
        },
        end: {
          line: 27,
          column: 52
        }
      },
      "2": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 28,
          column: 57
        }
      },
      "3": {
        start: {
          line: 31,
          column: 25
        },
        end: {
          line: 31,
          column: 42
        }
      },
      "4": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 36,
          column: 5
        }
      },
      "5": {
        start: {
          line: 33,
          column: 6
        },
        end: {
          line: 35,
          column: 8
        }
      },
      "6": {
        start: {
          line: 38,
          column: 23
        },
        end: {
          line: 38,
          column: 39
        }
      },
      "7": {
        start: {
          line: 39,
          column: 15
        },
        end: {
          line: 39,
          column: 30
        }
      },
      "8": {
        start: {
          line: 40,
          column: 16
        },
        end: {
          line: 40,
          column: 35
        }
      },
      "9": {
        start: {
          line: 42,
          column: 23
        },
        end: {
          line: 42,
          column: 62
        }
      },
      "10": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 44,
          column: 50
        }
      },
      "11": {
        start: {
          line: 46,
          column: 28
        },
        end: {
          line: 48,
          column: 5
        }
      },
      "12": {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 49,
          column: 71
        }
      },
      "13": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 53,
          column: 6
        }
      },
      "14": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 61,
          column: 34
        }
      },
      "15": {
        start: {
          line: 69,
          column: 4
        },
        end: {
          line: 69,
          column: 45
        }
      },
      "16": {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 77,
          column: 27
        }
      },
      "17": {
        start: {
          line: 91,
          column: 6
        },
        end: {
          line: 93,
          column: 7
        }
      },
      "18": {
        start: {
          line: 95,
          column: 24
        },
        end: {
          line: 98,
          column: 6
        }
      },
      "19": {
        start: {
          line: 100,
          column: 4
        },
        end: {
          line: 100,
          column: 31
        }
      },
      "20": {
        start: {
          line: 108,
          column: 21
        },
        end: {
          line: 111,
          column: 6
        }
      },
      "21": {
        start: {
          line: 113,
          column: 4
        },
        end: {
          line: 113,
          column: 71
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        },
        loc: {
          start: {
            line: 25,
            column: 43
          },
          end: {
            line: 54,
            column: 3
          }
        },
        line: 25
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 60,
            column: 2
          },
          end: {
            line: 60,
            column: 3
          }
        },
        loc: {
          start: {
            line: 60,
            column: 25
          },
          end: {
            line: 62,
            column: 3
          }
        },
        line: 60
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 68,
            column: 3
          }
        },
        loc: {
          start: {
            line: 68,
            column: 19
          },
          end: {
            line: 70,
            column: 3
          }
        },
        line: 68
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 76,
            column: 2
          },
          end: {
            line: 76,
            column: 3
          }
        },
        loc: {
          start: {
            line: 76,
            column: 18
          },
          end: {
            line: 78,
            column: 3
          }
        },
        line: 76
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 89,
            column: 2
          },
          end: {
            line: 89,
            column: 3
          }
        },
        loc: {
          start: {
            line: 89,
            column: 18
          },
          end: {
            line: 101,
            column: 3
          }
        },
        line: 89
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 107,
            column: 2
          },
          end: {
            line: 107,
            column: 3
          }
        },
        loc: {
          start: {
            line: 107,
            column: 15
          },
          end: {
            line: 114,
            column: 3
          }
        },
        line: 107
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 26,
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
            line: 26,
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
        line: 26
      },
      "1": {
        loc: {
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 36,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 36,
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
        line: 32
      },
      "2": {
        loc: {
          start: {
            line: 42,
            column: 24
          },
          end: {
            line: 42,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 42,
            column: 24
          },
          end: {
            line: 42,
            column: 47
          }
        }, {
          start: {
            line: 42,
            column: 51
          },
          end: {
            line: 42,
            column: 53
          }
        }],
        line: 42
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
      "21": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a3ea7e4ee9f5c8c324537137ccf68d580a1cd335"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_hvs0rev22 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_hvs0rev22();
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * Use {@link TransactionBuilder.buildFeeBumpTransaction} to build a
 * FeeBumpTransaction object. If you have an object or base64-encoded string of
 * the transaction envelope XDR use {@link TransactionBuilder.fromXDR}.
 *
 * Once a {@link FeeBumpTransaction} has been created, its attributes and operations
 * should not be changed. You should only add signatures (using {@link FeeBumpTransaction#sign}) before
 * submitting to the network or forwarding on to additional signers.
 *
 * @param {string|xdr.TransactionEnvelope} envelope - transaction envelope
 *     object or base64 encoded string.
 * @param {string} networkPassphrase - passphrase of the target Stellar network
 *     (e.g. "Public Global Stellar Network ; September 2015").
 *
 * @extends TransactionBase
 */
var FeeBumpTransaction = exports.FeeBumpTransaction = /*#__PURE__*/function (_TransactionBase) {
  function FeeBumpTransaction(envelope, networkPassphrase) {
    var _this;
    _classCallCheck(this, FeeBumpTransaction);
    cov_hvs0rev22().f[0]++;
    cov_hvs0rev22().s[0]++;
    if (typeof envelope === 'string') {
      cov_hvs0rev22().b[0][0]++;
      var buffer = (cov_hvs0rev22().s[1]++, Buffer.from(envelope, 'base64'));
      cov_hvs0rev22().s[2]++;
      envelope = _xdr["default"].TransactionEnvelope.fromXDR(buffer);
    } else {
      cov_hvs0rev22().b[0][1]++;
    }
    var envelopeType = (cov_hvs0rev22().s[3]++, envelope["switch"]());
    cov_hvs0rev22().s[4]++;
    if (envelopeType !== _xdr["default"].EnvelopeType.envelopeTypeTxFeeBump()) {
      cov_hvs0rev22().b[1][0]++;
      cov_hvs0rev22().s[5]++;
      throw new Error("Invalid TransactionEnvelope: expected an envelopeTypeTxFeeBump but received an ".concat(envelopeType.name, "."));
    } else {
      cov_hvs0rev22().b[1][1]++;
    }
    var txEnvelope = (cov_hvs0rev22().s[6]++, envelope.value());
    var tx = (cov_hvs0rev22().s[7]++, txEnvelope.tx());
    var fee = (cov_hvs0rev22().s[8]++, tx.fee().toString());
    // clone signatures
    var signatures = (cov_hvs0rev22().s[9]++, ((cov_hvs0rev22().b[2][0]++, txEnvelope.signatures()) || (cov_hvs0rev22().b[2][1]++, [])).slice());
    cov_hvs0rev22().s[10]++;
    _this = _callSuper(this, FeeBumpTransaction, [tx, signatures, fee, networkPassphrase]);
    var innerTxEnvelope = (cov_hvs0rev22().s[11]++, _xdr["default"].TransactionEnvelope.envelopeTypeTx(tx.innerTx().v1()));
    cov_hvs0rev22().s[12]++;
    _this._feeSource = (0, _decode_encode_muxed_account.encodeMuxedAccountToAddress)(_this.tx.feeSource());
    cov_hvs0rev22().s[13]++;
    _this._innerTransaction = new _transaction.Transaction(innerTxEnvelope, networkPassphrase);
    return _this;
  }

  /**
   * @type {Transaction}
   * @readonly
   */
  _inherits(FeeBumpTransaction, _TransactionBase);
  return _createClass(FeeBumpTransaction, [{
    key: "innerTransaction",
    get: function get() {
      cov_hvs0rev22().f[1]++;
      cov_hvs0rev22().s[14]++;
      return this._innerTransaction;
    }

    /**
     * @type {Operation[]}
     * @readonly
     */
  }, {
    key: "operations",
    get: function get() {
      cov_hvs0rev22().f[2]++;
      cov_hvs0rev22().s[15]++;
      return this._innerTransaction.operations;
    }

    /**
     * @type {string}
     * @readonly
     */
  }, {
    key: "feeSource",
    get: function get() {
      cov_hvs0rev22().f[3]++;
      cov_hvs0rev22().s[16]++;
      return this._feeSource;
    }

    /**
     * Returns the "signature base" of this transaction, which is the value
     * that, when hashed, should be signed to create a signature that
     * validators on the Stellar Network will accept.
     *
     * It is composed of a 4 prefix bytes followed by the xdr-encoded form
     * of this transaction.
     * @returns {Buffer}
     */
  }, {
    key: "signatureBase",
    value: function signatureBase() {
      cov_hvs0rev22().f[4]++;
      var taggedTransaction = (cov_hvs0rev22().s[17]++, new _xdr["default"].TransactionSignaturePayloadTaggedTransaction.envelopeTypeTxFeeBump(this.tx));
      var txSignature = (cov_hvs0rev22().s[18]++, new _xdr["default"].TransactionSignaturePayload({
        networkId: _xdr["default"].Hash.fromXDR((0, _hashing.hash)(this.networkPassphrase)),
        taggedTransaction: taggedTransaction
      }));
      cov_hvs0rev22().s[19]++;
      return txSignature.toXDR();
    }

    /**
     * To envelope returns a xdr.TransactionEnvelope which can be submitted to the network.
     * @returns {xdr.TransactionEnvelope}
     */
  }, {
    key: "toEnvelope",
    value: function toEnvelope() {
      cov_hvs0rev22().f[5]++;
      var envelope = (cov_hvs0rev22().s[20]++, new _xdr["default"].FeeBumpTransactionEnvelope({
        tx: _xdr["default"].FeeBumpTransaction.fromXDR(this.tx.toXDR()),
        // make a copy of the tx
        signatures: this.signatures.slice() // make a copy of the signatures
      }));
      cov_hvs0rev22().s[21]++;
      return new _xdr["default"].TransactionEnvelope.envelopeTypeTxFeeBump(envelope);
    }
  }]);
}(_transaction_base.TransactionBase);