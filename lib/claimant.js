"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Claimant = void 0;
var _xdr = _interopRequireDefault(require("./xdr"));
var _keypair = require("./keypair");
var _strkey = require("./strkey");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_niyjt30e8() {
  var path = "/mnt/g/stellar-base/src/claimant.js";
  var hash = "42ae4af170c129e47538b8c0cc73b3d8a7ec54bf";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/claimant.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 18,
          column: 5
        }
      },
      "1": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 48
        }
      },
      "2": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 36
        }
      },
      "3": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 27,
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
          column: 73
        }
      },
      "5": {
        start: {
          line: 23,
          column: 11
        },
        end: {
          line: 27,
          column: 5
        }
      },
      "6": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 34
        }
      },
      "7": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 26,
          column: 67
        }
      },
      "8": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 60
        }
      },
      "9": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 47,
          column: 5
        }
      },
      "10": {
        start: {
          line: 46,
          column: 6
        },
        end: {
          line: 46,
          column: 72
        }
      },
      "11": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 50,
          column: 5
        }
      },
      "12": {
        start: {
          line: 49,
          column: 6
        },
        end: {
          line: 49,
          column: 73
        }
      },
      "13": {
        start: {
          line: 52,
          column: 4
        },
        end: {
          line: 52,
          column: 63
        }
      },
      "14": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 64,
          column: 5
        }
      },
      "15": {
        start: {
          line: 63,
          column: 6
        },
        end: {
          line: 63,
          column: 72
        }
      },
      "16": {
        start: {
          line: 65,
          column: 4
        },
        end: {
          line: 67,
          column: 5
        }
      },
      "17": {
        start: {
          line: 66,
          column: 6
        },
        end: {
          line: 66,
          column: 73
        }
      },
      "18": {
        start: {
          line: 69,
          column: 4
        },
        end: {
          line: 69,
          column: 62
        }
      },
      "19": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 80,
          column: 5
        }
      },
      "20": {
        start: {
          line: 79,
          column: 6
        },
        end: {
          line: 79,
          column: 73
        }
      },
      "21": {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 82,
          column: 59
        }
      },
      "22": {
        start: {
          line: 96,
          column: 4
        },
        end: {
          line: 98,
          column: 6
        }
      },
      "23": {
        start: {
          line: 112,
          column: 4
        },
        end: {
          line: 114,
          column: 6
        }
      },
      "24": {
        start: {
          line: 124,
          column: 4
        },
        end: {
          line: 133,
          column: 5
        }
      },
      "25": {
        start: {
          line: 126,
          column: 8
        },
        end: {
          line: 126,
          column: 33
        }
      },
      "26": {
        start: {
          line: 127,
          column: 8
        },
        end: {
          line: 130,
          column: 10
        }
      },
      "27": {
        start: {
          line: 132,
          column: 8
        },
        end: {
          line: 132,
          column: 79
        }
      },
      "28": {
        start: {
          line: 141,
          column: 21
        },
        end: {
          line: 144,
          column: 6
        }
      },
      "29": {
        start: {
          line: 146,
          column: 4
        },
        end: {
          line: 146,
          column: 49
        }
      },
      "30": {
        start: {
          line: 154,
          column: 4
        },
        end: {
          line: 154,
          column: 29
        }
      },
      "31": {
        start: {
          line: 158,
          column: 4
        },
        end: {
          line: 158,
          column: 45
        }
      },
      "32": {
        start: {
          line: 166,
          column: 4
        },
        end: {
          line: 166,
          column: 27
        }
      },
      "33": {
        start: {
          line: 170,
          column: 4
        },
        end: {
          line: 170,
          column: 45
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        },
        loc: {
          start: {
            line: 15,
            column: 38
          },
          end: {
            line: 28,
            column: 3
          }
        },
        line: 15
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
            column: 34
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
            column: 35
          },
          end: {
            line: 53,
            column: 3
          }
        },
        line: 44
      },
      "3": {
        name: "(anonymous_3)",
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
            column: 34
          },
          end: {
            line: 70,
            column: 3
          }
        },
        line: 61
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 77,
            column: 2
          },
          end: {
            line: 77,
            column: 3
          }
        },
        loc: {
          start: {
            line: 77,
            column: 33
          },
          end: {
            line: 83,
            column: 3
          }
        },
        line: 77
      },
      "5": {
        name: "(anonymous_5)",
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
            column: 48
          },
          end: {
            line: 99,
            column: 3
          }
        },
        line: 95
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 111,
            column: 2
          },
          end: {
            line: 111,
            column: 3
          }
        },
        loc: {
          start: {
            line: 111,
            column: 46
          },
          end: {
            line: 115,
            column: 3
          }
        },
        line: 111
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
            column: 30
          },
          end: {
            line: 134,
            column: 3
          }
        },
        line: 122
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 140,
            column: 2
          },
          end: {
            line: 140,
            column: 3
          }
        },
        loc: {
          start: {
            line: 140,
            column: 16
          },
          end: {
            line: 147,
            column: 3
          }
        },
        line: 140
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 153,
            column: 2
          },
          end: {
            line: 153,
            column: 3
          }
        },
        loc: {
          start: {
            line: 153,
            column: 20
          },
          end: {
            line: 155,
            column: 3
          }
        },
        line: 153
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 157,
            column: 2
          },
          end: {
            line: 157,
            column: 3
          }
        },
        loc: {
          start: {
            line: 157,
            column: 25
          },
          end: {
            line: 159,
            column: 3
          }
        },
        line: 157
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 165,
            column: 2
          },
          end: {
            line: 165,
            column: 3
          }
        },
        loc: {
          start: {
            line: 165,
            column: 18
          },
          end: {
            line: 167,
            column: 3
          }
        },
        line: 165
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 169,
            column: 2
          },
          end: {
            line: 169,
            column: 3
          }
        },
        loc: {
          start: {
            line: 169,
            column: 23
          },
          end: {
            line: 171,
            column: 3
          }
        },
        line: 169
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 18,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 18,
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
        line: 16
      },
      "1": {
        loc: {
          start: {
            line: 16,
            column: 8
          },
          end: {
            line: 16,
            column: 70
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 16,
            column: 8
          },
          end: {
            line: 16,
            column: 19
          }
        }, {
          start: {
            line: 16,
            column: 23
          },
          end: {
            line: 16,
            column: 70
          }
        }],
        line: 16
      },
      "2": {
        loc: {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 27,
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
            line: 27,
            column: 5
          }
        }, {
          start: {
            line: 23,
            column: 11
          },
          end: {
            line: 27,
            column: 5
          }
        }],
        line: 21
      },
      "3": {
        loc: {
          start: {
            line: 23,
            column: 11
          },
          end: {
            line: 27,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 23,
            column: 11
          },
          end: {
            line: 27,
            column: 5
          }
        }, {
          start: {
            line: 25,
            column: 11
          },
          end: {
            line: 27,
            column: 5
          }
        }],
        line: 23
      },
      "4": {
        loc: {
          start: {
            line: 45,
            column: 4
          },
          end: {
            line: 47,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 45,
            column: 4
          },
          end: {
            line: 47,
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
        line: 45
      },
      "5": {
        loc: {
          start: {
            line: 48,
            column: 4
          },
          end: {
            line: 50,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 48,
            column: 4
          },
          end: {
            line: 50,
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
        line: 48
      },
      "6": {
        loc: {
          start: {
            line: 62,
            column: 4
          },
          end: {
            line: 64,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 62,
            column: 4
          },
          end: {
            line: 64,
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
        line: 62
      },
      "7": {
        loc: {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 67,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 67,
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
        line: 65
      },
      "8": {
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
      "9": {
        loc: {
          start: {
            line: 124,
            column: 4
          },
          end: {
            line: 133,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 125,
            column: 6
          },
          end: {
            line: 130,
            column: 10
          }
        }, {
          start: {
            line: 131,
            column: 6
          },
          end: {
            line: 132,
            column: 79
          }
        }],
        line: 124
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
      "33": 0
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
      "12": 0
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
      "8": [0, 0],
      "9": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "42ae4af170c129e47538b8c0cc73b3d8a7ec54bf"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_niyjt30e8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_niyjt30e8();
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Claimant class represents an xdr.Claimant
 *
 * The claim predicate is optional, it defaults to unconditional if none is specified.
 *
 * @constructor
 * @param {string} destination - The destination account ID.
 * @param {xdr.ClaimPredicate} [predicate] - The claim predicate.
 */
var Claimant = exports.Claimant = /*#__PURE__*/function () {
  function Claimant(destination, predicate) {
    _classCallCheck(this, Claimant);
    cov_niyjt30e8().f[0]++;
    cov_niyjt30e8().s[0]++;
    if ((cov_niyjt30e8().b[1][0]++, destination) && (cov_niyjt30e8().b[1][1]++, !_strkey.StrKey.isValidDilithium2PublicKey(destination))) {
      cov_niyjt30e8().b[0][0]++;
      cov_niyjt30e8().s[1]++;
      throw new Error('Destination is invalid');
    } else {
      cov_niyjt30e8().b[0][1]++;
    }
    cov_niyjt30e8().s[2]++;
    this._destination = destination;
    cov_niyjt30e8().s[3]++;
    if (!predicate) {
      cov_niyjt30e8().b[2][0]++;
      cov_niyjt30e8().s[4]++;
      this._predicate = _xdr["default"].ClaimPredicate.claimPredicateUnconditional();
    } else {
      cov_niyjt30e8().b[2][1]++;
      cov_niyjt30e8().s[5]++;
      if (predicate instanceof _xdr["default"].ClaimPredicate) {
        cov_niyjt30e8().b[3][0]++;
        cov_niyjt30e8().s[6]++;
        this._predicate = predicate;
      } else {
        cov_niyjt30e8().b[3][1]++;
        cov_niyjt30e8().s[7]++;
        throw new Error('Predicate should be an xdr.ClaimPredicate');
      }
    }
  }

  /**
   * Returns an unconditional claim predicate
   * @Return {xdr.ClaimPredicate}
   */
  return _createClass(Claimant, [{
    key: "toXDRObject",
    value:
    /**
     * Returns the xdr object for this claimant.
     * @returns {xdr.Claimant} XDR Claimant object
     */
    function toXDRObject() {
      cov_niyjt30e8().f[8]++;
      var claimant = (cov_niyjt30e8().s[28]++, new _xdr["default"].ClaimantV0({
        destination: _keypair.Keypair.fromPublicKey(this._destination).xdrAccountId(),
        predicate: this._predicate
      }));
      cov_niyjt30e8().s[29]++;
      return _xdr["default"].Claimant.claimantTypeV0(claimant);
    }

    /**
     * @type {string}
     * @readonly
     */
  }, {
    key: "destination",
    get: function get() {
      cov_niyjt30e8().f[9]++;
      cov_niyjt30e8().s[30]++;
      return this._destination;
    },
    set: function set(value) {
      cov_niyjt30e8().f[10]++;
      cov_niyjt30e8().s[31]++;
      throw new Error('Claimant is immutable');
    }

    /**
     * @type {xdr.ClaimPredicate}
     * @readonly
     */
  }, {
    key: "predicate",
    get: function get() {
      cov_niyjt30e8().f[11]++;
      cov_niyjt30e8().s[32]++;
      return this._predicate;
    },
    set: function set(value) {
      cov_niyjt30e8().f[12]++;
      cov_niyjt30e8().s[33]++;
      throw new Error('Claimant is immutable');
    }
  }], [{
    key: "predicateUnconditional",
    value: function predicateUnconditional() {
      cov_niyjt30e8().f[1]++;
      cov_niyjt30e8().s[8]++;
      return _xdr["default"].ClaimPredicate.claimPredicateUnconditional();
    }

    /**
     * Returns an `and` claim predicate
     * @param {xdr.ClaimPredicate} left an xdr.ClaimPredicate
     * @param {xdr.ClaimPredicate} right an xdr.ClaimPredicate
     * @Return {xdr.ClaimPredicate}
     */
  }, {
    key: "predicateAnd",
    value: function predicateAnd(left, right) {
      cov_niyjt30e8().f[2]++;
      cov_niyjt30e8().s[9]++;
      if (!(left instanceof _xdr["default"].ClaimPredicate)) {
        cov_niyjt30e8().b[4][0]++;
        cov_niyjt30e8().s[10]++;
        throw new Error('left Predicate should be an xdr.ClaimPredicate');
      } else {
        cov_niyjt30e8().b[4][1]++;
      }
      cov_niyjt30e8().s[11]++;
      if (!(right instanceof _xdr["default"].ClaimPredicate)) {
        cov_niyjt30e8().b[5][0]++;
        cov_niyjt30e8().s[12]++;
        throw new Error('right Predicate should be an xdr.ClaimPredicate');
      } else {
        cov_niyjt30e8().b[5][1]++;
      }
      cov_niyjt30e8().s[13]++;
      return _xdr["default"].ClaimPredicate.claimPredicateAnd([left, right]);
    }

    /**
     * Returns an `or` claim predicate
     * @param {xdr.ClaimPredicate} left an xdr.ClaimPredicate
     * @param {xdr.ClaimPredicate} right an xdr.ClaimPredicate
     * @Return {xdr.ClaimPredicate}
     */
  }, {
    key: "predicateOr",
    value: function predicateOr(left, right) {
      cov_niyjt30e8().f[3]++;
      cov_niyjt30e8().s[14]++;
      if (!(left instanceof _xdr["default"].ClaimPredicate)) {
        cov_niyjt30e8().b[6][0]++;
        cov_niyjt30e8().s[15]++;
        throw new Error('left Predicate should be an xdr.ClaimPredicate');
      } else {
        cov_niyjt30e8().b[6][1]++;
      }
      cov_niyjt30e8().s[16]++;
      if (!(right instanceof _xdr["default"].ClaimPredicate)) {
        cov_niyjt30e8().b[7][0]++;
        cov_niyjt30e8().s[17]++;
        throw new Error('right Predicate should be an xdr.ClaimPredicate');
      } else {
        cov_niyjt30e8().b[7][1]++;
      }
      cov_niyjt30e8().s[18]++;
      return _xdr["default"].ClaimPredicate.claimPredicateOr([left, right]);
    }

    /**
     * Returns a `not` claim predicate
     * @param {xdr.ClaimPredicate} predicate an xdr.ClaimPredicate
     * @Return {xdr.ClaimPredicate}
     */
  }, {
    key: "predicateNot",
    value: function predicateNot(predicate) {
      cov_niyjt30e8().f[4]++;
      cov_niyjt30e8().s[19]++;
      if (!(predicate instanceof _xdr["default"].ClaimPredicate)) {
        cov_niyjt30e8().b[8][0]++;
        cov_niyjt30e8().s[20]++;
        throw new Error('right Predicate should be an xdr.ClaimPredicate');
      } else {
        cov_niyjt30e8().b[8][1]++;
      }
      cov_niyjt30e8().s[21]++;
      return _xdr["default"].ClaimPredicate.claimPredicateNot(predicate);
    }

    /**
     * Returns a `BeforeAbsoluteTime` claim predicate
     *
     * This predicate will be fulfilled if the closing time of the ledger that
     * includes the CreateClaimableBalance operation is less than this (absolute)
     * Unix timestamp (expressed in seconds).
     *
     * @param {string} absBefore Unix epoch (in seconds) as a string
     * @Return {xdr.ClaimPredicate}
     */
  }, {
    key: "predicateBeforeAbsoluteTime",
    value: function predicateBeforeAbsoluteTime(absBefore) {
      cov_niyjt30e8().f[5]++;
      cov_niyjt30e8().s[22]++;
      return _xdr["default"].ClaimPredicate.claimPredicateBeforeAbsoluteTime(_xdr["default"].Int64.fromString(absBefore));
    }

    /**
     * Returns a `BeforeRelativeTime` claim predicate
     *
     * This predicate will be fulfilled if the closing time of the ledger that
     * includes the CreateClaimableBalance operation plus this relative time delta
     * (in seconds) is less than the current time.
     *
     * @param {strings} seconds seconds since closeTime of the ledger in which the ClaimableBalanceEntry was created (as string)
     * @Return {xdr.ClaimPredicate}
     */
  }, {
    key: "predicateBeforeRelativeTime",
    value: function predicateBeforeRelativeTime(seconds) {
      cov_niyjt30e8().f[6]++;
      cov_niyjt30e8().s[23]++;
      return _xdr["default"].ClaimPredicate.claimPredicateBeforeRelativeTime(_xdr["default"].Int64.fromString(seconds));
    }

    /**
     * Returns a claimant object from its XDR object representation.
     * @param {xdr.Claimant} claimantXdr - The claimant xdr object.
     * @returns {Claimant}
     */
  }, {
    key: "fromXDR",
    value: function fromXDR(claimantXdr) {
      cov_niyjt30e8().f[7]++;
      var value;
      cov_niyjt30e8().s[24]++;
      switch (claimantXdr["switch"]()) {
        case _xdr["default"].ClaimantType.claimantTypeV0():
          cov_niyjt30e8().b[9][0]++;
          cov_niyjt30e8().s[25]++;
          value = claimantXdr.v0();
          cov_niyjt30e8().s[26]++;
          return new this(_strkey.StrKey.encodeDilithium2PublicKey(value.destination().dilithium2()), value.predicate());
        default:
          cov_niyjt30e8().b[9][1]++;
          cov_niyjt30e8().s[27]++;
          throw new Error("Invalid claimant type: ".concat(claimantXdr["switch"]().name));
      }
    }
  }]);
}();