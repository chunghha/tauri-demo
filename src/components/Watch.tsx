import { DateTime } from 'luxon'
import type { Component } from 'solid-js'
import { createSignal, onCleanup } from 'solid-js'

const Watch: Component = () => {
  const [watch, setWatch] = createSignal(DateTime.now())
  const interval = setInterval(() => setWatch(() => DateTime.now()), 1000)

  onCleanup(() => clearInterval(interval))

  return <div class="font-fira-mono ml-2 mr-4 text-xl text-secondary">{watch().toFormat('HH mm')}</div>
}

export default Watch
