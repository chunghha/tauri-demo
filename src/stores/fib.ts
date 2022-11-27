import { createSignal } from 'solid-js';
import { EMPTY_STRING } from '../constants';

export const [fib, setFib] = createSignal<string>(EMPTY_STRING);
export const [srcNumber, setSrcNumber] = createSignal<string>(EMPTY_STRING);
