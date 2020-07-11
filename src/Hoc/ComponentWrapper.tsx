import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { ToastContainer } from "react-toastify";
import Loader from "../components/loader/Loader";
import { Dispatch } from 'redux'

interface OwnProps {
  loader: boolean
}

interface StateFromProps {
  base: OwnProps
}

interface DispatchFromProps {
  // your dispatch type
}


const ComponentCover = (WrappedComponent: React.FC) => {
  return class extends PureComponent<OwnProps> {
    /*------------------------------ state -------------------------------- */
    state = {
      //your state is here
    };
    /*------------------------------ life cycles -------------------------- */
    componentDidMount() {
      // your method for authentication
    }
    /*--------------------------------------------------------------------- */
    render() {
      const { loader } = this.props;
      return (
        <>
          {loader && loader && <Loader />}
          <ToastContainer closeButton={false} style={{ fontSize: "19px" }} />
          <div className="route-wrapper">
            <WrappedComponent {...this.props} />
          </div>
        </>
      );
    }
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  // your actions
});

const mapState = ({ base: { loader } }: StateFromProps) => ({
  loader,
});

const ComponentWrapper = compose(
  connect(mapState, mapDispatch),
  ComponentCover
);

export default ComponentWrapper;
