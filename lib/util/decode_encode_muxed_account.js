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
  if (_strkey.StrKey.isValidMdilithium2PublicKey(address)) {
    return _decodeAddressFullyToMuxedAccount(address);
  }
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
  if (muxedAccount["switch"]().value === _xdr["default"].CryptoKeyType.keyTypeMuxedDilithium2().value) {
    return _encodeMuxedAccountFullyToAddress(muxedAccount);
  }
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
  if (!_strkey.StrKey.isValidDilithium2PublicKey(address)) {
    throw new Error('address should be a Stellar account ID (G...)');
  }
  if (typeof id !== 'string') {
    throw new Error('id should be a string representing a number (uint64)');
  }
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
  if (_strkey.StrKey.isValidDilithium2PublicKey(address)) {
    return address;
  }
  if (!_strkey.StrKey.isValidMdilithium2PublicKey(address)) {
    throw new TypeError("expected muxed account (M...), got ".concat(address));
  }
  var muxedAccount = decodeAddressToMuxedAccount(address);
  return _strkey.StrKey.encodeDilithium2PublicKey(muxedAccount.mdilithium2().dilithium2());
}

// Decodes an "M..." account ID into its MuxedAccount object representation.
function _decodeAddressFullyToMuxedAccount(address) {
  var rawBytes = _strkey.StrKey.decodeMdilithium2PublicKey(address);

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
  return _xdr["default"].MuxedAccount.keyTypeMuxedDilithium2(new _xdr["default"].MuxedAccountMdilithium2({
    id: _xdr["default"].Uint64.fromXDR(rawBytes.subarray(-8)),
    dilithium2: rawBytes.subarray(0, -8)
  }));
}

// Converts an xdr.MuxedAccount into its *true* "M..." string representation.
function _encodeMuxedAccountFullyToAddress(muxedAccount) {
  if (muxedAccount["switch"]() === _xdr["default"].CryptoKeyType.keyTypeDilithium2()) {
    return encodeMuxedAccountToAddress(muxedAccount);
  }
  var muxed = muxedAccount.mdilithium2();
  return _strkey.StrKey.encodeMdilithium2PublicKey(Buffer.concat([muxed.dilithium2(), muxed.id().toXDR('raw')]));
}