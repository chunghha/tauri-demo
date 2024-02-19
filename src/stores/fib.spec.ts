import { describe, expect, it } from 'vitest'
import { fib, setFib, setSrcNumber, srcNumber } from './fib'

describe('fib store', () => {
  it('setFib ...', () => {
    setFib('10946')
    const fibPod = fib()
    expect(fibPod).toBe('10946')
  })

  it('setSrcNumber ...', () => {
    setSrcNumber('21')
    const srcNumberPod = srcNumber()
    expect(srcNumberPod).toBe('21')
  })
})
