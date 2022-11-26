import type { Nft } from '@/types/nft'
import { makeNft } from '@/utils/tests'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useWalletStore } from '.'

describe('Wallet Store', () => {
	beforeEach(() => {
		setActivePinia(createPinia())
	})

	it('should correctly initialize the state', () => {
		const wallet = useWalletStore()

		expect(wallet.nfts).toEqual([])
	})

	it('should add new nft when addNft is called', () => {
		const wallet = useWalletStore()

		wallet.addNft({ id: 1 } as Nft)

		expect(wallet.nfts.length).toBe(1)
	})

	it('should not add new nft when nft with same id is already in wallet', () => {
		const wallet = useWalletStore()

		const nft = makeNft()
		wallet.addNft(nft)
		wallet.addNft(nft)

		expect(wallet.nfts.length).toBe(1)
	})

	it('should properly update totalAmountInWallet getter', () => {
		const wallet = useWalletStore()

		expect(wallet.totalAmountInWallet).toBe(0)

		const firstNft = makeNft()
		wallet.addNft(firstNft)
		expect(wallet.totalAmountInWallet).toBe(firstNft.price)

		const secondNft = makeNft()
		wallet.addNft(secondNft)

		expect(wallet.totalAmountInWallet).toBe(firstNft.price + secondNft.price)
	})

	it('should remove when removeNft is called with an id of an nft that is in the wallet', () => {
		const wallet = useWalletStore()

		const nft = makeNft()
		wallet.addNft(nft)

		expect(wallet.nfts.length).toBe(1)

		wallet.removeNft(nft.id)
		expect(wallet.nfts.length).toBe(0)
	})

	it('should not remove when removeNft is called with an id of an nft that is not in the wallet', () => {
		const wallet = useWalletStore()

		const nft = makeNft()
		wallet.addNft(nft)

		expect(wallet.nfts.length).toBe(1)

		wallet.removeNft(makeNft().id)
		expect(wallet.nfts.length).toBe(1)
	})
})
