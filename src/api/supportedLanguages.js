import { BACKEND_URLS } from "utils/constants/urls";
import axios from "axios";

const supportedLanguages = () => {
  return axios.get(BACKEND_URLS.LANGUAGES);
};

export default supportedLanguages;
