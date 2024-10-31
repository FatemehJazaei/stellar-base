"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.manageBuyOffer = manageBuyOffer;
var _jsXdr = require("@stellar/js-xdr");
var _xdr = _interopRequireDefault(require("../xdr"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function cov_2lt55pgh28() {
  var path = "/mnt/g/stellar-base/src/operations/manage_buy_offer.js";
  var hash = "d2a7d4403b08d438349e32b0502976c774f7ccb9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-base/src/operations/manage_buy_offer.js",
    statementMap: {
      "0": {
        start: {
          line: 21,
          column: 21
        },
        end: {
          line: 21,
          column: 23
        }
      },
      "1": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 50
        }
      },
      "2": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 48
        }
      },
      "3": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 26,
          column: 3
        }
      },
      "4": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 76
        }
      },
      "5": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 27,
          column: 59
        }
      },
      "6": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 30,
          column: 3
        }
      },
      "7": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 54
        }
      },
      "8": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 31,
          column: 50
        }
      },
      "9": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 37,
          column: 3
        }
      },
      "10": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 43
        }
      },
      "11": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 23
        }
      },
      "12": {
        start: {
          line: 39,
          column: 2
        },
        end: {
          line: 39,
          column: 54
        }
      },
      "13": {
        start: {
          line: 40,
          column: 27
        },
        end: {
          line: 40,
          column: 63
        }
      },
      "14": {
        start: {
          line: 42,
          column: 23
        },
        end: {
          line: 42,
          column: 25
        }
      },
      "15": {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 43,
          column: 73
        }
      },
      "16": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 44,
          column: 44
        }
      },
      "17": {
        start: {
          line: 46,
          column: 2
        },
        end: {
          line: 46,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "manageBuyOffer",
        decl: {
          start: {
            line: 20,
            column: 16
          },
          end: {
            line: 20,
            column: 30
          }
        },
        loc: {
          start: {
            line: 20,
            column: 37
          },
          end: {
            line: 47,
            column: 1
          }
        },
        line: 20
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 26,
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
        line: 24
      },
      "1": {
        loc: {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 30,
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
        line: 28
      },
      "2": {
        loc: {
          start: {
            line: 33,
            column: 2
          },
          end: {
            line: 37,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 33,
            column: 2
          },
          end: {
            line: 37,
            column: 3
          }
        }, {
          start: {
            line: 35,
            column: 9
          },
          end: {
            line: 37,
            column: 3
          }
        }],
        line: 33
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
      "17": 0
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
    hash: "d2a7d4403b08d438349e32b0502976c774f7ccb9"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2lt55pgh28 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2lt55pgh28();
/**
 * Returns a XDR ManageBuyOfferOp. A "manage buy offer" operation creates, updates, or
 * deletes a buy offer.
 * @function
 * @alias Operation.manageBuyOffer
 * @param {object} opts Options object
 * @param {Asset} opts.selling - What you're selling.
 * @param {Asset} opts.buying - What you're buying.
 * @param {string} opts.buyAmount - The total amount you're buying. If 0, deletes the offer.
 * @param {number|string|BigNumber|Object} opts.price - Price of 1 unit of `buying` in terms of `selling`.
 * @param {number} opts.price.n - If `opts.price` is an object: the price numerator
 * @param {number} opts.price.d - If `opts.price` is an object: the price denominator
 * @param {number|string} [opts.offerId ] - If `0`, will create a new offer (default). Otherwise, edits an exisiting offer.
 * @param {string} [opts.source] - The source account (defaults to transaction source).
 * @throws {Error} Throws `Error` when the best rational approximation of `price` cannot be found.
 * @returns {xdr.ManageBuyOfferOp} Manage Buy Offer operation
 */
function manageBuyOffer(opts) {
  cov_2lt55pgh28().f[0]++;
  var attributes = (cov_2lt55pgh28().s[0]++, {});
  cov_2lt55pgh28().s[1]++;
  attributes.selling = opts.selling.toXDRObject();
  cov_2lt55pgh28().s[2]++;
  attributes.buying = opts.buying.toXDRObject();
  cov_2lt55pgh28().s[3]++;
  if (!this.isValidAmount(opts.buyAmount, true)) {
    cov_2lt55pgh28().b[0][0]++;
    cov_2lt55pgh28().s[4]++;
    throw new TypeError(this.constructAmountRequirementsError('buyAmount'));
  } else {
    cov_2lt55pgh28().b[0][1]++;
  }
  cov_2lt55pgh28().s[5]++;
  attributes.buyAmount = this._toXDRAmount(opts.buyAmount);
  cov_2lt55pgh28().s[6]++;
  if (opts.price === undefined) {
    cov_2lt55pgh28().b[1][0]++;
    cov_2lt55pgh28().s[7]++;
    throw new TypeError('price argument is required');
  } else {
    cov_2lt55pgh28().b[1][1]++;
  }
  cov_2lt55pgh28().s[8]++;
  attributes.price = this._toXDRPrice(opts.price);
  cov_2lt55pgh28().s[9]++;
  if (opts.offerId !== undefined) {
    cov_2lt55pgh28().b[2][0]++;
    cov_2lt55pgh28().s[10]++;
    opts.offerId = opts.offerId.toString();
  } else {
    cov_2lt55pgh28().b[2][1]++;
    cov_2lt55pgh28().s[11]++;
    opts.offerId = '0';
  }
  cov_2lt55pgh28().s[12]++;
  attributes.offerId = _jsXdr.Hyper.fromString(opts.offerId);
  var manageBuyOfferOp = (cov_2lt55pgh28().s[13]++, new _xdr["default"].ManageBuyOfferOp(attributes));
  var opAttributes = (cov_2lt55pgh28().s[14]++, {});
  cov_2lt55pgh28().s[15]++;
  opAttributes.body = _xdr["default"].OperationBody.manageBuyOffer(manageBuyOfferOp);
  cov_2lt55pgh28().s[16]++;
  this.setSourceAccount(opAttributes, opts);
  cov_2lt55pgh28().s[17]++;
  return new _xdr["default"].Operation(opAttributes);
}