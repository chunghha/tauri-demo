import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { useUserStore } from '../store/user';

describe('user store', () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});

	it('set ...', () => {
		const userPod = useUserStore();

		expect(userPod.user).toBe('');
		userPod.set('admin');
		expect(userPod.user).toBe('admin');
	});
});
