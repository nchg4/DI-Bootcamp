import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddTodo from './redux/AddTodo';
import TodoList from './redux/TodoList';

const App = () => {
    return (
        <Provider store={store}>
            <div className="app">
                <h1>Todo List</h1>
                <AddTodo />
                <TodoList />
            </div>
        </Provider>
    );
};

export default App;