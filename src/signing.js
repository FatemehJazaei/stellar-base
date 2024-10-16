import { ml_dsa44 } from '@noble/post-quantum/ml-dsa';

// Function to sign data using a secret key
export function sign(data, secretKey) {
  
  data = Buffer.from(data);
  data = new Uint8Array(data.toJSON().data);
  secretKey = new Uint8Array(secretKey.toJSON().data);
  const signature = ml_dsa44.sign(data, secretKey);
  return Buffer.from(signature);
}

// Function to verify a signature using publicKey and data
export function verify(data, signature, publicKey) {

  data = Buffer.from(data);
  data = new Uint8Array(data.toJSON().data);
  signature = new Uint8Array(signature.toJSON().data);
  publicKey = new Uint8Array(publicKey.toJSON().data);
  return ml_dsa44.verify(publicKey, publicKey, signature);
}

// Function to generate a public key from a secret key
export function generate(secretKey) {

  const secretKeyUint8 = new Uint8Array(secretKey);
  const aliceKeys = ml_dsa44.keygen(secretKeyUint8);
  return Buffer.from(aliceKeys.publicKey);
}
