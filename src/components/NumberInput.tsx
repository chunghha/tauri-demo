import { invoke } from "@tauri-apps/api";
import { Component, createMemo } from "solid-js"
import { fib, setFib, setSrcNumber, srcNumber } from "../stores/fib";

const NumberInput: Component = () => {

  function getFibonacci(event: any) {
    const sNumber = event.target.value;

    if (sNumber != null) {
      setSrcNumber(sNumber)
    }

    createMemo(async () => {
      const fibPod: Promise<string> = invoke("get_fib", { sNumber: srcNumber() });
      setFib(await fibPod)
    })
  }

  return (
    <div>
      <p class="font-inter">Please enter a number between 1 and 98.</p>
      <input type="text" placeholder="Enter a number" class="my-4 input input-bordered" onChange={getFibonacci} />
      <div class="font-poppins">Fibonacci number:
        <span class="ml-3 font-inter font-bold text-info">{fib().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
      </div>
    </div>
  )
}

export default NumberInput
