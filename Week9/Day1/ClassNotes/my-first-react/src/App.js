import './App.css';
import Hello from "./Hello.js";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello..
        <Hello title="my title 1"/>
        <Hello title="my title 2"/>

      </header>
    </div>
  );
}

export default Hello;
