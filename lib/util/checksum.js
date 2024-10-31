"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyChecksum = verifyChecksum;
function cov_19lhearqga() {
  var path = "/mnt/g/stellar-base/src/util/checksum.js";
  var hash = "72e0fb1f501e356e58309affad6c6b77ba5a4752";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/util/checksum.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 4,
          column: 3
        }
      },
      "1": {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 3,
          column: 17
        }
      },
      "2": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 8,
          column: 3
        }
      },
      "3": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 16
        }
      },
      "4": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 14,
          column: 3
        }
      },
      "5": {
        start: {
          line: 10,
          column: 15
        },
        end: {
          line: 10,
          column: 16
        }
      },
      "6": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 13,
          column: 5
        }
      },
      "7": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 19
        }
      },
      "8": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 14
        }
      }
    },
    fnMap: {
      "0": {
        name: "verifyChecksum",
        decl: {
          start: {
            line: 1,
            column: 16
          },
          end: {
            line: 1,
            column: 30
          }
        },
        loc: {
          start: {
            line: 1,
            column: 49
          },
          end: {
            line: 17,
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
            line: 2,
            column: 2
          },
          end: {
            line: 4,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 4,
            column: 3
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
        line: 2
      },
      "1": {
        loc: {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 8,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 8,
            column: 3
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
        line: 6
      },
      "2": {
        loc: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 13,
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
        line: 11
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
      "8": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "72e0fb1f501e356e58309affad6c6b77ba5a4752"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_19lhearqga = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_19lhearqga();
function verifyChecksum(expected, actual) {
  cov_19lhearqga().f[0]++;
  cov_19lhearqga().s[0]++;
  if (expected.length !== actual.length) {
    cov_19lhearqga().b[0][0]++;
    cov_19lhearqga().s[1]++;
    return false;
  } else {
    cov_19lhearqga().b[0][1]++;
  }
  cov_19lhearqga().s[2]++;
  if (expected.length === 0) {
    cov_19lhearqga().b[1][0]++;
    cov_19lhearqga().s[3]++;
    return true;
  } else {
    cov_19lhearqga().b[1][1]++;
  }
  cov_19lhearqga().s[4]++;
  for (var i = (cov_19lhearqga().s[5]++, 0); i < expected.length; i += 1) {
    cov_19lhearqga().s[6]++;
    if (expected[i] !== actual[i]) {
      cov_19lhearqga().b[2][0]++;
      cov_19lhearqga().s[7]++;
      return false;
    } else {
      cov_19lhearqga().b[2][1]++;
    }
  }
  cov_19lhearqga().s[8]++;
  return true;
}