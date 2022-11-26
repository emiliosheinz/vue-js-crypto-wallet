import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import HeaderComponent from './HeaderComponent.vue'
import { createTestingPinia } from '@pinia/testing'

import router from '@/router'
import { useWalletStore } from '@/stores/wallet'
import { makeNft } from '@/utils/tests'

describe('HeaderComponent', () => {
	const plugins = () => [
		router,
		createTestingPinia({ createSpy: vi.fn, stubActions: false }),
	]

	it('should render properly', () => {
		const component = mount(HeaderComponent, { global: { plugins: plugins() } })

		expect(component.html()).toBeTruthy()
	})

	it('should render a header html tag', () => {
		const component = mount(HeaderComponent, { global: { plugins: plugins() } })

		expect(component.html().startsWith('<header')).toBe(true)
	})

	it('should render a router link for home', () => {
		const component = mount(HeaderComponent, { global: { plugins: plugins() } })

		const link = component.find('[data-testid="home-router-link"]')

		expect(link).toBeTruthy()
		expect(link.html().startsWith('<a')).toBe(true)
		expect(link.attributes().href).toEqual('/')
	})

	it('should render a router link for wallet', () => {
		const component = mount(HeaderComponent, { global: { plugins: plugins() } })

		const link = component.find('[data-testid="wallet-router-link"]')

		expect(link).toBeTruthy()
		expect(link.html().startsWith('<a')).toBe(true)
		expect(link.attributes().href).toEqual('/wallet')
	})

	it('should render the correct amount of items in the wallet', () => {
		const _plugins = plugins()

		const wallet = useWalletStore()
		wallet.addNft(makeNft())

		const component = mount(HeaderComponent, { global: { plugins: _plugins } })

		const walletAmount = component.find('[data-testid="wallet-items-amount"]')
		expect(walletAmount.text().startsWith('1')).toBe(true)
	})

	it('should show "items" when there is no item in the wallet', () => {
		const component = mount(HeaderComponent, { global: { plugins: plugins() } })
		const walletAmount = component.find('[data-testid="wallet-items-amount"]')

		expect(walletAmount.text().endsWith('items')).toBe(true)
	})

	it('should show "item" when there is only one item in the wallet', () => {
		const _plugins = plugins()

		const wallet = useWalletStore()
		wallet.addNft(makeNft())

		const component = mount(HeaderComponent, { global: { plugins: _plugins } })

		const walletAmount = component.find('[data-testid="wallet-items-amount"]')
		expect(walletAmount.text().endsWith('item')).toBe(true)
	})

	it('should show "items" when there is more then one item in the wallet', () => {
		const _plugins = plugins()

		const wallet = useWalletStore()
		wallet.addNft(makeNft())
		wallet.addNft(makeNft())
		wallet.addNft(makeNft())

		const component = mount(HeaderComponent, { global: { plugins: _plugins } })

		const walletAmount = component.find('[data-testid="wallet-items-amount"]')
		expect(walletAmount.text().endsWith('items')).toBe(true)
	})
})
