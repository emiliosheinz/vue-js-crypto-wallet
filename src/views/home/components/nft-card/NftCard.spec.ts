import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import NftCardVue from './NftCard.vue'
import { makeNft } from '@/utils/tests'

describe('Home NftCard', () => {
	it('should render nft image', () => {
		const nft = makeNft()

		const component = mount(NftCardVue, { props: { nft } })
		const image = component.find('[data-testid="nft-image"]')

		expect(image.attributes().src).toBe(nft.image.url)
	})

	it('should render nft collection name', () => {
		const nft = makeNft()

		const component = mount(NftCardVue, { props: { nft } })
		const collectionName = component.find('[data-testid="collection-name"]')

		expect(collectionName.text()).toBe(nft.collection.name)
	})

	it('should render nft id with # prefix', () => {
		const nft = makeNft()

		const component = mount(NftCardVue, { props: { nft } })
		const nftId = component.find('[data-testid="nft-id"]')

		expect(nftId.text()).toBe(`#${nft.id}`)
	})

	it('should properly render ethereum price', () => {
		const nft = makeNft()

		const component = mount(NftCardVue, { props: { nft } })
		const nftId = component.find('[data-testid="ethereum-price"]')

		expect(nftId.html()).toContain(nft.price)
	})

	it('should not render buy button when no callback is provided', () => {
		const nft = makeNft()

		const component = mount(NftCardVue, { props: { nft } })
		const buyButton = component.find('[data-testid="buy-button"]')

		expect(buyButton.exists()).toBe(false)
	})

	it('should render buy button when callback is provided', () => {
		const nft = makeNft()
		const cb = vi.fn()

		const component = mount(NftCardVue, { props: { nft, onBuyClick: cb } })
		const buyButton = component.find('[data-testid="buy-button"]')

		expect(buyButton.exists()).toBe(true)
	})

	it('should call provided callback with proper params when button is pressed', () => {
		const nft = makeNft()
		const cb = vi.fn()

		const component = mount(NftCardVue, { props: { nft, onBuyClick: cb } })

		component.find('[data-testid="buy-button"]').trigger('click')

		expect(cb).toBeCalledTimes(1)
		expect(cb).toBeCalledWith(nft)
	})

	it('should disable buy button when isBuyButtonDisable is provided', () => {
		const nft = makeNft()
		const cb = vi.fn()

		const component = mount(NftCardVue, {
			props: { nft, onBuyClick: cb, isBuyButtonDisabled: true },
		})

		const buyButton = component.find('[data-testid="buy-button"]')

		expect(buyButton.attributes().disabled).toBeDefined()
	})
})
