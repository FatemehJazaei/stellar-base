/* eslint-disable no-param-reassign */

import xdr from '../xdr';
import { Keypair } from '../keypair';
import { StrKey } from '../strkey';

function weightCheckFunction(value, name) {
  if (value >= 0 && value <= 255) {
    return true;
  }
  throw new Error(`${name} value must be between 0 and 255`);
}

/**
 * Returns an XDR SetOptionsOp. A "set options" operations set or clear account flags,
 * set the account's inflation destination, and/or add new signers to the account.
 * The flags used in `opts.clearFlags` and `opts.setFlags` can be the following:
 *   - `{@link AuthRequiredFlag}`
 *   - `{@link AuthRevocableFlag}`
 *   - `{@link AuthImmutableFlag}`
 *   - `{@link AuthClawbackEnabledFlag}`
 *
 * It's possible to set/clear multiple flags at once using logical or.
 *
 * @function
 * @alias Operation.setOptions
 *
 * @param {object} opts Options object
 * @param {string} [opts.inflationDest] - Set this account ID as the account's inflation destination.
 * @param {(number|string)} [opts.clearFlags] - Bitmap integer for which account flags to clear.
 * @param {(number|string)} [opts.setFlags] - Bitmap integer for which account flags to set.
 * @param {number|string} [opts.masterWeight] - The master key weight.
 * @param {number|string} [opts.lowThreshold] - The sum weight for the low threshold.
 * @param {number|string} [opts.medThreshold] - The sum weight for the medium threshold.
 * @param {number|string} [opts.highThreshold] - The sum weight for the high threshold.
 * @param {object} [opts.signer] - Add or remove a signer from the account. The signer is
 *                                 deleted if the weight is 0. Only one of `dilithium2PublicKey`, `sha256Hash`, `preAuthTx` should be defined.
 * @param {string} [opts.signer.dilithium2PublicKey] - The dilithium2 public key of the signer.
 * @param {Buffer|string} [opts.signer.sha256Hash] - sha256 hash (Buffer or hex string) of preimage that will unlock funds. Preimage should be used as signature of future transaction.
 * @param {Buffer|string} [opts.signer.preAuthTx] - Hash (Buffer or hex string) of transaction that will unlock funds.
 * @param {string} [opts.signer.dilithium2SignedPayload] - Signed payload signer (dilithium2 public key + raw payload) for atomic transaction signature disclosure.
 * @param {number|string} [opts.signer.weight] - The weight of the new signer (0 to delete or 1-255)
 * @param {string} [opts.homeDomain] - sets the home domain used for reverse federation lookup.
 * @param {string} [opts.source] - The source account (defaults to transaction source).
 *
 * @returns {xdr.SetOptionsOp}  XDR operation
 * @see [Account flags](https://developers.stellar.org/docs/glossary/accounts/#flags)
 */
export function setOptions(opts) {
  const attributes = {};

  if (opts.inflationDest) {
    if (!StrKey.isValidDilithium2PublicKey(opts.inflationDest)) {
      throw new Error('inflationDest is invalid');
    }
    attributes.inflationDest = Keypair.fromPublicKey(
      opts.inflationDest
    ).xdrAccountId();
  }

  attributes.clearFlags = this._checkUnsignedIntValue(
    'clearFlags',
    opts.clearFlags
  );
  attributes.setFlags = this._checkUnsignedIntValue('setFlags', opts.setFlags);
  attributes.masterWeight = this._checkUnsignedIntValue(
    'masterWeight',
    opts.masterWeight,
    weightCheckFunction
  );
  attributes.lowThreshold = this._checkUnsignedIntValue(
    'lowThreshold',
    opts.lowThreshold,
    weightCheckFunction
  );
  attributes.medThreshold = this._checkUnsignedIntValue(
    'medThreshold',
    opts.medThreshold,
    weightCheckFunction
  );
  attributes.highThreshold = this._checkUnsignedIntValue(
    'highThreshold',
    opts.highThreshold,
    weightCheckFunction
  );

  if (opts.homeDomain !== undefined && typeof opts.homeDomain !== 'string') {
    throw new TypeError('homeDomain argument must be of type String');
  }
  attributes.homeDomain = opts.homeDomain;

  if (opts.signer) {
    const weight = this._checkUnsignedIntValue(
      'signer.weight',
      opts.signer.weight,
      weightCheckFunction
    );
    let key;

    let setValues = 0;

    if (opts.signer.dilithium2PublicKey) {
      if (!StrKey.isValidDilithium2PublicKey(opts.signer.dilithium2PublicKey)) {
        throw new Error('signer.dilithium2PublicKey is invalid.');
      }
      const rawKey = StrKey.decodeDilithium2PublicKey(
        opts.signer.dilithium2PublicKey
      );

      // eslint-disable-next-line new-cap
      key = new xdr.SignerKey.signerKeyTypeDilithium2(rawKey);
      setValues += 1;
    }

    if (opts.signer.preAuthTx) {
      if (typeof opts.signer.preAuthTx === 'string') {
        opts.signer.preAuthTx = Buffer.from(opts.signer.preAuthTx, 'hex');
      }

      if (
        !(
          Buffer.isBuffer(opts.signer.preAuthTx) &&
          opts.signer.preAuthTx.length === 32
        )
      ) {
        throw new Error('signer.preAuthTx must be 32 bytes Buffer.');
      }

      // eslint-disable-next-line new-cap
      key = new xdr.SignerKey.signerKeyTypePreAuthTx(opts.signer.preAuthTx);
      setValues += 1;
    }

    if (opts.signer.sha256Hash) {
      if (typeof opts.signer.sha256Hash === 'string') {
        opts.signer.sha256Hash = Buffer.from(opts.signer.sha256Hash, 'hex');
      }

      if (
        !(
          Buffer.isBuffer(opts.signer.sha256Hash) &&
          opts.signer.sha256Hash.length === 32
        )
      ) {
        throw new Error('signer.sha256Hash must be 32 bytes Buffer.');
      }

      // eslint-disable-next-line new-cap
      key = new xdr.SignerKey.signerKeyTypeHashX(opts.signer.sha256Hash);
      setValues += 1;
    }

    if (opts.signer.dilithium2SignedPayload) {
      if (!StrKey.isValidSignedPayload(opts.signer.dilithium2SignedPayload)) {
        throw new Error('signer.dilithium2SignedPayload is invalid.');
      }
      const rawKey = StrKey.decodeSignedPayload(
        opts.signer.dilithium2SignedPayload
      );
      const signedPayloadXdr =
        xdr.SignerKeyDilithium2SignedPayload.fromXDR(rawKey);

      // eslint-disable-next-line new-cap
      key = xdr.SignerKey.signerKeyTypeDilithium2SignedPayload(signedPayloadXdr);
      setValues += 1;
    }

    if (setValues !== 1) {
      throw new Error(
        'Signer object must contain exactly one of signer.dilithium2PublicKey, signer.sha256Hash, signer.preAuthTx.'
      );
    }

    attributes.signer = new xdr.Signer({ key, weight });
  }

  const setOptionsOp = new xdr.SetOptionsOp(attributes);

  const opAttributes = {};
  opAttributes.body = xdr.OperationBody.setOptions(setOptionsOp);
  this.setSourceAccount(opAttributes, opts);

  return new xdr.Operation(opAttributes);
}
