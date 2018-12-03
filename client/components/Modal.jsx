import React from "react";
import Spinner from "./Spinner.jsx";
import SVGIcon from "./SVGIcon";
import ErrorBox from "./ErrorBox.jsx";

class Modal extends React.Component {
  render() {
    const { visible, selectedUser, onClose, fetchingUser, failed } = this.props;
    return (
      <div
        onClick={onClose}
        className={`modal_backdrop ${visible ? "modal__visible" : ""}`}
      >
        <div className={`modal`}>
          {fetchingUser && <Spinner spinnerType={"yousee"} />}
          {(selectedUser || failed) && (
            <div>
              <div className={"modal-header"}>
                <h3 className={"modal-title"}>User Details</h3>
                <button
                  className={"btn btn-small-round"}
                  onClick={this.onModalClose}
                >
                  x
                </button>
              </div>

              <div className={"modal-body"}>
                {selectedUser && (
                  <div className={"flex-row center-center"}>
                    <div
                      className={"name-section flex-column center-center"}
                      style={{ width: "40%" }}
                    >
                      <SVGIcon name="avatar" width={100} />
                      <span style={{ fontSize: 18 }}>{selectedUser.name}</span>
                      <a
                        href={`http://${selectedUser.website}`}
                        target="_blank"
                      >
                        {selectedUser.website}
                      </a>
                    </div>
                    <div style={{ width: "60%" }}>
                      <div className={"flex-row user-row start-center"}>
                        <SVGIcon
                          name="home"
                          width={25}
                          className={"details-icon"}
                        />
                        <span>
                          <b>Address:</b> {selectedUser.address.suite},{" "}
                          {selectedUser.address.city},{" "}
                          {selectedUser.address.zipcode},{" "}
                          {selectedUser.address.street}
                        </span>
                      </div>

                      <div className={"flex-row user-row start-center"}>
                        <SVGIcon
                          name="work"
                          width={25}
                          className={"details-icon"}
                        />
                        <span>
                          <b>Company: </b>
                          {selectedUser.company.name}, {selectedUser.company.bs}
                        </span>
                      </div>

                      <div className={"flex-row user-row start-center"}>
                        <SVGIcon
                          name="mail"
                          width={25}
                          className={"details-icon"}
                        />
                        <span>
                          <b>Email: </b>
                          {selectedUser.email}
                        </span>
                      </div>
                      <div className={"flex-row user-row start-center"}>
                        <SVGIcon
                          name="phone"
                          width={25}
                          className={"details-icon"}
                        />
                        <span>
                          <b>Phone No.: </b>
                          {selectedUser.phone}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                {failed && <ErrorBox />}
              </div>

              <div className={"modal-footer flex-row end-center"}>
                <button
                  className={"btn btn-primary"}
                  onClick={this.onModalClose}
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Modal;
