import axios from 'axios';

const http = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_BASE_URL
})

http.interceptors.response.use(function (response) {

  return response.data;
}, function (error) {
  const status = error?.response?.status;
  switch (status) {
    case 404:
      // 404 resource not found
      window.location.replace('/404')
      break;
    case 403:
      // 403 forbidden!!
      window.location.replace('/403')
      break;
    default:
      break;
  }
  return Promise.reject(error);
});

export default http;