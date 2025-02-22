
import { useDispatch, useSelector } from "react-redux";
import { DecrementCounter, incrementCounter, ResetCounter } from "../services/actions/CountrActions";


const Counter = () => {
    const count = useSelector((state) =>state.count)
    const dispatch = useDispatch()
    
    const handleIncrement = () => {
     dispatch(incrementCounter())
    }
    const handleDecrement = () => {
     dispatch(DecrementCounter())
    }
    const handleReset = () => {
     dispatch(ResetCounter())
    }
    return (
        <div>
               <h2>Counter App</h2>
            <h3>Count : {count}</h3>
            <button  className="py-2 px-5 bg-purple-800 text-white" onClick={handleIncrement}>Increment</button>
            <button  className="py-2 px-5 bg-blue-800 text-white" onClick={handleDecrement}>Decrement</button>
            <button  className="py-2 px-5 bg-green-800 text-white" onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;