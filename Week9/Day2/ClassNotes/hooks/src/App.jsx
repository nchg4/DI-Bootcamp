import { useState } from 'react';
import User from './components/user'
import './user.css'
// import 'tachyons'


function App() {
  //const [state, setState] = useState();
  // const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  // const add = () => {
  //   setCount(count + 1);
  // }

  // const minus = () => {
  //   setCount(count - 1);
  // }
  const fetchdata = async ()=>{
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <>
      <h1>Users</h1>
      <div>
        <button onClick={()=>fetchdata()}>Get Users</button>
      </div>

      {/* <button onClick={() => setCount(count +1)}>+</button>
      <h2>{count}</h2>
      <button onClick={() => setCount(count -1)}>-</button> */}
    </>
  );
}

export default App
