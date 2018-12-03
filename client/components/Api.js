import axios from "axios";

const baseURL = "http://localhost:3000/api";
const Api = {
  getUsers: () => {
    return axios.get(`${baseURL}/users`);
  },
  getUserDetails: userId => {
    return axios.get(`${baseURL}/user/${userId}`);
  }
};

export default Api;
