"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _bignumber = _interopRequireDefault(require("bignumber.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_mefdo5hx1() {
  var path = "/mnt/g/stellar-base/src/util/bignumber.js";
  var hash = "dc7b68980da7972694836d280f45ac4797254025";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/util/bignumber.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 18
        },
        end: {
          line: 3,
          column: 41
        }
      },
      "1": {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 5,
          column: 23
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "dc7b68980da7972694836d280f45ac4797254025"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_mefdo5hx1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_mefdo5hx1();
var BigNumber = (cov_mefdo5hx1().s[0]++, _bignumber["default"].clone());
cov_mefdo5hx1().s[1]++;
BigNumber.DEBUG = true; // gives us exceptions on bad constructor values
var _default = exports["default"] = BigNumber;