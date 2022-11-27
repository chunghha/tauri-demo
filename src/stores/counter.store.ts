import { createStore } from 'solid-js/store';
import type { Count } from '../models/count';

export const [counter, setCounter] = createStore<Count>({ count: 0 });

export const decreaseCounter = (c: Count) => {
	setCounter('count', () => c.count - 1);
};

export const increaseCounter = (c: Count) => {
	setCounter('count', () => c.count + 1);
};

export const resetCounter = () => {
	setCounter('count', () => 0);
};
