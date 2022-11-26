import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import ButtonComponent from './ButtonComponent.vue'

describe('ButtonComponent', () => {
	it('should render properly', () => {
		const label = 'Button Component'

		const component = mount(ButtonComponent, {
			props: { label, onClick: () => undefined },
		})

		expect(component.text()).toEqual(label)
	})

	it('should render a button', () => {
		const component = mount(ButtonComponent, {
			props: { label: 'Button Component', onClick: () => undefined },
		})

		expect(component.html().startsWith('<button')).toBeTruthy()
	})

	it('should call callback once when pressed', () => {
		const callback = vi.fn()

		const component = mount(ButtonComponent, {
			props: { label: 'Button Component', onClick: callback },
		})

		expect(callback).toBeCalledTimes(0)

		component.find('button').trigger('click')

		expect(callback).toBeCalledTimes(1)
	})

	it('should desable button when isDisabled is provided', () => {
		const component = mount(ButtonComponent, {
			props: { label: 'Button Component', onClick: vi.fn(), isDisabled: true },
		})

		const button = component.find('button')

		expect(button.attributes().disabled).toBeDefined()
	})
})
