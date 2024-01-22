import axios from "axios";

const API_URL = `https://wallet-gateway-svc-x6fr3lwlgq-nw.a.run.app/v1/authentication/forgot/password/users`;

// '/v1/authentication/forgot/password/users/{userName}'
//  !Forgot password api
const api = async (dataUser, token) => {
  const { email_phone } = dataUser;
  // console.log('email_phone', email_phone)
  let url = `${API_URL}/${email_phone}`
  // console.log('url', url)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.get(url, config);
  // console.log('res/.data', res.data)
  return res.data;
};
const forgotService = {
  api,
};
export default forgotService;
