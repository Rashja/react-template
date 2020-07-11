import { combineReducers } from "redux";
import base from "./base";
import login from "./login";
import { ActionTypes } from "./baseReducer";
import { baseType } from "../actions/actionTypes";
import { BaseInitialState } from "./base";
import { LoginInitialState } from "./login";

interface AppReducerType {
  base: BaseInitialState;
  login: LoginInitialState;
}

const appReducer = combineReducers<AppReducerType, ActionTypes>({
  base,
  login,
});

const reducer = (state: AppReducerType | undefined, action: ActionTypes) => {
  if (action.type === baseType.HIDE_LOADING) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default reducer;
