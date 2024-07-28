import './App.css';
import Users from './components/user';



function App() {
  return (
    <div>
      <h1>
        Users
      </h1>
      {Users.map((item) =>{
        return <Users key={item.id} user={item}/>
      })}
    </div>
  )
}

export default App;
