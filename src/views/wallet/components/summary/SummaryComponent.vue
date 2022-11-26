<script setup lang="ts">
	import EthereumPrice from '@/components/ethereum-price/EthereumPrice.vue'
	import { ethereumToDollar } from '@/utils/currency'
	import type { Nft } from '@/types/nft'

	defineProps<{ nfts: Nft[]; totalAmountInWallet: number }>()
</script>

<template>
	<section class="h-min bg-white py-6 px-8 w-full rounded-3xl lg:w-96">
		<table class="w-full">
			<thead>
				<tr>
					<td>
						<h2 class="font-bold text-2xl" data-testid="summary-title">
							Summary
						</h2>
					</td>
				</tr>
			</thead>
			<tbody data-testid="table-body">
				<tr v-for="nft in nfts" :key="`summary-${nft.id}`">
					<td>
						<p class="font-light">#{{ nft.id }}</p>
					</td>
					<td><EthereumPrice :price="nft.price" /></td>
					<td class="flex justify-end">
						<p class="font-light">{{ ethereumToDollar(nft.price) }}</p>
					</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td><p class="font-bold text-xl">Total</p></td>
					<td>
						<EthereumPrice
							:price="totalAmountInWallet"
							data-testid="ethereum-price"
						/>
					</td>
					<td class="flex justify-end" data-testid="dollar-price">
						{{ ethereumToDollar(totalAmountInWallet) }}
					</td>
				</tr>
			</tfoot>
		</table>
	</section>
</template>
