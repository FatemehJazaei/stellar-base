"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransactionBase = void 0;
var _xdr = _interopRequireDefault(require("./xdr"));
var _hashing = require("./hashing");
var _keypair = require("./keypair");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_1no0v22595() {
  var path = "/mnt/g/stellar-base/src/transaction_base.js";
  var hash = "38405091c387a7e39de16598881daa84928c01b3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/transaction_base.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 14,
          column: 5
        }
      },
      "1": {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 13,
          column: 8
        }
      },
      "2": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 48
        }
      },
      "3": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 18
        }
      },
      "4": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 34
        }
      },
      "5": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 20
        }
      },
      "6": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 28
        }
      },
      "7": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 48
        }
      },
      "8": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 20
        }
      },
      "9": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 39,
          column: 48
        }
      },
      "10": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 21
        }
      },
      "11": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 51,
          column: 48
        }
      },
      "12": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 59,
          column: 35
        }
      },
      "13": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 63,
          column: 48
        }
      },
      "14": {
        start: {
          line: 72,
          column: 19
        },
        end: {
          line: 72,
          column: 30
        }
      },
      "15": {
        start: {
          line: 73,
          column: 4
        },
        end: {
          line: 76,
          column: 7
        }
      },
      "16": {
        start: {
          line: 74,
          column: 18
        },
        end: {
          line: 74,
          column: 42
        }
      },
      "17": {
        start: {
          line: 75,
          column: 6
        },
        end: {
          line: 75,
          column: 32
        }
      },
      "18": {
        start: {
          line: 102,
          column: 4
        },
        end: {
          line: 102,
          column: 56
        }
      },
      "19": {
        start: {
          line: 130,
          column: 4
        },
        end: {
          line: 132,
          column: 5
        }
      },
      "20": {
        start: {
          line: 131,
          column: 6
        },
        end: {
          line: 131,
          column: 43
        }
      },
      "21": {
        start: {
          line: 134,
          column: 4
        },
        end: {
          line: 136,
          column: 5
        }
      },
      "22": {
        start: {
          line: 135,
          column: 6
        },
        end: {
          line: 135,
          column: 43
        }
      },
      "23": {
        start: {
          line: 140,
          column: 28
        },
        end: {
          line: 140,
          column: 60
        }
      },
      "24": {
        start: {
          line: 142,
          column: 4
        },
        end: {
          line: 147,
          column: 5
        }
      },
      "25": {
        start: {
          line: 143,
          column: 6
        },
        end: {
          line: 143,
          column: 49
        }
      },
      "26": {
        start: {
          line: 144,
          column: 6
        },
        end: {
          line: 144,
          column: 37
        }
      },
      "27": {
        start: {
          line: 146,
          column: 6
        },
        end: {
          line: 146,
          column: 43
        }
      },
      "28": {
        start: {
          line: 149,
          column: 4
        },
        end: {
          line: 151,
          column: 5
        }
      },
      "29": {
        start: {
          line: 150,
          column: 6
        },
        end: {
          line: 150,
          column: 43
        }
      },
      "30": {
        start: {
          line: 153,
          column: 4
        },
        end: {
          line: 158,
          column: 6
        }
      },
      "31": {
        start: {
          line: 171,
          column: 4
        },
        end: {
          line: 171,
          column: 36
        }
      },
      "32": {
        start: {
          line: 180,
          column: 4
        },
        end: {
          line: 182,
          column: 5
        }
      },
      "33": {
        start: {
          line: 181,
          column: 6
        },
        end: {
          line: 181,
          column: 46
        }
      },
      "34": {
        start: {
          line: 184,
          column: 4
        },
        end: {
          line: 186,
          column: 5
        }
      },
      "35": {
        start: {
          line: 185,
          column: 6
        },
        end: {
          line: 185,
          column: 66
        }
      },
      "36": {
        start: {
          line: 188,
          column: 22
        },
        end: {
          line: 188,
          column: 30
        }
      },
      "37": {
        start: {
          line: 189,
          column: 18
        },
        end: {
          line: 189,
          column: 32
        }
      },
      "38": {
        start: {
          line: 190,
          column: 17
        },
        end: {
          line: 190,
          column: 46
        }
      },
      "39": {
        start: {
          line: 191,
          column: 4
        },
        end: {
          line: 191,
          column: 74
        }
      },
      "40": {
        start: {
          line: 199,
          column: 4
        },
        end: {
          line: 199,
          column: 38
        }
      },
      "41": {
        start: {
          line: 203,
          column: 4
        },
        end: {
          line: 203,
          column: 45
        }
      },
      "42": {
        start: {
          line: 207,
          column: 4
        },
        end: {
          line: 207,
          column: 45
        }
      },
      "43": {
        start: {
          line: 215,
          column: 4
        },
        end: {
          line: 215,
          column: 56
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 9,
            column: 3
          }
        },
        loc: {
          start: {
            line: 9,
            column: 54
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        },
        loc: {
          start: {
            line: 26,
            column: 19
          },
          end: {
            line: 28,
            column: 3
          }
        },
        line: 26
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        },
        loc: {
          start: {
            line: 30,
            column: 24
          },
          end: {
            line: 32,
            column: 3
          }
        },
        line: 30
      },
      "3": {
        name: "(anonymous_3)",
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
            column: 11
          },
          end: {
            line: 36,
            column: 3
          }
        },
        line: 34
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 38,
            column: 3
          }
        },
        loc: {
          start: {
            line: 38,
            column: 16
          },
          end: {
            line: 40,
            column: 3
          }
        },
        line: 38
      },
      "5": {
        name: "(anonymous_5)",
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
            column: 12
          },
          end: {
            line: 48,
            column: 3
          }
        },
        line: 46
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 50,
            column: 2
          },
          end: {
            line: 50,
            column: 3
          }
        },
        loc: {
          start: {
            line: 50,
            column: 17
          },
          end: {
            line: 52,
            column: 3
          }
        },
        line: 50
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 58,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        },
        loc: {
          start: {
            line: 58,
            column: 26
          },
          end: {
            line: 60,
            column: 3
          }
        },
        line: 58
      },
      "8": {
        name: "(anonymous_8)",
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
            column: 43
          },
          end: {
            line: 64,
            column: 3
          }
        },
        line: 62
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 71,
            column: 2
          },
          end: {
            line: 71,
            column: 3
          }
        },
        loc: {
          start: {
            line: 71,
            column: 20
          },
          end: {
            line: 77,
            column: 3
          }
        },
        line: 71
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 73,
            column: 21
          },
          end: {
            line: 73,
            column: 22
          }
        },
        loc: {
          start: {
            line: 73,
            column: 29
          },
          end: {
            line: 76,
            column: 5
          }
        },
        line: 73
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 101,
            column: 2
          },
          end: {
            line: 101,
            column: 3
          }
        },
        loc: {
          start: {
            line: 101,
            column: 31
          },
          end: {
            line: 103,
            column: 3
          }
        },
        line: 101
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 129,
            column: 2
          },
          end: {
            line: 129,
            column: 3
          }
        },
        loc: {
          start: {
            line: 129,
            column: 47
          },
          end: {
            line: 159,
            column: 3
          }
        },
        line: 129
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 170,
            column: 2
          },
          end: {
            line: 170,
            column: 3
          }
        },
        loc: {
          start: {
            line: 170,
            column: 35
          },
          end: {
            line: 172,
            column: 3
          }
        },
        line: 170
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 179,
            column: 2
          },
          end: {
            line: 179,
            column: 3
          }
        },
        loc: {
          start: {
            line: 179,
            column: 22
          },
          end: {
            line: 192,
            column: 3
          }
        },
        line: 179
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 198,
            column: 2
          },
          end: {
            line: 198,
            column: 3
          }
        },
        loc: {
          start: {
            line: 198,
            column: 9
          },
          end: {
            line: 200,
            column: 3
          }
        },
        line: 198
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 202,
            column: 2
          },
          end: {
            line: 202,
            column: 3
          }
        },
        loc: {
          start: {
            line: 202,
            column: 18
          },
          end: {
            line: 204,
            column: 3
          }
        },
        line: 202
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 206,
            column: 2
          },
          end: {
            line: 206,
            column: 3
          }
        },
        loc: {
          start: {
            line: 206,
            column: 15
          },
          end: {
            line: 208,
            column: 3
          }
        },
        line: 206
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 214,
            column: 2
          },
          end: {
            line: 214,
            column: 3
          }
        },
        loc: {
          start: {
            line: 214,
            column: 10
          },
          end: {
            line: 216,
            column: 3
          }
        },
        line: 214
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
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
            line: 10,
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
        line: 10
      },
      "1": {
        loc: {
          start: {
            line: 129,
            column: 15
          },
          end: {
            line: 129,
            column: 29
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 129,
            column: 27
          },
          end: {
            line: 129,
            column: 29
          }
        }],
        line: 129
      },
      "2": {
        loc: {
          start: {
            line: 129,
            column: 31
          },
          end: {
            line: 129,
            column: 45
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 129,
            column: 43
          },
          end: {
            line: 129,
            column: 45
          }
        }],
        line: 129
      },
      "3": {
        loc: {
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 132,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 132,
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
        line: 130
      },
      "4": {
        loc: {
          start: {
            line: 130,
            column: 8
          },
          end: {
            line: 130,
            column: 51
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 130,
            column: 8
          },
          end: {
            line: 130,
            column: 18
          }
        }, {
          start: {
            line: 130,
            column: 22
          },
          end: {
            line: 130,
            column: 51
          }
        }],
        line: 130
      },
      "5": {
        loc: {
          start: {
            line: 134,
            column: 4
          },
          end: {
            line: 136,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 134,
            column: 4
          },
          end: {
            line: 136,
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
        line: 134
      },
      "6": {
        loc: {
          start: {
            line: 134,
            column: 8
          },
          end: {
            line: 134,
            column: 51
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 134,
            column: 8
          },
          end: {
            line: 134,
            column: 18
          }
        }, {
          start: {
            line: 134,
            column: 22
          },
          end: {
            line: 134,
            column: 51
          }
        }],
        line: 134
      },
      "7": {
        loc: {
          start: {
            line: 149,
            column: 4
          },
          end: {
            line: 151,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 149,
            column: 4
          },
          end: {
            line: 151,
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
        line: 149
      },
      "8": {
        loc: {
          start: {
            line: 180,
            column: 4
          },
          end: {
            line: 182,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 180,
            column: 4
          },
          end: {
            line: 182,
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
        line: 180
      },
      "9": {
        loc: {
          start: {
            line: 184,
            column: 4
          },
          end: {
            line: 186,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 184,
            column: 4
          },
          end: {
            line: 186,
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
        line: 184
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
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0
    },
    f: {
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
      "18": 0
    },
    b: {
      "0": [0, 0],
      "1": [0],
      "2": [0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "38405091c387a7e39de16598881daa84928c01b3"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1no0v22595 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1no0v22595();
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @ignore
 */
var TransactionBase = exports.TransactionBase = /*#__PURE__*/function () {
  function TransactionBase(tx, signatures, fee, networkPassphrase) {
    _classCallCheck(this, TransactionBase);
    cov_1no0v22595().f[0]++;
    cov_1no0v22595().s[0]++;
    if (typeof networkPassphrase !== 'string') {
      cov_1no0v22595().b[0][0]++;
      cov_1no0v22595().s[1]++;
      throw new Error("Invalid passphrase provided to Transaction: expected a string but got a ".concat(_typeof(networkPassphrase)));
    } else {
      cov_1no0v22595().b[0][1]++;
    }
    cov_1no0v22595().s[2]++;
    this._networkPassphrase = networkPassphrase;
    cov_1no0v22595().s[3]++;
    this._tx = tx;
    cov_1no0v22595().s[4]++;
    this._signatures = signatures;
    cov_1no0v22595().s[5]++;
    this._fee = fee;
  }

  /**
   * @type {Array.<xdr.DecoratedSignature>}
   * @readonly
   */
  return _createClass(TransactionBase, [{
    key: "signatures",
    get: function get() {
      cov_1no0v22595().f[1]++;
      cov_1no0v22595().s[6]++;
      return this._signatures;
    },
    set: function set(value) {
      cov_1no0v22595().f[2]++;
      cov_1no0v22595().s[7]++;
      throw new Error('Transaction is immutable');
    }
  }, {
    key: "tx",
    get: function get() {
      cov_1no0v22595().f[3]++;
      cov_1no0v22595().s[8]++;
      return this._tx;
    },
    set: function set(value) {
      cov_1no0v22595().f[4]++;
      cov_1no0v22595().s[9]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * @type {string}
     * @readonly
     */
  }, {
    key: "fee",
    get: function get() {
      cov_1no0v22595().f[5]++;
      cov_1no0v22595().s[10]++;
      return this._fee;
    },
    set: function set(value) {
      cov_1no0v22595().f[6]++;
      cov_1no0v22595().s[11]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * @type {string}
     * @readonly
     */
  }, {
    key: "networkPassphrase",
    get: function get() {
      cov_1no0v22595().f[7]++;
      cov_1no0v22595().s[12]++;
      return this._networkPassphrase;
    },
    set: function set(networkPassphrase) {
      cov_1no0v22595().f[8]++;
      cov_1no0v22595().s[13]++;
      this._networkPassphrase = networkPassphrase;
    }

    /**
     * Signs the transaction with the given {@link Keypair}.
     * @param {...Keypair} keypairs Keypairs of signers
     * @returns {void}
     */
  }, {
    key: "sign",
    value: function sign() {
      var _this = this;
      cov_1no0v22595().f[9]++;
      var txHash = (cov_1no0v22595().s[14]++, this.hash());
      cov_1no0v22595().s[15]++;
      for (var _len = arguments.length, keypairs = new Array(_len), _key = 0; _key < _len; _key++) {
        keypairs[_key] = arguments[_key];
      }
      keypairs.forEach(function (kp) {
        cov_1no0v22595().f[10]++;
        var sig = (cov_1no0v22595().s[16]++, kp.signDecorated(txHash));
        cov_1no0v22595().s[17]++;
        _this.signatures.push(sig);
      });
    }

    /**
     * Signs a transaction with the given {@link Keypair}. Useful if someone sends
     * you a transaction XDR for you to sign and return (see
     * [addSignature](#addSignature) for more information).
     *
     * When you get a transaction XDR to sign....
     * - Instantiate a `Transaction` object with the XDR
     * - Use {@link Keypair} to generate a keypair object for your Stellar seed.
     * - Run `getKeypairSignature` with that keypair
     * - Send back the signature along with your publicKey (not your secret seed!)
     *
     * Example:
     * ```javascript
     * // `transactionXDR` is a string from the person generating the transaction
     * const transaction = new Transaction(transactionXDR, networkPassphrase);
     * const keypair = Keypair.fromSecret(myStellarSeed);
     * return transaction.getKeypairSignature(keypair);
     * ```
     *
     * @param {Keypair} keypair Keypair of signer
     * @returns {string} Signature string
     */
  }, {
    key: "getKeypairSignature",
    value: function getKeypairSignature(keypair) {
      cov_1no0v22595().f[11]++;
      cov_1no0v22595().s[18]++;
      return keypair.sign(this.hash()).toString('base64');
    }

    /**
     * Add a signature to the transaction. Useful when a party wants to pre-sign
     * a transaction but doesn't want to give access to their secret keys.
     * This will also verify whether the signature is valid.
     *
     * Here's how you would use this feature to solicit multiple signatures.
     * - Use `TransactionBuilder` to build a new transaction.
     * - Make sure to set a long enough timeout on that transaction to give your
     * signers enough time to sign!
     * - Once you build the transaction, use `transaction.toXDR()` to get the
     * base64-encoded XDR string.
     * - _Warning!_ Once you've built this transaction, don't submit any other
     * transactions onto your account! Doing so will invalidate this pre-compiled
     * transaction!
     * - Send this XDR string to your other parties. They can use the instructions
     * for [getKeypairSignature](#getKeypairSignature) to sign the transaction.
     * - They should send you back their `publicKey` and the `signature` string
     * from [getKeypairSignature](#getKeypairSignature), both of which you pass to
     * this function.
     *
     * @param {string} publicKey The public key of the signer
     * @param {string} signature The base64 value of the signature XDR
     * @returns {void}
     */
  }, {
    key: "addSignature",
    value: function addSignature() {
      var publicKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1no0v22595().b[1][0]++, '');
      var signature = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_1no0v22595().b[2][0]++, '');
      cov_1no0v22595().f[12]++;
      cov_1no0v22595().s[19]++;
      if ((cov_1no0v22595().b[4][0]++, !signature) || (cov_1no0v22595().b[4][1]++, typeof signature !== 'string')) {
        cov_1no0v22595().b[3][0]++;
        cov_1no0v22595().s[20]++;
        throw new Error('Invalid signature');
      } else {
        cov_1no0v22595().b[3][1]++;
      }
      cov_1no0v22595().s[21]++;
      if ((cov_1no0v22595().b[6][0]++, !publicKey) || (cov_1no0v22595().b[6][1]++, typeof publicKey !== 'string')) {
        cov_1no0v22595().b[5][0]++;
        cov_1no0v22595().s[22]++;
        throw new Error('Invalid publicKey');
      } else {
        cov_1no0v22595().b[5][1]++;
      }
      var keypair;
      var hint;
      var signatureBuffer = (cov_1no0v22595().s[23]++, Buffer.from(signature, 'base64'));
      cov_1no0v22595().s[24]++;
      try {
        cov_1no0v22595().s[25]++;
        keypair = _keypair.Keypair.fromPublicKey(publicKey);
        cov_1no0v22595().s[26]++;
        hint = keypair.signatureHint();
      } catch (e) {
        cov_1no0v22595().s[27]++;
        throw new Error('Invalid publicKey');
      }
      cov_1no0v22595().s[28]++;
      if (!keypair.verify(this.hash(), signatureBuffer)) {
        cov_1no0v22595().b[7][0]++;
        cov_1no0v22595().s[29]++;
        throw new Error('Invalid signature');
      } else {
        cov_1no0v22595().b[7][1]++;
      }
      cov_1no0v22595().s[30]++;
      this.signatures.push(new _xdr["default"].DecoratedSignature({
        hint: hint,
        signature: signatureBuffer
      }));
    }

    /**
     * Add a decorated signature directly to the transaction envelope.
     *
     * @param {xdr.DecoratedSignature} signature    raw signature to add
     * @returns {void}
     *
     * @see Keypair.signDecorated
     * @see Keypair.signPayloadDecorated
     */
  }, {
    key: "addDecoratedSignature",
    value: function addDecoratedSignature(signature) {
      cov_1no0v22595().f[13]++;
      cov_1no0v22595().s[31]++;
      this.signatures.push(signature);
    }

    /**
     * Add `hashX` signer preimage as signature.
     * @param {Buffer|String} preimage Preimage of hash used as signer
     * @returns {void}
     */
  }, {
    key: "signHashX",
    value: function signHashX(preimage) {
      cov_1no0v22595().f[14]++;
      cov_1no0v22595().s[32]++;
      if (typeof preimage === 'string') {
        cov_1no0v22595().b[8][0]++;
        cov_1no0v22595().s[33]++;
        preimage = Buffer.from(preimage, 'hex');
      } else {
        cov_1no0v22595().b[8][1]++;
      }
      cov_1no0v22595().s[34]++;
      if (preimage.length > 64) {
        cov_1no0v22595().b[9][0]++;
        cov_1no0v22595().s[35]++;
        throw new Error('preimage cannnot be longer than 64 bytes');
      } else {
        cov_1no0v22595().b[9][1]++;
      }
      var signature = (cov_1no0v22595().s[36]++, preimage);
      var hashX = (cov_1no0v22595().s[37]++, (0, _hashing.hash)(preimage));
      var hint = (cov_1no0v22595().s[38]++, hashX.slice(hashX.length - 4));
      cov_1no0v22595().s[39]++;
      this.signatures.push(new _xdr["default"].DecoratedSignature({
        hint: hint,
        signature: signature
      }));
    }

    /**
     * Returns a hash for this transaction, suitable for signing.
     * @returns {Buffer}
     */
  }, {
    key: "hash",
    value: function hash() {
      cov_1no0v22595().f[15]++;
      cov_1no0v22595().s[40]++;
      return (0, _hashing.hash)(this.signatureBase());
    }
  }, {
    key: "signatureBase",
    value: function signatureBase() {
      cov_1no0v22595().f[16]++;
      cov_1no0v22595().s[41]++;
      throw new Error('Implement in subclass');
    }
  }, {
    key: "toEnvelope",
    value: function toEnvelope() {
      cov_1no0v22595().f[17]++;
      cov_1no0v22595().s[42]++;
      throw new Error('Implement in subclass');
    }

    /**
     * Get the transaction envelope as a base64-encoded string
     * @returns {string} XDR string
     */
  }, {
    key: "toXDR",
    value: function toXDR() {
      cov_1no0v22595().f[18]++;
      cov_1no0v22595().s[43]++;
      return this.toEnvelope().toXDR().toString('base64');
    }
  }]);
}();