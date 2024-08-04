import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [name, setName] = useState('Dan')
  const nameRef = useRef('Dan Ref')

  const changeName = () => {
    setName('Netanel')
    console.log('name =>', name);
  }
  const changeNameRef = () => {
    nameRef.current = "Netanel Ref"
    console.log('nameRef =>', nameRef.current);
  }

  useEffect(() => {
    if (count === 13) {
      changeNameRef()
      // Force re-render to show the updated ref value
      setCount(count => count)
    }
  }, [count])

  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <>
      <div className='card'>
        <h1> {name} </h1>
        <button onClick={() => changeName()}>Change Name</button>
      </div>
      <div className='card'>
        <h1> {nameRef.current} </h1>
        <button onClick={() => changeNameRef()}>Change Name</button>
      </div>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          {" "}
          Add {count}
        </button>
      </div>
      <div>
        <button onClick={handleRefresh}>Refresh Page</button>
      </div>
    </>
  )
}
export default App