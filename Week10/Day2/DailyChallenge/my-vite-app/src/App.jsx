import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import Planner from './components/Planner.jsx';

const App = () => (
  <Provider store={store}>
    <Planner />
  </Provider>
);

export default App;