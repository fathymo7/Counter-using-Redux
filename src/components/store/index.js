import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (counter.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (counter.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
