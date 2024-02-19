import { createStore } from 'solid-js/store'
import type { Count } from '../models/count'

export const [counter, setCounter] = createStore<Count>({ count: 0 })

export function decreaseCounter(c: Count) {
  setCounter('count', () => c.count - 1)
}

export function increaseCounter(c: Count) {
  setCounter('count', () => c.count + 1)
}

export function resetCounter() {
  setCounter('count', () => 0)
}
