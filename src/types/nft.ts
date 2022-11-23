export type Nft = {
	id: number
	price: number
	collection: {
		name: string
	}
	image: {
		url: string
		previewUrl: string
		thumbnailUrl: string
	}
}
