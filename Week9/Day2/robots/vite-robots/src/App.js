import React from "react";
import User from "./components/User";
import "./App.css";
import "tachyons";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchValue: ""
    };
  }

  fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      this.setState({ users: data });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount = () =>{
    console.log('componentDidMont');
    this.fetchData();
  }

  handleSearch = (e) => {
    this.setState({ searchValue: e.target.value })
  };

  render() {
    const filteredUsers = this.state.users.filter(user =>
      user.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
    );

    return (
      <div className="container">
        <h1 className="tc">Users</h1>
        <button onClick={this.fetchData}>Get Users</button>
        <input onChange={this.handleSearch} placeholder="search" />
        <div className="user-list">
          {filteredUsers.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;