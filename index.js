const bip39 = require('bip39')
const bip32 = require('bip32')
const bitcoin = require('bitcoinjs-lib')

module.exports = ({
  network = 'testnet',
  mnemonic = bip39.generateMnemonic(),
  path
} = {}) => {
  if (mnemonic && !bip39.validateMnemonic(mnemonic)) {
    throw new Error('Mnemonic invalid')
  }

  const _path = path || `m/44'/${network === 'testnet' ? 1 : 0}'/0'`

  const seed = bip39.mnemonicToSeed(mnemonic.trim())
  const root = bip32.fromSeed(seed)

  const child = root.derivePath(_path.trim())

  const keyhash = bitcoin.crypto.hash160(child.publicKey)
  const scriptSig = bitcoin.script.witnessPubKeyHash.output.encode(keyhash)
  const addressBytes = bitcoin.crypto.hash160(scriptSig)
  const outputScript = bitcoin.script.scriptHash.output.encode(addressBytes)
  const address = bitcoin.address.fromOutputScript(outputScript, bitcoin.networks[network])

  return {
    mnemonic,
    address
  }
}
