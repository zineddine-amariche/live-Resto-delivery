import axios from "axios";
import {API_URL_DEV} from '@env';


//  !Login user api
const api = async (data) => {

  const res = await axios.post(`${API_URL_DEV}/auth/signin`,data);
  return res;
};
const loginService = {
  api,
};
export default loginService;
