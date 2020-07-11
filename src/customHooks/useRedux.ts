import { useDispatch, useSelector } from "react-redux";
import { loaderSelector } from "../reducer/selectors";
import { Dispatch } from "redux";

const useRedux = () => {
  /*------------------------- use dispatch ------------------ */
  const dispatch = useDispatch<Dispatch>();
  const loader = useSelector(loaderSelector);
  /*--------------------------------------------------------- */
  return {
    dispatch,
    loader,
  };
};

export default useRedux;
