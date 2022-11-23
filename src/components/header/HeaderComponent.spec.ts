import { describe, it, expect } from 'vitest'

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
})
