import type { Component } from 'solid-js'
import NumberInput from '../components/NumberInput'

const Fib: Component = () => {
  return (
    <div class="min-h-screen p-4 ">
      <div class="font-nunito-sans flex items-center justify-center w-full">
        <NumberInput />
      </div>
    </div>
  )
}

export default Fib
