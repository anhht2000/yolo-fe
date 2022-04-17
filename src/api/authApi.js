import axiosClient from "./axiosClient";

const authApi = {
  login: (data) => {
    const url = "/login";
    const dt = new FormData();
    dt.append("email", data.email);
    dt.append("password", data.password);

    return axiosClient.post(url, dt);
  },
  signUp: (data) => {
    const url = "/user/signup";
    const dt = {};
    dt.email = data.email;
    dt.phone = data.phone;
    dt.firstName = data.firstname;
    dt.lastName = data.lastname;
    dt.passWord = data.password;
    dt.address = data.address;

    return axiosClient.post(url, JSON.stringify(dt));
  },
  forget: (data) => {
    const url = "/user/resetPassWord";
    // const dt = new FormData();
    // dt.append("email", data.email);

    return axiosClient.post(url, data, { params: { email: data.email } });
  },
  changePass: (data, token) => {
    const url = "/user/confirmResetPassWord";

    return axiosClient.post(url, data, { headers: { resetPassowrdToken: token }, params: { password: data.password } });
  },
};

export default authApi;
