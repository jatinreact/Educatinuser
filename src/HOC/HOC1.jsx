import React, { Fragment, Component } from "react";
import AdminHeader from "../Components/Admin/Common/AdminHeader/AdminHeader";

const HOC = (Wcomponent) => {
  return class extends Component {
    render() {
      return (
        <Fragment>
          <div className="app-container-hoc main-margin">
            <Header {...this.props} />
            <div>
              <Wcomponent {...this.props} />
            </div>
            {/* <Footer {...this.props} /> */}
          </div>
        </Fragment>
      );
    }
  };
};

export default HOC;
