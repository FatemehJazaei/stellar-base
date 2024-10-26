"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generate = generate;
exports.generateSK = generateSK;
exports.sign = sign;
exports.verify = verify;
var _mlDsa = require("@noble/post-quantum/ml-dsa");
// Function to sign data using a secret key
function sign(data, secretKey) {
  data = Buffer.from(data);
  var dataUint8 = new Uint8Array(data.toJSON().data);
  var secretKeyUint8 = new Uint8Array(secretKey.toJSON().data);
  var signature = _mlDsa.ml_dsa44.sign(secretKeyUint8, dataUint8);
  return Buffer.from(signature);
}

// Function to verify a signature using publicKey and data
function verify(data, signature, publicKey) {
  data = Buffer.from(data);
  var dataUint8 = new Uint8Array(data.toJSON().data);
  var signatureUint8 = new Uint8Array(signature.toJSON().data);
  var publicKeyUint8 = new Uint8Array(publicKey.toJSON().data);
  return _mlDsa.ml_dsa44.verify(publicKeyUint8, dataUint8, signatureUint8);
}

// Function to generate a public key from a seed key
function generate(secretKey) {
  var secretKeyUint8 = new Uint8Array(secretKey);
  var aliceKeys = _mlDsa.ml_dsa44.keygen(secretKeyUint8);
  return Buffer.from(aliceKeys.publicKey);
}

// Function to generate a secret key from a seed key

function generateSK(secretKey) {
  var secretKeyUint8 = new Uint8Array(secretKey);
  var aliceKeys = _mlDsa.ml_dsa44.keygen(secretKeyUint8);
  return Buffer.from(aliceKeys.secretKey);
}