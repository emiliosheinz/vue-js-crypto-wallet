export const ethereumToDollar = (eth: number) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	})

	return formatter.format(eth * 1_200)
}
