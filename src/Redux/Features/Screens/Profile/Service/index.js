import axios from "axios";
import {API_URL_DEV} from '@env';


const api = async (data,token) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.put(`${API_URL_DEV}/auth/profile`,data,config);
  return res;
};
const profileService = {
  api,
};
export default profileService;
