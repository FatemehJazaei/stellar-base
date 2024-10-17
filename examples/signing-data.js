// import * as StellarBase from '../src';

const StellarBase = require('../lib/index.js'); 

var key = StellarBase.Keypair.random();
console.log(key.xdrPublicKey());

// console.log('Keypair: ' );
// console.log(key);

// console.log('rawPublicKey: ' );
// console.log(key.rawPublicKey());
// console.log('publicKey: ' );
// console.log(key.publicKey());


// console.log('rawSecretKey: ' );
// console.log(key.rawSecretKey());
// console.log('secret: ' );
// console.log(key.secret());

// var data = 'data to sign';
// var signature = key.sign(data);

// console.log('Signature: ' );
// console.log(signature);

// if (StellarBase.verify(data, signature, key.rawPublicKey())) {
//   console.log('OK!');
// } else {
//   console.log('Bad signature!');
// }