<script setup lang="ts">
	import { useWalletStore } from '@/stores/wallet'

	const wallet = useWalletStore()
</script>

<template>
	<main class="max-w-6xl m-auto gap-8 flex justify-center">
		<section class="bg-white p-20 flex flex-1"></section>
		<section class="bg-white p-40"></section>
	</main>
</template>
