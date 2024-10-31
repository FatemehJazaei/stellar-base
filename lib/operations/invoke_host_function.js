"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCustomContract = createCustomContract;
exports.createStellarAssetContract = createStellarAssetContract;
exports.invokeContractFunction = invokeContractFunction;
exports.invokeHostFunction = invokeHostFunction;
exports.uploadContractWasm = uploadContractWasm;
var _xdr = _interopRequireDefault(require("../xdr"));
var _keypair = require("../keypair");
var _address = require("../address");
var _asset = require("../asset");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_2ho1ihsrtk() {
  var path = "/mnt/g/stellar-base/src/operations/invoke_host_function.js";
  var hash = "5d75c9e466ac624ec9eb66cfb7fbceb79a5f33bc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/operations/invoke_host_function.js",
    statementMap: {
      "0": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 35,
          column: 3
        }
      },
      "1": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 34,
          column: 6
        }
      },
      "2": {
        start: {
          line: 37,
          column: 31
        },
        end: {
          line: 40,
          column: 4
        }
      },
      "3": {
        start: {
          line: 42,
          column: 23
        },
        end: {
          line: 44,
          column: 3
        }
      },
      "4": {
        start: {
          line: 45,
          column: 2
        },
        end: {
          line: 45,
          column: 44
        }
      },
      "5": {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 47,
          column: 41
        }
      },
      "6": {
        start: {
          line: 74,
          column: 12
        },
        end: {
          line: 74,
          column: 38
        }
      },
      "7": {
        start: {
          line: 75,
          column: 2
        },
        end: {
          line: 77,
          column: 3
        }
      },
      "8": {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 76,
          column: 71
        }
      },
      "9": {
        start: {
          line: 79,
          column: 2
        },
        end: {
          line: 89,
          column: 5
        }
      },
      "10": {
        start: {
          line: 117,
          column: 15
        },
        end: {
          line: 117,
          column: 51
        }
      },
      "11": {
        start: {
          line: 119,
          column: 2
        },
        end: {
          line: 123,
          column: 3
        }
      },
      "12": {
        start: {
          line: 120,
          column: 4
        },
        end: {
          line: 122,
          column: 6
        }
      },
      "13": {
        start: {
          line: 124,
          column: 2
        },
        end: {
          line: 128,
          column: 3
        }
      },
      "14": {
        start: {
          line: 125,
          column: 4
        },
        end: {
          line: 127,
          column: 6
        }
      },
      "15": {
        start: {
          line: 130,
          column: 2
        },
        end: {
          line: 147,
          column: 5
        }
      },
      "16": {
        start: {
          line: 174,
          column: 14
        },
        end: {
          line: 174,
          column: 24
        }
      },
      "17": {
        start: {
          line: 175,
          column: 2
        },
        end: {
          line: 178,
          column: 3
        }
      },
      "18": {
        start: {
          line: 176,
          column: 27
        },
        end: {
          line: 176,
          column: 43
        }
      },
      "19": {
        start: {
          line: 177,
          column: 4
        },
        end: {
          line: 177,
          column: 36
        }
      },
      "20": {
        start: {
          line: 180,
          column: 2
        },
        end: {
          line: 182,
          column: 3
        }
      },
      "21": {
        start: {
          line: 181,
          column: 4
        },
        end: {
          line: 181,
          column: 72
        }
      },
      "22": {
        start: {
          line: 184,
          column: 2
        },
        end: {
          line: 195,
          column: 5
        }
      },
      "23": {
        start: {
          line: 217,
          column: 2
        },
        end: {
          line: 223,
          column: 5
        }
      },
      "24": {
        start: {
          line: 228,
          column: 2
        },
        end: {
          line: 228,
          column: 49
        }
      }
    },
    fnMap: {
      "0": {
        name: "invokeHostFunction",
        decl: {
          start: {
            line: 30,
            column: 16
          },
          end: {
            line: 30,
            column: 34
          }
        },
        loc: {
          start: {
            line: 30,
            column: 41
          },
          end: {
            line: 48,
            column: 1
          }
        },
        line: 30
      },
      "1": {
        name: "invokeContractFunction",
        decl: {
          start: {
            line: 73,
            column: 16
          },
          end: {
            line: 73,
            column: 38
          }
        },
        loc: {
          start: {
            line: 73,
            column: 45
          },
          end: {
            line: 90,
            column: 1
          }
        },
        line: 73
      },
      "2": {
        name: "createCustomContract",
        decl: {
          start: {
            line: 116,
            column: 16
          },
          end: {
            line: 116,
            column: 36
          }
        },
        loc: {
          start: {
            line: 116,
            column: 43
          },
          end: {
            line: 148,
            column: 1
          }
        },
        line: 116
      },
      "3": {
        name: "createStellarAssetContract",
        decl: {
          start: {
            line: 173,
            column: 16
          },
          end: {
            line: 173,
            column: 42
          }
        },
        loc: {
          start: {
            line: 173,
            column: 49
          },
          end: {
            line: 196,
            column: 1
          }
        },
        line: 173
      },
      "4": {
        name: "uploadContractWasm",
        decl: {
          start: {
            line: 216,
            column: 16
          },
          end: {
            line: 216,
            column: 34
          }
        },
        loc: {
          start: {
            line: 216,
            column: 41
          },
          end: {
            line: 224,
            column: 1
          }
        },
        line: 216
      },
      "5": {
        name: "getSalty",
        decl: {
          start: {
            line: 227,
            column: 9
          },
          end: {
            line: 227,
            column: 17
          }
        },
        loc: {
          start: {
            line: 227,
            column: 20
          },
          end: {
            line: 229,
            column: 1
          }
        },
        line: 227
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
            line: 35,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 35,
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
        line: 31
      },
      "1": {
        loc: {
          start: {
            line: 39,
            column: 10
          },
          end: {
            line: 39,
            column: 25
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 39,
            column: 10
          },
          end: {
            line: 39,
            column: 19
          }
        }, {
          start: {
            line: 39,
            column: 23
          },
          end: {
            line: 39,
            column: 25
          }
        }],
        line: 39
      },
      "2": {
        loc: {
          start: {
            line: 75,
            column: 2
          },
          end: {
            line: 77,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 75,
            column: 2
          },
          end: {
            line: 77,
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
        line: 75
      },
      "3": {
        loc: {
          start: {
            line: 117,
            column: 27
          },
          end: {
            line: 117,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 117,
            column: 27
          },
          end: {
            line: 117,
            column: 36
          }
        }, {
          start: {
            line: 117,
            column: 40
          },
          end: {
            line: 117,
            column: 50
          }
        }],
        line: 117
      },
      "4": {
        loc: {
          start: {
            line: 119,
            column: 2
          },
          end: {
            line: 123,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 119,
            column: 2
          },
          end: {
            line: 123,
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
        line: 119
      },
      "5": {
        loc: {
          start: {
            line: 119,
            column: 6
          },
          end: {
            line: 119,
            column: 51
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 119,
            column: 6
          },
          end: {
            line: 119,
            column: 20
          }
        }, {
          start: {
            line: 119,
            column: 24
          },
          end: {
            line: 119,
            column: 51
          }
        }],
        line: 119
      },
      "6": {
        loc: {
          start: {
            line: 124,
            column: 2
          },
          end: {
            line: 128,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 124,
            column: 2
          },
          end: {
            line: 128,
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
        line: 124
      },
      "7": {
        loc: {
          start: {
            line: 175,
            column: 2
          },
          end: {
            line: 178,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 175,
            column: 2
          },
          end: {
            line: 178,
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
        line: 175
      },
      "8": {
        loc: {
          start: {
            line: 180,
            column: 2
          },
          end: {
            line: 182,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 180,
            column: 2
          },
          end: {
            line: 182,
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
        line: 180
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
      "24": 0
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
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5d75c9e466ac624ec9eb66cfb7fbceb79a5f33bc"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ho1ihsrtk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2ho1ihsrtk();
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * Invokes a single smart contract host function.
 *
 * @function
 * @alias Operation.invokeHostFunction
 *
 * @param {object} opts - options object
 * @param {xdr.HostFunction} opts.func - host function to execute (with its
 *    wrapped parameters)
 * @param {xdr.SorobanAuthorizationEntry[]} [opts.auth] - list outlining the
 *    tree of authorizations required for the call
 * @param {string} [opts.source] - an optional source account
 *
 * @returns {xdr.Operation} an Invoke Host Function operation
 *    (xdr.InvokeHostFunctionOp)
 *
 * @see https://soroban.stellar.org/docs/fundamentals-and-concepts/invoking-contracts-with-transactions#function
 * @see Operation.invokeContractFunction
 * @see Operation.createCustomContract
 * @see Operation.createStellarAssetContract
 * @see Operation.uploadContractWasm
 * @see Contract.call
 */
function invokeHostFunction(opts) {
  cov_2ho1ihsrtk().f[0]++;
  cov_2ho1ihsrtk().s[0]++;
  if (!opts.func) {
    cov_2ho1ihsrtk().b[0][0]++;
    cov_2ho1ihsrtk().s[1]++;
    throw new TypeError("host function invocation ('func') required (got ".concat(JSON.stringify(opts), ")"));
  } else {
    cov_2ho1ihsrtk().b[0][1]++;
  }
  var invokeHostFunctionOp = (cov_2ho1ihsrtk().s[2]++, new _xdr["default"].InvokeHostFunctionOp({
    hostFunction: opts.func,
    auth: (cov_2ho1ihsrtk().b[1][0]++, opts.auth) || (cov_2ho1ihsrtk().b[1][1]++, [])
  }));
  var opAttributes = (cov_2ho1ihsrtk().s[3]++, {
    body: _xdr["default"].OperationBody.invokeHostFunction(invokeHostFunctionOp)
  });
  cov_2ho1ihsrtk().s[4]++;
  this.setSourceAccount(opAttributes, opts);
  cov_2ho1ihsrtk().s[5]++;
  return new _xdr["default"].Operation(opAttributes);
}

/**
 * Returns an operation that invokes a contract function.
 *
 * @function
 * @alias Operation.invokeContractFunction
 *
 * @param {any}         opts - the set of parameters
 * @param {string}      opts.contract - a strkey-fied contract address (`C...`)
 * @param {string}      opts.function - the name of the contract fn to invoke
 * @param {xdr.ScVal[]} opts.args - parameters to pass to the function
 *    invocation (try {@link nativeToScVal} or {@link ScInt} to make building
 *    these easier)
 * @param {xdr.SorobanAuthorizationEntry[]} [opts.auth] - an optional list
 *    outlining the tree of authorizations required for the call
 * @param {string} [opts.source] - an optional source account
 *
 * @returns {xdr.Operation} an Invoke Host Function operation
 *    (xdr.InvokeHostFunctionOp)
 *
 * @see Operation.invokeHostFunction
 * @see Contract.call
 * @see Address
 */
function invokeContractFunction(opts) {
  cov_2ho1ihsrtk().f[1]++;
  var c = (cov_2ho1ihsrtk().s[6]++, new _address.Address(opts.contract));
  cov_2ho1ihsrtk().s[7]++;
  if (c._type !== 'contract') {
    cov_2ho1ihsrtk().b[2][0]++;
    cov_2ho1ihsrtk().s[8]++;
    throw new TypeError("expected contract strkey instance, got ".concat(c));
  } else {
    cov_2ho1ihsrtk().b[2][1]++;
  }
  cov_2ho1ihsrtk().s[9]++;
  return this.invokeHostFunction({
    source: opts.source,
    auth: opts.auth,
    func: _xdr["default"].HostFunction.hostFunctionTypeInvokeContract(new _xdr["default"].InvokeContractArgs({
      contractAddress: c.toScAddress(),
      functionName: opts["function"],
      args: opts.args
    }))
  });
}

/**
 * Returns an operation that creates a custom WASM contract.
 *
 * @function
 * @alias Operation.createCustomContract
 *
 * @param {any}     opts - the set of parameters
 * @param {Address} opts.address - the contract uploader address
 * @param {Uint8Array|Buffer}  opts.wasmHash - the SHA-256 hash of the contract
 *    WASM you're uploading (see {@link hash} and
 *    {@link Operation.uploadContractWasm})
 * @param {Uint8Array|Buffer} [opts.salt] - an optional, 32-byte salt to
 *    distinguish deployment instances of the same wasm from the same user (if
 *    omitted, one will be generated for you)
 * @param {xdr.SorobanAuthorizationEntry[]} [opts.auth] - an optional list
 *    outlining the tree of authorizations required for the call
 * @param {string} [opts.source] - an optional source account
 *
 * @returns {xdr.Operation} an Invoke Host Function operation
 *    (xdr.InvokeHostFunctionOp)
 *
 * @see
 * https://soroban.stellar.org/docs/fundamentals-and-concepts/invoking-contracts-with-transactions#function
 */
function createCustomContract(opts) {
  cov_2ho1ihsrtk().f[2]++;
  var salt = (cov_2ho1ihsrtk().s[10]++, Buffer.from((cov_2ho1ihsrtk().b[3][0]++, opts.salt) || (cov_2ho1ihsrtk().b[3][1]++, getSalty())));
  cov_2ho1ihsrtk().s[11]++;
  if ((cov_2ho1ihsrtk().b[5][0]++, !opts.wasmHash) || (cov_2ho1ihsrtk().b[5][1]++, opts.wasmHash.length !== 32)) {
    cov_2ho1ihsrtk().b[4][0]++;
    cov_2ho1ihsrtk().s[12]++;
    throw new TypeError("expected hash(contract WASM) in 'opts.wasmHash', got ".concat(opts.wasmHash));
  } else {
    cov_2ho1ihsrtk().b[4][1]++;
  }
  cov_2ho1ihsrtk().s[13]++;
  if (salt.length !== 32) {
    cov_2ho1ihsrtk().b[6][0]++;
    cov_2ho1ihsrtk().s[14]++;
    throw new TypeError("expected 32-byte salt in 'opts.salt', got ".concat(opts.wasmHash));
  } else {
    cov_2ho1ihsrtk().b[6][1]++;
  }
  cov_2ho1ihsrtk().s[15]++;
  return this.invokeHostFunction({
    source: opts.source,
    auth: opts.auth,
    func: _xdr["default"].HostFunction.hostFunctionTypeCreateContract(new _xdr["default"].CreateContractArgs({
      executable: _xdr["default"].ContractExecutable.contractExecutableWasm(Buffer.from(opts.wasmHash)),
      contractIdPreimage: _xdr["default"].ContractIdPreimage.contractIdPreimageFromAddress(new _xdr["default"].ContractIdPreimageFromAddress({
        address: opts.address.toScAddress(),
        salt: salt
      }))
    }))
  });
}

/**
 * Returns an operation that wraps a Stellar asset into a token contract.
 *
 * @function
 * @alias Operation.createStellarAssetContract
 *
 * @param {any}          opts - the set of parameters
 * @param {Asset|string} opts.asset - the Stellar asset to wrap, either as an
 *    {@link Asset} object or in canonical form (SEP-11, `code:issuer`)
 * @param {xdr.SorobanAuthorizationEntry[]} [opts.auth] - an optional list
 *    outlining the tree of authorizations required for the call
 * @param {string} [opts.source] - an optional source account
 *
 * @returns {xdr.Operation} an Invoke Host Function operation
 *    (xdr.InvokeHostFunctionOp)
 *
 * @see https://stellar.org/protocol/sep-11#alphanum4-alphanum12
 * @see
 * https://soroban.stellar.org/docs/fundamentals-and-concepts/invoking-contracts-with-transactions
 * @see
 * https://soroban.stellar.org/docs/advanced-tutorials/stellar-asset-contract
 * @see Operation.invokeHostFunction
 */
function createStellarAssetContract(opts) {
  cov_2ho1ihsrtk().f[3]++;
  var asset = (cov_2ho1ihsrtk().s[16]++, opts.asset);
  cov_2ho1ihsrtk().s[17]++;
  if (typeof asset === 'string') {
    cov_2ho1ihsrtk().b[7][0]++;
    var _ref = (cov_2ho1ihsrtk().s[18]++, asset.split(':')),
      _ref2 = _slicedToArray(_ref, 2),
      code = _ref2[0],
      issuer = _ref2[1];
    cov_2ho1ihsrtk().s[19]++;
    asset = new _asset.Asset(code, issuer); // handles 'xlm' by default
  } else {
    cov_2ho1ihsrtk().b[7][1]++;
  }
  cov_2ho1ihsrtk().s[20]++;
  if (!(asset instanceof _asset.Asset)) {
    cov_2ho1ihsrtk().b[8][0]++;
    cov_2ho1ihsrtk().s[21]++;
    throw new TypeError("expected Asset in 'opts.asset', got ".concat(asset));
  } else {
    cov_2ho1ihsrtk().b[8][1]++;
  }
  cov_2ho1ihsrtk().s[22]++;
  return this.invokeHostFunction({
    source: opts.source,
    auth: opts.auth,
    func: _xdr["default"].HostFunction.hostFunctionTypeCreateContract(new _xdr["default"].CreateContractArgs({
      executable: _xdr["default"].ContractExecutable.contractExecutableStellarAsset(),
      contractIdPreimage: _xdr["default"].ContractIdPreimage.contractIdPreimageFromAsset(asset.toXDRObject())
    }))
  });
}

/**
 * Returns an operation that uploads WASM for a contract.
 *
 * @function
 * @alias Operation.uploadContractWasm
 *
 * @param {any}               opts - the set of parameters
 * @param {Uint8Array|Buffer} opts.wasm - a WASM blob to upload to the ledger
 * @param {xdr.SorobanAuthorizationEntry[]} [opts.auth] - an optional list
 *    outlining the tree of authorizations required for the call
 * @param {string} [opts.source] - an optional source account
 *
 * @returns {xdr.Operation} an Invoke Host Function operation
 *    (xdr.InvokeHostFunctionOp)
 *
 * @see
 * https://soroban.stellar.org/docs/fundamentals-and-concepts/invoking-contracts-with-transactions#function
 */
function uploadContractWasm(opts) {
  cov_2ho1ihsrtk().f[4]++;
  cov_2ho1ihsrtk().s[23]++;
  return this.invokeHostFunction({
    source: opts.source,
    auth: opts.auth,
    func: _xdr["default"].HostFunction.hostFunctionTypeUploadContractWasm(Buffer.from(opts.wasm) // coalesce so we can drop `Buffer` someday
    )
  });
}

/** @returns {Buffer} a random 256-bit "salt" value. */
function getSalty() {
  cov_2ho1ihsrtk().f[5]++;
  cov_2ho1ihsrtk().s[24]++;
  return _keypair.Keypair.random().xdrPublicKey().value(); // dilithium2 is 256 bits, too
}