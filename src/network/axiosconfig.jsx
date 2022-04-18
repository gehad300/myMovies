import axios from "axios";

export const AxisInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// Add a request interceptor
AxisInstance.interceptors.request.use(
  function (config) {
    //   SHOW LOADER
    console.log("INTERCEPTOR", config);
    // config.url = config.url + ;
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
AxisInstance.interceptors.response.use(
  function (response) {
    // HIDE LOADER
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // HIDE LOADER
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
