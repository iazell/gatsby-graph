import axios from "axios"

axios.defaults.baseURL = "http://localhost:8001"
axios.defaults.headers.common = {
  Accept: "application/json, application/xml, text/play, text/html, *.*",
  "Content-Type": "application/json",
}

const GRAPH_API_PATH = "/graph"

export const getGraphData = () =>
  axios
    .get(`${GRAPH_API_PATH}/data`)
    .then((res) => (res && res.data ? res.data : undefined))
