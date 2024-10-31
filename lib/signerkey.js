"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignerKey = void 0;
var _xdr = _interopRequireDefault(require("./xdr"));
var _strkey = require("./strkey");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_1mdujwvldn() {
  var path = "/mnt/g/stellar-base/src/signerkey.js";
  var hash = "8a9a8f8d990f8bb2564b890bd3f5d6db3b18a549";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/signerkey.js",
    statementMap: {
      "0": {
        start: {
          line: 24,
          column: 25
        },
        end: {
          line: 29,
          column: 5
        }
      },
      "1": {
        start: {
          line: 31,
          column: 15
        },
        end: {
          line: 31,
          column: 54
        }
      },
      "2": {
        start: {
          line: 32,
          column: 20
        },
        end: {
          line: 32,
          column: 36
        }
      },
      "3": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 35,
          column: 5
        }
      },
      "4": {
        start: {
          line: 34,
          column: 6
        },
        end: {
          line: 34,
          column: 57
        }
      },
      "5": {
        start: {
          line: 37,
          column: 16
        },
        end: {
          line: 37,
          column: 40
        }
      },
      "6": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 52,
          column: 5
        }
      },
      "7": {
        start: {
          line: 40,
          column: 8
        },
        end: {
          line: 45,
          column: 10
        }
      },
      "8": {
        start: {
          line: 51,
          column: 8
        },
        end: {
          line: 51,
          column: 28
        }
      },
      "9": {
        start: {
          line: 65,
          column: 4
        },
        end: {
          line: 89,
          column: 5
        }
      },
      "10": {
        start: {
          line: 68,
          column: 8
        },
        end: {
          line: 68,
          column: 43
        }
      },
      "11": {
        start: {
          line: 69,
          column: 8
        },
        end: {
          line: 69,
          column: 32
        }
      },
      "12": {
        start: {
          line: 70,
          column: 8
        },
        end: {
          line: 70,
          column: 14
        }
      },
      "13": {
        start: {
          line: 73,
          column: 8
        },
        end: {
          line: 73,
          column: 33
        }
      },
      "14": {
        start: {
          line: 74,
          column: 8
        },
        end: {
          line: 74,
          column: 32
        }
      },
      "15": {
        start: {
          line: 75,
          column: 8
        },
        end: {
          line: 75,
          column: 14
        }
      },
      "16": {
        start: {
          line: 78,
          column: 8
        },
        end: {
          line: 78,
          column: 34
        }
      },
      "17": {
        start: {
          line: 79,
          column: 8
        },
        end: {
          line: 79,
          column: 32
        }
      },
      "18": {
        start: {
          line: 80,
          column: 8
        },
        end: {
          line: 80,
          column: 14
        }
      },
      "19": {
        start: {
          line: 83,
          column: 8
        },
        end: {
          line: 83,
          column: 37
        }
      },
      "20": {
        start: {
          line: 84,
          column: 8
        },
        end: {
          line: 84,
          column: 63
        }
      },
      "21": {
        start: {
          line: 85,
          column: 8
        },
        end: {
          line: 85,
          column: 14
        }
      },
      "22": {
        start: {
          line: 88,
          column: 8
        },
        end: {
          line: 88,
          column: 75
        }
      },
      "23": {
        start: {
          line: 91,
          column: 4
        },
        end: {
          line: 91,
          column: 40
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
            column: 32
          },
          end: {
            line: 53,
            column: 3
          }
        },
        line: 23
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 61,
            column: 2
          },
          end: {
            line: 61,
            column: 3
          }
        },
        loc: {
          start: {
            line: 61,
            column: 36
          },
          end: {
            line: 92,
            column: 3
          }
        },
        line: 61
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 35,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 35,
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
        line: 33
      },
      "1": {
        loc: {
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 52,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 39,
            column: 6
          },
          end: {
            line: 45,
            column: 10
          }
        }, {
          start: {
            line: 47,
            column: 6
          },
          end: {
            line: 47,
            column: 33
          }
        }, {
          start: {
            line: 48,
            column: 6
          },
          end: {
            line: 48,
            column: 23
          }
        }, {
          start: {
            line: 49,
            column: 6
          },
          end: {
            line: 49,
            column: 24
          }
        }, {
          start: {
            line: 50,
            column: 6
          },
          end: {
            line: 51,
            column: 28
          }
        }],
        line: 38
      },
      "2": {
        loc: {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 89,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 67,
            column: 6
          },
          end: {
            line: 70,
            column: 14
          }
        }, {
          start: {
            line: 72,
            column: 6
          },
          end: {
            line: 75,
            column: 14
          }
        }, {
          start: {
            line: 77,
            column: 6
          },
          end: {
            line: 80,
            column: 14
          }
        }, {
          start: {
            line: 82,
            column: 6
          },
          end: {
            line: 85,
            column: 14
          }
        }, {
          start: {
            line: 87,
            column: 6
          },
          end: {
            line: 88,
            column: 75
          }
        }],
        line: 65
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
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0, 0, 0, 0],
      "2": [0, 0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8a9a8f8d990f8bb2564b890bd3f5d6db3b18a549"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1mdujwvldn = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1mdujwvldn();
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * A container class with helpers to convert between signer keys
 * (`xdr.SignerKey`) and {@link StrKey}s.
 *
 * It's primarly used for manipulating the `extraSigners` precondition on a
 * {@link Transaction}.
 *
 * @see {@link TransactionBuilder.setExtraSigners}
 */
var SignerKey = exports.SignerKey = /*#__PURE__*/function () {
  function SignerKey() {
    _classCallCheck(this, SignerKey);
  }
  return _createClass(SignerKey, null, [{
    key: "decodeAddress",
    value:
    /**
     * Decodes a StrKey address into an xdr.SignerKey instance.
     *
     * Only dilithium2 public keys (D...), pre-auth transactions (T...), hashes
     * (H...), and signed payloads (P...) can be signer keys.
     *
     * @param   {string} address  a StrKey-encoded signer address
     * @returns {xdr.SignerKey}
     */
    function decodeAddress(address) {
      cov_1mdujwvldn().f[0]++;
      var signerKeyMap = (cov_1mdujwvldn().s[0]++, {
        dilithium2PublicKey: _xdr["default"].SignerKey.signerKeyTypeDilithium2,
        preAuthTx: _xdr["default"].SignerKey.signerKeyTypePreAuthTx,
        sha256Hash: _xdr["default"].SignerKey.signerKeyTypeHashX,
        signedPayload: _xdr["default"].SignerKey.signerKeyTypeDilithium2SignedPayload
      });
      var vb = (cov_1mdujwvldn().s[1]++, _strkey.StrKey.getVersionByteForPrefix(address));
      var encoder = (cov_1mdujwvldn().s[2]++, signerKeyMap[vb]);
      cov_1mdujwvldn().s[3]++;
      if (!encoder) {
        cov_1mdujwvldn().b[0][0]++;
        cov_1mdujwvldn().s[4]++;
        throw new Error("invalid signer key type (".concat(vb, ")"));
      } else {
        cov_1mdujwvldn().b[0][1]++;
      }
      var raw = (cov_1mdujwvldn().s[5]++, (0, _strkey.decodeCheck)(vb, address));
      cov_1mdujwvldn().s[6]++;
      switch (vb) {
        case 'signedPayload':
          cov_1mdujwvldn().b[1][0]++;
          cov_1mdujwvldn().s[7]++;
          return encoder(new _xdr["default"].SignerKeyDilithium2SignedPayload({
            dilithium2: raw.slice(0, 1312),
            payload: raw.slice(1312 + 4)
          }));
        case 'dilithium2PublicKey':
          cov_1mdujwvldn().b[1][1]++;
        // falls through
        case 'preAuthTx':
          cov_1mdujwvldn().b[1][2]++;
        // falls through
        case 'sha256Hash':
          cov_1mdujwvldn().b[1][3]++;
        // falls through
        default:
          cov_1mdujwvldn().b[1][4]++;
          cov_1mdujwvldn().s[8]++;
          return encoder(raw);
      }
    }

    /**
     * Encodes a signer key into its StrKey equivalent.
     *
     * @param   {xdr.SignerKey} signerKey   the signer
     * @returns {string} the StrKey representation of the signer
     */
  }, {
    key: "encodeSignerKey",
    value: function encodeSignerKey(signerKey) {
      cov_1mdujwvldn().f[1]++;
      var strkeyType;
      var raw;
      cov_1mdujwvldn().s[9]++;
      switch (signerKey["switch"]()) {
        case _xdr["default"].SignerKeyType.signerKeyTypeDilithium2():
          cov_1mdujwvldn().b[2][0]++;
          cov_1mdujwvldn().s[10]++;
          strkeyType = 'dilithium2PublicKey';
          cov_1mdujwvldn().s[11]++;
          raw = signerKey.value();
          cov_1mdujwvldn().s[12]++;
          break;
        case _xdr["default"].SignerKeyType.signerKeyTypePreAuthTx():
          cov_1mdujwvldn().b[2][1]++;
          cov_1mdujwvldn().s[13]++;
          strkeyType = 'preAuthTx';
          cov_1mdujwvldn().s[14]++;
          raw = signerKey.value();
          cov_1mdujwvldn().s[15]++;
          break;
        case _xdr["default"].SignerKeyType.signerKeyTypeHashX():
          cov_1mdujwvldn().b[2][2]++;
          cov_1mdujwvldn().s[16]++;
          strkeyType = 'sha256Hash';
          cov_1mdujwvldn().s[17]++;
          raw = signerKey.value();
          cov_1mdujwvldn().s[18]++;
          break;
        case _xdr["default"].SignerKeyType.signerKeyTypeDilithium2SignedPayload():
          cov_1mdujwvldn().b[2][3]++;
          cov_1mdujwvldn().s[19]++;
          strkeyType = 'signedPayload';
          cov_1mdujwvldn().s[20]++;
          raw = signerKey.dilithium2SignedPayload().toXDR('raw');
          cov_1mdujwvldn().s[21]++;
          break;
        default:
          cov_1mdujwvldn().b[2][4]++;
          cov_1mdujwvldn().s[22]++;
          throw new Error("invalid SignerKey (type: ".concat(signerKey["switch"](), ")"));
      }
      cov_1mdujwvldn().s[23]++;
      return (0, _strkey.encodeCheck)(strkeyType, raw);
    }
  }]);
}();