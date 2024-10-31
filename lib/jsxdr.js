"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsXdr = require("@stellar/js-xdr");
function cov_1idv3eed35() {
  var path = "/mnt/g/stellar-base/src/jsxdr.js";
  var hash = "b2261d66404a73855aab90e659d96fc3b76ccb68";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/jsxdr.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 15
        },
        end: {
          line: 3,
          column: 39
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b2261d66404a73855aab90e659d96fc3b76ccb68"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1idv3eed35 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1idv3eed35();
var cereal = (cov_1idv3eed35().s[0]++, {
  XdrWriter: _jsXdr.XdrWriter,
  XdrReader: _jsXdr.XdrReader
});
var _default = exports["default"] = cereal;