// import * as StellarBase from '../src';

const StellarBase = require('../lib/index.js'); 

var keypair = StellarBase.Keypair.random();

var data = 'data to sign';
var signature = keypair.sign(data);

console.log('Signature: ' + signature.toString('hex'));

if (StellarBase.verify(data, signature, keypair.rawPublicKey())) {
  console.log('OK!');
} else {
  console.log('Bad signature!');
}
