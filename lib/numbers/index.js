"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Int128", {
  enumerable: true,
  get: function get() {
    return _int.Int128;
  }
});
Object.defineProperty(exports, "Int256", {
  enumerable: true,
  get: function get() {
    return _int2.Int256;
  }
});
Object.defineProperty(exports, "ScInt", {
  enumerable: true,
  get: function get() {
    return _sc_int.ScInt;
  }
});
Object.defineProperty(exports, "Uint128", {
  enumerable: true,
  get: function get() {
    return _uint.Uint128;
  }
});
Object.defineProperty(exports, "Uint256", {
  enumerable: true,
  get: function get() {
    return _uint2.Uint256;
  }
});
Object.defineProperty(exports, "XdrLargeInt", {
  enumerable: true,
  get: function get() {
    return _xdr_large_int.XdrLargeInt;
  }
});
exports.scValToBigInt = scValToBigInt;
var _xdr_large_int = require("./xdr_large_int");
var _uint = require("./uint128");
var _uint2 = require("./uint256");
var _int = require("./int128");
var _int2 = require("./int256");
var _sc_int = require("./sc_int");
function cov_1mcwmb1578() {
  var path = "/mnt/g/stellar-base/src/numbers/index.js";
  var hash = "f3a2cf8bb8cf4c2aaa3840e6e1d2c1f05931d59a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/numbers/index.js",
    statementMap: {
      "0": {
        start: {
          line: 29,
          column: 20
        },
        end: {
          line: 29,
          column: 58
        }
      },
      "1": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 58,
          column: 3
        }
      },
      "2": {
        start: {
          line: 34,
          column: 6
        },
        end: {
          line: 34,
          column: 33
        }
      },
      "3": {
        start: {
          line: 38,
          column: 6
        },
        end: {
          line: 38,
          column: 64
        }
      },
      "4": {
        start: {
          line: 42,
          column: 6
        },
        end: {
          line: 45,
          column: 20
        }
      },
      "5": {
        start: {
          line: 49,
          column: 6
        },
        end: {
          line: 54,
          column: 20
        }
      },
      "6": {
        start: {
          line: 57,
          column: 6
        },
        end: {
          line: 57,
          column: 68
        }
      }
    },
    fnMap: {
      "0": {
        name: "scValToBigInt",
        decl: {
          start: {
            line: 28,
            column: 16
          },
          end: {
            line: 28,
            column: 29
          }
        },
        loc: {
          start: {
            line: 28,
            column: 35
          },
          end: {
            line: 59,
            column: 1
          }
        },
        line: 28
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 32,
            column: 18
          }
        }, {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 34,
            column: 33
          }
        }, {
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 36,
            column: 18
          }
        }, {
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 38,
            column: 64
          }
        }, {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 40,
            column: 19
          }
        }, {
          start: {
            line: 41,
            column: 4
          },
          end: {
            line: 45,
            column: 20
          }
        }, {
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 47,
            column: 19
          }
        }, {
          start: {
            line: 48,
            column: 4
          },
          end: {
            line: 54,
            column: 20
          }
        }, {
          start: {
            line: 56,
            column: 4
          },
          end: {
            line: 57,
            column: 68
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
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f3a2cf8bb8cf4c2aaa3840e6e1d2c1f05931d59a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1mcwmb1578 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1mcwmb1578();
/**
 * Transforms an opaque {@link xdr.ScVal} into a native bigint, if possible.
 *
 * If you then want to use this in the abstractions provided by this module,
 * you can pass it to the constructor of {@link XdrLargeInt}.
 *
 * @example
 * let scv = contract.call("add", x, y); // assume it returns an xdr.ScVal
 * let bigi = scValToBigInt(scv);
 *
 * new ScInt(bigi);               // if you don't care about types, and
 * new XdrLargeInt('i128', bigi); // if you do
 *
 * @param {xdr.ScVal} scv - the raw XDR value to parse into an integer
 * @returns {bigint} the native value of this input value
 *
 * @throws {TypeError} if the `scv` input value doesn't represent an integer
 */
function scValToBigInt(scv) {
  cov_1mcwmb1578().f[0]++;
  var scIntType = (cov_1mcwmb1578().s[0]++, _xdr_large_int.XdrLargeInt.getType(scv["switch"]().name));
  cov_1mcwmb1578().s[1]++;
  switch (scv["switch"]().name) {
    case 'scvU32':
      cov_1mcwmb1578().b[0][0]++;
    case 'scvI32':
      cov_1mcwmb1578().b[0][1]++;
      cov_1mcwmb1578().s[2]++;
      return BigInt(scv.value());
    case 'scvU64':
      cov_1mcwmb1578().b[0][2]++;
    case 'scvI64':
      cov_1mcwmb1578().b[0][3]++;
      cov_1mcwmb1578().s[3]++;
      return new _xdr_large_int.XdrLargeInt(scIntType, scv.value()).toBigInt();
    case 'scvU128':
      cov_1mcwmb1578().b[0][4]++;
    case 'scvI128':
      cov_1mcwmb1578().b[0][5]++;
      cov_1mcwmb1578().s[4]++;
      return new _xdr_large_int.XdrLargeInt(scIntType, [scv.value().lo(), scv.value().hi()]).toBigInt();
    case 'scvU256':
      cov_1mcwmb1578().b[0][6]++;
    case 'scvI256':
      cov_1mcwmb1578().b[0][7]++;
      cov_1mcwmb1578().s[5]++;
      return new _xdr_large_int.XdrLargeInt(scIntType, [scv.value().loLo(), scv.value().loHi(), scv.value().hiLo(), scv.value().hiHi()]).toBigInt();
    default:
      cov_1mcwmb1578().b[0][8]++;
      cov_1mcwmb1578().s[6]++;
      throw TypeError("expected integer type, got ".concat(scv["switch"]()));
  }
}