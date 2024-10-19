export async function sleep(ms: number): Promise<void> {
	if (process.env.NODE_ENV === 'production') return Promise.resolve()
	return new Promise(resolve => setTimeout(resolve, ms))
}
