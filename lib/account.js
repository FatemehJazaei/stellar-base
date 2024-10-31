"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Account = void 0;
var _bignumber = _interopRequireDefault(require("./util/bignumber"));
var _strkey = require("./strkey");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_290tl2xvzd() {
  var path = "/mnt/g/stellar-base/src/account.js";
  var hash = "858c93ee67d8bc0e38aa64274a41e90fe25c4d4c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/account.js",
    statementMap: {
      "0": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 26,
          column: 5
        }
      },
      "1": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 77
        }
      },
      "2": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 30,
          column: 5
        }
      },
      "3": {
        start: {
          line: 29,
          column: 6
        },
        end: {
          line: 29,
          column: 46
        }
      },
      "4": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 33,
          column: 5
        }
      },
      "5": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 32,
          column: 57
        }
      },
      "6": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 32
        }
      },
      "7": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 44
        }
      },
      "8": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 44,
          column: 27
        }
      },
      "9": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 51,
          column: 36
        }
      },
      "10": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 59,
          column: 42
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        loc: {
          start: {
            line: 23,
            column: 35
          },
          end: {
            line: 37,
            column: 3
          }
        },
        line: 23
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 43,
            column: 3
          }
        },
        loc: {
          start: {
            line: 43,
            column: 14
          },
          end: {
            line: 45,
            column: 3
          }
        },
        line: 43
      },
      "2": {
        name: "(anonymous_2)",
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
            column: 19
          },
          end: {
            line: 52,
            column: 3
          }
        },
        line: 50
      },
      "3": {
        name: "(anonymous_3)",
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
            column: 28
          },
          end: {
            line: 60,
            column: 3
          }
        },
        line: 58
      }
    },
    branchMap: {
      "0": {
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
      "1": {
        loc: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 30,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 30,
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
        line: 28
      },
      "2": {
        loc: {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 33,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 33,
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
        line: 31
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
      "10": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "858c93ee67d8bc0e38aa64274a41e90fe25c4d4c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_290tl2xvzd = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_290tl2xvzd();
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Create a new Account object.
 *
 * `Account` represents a single account in the Stellar network and its sequence
 * number. Account tracks the sequence number as it is used by {@link
 * TransactionBuilder}. See
 * [Accounts](https://developers.stellar.org/docs/glossary/accounts/) for
 * more information about how accounts work in Stellar.
 *
 * @constructor
 *
 * @param {string} accountId - ID of the account (ex.
 *     `GB3KJPLFUYN5VL6R3GU3EGCGVCKFDSD7BEDX42HWG5BWFKB3KQGJJRMA`). If you
 *     provide a muxed account address, this will throw; use {@link
 *     MuxedAccount} instead.
 * @param {string} sequence  - current sequence number of the account
 */
var Account = exports.Account = /*#__PURE__*/function () {
  function Account(accountId, sequence) {
    _classCallCheck(this, Account);
    cov_290tl2xvzd().f[0]++;
    cov_290tl2xvzd().s[0]++;
    if (_strkey.StrKey.isValidMdilithium2PublicKey(accountId)) {
      cov_290tl2xvzd().b[0][0]++;
      cov_290tl2xvzd().s[1]++;
      throw new Error('accountId is an M-address; use MuxedAccount instead');
    } else {
      cov_290tl2xvzd().b[0][1]++;
    }
    cov_290tl2xvzd().s[2]++;
    if (!_strkey.StrKey.isValidDilithium2PublicKey(accountId)) {
      cov_290tl2xvzd().b[1][0]++;
      cov_290tl2xvzd().s[3]++;
      throw new Error('accountId is invalid');
    } else {
      cov_290tl2xvzd().b[1][1]++;
    }
    cov_290tl2xvzd().s[4]++;
    if (!(typeof sequence === 'string')) {
      cov_290tl2xvzd().b[2][0]++;
      cov_290tl2xvzd().s[5]++;
      throw new Error('sequence must be of type string');
    } else {
      cov_290tl2xvzd().b[2][1]++;
    }
    cov_290tl2xvzd().s[6]++;
    this._accountId = accountId;
    cov_290tl2xvzd().s[7]++;
    this.sequence = new _bignumber["default"](sequence);
  }

  /**
   * Returns Stellar account ID.
   * @returns {string}
   */
  return _createClass(Account, [{
    key: "accountId",
    value: function accountId() {
      cov_290tl2xvzd().f[1]++;
      cov_290tl2xvzd().s[8]++;
      return this._accountId;
    }

    /**
     * @returns {string}  sequence number for the account as a string
     */
  }, {
    key: "sequenceNumber",
    value: function sequenceNumber() {
      cov_290tl2xvzd().f[2]++;
      cov_290tl2xvzd().s[9]++;
      return this.sequence.toString();
    }

    /**
     * Increments sequence number in this object by one.
     * @returns {void}
     */
  }, {
    key: "incrementSequenceNumber",
    value: function incrementSequenceNumber() {
      cov_290tl2xvzd().f[3]++;
      cov_290tl2xvzd().s[10]++;
      this.sequence = this.sequence.plus(1);
    }
  }]);
}();