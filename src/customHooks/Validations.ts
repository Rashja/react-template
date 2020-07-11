import { useCallback } from "react";

export default function useValidations() {
  return {
    mobileValidate: useCallback((_mobileNumber: string): boolean => {
      if (_mobileNumber.match(/^[0][1-9]\d{9}$|^[1-9]\d{9}$/)) {
        return true;
      }
      return false;
    }, []),
    emailValidate: useCallback((_email: string): boolean => {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(_email)) {
        return true;
      }
      return false;
    }, []),
  };
}
