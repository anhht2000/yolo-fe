export const API = {
  BASE_URL: process.env.REACT_APP_BASE_URL,
  BASE_URL_IMAGE: process.env.REACT_APP_BASE_IMAGE_URL,
  UPLOADFILE: "/upload",
  UPLOAD_MULTIPLEFILE: "/upload-multiple",

  //auth
  LOGIN: "user/auth/login",
  REGISTER: "user/auth/register",
  FORGOTPASSWORD: "",
  CONFIRMPASSWORD: "",
  GETHOME: "/admin/product/show",
  PRODUCT: "/admin/product",

  BOAT_ROUTE: "boat-routes",
  SEARCH_BOAT: "search",
  BOOKING_SEAT: "seats",
  CAL_PRICE: "calculator-price",
  BOOKING: "",
};
