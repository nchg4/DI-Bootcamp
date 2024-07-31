import React, { Component } from 'react';
import './App.css';

class Child extends Component {
  componentWillUnmount() {
    alert('Component will unmount');
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  toggleShow = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="App">
        {this.state.show && <Child />}
        <button onClick={this.toggleShow}>Delete</button>
      </div>
    );
  }
}

export default App;