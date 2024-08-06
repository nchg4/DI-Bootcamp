import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../redux/todoSlice'; // Import actions

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(todo.name);

    const handleEdit = () => {
        if (newName.trim()) {
            dispatch(editTodo(todo.id, newName));
            setIsEditing(false);
        }
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <button onClick={handleEdit}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            ) : (
                <div>
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.name}
                    </span>
                    <button onClick={() => dispatch(toggleTodo(todo.id))}>
                        {todo.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default TodoItem;
