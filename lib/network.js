"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Networks = void 0;
function cov_6m95vx04d() {
  var path = "/mnt/g/stellar-base/src/network.js";
  var hash = "0330520b907759906140869d23dfe4547d4903f0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/network.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 24
        },
        end: {
          line: 16,
          column: 1
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
    hash: "0330520b907759906140869d23dfe4547d4903f0"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_6m95vx04d = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_6m95vx04d();
/**
 * Contains passphrases for common networks:
 * * `Networks.PUBLIC`: `Public Global Stellar Network ; September 2015`
 * * `Networks.TESTNET`: `Test SDF Network ; September 2015`
 * * `Networks.FUTURENET`: `Test SDF Future Network ; October 2022`
 * * `Networks.STANDALONE`: `Standalone Network ; February 2017`
 *
 * @type {{PUBLIC: string, TESTNET: string, FUTURENET: string, STANDALONE: string }}
 */
var Networks = exports.Networks = (cov_6m95vx04d().s[0]++, {
  PUBLIC: 'Public Global Stellar Network ; September 2015',
  TESTNET: 'Test SDF Network ; September 2015',
  FUTURENET: 'Test SDF Future Network ; October 2022',
  SANDBOX: 'Local Sandbox Stellar Network ; September 2022',
  STANDALONE: 'Standalone Network ; February 2017'
});