import React from 'react'
import ComponentWrapper from "../../Hoc/ComponentWrapper";
import useRedux from "../../customHooks/useRedux";
import { showToastify } from "../../actions/base";

const Home: React.FC = () => {
  /*-------------------------- use redux ---------------------- */
  const UseRedux = useRedux();
  /*----------------------------------------------------------- */
  return (
    <div>
      this is from Home
    </div>
  )
}

export default ComponentWrapper(Home);

