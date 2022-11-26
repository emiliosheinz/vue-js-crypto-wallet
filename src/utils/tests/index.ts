import { faker } from '@faker-js/faker'
import type { Nft } from '@/types/nft'

export const makeNft = (): Nft => ({
	id: faker.datatype.number(),
	price: faker.datatype.number(),
	collection: {
		name: faker.random.words(3),
	},
	image: {
		url: faker.image.abstract(),
		previewUrl: faker.image.abstract(),
		thumbnailUrl: faker.image.abstract(),
	},
})
