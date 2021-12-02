import axios from "axios";

export const findMedian = (number: number) => {
  return axios.post("http://localhost:8000/calculate/", { number });
};
