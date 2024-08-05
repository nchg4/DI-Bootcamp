import { useState } from 'react'
import Counter from './components/Counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Counter count={count} />
     <button onClick={() => setCount(count + 1)}>+</button>
     {count}
     <button onClick={() => setCount(count - 1)}>-</button>
    </>
  )
}

export default App