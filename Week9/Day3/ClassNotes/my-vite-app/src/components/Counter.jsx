import { useState } from 'react'
import Button from './Button'

const Counter = (props) => {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }

if(count > 5) throw new Error("Count is less than 5")

    
    return (
        <>
            <h2>Counter</h2>
            <p>{count}</p>
            <Button onClick={incrementCount}>+</Button>
        </>
    );
};

export default Counter;



