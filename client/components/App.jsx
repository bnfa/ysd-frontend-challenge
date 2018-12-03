import React from "react";
import Api from "./Api";
import Table from "./Table.jsx";
import Modal from "./Modal.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getUsers = this.getUsers.bind(this);
    this.onModalClose = this.onModalClose.bind(this);

    this.state = {
      users: [],
      selectedUser: null,
      fetchingUsers: false,
      fetchingUser: false,
      failedFetchingUsers: false,
      failedFetchingUser: false
    };
  }
  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    this.setState({ fetchingUsers: true });
    Api.getUsers()
      .then(res => {
        this.setState({
          users: res.data,
          fetchingUsers: false,
          failedFetchingUsers: false
        });
      })
      .catch(err => {
        this.setState({
          users: null,
          fetchingUsers: false,
          failedFetchingUsers: true
        });
      });
  }

  getUser(user) {
    this.setState({ fetchingUser: true });
    Api.getUserDetails(user.id)
      .then(res => {
        this.setState({ selectedUser: res.data, fetchingUser: false });
      })
      .catch(err => {
        this.setState({
          selectedUser: null,
          fetchingUser: false,
          failedFetchingUser: true
        });
      });
  }

  onModalClose() {
    this.setState({ selectedUser: null, failedFetchingUser: false });
  }
  render() {
    const { selectedUser } = this.state;
    return (
      <div>
        <Table
          getRows={this.getUsers}
          loading={this.state.fetchingUsers}
          rows={this.state.users}
          onSelect={user => this.getUser(user)}
          onRetry={this.getUsers}
          failed={this.state.failedFetchingUsers}
        />

        <Modal
          onClose={this.onModalClose}
          visible={
            selectedUser !== null ||
            this.state.fetchingUser ||
            this.state.failedFetchingUser
          }
          selectedUser={selectedUser}
          fetchingUser={this.state.fetchingUser}
          failed={this.state.failedFetchingUser}
        />
      </div>
    );
  }
}

export default App;
