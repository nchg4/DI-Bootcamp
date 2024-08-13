import React from 'react';
import PostList from './components/PostList';
import './App.css';

const App = () => {
  return (
      <div className="App">
          <h1>Posts</h1>
          <PostList /> 
      </div>
  );
};

export default App;

