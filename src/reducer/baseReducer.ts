import { BaseActionTypes } from "../actions/actionTypes";
import { BaseInitialState } from "./base";
import { LoginInitialState } from "./login";

export type InitialStates = BaseInitialState | LoginInitialState;
export type ActionTypes = BaseActionTypes;

export default function baseReducer(initialState: InitialStates, methods: any) {
  return (state = initialState, action: ActionTypes) => {
    // if the action type is used for a method name then this be a reference to it.
    const method = methods[action.type];
    // if the action type "method" const is undefined or the action is an error
    // return the state.
    if (!method) {
      return state;
    }

    // if there is a valid method call it with the state and action objects.
    return method(state, action);
  };
}
