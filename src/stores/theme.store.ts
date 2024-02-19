import { createSignal } from 'solid-js'

export const [isDark, setIsDark] = createSignal<boolean>(false)

export const toggleTheme = () => setIsDark(!isDark())
