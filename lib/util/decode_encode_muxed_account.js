"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeAddressToMuxedAccount = decodeAddressToMuxedAccount;
exports.encodeMuxedAccount = encodeMuxedAccount;
exports.encodeMuxedAccountToAddress = encodeMuxedAccountToAddress;
exports.extractBaseAddress = extractBaseAddress;
var _xdr = _interopRequireDefault(require("../xdr"));
var _strkey = require("../strkey");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_29s9j5xz9y() {
  var path = "/mnt/g/stellar-base/src/util/decode_encode_muxed_account.js";
  var hash = "f3621b3e4ac58e02e29fca13954cd811f704d149";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/util/decode_encode_muxed_account.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 17,
          column: 3
        }
      },
      "1": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 54
        }
      },
      "2": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 21,
          column: 4
        }
      },
      "3": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 42,
          column: 3
        }
      },
      "4": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 41,
          column: 59
        }
      },
      "5": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 44,
          column: 69
        }
      },
      "6": {
        start: {
          line: 56,
          column: 2
        },
        end: {
          line: 58,
          column: 3
        }
      },
      "7": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 57,
          column: 69
        }
      },
      "8": {
        start: {
          line: 59,
          column: 2
        },
        end: {
          line: 61,
          column: 3
        }
      },
      "9": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 60,
          column: 76
        }
      },
      "10": {
        start: {
          line: 63,
          column: 2
        },
        end: {
          line: 68,
          column: 4
        }
      },
      "11": {
        start: {
          line: 77,
          column: 2
        },
        end: {
          line: 79,
          column: 3
        }
      },
      "12": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 78,
          column: 19
        }
      },
      "13": {
        start: {
          line: 81,
          column: 2
        },
        end: {
          line: 83,
          column: 3
        }
      },
      "14": {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 82,
          column: 73
        }
      },
      "15": {
        start: {
          line: 85,
          column: 23
        },
        end: {
          line: 85,
          column: 59
        }
      },
      "16": {
        start: {
          line: 86,
          column: 2
        },
        end: {
          line: 86,
          column: 83
        }
      },
      "17": {
        start: {
          line: 91,
          column: 19
        },
        end: {
          line: 91,
          column: 61
        }
      },
      "18": {
        start: {
          line: 106,
          column: 2
        },
        end: {
          line: 111,
          column: 4
        }
      },
      "19": {
        start: {
          line: 116,
          column: 2
        },
        end: {
          line: 118,
          column: 3
        }
      },
      "20": {
        start: {
          line: 117,
          column: 4
        },
        end: {
          line: 117,
          column: 53
        }
      },
      "21": {
        start: {
          line: 120,
          column: 16
        },
        end: {
          line: 120,
          column: 42
        }
      },
      "22": {
        start: {
          line: 121,
          column: 2
        },
        end: {
          line: 123,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "decodeAddressToMuxedAccount",
        decl: {
          start: {
            line: 14,
            column: 16
          },
          end: {
            line: 14,
            column: 43
          }
        },
        loc: {
          start: {
            line: 14,
            column: 53
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 14
      },
      "1": {
        name: "encodeMuxedAccountToAddress",
        decl: {
          start: {
            line: 36,
            column: 16
          },
          end: {
            line: 36,
            column: 43
          }
        },
        loc: {
          start: {
            line: 36,
            column: 58
          },
          end: {
            line: 45,
            column: 1
          }
        },
        line: 36
      },
      "2": {
        name: "encodeMuxedAccount",
        decl: {
          start: {
            line: 55,
            column: 16
          },
          end: {
            line: 55,
            column: 34
          }
        },
        loc: {
          start: {
            line: 55,
            column: 48
          },
          end: {
            line: 69,
            column: 1
          }
        },
        line: 55
      },
      "3": {
        name: "extractBaseAddress",
        decl: {
          start: {
            line: 76,
            column: 16
          },
          end: {
            line: 76,
            column: 34
          }
        },
        loc: {
          start: {
            line: 76,
            column: 44
          },
          end: {
            line: 87,
            column: 1
          }
        },
        line: 76
      },
      "4": {
        name: "_decodeAddressFullyToMuxedAccount",
        decl: {
          start: {
            line: 90,
            column: 9
          },
          end: {
            line: 90,
            column: 42
          }
        },
        loc: {
          start: {
            line: 90,
            column: 52
          },
          end: {
            line: 112,
            column: 1
          }
        },
        line: 90
      },
      "5": {
        name: "_encodeMuxedAccountFullyToAddress",
        decl: {
          start: {
            line: 115,
            column: 9
          },
          end: {
            line: 115,
            column: 42
          }
        },
        loc: {
          start: {
            line: 115,
            column: 57
          },
          end: {
            line: 124,
            column: 1
          }
        },
        line: 115
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 17,
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
        line: 15
      },
      "1": {
        loc: {
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 42,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 42,
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
        line: 37
      },
      "2": {
        loc: {
          start: {
            line: 56,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 56,
            column: 2
          },
          end: {
            line: 58,
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
        line: 56
      },
      "3": {
        loc: {
          start: {
            line: 59,
            column: 2
          },
          end: {
            line: 61,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 59,
            column: 2
          },
          end: {
            line: 61,
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
        line: 59
      },
      "4": {
        loc: {
          start: {
            line: 77,
            column: 2
          },
          end: {
            line: 79,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 77,
            column: 2
          },
          end: {
            line: 79,
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
        line: 77
      },
      "5": {
        loc: {
          start: {
            line: 81,
            column: 2
          },
          end: {
            line: 83,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 81,
            column: 2
          },
          end: {
            line: 83,
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
        line: 81
      },
      "6": {
        loc: {
          start: {
            line: 116,
            column: 2
          },
          end: {
            line: 118,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 116,
            column: 2
          },
          end: {
            line: 118,
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
        line: 116
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
      "22": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f3621b3e4ac58e02e29fca13954cd811f704d149"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_29s9j5xz9y = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_29s9j5xz9y();
/**
 * Converts a Stellar address (in G... or M... form) to an `xdr.MuxedAccount`
 * structure, using the dilithium2 representation when possible.
 *
 * This supports full muxed accounts, where an `M...` address will resolve to
 * both its underlying `G...` address and an integer ID.
 *
 * @param   {string}  address   G... or M... address to encode into XDR
 * @returns {xdr.MuxedAccount}  a muxed account object for this address string
 */
function decodeAddressToMuxedAccount(address) {
  cov_29s9j5xz9y().f[0]++;
  cov_29s9j5xz9y().s[0]++;
  if (_strkey.StrKey.isValidMdilithium2PublicKey(address)) {
    cov_29s9j5xz9y().b[0][0]++;
    cov_29s9j5xz9y().s[1]++;
    return _decodeAddressFullyToMuxedAccount(address);
  } else {
    cov_29s9j5xz9y().b[0][1]++;
  }
  cov_29s9j5xz9y().s[2]++;
  return _xdr["default"].MuxedAccount.keyTypeDilithium2(_strkey.StrKey.decodeDilithium2PublicKey(address));
}

/**
 * Converts an xdr.MuxedAccount to its StrKey representation.
 *
 * This returns its "M..." string representation if there is a muxing ID within
 * the object and returns the "G..." representation otherwise.
 *
 * @param   {xdr.MuxedAccount} muxedAccount   Raw account to stringify
 * @returns {string} Stringified G... (corresponding to the underlying pubkey)
 *     or M... address (corresponding to both the key and the muxed ID)
 *
 * @see https://stellar.org/protocol/sep-23
 */
function encodeMuxedAccountToAddress(muxedAccount) {
  cov_29s9j5xz9y().f[1]++;
  cov_29s9j5xz9y().s[3]++;
  if (muxedAccount["switch"]().value === _xdr["default"].CryptoKeyType.keyTypeMuxedDilithium2().value) {
    cov_29s9j5xz9y().b[1][0]++;
    cov_29s9j5xz9y().s[4]++;
    return _encodeMuxedAccountFullyToAddress(muxedAccount);
  } else {
    cov_29s9j5xz9y().b[1][1]++;
  }
  cov_29s9j5xz9y().s[5]++;
  return _strkey.StrKey.encodeDilithium2PublicKey(muxedAccount.dilithium2());
}

/**
 * Transform a Stellar address (D...) and an ID into its XDR representation.
 *
 * @param  {string} address   - a Stellar D... address
 * @param  {string} id        - a Uint64 ID represented as a string
 *
 * @return {xdr.MuxedAccount} - XDR representation of the above muxed account
 */
function encodeMuxedAccount(address, id) {
  cov_29s9j5xz9y().f[2]++;
  cov_29s9j5xz9y().s[6]++;
  if (!_strkey.StrKey.isValidDilithium2PublicKey(address)) {
    cov_29s9j5xz9y().b[2][0]++;
    cov_29s9j5xz9y().s[7]++;
    throw new Error('address should be a Stellar account ID (G...)');
  } else {
    cov_29s9j5xz9y().b[2][1]++;
  }
  cov_29s9j5xz9y().s[8]++;
  if (typeof id !== 'string') {
    cov_29s9j5xz9y().b[3][0]++;
    cov_29s9j5xz9y().s[9]++;
    throw new Error('id should be a string representing a number (uint64)');
  } else {
    cov_29s9j5xz9y().b[3][1]++;
  }
  cov_29s9j5xz9y().s[10]++;
  return _xdr["default"].MuxedAccount.keyTypeMuxedDilithium2(new _xdr["default"].MuxedAccountMdilithium2({
    id: _xdr["default"].Uint64.fromString(id),
    dilithium2: _strkey.StrKey.decodeDilithium2PublicKey(address)
  }));
}

/**
 * Extracts the underlying base (D...) address from an M-address.
 * @param  {string} address   an account address (either M... or DS...)
 * @return {string} a Stellar public key address (D...)
 */
function extractBaseAddress(address) {
  cov_29s9j5xz9y().f[3]++;
  cov_29s9j5xz9y().s[11]++;
  if (_strkey.StrKey.isValidDilithium2PublicKey(address)) {
    cov_29s9j5xz9y().b[4][0]++;
    cov_29s9j5xz9y().s[12]++;
    return address;
  } else {
    cov_29s9j5xz9y().b[4][1]++;
  }
  cov_29s9j5xz9y().s[13]++;
  if (!_strkey.StrKey.isValidMdilithium2PublicKey(address)) {
    cov_29s9j5xz9y().b[5][0]++;
    cov_29s9j5xz9y().s[14]++;
    throw new TypeError("expected muxed account (M...), got ".concat(address));
  } else {
    cov_29s9j5xz9y().b[5][1]++;
  }
  var muxedAccount = (cov_29s9j5xz9y().s[15]++, decodeAddressToMuxedAccount(address));
  cov_29s9j5xz9y().s[16]++;
  return _strkey.StrKey.encodeDilithium2PublicKey(muxedAccount.mdilithium2().dilithium2());
}

// Decodes an "M..." account ID into its MuxedAccount object representation.
function _decodeAddressFullyToMuxedAccount(address) {
  cov_29s9j5xz9y().f[4]++;
  var rawBytes = (cov_29s9j5xz9y().s[17]++, _strkey.StrKey.decodeMdilithium2PublicKey(address));

  // Decoding M... addresses cannot be done through a simple
  // MuxedAccountMdilithium2.fromXDR() call, because the definition is:
  //
  //    constructor(attributes: { id: Uint64; dilithium2: Buffer });
  //
  // Note the ID is the first attribute. However, the ID comes *last* in the
  // stringified (base32-encoded) address itself (it's the last 8-byte suffix).
  // The `fromXDR()` method interprets bytes in order, so we need to parse out
  // the raw binary into its requisite parts, i.e. use the MuxedAccountMdilithium2
  // constructor directly.
  //
  // Refer to https://github.com/stellar/go/blob/master/xdr/muxed_account.go#L26
  // for the Golang implementation of the M... parsing.
  cov_29s9j5xz9y().s[18]++;
  return _xdr["default"].MuxedAccount.keyTypeMuxedDilithium2(new _xdr["default"].MuxedAccountMdilithium2({
    id: _xdr["default"].Uint64.fromXDR(rawBytes.subarray(-8)),
    dilithium2: rawBytes.subarray(0, -8)
  }));
}

// Converts an xdr.MuxedAccount into its *true* "M..." string representation.
function _encodeMuxedAccountFullyToAddress(muxedAccount) {
  cov_29s9j5xz9y().f[5]++;
  cov_29s9j5xz9y().s[19]++;
  if (muxedAccount["switch"]() === _xdr["default"].CryptoKeyType.keyTypeDilithium2()) {
    cov_29s9j5xz9y().b[6][0]++;
    cov_29s9j5xz9y().s[20]++;
    return encodeMuxedAccountToAddress(muxedAccount);
  } else {
    cov_29s9j5xz9y().b[6][1]++;
  }
  var muxed = (cov_29s9j5xz9y().s[21]++, muxedAccount.mdilithium2());
  cov_29s9j5xz9y().s[22]++;
  return _strkey.StrKey.encodeMdilithium2PublicKey(Buffer.concat([muxed.dilithium2(), muxed.id().toXDR('raw')]));
}