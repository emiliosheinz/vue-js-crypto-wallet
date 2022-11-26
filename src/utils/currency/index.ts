export const ethereumToDollar = (eth: number) => {
	const ETH_TO_USD_MULTIPLIER = 1_200
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	})

	return formatter.format(eth * ETH_TO_USD_MULTIPLIER)
}
