import React, { Component } from 'react';

class App extends Component {
  state = {
    message: '',
    inputValue: '',
    responseToPost: ''
  };

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:5001/api/hello');
      const data = await response.json();
      this.setState({ message: data.message });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: this.state.inputValue }),
      });
      const data = await response.json();
      this.setState({ responseToPost: data.message });
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={e => this.setState({ inputValue: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default App;