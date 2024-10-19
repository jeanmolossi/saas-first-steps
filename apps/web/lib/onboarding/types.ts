export const ONBOARDING = {
	COMPLETED: 'finalizado',
} as const

export type OnboardingStep = (typeof ONBOARDING)[keyof typeof ONBOARDING]
