import { DECREMENT, INCREMENT,  RESET } from "../constants/CounterConstant"

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