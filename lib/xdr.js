"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _curr_generated = _interopRequireDefault(require("./generated/curr_generated"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_2oy5w6fzz3() {
  var path = "/mnt/g/stellar-base/src/xdr.js";
  var hash = "d63bb4872db5dd88cb8fcc5e3cf8a8cc6bf2ff01";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/xdr.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d63bb4872db5dd88cb8fcc5e3cf8a8cc6bf2ff01"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2oy5w6fzz3 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2oy5w6fzz3();
var _default = exports["default"] = _curr_generated["default"];