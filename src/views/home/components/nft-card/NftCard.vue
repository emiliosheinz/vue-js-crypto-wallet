<script setup lang="ts">
	import ButtonComponent from '@/components/button/ButtonComponent.vue'
	import EthereumPrice from '@/components/ethereum-price/EthereumPrice.vue'
	import type { Nft } from '@/types/nft'

	defineProps<{
		nft: Nft
		onBuyClick?: (pressedNft: Nft) => void
		isBuyButtonDisable?: boolean
	}>()
</script>

<template>
	<div class="w-full md:w-80 rounded-3xl overflow-hidden bg-white">
		<img :src="nft.image.url" class="w-full h-80 object-cover" />
		<div class="space-y-2 p-3">
			<div class="flex flex-row">
				<div class="flex flex-1 flex-col">
					<p class="line-clamp-1 font-bold">{{ nft.collection.name }}</p>
					<p class="font-light">#{{ nft.id }}</p>
				</div>
				<EthereumPrice :price="nft.price" />
			</div>
			<ButtonComponent
				:isDisabled="isBuyButtonDisable"
				v-if="onBuyClick"
				:onClick="() => onBuyClick?.(nft)"
				label="Buy"
			/>
		</div>
	</div>
</template>
