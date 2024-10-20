const PORT = process.env.PORT || 3000

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || '{{ replace-here }}'

export const SHORT_DOMAIN =
	process.env.NEXT_PUBLIC_APP_SHORT_DOMAIN || '{{ replace-here }}'

export const HOME_DOMAIN = `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}`

export const APP_HOSTNAMES = new Set([
	`app.${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
	`preview.${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
	`localhost:${PORT}`,
	`localhost`,
])

const IS_VERCEL_PROD_ENV = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
const IS_VERCEL_PREVIEW_ENV = process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'

export const APP_DOMAIN = IS_VERCEL_PROD_ENV
	? `https://app.${process.env.NEXT_PUBLIC_APP_DOMAIN}`
	: IS_VERCEL_PREVIEW_ENV
		? `https://preview.${process.env.NEXT_PUBLIC_APP_DOMAIN}`
		: `http://localhost:${PORT}`

export const API_HOSTNAMES = new Set([
	`api.${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
	`api-staging.${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
	`api.${SHORT_DOMAIN}`,
	`api.localhost:${PORT}`,
])

export const API_DOMAIN = IS_VERCEL_PROD_ENV
	? `https://api.${process.env.NEXT_PUBLIC_APP_DOMAIN}`
	: IS_VERCEL_PREVIEW_ENV
		? `https://api-staging.${process.env.NEXT_PUBLIC_APP_DOMAIN}`
		: `http://api.localhost:${PORT}`
