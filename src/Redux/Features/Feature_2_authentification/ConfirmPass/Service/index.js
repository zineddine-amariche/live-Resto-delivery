import axios from "axios";

const API_URL = `https://wallet-gateway-svc-x6fr3lwlgq-nw.a.run.app/v1/authentication/forgot/confirm/new/password/users`;

// /v1/authentication/forgot/confirm/new/password/users
// ?exempl
// {
//   "userName": "john.doe@gmail.com",
//   "userPassword": "M0oiuyt12@uiU",
//   "confirmationCode": "234564"
// }
//  !confirm password api
const api = async (dataUser, token) => {
  // const { code, userName, userPassword } = dataUser;
  // console.log(dataUser);
  // let object = {
  //   userName: userName,
  //   userPassword: userPassword,
  //   confirmationCode: code,
  // };
  let url = `${API_URL}`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.post(url, dataUser, config);
  // console.log('res.data', res.data)
  return res.data;
};
const confirmCodeService = {
  api,
};
export default confirmCodeService;
