import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(null)
  const [operation, setOperation] = useState('+')

  const calculateResult = () => {
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)

    switch (operation) {
      case '+':
        setResult(n1 + n2)
        break
      case '-':
        setResult(n1 - n2)
        break
      case '*':
        setResult(n1 * n2)
        break
      case '/':
        setResult(n2 !== 0 ? n1 / n2 : 'Not divisible by zero')
        break
      default:
        setResult('Invalid operation')
    }
  }

  const clearAll = () => {
    setNum1('')
    setNum2('')
    setResult(null)
    setOperation('+')
  }

  return (
    <div className="calculator">
      <h1> Calculator </h1>
      <input
        id="num1"
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <label htmlFor="operation">Operation:</label>
      <select id="operation" value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">x</option>
        <option value="/">÷</option>
      </select>
      <input
        id="num2"
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div className="button-group">
        <button onClick={calculateResult}>Calculate</button>
        <button onClick={clearAll} className="clear-button">AC</button>
      </div>
      {result !== null && (
        <p className={parseFloat(result) < 0 ? 'result-negative' : 'result-positive'}>
          Result: {result}
        </p>
      )}
    </div>
  )
}

export default App