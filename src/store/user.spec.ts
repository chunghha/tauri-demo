import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { EMPTY_STRING } from '../constants';
import { useUserStore } from '../store/user';

describe('user store', () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});

	it('set ...', () => {
		const userPod = useUserStore();

		expect(userPod.user).toBe(EMPTY_STRING);
		userPod.set('admin');
		expect(userPod.user).toBe('admin');
	});
});
