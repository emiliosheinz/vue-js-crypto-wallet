import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ButtonComponent from './ButtonComponent.vue'

describe('ButtonComponent', () => {
	it('should render properly', () => {
		const label = 'Button Component'

		const component = mount(ButtonComponent, {
			props: { label },
		})

		expect(component.text()).toEqual(label)
	})

	it('should render a button', () => {
		const component = mount(ButtonComponent, {
			props: { label: 'Button Component' },
		})

		expect(component.html().startsWith('<button')).toBeTruthy()
	})
})
