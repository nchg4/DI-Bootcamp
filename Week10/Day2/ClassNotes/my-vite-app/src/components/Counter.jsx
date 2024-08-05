import {connect} from 'react-redux'
import { increment, decrement } from '../redux/actions'; // Import action creators

const Counter = (props) => {
    const { count, increment, decrement } = props; // Destructure props

    return(
        <>
        <h2>Redux Counter</h2>
        <button onClick={increment}>+</button> {/* Dispatch increment */}
        <span>{count}</span>
        <button onClick={decrement}>-</button> {/* Dispatch decrement */}
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    }
}

const mapDispatchToProps = {
    increment, // Automatically binds the action creator
    decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);