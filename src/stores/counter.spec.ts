import { beforeEach, describe, expect, it } from 'vitest';
import { counter, decreaseCounter, increaseCounter, resetCounter } from './counter.store';

describe('counter store', () => {
	beforeEach(() => {
		resetCounter();
	});

	it('decreases ...', () => {
		const c = counter;
		expect(c.count).toBe(0);
		decreaseCounter(c);
		expect(c.count).toBe(-1);
	});

	it('increases ...', () => {
		const c = counter;
		expect(c.count).toBe(0);
		increaseCounter(c);
		expect(c.count).toBe(1);
	});
});
