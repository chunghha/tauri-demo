import { describe, expect, it } from 'vitest';
import { setUser, user } from './user';

describe('user store', () => {
	it('set ...', () => {
		setUser('admin');
		const userPod = user();
		expect(userPod).toBe('admin');
	});
});
