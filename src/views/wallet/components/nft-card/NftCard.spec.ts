import { makeNft } from '@/utils/tests'
import NftCard from './NftCard.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('Wallet NftCard', () => {
	it('should render nft image', () => {
		const nft = makeNft()

		const component = mount(NftCard, { props: { nft } })
		const nftImage = component.find('[data-testid="nft-image"]')

		expect(nftImage.attributes().src).toBe(nft.image.url)
	})

	it('should render nft collection name', () => {
		const nft = makeNft()

		const component = mount(NftCard, { props: { nft } })
		const nftImage = component.find('[data-testid="nft-collection-name"]')

		expect(nftImage.text()).toBe(nft.collection.name)
	})

	it('should render nft id with # prefix', () => {
		const nft = makeNft()

		const component = mount(NftCard, { props: { nft } })
		const nftId = component.find('[data-testid="nft-id"]')

		expect(nftId.text()).toBe(`#${nft.id}`)
	})

	it('should render nft price', () => {
		const nft = makeNft()

		const component = mount(NftCard, { props: { nft } })
		const nftPrice = component.find('[data-testid="nft-price"]')

		expect(nftPrice.exists()).toBe(true)
	})
})
