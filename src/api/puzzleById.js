import { BACKEND_URLS } from "utils/constants/urls";
import axios from "axios";

const puzzleById = ({ id }) => {
  if (id) {
    return axios.get(BACKEND_URLS.PUZZLES + "?id=" + id);
  }
  return null;
};

export default puzzleById;
