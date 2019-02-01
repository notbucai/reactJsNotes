import axios from 'axios';

const config = {
  baseURL: "http://easy-mock.ncgame.cc/mock/5c5298aec1338b1c50916de0/jianshu/",
  timeout: 1000,
  withCredentials: false, // 默认的
};

const _axios = axios.create(config);

export const x_get = (url, config = {}) => {
  return new Promise((resolve, reject) => {
    _axios.get(url, config).then((res) => {
      resolve([res, null]);
    }).catch((error) => {
      reject(error);
    });
  }).catch((error) => {
    return [null, error];
  });
}

export const x_post = (url, data = null, config = {}) => {
  return new Promise((resolve, reject) => {
    _axios.post(url, data, config).then((res) => {
      resolve([res, null]);
    }).catch((error) => {
      reject(error);
    });
  }).catch((error) => {
    return [null, error];
  });
}

export default _axios;