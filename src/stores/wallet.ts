import type { Nft } from '@/types/nft'
import { defineStore } from 'pinia'

type WalletStore = {
	nfts: Nft[]
}

export const useWalletStore = defineStore('wallet', {
	state: (): WalletStore => {
		return { nfts: [] }
	},
	actions: {
		addNft(nft: Nft) {
			const hasNftInWallet = this.nfts.some(({ id }) => id === nft.id)

			if (hasNftInWallet) return

			this.nfts.push(nft)
		},
	},
})
