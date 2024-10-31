"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authorizeEntry = authorizeEntry;
exports.authorizeInvocation = authorizeInvocation;
var _xdr = _interopRequireDefault(require("./xdr"));
var _keypair = require("./keypair");
var _strkey = require("./strkey");
var _network = require("./network");
var _hashing = require("./hashing");
var _address = require("./address");
var _scval = require("./scval");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_1ro8haigpy() {
  var path = "/mnt/g/stellar-base/src/auth.js";
  var hash = "4312a30b634212cf4831a65a5125ce64d668d722";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/auth.js",
    statementMap: {
      "0": {
        start: {
          line: 113,
          column: 2
        },
        end: {
          line: 118,
          column: 3
        }
      },
      "1": {
        start: {
          line: 117,
          column: 4
        },
        end: {
          line: 117,
          column: 17
        }
      },
      "2": {
        start: {
          line: 120,
          column: 16
        },
        end: {
          line: 120,
          column: 68
        }
      },
      "3": {
        start: {
          line: 123,
          column: 19
        },
        end: {
          line: 123,
          column: 48
        }
      },
      "4": {
        start: {
          line: 124,
          column: 2
        },
        end: {
          line: 124,
          column: 58
        }
      },
      "5": {
        start: {
          line: 126,
          column: 20
        },
        end: {
          line: 126,
          column: 56
        }
      },
      "6": {
        start: {
          line: 127,
          column: 19
        },
        end: {
          line: 134,
          column: 3
        }
      },
      "7": {
        start: {
          line: 135,
          column: 18
        },
        end: {
          line: 135,
          column: 40
        }
      },
      "8": {
        start: {
          line: 139,
          column: 2
        },
        end: {
          line: 145,
          column: 3
        }
      },
      "9": {
        start: {
          line: 140,
          column: 4
        },
        end: {
          line: 140,
          column: 52
        }
      },
      "10": {
        start: {
          line: 141,
          column: 4
        },
        end: {
          line: 141,
          column: 69
        }
      },
      "11": {
        start: {
          line: 143,
          column: 4
        },
        end: {
          line: 143,
          column: 50
        }
      },
      "12": {
        start: {
          line: 144,
          column: 4
        },
        end: {
          line: 144,
          column: 35
        }
      },
      "13": {
        start: {
          line: 147,
          column: 2
        },
        end: {
          line: 149,
          column: 3
        }
      },
      "14": {
        start: {
          line: 148,
          column: 4
        },
        end: {
          line: 148,
          column: 55
        }
      },
      "15": {
        start: {
          line: 156,
          column: 19
        },
        end: {
          line: 167,
          column: 3
        }
      },
      "16": {
        start: {
          line: 169,
          column: 2
        },
        end: {
          line: 169,
          column: 51
        }
      },
      "17": {
        start: {
          line: 170,
          column: 2
        },
        end: {
          line: 170,
          column: 15
        }
      },
      "18": {
        start: {
          line: 219,
          column: 13
        },
        end: {
          line: 219,
          column: 44
        }
      },
      "19": {
        start: {
          line: 220,
          column: 16
        },
        end: {
          line: 220,
          column: 47
        }
      },
      "20": {
        start: {
          line: 222,
          column: 13
        },
        end: {
          line: 222,
          column: 44
        }
      },
      "21": {
        start: {
          line: 223,
          column: 2
        },
        end: {
          line: 225,
          column: 3
        }
      },
      "22": {
        start: {
          line: 224,
          column: 4
        },
        end: {
          line: 224,
          column: 72
        }
      },
      "23": {
        start: {
          line: 227,
          column: 16
        },
        end: {
          line: 237,
          column: 4
        }
      },
      "24": {
        start: {
          line: 239,
          column: 2
        },
        end: {
          line: 239,
          column: 79
        }
      },
      "25": {
        start: {
          line: 244,
          column: 2
        },
        end: {
          line: 244,
          column: 72
        }
      },
      "26": {
        start: {
          line: 244,
          column: 51
        },
        end: {
          line: 244,
          column: 67
        }
      }
    },
    fnMap: {
      "0": {
        name: "authorizeEntry",
        decl: {
          start: {
            line: 106,
            column: 22
          },
          end: {
            line: 106,
            column: 36
          }
        },
        loc: {
          start: {
            line: 111,
            column: 2
          },
          end: {
            line: 171,
            column: 1
          }
        },
        line: 111
      },
      "1": {
        name: "authorizeInvocation",
        decl: {
          start: {
            line: 209,
            column: 16
          },
          end: {
            line: 209,
            column: 35
          }
        },
        loc: {
          start: {
            line: 215,
            column: 2
          },
          end: {
            line: 240,
            column: 1
          }
        },
        line: 215
      },
      "2": {
        name: "bytesToInt64",
        decl: {
          start: {
            line: 242,
            column: 9
          },
          end: {
            line: 242,
            column: 21
          }
        },
        loc: {
          start: {
            line: 242,
            column: 29
          },
          end: {
            line: 245,
            column: 1
          }
        },
        line: 242
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 244,
            column: 37
          },
          end: {
            line: 244,
            column: 38
          }
        },
        loc: {
          start: {
            line: 244,
            column: 51
          },
          end: {
            line: 244,
            column: 67
          }
        },
        line: 244
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 110,
            column: 2
          },
          end: {
            line: 110,
            column: 40
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 110,
            column: 22
          },
          end: {
            line: 110,
            column: 40
          }
        }],
        line: 110
      },
      "1": {
        loc: {
          start: {
            line: 113,
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
            line: 113,
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
        line: 113
      },
      "2": {
        loc: {
          start: {
            line: 139,
            column: 2
          },
          end: {
            line: 145,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 139,
            column: 2
          },
          end: {
            line: 145,
            column: 3
          }
        }, {
          start: {
            line: 142,
            column: 9
          },
          end: {
            line: 145,
            column: 3
          }
        }],
        line: 139
      },
      "3": {
        loc: {
          start: {
            line: 147,
            column: 2
          },
          end: {
            line: 149,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 147,
            column: 2
          },
          end: {
            line: 149,
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
        line: 147
      },
      "4": {
        loc: {
          start: {
            line: 213,
            column: 2
          },
          end: {
            line: 213,
            column: 16
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 213,
            column: 14
          },
          end: {
            line: 213,
            column: 16
          }
        }],
        line: 213
      },
      "5": {
        loc: {
          start: {
            line: 214,
            column: 2
          },
          end: {
            line: 214,
            column: 40
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 214,
            column: 22
          },
          end: {
            line: 214,
            column: 40
          }
        }],
        line: 214
      },
      "6": {
        loc: {
          start: {
            line: 222,
            column: 13
          },
          end: {
            line: 222,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 222,
            column: 13
          },
          end: {
            line: 222,
            column: 22
          }
        }, {
          start: {
            line: 222,
            column: 26
          },
          end: {
            line: 222,
            column: 44
          }
        }],
        line: 222
      },
      "7": {
        loc: {
          start: {
            line: 223,
            column: 2
          },
          end: {
            line: 225,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 223,
            column: 2
          },
          end: {
            line: 225,
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
        line: 223
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
      "26": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0],
      "5": [0],
      "6": [0, 0],
      "7": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4312a30b634212cf4831a65a5125ce64d668d722"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1ro8haigpy = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1ro8haigpy();
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/**
 * @async
 * @callback SigningCallback A callback for signing an XDR structure
 * representing all of the details necessary to authorize an invocation tree.
 *
 * @param {xdr.HashIdPreimage} preimage   the entire authorization envelope
 *    whose hash you should sign, so that you can inspect the entire structure
 *    if necessary (rather than blindly signing a hash)
 *
 * @returns {Promise<Uint8Array>}   the signature of the raw payload (which is
 *    the sha256 hash of the preimage bytes, so `hash(preimage.toXDR())`) signed
 *    by the key corresponding to the public key in the entry you pass to
 *    {@link authorizeEntry} (decipherable from its
 *    `credentials().address().address()`)
 */
/**
 * Actually authorizes an existing authorization entry using the given the
 * credentials and expiration details, returning a signed copy.
 *
 * This "fills out" the authorization entry with a signature, indicating to the
 * {@link Operation.invokeHostFunction} its attached to that:
 *   - a particular identity (i.e. signing {@link Keypair} or other signer)
 *   - approving the execution of an invocation tree (i.e. a simulation-acquired
 *     {@link xdr.SorobanAuthorizedInvocation} or otherwise built)
 *   - on a particular network (uniquely identified by its passphrase, see
 *     {@link Networks})
 *   - until a particular ledger sequence is reached.
 *
 * This one lets you pass a either a {@link Keypair} (or, more accurately,
 * anything with a `sign(Buffer): Buffer` method) or a callback function (see
 * {@link SigningCallback}) to handle signing the envelope hash.
 *
 * @param {xdr.SorobanAuthorizationEntry} entry   an unsigned authorization entr
 * @param {Keypair | SigningCallback} signer  either a {@link Keypair} instance
 *    or a function which takes a payload (a
 *    {@link xdr.HashIdPreimageSorobanAuthorization} instance) input and returns
 *    the signature of the hash of the raw payload bytes (where the signing key
 *    should correspond to the address in the `entry`)
 * @param {number} validUntilLedgerSeq   the (exclusive) future ledger sequence
 *    number until which this authorization entry should be valid (if
 *    `currentLedgerSeq==validUntil`, this is expired))
 * @param {string} [networkPassphrase]  the network passphrase is incorprated
 *    into the signature (see {@link Networks} for options)
 *
 * @returns {Promise<xdr.SorobanAuthorizationEntry>} a promise for an
 *    authorization entry that you can pass along to
 *    {@link Operation.invokeHostFunction}
 *
 * @note If using the `SigningCallback` variation, the signer is assumed to be
 *    the entry's credential address. If you need a different key to sign the
 *    entry, you will need to use different method (e.g., fork this code).
 *
 * @see authorizeInvocation
 * @example
 * import {
 *   SorobanRpc,
 *   Transaction,
 *   Networks,
 *   authorizeEntry
 * } from '@stellar/stellar-sdk';
 *
 * // Assume signPayloadCallback is a well-formed signing callback.
 * //
 * // It might, for example, pop up a modal from a browser extension, send the
 * // transaction to a third-party service for signing, or just do simple
 * // signing via Keypair like it does here:
 * function signPayloadCallback(payload) {
 *    return signer.sign(hash(payload.toXDR());
 * }
 *
 * function multiPartyAuth(
 *    server: SorobanRpc.Server,
 *    // assume this involves multi-party auth
 *    tx: Transaction,
 * ) {
 *    return server
 *      .simulateTransaction(tx)
 *      .then((simResult) => {
 *          tx.operations[0].auth.map(entry =>
 *            authorizeEntry(
 *              entry,
 *              signPayloadCallback,
 *              currentLedger + 1000,
 *              Networks.TESTNET);
 *          ));
 *
 *          return server.prepareTransaction(tx, simResult);
 *      })
 *      .then((preppedTx) => {
 *        preppedTx.sign(source);
 *        return server.sendTransaction(preppedTx);
 *      });
 * }
 */
function authorizeEntry(_x, _x2, _x3) {
  return _authorizeEntry.apply(this, arguments);
}
/**
 * This builds an entry from scratch, allowing you to express authorization as a
 * function of:
 *   - a particular identity (i.e. signing {@link Keypair} or other signer)
 *   - approving the execution of an invocation tree (i.e. a simulation-acquired
 *     {@link xdr.SorobanAuthorizedInvocation} or otherwise built)
 *   - on a particular network (uniquely identified by its passphrase, see
 *     {@link Networks})
 *   - until a particular ledger sequence is reached.
 *
 * This is in contrast to {@link authorizeEntry}, which signs an existing entry.
 *
 * @param {Keypair | SigningCallback} signer  either a {@link Keypair} instance
 *    (or anything with a `.sign(buf): Buffer-like` method) or a function which
 *    takes a payload (a {@link xdr.HashIdPreimageSorobanAuthorization}
 *    instance) input and returns the signature of the hash of the raw payload
 *    bytes (where the signing key should correspond to the address in the
 *    `entry`)
 * @param {number}  validUntilLedgerSeq  the (exclusive) future ledger sequence
 *    number until which this authorization entry should be valid (if
 *    `currentLedgerSeq==validUntilLedgerSeq`, this is expired))
 * @param {xdr.SorobanAuthorizedInvocation} invocation the invocation tree that
 *    we're authorizing (likely, this comes from transaction simulation)
 * @param {string}  [publicKey]   the public identity of the signer (when
 *    providing a {@link Keypair} to `signer`, this can be omitted, as it just
 *    uses {@link Keypair.publicKey})
 * @param {string}  [networkPassphrase]   the network passphrase is incorprated
 *    into the signature (see {@link Networks} for options, default:
 *    {@link Networks.FUTURENET})
 *
 * @returns {Promise<xdr.SorobanAuthorizationEntry>} a promise for an
 *    authorization entry that you can pass along to
 *    {@link Operation.invokeHostFunction}
 *
 * @see authorizeEntry
 */
function _authorizeEntry() {
  _authorizeEntry = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(entry, signer, validUntilLedgerSeq) {
    var networkPassphrase,
      clone,
      addrAuth,
      networkId,
      preimage,
      payload,
      signature,
      publicKey,
      sigScVal,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          networkPassphrase = _args.length > 3 && _args[3] !== undefined ? _args[3] : (cov_1ro8haigpy().b[0][0]++, _network.Networks.FUTURENET);
          cov_1ro8haigpy().f[0]++;
          cov_1ro8haigpy().s[0]++;
          if (!(entry.credentials()["switch"]().value !== _xdr["default"].SorobanCredentialsType.sorobanCredentialsAddress().value)) {
            _context.next = 9;
            break;
          }
          cov_1ro8haigpy().b[1][0]++;
          cov_1ro8haigpy().s[1]++;
          return _context.abrupt("return", entry);
        case 9:
          cov_1ro8haigpy().b[1][1]++;
        case 10:
          clone = (cov_1ro8haigpy().s[2]++, _xdr["default"].SorobanAuthorizationEntry.fromXDR(entry.toXDR()));
          /** @type {xdr.SorobanAddressCredentials} */
          addrAuth = (cov_1ro8haigpy().s[3]++, clone.credentials().address());
          cov_1ro8haigpy().s[4]++;
          addrAuth.signatureExpirationLedger(validUntilLedgerSeq);
          networkId = (cov_1ro8haigpy().s[5]++, (0, _hashing.hash)(Buffer.from(networkPassphrase)));
          preimage = (cov_1ro8haigpy().s[6]++, _xdr["default"].HashIdPreimage.envelopeTypeSorobanAuthorization(new _xdr["default"].HashIdPreimageSorobanAuthorization({
            networkId: networkId,
            nonce: addrAuth.nonce(),
            invocation: clone.rootInvocation(),
            signatureExpirationLedger: addrAuth.signatureExpirationLedger()
          })));
          payload = (cov_1ro8haigpy().s[7]++, (0, _hashing.hash)(preimage.toXDR()));
          cov_1ro8haigpy().s[8]++;
          if (!(typeof signer === 'function')) {
            _context.next = 30;
            break;
          }
          cov_1ro8haigpy().b[2][0]++;
          cov_1ro8haigpy().s[9]++;
          _context.t0 = Buffer;
          _context.next = 24;
          return signer(preimage);
        case 24:
          _context.t1 = _context.sent;
          signature = _context.t0.from.call(_context.t0, _context.t1);
          cov_1ro8haigpy().s[10]++;
          publicKey = _address.Address.fromScAddress(addrAuth.address()).toString();
          _context.next = 35;
          break;
        case 30:
          cov_1ro8haigpy().b[2][1]++;
          cov_1ro8haigpy().s[11]++;
          signature = Buffer.from(signer.sign(payload));
          cov_1ro8haigpy().s[12]++;
          publicKey = signer.publicKey();
        case 35:
          cov_1ro8haigpy().s[13]++;
          if (_keypair.Keypair.fromPublicKey(publicKey).verify(payload, signature)) {
            _context.next = 42;
            break;
          }
          cov_1ro8haigpy().b[3][0]++;
          cov_1ro8haigpy().s[14]++;
          throw new Error("signature doesn't match payload");
        case 42:
          cov_1ro8haigpy().b[3][1]++;
        case 43:
          // This structure is defined here:
          // https://soroban.stellar.org/docs/fundamentals-and-concepts/invoking-contracts-with-transactions#stellar-account-signatures
          //
          // Encoding a contract structure as an ScVal means the map keys are supposed
          // to be symbols, hence the forced typing here.
          sigScVal = (cov_1ro8haigpy().s[15]++, (0, _scval.nativeToScVal)({
            public_key: _strkey.StrKey.decodeDilithium2PublicKey(publicKey),
            signature: signature
          }, {
            type: {
              public_key: ['symbol', null],
              signature: ['symbol', null]
            }
          }));
          cov_1ro8haigpy().s[16]++;
          addrAuth.signature(_xdr["default"].ScVal.scvVec([sigScVal]));
          cov_1ro8haigpy().s[17]++;
          return _context.abrupt("return", clone);
        case 48:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _authorizeEntry.apply(this, arguments);
}
function authorizeInvocation(signer, validUntilLedgerSeq, invocation) {
  var publicKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (cov_1ro8haigpy().b[4][0]++, '');
  var networkPassphrase = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : (cov_1ro8haigpy().b[5][0]++, _network.Networks.FUTURENET);
  cov_1ro8haigpy().f[1]++;
  // We use keypairs as a source of randomness for the nonce to avoid mucking
  // with any crypto dependencies. Note that this just has to be random and
  // unique, not cryptographically secure, so it's fine.
  var kp = (cov_1ro8haigpy().s[18]++, _keypair.Keypair.random().rawPublicKey());
  var nonce = (cov_1ro8haigpy().s[19]++, new _xdr["default"].Int64(bytesToInt64(kp)));
  var pk = (cov_1ro8haigpy().s[20]++, (cov_1ro8haigpy().b[6][0]++, publicKey) || (cov_1ro8haigpy().b[6][1]++, signer.publicKey()));
  cov_1ro8haigpy().s[21]++;
  if (!pk) {
    cov_1ro8haigpy().b[7][0]++;
    cov_1ro8haigpy().s[22]++;
    throw new Error("authorizeInvocation requires publicKey parameter");
  } else {
    cov_1ro8haigpy().b[7][1]++;
  }
  var entry = (cov_1ro8haigpy().s[23]++, new _xdr["default"].SorobanAuthorizationEntry({
    rootInvocation: invocation,
    credentials: _xdr["default"].SorobanCredentials.sorobanCredentialsAddress(new _xdr["default"].SorobanAddressCredentials({
      address: new _address.Address(pk).toScAddress(),
      nonce: nonce,
      signatureExpirationLedger: 0,
      // replaced
      signature: _xdr["default"].ScVal.scvVec([]) // replaced
    }))
  }));
  cov_1ro8haigpy().s[24]++;
  return authorizeEntry(entry, signer, validUntilLedgerSeq, networkPassphrase);
}
function bytesToInt64(bytes) {
  cov_1ro8haigpy().f[2]++;
  cov_1ro8haigpy().s[25]++;
  // eslint-disable-next-line no-bitwise
  return bytes.subarray(0, 8).reduce(function (accum, b) {
    cov_1ro8haigpy().f[3]++;
    cov_1ro8haigpy().s[26]++;
    return accum << 8 | b;
  }, 0);
}