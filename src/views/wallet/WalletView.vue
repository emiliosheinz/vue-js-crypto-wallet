<script lang="ts" setup>
	import { useWalletStore } from '@/stores/wallet'
	import NftCard from './components/nft-card/NftCard.vue'
	import SummaryComponent from './components/summary/SummaryComponent.vue'

	const wallet = useWalletStore()
</script>

<template>
	<main
		class="max-w-6xl m-auto p-3 sm:p-10 gap-5 sm:gap-10 flex justify-center flex-col-reverse lg:flex-row"
	>
		<section class="flex flex-col flex-1">
			<ul class="space-y-4 sm:space-y-8">
				<li v-for="nft in wallet.nfts" :key="nft.id">
					<NftCard :nft="nft" />
				</li>
			</ul>
		</section>
		<SummaryComponent
			:nfts="wallet.nfts"
			:totalAmountInWallet="wallet.totalAmountInWallet"
		/>
	</main>
</template>
