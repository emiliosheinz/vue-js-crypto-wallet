<script setup lang="ts">
	import EthereumPrice from '@/components/ethereum-price/EthereumPrice.vue'
	import type { Nft } from '@/types/nft'

	defineProps<{ nft: Nft; onDeletePress: (nft: Nft) => void }>()
</script>

<template>
	<div class="flex p-5 rounded-3xl bg-white space-x-5">
		<img
			:src="nft.image.url"
			class="w-24 h-24 rounded-xl"
			data-testid="nft-image"
		/>
		<div class="flex flex-col justify-between flex-1">
			<div>
				<p class="line-clamp-1 font-bold" data-testid="nft-collection-name">
					{{ nft.collection.name }}
				</p>
				<p class="font-light" data-testid="nft-id">#{{ nft.id }}</p>
			</div>
			<EthereumPrice :price="nft.price" data-testid="nft-price" />
		</div>
		<div>
			<button
				type="button"
				data-testid="trash-can-btn"
				@click="() => onDeletePress(nft)"
			>
				<img src="/src/assets/trash-can.svg" class="w-25 h-25 rounded-xl" />
			</button>
		</div>
	</div>
</template>
