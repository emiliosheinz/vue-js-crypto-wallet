import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import EthereumPriceVue from './EthereumPrice.vue'

describe('EthereumPrice', () => {
	it('should render the price passed as prop', () => {
		const priceString = '20'

		const component = mount(EthereumPriceVue, {
			props: { price: Number(priceString) },
		})

		const price = component.find('[data-testid="price"]')

		expect(price.text()).toEqual(priceString)
	})

	it('should render the ethereum svg', () => {
		const component = mount(EthereumPriceVue, {
			props: { price: 20 },
		})

		const ethereumSymbol = component.find('[data-testid="ethereum-symbol"]')

		expect(ethereumSymbol.html().startsWith('<img')).toBe(true)
		expect(ethereumSymbol.attributes().src).toEqual('/src/assets/ethereum.svg')
	})
})
