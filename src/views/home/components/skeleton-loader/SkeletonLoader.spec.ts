import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import SkeletonLoader from './SkeletonLoader.vue'

describe('Home SkeletonLoader', () => {
	it('should be rendered correctly', () => {
		const component = mount(SkeletonLoader)

		expect(component.find('ul').exists()).toBe(true)
	})
})
