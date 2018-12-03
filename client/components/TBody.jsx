import React, { Component } from "react";
import uuid from "uuid";

class TBody extends Component {
  render() {
    const { rows, onSelect } = this.props;
    return (
      <tbody>
        {rows != null &&
          rows.map(row => (
            <tr
              onClick={() => onSelect(row)}
              className={"table-row"}
              key={uuid()}
            >
              <td>{row.name}</td>
              <td>{row.username}</td>
              <td>{row.email}</td>
              <td>{row.phone}</td>
              <td>{row.company.name}</td>
            </tr>
          ))}
      </tbody>
    );
  }
}

export default TBody;
