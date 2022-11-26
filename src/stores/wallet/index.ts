import type { Nft } from '@/types/nft'
import { defineStore } from 'pinia'

type WalletStore = {
	nfts: Nft[]
}

export const useWalletStore = defineStore('wallet', {
	persist: true,
	state: (): WalletStore => {
		return { nfts: [] }
	},
	getters: {
		totalAmountInWallet: state => {
			const total = state.nfts.reduce((acc, nft) => acc + nft.price, 0)
			return Number(total.toFixed(2))
		},
	},
	actions: {
		addNft(nft: Nft) {
			const hasNftInWallet = this.nfts.some(({ id }) => id === nft.id)

			if (hasNftInWallet) return

			this.nfts.push(nft)
		},
		removeNft(nftId: number) {
			this.nfts = this.nfts.filter(nft => nft.id !== nftId)
		},
	},
})
