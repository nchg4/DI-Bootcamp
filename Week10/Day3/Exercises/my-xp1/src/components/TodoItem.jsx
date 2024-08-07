import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../redux/todoSlice'; // Import actions

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.name}
            </span>
            <button onClick={() => dispatch(toggleTodo(todo.id))}>
                {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        </div>
    );
};

export default TodoItem;