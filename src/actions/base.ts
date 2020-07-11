import { toast } from "react-toastify";
import {
  baseType,
  showLoadingType,
  hideLoadingType,
  signOutType,
  showToastifyType,
} from "./actionTypes";
/*--------------------------- toastify ---------------------- */
export const showToastify = (text: string, mode: string): showToastifyType => {
  if (mode === "success") {
    toast.success(text, {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "toastify",
    });
  }
  if (mode === "error") {
    toast.error(text, {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "toastify",
    });
  }
  if (mode === "warning") {
    toast.warn(text, {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "toastify",
    });
  }
  if (mode === "info") {
    toast.info(text, {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "toastify",
    });
  }
  return {
    type: baseType.SHOW_TOASTIFY,
  };
};
/*--------------------------- show loading ------------------ */
export const showLoading = (): showLoadingType => ({
  type: baseType.SHOW_LOADING,
});
/*--------------------------- hide loading ------------------ */
export const hideLoading = (): hideLoadingType => ({
  type: baseType.HIDE_LOADING,
});
/*---------------------------- sign out --------------------- */
export const signOut = (): signOutType => ({
  type: baseType.SIGN_OUT,
});
