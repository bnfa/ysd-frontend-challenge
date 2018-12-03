import React from "react";

class ErrorBox extends React.Component {
  render() {
    const { onRetry } = this.props;
    return (
      <div className={"flex-column center-center error-box"}>
        <p>
          Something went wrong while we tried to fetch your data, Plase try
          again later.
        </p>
        {onRetry && (
          <button className="btn btn-primary" onClick={this.props.onRetry}>
            Retry
          </button>
        )}
      </div>
    );
  }
}

export default ErrorBox;
