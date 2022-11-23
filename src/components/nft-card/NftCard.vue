<script setup lang="ts">
	import ButtonComponent from '@/components/button/ButtonComponent.vue'
	import type { Nft } from '@/types/nft'

	defineProps<{
		nft: Nft
	}>()
</script>

<template>
	<div class="w-80 rounded-3xl overflow-hidden bg-white">
		<img :src="nft.image.url" class="w-full h-80" />
		<div class="space-y-2 p-3">
			<div class="flex flex-row">
				<div class="flex flex-1 flex-col">
					<p class="line-clamp-1 font-bold">{{ nft.collection.name }}</p>
					<p class="font-light">#{{ nft.id }}</p>
				</div>
				<div class="flex items-start gap-2">
					<img
						alt="Ethereum coin symbol"
						src="@/assets/ethereum.svg"
						width="9"
						height="15"
						class="pt-1"
					/>
					{{ nft.price }}
				</div>
			</div>
			<ButtonComponent label="Buy" />
		</div>
	</div>
</template>
