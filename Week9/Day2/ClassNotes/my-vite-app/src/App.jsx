import React from 'react';
import './App.css'
import ShowName from './assets/ShowName';

class App extends React.Component{
  constructor(){
    super();
    this.arr = [];
    /*this.obj ={
      name: 'John',
      age: 20
    };*/
    this.state = {
      name: 'John',
      age: 20
    }
  }

  changeUser = () => {
    this.setState({name: 'Anne', age: 25})
  }

  render() {
    return(
      <> 
      <h1>Hi, {this.state.name}, your age is {this.state.age}</h1>
      <h1>
        <ShowName myname={this.state.name}/>
        <button onClick={this.changeUser}>Change User</button>
      </h1>
      </>
    )
  }
}

export default App;