import axios from "axios";
import { delay } from "../helpers/delay";

export const service = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

service.interceptors.request.use((request) => request);
service.interceptors.response.use(async (response) => {
  // await delay();
  return response;
});
