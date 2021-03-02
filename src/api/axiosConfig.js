import axios from "axios";

const clientAxios = axios.create({
  baseURL: "https://stcf.herokuapp.com/",
});

export default clientAxios;
