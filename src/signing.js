import { ml_dsa44 } from '@noble/post-quantum/ml-dsa';

export const FastSigning = true;

// Function to sign data using a secret key
export function sign(data, secretKey) {
  data = Buffer.from(data);
  const dataUint8  = new Uint8Array(data.toJSON().data);
  const secretKeyUint8  = new Uint8Array(secretKey.toJSON().data);
  const signature = ml_dsa44.sign(secretKeyUint8 , dataUint8 );
  return Buffer.from(signature);
}

// Function to verify a signature using publicKey and data
export function verify(data, signature, publicKey) {
  data = Buffer.from(data);
  const dataUint8  = new Uint8Array(data.toJSON().data);
  const signatureUint8  = new Uint8Array(signature.toJSON().data);
  const publicKeyUint8  = new Uint8Array(publicKey.toJSON().data);
  return ml_dsa44.verify( publicKeyUint8 , dataUint8 , signatureUint8 );
}

// Function to generate a public key from a seed key
export function generate(secretKey) {
  const secretKeyUint8 = new Uint8Array(secretKey);
  const aliceKeys = ml_dsa44.keygen(secretKeyUint8);
  return Buffer.from(aliceKeys.publicKey);
}

// Function to generate a secret key from a seed key

export function generateSK(secretKey) {
  const secretKeyUint8 = new Uint8Array(secretKey);
  const aliceKeys = ml_dsa44.keygen(secretKeyUint8);
  return Buffer.from(aliceKeys.secretKey);
}