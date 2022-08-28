import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { EMPTY_STRING } from '../constants';
import { useErrorStore } from './error';

describe('error store', () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});

	it('set ...', () => {
		const errorPod = useErrorStore();

		expect(errorPod.error).toBe(EMPTY_STRING);
		errorPod.set('this is an error');
		expect(errorPod.error).toBe('this is an error');
	});
});
