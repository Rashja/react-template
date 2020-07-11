/*-------------------------- base ---------------------- */
export enum baseType {
  SHOW_LOADING = "SHOW_LOADING",
  HIDE_LOADING = "HIDE_LOADING",
  SIGN_OUT = "SIGN_OUT",
  SHOW_TOASTIFY = "SHOW_TOASTIFY",
}

export interface showLoadingType {
  type: baseType.SHOW_LOADING;
}
export interface hideLoadingType {
  type: baseType.HIDE_LOADING;
}
export interface showToastifyType {
  type: baseType.SHOW_TOASTIFY;
}
export interface signOutType {
  type: baseType.SIGN_OUT;
}

export type BaseActionTypes =
  | showLoadingType
  | hideLoadingType
  | showToastifyType
  | signOutType;
/*----------------------------------------------------- */
