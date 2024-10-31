"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trimEnd = void 0;
function cov_2eihqhb8ax() {
  var path = "/mnt/g/stellar-base/src/util/util.js";
  var hash = "f9c7d6fee75ba89499426c7b6e4c4c28b163555b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/util/util.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 23
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 19
        },
        end: {
          line: 2,
          column: 44
        }
      },
      "2": {
        start: {
          line: 3,
          column: 12
        },
        end: {
          line: 3,
          column: 25
        }
      },
      "3": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 7,
          column: 3
        }
      },
      "4": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 27
        }
      },
      "5": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 38
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 23
          },
          end: {
            line: 1,
            column: 24
          }
        },
        loc: {
          start: {
            line: 1,
            column: 40
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 9
          },
          end: {
            line: 9,
            column: 37
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 9,
            column: 20
          },
          end: {
            line: 9,
            column: 31
          }
        }, {
          start: {
            line: 9,
            column: 34
          },
          end: {
            line: 9,
            column: 37
          }
        }],
        line: 9
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f9c7d6fee75ba89499426c7b6e4c4c28b163555b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2eihqhb8ax = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2eihqhb8ax();
cov_2eihqhb8ax().s[0]++;
var trimEnd = exports.trimEnd = function trimEnd(input, _char) {
  cov_2eihqhb8ax().f[0]++;
  var isNumber = (cov_2eihqhb8ax().s[1]++, typeof input === 'number');
  var str = (cov_2eihqhb8ax().s[2]++, String(input));
  cov_2eihqhb8ax().s[3]++;
  while (str.endsWith(_char)) {
    cov_2eihqhb8ax().s[4]++;
    str = str.slice(0, -1);
  }
  cov_2eihqhb8ax().s[5]++;
  return isNumber ? (cov_2eihqhb8ax().b[0][0]++, Number(str)) : (cov_2eihqhb8ax().b[0][1]++, str);
};