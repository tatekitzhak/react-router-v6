// The action creators
export const increment = () => ({ type: "INC" });
export const decrement = () => ({ type: "DEC" });
export const reset = (value) => ({ type: "RESET", payload: value });
export const addNumber = (num) => {
    return {
        type: "ADD",
        payload: num
    }
}
