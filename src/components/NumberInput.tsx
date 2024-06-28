import { invoke } from '@tauri-apps/api'
import type { Component } from 'solid-js'
import { createMemo } from 'solid-js'
import { fib, setFib, setSrcNumber, srcNumber } from '../stores/fib'
import type { SafeAny } from '../types'

const NumberInput: Component = () => {
  function getFibonacci(event: SafeAny) {
    const sNumber = event.target.value

    if (sNumber != null) setSrcNumber(sNumber)

    createMemo(async () => {
      const fibPod: Promise<string> = invoke('get_fib', { sNumber: srcNumber() })
      setFib(await fibPod)
    })
  }

  return (
    <div>
      <p class="font-nunito-sans">Please enter a number between 1 and 98.</p>
      <input type="text" placeholder="Enter a number" class="my-4 input input-bordered" onChange={getFibonacci} />
      <div class="font-tienne">
        Fibonacci number:
        <span class="ml-3 font-nunito-sans font-bold text-info">{fib().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
      </div>
    </div>
  )
}

export default NumberInput
