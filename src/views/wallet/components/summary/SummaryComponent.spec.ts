import { ethereumToDollar } from '@/utils/currency'
import { makeNft } from '@/utils/tests'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import SummaryComponent from './SummaryComponent.vue'

const nfts = [makeNft(), makeNft()]
const totalAmountInWallet = nfts[0].price + nfts[1].price

describe('Wallet SummaryComponent', () => {
	it('should render the summary title', () => {
		const component = mount(SummaryComponent, {
			props: { nfts, totalAmountInWallet },
		})

		const title = component.find('[data-testid="summary-title"]')

		expect(title.text()).toBe('Summary')
	})

	it('should render the total ethereum amount', () => {
		const component = mount(SummaryComponent, {
			props: { nfts, totalAmountInWallet },
		})

		const ethPrice = component.find('[data-testid="ethereum-price"]')

		expect(ethPrice.exists()).toBe(true)
		expect(ethPrice.html()).toContain(totalAmountInWallet)
	})

	it('should render the total ethereum amount in dollars', () => {
		const component = mount(SummaryComponent, {
			props: { nfts, totalAmountInWallet },
		})

		const dollarPrice = component.find('[data-testid="dollar-price"]')

		expect(dollarPrice.exists()).toBe(true)
		expect(dollarPrice.text()).toBe(ethereumToDollar(totalAmountInWallet))
	})

	it('should render the id of all nfts in the table body', () => {
		const component = mount(SummaryComponent, {
			props: { nfts, totalAmountInWallet },
		})

		const tableBodyHtml = component.find('[data-testid="table-body"]').html()

		nfts.forEach(nft => {
			expect(tableBodyHtml).toContain(`#${nft.id}`)
		})
	})

	it('should render the price in ethereum of all the nfts in the table body', () => {
		const component = mount(SummaryComponent, {
			props: { nfts, totalAmountInWallet },
		})

		const tableBodyHtml = component.find('[data-testid="table-body"]').html()

		nfts.forEach(nft => {
			expect(tableBodyHtml).toContain(nft.price)
		})
	})

	it('should render the price in dollars of all nfts in the table body', () => {
		const component = mount(SummaryComponent, {
			props: { nfts, totalAmountInWallet },
		})

		const tableBodyHtml = component.find('[data-testid="table-body"]').html()

		nfts.forEach(nft => {
			expect(tableBodyHtml).toContain(ethereumToDollar(nft.price))
		})
	})
})
