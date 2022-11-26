<script setup lang="ts">
	import EthereumPrice from '@/components/ethereum-price/EthereumPrice.vue'
	import type { Nft } from '@/types/nft'

	defineProps<{ nft: Nft }>()
</script>

<template>
	<div class="flex p-5 rounded-3xl bg-white space-x-5">
		<img
			:src="nft.image.url"
			class="w-24 h-24 rounded-xl"
			data-testid="nft-image"
		/>
		<div class="flex flex-col justify-between">
			<div>
				<p class="line-clamp-1 font-bold" data-testid="nft-collection-name">
					{{ nft.collection.name }}
				</p>
				<p class="font-light" data-testid="nft-id">#{{ nft.id }}</p>
			</div>
			<EthereumPrice :price="nft.price" data-testid="nft-price" />
		</div>
		<div></div>
	</div>
</template>
