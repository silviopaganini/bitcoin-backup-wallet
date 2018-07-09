/* global describe, it */
const generate = require('../')
const assert = require('assert')

describe('Address Generator', () => {
  describe('General', () => {
    it('should throw error for invalid mnemonic', () => {
      assert.throws(() => {
        throw new Error('Mnemonic invalid')
      }, Error)
    })
  })

  describe('Testnet', () => {
    it('should generate address and mnemonic', () => {
      const addr = generate()
      assert.notEqual(addr.mnemonic, null)
      assert.notEqual(addr.address, null)
    })

    it('should match address and mnemonic', () => {
      const mnemonic = 'catch pulp kiwi setup rely auction depth dance access van rug acoustic'
      const addr = generate({
        mnemonic
      })
      assert.equal(addr.mnemonic, mnemonic)
      assert.equal(addr.address, '2N3MHGascqLt55AFkQGjWzBd79ntQuwXavF')
    })
  })

  describe('Bitcoin mainet', () => {
    it('should generate address and mnemonic', () => {
      const addr = generate({network: 'bitcoin'})
      assert.notEqual(addr.mnemonic, null)
      assert.notEqual(addr.address, null)
    })

    it('should match address and mnemonic', () => {
      const mnemonic = 'history maple explain voyage title author lesson satisfy company romance whale sick'
      const address = '3F7qfNvz4DuXSahJbFGUKb765BDjfC1vmB'
      const addr = generate({
        network: 'bitcoin',
        mnemonic
      })
      assert.equal(addr.mnemonic, mnemonic)
      assert.equal(addr.address, address)
    })
  })

  describe('Litecoin', () => {
    it('should generate address and mnemonic', () => {
      const addr = generate({network: 'litecoin'})
      assert.notEqual(addr.mnemonic, null)
      assert.notEqual(addr.address, null)
    })

    it('should match address and mnemonic', () => {
      const mnemonic = 'enroll immense addict segment among alarm topple cloth poet desert valve scheme'
      const address = 'MVxJuKrfTmXokVFd885c8MwtyYmX9XGaLN'
      const addr = generate({
        network: 'litecoin',
        mnemonic
      })
      assert.equal(addr.mnemonic, mnemonic)
      assert.equal(addr.address, address)
    })
  })
})
