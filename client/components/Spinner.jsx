import React from "react";

class Spinner extends React.Component {
  render() {
    const { className, spinnerType } = this.props;
    if (spinnerType === "yousee") {
      return (
        <div className={`ys-spinner ${className}`}>
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      );
    } else {
      return (
        <div className={`spinner-container ${className}`}>
          <div className={"spinner"} />
        </div>
      );
    }
  }
}

export default Spinner;
