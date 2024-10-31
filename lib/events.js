"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.humanizeEvents = humanizeEvents;
var _strkey = require("./strkey");
var _scval = require("./scval");
function cov_2rrsl2n4hs() {
  var path = "/mnt/g/stellar-base/src/events.js";
  var hash = "ecc76b99a12449fe3cd04dee12e675b4a619690c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/events.js",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 27,
          column: 5
        }
      },
      "1": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 24,
          column: 5
        }
      },
      "2": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 23,
          column: 37
        }
      },
      "3": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 27
        }
      },
      "4": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 43,
          column: 4
        }
      },
      "5": {
        start: {
          line: 41,
          column: 18
        },
        end: {
          line: 41,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "humanizeEvents",
        decl: {
          start: {
            line: 18,
            column: 16
          },
          end: {
            line: 18,
            column: 30
          }
        },
        loc: {
          start: {
            line: 18,
            column: 39
          },
          end: {
            line: 28,
            column: 1
          }
        },
        line: 18
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 19,
            column: 20
          },
          end: {
            line: 19,
            column: 21
          }
        },
        loc: {
          start: {
            line: 19,
            column: 27
          },
          end: {
            line: 27,
            column: 3
          }
        },
        line: 19
      },
      "2": {
        name: "extractEvent",
        decl: {
          start: {
            line: 30,
            column: 9
          },
          end: {
            line: 30,
            column: 21
          }
        },
        loc: {
          start: {
            line: 30,
            column: 29
          },
          end: {
            line: 44,
            column: 1
          }
        },
        line: 30
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 41,
            column: 11
          },
          end: {
            line: 41,
            column: 12
          }
        },
        loc: {
          start: {
            line: 41,
            column: 18
          },
          end: {
            line: 41,
            column: 34
          }
        },
        line: 41
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 24,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 24,
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
        line: 22
      },
      "1": {
        loc: {
          start: {
            line: 32,
            column: 8
          },
          end: {
            line: 35,
            column: 7
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 32,
            column: 8
          },
          end: {
            line: 32,
            column: 46
          }
        }, {
          start: {
            line: 33,
            column: 6
          },
          end: {
            line: 33,
            column: 32
          }
        }, {
          start: {
            line: 33,
            column: 36
          },
          end: {
            line: 35,
            column: 7
          }
        }],
        line: 32
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
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ecc76b99a12449fe3cd04dee12e675b4a619690c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2rrsl2n4hs = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2rrsl2n4hs();
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Converts raw diagnostic or contract events into something with a flatter,
 * human-readable, and understandable structure.
 *
 * @param {xdr.DiagnosticEvent[] | xdr.ContractEvent[]} events  either contract
 *    events or diagnostic events to parse into a friendly format
 *
 * @returns {SorobanEvent[]}  a list of human-readable event structures, where
 *    each element has the following properties:
 *  - type: a string of one of 'system', 'contract', 'diagnostic
 *  - contractId?: optionally, a `C...` encoded strkey
 *  - topics: a list of {@link scValToNative} invocations on the topics
 *  - data: similarly, a {@link scValToNative} invocation on the raw event data
 */
function humanizeEvents(events) {
  cov_2rrsl2n4hs().f[0]++;
  cov_2rrsl2n4hs().s[0]++;
  return events.map(function (e) {
    cov_2rrsl2n4hs().f[1]++;
    cov_2rrsl2n4hs().s[1]++;
    // A pseudo-instanceof check for xdr.DiagnosticEvent more reliable
    // in mixed SDK environments:
    if (e.inSuccessfulContractCall) {
      cov_2rrsl2n4hs().b[0][0]++;
      cov_2rrsl2n4hs().s[2]++;
      return extractEvent(e.event());
    } else {
      cov_2rrsl2n4hs().b[0][1]++;
    }
    cov_2rrsl2n4hs().s[3]++;
    return extractEvent(e);
  });
}
function extractEvent(event) {
  cov_2rrsl2n4hs().f[2]++;
  cov_2rrsl2n4hs().s[4]++;
  return _objectSpread(_objectSpread({}, (cov_2rrsl2n4hs().b[1][0]++, typeof event.contractId === 'function') && (cov_2rrsl2n4hs().b[1][1]++, event.contractId() != null) && (cov_2rrsl2n4hs().b[1][2]++, {
    contractId: _strkey.StrKey.encodeContract(event.contractId())
  })), {}, {
    type: event.type().name,
    topics: event.body().value().topics().map(function (t) {
      cov_2rrsl2n4hs().f[3]++;
      cov_2rrsl2n4hs().s[5]++;
      return (0, _scval.scValToNative)(t);
    }),
    data: (0, _scval.scValToNative)(event.body().value().data())
  });
}