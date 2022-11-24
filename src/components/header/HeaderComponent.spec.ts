import { describe, it, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import HeaderComponent from './HeaderComponent.vue'

import router from '@/router'

describe('HeaderComponent', () => {
	it('should render properly', () => {
		const component = mount(HeaderComponent, {
			global: {
				plugins: [router],
			},
		})

		expect(component.html()).toBeTruthy()
	})

	it('should render a header html tag', () => {
		const component = mount(HeaderComponent, {
			global: {
				plugins: [router],
			},
		})

		expect(component.html().startsWith('<header')).toBe(true)
	})

	it('should render a router link for home', () => {
		const component = mount(HeaderComponent, {
			global: {
				plugins: [router],
			},
		})

		const link = component.find('[data-testid="home-router-link"]')

		expect(link).toBeTruthy()
		expect(link.html().startsWith('<a')).toBe(true)
		expect(link.attributes().href).toEqual('/')
	})

	it('should render a router link for wallet', () => {
		const component = mount(HeaderComponent, {
			global: {
				plugins: [router],
			},
		})

		const link = component.find('[data-testid="wallet-router-link"]')

		expect(link).toBeTruthy()
		expect(link.html().startsWith('<a')).toBe(true)
		expect(link.attributes().href).toEqual('/wallet')
	})

	test.todo('should render the correct amount of items in the wallet')
	test.todo('should show items when there is no item in the wallet')
	test.todo('should show item when there is only one item in the wallet')
	test.todo('should show items when there is more then one item in the wallet')
})
