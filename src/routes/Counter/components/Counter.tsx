import React from 'react'

interface CounterProps {
  counter: number
  increment: () => void
  doubleAsync: () => void
}

export const Counter = ({ counter, increment, doubleAsync }: CounterProps) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Counter: {counter}</h2>
    <button className="btn btn-primary" onClick={increment}>
      Increment
    </button>
    {' '}
    <button className="btn btn-secondary" onClick={doubleAsync}>
      Double (Async)
    </button>
  </div>
)

export default Counter
