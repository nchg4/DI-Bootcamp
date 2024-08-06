import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useRef, useState } from 'react';

const Counter = (props) => {
    const count = useSelector(state => state.counterReducer)
    const dispatch = useDispatch();
    const numRef = useRef();
    const [incrementAmount, setIncrementAmount] = useState(0);

    const addNum = () => {
        const num = numRef.current.value;
        dispatch(incrementByAmount(Number(num)));
    }

    return (
        <>
        <h2>Count: {count}</h2>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <div>
            <h2>Increment By Number</h2>
            <input type="number" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
            <button onClick={() => addNum()}>Add Number</button>
        </div>
        <div>
            <h2>Increment By 2 Numbers</h2>
            <input ref={numRef} /> <input ref={numRef} />
            <button onClick={() => dispatch(incrementByAmount(2))}>Add 2 numbers</button>
        </div>
        </>
    );
};
export default Counter;