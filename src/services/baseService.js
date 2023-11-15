import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const apiMobile = axios.create({
  baseURL: 'https://apiforlearning.zendvn.com/api/',
  headers: {'X-Custom-Header': 'foobar'},
});

// Add a response interceptor
apiMobile.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
