import { describe, expect, it } from 'vitest'
import { ethereumToDollar } from '.'

describe('Currency Util', () => {
	describe('ethereumToDollar', () => {
		it('should properly format the result', () => {
			const result = ethereumToDollar(1)

			const usdMatcher = /^\$[+-]?[0-9]{1,3}(?:,?[0-9]{3})*\.[0-9]{2}$/
			expect(usdMatcher.test(result)).toBe(true)
		})
	})
})
