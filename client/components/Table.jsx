import React from "react";
import TBody from "./TBody.jsx";
import Spinner from "./Spinner.jsx";
import ErrorBox from "./ErrorBox.jsx";

class Table extends React.Component {
  render() {
    const { rows, onSelect, loading, failed, onRetry } = this.props;
    return (
      <div className={"table-container"}>
        <table className={"users-table"}>
          <thead>
            <tr>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
            </tr>
          </thead>
          <TBody rows={rows} onSelect={onSelect} />
        </table>
        {loading && <Spinner className={"user-table-spinner"} />}
        {(failed && !loading) && <ErrorBox onRetry={onRetry}/>}
      </div>
    );
  }
}

export default Table;
