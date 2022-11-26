import { makeNft } from '@/utils/tests'
import NftCard from './NftCard.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import type { Nft } from '@/types/nft'

describe('Wallet NftCard', () => {
	it('should render nft image with resize optimizations', () => {
		const nft = makeNft()

		const component = mount(NftCard, {
			props: { nft, onDeletePress: () => undefined },
		})
		const nftImage = component.find('[data-testid="nft-image"]')

		expect(nftImage.attributes().src).toBe(
			`${nft.image.url}&fit=clamp&w=100&h=100`
		)
	})

	it('should render nft collection name', () => {
		const nft = makeNft()

		const component = mount(NftCard, {
			props: { nft, onDeletePress: () => undefined },
		})
		const nftImage = component.find('[data-testid="nft-collection-name"]')

		expect(nftImage.text()).toBe(nft.collection.name)
	})

	it('should render nft id with # prefix', () => {
		const nft = makeNft()

		const component = mount(NftCard, {
			props: { nft, onDeletePress: () => undefined },
		})
		const nftId = component.find('[data-testid="nft-id"]')

		expect(nftId.text()).toBe(`#${nft.id}`)
	})

	it('should render nft price', () => {
		const nft = makeNft()

		const component = mount(NftCard, {
			props: { nft, onDeletePress: () => undefined },
		})
		const nftPrice = component.find('[data-testid="nft-price"]')

		expect(nftPrice.exists()).toBe(true)
	})

	it('should render trash can icon', () => {
		const nft = makeNft()

		const component = mount(NftCard, {
			props: { nft, onDeletePress: () => undefined },
		})
		const trashCan = component.find('[data-testid="trash-can-btn"]')

		expect(trashCan.exists()).toBe(true)
	})

	it('should call onDeletePress when trash can button is pressed', () => {
		const nft = makeNft()
		const cb = vi.fn((nft: Nft) => nft)

		const component = mount(NftCard, {
			props: { nft, onDeletePress: cb },
		})
		const trashCan = component.find('[data-testid="trash-can-btn"]')

		trashCan.trigger('click')

		expect(cb).toBeCalledTimes(1)
		expect(cb).toBeCalledWith(nft)
	})
})
