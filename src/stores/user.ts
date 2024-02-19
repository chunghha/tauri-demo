import { createSignal } from 'solid-js'
import { EMPTY_STRING } from '../constants'

export const [user, setUser] = createSignal<string>(EMPTY_STRING)
