import xdr from './xdr';
import { StrKey, encodeCheck, decodeCheck } from './strkey';

/**
 * A container class with helpers to convert between signer keys
 * (`xdr.SignerKey`) and {@link StrKey}s.
 *
 * It's primarly used for manipulating the `extraSigners` precondition on a
 * {@link Transaction}.
 *
 * @see {@link TransactionBuilder.setExtraSigners}
 */
export class SignerKey {
  /**
   * Decodes a StrKey address into an xdr.SignerKey instance.
   *
   * Only dilithium2 public keys (G...), pre-auth transactions (T...), hashes
   * (H...), and signed payloads (P...) can be signer keys.
   *
   * @param   {string} address  a StrKey-encoded signer address
   * @returns {xdr.SignerKey}
   */
  static decodeAddress(address) {
    const signerKeyMap = {
      dilithium2PublicKey: xdr.SignerKey.signerKeyTypeDilithium2,
      preAuthTx: xdr.SignerKey.signerKeyTypePreAuthTx,
      sha256Hash: xdr.SignerKey.signerKeyTypeHashX,
      signedPayload: xdr.SignerKey.signerKeyTypeDilithium2SignedPayload
    };

    const vb = StrKey.getVersionByteForPrefix(address);
    const encoder = signerKeyMap[vb];
    if (!encoder) {
      throw new Error(`invalid signer key type (${vb})`);
    }

    const raw = decodeCheck(vb, address);
    switch (vb) {
      case 'signedPayload':
        return encoder(
          new xdr.SignerKeyDilithium2SignedPayload({
            dilithium2: raw.slice(0, 1312),
            payload: raw.slice(1312 + 4)
          })
        );

      case 'dilithium2PublicKey': // falls through
      case 'preAuthTx': // falls through
      case 'sha256Hash': // falls through
      default:
        return encoder(raw);
    }
  }

  /**
   * Encodes a signer key into its StrKey equivalent.
   *
   * @param   {xdr.SignerKey} signerKey   the signer
   * @returns {string} the StrKey representation of the signer
   */
  static encodeSignerKey(signerKey) {
    let strkeyType;
    let raw;

    switch (signerKey.switch()) {

      case xdr.SignerKeyType.signerKeyTypeDilithium2():
        strkeyType = 'dilithium2PublicKey';
        raw = signerKey.value();
        break;

      case xdr.SignerKeyType.signerKeyTypePreAuthTx():
        strkeyType = 'preAuthTx';
        raw = signerKey.value();
        break;

      case xdr.SignerKeyType.signerKeyTypeHashX():
        strkeyType = 'sha256Hash';
        raw = signerKey.value();
        break;

      case xdr.SignerKeyType.signerKeyTypeDilithium2SignedPayload():
        strkeyType = 'signedPayload';
        raw = signerKey.dilithium2SignedPayload().toXDR('raw');
        break;

      default:
        throw new Error(`invalid SignerKey (type: ${signerKey.switch()})`);
    }

    return encodeCheck(strkeyType, raw);
  }
}
