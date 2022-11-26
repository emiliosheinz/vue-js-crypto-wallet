<script setup lang="ts">
	import { ref } from 'vue'
	import NftCard from './components/nft-card/NftCard.vue'
	import { getAllNfts } from '@/services/nft'
	import type { Nft } from '@/types/nft'
	import { useWalletStore } from '@/stores/wallet'
	import SkeletonLoader from './components/skeleton-loader/SkeletonLoader.vue'

	const hasError = ref(false)
	const isLoading = ref(true)
	const nfts = ref<Nft[]>([])
	const wallet = useWalletStore()

	async function getData() {
		try {
			const response = await getAllNfts()

			nfts.value = response.data
		} catch {
			hasError.value = true
		} finally {
			isLoading.value = false
		}
	}

	getData()
</script>

<template>
	<main class="max-w-6xl m-auto">
		<SkeletonLoader v-if="isLoading" />
		<div v-else-if="hasError" class="flex justify-center py-16 px-5">
			<h2 class="text-4xl text-center max-w-xl text-white">
				🤒 Opss, it seems that something when wrong in our servers. Please, try
				again later!
			</h2>
		</div>
		<ul
			v-else
			class="px-5 pb-10 md:px-0 flex md:justify-center flex-wrap gap-4 md:gap-8"
		>
			<li v-for="nft in nfts" :key="nft.id" class="w-full md:w-auto">
				<NftCard
					:nft="nft"
					:onBuyClick="pressedNft => wallet.addNft(pressedNft)"
					:isBuyButtonDisabled="wallet.nfts.some(({ id }) => id === nft.id)"
				/>
			</li>
		</ul>
	</main>
</template>
