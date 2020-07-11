import baseReducer from "./baseReducer";

export interface LoginInitialState {
  loggin: boolean;
}

const initialState = { loggin: false };

const login = baseReducer(initialState, {});

export default login;
