"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildInvocationTree = buildInvocationTree;
exports.walkInvocationTree = walkInvocationTree;
var _asset = require("./asset");
var _address = require("./address");
var _scval = require("./scval");
function cov_1in89alp1b() {
  var path = "/mnt/g/stellar-base/src/invocation.js";
  var hash = "2aede5309fd29e85e9a4f07d765e1321dc7be302";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/invocation.js",
    statementMap: {
      "0": {
        start: {
          line: 83,
          column: 13
        },
        end: {
          line: 83,
          column: 28
        }
      },
      "1": {
        start: {
          line: 86,
          column: 17
        },
        end: {
          line: 86,
          column: 19
        }
      },
      "2": {
        start: {
          line: 89,
          column: 16
        },
        end: {
          line: 89,
          column: 26
        }
      },
      "3": {
        start: {
          line: 91,
          column: 2
        },
        end: {
          line: 157,
          column: 3
        }
      },
      "4": {
        start: {
          line: 94,
          column: 6
        },
        end: {
          line: 94,
          column: 30
        }
      },
      "5": {
        start: {
          line: 95,
          column: 6
        },
        end: {
          line: 99,
          column: 8
        }
      },
      "6": {
        start: {
          line: 98,
          column: 40
        },
        end: {
          line: 98,
          column: 58
        }
      },
      "7": {
        start: {
          line: 100,
          column: 6
        },
        end: {
          line: 100,
          column: 12
        }
      },
      "8": {
        start: {
          line: 104,
          column: 6
        },
        end: {
          line: 104,
          column: 29
        }
      },
      "9": {
        start: {
          line: 105,
          column: 6
        },
        end: {
          line: 105,
          column: 23
        }
      },
      "10": {
        start: {
          line: 114,
          column: 31
        },
        end: {
          line: 114,
          column: 79
        }
      },
      "11": {
        start: {
          line: 115,
          column: 6
        },
        end: {
          line: 121,
          column: 7
        }
      },
      "12": {
        start: {
          line: 116,
          column: 8
        },
        end: {
          line: 120,
          column: 10
        }
      },
      "13": {
        start: {
          line: 123,
          column: 6
        },
        end: {
          line: 148,
          column: 7
        }
      },
      "14": {
        start: {
          line: 127,
          column: 26
        },
        end: {
          line: 127,
          column: 48
        }
      },
      "15": {
        start: {
          line: 129,
          column: 10
        },
        end: {
          line: 129,
          column: 36
        }
      },
      "16": {
        start: {
          line: 130,
          column: 10
        },
        end: {
          line: 134,
          column: 12
        }
      },
      "17": {
        start: {
          line: 135,
          column: 10
        },
        end: {
          line: 135,
          column: 16
        }
      },
      "18": {
        start: {
          line: 140,
          column: 10
        },
        end: {
          line: 140,
          column: 35
        }
      },
      "19": {
        start: {
          line: 141,
          column: 10
        },
        end: {
          line: 143,
          column: 23
        }
      },
      "20": {
        start: {
          line: 144,
          column: 10
        },
        end: {
          line: 144,
          column: 16
        }
      },
      "21": {
        start: {
          line: 147,
          column: 10
        },
        end: {
          line: 147,
          column: 76
        }
      },
      "22": {
        start: {
          line: 150,
          column: 6
        },
        end: {
          line: 150,
          column: 12
        }
      },
      "23": {
        start: {
          line: 154,
          column: 6
        },
        end: {
          line: 156,
          column: 8
        }
      },
      "24": {
        start: {
          line: 159,
          column: 2
        },
        end: {
          line: 159,
          column: 80
        }
      },
      "25": {
        start: {
          line: 159,
          column: 56
        },
        end: {
          line: 159,
          column: 78
        }
      },
      "26": {
        start: {
          line: 160,
          column: 2
        },
        end: {
          line: 160,
          column: 16
        }
      },
      "27": {
        start: {
          line: 188,
          column: 2
        },
        end: {
          line: 188,
          column: 32
        }
      },
      "28": {
        start: {
          line: 192,
          column: 2
        },
        end: {
          line: 194,
          column: 3
        }
      },
      "29": {
        start: {
          line: 193,
          column: 4
        },
        end: {
          line: 193,
          column: 11
        }
      },
      "30": {
        start: {
          line: 196,
          column: 2
        },
        end: {
          line: 198,
          column: 62
        }
      },
      "31": {
        start: {
          line: 198,
          column: 20
        },
        end: {
          line: 198,
          column: 60
        }
      }
    },
    fnMap: {
      "0": {
        name: "buildInvocationTree",
        decl: {
          start: {
            line: 82,
            column: 16
          },
          end: {
            line: 82,
            column: 35
          }
        },
        loc: {
          start: {
            line: 82,
            column: 42
          },
          end: {
            line: 161,
            column: 1
          }
        },
        line: 82
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 98,
            column: 31
          },
          end: {
            line: 98,
            column: 32
          }
        },
        loc: {
          start: {
            line: 98,
            column: 40
          },
          end: {
            line: 98,
            column: 58
          }
        },
        line: 98
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 159,
            column: 49
          },
          end: {
            line: 159,
            column: 50
          }
        },
        loc: {
          start: {
            line: 159,
            column: 56
          },
          end: {
            line: 159,
            column: 78
          }
        },
        line: 159
      },
      "3": {
        name: "walkInvocationTree",
        decl: {
          start: {
            line: 187,
            column: 16
          },
          end: {
            line: 187,
            column: 34
          }
        },
        loc: {
          start: {
            line: 187,
            column: 51
          },
          end: {
            line: 189,
            column: 1
          }
        },
        line: 187
      },
      "4": {
        name: "walkHelper",
        decl: {
          start: {
            line: 191,
            column: 9
          },
          end: {
            line: 191,
            column: 19
          }
        },
        loc: {
          start: {
            line: 191,
            column: 51
          },
          end: {
            line: 199,
            column: 1
          }
        },
        line: 191
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 198,
            column: 13
          },
          end: {
            line: 198,
            column: 14
          }
        },
        loc: {
          start: {
            line: 198,
            column: 20
          },
          end: {
            line: 198,
            column: 60
          }
        },
        line: 198
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 91,
            column: 2
          },
          end: {
            line: 157,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 93,
            column: 4
          },
          end: {
            line: 100,
            column: 12
          }
        }, {
          start: {
            line: 103,
            column: 4
          },
          end: {
            line: 151,
            column: 5
          }
        }, {
          start: {
            line: 153,
            column: 4
          },
          end: {
            line: 156,
            column: 8
          }
        }],
        line: 91
      },
      "1": {
        loc: {
          start: {
            line: 115,
            column: 6
          },
          end: {
            line: 121,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 115,
            column: 6
          },
          end: {
            line: 121,
            column: 7
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
        line: 115
      },
      "2": {
        loc: {
          start: {
            line: 123,
            column: 6
          },
          end: {
            line: 148,
            column: 7
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 125,
            column: 8
          },
          end: {
            line: 136,
            column: 9
          }
        }, {
          start: {
            line: 139,
            column: 8
          },
          end: {
            line: 144,
            column: 16
          }
        }, {
          start: {
            line: 146,
            column: 8
          },
          end: {
            line: 147,
            column: 76
          }
        }],
        line: 123
      },
      "3": {
        loc: {
          start: {
            line: 192,
            column: 2
          },
          end: {
            line: 194,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 192,
            column: 2
          },
          end: {
            line: 194,
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
        line: 192
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
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0
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
      "0": [0, 0, 0],
      "1": [0, 0],
      "2": [0, 0, 0],
      "3": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2aede5309fd29e85e9a4f07d765e1321dc7be302"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1in89alp1b = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1in89alp1b();
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * @typedef CreateInvocation
 *
 * @prop {'wasm'|'sac'} type  a type indicating if this creation was a custom
 *    contract or a wrapping of an existing Stellar asset
 * @prop {string} [token] when `type=='sac'`, the canonical {@link Asset} that
 *    is being wrapped by this Stellar Asset Contract
 * @prop {object} [wasm]  when `type=='wasm'`, add'l creation parameters
 *
 * @prop {string} wasm.hash     hex hash of WASM bytecode backing this contract
 * @prop {string} wasm.address  contract address of this deployment
 * @prop {string} wasm.salt     hex salt that the user consumed when creating
 *    this contract (encoded in the resulting address)
 */

/**
 * @typedef ExecuteInvocation
 *
 * @prop {string} source    the strkey of the contract (C...) being invoked
 * @prop {string} function  the name of the function being invoked
 * @prop {any[]}  args      the natively-represented parameters to the function
 *    invocation (see {@link scValToNative}) for rules on how they're
 *    represented a JS types
 */

/**
 * @typedef InvocationTree
 * @prop {'execute' | 'create'} type  the type of invocation occurring, either
 *    contract creation or host function execution
 * @prop {CreateInvocation | ExecuteInvocation} args  the parameters to the
 *    invocation, depending on the type
 * @prop {InvocationTree[]} invocations   any sub-invocations that (may) occur
 *    as a result of this invocation (i.e. a tree of call stacks)
 */

/**
 * Turns a raw invocation tree into a human-readable format.
 *
 * This is designed to make the invocation tree easier to understand in order to
 * inform users about the side-effects of their contract calls. This will help
 * make informed decisions about whether or not a particular invocation will
 * result in what you expect it to.
 *
 * @param {xdr.SorobanAuthorizedInvocation} root  the raw XDR of the invocation,
 *    likely acquired from transaction simulation. this is either from the
 *    {@link Operation.invokeHostFunction} itself (the `func` field), or from
 *    the authorization entries ({@link xdr.SorobanAuthorizationEntry}, the
 *    `rootInvocation` field)
 *
 * @returns {InvocationTree}  a human-readable version of the invocation tree
 *
 * @example
 * Here, we show a browser modal after simulating an arbitrary transaction,
 * `tx`, which we assume has an `Operation.invokeHostFunction` inside of it:
 *
 * ```typescript
 * import { Server, buildInvocationTree } from '@stellar/stellar-sdk';
 *
 * const s = new Server("fill in accordingly");
 *
 * s.simulateTransaction(tx).then(
 *  (resp: SorobanRpc.SimulateTransactionResponse) => {
 *    if (SorobanRpc.isSuccessfulSim(resp) && ) {
 *      // bold assumption: there's a valid result with an auth entry
 *      alert(
 *        "You are authorizing the following invocation:\n" +
 *        JSON.stringify(
 *          buildInvocationTree(resp.result!.auth[0].rootInvocation()),
 *          null,
 *          2
 *        )
 *      );
 *    }
 *  }
 * );
 * ```
 */
function buildInvocationTree(root) {
  cov_1in89alp1b().f[0]++;
  var fn = (cov_1in89alp1b().s[0]++, root["function"]());

  /** @type {InvocationTree} */
  var output = (cov_1in89alp1b().s[1]++, {});

  /** @type {xdr.CreateContractArgs | xdr.InvokeContractArgs} */
  var inner = (cov_1in89alp1b().s[2]++, fn.value());
  cov_1in89alp1b().s[3]++;
  switch (fn["switch"]().value) {
    // sorobanAuthorizedFunctionTypeContractFn
    case 0:
      cov_1in89alp1b().b[0][0]++;
      cov_1in89alp1b().s[4]++;
      output.type = 'execute';
      cov_1in89alp1b().s[5]++;
      output.args = {
        source: _address.Address.fromScAddress(inner.contractAddress()).toString(),
        "function": inner.functionName(),
        args: inner.args().map(function (arg) {
          cov_1in89alp1b().f[1]++;
          cov_1in89alp1b().s[6]++;
          return (0, _scval.scValToNative)(arg);
        })
      };
      cov_1in89alp1b().s[7]++;
      break;

    // sorobanAuthorizedFunctionTypeCreateContractHostFn
    case 1:
      cov_1in89alp1b().b[0][1]++;
      {
        cov_1in89alp1b().s[8]++;
        output.type = 'create';
        cov_1in89alp1b().s[9]++;
        output.args = {};

        // If the executable is a WASM, the preimage MUST be an address. If it's a
        // token, the preimage MUST be an asset. This is a cheeky way to check
        // that, because wasm=0, token=1 and address=0, asset=1 in the XDR switch
        // values.
        //
        // The first part may not be true in V2, but we'd need to update this code
        // anyway so it can still be an error.
        var _ref = (cov_1in89alp1b().s[10]++, [inner.executable(), inner.contractIdPreimage()]),
          _ref2 = _slicedToArray(_ref, 2),
          exec = _ref2[0],
          preimage = _ref2[1];
        cov_1in89alp1b().s[11]++;
        if (!!exec["switch"]().value !== !!preimage["switch"]().value) {
          cov_1in89alp1b().b[1][0]++;
          cov_1in89alp1b().s[12]++;
          throw new Error("creation function appears invalid: ".concat(JSON.stringify(inner), " (should be wasm+address or token+asset)"));
        } else {
          cov_1in89alp1b().b[1][1]++;
        }
        cov_1in89alp1b().s[13]++;
        switch (exec["switch"]().value) {
          // contractExecutableWasm
          case 0:
            cov_1in89alp1b().b[2][0]++;
            {
              /** @type {xdr.ContractIdPreimageFromAddress} */
              var details = (cov_1in89alp1b().s[14]++, preimage.fromAddress());
              cov_1in89alp1b().s[15]++;
              output.args.type = 'wasm';
              cov_1in89alp1b().s[16]++;
              output.args.wasm = {
                salt: details.salt().toString('hex'),
                hash: exec.wasmHash().toString('hex'),
                address: _address.Address.fromScAddress(details.address()).toString()
              };
              cov_1in89alp1b().s[17]++;
              break;
            }

          // contractExecutableStellarAsset
          case 1:
            cov_1in89alp1b().b[2][1]++;
            cov_1in89alp1b().s[18]++;
            output.args.type = 'sac';
            cov_1in89alp1b().s[19]++;
            output.args.asset = _asset.Asset.fromOperation(preimage.fromAsset()).toString();
            cov_1in89alp1b().s[20]++;
            break;
          default:
            cov_1in89alp1b().b[2][2]++;
            cov_1in89alp1b().s[21]++;
            throw new Error("unknown creation type: ".concat(JSON.stringify(exec)));
        }
        cov_1in89alp1b().s[22]++;
        break;
      }
    default:
      cov_1in89alp1b().b[0][2]++;
      cov_1in89alp1b().s[23]++;
      throw new Error("unknown invocation type (".concat(fn["switch"](), "): ").concat(JSON.stringify(fn)));
  }
  cov_1in89alp1b().s[24]++;
  output.invocations = root.subInvocations().map(function (i) {
    cov_1in89alp1b().f[2]++;
    cov_1in89alp1b().s[25]++;
    return buildInvocationTree(i);
  });
  cov_1in89alp1b().s[26]++;
  return output;
}

/**
 * @callback InvocationWalker
 *
 * @param {xdr.SorobanAuthorizedInvocation} node  the currently explored node
 * @param {number} depth  the depth of the tree this node is occurring at (the
 *    root starts at a depth of 1)
 * @param {xdr.SorobanAuthorizedInvocation} [parent]  this `node`s parent node,
 *    if any (i.e. this doesn't exist at the root)
 *
 * @returns {boolean|null|void}   returning exactly `false` is a hint to stop
 *    exploring, other values are ignored
 */

/**
 * Executes a callback function on each node in the tree until stopped.
 *
 * Nodes are walked in a depth-first order. Returning `false` from the callback
 * stops further depth exploration at that node, but it does not stop the walk
 * in a "global" view.
 *
 * @param {xdr.SorobanAuthorizedInvocation} root  the tree to explore
 * @param {InvocationWalker} callback  the callback to execute for each node
 * @returns {void}
 */
function walkInvocationTree(root, callback) {
  cov_1in89alp1b().f[3]++;
  cov_1in89alp1b().s[27]++;
  walkHelper(root, 1, callback);
}
function walkHelper(node, depth, callback, parent) {
  cov_1in89alp1b().f[4]++;
  cov_1in89alp1b().s[28]++;
  if (callback(node, depth, parent) === false /* allow void rv */) {
    cov_1in89alp1b().b[3][0]++;
    cov_1in89alp1b().s[29]++;
    return;
  } else {
    cov_1in89alp1b().b[3][1]++;
  }
  cov_1in89alp1b().s[30]++;
  node.subInvocations().forEach(function (i) {
    cov_1in89alp1b().f[5]++;
    cov_1in89alp1b().s[31]++;
    return walkHelper(i, depth + 1, callback, node);
  });
}