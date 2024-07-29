import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

////this is a class
class Component {
  constructor(val) {
    this.name = '...'
    this.value = val
  }
  getName() {
    return this.name
  }
  setValue(val) {
    this.value = val
  }
}

class SubComponent extends Component {
  constructor(){
    super()
    this.param = '...'
  }
  setParam(val) {
    this.param = val
  }
  getName() {
    return this.name = 'my name'
  }
}