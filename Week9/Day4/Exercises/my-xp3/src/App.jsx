import React from 'react';
import './App.css';
import Example1 from './components/ex1';
import Example2 from './components/ex2';
import Example3 from './components/ex3';

function App() {
  return (
    <div className="App">
      <h1>My Information</h1>
      <Example1 />
      <Example2 />
      <Example3 />
    </div>
  );
}

export default App;
