import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUserWithPrepare } from './userSlice';

const Users = () => {
    const users = useSelector((state) => state.users.users);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleAddUser = () => {
        if (name && email) {
            dispatch(addUserWithPrepare(name, email)); // Use addUserWithPrepare
            setName('');
            setEmail('');
        }
    };

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
            <h2>Add User</h2>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Name" 
            />
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" 
            />
            <button onClick={handleAddUser}>Add User</button>
        </div>
    );
};

export default Users;