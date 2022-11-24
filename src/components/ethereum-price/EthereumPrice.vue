<script setup lang="ts">
	import type { Nft } from '@/types/nft'

	defineProps<{ price: Nft['price'] }>()
</script>

<template>
	<div class="flex items-start gap-2">
		<img
			alt="Ethereum coin symbol"
			src="@/assets/ethereum.svg"
			width="9"
			height="15"
			class="pt-1"
		/>
		{{ price }}
	</div>
</template>
