<script setup lang="ts">
	import { ref } from 'vue'
	import NftCard from '@/components/nft-card/NftCard.vue'
	import { getAllNfts } from '@/services/nft'
	import type { Nft } from '@/types/nft'
	import { useWalletStore } from '@/stores/wallet'

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
		<ul
			v-if="isLoading"
			class="flex justify-center flex-wrap gap-8 animate-pulse"
		>
			<li class="h-96 w-80 rounded-3xl overflow-hidden bg-slate-800"></li>
			<li class="h-96 w-80 rounded-3xl overflow-hidden bg-slate-800"></li>
			<li class="h-96 w-80 rounded-3xl overflow-hidden bg-slate-800"></li>
			<li class="h-96 w-80 rounded-3xl overflow-hidden bg-slate-800"></li>
			<li class="h-96 w-80 rounded-3xl overflow-hidden bg-slate-800"></li>
			<li class="h-96 w-80 rounded-3xl overflow-hidden bg-slate-800"></li>
		</ul>
		<h1 v-else-if="hasError">Deu Ruim</h1>
		<ul v-else class="flex justify-center flex-wrap gap-8">
			<li v-for="nft in nfts" :key="nft.id">
				<NftCard
					:nft="nft"
					:onBuyClick="pressedNft => wallet.addNft(pressedNft)"
					:isBuyButtonDisable="wallet.nfts.some(({ id }) => id === nft.id)"
				/>
			</li>
		</ul>
	</main>
</template>
