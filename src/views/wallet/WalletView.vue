<script lang="ts" setup>
	import { useWalletStore } from '@/stores/wallet'
	import NftCard from './components/nft-card/NftCard.vue'
	import SummaryComponent from './components/summary/SummaryComponent.vue'

	const wallet = useWalletStore()
</script>

<template>
	<main v-if="!wallet.nfts.length" class="flex justify-center py-16 px-5">
		<h2 class="text-4xl text-center max-w-xl text-white">
			😅 You don't have any NFT in your wallet. Go back to the home screen and
			buy some!
		</h2>
	</main>

	<main
		v-else
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
