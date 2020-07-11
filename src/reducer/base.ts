import baseReducer from "./baseReducer";
import { baseType, BaseActionTypes } from "../actions/actionTypes";

export interface BaseInitialState {
  loader: boolean;
}

export const initialState = {
  loader: false,
};

const loading = baseReducer(initialState, {
  [baseType.SHOW_LOADING](state: BaseInitialState, action: BaseActionTypes) {
    return { loader: true };
  },

  [baseType.HIDE_LOADING](state: BaseInitialState, action: BaseActionTypes) {
    return { loader: false };
  },
});

export default loading;
