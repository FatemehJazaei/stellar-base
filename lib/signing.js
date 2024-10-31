"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FastSigning = void 0;
exports.generate = generate;
exports.generateSK = generateSK;
exports.sign = sign;
exports.verify = verify;
var _mlDsa = require("@noble/post-quantum/ml-dsa");
function cov_3kh2zvg3m() {
  var path = "/mnt/g/stellar-base/src/signing.js";
  var hash = "a4a4cce0d932e5d76ccabf72e4349857921d1205";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/signing.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 27
        },
        end: {
          line: 3,
          column: 31
        }
      },
      "1": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 27
        }
      },
      "2": {
        start: {
          line: 8,
          column: 21
        },
        end: {
          line: 8,
          column: 55
        }
      },
      "3": {
        start: {
          line: 9,
          column: 26
        },
        end: {
          line: 9,
          column: 65
        }
      },
      "4": {
        start: {
          line: 10,
          column: 20
        },
        end: {
          line: 10,
          column: 62
        }
      },
      "5": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 32
        }
      },
      "6": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 27
        }
      },
      "7": {
        start: {
          line: 17,
          column: 21
        },
        end: {
          line: 17,
          column: 55
        }
      },
      "8": {
        start: {
          line: 18,
          column: 26
        },
        end: {
          line: 18,
          column: 65
        }
      },
      "9": {
        start: {
          line: 19,
          column: 26
        },
        end: {
          line: 19,
          column: 65
        }
      },
      "10": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 72
        }
      },
      "11": {
        start: {
          line: 25,
          column: 25
        },
        end: {
          line: 25,
          column: 50
        }
      },
      "12": {
        start: {
          line: 26,
          column: 20
        },
        end: {
          line: 26,
          column: 51
        }
      },
      "13": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 27,
          column: 42
        }
      },
      "14": {
        start: {
          line: 33,
          column: 25
        },
        end: {
          line: 33,
          column: 50
        }
      },
      "15": {
        start: {
          line: 34,
          column: 20
        },
        end: {
          line: 34,
          column: 51
        }
      },
      "16": {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 35,
          column: 42
        }
      }
    },
    fnMap: {
      "0": {
        name: "sign",
        decl: {
          start: {
            line: 6,
            column: 16
          },
          end: {
            line: 6,
            column: 20
          }
        },
        loc: {
          start: {
            line: 6,
            column: 38
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 6
      },
      "1": {
        name: "verify",
        decl: {
          start: {
            line: 15,
            column: 16
          },
          end: {
            line: 15,
            column: 22
          }
        },
        loc: {
          start: {
            line: 15,
            column: 51
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 15
      },
      "2": {
        name: "generate",
        decl: {
          start: {
            line: 24,
            column: 16
          },
          end: {
            line: 24,
            column: 24
          }
        },
        loc: {
          start: {
            line: 24,
            column: 36
          },
          end: {
            line: 28,
            column: 1
          }
        },
        line: 24
      },
      "3": {
        name: "generateSK",
        decl: {
          start: {
            line: 32,
            column: 16
          },
          end: {
            line: 32,
            column: 26
          }
        },
        loc: {
          start: {
            line: 32,
            column: 38
          },
          end: {
            line: 36,
            column: 1
          }
        },
        line: 32
      }
    },
    branchMap: {},
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
      "16": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a4a4cce0d932e5d76ccabf72e4349857921d1205"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_3kh2zvg3m = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_3kh2zvg3m();
var FastSigning = exports.FastSigning = (cov_3kh2zvg3m().s[0]++, true);

// Function to sign data using a secret key
function sign(data, secretKey) {
  cov_3kh2zvg3m().f[0]++;
  cov_3kh2zvg3m().s[1]++;
  data = Buffer.from(data);
  var dataUint8 = (cov_3kh2zvg3m().s[2]++, new Uint8Array(data.toJSON().data));
  var secretKeyUint8 = (cov_3kh2zvg3m().s[3]++, new Uint8Array(secretKey.toJSON().data));
  var signature = (cov_3kh2zvg3m().s[4]++, _mlDsa.ml_dsa44.sign(secretKeyUint8, dataUint8));
  cov_3kh2zvg3m().s[5]++;
  return Buffer.from(signature);
}

// Function to verify a signature using publicKey and data
function verify(data, signature, publicKey) {
  cov_3kh2zvg3m().f[1]++;
  cov_3kh2zvg3m().s[6]++;
  data = Buffer.from(data);
  var dataUint8 = (cov_3kh2zvg3m().s[7]++, new Uint8Array(data.toJSON().data));
  var signatureUint8 = (cov_3kh2zvg3m().s[8]++, new Uint8Array(signature.toJSON().data));
  var publicKeyUint8 = (cov_3kh2zvg3m().s[9]++, new Uint8Array(publicKey.toJSON().data));
  cov_3kh2zvg3m().s[10]++;
  return _mlDsa.ml_dsa44.verify(publicKeyUint8, dataUint8, signatureUint8);
}

// Function to generate a public key from a seed key
function generate(secretKey) {
  cov_3kh2zvg3m().f[2]++;
  var secretKeyUint8 = (cov_3kh2zvg3m().s[11]++, new Uint8Array(secretKey));
  var aliceKeys = (cov_3kh2zvg3m().s[12]++, _mlDsa.ml_dsa44.keygen(secretKeyUint8));
  cov_3kh2zvg3m().s[13]++;
  return Buffer.from(aliceKeys.publicKey);
}

// Function to generate a secret key from a seed key

function generateSK(secretKey) {
  cov_3kh2zvg3m().f[3]++;
  var secretKeyUint8 = (cov_3kh2zvg3m().s[14]++, new Uint8Array(secretKey));
  var aliceKeys = (cov_3kh2zvg3m().s[15]++, _mlDsa.ml_dsa44.keygen(secretKeyUint8));
  cov_3kh2zvg3m().s[16]++;
  return Buffer.from(aliceKeys.secretKey);
}