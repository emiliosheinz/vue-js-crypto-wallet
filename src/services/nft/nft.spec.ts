import { beforeAll, describe, expect, it, vi } from 'vitest'
import { getAllNfts } from '.'
import { api } from '../api'

beforeAll(() => {
	vi.mock('../api', () => ({
		api: {
			get: vi.fn((path: string) => path),
		},
	}))
})

describe('Nft Service', () => {
	describe('getAllNfts', () => {
		it('should call api.get onde /nfts', async () => {
			await getAllNfts()

			expect(api.get).toBeCalledTimes(1)
			expect(api.get).toBeCalledWith('/nfts')
		})

		it('should return the result of api.get', async () => {
			const result = await getAllNfts()

			expect(result).toBe('/nfts')
		})
	})
})
