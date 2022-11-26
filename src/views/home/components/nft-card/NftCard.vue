<script setup lang="ts">
	import ButtonComponent from '@/components/button/ButtonComponent.vue'
	import EthereumPrice from '@/components/ethereum-price/EthereumPrice.vue'
	import type { Nft } from '@/types/nft'

	defineProps<{
		nft: Nft
		onBuyClick?: (pressedNft: Nft) => void
		isBuyButtonDisabled?: boolean
		hasLoadingPriority?: boolean
	}>()
</script>

<template>
	<div class="w-full md:w-80 rounded-3xl overflow-hidden bg-white">
		<img
			:src="`${nft.image.url}&fit=clamp&w=320`"
			class="w-full h-80 object-cover"
			data-testid="nft-image"
			:fetchPriority="hasLoadingPriority ? 'high' : 'auto'"
			:loading="hasLoadingPriority ? 'eager' : 'lazy'"
			:alt="nft.collection.name"
		/>
		<div class="space-y-2 p-3">
			<div class="flex flex-row">
				<div class="flex flex-1 flex-col">
					<p class="line-clamp-1 font-bold" data-testid="collection-name">
						{{ nft.collection.name }}
					</p>
					<p class="font-light" data-testid="nft-id">#{{ nft.id }}</p>
				</div>
				<EthereumPrice :price="nft.price" data-testid="ethereum-price" />
			</div>
			<ButtonComponent
				v-if="onBuyClick"
				:isDisabled="isBuyButtonDisabled"
				:onClick="() => onBuyClick?.(nft)"
				label="Buy"
				data-testid="buy-button"
			/>
		</div>
	</div>
</template>
