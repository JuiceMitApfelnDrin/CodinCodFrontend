import { browser } from '$app/environment';

export function isLoggedIn(): string | null {
	if (!browser) {
		return null;
	}
	const cookies = document.cookie.split('; ');

	for (const cookie of cookies) {
		const [key, value] = cookie.split('=');

		if (key == 'token') {
			return value;
		}
	}

	return null;
}
