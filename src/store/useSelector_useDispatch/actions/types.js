export const incrementCounter = payload => ({
    type: "INCREMENT",
    payload: payload
  });


  export function addAction(number) {
    return {
      type: types.counter.ADD,
      payload: number,
    };
  }