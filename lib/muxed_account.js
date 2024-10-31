"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MuxedAccount = void 0;
var _xdr = _interopRequireDefault(require("./xdr"));
var _account = require("./account");
var _strkey = require("./strkey");
var _decode_encode_muxed_account = require("./util/decode_encode_muxed_account");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_6a4em8p1() {
  var path = "/mnt/g/stellar-base/src/muxed_account.js";
  var hash = "4ee0ac30e23d19daa8b54ae4050a698417baad5a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/muxed_account.js",
    statementMap: {
      "0": {
        start: {
          line: 50,
          column: 22
        },
        end: {
          line: 50,
          column: 45
        }
      },
      "1": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 53,
          column: 5
        }
      },
      "2": {
        start: {
          line: 52,
          column: 6
        },
        end: {
          line: 52,
          column: 46
        }
      },
      "3": {
        start: {
          line: 55,
          column: 4
        },
        end: {
          line: 55,
          column: 31
        }
      },
      "4": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 56,
          column: 55
        }
      },
      "5": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 57,
          column: 65
        }
      },
      "6": {
        start: {
          line: 58,
          column: 4
        },
        end: {
          line: 58,
          column: 18
        }
      },
      "7": {
        start: {
          line: 73,
          column: 25
        },
        end: {
          line: 73,
          column: 62
        }
      },
      "8": {
        start: {
          line: 74,
          column: 21
        },
        end: {
          line: 74,
          column: 49
        }
      },
      "9": {
        start: {
          line: 75,
          column: 15
        },
        end: {
          line: 75,
          column: 57
        }
      },
      "10": {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 77,
          column: 68
        }
      },
      "11": {
        start: {
          line: 85,
          column: 4
        },
        end: {
          line: 85,
          column: 24
        }
      },
      "12": {
        start: {
          line: 92,
          column: 4
        },
        end: {
          line: 92,
          column: 26
        }
      },
      "13": {
        start: {
          line: 96,
          column: 4
        },
        end: {
          line: 96,
          column: 20
        }
      },
      "14": {
        start: {
          line: 100,
          column: 4
        },
        end: {
          line: 102,
          column: 5
        }
      },
      "15": {
        start: {
          line: 101,
          column: 6
        },
        end: {
          line: 101,
          column: 78
        }
      },
      "16": {
        start: {
          line: 104,
          column: 4
        },
        end: {
          line: 104,
          column: 63
        }
      },
      "17": {
        start: {
          line: 105,
          column: 4
        },
        end: {
          line: 105,
          column: 65
        }
      },
      "18": {
        start: {
          line: 106,
          column: 4
        },
        end: {
          line: 106,
          column: 18
        }
      },
      "19": {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 107,
          column: 16
        }
      },
      "20": {
        start: {
          line: 115,
          column: 4
        },
        end: {
          line: 115,
          column: 41
        }
      },
      "21": {
        start: {
          line: 123,
          column: 4
        },
        end: {
          line: 123,
          column: 50
        }
      },
      "22": {
        start: {
          line: 131,
          column: 4
        },
        end: {
          line: 131,
          column: 26
        }
      },
      "23": {
        start: {
          line: 135,
          column: 4
        },
        end: {
          line: 135,
          column: 62
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 49,
            column: 2
          },
          end: {
            line: 49,
            column: 3
          }
        },
        loc: {
          start: {
            line: 49,
            column: 31
          },
          end: {
            line: 59,
            column: 3
          }
        },
        line: 49
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 72,
            column: 2
          },
          end: {
            line: 72,
            column: 3
          }
        },
        loc: {
          start: {
            line: 72,
            column: 44
          },
          end: {
            line: 78,
            column: 3
          }
        },
        line: 72
      },
      "2": {
        name: "(anonymous_2)",
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
            column: 16
          },
          end: {
            line: 86,
            column: 3
          }
        },
        line: 84
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 91,
            column: 2
          },
          end: {
            line: 91,
            column: 3
          }
        },
        loc: {
          start: {
            line: 91,
            column: 14
          },
          end: {
            line: 93,
            column: 3
          }
        },
        line: 91
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 95,
            column: 2
          },
          end: {
            line: 95,
            column: 3
          }
        },
        loc: {
          start: {
            line: 95,
            column: 7
          },
          end: {
            line: 97,
            column: 3
          }
        },
        line: 95
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 99,
            column: 2
          },
          end: {
            line: 99,
            column: 3
          }
        },
        loc: {
          start: {
            line: 99,
            column: 12
          },
          end: {
            line: 108,
            column: 3
          }
        },
        line: 99
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 114,
            column: 2
          },
          end: {
            line: 114,
            column: 3
          }
        },
        loc: {
          start: {
            line: 114,
            column: 19
          },
          end: {
            line: 116,
            column: 3
          }
        },
        line: 114
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 122,
            column: 2
          },
          end: {
            line: 122,
            column: 3
          }
        },
        loc: {
          start: {
            line: 122,
            column: 28
          },
          end: {
            line: 124,
            column: 3
          }
        },
        line: 122
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 130,
            column: 2
          },
          end: {
            line: 130,
            column: 3
          }
        },
        loc: {
          start: {
            line: 130,
            column: 16
          },
          end: {
            line: 132,
            column: 3
          }
        },
        line: 130
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 134,
            column: 2
          },
          end: {
            line: 134,
            column: 3
          }
        },
        loc: {
          start: {
            line: 134,
            column: 28
          },
          end: {
            line: 136,
            column: 3
          }
        },
        line: 134
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 51,
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
            line: 51,
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
        line: 51
      },
      "1": {
        loc: {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 102,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 102,
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
        line: 100
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
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4ee0ac30e23d19daa8b54ae4050a698417baad5a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_6a4em8p1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_6a4em8p1();
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Represents a muxed account for transactions and operations.
 *
 * A muxed (or *multiplexed*) account (defined rigorously in
 * [CAP-27](https://stellar.org/protocol/cap-27) and briefly in
 * [SEP-23](https://stellar.org/protocol/sep-23)) is one that resolves a single
 * Stellar `G...`` account to many different underlying IDs.
 *
 * For example, you may have a single Stellar address for accounting purposes:
 *   GA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJVSGZ
 *
 * Yet would like to use it for 4 different family members:
 *   1: MA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJUAAAAAAAAAAAAGZFQ
 *   2: MA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJUAAAAAAAAAAAALIWQ
 *   3: MA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJUAAAAAAAAAAAAPYHQ
 *   4: MA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJUAAAAAAAAAAAAQLQQ
 *
 * This object makes it easy to create muxed accounts from regular accounts,
 * duplicate them, get/set the underlying IDs, etc. without mucking around with
 * the raw XDR.
 *
 * Because muxed accounts are purely an off-chain convention, they all share the
 * sequence number tied to their underlying G... account. Thus, this object
 * *requires* an {@link Account} instance to be passed in, so that muxed
 * instances of an account can collectively modify the sequence number whenever
 * a muxed account is used as the source of a @{link Transaction} with {@link
 * TransactionBuilder}.
 *
 * @constructor
 *
 * @param {Account}   account - the @{link Account} instance representing the
 *                              underlying G... address
 * @param {string}    id      - a stringified uint64 value that represents the
 *                              ID of the muxed account
 *
 * @link https://developers.stellar.org/docs/glossary/muxed-accounts/
 */
var MuxedAccount = exports.MuxedAccount = /*#__PURE__*/function () {
  function MuxedAccount(baseAccount, id) {
    _classCallCheck(this, MuxedAccount);
    cov_6a4em8p1().f[0]++;
    var accountId = (cov_6a4em8p1().s[0]++, baseAccount.accountId());
    cov_6a4em8p1().s[1]++;
    if (!_strkey.StrKey.isValidDilithium2PublicKey(accountId)) {
      cov_6a4em8p1().b[0][0]++;
      cov_6a4em8p1().s[2]++;
      throw new Error('accountId is invalid');
    } else {
      cov_6a4em8p1().b[0][1]++;
    }
    cov_6a4em8p1().s[3]++;
    this.account = baseAccount;
    cov_6a4em8p1().s[4]++;
    this._muxedXdr = (0, _decode_encode_muxed_account.encodeMuxedAccount)(accountId, id);
    cov_6a4em8p1().s[5]++;
    this._mAddress = (0, _decode_encode_muxed_account.encodeMuxedAccountToAddress)(this._muxedXdr);
    cov_6a4em8p1().s[6]++;
    this._id = id;
  }

  /**
   * Parses an M-address into a MuxedAccount object.
   *
   * @param  {string} mAddress    - an M-address to transform
   * @param  {string} sequenceNum - the sequence number of the underlying {@link
   *     Account}, to use for the underlying base account (@link
   *     MuxedAccount.baseAccount). If you're using the SDK, you can use
   *     `server.loadAccount` to fetch this if you don't know it.
   *
   * @return {MuxedAccount}
   */
  return _createClass(MuxedAccount, [{
    key: "baseAccount",
    value:
    /**
     * @return {Account} the underlying account object shared among all muxed
     *     accounts with this Stellar address
     */
    function baseAccount() {
      cov_6a4em8p1().f[2]++;
      cov_6a4em8p1().s[11]++;
      return this.account;
    }

    /**
     * @return {string} the M-address representing this account's (G-address, ID)
     */
  }, {
    key: "accountId",
    value: function accountId() {
      cov_6a4em8p1().f[3]++;
      cov_6a4em8p1().s[12]++;
      return this._mAddress;
    }
  }, {
    key: "id",
    value: function id() {
      cov_6a4em8p1().f[4]++;
      cov_6a4em8p1().s[13]++;
      return this._id;
    }
  }, {
    key: "setId",
    value: function setId(id) {
      cov_6a4em8p1().f[5]++;
      cov_6a4em8p1().s[14]++;
      if (typeof id !== 'string') {
        cov_6a4em8p1().b[1][0]++;
        cov_6a4em8p1().s[15]++;
        throw new Error('id should be a string representing a number (uint64)');
      } else {
        cov_6a4em8p1().b[1][1]++;
      }
      cov_6a4em8p1().s[16]++;
      this._muxedXdr.mdilithium2().id(_xdr["default"].Uint64.fromString(id));
      cov_6a4em8p1().s[17]++;
      this._mAddress = (0, _decode_encode_muxed_account.encodeMuxedAccountToAddress)(this._muxedXdr);
      cov_6a4em8p1().s[18]++;
      this._id = id;
      cov_6a4em8p1().s[19]++;
      return this;
    }

    /**
     * Accesses the underlying account's sequence number.
     * @return {string}  strigified sequence number for the underlying account
     */
  }, {
    key: "sequenceNumber",
    value: function sequenceNumber() {
      cov_6a4em8p1().f[6]++;
      cov_6a4em8p1().s[20]++;
      return this.account.sequenceNumber();
    }

    /**
     * Increments the underlying account's sequence number by one.
     * @return {void}
     */
  }, {
    key: "incrementSequenceNumber",
    value: function incrementSequenceNumber() {
      cov_6a4em8p1().f[7]++;
      cov_6a4em8p1().s[21]++;
      return this.account.incrementSequenceNumber();
    }

    /**
     * @return {xdr.MuxedAccount} the XDR object representing this muxed account's
     *     G-address and uint64 ID
     */
  }, {
    key: "toXDRObject",
    value: function toXDRObject() {
      cov_6a4em8p1().f[8]++;
      cov_6a4em8p1().s[22]++;
      return this._muxedXdr;
    }
  }, {
    key: "equals",
    value: function equals(otherMuxedAccount) {
      cov_6a4em8p1().f[9]++;
      cov_6a4em8p1().s[23]++;
      return this.accountId() === otherMuxedAccount.accountId();
    }
  }], [{
    key: "fromAddress",
    value: function fromAddress(mAddress, sequenceNum) {
      cov_6a4em8p1().f[1]++;
      var muxedAccount = (cov_6a4em8p1().s[7]++, (0, _decode_encode_muxed_account.decodeAddressToMuxedAccount)(mAddress));
      var gAddress = (cov_6a4em8p1().s[8]++, (0, _decode_encode_muxed_account.extractBaseAddress)(mAddress));
      var id = (cov_6a4em8p1().s[9]++, muxedAccount.mdilithium2().id().toString());
      cov_6a4em8p1().s[10]++;
      return new MuxedAccount(new _account.Account(gAddress, sequenceNum), id);
    }
  }]);
}();