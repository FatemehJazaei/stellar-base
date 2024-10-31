"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Address = void 0;
var _strkey = require("./strkey");
var _xdr = _interopRequireDefault(require("./xdr"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_1slm80zu91() {
  var path = "/mnt/g/stellar-base/src/address.js";
  var hash = "89a248b4d91031ab4a34032c9e904960cd6d40a9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/address.js",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 26,
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
          column: 29
        }
      },
      "2": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 20,
          column: 60
        }
      },
      "3": {
        start: {
          line: 21,
          column: 11
        },
        end: {
          line: 26,
          column: 5
        }
      },
      "4": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 22,
          column: 30
        }
      },
      "5": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 23,
          column: 49
        }
      },
      "6": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 62
        }
      },
      "7": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 32
        }
      },
      "8": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 65
        }
      },
      "9": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 56,
          column: 54
        }
      },
      "10": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 66,
          column: 50
        }
      },
      "11": {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 83,
          column: 5
        }
      },
      "12": {
        start: {
          line: 78,
          column: 8
        },
        end: {
          line: 78,
          column: 67
        }
      },
      "13": {
        start: {
          line: 80,
          column: 8
        },
        end: {
          line: 80,
          column: 56
        }
      },
      "14": {
        start: {
          line: 82,
          column: 8
        },
        end: {
          line: 82,
          column: 52
        }
      },
      "15": {
        start: {
          line: 92,
          column: 4
        },
        end: {
          line: 99,
          column: 5
        }
      },
      "16": {
        start: {
          line: 94,
          column: 8
        },
        end: {
          line: 94,
          column: 59
        }
      },
      "17": {
        start: {
          line: 96,
          column: 8
        },
        end: {
          line: 96,
          column: 48
        }
      },
      "18": {
        start: {
          line: 98,
          column: 8
        },
        end: {
          line: 98,
          column: 52
        }
      },
      "19": {
        start: {
          line: 108,
          column: 4
        },
        end: {
          line: 108,
          column: 52
        }
      },
      "20": {
        start: {
          line: 117,
          column: 4
        },
        end: {
          line: 126,
          column: 5
        }
      },
      "21": {
        start: {
          line: 119,
          column: 8
        },
        end: {
          line: 121,
          column: 10
        }
      },
      "22": {
        start: {
          line: 123,
          column: 8
        },
        end: {
          line: 123,
          column: 62
        }
      },
      "23": {
        start: {
          line: 125,
          column: 8
        },
        end: {
          line: 125,
          column: 52
        }
      },
      "24": {
        start: {
          line: 135,
          column: 4
        },
        end: {
          line: 135,
          column: 21
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
            column: 23
          },
          end: {
            line: 27,
            column: 3
          }
        },
        line: 17
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 35,
            column: 2
          },
          end: {
            line: 35,
            column: 3
          }
        },
        loc: {
          start: {
            line: 35,
            column: 29
          },
          end: {
            line: 37,
            column: 3
          }
        },
        line: 35
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 45,
            column: 2
          },
          end: {
            line: 45,
            column: 3
          }
        },
        loc: {
          start: {
            line: 45,
            column: 25
          },
          end: {
            line: 47,
            column: 3
          }
        },
        line: 45
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 55,
            column: 2
          },
          end: {
            line: 55,
            column: 3
          }
        },
        loc: {
          start: {
            line: 55,
            column: 26
          },
          end: {
            line: 57,
            column: 3
          }
        },
        line: 55
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 65,
            column: 2
          },
          end: {
            line: 65,
            column: 3
          }
        },
        loc: {
          start: {
            line: 65,
            column: 26
          },
          end: {
            line: 67,
            column: 3
          }
        },
        line: 65
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 75,
            column: 2
          },
          end: {
            line: 75,
            column: 3
          }
        },
        loc: {
          start: {
            line: 75,
            column: 34
          },
          end: {
            line: 84,
            column: 3
          }
        },
        line: 75
      },
      "6": {
        name: "(anonymous_6)",
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
            column: 13
          },
          end: {
            line: 100,
            column: 3
          }
        },
        line: 91
      },
      "7": {
        name: "(anonymous_7)",
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
            column: 12
          },
          end: {
            line: 109,
            column: 3
          }
        },
        line: 107
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 116,
            column: 2
          },
          end: {
            line: 116,
            column: 3
          }
        },
        loc: {
          start: {
            line: 116,
            column: 16
          },
          end: {
            line: 127,
            column: 3
          }
        },
        line: 116
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
            column: 13
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
            line: 18,
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
            line: 18,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        }, {
          start: {
            line: 21,
            column: 11
          },
          end: {
            line: 26,
            column: 5
          }
        }],
        line: 18
      },
      "1": {
        loc: {
          start: {
            line: 21,
            column: 11
          },
          end: {
            line: 26,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 21,
            column: 11
          },
          end: {
            line: 26,
            column: 5
          }
        }, {
          start: {
            line: 24,
            column: 11
          },
          end: {
            line: 26,
            column: 5
          }
        }],
        line: 21
      },
      "2": {
        loc: {
          start: {
            line: 76,
            column: 4
          },
          end: {
            line: 83,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 77,
            column: 6
          },
          end: {
            line: 78,
            column: 67
          }
        }, {
          start: {
            line: 79,
            column: 6
          },
          end: {
            line: 80,
            column: 56
          }
        }, {
          start: {
            line: 81,
            column: 6
          },
          end: {
            line: 82,
            column: 52
          }
        }],
        line: 76
      },
      "3": {
        loc: {
          start: {
            line: 92,
            column: 4
          },
          end: {
            line: 99,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 93,
            column: 6
          },
          end: {
            line: 94,
            column: 59
          }
        }, {
          start: {
            line: 95,
            column: 6
          },
          end: {
            line: 96,
            column: 48
          }
        }, {
          start: {
            line: 97,
            column: 6
          },
          end: {
            line: 98,
            column: 52
          }
        }],
        line: 92
      },
      "4": {
        loc: {
          start: {
            line: 117,
            column: 4
          },
          end: {
            line: 126,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 118,
            column: 6
          },
          end: {
            line: 121,
            column: 10
          }
        }, {
          start: {
            line: 122,
            column: 6
          },
          end: {
            line: 123,
            column: 62
          }
        }, {
          start: {
            line: 124,
            column: 6
          },
          end: {
            line: 125,
            column: 52
          }
        }],
        line: 117
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
      "24": 0
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
      "1": [0, 0],
      "2": [0, 0, 0],
      "3": [0, 0, 0],
      "4": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "89a248b4d91031ab4a34032c9e904960cd6d40a9"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1slm80zu91 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1slm80zu91();
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Create a new Address object.
 *
 * `Address` represents a single address in the Stellar network. An address can
 * represent an account or a contract.
 *
 * @constructor
 *
 * @param {string} address - ID of the account, If you
 *     provide a muxed account address, this will throw; use {@link
 *     MuxedAccount} instead.
 */
var Address = exports.Address = /*#__PURE__*/function () {
  function Address(address) {
    _classCallCheck(this, Address);
    cov_1slm80zu91().f[0]++;
    cov_1slm80zu91().s[0]++;
    if (_strkey.StrKey.isValidDilithium2PublicKey(address)) {
      cov_1slm80zu91().b[0][0]++;
      cov_1slm80zu91().s[1]++;
      this._type = 'account';
      cov_1slm80zu91().s[2]++;
      this._key = _strkey.StrKey.decodeDilithium2PublicKey(address);
    } else {
      cov_1slm80zu91().b[0][1]++;
      cov_1slm80zu91().s[3]++;
      if (_strkey.StrKey.isValidContract(address)) {
        cov_1slm80zu91().b[1][0]++;
        cov_1slm80zu91().s[4]++;
        this._type = 'contract';
        cov_1slm80zu91().s[5]++;
        this._key = _strkey.StrKey.decodeContract(address);
      } else {
        cov_1slm80zu91().b[1][1]++;
        cov_1slm80zu91().s[6]++;
        throw new Error("Unsupported address type: ".concat(address));
      }
    }
  }

  /**
   * Parses a string and returns an Address object.
   *
   * @param {string} address - The address to parse. ex. `GB3KJPLFUYN5VL6R3GU3EGCGVCKFDSD7BEDX42HWG5BWFKB3KQGJJRMA`
   * @returns {Address}
   */
  return _createClass(Address, [{
    key: "toString",
    value:
    /**
     * Serialize an address to string.
     *
     * @returns {string}
     */
    function toString() {
      cov_1slm80zu91().f[6]++;
      cov_1slm80zu91().s[15]++;
      switch (this._type) {
        case 'account':
          cov_1slm80zu91().b[3][0]++;
          cov_1slm80zu91().s[16]++;
          return _strkey.StrKey.encodeDilithium2PublicKey(this._key);
        case 'contract':
          cov_1slm80zu91().b[3][1]++;
          cov_1slm80zu91().s[17]++;
          return _strkey.StrKey.encodeContract(this._key);
        default:
          cov_1slm80zu91().b[3][2]++;
          cov_1slm80zu91().s[18]++;
          throw new Error('Unsupported address type');
      }
    }

    /**
     * Convert this Address to an xdr.ScVal type.
     *
     * @returns {xdr.ScVal}
     */
  }, {
    key: "toScVal",
    value: function toScVal() {
      cov_1slm80zu91().f[7]++;
      cov_1slm80zu91().s[19]++;
      return _xdr["default"].ScVal.scvAddress(this.toScAddress());
    }

    /**
     * Convert this Address to an xdr.ScAddress type.
     *
     * @returns {xdr.ScAddress}
     */
  }, {
    key: "toScAddress",
    value: function toScAddress() {
      cov_1slm80zu91().f[8]++;
      cov_1slm80zu91().s[20]++;
      switch (this._type) {
        case 'account':
          cov_1slm80zu91().b[4][0]++;
          cov_1slm80zu91().s[21]++;
          return _xdr["default"].ScAddress.scAddressTypeAccount(_xdr["default"].PublicKey.publicKeyTypeDilithium2(this._key));
        case 'contract':
          cov_1slm80zu91().b[4][1]++;
          cov_1slm80zu91().s[22]++;
          return _xdr["default"].ScAddress.scAddressTypeContract(this._key);
        default:
          cov_1slm80zu91().b[4][2]++;
          cov_1slm80zu91().s[23]++;
          throw new Error('Unsupported address type');
      }
    }

    /**
     * Return the raw public key bytes for this address.
     *
     * @returns {Buffer}
     */
  }, {
    key: "toBuffer",
    value: function toBuffer() {
      cov_1slm80zu91().f[9]++;
      cov_1slm80zu91().s[24]++;
      return this._key;
    }
  }], [{
    key: "fromString",
    value: function fromString(address) {
      cov_1slm80zu91().f[1]++;
      cov_1slm80zu91().s[7]++;
      return new Address(address);
    }

    /**
     * Creates a new account Address object from a buffer of raw bytes.
     *
     * @param {Buffer} buffer - The bytes of an address to parse.
     * @returns {Address}
     */
  }, {
    key: "account",
    value: function account(buffer) {
      cov_1slm80zu91().f[2]++;
      cov_1slm80zu91().s[8]++;
      return new Address(_strkey.StrKey.encodeDilithium2PublicKey(buffer));
    }

    /**
     * Creates a new contract Address object from a buffer of raw bytes.
     *
     * @param {Buffer} buffer - The bytes of an address to parse.
     * @returns {Address}
     */
  }, {
    key: "contract",
    value: function contract(buffer) {
      cov_1slm80zu91().f[3]++;
      cov_1slm80zu91().s[9]++;
      return new Address(_strkey.StrKey.encodeContract(buffer));
    }

    /**
     * Convert this from an xdr.ScVal type
     *
     * @param {xdr.ScVal} scVal - The xdr.ScVal type to parse
     * @returns {Address}
     */
  }, {
    key: "fromScVal",
    value: function fromScVal(scVal) {
      cov_1slm80zu91().f[4]++;
      cov_1slm80zu91().s[10]++;
      return Address.fromScAddress(scVal.address());
    }

    /**
     * Convert this from an xdr.ScAddress type
     *
     * @param {xdr.ScAddress} scAddress - The xdr.ScAddress type to parse
     * @returns {Address}
     */
  }, {
    key: "fromScAddress",
    value: function fromScAddress(scAddress) {
      cov_1slm80zu91().f[5]++;
      cov_1slm80zu91().s[11]++;
      switch (scAddress["switch"]()) {
        case _xdr["default"].ScAddressType.scAddressTypeAccount():
          cov_1slm80zu91().b[2][0]++;
          cov_1slm80zu91().s[12]++;
          return Address.account(scAddress.accountId().dilithium2());
        case _xdr["default"].ScAddressType.scAddressTypeContract():
          cov_1slm80zu91().b[2][1]++;
          cov_1slm80zu91().s[13]++;
          return Address.contract(scAddress.contractId());
        default:
          cov_1slm80zu91().b[2][2]++;
          cov_1slm80zu91().s[14]++;
          throw new Error('Unsupported address type');
      }
    }
  }]);
}();