import axios from "axios";

const serverUrl = "http://localhost:8080/eatgo/";

async function get(endpoint, params = "") {
  return axios.get(serverUrl + endpoint + "/" + params);
}

async function post(endpoint, data) {
  const bodyData = JSON.stringify(data);

  return axios.post(serverUrl + endpoint, bodyData, {
    "Content-Type": "application/json",
  });
}
