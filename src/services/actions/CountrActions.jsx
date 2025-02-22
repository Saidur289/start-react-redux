import { DECREMENT, INCREMENT,  RESET } from "../constants/CounterConstant"

// eslint-disable-next-line react-refresh/only-export-components
export const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}
export const DecrementCounter = () => {
    return {
        type: DECREMENT,
    }
}
export const ResetCounter = () => {
    return{
        type: RESET
    }
}