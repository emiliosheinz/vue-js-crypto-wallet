import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ButtonComponent from '../HelloWorld.vue'

describe('ButtonComponent', () => {
	it('should be rendered properly', () => {
		const wrapper = mount(ButtonComponent, {
			props: { label: 'Button Component' },
		})

		expect(wrapper.text()).toContain('Hello Vitest')
	})
})
