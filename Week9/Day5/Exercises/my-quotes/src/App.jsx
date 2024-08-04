import { useState, useEffect } from 'react'
import './App.css'
import quotes from './quotes.json'

function App() {
  const [quote, setQuote] = useState({})
  const [mainColor, setMainColor] = useState('#000000')

  const getRandomQuote = () => {
    let newQuote
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)]
    } while (newQuote === quote)
    return newQuote
  }

  const getRandomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`

  const updateQuoteAndColor = () => {
    setQuote(getRandomQuote())
    const newColor = getRandomColor()
    setMainColor(newColor)
    document.body.style.backgroundColor = newColor
  }

  useEffect(() => {
    updateQuoteAndColor()
  }, [])

  return (
    <div className="app">
      <div className="quote-box">
        <h1 style={{ color: mainColor }}>{quote.quote}</h1>
        <p className="author">- {quote.author}</p>
        <button onClick={updateQuoteAndColor}>
          New Quote
        </button>
      </div>
    </div>
  )
}

export default App