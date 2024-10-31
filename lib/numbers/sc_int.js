"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScInt = void 0;
var _xdr_large_int = require("./xdr_large_int");
function cov_pmgq244eh() {
  var path = "/mnt/g/stellar-base/src/numbers/sc_int.js";
  var hash = "c56e8df46c01885e6e32982f34d6adff2a83d3e2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/numbers/sc_int.js",
    statementMap: {
      "0": {
        start: {
          line: 76,
          column: 19
        },
        end: {
          line: 76,
          column: 28
        }
      },
      "1": {
        start: {
          line: 77,
          column: 15
        },
        end: {
          line: 77,
          column: 31
        }
      },
      "2": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 80,
          column: 5
        }
      },
      "3": {
        start: {
          line: 79,
          column: 6
        },
        end: {
          line: 79,
          column: 77
        }
      },
      "4": {
        start: {
          line: 84,
          column: 4
        },
        end: {
          line: 100,
          column: 5
        }
      },
      "5": {
        start: {
          line: 85,
          column: 6
        },
        end: {
          line: 85,
          column: 32
        }
      },
      "6": {
        start: {
          line: 86,
          column: 21
        },
        end: {
          line: 86,
          column: 45
        }
      },
      "7": {
        start: {
          line: 88,
          column: 6
        },
        end: {
          line: 99,
          column: 7
        }
      },
      "8": {
        start: {
          line: 92,
          column: 10
        },
        end: {
          line: 92,
          column: 36
        }
      },
      "9": {
        start: {
          line: 93,
          column: 10
        },
        end: {
          line: 93,
          column: 16
        }
      },
      "10": {
        start: {
          line: 96,
          column: 10
        },
        end: {
          line: 98,
          column: 12
        }
      },
      "11": {
        start: {
          line: 102,
          column: 4
        },
        end: {
          line: 102,
          column: 23
        }
      },
      "12": {
        start: {
          line: 110,
          column: 17
        },
        end: {
          line: 110,
          column: 40
        }
      },
      "13": {
        start: {
          line: 111,
          column: 2
        },
        end: {
          line: 111,
          column: 63
        }
      },
      "14": {
        start: {
          line: 111,
          column: 38
        },
        end: {
          line: 111,
          column: 51
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
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
            column: 27
          },
          end: {
            line: 103,
            column: 3
          }
        },
        line: 75
      },
      "1": {
        name: "nearestBigIntSize",
        decl: {
          start: {
            line: 106,
            column: 9
          },
          end: {
            line: 106,
            column: 26
          }
        },
        loc: {
          start: {
            line: 106,
            column: 33
          },
          end: {
            line: 112,
            column: 1
          }
        },
        line: 106
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 111,
            column: 29
          },
          end: {
            line: 111,
            column: 30
          }
        },
        loc: {
          start: {
            line: 111,
            column: 38
          },
          end: {
            line: 111,
            column: 51
          }
        },
        line: 111
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 77,
            column: 15
          },
          end: {
            line: 77,
            column: 31
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 77,
            column: 15
          },
          end: {
            line: 77,
            column: 25
          }
        }, {
          start: {
            line: 77,
            column: 29
          },
          end: {
            line: 77,
            column: 31
          }
        }],
        line: 77
      },
      "1": {
        loc: {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 80,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 80,
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
        line: 78
      },
      "2": {
        loc: {
          start: {
            line: 78,
            column: 8
          },
          end: {
            line: 78,
            column: 38
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 78,
            column: 8
          },
          end: {
            line: 78,
            column: 28
          }
        }, {
          start: {
            line: 78,
            column: 32
          },
          end: {
            line: 78,
            column: 38
          }
        }],
        line: 78
      },
      "3": {
        loc: {
          start: {
            line: 84,
            column: 4
          },
          end: {
            line: 100,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 84,
            column: 4
          },
          end: {
            line: 100,
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
        line: 84
      },
      "4": {
        loc: {
          start: {
            line: 85,
            column: 13
          },
          end: {
            line: 85,
            column: 31
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 85,
            column: 22
          },
          end: {
            line: 85,
            column: 25
          }
        }, {
          start: {
            line: 85,
            column: 28
          },
          end: {
            line: 85,
            column: 31
          }
        }],
        line: 85
      },
      "5": {
        loc: {
          start: {
            line: 88,
            column: 6
          },
          end: {
            line: 99,
            column: 7
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 89,
            column: 8
          },
          end: {
            line: 89,
            column: 16
          }
        }, {
          start: {
            line: 90,
            column: 8
          },
          end: {
            line: 90,
            column: 17
          }
        }, {
          start: {
            line: 91,
            column: 8
          },
          end: {
            line: 93,
            column: 16
          }
        }, {
          start: {
            line: 95,
            column: 8
          },
          end: {
            line: 98,
            column: 12
          }
        }],
        line: 88
      },
      "6": {
        loc: {
          start: {
            line: 111,
            column: 9
          },
          end: {
            line: 111,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 111,
            column: 9
          },
          end: {
            line: 111,
            column: 52
          }
        }, {
          start: {
            line: 111,
            column: 56
          },
          end: {
            line: 111,
            column: 62
          }
        }],
        line: 111
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
      "14": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0, 0, 0],
      "6": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c56e8df46c01885e6e32982f34d6adff2a83d3e2"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_pmgq244eh = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_pmgq244eh();
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * Provides an easier way to manipulate large numbers for Stellar operations.
 *
 * You can instantiate this "**s**mart **c**ontract integer" value either from
 * bigints, strings, or numbers (whole numbers, or this will throw).
 *
 * If you need to create a native BigInt from a list of integer "parts" (for
 * example, you have a series of encoded 32-bit integers that represent a larger
 * value), you can use the lower level abstraction {@link XdrLargeInt}. For
 * example, you could do `new XdrLargeInt('u128', bytes...).toBigInt()`.
 *
 * @example
 * import { xdr, ScInt, scValToBigInt } from "@stellar/stellar-base";
 *
 * // You have an ScVal from a contract and want to parse it into JS native.
 * const value = xdr.ScVal.fromXDR(someXdr, "base64");
 * const bigi = scValToBigInt(value); // grab it as a BigInt
 * let sci = new ScInt(bigi);
 *
 * sci.toNumber(); // gives native JS type (w/ size check)
 * sci.toBigInt(); // gives the native BigInt value
 * sci.toU64();    // gives ScValType-specific XDR constructs (with size checks)
 *
 * // You have a number and want to shove it into a contract.
 * sci = ScInt(0xdeadcafebabe);
 * sci.toBigInt() // returns 244838016400062n
 * sci.toNumber() // throws: too large
 *
 * // Pass any to e.g. a Contract.call(), conversion happens automatically
 * // regardless of the initial type.
 * const scValU128 = sci.toU128();
 * const scValI256 = sci.toI256();
 * const scValU64  = sci.toU64();
 *
 * // Lots of ways to initialize:
 * ScInt("123456789123456789")
 * ScInt(123456789123456789n);
 * ScInt(1n << 140n);
 * ScInt(-42);
 * ScInt(scValToBigInt(scValU128)); // from above
 *
 * // If you know the type ahead of time (accessing `.raw` is faster than
 * // conversions), you can specify the type directly (otherwise, it's
 * // interpreted from the numbers you pass in):
 * const i = ScInt(123456789n, { type: "u256" });
 *
 * // For example, you can use the underlying `sdk.U256` and convert it to an
 * // `xdr.ScVal` directly like so:
 * const scv = new xdr.ScVal.scvU256(i.raw);
 *
 * // Or reinterpret it as a different type (size permitting):
 * const scv = i.toI64();
 *
 * @param {number|bigint|string} value - a single, integer-like value which will
 *    be interpreted in the smallest appropriate XDR type supported by Stellar
 *    (64, 128, or 256 bit integer values). signed values are supported, though
 *    they are sanity-checked against `opts.type`. if you need 32-bit values,
 *    you can construct them directly without needing this wrapper, e.g.
 *    `xdr.ScVal.scvU32(1234)`.
 *
 * @param {object}  [opts] - an optional object controlling optional parameters
 * @param {string}  [opts.type] - force a specific data type. the type choices
 *    are: 'i64', 'u64', 'i128', 'u128', 'i256', and 'u256' (default: the
 *    smallest one that fits the `value`)
 *
 * @throws {RangeError} if the `value` is invalid (e.g. floating point), too
 *    large (i.e. exceeds a 256-bit value), or doesn't fit in the `opts.type`
 * @throws {TypeError} on missing parameters, or if the "signedness" of `opts`
 *    doesn't match input `value`, e.g. passing `{type: 'u64'}` yet passing -1n
 * @throws {SyntaxError} if a string `value` can't be parsed as a big integer
 */
var ScInt = exports.ScInt = /*#__PURE__*/function (_XdrLargeInt) {
  function ScInt(value, opts) {
    var _ref;
    _classCallCheck(this, ScInt);
    cov_pmgq244eh().f[0]++;
    var signed = (cov_pmgq244eh().s[0]++, value < 0);
    var type = (cov_pmgq244eh().s[1]++, (_ref = (cov_pmgq244eh().b[0][0]++, opts === null || opts === void 0 ? void 0 : opts.type)) !== null && _ref !== void 0 ? _ref : (cov_pmgq244eh().b[0][1]++, ''));
    cov_pmgq244eh().s[2]++;
    if ((cov_pmgq244eh().b[2][0]++, type.startsWith('u')) && (cov_pmgq244eh().b[2][1]++, signed)) {
      cov_pmgq244eh().b[1][0]++;
      cov_pmgq244eh().s[3]++;
      throw TypeError("specified type ".concat(opts.type, " yet negative (").concat(value, ")"));
    } else {
      cov_pmgq244eh().b[1][1]++;
    }

    // If unspecified, we make a best guess at the type based on the bit length
    // of the value, treating 64 as a minimum and 256 as a maximum.
    cov_pmgq244eh().s[4]++;
    if (type === '') {
      cov_pmgq244eh().b[3][0]++;
      cov_pmgq244eh().s[5]++;
      type = signed ? (cov_pmgq244eh().b[4][0]++, 'i') : (cov_pmgq244eh().b[4][1]++, 'u');
      var bitlen = (cov_pmgq244eh().s[6]++, nearestBigIntSize(value));
      cov_pmgq244eh().s[7]++;
      switch (bitlen) {
        case 64:
          cov_pmgq244eh().b[5][0]++;
        case 128:
          cov_pmgq244eh().b[5][1]++;
        case 256:
          cov_pmgq244eh().b[5][2]++;
          cov_pmgq244eh().s[8]++;
          type += bitlen.toString();
          cov_pmgq244eh().s[9]++;
          break;
        default:
          cov_pmgq244eh().b[5][3]++;
          cov_pmgq244eh().s[10]++;
          throw RangeError("expected 64/128/256 bits for input (".concat(value, "), got ").concat(bitlen));
      }
    } else {
      cov_pmgq244eh().b[3][1]++;
    }
    cov_pmgq244eh().s[11]++;
    return _callSuper(this, ScInt, [type, value]);
  }
  _inherits(ScInt, _XdrLargeInt);
  return _createClass(ScInt);
}(_xdr_large_int.XdrLargeInt);
function nearestBigIntSize(bigI) {
  var _ref2;
  cov_pmgq244eh().f[1]++;
  // Note: Even though BigInt.toString(2) includes the negative sign for
  // negative values (???), the following is still accurate, because the
  // negative sign would be represented by a sign bit.
  var bitlen = (cov_pmgq244eh().s[12]++, bigI.toString(2).length);
  cov_pmgq244eh().s[13]++;
  return (_ref2 = (cov_pmgq244eh().b[6][0]++, [64, 128, 256].find(function (len) {
    cov_pmgq244eh().f[2]++;
    cov_pmgq244eh().s[14]++;
    return bitlen <= len;
  }))) !== null && _ref2 !== void 0 ? _ref2 : (cov_pmgq244eh().b[6][1]++, bitlen);
}