# Public Address and Mnemonic generator (Bitcoin, Litecoin, Testnet)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Wrapper module to generate Bitcoin addresses

## Install

```bash
yarn add btc-address-generator
```

## Usage

```js
import generate from 'btc-address-generator'

const addr = generate()

// optional parameters
/*
{
  network: 'testnet', // testnet (default), bitcoin, litecoin
  mnemonic: '12 words mnemonic', // mnemonic (default null)
  path: "m/44'/1'/0'" // default testnet detrive path
}
*/

console.log(addr)
// {
//   mnemonic: 'your 12 words seed',
//   address: 'your public key'
// }
```
