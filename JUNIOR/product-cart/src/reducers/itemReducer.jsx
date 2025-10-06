import { useReducer } from "react";

/**
 * interface State{
 *  amount: number
 * }
 *
 * interface Action{
 *  type: "increment" : "decrement" | string
 * }
 */

export default function itemReducer(state, action) {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
}
