import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ageUpAsync, ageDownAsync } from '../redux/ageSlice';
import logo from '../assets/react.svg';
import './AgeCounter.css'; // Import the CSS file for styling

function AgeCounter() {
    const dispatch = useDispatch();
    const { age, loading } = useSelector((state) => state.age);

    return (
        <div className="age-counter">
            <h1>Age: {age}</h1>
            {loading && (
                <div className="loading-overlay">
                    <img src={logo} alt="Loading..." />
                    <p>Loading...</p>
                </div>
            )}
            <button onClick={() => dispatch(ageUpAsync())}>Age Up</button>
            <button onClick={() => dispatch(ageDownAsync())}>Age Down</button>
        </div>
    );
}

export default AgeCounter;